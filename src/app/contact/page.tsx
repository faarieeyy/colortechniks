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
<a href="https://wa.me/919513894969" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 hover:text-secondary transition-colors text-primary">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-2xl font-light">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
</svg>
<span className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-secondary transition-colors">9513894969</span>
</a>
<a href="tel:+918050784707" className="group flex items-center gap-4 hover:text-secondary transition-colors text-primary">
<span className="material-symbols-outlined font-light text-2xl">call</span>
<span className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-secondary transition-colors">80507 84707 - Customer Care</span>
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