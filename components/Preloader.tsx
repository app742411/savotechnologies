'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., waiting for assets)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B1025] overflow-hidden"
        >
          {/* Background Gradient & Glows */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <motion.div 
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full bg-blue-600/30 filter blur-[100px] mix-blend-screen" 
            />
            <motion.div 
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] aspect-square rounded-full bg-indigo-500/20 filter blur-[120px] mix-blend-screen" 
            />
          </div>

          {/* Background cinematic image from hero */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none mix-blend-lighten"
          >
            <Image
              src="/images/herobg1.png"
              alt="Loading Background"
              width={1000}
              height={1000}
              className="w-full max-w-[800px] h-auto object-contain opacity-70"
              priority
            />
          </motion.div>

          {/* Main Logo and Loader */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 flex flex-col items-center"
          >
            <Image
              src="/logos/savologo.png"
              alt="SAVO Logo"
              width={200}
              height={60}
              className="h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              priority
            />
            
            {/* Cinematic loading bar */}
            <div className="mt-8 w-48 h-1 bg-slate-800/50 rounded-full overflow-hidden relative backdrop-blur-sm border border-slate-700/30">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.7)]"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="mt-5 text-[10px] uppercase tracking-[0.3em] text-blue-400 font-semibold"
            >
              Loading Experience
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
