import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['zh-CN', 'zh-TW', 'en'],
  defaultLocale: 'zh-CN',
  localeDetection: true,
  localePrefix: 'always',
});

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
