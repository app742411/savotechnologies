import React from 'react';
import Products from '@/sections/Products';
import PageHeader from '@/components/PageHeader';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'Enterprise Software Products',
  description: 'View SavoHRM, SavoCRM, and SavoOps products to automate corporate workflows and system tracking.',
  slug: '/products',
});

export default function ProductsPage() {
  const breadcrumbs = [{ label: 'Products' }];

  return (
    <>
      <PageHeader
        title="Enterprise Products"
        description="Out-of-the-box software products engineered to resolve human capital, sales tracking, and IT operations infrastructure requirements."
        breadcrumbs={breadcrumbs}
      />
      <Products />
      <FooterCTA />
    </>
  );
}
