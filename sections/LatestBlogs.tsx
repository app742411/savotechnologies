'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import CTAButton from '@/components/CTAButton';
import SliderNav from '@/components/SliderNav';
import blogsData from '@/data/blogs.json';

interface BlogItem {
  id: string;
  title: string;
  image: string;
  date: string;
}

export function LatestBlogs({ dark = false }: { dark?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [cardWidth, setCardWidth] = useState(380); // default card width
  const gap = 24; // gap-6 is 24px
  const totalItems = blogsData.length;

  // We clone the items to create a seamless infinite loop.
  // We place a set before and a set after the main set.
  // [Set 0 (clones)] [Set 1 (main)] [Set 2 (clones)]
  const displayItems = [...blogsData, ...blogsData, ...blogsData];

  // The base offset represents Set 1 (index totalItems)
  const baseOffset = totalItems * (cardWidth + gap);

  // Motion value for smooth translation
  const x = useMotionValue(-baseOffset);

  // States to manage interactions
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const autoplaySpeed = 1; // pixels per frame at 60fps (constant velocity)
  const autoplayDirection = -1; // scroll left

  // Adjust card widths on resize
  useEffect(() => {
    const updateSize = () => {
      if (trackRef.current) {
        const firstCard = trackRef.current.querySelector('.blog-card');
        if (firstCard) {
          setCardWidth(firstCard.getBoundingClientRect().width);
        }
      }
    };
    updateSize();
    const timer = setTimeout(updateSize, 100);
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
      clearTimeout(timer);
    };
  }, []);

  // Update position based on base offset changes (e.g. card width changes)
  useEffect(() => {
    x.set(-(totalItems * (cardWidth + gap)));
  }, [cardWidth, totalItems, x]);

  // Infinite wrapping logic checked every frame
  const wrapPosition = useCallback((currentX: number) => {
    const singleSetWidth = totalItems * (cardWidth + gap);
    
    // Left boundary: if we scrolled too far left (into Set 0), snap forward to Set 1
    if (currentX > -singleSetWidth) {
      const offset = currentX + singleSetWidth;
      x.set(-singleSetWidth * 2 + offset);
    }
    // Right boundary: if we scrolled too far right (into Set 2), snap back to Set 1
    else if (currentX < -singleSetWidth * 2) {
      const offset = currentX + singleSetWidth * 2;
      x.set(-singleSetWidth + offset);
    }
  }, [cardWidth, totalItems, x]);

  // Autoplay loop using animation frame
  useAnimationFrame((time, delta) => {
    if (isHovered || isInteracting) return;

    const currentX = x.get();
    const nextX = currentX + autoplayDirection * autoplaySpeed * (delta / 16);
    x.set(nextX);
    wrapPosition(nextX);
  });

  // Handle Drag events
  const handleDragStart = () => {
    setIsInteracting(true);
  };

  const handleDrag = () => {
    wrapPosition(x.get());
  };

  const handleDragEnd = (event: any, info: any) => {
    // Add slide momentum
    const velocity = info.velocity.x;
    const currentX = x.get();
    const targetX = currentX + velocity * 0.15;

    animate(x, targetX, {
      type: 'spring',
      velocity: velocity,
      stiffness: 60,
      damping: 20,
      restDelta: 0.5,
      onUpdate: (latest) => {
        wrapPosition(latest);
      },
      onComplete: () => {
        setIsInteracting(false);
      }
    });

    // Fallback to release interaction state in case animation completes immediately
    setTimeout(() => setIsInteracting(false), 800);
  };

  // Nav buttons transitions
  const slideTo = (direction: 'next' | 'prev') => {
    setIsInteracting(true);
    const currentX = x.get();
    const itemWidth = cardWidth + gap;
    
    // Find the nearest aligned card offset
    const nearestItemIndex = Math.round(currentX / itemWidth);
    const targetX = (nearestItemIndex + (direction === 'next' ? -1 : 1)) * itemWidth;

    animate(x, targetX, {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      onUpdate: (latest) => {
        wrapPosition(latest);
      },
      onComplete: () => {
        setIsInteracting(false);
      }
    });
  };

  return (
    <section className={`py-24 overflow-hidden border-t ${dark ? 'bg-black border-zinc-900' : 'bg-white border-slate-100'}`}>
      <Container>
        
        {/* ── Header: Solutions-Style 3-Part Row ── */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1px_1.5fr_1px_auto] gap-8 lg:gap-12 items-center pb-0">
            {/* Part 1: Heading */}
            <div>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none ${dark ? 'text-white' : 'text-slate-900'}`}>
                Latest Blogs
              </h2>
            </div>

            {/* Part 2: Vertical Separator 1 */}
            <div className="hidden lg:block relative w-[1px] h-12">
              <div className={`absolute top-0 bottom-[-12px] left-0 w-[1px] ${dark ? 'bg-zinc-800' : 'bg-slate-200'}`} />
            </div>

            {/* Part 3: Description paragraph */}
            <div>
              <p className={`text-sm sm:text-base leading-relaxed max-w-xl ${dark ? 'text-zinc-400' : 'text-slate-500'}`}>
                Browse through the technical knowledge about latest trends and technologies our experienced team would like to share with you.
              </p>
            </div>

            {/* Part 4: Vertical Separator 2 */}
            <div className="hidden lg:block relative w-[1px] h-12">
              <div className={`absolute top-0 bottom-[-12px] left-0 w-[1px] ${dark ? 'bg-zinc-800' : 'bg-slate-200'}`} />
            </div>

            {/* Part 5: View All CTA Button */}
            <div className="flex-shrink-0">
              <CTAButton href="/blogs" label="View All" />
            </div>
          </div>

          {/* ── Divider Line ── */}
          <div className={`w-full h-[1px] mt-3 mb-12 ${dark ? 'bg-zinc-800' : 'bg-slate-200'}`} />
        </div>
      </Container>

      {/* Carousel Wrapper */}
      <div 
        className="pl-6 xl:pl-8 2xl:pl-[calc((100vw-1440px)/2+2rem)] pr-0 w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={containerRef} className="w-full mb-12 overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            ref={trackRef}
            className="flex gap-6 w-max"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -10000, right: 10000 }} // virtually unbounded for wrapping
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          >
            {displayItems.map((blog, idx) => (
              <div 
                key={`${blog.id}-${idx}`} 
                className="blog-card w-[280px] sm:w-[340px] md:w-[380px] flex-shrink-0 flex flex-col group cursor-pointer select-none"
              >
                {/* Card Image Container */}
                <div className={`relative w-full aspect-[4/3] rounded-none overflow-hidden mb-6 shadow-md ${dark ? 'bg-zinc-900' : 'bg-slate-100'}`}>
                  <div className="absolute inset-0 z-10 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors duration-300" />
                  
                  {/* Real Image Render */}
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    draggable="false"
                  />

                  {/* Blue overlay Arrow CTA Button */}
                  <div className="absolute bottom-0 right-0 z-20 bg-blue-200/90 hover:bg-blue-300 w-16 h-16 flex items-center justify-center transition-all duration-300 translate-y-0 translate-x-0">
                    <ChevronRight className="w-6 h-6 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Title & Metadata */}
                <div className="flex-1 flex flex-col justify-between pr-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5">
                  <h3 className={`text-xl sm:text-2xl font-semibold leading-snug group-hover:text-blue-600 transition-colors duration-300 mb-3 line-clamp-2 ${dark ? 'text-white' : 'text-slate-950'}`}>
                    {blog.title}
                  </h3>
                  <span className={dark ? 'text-zinc-500 text-xs sm:text-sm font-medium' : 'text-slate-400 text-xs sm:text-sm font-medium'}>
                    {blog.date}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section Navigation Buttons using SliderNav */}
        <SliderNav
          onPrev={() => slideTo('prev')}
          onNext={() => slideTo('next')}
          className="pt-4"
        />

      </div>
    </section>
  );
}

export default LatestBlogs;
