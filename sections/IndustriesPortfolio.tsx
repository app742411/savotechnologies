'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/Container';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';
import SliderNav from '@/components/SliderNav';

/* ────────────────────── Types ─────────────────────── */
interface Industry {
  id: string;
  title: string;
  description: string;
  bgFrom: string;
  bgTo: string;
  image: string;
}

/* ────────────────────── Data ─────────────────────── */
const industries: Industry[] = [
  {
    id: 'education', title: 'Education &\ne-Learning',
    description: 'Enhance the learning experience for global learners through tech-driven solutions.',
    bgFrom: '#0a1628', bgTo: '#0f2547',
    image: '/content/tech/moblie.png',
  },
  {
    id: 'health', title: 'Healthcare &\nFitness',
    description: 'Leveraging smart technologies like AI, ML, IoT, and more to empower global health organizations.',
    bgFrom: '#071830', bgTo: '#0d2d5c',
    image: '/content/tech/laptop.png',
  },
  {
    id: 'logistics', title: 'Logistics &\nDistribution',
    description: 'Streamline global supply chains with real-time tracking, route optimization, and smart warehouse systems.',
    bgFrom: '#060f22', bgTo: '#0c2140',
    image: '/images/transformation_mockup.png',
  },
  {
    id: 'fintech', title: 'FinTech &\nBanking',
    description: 'Secure, scalable financial platforms delivering seamless payment, lending, and investment experiences.',
    bgFrom: '#060c20', bgTo: '#0a1f46',
    image: '/content/tech/moblie.png',
  },
  {
    id: 'realestate', title: 'Real Estate\n& PropTech',
    description: 'Digital platforms for property management, virtual tours, and smart building automation at scale.',
    bgFrom: '#07111e', bgTo: '#0d233d',
    image: '/images/design_mockup.png',
  },
  {
    id: 'retail', title: 'Retail &\nEcommerce',
    description: 'Omnichannel retail solutions integrating inventory, POS, and customer analytics into one platform.',
    bgFrom: '#070e1c', bgTo: '#0b2040',
    image: '/content/tech/laptop.png',
  },
];

/* ────────────────────── Card ─────────────────────── */
function IndustryCard({ ind, index }: { ind: Industry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col overflow-hidden group cursor-pointer"
      style={{ minHeight: 560 }}
    >
      {/* TOP — white */}
      <div className="relative bg-white px-6 pt-8 pb-36 flex-shrink-0 z-10 grid grid-cols-2 gap-6 items-start">
        <h3 
          className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text leading-tight whitespace-pre-line" 
          style={{ 
            fontFamily: 'Hanken Grotesk, Inter, sans-serif',
            backgroundImage: 'linear-gradient(135deg, #0970E6 0%, #002873 100%)'
          }}
        >
          {ind.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mt-1">{ind.description}</p>
      </div>

      {/* BOTTOM — deep blue */}
      <div className="flex-1 relative z-10 flex flex-col justify-end pb-6 px-6" style={{ background: 'linear-gradient(180deg, #0970E6 0%, #002873 100%), linear-gradient(#0970E6, #0970E6)', minHeight: 260 }}>
        {/* Mockup floating across boundary */}
        <div className="absolute top-0 left-0 right-0 z-20 px-4 flex items-end justify-center -translate-y-1/2">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity, delay: index * 0.5 }}
            className="w-full flex justify-center relative"
          >
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-slate-200 pointer-events-none z-0" />
            <div className="relative w-[420px] h-[280px] z-10">
              <Image
                src={ind.image}
                alt={ind.title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="z-30 mt-20">
          <button className="flex items-center gap-0 group/btn shadow-lg hover:shadow-blue-900/40 transition-all duration-300">
            <span className="w-12 h-12 bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-white transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            <span className="h-12 bg-white text-slate-900 text-sm font-semibold flex items-center px-5 transition-all hover:bg-slate-50">
              Hire Developer
            </span>
          </button>
        </div>
      </div>

      {/* Hover shimmer */}
      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/[0.02] transition-colors duration-500 z-30 pointer-events-none" />
    </motion.div>
  );
}

/* ────────────────────── Main Section ─────────────────────── */
export function IndustriesPortfolio() {
  const [activeIndex, setActiveIndex] = useState(0); // 0 to 5 representing the starting card in view
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const totalCards = industries.length;

  const handlePrev = useCallback(() => {
    setDirection('prev');
    setActiveIndex(prev => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  const handleNext = useCallback(() => {
    setDirection('next');
    setActiveIndex(prev => (prev + 1) % totalCards);
  }, [totalCards]);

  // Auto-swipe card by card infinitely (6s loop)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [handleNext]);

  // Get sliding window of 3 visible cards (with infinite wrap-around)
  const visibleIndustries = [
    industries[activeIndex % totalCards],
    industries[(activeIndex + 1) % totalCards],
    industries[(activeIndex + 2) % totalCards],
  ];

  return (
    <section className="relative bg-white">
      <Container>
        {/* ── Header: exactly matching Solutions section style ── */}
        <div className="pt-16 sm:pt-20 pb-0">

          {/* 2-column header row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr] gap-8 lg:gap-16 items-stretch">
            {/* Left: heading */}
            <div className="flex flex-col justify-between">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
                The Industry-Specific Software<br className="hidden sm:inline" /> Development Expertise
              </h2>
            </div>

            {/* Vertical separator */}
            <div className="hidden lg:block relative w-[1px]">
              <div className="absolute top-0 bottom-[-24px] left-0 w-[1px] bg-slate-200" />
            </div>

            {/* Right: description + CTA */}
            <div className="flex flex-col justify-between space-y-6">
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                From regulated enterprises to breakout startups, Savo synchronizes automation, design, and engineering so every launch is pixel-perfect, compliant, and on pace with market demand.
              </p>
              <div>
                <CTAButton href="/industries" label="Industries We Serve" />
              </div>
            </div>
          </div>

          {/* Horizontal line with nav arrows on top using SliderNav */}
          <SliderNav
            onPrev={handlePrev}
            onNext={handleNext}
            hasLine
            lineColor="bg-slate-200"
            btnBgColor="bg-white"
            className="mb-12"
          />
        </div>
      </Container>

      {/* ── Full-bleed card grid, aligned with header starting point ── */}
      <div className="pl-6 xl:pl-8 2xl:pl-[calc((100vw-1440px)/2+2rem)] pr-0 w-full overflow-hidden [--card-width:100%] sm:[--card-width:50%] lg:[--card-width:33.333333%]">
        <div className="overflow-hidden relative w-full">
          <motion.div
            className="flex gap-[5px]"
            animate={{ x: `calc(-${activeIndex} * (var(--card-width) + 5px))` }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            {[...industries, ...industries].map((ind, idx) => (
              <div
                key={`${ind.id}-${idx}`}
                className="w-[var(--card-width)] flex-shrink-0"
              >
                <IndustryCard ind={ind} index={idx % totalCards} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Page dots */}
      <div className="flex justify-center items-center gap-2 py-6 bg-white border-t border-slate-100">
        {Array.from({ length: totalCards }).map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > activeIndex ? 'next' : 'prev'); setActiveIndex(i); }}
            className="cursor-pointer"
          >
            <motion.div
              animate={{ width: i === activeIndex ? 24 : 8, opacity: i === activeIndex ? 1 : 0.3 }}
              transition={{ duration: 0.35 }}
              className="h-[3px] rounded-full bg-blue-600"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default IndustriesPortfolio;
