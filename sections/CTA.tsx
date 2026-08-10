'use client';

import React from 'react';
import { Container } from '@/components/Container';
import CTAButton from '@/components/CTAButton';

export function CTA() {
  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden text-white"
      style={{
        backgroundColor: '#020828'
      }}
    >
      {/* Non-seaming ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      {/* Decorative backdrop shapes - Diagonal Bands matching the image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 opacity-40">
          {/* Dark / Light diagonal glowing stripes */}
          <div className="absolute top-0 left-[10%] w-[18%] h-[200%] bg-blue-900/30 -skew-x-[28deg] blur-md transform origin-top" />
          <div className="absolute top-0 left-[35%] w-[30%] h-[200%] bg-slate-950/80 -skew-x-[28deg] blur-lg transform origin-top" />
          <div className="absolute top-0 left-[70%] w-[15%] h-[200%] bg-[#081a47]/50 -skew-x-[28deg] blur-sm transform origin-top" />
          <div className="absolute top-0 left-[85%] w-[10%] h-[200%] bg-blue-800/20 -skew-x-[28deg] blur-md transform origin-top" />
        </div>
        {/* Subtle radial overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,78,245,0.05),transparent_70%)]" />
      </div>

      <Container className="relative z-10">
        {/* Card Container */}
        <div
          className="relative overflow-hidden rounded-none px-8 py-16 md:py-20 text-center flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-blue-500/20 w-full"
          style={{
            background: 'linear-gradient(106.934deg, #031067 0%, #0068C7 28%, #327DD1 50%, #0D49B7 57%, #0620CD 100%)'
          }}
        >
          {/* Gloss reflection inside the card */}
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_60%)] pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-semibold text-white tracking-tight leading-tight max-w-4xl mb-8 relative z-10 font-sans">
            Want to turn your website into<br className="hidden sm:inline" /> your most valuable asset?
          </h2>

          {/* CTAButton Container */}
          <div className="relative z-10">
            <CTAButton href="/contact" label="Hire Developer" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
