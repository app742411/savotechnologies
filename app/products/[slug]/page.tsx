import React from 'react';
import { notFound } from 'next/navigation';
import { products } from '@/data/mockData';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/Button';
import { ArrowRight, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata, jsonLd } from '@/lib/seo';
import Script from 'next/script';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map(p => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) return {};

  return getMetadata({
    title: `${product.title} - ${product.tagline}`,
    description: product.shortDescription,
    slug: `/products/${slug}`,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Products', href: '/products' },
    { label: product.title }
  ];

  const productSchema = jsonLd.product({
    title: product.title,
    shortDescription: product.shortDescription,
    slug: product.slug
  });

  return (
    <>
      <Script
        id={`product-${product.slug}-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <PageHeader
        title={product.title}
        description={product.tagline}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-slate-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Block: Description & Pricing */}
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Product Description</h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Core Features */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Core Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start p-4 bg-slate-900/40 border border-slate-800 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3.5 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-xs sm:text-sm leading-normal">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Cards if available */}
              {product.pricing && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Tag className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Deployment Plans & Pricing</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {product.pricing.map((plan, idx) => (
                      <div
                        key={idx}
                        className={`border rounded-2xl p-6 flex flex-col justify-between ${
                          idx === 1
                            ? 'border-blue-500 bg-blue-950/10'
                            : 'border-slate-800 bg-slate-900/40'
                        }`}
                      >
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-blue-500 block mb-1">
                            {plan.plan}
                          </span>
                          <div className="flex items-baseline mb-4">
                            <span className="text-2xl sm:text-3xl font-extrabold text-white">{plan.price}</span>
                            <span className="text-xs text-slate-400 ml-2">/ {plan.period}</span>
                          </div>
                          <ul className="space-y-2.5 text-xs text-slate-400 mb-6">
                            {plan.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-center">
                                <span className="w-1 h-1 bg-blue-500 rounded-full mr-2" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button href="/contact" variant={idx === 1 ? 'primary' : 'outline'} size="sm" className="w-full">
                          Get Started
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Block: Sidebar */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-[100px]">
              {/* Product Specifications */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3 flex items-center">
                  <ShieldCheck className="w-4 h-4 text-blue-500 mr-2" />
                  <span>Product Specifications</span>
                </h3>
                <div className="space-y-4">
                  {Object.entries(product.specifications).map(([key, val], idx) => (
                    <div key={idx} className="text-xs">
                      <span className="text-slate-500 block uppercase tracking-wider font-semibold mb-1">{key}</span>
                      <span className="text-slate-300 font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation request */}
              <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-2xl p-6 text-center space-y-4">
                <h3 className="text-base font-bold text-white">Need a live product demo?</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Request a sandboxed staging login or custom pricing quotes for massive volumes.
                </p>
                <Button href="/contact" variant="primary" size="md" className="w-full justify-center">
                  <span>Request Live Demo</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
