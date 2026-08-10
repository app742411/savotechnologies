import React from 'react';
import FAQ from '@/sections/FAQ';
import Awards from '@/sections/Awards';
import PageHeader from '@/components/PageHeader';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata, jsonLd } from '@/lib/seo';
import { faqs } from '@/data/mockData';
import Script from 'next/script';

export const metadata = getMetadata({
  title: 'Frequently Asked Questions (FAQ)',
  description: 'Find answers about migration cycles, compliance checklists, security guarantees, and systems architecture.',
  slug: '/faq',
});

export default function FAQPage() {
  const breadcrumbs = [{ label: 'FAQ' }];

  const faqSchema = jsonLd.faq(faqs);

  return (
    <>
      {/* FAQ JSON-LD Structured Data */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHeader
        title="FAQ & Corporate Info"
        description="Clear operational details about code deployment cycles, server migration guidelines, and team structures."
        breadcrumbs={breadcrumbs}
      />
      <FAQ />
      <Awards />
      <FooterCTA />
    </>
  );
}
