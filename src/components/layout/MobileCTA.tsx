'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function MobileCTA() {
  const t = useTranslations('common');
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3 px-4 py-3">
        <a href="tel:13713832562" className="flex items-center gap-2 text-neutral-700 hover:text-primary-600 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-sm font-medium">13713832562</span>
        </a>
        <Link href="/contact" className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-center py-2.5 rounded-lg font-semibold text-sm transition-colors">
          {t('button_inquire')}
        </Link>
      </div>
    </div>
  );
}
