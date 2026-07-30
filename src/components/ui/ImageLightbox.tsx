'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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
      {/* Thumbnail grid - show main image large + thumbnails below */}
      <div className="space-y-4">
        <div
          className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 cursor-pointer group"
          onClick={() => open(0)}
        >
          <Image src={images[0]} alt={alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 50vw" priority placeholder="blur" blurDataURL={BLUR_PLACEHOLDER} />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-neutral-800 px-4 py-2 rounded-lg text-sm font-medium">Click to enlarge</span>
          </div>
        </div>
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-3">
            {images.map((img, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-neutral-100 cursor-pointer ring-2 ring-transparent hover:ring-primary-400 transition-all" onClick={() => open(i)}>
                <Image src={img} alt={`${alt} ${i + 1}`} fill className="object-cover" sizes="25vw" placeholder="blur" blurDataURL={BLUR_PLACEHOLDER} />
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
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={close}
          >
            {/* Close button */}
            <button onClick={close} className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl transition-colors">✕</button>

            {/* Image counter */}
            <div className="absolute top-6 left-6 z-10 text-white/70 text-sm">{currentIndex + 1} / {images.length}</div>

            {/* Previous */}
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl transition-colors">‹</button>

            {/* Image */}
            <div className="relative w-[90vw] h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <Image src={images[currentIndex]} alt={`${alt} ${currentIndex + 1}`} fill className="object-contain" sizes="90vw" placeholder="blur" blurDataURL={BLUR_PLACEHOLDER} />
            </div>

            {/* Next */}
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl transition-colors">›</button>

            {/* Bottom thumbnails */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2" onClick={(e) => e.stopPropagation()}>
              {images.map((img, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)} className={`relative w-16 h-16 rounded-lg overflow-hidden ring-2 transition-all ${i === currentIndex ? 'ring-white' : 'ring-white/30 hover:ring-white/60'}`}>
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
