import React from 'react';
import AboutPageClient from '@/components/AboutPageClient';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'About SavoTech Solutions',
  description: 'Learn about our engineering values, executive staff, and background building secure cloud architectures.',
  slug: '/about',
});

export default function AboutPage() {
  return <AboutPageClient />;
}
