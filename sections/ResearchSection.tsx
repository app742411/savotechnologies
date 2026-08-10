'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import CTAButton from '@/components/CTAButton';
import SliderNav from '@/components/SliderNav';
import researchData from '@/data/research.json';

interface ResearchItem {
  id: string;
  logoText: string;
  title: string;
  description: string;
  image: string;
}

export function ResearchSection({ dark = false }: { dark?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const containerRef = useRef<HTMLDivElement>(null);

  const totalItems = researchData.length;

  // We want to show a split view:
  // Card 1: Active index item (expanded layout: Image Left, Content Right)
  // Card 2: Next index item (just Image, peeking from right side)
  const activeItem: ResearchItem = researchData[currentIndex];
  const peekItem: ResearchItem = researchData[(currentIndex + 1) % totalItems];

  const handlePrev = useCallback(() => {
    setDirection('prev');
    setCurrentIndex(prev => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const handleNext = useCallback(() => {
    setDirection('next');
    setCurrentIndex(prev => (prev + 1) % totalItems);
  }, [totalItems]);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section className={`py-24 overflow-hidden border-t ${dark ? 'bg-black border-zinc-900' : 'bg-white border-slate-100'}`}>
      <Container>

        {/* ── Header: Solutions-Style 3-Part Row with 2 Connected Vertical Lines ── */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1px_1.5fr_1px_auto] gap-8 lg:gap-12 items-center pb-0">
            {/* Part 1: Heading */}
            <div>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none ${dark ? 'text-white' : 'text-slate-900'}`}>
                Research
              </h2>
            </div>

            {/* Part 2: Vertical Separator 1 */}
            <div className="hidden lg:block relative w-[1px] h-12">
              <div className={`absolute top-0 bottom-[-12px] left-0 w-[1px] ${dark ? 'bg-zinc-800' : 'bg-slate-200'}`} />
            </div>

            {/* Part 3: Description paragraph */}
            <div>
              <p className={`text-sm sm:text-base leading-relaxed max-w-xl ${dark ? 'text-zinc-400' : 'text-slate-500'}`}>
                Browse through the technical knowledge about latest trends and technologies our experienced team would like to share with you.
              </p>
            </div>

            {/* Part 4: Vertical Separator 2 */}
            <div className="hidden lg:block relative w-[1px] h-12">
              <div className={`absolute top-0 bottom-[-12px] left-0 w-[1px] ${dark ? 'bg-zinc-800' : 'bg-slate-200'}`} />
            </div>

            {/* Part 5: View All CTA Button */}
            <div className="flex-shrink-0">
              <CTAButton href="/research" label="View All" />
            </div>
          </div>

          {/* ── Divider Line (Connected to vertical lines above) ── */}
          <div className={`w-full h-[1px] mt-3 mb-12 ${dark ? 'bg-zinc-800' : 'bg-slate-200'}`} />
        </div>
      </Container>

      <div className="pl-6 xl:pl-8 2xl:pl-[calc((100vw-1440px)/2+2rem)] pr-0 w-full">
        {/* ── Sliding Layout Grid ── */}
        <div ref={containerRef} className="w-full mb-12 relative overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ x: direction === 'next' ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: direction === 'next' ? '-100%' : '100%' }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="grid grid-cols-1 lg:grid-cols-[1.8fr_0.8fr] gap-8 items-stretch w-full"
            >

              {/* 1. ACTIVE ITEM: Split card layout (Image Left, details Right) */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${dark ? 'bg-black' : 'bg-white'}`}>
                {/* Image panel */}
                <div className={`relative w-full aspect-square overflow-hidden rounded-none shadow-sm ${dark ? 'bg-zinc-900' : 'bg-slate-50'}`}>
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Info Text Details Panel */}
                <div className="flex flex-col justify-center py-4 pr-4">
                  {/* Brand Logo Header */}
                  <div className="flex items-center gap-2 mb-6">
                    <Heart className="w-6 h-6 text-blue-600 fill-blue-600" />
                    <span className="text-2xl font-bold tracking-tight text-blue-600" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      {activeItem.logoText}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl sm:text-3xl font-bold leading-snug mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
                    {activeItem.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm sm:text-base leading-relaxed mb-8 ${dark ? 'text-zinc-400' : 'text-slate-500'}`}>
                    {activeItem.description}
                  </p>

                  {/* Read More button */}
                  <div>
                    <CTAButton href={`/research/${activeItem.id}`} label="Read more" />
                  </div>
                </div>
              </div>

              {/* 2. PEEK ITEM (On right column) */}
              <div className={`hidden lg:block relative w-full h-full overflow-hidden rounded-none shadow-sm cursor-pointer ${dark ? 'bg-zinc-900' : 'bg-slate-50'}`} onClick={handleNext}>
                <Image
                  src={peekItem.image}
                  alt={peekItem.title}
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  sizes="25vw"
                />

                {/* Arrow peeking overlay */}
                <div className="absolute bottom-0 left-0 bg-blue-200/90 w-16 h-16 flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-slate-950" />
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Section Navigation Buttons using SliderNav */}
        <SliderNav
          onPrev={handlePrev}
          onNext={handleNext}
          className="pt-4"
        />

      </div>
    </section>
  );
}

export default ResearchSection;
