'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Instagram, Twitter, ChevronDown, Linkedin, Star, Printer, Facebook, Award, Menu, X, Mail } from 'lucide-react';
import CountUp from 'react-countup';
import Image from 'next/image';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const SimimiIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const PrinterIcon = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <polyline points="6 9 6 2 18 2 18 9"></polyline>
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
    <rect x="6" y="14" width="12" height="8"></rect>
  </svg>
);

const TikTokIcon = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const BehanceIcon = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M22 7h-7v2h7V7zm1.72 9.48c0-3.86-2.79-5.88-5.83-5.88-3.42 0-6.13 2.56-6.13 6.03 0 3.56 2.66 6.18 6.27 6.18 2.81 0 4.96-1.39 5.75-3.9h-2.92c-.38 1.1-1.42 1.68-2.75 1.68-1.72 0-3.04-1.12-3.18-2.98h8.77c.01-.27.02-.75.02-1.13zm-8.8-1.3c.18-1.57 1.4-2.67 2.92-2.67 1.5 0 2.65 1.05 2.76 2.67h-5.68zM2.61 10.62h2.98c2.25 0 3.32.9 3.32 2.51 0 1.25-.79 2.05-1.92 2.33 1.42.23 2.37 1.13 2.37 2.6 0 1.83-1.34 2.94-3.66 2.94H2.61v-10.38zm2.84 3.96c1.15 0 1.8-.46 1.8-1.38 0-1.02-.74-1.38-1.8-1.38H5.4v2.76h.05zm.18 4.29c1.3 0 2.06-.52 2.06-1.55 0-1.1-.8-1.58-2.06-1.58H5.4v3.13h.23z"/>
  </svg>
);

const CircularProgress = ({ percent, color, icon: Icon, name, subtitle }: { percent: number, color: string, icon: any, name: string, subtitle?: string }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -10 }}
      className="group flex flex-col items-center bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:-translate-y-1 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 h-full w-full"
    >
      <div className="text-[11px] text-gray-500 mb-4">{percent}%</div>
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mb-6">
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="#1a1a1a"
            strokeWidth="4"
          />
          <motion.circle
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 6px ${color}80)` }}
          />
        </svg>
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#020617] flex items-center justify-center z-10 shadow-lg">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color }} />
        </div>
      </div>
      <div className="text-center">
        <div className="text-[11px] uppercase text-white font-bold tracking-[0.2em] mb-2">{name}</div>
      </div>
    </motion.div>
  );
};

const SectionSeparator = () => (
  <div className="w-full py-3 flex justify-center items-center bg-transparent relative z-10">
    <motion.div
      animate={{ y: [0, 6, 0], opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      className="flex items-center justify-center"
    >
      <ChevronDown className="w-5 h-5 text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.6)]" strokeWidth={1.25} />
    </motion.div>
  </div>
);

const projectsData = [
  // 🔵 THUMBNAILS
  { id: 1, category: 'THUMBNAILS', image: '/thumbnails/thumb1.jpg' },
  { id: 2, category: 'THUMBNAILS', image: '/thumbnails/thumb2.jpg' },
  { id: 3, category: 'THUMBNAILS', image: '/thumbnails/thumb3.jpg' },
  { id: 4, category: 'THUMBNAILS', image: '/thumbnails/thumb4.jpg' },
  { id: 5, category: 'THUMBNAILS', image: '/thumbnails/thumb5.jpg' },
  { id: 6, category: 'THUMBNAILS', image: '/thumbnails/thumb6.jpg' },
  { id: 7, category: 'THUMBNAILS', image: '/thumbnails/thumb7.jpg' },
  { id: 8, category: 'THUMBNAILS', image: '/thumbnails/thumb8.jpg' },
  { id: 9, category: 'THUMBNAILS', image: '/thumbnails/thumb9.jpg' },

  // 🟣 INSTAGRAM
  { id: 10, category: 'INSTAGRAM BRAND IDENTITY & GRID STYLING', image: '/instagram/Thumb1.jpg' },
  { id: 11, category: 'INSTAGRAM BRAND IDENTITY & GRID STYLING', image: '/instagram/Thumb2.jpg' },
  { id: 12, category: 'INSTAGRAM BRAND IDENTITY & GRID STYLING', image: '/instagram/Thumb3.jpg' },
  { id: 13, category: 'INSTAGRAM BRAND IDENTITY & GRID STYLING', image: '/instagram/Thumb4.jpg' },
  { id: 14, category: 'INSTAGRAM BRAND IDENTITY & GRID STYLING', image: '/instagram/Thumb5.jpg' },
  { id: 15, category: 'INSTAGRAM BRAND IDENTITY & GRID STYLING', image: '/instagram/Thumb6.jpg' },

  // 🟣 LOGO
{ id: 16, category: 'LOGO', image: '/logos/logo1.jpg' },
{ id: 17, category: 'LOGO', image: '/logos/logo2.jpg' },
{ id: 18, category: 'LOGO', image: '/logos/logo3.jpg' },

  // 🟢 SOCIAL MEDIA
  { id: 19, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL1.jpg' },
  { id: 20, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL2.jpg' },
  { id: 21, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL3.jpg' },
  { id: 22, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL4.jpg' },
  { id: 23, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL5.jpg' },
  { id: 24, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL6.jpg' },
  { id: 25, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL7.jpg' },
  { id: 26, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL8.jpg' },
  { id: 27, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL9.jpg' },
  { id: 28, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL10.jpg' },
  { id: 29, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL11.jpg' },
  { id: 30, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL12.jpg' },
  { id: 31, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL13.jpg' },
  { id: 32, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL14.jpg' },
  { id: 33, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL15.jpg' },
  { id: 34, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL16.jpg' },
  { id: 35, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL17.jpg' },
  { id: 36, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL18.jpg' },
  { id: 37, category: 'DESIGN SOCIAL MEDIA', image: '/design-social/DESIGN SOCIAL19.jpg' },
];
export default function Portfolio() {
  const [activeSection, setActiveSection] = React.useState('home');
  const [activeCategory, setActiveCategory] = React.useState('ALL');
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Certificates' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
 
 <main className="relative min-h-screen bg-[#020617] overflow-hidden text-white font-poppins">
      {/* ✨ FLOATING LIGHT EFFECT */}
<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

  {/* PURPLE LIGHT */}
  <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full animate-float-slow" />

  {/* BLUE LIGHT */}
  <div className="absolute bottom-[10%] right-[15%] w-[250px] h-[250px] bg-blue-500/20 blur-[100px] rounded-full animate-float-slower" />

</div>
      {/* 1. THE AURA BACKGROUND (FIXED AT THE BACK, Z-[-1]) */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020617] pointer-events-none">
     {/* 🔥 NEW BACKGROUND */}
<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">

  {/* MAIN GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#6D28D9]/40 via-[#020617] to-[#020617]" />

  {/* TOP GLOW */}
  <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-purple-600/30 blur-[180px] rounded-full animate-float-1" />

  {/* RIGHT GLOW */}
  <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full animate-float-2" />

  {/* CENTER LIGHT */}
  <div className="absolute left-[30%] top-[40%] w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full animate-float-3" />

</div>
      </div>

      {/* 2. ALL CONTENT MUST BE WRAPPED IN Z-10 SO IT SITS ON TOP */}
      <div className="relative z-10">
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 w-full z-[101] pt-4 md:pt-6 px-4 md:px-12 pointer-events-none flex justify-center">
        <nav className="pointer-events-auto w-full md:max-w-5xl flex justify-between items-center px-6 md:px-8 py-3 md:py-4 bg-[#020617]/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
          <div className="font-poppins font-bold text-lg text-white tracking-tight">Mr Youssef Designer</div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className={`text-[13px] font-medium uppercase tracking-wider transition-colors ${activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden text-gray-300 hover:text-white transition-colors" 
            aria-label="Menu"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-7 h-7" strokeWidth={1.5} />
          </button>
        </nav>
      </div>

      {/* Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-[300px] bg-[#020617]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col"
            >
              <div className="flex justify-between items-center mb-4 px-2">
                <div className="font-poppins font-semibold text-xs text-gray-400 tracking-widest uppercase">Menu</div>
                <button 
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close Menu"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`w-full text-center py-3 rounded-xl font-poppins uppercase text-[13px] font-medium tracking-widest transition-all ${
                      activeSection === link.id 
                        ? 'bg-blue-500/10 text-blue-400 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.2)]' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-12 py-20 md:py-32">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[13px] uppercase text-[#60A5FA] tracking-[0.2em] mt-6 mb-4 font-medium"
        >
          HELLO THERE!
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-poppins font-black text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] tracking-tighter leading-[1] mb-6 text-white"
        >
          I&apos;m Youssef <br />
          Zaim
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-2xl mx-auto mt-2 px-4"
        >
          <p className="text-gray-300 text-lg sm:text-xl font-light tracking-wide text-center">
            Welcome to my portfolio.<br/>
            I am a Graphic Designer and Digital Marketer.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 w-full px-4 sm:w-auto sm:px-0 justify-center"
        >
          <a href="#projects" className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all text-[14px] font-semibold">
            View My Work <ArrowUpRight className="w-5 h-5" />
          </a>
          <a href="#contact" className="w-full sm:w-auto bg-transparent border border-white text-white hover:bg-white/10 px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all text-[14px] font-semibold">
            Contact Me
          </a>
        </motion.div>
      </section>

      <SectionSeparator />

      {/* About Section */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-20 md:py-32">
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins font-black text-5xl md:text-7xl tracking-tighter leading-[0.9] mb-8 text-white text-center md:text-left">
              WHO <span className="text-[#3B82F6]">AM I?</span>
            </h2>
            <div className="text-[13px] text-gray-400 mb-12 leading-relaxed max-w-lg mx-auto md:mx-0 text-center md:text-left space-y-4">
              <p>
                I am a Graphic Designer and Digital Marketing focused on creating work that delivers real results.
              </p>
              <p>
                I help businesses grow through clean design, high-converting visuals, and smart digital strategies. From building online stores to launching ads, I focus on solutions that actually work.
              </p>
              <p>
                Always learning, always improving, and always aiming to turn ideas into impactful digital experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 md:flex md:flex-wrap md:gap-16 mt-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="font-poppins font-black text-4xl sm:text-5xl text-[#3B82F6] mb-2">
                  <CountUp end={5} suffix="+" enableScrollSpy scrollSpyOnce />
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase text-gray-500 tracking-[0.2em] sm:tracking-[0.3em] text-center md:text-left">YEARS EXP.</div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="font-poppins font-black text-4xl sm:text-5xl text-[#3B82F6] mb-2">
                  <CountUp end={50} suffix="+" enableScrollSpy scrollSpyOnce />
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase text-gray-500 tracking-[0.2em] sm:tracking-[0.3em] text-center md:text-left">CLIENTS</div>
              </div>
              <div className="flex flex-col items-center md:items-start col-span-2 md:col-span-1">
                <div className="font-poppins font-black text-4xl sm:text-5xl text-[#3B82F6] mb-2">
                  ∞
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase text-gray-500 tracking-[0.2em] sm:tracking-[0.3em] text-center md:text-left">CREATIVITY</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative flex justify-end items-end h-[420px] md:h-[500px]"

>

  {/* 👤 الصورة */}
  <img
    src="/profile.png"
    alt="Youssef"
    className="
  h-[100%]
  object-contain
  relative z-10
  drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]
  -ml-6 md:-ml-12
"
  />

  {/* 🌫️ fade من الأسفل */}
  <div className="absolute bottom-0 left-0 w-full h-[160px] z-20
    bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent">
  </div>

</motion.div>
        </div>
      </section>

      <SectionSeparator />

      {/* Why I Studied Section */}
      <section id="education" className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins font-black text-5xl md:text-7xl tracking-tighter leading-[0.9] text-white uppercase"
          >
            WHY <span className="text-[#3B82F6]">I STUDIED</span>
          </motion.h2>
        </div>

        <div className="w-full">
          {/* Certificates */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-poppins font-bold text-xl text-[#3B82F6] uppercase text-center mb-12 tracking-widest">
              CERTIFICATES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
              {[
                "ALX Graphic Design",
                "ALX Data Analytics",
                "AI Career Essentials",
                "Virtual Assistant",
                "1 Million Prompters",
                "AI for L&D (360Learning)",
                "AI Starter Kit (ALX)",
                "Professional Foundations (ALX)"
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  {/* Panel */}
                  <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] h-full min-h-[200px]">
                    {/* Gradient Edges */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
                    
                    <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-500/5 flex items-center justify-center border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-shadow duration-500">
                      <Award className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="relative z-10 text-white font-poppins font-extrabold text-[11px] sm:text-[12px] tracking-widest uppercase text-center leading-snug px-2">
                      {cert}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SectionSeparator />

      {/* Experience Section */}
      <section id="experience" className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins font-black text-5xl md:text-7xl tracking-tighter leading-[0.9] text-white uppercase"
          >
            MY <span className="text-[#3B82F6]">EXPERIENCE</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Glowing blue line */}
          <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

          <div className="space-y-12">
            {[
              {
                title: "E-commerce & Dropshipping",
                date: "2020 – 2022",
                points: [
                  "Started my journey in e-commerce through dropshipping.",
                  "Created WordPress stores, sourced products from AliExpress, and launched advertising campaigns.",
                  "Managed product selection, store setup, and customer acquisition."
                ]
              },
              {
                title: "Print & Graphic Design Specialist",
                date: "2022 – 2023",
                points: [
                  "Worked in a professional printing company.",
                  "Learned graphic design, t-shirt printing, and large-scale printing machines.",
                  "Handled real client orders including business cards, ID cards, and branding materials.",
                  "Developed strong communication and customer handling skills."
                ]
              },
              {
                title: "Advanced E-commerce & Full Operations",
                date: "2024 – 2025",
                points: [
                  "Returned to e-commerce with a more advanced level.",
                  "Managed full business operations: product sourcing, packaging, shipping, and customer service.",
                  "Created designs, built stores, and ran paid advertising campaigns."
                ]
              },
              {
                title: "AI, Data & Web Development",
                date: "2025 – Present",
                points: [
                  "Currently improving skills in AI, Data Analytics, and Web Development (Front-end & Back-end).",
                  "Also developing advanced design skills and working on building digital solutions."
                ]
              },
              {
                title: "SMM Team & Digital Growth",
                date: "Present",
                points: [
                  "Co-founded a small team focused on Social Media Marketing.",
                  "Applying real-world experience in content, branding, and audience growth."
                ]
              }
            ].map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[11px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.8)] border-2 border-[#020617] z-10 mt-6 md:mt-0"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="font-poppins font-bold text-lg text-white group-hover:text-[#3B82F6] transition-colors">{exp.title}</h3>
                      <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full whitespace-nowrap w-fit">{exp.date}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((point, j) => (
                        <li key={j} className="text-[13px] text-gray-400 leading-relaxed flex items-start gap-2">
                          <span className="text-blue-500 mt-1.5 text-[10px]">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Skills Section */}
      <section id="skills" className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-20 md:py-32 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins font-black text-5xl md:text-7xl tracking-tighter leading-[0.9] mb-20 text-white uppercase"
        >
          MY <span className="text-[#3B82F6]">SKILLS</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-5 max-w-5xl mx-auto">
          {[
            { name: 'PHOTOSHOP', subtitle: '', icon: ({className, style}: any) => <div className={`${className} flex items-center justify-center`} style={style}><span className="font-bold text-2xl font-poppins">Ps</span></div>, color: '#31a8ff', percent: 70 },
            { name: 'ILLUSTRATOR', subtitle: '', icon: ({className, style}: any) => <div className={`${className} flex items-center justify-center`} style={style}><span className="font-bold text-2xl font-poppins">Ai</span></div>, color: '#ff9a00', percent: 90 },
            { name: 'BRAND IDENTITY', subtitle: '', icon: ({className, style}: any) => <div className={`${className} flex items-center justify-center`} style={style}><span className="font-bold text-2xl font-poppins">Id</span></div>, color: '#ea77ff', percent: 80 },
            { name: 'AI TOOLS', subtitle: '', icon: ({className, style}: any) => <div className={`${className} flex items-center justify-center`} style={style}><span className="font-bold text-2xl font-poppins">AI</span></div>, color: '#9999ff', percent: 60 },
          ].map((skill, i) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full w-full max-w-[280px] mx-auto sm:max-w-none"
            >
              <CircularProgress percent={skill.percent} color={skill.color} icon={skill.icon} name={skill.name} subtitle={skill.subtitle} />
            </motion.div>
          ))}
        </div>
      </section>

      <SectionSeparator />

      {/* Projects Section */}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-20 md:py-32 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins font-black text-5xl md:text-7xl tracking-tighter leading-[0.9] mb-12 text-white uppercase"
        >
          MY <span className="text-[#3B82F6]">PROJECTS</span>
        </motion.h2>
<div className="max-w-4xl mx-auto mb-10">
  <div className="rounded-xl px-6 py-4 border border-yellow-500/20 bg-gradient-to-r from-purple-900/10 via-black/20 to-yellow-900/10 backdrop-blur-sm">

    <p className="text-sm md:text-base text-yellow-400 leading-relaxed text-center">
      ⚠️ هذه الأعمال تمثل جزءاً بسيطاً من خبرتي، العديد من المشاريع الحقيقية لم يتم عرضها التزاماً بخصوصية العملاء وثقتهم.
    </p>

  </div>
</div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-16 w-full justify-center"
        >
          {['ALL', 'THUMBNAILS', 'INSTAGRAM BRAND IDENTITY & GRID STYLING', 'DESIGN SOCIAL MEDIA', 'LOGO'].map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveCategory(filter)}
              className={`px-6 py-2.5 rounded-full text-[12px] font-semibold uppercase tracking-wider transition-all ${
                activeCategory === filter 
                  ? 'bg-white text-black' 
                  : 'border border-white/20 text-white hover:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projectsData
            .filter((item) => activeCategory === 'ALL' || item.category === activeCategory)
            .map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative break-inside-avoid rounded-3xl overflow-hidden group cursor-pointer"
            >
              <Image 
                src={item.image}
                alt={`Project ${item.id}`} 
                width={800}
                height={600 + (i % 3) * 200}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <SectionSeparator />



      {/* Contact & Footer */}
      <section id="contact" className="relative z-10 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-12 mb-24">
          <div className="text-center relative">
            <div className="relative z-10">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[13px] uppercase text-gray-400 tracking-[0.2em] mb-4 block font-medium"
              >
                LET&apos;S CONNECT
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-poppins font-black text-5xl md:text-7xl tracking-tighter leading-[1] mb-12 text-white uppercase"
              >
                WANT TO <br />
                <span className="text-[#3B82F6]">WORK TOGETHER?</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[15px] text-gray-300 max-w-lg mx-auto mb-12 leading-relaxed hidden"
              >
                I&apos;m always open to new projects, creative ideas, or opportunities to be part of something great. Let&apos;s build something amazing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative inline-block"
              >
                <a 
                  href="https://wa.me/212639967048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-10 py-4 rounded-full font-semibold text-[14px] uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                >
                  <WhatsAppIcon className="w-5 h-5" /> SEND A MESSAGE
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full bg-transparent flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 md:py-6 gap-6 md:gap-0 relative z-20"
      >
        {/* Left Column */}
        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 font-poppins text-[12px] order-3 md:order-1 w-full md:w-1/3 mt-2 md:mt-0">
          <a href="mailto:business.zaiim@gmail.com" className="hover:scale-110 transition-transform">
            <Mail className="w-4 h-4 text-[#3B82F6] hover:text-blue-400 transition-colors drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          </a>
          <span>© 2026 GRAPHIC DESIGNER & CONTENT CREATOR</span>
        </div>
        
        {/* Center Column: Icons */}
        <div className="flex items-center justify-center gap-4 order-2 w-full md:w-1/3 my-2 md:my-0">
          {[
            { icon: Facebook, href: 'https://www.facebook.com/joussef.za.01/', external: true },
            { icon: Instagram, href: 'https://www.instagram.com/joussef_zaim/', external: true },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/youssef-zaim', external: true },
            { icon: Mail, href: 'mailto:business.zaiim@gmail.com', external: false }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.15 }}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all"
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>

        {/* Right Column */}
        <div className="text-gray-400 font-poppins text-[12px] text-center md:text-right flex items-center justify-center md:justify-end order-4 md:order-3 w-full md:w-1/3 pt-2 md:pt-0">
          <span>Designed & Built by <span className="text-white">@joussef_zaim</span></span>
        </div>
      </motion.footer>
      </div>
    </main>
  );
}

