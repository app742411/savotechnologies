import React from 'react';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'Privacy Policy',
  description: 'SavoTech corporate privacy guidelines, cookies, data storage, and access rights disclosures.',
  slug: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { label: 'Legal', href: '#' },
    { label: 'Privacy Policy' }
  ];

  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Effective Date: July 30, 2026. This document details how SavoTech Solutions Inc. handles data files, credentials, and customer metrics logs."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-slate-950 text-slate-300">
        <Container className="max-w-3xl prose prose-invert space-y-8 text-sm sm:text-base leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">1. Scope of Data Collection</h2>
            <p>
              We collect information to deliver solutions, products, and custom consultations. Data collected includes corporate emails, contact details submitted via forms, server performance metrics logs, and system credentials provided under NDA.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">2. Security Measures & Encryption</h2>
            <p>
              All customer metrics, repository codebases, and credentials are encrypted using industry standard protocols: TLS 1.3 in transit and AES-256 at rest with customer-managed keys (CMK) optional. Access is strictly governed under role-based Zero-Trust access logs.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">3. Third-Party Disclosures</h2>
            <p>
              We do not sell, rent, or lease customer databases or code repositories to advertising networks. System logs may only be shared with authorized infrastructure partners (AWS, GCP, Azure) to trace environment bugs.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
