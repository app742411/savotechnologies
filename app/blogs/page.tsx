'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { blogs } from '@/data/mockData';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/Card';
import { Search } from '@/components/Search';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import FooterCTA from '@/components/FooterCTA';
import { formatDate } from '@/lib/utils';

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Technology', 'Cloud Services', 'Cyber Security'];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const breadcrumbs = [
    { label: 'Resources', href: '/blogs' },
    { label: 'Blog & Articles' }
  ];

  return (
    <>
      <PageHeader
        title="Enterprise Advisory Blog"
        description="Strategic insights, technical roadmaps, and security advisories authored by senior engineering staff."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-slate-950">
        <Container>
          {/* Controls: Search + Categories */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 pb-8 border-b border-slate-900">
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-semibold px-4.5 py-2.5 rounded-lg border transition-all duration-200 ${
                    activeCategory === cat
                      ? 'border-blue-600 bg-blue-600/10 text-blue-500'
                      : 'border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <Search
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search articles..."
            />
          </div>

          {/* Blogs Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, idx) => (
                <Card key={idx} className="flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-500 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded block w-fit">
                      {blog.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-blue-500 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {blog.excerpt}
                    </p>

                    {/* Metadata */}
                    <div className="flex items-center space-x-4 text-[10px] text-slate-500 pt-2">
                      <div className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        <span>{formatDate(blog.publishedAt)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-900 mt-6 flex items-center justify-between">
                    <div className="flex items-center text-xs text-slate-300">
                      <User className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                      <span>{blog.author.name}</span>
                    </div>
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center text-xs font-semibold text-blue-500 hover:text-blue-400 group"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-slate-500 text-sm">No articles found matching search requirements.</p>
            </div>
          )}
        </Container>
      </section>

      <FooterCTA />
    </>
  );
}
