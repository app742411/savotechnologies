import React from 'react';
import { notFound } from 'next/navigation';
import { industries } from '@/data/mockData';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/Button';
import { ArrowRight, AlertCircle, ShieldAlert, Award } from 'lucide-react';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map(i => ({
    slug: i.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find(i => i.slug === slug);
  if (!industry) return {};

  return getMetadata({
    title: `${industry.title} Tech Solutions`,
    description: industry.shortDescription,
    slug: `/industries/${slug}`,
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find(i => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Industries', href: '/industries' },
    { label: industry.title }
  ];

  return (
    <>
      <PageHeader
        title={industry.title}
        description={industry.shortDescription}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-slate-950">
        <Container className="max-w-5xl">
          <div className="space-y-12">
            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Sector Overview</h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {industry.description}
              </p>
            </div>

            {/* Challenges & Solutions Split Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenges */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4.5">
                <div className="flex items-center space-x-3 text-red-400">
                  <ShieldAlert className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">Operational Challenges</h3>
                </div>
                <ul className="space-y-3">
                  {industry.challenges.map((chal, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0" />
                      <span>{chal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4.5">
                <div className="flex items-center space-x-3 text-blue-400">
                  <AlertCircle className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">SavoTech Interventions</h3>
                </div>
                <ul className="space-y-3">
                  {industry.solutions.map((sol, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results Callout */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
              <div className="flex items-center space-x-3 text-emerald-400">
                <Award className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">Case Achievements & Results</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {industry.results.map((res, idx) => (
                  <div key={idx} className="p-4 bg-slate-950 border border-slate-850 rounded-xl">
                    <span className="text-emerald-500 font-extrabold text-lg sm:text-xl block mb-1">
                      {res.split(' ')[0]}
                    </span>
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      {res.split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-blue-600/10 border border-blue-500/20 p-6 rounded-2xl gap-4">
              <div className="text-center sm:text-left">
                <h4 className="text-sm font-bold text-white">Have similar sector requirements?</h4>
                <p className="text-slate-400 text-xs mt-1">Let&apos;s compile custom scoping outlines.</p>
              </div>
              <Button href="/contact" variant="primary" size="md">
                <span>Contact Solution Team</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
