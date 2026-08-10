'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

const offices = [
  {
    country: 'INDIA',
    email: 'info@savotech.in',
    phone: '+91 75029 01234',
    address: ['139, PU4, Behind C21 Mall,', 'Vijay Nagar, Scheme 54,', 'Indore, MP, India 452010'],
  },
  {
    country: 'AUSTRALIA',
    email: 'info@savotech.in',
    phone: '+91 75029 01234',
    address: ['139, PU4, Behind C21 Mall,', 'Vijay Nagar, Scheme 54,', 'Indore, MP, India 452010'],
  },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Study', href: '/case-studies' },
  { label: 'Who We Are', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blogs' },
];

const industries = [
  { label: 'Fitness', href: '/industries/fitness' },
  { label: 'Accounting', href: '/industries/accounting' },
  { label: 'Travel', href: '/industries/travel' },
  { label: 'Ecommerce', href: '/industries/ecommerce' },
  { label: 'Blockchain', href: '/industries/blockchain' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Marketplace', href: '/industries/marketplace' },
  { label: 'CRM', href: '/industries/crm' },
  { label: 'Energy & Utility', href: '/industries/energy' },
  { label: 'Ed Tech App', href: '/industries/edtech' },
];

const serviceCategories = [
  {
    title: 'Ecommerce',
    links: ['Magento', 'Ubercart', 'CS Cart', 'BigCommerce', 'Shopify', 'Prestashop', 'VirtueMart', 'WooCommerce'],
  },
  {
    title: 'Web App Development',
    links: [
      'Vue JS Development', 'MERN Development', 'Custom Web Development', 'React JS Development',
      'MEAN Development', 'LAMP Development', 'Angular JS Development', 'Node JS Development',
      'PHP Development', 'Python Development',
    ],
  },
  {
    title: 'Mobile App Development',
    links: [
      'Custom App Development', 'React Native App Development', 'Hybrid App Development',
      'iOS App Development', 'Flutter App Development', 'Mobile App Integration',
      'Android App Development', 'Swift App Development', 'Ionic App Development',
    ],
  },
  {
    title: 'Hire Dedicated Remote Developers',
    links: [
      'Hire Angular Js Developers', 'Hire Next Js Developers', 'Hire Android Developers', 'Hire Vue Js Developers',
      'Hire React JS Developers', 'Hire MEAN Developers', 'Hire iOS Developers', 'Hire UI/UX Designers',
      'Hire Node Js Developers', 'Hire MERN Developers',
    ],
  },
];



const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Medium', href: 'https://medium.com' },
];

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Video reference for smooth playback speed
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down the video for a smoother effect
    }
  }, []);

  return (
    <footer
      className="relative text-slate-300"
      style={{
        backgroundColor: '#0B1025',
        // paddingTop: '20%'
      }}
    >
      {/* Background Overlay layer with Next.js optimized Image component */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/herobanner.png"
          alt="Footer Background"
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

      {/* Non-seaming ambient glows */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      {/* CTA Card Section */}
      <div
        className="relative z-20 w-full max-w-none px-8 md:px-16 lg:px-24 xl:px-32 mx-auto"
        style={{
          transform: 'translateY(-50%)',
          marginBottom: '-100px'
        }}
      >
        <div
          className="relative overflow-hidden rounded-none px-8 py-16 md:py-20 text-center flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-blue-500/20 w-full"
          style={{
            background: 'linear-gradient(106.934deg, #031067 0%, #0068C7 28%, #327DD1 50%, #0D49B7 57%, #0620CD 100%)'
          }}
        >
          {/* Gloss reflection inside the card */}
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_60%)] pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-semibold text-white tracking-tight leading-tight max-w-4xl mb-8 relative z-10 font-sans">
            Want to turn your website into<br className="hidden sm:inline" /> your most valuable asset?
          </h2>

          {/* CTAButton Container */}
          <div className="relative z-10">
            <CTAButton href="/contact" label="Hire Developer" />
          </div>
        </div>
      </div>

      {/* Main split grid for left & right sides with a single center vertical separator line */}
      <div className="relative z-10 w-full max-w-none px-8 md:px-16 lg:px-24 xl:px-32 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* ================= LEFT SIDE (50% width) ================= */}
          <div className="lg:border-r pr-0 lg:pr-10" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>

            {/* INDIA Office Contact */}
            <div className="py-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-extrabold text-[30px] tracking-widest mb-5">INDIA</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="text-sm text-slate-300">{offices[0].email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span className="text-sm text-slate-300">{offices[0].phone}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm leading-relaxed text-slate-300">
                    {offices[0].address.map((line, j) => <span key={j}>{line}<br /></span>)}
                  </span>
                </div>
              </div>
            </div>

            {/* Left Content Column (Logo, Quick Links, Industries, Socials) */}
            <div className="py-14 space-y-10">
              {/* Logo */}
              <div className="space-y-1">
                <Image
                  src="/logos/savologo.png"
                  alt="SAVO Technologies"
                  width={200}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
                <div className="text-slate-400 text-[20px] tracking-[0.25em] uppercase font-bold pl-1">
                  Technologies
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-bold text-lg tracking-wide mb-4">Quick links</h4>
                <div className="grid grid-cols-3 gap-x-4 gap-y-2.5">
                  {quickLinks.map((link) => (
                    <Link key={link.label} href={link.href}
                      className="text-[13px] text-slate-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <h4 className="text-white font-bold text-lg tracking-wide mb-4">Industries</h4>
                <div className="grid grid-cols-5 gap-x-2 gap-y-2.5">
                  {industries.map((item) => (
                    <Link key={item.label} href={item.href}
                      className="text-[13px] text-slate-300 hover:text-white transition-colors leading-snug">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                {socialLinks.map((s, i) => (
                  <React.Fragment key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer"
                      className="text-[13px] font-medium text-slate-300 hover:text-white transition-colors">
                      {s.label}
                    </a>
                    {i < socialLinks.length - 1 && <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE (50% width) ================= */}
          <div className="pl-0 lg:pl-10">

            {/* AUSTRALIA Office Contact */}
            <div className="py-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-extrabold text-[30px] tracking-widest mb-5">AUSTRALIA</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="text-sm text-slate-300">{offices[1].email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span className="text-sm text-slate-300">{offices[1].phone}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm leading-relaxed text-slate-300">
                    {offices[1].address.map((line, j) => <span key={j}>{line}<br /></span>)}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content Column (Service Categories aligned in 4 proper columns) */}
            <div className="py-14 space-y-10">
              {serviceCategories.map((cat) => (
                <div key={cat.title}>
                  <h4 className="text-white font-bold text-lg tracking-wide mb-4">{cat.title}</h4>
                  <div className="grid grid-cols-4 gap-x-6 gap-y-3">
                    {cat.links.map((link) => (
                      <Link key={link} href="#"
                        className="text-[13px] text-slate-300 hover:text-white transition-colors leading-relaxed">
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* AWARDS ROW */}
      <div className="relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="w-full max-w-none px-8 md:px-16 lg:px-24 xl:px-32 mx-auto py-10">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-7xl h-20 md:h-28">
              <Image
                src="/images/image 266.png"
                alt="Partner Brands"
                fill
                className="object-contain animate-fade-in"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full max-w-none px-8 md:px-16 lg:px-24 xl:px-32 mx-auto relative z-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/90">
        <p className="text-sm font-light">
          &copy;2025 Savo technologies. All Rights Reserved
        </p>
        <div className="flex items-center gap-6 text-sm font-light">
          <Link href="/privacy-policy" className="hover:opacity-85 transition-opacity">/ Privacy policy /</Link>
          <Link href="/terms" className="hover:opacity-85 transition-opacity">Terms of Use</Link>
        </div>
        <button onClick={scrollToTop}
          className="text-sm font-medium tracking-wider text-white hover:opacity-85 transition-opacity">
          Back To TOP
        </button>
      </div>

      {/* LARGE SAVO WATERMARK */}
      <div className="relative overflow-hidden" style={{ height: '350px' }}>
        <div
          className="absolute left-0 w-full text-center select-none pointer-events-none"
          style={{
            bottom: '-25%',
            fontSize: 'clamp(220px, 36vw, 480px)',
            fontWeight: 850,
            letterSpacing: '-0.01em',
            color: 'rgba(255,255,255,0.055)',
            lineHeight: 1,

          }}>
          𝙎Λ𝙑𝙊°
        </div>
      </div>
    </footer>
  );
}

export default Footer;
