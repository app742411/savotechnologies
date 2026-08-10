'use client';

import React from 'react';
import AboutHero from '@/sections/about/AboutHero';
import CompanyStory from '@/sections/about/CompanyStory';
import CoreValues from '@/sections/about/CoreValues';
import WhyChooseSavo from '@/sections/about/WhyChooseSavo';
import OneTeam from '@/sections/about/OneTeam';
import AboutTestimonials from '@/sections/about/AboutTestimonials';
import CompanyTimeline from '@/sections/about/CompanyTimeline';
import LeadershipTeam from '@/sections/about/LeadershipTeam';
import GlobalPresence from '@/sections/about/GlobalPresence';
import AwardsCertifications from '@/sections/about/AwardsCertifications';
import CompanyCulture from '@/sections/about/CompanyCulture';
import TechEcosystem from '@/sections/about/TechEcosystem';
import TrustedMarquee from '@/sections/about/TrustedMarquee';
import AboutCTA from '@/sections/about/AboutCTA';

export default function AboutPageClient() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070b19] text-slate-100 font-sans">
      {/* Background Noise Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Aurora Radial Glow Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-800/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Reusable Sections */}
      <AboutHero />
      <CompanyStory />
      <CoreValues />
      <WhyChooseSavo />
      <OneTeam />
      <AboutTestimonials />
      {/* <CompanyTimeline />
      <LeadershipTeam />
      <GlobalPresence />
      <AwardsCertifications />
      <CompanyCulture />
      <TechEcosystem />
      <TrustedMarquee /> */}
      <AboutCTA />
    </div>
  );
}
