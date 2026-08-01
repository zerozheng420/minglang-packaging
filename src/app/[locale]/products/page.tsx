import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ProductList from '@/components/products/ProductList';

type Locale = 'zh-CN' | 'zh-TW' | 'en';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'products' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  return {
    title: `${t('title')} - ${tc('siteName')}`,
    description: t('subtitle'),
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const t = await getTranslations('products');

  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="PRODUCTS"
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <div className="section-padding section-padding-lg">
        <div className="container-page">
          <ProductList locale={loc} />
        </div>
      </div>
    </div>
  );
}
