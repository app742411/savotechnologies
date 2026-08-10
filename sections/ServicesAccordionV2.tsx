'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/Container';
import { Plus, Minus } from 'lucide-react';

const accordionData = [
  {
    title: 'Mobile App Development',
    description: 'Mobile App Development That Turns Your Ideas Into Reality',
    image: '/images/cap01.png',
    items: [
      'Android App Development',
      'Flutter Cross Platform App Development',
      'iOS App Development',
      'Mobile App Support & Maintenance',
      'React Native Cross Platform App Development',
      'Mobile App Testing'
    ]
  },
  {
    title: 'Web & CMS Development',
    description: 'Scalable and secure web solutions for modern enterprises.',
    image: '/images/cap01.png',
    items: [
      'Custom Web Development',
      'CMS Integration (WordPress, Contentful)',
      'E-commerce Solutions',
      'Web Portal Development'
    ]
  },
  {
    title: 'Software Development',
    description: 'Custom software architecture engineered for scale.',
    image: '/images/cap01.png',
    items: [
      'Enterprise Software Solutions',
      'SaaS Product Development',
      'Cloud Architecture',
      'Legacy System Modernization'
    ]
  },
  {
    title: 'UI / UX Design',
    description: 'Intuitive and engaging user experiences.',
    image: '/images/cap01.png',
    items: [
      'User Research & Strategy',
      'Wireframing & Prototyping',
      'UI Design Systems',
      'Usability Testing'
    ]
  },
  {
    title: 'Component first & template page',
    description: 'Modular design systems for rapid deployment.',
    image: '/images/cap01.png',
    items: [
      'React/Next.js Component Libraries',
      'Design Tokens Integration',
      'Storybook Setup',
      'Template Standardization'
    ]
  },
  {
    title: 'AI & ML',
    description: 'Intelligent automation and predictive analytics.',
    image: '/images/cap01.png',
    items: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics'
    ]
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven growth and visibility strategies.',
    image: '/images/cap01.png',
    items: [
      'SEO & Content Strategy',
      'Performance Marketing',
      'Social Media Campaigns',
      'Conversion Rate Optimization'
    ]
  },
  {
    title: 'Support & Maintenance',
    description: '24/7 reliability and performance monitoring.',
    image: '/images/cap01.png',
    items: [
      'Server Monitoring',
      'Security Patching',
      'Performance Optimization',
      'SLA-backed Support'
    ]
  }
];

export default function ServicesAccordionV2() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 lg:py-20 bg-white relative overflow-hidden">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold text-slate-900 tracking-tight leading-[1.1]">
            For us, this is all in <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0970E6] to-indigo-500">a day's work.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start relative">
          
          {/* Left Side: Premium Image Showcase */}
          <div className="sticky top-32 lg:top-40 relative w-full h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] flex items-center justify-center p-6 lg:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent z-0" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full z-10"
              >
                <Image 
                  src={accordionData[activeIndex].image}
                  alt={accordionData[activeIndex].title}
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Minimal Accordion */}
          <div className="flex flex-col">
            {accordionData.map((item, idx) => {
              const isActive = activeIndex === idx;
              
              return (
                <div 
                  key={idx} 
                  className="border-b border-slate-200/60 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className="w-full py-5 lg:py-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <h3 className={`text-2xl lg:text-3xl font-medium tracking-tight transition-colors duration-500 ${isActive ? 'text-[#0970E6]' : 'text-slate-800 group-hover:text-slate-500'}`}>
                      {item.title}
                    </h3>
                    <div className="shrink-0 ml-6 text-slate-400 group-hover:text-slate-800 transition-colors duration-500">
                      {isActive ? <Minus strokeWidth={1.5} className="w-6 h-6 text-[#0970E6]" /> : <Plus strokeWidth={1.5} className="w-6 h-6" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="pb-6 pl-2">
                          <p className="text-base lg:text-lg text-slate-500 font-light leading-relaxed mb-6 max-w-lg">
                            {item.description}
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                            {item.items.map((subItem, sIdx) => (
                              <li key={sIdx} className="flex items-start text-base text-slate-600 font-medium">
                                <span className="mr-4 text-[#0970E6]/40 mt-0.5 text-lg leading-none">•</span>
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
