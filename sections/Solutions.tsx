'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SliderNav from '@/components/SliderNav';
import { Container } from '@/components/Container';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

// 6 unique items to remove duplicates
const carouselItems = [
  {
    id: 0,
    label: 'Retail and\nE-commerce',
    image: '/images/2c92b795c04e2a6dd50b2c142852bcc7ad6aa65c.jpg',
    title: 'Retail and E-commerce Solutions',
    description: 'From regulated enterprises to breakout startups, Savo synchronizes automation, design, and engineering so every launch is pixel-perfect, compliant, and on pace with market demand.'
  },
  {
    id: 1,
    label: 'Healthcare\nSolutions',
    image: '/images/781670e5387b74ddaae464f558c3326ead68c839.jpg',
    title: 'Healthcare & Biotech Solutions',
    description: 'We deliver HIPAA-compliant digital health applications, patient portals, and automated diagnostic pipelines for modern healthcare systems.'
  },
  {
    id: 2,
    label: 'FinTech\nSolutions',
    image: '/images/education_technology.png',
    title: 'FinTech Solutions',
    description: 'From regulated enterprises to breakout startups, Savo synchronizes automation, design, and engineering so every launch is pixel-perfect, compliant, and on pace with market demand.'
  },
  {
    id: 3,
    label: 'Real Estate\nSolutions',
    image: '/images/retail_ecommerce.png',
    title: 'Real Estate Software platforms',
    description: 'Empowering realtors and property managers with virtual tour systems, automated leasing flows, and high-performance CRM databases.'
  },
  {
    id: 4,
    label: 'Logistics &\nDelivery',
    image: '/images/e106abb5fd41d6f97bfccb38560c138272c1c256.jpg',
    title: 'Logistics & Supply Chain Automation',
    description: 'Optimize routing, warehouse dispatch operations, and fleet tracking systems with high-concurrency microservice APIs.'
  },
  {
    id: 5,
    label: 'Food & Restaurant\nSolutions',
    image: '/images/2c92b795c04e2a6dd50b2c142852bcc7ad6aa65c.jpg',
    title: 'On-Demand Food Delivery Solutions',
    description: 'Elevate ordering experiences with real-time tracking, kitchen workflows, and dynamic POS integration platforms.'
  }
];

export function Solutions() {
  const [activeIndex, setActiveIndex] = useState(2); // Fintech active by default
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
    setActiveIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  // Visible three elements: [left, center, right]
  const getVisibleItems = () => {
    const total = carouselItems.length;
    const farLeftIndex = (activeIndex - 2 + total) % total;
    const leftIndex = (activeIndex - 1 + total) % total;
    const rightIndex = (activeIndex + 1) % total;
    const farRightIndex = (activeIndex + 2) % total;
    return {
      farLeft: carouselItems[farLeftIndex],
      left: carouselItems[leftIndex],
      center: carouselItems[activeIndex],
      right: carouselItems[rightIndex],
      farRight: carouselItems[farRightIndex]
    };
  };

  const { farLeft, left, center, right, farRight } = getVisibleItems();

  // Premium transition easing
  const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full text-white pt-24 sm:pt-32 pb-0 border-t border-slate-950 animate-bg-drift"
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
            {/* <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-start pb-10 border-b border-slate-900/60">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: premiumEase } }
                }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                  Hire Dedicated Developers
                </h2>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: premiumEase, delay: 0.3 } }
                }}
              >
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl font-light">
                  Established in 2011, Savo Technologies stands at the forefront of digital innovation, offering unparalleled expertise in Mobile App, Software, and Web Development.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl font-light mt-3">
                  Our mission is to catalyze global businesses towards digital transformation, serving as a trusted technological ally every step of the way.
                </p>
              </motion.div>
            </div> */}

            {/* ── 2. Middle Section: Industry-Specific Expertise (Mockup Grid) ── */}
            <div className="grid grid-cols-[1fr_auto_1.2fr] gap-8 lg:gap-16 items-stretch ">
              {/* Left Column */}
              <div className="flex flex-col justify-between pb-12">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white mb-6">
                  The Industry-Specific Software<br className="hidden sm:inline" /> Development Expertise
                </h3>
              </div>

              {/* Vertical Separator Line (White color) - Extended down by 24px to meet the centered horizontal line */}
              <div className="relative w-[1px]">
                <div className="absolute top-0 bottom-[-24px] left-0 w-[1px] bg-gradient-to-b from-white/10 via-white/40 to-transparent" />
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-between space-y-6 pb-12 text-slate-300 font-light leading-relaxed">
                From regulated enterprises to breakout startups, Savo synchronizes automation, design, and engineering so every launch is pixel-perfect, compliant, and on pace with market demand.

                {/* Custom Industries Button using CTAButton */}
                <div className="pt-2">
                  <CTAButton href="/industries" label="Industries We Serve" />
                </div>
              </div>
            </div>

            {/* Horizontal Line stretching below with navigation buttons sitting on top using SliderNav */}
            <SliderNav
              onPrev={() => { triggerUserInteraction(); handlePrev(); }}
              onNext={() => { triggerUserInteraction(); handleNext(); }}
              hasLine={true}
              lineColor="bg-white/20"
              btnBgColor="bg-[#00030c]"
              className="mb-16"
            />
          </motion.div>
        </Container>

        <div className="relative z-10 w-full max-w-none px-6 md:px-12 lg:px-16 xl:px-20 mx-auto">
          {/* ── 4. Circular Carousel Graphics ── */}
          <div className="relative flex justify-center items-center h-[350px] sm:h-[520px] md:h-[650px] lg:h-[720px] w-full overflow-visible mb-2">

            {/* Active / Center Glowing Backdrop Spot */}
            <div className="absolute w-[380px] h-[380px] sm:w-[540px] sm:h-[540px] md:w-[700px] md:h-[700px] rounded-full bg-blue-500/10 blur-[100px] z-0 pointer-events-none" />

            {/* Inactive Left Circle */}
            <motion.div
              onClick={() => { triggerUserInteraction(); handlePrev(); }}
              style={{ x: imgX, y: imgY }}
              className="absolute left-[-22%] sm:left-[-14%] md:left-[-10%] lg:left-[-8%] xl:left-[-4%] w-[200px] h-[200px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] rounded-full overflow-hidden border border-slate-900/80 cursor-pointer z-10"
              initial={{ scale: 0.92, opacity: 0.85, filter: 'grayscale(15%)' }}
              animate={{ scale: 0.92, opacity: 0.85, filter: 'grayscale(15%)' }}
              transition={{ duration: 0.9, ease: premiumEase }}
            >
              <div className="absolute inset-0 bg-black/20 md:bg-black/25 z-10 transition-colors duration-300 hover:bg-black/10" />
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={left.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.9, ease: premiumEase }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={left.image}
                    alt={left.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 200px, 520px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Active Center Circle with floats & hover */}
            <motion.div
              style={{ x: imgX, y: imgY }}
              className="absolute w-[260px] h-[260px] sm:w-[440px] sm:h-[440px] md:w-[560px] md:h-[560px] lg:w-[620px] lg:h-[620px] rounded-full shadow-[0_0_60px_rgba(59,130,246,0.25)] z-20 animate-main-image-float cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.03, transition: { duration: 0.5, ease: premiumEase } }}
            >
              {/* Concentric rings overlay - Dashed/Dotted style */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/60 pointer-events-none scale-[0.84] z-30 opacity-70" />
              <div className="absolute inset-0 rounded-full border border-dotted border-white/60 pointer-events-none scale-[0.56] z-30 opacity-70" />

              <AnimatePresence mode="popLayout">
                <motion.div
                  key={center.id}
                  initial={{ opacity: 0, scale: 0.92, filter: 'blur(2px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0.35, scale: 0.92, filter: 'blur(2px)' }}
                  transition={{ duration: 0.9, ease: premiumEase }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={center.image}
                    alt={center.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 260px, 620px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* 3D-Like Metallic Spheres / Orbs -> Replaced with eleipse02.png */}
            {/* 1. Small left orb (7s duration) */}
            <div className="absolute left-[12%] sm:left-[22%] top-[24%] w-6 h-6 sm:w-8 sm:h-8 z-30 pointer-events-none animate-orb-float-7s">
              <Image src="/images/eleipse02.png" alt="orb" fill className="object-contain" />
            </div>

            {/* 2. Large right shiny blue orb (9s duration) */}
            <div className="absolute left-[calc(50%+90px)] sm:left-[calc(50%+150px)] md:left-[calc(50%+200px)] lg:left-[calc(50%+220px)] top-[16%] sm:top-[14%] md:top-[12%] lg:top-[10%] w-14 h-14 sm:w-20 sm:h-20 z-30 pointer-events-none animate-orb-float-9s">
              <Image src="/images/eleipse02.png" alt="orb" fill className="object-contain" />
            </div>

            {/* 3. Small far-right orb (12s duration) */}
            <div className="absolute right-[-4%] sm:right-[2%] top-[20%] w-8 h-8 sm:w-10 sm:h-10 z-30 pointer-events-none animate-orb-float-12s">
              <Image src="/images/eleipse02.png" alt="orb" fill className="object-contain" />
            </div>

            {/* Inactive Right Circle */}
            <motion.div
              onClick={() => { triggerUserInteraction(); handleNext(); }}
              style={{ x: imgX, y: imgY }}
              className="absolute right-[-22%] sm:right-[-14%] md:right-[-10%] lg:right-[-8%] xl:right-[-4%] w-[200px] h-[200px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] rounded-full overflow-hidden border border-slate-900/80 cursor-pointer z-10"
              initial={{ scale: 0.92, opacity: 0.85, filter: 'grayscale(15%)' }}
              animate={{ scale: 0.92, opacity: 0.85, filter: 'grayscale(15%)' }}
              transition={{ duration: 0.9, ease: premiumEase }}
            >
              <div className="absolute inset-0 bg-black/20 md:bg-black/25 z-10 transition-colors duration-300 hover:bg-black/10" />
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={right.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.9, ease: premiumEase }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={right.image}
                    alt={right.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 200px, 520px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* ── 5. Bottom Navigation Labels Row (5-Text swipe) ── */}
          <div className="w-full pb-8">
            <div className="grid grid-cols-5 max-w-7xl mx-auto px-2 border-t border-slate-900/40 pt-8 gap-2 select-none">

              {/* 1. Far Left Label */}
              <div
                onClick={() => { triggerUserInteraction(); handlePrev(); handlePrev(); }}
                className="text-center cursor-pointer transition-all duration-300 flex justify-center items-start group"
              >
                <div className="px-3 py-2 rounded-full border border-transparent transition-all duration-300">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={farLeft.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 0.25, y: 0, transition: { duration: 0.5, delay: 0.2, ease: premiumEase } }}
                      exit={{ opacity: 0, y: -15, transition: { duration: 0.35, ease: premiumEase } }}
                      className="text-[10px] sm:text-xs md:text-sm leading-snug font-medium text-slate-500 whitespace-pre-line tracking-wide group-hover:text-slate-300 transition-colors"
                    >
                      {farLeft.label}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              {/* 2. Left Label */}
              <div
                onClick={() => { triggerUserInteraction(); handlePrev(); }}
                className="text-center cursor-pointer transition-all duration-300 flex justify-center items-start group"
              >
                <div className="px-3 py-2 rounded-full border border-transparent transition-all duration-300">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={left.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 0.45, y: 0, transition: { duration: 0.5, delay: 0.2, ease: premiumEase } }}
                      exit={{ opacity: 0, y: -15, transition: { duration: 0.35, ease: premiumEase } }}
                      className="text-xs sm:text-sm md:text-base leading-snug font-medium text-slate-400 whitespace-pre-line tracking-wide group-hover:text-slate-200 transition-colors"
                    >
                      {left.label}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              {/* 3. Center Active Label */}
              <div className="text-center flex justify-center items-start">
                <div className="px-4 py-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={center.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2, ease: premiumEase } }}
                      exit={{ opacity: 0, y: -15, transition: { duration: 0.35, ease: premiumEase } }}
                      className="text-sm sm:text-base md:text-lg lg:text-xl leading-snug font-semibold text-white whitespace-pre-line tracking-wide drop-shadow-md"
                    >
                      {center.label}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              {/* 4. Right Label */}
              <div
                onClick={() => { triggerUserInteraction(); handleNext(); }}
                className="text-center cursor-pointer transition-all duration-300 flex justify-center items-start group"
              >
                <div className="px-3 py-2 rounded-full border border-transparent transition-all duration-300">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={right.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 0.45, y: 0, transition: { duration: 0.5, delay: 0.2, ease: premiumEase } }}
                      exit={{ opacity: 0, y: -15, transition: { duration: 0.35, ease: premiumEase } }}
                      className="text-xs sm:text-sm md:text-base leading-snug font-medium text-slate-400 whitespace-pre-line tracking-wide group-hover:text-slate-200 transition-colors"
                    >
                      {right.label}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              {/* 5. Far Right Label */}
              <div
                onClick={() => { triggerUserInteraction(); handleNext(); handleNext(); }}
                className="text-center cursor-pointer transition-all duration-300 flex justify-center items-start group"
              >
                <div className="px-3 py-2 rounded-full border border-transparent transition-all duration-300">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={farRight.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 0.25, y: 0, transition: { duration: 0.5, delay: 0.2, ease: premiumEase } }}
                      exit={{ opacity: 0, y: -15, transition: { duration: 0.35, ease: premiumEase } }}
                      className="text-[10px] sm:text-xs md:text-sm leading-snug font-medium text-slate-500 whitespace-pre-line tracking-wide group-hover:text-slate-300 transition-colors"
                    >
                      {farRight.label}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Solutions;
