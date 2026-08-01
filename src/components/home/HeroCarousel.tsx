'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { clsx } from 'clsx';
import RevealText from '@/components/ui/RevealText';
import { BLUR_PLACEHOLDER } from '@/lib/placeholder';

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
  {
    image: '/images/products/grey-velvet/1亿.jpg',
    titleKey: 'hero_title',
    subtitleKey: 'hero_subtitle',
  },
  {
    image: '/images/products/satin/3ed72b4bcca216a52c3300f5075a75a.jpg',
    titleKey: 'hero_title',
    subtitleKey: 'hero_subtitle',
  },
];

const AUTOPLAY_MS = 6500;

export default function HeroCarousel() {
  const t = useTranslations('homepage');
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: background drifts down as user scrolls away
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 1000);
    },
    [isTransitioning],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section ref={sectionRef} className="relative min-h-svh overflow-hidden bg-forest-dark">
      {/* Slides with Ken Burns + parallax */}
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          style={{ y: i === current ? bgY : 0 }}
          className={clsx(
            'absolute inset-0 transition-opacity duration-1000',
            i === current ? 'opacity-100' : 'opacity-0',
          )}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className={clsx('object-cover', i === current && 'animate-kenburns')}
            priority={i === 0}
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/70 to-forest-dark/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-forest-dark/40" />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 container-page flex min-h-svh items-center"
      >
        <div className="max-w-3xl pb-24 pt-32">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="eyebrow text-gold-300 mb-7 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gold-400/70" />
            PREMIUM FLEXIBLE PACKAGING · EST. 2006
          </motion.p>

          <RevealText
            as="h1"
            key={current}
            text={t('hero_title')}
            className="font-display font-semibold text-4xl sm:text-5xl lg:text-[4.6rem] lg:leading-[1.1] text-cream tracking-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-7 max-w-xl text-base lg:text-xl text-neutral-200/90 leading-relaxed"
          >
            {t('hero_subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="btn-shine group inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-9 py-4 font-semibold text-white shadow-lg shadow-gold-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-600"
            >
              {t('hero_cta_products')}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-9 py-4 font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:text-gold-200"
            >
              {t('hero_cta_quote')}
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Slide counter + dots */}
      <div className="absolute bottom-10 right-0 left-0 z-10">
        <div className="container-page flex items-center justify-between">
          <p className="eyebrow hidden sm:block text-cream/50">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </p>
          <div className="flex gap-2.5 sm:ml-auto">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={clsx(
                  'h-[3px] rounded-full transition-all duration-500',
                  i === current
                    ? 'w-10 bg-gold-400'
                    : 'w-6 bg-cream/30 hover:bg-cream/60',
                )}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center gap-2 text-cream/60">
        <span className="text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
        <div className="h-10 w-px overflow-hidden bg-cream/20">
          <div className="h-1/2 w-full bg-gold-400 animate-[slideDown_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
