'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

export function Carousel({ children, autoPlay = true, interval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(prevIndex => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(prevIndex => (prevIndex - 1 + children.length) % children.length);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prevIndex => (prevIndex + 1) % children.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, children.length]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <div className="relative overflow-hidden w-full p-1">
      {/* Slides wrapper */}
      <div className="relative min-h-[250px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav Controls */}
      <div className="flex justify-center items-center space-x-6 mt-8">
        <button
          onClick={prevSlide}
          className="p-2 border border-slate-800 hover:border-slate-600 rounded-full hover:bg-slate-800/50 text-slate-400 hover:text-white transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="flex space-x-2">
          {children.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-blue-500' : 'w-1.5 bg-slate-800 hover:bg-slate-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 border border-slate-800 hover:border-slate-600 rounded-full hover:bg-slate-800/50 text-slate-400 hover:text-white transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
