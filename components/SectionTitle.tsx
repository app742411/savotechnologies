import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({ title, subtitle, tagline, align = 'center' }: SectionTitleProps) {
  const isLeft = align === 'left';
  return (
    <div className={`mb-12 md:mb-16 ${isLeft ? 'text-left' : 'text-center'}`}>
      {tagline && (
        <span className="text-xs font-semibold tracking-widest text-blue-500 uppercase block mb-3">
          {tagline}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg text-slate-400 max-w-3xl ${isLeft ? '' : 'mx-auto'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
