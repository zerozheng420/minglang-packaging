'use client';

import { useEffect, useState, useRef } from 'react';

interface StatsCounterProps {
  items: { value: string; numericValue: number; suffix: string; label: string }[];
  className?: string;
}

export default function StatsCounter({ items, className }: StatsCounterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(items.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1600;
    const frameDuration = 16;
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOutCubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(items.map((item) => Math.round(easedProgress * item.numericValue)));

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts(items.map((item) => item.numericValue));
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isVisible, items]);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 ${className ?? ''}`}
    >
      {items.map((item, index) => (
        <div key={item.label} className="group">
          <p className="font-display text-4xl lg:text-5xl font-semibold text-gold-600 transition-colors duration-300 group-hover:text-gold-500">
            {counts[index]}
            {item.suffix}
          </p>
          <div className="mt-2 h-px w-8 bg-gold-400/50 transition-all duration-300 group-hover:w-14 group-hover:bg-gold-500" />
          <p className="mt-2.5 text-sm text-neutral-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
