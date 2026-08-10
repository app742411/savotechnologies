'use client';

import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface SearchProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export function Search({ value, onChange, placeholder = 'Search...' }: SearchProps) {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
        <SearchIcon className="w-4 h-4" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-slate-900/60 backdrop-blur-sm border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-300"
      />
    </div>
  );
}

export default Search;
