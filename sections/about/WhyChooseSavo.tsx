'use client';

import React from 'react';
import { 
  Layers, 
  Users, 
  Sparkles, 
  Cloud, 
  Shield, 
  CheckCircle2 
} from 'lucide-react';

interface WhySavoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const whySavoItems: WhySavoItem[] = [
  {
    title: 'Enterprise Architecture',
    description: 'We construct blueprints for high-availability systems with no single points of failure.',
    icon: <Layers className="w-6 h-6 text-blue-400" />
  },
  {
    title: 'Agile Teams',
    description: 'Rapid iterations, daily syncs, and dedicated engineers aligned to your business objectives.',
    icon: <Users className="w-6 h-6 text-blue-400" />
  },
  {
    title: 'AI First Integration',
    description: 'Deploying autonomous agentic frameworks and predictive intelligence safely at scale.',
    icon: <Sparkles className="w-6 h-6 text-blue-400" />
  },
  {
    title: 'Cloud Native design',
    description: 'Fully automated provisioning, Terraform IAC pipelines, and Kubernetes orchestration.',
    icon: <Cloud className="w-6 h-6 text-blue-400" />
  },
  {
    title: 'Security Focus',
    description: 'Adhering to strict SOC2, HIPAA, and Zero-Trust standards in every code delivery.',
    icon: <Shield className="w-6 h-6 text-blue-400" />
  },
  {
    title: 'Long Term Support',
    description: 'SLA guarantees, continuous monitoring, and proactive modernization cycles.',
    icon: <CheckCircle2 className="w-6 h-6 text-blue-400" />
  }
];

export default function WhyChooseSavo() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#090e1f] border-t border-slate-900">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Why SAVO</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Architected for Longevity</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whySavoItems.map((item, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
