import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCTA from '@/components/layout/MobileCTA';
import { OrganizationSchema } from '@/components/ui/StructuredData';
import BackToTop from '@/components/ui/BackToTop';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import type { Metadata } from 'next';

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://minglangpackaging.com';
  return {
    title: { template: '%s | Minglang Packaging', default: 'Shenzhen Minglang Packaging Products Co., Ltd.' },
    description: 'Professional flexible packaging ODM/OEM manufacturer with 20 years of experience',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'zh-CN': `/${'zh-CN'}`,
        'zh-TW': `/${'zh-TW'}`,
        'en': `/en`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) notFound();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div lang={locale} className="h-full antialiased">
        <Header />
        <main className="flex-1"><OrganizationSchema />{children}</main>
        <BackToTop />
        <WhatsAppButton />
        <Footer />
        <MobileCTA />
      </div>
    </NextIntlClientProvider>
  );
}
