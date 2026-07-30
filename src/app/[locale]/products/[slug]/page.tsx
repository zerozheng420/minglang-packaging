import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Badge from '@/components/ui/Badge';
import { products, categoryLabels } from '@/data/products';
import type { ProductCategory } from '@/data/products';

type Locale = 'zh-CN' | 'zh-TW' | 'en';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: 'Product Not Found' };
  const tc = await getTranslations({ locale, namespace: 'common' });
  return {
    title: `${product.title[loc]} - ${tc('siteName')}`,
    description: product.material[loc],
    openGraph: {
      title: product.title[loc],
      description: product.material[loc],
      images: product.images,
      type: 'website',
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const t = await getTranslations('products');

  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const specs = [
    { label: t('material'), value: product.material[loc] },
    { label: t('size'), value: product.sizes[loc] },
    { label: t('moq'), value: product.moq },
    { label: t('sampleTime'), value: product.sampleTime },
    { label: t('bulkTime'), value: product.bulkTime },
  ];

  return (
    <div className="section-padding">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product image gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100">
              <Image
                src={product.images[0]}
                alt={product.title[loc]}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {product.images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100"
                  >
                    <Image
                      src={img}
                      alt={`${product.title[loc]} - ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product details */}
          <div className="flex flex-col justify-center">
            <Badge variant="green">
              {categoryLabels[product.category]?.[loc] ?? product.category}
            </Badge>
            <h1 className="mt-4 text-3xl lg:text-4xl font-bold text-neutral-900">
              {product.title[loc]}
            </h1>
            <p className="mt-3 text-neutral-500">{product.material[loc]}</p>

            {/* Specifications table */}
            <div className="mt-8 border border-neutral-200 rounded-xl overflow-hidden">
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex px-6 py-4 ${
                    i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
                  } ${i < specs.length - 1 ? 'border-b border-neutral-100' : ''}`}
                >
                  <span className="w-32 text-sm font-medium text-neutral-500">
                    {spec.label}
                  </span>
                  <span className="text-sm text-neutral-800">{spec.value}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-neutral-400">{t('customNote')}</p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-colors"
            >
              {t('inquire')} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
