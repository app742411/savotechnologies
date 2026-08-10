import React from 'react';
import Gallery from '@/sections/Gallery';
import PageHeader from '@/components/PageHeader';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'Systems & Office Gallery',
  description: 'Inside SavoTech. Explore our Secure Operations Center and system engineering labs.',
  slug: '/gallery',
});

export default function GalleryPage() {
  const breadcrumbs = [{ label: 'Gallery' }];

  return (
    <>
      <PageHeader
        title="Inside SavoTech"
        description="Explore the laboratories and server centers where our team designs, monitors, and tests enterprise platforms."
        breadcrumbs={breadcrumbs}
      />
      <Gallery />
      <FooterCTA />
    </>
  );
}
