'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

// Tech stack SVGs
const AndroidIcon = () => (
  <svg className="w-8 h-8 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M16.62 13.97a.55.55 0 0 1-.55-.56c0-.3.24-.55.55-.55c.3 0 .55.25.55.55c0 .31-.25.56-.55.56m-9.24 0a.55.55 0 0 1-.55-.56c0-.3.24-.55.55-.55c.3 0 .55.25.55.55c0 .31-.25.56-.55.56M17.9 10.12l1.97-3.41a.49.49 0 0 0-.18-.68a.49.49 0 0 0-.68.18l-2 3.47A9.45 9.45 0 0 0 12 8.5c-1.89 0-3.64.55-5.12 1.5l-2-3.47a.49.49 0 0 0-.68-.18a.49.49 0 0 0-.18.68l1.97 3.41C2.86 11.83 1.05 14.7 1 18.06h22c-.05-3.36-1.86-6.23-5.1-7.94" /></svg>
);
const AppleIcon = () => (
  <svg className="w-8 h-8 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06c-.96.04-2.13.64-2.82 1.45c-.59.7-1.11 1.83-.97 2.94c1.08.08 2.14-.52 2.8-1.33" /></svg>
);
const FlutterIcon = () => (
  <svg className="w-8 h-8 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M14.314 0L2.3 12L6 15.7L21.684 0H14.314Z M14.314 8.275L9.957 12.63L14.314 17L21.684 9.63L14.314 8.275Z M14.314 16.55L9.957 20.91L14.314 25.27L21.684 17.9L14.314 16.55" transform="scale(0.8) translate(3, 1)" /></svg>
);
const SwiftIcon = () => (
  <svg className="w-8 h-8 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M21.2 14c-.1-.2-.2-.5-.3-.7c-.3-.4-.5-.9-.8-1.3c-.6-.8-1.3-1.6-2-2.3c-1.3-1.2-2.8-2.1-4.4-2.6c.9 1.1 1.7 2.3 2.3 3.6c.4.9.7 1.8.8 2.8c-1.1-1.1-2.4-2-3.8-2.6c-.9-.4-1.8-.7-2.8-.8c1.3.8 2.4 1.8 3.3 3c.5.7.9 1.5 1.2 2.3c-1.5-1.1-3.3-1.8-5.1-2.1c-.8-.1-1.6-.1-2.4-.1c1.3.6 2.5 1.5 3.5 2.5c.7.7 1.3 1.5 1.7 2.4c-2.3-1.1-4.9-1.5-7.4-1c-.5.1-.9.2-1.4.4c1.8.1 3.5.7 5.1 1.7c.8.5 1.5 1.1 2.1 1.8c-.8 0-1.6.2-2.3.5c-.8.3-1.5.8-2.1 1.3c2.4-1 5.1-1.2 7.6-.6c.9.2 1.8.6 2.6 1.1c.4.3.8.6 1.1.9c-.3-.2-.5-.3-.8-.5c-.8-.5-1.7-.8-2.6-.9c2.3.6 4.3 2 5.6 4c-.1-.2-.2-.4-.3-.6c-.5-1-1.2-1.9-2-2.6c.7 0 1.4.2 2.1.5c.3.1.6.3.9.5c.1 0 .2.1.3.1c-.4-.5-.9-.9-1.5-1.2c-.7-.4-1.5-.7-2.3-.8c2.1-.1 4.1.6 5.6 2c.1-.2.2-.4.3-.6c.2-.5.4-1.1.5-1.6c0-1.4-.4-2.7-1-3.9" /></svg>
);
const KotlinIcon = () => (
  <svg className="w-8 h-8 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M24 24H0V0h24L12 12z" /></svg>
);
const ReactNativeIcon = () => (
  <svg className="w-8 h-8 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>
);

const capabilities = [
  {
    id: 'mobile',
    title: 'Mobile App Development',
    longTitle: 'Mobile App Development That Turns Your Ideas Into Reality',
    bullets: [
      'Android App Development',
      'Flutter Cross Platform App Development',
      'iOS App Development',
      'Mobile App Support & Maintenance',
      'React Native Cross Platform App Development',
      'Mobile App Testing'
    ],
    mockupType: 'mobile',
    image: '/images/capabilities/capabilities_mobile_1785907685330.png',
    cardTitle: 'Next-Gen Mobile Architecture',
    cardSubtitle: 'High performance native interfaces',
    tag: 'NATIVE'
  },
  {
    id: 'web',
    title: 'Web & CMS Development',
    longTitle: 'Web & CMS Development For Scalable Business Growth',
    bullets: [
      'Custom Web Application Development',
      'Headless CMS Implementations',
      'E-commerce Platforms',
      'Responsive Front-end Architecture',
      'SEO & Web Performance Optimization',
      'Content Management System Integration'
    ],
    mockupType: 'web',
    image: '/images/capabilities/capabilities_web_1785907695558.png',
    cardTitle: 'Enterprise Web Platforms',
    cardSubtitle: 'Scalable cloud-native applications',
    tag: 'SCALABLE'
  },
  {
    id: 'software',
    title: 'Software Development',
    longTitle: 'Enterprise Software Development Solutions',
    bullets: [
      'Microservices Architecture Design',
      'High-Performance APIs (GraphQL, gRPC, REST)',
      'Custom Database Design & Scaling',
      'Legacy Code Refactoring & Migration',
      'CI/CD Automation Pipelines',
      'System Integration & Middleware'
    ],
    mockupType: 'software',
    image: '/images/capabilities/capabilities_software_1785907706390.png',
    cardTitle: 'Complex Systems Engineering',
    cardSubtitle: 'Robust backend infrastructure',
    tag: 'SYSTEMS'
  },
  {
    id: 'design',
    title: 'UI / UX Design',
    longTitle: 'UI / UX Design That Elevates Digital Experiences',
    bullets: [
      'Wireframing & Interactive Prototyping',
      'Multi-Platform Product Design',
      'Custom Design Systems (Figma-to-Code)',
      'Usability Testing & User Research',
      'Visual Design & Interactive Micro-animations',
      'User Journey Mapping'
    ],
    mockupType: 'design',
    image: '/images/capabilities/capabilities_design_1785907717279.png',
    cardTitle: 'Human-Centric Interfaces',
    cardSubtitle: 'Engaging, interactive experiences',
    tag: 'CREATIVE'
  },
  {
    id: 'components',
    title: 'Component first & template page',
    longTitle: 'Component First & Template Page Development',
    bullets: [
      'Storybook Integration & Component Testing',
      'Reusable UI Component Libraries',
      'Consistent Branding Design Tokens',
      'Multi-framework Support',
      'Documentation & Sandbox Playground',
      'Design-to-Code Automated Handover'
    ],
    mockupType: 'components',
    image: '/images/capabilities/capabilities_software_1785907706390.png',
    cardTitle: 'Atomic Design Systems',
    cardSubtitle: 'Reusable robust components',
    tag: 'MODULAR'
  },
  {
    id: 'ai',
    title: 'AI & ML',
    longTitle: 'AI & ML Integration For Intelligent Applications',
    bullets: [
      'Custom LLM Implementations (GPT, Gemini)',
      'Intelligent Automation & Workflows',
      'RAG (Retrieval-Augmented Generation) Engines',
      'Predictive Analytics & Data Modelling',
      'Computer Vision & NLP Applications',
      'Vector Database Integration'
    ],
    mockupType: 'ai',
    image: '/images/capabilities/capabilities_ai_1785907727903.png',
    cardTitle: 'Neural Network Processing',
    cardSubtitle: 'Advanced machine learning models',
    tag: 'INTELLIGENCE'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    longTitle: 'Digital Marketing Strategies That Drive Conversion',
    bullets: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click Advertising (PPC)',
      'Social Media Marketing Campaigns',
      'Content Strategy & Copywriting',
      'Email Marketing Automation',
      'Conversion Rate Optimization (CRO)'
    ],
    mockupType: 'marketing',
    image: '/images/capabilities/capabilities_marketing_1785907739278.png',
    cardTitle: 'Data-Driven Growth',
    cardSubtitle: 'Predictive analytics & tracking',
    tag: 'GROWTH'
  },
  {
    id: 'support',
    title: 'Support & Maintenance',
    longTitle: 'Reliable Support & Maintenance Services',
    bullets: [
      '24/7 Application Monitoring',
      'Security Patching & Updates',
      'Performance Optimization',
      'Bug Tracking & Resolution',
      'Cloud Infrastructure Management',
      'Technical Debt Reduction'
    ],
    mockupType: 'support',
    image: '/images/capabilities/capabilities_web_1785907695558.png',
    cardTitle: '24/7 Infrastructure Ops',
    cardSubtitle: 'Continuous uptime & scaling',
    tag: 'RELIABILITY'
  }
];

export function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white pt-10 pb-20">
      
      <div className="relative w-full">
        
        <div className="w-full flex flex-col pt-12 pb-8">
          
          {/* Decorative Stacked Card Borders */}
          <div className="mx-auto w-[85%] max-w-5xl h-6 bg-[#002873] z-0" />
          <div className="mx-auto w-[92%] max-w-6xl h-6 bg-[#0970E6] z-10 -mt-2" />

          {/* Main Content Card */}
          <div className="mx-auto relative z-20 w-[98%] max-w-7xl bg-gradient-to-b from-[#F5F5F5] to-[#FFFFFF] pt-12 pb-12 flex flex-col -mt-2 border-t border-white/50">
            <Container className="flex flex-col w-full px-4 md:px-12 lg:px-16">
              
              {/* Header */}
              <div className="text-center mb-16 shrink-0">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight">
                  For us, this is all in a day's work.
                </h2>
              </div>

              {/* Split Content Area */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                
                {/* Left Side: Single Image Area (col-span-5) */}
                <div className="w-full h-[640px] relative hidden lg:block col-span-5 sticky top-28 pt-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute inset-0 pt-8"
                    >
                      <Image 
                        src="/images/cap01.png" 
                        alt="Capabilities Preview" 
                        fill 
                        className="object-contain object-top"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Side: Accordion/Tabs (col-span-7) */}
                <div className="w-full col-span-12 lg:col-span-7 flex flex-col">
                  {capabilities.map((item, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <div 
                        key={item.id} 
                        className="w-full cursor-pointer relative"
                        onMouseEnter={() => setActiveIndex(idx)}
                      >
                        {/* Active State (Blue Box) */}
                        <motion.div
                          initial={false}
                          animate={{ 
                            height: isActive ? 'auto' : 0, 
                            opacity: isActive ? 1 : 0 
                          }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="w-full pb-2">
                            <div 
                              className="px-8 py-8 lg:px-10 lg:py-10 text-white relative shadow-sm"
                              style={{ background: 'linear-gradient(180deg, #0970E6 0%, #002873 100%)' }}
                            >
                              <div className="flex items-start justify-between mb-8">
                                <h4 className="text-xl lg:text-2xl font-normal leading-snug pr-8 text-white max-w-sm">
                                  {item.longTitle}
                                </h4>
                                <div className="w-6 h-6 flex items-center justify-center shrink-0 bg-white text-[#0970E6]">
                                  <span className="font-bold text-lg leading-none -mt-[2px]">−</span>
                                </div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {item.bullets.map((bullet, bIdx) => (
                                  <div key={bIdx} className="flex items-start gap-3">
                                    <span className="shrink-0 text-white mt-2 text-[5px]">●</span>
                                    <span className="text-sm font-light leading-relaxed text-blue-50">{bullet}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Inactive State (Simple Row) */}
                        <motion.div
                          initial={false}
                          animate={{ 
                            height: isActive ? 0 : 'auto', 
                            opacity: isActive ? 0 : 1 
                          }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="flex items-center justify-between py-6 px-8 lg:px-10 border-b border-slate-200 hover:bg-slate-50/50 transition-colors">
                            <h4 className="text-xl font-normal text-slate-800">
                              {item.title}
                            </h4>
                            <div className="w-6 h-6 flex items-center justify-center shrink-0 bg-slate-200 text-slate-600">
                              <span className="font-medium text-lg leading-none -mt-[1px]">+</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;