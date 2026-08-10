'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface StepItem {
  id: string;
  num: string;
  title: string;
  description: string;
  image: string;
}

const steps: StepItem[] = [
  {
    id: 'ideation',
    num: '01',
    title: 'Ideation',
    description: 'Define the project goals, create a timeline & milestones, and build a team based on your development requirements.',
    image: '/images/ideation_step.png',
  },
  {
    id: 'research',
    num: '02',
    title: 'Research',
    description: 'Analyze competitors, define user personas, gather target audience requirements, and finalize technical stack specifications.',
    image: '/images/research_step.png',
  },
  {
    id: 'prototyping',
    num: '03',
    title: 'Prototyping',
    description: 'Build interactive wireframes, visual mockups, and early architectural prototypes to validate system design flows.',
    image: '/images/prototyping_step.png',
  },
  {
    id: 'testing',
    num: '04',
    title: 'Testing',
    description: 'Perform rigorous QA cycles, end-to-end user experience testing, stress loading, and security audits before launch.',
    image: '/images/testing_step.png',
  },
  {
    id: 'deployment',
    num: '05',
    title: 'Deployment',
    description: 'Deploy systems securely to production cloud environments, set up monitoring alerts, and establish continuous scaling.',
    image: '/images/deployment_step.png',
  },
];

export function Products() {
  const [activeStep, setActiveStep] = useState<string>('ideation');

  const activeItem = steps.find(s => s.id === activeStep) || steps[0];

  return (
    <section className="relative w-full bg-[#FFFFFF] overflow-visible">

      {/* ── DESKTOP VERSION: Premium Accordion (lg and up) ── */}
      <div className="hidden lg:block relative w-full overflow-hidden py-20">
        <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[56%_44%] gap-16 lg:gap-10 items-center">

            {/* Left Column: Circular Graphic Illustration */}
            <div className="relative w-full flex items-center justify-center lg:justify-start min-h-[400px] md:min-h-[620px] lg:min-h-[750px]">

              {/* Outer Gradient Circle */}
              <div
                className="relative w-[370px] h-[370px] sm:w-[570px] sm:h-[570px] lg:w-[710px] lg:h-[710px] rounded-full overflow-hidden flex items-center justify-center -ml-0 sm:-ml-[90px] lg:-ml-[210px] mt-14 lg:mt-20 transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, #9FD1FF 0%, #5DA9FF 50%, #2563EB 100%)'
                }}
              >
                {/* Soft White Grid Pattern Overlay */}
                <div
                  className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)
                    `,
                    backgroundSize: '22px 22px'
                  }}
                />

                {/* Bottom Fade Mask */}
                <div
                  className="absolute inset-x-0 bottom-[-30px] h-[55%] bg-gradient-to-t from-white via-white to-transparent blur-[20px] z-10 pointer-events-none"
                />

                {/* Centered Circular Image Container */}
                <div className="relative w-[260px] h-[260px] sm:w-[370px] sm:h-[370px] lg:w-[460px] lg:h-[460px] rounded-full overflow-hidden bg-white/10 z-30 shadow-[0_30px_80px_rgba(0,0,0,0.15)] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeItem.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={activeItem.image}
                        alt={activeItem.title}
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="460px"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Floating Blue Orb */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute w-[54px] h-[54px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] rounded-full z-30 shadow-[0_30px_60px_rgba(37,99,235,0.25)]"
                style={{
                  top: '20%',
                  left: '66%',
                  background: 'linear-gradient(to bottom, #3293FF, #1C63F7)'
                }}
              />
            </div>

            {/* Right Column: Spaced content + accordion */}
            <div className="flex flex-col justify-center w-full max-w-[550px] lg:pl-6">

              {/* Heading */}
              <h2 className="text-[30px] md:text-[42px] lg:text-[50px] font-bold text-[#0F172A] tracking-[-1.5px] leading-[1.1] mb-5">
                Ways To Leverage Our<br />
                Development Expertise
              </h2>

              {/* Paragraph */}
              <p className="text-[16px] leading-[28px] text-[#64748B] max-w-[460px] mb-[44px]">
                Offering a wide range of partnership models to connect with us and leverage our development capabilities to achieve much-anticipated success.
              </p>

              {/* Premium Accordion */}
              <div className="w-full border-t border-[#F1F5F9]">
                {steps.map((step, idx) => {
                  const isActive = step.id === activeStep;
                  return (
                    <div
                      key={step.id}
                      onMouseEnter={() => setActiveStep(step.id)}
                      onClick={() => setActiveStep(step.id)}
                      className="border-b border-[#F1F5F9] py-[24px] cursor-pointer select-none group transition-all"
                    >
                      <div className="flex items-start gap-6 sm:gap-8">

                        {/* Step Number */}
                        <span className={`text-[16px] font-medium leading-none transition-colors duration-300 ${isActive ? 'text-[#2563EB]' : 'text-[#94A3B8] group-hover:text-[#2563EB]'}`}>
                          {step.num}
                        </span>

                        {/* Header and description */}
                        <div className="flex-1">
                          <h3 className={`text-[18px] sm:text-[22px] leading-none transition-all duration-300 ${isActive ? 'font-bold text-[#0F172A]' : 'font-medium text-[#475569] group-hover:text-[#0F172A]'}`}>
                            {step.title}
                          </h3>

                          {/* Description */}
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <p className="text-[16px] leading-[28px] text-[#64748B] max-w-[460px] mt-3 pr-2">
                                  {step.description}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ── MOBILE & TABLET VERSION: Static click-to-expand Accordion (lg:hidden) ── */}
      <div className="lg:hidden py-[100px]">
        <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-10">

            {/* Header copy */}
            <div>
              <h2 className="text-[34px] sm:text-[40px] font-bold text-[#0F172A] tracking-[-1.5px] leading-tight mb-4">
                Ways To Leverage Our<br />
                Development Expertise
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-relaxed text-[#64748B] max-w-lg mb-8">
                Offering a wide range of partnership models to connect with us and leverage our development capabilities to achieve much-anticipated success.
              </p>
            </div>

            {/* Illustration */}
            <div className="flex items-center justify-center w-full min-h-[350px] bg-slate-50/50 rounded-2xl p-6 border border-slate-100 relative">
              <div
                className="relative w-[300px] h-[300px] rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #9FD1FF 0%, #5DA9FF 50%, #2563EB 100%)'
                }}
              >
                <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden bg-white/10 shadow-xl">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="200px"
                  />
                </div>
              </div>
            </div>

            {/* Standard Accordion */}
            <div className="w-full border-t border-[#F1F5F9]">
              {steps.map((step) => {
                const isActive = step.id === activeStep;
                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className="border-b border-[#F1F5F9] py-[20px] cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-4">

                      <span className={`text-[16px] font-medium transition-colors duration-300 ${isActive ? 'text-[#2563EB]' : 'text-[#94A3B8]'}`}>
                        {step.num}
                      </span>

                      <div className="flex-1">
                        <h3 className={`text-[18px] sm:text-[20px] transition-colors duration-300 ${isActive ? 'font-bold text-[#0F172A]' : 'font-medium text-[#475569]'}`}>
                          {step.title}
                        </h3>

                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <p className="text-[15px] leading-relaxed text-[#64748B] mt-3">
                                {step.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

export default Products;
