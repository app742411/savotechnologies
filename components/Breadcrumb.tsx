import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from './Container';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-900 border-y border-slate-800 py-3.5">
      <Container className="flex items-center space-x-2.5 text-xs font-medium text-slate-400">
        <Link href="/" className="hover:text-white transition-colors duration-200 flex items-center">
          <Home className="w-3.5 h-3.5 mr-1" />
          <span>Home</span>
        </Link>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              {isLast || !item.href ? (
                <span className="text-slate-200 select-none truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-white transition-colors duration-200">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </Container>
    </nav>
  );
}

export default Breadcrumb;
