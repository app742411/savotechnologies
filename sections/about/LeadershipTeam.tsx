'use client';

import React from 'react';
import { Users } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alexander Savo',
    role: 'Chief Executive Officer & Founder',
    bio: 'Former Staff Engineer at AWS with 15+ years experience building highly concurrent database architectures and cloud systems.',
    image: '/images/users/leader1.png',
    linkedin: '#'
  },
  {
    name: 'Dr. Sarah Jenkins',
    role: 'Head of AI Solutions',
    bio: 'PhD in Machine Learning from MIT. Architect of enterprise scale predictive models and custom corporate agent systems.',
    image: '/images/users/leader2.jpg',
    linkedin: '#'
  },
  {
    name: 'Marcus Vance',
    role: 'Staff Infrastructure Architect',
    bio: 'Lead developer on hybrid cloud migrations and developer platform tools. Expert in high-performance Kubernetes scaling.',
    image: '/images/users/leader3.jpg',
    linkedin: '#'
  },
  {
    name: 'Elena Rostova',
    role: 'Director of Cyber Defense',
    bio: 'Former lead security auditor at a global top-5 bank. Specialist in Zero-Trust architectures and regulatory compliance checklists.',
    image: '/images/users/leader4.jpg',
    linkedin: '#'
  }
];

export default function LeadershipTeam() {
  return (
    <section className="relative z-10 w-full bg-white border-t border-slate-200 py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 font-bold">Leadership</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Meet the Architects</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-none border border-slate-200 bg-slate-55 transition-all duration-500 hover:border-blue-500 hover:-translate-y-1.5 shadow-sm hover:shadow-md"
            >
              {/* Portrait */}
              <div className="relative overflow-hidden aspect-[4/5] bg-slate-900">
                <div className="absolute inset-0 bg-blue-900/5 mix-blend-color group-hover:mix-blend-normal transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-10" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-950/90 z-20 flex flex-col justify-end p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-sm text-slate-200 leading-relaxed mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    className="flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>

                {/* Fallback Graphic */}
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-500">
                  <Users className="w-12 h-12" />
                </div>

                <img
                  src={member.image}
                  alt={member.name}
                  className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Details */}
              <div className="p-6 relative z-10 bg-white border-t border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 leading-tight">{member.name}</h4>
                <span className="text-xs text-blue-600 font-semibold block mt-1">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
