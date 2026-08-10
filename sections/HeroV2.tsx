'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import CTAButton from '@/components/CTAButton';
import ClientsV2 from '@/sections/ClientsV2';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import servicesData from '@/data/services.json';

interface ServiceItem {
  category: string;
  heading: string;
  description: string;
  subItems: string[];
  variants: string;
}
interface motion {
  variants: {
    hidden: {
      opacity: number,
      y: number,
    },
    visible: {
      opacity: number,
      y: number,
      transition: {
        duration: number,
        delay: number,
        ease: number[]
      }
    }
  }
}

const typedServices = servicesData as ServiceItem[];

const serviceImages = [
  '/images/pngwing.com.png',
  '/images/pngwing.com (1).png',
  '/images/pngwing.com (3).png',
  '/images/vecteezy_young-woman-programmer-coding-on-a-laptop-with-holographic_68186299.png',
  '/images/b0d5e08e8f2d59263574905259965ea8.png',
];

export default function HeroV2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % typedServices.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoplay]);

  // Subtle Mouse Parallax & 3D Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 100 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 100 });
  
  // Parallax for float
  const parallaxX = useTransform(smoothMouseX, [-500, 500], [-20, 20]);
  const parallaxY = useTransform(smoothMouseY, [-500, 500], [-20, 20]);
  
  // 3D Rotate for mockup
  const rotateX = useTransform(smoothMouseY, [-500, 500], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-500, 500], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Refined Text Animation
  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom * 0.1, ease: [0.25, 1, 0.35, 1] as const },
    }),
  };

  // Elegant Image Fade & Float
  const imageVariants = {
    initial: { opacity: 0, scale: 0.95, y: 10 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 1, 0.35, 1] as const },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.6, ease: [0.25, 1, 0.35, 1] as const },
    },
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] w-full bg-[#050B14] overflow-hidden flex flex-col justify-center pt-32 pb-16"
    >
      {/* BACKGROUND ASSETS */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#020617]">
        
        {/* Top blurred highlight circle */}
        <div 
          className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[120px] opacity-10"
          style={{
            background: 'linear-gradient(0deg, rgba(224, 239, 255, 0%) 0%, #E0EFFF 100%), linear-gradient(#FFFFFF, #FFFFFF)',
            backgroundBlendMode: 'normal'
          }}
        />

        {/* Left blurred highlight circle */}
        <div 
          className="absolute -top-[10%] -left-[15%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.12]"
          style={{
            background: 'linear-gradient(0deg, rgba(224, 239, 255, 0%) 0%, #E0EFFF 100%), linear-gradient(#FFFFFF, #FFFFFF)',
            backgroundBlendMode: 'normal'
          }}
        />

        {/* Right blurred highlight circle */}
        <div 
          className="absolute top-[10%] -right-[15%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.12]"
          style={{
            background: 'linear-gradient(0deg, rgba(224, 239, 255, 0%) 0%, #E0EFFF 100%), linear-gradient(#FFFFFF, #FFFFFF)',
            backgroundBlendMode: 'normal'
          }}
        />

        {/* Full Animated Tech Grid */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Base Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          
          {/* Vignette mask to fade the edges into the background color */}
          <div className="absolute inset-0 bg-[#020617] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)]" />
        </div>

        {/* Animated Aurora / Gradient Mesh */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0],
            x: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            y: [0, -100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[50vw] bg-violet-600/15 rounded-full blur-[150px] mix-blend-screen"
        />
        
        <Image
          src="/images/herobanner.png"
          alt="Premium Background"
          fill
          priority
          className="object-cover opacity-40 mix-blend-screen"
        />

        
        {/* Spinning circle from V1 - Refined and subtle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute right-[-5%] top-[10%] w-[700px] h-[700px] opacity-[0.08] mix-blend-screen"
        >
          <Image src="/images/herobg1.png" alt="Decorative Circle" fill className="object-contain" />
        </motion.div>
      </div>

      <Container className="relative z-10 w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: REFINED TYPOGRAPHY & NAVIGATION */}
          <div className="flex flex-col space-y-10 max-w-xl">
            {/* Header */}
            <div className="space-y-6">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest"
              >
                Welcome to Savo
              </motion.div>

              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.15]"
              >
                Building Tech Future <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                    With Innovation!
                  </span>
                  {/* Glowing SVG Scribble from V1 */}
                  <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-4 sm:h-5 z-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="smile-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#010518" />
                        <stop offset="25%" stopColor="#17407B" />
                        <stop offset="50%" stopColor="#4C8AC9" />
                        <stop offset="75%" stopColor="#9CCAF0" />
                        <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M 5 5 Q 50 20 95 5"
                      stroke="url(#smile-gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-base sm:text-lg text-slate-400 font-light leading-relaxed max-w-lg"
              >
                End-to-end product engineering that drives measurable results.
              </motion.p>
            </div>

            {/* Elegant Service List mapped from V1 data */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-col mt-4 h-[260px] relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col text-left absolute inset-0"
                >
                  <h3 className="text-2xl font-semibold tracking-tight text-white mb-2">
                    {typedServices[activeIndex].category}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-400 font-light mb-6 max-w-md">
                    {typedServices[activeIndex].heading}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {typedServices[activeIndex].subItems.map((item, sIdx) => (
                      <div key={sIdx} className="flex items-center space-x-2 text-sm text-slate-400">
                        <svg className="w-4 h-4 text-blue-500 flex-shrink-0 fill-current" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Progress Indicators */}
              <div className="flex items-center gap-2 mt-auto absolute bottom-0 left-0">
                {typedServices.map((_, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => { setActiveIndex(idx); setIsAutoplay(false); }}
                      className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 bg-slate-800"
                      style={{ width: isActive ? '3.5rem' : '1.5rem' }}
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      {isActive && (
                        <motion.div
                          key={`progress-${activeIndex}`}
                          className="absolute inset-0 bg-blue-500"
                          initial={{ width: isAutoplay ? "0%" : "100%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: isAutoplay ? 5 : 0, ease: "linear" }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div custom={4} initial="hidden" animate="visible" variants={textVariants} className="pt-2">
              <CTAButton href="/contact" label="Hire Developer" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: ELEGANT IMAGE PRESENTATION */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center" style={{ perspective: 1500 }}>
            
            <motion.div
              style={{ x: parallaxX, y: parallaxY, rotateX, rotateY }}
              className="relative w-full h-full flex items-center justify-center transform-gpu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={serviceImages[activeIndex]}
                    alt={typedServices[activeIndex].category}
                    width={900}
                    height={900}
                    className="w-[90%] lg:w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Floating aesthetic UI elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[15%] left-[5%] px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl z-20 hidden md:flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Status</div>
                  <div className="text-sm text-white font-medium">System Optimal</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-[20%] right-[5%] px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl z-20 hidden md:block"
              >
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Performance</div>
                <div className="flex items-end gap-2">
                  <div className="text-2xl text-white font-bold leading-none">99.9%</div>
                  <div className="text-xs text-emerald-400 font-medium mb-0.5">Uptime</div>
                </div>
              </motion.div>

            </motion.div>
          </div>
          
        </div>
      </Container>
      <ClientsV2 />
    </div>
  );
}
