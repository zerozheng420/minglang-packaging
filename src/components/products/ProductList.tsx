'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Badge from '@/components/ui/Badge';
import { products, groupProductsByCategory, categoryLabels, type Product } from '@/data/products';
import { BLUR_PLACEHOLDER } from '@/lib/placeholder';

type Locale = 'zh-CN' | 'zh-TW' | 'en';

function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const t = useTranslations('products');
  return (
    <div className="relative max-w-xl mx-auto mb-10">
      <svg
        className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder={t('search_placeholder') || 'Search products...'}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-14 pr-5 py-4 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-white text-neutral-800 placeholder-neutral-400 shadow-sm shadow-neutral-900/5"
      />
    </div>
  );
}

function ProductCard({
  product,
  locale,
  categoryLabel,
}: {
  product: Product;
  locale: Locale;
  categoryLabel: string;
}) {
  const t = useTranslations('products');
  const [isHovered, setIsHovered] = useState(false);
  const hasHoverImage = product.images.length > 1;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col rounded-2xl border border-neutral-200 overflow-hidden hover:border-gold-300 hover:shadow-xl hover:shadow-neutral-900/10 hover:-translate-y-1.5 transition-all duration-500 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square relative overflow-hidden bg-neutral-100">
        <Image
          src={product.images[0]}
          alt={product.title[locale]}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
        />
        {hasHoverImage && (
          <Image
            src={product.images[1]}
            alt={product.title[locale]}
            fill
            className="object-cover absolute inset-0 transition-opacity duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            style={{ opacity: isHovered ? 1 : 0 }}
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
          />
        )}
        {/* Gold top hairline on hover */}
        <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <Badge variant="gold">{categoryLabel}</Badge>
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-neutral-400">
            MOQ {product.moq}
          </span>
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold text-neutral-800 group-hover:text-primary-800 transition-colors line-clamp-1">
          {product.title[locale]}
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          {product.material[locale]}
        </p>
        <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-sm text-neutral-400">{product.sizes[locale]}</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            {t('inquire')} →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProductList({ locale }: { locale: Locale }) {
  const t = useTranslations('products');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.title[locale].toLowerCase().includes(query) ||
        p.material[locale].toLowerCase().includes(query),
    );
  }, [searchQuery, locale]);

  const grouped = useMemo(() => groupProductsByCategory(locale), [locale]);

  return (
    <>
      <SearchBar onSearch={setSearchQuery} />

      {/* Search mode: flat grid */}
      {filteredProducts !== null && (
        <div className="mt-8">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-neutral-500 py-16">{t('empty')}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  locale={locale}
                  categoryLabel={categoryLabels[product.category][locale]}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Normal mode: grouped by category */}
      {filteredProducts === null && (
        <div className="mt-14 space-y-20">
          {Object.entries(grouped).map(([category, group], idx) => (
            <section key={category}>
              <div className="mb-9">
                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl font-semibold text-gold-500/70">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-2xl lg:text-3xl font-semibold text-neutral-900 whitespace-nowrap">
                    {group.label}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-gold-300/70 to-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {group.products.map((product) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    locale={locale}
                    categoryLabel={group.label}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
