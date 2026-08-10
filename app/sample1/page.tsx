import React from 'react';

import About from '@/sections/About';
import Capabilities from '@/sections/Capabilities';
import SolutionsCopy from '@/sections/Solutionscopy';
import TechnologyStack from '@/sections/TechnologyStack';
import IndustriesPortfolio from '@/sections/IndustriesPortfolio';
import Products from '@/sections/Products';
import LatestBlogs from '@/sections/LatestBlogs';
import ResearchSection from '@/sections/ResearchSection';
import Testimonials from '@/sections/Testimonials';
import CTA from '@/sections/CTA';
import { getMetadata, jsonLd } from '@/lib/seo';
import Script from 'next/script';
import HeroCopy from '@/sections/Herocopy';

export const metadata = getMetadata({
  title: 'Sample Page 1 - Enterprise Architecture & Cloud Migration Solutions',
  description: 'Certified Staff Solution Architects designing resilient hybrid cloud, microservices databases, and high-performance React networks.',
  slug: 'sample1',
});

export default function SamplePage1() {
  const orgSchema = jsonLd.organization();

  return (
    <>
      {/* Schema Markup */}
      <Script
        id="org-jsonld-sample1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Page Sections */}
      <HeroCopy />
      <About />
      <Capabilities />
      <SolutionsCopy />
      <TechnologyStack />
      <IndustriesPortfolio />
      <Products />
      <LatestBlogs dark={true} />
      <ResearchSection dark={true} />
      <Testimonials />
      <CTA />
    </>
  );
}
