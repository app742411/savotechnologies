import React from 'react';
import Industries from '@/sections/Industries';
import PageHeader from '@/components/PageHeader';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'Industry Expertise',
  description: 'View our systems solutions for healthcare, banking, retail, and smart logistics sectors.',
  slug: '/industries',
});

export default function IndustriesPage() {
  const breadcrumbs = [{ label: 'Industries' }];

  return (
    <>
      <PageHeader
        title="Industry Solutions"
        description="Bespoke software frameworks and cloud designs tailored to meet strict sector compliance and scaling goals."
        breadcrumbs={breadcrumbs}
      />
      <Industries />
      <FooterCTA />
    </>
  );
}
