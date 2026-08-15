"use client";

import { useEffect } from "react";
import Link from "next/link";
import TextType from "@/components/TextType";
import AssociatedBrands from "@/components/AssociatedBrands";


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

    let ticking = false;
    let parallaxElements: NodeListOf<Element> | null = null;

    const handleScroll = () => {
      if (!parallaxElements) {
        parallaxElements = document.querySelectorAll('.parallax-bg');
      }
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          parallaxElements!.forEach((el) => {
            const speed = el.getAttribute('data-speed') || "0.5";
            (el as HTMLElement).style.setProperty('--parallax-y', `${scrolled * Number(speed)}px`);
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      {/* Global Fixed Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[#111827]">
        {/* Scribbles pattern overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none" style={{ backgroundImage: "url('/scribbles-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        {/* Soft pastel navy gradients */}
        <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 15% 30%, rgba(99, 130, 168, 0.3), transparent 35%), radial-gradient(circle at 85% 70%, rgba(153, 180, 207, 0.2), transparent 35%)' }}></div>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/40 to-[#111827]/90 pointer-events-none"></div>
      </div>
      
{/*  TopNavBar  */}

{/* Cinematic Scroll Sequence Wrapper */}
<div className="relative z-10 bg-black">
  {/* The Sticky Background Image */}
  <div className="sticky top-0 h-screen w-full overflow-hidden">
    <img className="w-full h-full object-cover" alt="Hero Background" src="/home-lighting-diagram.webp" fetchPriority="high" decoding="async" />
    <div className="absolute inset-0 bg-black/20"></div>
  </div>

  {/* The Scrolling Content Container */}
  <div className="relative z-10 -mt-[100vh]">
    
    {/* Screen 1: Hero Text */}
    <section className="h-screen w-full flex items-center justify-center relative">
      <div className="text-center px-grid-margin max-w-7xl reveal">
        <h1 
          className="font-display-lg text-display-lg text-white leading-none" 
          style={{ textShadow: "0 0 40px rgba(0,0,0,0.9), 0 10px 20px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.7)" }}
        >
          LIGHT THAT <br/> <span className="italic font-normal">SHAPES SPACE.</span>
        </h1>
      </div>
    </section>

    {/* Screen 2: About Company (Introduction Text) */}
    <section className="min-h-screen relative flex flex-col justify-center py-section-gap text-white">
      {/* Dark gradient to ensure text readability against the image and transition smoothly to next section */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-transparent pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-grid-margin relative z-10 w-full mt-32">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl reveal drop-shadow-md">
            <h2 className="font-headline-xl text-headline-xl mb-8 leading-tight">
              <TextType 
                text={["Colortechnik"]} 
                typingSpeed={75} 
                pauseDuration={3000}
                showCursor={false}
                loop={false}
                startOnVisible={true}
              />
            </h2>
            <div className="font-body-lg text-xl md:text-2xl leading-relaxed mb-12 text-white/90 min-h-[200px]">
              <TextType 
                text={["At ColorTechnik, we create lighting solutions that transform spaces with elegance, functionality, and precision. From concept to installation, we deliver premium lighting for residential, commercial, industrial, and architectural projects. Every solution is thoughtfully designed to enhance the way people experience every space."]} 
                typingSpeed={30} 
                initialDelay={1000}
                pauseDuration={3000}
                showCursor={false}
                loop={false}
                startOnVisible={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

{/* Associated Brands Marquee */}
<AssociatedBrands />

{/*  Services we provide  */}
<section className="bg-transparent py-section-gap relative text-white border-t border-white/10">
  <div className="max-w-[1440px] mx-auto px-grid-margin">
    <div className="flex justify-between items-end mb-12 reveal">
      <h2 className="font-headline-md text-headline-md">Services we provide</h2>

    </div>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 reveal">
      {/* Service 1 */}
      <div className="group cursor-pointer">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/home-residential-bg.webp" alt="Residential" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        </div>
        <h3 className="font-subheading-lg text-subheading-lg mb-2">Residential Lighting</h3>
        <p className="font-body-md text-white/70">Warm, elegant lighting solutions that bring comfort and style.</p>
      </div>
      {/* Service 2 */}
      <div className="group cursor-pointer">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/home-commercial-new-bg.webp" alt="Commercial" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        </div>
        <h3 className="font-subheading-lg text-subheading-lg mb-2">Commercial Lighting</h3>
        <p className="font-body-md text-white/70">Smart and efficient lighting that enhances productivity.</p>
      </div>
      {/* Service 3 */}
      <div className="group cursor-pointer">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/home-industrial-crane-generated.webp" alt="Industrial" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        </div>
        <h3 className="font-subheading-lg text-subheading-lg mb-2">Industrial Lighting</h3>
        <p className="font-body-md text-white/70">Robust high-performance lighting for maximum safety.</p>
      </div>
      {/* Service 4 */}
      <div className="group cursor-pointer">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/home-landscape-new-bg.webp" alt="Landscape" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        </div>
        <h3 className="font-subheading-lg text-subheading-lg mb-2">Landscape Lighting</h3>
        <p className="font-body-md text-white/70">Creatively designed outdoor lighting that highlights nature.</p>
      </div>
      {/* Service 5 */}
      <div className="group cursor-pointer">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwmZ43xf4JA5Pc3UH5VH4J5lpjjsnOC8T_vi2ykzeRPS2ErTm67xfxauyqK1YZMeWrrUEjjdhKY7eFekcvTIIjutVKq78bNKwOjGVldY7bKRddDzB9uUOxeiUDSbdFuJZBjOXgHqMxu3p2vsuu-qHEDthBHjsJAjV6NSxNrluSDi564jbaCAB0Vxk4rWot4KnUY-FbYIPUAO7fMpJLtxP-z9xbXzckGcVJVEvVnuP4s75NbvATYGh5J3fxkhvWfYK3wegPQ0yF2tg" alt="Facade Lighting" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        </div>
        <h3 className="font-subheading-lg text-subheading-lg mb-2">Facade Lighting</h3>
        <p className="font-body-md text-white/70">Accentuate architecture with precision lighting that creates striking night-time impressions.</p>
      </div>
    </div>
  </div>
</section>


{/*  Gallery Preview  */}
<section className="relative z-10 py-section-gap text-white bg-transparent border-t border-white/10">
<div className="max-w-[1440px] mx-auto px-grid-margin">
<div className="text-center mb-16 reveal">
<span className="font-label-md text-label-md text-white/60 uppercase tracking-widest mb-4 block">Visual Journal</span>
<h2 className="font-headline-xl text-headline-xl">Project Anthology</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-12 gap-grid-gutter auto-rows-[200px] md:auto-rows-[300px]">
{/*  Large  */}
<div className="col-span-2 md:col-span-8 md:row-span-2 reveal group overflow-hidden rounded-lg relative shadow-[0_0_50px_rgba(255,255,255,0.05)]">
<img loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close-up detail of architectural lighting" src="/project-new-6.webp"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
<span className="text-white font-label-md text-label-md uppercase">Materiality &amp; Radiance</span>
</div>
</div>
{/*  Medium 1  */}
<div className="col-span-1 md:col-span-4 md:row-span-1 reveal group overflow-hidden rounded-lg relative shadow-[0_0_50px_rgba(255,255,255,0.05)]">
<img loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/project-new-2.webp"/>
</div>
{/*  Medium 2  */}
<div className="col-span-1 md:col-span-4 md:row-span-1 reveal group overflow-hidden rounded-lg relative shadow-[0_0_50px_rgba(255,255,255,0.05)]">
<img loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/project-new-3.webp"/>
</div>
{/*  Small 1  */}
<div className="col-span-1 md:col-span-3 reveal group overflow-hidden rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.05)]">
<img loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/project-new-4.webp"/>
</div>
{/*  Small 2  */}
<div className="col-span-1 md:col-span-6 reveal group overflow-hidden rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.05)]">
<img loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/project-new-5.webp"/>
</div>
{/*  Small 3  */}
<div className="col-span-2 md:col-span-3 reveal group overflow-hidden rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.05)]">
<img loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/project-new-1.webp"/>
</div>
</div>
</div>
</section>

{/*  Final CTA  */}
<section className="bg-[#F4F1EC] text-primary py-section-gap text-center relative overflow-hidden">
<div className="absolute inset-0 opacity-20 mix-blend-multiply filter invert pointer-events-none" style={{ backgroundImage: "url('/scribbles-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
<div className="max-w-4xl mx-auto px-grid-margin relative z-10 reveal">
<h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-12">LET&apos;S CREATE EXTRAORDINARY SPACES THROUGH LIGHT.</h2>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
<Link href="/contact" className="bg-primary text-white px-12 py-5 rounded-full font-label-md text-label-md uppercase tracking-widest hover:bg-primary/90 shadow-md transition-all w-full md:w-auto text-center block">Start a Conversation</Link>
<Link href="/projects" className="border-2 border-primary text-primary px-12 py-5 rounded-full font-label-md text-label-md uppercase tracking-widest hover:bg-primary/5 transition-all w-full md:w-auto text-center block">View Our Process</Link>
</div>
</div>
{/*  Abstract light graphic  */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-1/2 bg-gradient-to-t from-white/40 to-transparent blur-[120px] pointer-events-none"></div>
</section>
{/*  Footer  */}



    </main>
  );
}