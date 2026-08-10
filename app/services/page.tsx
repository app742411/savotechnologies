import React from 'react';
import Services from '@/sections/Services';
import PageHeader from '@/components/PageHeader';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'Enterprise Software & Cloud Services',
  description: 'View our cloud migration framework, microservices engineering, zero-trust audits, and machine learning solutions.',
  slug: '/services',
});

export default function ServicesPage() {
  const breadcrumbs = [{ label: 'Services' }];

  return (
    <>
      <PageHeader
        title="Enterprise Services"
        description="Comprehensive engineering capabilities designed to automate workflows, secure database systems, and scale operations."
        breadcrumbs={breadcrumbs}
      />
      <Services />
      <FooterCTA />
    </>
  );
}
