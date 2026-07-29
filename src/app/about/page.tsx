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
      <div className="fixed inset-0 -z-10 opacity-[0.07] mix-blend-multiply filter invert pointer-events-none" style={{ backgroundImage: "url('/scribbles-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      
{/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 transition-all duration-500 glass-nav">

</header>
<main>
{/*  Section 1: Hero  */}
<section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover parallax-bg" alt="About Hero Background" src="/about-hero-bg.jpg" fetchPriority="high" decoding="async" />
</div>
<div className="relative z-10 text-center px-grid-margin max-w-7xl pt-32">
<h1 
  className="font-display-lg text-display-lg-mobile md:text-display-lg leading-tight text-white mb-12 hero-reveal"
  style={{ textShadow: "0 0 40px rgba(0,0,0,0.9), 0 10px 20px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.7)" }}
>
                        THE SCIENCE OF LIGHT.<br/>
<span className="italic font-normal">THE ART OF ILLUMINATION.</span>
</h1>
<div className="hidden md:flex flex-col gap-4 items-center mt-12">
<div className="w-px h-32 bg-white/50"></div>
<span className="font-label-md text-label-md uppercase tracking-widest text-white/80" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>Established 2024</span>
</div>
</div>
</section>
{/*  Section 2: Our Story  */}
<section className="py-section-gap bg-surface">
<div className="px-grid-margin max-w-[1440px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter mb-24">
<div className="md:col-span-4">
<span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-4">The Narrative</span>
<h2 className="font-headline-md text-headline-md text-primary">A Legacy of Luminous Intent.</h2>
</div>
<div className="md:col-start-6 md:col-span-6">
<p className="font-body-lg text-body-lg text-on-surface-variant">Founded on the principle that light is the most critical element of architecture, COLORTECHNIK has spent years perfecting the intersection of technical precision and artistic expression.</p>
</div>
</div>
{/*  Editorial Timeline  */}
<div className="space-y-section-gap">
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center">
<div className="md:col-span-5 order-2 md:order-1">
<div className="aspect-square rounded-lg overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="A vintage, detailed blueprint of a historic theatre lighting system laid out on a dark wooden table. Soft, focused amber light illuminates the intricate hand-drawn diagrams and technical notes. The scene captures a sense of heritage and meticulous craftsmanship, with heavy shadows and high-contrast textures that evoke the early days of professional lighting design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSOGfXxQ6H4tYXwvSSxcL8bK_UWGlF7HZAocME0gwjNptT8jwxOE0-BtGmGVznngd9HpEs9zUJk_w9RgM2xRSKMCWwqUls26RVzEe2FwBnnRXr68IZR1nrCZuFSFYXNrj40yxG0cJBZM7m_SZejG1zIDpk5aX98o2r_L_vNXdUMLPybcDpQ-qpyEMO3f46CV4qmgHv5miS8_31qMvmzYrOn5e0W1ngN4gdobdTX2wOAybZwmDopQpSaCb_mB3iEn73aDpigJsrTvk"/>
</div>
</div>
<div className="md:col-start-7 md:col-span-5 order-1 md:order-2 mb-12 md:mb-0">
<span className="font-stat-number text-stat-number text-stone-beige block mb-6">2012</span>
<h3 className="font-subheading-lg text-subheading-lg text-primary mb-6 underline decoration-stone-beige decoration-2 underline-offset-8">The Foundation</h3>
<p className="font-body-md text-body-md text-on-surface-variant">What began as a small consultancy for boutique gallery spaces evolved into a multidisciplinary firm. We realized early on that lighting wasn&apos;t just a utility—it was a psychological driver of experience.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center">
<div className="md:col-span-5 mb-12 md:mb-0">
<span className="font-stat-number text-stat-number text-stone-beige block mb-6">2018</span>
<h3 className="font-subheading-lg text-subheading-lg text-primary mb-6 underline decoration-stone-beige decoration-2 underline-offset-8">Global Expansion</h3>
<p className="font-body-md text-body-md text-on-surface-variant">COLORTECHNIK redefined its boundaries, taking on massive industrial and hospitality projects across three continents. Our team of engineers and designers grew to encompass the best talent in the industry.</p>
</div>
<div className="md:col-start-8 md:col-span-5">
<div className="aspect-square rounded-lg overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="A modern, sleek architectural facade of a skyscraper at dusk, illuminated by precise blue and white LED accents that highlight the building's sharp, vertical lines. The deep navy blue of the evening sky contrasts beautifully with the glowing, geometric architecture. The image reflects global scale, technical mastery, and the modern identity of COLORTECHNIK." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUDGGr1g99Habl1cBLrxwxo9XMH5FZB3oSV7MPE3iIsaHJmFQqqwZp79siW2TaB7rj8TSEJbMtxlbju9ana3bsSjrlvO_cq2aTt9Ije75FMJtC36Jsfyndl8K1iVkxNLV9QOIKAqeP5YPFbn1l_3xcWcQw0mwI_BMYf6AUC-WhwV3uyB2TYG3m31fDikQFLy50EdEex0S-Zd7-Qmgp8jADo_nPIo92OrVcu7X9VOlhS7VOfzeKmpnPaZ54ZSXX35T5rMKcRKD6AnE"/>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Section 3: Our Philosophy  */}
<section className="py-section-gap bg-primary text-on-primary relative overflow-hidden">
<div className="absolute inset-0 opacity-10">

</div>
<div className="px-grid-margin max-w-[1440px] mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
<div className="md:col-span-10">
<h2 className="font-display-lg text-display-lg-mobile md:text-headline-xl leading-none mb-16">
                            WE DO NOT SELL <span className="text-secondary-fixed">FIXTURES</span>.<br/>
                            WE ENGINEER <span className="italic">PERCEPTION</span>.
                        </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter mt-12">
<div className="md:col-start-7 md:col-span-5">
<div className="p-12 bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
<p className="font-body-lg text-body-lg mb-8">Our philosophy is rooted in "Architectural Luminescence"—the belief that light should reveal form, not distract from it. We hide the source to celebrate the shadow.</p>
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-primary">lightbulb</span>
</div>
<span className="font-label-md text-label-md uppercase tracking-widest text-secondary-fixed">The Luminary Standard</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Section 4: Our Process  */}
<section className="py-section-gap">
<div className="px-grid-margin max-w-[1440px] mx-auto">
<div className="text-center mb-24">
<span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-4">The Methodology</span>
<h2 className="font-headline-md text-headline-md text-primary">A Precision-Driven Journey.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
{/*  Step 1  */}
<div className="p-8 group hover:bg-surface-container transition-all duration-500 rounded-lg">
<div className="mb-8 flex justify-between items-start">
<span className="font-stat-number text-stat-number text-outline-variant group-hover:text-secondary-fixed transition-colors">01</span>
<span className="material-symbols-outlined text-4xl text-primary">chat_bubble</span>
</div>
<h4 className="font-subheading-lg text-subheading-lg text-primary mb-4">Consultation</h4>
<p className="font-body-md text-body-md text-on-surface-variant">We begin by listening. Understanding the rhythm of the space and the intent of the inhabitant is the first step in our design language.</p>
</div>
{/*  Step 2  */}
<div className="p-8 group hover:bg-surface-container transition-all duration-500 rounded-lg">
<div className="mb-8 flex justify-between items-start">
<span className="font-stat-number text-stat-number text-outline-variant group-hover:text-secondary-fixed transition-colors">02</span>
<span className="material-symbols-outlined text-4xl text-primary">architecture</span>
</div>
<h4 className="font-subheading-lg text-subheading-lg text-primary mb-4">Design</h4>
<h4 className="font-subheading-lg text-subheading-lg text-primary mb-4">Design</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Photometric studies and architectural diagrams bring the vision to life. We model light paths to ensure absolute precision.</p>
</div>
{/*  Step 3  */}
<div className="p-8 group hover:bg-surface-container transition-all duration-500 rounded-lg">
<div className="mb-8 flex justify-between items-start">
<span className="font-stat-number text-stat-number text-outline-variant group-hover:text-secondary-fixed transition-colors">03</span>
<span className="material-symbols-outlined text-4xl text-primary">layers</span>
</div>
<h4 className="font-subheading-lg text-subheading-lg text-primary mb-4">Selection</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Curation of premium components from global partners. We select for material honesty, durability, and luminous quality.</p>
</div>
{/*  Step 4  */}
<div className="p-8 group hover:bg-surface-container transition-all duration-500 rounded-lg">
<div className="mb-8 flex justify-between items-start">
<span className="font-stat-number text-stat-number text-outline-variant group-hover:text-secondary-fixed transition-colors">04</span>
<span className="material-symbols-outlined text-4xl text-primary">inventory_2</span>
</div>
<h4 className="font-subheading-lg text-subheading-lg text-primary mb-4">Supply</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Direct sourcing and logistics management ensure that the finest architectural hardware arrives on site, exactly when needed.</p>
</div>
{/*  Step 5  */}
<div className="p-8 group hover:bg-surface-container transition-all duration-500 rounded-lg">
<div className="mb-8 flex justify-between items-start">
<span className="font-stat-number text-stat-number text-outline-variant group-hover:text-secondary-fixed transition-colors">05</span>
<span className="material-symbols-outlined text-4xl text-primary">construction</span>
</div>
<h4 className="font-subheading-lg text-subheading-lg text-primary mb-4">Installation</h4>
<p className="font-body-md text-body-md text-on-surface-variant">White-glove technical execution. Our specialist installers work with architectural precision to realize the design intent.</p>
</div>
{/*  Step 6  */}
<div className="p-8 group hover:bg-surface-container transition-all duration-500 rounded-lg">
<div className="mb-8 flex justify-between items-start">
<span className="font-stat-number text-stat-number text-outline-variant group-hover:text-secondary-fixed transition-colors">06</span>
<span className="material-symbols-outlined text-4xl text-primary">support_agent</span>
</div>
<h4 className="font-subheading-lg text-subheading-lg text-primary mb-4">Support</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Beyond the switch. We provide ongoing calibration and technical maintenance to ensure the masterpiece remains perfect.</p>
</div>
</div>
</div>
</section>
{/*  Section 5: Industries Served  */}
<section className="py-section-gap overflow-hidden bg-surface-container-low">
<div className="px-grid-margin max-w-[1440px] mx-auto">
<div className="mb-24">
<h2 className="font-headline-xl text-display-lg-mobile md:text-headline-xl text-primary leading-tight">DOMAINS OF<br/>EXCELLENCE.</h2>
</div>
{/*  Editorial Horizontal Sections  */}
<div className="space-y-grid-gutter">
{/*  Residential  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center bg-white rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-700">
<div className="md:col-span-6 p-12 lg:p-24">
<span className="font-label-md text-label-md text-stone-beige mb-6 block uppercase tracking-widest">01 / Residential</span>
<h3 className="font-headline-md text-headline-md text-primary mb-8">Sanctuaries of Light.</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-12">Elevating the private residence into a gallery of lived experience. We design lighting that follows the circadian rhythm of your day.</p>
<a className="inline-block font-label-md text-label-md text-primary editorial-underline uppercase tracking-widest" href="#">View Portfolio</a>
</div>
<div className="md:col-span-6 aspect-video md:aspect-auto h-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" data-alt="A luxurious, modern living room at twilight with soft, layered lighting that highlights architectural textures of stone and wood. Floor-to-ceiling glass windows show a glimpse of a sunset, while the interior is filled with a warm, inviting glow from recessed ceiling lights and elegant, minimalist floor lamps. The atmosphere is peaceful, sophisticated, and perfectly balanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCknWGqQBzkAESCk53Q8pJyhrSSxf7joq-G3mNz8bymskJBLERv_HsFKQHFaoj3c8K7AdIDb08PYuIpDVidtmtFMG_Pn2CPHod5jyExDh9XcwLqoUJHwGO9cf7n7HhsnOKeZtxfO66N25P57IXiUYQfAhIQBJeNiOpOq5-pcUh56PsMJzmIxLhdAze_BGISHknlvbxoke_m4jkL3WhBCVi5RtqgQsS2glkdPF2O_7hznbR2y2a5AR3EfiaL9H4b6xATKfEgOjsAKO8"/>
</div>
</div>
{/*  Commercial  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center bg-white rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-700">
<div className="md:col-span-6 order-2 md:order-1 aspect-video md:aspect-auto h-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" data-alt="A high-end corporate office lobby with a striking geometric lighting installation hanging from a double-height ceiling. The space features polished marble floors that reflect the crisp, white light from above, creating a sense of professional authority and modern clarity. The lighting design emphasizes the clean, structural lines of the corporate environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzA2Zi7EugEaK2FzHAz-soBfLB9-6tRnNVN5B8arQ3iTzFLdaHuOLVvaE9gxGAwDzDfg1DNR8tCUJL3Pgaoo2mTp_Qwtim8L_jh0KmISN6ExPIaQoKZwYzvmjlV8ZsUgMoPM-OsnaRfvtM3yse3bYRmukHMt_iIu171gICIfP5paruEOWfo68wojV_VKXyIOdp2p8kg5jCsfMUKiqq7f5bdFG62QVErryH0oSL-wlP6dw8Q3aa3wmK-InOdKOxDwcXT28C0a-D3yY"/>
</div>
<div className="md:col-span-6 order-1 md:order-2 p-12 lg:p-24">
<span className="font-label-md text-label-md text-stone-beige mb-6 block uppercase tracking-widest">02 / Commercial</span>
<h3 className="font-headline-md text-headline-md text-primary mb-8">Precision Environments.</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-12">Optimizing productivity and brand identity through calibrated illumination. We turn workspaces into high-performance environments.</p>
<a className="inline-block font-label-md text-label-md text-primary editorial-underline uppercase tracking-widest" href="#">Explore Projects</a>
</div>
</div>
{/*  Hospitality  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center bg-white rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-700">
<div className="md:col-span-6 p-12 lg:p-24">
<span className="font-label-md text-label-md text-stone-beige mb-6 block uppercase tracking-widest">03 / Hospitality</span>
<h3 className="font-headline-md text-headline-md text-primary mb-8">Atmospheric Grandeur.</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-12">Crafting memorable experiences in hotels and restaurants. Light is the secret ingredient that defines the mood of every guest interaction.</p>
<a className="inline-block font-label-md text-label-md text-primary editorial-underline uppercase tracking-widest" href="#">See Case Studies</a>
</div>
<div className="md:col-span-6 aspect-video md:aspect-auto h-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" data-alt="A chic, high-end restaurant bar illuminated by warm bronze pendant lights and subtle backlighting behind a glass-shelf display of spirits. The lighting creates a cozy, intimate atmosphere with golden highlights dancing on polished wood surfaces and crystal glassware. The mood is social, luxurious, and expertly curated for an evening experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq6lPj5g_vDOGJmrtuJDdQjcLYh3xwxre4AvW0bhHXVXQ9NNkeC7gHshtJxgT7IQa-PmAnHkEVKZIAd_dqutn6zkvVg0wKKRcyXUWucdsnbFIC2xi83xCz13HaHK2G_iFmnwHwesdQjkb80AAI1aMTZgArrdkBTdGDHqKolEtW0gLei4wsFPytTtFCsxVwgRsntTHmYvSsBYGOeQWO_djZwAQjPnspCG_sFuVhePf0W-A1S87lZ1ZWsZ4rSnDZfXm3TVSf4dKPqUI"/>
</div>
</div>
</div>
</div>
</section>
{/*  Section 6: CTA  */}
<section className="py-section-gap bg-primary text-on-primary text-center px-mobile-margin">
<div className="max-w-4xl mx-auto">
<h2 className="font-headline-xl text-display-lg-mobile md:text-headline-xl mb-12">READY TO DEFINE YOUR RADIANCE?</h2>
<p className="font-body-lg text-body-lg mb-12 opacity-80">Join us for a private consultation and experience the transformative power of architectural lighting.</p>
<div className="flex flex-col md:flex-row gap-6 justify-center">
<button className="px-12 py-5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md hover:bg-secondary transition-all duration-300 scale-100 active:scale-95">
                        Start Your Lighting Journey
                    </button>
<button className="px-12 py-5 rounded-full border border-white/20 text-white font-label-md text-label-md hover:bg-white/10 transition-all duration-300">
                        Download Studio Profile
                    </button>
</div>
</div>
</section>
</main>
{/*  Footer  */}



    </main>
  );
}