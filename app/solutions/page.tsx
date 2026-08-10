import React from 'react';
import Solutions from '@/sections/Solutions';
import PageHeader from '@/components/PageHeader';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'Enterprise Architecture Solutions',
  description: 'Explore our customizable blueprints for hybrid cloud hosting, ERP modules, and customer experience integrations.',
  slug: '/solutions',
});

export default function SolutionsPage() {
  const breadcrumbs = [{ label: 'Solutions' }];

  return (
    <>
      <PageHeader
        title="Enterprise Solutions"
        description="System integration blueprints designed to align departments, coordinate database files, and optimize costs."
        breadcrumbs={breadcrumbs}
      />
      <Solutions />
      <FooterCTA />
    </>
  );
}
