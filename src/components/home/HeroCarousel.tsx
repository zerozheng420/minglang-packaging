'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { BLUR_PLACEHOLDER } from '@/lib/placeholder';

// 4 slides with different images and taglines
const slides = [
  {
    image: '/images/factory/汇莉达工厂实力.jpg',
    titleKey: 'hero_title',
    subtitleKey: 'hero_subtitle',
  },
  {
    image: '/images/products/grey-velvet/1-.jpg',
    titleKey: 'hero_title',
    subtitleKey: 'hero_subtitle',
  },
  {
    image: '/images/products/short-plush/8811.jpg',
    titleKey: 'hero_title',
    subtitleKey: 'hero_subtitle',
  },
  {
    image: '/images/products/canvas/O1CN01H0v0P827GFsmautgA_!!2215564757769-0-cib.jpg',
    titleKey: 'hero_title',
    subtitleKey: 'hero_subtitle',
  },
];

export default function HeroCarousel() {
  const t = useTranslations('homepage');
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image src={slide.image} alt="" fill className="object-cover" priority={i === 0} placeholder="blur" blurDataURL={BLUR_PLACEHOLDER} />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/80 via-forest/70 to-forest-light/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container-page flex items-center min-h-[600px]">
        <div className="text-white max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            {t('hero_title')}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            {t('hero_subtitle')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/products" className="inline-block bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              {t('hero_cta_products')}
            </Link>
            <Link href="/contact" className="inline-block bg-accent text-white hover:bg-accent-hover px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              {t('hero_cta_quote')}
            </Link>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
