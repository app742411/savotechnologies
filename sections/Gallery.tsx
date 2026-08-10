import React from 'react';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';

export function Gallery() {
  const galleryItems = [
    { title: 'Secure Operations Center', desc: 'Continuous server metrics tracking.', category: 'Operations' },
    { title: 'Collaboration Spaces', desc: 'Design sessions with solution architects.', category: 'Collaboration' },
    { title: 'Advanced Systems Lab', desc: 'Testing next-gen hardware & nodes.', category: 'Hardware R&D' },
    { title: 'Modern Workspace Design', desc: 'Our Austin, Texas technology center.', category: 'Culture' }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-950 border-t border-slate-900">
      <Container>
        <SectionTitle
          title="Inside SavoTech"
          tagline="Our Office & Labs"
          subtitle="Explore the facilities where our solution architects and engineers monitor systems and design platforms."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 min-h-[220px] flex flex-col justify-end p-5 transition-all duration-350 hover:border-slate-700"
            >
              {/* Abstract Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 space-y-1.5">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-blue-500 bg-blue-500/10 border border-blue-500/25 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
