import React from 'react';
import { Container } from './Container';
import { Breadcrumb } from './Breadcrumb';

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div>
      <div className="relative overflow-hidden bg-slate-950 pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,58,138,0.15),transparent_50%)]" />
        <Container className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
              {description}
            </p>
          )}
        </Container>
      </div>
      <Breadcrumb items={breadcrumbs} />
    </div>
  );
}

export default PageHeader;
