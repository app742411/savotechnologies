import React from 'react';
import { notFound } from 'next/navigation';
import { careers } from '@/data/mockData';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { CareerForm } from '@/components/CareerForm';
import { MapPin, Briefcase, Calendar, Check } from 'lucide-react';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return careers.map(c => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const career = careers.find(c => c.slug === slug);
  if (!career) return {};

  return getMetadata({
    title: `Career: ${career.title}`,
    description: career.shortDescription,
    slug: `/careers/${slug}`,
  });
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const career = careers.find(c => c.slug === slug);

  if (!career) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Careers', href: '/careers' },
    { label: career.title }
  ];

  return (
    <>
      <PageHeader
        title={career.title}
        description={career.shortDescription}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-slate-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Block: Description, Req, Resp */}
            <div className="lg:col-span-7 space-y-10">
              {/* Job Info Header metadata */}
              <div className="flex flex-wrap items-center gap-4.5 p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm">
                <div className="flex items-center text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                  <span>{career.location}</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Briefcase className="w-4 h-4 text-blue-500 mr-2" />
                  <span>{career.type}</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Calendar className="w-4 h-4 text-blue-500 mr-2" />
                  <span>{career.experience} Experience</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Role Description</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {career.description}
                </p>
              </div>

              {/* Requirements */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Minimum Qualifications</h3>
                <ul className="space-y-3">
                  {career.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-400 leading-relaxed">
                      <Check className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Core Responsibilities</h3>
                <ul className="space-y-3">
                  {career.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-400 leading-relaxed">
                      <Check className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Compensation & Benefits</h3>
                <ul className="space-y-3">
                  {career.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-400 leading-relaxed">
                      <Check className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Block: Submit Application Form Card */}
            <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 sticky top-[100px]">
              <h3 className="text-lg font-bold text-white mb-6">Submit Application</h3>
              <CareerForm />
            </div>
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
