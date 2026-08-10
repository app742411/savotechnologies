'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import CTAButton from '@/components/CTAButton';
import { motion, useReducedMotion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import servicesData from '@/data/services.json';

interface ServiceItem {
  category: string;
  heading: string;
  description: string;
  subItems: string[];
}

const typedServices = servicesData as ServiceItem[];

const serviceImages = [
  '/images/website_mockup.png',
  '/images/software_mockup.png',
  '/images/design_mockup.png',
  '/images/ai_mockup.png',
  '/images/transformation_mockup.png',
];

export function HeroCopy() {
  const bottomLogos = [
    '/logos/limage1.png',
    '/logos/limage2.png',
    '/logos/limage3.png',
    '/logos/limage4.png',
    '/logos/limage5.png',
    '/logos/limage6.png'
  ];

  // Auto-slider active index & autoplay state control
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isAutoplay, setIsAutoplay] = React.useState(true);

  React.useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % typedServices.length);
    }, 6000); // 6 seconds duration per slide

    return () => clearInterval(interval);
  }, [isAutoplay]);

  // Accessibility checking
  const shouldReduceMotion = useReducedMotion();

  // Mouse Parallax values using Framer Motion spring physics (GPU accelerated)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 150, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Map mouse coordinate values to a maximum range of 10px translate displacement
  const rawParallaxX = useTransform(smoothMouseX, [-400, 400], [-10, 10]);
  const rawParallaxY = useTransform(smoothMouseY, [-400, 400], [-10, 10]);

  const parallaxX = shouldReduceMotion ? 0 : rawParallaxX;
  const parallaxY = shouldReduceMotion ? 0 : rawParallaxY;

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

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-[#0B1025] transition-colors duration-500"
    >
      {/* 1. Background Animated Gradient Mesh (Vector 1 & Vector 2 according to Figma) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Figma Vector 1 (Base ambient glow) */}
        <motion.div
          animate={
            shouldReduceMotion
              ? { scale: 1, x: 0, y: 0 }
              : {
                x: [0, 20, -20, 0],
                y: [0, -15, 15, 0],
                scale: [1, 1.03, 0.97, 1],
              }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-10%] top-[-5%] w-[1926px] max-w-[120%] h-[690px] opacity-[0.55]"
          style={{
            background: 'linear-gradient(135deg, #031067 0%, #006BC7 25%, #327DD1 50%, #004987 75%, #0620CD 100%)',
            filter: 'blur(296px)',
          }}
        />

        {/* Figma Vector 2 (Color dodge overlay glow for vibrant highlights) */}
        <motion.div
          animate={
            shouldReduceMotion
              ? { scale: 1, x: 0, y: 0 }
              : {
                x: [0, -20, 20, 0],
                y: [0, 15, -15, 0],
                scale: [1, 0.97, 1.03, 1],
              }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-5%] top-[-10%] w-[1986px] max-w-[130%] h-[1181px] opacity-[0.45] mix-blend-color-dodge"
          style={{
            background: 'linear-gradient(135deg, #031067 0%, #006BC7 25%, #327DD1 50%, #004987 75%, #0620CD 100%)',
            filter: 'blur(286px)',
          }}
        />

        {/* Decorative Circle 1 (Top Right outline) */}
        <div className="absolute right-[10%] top-[8%] w-[120px] h-[120px] rounded-full border-2 border-[#327DD1]/30 opacity-60" />

        {/* 3. Diagonal Wave Lines (Sleek background curves) */}
        <svg className="absolute inset-0 w-full h-full min-w-[1440px] opacity-[0.25]" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <motion.path
            d="M -100 800 C 400 600, 800 200, 1600 0"
            stroke="url(#wave-gradient)"
            strokeWidth="2"
            animate={shouldReduceMotion ? {} : {
              d: [
                "M -100 800 C 400 600, 800 200, 1600 0",
                "M -100 820 C 420 580, 780 220, 1600 0",
                "M -100 800 C 400 600, 800 200, 1600 0"
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M -50 850 C 450 650, 850 250, 1650 50"
            stroke="url(#wave-gradient)"
            strokeWidth="1"
            strokeDasharray="10 15"
            animate={shouldReduceMotion ? {} : {
              d: [
                "M -50 850 C 450 650, 850 250, 1650 50",
                "M -50 830 C 430 670, 870 230, 1650 50",
                "M -50 850 C 450 650, 850 250, 1650 50"
              ]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#031067" stopOpacity="0.1" />
              <stop offset="25%" stopColor="#006BC7" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#327DD1" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#004987" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0620CD" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 2. Technology Grid Overlay (Opacity 3%, diagonal offset translate animation) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { x: 0, y: 0 }
            : {
              x: [0, 40],
              y: [0, 40],
            }
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -left-10 -top-10 w-[calc(100%+40px)] h-[calc(100%+40px)] z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 40L40 40M40 0L40 40' fill='none' stroke='%2360A5FA' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Main Hero Viewport */}
      <section className="relative min-h-screen lg:h-screen flex flex-col overflow-hidden bg-transparent pt-24 pb-0">
        <Container className="relative z-10 flex flex-1 items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 lg:gap-20 items-center w-full">

            {/* Left Column */}
            <div className="space-y-10">
              {/* Top Tagline */}
              <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Building Tech Future<br />
                  With{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Innovation!
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-slate-400 max-w-lg font-light leading-relaxed">
                  End-to-end product engineering that drives measurable results.
                </p>
              </div>

              {/* Selector + Active detail block */}
              <div className="relative min-h-[360px] sm:min-h-[300px]">
                {/* Vertical Dashes Index Selector */}
                <div className="flex sm:absolute flex-row sm:flex-col space-x-3 sm:space-x-0 sm:space-y-4 pb-4 sm:pb-0 sm:-left-8 top-3 z-20">
                  {typedServices.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveIndex(idx);
                        setIsAutoplay(false); // Pause auto sliding
                      }}
                      onMouseEnter={() => {
                        setActiveIndex(idx);
                        setIsAutoplay(false); // Pause auto sliding
                      }}
                      aria-label={`Show service slide ${idx + 1}`}
                      className={`h-0.5 rounded-full transition-all duration-300 ${idx === activeIndex
                        ? 'bg-blue-500 w-6'
                        : 'bg-slate-800 hover:bg-slate-700 w-4.5'
                        }`}
                    />
                  ))}
                </div>

                {/* Active description detail content with Framer Motion slide animation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="space-y-5 flex-grow"
                  >
                    <div className="space-y-3">
                      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {typedServices[activeIndex].category}
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed font-light max-w-lg">
                        {typedServices[activeIndex].heading}
                      </p>
                    </div>

                    {/* Sub-items checkmark list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-1 pb-3">
                      {typedServices[activeIndex].subItems.map((item, sIdx) => (
                        <div key={sIdx} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 font-light">
                          <svg className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 fill-current" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hire Developer Button with Split UI */}
                    <div className="pt-1">
                      <CTAButton href="/contact" label="Hire Developer" variant="secondary" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: Screen graphic */}
            <div className="relative flex items-center justify-center lg:justify-end xl:pr-10">

              {/* Mockup + Effects Parent Wrapper */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? { y: 0 }
                    : { y: [-8, 8, -8] }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-full max-w-[630px] flex items-center justify-center aspect-square"
              >
                {/* 3. Large Blurred Radial Glows (Pulse scale + Mouse Parallax) */}
                <motion.div
                  style={{ x: parallaxX, y: parallaxY }}
                  animate={
                    shouldReduceMotion
                      ? { scale: 1 }
                      : { scale: [1, 1.08, 1] }
                  }
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-[80%] aspect-square rounded-full bg-[#2563EB]/20 filter blur-[100px] z-0 pointer-events-none"
                />

                <motion.div
                  style={{ x: parallaxX, y: parallaxY }}
                  animate={
                    shouldReduceMotion
                      ? { scale: 1.04 }
                      : { scale: [1.08, 1, 1.08] }
                  }
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-[70%] aspect-square rounded-full bg-[#1D4ED8]/20 filter blur-[100px] z-0 pointer-events-none"
                />

                {/* Circular outline behind monitor */}
                <div className="absolute w-[80%] aspect-square rounded-full border-[3px] border-[#60a5fa] z-0 pointer-events-none" />

                {/* 4. Technology Rings (Rotate slowly, different speeds and directions) */}
                {/* Ring 1 (Outer) */}
                <motion.div
                  animate={shouldReduceMotion ? { rotate: 0 } : { rotate: 360 }}
                  transition={{
                    duration: 75,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-[100%] aspect-square rounded-full border border-[#60A5FA]/35 z-0 pointer-events-none"
                />

                {/* Ring 2 (Middle - Dashed) */}
                <motion.div
                  animate={shouldReduceMotion ? { rotate: 0 } : { rotate: -360 }}
                  transition={{
                    duration: 90,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-[90%] aspect-square rounded-full border border-dashed border-[#60A5FA]/35 z-0 pointer-events-none"
                />

                {/* Ring 3 (Inner - Glowing) */}
                <motion.div
                  animate={shouldReduceMotion ? { rotate: 0 } : { rotate: 360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-[65%] aspect-square rounded-full border border-[#60A5FA]/20 z-0 pointer-events-none"
                />

                {/* 5. Hero Image (Mockup) Parallax Wrapper */}
                <motion.div
                  style={{ x: parallaxX, y: parallaxY }}
                  className="relative z-10 w-full h-full flex items-center justify-center p-8"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <Image
                        src={serviceImages[activeIndex] || '/images/desktop.png'}
                        alt={typedServices[activeIndex]?.category || "Savo Mockup"}
                        width={420}
                        height={340}
                        priority
                        className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(37,99,235,0.25)]"
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </motion.div>

            </div>

          </div>
        </Container>
      </section>

      {/* Bottom Logos Row (Scrolls into view below the main Hero) */}
      <div className="relative z-10 border-t border-b border-[#327DD1]/40 bg-transparent py-0 mb-16 lg:mb-24">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-6 border-l border-[#327DD1]/25 bg-transparent">
            {bottomLogos.map((logo, idx) => (
              <div
                key={idx}
                className="bg-transparent flex items-center justify-center py-4 px-6 border-r border-b border-[#327DD1]/25 md:border-b-0 h-[120px] sm:h-[140px]"
              >
                <Image
                  src={logo}
                  alt={`Partner Logo ${idx + 1}`}
                  width={240}
                  height={80}
                  className="h-[80px] sm:h-[100px] md:h-[110px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default HeroCopy;

