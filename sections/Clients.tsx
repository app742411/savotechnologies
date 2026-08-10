import React from 'react';
import { Container } from '@/components/Container';
import { clients } from '@/data/mockData';

export function Clients() {
  return (
    <section className="py-12 sm:py-16 bg-slate-950 border-t border-slate-900">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
          Trusted by Industry Leaders Globally
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-75">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="text-sm font-semibold tracking-tight text-slate-400 hover:text-white transition-colors duration-250 cursor-default select-none border border-slate-800/80 bg-slate-900/30 px-6 py-3 rounded-lg"
            >
              {client.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Clients;
