'use client';

import React from 'react';
import CTAButton from '@/components/CTAButton';
import { Container } from '@/components/Container';

export default function CoreValues() {
  return (
    <section className="relative z-10 w-full bg-white py-28 text-slate-900 overflow-hidden">
      <Container className="relative z-10">
        
        {/* ── Header: Connected Divider Layout ── */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1px_2fr] gap-8 lg:gap-12 items-stretch pb-12 relative">
            
            {/* Left Column: Heading */}
            <div className="flex flex-col justify-between">
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight font-sans">
                Our Core Values
              </h2>
            </div>

            {/* Vertical Separator - Connected to horizontal line below */}
            <div className="hidden lg:block relative w-[1px]">
              <div className="absolute top-0 bottom-[-48px] left-0 w-[1px] bg-slate-200" />
            </div>

            {/* Right Column: Description & CTA stacked */}
            <div className="flex flex-col justify-between items-start gap-6 pl-0 lg:pl-4">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                At Savo Technologies, we believe in the power of innovation, integrity, and collaboration. These values guide our actions and decisions, ensuring that we deliver exceptional results for our clients.
              </p>
              
              {/* Our Services CTA Button */}
              <div className="flex-shrink-0">
                <CTAButton href="/services" label="Our services" />
              </div>
            </div>

          </div>

          {/* Horizontal divider line stretching under the header */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-200" />
        </div>

        {/* ── Grid of 3 Gradient Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: Innovation */}
          <div className="group flex flex-col justify-between min-h-[520px] rounded-none bg-gradient-to-b from-[#030d26] to-[#60a5fa] p-10 sm:p-12 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight mb-6 font-sans">
                Innovation
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                We embrace creativity and forward-thinking solutions, constantly pushing the boundaries of technology to drive progress and efficiency.
              </p>
            </div>
            
            {/* Innovation PNG Icon */}
            <div className="pt-8 flex justify-center">
              <img src="/icons/abouticon2.png" alt="Innovation Icon" className="w-24 h-24 object-contain" />
            </div>
          </div>

          {/* Card 2: Integrity */}
          <div className="group flex flex-col justify-between min-h-[520px] rounded-none bg-gradient-to-b from-[#030d26] to-[#60a5fa] p-10 sm:p-12 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight mb-6 font-sans">
                Integrity
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                We uphold the highest standards of honesty and transparency in all our dealings, fostering trust and accountability with our clients and partners.
              </p>
            </div>
            
            {/* Integrity PNG Icon */}
            <div className="pt-8 flex justify-center">
              <img src="/icons/abouticon1.png" alt="Integrity Icon" className="w-24 h-24 object-contain" />
            </div>
          </div>

          {/* Card 3: Collaboration */}
          <div className="group flex flex-col justify-between min-h-[520px] rounded-none bg-gradient-to-b from-[#030d26] to-[#60a5fa] p-10 sm:p-12 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight mb-6 font-sans">
                Collaboration
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                We believe that teamwork is essential to success. By working together, we harness diverse perspectives and expertise to achieve common goals.
              </p>
            </div>
            
            {/* Collaboration PNG Icon */}
            <div className="pt-8 flex justify-center">
              <img src="/icons/abouticon3.png" alt="Collaboration Icon" className="w-24 h-24 object-contain" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
