'use client';

import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative flex flex-col justify-end min-h-screen pb-16 md:pb-24 lg:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-b from-[#020514] via-[#040d2b] to-[#010515]">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(/images/aboutbg.png)'
        }}
      />
      {/* Background Lighting / Blur Orbs */}
      <div className="absolute top-[15%] right-[20%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-blue-500/10 blur-[110px] pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-[550px] h-[550px] rounded-full bg-blue-900/15 blur-[120px] pointer-events-none" />
      
      {/* Grid Content Container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end w-full max-w-[1440px] mx-auto">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-7">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.15] max-w-xl">
              A world where every employee operates at peak potential.
            </h1>
          </div>
        </div>

        {/* Right Column: Description */}
        <div className="lg:col-span-5 lg:flex lg:justify-end">
          <div className="max-w-md lg:pb-3">
            <p className="text-slate-400 text-[15px] md:text-base font-light leading-relaxed">
              By 2030, Savo aims to be the invisible infrastructure behind the world's most innovative companies — powering the next generation of industry leaders.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
