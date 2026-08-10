import React from 'react';
import { Container } from '@/components/Container';
import { Loader2 } from 'lucide-react';

export default function LoadingPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-950">
      <Container className="flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest animate-pulse">
          Loading Systems...
        </span>
      </Container>
    </div>
  );
}
