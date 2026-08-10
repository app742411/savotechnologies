import React from 'react';
import { notFound } from 'next/navigation';
import { services } from '@/data/mockData';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata, jsonLd } from '@/lib/seo';
import Script from 'next/script';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map(s => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return {};

  return getMetadata({
    title: `${service.title} Services`,
    description: service.shortDescription,
    slug: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Services', href: '/services' },
    { label: service.title }
  ];

  const serviceSchema = jsonLd.service({
    title: service.title,
    description: service.description,
    slug: service.slug
  });

  return (
    <>
      {/* Schema Script */}
      <Script
        id={`service-${service.slug}-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHeader
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-slate-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Narrative description */}
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Overview</h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features list */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start p-4 bg-slate-900/40 border border-slate-800 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3.5 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-xs sm:text-sm leading-normal">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits list */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Key Outcomes & Benefits</h3>
                <div className="space-y-3.5">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-[100px]">
              {/* Tech Stack card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-950 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA callout */}
              <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-2xl p-6 text-center space-y-4">
                <h3 className="text-base font-bold text-white">Need custom scope guidelines?</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Connect with a solution architect to discuss dependencies, timing, and pricing logs.
                </p>
                <Button href="/contact" variant="primary" size="md" className="w-full justify-center">
                  <span>Start Scoping Review</span>
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
