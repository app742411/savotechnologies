import React from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export function FooterCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 border-t border-slate-900 bg-slate-950">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-semibold tracking-widest text-blue-500 uppercase">
            Partner with SavoTech
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to Accelerate Your Enterprise Digital Infrastructure?
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Partner with Staff Solution Architects to plan your cloud migration, secure data lakes, or scale operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Button href="/contact" variant="primary" size="lg">
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="/about" variant="outline" size="lg">
              <span>Explore Success Stories</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FooterCTA;
