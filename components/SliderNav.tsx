'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderNavProps {
  onPrev: () => void;
  onNext: () => void;
  hasLine?: boolean;
  lineColor?: string; // e.g., 'bg-slate-200' or 'bg-white/20'
  btnBgColor?: string; // e.g., 'bg-white' or 'bg-[#00030c]'
  className?: string;
}

export default function SliderNav({
  onPrev,
  onNext,
  hasLine = false,
  lineColor = 'bg-slate-200',
  btnBgColor = 'bg-white',
  className = '',
}: SliderNavProps) {
  const buttons = (
    <div className="flex gap-0.5">
      <button
        onClick={onPrev}
        className="group/btn w-12 h-12 bg-gradient-to-b from-[#1E73E8] to-[#002550] flex items-center justify-center text-white border-r border-[#1E73E8]/20 cursor-pointer shadow-md transition-all active:scale-95"
        aria-label="Previous"
      >
        <ChevronLeft 
          className="h-7 w-7 text-white transition-transform duration-300 group-hover/btn:-translate-x-1" 
          strokeWidth={2.8}
        />
      </button>
      <button
        onClick={onNext}
        className="group/btn w-12 h-12 bg-gradient-to-b from-[#1E73E8] to-[#002550] flex items-center justify-center text-white cursor-pointer shadow-md transition-all active:scale-95"
        aria-label="Next"
      >
        <ChevronRight 
          className="h-7 w-7 text-white transition-transform duration-300 group-hover/btn:translate-x-1" 
          strokeWidth={2.8}
        />
      </button>
    </div>
  );

  if (hasLine) {
    return (
      <div className={`relative flex items-center w-full ${className}`}>
        <div className={`absolute inset-x-0 h-[1px] ${lineColor} z-0`} />
        <div className={`relative z-10 ${btnBgColor} pr-0`}>
          {buttons}
        </div>
      </div>
    );
  }

  return <div className={className}>{buttons}</div>;
}
