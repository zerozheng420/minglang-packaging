import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { products, groupProductsByCategory, type ProductCategory } from '@/data/products';
import type { Product } from '@/data/products';

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

  const grouped = groupProductsByCategory(loc);

  return (
    <div className="section-padding">
      <div className="container-page">
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
          centered
        />

        {/* Render grouped by category */}
        <div className="mt-12 space-y-16">
          {Object.entries(grouped).map(([category, group]) => (
            <section key={category}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-neutral-200" />
                <h2 className="text-2xl font-bold text-neutral-800 whitespace-nowrap">
                  {group.label}
                </h2>
                <div className="h-px flex-1 bg-neutral-200" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {group.products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                  >
                    <div className="aspect-square relative overflow-hidden bg-neutral-100">
                      <Image
                        src={product.images[0]}
                        alt={product.title[loc]}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <Badge variant="green">
                        {group.label}
                      </Badge>
                      <h3 className="mt-2 font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors line-clamp-1">
                        {product.title[loc]}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-500">
                        {product.material[loc]}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-sm text-neutral-400">
                          MOQ: {product.moq}
                        </span>
                        <span className="text-sm font-medium text-primary-600 group-hover:translate-x-1 transition-transform">
                          {t('inquire')} →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
