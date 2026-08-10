import React from 'react';
import { caseStudies } from '@/data/mockData';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { ArrowRight } from 'lucide-react';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'Client Success Case Studies',
  description: 'Read how we migrated databases, secured networks, and saved client costs.',
  slug: '/case-studies',
});

export default function CaseStudiesPage() {
  const breadcrumbs = [{ label: 'Case Studies' }];

  return (
    <>
      <PageHeader
        title="Case Studies"
        description="Detailed reviews of client milestones, security challenges, and system outcomes delivered by our engineering teams."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-slate-950">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, idx) => (
              <Card key={idx} className="flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-500 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded block w-fit mb-4">
                    {caseStudy.industry}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {caseStudy.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {caseStudy.challenge.substring(0, 120)}...
                  </p>

                  {/* Top outcomes preview */}
                  <div className="border-t border-slate-800/80 pt-4 mb-6 grid grid-cols-2 gap-2">
                    {caseStudy.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="text-emerald-500 text-sm font-bold block">{m.value}</span>
                        <span className="text-[9px] text-slate-500 uppercase font-semibold">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button href={`/case-studies/${caseStudy.slug}`} variant="outline" size="sm" className="w-full">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
