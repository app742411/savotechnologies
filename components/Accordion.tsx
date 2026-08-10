'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes(prev =>
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes(prev => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className="border border-slate-800 bg-slate-900/40 backdrop-blur-sm rounded-lg overflow-hidden transition-colors duration-300 focus-within:ring-2 focus-within:ring-blue-500"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between p-5 text-left text-white font-medium hover:bg-slate-900/60 transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                  isOpen ? 'transform rotate-180 text-blue-500' : ''
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="p-5 pt-0 border-t border-slate-800/60 text-slate-400 text-sm leading-relaxed">
                    {item.content}
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

export default Accordion;
