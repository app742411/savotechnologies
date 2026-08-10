import React from 'react';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Capabilities from '@/sections/Capabilities';
import Solutions from '@/sections/Solutions';
import TechnologyStack from '@/sections/TechnologyStack';
import IndustriesPortfolio from '@/sections/IndustriesPortfolio';
import Products from '@/sections/Products';
import LatestBlogs from '@/sections/LatestBlogs';
import ResearchSection from '@/sections/ResearchSection';
import Testimonials from '@/sections/Testimonials';
import { getMetadata, jsonLd } from '@/lib/seo';
import Script from 'next/script';

export const metadata = getMetadata({
  title: 'Savo technologies',
  description: 'Certified Staff Solution Architects designing resilient hybrid cloud, microservices databases, and high-performance React networks.',
  slug: '',
});

export default function HomePage() {
  const orgSchema = jsonLd.organization();

  return (
    <>
      {/* Schema Markup */}
      <Script
        id="org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Page Sections */}
      <Hero />
      <About />
      <Capabilities />

      {/* Shared Background Container for Solutions & TechnologyStack */}
      <section
        className="w-full relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/bgtech.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Solutions />
        <TechnologyStack />
      </section>

      <IndustriesPortfolio />
      <Products />
      <LatestBlogs />
      <ResearchSection />
      <Testimonials />
    </>
  );
}


