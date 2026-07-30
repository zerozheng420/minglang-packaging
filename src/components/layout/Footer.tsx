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
    <footer className="bg-neutral-900 text-white">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {t('siteName')}
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {t('siteTagline')}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
              {t('footer_quickLinks')}
            </h4>
            <ul className="space-y-2.5">
              {footerNavLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white text-sm transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
              {t('nav_contact')}
            </h4>
            <ul className="space-y-2.5 text-neutral-300 text-sm">
              <li>
                <span className="text-neutral-400">{t('footer_address')}:</span>{' '}
                {t('contact_address_value')}
              </li>
              <li>
                <span className="text-neutral-400">{t('footer_phone')}:</span>{' '}
                {t('contact_phone_value')}
              </li>
              <li>
                <span className="text-neutral-400">{t('footer_email')}:</span>{' '}
                {t('contact_email_value')}
              </li>
            </ul>
          </div>

          {/* Col 4: WeChat / WhatsApp */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
              {t('footer_wechat')} / {t('footer_whatsapp')}
            </h4>
            <div className="space-y-3 text-sm text-neutral-300">
              <p>
                <span className="text-neutral-400">{t('footer_wechat')}:</span>{' '}
                {t('contact_wechat_value')}
              </p>
              <p>
                <span className="text-neutral-400">{t('footer_whatsapp')}:</span>{' '}
                {t('contact_phone_value')}
              </p>
              {/* QR code placeholder */}
              <div className="w-28 h-28 bg-neutral-800 rounded-lg flex items-center justify-center mt-3">
                <span className="text-neutral-500 text-xs text-center px-2">
                  {t('footer_wechat')} QR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="container-page py-6">
          <p className="text-neutral-500 text-xs text-center">
            {t('footer_copyright')}
          </p>
          <p className="text-neutral-600 text-xs text-center mt-1.5">
            {t('footer_companies')}
          </p>
        </div>
      </div>
    </footer>
  );
}
