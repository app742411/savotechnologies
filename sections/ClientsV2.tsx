'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [
  '/images/logos/image 5.svg',
  '/images/logos/image 6.svg',
  '/images/logos/image 7.svg',
  '/images/logos/image 9.svg',
  '/images/logos/image 10.svg',
  '/images/logos/image 11.svg',
];

export default function ClientsV2() {
  return (
    <section className="py-6 lg:py-8 relative overflow-hidden mt-2 lg:mt-4 w-full">

      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 text-center relative z-10">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
          Trusted by Innovative Teams Worldwide
        </p>
      </div>

      <div className="relative flex overflow-hidden w-full group border-y border-white/10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

        {/* Scrolling Track */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center hover:[animation-play-state:paused]"
        >
          {/* Tripled logos array to ensure perfectly seamless looping */}
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="relative w-40 h-24 sm:w-56 sm:h-28 shrink-0 flex items-center justify-center border-r border-white/10 hover:bg-white/5 transition-colors duration-300"
            >
              <Image
                src={logo}
                alt={`Trusted Client Logo ${idx}`}
                fill
                className="object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity p-4 sm:p-6"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
