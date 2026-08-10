import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function Card({ children, hoverEffect = true, className = '', ...props }: CardProps) {
  return (
    <div
      className={`bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden p-6 transition-all duration-300 ${
        hoverEffect ? 'hover:border-slate-700 hover:shadow-lg hover:shadow-blue-950/20 hover:-translate-y-0.5' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
