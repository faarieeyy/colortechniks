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
      
{/*  TopNavBar  */}

{/*  Hero Section  */}
<header className="relative h-screen flex items-end pb-12 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Contact Hero Background" className="w-full h-full object-cover parallax-bg" src="/contact-hero-new-paintings.webp" fetchPriority="high" decoding="async" />
</div>
<div className="relative z-10 px-grid-margin max-w-[1440px] mx-auto w-full" style={{ textShadow: "0 0 40px rgba(0,0,0,0.9), 0 10px 20px rgba(0,0,0,0.8)" }}>
<div className="max-w-4xl">
<h1 className="font-display-lg text-4xl md:text-[4rem] text-surface-container-lowest leading-none">
                    LET&apos;S BUILD <br/>SOMETHING <br/>EXTRAORDINARY.
                </h1>
</div>
</div>
<div className="absolute bottom-12 right-grid-margin z-10 animate-bounce">
<span className="material-symbols-outlined text-surface-container-lowest text-4xl font-light">expand_more</span>
</div>
</header>
{/*  Contact Section  */}
<section className="bg-[#F4F1EC] py-section-gap">
<div className="max-w-[1440px] mx-auto px-grid-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter items-start">
{/*  Left: Contact Details  */}
<div className="lg:col-span-5 space-y-16">
<div>
<h2 className="font-headline-md text-headline-md text-primary mb-4">Direct Communication</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">Reach out to our specialist team for technical inquiries or collaborative opportunities.</p>
</div>
<div className="space-y-8">
{/* Phones */}
<a href="tel:+919513894969" className="group flex items-center gap-4 hover:text-secondary transition-colors text-primary">
<span className="material-symbols-outlined font-light text-2xl">call</span>
<span className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-secondary transition-colors">9513894969</span>
</a>
<a href="tel:+918050784707" className="group flex items-center gap-4 hover:text-secondary transition-colors text-primary">
<span className="material-symbols-outlined font-light text-2xl">call</span>
<span className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-secondary transition-colors">80507 84707</span>
</a>

{/* Emails */}
<a href="mailto:info@colortechnik.co.in" className="group flex items-center gap-4 hover:text-secondary transition-colors text-primary">
<span className="material-symbols-outlined font-light text-2xl">mail</span>
<span className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-secondary transition-colors">info@colortechnik.co.in</span>
</a>
<a href="mailto:sales@colortechnik.co.in" className="group flex items-center gap-4 hover:text-secondary transition-colors text-primary">
<span className="material-symbols-outlined font-light text-2xl">mail</span>
<span className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-secondary transition-colors">sales@colortechnik.co.in</span>
</a>
<a href="mailto:office@colortechnik.co.in" className="group flex items-center gap-4 hover:text-secondary transition-colors text-primary">
<span className="material-symbols-outlined font-light text-2xl">mail</span>
<span className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-secondary transition-colors">office@colortechnik.co.in</span>
</a>
<a href="mailto:ct.colortechnik@gmail.com" className="group flex items-start gap-4 hover:text-secondary transition-colors text-primary">
<span className="material-symbols-outlined font-light text-2xl mt-1">support_agent</span>
<div className="flex flex-col">
<span className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-secondary transition-colors">ct.colortechnik@gmail.com</span>
<span className="text-sm opacity-70 text-on-surface-variant">Customer Care</span>
</div>
</a>

{/* Address */}
<a href="https://maps.app.goo.gl/SreazGeMX4oEq2SR8" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 hover:text-secondary transition-colors text-primary">
<span className="material-symbols-outlined font-light text-2xl mt-1">location_on</span>
<address className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-secondary transition-colors not-italic text-left">
        No. 29, Lower Ground Floor, Skyline Estate,<br/>
        3rd Cross, P and T Layout, Horamavu Main Road,<br/>
        Bengaluru, Karnataka, 560043
    </address>
</a>
</div>
<div className="pt-8">
<div className="flex gap-6">
<a className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" href="#">
<span className="material-symbols-outlined text-xl">share</span>
</a>
<a className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" href="https://maps.app.goo.gl/SreazGeMX4oEq2SR8" target="_blank" rel="noopener noreferrer">
<span className="material-symbols-outlined text-xl">public</span>
</a>
</div>
</div>
</div>
{/*  Right: Consultation Form  */}
<div className="lg:col-span-7 bg-surface p-10 lg:p-16 rounded-lg architectural-shadow">
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="font-label-md text-label-md text-primary tracking-widest uppercase">Full Name</label>
<input className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-4 font-body-md" placeholder="Johnathan Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-primary tracking-widest uppercase">Email Address</label>
<input className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-4 font-body-md" placeholder="john@studio.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="font-label-md text-label-md text-primary tracking-widest uppercase">Project Type</label>
<select className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-4 font-body-md">
<option>Residential Lighting</option>
<option>Commercial Lighting</option>
<option>Industrial Lighting</option>
<option>Landscape Lighting</option>
<option>Facade Lighting</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-primary tracking-widest uppercase">Location</label>
<input className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-4 font-body-md" placeholder="City, Country" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-primary tracking-widest uppercase">Your Vision</label>
<textarea className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-4 font-body-md" placeholder="Describe the scale and intent of your project..." rows={4}></textarea>
</div>
<div className="pt-4">
<button className="w-full bg-primary text-on-primary py-6 rounded-full font-label-md text-label-md tracking-[0.2em] uppercase hover:bg-secondary transition-all duration-500 shadow-lg flex items-center justify-center gap-4 group" type="submit">
                                Submit Request
                                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</button>
</div>
</form>
</div>
</div>
</div>
</section>
{/*  Full Width Map  */}
<section className="h-[600px] w-full relative grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
<div className="absolute inset-0 bg-primary/10 pointer-events-none z-10"></div>
<img alt="Architectural map location" className="w-full h-full object-cover object-center" data-location="Worldwide" src="/world-map-bg.webp"/>
<div className="absolute top-[52%] left-[72%] -translate-x-1/2 -translate-y-1/2 z-20">
<a href="https://maps.app.goo.gl/SreazGeMX4oEq2SR8" target="_blank" rel="noopener noreferrer" className="block w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center animate-pulse hover:scale-110 hover:bg-primary transition-all cursor-pointer">
<div className="w-4 h-4 rounded-full bg-secondary"></div>
</a>
</div>
</section>

{/*  Footer  */}



    </main>
  );
}