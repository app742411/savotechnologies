import React from 'react';
import { getMetadata } from '@/lib/seo';
import HeroV2 from '@/sections/HeroV2';
import AboutV2 from '@/sections/AboutV2';
import ServicesAccordionV2 from '@/sections/ServicesAccordionV2';
import ExpertiseAndTechV2 from '@/sections/ExpertiseAndTechV2';

export const metadata = getMetadata({
  title: 'Savo technologies - Home V2',
  description: 'Home Version 2 - AI Driven Engineering',
  slug: '/homev2',
});

export default function HomeV2Page() {
  return (
    <div className="w-full min-h-screen">
      <HeroV2 />
      <AboutV2 />
      <ServicesAccordionV2 />
      <ExpertiseAndTechV2 />
    </div>
  );
}

