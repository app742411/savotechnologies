'use client';

import React from 'react';

const officeCultureImages = [
  { url: '/images/111.png', label: 'Collaboration' },
  { url: '/images/ideation_team_notes.png', label: 'Innovation' },
  { url: '/images/transformation_mockup.png', label: 'Learning' },
  { url: '/images/design_mockup.png', label: 'Ownership' }
];

export default function CompanyCulture() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#090e1f] border-t border-slate-900">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Our Culture</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Life inside SAVO</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {officeCultureImages.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-2xl border border-slate-800 aspect-video lg:aspect-square bg-slate-950"
            >
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 z-10 transition duration-500" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-lg text-xs font-semibold text-slate-200">
                  {img.label}
                </span>
              </div>
              <img 
                src={img.url} 
                alt={img.label} 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
