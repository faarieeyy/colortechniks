"use client";

import { useEffect, useState } from "react";
import "../../components/AssociatedBrands.css";

const clients = [
  { name: "MAIA", src: "/client-maia.webp" },
  { name: "BADMAASH", src: "/client-badmaash.webp" },
  { name: "MODERN SPAACES", src: "/client-modern-spaaces.webp" },
  { name: "SAI LAKSHMI", src: "/client-sai-lakshmi.webp" },
  { name: "TAJGVK", src: "/client-tajgvk.webp" },
  { name: "LA PALMERA", src: "/client-la-palmera.webp" },
  { name: "Goyal & Co.", src: "/client-goyal.webp" },
  { name: "Nambiar Builders", src: "/client-nambiar.webp" },
  { name: "Infosys", src: "/client-infosys.webp" },
  { name: "BRIGADE", src: "/client-brigade.webp" },
  { name: "VRO HOSPITALITY", src: "/client-vro.webp" },
  { name: "And Many More", src: "/client-and-many-more.webp" }
];

const clientsRow1 = clients.slice(0, 6);
const clientsRow2 = clients.slice(6, 12);
const seamlessRow1 = [...clientsRow1, ...clientsRow1, ...clientsRow1, ...clientsRow1];
const seamlessRow2 = [...clientsRow2, ...clientsRow2, ...clientsRow2, ...clientsRow2];

const renderClientCard = (client: { name: string; src?: string }, i: number, prefix: string) => (
  <div
    key={`${prefix}-${i}`}
    className="brand-card"
  >
    {client.src ? (
      <img src={client.src} alt={client.name} className="h-full w-full object-contain p-3" />
    ) : (
      <span className="text-center font-bold text-[#1c1c19] px-4 font-['Syne'] tracking-tight text-sm md:text-lg">{client.name}</span>
    )}
  </div>
);

export default function Page() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Residential", "Commercial", "Hospitality", "Industrial", "Landscape", "Facade", "Smart Lighting", "Custom Lighting"];

  useEffect(() => {
    // Re-trigger animations when filter changes
    const reveals = document.querySelectorAll('.reveal, .reveal-up, .editorial-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(r => {
      r.classList.remove('active', 'visible');
      observer.observe(r);
    });

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
  }, [filter]);

  return (
    <main>
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[#111827]">
        <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none" style={{ backgroundImage: "url('/scribbles-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 15% 30%, rgba(99, 130, 168, 0.3), transparent 35%), radial-gradient(circle at 85% 70%, rgba(153, 180, 207, 0.2), transparent 35%)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/40 to-[#111827]/90 pointer-events-none"></div>
      </div>

      {/*  TopNavBar  */}

      <main>
        {/*  Hero Section  */}
        <section className="relative h-[921px] flex items-center justify-center overflow-hidden pt-24 bg-black">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover parallax-bg" alt="Projects Hero Background" src="/projects-hero-bg.webp" fetchPriority="high" decoding="sync" />
          </div>
          <div className="relative z-10 px-grid-margin text-center max-w-5xl" style={{ textShadow: "0 0 40px rgba(0,0,0,0.9), 0 10px 20px rgba(0,0,0,0.8)" }}>
            <span className="inline-block font-label-md text-label-md text-secondary-fixed mb-6 tracking-widest uppercase reveal-up">Curated Portfolio</span>
            <h1 className="font-display-lg text-display-lg text-surface-container-lowest leading-none tracking-tight reveal-up text-white">PROJECTS THAT <br /><span className="italic font-light">TRANSFORM</span> SPACES.</h1>
            <p className="mt-8 font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto reveal-up text-white">Where architectural luminescence meets structural precision. Explore our latest global achievements in high-end design.</p>
          </div>
        </section>

        {/*  Project Grid (Asymmetric Editorial Layout)  */}
        <section className="py-section-gap px-grid-margin max-w-[1440px] mx-auto bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter transition-all duration-500">

            {/*  Residential  */}
            {(filter === "All" || filter === "Residential") && (
              <div className="md:col-span-8 group relative overflow-hidden project-card reveal-up h-[600px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="..." src="/project-new-1.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Residential Projects</h3>
                  <p className="font-body-md text-surface-variant max-w-xl">Beautiful lighting solutions for villas, apartments, luxury homes, penthouses, and private residences designed to create warm, elegant, and comfortable living spaces.</p>
                </div>
              </div>
            )}

            {/*  Commercial  */}
            {(filter === "All" || filter === "Commercial") && (
              <div className="md:col-span-4 group relative overflow-hidden project-card reveal-up h-[600px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="..." src="/project-new-2.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Commercial Projects</h3>
                  <p className="font-body-md text-surface-variant">Complete lighting solutions for offices, corporate buildings, retail stores, shopping malls, showrooms, and business environments that improve productivity and customer experience.</p>
                </div>
              </div>
            )}

            {/*  Hospitality  */}
            {(filter === "All" || filter === "Hospitality") && (
              <div className="md:col-span-5 group relative overflow-hidden project-card reveal-up h-[400px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="..." src="/project-new-3.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Hospitality Projects</h3>
                  <p className="font-body-md text-surface-variant">Premium lighting for hotels, resorts, restaurants, cafés, lounges, and banquet spaces that deliver memorable guest experiences through exceptional ambience.</p>
                </div>
              </div>
            )}

            {/*  Industrial  */}
            {(filter === "All" || filter === "Industrial") && (
              <div className="md:col-span-7 group relative overflow-hidden project-card reveal-up h-[400px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="..." src="/project-new-4.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Industrial Projects</h3>
                  <p className="font-body-md text-surface-variant">High-performance lighting systems for factories, warehouses, manufacturing plants, logistics centers, and industrial facilities focused on safety and operational efficiency.</p>
                </div>
              </div>
            )}

            {/*  Landscape  */}
            {(filter === "All" || filter === "Landscape") && (
              <div className="md:col-span-6 group relative overflow-hidden project-card reveal-up h-[500px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Landscape Lighting" src="/project-new-5.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Landscape Projects</h3>
                  <p className="font-body-md text-surface-variant">Outdoor lighting for gardens, pathways, parks, terraces, swimming pools, and open spaces that enhance beauty while improving visibility and security.</p>
                </div>
              </div>
            )}

            {/*  Facade  */}
            {(filter === "All" || filter === "Facade") && (
              <div className="md:col-span-6 group relative overflow-hidden project-card reveal-up h-[500px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="..." src="/project-new-6.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Facade Projects</h3>
                  <p className="font-body-md text-surface-variant">Architectural lighting for building exteriors, heritage structures, commercial facades, towers, and landmarks that create stunning night-time visual appeal.</p>
                </div>
              </div>
            )}

            {/*  Smart Lighting  */}
            {(filter === "All" || filter === "Smart Lighting") && (
              <div className="md:col-span-5 group relative overflow-hidden project-card reveal-up h-[400px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="..." src="/project-new-7.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Smart Lighting Projects</h3>
                  <p className="font-body-md text-surface-variant">Automation-based lighting with intelligent controls, scheduling, dimming, scene settings, sensors, and energy-efficient management systems.</p>
                </div>
              </div>
            )}

            {/*  Custom Lighting  */}
            {(filter === "All" || filter === "Custom Lighting") && (
              <div className="md:col-span-7 group relative overflow-hidden project-card reveal-up h-[400px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="..." src="/project-new-8.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Custom Lighting Projects</h3>
                  <p className="font-body-md text-surface-variant max-w-xl">Specialized lighting concepts designed specifically for each client’s architecture, interior design, and functional requirements.</p>
                </div>
              </div>
            )}

            {/*  Heritage Projects  */}
            {(filter === "All" || filter === "Heritage Projects") && (
              <div className="md:col-span-6 group relative overflow-hidden project-card reveal-up h-[500px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="..." src="/project-new-9.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Heritage Projects</h3>
                  <p className="font-body-md text-surface-variant max-w-xl">Preserving history through thoughtful and delicate illumination of heritage monuments and structures.</p>
                </div>
              </div>
            )}

            {/*  Architectural Projects  */}
            {(filter === "All" || filter === "Architectural Projects") && (
              <div className="md:col-span-6 group relative overflow-hidden project-card reveal-up h-[500px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="..." src="/project-new-10.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Architectural Projects</h3>
                  <p className="font-body-md text-surface-variant max-w-xl">Highlighting the unique forms and lines of modern and classic architecture with tailored lighting design.</p>
                </div>
              </div>
            )}

            {/*  Added Project 1 - Hospitality  */}
            {(filter === "All" || filter === "Hospitality") && (
              <div className="md:col-span-6 group relative overflow-hidden project-card reveal-up h-[400px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Lounge Bar" src="/added-project-1.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Lounge Bar</h3>
                  <p className="font-body-md text-surface-variant max-w-xl">Exclusive hospitality lighting.</p>
                </div>
              </div>
            )}

            {/*  Added Project 2 - Residential  */}
            {(filter === "All" || filter === "Residential") && (
              <div className="md:col-span-6 group relative overflow-hidden project-card reveal-up h-[400px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Modern Living" src="/added-project-2.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Modern Living</h3>
                  <p className="font-body-md text-surface-variant max-w-xl">Elegant residential illumination.</p>
                </div>
              </div>
            )}

            {/*  Added Project 3 - Custom Lighting  */}
            {(filter === "All" || filter === "Custom Lighting") && (
              <div className="md:col-span-12 group relative overflow-hidden project-card reveal-up h-[400px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Dynamic Ceiling" src="/added-project-3.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Dynamic Ceiling</h3>
                  <p className="font-body-md text-surface-variant max-w-xl">Custom smart lighting installation.</p>
                </div>
              </div>
            )}

            {/*  Added Project 4 - Commercial  */}
            {(filter === "All" || filter === "Commercial") && (
              <div className="md:col-span-6 group relative overflow-hidden project-card reveal-up h-[500px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Corporate Lobby" src="/added-project-4.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Corporate Lobby</h3>
                  <p className="font-body-md text-surface-variant max-w-xl">Inviting commercial spaces.</p>
                </div>
              </div>
            )}

            {/*  Added Project 5 - Commercial  */}
            {(filter === "All" || filter === "Commercial") && (
              <div className="md:col-span-6 group relative overflow-hidden project-card reveal-up h-[500px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Corporate Lobby" src="/added-project-5.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Corporate Lobby</h3>
                  <p className="font-body-md text-surface-variant max-w-xl">Expansive architectural lighting.</p>
                </div>
              </div>
            )}

            {/*  Added Project 6 - Facade  */}
            {(filter === "All" || filter === "Facade") && (
              <div className="md:col-span-6 group relative overflow-hidden project-card reveal-up h-[500px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Exterior Facade" src="/added-project-6.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Exterior Facade</h3>
                  <p className="font-body-md text-surface-variant max-w-xl">Stunning architectural lighting for building exteriors.</p>
                </div>
              </div>
            )}

            {/*  Added Project 7 - Commercial  */}
            {(filter === "All" || filter === "Commercial" || filter === "Residential") && (
              <div className="md:col-span-6 group relative overflow-hidden project-card reveal-up h-[500px] rounded-lg">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Executive Suite" src="/added-project-7.webp" />
                <div className="project-overlay absolute inset-0 bg-primary/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Executive Suite</h3>
                  <p className="font-body-md text-surface-variant max-w-xl">Modern lighting design for luxury meeting spaces.</p>
                </div>
              </div>
            )}

          </div>
        </section>

        {/*  Client Logos Section  */}
        <section className="py-20 bg-[#F4F1EC] relative overflow-hidden text-center z-10 border-t border-black/5">
          <div className="absolute inset-0 opacity-20 mix-blend-multiply filter invert pointer-events-none" style={{ backgroundImage: "url('/scribbles-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="max-w-[1440px] mx-auto px-grid-margin mb-12 relative z-10">
            <span className="font-label-lg text-lg md:text-xl text-primary/60 uppercase tracking-widest mb-4 block font-semibold">
              Trusted By
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary mb-6">
              OUR CLIENTS
            </h2>
          </div>

          <div className="flex flex-col gap-6 w-full relative z-10 py-8">
            <div className="marquee-container">
              <div className="marquee-content right">
                {seamlessRow1.map((client, i) => renderClientCard(client, i, 'r1'))}
              </div>
              <div className="marquee-content right" aria-hidden="true">
                {seamlessRow1.map((client, i) => renderClientCard(client, i, 'r1b'))}
              </div>
            </div>

            <div className="marquee-container">
              <div className="marquee-content left">
                {seamlessRow2.map((client, i) => renderClientCard(client, i, 'r2'))}
              </div>
              <div className="marquee-content left" aria-hidden="true">
                {seamlessRow2.map((client, i) => renderClientCard(client, i, 'r2b'))}
              </div>
            </div>
          </div>
        </section>


      </main>
      {/*  Footer  */}



    </main>
  );
}