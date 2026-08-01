'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  category?: string;
};

export default function Accordion({ items, category }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-3">
      {category && (
        <h3 className="text-xl font-semibold text-neutral-800 mb-4">
          {category}
        </h3>
      )}
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={clsx(
              'rounded-2xl border bg-white transition-all duration-300 overflow-hidden',
              isOpen
                ? 'border-gold-400/60 shadow-md shadow-gold-500/10'
                : 'border-neutral-200 hover:border-gold-300',
            )}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full text-left py-5 px-6 flex justify-between items-center gap-4"
            >
              <span className="font-medium text-neutral-800">
                {item.question}
              </span>
              <span
                className={clsx(
                  'flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300',
                  isOpen
                    ? 'bg-gold-500 border-gold-500 text-white rotate-45'
                    : 'border-neutral-300 text-neutral-500',
                )}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-neutral-600 leading-relaxed text-sm">
                    <div className="h-px w-full bg-gradient-to-r from-gold-300/60 to-transparent mb-4" />
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
