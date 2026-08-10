import React from 'react';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';

export function Timeline() {
  const milestones = [
    { year: 'Phase 1', title: 'Scoping & Assessment', desc: 'Detailed code and cloud infrastructure review to map legacy systems, databases, and dependencies.' },
    { year: 'Phase 2', title: 'Target Design & Sandbox', desc: 'Drafting architectures, configuring security guidelines, and launching sandboxed test clusters.' },
    { year: 'Phase 3', title: 'Zero-Downtime Data Migration', desc: 'Secure database replication, sync checkpoints, and gradual API traffic routing.' },
    { year: 'Phase 4', title: 'Compliance & Penetration Tests', desc: 'Simulated cyber attacks, access controls validation, and automated compliance report generation.' },
    { year: 'Phase 5', title: 'Handover & Day-2 Operations', desc: 'Training staff, establishing logging channels, and launching automated server scaling rules.' }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-950 border-t border-slate-900">
      <Container>
        <SectionTitle
          title="Project Lifecycle Roadmap"
          tagline="Our Methodology"
          subtitle="A deterministic, phased process designed to ensure zero downtime and absolute security during transitions."
        />

        <div className="relative border-l border-slate-800 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-12">
          {milestones.map((mil, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] rounded-full border border-blue-500 bg-slate-950 group-hover:bg-blue-500 transition-colors duration-300" />
              
              <div>
                <span className="text-xs font-semibold tracking-wider text-blue-500 uppercase block mb-1">
                  {mil.year}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{mil.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {mil.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Timeline;
