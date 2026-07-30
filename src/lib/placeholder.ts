// Generate a tiny base64 placeholder for images
// Use a simple 8x8 pixel gradient as fallback when real blur data isn't available

export function getImagePlaceholder(width = 8, height = 6): string {
  // Returns a tiny PNG data URL that Next.js can use as blurDataURL
  // Simple grey gradient placeholder
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXUlEQVQImWNgYGD4z0ABYKSX4tevXzM8f/6c4efPnwz///9nePv2LcOTJ08YTp48yXD48GGGPXv2MOzYsYNh06ZNDOvXr2dYuXIlw/LlyxmWLVvGsGjRIoaFCxcyzJ8/n2Hu3LkMc+bMYZg9ezYDAwCbNBGMqBFFsAAAAABJRU5ErkJggg==';
}

// Static WebP blur placeholder for use as blurDataURL in next/image
export const BLUR_PLACEHOLDER = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoIAAUADMDOJQAA' + '//2Q==';
