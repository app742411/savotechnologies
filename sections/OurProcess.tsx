import React from 'react';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';

export function OurProcess() {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'Aligning on business goals and technical roadblocks.' },
    { num: '02', title: 'Architecture Plan', desc: 'Drafting structured system design and diagrams.' },
    { num: '03', title: 'System Build', desc: 'Agile development phases with bi-weekly updates.' },
    { num: '04', title: 'Rigorous Testing', desc: 'Validating response latencies and zero-trust policies.' },
    { num: '05', title: 'Deployment', desc: 'Zero-downtime cutover and operations handbook handover.' }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-950 border-t border-slate-900">
      <Container>
        <SectionTitle
          title="How We Deliver Value"
          tagline="Our Process"
          subtitle="Our step-by-step engagement model built to align engineering pipelines with executive milestones."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 relative overflow-hidden group hover:border-slate-700 transition-colors"
            >
              <div className="text-3xl font-extrabold text-blue-500/10 absolute top-4 right-4 group-hover:text-blue-500/20 transition-colors">
                {step.num}
              </div>
              <h3 className="text-sm font-bold text-white mb-2 pt-4">{step.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default OurProcess;
