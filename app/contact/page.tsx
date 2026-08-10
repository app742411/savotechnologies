import React from 'react';
import Contact from '@/sections/Contact';
import PageHeader from '@/components/PageHeader';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'Contact SavoTech Solutions',
  description: 'Book an advisory call. Connect with certified Staff Engineers to evaluate custom project requirements.',
  slug: '/contact',
});

export default function ContactPage() {
  const breadcrumbs = [{ label: 'Contact Us' }];

  return (
    <>
      <PageHeader
        title="Schedule Scoping Call"
        description="Book a dedicated review session with a solution architect to discuss cloud migration, security compliance, or product demo logins."
        breadcrumbs={breadcrumbs}
      />
      <Contact />
    </>
  );
}
