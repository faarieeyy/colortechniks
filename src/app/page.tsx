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
      {/* Global Fixed Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <picture>
          <source media="(max-width: 768px)" srcSet="/bg-mobile.png" />
          <img src="/bg-desktop.png" alt="Lighting Background" className="w-full h-full object-cover" />
        </picture>
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      
{/*  TopNavBar  */}

{/*  Hero Section  */}
<section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover parallax-bg" alt="Hero Background" src="/hero-bg.jpg"/>
</div>
<div className="relative z-10 text-center px-grid-margin max-w-7xl">
<h1 
  className="font-display-lg text-display-lg text-white leading-none hero-reveal" 
  style={{ textShadow: "0 0 40px rgba(0,0,0,0.9), 0 10px 20px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.7)" }}
>
                LIGHT THAT <br/> <span className="italic font-normal">SHAPES SPACE.</span>
</h1>
</div>
</section>
{/*  Clientele Section  */}
<section className="bg-[#F4F1EC] py-section-gap overflow-hidden">
<div className="max-w-[1440px] mx-auto px-grid-margin">
<h2 className="font-subheading-lg text-subheading-lg text-primary text-center mb-16 uppercase tracking-widest reveal">Trusted By Leading Architects</h2>
<div className="relative w-full overflow-hidden">
<div className="animate-marquee items-center gap-24 py-10 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
<span className="font-headline-md text-headline-md whitespace-nowrap">GENSLER</span>
<span className="font-headline-md text-headline-md whitespace-nowrap">Zaha Hadid</span>
<span className="font-headline-md text-headline-md whitespace-nowrap">HOK</span>
<span className="font-headline-md text-headline-md whitespace-nowrap">PERKINS&amp;WILL</span>
<span className="font-headline-md text-headline-md whitespace-nowrap">FOSTER + PARTNERS</span>
<span className="font-headline-md text-headline-md whitespace-nowrap">SOM</span>
{/*  Duplicate for loop  */}
<span className="font-headline-md text-headline-md whitespace-nowrap">GENSLER</span>
<span className="font-headline-md text-headline-md whitespace-nowrap">Zaha Hadid</span>
<span className="font-headline-md text-headline-md whitespace-nowrap">HOK</span>
<span className="font-headline-md text-headline-md whitespace-nowrap">PERKINS&amp;WILL</span>
<span className="font-headline-md text-headline-md whitespace-nowrap">FOSTER + PARTNERS</span>
<span className="font-headline-md text-headline-md whitespace-nowrap">SOM</span>
</div>
</div>
</div>
</section>
{/*  Lighting Applications  */}
<section className="relative z-10 py-section-gap text-white">
<div className="relative z-10 max-w-[1440px] mx-auto px-grid-margin space-y-section-gap">
{/*  Row 1: Residential  */}
<div className="grid md:grid-cols-12 gap-grid-gutter items-center">
<div className="md:col-span-7 reveal">
<img className="w-full aspect-[4/3] object-cover rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.6)]" data-alt="A luxury contemporary living room at dusk, featuring layered cove lighting and recessed spotlights that emphasize the minimalist furniture and natural wood textures. Large floor-to-ceiling windows reflect the warm interior glow against a blue hour sky. The lighting design creates a cozy yet expansive residential atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwKeIADZNppg3k--dTTC8AdlGFB6mY6rMRLeV8yFnxgwlnohiITOcc0ixXLBBg5dlSZCLP5_5xeKq7Wx3gfaXMkYzMG24dLrS7KCj7RUsU1DehewH8AIDPoWI72O4BOW95ilWouLvwD0gX0ROuTsVJszPeQLEvEcsf1_LKO6fcAKPBftZQrHiLeurKtC_1kFeQS45VUuqi4TRrg8Px3bW5ek9uthiOwIKhvxA2TS1d8O4sdQ1OAjXQE8BTvh0oFRvLTKoaUsC1esE"/>
</div>
<div className="md:col-span-4 md:col-start-9 reveal">
<span className="font-label-md text-label-md text-[#ffdcbe] uppercase tracking-widest mb-4 block">01 / Residential</span>
<h3 className="font-headline-xl text-headline-xl mb-6">Atmosphere of Home.</h3>
<p className="font-body-lg text-body-lg text-white/80 mb-8">Elevating private sanctuaries through human-centric lighting that adapts to the rhythm of daily life.</p>
<button className="border-b-2 border-white pb-1 font-label-md text-label-md uppercase hover:text-secondary hover:border-secondary transition-colors">Explore Residential</button>
</div>
</div>
{/*  Row 2: Commercial (Reversed)  */}
<div className="grid md:grid-cols-12 gap-grid-gutter items-center">
<div className="md:col-span-4 reveal order-2 md:order-1">
<span className="font-label-md text-label-md text-[#ffdcbe] uppercase tracking-widest mb-4 block">02 / Commercial</span>
<h3 className="font-headline-xl text-headline-xl mb-6">Productive Brilliance.</h3>
<p className="font-body-lg text-body-lg text-white/80 mb-8">Scalable lighting solutions for workspace excellence, focused on clarity, efficiency, and architectural integration.</p>
<button className="border-b-2 border-white pb-1 font-label-md text-label-md uppercase hover:text-secondary hover:border-secondary transition-colors">View Commercial</button>
</div>
<div className="md:col-span-7 md:col-start-6 reveal order-1 md:order-2">
<img className="w-full aspect-[4/3] object-cover rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.6)]" data-alt="A modern open-plan office space featuring sleek linear pendant lights and integrated ceiling wash lighting. The architectural environment is crisp and professional, with cool white light fostering a sense of focus and energy. High-end materials like brushed steel and glass reflect the precise technical lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJFHCkb-chTcogM96sf2NNajpv9vT1Ej5th6Sa7hiF30796NrBfZs5nW_2bWH9SQiaXe0ajfnSQDkxwohpiYa_SmkwdX2987paTr6ADMzCFbDsdwF0feqdVBF_FQPuLCTxmGo0Kx7y9ayGdqp-mE6KljFsAAMQ4rq_nw6Wd3N9LxHtUE-klxedMe6hkFO85x3GSFzNgpGSi1BQy90d3m15k4vKpFL3MJGKw0b5wrN2NNp5QFw9B1ZfNdi7atj9QrIudk47ay57CUk"/>
</div>
</div>
{/*  Row 3: Hospitality  */}
<div className="grid md:grid-cols-12 gap-grid-gutter items-center">
<div className="md:col-span-7 reveal">
<img className="w-full aspect-[4/3] object-cover rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.6)]" data-alt="The lobby of a boutique five-star hotel at night, illuminated by dramatic sculptural lighting fixtures and warm amber accent lights tucked into architectural niches. The environment is rich and welcoming, using high-contrast lighting to create zones of intimacy and grandeur. Dark velvets and polished marbles catch the golden glints of light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-AM3z7CrcRrq4oGShRabzyAbuKph_yrmMSdZwRgzmx2IOmyafdXZa48bhEqDFVXolTSRx3iXbiejqTZg0FJx2TUF7Q_kgQFEJ6v7K6f04sKR7wlTSj6hAOfkyEM6lyjeDVQLTOx6waBwqhpyaGgASIx6N8Z9Hti3PbnQlVschx6HTW7p2XeTfvTJKbIlH7JcknY1D3Go0m252rTQV5FgesGXaRDzFPBQSAQF8PyaqjsKq9D_HVu5TXEVaMP7VP1qQo5k3wxBk4iA"/>
</div>
<div className="md:col-span-4 md:col-start-9 reveal">
<span className="font-label-md text-label-md text-[#ffdcbe] uppercase tracking-widest mb-4 block">03 / Hospitality</span>
<h3 className="font-headline-xl text-headline-xl mb-6">The Art of Arrival.</h3>
<p className="font-body-lg text-body-lg text-white/80 mb-8">Creating memorable brand experiences through theatrical yet balanced lighting for the world's finest hotels.</p>
<button className="border-b-2 border-white pb-1 font-label-md text-label-md uppercase hover:text-secondary hover:border-secondary transition-colors">Hospitality Portfolio</button>
</div>
</div>
</div>
</section>
{/*  Featured Project  */}
<section className="relative z-10 py-section-gap text-white">
<div className="max-w-[1440px] mx-auto px-grid-margin">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal">
<div className="max-w-2xl">
<span className="font-label-md text-label-md text-[#ffdcbe] uppercase tracking-widest mb-4 block">Case Study</span>
<h2 className="font-display-lg text-headline-xl leading-tight">The Lumina Pavilion: <br/>Synchronized Light &amp; Form.</h2>
</div>
<div className="md:w-1/3">
<p className="font-body-md text-white/80 mb-6">A deep dive into the engineering behind 4,000 custom LED nodes integrated into a dynamic responsive facade.</p>
<button className="bg-white text-primary px-10 py-4 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-[#ffdcbe] transition-all duration-300">View Full Project</button>
</div>
</div>
<div className="relative w-full aspect-video rounded-lg overflow-hidden reveal shadow-[0_0_50px_rgba(255,255,255,0.6)]">
<img className="w-full h-full object-cover" data-alt="A futuristic glass and steel pavilion at night, glowing with a complex pattern of white and cyan lights that seem to move across its surface. The structure is set against a dark urban backdrop, making the light installation the focal point of the environment. Reflections on the surrounding water add a layer of symmetry and magic to the architectural scene." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN88FKC0XDDBlv_3JaqbLPfDdgY0HLy32iXQTpOqshfopGNaZa-6lrn__v0Eob3USNz9fuS9lWaqdAM1ZmZUZ93_9GGEx6JELJZyq-LzsPBM4zqPyvuKCX10YkQqy0kKwEF8ctyrHLPtsxW2aoGq5aml7XeZMtDA8op5oXAE9OhHDbMQW1H3MvxucSyIm3WBEAX9yyA0cvIzPmXVYFmhEdxylcAbqiXcK_lat0L-kGyY_TblI3VSdQkI9ecpa6d9tgP8ItFAvhsSU"/>
</div>
</div>
</section>
{/*  About Preview  */}
<section className="bg-primary-container text-on-primary py-section-gap relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">

</div>
<div className="max-w-[1440px] mx-auto px-grid-margin relative z-10">
<div className="grid md:grid-cols-12 gap-grid-gutter">
<div className="md:col-span-8 reveal">
<h2 className="font-headline-xl text-headline-xl mb-12 leading-tight">ENGINEERING LIGHT.<br/>CRAFTING ATMOSPHERE.</h2>
<p className="font-headline-md text-headline-md mb-12 text-on-primary-container">We believe lighting is the fourth dimension of architecture. Without it, form is invisible. With it, space becomes transformative.</p>
</div>
<div className="md:col-span-4 md:col-start-9 reveal flex flex-col justify-end">
<p className="font-body-lg text-body-lg mb-8 opacity-80">Our team of lighting designers, engineers, and architectural specialists work at the intersection of technical precision and artistic vision.</p>
<button className="bg-surface text-primary px-10 py-4 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed transition-all w-fit">About Colortechnik</button>
</div>
</div>
</div>
</section>
{/*  Gallery Preview  */}
<section className="relative z-10 py-section-gap text-white">
<div className="max-w-[1440px] mx-auto px-grid-margin">
<div className="text-center mb-16 reveal">
<span className="font-label-md text-label-md text-[#ffdcbe] uppercase tracking-widest mb-4 block">Visual Journal</span>
<h2 className="font-headline-xl text-headline-xl">Project Anthology</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-12 gap-grid-gutter auto-rows-[200px] md:auto-rows-[300px]">
{/*  Large  */}
<div className="col-span-2 md:col-span-8 md:row-span-2 reveal group overflow-hidden rounded-lg relative shadow-[0_0_50px_rgba(255,255,255,0.6)]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close-up detail of architectural lighting washing a textured concrete wall, creating deep shadows and high-contrast highlights. The light is a crisp neutral white, emphasizing the brutalist material's honesty. The composition is artistic and minimalist." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtrb_3mVrTC1LmWxEbZ_CsT2LHpYWUhxlmPta9O9iUKBCnLRkpMIu3BHFtMrhtd1c2YOzUjpZrS779Nb1_buAKdK_nMYSRfHdToRZL4dbQlheaHRPt_9dVtCFithg1InZPyV-Xy6I_aH7Pn8ObaFEuHpPPY7MKBH8bpFN3SRMHbhuNTCmpNriyCbpgB8qfGisT9aWvl3ynYHJutNGyxFRF-GR4-3yolRNt-5-1SBdTWij80GK14awWro-igQp3G0B-vtWKFZ61ZWk"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
<span className="text-white font-label-md text-label-md uppercase">Materiality &amp; Radiance</span>
</div>
</div>
{/*  Medium 1  */}
<div className="col-span-1 md:col-span-4 md:row-span-1 reveal group overflow-hidden rounded-lg relative shadow-[0_0_50px_rgba(255,255,255,0.6)]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="An upscale restaurant terrace at sunset with subtle floor-recessed accent lights and hanging glowing orbs. The lighting creates a romantic, high-end atmosphere that blends perfectly with the natural fading light of the sky." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwR6e6X2gg1Aent-qhzZkw-2LgvLC9EfGev_0T9eNQddll-ueuTLVer37M6RKSbfePy2p8rmMayDcnY1wDOMoujqLizj5Qt5EGZ3gVC115SESn2FDLVh1SuJZhUPMycPRmMaNseLhnGZejuHOmPz9vQUTYnKIEpA4R5NARaZfcI_lFB1zWORQwLAbEkvFl19NzhWp4gILPOmCBay2qG4OlpUW7OxgD6tmqm-jyiLbEHrutghBjMLeP0__Ko8DIORaYbbc53TBdCHg"/>
</div>
{/*  Medium 2  */}
<div className="col-span-1 md:col-span-4 md:row-span-1 reveal group overflow-hidden rounded-lg relative shadow-[0_0_50px_rgba(255,255,255,0.6)]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A minimalist interior corridor featuring a rhythmic series of vertical light strips that create a sense of movement and direction. The architecture is clean and monochromatic, allowing the light to define the space's personality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7a_x0C1VYIL6A8zvWfW1a1fNNiomhPRLb1IepLe83yYC0ISK9JKoMkB-an1zYPTWGAtW9fHvFH3Ihd2G6Bhla1vkWylU7LJUF3BIWedLmSTSPT9Cdp-EYbBvRK144uRJTyntPRfXNFOEM1VXsl185VLPxm_Y9BO89RIZB11DC9JHf1hytOARehCIs2YZQAd6sAkyYaJea_332UHTUjjbvr1WDFZHetR9nsWXfbDDH4nk5VEzHpGSarvvuYPU0kJBV2WAJmn2oY8"/>
</div>
{/*  Small 1  */}
<div className="col-span-1 md:col-span-3 reveal group overflow-hidden rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.6)]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Detail of a modern task light in a designer home office. The light pool is sharp and focused on a set of architectural blueprints, highlighting the precision and intentionality of professional lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABLe6D_DXvMY_7SSXvLMqlaIqS37XhAssEOmSpTtDYIvGknhV5NIStlvKNH1kjs9yFjW5-7qkOCzwnjBMhgPLL6wSytF-FzI-PXgXs1rXWRiJHi4IH9Hk6LbaAZpOYQcGIjbxbRCbLy9oksUBNB4-eep8cGSWZ9VJdiQ9oGPXgqCLy_4OKrUpOfvMp8zJdTCiql4tg0hz2mVSXdWHAOm8jmn0fC3J61mkQoEQpxUVw3s4U13ARojSlrncohQt3VoEOP2yh-Dkn0yI"/>
</div>
{/*  Small 2  */}
<div className="col-span-1 md:col-span-6 reveal group overflow-hidden rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.6)]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Night view of a contemporary landscape project featuring illuminated trees and hidden path lighting. The light is soft and organic, enhancing the natural beauty of the garden without overwhelming it with glare." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_GlTmzYPQ_7H1Y1XOR_FBkkyTdipRB8CnAx2Wjp-0fwTWM-UdFWOl4w7Ua-8nc9Eip0OP8xs-x-sYyJoI-iQw_lfEfT0V_O45aKacJR0oBxy8WNWkQpyHLY1tVa-MM8lMJAMbVKSlYWz6vKr3GP2CWCzSiDr-Z8B-HG1-vmadPqfwl2o5PS4BiKxElrLSz_Q5G3S7rw63q7Bugwj9g-KdfwuPj1pggRSu_ZrW_NogKQOibj1fk8oW2Reeh92XUAkqKqFrYp5qyAM"/>
</div>
{/*  Small 3  */}
<div className="col-span-2 md:col-span-3 reveal group overflow-hidden rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.6)]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="An abstract shot of light refracting through a glass fixture, creating a spectrum of soft colors on a white wall. The image is ethereal and poetic, representing the artistic side of lighting design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFo29XZ--cqRQtNn5viIE7txXc-VNswzpBfDaUzUxMBv9gfRDVmk2lxVVMEcy7j4N1LOUQuBv3vjPrTXIEThu2ZF1Eazodq2sZomoh-24GOmzj3jtXYCZKBMRmq722uVmWe1RlHn-aufsnwA9sbcE03tY2eu5x8fYX2LvPbrhL_ekUfGTmg8pfi49WgHlr_ybxoHztF7FSvYFBM2GR7gcc8WFuSzZEQlmgUoLRp081IQuqRNqSvvvKyP1ZRUy7SQsmjE2c8VC5_5o"/>
</div>
</div>
</div>
</section>
{/*  Testimonials  */}
<section className="relative z-10 py-section-gap text-white">
<div className="max-w-[1440px] mx-auto px-grid-margin">
<div className="grid md:grid-cols-2 gap-section-gap">
<div className="reveal">
<span className="material-symbols-outlined text-[#ffdcbe] text-6xl mb-8">format_quote</span>
<h3 className="font-headline-xl text-headline-xl mb-12 italic font-normal">"Colortechnik doesn't just supply fixtures; they provide an architectural language that completes our vision. Their technical rigor is unmatched."</h3>
<div className="flex items-center gap-4">
<div className="w-12 h-px bg-[#ffdcbe]"></div>
<div>
<p className="font-subheading-lg uppercase">Marcus Vane</p>
<p className="font-label-md text-label-md text-white/80">Principal Architect, Studio Vane</p>
</div>
</div>
</div>
<div className="reveal" style={{"transitionDelay": "200ms", }}>
<span className="material-symbols-outlined text-[#ffdcbe] text-6xl mb-8">format_quote</span>
<h3 className="font-headline-xl text-headline-xl mb-12 italic font-normal">"The precision of their lighting layouts has redefined how our clients experience their space. Every lumen is intentional."</h3>
<div className="flex items-center gap-4">
<div className="w-12 h-px bg-[#ffdcbe]"></div>
<div>
<p className="font-subheading-lg uppercase">Elena Rossi</p>
<p className="font-label-md text-label-md text-white/80">Creative Director, Aura Design</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Final CTA  */}
<section className="bg-[#011425] text-surface py-section-gap text-center relative overflow-hidden">
<div className="max-w-4xl mx-auto px-grid-margin relative z-10 reveal">
<h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-12">LET'S CREATE EXTRAORDINARY SPACES THROUGH LIGHT.</h2>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
<button className="bg-secondary-fixed text-primary px-12 py-5 rounded-full font-label-md text-label-md uppercase tracking-widest hover:bg-secondary transition-all w-full md:w-auto">Start a Conversation</button>
<button className="border-2 border-white/20 text-white px-12 py-5 rounded-full font-label-md text-label-md uppercase tracking-widest hover:bg-white/10 transition-all w-full md:w-auto">View Our Process</button>
</div>
</div>
{/*  Abstract light graphic  */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-1/2 bg-gradient-to-t from-primary/30 to-transparent blur-[120px] pointer-events-none"></div>
</section>
{/*  Footer  */}



    </main>
  );
}