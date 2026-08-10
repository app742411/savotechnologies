'use client';

import React from 'react';
import Link from 'next/link';
import { industries } from '@/data/mockData';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Card } from '@/components/Card';
import { Activity, DollarSign, ShoppingBag, Factory, ArrowRight } from 'lucide-react';

const iconMap = {
  Activity: Activity,
  DollarSign: DollarSign,
  ShoppingBag: ShoppingBag,
  Factory: Factory
};

export function Industries() {
  return (
    <section className="py-20 sm:py-28 bg-slate-950 border-t border-slate-900">
      <Container>
        <SectionTitle
          title="Tailored Solutions Across Industries"
          tagline="Sectors We Serve"
          subtitle="Engineered systems built to address unique industry compliance requirements, data volumes, and security regulations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {industries.map((ind, idx) => {
            const IconComponent = iconMap[ind.icon as keyof typeof iconMap] || Activity;
            return (
              <Card key={idx} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{ind.title}</h3>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {ind.shortDescription}
                  </p>
                  
                  {/* Results highlight tags */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Proven Outcomes</h4>
                    <div className="flex flex-wrap gap-2">
                      {ind.results.map((res, rIdx) => (
                        <span key={rIdx} className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full">
                          {res}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-blue-500 hover:text-blue-400 group"
                  >
                    <span>View industry challenges & case studies</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Industries;
