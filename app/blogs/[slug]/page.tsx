import React from 'react';
import { notFound } from 'next/navigation';
import { blogs } from '@/data/mockData';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/Button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import FooterCTA from '@/components/FooterCTA';
import { getMetadata, jsonLd } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import Script from 'next/script';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map(b => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) return {};

  return getMetadata({
    title: blog.title,
    description: blog.excerpt,
    slug: `/blogs/${slug}`,
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Resources', href: '/blogs' },
    { label: 'Blog & Articles', href: '/blogs' },
    { label: blog.title }
  ];

  const articleSchema = jsonLd.article({
    title: blog.title,
    excerpt: blog.excerpt,
    slug: blog.slug,
    image: blog.image,
    publishedAt: blog.publishedAt,
    authorName: blog.author.name
  });

  return (
    <>
      <Script
        id={`blog-${blog.slug}-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PageHeader
        title={blog.title}
        description={blog.excerpt}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 bg-slate-950">
        <Container className="max-w-3xl">
          <div className="space-y-8">
            {/* Back button & Author details */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-900">
              <Button href="/blogs" variant="ghost" size="sm" className="-ml-3">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span>Back to articles</span>
              </Button>

              <div className="flex items-center space-x-6 text-xs text-slate-500">
                <div className="flex items-center">
                  <User className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                  <span className="text-slate-300 font-medium">{blog.author.name}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  <span>{formatDate(blog.publishedAt)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1.5" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>

            {/* Rich html Content */}
            <article
              className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-sm sm:text-base space-y-6"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags footer */}
            <div className="pt-8 border-t border-slate-900 flex flex-wrap gap-2.5">
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-900 border border-slate-800 text-slate-400 px-3.5 py-1.5 rounded-lg"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
