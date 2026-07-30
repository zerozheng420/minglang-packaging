'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Badge from '@/components/ui/Badge';
import { products, groupProductsByCategory, categoryLabels, type Product } from '@/data/products';

type Locale = 'zh-CN' | 'zh-TW' | 'en';

function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const t = useTranslations('products');
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
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
        className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-neutral-800 placeholder-neutral-400"
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
      className="group rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square relative overflow-hidden bg-neutral-100">
        <Image
          src={product.images[0]}
          alt={product.title[locale]}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {hasHoverImage && (
          <Image
            src={product.images[1]}
            alt={product.title[locale]}
            fill
            className="object-cover absolute inset-0 transition-opacity duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        )}
      </div>
      <div className="p-4">
        <Badge variant="green">{categoryLabel}</Badge>
        <h3 className="mt-2 font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors line-clamp-1">
          {product.title[locale]}
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          {product.material[locale]}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-neutral-400">MOQ: {product.moq}</span>
          <span className="text-sm font-medium text-primary-600 group-hover:translate-x-1 transition-transform">
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
            <p className="text-center text-neutral-500 py-12">{t('empty')}</p>
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
