'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  { year: '2017', title: 'Company Founded', description: 'SAVO Technologies was incorporated with a focus on core cloud infrastructure.' },
  { year: '2019', title: '100 Projects Completed', description: 'Scaled execution capability, delivering microservices architectures to mid-market enterprises.' },
  { year: '2021', title: 'International Clients', description: 'Expanded operations to North America, Europe, and Asia-Pacific regions.' },
  { year: '2023', title: 'AI Services Division', description: 'Launched custom agent development and large language model fine-tuning frameworks.' },
  { year: '2026', title: 'Enterprise Growth Phase', description: 'Forging deep integrations and serving Fortune 500 companies globally.' }
];

export default function CompanyTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const timelineScaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section ref={timelineRef} className="relative z-10 w-full bg-white border-t border-slate-200 py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 font-bold">Milestones</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Our Evolution Timeline</h3>
        </div>

        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2">
            <motion.div 
              style={{ scaleY: timelineScaleY, transformOrigin: 'top' }}
              className="w-full h-full bg-gradient-to-b from-blue-600 via-blue-400 to-indigo-500"
            />
          </div>

          <div className="space-y-16">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Point Indicator */}
                  <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full border border-blue-500 bg-white flex items-center justify-center -translate-x-1/2 z-10 shadow-lg shadow-blue-500/10">
                    <span className="text-[10px] font-bold text-blue-600">{item.year}</span>
                  </div>

                  {/* Left Side Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-16 flex justify-start md:justify-end ${isEven ? 'order-1 md:order-1' : 'order-1 md:order-2 opacity-0 md:pointer-events-none md:select-none'}`}>
                    {isEven && (
                      <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl max-w-md w-full shadow-sm hover:border-slate-300 transition duration-300">
                        <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">{item.year}</span>
                        <h4 className="text-lg font-bold text-slate-900 mt-1 mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed font-light">{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Right Side Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-16 flex justify-start ${!isEven ? 'order-1 md:order-2' : 'order-1 md:order-1 md:opacity-0 md:pointer-events-none md:select-none'}`}>
                    {!isEven && (
                      <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl max-w-md w-full shadow-sm hover:border-slate-300 transition duration-300">
                        <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">{item.year}</span>
                        <h4 className="text-lg font-bold text-slate-900 mt-1 mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed font-light">{item.description}</p>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
