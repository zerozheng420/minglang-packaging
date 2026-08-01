'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { clsx } from 'clsx';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  /** Animate on mount (hero) vs. when scrolled into view (sections) */
  inView?: boolean;
}

/**
 * Word/character-staggered text reveal (Reactbits-style).
 * CJK text splits per character, latin text per word.
 */
function splitUnits(text: string): string[] {
  const hasCJK = /[一-鿿㐀-䶿豈-﫿]/.test(text);
  if (hasCJK) {
    return text.split('');
  }
  return text.split(' ');
}

export default function RevealText({
  text,
  className,
  delay = 0,
  as = 'span',
  inView = false,
}: RevealTextProps) {
  const units = useMemo(() => splitUnits(text), [text]);
  const hasCJK = /[一-鿿㐀-䶿豈-﫿]/.test(text);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  };

  const unit = {
    hidden: { opacity: 0, y: '0.45em' },
    visible: {
      opacity: 1,
      y: '0em',
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      variants={container}
      {...(inView
        ? { initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '-60px' } }
        : { initial: 'hidden', animate: 'visible' })}
      aria-label={text}
      className={clsx(className)}
    >
      {units.map((u, i) => (
        <motion.span
          key={`${u}-${i}`}
          variants={unit}
          className={clsx('inline-block will-change-transform', hasCJK && 'whitespace-pre')}
        >
          {u}
          {!hasCJK && i < units.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </MotionTag>
  );
}
