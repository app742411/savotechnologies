import React from 'react';
import Testimonials from '@/sections/Testimonials';
import Clients from '@/sections/Clients';
import PageHeader from '@/components/PageHeader';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'Client Reviews & Testimonials',
  description: 'Read recommendations and operational testimonials from corporate Chief Technology Officers and engineering leads.',
  slug: '/testimonials',
});

export default function TestimonialsPage() {
  const breadcrumbs = [{ label: 'Testimonials' }];

  return (
    <>
      <PageHeader
        title="Client Testimonials"
        description="Verify how we help leading global companies optimize databases, secure network interfaces, and scale cloud environments."
        breadcrumbs={breadcrumbs}
      />
      <Testimonials />
      <Clients />
      <FooterCTA />
    </>
  );
}
