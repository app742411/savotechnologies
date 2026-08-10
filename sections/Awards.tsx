import React from 'react';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { awards } from '@/data/mockData';
import { Award, Trophy } from 'lucide-react';

export function Awards() {
  return (
    <section className="py-20 sm:py-28 bg-slate-950 border-t border-slate-900" id="awards">
      <Container>
        <SectionTitle
          title="Enterprise Achievements"
          tagline="Awards & Honors"
          subtitle="Recognition of our commitment to system reliability, software design excellence, and cloud-native solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {awards.map((aw, idx) => (
            <div
              key={idx}
              className="flex items-start p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
            >
              <div className="p-3 bg-blue-600/10 border border-blue-500/20 rounded-lg text-blue-500 mr-5">
                {aw.icon === 'Trophy' ? <Trophy className="w-6 h-6" /> : <Award className="w-6 h-6" />}
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-500">{aw.year} • {aw.organization}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-2">{aw.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {aw.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Awards;
