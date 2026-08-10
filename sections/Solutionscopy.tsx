'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/Container';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

// 6 unique items to remove duplicates
const carouselItems = [
  {
    id: 0,
    label: 'Retail and\nE-commerce',
    image: '/images/111.png',
    title: 'Retail and E-commerce Solutions',
    description: 'From regulated enterprises to breakout startups, Savo synchronizes automation, design, and engineering so every launch is pixel-perfect, compliant, and on pace with market demand.'
  },
  {
    id: 1,
    label: 'Healthcare\nSolutions',
    image: '/images/retail_ecommerce.png', // Pregnant woman drinking water image
    title: 'Healthcare & Biotech Solutions',
    description: 'We deliver HIPAA-compliant digital health applications, patient portals, and automated diagnostic pipelines for modern healthcare systems.'
  },
  {
    id: 2,
    label: 'FinTech\nSolutions',
    image: '/images/fintech_solutions.png',
    title: 'FinTech Solutions',
    description: 'From regulated enterprises to breakout startups, Savo synchronizes automation, design, and engineering so every launch is pixel-perfect, compliant, and on pace with market demand.'
  },
  {
    id: 3,
    label: 'Real Estate\nSolutions',
    image: '/images/design_mockup.png',
    title: 'Real Estate Software platforms',
    description: 'Empowering realtors and property managers with virtual tour systems, automated leasing flows, and high-performance CRM databases.'
  },
  {
    id: 4,
    label: 'Logistics &\nDelivery',
    image: '/images/transformation_mockup.png',
    title: 'Logistics & Supply Chain Automation',
    description: 'Optimize routing, warehouse dispatch operations, and fleet tracking systems with high-concurrency microservice APIs.'
  },
  {
    id: 5,
    label: 'Food & Restaurant\nSolutions',
    image: '/images/education_technology.png',
    title: 'On-Demand Food Delivery Solutions',
    description: 'Elevate ordering experiences with real-time tracking, kitchen workflows, and dynamic POS integration platforms.'
  }
];

export function SolutionsCopy() {
  const [activeIndex, setActiveIndex] = useState(2); // Fintech active by default
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [progress, setProgress] = useState(0);

  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax values
  const xNormalized = useMotionValue(0);
  const yNormalized = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(xNormalized, springConfig);
  const smoothY = useSpring(yNormalized, springConfig);

  const bgX = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], [-4, 4]);

  const imgX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const imgY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  const ringsX = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const ringsY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);

  const glowX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);

  // Cursor following glow (Lag 0.15)
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothCursorX = useSpring(cursorX, { damping: 25, stiffness: 120, mass: 0.15 });
  const smoothCursorY = useSpring(cursorY, { damping: 25, stiffness: 120, mass: 0.15 });
  const [isNearCenter, setIsNearCenter] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    xNormalized.set(x);
    yNormalized.set(y);

    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);

    // Detect if cursor is near the carousel center area
    const centerX = rect.width / 2;
    const centerY = rect.height / 2 + 50;
    const distance = Math.hypot(e.clientX - rect.left - centerX, e.clientY - rect.top - centerY);
    setIsNearCenter(distance < 450);
  };

  const handleMouseLeave = () => {
    xNormalized.set(0);
    yNormalized.set(0);
    setIsNearCenter(false);
  };

  // Helper to trigger manual interaction reset (8 seconds cooldown)
  const triggerUserInteraction = () => {
    setIsInteracting(true);
    setProgress(0);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 8000);
  };

  // Progress Bar & Auto Play Timer (5.5s autoplay, resets on activeIndex, pauses on hover/interaction)
  useEffect(() => {
    if (isHovered || isInteracting) return;

    const intervalTime = 55; // 5.5 seconds total / 100 steps = 55ms per step
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((curr) => (curr + 1) % carouselItems.length);
          return 0;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isHovered, isInteracting, activeIndex]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    };
  }, []);

  // Keyboard navigation support (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        triggerUserInteraction();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        triggerUserInteraction();
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const handleNext = () => {
    setDirection('next');
    setActiveIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  // Visible three elements: [left, center, right]
  const getVisibleItems = () => {
    const total = carouselItems.length;
    const leftIndex = (activeIndex - 1 + total) % total;
    const rightIndex = (activeIndex + 1) % total;
    return {
      left: carouselItems[leftIndex],
      center: carouselItems[activeIndex],
      right: carouselItems[rightIndex]
    };
  };

  const { left, center, right } = getVisibleItems();

  // Premium transition easing
  const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#00030c] text-white pt-24 sm:pt-32 pb-0 overflow-hidden border-t border-slate-950 animate-bg-drift"
    >
      {/* Autoplay & Interaction Hover Area wrapper */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full h-full relative"
      >
        {/* Cursor Glow Follow Effect (lag 0.15) */}
        {isNearCenter && (
          <motion.div
            style={{
              x: smoothCursorX,
              y: smoothCursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            className="absolute w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[80px] pointer-events-none z-0"
          />
        )}

        {/* Decorative Radial Glowing Backdrops */}
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute inset-x-0 bottom-0 h-[450px] bg-gradient-to-t from-blue-900/40 via-blue-950/10 to-transparent pointer-events-none z-0 animate-bottom-glow-pulse-10s"
        />

        {/* Glow Pulses */}
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[250px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none z-0 animate-glow-pulse-4s"
        />

        <Container className="relative z-10">

          {/* Scroll Reveal Wrapper for Title & Description Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {/* ── 1. Top Section: Hire Dedicated Developers ── */}


            {/* ── 2. Middle Section: Industry-Specific Expertise (Mockup Grid) ── */}
            <div className="grid grid-cols-[1fr_auto_1.2fr] gap-8 lg:gap-16 items-stretch pt-16">
              {/* Left Column */}
              <div className="flex flex-col justify-between pb-12">
                <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                  Hire Dedicated Developers
                </h3>
              </div>

              {/* Vertical Separator Line (White color) - Extended down by 24px to meet the centered horizontal line */}
              <div className="relative w-[1px]">
                <div className="absolute top-0 bottom-[-24px] left-0 w-[1px] bg-white" />
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-between space-y-6">
                <p>Established in 2011, Savo Technologies stands at the forefront of digital innovation, offering unparalleled expertise in Mobile App, Software, and Web Development.</p>
                <p>Our mission is to catalyze global businesses towards digital transformation, serving as a trusted technological ally every step of the way.</p>
                {/* Custom Industries Button (Blue square left, White rectangle right, Blue text) */}
                {/* <div className="inline-flex items-center cursor-pointer shadow-md gap-2">
                  <span className="w-12 h-12 bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </span>
                  <span className="h-12 bg-white text-blue-600 text-xs font-semibold tracking-wider uppercase flex items-center px-6 border border-white transition-all hover:bg-slate-50">
                    Industries We Serve
                  </span>
                </div> */}
              </div>
            </div>

            {/* Horizontal Line stretching below with navigation buttons sitting on top */}
            <div className="relative flex items-center w-full mb-16">
              {/* The Line */}
              <div className="absolute inset-x-0 h-[1px] bg-white z-0" />

              {/* Left: Buttons on top of the line */}
              <div className="relative z-10 bg-[#00030c] pr-0 flex gap-0.5">
                <button
                  onClick={() => { triggerUserInteraction(); handlePrev(); }}
                  className="w-12 h-12 bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 flex items-center justify-center text-white border-r border-blue-400/20 cursor-pointer shadow-md transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => { triggerUserInteraction(); handleNext(); }}
                  className="w-12 h-12 bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 flex items-center justify-center text-white cursor-pointer shadow-md transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </Container>

        <div className="pl-6 xl:pl-8 2xl:pl-[calc((100vw-1440px)/2+2rem)] pr-0 w-full relative z-10">
          {/* ── Sliding Layout Grid ── */}
          <div className="w-full mb-12 relative overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={activeIndex}
                initial={{ x: direction === 'next' ? '100%' : '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: direction === 'next' ? '-100%' : '100%' }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="grid grid-cols-1 lg:grid-cols-[1.8fr_0.8fr] gap-8 items-stretch w-full"
              >
                {/* 1. ACTIVE ITEM: Full image card layout with overlay title and button */}
                <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[500px] bg-slate-900 overflow-hidden rounded-none shadow-xl group">
                  <Image
                    src={center.image}
                    alt={center.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10" />

                  {/* Text details & CTA button overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 z-20 flex flex-col justify-end items-start space-y-4">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white whitespace-pre-line tracking-tight leading-tight">
                      {center.label.replace('\n', ' ')}
                    </h3>
                    <div className="inline-flex items-center cursor-pointer shadow-sm gap-0 group/btn">
                      <span className="w-12 h-12 bg-blue-600 group-hover/btn:bg-blue-700 flex items-center justify-center transition-colors">
                        <ChevronRight className="w-5 h-5 text-white transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </span>
                      <span className="h-12 bg-white text-blue-600 text-xs font-bold tracking-wider uppercase flex items-center px-8 hover:bg-slate-50 transition-all">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2. PEEK ITEM (On right column) */}
                <div
                  className="hidden lg:block relative w-full h-full bg-slate-900 overflow-hidden rounded-none shadow-xl cursor-pointer group"
                  onClick={() => { triggerUserInteraction(); handleNext(); }}
                >
                  <Image
                    src={right.image}
                    alt={right.title}
                    fill
                    className="object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    sizes="30vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10" />

                  {/* Text details & CTA button overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col justify-end items-start space-y-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white whitespace-pre-line tracking-tight leading-tight">
                      {right.label.replace('\n', ' ')}
                    </h3>
                    <div className="inline-flex items-center cursor-pointer shadow-sm gap-0 group/btn">
                      <span className="w-12 h-12 bg-blue-600 group-hover/btn:bg-blue-700 flex items-center justify-center transition-colors">
                        <ChevronRight className="w-5 h-5 text-white transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </span>
                      <span className="h-12 bg-white text-blue-600 text-xs font-bold tracking-wider uppercase flex items-center px-8 hover:bg-slate-50 transition-all">
                        View Project
                      </span>
                    </div>
                  </div>

                  {/* Arrow peeking overlay */}
                  <div className="absolute top-0 right-0 bg-blue-600/90 w-16 h-16 flex items-center justify-center z-20 transition-all group-hover:bg-blue-700">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsCopy;
