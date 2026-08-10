import React from 'react';
import { notFound } from 'next/navigation';
import { solutions } from '@/data/mockData';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/Button';
import { ArrowRight, CheckCircle2, Cpu } from 'lucide-react';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutions.map(s => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find(s => s.slug === slug);
  if (!solution) return {};

  return getMetadata({
    title: `${solution.title} Solution Architecture`,
    description: solution.shortDescription,
    slug: `/solutions/${slug}`,
  });
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find(s => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Solutions', href: '/solutions' },
    { label: solution.title }
  ];

  return (
    <>
      <PageHeader
        title={solution.title}
        description={solution.shortDescription}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-slate-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Block: Description & Specs */}
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Solution Overview</h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {solution.description}
                </p>
              </div>

              {/* Architecture Blueprint List */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Cpu className="w-5 h-5 text-blue-500 mr-3" />
                  <span>Architecture Architecture Blueprint</span>
                </h3>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                  {solution.architecture.map((arch, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-blue-500 mr-3 flex-shrink-0 font-bold">
                        {idx + 1}
                      </span>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{arch}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Ideal Use Cases</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {solution.useCases.map((uc, idx) => (
                    <div key={idx} className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl space-y-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      <p className="text-slate-300 text-xs font-semibold">{uc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Block: Sidebar */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-[100px]">
              {/* Features List */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3">
                  Solution Pillars
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
                  {solution.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consult callout */}
              <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-2xl p-6 text-center space-y-4">
                <h3 className="text-base font-bold text-white">Ready to implement?</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Discuss code integration timelines and sandboxed environment launches with engineers.
                </p>
                <Button href="/contact" variant="primary" size="md" className="w-full justify-center">
                  <span>Contact Solutions Lab</span>
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
