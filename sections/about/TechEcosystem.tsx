'use client';

import React from 'react';
import { Cpu, Network, Cloud, Database } from 'lucide-react';

interface TechCategory {
  category: string;
  icon: React.ReactNode;
  techs: string[];
}

const techEcosystem: TechCategory[] = [
  {
    category: 'Frontend',
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vue', 'Angular']
  },
  {
    category: 'Backend',
    icon: <Network className="w-5 h-5 text-blue-400" />,
    techs: ['Node.js', 'Go', '.NET Core', 'Java Spring', 'Python FastAPI']
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
    techs: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker']
  },
  {
    category: 'Database & AI',
    icon: <Database className="w-5 h-5 text-blue-400" />,
    techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'PyTorch', 'OpenAI API']
  }
];

export default function TechEcosystem() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto border-t border-slate-900">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Tech Stack</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Technology Ecosystem</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techEcosystem.map((item, idx) => (
          <div 
            key={idx}
            className="p-6 rounded-2xl border border-slate-800 bg-slate-900/20 hover:border-blue-600/40 transition duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white">{item.category}</h4>
            </div>
            <ul className="space-y-2.5">
              {item.techs.map((tech, tIdx) => (
                <li key={tIdx} className="flex items-center gap-2 text-slate-400 text-sm">
                  <span className="w-1 h-1 rounded-full bg-blue-400" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
