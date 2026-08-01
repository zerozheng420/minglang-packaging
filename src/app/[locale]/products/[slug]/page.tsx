import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import Badge from '@/components/ui/Badge';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { ProductSchema, BreadcrumbSchema } from '@/components/ui/StructuredData';
import { products, categoryLabels } from '@/data/products';
import type { ProductCategory } from '@/data/products';
import { routing } from '@/i18n/routing';

type Locale = 'zh-CN' | 'zh-TW' | 'en';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((p) => ({ locale, slug: p.slug }))
  );
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
  setRequestLocale(locale);
  const t = await getTranslations('products');
  const tc = await getTranslations('common');

  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const specs = [
    { label: t('material'), value: product.material[loc] },
    { label: t('size'), value: product.sizes[loc] },
    { label: t('moq'), value: product.moq },
    { label: t('sampleTime'), value: product.sampleTime },
    { label: t('bulkTime'), value: product.bulkTime },
  ];

  const breadcrumbItems = [
    { name: tc('nav_home'), url: `https://minglangpackaging.com/${locale}` },
    { name: tc('nav_products'), url: `https://minglangpackaging.com/${locale}/products` },
    { name: product.title[loc], url: `https://minglangpackaging.com/${locale}/products/${product.slug}` },
  ];

  return (
    <>
      <ProductSchema
        product={{
          name: product.title[loc],
          description: product.material[loc],
          image: product.images[0],
          category: categoryLabels[product.category]?.[loc] ?? product.category,
          material: product.material[loc],
        }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="bg-cream">
        {/* Compact page band */}
        <section className="relative overflow-hidden bg-forest-dark pt-32 pb-14 lg:pt-40 lg:pb-16">
          <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary-700/30 blur-[100px]" />
          <div className="relative container-page">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Link href="/products" className="text-neutral-400 hover:text-gold-300 transition-colors">
                {tc('nav_products')}
              </Link>
              <span className="text-neutral-600">/</span>
              <span className="text-gold-300">{product.title[loc]}</span>
            </div>
            <p className="eyebrow text-gold-300 mt-5">PRODUCT DETAILS</p>
          </div>
        </section>

        <div className="section-padding section-padding-lg">
          <div className="container-page">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Product image gallery */}
              <ImageLightbox images={product.images} alt={product.title[loc]} />

              {/* Product details */}
              <div className="flex flex-col justify-center">
                <Badge variant="gold">
                  {categoryLabels[product.category]?.[loc] ?? product.category}
                </Badge>
                <h1 className="mt-5 font-display text-3xl lg:text-5xl font-semibold text-neutral-900 leading-tight tracking-tight">
                  {product.title[loc]}
                </h1>
                <div className="mt-4 h-px w-16 bg-gold-500" />
                <p className="mt-4 text-lg text-neutral-500">{product.material[loc]}</p>

                {/* Specifications table */}
                <div className="mt-9 rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm">
                  {specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className={`flex items-center px-7 py-4.5 ${i % 2 === 0 ? 'bg-neutral-50/80' : 'bg-white'} ${i < specs.length - 1 ? 'border-b border-neutral-100' : ''}`}
                    >
                      <span className="w-36 shrink-0 text-sm font-medium text-neutral-500">
                        {spec.label}
                      </span>
                      <span className="text-sm text-neutral-800">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm text-neutral-400 flex items-center gap-2">
                  <svg className="h-4 w-4 text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t('customNote')}
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-10 py-4 font-semibold text-white shadow-lg shadow-gold-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-600"
                  >
                    {t('inquire')}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                  <Link
                    href="/custom-oem"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-10 py-4 font-semibold text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500 hover:text-gold-600"
                  >
                    {tc('nav_customOem')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
