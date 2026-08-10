'use client';

import React from 'react';
import Link from 'next/link';
import { services } from '@/data/mockData';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Card } from '@/components/Card';
import { Cloud, Cpu, Activity, ShieldCheck, BarChart3, ArrowRight } from 'lucide-react';

const iconMap = {
  Cloud: Cloud,
  Cpu: Cpu,
  BrainCircuit: Activity, // Use Activity as fallback for BrainCircuit
  ShieldCheck: ShieldCheck,
  BarChart3: BarChart3
};

export function Services() {
  return (
    <section className="py-20 sm:py-28 bg-slate-950">
      <Container>
        <SectionTitle
          title="Enterprise Architecture Services"
          tagline="Our Expertise"
          subtitle="Deploy scalable and secure software pipelines managed by certified staff solutions architects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Cpu;
            return (
              <Card key={idx} className="flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-6">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>
                <div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-blue-500 hover:text-blue-400 group"
                  >
                    <span>Read service architecture details</span>
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

export default Services;
