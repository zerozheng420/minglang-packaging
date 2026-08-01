import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

const footerNavLinks = [
  { key: 'nav_products', href: '/products' },
  { key: 'nav_customOem', href: '/custom-oem' },
  { key: 'nav_about', href: '/about' },
  { key: 'nav_contact', href: '/contact' },
  { key: 'nav_faq', href: '/faq' },
] as const;

export default async function Footer() {
  const t = await getTranslations('common');

  return (
    <footer className="bg-forest-dark text-white relative overflow-hidden">
      {/* Subtle top gold line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Col 1: Brand (5 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-display text-xl font-bold text-white">
                M
              </span>
              <div>
                <h3 className="font-display font-semibold text-xl text-white">
                  明朗包装
                </h3>
                <p className="eyebrow mt-0.5 text-[0.6rem] text-gold-300">
                  MINGLANG PACKAGING
                </p>
              </div>
            </div>
            <p className="mt-5 text-neutral-400 text-sm leading-relaxed max-w-xs">
              {t('siteTagline')}
            </p>
            <p className="mt-4 text-neutral-500 text-xs leading-relaxed max-w-xs">
              {t('footer_companies')}
            </p>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="eyebrow text-[0.65rem] text-gold-300 mb-6">
              {t('footer_quickLinks')}
            </h4>
            <ul className="space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-neutral-300 hover:text-gold-300 text-sm transition-colors"
                  >
                    <span className="h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-3" />
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="eyebrow text-[0.65rem] text-gold-300 mb-6">
              {t('nav_contact')}
            </h4>
            <ul className="space-y-4 text-sm text-neutral-300">
              <li className="flex gap-3">
                <svg className="w-4.5 h-4.5 mt-0.5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {t('contact_address_value')}
              </li>
              <li className="flex gap-3">
                <svg className="w-4.5 h-4.5 mt-0.5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {t('contact_phone_value')}
              </li>
              <li className="flex gap-3">
                <svg className="w-4.5 h-4.5 mt-0.5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {t('contact_email_value')}
              </li>
              <li className="flex gap-3">
                <svg className="w-4.5 h-4.5 mt-0.5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                {t('footer_wechat')}: {t('contact_wechat_value')}
              </li>
            </ul>
          </div>

          {/* Col 4: Platforms (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="eyebrow text-[0.65rem] text-gold-300 mb-6">
              {t('footer_platforms')}
            </h4>
            <p className="text-neutral-500 text-xs mb-4">
              {t('footer_platforms_desc')}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.1688.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-neutral-200 transition-all hover:border-gold-400/40 hover:bg-gold-500/10 hover:text-gold-200"
              >
                {t('footer_1688')}
                <span className="text-gold-400 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://www.alibaba.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-neutral-200 transition-all hover:border-gold-400/40 hover:bg-gold-500/10 hover:text-gold-200"
              >
                {t('footer_alibaba')}
                <span className="text-gold-400 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-neutral-500 text-xs">
            {t('footer_copyright')}
          </p>
          <p className="text-neutral-600 text-xs eyebrow !tracking-[0.18em]">
            ODM · OEM · MADE IN SHENZHEN
          </p>
        </div>
      </div>
    </footer>
  );
}
