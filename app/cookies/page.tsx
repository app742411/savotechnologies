import React from 'react';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'Cookie Policy',
  description: 'Learn how we utilize session tracking and local storage to optimize user experience.',
  slug: '/cookies',
});

export default function CookiesPage() {
  const breadcrumbs = [
    { label: 'Legal', href: '#' },
    { label: 'Cookie Settings' }
  ];

  return (
    <>
      <PageHeader
        title="Cookie Policy"
        description="Effective Date: July 30, 2026. This policy outlines our utilization of local browser files to verify session tokens."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-slate-950 text-slate-300">
        <Container className="max-w-3xl prose prose-invert space-y-8 text-sm sm:text-base leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">1. Functional Cookies</h2>
            <p>
              We utilize essential cookies to retain active navigation selections, mega menu dropdown status, dashboard logins, and security challenge tokens. These files do not capture user-identifying search parameters.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">2. Performance Analytics</h2>
            <p>
              To maintain our Lighthouse score, we track anonymous request counts and load times across components. This helps us optimize layouts and adjust resource prefetching logic.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">3. Deactivation Settings</h2>
            <p>
              Users can modify cookie authorization settings directly in their web browser options. Disabling functional cookies may disrupt subpage interactive states like forms and modal visibility.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
