'use client';

import React from 'react';
import { Award } from 'lucide-react';

export default function AwardsCertifications() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto border-t border-slate-900">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Compliance</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Credentials & Partners</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {[
          { title: 'ISO 27001', desc: 'Information Security' },
          { title: 'AWS Partner', desc: 'Select Tier Specialist' },
          { title: 'Microsoft Partner', desc: 'Azure Cloud Services' },
          { title: 'Google Partner', desc: 'GCP Architect solutions' },
          { title: 'SOC 2 Compliant', desc: 'Operational Audited' }
        ].map((cert, idx) => (
          <div 
            key={idx}
            className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-800/60 bg-slate-900/10 text-center hover:border-slate-700 hover:bg-slate-900/40 transition duration-300"
          >
            <Award className="w-8 h-8 text-blue-400 mb-3" />
            <span className="text-white font-bold text-sm tracking-wide">{cert.title}</span>
            <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">{cert.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
