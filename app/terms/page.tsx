import React from 'react';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'Terms of Service',
  description: 'Terms and licensing rules for SavoTech consulting services, software, and products.',
  slug: '/terms',
});

export default function TermsPage() {
  const breadcrumbs = [
    { label: 'Legal', href: '#' },
    { label: 'Terms of Service' }
  ];

  return (
    <>
      <PageHeader
        title="Terms of Service"
        description="Effective Date: July 30, 2026. Review legal conditions regarding custom code delivery, SLA guarantees, and licensing."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-slate-950 text-slate-300">
        <Container className="max-w-3xl prose prose-invert space-y-8 text-sm sm:text-base leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">1. Service Scope & Custom Sprints</h2>
            <p>
              SavoTech Solutions delivers software development, cloud infrastructure design, and zero-trust security audits under agreed Statements of Work (SOW). All sprints and milestones are subject to peer testing cycles prior to cutover cut.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">2. SLA Guarantee & Liability</h2>
            <p>
              We provide a 99.99% system availability guarantee on infrastructures designed and managed under active SLA contracts. SavoTech is not liable for cloud hosting fee spikes incurred outside automated scaling ranges.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">3. Intellectual Property Rights</h2>
            <p>
              Upon receipt of final project payments, ownership of custom repositories, Docker files, next scripts, and design configurations transfers entirely to the client under standard MIT or proprietary licenses.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
