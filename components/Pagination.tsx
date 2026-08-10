import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex items-center justify-center space-x-2 mt-12" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 border border-slate-800 hover:border-slate-700 rounded-lg hover:bg-slate-900/50 text-slate-400 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        aria-label="Go to previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {pages.map(page => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            aria-current={isActive ? 'page' : undefined}
            className={`w-10 h-10 border rounded-lg text-sm font-medium transition-all ${
              isActive
                ? 'border-blue-600 bg-blue-600/10 text-blue-500'
                : 'border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white hover:bg-slate-900/50'
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 border border-slate-800 hover:border-slate-700 rounded-lg hover:bg-slate-900/50 text-slate-400 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        aria-label="Go to next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}

export default Pagination;
