'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/Container';
import CTAButton from '@/components/CTAButton';

const features = [
  {
    title: 'Solutions for Every Vision',
    desc: 'Classic creative development or the latest in machine learning and automation—we architect the right path for your ambition.',
    number: '01',
  },
  {
    title: 'Deep Technology Stack',
    desc: 'Classic creative development or the latest in machine learning and automation—we architect the right path for your ambition.',
    number: '02',
  },
  {
    title: 'Rapid & Transparent Delivery',
    desc: 'Powered by modern frameworks, test automation, and hands-on expertise, your roadmap moves from idea to impact faster.',
    number: '03',
  },
  {
    title: 'Security First',
    desc: 'Classic creative development or the latest in machine learning and automation—we architect the right path for your ambition.',
    number: '04',
  },
];

export default function AboutV2() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yCircles = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="bg-[#f8f9fa] py-24 lg:py-36 relative overflow-hidden">
      
      {/* Background Circle Assets */}
      <motion.div 
        style={{ y: yCircles }}
        className="absolute top-0 right-[-10%] w-[800px] h-[800px] opacity-[0.15] pointer-events-none"
      >
         <Image src="/images/about-esclipse.png" alt="Eclipse Background" fill className="object-contain animate-[spin_40s_linear_infinite]" />
      </motion.div>

      <motion.div 
        style={{ y: yCircles }}
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] opacity-[0.08] pointer-events-none"
      >
         <Image src="/images/circle.png" alt="Circle Background" fill className="object-contain animate-[spin_30s_linear_infinite_reverse]" />
      </motion.div>

      <Container className="relative z-10">
        
        {/* Top Header - Eye-Catching & Modern */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10 lg:gap-0">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.1] tracking-tight font-semibold text-[#111]">
                Agile & AI-Powered.<br />
                <span className="text-[#0970E6] font-normal italic">Always Ahead.</span>
              </h2>
            </motion.div>
          </div>
          <motion.div 
            className="max-w-md lg:pb-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
              Founded in 2011, SAVO Technologies is a top Mobile App and Web development company driving digital transformation for businesses of all sizes.
            </p>
            <CTAButton href="/about" label="Discover Our Story" />
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image & Circle Assets Presentation */}
          <div className="relative h-[600px] lg:h-[750px] w-full flex items-center justify-center">
            
            {/* Background Decorative Rings behind the image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[110%] h-[110%] rounded-full border-[1px] border-blue-600/20 absolute animate-[spin_20s_linear_infinite]" />
              <div className="w-[90%] h-[90%] rounded-full border-[2px] border-dashed border-indigo-500/20 absolute animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            <motion.div 
              className="relative w-[90%] h-[90%] lg:w-full lg:h-full shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] z-10 overflow-hidden"
              style={{ y: yImage }}
            >
              <Image 
                src="/images/user1.png" 
                alt="SAVO Technologies Developer"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Floating Glass Element ON the Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 bg-white/10 backdrop-blur-md p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-20 hidden sm:block border border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-lg flex items-center justify-center border border-white/30 shadow-inner">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-1">Delivering</div>
                  <div className="text-xl font-bold text-white leading-none">Excellence</div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Modern Editorial List that becomes a Sharp Card on Hover */}
          <div className="flex flex-col justify-center h-full">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-center py-5 lg:py-6 border-b border-slate-200 last:border-0 hover:px-6 hover:bg-white hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] hover:border-transparent lg:hover:-mx-6 transition-all duration-500 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center relative z-10">
                  <div className="text-xl font-medium text-slate-300 group-hover:text-[#0970E6] transition-colors duration-500 w-8 shrink-0">
                    {feature.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-[1.5rem] font-bold text-slate-900 mb-1 group-hover:text-[#0970E6] transition-colors duration-500 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm lg:text-base text-slate-500 font-light leading-relaxed max-w-lg group-hover:text-slate-600 transition-colors duration-500">
                      {feature.desc}
                    </p>
                  </div>
                  {/* Decorative Arrow that animates on hover - Sharp edges */}
                  <div className="hidden sm:flex w-12 h-12 border border-slate-200 items-center justify-center text-slate-300 relative overflow-hidden transition-all duration-500 shrink-0 group-hover:border-transparent group-hover:text-white group-hover:rotate-45">
                    <div className="absolute inset-0 bg-[#0970E6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
