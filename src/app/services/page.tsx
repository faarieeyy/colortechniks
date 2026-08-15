"use client";

import { useEffect, useState } from "react";


export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[#111827]">
        <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none" style={{ backgroundImage: "url('/scribbles-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 15% 30%, rgba(99, 130, 168, 0.3), transparent 35%), radial-gradient(circle at 85% 70%, rgba(153, 180, 207, 0.2), transparent 35%)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/40 to-[#111827]/90 pointer-events-none"></div>
      </div>
      {/*  Top Navigation  */}

      {/*  Hero Section  */}
      <header className="relative h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img alt="Services Hero Background" className="w-full h-full object-cover parallax-bg" src="/services-hero-new-bg.webp" fetchPriority="high" decoding="async" />
        </div>
        <div className="relative w-full max-w-[1440px] mx-auto px-grid-margin z-10 -mt-24 md:-mt-32">
          <h1 className="text-white leading-tight max-w-4xl mx-auto text-center editorial-reveal" id="hero-title" style={{ textShadow: "0 0 40px rgba(0,0,0,0.9), 0 10px 20px rgba(0,0,0,0.8)" }}>
            <span className="block font-display-lg text-display-lg-mobile md:text-display-lg mb-4">LIGHTING SOLUTIONS</span>
            <span className="block font-headline-md text-headline-md font-normal italic opacity-90">FOR EVERY ENVIRONMENT.</span>
          </h1>
        </div>
      </header>
      {/*  Main Content Area  */}
      {/*  Main Content Area  */}
      <main className="py-section-gap max-w-[1600px] mx-auto px-grid-margin">
        {/* Slanted Gallery Layout */}
        <div className="flex flex-col gap-8 md:gap-16">
          {/* Single Row of 5 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 h-auto md:h-[550px]">
            {[
              {
                id: '01',
                title: 'Residential Lighting',
                desc: 'Warm, elegant lighting solutions that bring comfort, style, and character to every home.',
                img: '/home-residential-bg.webp'
              },
              {
                id: '02',
                title: 'Commercial Lighting',
                desc: 'Smart and efficient lighting that enhances productivity, brand presence, and customer experiences.',
                img: '/home-commercial-new-bg.webp'
              },
              {
                id: '03',
                title: 'Industrial Lighting',
                desc: 'Robust and high-performance lighting for maximum safety, visibility, and operational efficiency.',
                img: '/home-industrial-crane-generated.webp'
              },
              {
                id: '04',
                title: 'Landscape Lighting',
                desc: 'Creatively designed outdoor lighting that highlights nature, enhances beauty, and ensures safety.',
                img: '/home-landscape-new-bg.webp'
              },
              {
                id: '05',
                title: 'Facade Lighting',
                desc: 'Accentuate architecture with precision lighting that creates striking night-time impressions.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwmZ43xf4JA5Pc3UH5VH4J5lpjjsnOC8T_vi2ykzeRPS2ErTm67xfxauyqK1YZMeWrrUEjjdhKY7eFekcvTIIjutVKq78bNKwOjGVldY7bKRddDzB9uUOxeiUDSbdFuJZBjOXgHqMxu3p2vsuu-qHEDthBHjsJAjV6NSxNrluSDi564jbaCAB0Vxk4rWot4KnUY-FbYIPUAO7fMpJLtxP-z9xbXzckGcVJVEvVnuP4s75NbvATYGh5J3fxkhvWfYK3wegPQ0yF2tg'
              }
            ].map((srv, i) => (
              <div key={srv.id} className="relative h-[400px] md:h-full w-full flex flex-col group cursor-pointer">
                <div
                  className="absolute inset-0 z-0 overflow-hidden transition-transform duration-700 md:group-hover:scale-105"
                  style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0% 100%)' }}
                >
                  <img src={srv.img} alt={srv.title} className="w-full h-full object-cover transition-all duration-700" />
                  <div className="absolute inset-0 bg-[#0B3B4A] mix-blend-color opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/90 pointer-events-none"></div>
                </div>
                <div className={`relative z-10 w-[80%] px-6 transition-transform duration-500 md:group-hover:-translate-y-2 ${i % 2 === 0 ? 'mt-auto mb-8' : 'mt-8'}`}>
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-3 drop-shadow-md">{srv.title}</h3>
                  <p className="text-white/80 text-xs md:text-sm leading-relaxed drop-shadow-sm">{srv.desc}</p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span className="material-symbols-outlined text-white text-5xl opacity-80">visibility</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-24 pt-16 border-t border-white/10 relative z-10 max-w-[1440px] mx-auto px-grid-margin">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">Advanced Capabilities</h2>
            <p className="font-body-lg text-body-lg text-white/80 max-w-3xl mx-auto">
              Beyond standard offerings, we engineer custom lighting ecosystems, automation frameworks, and full-scale design installations tailored to your exact space.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Automation */}
            <div className="relative border border-white/10 rounded-lg flex flex-col overflow-hidden group cursor-pointer min-h-[350px] md:min-h-[400px]">
              <div className="absolute inset-0 z-0">
                <img src="/services-automation.webp" alt="Lighting Automation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/40 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-end relative z-10 h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-md">Lighting Automation</h3>
                  <p className="text-sm text-white/90 drop-shadow-sm">
                    Intelligent lighting control systems for convenience, energy savings, and seamless automation.
                  </p>
                </div>
              </div>
            </div>

            {/* Customized */}
            <div className="relative border border-white/10 rounded-lg flex flex-col overflow-hidden group cursor-pointer min-h-[350px] md:min-h-[400px]">
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Customized Solutions" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/50 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-end relative z-10 h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-md">Customized Solutions</h3>
                  <p className="text-sm text-white/90 mb-6 drop-shadow-sm">
                    Tailor-made lighting solutions crafted to meet your unique needs and specifications.
                  </p>
                </div>
                <ul className="space-y-3 text-xs md:text-sm font-bold tracking-wider text-white">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary-fixed text-base drop-shadow-md">check_circle</span> <span className="drop-shadow-md">TAILOR-MADE</span></li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary-fixed text-base drop-shadow-md">check_circle</span> <span className="drop-shadow-md">UNIQUE SPECS</span></li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary-fixed text-base drop-shadow-md">check_circle</span> <span className="drop-shadow-md">PRECISION</span></li>
                </ul>
              </div>
            </div>

            {/* Design */}
            <div className="relative border border-white/10 rounded-lg flex flex-col overflow-hidden group cursor-pointer min-h-[350px] md:min-h-[400px]">
              <div className="absolute inset-0 z-0">
                <img src="/services-design.webp" alt="Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/40 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-end relative z-10 h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-md">Design</h3>
                  <p className="text-sm text-white/90 drop-shadow-sm mb-6">
                    End-to-end lighting design and engineering crafted to perfectly fit your architectural vision.
                  </p>
                </div>
                <div>
                  <button onClick={() => setIsModalOpen(true)} className="px-6 py-2 md:px-8 md:py-3 bg-primary text-white rounded-full font-label-sm text-xs md:text-sm uppercase tracking-wider hover:bg-primary/90 transition-all shadow-lg">Start Project</button>
                </div>
              </div>
            </div>

            {/* Installation */}
            <div className="relative border border-white/10 rounded-lg flex flex-col overflow-hidden group cursor-pointer min-h-[350px] md:min-h-[400px]">
              <div className="absolute inset-0 z-0">
                <img src="/services-installation.webp" alt="Installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/40 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-end relative z-10 h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-md">Installation</h3>
                  <p className="text-sm text-white/90 drop-shadow-sm mb-6">
                    Flawless execution and installation ensuring your lighting performs exactly as envisioned.
                  </p>
                </div>
                <div>
                  <button onClick={() => setIsModalOpen(true)} className="px-6 py-2 md:px-8 md:py-3 bg-primary text-white rounded-full font-label-sm text-xs md:text-sm uppercase tracking-wider hover:bg-primary/90 transition-all shadow-lg">Start Project</button>
                </div>
              </div>
            </div>
          </div>
        </section>

{isModalOpen && (
  <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/60 backdrop-blur-sm">
    <div className="flex min-h-full items-center justify-center p-4 py-12">
      <div className="bg-surface p-8 md:p-12 rounded-lg architectural-shadow w-full max-w-3xl relative text-left">
      <button 
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 text-primary hover:text-secondary transition-colors"
      >
        <span className="material-symbols-outlined text-3xl">close</span>
      </button>
      
      <h2 className="font-headline-md text-primary mb-8 uppercase tracking-widest text-center">Start Your Project</h2>
      
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert('Request submitted successfully!'); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 text-left">
            <label className="font-label-md text-label-md text-primary tracking-widest uppercase">Full Name</label>
            <input className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3 font-body-md" placeholder="Johnathan Doe" type="text" required />
          </div>
          <div className="space-y-2 text-left">
            <label className="font-label-md text-label-md text-primary tracking-widest uppercase">Email Address</label>
            <input className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3 font-body-md" placeholder="john@studio.com" type="email" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 text-left">
            <label className="font-label-md text-label-md text-primary tracking-widest uppercase">Project Type</label>
            <select className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3 font-body-md">
              <option>Residential Lighting</option>
              <option>Commercial Lighting</option>
              <option>Industrial Lighting</option>
              <option>Landscape Lighting</option>
              <option>Facade Lighting</option>
            </select>
          </div>
          <div className="space-y-2 text-left">
            <label className="font-label-md text-label-md text-primary tracking-widest uppercase">Location</label>
            <input className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3 font-body-md" placeholder="City, Country" type="text" />
          </div>
        </div>
        <div className="space-y-2 text-left">
          <label className="font-label-md text-label-md text-primary tracking-widest uppercase">Your Vision</label>
          <textarea className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3 font-body-md" placeholder="Describe the scale and intent of your project..." rows={4} required></textarea>
        </div>
        <div className="pt-4">
          <button className="w-full bg-primary text-on-primary py-5 rounded-full font-label-md text-label-md tracking-[0.2em] uppercase hover:bg-secondary transition-all duration-500 shadow-lg flex items-center justify-center gap-4 group" type="submit">
            Submit Request
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </button>
        </div>
      </form>
    </div>
  </div>
  </div>
)}

      </main>
      {/*  Footer  */}



    </main>
  );
}