'use client';

import React from 'react';
import { Target, Compass, Building2 } from 'lucide-react';

export default function MissionVisionValues() {
  return (
    <section className="relative z-10 w-full bg-white border-t border-slate-200 py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 font-bold">Our North Star</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Enterprise DNA & Core Values</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="group relative rounded-2xl border border-slate-200 bg-slate-55/50 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/5 rounded-2xl pointer-events-none group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wider">Mission</h4>
            <p className="text-slate-600 leading-relaxed font-light">
              Building meaningful digital products that drive structural improvement in enterprise agility and consumer value.
            </p>
          </div>

          {/* Vision */}
          <div className="group relative rounded-2xl border border-slate-200 bg-slate-55/50 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/5 rounded-2xl pointer-events-none group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wider">Vision</h4>
            <p className="text-slate-600 leading-relaxed font-light">
              Become the global technology partner that defines cloud resilience, security excellence, and AI enablement for the Fortune 500.
            </p>
          </div>

          {/* Values */}
          <div className="group relative rounded-2xl border border-slate-200 bg-slate-55/50 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/5 rounded-2xl pointer-events-none group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wider">Values</h4>
            <ul className="grid grid-cols-2 gap-3 text-slate-700 font-semibold">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Innovation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Trust
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Quality
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Ownership
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
