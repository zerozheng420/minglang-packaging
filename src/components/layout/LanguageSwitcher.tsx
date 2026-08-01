'use client';

import { usePathname, Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { clsx } from 'clsx';

const languages = [
  { code: 'zh-CN', label: '简', fullLabel: '简体中文' },
  { code: 'zh-TW', label: '繁', fullLabel: '繁體中文' },
  { code: 'en', label: 'EN', fullLabel: 'English' },
] as const;

export default function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={pathname}
          locale={lang.code}
          aria-label={lang.fullLabel}
          className={clsx(
            'px-2.5 py-1 text-xs font-medium rounded-full transition-colors',
            currentLocale === lang.code
              ? 'bg-gold-500 text-white'
              : light
                ? 'text-cream/80 hover:text-white hover:bg-cream/10'
                : 'text-neutral-500 hover:text-gold-600 hover:bg-gold-50',
          )}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
}
