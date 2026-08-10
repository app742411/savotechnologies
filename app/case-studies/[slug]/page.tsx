import React from 'react';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/mockData';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/Button';
import { ArrowRight, HelpCircle, Lightbulb, TrendingUp } from 'lucide-react';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map(c => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const caseStudy = caseStudies.find(c => c.slug === slug);
  if (!caseStudy) return {};

  return getMetadata({
    title: `Case Study: ${caseStudy.title}`,
    description: caseStudy.challenge,
    slug: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = caseStudies.find(c => c.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Case Studies', href: '/case-studies' },
    { label: caseStudy.title }
  ];

  return (
    <>
      <PageHeader
        title={caseStudy.title}
        description={`Client profile: ${caseStudy.client} • Industry: ${caseStudy.industry}`}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-slate-950">
        <Container className="max-w-5xl">
          <div className="space-y-12">
            {/* Outcome KPI Stats bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
              {caseStudy.metrics.map((metric, idx) => (
                <div key={idx} className="p-4 bg-slate-950 border border-slate-850 rounded-xl">
                  <span className="text-emerald-500 font-extrabold text-2xl sm:text-3xl block mb-1">
                    {metric.value}
                  </span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Structured review */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Main Narrative */}
              <div className="md:col-span-8 space-y-8">
                {/* Challenge */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <HelpCircle className="w-5 h-5 text-red-500 mr-2.5" />
                    <span>The Challenge</span>
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Lightbulb className="w-5 h-5 text-blue-500 mr-2.5" />
                    <span>Our Solution Intervention</span>
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <TrendingUp className="w-5 h-5 text-emerald-500 mr-2.5" />
                    <span>The Outcome</span>
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {caseStudy.result}
                  </p>
                </div>
              </div>

              {/* Sidebar tags & consult */}
              <div className="md:col-span-4 space-y-6 md:sticky md:top-[100px]">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3">
                    Project Attributes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-950 border border-slate-800 text-slate-300 px-3 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-2xl p-6 text-center space-y-4">
                  <h4 className="text-base font-bold text-white">Achieve similar outcomes?</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Let&apos;s collaborate on scoping checklists to optimize your team&apos;s systems.
                  </p>
                  <Button href="/contact" variant="primary" size="md" className="w-full justify-center">
                    <span>Contact Solutions Architect</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
