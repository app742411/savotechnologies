'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useSpring, useTransform, useScroll } from 'framer-motion';
import { Container } from '@/components/Container';
import { ArrowUpRight } from 'lucide-react';

const expertiseList = [
  { id: '01', title: 'Retail & E-commerce', image: '/images/cap01.png', desc: 'High-conversion storefronts & payment infra.' },
  { id: '02', title: 'FinTech Solutions', image: '/images/cap01.png', desc: 'Secure, resilient financial architectures.' },
  { id: '03', title: 'Education Tech', image: '/images/cap01.png', desc: 'Interactive, real-time learning at scale.' },
  { id: '04', title: 'Healthcare Systems', image: '/images/cap01.png', desc: 'HIPAA-compliant streaming & data solutions.' },
  { id: '05', title: 'Real Estate', image: '/images/cap01.png', desc: 'AR/VR property tech & valuation models.' },
];

const techStack = [
  { name: 'React', span: 'col-span-2 row-span-1', color: 'hover:bg-blue-600' },
  { name: 'Node.js', span: 'col-span-1 row-span-2', color: 'hover:bg-green-600' },
  { name: 'Next.js', span: 'col-span-1 row-span-1', color: 'hover:bg-slate-800' },
  { name: 'AWS', span: 'col-span-1 row-span-1', color: 'hover:bg-orange-500' },
  { name: 'PostgreSQL', span: 'col-span-2 row-span-1', color: 'hover:bg-blue-800' },
  { name: 'Flutter', span: 'col-span-1 row-span-1', color: 'hover:bg-sky-500' },
  { name: 'GraphQL', span: 'col-span-1 row-span-1', color: 'hover:bg-pink-600' },
];

export default function ExpertiseAndTechV2() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  
  // Smooth cursor tracking for the floating image
  const cursorX = useSpring(0, { stiffness: 100, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#020617] font-sans selection:bg-white selection:text-black">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/bgtech.png" 
          alt="Texture" 
          fill 
          className="object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[#020617]/80" />
      </div>

      {/* =========================================
          PART 1: EXPERTISE (MAGNETIC PARALLAX LIST)
      ========================================= */}
      <div 
        className="relative z-10 w-full min-h-screen py-32 cursor-default"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredExp(null)}
      >
        <Container>
          <div className="mb-24">
            <h2 className="text-[10vw] md:text-[8vw] font-bold text-white uppercase tracking-tighter leading-[0.8] mix-blend-difference">
              Expertise
            </h2>
          </div>

          <div className="flex flex-col relative w-full border-t border-white/10">
            {expertiseList.map((item, idx) => {
              const isHovered = hoveredExp === idx;
              
              return (
                <div 
                  key={item.id}
                  onMouseEnter={() => setHoveredExp(idx)}
                  className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-16 border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.02]"
                >
                  <div className="flex items-start gap-8 z-20">
                    <span className="text-xl md:text-2xl font-mono text-slate-500 group-hover:text-white transition-colors duration-300">
                      {item.id}
                    </span>
                    <h3 className="text-4xl md:text-6xl lg:text-[5rem] font-medium text-slate-300 tracking-tight group-hover:text-white group-hover:-translate-y-2 transition-all duration-500 ease-out">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="mt-6 md:mt-0 z-20 flex items-center justify-between w-full md:w-auto gap-12">
                    <p className="text-slate-400 text-sm md:text-base max-w-xs opacity-0 md:group-hover:opacity-100 -translate-x-4 md:group-hover:translate-x-0 transition-all duration-500">
                      {item.desc}
                    </p>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:rotate-45 transition-all duration-500">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>

        {/* Floating Reveal Image */}
        <motion.div
          className="absolute top-0 left-0 w-[400px] h-[500px] rounded-2xl overflow-hidden pointer-events-none z-10 hidden lg:block"
          style={{ 
            x: cursorX, 
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
            opacity: hoveredExp !== null ? 1 : 0,
            scale: hoveredExp !== null ? 1 : 0.8,
          }}
          transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.4, ease: "backOut" } }}
        >
          {expertiseList.map((item, idx) => (
            <Image
              key={item.id}
              src={item.image}
              alt={item.title}
              fill
              className={`object-cover transition-opacity duration-500 ${hoveredExp === idx ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          {/* Overlay to darken image slightly */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </div>

      {/* =========================================
          PART 2: TECHNOLOGIES (MARQUEE & BENTO)
      ========================================= */}
      <div className="relative z-10 w-full py-32 bg-black border-t border-white/5">
        
        {/* Brutalist Marquee */}
        <div className="w-full overflow-hidden flex whitespace-nowrap mb-32 border-y border-white/10 py-6 bg-[#0970E6]">
          <motion.div 
            className="flex gap-8 items-center text-4xl md:text-6xl font-bold uppercase tracking-tighter text-black"
            animate={{ x: [0, -1035] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            {/* Repeated text to ensure seamless scrolling */}
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span>Core Technologies</span>
                <span>•</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="flex flex-col">
              <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8 leading-tight">
                An engineering foundation built for the future.
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-12">
                We leverage modern, highly scalable architectures to ensure your platform remains resilient, secure, and incredibly fast under any load.
              </p>
              
              {/* Animated Stats */}
              <div className="flex gap-12 border-l-2 border-[#0970E6] pl-8">
                <div>
                  <p className="text-4xl font-bold text-white mb-2">99.9%</p>
                  <p className="text-sm text-slate-500 font-mono">Uptime SLA</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-2">&lt;50ms</p>
                  <p className="text-sm text-slate-500 font-mono">Avg Latency</p>
                </div>
              </div>
            </div>

            {/* Asymmetrical Bento Grid */}
            <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[500px]">
              {techStack.map((tech, idx) => (
                <div 
                  key={idx}
                  className={`${tech.span} relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden group transition-all duration-500 cursor-default flex items-center justify-center p-6 ${tech.color}`}
                >
                  <span className="text-xl md:text-2xl font-bold text-slate-600 group-hover:text-white transition-colors duration-500 z-10">
                    {tech.name}
                  </span>
                  
                  {/* Hover Glint Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
                </div>
              ))}
            </div>

          </div>
        </Container>
      </div>

    </section>
  );
}
