"use client";

import { useEffect } from "react";


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
      
{/*  Top Navigation  */}

{/*  Hero Section  */}
<header className="relative h-[921px] flex items-center overflow-hidden">
<div className="absolute inset-0">
<img alt="Services Hero Background" className="w-full h-full object-cover parallax-bg" src="/services-hero-bg.jpg" fetchPriority="high" decoding="async" />
</div>
<div className="relative w-full max-w-[1440px] mx-auto px-grid-margin z-10">
<h1 className="text-white leading-tight max-w-4xl editorial-reveal" id="hero-title" style={{ textShadow: "0 0 40px rgba(0,0,0,0.9), 0 10px 20px rgba(0,0,0,0.8)" }}>
                <span className="block font-display-lg text-display-lg-mobile md:text-display-lg mb-4">LIGHTING SOLUTIONS</span>
                <span className="block font-headline-md text-headline-md font-normal italic opacity-90">FOR EVERY ENVIRONMENT.</span>
            </h1>
</div>
</header>
{/*  Main Content Area  */}
<main className="space-y-section-gap pt-section-gap">
{/*  Residential Lighting (Image Left, Text Right)  */}
<section className="max-w-[1440px] mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center editorial-reveal">
<div className="md:col-span-7 overflow-hidden rounded-lg image-zoom-container">
<img alt="Residential Interior" className="w-full h-[600px] object-cover transition-transform duration-1000" data-alt="An elegant residential living room showcasing architectural lighting that highlights texture and form. Soft ivory walls are washed with warm light from hidden LED channels, while a modern bronze chandelier acts as a centerpiece. The furniture is minimalist and high-end, set against a backdrop of deep shadows and soft highlights. The mood is intimate, serene, and sophisticated." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXBLZ14y-tMTl852iebJ4hV1BClf44M2ZHCKO47wk6i-z472wr4wtSnsm2xURhXItgseQCJsPGkUEruKqksvNBZziG9LsYRZtdwPG3yK361LTFNpFo_5kUdSmAHhL1N_X4_2Kesx8KIvDdw28IrTnZEsjscTFFxzCL6v5azP0rJ_J-t7dWsHwrzK-No9FCtyAwNXyDp8WgtPya98Kxp6-DH1BYrdJLT7QxxW9_S_dGuDQB-L0Ic_qv4z8p8yH0eAuWi4TtYR6p0hc"/>
</div>
<div className="md:col-span-4 md:col-start-9 space-y-6">
<span className="font-label-md text-label-md text-secondary uppercase tracking-widest">01</span>
<h2 className="font-headline-md text-headline-md text-primary">Residential Lighting</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                    We create atmospheric sanctuaries using subtle layering and high-CRI illumination. Our residential approach prioritizes the human experience, balancing functional clarity with emotive warmth.
                </p>
<div className="pt-4">
<button className="group flex items-center gap-2 font-label-md text-label-md text-primary">
                        VIEW GALLERY <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
<div className="h-0.5 w-full bg-tertiary-container mt-2"></div>
</div>
</div>
</section>
{/*  Commercial Lighting (Text Left, Image Right)  */}
<section className="max-w-[1440px] mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center editorial-reveal">
<div className="md:col-span-4 md:col-start-1 order-2 md:order-1 space-y-6">
<span className="font-label-md text-label-md text-secondary uppercase tracking-widest">02</span>
<h2 className="font-headline-md text-headline-md text-primary">Commercial Lighting</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                    Precision-engineered lighting for the modern workspace. We integrate smart sensors and circadian-aware systems to boost productivity while maintaining an uncompromising aesthetic standard.
                </p>
<div className="pt-4">
<button className="group flex items-center gap-2 font-label-md text-label-md text-primary">
                        TECHNICAL SPECS <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
<div className="h-0.5 w-full bg-tertiary-container mt-2"></div>
</div>
</div>
<div className="md:col-span-7 md:col-start-6 order-1 md:order-2 overflow-hidden rounded-lg image-zoom-container">
<img alt="Commercial Office" className="w-full h-[600px] object-cover transition-transform duration-1000" data-alt="A futuristic office space with linear geometric lighting fixtures integrated into the architectural ceiling. The environment is clean, bright, and professional, using a palette of cool architectural greys and crisp whites. Diffused light creates a shadow-free workspace that looks both energetic and refined. The perspective is symmetrical, emphasizing the structural precision of the design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1G42yIoLGw-GkNzLg32u8KwYGCtFcOUlWhRaLUveHl2Pio_cBjeSYOs-UII8aF-xSZL0b9dU-t1d-5QPyM8dco-Oor31NQz1aixqM23rSfcC_KYdugT0J_xOXFMi1wsQzJ3-stK2qYpKWTe2bdixB6Ky-9v45PB-ru9qfhQwXX8SBNr-OQrQey-SCoJWRWDLB38EoTo3c33qC2gU6fhHy83TbktLwVKN3hm9hZCu1t0eBaFAUUf8EIuxh_1HMnZpbVgFpYy8T-kw"/>
</div>
</section>
{/*  Hospitality Lighting (Floating Full Width Style)  */}
<section className="editorial-reveal py-section-gap">
<div className="max-w-[1440px] mx-auto px-grid-margin">
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter mb-element-gap">
<div className="md:col-span-6">
<span className="font-label-md text-label-md text-secondary uppercase tracking-widest">03</span>
<h2 className="font-headline-md text-headline-md text-primary mt-4">Hospitality Lighting</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
<div className="md:col-span-12 relative h-[500px] rounded-lg overflow-hidden mb-grid-gutter">
<img alt="Luxury Spa" className="w-full h-full object-cover" data-alt="A serene luxury spa and wellness center illuminated by soft, underwater pool lights and recessed cove lighting. The architectural materials consist of dark stone and warm wood, reflecting the gentle amber glow of the lights. The mood is deeply relaxing and high-end, utilizing a high-contrast teal and gold color palette. Vapor rises from the water, catching the precise beams of light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwmZ43xf4JA5Pc3UH5VH4J5lpjjsnOC8T_vi2ykzeRPS2ErTm67xfxauyqK1YZMeWrrUEjjdhKY7eFekcvTIIjutVKq78bNKwOjGVldY7bKRddDzB9uUOxeiUDSbdFuJZBjOXgHqMxu3p2vsuu-qHEDthBHjsJAjV6NSxNrluSDi564jbaCAB0Vxk4rWot4KnUY-FbYIPUAO7fMpJLtxP-z9xbXzckGcVJVEvVnuP4s75NbvATYGh5J3fxkhvWfYK3wegPQ0yF2tg"/>
</div>
<div className="md:col-span-5 md:col-start-8">
<p className="font-body-lg text-body-lg text-on-surface-variant">
                            From boutique hotels to fine dining, we curate lighting that defines brand identity. We utilize theatrical techniques to create drama, intimacy, and impeccable presentation.
                        </p>
</div>
</div>
</div>
</section>
{/*  Landscape & Industrial (Split Grid)  */}
<section className="max-w-[1440px] mx-auto px-grid-margin editorial-reveal">
<div className="grid grid-cols-1 md:grid-cols-2 gap-section-gap">
{/*  Industrial  */}
<div className="space-y-6">
<div className="aspect-[4/5] overflow-hidden rounded-lg mb-8">
<img alt="Industrial Facility" className="w-full h-full object-cover" data-alt="A vast industrial manufacturing hall showcasing high-performance LED high-bay lighting. The space is filled with heavy machinery and metallic structures, all rendered with sharp clarity and accurate color under the professional-grade lights. The aesthetic is raw and structural, dominated by deep architectural teals and bright white highlights. The lighting emphasizes safety and operational efficiency." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfJhh6llF22F4CDcHhEgdf5VuytSkcC44p32acdlbmC0iTQF2Y2dN9ura5k5gOUnU6UgIsxmzBuJMu3R9Ui_PGi0cF_KnSVooGXh5Q_CYkVkSKLHHq6XbQrKTXYdf0mcCq0V1_BPHjYrEfCuG0yU7Mih6nogDhgmmepDz8ZZ44_tkEVymCT4ms7iqT8-y5ZihJ2LEt57j5e0Lfm2qJJEoiUl7jPeT5DzW5e2meAGGUGZULT2pyGIl8C8hXVOrcD8vJMSHxPoZUiIo"/>
</div>
<span className="font-label-md text-label-md text-secondary uppercase tracking-widest">04</span>
<h2 className="font-headline-md text-headline-md text-primary">Industrial Lighting</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                        High-output, durable solutions for complex infrastructures. We focus on thermal management and glare reduction in high-scale environments.
                    </p>
</div>
{/*  Landscape  */}
<div className="space-y-6 md:pt-32">
<div className="aspect-[4/5] overflow-hidden rounded-lg mb-8">
<img alt="Landscape Lighting" className="w-full h-full object-cover" data-alt="A sophisticated outdoor garden at twilight, featuring expertly placed landscape lighting that accentuates architectural trees and stone paths. Low-voltage spotlights create soft silhouettes against a deep navy sky, while warm glowing orbs line the modern walkway. The style is minimalist and high-end, emphasizing the natural textures of the landscape through strategic shadow play." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyTntLCEBkdERAI7PL_rcVm1xtL2k-Mnoo-wfzDUZ6ja-pDz4EkEmqaDB90Xqw2jRZgWYKmtovG6iyma5bcHHJjquRuRAhkfAiurm4khoV-1lTfSbQeQbEoMvM2yQnfLpEEPTMStNBG7OOiOZW8YtDJoaqCYktzoeO9if53H_QcQg-AX0KuKE4pCUTuKdP0wg_5fCWiP0HmTSq3IwoOKEdW_y1cq2hzfJEW65JdP6WKxsoqQFZsYsP4rUb-eCl3KIZIAtVa-sxxT8"/>
</div>
<span className="font-label-md text-label-md text-secondary uppercase tracking-widest">05</span>
<h2 className="font-headline-md text-headline-md text-primary">Landscape Lighting</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                        Extending architecture into the night. We design outdoor lighting that enhances safety and curb appeal without contributing to light pollution.
                    </p>
</div>
</div>
</section>
{/*  Automation & Custom (Bento Style)  */}
<section className="max-w-[1440px] mx-auto px-grid-margin editorial-reveal">
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
{/*  Custom Solutions Title  */}
<div className="md:col-span-12 mb-8">
<span className="font-label-md text-label-md text-secondary uppercase tracking-widest">06 &amp; 07</span>
<h2 className="font-display-lg text-headline-md md:text-headline-xl text-primary mt-4">Smart Control &amp; Custom Fabrication</h2>
</div>
{/*  Automation  */}
<div className="md:col-span-8 bg-surface-container-high p-12 rounded-lg flex flex-col justify-between">
<div className="max-w-md">
<h3 className="font-headline-md text-headline-md text-primary mb-4">Automation</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                            Centralized control systems that adapt to your lifestyle. Scene-setting, remote access, and energy optimization integrated seamlessly into your architectural fabric.
                        </p>
</div>
<div className="mt-8 flex gap-4">
<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined">settings_input_component</span>
</div>
<div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-on-secondary">
<span className="material-symbols-outlined">touch_app</span>
</div>
</div>
</div>
{/*  Custom Section  */}
<div className="md:col-span-4 bg-primary p-12 rounded-lg text-on-primary">
<h3 className="font-headline-md text-headline-md mb-4">Bespoke Design</h3>
<p className="font-body-md text-body-md opacity-80 mb-8">
                        When standard fixtures aren&apos;t enough, we engineer and build custom luminaires that match your unique vision.
                    </p>
<ul className="space-y-4 font-label-md text-label-md">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                            MATERIAL HONESTY
                        </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                            PROTOTYPING
                        </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                            HAND-FINISHED
                        </li>
</ul>
</div>
</div>
</section>
{/*  Final CTA Section  */}
<section className="relative bg-primary py-section-gap overflow-hidden">

<div className="relative z-10 max-w-[1440px] mx-auto px-grid-margin text-center">
<h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-12">Discuss Your Project</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-8">
<button className="px-12 py-5 bg-secondary-fixed text-on-secondary-fixed rounded-full font-label-md text-label-md font-bold hover:bg-secondary-container transition-all transform hover:scale-105">
                        SCHEDULE A CONSULTATION
                    </button>
<button className="font-label-md text-label-md text-on-primary border-b-2 border-on-primary pb-1 hover:opacity-70 transition-opacity">
                        DOWNLOAD BROCHURE
                    </button>
</div>
</div>
</section>
</main>
{/*  Footer  */}



    </main>
  );
}