'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="relative py-28 px-6 md:px-12 lg:px-24 text-center max-w-[1440px] mx-auto overflow-hidden rounded-3xl my-16 border border-slate-800 bg-gradient-to-b from-[#090e1f] to-[#050813]">
      <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Let's Build Your Next <br /> Digital Product
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto font-light">
          Empower your team with clean software design, elastic architectures, and certified staff solutions architects.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
