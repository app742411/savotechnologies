'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import CTAButton from '@/components/CTAButton';

const leftFeatures = [
  {
    title: 'Solutions for Every Vision',
    desc: 'Classic creative development or the latest in machine learning and automation—we architect the right path for your ambition.',
  },
  {
    title: 'Deep Technology Stack',
    desc: 'Classic creative development or the latest in machine learning and automation—we architect the right path for your ambition.',
  },
];

const rightFeatures = [
  {
    title: 'Rapid & Transparent Delivery',
    desc: 'Powered by modern frameworks, test automation, and hands-on expertise, your roadmap moves from idea to impact faster.',
  },
  {
    title: 'Security First',
    desc: 'Classic creative development or the latest in machine learning and automation—we architect the right path for your ambition.',
  },
];

export function About() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <Container>

        {/* ── Top Row: Heading Left | Paragraph + CTA Right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_570px_1fr] gap-0 items-end pb-5 border-b border-slate-200">

          {/* Left: Big headline */}
          <div className="lg:pr-14">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-[#0a0a0a] leading-tight tracking-tight">
              Agile. AI-Powered<br />Always Ahead.
            </h2>
          </div>

          {/* Center spacer to match bottom column alignment */}
          <div className="hidden lg:block h-px" />

          {/* Right: Paragraph + About us button */}
          <div className="space-y-6 lg:pl-14">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed" style={{ color: '#475569' }}>
              Founded in 2011, SAVO Technologies is a top Mobile App and Web development company driving digital transformation for businesses of all sizes.
            </p>
            <CTAButton href="/about" label="About us" variant="secondary" />
          </div>
        </div>

        {/* ── Bottom Grid: 3 columns × 2 rows = 5 cells ── */}
        {/*   [feat-1] [            image (row-span-2)         ] [feat-3] */}
        {/*   [feat-2] [                                       ] [feat-4] */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_570px_1fr] lg:grid-rows-2 gap-0">

          {/* ── Left col, Row 1 ── */}
          <div className="flex flex-col justify-start lg:pr-14 py-10 lg:pt-14 lg:pb-12 border-b border-slate-200 lg:border-r hover:bg-slate-50/50 transition-colors duration-300">
            <h3 className="text-xl font-bold text-[#0970E6] leading-snug mb-3">
              {leftFeatures[0].title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#64748b' }}>
              {leftFeatures[0].desc}
            </p>
          </div>

          {/* ── Center col: image spanning both rows ── */}
          <div className="lg:row-span-2 relative flex items-center justify-center py-10 lg:pt-14 lg:pb-14 order-first lg:order-none lg:border-r border-slate-200">
            {/* Wrapper to hold both the overflow-hidden boy image AND the floating circle without clipping the circle */}
            <div className="relative w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] lg:w-[480px] lg:h-[480px] group/center">
              
              {/* Blue accent dot (circle.png) positioned precisely outside the top right edge */}
              <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 lg:-top-6 lg:-right-6 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 z-20 animate-[spin_8s_linear_infinite] transition-all duration-700 ease-out">
                <Image src="/images/circle.png" alt="Circle Icon" fill className="object-contain" />
              </div>

              {/* Circular clipped portrait photo */}
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl z-10">
                {/* Concentric rings overlay with continuous spinning and pulsing effects */}
                <div className="absolute inset-0 rounded-full border border-white/50 pointer-events-none scale-[0.84] z-30 animate-[spin_10s_linear_infinite] group-hover/center:border-white/80 transition-colors duration-700" />
                <div className="absolute inset-0 rounded-full border border-white/30 pointer-events-none scale-[0.56] z-30 animate-[spin_15s_linear_infinite_reverse] group-hover/center:border-white/60 transition-colors duration-700" />

                <Image
                  src="/images/user1.png"
                  alt="SAVO Technologies Developer"
                  fill
                  className="object-cover object-center group-hover/center:scale-[1.05] transition-transform duration-700"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* ── Right col, Row 1 ── */}
          <div className="flex flex-col justify-start lg:pl-14 py-10 lg:pt-14 lg:pb-12 border-b border-slate-200 hover:bg-slate-50/50 transition-colors duration-300">
            <h3 className="text-xl font-bold text-[#0970E6] leading-snug mb-3">
              {rightFeatures[0].title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#64748b' }}>
              {rightFeatures[0].desc}
            </p>
          </div>

          {/* ── Left col, Row 2 ── */}
          <div className="flex flex-col justify-start lg:pr-14 py-10 lg:py-12 lg:border-r border-slate-200 hover:bg-slate-50/50 transition-colors duration-300">
            <h3 className="text-xl font-bold text-[#0970E6] leading-snug mb-3">
              {leftFeatures[1].title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#64748b' }}>
              {leftFeatures[1].desc}
            </p>
          </div>

          {/* ── Right col, Row 2 ── */}
          <div className="flex flex-col justify-start lg:pl-14 py-10 lg:py-12 hover:bg-slate-50/50 transition-colors duration-300">
            <h3 className="text-xl font-bold text-[#0970E6] leading-snug mb-3">
              {rightFeatures[1].title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#64748b' }}>
              {rightFeatures[1].desc}
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default About;
