'use client';

import React, { useEffect } from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { AlertOctagon, RotateCw } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an analytics reporting service
    console.error('System Exception:', error);
  }, [error]);

  return (
    <section className="min-h-[75vh] flex items-center justify-center bg-slate-950 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px]" />
      
      <Container className="relative z-10 max-w-md space-y-6">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500">
          <AlertOctagon className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500">System Error</span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">An Exception Occurred</h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            The application pipeline encountered an unexpected exception state. Let&apos;s try rebuilding the active components.
          </p>
        </div>
        <div className="pt-2">
          <Button onClick={reset} variant="primary" size="md" className="w-full justify-center">
            <RotateCw className="w-4 h-4 mr-2" />
            <span>Try Again</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
