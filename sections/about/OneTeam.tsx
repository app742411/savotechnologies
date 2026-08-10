'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';

export default function OneTeam() {
  return (
    <section className="relative z-10 w-full bg-white py-24 text-slate-900 overflow-hidden">
      <Container className="relative z-10">
        
        {/* ── Header Area: 2 Columns (60/40 Split) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-start mb-16 max-w-6xl mx-auto">
          {/* Left Column: Title */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight font-sans">
              One team. One mission.<br />Extraordinary results.
            </h2>
          </div>

          {/* Right Column: Paragraph */}
          <div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light mt-2">
              Across 35+ countries and every timezone, the Savo team shows up every day to build technology that matters. This is who we are.
            </p>
          </div>
        </div>

        {/* ── Featured Team Graphic with Layered Color Bands ── */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Top Layer 1: Narrower Light Blue Stripe */}
          <div className="w-[92%] h-[6px] bg-[#60a5fa] mx-auto" />
          
          {/* Top Layer 2: Wider Dark Blue Stripe */}
          <div className="w-[98%] h-[16px] bg-[#030d26] mx-auto -mt-[3px]" />
          
          {/* Team Photo Card */}
          <div className="relative w-full aspect-[16/7] overflow-hidden border border-slate-200 shadow-2xl mt-0">
            <Image
              src="/images/2c92b795c04e2a6dd50b2c142852bcc7ad6aa65c.jpg"
              alt="SAVO Technologies Team"
              fill
              className="object-cover object-center animate-fade-in"
              unoptimized
            />
          </div>
        </div>

      </Container>
    </section>
  );
}
