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

const floatingCardsData = [
  // Slide 0: Website Development
  [
    { id: 1, title: 'Web Vitals', value: 'SEO 100%', sub: 'Fully Optimized', icon: 'sparkle', pos: 'top-[-8%] left-[-10%]', color: 'border-emerald-500/20 text-emerald-400' },
    { id: 2, title: 'Page Speed', value: '0.3s FCP', sub: 'Ultra Fast', icon: 'speed', pos: 'top-[-5%] right-[-10%]', color: 'border-blue-500/20 text-blue-400' },
    { id: 3, title: 'Security', value: 'SSL Active', sub: 'Enterprise Grade', icon: 'shield', pos: 'bottom-[40%] right-[-12%]', color: 'border-blue-500/20 text-blue-400' },
    { id: 4, title: 'Conversion', value: '+28% Boost', sub: 'Revenue Growth', icon: 'trend', pos: 'bottom-[-5%] left-[-5%]', color: 'border-indigo-500/20 text-indigo-400' }
  ],
  // Slide 1: Software Development
  [
    { id: 1, title: 'Microservices', value: 'Latency <8ms', sub: 'GraphQL / gRPC', icon: 'cpu', pos: 'top-[-8%] left-[-10%]', color: 'border-purple-500/20 text-purple-400' },
    { id: 2, title: 'Uptime SLA', value: '99.999%', sub: 'High Availability', icon: 'status', pos: 'top-[-5%] right-[-10%]', color: 'border-emerald-500/20 text-emerald-400' },
    { id: 3, title: 'CI/CD Build', value: 'Passing', sub: 'Automated Deploy', icon: 'check', pos: 'bottom-[40%] right-[-12%]', color: 'border-blue-500/20 text-blue-400' },
    { id: 4, title: 'Database Scale', value: '1.2M req/s', sub: 'Optimized PostgreSQL', icon: 'database', pos: 'bottom-[-5%] left-[-5%]', color: 'border-blue-500/20 text-blue-400' }
  ],
  // Slide 2: UI/UX & Branding
  [
    { id: 1, title: 'Design System', value: '800+ Comps', sub: 'Figma Linked', icon: 'layers', pos: 'top-[-8%] left-[-10%]', color: 'border-orange-500/20 text-orange-400' },
    { id: 2, title: 'User Rating', value: '4.9 / 5.0', sub: 'Excellent UX', icon: 'star', pos: 'top-[-5%] right-[-10%]', color: 'border-amber-500/20 text-amber-400' },
    { id: 3, title: 'Interactive', value: 'Micro-animations', sub: 'Framer Motion', icon: 'play', pos: 'bottom-[40%] right-[-12%]', color: 'border-blue-500/20 text-blue-400' },
    { id: 4, title: 'Consistency', value: 'Verified', sub: 'Brand Architecture', icon: 'shield', pos: 'bottom-[-5%] left-[-5%]', color: 'border-indigo-500/20 text-indigo-400' }
  ],
  // Slide 3: AI & Automation (AI website)
  [
    { id: 1, title: 'AI Solutions', value: 'Smart Automation', sub: 'Neural Engine Active', icon: 'sparkle', pos: 'top-[-8%] left-[-10%]', color: 'border-blue-500/20 text-blue-400', hasChart: true },
    { id: 2, title: 'Performance', value: '+240%', sub: 'Efficiency Boost', icon: 'trend', pos: 'top-[-5%] right-[-10%]', color: 'border-cyan-500/20 text-cyan-400', hasChart: true },
    { id: 3, title: 'Innovation', value: 'Future Ready', sub: 'Autonomous Agents', icon: 'sparkle', pos: 'bottom-[40%] right-[-12%]', color: 'border-blue-500/20 text-blue-400' },
    { id: 4, title: 'Scalability', value: 'Built to Scale', sub: 'Elastic GPU Nodes', icon: 'cube', pos: 'bottom-[-5%] left-[-5%]', color: 'border-blue-500/20 text-blue-450' }
  ],
  // Slide 4: Digital Transformation
  [
    { id: 1, title: 'Cloud Efficiency', value: '-40% Spend', sub: 'AWS / GCP Scaling', icon: 'cloud', pos: 'top-[-8%] left-[-10%]', color: 'border-blue-500/20 text-blue-400' },
    { id: 2, title: 'ROI Delivered', value: '3.5x Multiplier', sub: 'Strategic Advisory', icon: 'trend', pos: 'top-[-5%] right-[-10%]', color: 'border-emerald-500/20 text-emerald-400' },
    { id: 3, title: 'Legacy Migrated', value: 'Completed', sub: 'Kubernetes Platform', icon: 'check', pos: 'bottom-[40%] right-[-12%]', color: 'border-blue-500/20 text-blue-400' },
    { id: 4, title: 'Agility Score', value: 'A+ Rated', sub: 'Sprint Velocity Boost', icon: 'status', pos: 'bottom-[-5%] left-[-5%]', color: 'border-indigo-500/20 text-indigo-400' }
  ]
];

const renderCardIcon = (iconName: string) => {
  switch (iconName) {
    case 'sparkle':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21L8.188 15.904L3 15L8.188 14.096L9 9L9.813 14.096L15 15L9.813 15.904Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.071 4.929L18.5 8L17.929 4.929L15 4.357L17.929 3.786L18.5 0.714L19.071 3.786L22 4.357L19.071 4.929Z" />
        </svg>
      );
    case 'speed':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
    case 'shield':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    case 'trend':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5 6.75-6.75M19.5 9h-4.5M19.5 9v4.5" />
        </svg>
      );
    case 'cpu':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="5" width="14" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 1v4M15 1v4M9 19v4M15 19v4M23 9h-4M23 15h-4M5 9H1h4M5 15H1h4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'status':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'check':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      );
    case 'database':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      );
    case 'layers':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m11.142 0L21.75 12l-4.179-2.25M12 5.75L6.429 8.75 12 11.75l5.571-3L12 5.75zm0 11.5l-5.571-3 5.571 3 5.571-3-5.571 3z" />
        </svg>
      );
    case 'star':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.158-.386.74-.386.898 0l2.22 4.506 4.972.721c.42.061.587.575.283.877l-3.6 3.507.85 4.952c.072.421-.37.742-.746.543l-4.444-2.337-4.444 2.337c-.376.199-.817-.122-.747-.543l.85-4.952-3.6-3.507c-.304-.302-.137-.816.282-.877l4.972-.721 2.22-4.506z" />
        </svg>
      );
    case 'play':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
      );
    case 'cube':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25" />
        </svg>
      );
    case 'cloud':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      );
    default:
      return null;
  }
};

export function Hero() {
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

  // Video reference for smooth playback speed
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down the video for a smoother effect
    }
  }, []);

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
      {/* Background Overlay layer with Next.js optimized Image component */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/herobanner.png"
          alt="Hero Background"
          fill
          priority
          quality={100}
          className="object-cover object-center mix-blend-screen opacity-90 z-0"
        />
        {/* Looping MP4 Video Overlay */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-30 z-0"
        >
          <source src="/videos/bghero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1025]/50 via-transparent to-[#0B1025] z-10" />
      </div>

      {/* Main Hero Viewport */}
      <section className="relative min-h-screen lg:h-screen flex flex-col overflow-hidden bg-transparent pt-24 pb-0">
        <Container className="relative z-10 flex flex-1 items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 lg:gap-20 items-center w-full">

            {/* Left Column */}
            <div className="space-y-10">
              {/* Top Tagline */}
              <div className="max-w-2xl space-y-4">
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 1 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.12,
                      }
                    }
                  }}
                >
                  {/* Line 1 */}
                  <span className="block overflow-hidden">
                    {"Building Tech Future".split(" ").map((word, idx) => (
                      <motion.span
                        key={idx}
                        className="inline-block mr-3 sm:mr-4"
                        variants={{
                          hidden: { opacity: 0, y: "100%", rotate: 2 },
                          visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", damping: 15, stiffness: 100 } }
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>

                  {/* Line 2 */}
                  <span className="block overflow-hidden mt-2 pb-6">
                    <motion.span
                      className="inline-block mr-3 sm:mr-4"
                      variants={{
                        hidden: { opacity: 0, y: "100%", rotate: 2 },
                        visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", damping: 15, stiffness: 100 } }
                      }}
                    >
                      <span className="relative inline-block">
                        With{' '}
                        <div className="relative inline-block">
                          <motion.span
                            className="inline-block"
                            variants={{
                              hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                              visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { type: "spring", damping: 12, stiffness: 100, delay: 0.4 } }
                            }}
                          >
                            <motion.span
                              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 inline-block relative z-10 drop-shadow-sm"
                              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                              transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                              style={{ backgroundSize: "200% auto" }}
                            >
                              Innovation!
                            </motion.span>
                          </motion.span>
                          {/* Scribble Underline (Smile Shape with Custom Gradient) */}
                          <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-4 sm:h-5 z-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="smile-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#010518" />
                                <stop offset="25%" stopColor="#17407B" />
                                <stop offset="50%" stopColor="#4C8AC9" />
                                <stop offset="75%" stopColor="#9CCAF0" />
                                <stop offset="83%" stopColor="rgba(160, 204, 241, 0.51)" />
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
                        </div>
                      </span>
                    </motion.span>
                  </span>
                </motion.h1>
                <p className="text-[15px] sm:text-base text-slate-400 max-w-lg font-light leading-relaxed mt-4 mb-8">
                  End-to-end product engineering that drives measurable results.
                </p>

                {/* Static Divider Line */}
                <div className="w-full max-w-md h-[1px] bg-slate-800/80 mb-6" />
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
                    transition={{ duration: 0.4, ease: "easeOut" }}
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
              <motion.div
                animate={shouldReduceMotion ? { y: 0 } : { y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full max-w-[630px] flex items-center justify-center aspect-square"
              >
                {/* Background circle image (herobg1.png) */}
                <motion.div
                  style={{ x: parallaxX, y: parallaxY }}
                  animate={
                    shouldReduceMotion
                      ? { scale: 1, rotate: 0, opacity: 0.8 }
                      : { scale: [0.95, 1, 0.95], rotate: 0, opacity: [0.7, 1, 0.7] }
                  }
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute z-0 pointer-events-none w-[130%] h-[130%] sm:w-[110%] sm:h-[110%] flex items-center justify-center top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-lighten"
                >
                  <Image
                    src="/images/herobg1.png"
                    alt="Hero Background Circle"
                    width={900}
                    height={900}
                    className="w-full h-full object-contain"
                    priority
                  />
                </motion.div>

                {/* Cinematic Glows */}
                <motion.div
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [0.8, 1.1, 0.8]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-[85%] aspect-square rounded-full bg-blue-600/30 filter blur-[100px] z-0 pointer-events-none mix-blend-screen"
                />
                <motion.div
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute w-[70%] aspect-square rounded-full bg-indigo-500/20 filter blur-[120px] z-0 pointer-events-none mix-blend-screen"
                />

                {/* Desktop Image with entrance/exit animation */}
                <motion.div
                  style={{ x: parallaxX, y: parallaxY }}
                  className="relative z-10 w-full max-w-[850px] flex items-center justify-center aspect-square"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Image
                        src="/images/desktop.png"
                        alt="Desktop Graphic"
                        width={1000}
                        height={1000}
                        className="w-full max-w-[750px] xl:max-w-[850px] h-auto object-contain drop-shadow-[0_30px_60px_rgba(37,99,235,0.5)] relative z-10 scale-110"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </Container>
      </section>

      {/* Bottom Logos Row */}
      <div className="relative z-10 border-t border-b border-[#C1DEF5]/30 bg-transparent py-0 mb-16 lg:mb-24">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-6 border-l border-[#C1DEF5]/30 bg-transparent">
            {bottomLogos.map((logo, idx) => (
              <div
                key={idx}
                className="bg-transparent flex items-center justify-center py-4 px-6 border-r border-b border-[#C1DEF5]/30 md:border-b-0 h-[120px] sm:h-[140px]"
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

export default Hero;

