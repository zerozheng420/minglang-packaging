'use client';

import { usePathname, Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { clsx } from 'clsx';

const languages = [
  { code: 'zh-CN', label: '简', fullLabel: '简体中文' },
  { code: 'zh-TW', label: '繁', fullLabel: '繁體中文' },
  { code: 'en', label: 'EN', fullLabel: 'English' },
] as const;

export default function LanguageSwitcher() {
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
            'px-2.5 py-1 text-xs font-medium rounded transition-colors',
            currentLocale === lang.code
              ? 'bg-primary-500 text-white'
              : 'text-neutral-500 hover:text-primary-600 hover:bg-primary-50',
          )}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
}
