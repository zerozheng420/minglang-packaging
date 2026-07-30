import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.resolve(__dirname, '../public/images');
const QUALITY_JPEG = 80;
const QUALITY_WEBP = 75;
const SKIP_SIZE_BYTES = 50 * 1024; // 50KB

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const PNG_TO_JPG_MAP = {}; // tracks old → new relative paths for reference updates

function getAllImageFiles(dir) {
  const files = [];
  function walk(d) {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(d, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (IMAGE_EXTENSIONS.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  walk(dir);
  return files;
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const dir = path.dirname(filePath);
  const baseName = path.basename(filePath, ext);
  const stat = fs.statSync(filePath);
  const originalSize = stat.size;

  const relPath = path.relative(IMAGES_DIR, filePath);

  if (originalSize < SKIP_SIZE_BYTES) {
    return { file: relPath, skipped: true, originalSize, newSizes: {} };
  }

  const newSizes = {};

  try {
    if (ext === '.png') {
      // Convert PNG → JPG at quality 80
      const jpgPath = path.join(dir, `${baseName}.jpg`);
      const jpgBuffer = await sharp(filePath)
        .jpeg({ quality: QUALITY_JPEG, mozjpeg: true })
        .toBuffer();
      // Only write if the new file doesn't exist or we want to overwrite
      fs.writeFileSync(jpgPath, jpgBuffer);
      newSizes['.jpg (from PNG)'] = jpgBuffer.length;

      // Create WebP copy at quality 75
      const webpPath = path.join(dir, `${baseName}.webp`);
      const webpBuffer = await sharp(filePath)
        .webp({ quality: QUALITY_WEBP })
        .toBuffer();
      fs.writeFileSync(webpPath, webpBuffer);
      newSizes['.webp'] = webpBuffer.length;

      // Delete original PNG
      fs.unlinkSync(filePath);
      newSizes['.png (removed)'] = -originalSize;

      // Track mapping
      const relDir = path.relative(IMAGES_DIR, dir);
      const oldRel = relDir ? `${relDir}/${path.basename(filePath)}` : path.basename(filePath);
      const newRel = relDir ? `${relDir}/${baseName}.jpg` : `${baseName}.jpg`;
      PNG_TO_JPG_MAP[oldRel] = newRel;
    } else {
      // JPEG: re-encode at quality 80
      const jpgBuffer = await sharp(filePath)
        .jpeg({ quality: QUALITY_JPEG, mozjpeg: true })
        .toBuffer();
      // Replace original with optimized version
      fs.writeFileSync(filePath, jpgBuffer);
      newSizes['.jpg (re-encoded)'] = jpgBuffer.length;

      // Create WebP copy at quality 75
      const webpPath = path.join(dir, `${baseName}.webp`);
      const webpBuffer = await sharp(filePath)
        .webp({ quality: QUALITY_WEBP })
        .toBuffer();
      fs.writeFileSync(webpPath, webpBuffer);
      newSizes['.webp'] = webpBuffer.length;
    }
  } catch (err) {
    console.error(`  ERROR processing ${relPath}: ${err.message}`);
    return { file: relPath, skipped: false, originalSize, newSizes: {}, error: err.message };
  }

  return { file: relPath, skipped: false, originalSize, newSizes };
}

async function main() {
  console.log('Scanning for images in public/images/ ...\n');
  const allFiles = getAllImageFiles(IMAGES_DIR);
  console.log(`Found ${allFiles.length} image files.\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  let skipped = 0;
  let processed = 0;
  let errors = 0;

  for (const filePath of allFiles) {
    const result = await optimizeImage(filePath);

    if (result.skipped) {
      console.log(`  SKIP (under 50KB): ${result.file} (${formatSize(result.originalSize)})`);
      skipped++;
      totalBefore += result.originalSize;
      totalAfter += result.originalSize;
    } else if (result.error) {
      errors++;
      totalBefore += result.originalSize;
    } else {
      processed++;
      totalBefore += result.originalSize;
      const newTotal = Object.entries(result.newSizes).reduce((sum, [, size]) => sum + Math.max(0, size), 0);
      totalAfter += Math.max(0, newTotal);
      const savings = result.originalSize - newTotal;
      const pct = ((savings / result.originalSize) * 100).toFixed(0);
      const parts = Object.entries(result.newSizes)
        .filter(([, s]) => s > 0)
        .map(([label, s]) => `${label}: ${formatSize(s)}`)
        .join(', ');
      console.log(`  OK: ${result.file}  ${formatSize(result.originalSize)} → ${parts}  (${pct}% saved)`);
    }
  }

  console.log('\n========================================');
  console.log('SUMMARY');
  console.log('========================================');
  console.log(`  Processed: ${processed}`);
  console.log(`  Skipped (under 50KB): ${skipped}`);
  console.log(`  Errors: ${errors}`);
  console.log(`  Total before: ${formatSize(totalBefore)}`);
  console.log(`  Total after:  ${formatSize(totalAfter)}`);
  console.log(`  Saved:        ${formatSize(totalBefore - totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`);

  // Output PNG → JPG mapping for reference updates
  const mappingEntries = Object.entries(PNG_TO_JPG_MAP);
  if (mappingEntries.length > 0) {
    console.log('\n========================================');
    console.log('PNG → JPG MAPPING (update these references)');
    console.log('========================================');
    for (const [oldPath, newPath] of mappingEntries) {
      console.log(`  /images/${oldPath}  →  /images/${newPath}`);
    }

    // Write mapping to a JSON file for easy processing
    const mapFile = path.resolve(__dirname, 'png-to-jpg-map.json');
    fs.writeFileSync(mapFile, JSON.stringify(PNG_TO_JPG_MAP, null, 2));
    console.log(`\n  Mapping saved to scripts/png-to-jpg-map.json`);
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
