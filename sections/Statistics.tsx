import React from 'react';
import { Container } from '@/components/Container';

export function Statistics() {
  const stats = [
    { value: '99.99%', label: 'Systems SLA Uptime' },
    { value: '$12M+', label: 'Client Cloud Costs Optimizations' },
    { value: '350M+', label: 'Daily Secure API Requests' },
    { value: '100%', label: 'Audit Compliance Success' }
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-900 border-y border-slate-800/80">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Statistics;
