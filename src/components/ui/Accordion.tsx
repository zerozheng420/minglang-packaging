'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
          <div key={index}>
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full text-left py-4 px-6 bg-white border border-neutral-200 rounded-lg flex justify-between items-center transition-colors duration-200 hover:border-primary-300"
            >
              <span className="font-medium text-neutral-800 pr-4">
                {item.question}
              </span>
              <span className="flex-shrink-0 text-xl font-light text-neutral-500 transition-transform duration-200">
                {isOpen ? '−' : '+'}
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
                  <div className="mt-2 px-6 py-4 text-neutral-600 bg-neutral-50 rounded-lg">
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
