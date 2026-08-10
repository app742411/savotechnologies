'use client';

import React from 'react';

const trustedBrands = [
  'Microsoft', 'Google', 'Oracle', 'SAP', 'Adobe', 'IBM', 'AWS', 'Deloitte'
];

export default function TrustedMarquee() {
  return (
    <section className="relative py-20 bg-slate-950 border-t border-b border-slate-900/60 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
      
      {/* Sliding Row */}
      <div className="flex gap-16 whitespace-nowrap animate-[marquee_25s_linear_infinite]">
        {[...trustedBrands, ...trustedBrands].map((brand, idx) => (
          <div key={idx} className="flex items-center justify-center text-xl font-bold tracking-widest text-slate-600 uppercase font-sans">
            {brand}
          </div>
        ))}
      </div>

      {/* CSS Keyframes injected directly for the marquee loop */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
