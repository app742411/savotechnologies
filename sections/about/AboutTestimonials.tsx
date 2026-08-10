'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame, animate } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/Container';
import CTAButton from '@/components/CTAButton';
import SliderNav from '@/components/SliderNav';
import testimonialsData from '@/data/testimonials.json';

export default function AboutTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [cardWidth, setCardWidth] = useState(380); // default card width
  const gap = 24; // gap-6 is 24px
  const totalItems = testimonialsData.length;

  // We clone the items to create a seamless infinite loop.
  const displayItems = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  // The base offset represents Set 1 (index totalItems)
  const baseOffset = totalItems * (cardWidth + gap);

  // Motion value for smooth translation
  const x = useMotionValue(-baseOffset);

  // States to manage interactions
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const autoplaySpeed = 1; // pixels per frame at 60fps
  const autoplayDirection = -1; // scroll left

  // Adjust card widths on resize
  useEffect(() => {
    const updateSize = () => {
      if (trackRef.current) {
        const firstCard = trackRef.current.querySelector('.testimonial-card');
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

  // Update position based on base offset changes
  useEffect(() => {
    x.set(-(totalItems * (cardWidth + gap)));
  }, [cardWidth, totalItems, x]);

  // Infinite wrapping logic checked every frame
  const wrapPosition = useCallback((currentX: number) => {
    const singleSetWidth = totalItems * (cardWidth + gap);
    
    // Left boundary: snap forward
    if (currentX > -singleSetWidth) {
      const offset = currentX + singleSetWidth;
      x.set(-singleSetWidth * 2 + offset);
    }
    // Right boundary: snap back
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

    setTimeout(() => setIsInteracting(false), 800);
  };

  // Nav buttons transitions
  const slideTo = (direction: 'next' | 'prev') => {
    setIsInteracting(true);
    const currentX = x.get();
    const itemWidth = cardWidth + gap;
    
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
    <section className="relative py-28 overflow-hidden text-slate-900 bg-white border-t border-slate-100">
      <Container className="relative z-10">
        
        {/* ── Header: Connected Divider Layout (60/40 Split) ── */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1px_2fr] gap-8 lg:gap-12 items-stretch pb-0 relative">
            
            {/* Left Column: Heading */}
            <div className="flex flex-col justify-between">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-slate-900 max-w-xl font-sans">
                Technologies & Platforms<br className="hidden sm:inline" /> We Work With
              </h2>
            </div>

            {/* Vertical Separator Line - Connected to horizontal line below */}
            <div className="hidden lg:block relative w-[1px]">
              <div className="absolute top-0 bottom-[-24px] left-0 w-[1px] bg-slate-200" />
            </div>

            {/* Right Column: Description & CTA stacked (60/40 split) */}
            <div className="flex flex-col justify-between items-start gap-6">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                From regulated enterprises to breakout startups, Savo synchronizes automation, design, and engineering so every launch is pixel-perfect, compliant, and on pace with market demand.
              </p>
              
              {/* Our Services CTA Button */}
              <div className="flex-shrink-0">
                <CTAButton href="/services" label="Our services" />
              </div>
            </div>

          </div>

          {/* Horizontal line with nav arrows using SliderNav */}
          <SliderNav
            onPrev={() => slideTo('prev')}
            onNext={() => slideTo('next')}
            hasLine
            lineColor="bg-slate-200"
            btnBgColor="bg-white"
            className="mt-0"
          />
        </div>
      </Container>

      {/* ── Slider Track ── */}
      <div 
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full relative select-none cursor-grab active:cursor-grabbing overflow-hidden"
      >
        <div className="pl-6 xl:pl-8 2xl:pl-[calc((100vw-1440px)/2+2rem)] pr-0 w-full">
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -10000, right: 10000 }}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            className="flex gap-6 w-max"
          >
            {displayItems.map((test, idx) => (
              <div
                key={test.id + '-' + idx}
                className="testimonial-card bg-white border border-slate-100 text-slate-900 rounded-none shadow-lg p-8 sm:p-10 flex flex-col justify-between w-[280px] sm:w-[360px] md:w-[380px] flex-shrink-0"
                style={{ minHeight: 300 }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-8">
                    <div className="relative h-9 w-36">
                      <Image
                        src={test.logo}
                        alt={test.logoText}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                  </div>
                  <blockquote className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-8">
                    {test.content}
                  </blockquote>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-slate-50 border border-slate-200">
                    <Image
                      src={test.avatar}
                      alt={test.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-bold text-slate-950 block">
                      {test.name}
                    </cite>
                    <span className="text-xs text-slate-400 font-medium">
                      {test.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
