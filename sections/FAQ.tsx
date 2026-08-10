'use client';

import React from 'react';
import { faqs } from '@/data/mockData';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Accordion } from '@/components/Accordion';

export function FAQ() {
  const accordionItems = faqs.map(faq => ({
    title: faq.question,
    content: faq.answer
  }));

  return (
    <section className="py-20 sm:py-28 bg-slate-950 border-t border-slate-900">
      <Container className="max-w-4xl">
        <SectionTitle
          title="Frequently Asked Questions"
          tagline="FAQ"
          subtitle="Clear answers about our project cycles, security posture, compliance, and custom software integrations."
        />

        <Accordion items={accordionItems} />
      </Container>
    </section>
  );
}

export default FAQ;
