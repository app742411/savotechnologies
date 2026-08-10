'use client';

import React from 'react';
import CTAButton from '@/components/CTAButton';

export default function CompanyStory() {
  const stats = [
    {
      value: '240+',
      label: 'Projects Delivered',
      description: 'Across SaaS, fintech, health & e-commerce'
    },
    {
      value: '10+',
      label: 'Years in Practice',
      description: 'A decade perfecting design craft'
    },
    {
      value: '98%',
      label: 'Client Retention',
      description: "Clients don't leave — they grow with us"
    },
    {
      value: '35+',
      label: 'Global Awards',
      description: 'Recognized internationally for design'
    }
  ];

  return (
    <section className="relative z-10 w-full bg-white border-t border-slate-100 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">

          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-6 flex flex-col space-y-7">
            <span className="text-xs font-bold tracking-widest text-[#4A9EF8] uppercase">
              Who We Are
            </span>

            <h2 className="text-3xl md:text-[42px] font-bold text-slate-950 tracking-tight leading-[1.2]">
              Built on trust,<br className="hidden md:block" /> driven by innovation.
            </h2>

            <div className="w-10 h-[2px] bg-[#003bb3]" />

            <div className="space-y-6 text-slate-600 text-[15px] md:text-[16px] font-light leading-relaxed">
              <p>
                Savo Technologies is a global technology partner that bridges the gap between ambitious ideas and world-class execution. Since our founding, we've combined human ingenuity with cutting-edge automation to help companies of every scale move faster, smarter, and with greater confidence.
              </p>
              <p>
                From regulated Fortune 500 enterprises to breakout start-ups, our client-centric process ensures pixel-perfect, compliant, and on-schedule delivery every time.
              </p>
            </div>

            {/* Split Button CTA */}
            <div className="pt-4">
              <CTAButton href="/industries" label="Industries We Serve" />
            </div>
          </div>

          {/* Right Column: Overlapping Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[360px] sm:h-[460px] md:h-[500px] lg:h-[440px] xl:h-[500px]">

              {/* Top-Right Image (R&D Scientist) */}
              <div className="absolute top-0 right-0 w-[64%] h-[60%] rounded-3xl overflow-hidden shadow-xl border border-slate-100 z-10">
                <img
                  src="/images/education_technology.png"
                  alt="Research and development"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Bottom-Left Image (Healthcare patient) with blue ambient glow */}
              <div className="absolute bottom-0 left-0 w-[64%] h-[60%] z-21">
                {/* Glow layer */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/35 via-blue-500/10 to-transparent rounded-3xl blur-md -z-10 opacity-80" />
                {/* Image wrapper */}
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100/80 bg-white">
                  <img
                    src="/images/retail_ecommerce.png"
                    alt="Patient healthcare care"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Bottom-Right White Glassmorphic Card */}
              <div className="absolute bottom-8 right-8 w-[32%] h-[36%] bg-white rounded-3xl shadow-xl border border-slate-100/90 z-30 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shadow-sm">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#003bb3] animate-pulse" />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Statistics Grid */}
        <div className="border-t border-slate-100 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:px-8 lg:border-r border-slate-100 last:border-r-0 first:pl-0"
              >
                <span
                  className="text-5xl md:text-[54px] font-semibold text-transparent bg-clip-text tracking-tight leading-none"
                  style={{
                    backgroundImage: 'linear-gradient(114.998deg, #031067 1%, #0068C7 30%, #327DD1 51%, #0D49B7 59%, #0620CD 102%)'
                  }}
                >
                  {stat.value}
                </span>

                <div
                  className="w-8 h-[2px] my-4"
                  style={{
                    background: 'linear-gradient(114.998deg, #031067 1%, #0068C7 30%, #327DD1 51%, #0D49B7 59%, #0620CD 102%)'
                  }}
                />

                <h4 className="text-slate-950 font-bold text-sm tracking-wider uppercase mb-1">
                  {stat.label}
                </h4>

                <p className="text-slate-500 text-[13px] md:text-sm font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

