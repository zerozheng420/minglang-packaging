'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { BLUR_PLACEHOLDER } from '@/lib/placeholder';

interface ImageLightboxProps {
  images: string[];
  alt: string;
  // Renders a grid of thumbnails. Clicking opens fullscreen overlay.
}

export default function ImageLightbox({ images, alt }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = (index: number) => { setCurrentIndex(index); setIsOpen(true); };
  const close = () => setIsOpen(false);
  const next = useCallback(() => setCurrentIndex((prev) => (prev + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length), [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, next, prev]);

  return (
    <>
      {/* Main image + thumbnail strip */}
      <div className="space-y-4">
        <div
          className="relative aspect-square rounded-3xl overflow-hidden bg-neutral-100 cursor-pointer group shadow-lg shadow-neutral-900/10"
          onClick={() => open(0)}
        >
          <Image src={images[0]} alt={alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 100vw, 50vw" priority placeholder="blur" blurDataURL={BLUR_PLACEHOLDER} />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 rounded-full bg-cream/95 px-4 py-2 text-xs font-medium text-neutral-700 shadow">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            ENLARGE
          </div>
        </div>
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-3">
            {images.map((img, i) => (
              <div
                key={i}
                className={clsx(
                  'relative aspect-square rounded-xl overflow-hidden bg-neutral-100 cursor-pointer ring-2 transition-all duration-300',
                  i === currentIndex ? 'ring-gold-500' : 'ring-transparent hover:ring-gold-300',
                )}
                onClick={() => open(i)}
              >
                <Image src={img} alt={`${alt} ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" placeholder="blur" blurDataURL={BLUR_PLACEHOLDER} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-forest-dark/98 flex items-center justify-center"
            onClick={close}
          >
            {/* Close button */}
            <button onClick={close} className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-gold-500 text-white flex items-center justify-center transition-all duration-300 hover:rotate-90" aria-label="Close">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image counter */}
            <div className="absolute top-7 left-7 z-10 eyebrow text-gold-300">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </div>

            {/* Previous */}
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-gold-500 text-white flex items-center justify-center transition-colors" aria-label="Previous">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-[90vw] h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <Image src={images[currentIndex]} alt={`${alt} ${currentIndex + 1}`} fill className="object-contain" sizes="90vw" placeholder="blur" blurDataURL={BLUR_PLACEHOLDER} />
            </div>

            {/* Next */}
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-gold-500 text-white flex items-center justify-center transition-colors" aria-label="Next">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Bottom thumbnails */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2" onClick={(e) => e.stopPropagation()}>
              {images.map((img, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)} className={clsx('relative w-16 h-16 rounded-lg overflow-hidden ring-2 transition-all duration-300', i === currentIndex ? 'ring-gold-400' : 'ring-white/25 hover:ring-white/60')}>
                  <Image src={img} alt="" fill className="object-cover" sizes="64px" placeholder="blur" blurDataURL={BLUR_PLACEHOLDER} />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
