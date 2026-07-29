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
<header className="relative h-screen flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Contact Hero Background" className="w-full h-full object-cover parallax-bg" src="/contact-hero-bg.jpg" fetchPriority="high" decoding="async" />
</div>
<div className="relative z-10 px-grid-margin max-w-[1440px] mx-auto w-full" style={{ textShadow: "0 0 40px rgba(0,0,0,0.9), 0 10px 20px rgba(0,0,0,0.8)" }}>
<div className="max-w-4xl">
<span className="font-label-md text-label-md text-surface-container-lowest tracking-[0.3em] uppercase mb-6 block opacity-80">Architecture &amp; Light</span>
<h1 className="font-display-lg text-display-lg text-surface-container-lowest leading-none mb-12">
                    LET&apos;S BUILD <br/>SOMETHING <br/>EXTRAORDINARY.
                </h1>
<div className="flex items-center gap-6">
<div className="w-24 h-[1px] bg-surface-container-lowest/50"></div>
<p className="font-body-lg text-body-lg text-surface-container-lowest/90 max-w-md">
                        Merging heritage-inspired aesthetics with modern structural precision to illuminate your vision.
                    </p>
</div>
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
<div className="space-y-12">
<div className="group">
<h3 className="font-subheading-lg text-subheading-lg text-primary mb-2 flex items-center gap-4 group-hover:text-secondary transition-colors">
<span className="material-symbols-outlined font-light">call</span>
                                Phone &amp; WhatsApp
                            </h3>
<p className="font-body-md text-body-md text-on-surface-variant ml-10">+1 (555) 890 2341</p>
<p className="font-body-md text-body-md text-on-surface-variant ml-10">+44 20 7946 0123</p>
</div>
<div className="group">
<h3 className="font-subheading-lg text-subheading-lg text-primary mb-2 flex items-center gap-4 group-hover:text-secondary transition-colors">
<span className="material-symbols-outlined font-light">mail</span>
                                Email Inquiry
                            </h3>
<p className="font-body-md text-body-md text-on-surface-variant ml-10">concierge@colortechnik.com</p>
<p className="font-body-md text-body-md text-on-surface-variant ml-10">projects@colortechnik.com</p>
</div>
<div className="group">
<h3 className="font-subheading-lg text-subheading-lg text-primary mb-2 flex items-center gap-4 group-hover:text-secondary transition-colors">
<span className="material-symbols-outlined font-light">location_on</span>
                                Headquarters
                            </h3>
<address className="font-body-md text-body-md text-on-surface-variant ml-10 not-italic">
                                422 Luminescence Plaza, Suite 900<br/>
                                Architectural District, NY 10013
                            </address>
</div>
</div>
<div className="pt-8">
<div className="flex gap-6">
<a className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" href="#">
<span className="material-symbols-outlined text-xl">share</span>
</a>
<a className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" href="#">
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
<option>Residential Masterpiece</option>
<option>Commercial Structural</option>
<option>Hospitality Lighting</option>
<option>Industrial Automation</option>
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
<img alt="Architectural map location" className="w-full h-full object-cover" data-alt="A sophisticated, high-contrast aerial map view of a modern metropolitan district at dusk. The streets are highlighted by glowing golden lights, contrasting against the deep architectural navy and cool stone greys of the building tops. The visual style is crisp and editorial, evoking a sense of precise urban planning and luxury connectivity." data-location="New York City" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFA8-sRi6zd6Skka_bBzggn-q65tJYLIdYtOUgNdN44k0JCke5WFhVvjz-GrY4HC3IMIEvBFX-7Gnu-X_uwrWXw1Hz55-ijPbfyO6Y-pwTnpoTqNIKENydjomI7-LssreBEROC1tXdrMyObH7dq0338iIzNnQ5GWXVH4DlcfD6roGlw4BOX1B6Ewzr0IrYpKUhT3RUyFLnqEcd7LKCW0gN6rx1lHscParhYqSHiikBf1Z2gE8NntFyytxvKl_fLzu-_3E5U9YSWq0"/>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center animate-pulse">
<div className="w-4 h-4 rounded-full bg-secondary-fixed"></div>
</div>
</div>
</section>
{/*  CTA Section  */}
<section className="py-section-gap px-grid-margin bg-primary text-on-primary overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10">

</div>
<div className="max-w-[1440px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
<div className="max-w-2xl">
<h2 className="font-headline-xl text-headline-xl mb-6">Experience <br/>The Brilliance.</h2>
<p className="font-body-lg text-body-lg text-on-primary-container">Book a site visit or a private consultation at our experience center to witness architectural luminescence first-hand.</p>
</div>
<div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
<button className="bg-secondary-fixed text-on-secondary-fixed px-10 py-5 rounded-full font-label-md text-label-md tracking-widest uppercase hover:brightness-110 transition-all flex items-center justify-center gap-3">
                    Schedule Site Visit
                    <span className="material-symbols-outlined">event</span>
</button>
<button className="border border-outline-variant text-on-primary px-10 py-5 rounded-full font-label-md text-label-md tracking-widest uppercase hover:bg-surface-container-lowest hover:text-primary transition-all flex items-center justify-center gap-3">
                    Expert Consultation
                    <span className="material-symbols-outlined">chat</span>
</button>
</div>
</div>
</section>
{/*  Footer  */}



    </main>
  );
}