import React from 'react';
import { careers } from '@/data/mockData';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { ArrowRight, MapPin, Briefcase, Calendar } from 'lucide-react';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'Careers & Open Engineering Positions',
  description: 'Join our team. View open positions for Cloud Architects, Frontend Engineers, and AI researchers.',
  slug: '/careers',
});

export default function CareersPage() {
  const breadcrumbs = [{ label: 'Careers' }];

  return (
    <>
      <PageHeader
        title="Careers at SavoTech"
        description="Build high-performance distributed systems. Join an engineering-led culture with zero bureaucracy."
        breadcrumbs={breadcrumbs}
      />

      {/* Roster list */}
      <section className="py-20 bg-slate-950">
        <Container className="max-w-4xl">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white mb-6">Active Openings</h2>
            
            {careers.map((job, idx) => (
              <Card key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-500 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded block w-fit">
                    {job.department}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {job.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-xs text-slate-500">
                    <div className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-3.5 h-3.5 mr-1" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      <span>{job.experience} Required</span>
                    </div>
                  </div>
                </div>

                <Button href={`/careers/${job.slug}`} variant="outline" size="sm" className="w-full sm:w-auto">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
