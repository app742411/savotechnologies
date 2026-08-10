'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

const CounterValue = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    
    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function GlobalPresence() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto border-t border-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Map Left Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Global Presence</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Connected World</h3>
            <p className="text-slate-400 leading-relaxed">
              With operating nodes globally, our solution architects deploy secure systems spanning multi-region cloud frameworks. Hover over key locations to discover active regions.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-900">
            <div>
              <span className="text-3xl md:text-4xl font-extrabold text-blue-500 block">
                <CounterValue value={30} />+
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mt-1">Countries</span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-extrabold text-blue-500 block">
                <CounterValue value={500} />+
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mt-1">Projects</span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-extrabold text-blue-500 block">
                <CounterValue value={98} />%
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mt-1">Retention</span>
            </div>
          </div>

          {/* Active Highlight Info Card */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/30 min-h-[80px] flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-widest block font-bold">Selected Office</span>
              <span className="text-lg font-bold text-white mt-1 block">
                {activeLocation ? activeLocation : 'Hover over marker'}
              </span>
            </div>
            <MapPin className="w-5 h-5 text-blue-500 animate-pulse" />
          </div>
        </div>

        {/* SVG Map Right Visual */}
        <div className="lg:col-span-7 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-3xl pointer-events-none" />
          
          <svg 
            viewBox="0 0 1000 500" 
            className="w-full h-auto text-slate-800 fill-current opacity-70 transition duration-300"
          >
            <path d="M150,150 Q170,120 220,130 T300,120 T350,160 T420,130 T450,150 T480,180 T400,280 T380,350 T400,420 T360,450 T330,400 T290,290 T200,240 T150,220 Z" className="fill-slate-800/20" />
            <path d="M450,150 Q520,80 600,100 T700,90 T780,120 T850,110 T900,150 T920,200 T850,250 T880,310 T950,330 T960,380 T900,420 T800,450 T750,400 T720,300 T680,240 T520,220 Z" className="fill-slate-800/20" />
            
            {[
              { name: 'USA (New York)', cx: 270, cy: 160 },
              { name: 'Canada (Toronto)', cx: 250, cy: 130 },
              { name: 'Europe (London)', cx: 480, cy: 120 },
              { name: 'Middle East (Dubai)', cx: 620, cy: 190 },
              { name: 'India (Bangalore)', cx: 700, cy: 230 },
              { name: 'Australia (Sydney)', cx: 880, cy: 380 }
            ].map((loc, idx) => (
              <g 
                key={idx}
                className="cursor-pointer group/node"
                onMouseEnter={() => setActiveLocation(loc.name)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                <circle 
                  cx={loc.cx} 
                  cy={loc.cy} 
                  r={activeLocation === loc.name ? 10 : 6} 
                  className="fill-blue-500 transition-all duration-300 ease-out" 
                />
                <circle 
                  cx={loc.cx} 
                  cy={loc.cy} 
                  r={activeLocation === loc.name ? 22 : 12} 
                  className="stroke-blue-400 stroke-2 fill-none opacity-40 animate-ping" 
                />
                <circle 
                  cx={loc.cx} 
                  cy={loc.cy} 
                  r={2} 
                  className="fill-white" 
                />
              </g>
            ))}
          </svg>
        </div>

      </div>
    </section>
  );
}
