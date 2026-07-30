import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

// The products data is imported from @/data/products
// But sitemap can't use async imports in Next.js easily, so just list static routes

const baseUrl = 'https://minglangpackaging.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;

  const staticPaths = ['', '/products', '/custom-oem', '/about', '/contact', '/faq'];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : 0.8,
      });
    }
  }

  return entries;
}
