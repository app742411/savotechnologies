'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, ChevronDown, ChevronRight, 
  Users, Target, Award, Briefcase, Zap, 
  Monitor, Smartphone, Code, PenTool, Bot, 
  Rocket, BarChart, Shuffle, Globe, ShoppingBag, 
  Building, Coffee, Plane, Truck, Stethoscope, 
  BookOpen, FileText, CheckCircle
} from 'lucide-react';
import { Container } from '@/components/Container';
import CTAButton from '@/components/CTAButton';
import { cn } from '@/lib/utils';

interface MenuItem {
  label: string;
  href?: string;
  children?: {
    title: string;
    description: string;
    href: string;
  }[];
}

const navigationMenu: MenuItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    children: [
      { title: 'Who We Are', description: 'Empowering businesses with smart, scalable, and future-ready digital solutions.', href: '/about#who-we-are' },
      { title: 'Mission & Vision', description: 'Driven by innovation and focused on building technology that creates real impact.', href: '/about#mission' },
      { title: 'Our Values', description: 'Built on trust, quality, teamwork, and a passion for meaningful digital products.', href: '/about#values' },
      { title: 'Our Process', description: 'A clear and collaborative workflow designed to deliver results efficiently.', href: '/about#process' },
      { title: 'Leadership / Team', description: 'A dedicated team of innovators, strategists, and engineers shaping digital success.', href: '/about#team' },
      { title: 'Life @ Savo', description: 'A culture built on creativity, learning, teamwork, and continuous growth.', href: '/about#life' },
      { title: 'Why Choose Us', description: 'Your trusted technology partner for reliable development and long-term support.', href: '/about#why-us' },
    ]
  },
  {
    label: 'Services',
    children: [
      { title: 'Website Development', description: 'High-Performance Website Development for Modern Businesses.', href: '/services/website' },
      { title: 'Mobile App Development', description: 'Powerful Mobile App Development for Android, iOS & Cross-Platform.', href: '/services/mobile' },
      { title: 'Software Development', description: 'Custom Software Solutions Built for Business Growth.', href: '/services/software' },
      { title: 'UI/UX & Branding', description: 'Creative UI/UX & Branding That Connects with Your Users.', href: '/services/design' },
      { title: 'AI & Automation', description: 'AI-Driven Solutions to Automate, Predict & Improve Performance.', href: '/services/ai' },
      { title: 'Digital Transformation', description: 'Strategic Digital Transformation for Future-Ready Businesses.', href: '/services/transformation' },
    ]
  },
  {
    label: 'Solutions',
    children: [
      { title: 'On-Demand App Solutions', description: 'Smart and scalable apps for on-demand businesses.', href: '/solutions/on-demand' },
      { title: 'E-Commerce Solutions', description: 'Powerful digital storefronts and retail platforms.', href: '/solutions/ecommerce' },
      { title: 'Social Networking', description: 'Engaging platforms to connect communities.', href: '/solutions/social' },
      { title: 'Food & Restaurant', description: 'Streamlined delivery and management solutions.', href: '/solutions/food' },
      { title: 'Logistics & Delivery', description: 'Efficient tracking and fleet management systems.', href: '/solutions/logistics' },
      { title: 'Real Estate Solutions', description: 'Property platforms and management portals.', href: '/solutions/real-estate' },
      { title: 'LMS Solutions', description: 'Interactive learning management systems.', href: '/solutions/lms' },
      { title: 'Healthcare Solutions', description: 'Secure and reliable digital health platforms.', href: '/solutions/healthcare' },
    ]
  },
  {
    label: 'Industries',
    children: [
      { title: 'Education', description: 'Digital solutions for modern learning.', href: '/industries/education' },
      { title: 'Healthcare', description: 'Transforming patient care with technology.', href: '/industries/healthcare' },
      { title: 'E-commerce', description: 'Driving sales through digital platforms.', href: '/industries/ecommerce' },
      { title: 'Real Estate', description: 'Smart solutions for property management.', href: '/industries/real-estate' },
      { title: 'Food & Hospitality', description: 'Enhancing guest and diner experiences.', href: '/industries/hospitality' },
      { title: 'Travel & Tourism', description: 'Connecting travelers with seamless systems.', href: '/industries/travel' },
      { title: 'Logistics', description: 'Optimizing supply chains and delivery.', href: '/industries/logistics' },
      { title: 'Retail', description: 'Bridging physical and digital storefronts.', href: '/industries/retail' },
      { title: 'Startup & SMEs', description: 'Scalable tech for growing businesses.', href: '/industries/startups' },
    ]
  },
  {
    label: 'Portfolio',
    children: [
      { title: 'Mobile Apps', description: 'Explore our mobile applications.', href: '/portfolio/apps' },
      { title: 'Websites', description: 'See our high-performance websites.', href: '/portfolio/websites' },
      { title: 'Software Solutions', description: 'Custom software we have built.', href: '/portfolio/software' },
      { title: 'Case Studies', description: 'In-depth looks at our success stories.', href: '/portfolio/case-studies' },
    ]
  },
  {
    label: 'Hire Developers',
    children: [
      { title: 'Hire Android Developer', description: 'High-performance Android apps built by skilled Kotlin and Java developers.', href: '/hire/android' },
      { title: 'Hire iOS Developer', description: 'Secure and smooth apps for iPhone and iPad using Swift.', href: '/hire/ios' },
      { title: 'Hire Flutter Developer', description: 'Cross-platform apps with beautiful UI and native-like performance.', href: '/hire/flutter' },
      { title: 'Hire Web Developer', description: 'Frontend, backend, and full-stack developers for flexible web projects.', href: '/hire/web' },
      { title: 'Hire UI/UX Designer', description: 'Designers who craft clean, simple, and user-friendly digital experiences.', href: '/hire/designer' },
      { title: 'Hire Full-Stack Developer', description: 'Developers who manage frontend, backend, APIs, and databases end-to-end.', href: '/hire/fullstack' },
    ]
  },
  {
    label: 'Company',
    children: [
      { title: 'Careers', description: 'Explore opportunities and grow with our talented team.', href: '/company/careers' },
      { title: 'Our Culture', description: 'A positive, creative, and learning-focused workplace.', href: '/company/culture' },
      { title: 'Testimonials', description: 'Real feedback from clients who trust our work.', href: '/company/testimonials' },
      { title: 'Blog', description: 'Latest insights, updates, and stories from our team.', href: '/company/blog' },
      { title: 'Privacy Policy', description: 'How we protect and manage user data.', href: '/privacy' },
      { title: 'Terms & Conditions', description: 'Guidelines for using our services and website.', href: '/terms' },
    ]
  }
];

const getIconForTitle = (title: string, className = "w-5 h-5") => {
  const t = title.toLowerCase();
  // Company / About
  if (t.includes('who') || t.includes('team') || t.includes('leader')) return <Users className={className} />;
  if (t.includes('mission') || t.includes('vision')) return <Target className={className} />;
  if (t.includes('value') || t.includes('award') || t.includes('choose')) return <Award className={className} />;
  if (t.includes('process')) return <Shuffle className={className} />;
  if (t.includes('life')) return <Zap className={className} />;
  if (t.includes('career') || t.includes('hire')) return <Briefcase className={className} />;
  // Services
  if (t.includes('web')) return <Monitor className={className} />;
  if (t.includes('mobile') || t.includes('app')) return <Smartphone className={className} />;
  if (t.includes('software')) return <Code className={className} />;
  if (t.includes('ui/ux') || t.includes('design')) return <PenTool className={className} />;
  if (t.includes('ai') || t.includes('autom')) return <Bot className={className} />;
  if (t.includes('transform')) return <Rocket className={className} />;
  if (t.includes('data') || t.includes('analytic')) return <BarChart className={className} />;
  // Industries / Solutions
  if (t.includes('commerce') || t.includes('retail')) return <ShoppingBag className={className} />;
  if (t.includes('real estate')) return <Building className={className} />;
  if (t.includes('food') || t.includes('restaurant') || t.includes('hospitality')) return <Coffee className={className} />;
  if (t.includes('travel')) return <Plane className={className} />;
  if (t.includes('logistic')) return <Truck className={className} />;
  if (t.includes('health')) return <Stethoscope className={className} />;
  if (t.includes('educat') || t.includes('lms')) return <BookOpen className={className} />;
  if (t.includes('social')) return <Globe className={className} />;
  // Others
  if (t.includes('blog') || t.includes('case') || t.includes('policy') || t.includes('terms')) return <FileText className={className} />;
  if (t.includes('testimoni')) return <CheckCircle className={className} />;
  
  return <ChevronRight className={className} />;
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mouseAtTop, setMouseAtTop] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Scroll listener to update scrolled state and visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY <= 100) {
        setVisible(true);
      } else if (!mouseAtTop) {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mouseAtTop]);

  // Global mousemove listener to detect hover at the top of the viewport
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 70) {
        setMouseAtTop(true);
        setVisible(true);
      } else if (window.scrollY > 100) {
        setMouseAtTop(false);
        setVisible(false);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        visible ? 'translate-y-0' : '-translate-y-full',
        scrolled
          ? 'backdrop-blur-2xl py-4 shadow-[0_15px_40px_-10px_rgba(50,125,209,0.3)] border-b border-[#327DD1]/50'
          : 'bg-transparent py-6 border-b border-[#327DD1]/20'
      )}
      style={scrolled ? { backgroundImage: 'linear-gradient(#020626, #020626), linear-gradient(180deg, #010518 0%, #17407B 25%, #4C8AC9 50%, #9CCAF0 75%, rgba(160, 204, 241, 0.51) 83%, rgba(255, 255, 255, 0) 96%, rgba(255, 255, 255, 0) 100%)', backgroundClip: 'padding-box, border-box', backgroundOrigin: 'border-box' } : undefined}
    >
      <Container className="flex items-center justify-between">
        {/* Brand logo image */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/savologo.png"
            alt="SAVO Logo"
            width={120}
            height={40}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {navigationMenu.map((item, idx) => {
            const hasChildren = !!item.children;
            const isMenuOpen = activeMenu === item.label;

            if (!hasChildren) {
              return (
                <Link
                  key={idx}
                  href={item.href || '#'}
                  className={cn(
                    'text-[15px] font-medium px-2 py-2 transition-colors duration-200',
                    pathname === item.href
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className={cn(
                    'text-[15px] font-medium px-2 py-2 flex items-center gap-1.5 transition-colors duration-200 focus:outline-none',
                    isMenuOpen ? 'text-white' : 'text-slate-300 hover:text-white'
                  )}
                  aria-expanded={isMenuOpen}
                >
                  <span>{item.label}</span>
                  <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', isMenuOpen ? 'transform rotate-180' : 'text-slate-500')} />
                </button>

                {/* Full-width Mega Menu Dropdown */}
                {isMenuOpen && item.children && (
                  <div 
                    className="absolute top-full left-0 w-full border-b border-[#327DD1]/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden"
                    style={{ backgroundImage: 'linear-gradient(#020626, #020626), linear-gradient(180deg, #010518 0%, #17407B 25%, #4C8AC9 50%, #9CCAF0 75%, rgba(160, 204, 241, 0.51) 83%, rgba(255, 255, 255, 0) 96%, rgba(255, 255, 255, 0) 100%)', backgroundClip: 'padding-box, border-box', backgroundOrigin: 'border-box' }}
                  >
                    {/* Mega Menu Background Graphics */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-end pr-[10%] mix-blend-lighten">
                      <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                        <Image src="/images/herobg1.png" alt="bg circle" fill className="object-contain animate-[spin_20s_linear_infinite] opacity-60" />
                        <Image src="/images/herobanner.png" alt="banner bg" width={350} height={350} className="relative z-10 object-contain drop-shadow-2xl scale-110" />
                      </div>
                    </div>
                    
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent z-10" />
                    
                    <Container>
                      {item.label === 'About Us' || item.label === 'Company' ? (
                        <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                           {/* Featured Left */}
                           <div className="col-span-12 lg:col-span-4 relative overflow-hidden group min-h-[250px] flex flex-col justify-end">
                             {/* Background Glow Circle */}
                             <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 mix-blend-lighten">
                               <Image 
                                 src="/images/herobg1.png" 
                                 alt="Circle Glow" 
                                 width={350} 
                                 height={350} 
                                 className="w-[140%] h-[140%] object-contain opacity-40 group-hover:opacity-80 group-hover:rotate-45 transition-all duration-700 blur-[2px]" 
                               />
                             </div>
                             
                             {/* Foreground Image */}
                             <div className="absolute inset-0 flex items-center justify-center z-10 p-6 pb-20">
                               <Image 
                                 src="/images/discover_savo.png" 
                                 alt="Company Banner" 
                                 width={400} 
                                 height={400} 
                                 className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-500" 
                               />
                             </div>
                             
                             <div className="absolute inset-0 bg-gradient-to-t from-[#020626] via-[#020626]/40 to-transparent pointer-events-none z-20" />
                             
                             <div className="relative z-30 px-6 pb-6">
                               <h3 className="text-xl font-bold text-white mb-2">Discover Savo</h3>
                               <p className="text-sm text-slate-300">Empowering businesses with smart, scalable, and future-ready digital solutions.</p>
                             </div>
                           </div>
                           {/* Links Right */}
                           <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                             {item.children.map((sub, sidx: number) => (
                                <Link key={sidx} href={sub.href} className="group p-4 border border-transparent hover:border-[#327DD1]/40 bg-white/5 hover:bg-[#327DD1]/10 transition-all flex items-start gap-4">
                                   <div className="w-10 h-10 shrink-0 bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                      {getIconForTitle(sub.title, "w-5 h-5")}
                                   </div>
                                   <div>
                                      <div className="font-bold text-slate-200 group-hover:text-blue-400 mb-1">{sub.title}</div>
                                      <div className="text-[13px] text-slate-400 leading-relaxed pr-4">{sub.description}</div>
                                   </div>
                                </Link>
                             ))}
                           </div>
                        </div>
                      ) : item.label === 'Services' || item.label === 'Portfolio' ? (
                        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {item.children.map((sub, sidx) => {
                             const imageSrc = sidx % 4 === 0 ? '/images/website_mockup.png' : sidx % 4 === 1 ? '/images/software_mockup.png' : sidx % 4 === 2 ? '/images/ai_mockup.png' : '/images/design_mockup.png';
                             return (
                            <Link key={sidx} href={sub.href} className="group block relative overflow-hidden border border-slate-800 hover:border-[#327DD1]/50 transition-all bg-[#0A1024]/50">
                               <div className="w-full h-40 relative overflow-hidden bg-[#030712] border-b border-slate-800">
                                 <Image src={imageSrc} alt={sub.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A1024] via-[#0A1024]/40 to-transparent opacity-90" />
                                 <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                                    <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Featured</span>
                                 </div>
                               </div>
                               <div className="p-5">
                                 <div className="font-bold text-slate-200 text-base mb-2 group-hover:text-blue-400 transition-colors flex justify-between items-center">
                                    {sub.title}
                                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-400" />
                                 </div>
                                 <p className="text-[13px] text-slate-400 leading-relaxed">{sub.description}</p>
                               </div>
                            </Link>
                          )})}
                        </div>
                      ) : item.label === 'Industries' || item.label === 'Solutions' ? (
                        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-t border-slate-800/50 mt-6 mb-6">
                          {item.children.map((sub, sidx) => (
                             <Link key={sidx} href={sub.href} className="group relative p-6 border-r border-b border-slate-800/50 hover:bg-[#327DD1]/10 transition-colors overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#327DD1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500" />
                                <div className="relative z-10 font-bold text-slate-200 group-hover:text-blue-400 text-[15px] mb-2 flex items-center gap-2">
                                  <div className="text-blue-500/70 group-hover:text-blue-400 transition-colors">{getIconForTitle(sub.title, "w-4 h-4")}</div>
                                  {sub.title}
                                </div>
                                <div className="relative z-10 text-[13px] text-slate-500 group-hover:text-slate-300 leading-relaxed pr-2">{sub.description}</div>
                             </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {item.children.map((sub, sidx) => (
                            <Link key={sidx} href={sub.href} className="block p-5 bg-white/5 border border-white/5 hover:border-[#327DD1]/40 hover:bg-[#327DD1]/10 transition-all duration-300 group relative overflow-hidden flex items-start gap-4">
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                              <div className="w-10 h-10 shrink-0 bg-[#0A1024] border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-[#327DD1]/50 transition-colors">
                                {getIconForTitle(sub.title, "w-5 h-5")}
                              </div>
                              <div>
                                <div className="relative z-10 text-[15px] font-bold text-slate-200 group-hover:text-blue-400 transition-colors flex items-center justify-between mb-1">
                                  {sub.title}
                                </div>
                                <p className="relative z-10 text-[13px] text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors pr-2">
                                  {sub.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </Container>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Contact us Button Split UI */}
        <div className="hidden lg:flex items-center gap-2">
          <CTAButton href="/contact" label="Contact us" variant="secondary" />
        </div>

        {/* Mobile Menu Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50 text-slate-400 hover:text-white transition-all focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] z-30 bg-[#030712]/95 backdrop-blur-md border-t border-slate-900 overflow-y-auto px-4 py-6 animate-in fade-in duration-200">
          <div className="space-y-4">
            {navigationMenu.map((item, idx) => {
              const hasChildren = !!item.children;
              const isMenuOpen = activeMenu === item.label;

              if (!hasChildren) {
                return (
                  <Link
                    key={idx}
                    href={item.href || '#'}
                    className="block text-base font-medium text-slate-200 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={idx} className="border-b border-slate-900 pb-2">
                  <button
                    onClick={() => setActiveMenu(isMenuOpen ? null : item.label)}
                    className="w-full flex items-center justify-between text-base font-medium text-slate-200 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-900 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', isMenuOpen ? 'transform rotate-180 text-blue-500' : 'text-slate-500')} />
                  </button>

                  {isMenuOpen && item.children && (
                    <div className="pl-6 mt-2 space-y-2">
                      {item.children.map((sub, sidx) => (
                        <Link
                          key={sidx}
                          href={sub.href}
                          className="block p-2 rounded-lg hover:bg-slate-900 text-sm text-slate-400 hover:text-white"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4 px-3">
              <CTAButton href="/contact" label="Contact us" variant="secondary" className="w-full flex" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
