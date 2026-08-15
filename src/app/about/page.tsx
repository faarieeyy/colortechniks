"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .reveal-up, .editorial-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(r => observer.observe(r));

    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.querySelectorAll('.parallax-bg').forEach((el) => {
        const speed = el.getAttribute('data-speed') || "0.5";
        (el as HTMLElement).style.setProperty('--parallax-y', `${scrolled * Number(speed)}px`);
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <div className="fixed inset-0 -z-10 opacity-[0.07] mix-blend-multiply filter invert pointer-events-none" style={{ backgroundImage: "url('/scribbles-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      
{/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 transition-all duration-500 glass-nav">

</header>
<main>
{/*  Section 1: Hero  */}
<section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover parallax-bg" alt="About Hero Background" src="/about-hero-new.webp" fetchPriority="high" decoding="sync" />
</div>
<div className="relative z-10 text-center px-grid-margin max-w-7xl pt-32">
<h1 
  className="font-display-lg text-display-lg-mobile md:text-display-lg leading-tight text-white mb-12 reveal"
  style={{ textShadow: "0 0 40px rgba(0,0,0,0.9), 0 10px 20px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.7)" }}
>
                        THE SCIENCE OF LIGHT.<br/>
<span className="italic font-normal">THE ART OF ILLUMINATION.</span>
</h1>

</div>
</section>
{/* What We Do Section */}
<section className="py-24 bg-[#F4F1EC] relative overflow-hidden z-10 border-t border-black/5">
  <div className="absolute inset-0 opacity-20 mix-blend-multiply filter invert pointer-events-none" style={{ backgroundImage: "url('/scribbles-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="px-grid-margin max-w-[1440px] mx-auto relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
      {/* Left Column */}
      <div className="reveal">
        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-6 font-semibold">WHAT WE DO</span>
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Solutions For Every Space</h2>
        <p className="font-body-lg text-body-lg text-primary/80 leading-relaxed">
          From a warm residential interior to a large commercial environment, an architectural façade or an outdoor landscape, ColorTechnik provides lighting solutions designed around the specific requirements of every space.
        </p>
      </div>
      
      {/* Right Column - Stats Grid */}
      <div className="grid grid-cols-2 gap-y-12 gap-x-8 reveal">
        <div>
          <h3 className="font-subheading-lg text-2xl text-primary mb-2">200+</h3>
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block text-sm">PROJECTS COMPLETED</span>
        </div>
        <div>
          <h3 className="font-subheading-lg text-2xl text-primary mb-2">6+</h3>
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block text-sm">YEARS OF EXPERIENCE</span>
        </div>
        <div>
          <h3 className="font-subheading-lg text-2xl text-primary mb-2">Multi</h3>
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block text-sm">BRAND SELECTION</span>
        </div>
        <div>
          <h3 className="font-subheading-lg text-2xl text-primary mb-2">100%</h3>
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block text-sm">CUSTOMER CENTRIC</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  Section 2: Our Story  */}
<section className="py-section-gap bg-[#111827] text-white relative overflow-hidden z-10 border-t border-black/5">
<div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none" style={{ backgroundImage: "url('/scribbles-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
<div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 15% 30%, rgba(99, 130, 168, 0.3), transparent 35%), radial-gradient(circle at 85% 70%, rgba(153, 180, 207, 0.2), transparent 35%)' }}></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#111827]/40 to-[#111827]/90 pointer-events-none"></div>
<div className="px-grid-margin max-w-[1440px] mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter mb-24">
<div className="md:col-span-4">
<h2 className="font-headline-md text-headline-md">A Legacy of Luminous Intent.</h2>
</div>
<div className="md:col-start-6 md:col-span-6">
<p className="font-body-lg text-body-lg opacity-80">Founded on the principle that light is the most critical element of architecture, COLORTECHNIK has spent years perfecting the intersection of technical precision and artistic expression.</p>
</div>
</div>
{/*  Editorial Timeline  */}
<div className="flex flex-col gap-16 md:gap-24 mt-16">
  {/* 2012 - Text Left, Number Right */}
  <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 reveal text-center md:text-left">
    <div className="md:w-1/2 order-2 md:order-1 md:pr-12">
      <h3 className="font-headline-md text-3xl md:text-5xl mb-4 md:mb-6">The Foundation</h3>
      <p className="font-body-lg text-base md:text-lg opacity-70 leading-relaxed max-w-lg mx-auto md:mx-0">
        What began as a small consultancy for boutique gallery spaces evolved into a multidisciplinary firm. We realized early on that lighting wasn't just a utility—it was a psychological driver of experience.
      </p>
    </div>
    <div className="md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
      <span 
        className="text-[4.5rem] md:text-[10rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-cover bg-center select-none"
        style={{ backgroundImage: "url('/home-residential-bg.webp')", WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
      >
        2021
      </span>
    </div>
  </div>

  {/* 2018 - Number Left, Text Right */}
  <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 reveal text-center md:text-left mt-8 md:mt-0">
    <div className="md:w-1/2 order-1 flex justify-center md:justify-start">
      <span 
        className="text-[4.5rem] md:text-[10rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-cover bg-center select-none"
        style={{ backgroundImage: "url('/projects-hero-bg.webp')", WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
      >
        2023
      </span>
    </div>
    <div className="md:w-1/2 order-2 md:pl-12">
      <h3 className="font-headline-md text-3xl md:text-5xl mb-4 md:mb-6">Global Expansion</h3>
      <p className="font-body-lg text-base md:text-lg opacity-70 leading-relaxed max-w-lg mx-auto md:mx-0">
        COLORTECHNIK redefined its boundaries, taking on massive industrial and hospitality projects across three continents. Our team of engineers and designers grew to encompass the best talent in the industry.
      </p>
    </div>
  </div>
</div>
</div>
</section>
{/*  Section 3: Our Philosophy  */}
<section className="py-section-gap bg-[#F4F1EC] relative overflow-hidden z-10 border-t border-black/5">
<div className="absolute inset-0 opacity-20 mix-blend-multiply filter invert pointer-events-none" style={{ backgroundImage: "url('/scribbles-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
<div className="px-grid-margin max-w-[1440px] mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter text-center">
<div className="md:col-start-2 md:col-span-10">
<h2 className="font-display-lg text-display-lg-mobile md:text-headline-xl leading-none mb-16 mx-auto text-primary">
                            WE DON&apos;T SELL <span className="text-secondary">LIGHTING</span>.<br/>
                            WE SHAPE <span className="italic">EXPERIENCES THROUGH LIGHT</span>.
                        </h2>
</div>
</div>

</div>
</section>
{/*  Section 4: Our Process (Roadmap) */}
<section className="py-section-gap bg-[#111827] text-white relative overflow-hidden z-10 border-t border-black/5">
<div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none" style={{ backgroundImage: "url('/scribbles-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
<div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 15% 30%, rgba(99, 130, 168, 0.3), transparent 35%), radial-gradient(circle at 85% 70%, rgba(153, 180, 207, 0.2), transparent 35%)' }}></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#111827]/40 to-[#111827]/90 pointer-events-none"></div>
<div className="px-grid-margin max-w-[1440px] mx-auto relative z-10">
<div className="text-center mb-16 md:mb-32 reveal">
<span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-widest block mb-4">The Methodology</span>
<h2 className="font-headline-md text-headline-md">A Precision-Driven Journey.</h2>
</div>

<div className="relative max-w-5xl mx-auto">
  {/* The Winding Roadmap Line (Desktop Only) */}
  <svg className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 1000 240" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" style={{ color: 'rgba(255,255,255,0.15)' }}>
    <path d="M 166.5,60 L 500,60 L 833.5,60 C 960,60 960,180 833.5,180 L 500,180 L 166.5,180" />
  </svg>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 relative z-10">
    {
      [
        { id: '01', title: 'Consultation', desc: 'Understanding the space and the inhabitant’s intent.', icon: 'chat_bubble', col: 1, row: 1 },
        { id: '02', title: 'Design', desc: 'Modeling light paths to ensure absolute architectural precision.', icon: 'architecture', col: 2, row: 1 },
        { id: '03', title: 'Selection', desc: 'Curating premium components for honesty, durability, and quality.', icon: 'layers', col: 3, row: 1 },
        { id: '04', title: 'Supply', desc: 'Direct sourcing to ensure hardware arrives exactly when needed.', icon: 'inventory_2', col: 3, row: 2 },
        { id: '05', title: 'Installation', desc: 'Specialist installers realize the design intent with precision.', icon: 'construction', col: 2, row: 2 },
        { id: '06', title: 'Support', desc: 'Ongoing calibration and maintenance to ensure enduring perfection.', icon: 'support_agent', col: 1, row: 2 }
      ].map((step, index) => (
        <div key={index} className={`flex flex-col items-center text-center px-4 group reveal ${step.col === 1 ? 'md:col-start-1' : step.col === 2 ? 'md:col-start-2' : 'md:col-start-3'} ${step.row === 1 ? 'md:mb-16' : ''}`}>
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md shadow-sm border border-white/20 flex items-center justify-center mb-4 md:mb-5 relative z-10 group-hover:scale-110 group-hover:bg-white transition-all duration-500">
            <span className="material-symbols-outlined text-2xl md:text-3xl text-white group-hover:text-primary transition-colors duration-500">{step.icon}</span>
          </div>
          <h4 className="font-subheading-lg text-lg md:text-xl font-medium text-white mb-2 md:mb-3 relative z-10">{step.title}</h4>
          <p className="font-body-md text-sm md:text-base text-white/80 max-w-[16rem] relative z-10">{step.desc}</p>
        </div>
      ))
    }
  </div>
</div>
</div>
</section>
{/*  Section 5: Why Choose Us  */}
<section className="py-section-gap bg-[#F4F1EC] relative overflow-hidden z-10 border-t border-black/5">
<div className="absolute inset-0 opacity-20 mix-blend-multiply filter invert pointer-events-none" style={{ backgroundImage: "url('/scribbles-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
{/* Decorative blurred orbs for glass effect to show through */}
<div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-secondary-fixed/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
<div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-tertiary-container/30 rounded-full blur-[100px] pointer-events-none"></div>

<div className="px-grid-margin max-w-[1440px] mx-auto relative z-10">
<div className="text-center mb-16">
<span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-4">Why Choose Us</span>
<h2 className="font-headline-md text-headline-md text-primary">The Colortechnik Advantage.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-center">
{
    [
        { title: "Multi-brand Selection", desc: "Partnering with the world's finest lighting manufacturers.", icon: "category" },
        { title: "Expertise & Experience", desc: "Decades of combined experience in architectural illumination.", icon: "military_tech" },
        { title: "Customer-Centric Approach", desc: "Your vision and requirements are the foundation of our design.", icon: "handshake" },
        { title: "Proven Track Record", desc: "A portfolio of successful projects across diverse industries.", icon: "verified" },
        { title: "Energy-Efficient Solutions", desc: "Sustainable lighting that minimizes environmental impact.", icon: "eco" },
    ].map((item, index) => (
        <div key={index} className="px-4 py-2 md:px-5 md:py-2.5 relative overflow-hidden rounded-full border border-white/60 bg-white/30 backdrop-blur-xl shadow-sm hover:bg-white/50 hover:shadow-md hover:-translate-y-1 transition-all duration-500 group flex items-center gap-3 md:gap-4 w-full max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/50 flex items-center justify-center shadow-sm border border-white/60 shrink-0 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-lg md:text-xl text-primary drop-shadow-sm">{item.icon}</span>
            </div>
            <h4 className="relative z-10 font-subheading-lg text-sm md:text-base text-primary m-0 font-medium">{item.title}</h4>
        </div>
    ))
}
</div>
</div>
</section>


</main>
{/*  Footer  */}



    </main>
  );
}