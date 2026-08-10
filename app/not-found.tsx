import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { ArrowRight, FileQuestion } from 'lucide-react';

export const metadata = {
  title: '404 - Page Not Found | SavoTech Solutions',
  description: 'The requested enterprise resource could not be found.',
};

export default function NotFoundPage() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center bg-slate-950 text-center relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
      
      <Container className="relative z-10 max-w-md space-y-6">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
          <FileQuestion className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Error 404</span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Resource Not Found</h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            The page, log directory, or dynamic slug you are looking for has been moved or does not exist.
          </p>
        </div>
        <div className="pt-2">
          <Button href="/" variant="primary" size="md" className="w-full justify-center">
            <span>Return to Dashboard</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
