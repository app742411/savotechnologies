import React from 'react';
import { Container } from '@/components/Container';
import { partners } from '@/data/mockData';

export function Partners() {
  return (
    <section className="py-12 bg-slate-900 border-t border-slate-800">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
          Enterprise Integration & Infrastructure Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-400 hover:text-blue-500 transition-colors duration-200 border border-slate-800 bg-slate-950 px-5 py-2.5 rounded-lg"
            >
              {partner.name}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Partners;
