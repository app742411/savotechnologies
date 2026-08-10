'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/Container';
import CTAButton from '@/components/CTAButton';

/* ─────────────────────────── Types ─────────────────────────── */
interface ProjectCard {
  logoName: string;
  title: string;
  description: string;
  buttonText: string;
  theme: 'white' | 'blue';
}

interface CategoryData {
  id: string;
  label: string;
  projects: ProjectCard[];
  techs: { name: string; icon: React.ReactNode }[];
}

/* ─────────────────────────── SVG Icons ──────────────────────── */
const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className ?? 'w-5 h-5 fill-current'} viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const svgIcons = {
  swift: (
    <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="60" fill="#FA7343"/>
      <path d="M204.87 168.67c.41-.62.8-1.25 1.18-1.89-9.6 10.85-23.21 16.96-38.05 16.96-28.57 0-51.82-23.25-51.82-51.82 0-14.09 5.67-26.87 14.87-36.19-4.65 1.09-9.13 2.72-13.35 4.82C97.41 72.24 71.08 48.79 71.08 48.79s18.06 30.01 9.27 55.27c-4.02 11.55-12.04 21.02-22.32 27.13 3.26 4.37 6.94 8.46 11.03 12.2 26.01 23.72 63.31 28.04 94.14 11.42 7.01-3.77 13.39-8.57 18.89-14.19.18-.19.36-.38.54-.57-3.88 11.23-10.9 21.16-20.44 28.38 2.08.18 4.18.27 6.3.27 16.79 0 32.46-6.53 44.28-17.03z" fill="white"/>
      <path d="M157.16 71.08C134.3 48.22 102.46 42.13 73.97 55.02c30.68 17.02 49.54 49.27 48.02 82.94-.43 9.44-2.74 18.56-6.68 26.87 5.67 3.06 11.82 5.26 18.33 6.41 26.55-18.56 38.63-52.21 23.52-100.16z" fill="white" opacity=".5"/>
    </svg>
  ),
  react: (
    <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="60" fill="#20232A"/>
      <circle cx="128" cy="128" r="22" fill="#61DAFB"/>
      <ellipse cx="128" cy="128" rx="100" ry="38" fill="none" stroke="#61DAFB" strokeWidth="10" transform="rotate(30 128 128)"/>
      <ellipse cx="128" cy="128" rx="100" ry="38" fill="none" stroke="#61DAFB" strokeWidth="10" transform="rotate(90 128 128)"/>
      <ellipse cx="128" cy="128" rx="100" ry="38" fill="none" stroke="#61DAFB" strokeWidth="10" transform="rotate(150 128 128)"/>
    </svg>
  ),
  codeigniter: (
    <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="60" fill="#EE4326"/>
      <path d="M128 48c-8 0-16 4-20 12-12 24-4 52 12 72-16-8-32-20-40-36-4-8-4-20 4-28 8-8 20-8 28-4-8-12-20-20-36-16-20 8-28 32-20 52 12 28 40 48 72 52 32 4 64-12 80-40 16-28 12-64-8-88-12-16-28-24-48-24h-24z" fill="white"/>
    </svg>
  ),
  android: (
    <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="60" fill="#3DDC84"/>
      <path d="M76 136v48c0 6.6 5.4 12 12 12s12-5.4 12-12v-48H76zm80 0v48c0 6.6 5.4 12 12 12s12-5.4 12-12v-48h-24zM76 124h104V96H76v28zM88 60l-16-28 8-4 17 29c10-4 21-6 31-6s21 2 31 6l17-29 8 4-16 28c18 10 30 28 30 48H58c0-20 12-38 30-48z" fill="white"/>
    </svg>
  ),
  node: (
    <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="60" fill="#339933"/>
      <path d="M128 48L56 88v80l72 40 72-40V88l-72-40zm0 18l54 30v60l-54 30-54-30V96l54-30z" fill="white"/>
      <path d="M128 114l-30-17v34l30 17 30-17v-34l-30 17z" fill="white" opacity=".6"/>
    </svg>
  ),
  angular: (
    <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="60" fill="#DD0031"/>
      <path d="M128 44L60 68l10 88 58 56 58-56 10-88L128 44zm0 30l40 90H148l-8-20H116l-8 20H88l40-90z" fill="white"/>
      <path d="M122 130l6-16 6 16h-12z" fill="#DD0031"/>
    </svg>
  ),
  flutter: (
    <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="60" fill="#0468D7"/>
      <path d="M152 48H92l-52 52h60l52-52zm12 80l-52-52-52 52 52 52 8-8-36-36 28-8 52 52-52 52H152l60-60-48-48v8z" fill="white"/>
    </svg>
  ),
  python: (
    <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="60" fill="#3776AB"/>
      <path d="M128 40c-30 0-56 6-56 30v22h56v8H72c-16 0-32 10-32 44 0 34 18 44 36 44h20v-26c0-20 16-36 32-36h56c14 0 24-10 24-24V72c0-20-24-32-80-32zm-14 18c6 0 10 4 10 10s-4 10-10 10-10-4-10-10 4-10 10-10z" fill="white"/>
      <path d="M128 216c30 0 56-6 56-30v-22h-56v-8h56c16 0 32-10 32-44 0-34-18-44-36-44h-20v26c0 20-16 36-32 36H72c-14 0-24 10-24 24v44c0 20 24 32 80 32zm14-18c-6 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10z" fill="white" opacity=".6"/>
    </svg>
  ),
  go: (
    <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="60" fill="#00ADD8"/>
      <text x="48" y="158" fontSize="100" fontWeight="bold" fill="white" fontFamily="sans-serif">Go</text>
    </svg>
  ),
  aws: (
    <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="60" fill="#232F3E"/>
      <path d="M88 148l-28 12 28 12V148zm80 0v24l28-12-28-12z" fill="#FF9900"/>
      <path d="M78 116c0-28 22-50 50-50s50 22 50 50c0 14-6 26-14 36H92c-8-10-14-22-14-36z" fill="#FF9900" opacity=".8"/>
      <text x="68" y="210" fontSize="40" fontWeight="bold" fill="#FF9900" fontFamily="sans-serif">AWS</text>
    </svg>
  ),
  postgres: (
    <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="60" fill="#336791"/>
      <text x="48" y="175" fontSize="88" fontWeight="bold" fill="white" fontFamily="sans-serif">Pg</text>
    </svg>
  ),
};

/* ─────────────────────────── Category Data ──────────────────── */
function buildCategories(icons: typeof svgIcons): CategoryData[] {
  return [
    {
      id: 'frontend', label: 'Front End',
      projects: [
        { logoName: 'eNavvi', title: 'On-Demand Video Streaming Platform for the Asia Pacific', description: 'Result-driven App Marketing, ASO and CPI campaigns for a Fortune 500 entertainment company.', buttonText: 'Schedule Interview', theme: 'white' },
        { logoName: 'eNavvi', title: 'Marketplace for Authentic Human Data', description: 'The world\'s public, declared and opt-in complete first-party data. You can reach real and authentic unique source of reliable and verifiable data.', buttonText: 'Schedule Interview', theme: 'blue' },
      ],
      techs: [
        { name: 'Swift', icon: icons.swift }, { name: 'React.JS', icon: icons.react },
        { name: 'Codeigniter', icon: icons.codeigniter }, { name: 'Android', icon: icons.android },
        { name: 'Node JS', icon: icons.node }, { name: 'Angular', icon: icons.angular },
        { name: 'Flutter', icon: icons.flutter },
      ],
    },
    {
      id: 'backend', label: 'Back End',
      projects: [
        { logoName: 'eNavvi', title: 'High-Frequency Trading API Gateways', description: 'Handling 15,000+ requests per second with sub-millisecond latency for real-time order books.', buttonText: 'Schedule Interview', theme: 'white' },
        { logoName: 'eNavvi', title: 'Global Logistics Event Sourcing Architecture', description: 'Scalable backend tracking millions of shipping events globally with immutable audit trails.', buttonText: 'Schedule Interview', theme: 'blue' },
      ],
      techs: [
        { name: 'Node JS', icon: icons.node }, { name: 'Python', icon: icons.python },
        { name: 'Go (Golang)', icon: icons.go }, { name: 'React.JS', icon: icons.react },
      ],
    },
    {
      id: 'mobile', label: 'Mobile',
      projects: [
        { logoName: 'eNavvi', title: 'Cross-Platform Neo-Banking Mobile App', description: 'Achieved 4.9 stars across iOS and Android with unified codebase and native biometric security.', buttonText: 'Schedule Interview', theme: 'white' },
        { logoName: 'eNavvi', title: 'IoT Connected Wearables Companion App', description: 'Seamless Bluetooth LE sync, offline-first architecture, and real-time health data visualization.', buttonText: 'Schedule Interview', theme: 'blue' },
      ],
      techs: [
        { name: 'Swift', icon: icons.swift }, { name: 'Flutter', icon: icons.flutter },
        { name: 'Android', icon: icons.android }, { name: 'React.JS', icon: icons.react },
      ],
    },
    {
      id: 'cms', label: 'CMS',
      projects: [
        { logoName: 'eNavvi', title: 'Multi-Tenant Content Delivery Pipelines', description: 'Managing global editorial workflows across 18 regional brands with role-based access and live preview APIs.', buttonText: 'Schedule Interview', theme: 'white' },
        { logoName: 'eNavvi', title: 'Headless WordPress Enterprise Architectures', description: 'Replacing heavy server architectures with lightning-fast static builds fetching contents from GraphQL endpoints.', buttonText: 'Schedule Interview', theme: 'blue' },
      ],
      techs: [
        { name: 'React.JS', icon: icons.react }, { name: 'Node JS', icon: icons.node },
        { name: 'Python', icon: icons.python },
      ],
    },
    {
      id: 'database', label: 'Database',
      projects: [
        { logoName: 'eNavvi', title: 'Distributed Fault-Tolerant DBMS Ledger Systems', description: 'Ensuring absolute write consistency and automated secondary replication setups for transactional finance apps.', buttonText: 'Schedule Interview', theme: 'white' },
        { logoName: 'eNavvi', title: 'Real-Time Analytics Data Warehouse Migration', description: 'Moving a 4TB legacy Oracle schema to Snowflake with zero-downtime ETL pipelines and automated reconciliation.', buttonText: 'Schedule Interview', theme: 'blue' },
      ],
      techs: [
        { name: 'PostgreSQL', icon: icons.postgres }, { name: 'Node JS', icon: icons.node },
        { name: 'Python', icon: icons.python },
      ],
    },
    {
      id: 'devops', label: 'DevOps and Cloud',
      projects: [
        { logoName: 'eNavvi', title: 'Zero-Downtime Blue-Green Deployment Architecture', description: 'Eliminating release risk for a FinTech platform processing $2.4B annually with automated canary rollback systems.', buttonText: 'Schedule Interview', theme: 'white' },
        { logoName: 'eNavvi', title: 'Infrastructure as Code Pipelines at Global Scale', description: 'Automating multi-region cloud replication and instant server recovery routines via Terraform.', buttonText: 'Schedule Interview', theme: 'blue' },
      ],
      techs: [
        { name: 'AWS Cloud', icon: icons.aws }, { name: 'Python', icon: icons.python },
        { name: 'Go (Golang)', icon: icons.go },
      ],
    },
    {
      id: 'pm', label: 'Project Management',
      projects: [
        { logoName: 'eNavvi', title: 'Agile Delivery and Cross-Functional SCRUM Operations', description: 'Enforcing pixel-perfect launches with clear milestone boards, daily standups, and transparent delivery SLAs.', buttonText: 'Schedule Interview', theme: 'white' },
        { logoName: 'eNavvi', title: 'Enterprise Portfolio Governance and Risk Framework', description: 'Overseeing a 14-team engineering organization with OKR alignment, budget controls, and delivery forecasting.', buttonText: 'Schedule Interview', theme: 'blue' },
      ],
      techs: [
        { name: 'React.JS', icon: icons.react }, { name: 'Node JS', icon: icons.node },
        { name: 'Python', icon: icons.python },
      ],
    },
  ];
}

/* ─────────────────────────── Single Card ────────────────────── */
function ProjectCardView({
  proj,
  isCenter,
  isFloating,
}: {
  proj: ProjectCard;
  isCenter: boolean;
  isFloating: boolean;
}) {
  const isWhite = proj.theme === 'white';

  return (
    <div
      className={`w-full h-full rounded-none p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 relative overflow-hidden group ${
        isWhite
          ? 'bg-white shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-slate-100 text-slate-900'
          : 'bg-[#004cdc] text-white shadow-[0_8px_32px_rgba(0,76,220,0.15)]'
      } ${isCenter ? 'hover:-translate-y-1' : ''}`}
    >
      {/* Subtle background graphics based on mockup */}
      <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[60px] opacity-20 pointer-events-none ${isWhite ? 'bg-blue-300' : 'bg-white'}`} />
      
      {/* Logo */}
      <motion.div
        initial={false}
        animate={isFloating ? { y: [0, -4, 0] } : {}}
        transition={isFloating ? { duration: 8, ease: 'easeInOut', repeat: Infinity, delay: 0.2 } : {}}
        className="flex items-center gap-1.5 mb-6 relative z-10"
      >
        <span className={`text-2xl font-bold flex items-center gap-1.5 ${isWhite ? 'text-blue-500' : 'text-white'}`}>
          <HeartIcon className="w-5 h-5 fill-current" />
          {proj.logoName}
        </span>
      </motion.div>
 
      {/* Content stagger */}
      <div className="flex-1 space-y-3 relative z-10">
        <h4 className={`text-lg sm:text-xl font-medium leading-snug tracking-tight ${isWhite ? 'text-slate-900' : 'text-white'}`}>
          {proj.title}
        </h4>
        <p className={`text-sm leading-relaxed max-w-sm ${isWhite ? 'text-slate-500' : 'text-blue-100'}`}>
          {proj.description}
        </p>
      </div>
 
      {/* CTA */}
      <div className="mt-8 relative z-10">
        <CTAButton href="/contact" label={proj.buttonText} />
      </div>
    </div>
  );
}

/* ─────────────────────────── Main Component ─────────────────── */
export function TechnologyStack() {
  const categories = buildCategories(svgIcons);
  
  // Flatten all projects into a single list
  const allProjects = React.useMemo(() => {
    return categories.flatMap(cat =>
      cat.projects.map(proj => ({
        ...proj,
        categoryId: cat.id,
        categoryLabel: cat.label,
      }))
    );
  }, [categories]);

  const N = allProjects.length;

  // Clone projects list to create an infinite loop
  const clonedProjects = React.useMemo(() => {
    return [...allProjects, ...allProjects, ...allProjects];
  }, [allProjects]);

  const [activeProjIdx, setActiveProjIdx] = useState(N); // Start at the first project of the middle set
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [windowWidth, setWindowWidth] = useState(1200);

  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Resize listener to track window width for slide offset
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute layout values
  const isMobile = windowWidth < 640;
  const cardWidth = isMobile ? 280 : 380;
  const gap = 16;
  const activePairWidth = isMobile ? cardWidth : (2 * cardWidth + gap);
  const offset = (windowWidth - activePairWidth) / 2;
  const x = -activeProjIdx * (cardWidth + gap) + offset;

  // Derive active category from centered card
  const activeProj = clonedProjects[activeProjIdx] || allProjects[0];
  const activeCatId = activeProj.categoryId;
  const activeIdx = categories.findIndex(cat => cat.id === activeCatId);
  const activeCat = categories[activeIdx] || categories[0];

  /* ── Auto-advance (5s) ── */
  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setActiveProjIdx(prev => prev + 1);
    }, 5000);
  }, []);

  useEffect(() => {
    startAuto();
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [startAuto]);

  const navigateToProj = (idx: number) => {
    setShouldAnimate(true);
    setActiveProjIdx(idx);
    startAuto();
  };

  const handleAnimationComplete = () => {
    if (activeProjIdx >= 2 * N) {
      setShouldAnimate(false);
      setActiveProjIdx(activeProjIdx - N);
    } else if (activeProjIdx < N) {
      setShouldAnimate(false);
      setActiveProjIdx(activeProjIdx + N);
    }
  };

  useEffect(() => {
    if (!shouldAnimate) {
      const raf = requestAnimationFrame(() => {
        setShouldAnimate(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [shouldAnimate]);

  const handleTabClick = (catIdx: number) => {
    const targetCat = categories[catIdx];
    const targetOrigIdx = allProjects.findIndex(proj => proj.categoryId === targetCat.id);
    if (targetOrigIdx !== -1) {
      navigateToProj(targetOrigIdx + N);
    }
  };

  return (
    <div className="relative w-full py-24 sm:py-32">
      <Container className="relative z-10">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white">
            Technologies & Platforms<br />We Work With
          </h2>
        </motion.div>

        {/* ── Category Tab Navigation ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl mx-auto mb-14 select-none"
        >
          <div className="flex flex-wrap items-center justify-center p-1.5 gap-6 sm:gap-8 w-fit mx-auto border-b border-slate-700/60 pb-4">
            {categories.map((cat, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabClick(idx)}
                  className={`relative px-5 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-300 cursor-pointer z-10 rounded-none ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tabPill"
                      className="absolute inset-0 bg-blue-600 rounded-none z-[-1]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Infinite Horizontal Slider ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full overflow-hidden mb-16 py-4 select-none cursor-grab active:cursor-grabbing"
        >
          <motion.div
            animate={{ x }}
            transition={shouldAnimate ? { type: 'spring', stiffness: 120, damping: 20 } : { duration: 0 }}
            onAnimationComplete={handleAnimationComplete}
            className="flex gap-4 w-max"
          >
            {clonedProjects.map((proj, idx) => {
              const isCenter = isMobile
                ? idx === activeProjIdx
                : (idx === activeProjIdx || idx === activeProjIdx + 1);
              return (
                <div
                  key={`${proj.title}-${idx}`}
                  onClick={() => navigateToProj(idx)}
                  className="w-[280px] sm:w-[380px] h-[400px] flex-shrink-0 transition-opacity duration-300 cursor-pointer"
                  style={{ opacity: isCenter ? 1 : 0.4 }}
                >
                  <ProjectCardView
                    proj={proj}
                    isCenter={isCenter}
                    isFloating={isCenter}
                  />
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* ── Auto-progress dots ── */}
        <div className="flex justify-center gap-2 mb-16">
          {allProjects.map((_, idx) => {
            const origIdx = activeProjIdx % N;
            const isActive = idx === origIdx;
            return (
              <button
                key={idx}
                onClick={() => navigateToProj(idx + N)}
                className="cursor-pointer"
              >
                <motion.div
                  animate={{ width: isActive ? 24 : 8, opacity: isActive ? 1 : 0.3 }}
                  transition={{ duration: 0.4 }}
                  className="h-[3px] rounded-none bg-blue-500"
                />
              </button>
            );
          })}
        </div>

        {/* ── Technology Icons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-5xl mx-auto pt-10 border-t border-slate-900/50"
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeIdx}
              className="flex flex-wrap justify-center items-center gap-8 sm:gap-10"
            >
              {activeCat.techs.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex flex-col items-center gap-3 group cursor-default select-none"
                >
                  {/* Icon tile */}
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.06,
                      boxShadow: '0 0 24px rgba(59,130,246,0.35)',
                    }}
                    animate={i === 0 ? { opacity: [0.8, 1, 0.8] } : {}}
                    transition={
                      i === 0
                        ? { duration: 3, ease: 'easeInOut', repeat: Infinity, delay: 1 }
                        : { duration: 0.25 }
                    }
                    className="w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] bg-white rounded-none flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden text-blue-500"
                  >
                    {tech.icon}
                  </motion.div>
                  <span className="text-xs sm:text-sm font-medium text-slate-500 group-hover:text-white transition-colors duration-200">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </Container>
    </div>
  );
}

export default TechnologyStack;
