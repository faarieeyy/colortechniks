"use client";

import { useEffect, useState } from "react";


export default function Page() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Residential", "Commercial", "Hospitality", "Landscape"];

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
      
{/*  TopNavBar  */}

<main>
{/*  Hero Section  */}
<section className="relative h-[921px] flex items-center justify-center overflow-hidden pt-24">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover parallax-bg" alt="Projects Hero Background" src="/projects-hero-bg.jpg" fetchPriority="high" decoding="async" />
</div>
<div className="relative z-10 px-grid-margin text-center max-w-5xl" style={{ textShadow: "0 0 40px rgba(0,0,0,0.9), 0 10px 20px rgba(0,0,0,0.8)" }}>
<span className="inline-block font-label-md text-label-md text-secondary-fixed mb-6 tracking-widest uppercase reveal-up">Curated Portfolio</span>
<h1 className="font-display-lg text-display-lg text-surface-container-lowest leading-none tracking-tight reveal-up text-white">PROJECTS THAT <br/><span className="italic font-light">TRANSFORM</span> SPACES.</h1>
<p className="mt-8 font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto reveal-up text-white">Where architectural luminescence meets structural precision. Explore our latest global achievements in high-end design.</p>
</div>
</section>
{/*  Filter Bar  */}
<section className="bg-surface-container-low py-12 px-grid-margin sticky top-[80px] z-40">
<div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-6">
<div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-2">
  {filters.map((f) => (
    <button 
      key={f}
      onClick={() => setFilter(f)}
      className={`font-label-md text-label-md px-6 py-2 rounded-full transition-all duration-300 ${filter === f ? 'bg-primary text-on-primary' : 'border border-outline/20 text-on-surface-variant hover:border-secondary'}`}
    >
      {f}
    </button>
  ))}
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="font-label-md text-label-md">Grid View</span>
<span className="material-symbols-outlined text-[20px]">grid_view</span>
</div>
</div>
</section>
{/*  Project Grid (Asymmetric Editorial Layout)  */}
<section className="py-section-gap px-grid-margin max-w-[1440px] mx-auto bg-surface">
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter transition-all duration-500">

{/*  Large Feature 1  */}
{(filter === "All" || filter === "Residential") && (
<div className="md:col-span-8 group relative overflow-hidden project-card reveal-up h-[600px] rounded-lg">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A luxury contemporary living room with floor-to-ceiling windows overlooking a serene landscape. The interior features warm architectural beige stone walls, minimalist furniture in charcoal velvet, and a soft glow from recessed linear lighting. The photo has a high-end editorial feel with perfect balance and airy composition, highlighting textures and volume." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCqQX643pERWRUc7gvhIKse-EEfxJsVPUCWAglHZ2jaD13SgnGYNaJb4vlc5HEbaaS3RvtlNlorT-lNfYwITlxD3u5zwvJCJKbr2U9rwLlLa7ToufRPnRZlR2OxuW1AuE-UR-ZrUGgl-tBwoMmL1_q_zd29iQRUXWVSeW3az93CwMxH5FVHJRAdu8iZRRv8lEiu3lPuGWkF1UVxO0hIkvYk8_vFDlmzVeCOMDXXndtt9SuJ_8XQ4Wu8h-MBEZENVEv8yvv2A5nDeY"/>
<div className="project-overlay absolute inset-0 bg-primary/40 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
<span className="font-label-md text-label-md text-secondary-fixed mb-2">Residential</span>
<h3 className="font-headline-md text-headline-md text-white">THE GLASS ATRIUM</h3>
<p className="font-body-md text-surface-variant">Zurich, Switzerland</p>
</div>
</div>
)}

{/*  Small Vertical 1  */}
{(filter === "All" || filter === "Residential") && (
<div className="md:col-span-4 group relative overflow-hidden project-card reveal-up h-[600px] rounded-lg">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A close-up architectural shot of a spiraling staircase made of polished concrete and warm timber accents. The lighting is focused on the curvature, creating soft shadows that define the structural elegance. The palette consists of neutral greys and sandy beiges, reflecting a modern architectural minimalism in a luxury residence context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhvYnf3lp8Lz1XnEH84MVZNl_AUgPHdRVR8YmeZm4DBrcRu1jVvZJ-s0Q0bWdjKxYV3i5D6nO38-nAwjwRS-yXW13wL8S1r0HgqjrMcrwtrnFTXmbzBYTr9yqHpyZhq4qCnqJyFIcdwjvSHckWTLl1yjaPtnPGvdqKZn-yvAplPHVz9WNO0kLd9GNLliNelUCQp7cV0grzjtHajzqEIUZU72ZvGemzQGLOzAgcDjdoIHIS7Bz9EAkJOCEpaQQCd59c0aWrZlLEBC4"/>
<div className="project-overlay absolute inset-0 bg-primary/40 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-8">
<span className="font-label-md text-label-md text-secondary-fixed mb-2">Residential</span>
<h3 className="font-headline-md text-headline-md text-white">SPIRAL VILLA</h3>
<p className="font-body-md text-surface-variant">Aspen, Colorado</p>
</div>
</div>
)}

{/*  Mid Landscape 1  */}
{(filter === "All" || filter === "Commercial") && (
<div className="md:col-span-5 group relative overflow-hidden project-card reveal-up h-[400px] rounded-lg">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="An expansive modern office lobby featuring a bento-style architectural grid on the ceiling with integrated luminescent panels. The floor is a reflective stone surface in architectural beige. The space is vast and airy with a professional, high-end commercial aesthetic. Subtle reflections and soft natural light streaming from unseen windows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj1TpgoovqUVxkyYlP4obqF4GAim7m4TiqMco3BMDpzXt3NRVQyD8vU4jd9UX5oEk1EJZjsZFA7MGRkDdWmMFfFZp4IazpnRV5irJYPfxzQ4N3Xd1L3UhnXk2oTyZgHTM4ISwcmTknZ-EyohaOTfTRiu7fg7xtYDqmsSC4QPTcZMNW-Wjz5dhP196tynyiHFUJu7QTfMNf64f8Qjd-fe2HpuCmH-1xlSdL4lMR3u9dcwkKHT9Ww5XLjcbow7EuFWMqKygbw9Y2EfI"/>
<div className="project-overlay absolute inset-0 bg-primary/40 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-8">
<span className="font-label-md text-label-md text-secondary-fixed mb-2">Commercial</span>
<h3 className="font-headline-md text-headline-md text-white">NEO-PLAZA HEADQUARTERS</h3>
<p className="font-body-md text-surface-variant">London, UK</p>
</div>
</div>
)}

{/*  Mid Detail 1  */}
{(filter === "All" || filter === "Hospitality") && (
<div className="md:col-span-7 group relative overflow-hidden project-card reveal-up h-[400px] rounded-lg">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A minimalist pool house at night, glowing with warm internal lights that contrast beautifully with the deep blue architectural teal of the swimming pool. The surrounding landscape is integrated with subtle stone paths and architectural lighting. The mood is calm, luxurious, and peaceful, showcasing a high-end landscape and hospitality project." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3regPGhedE43s0RLfsZXB1ivUQnhESiaLZoAcqmHMXhS6oGRQMD4TLTWx-8CU8T1YfUMPYsKAHqqszGvRPwLhVIiRZ87C0ywP3eqEOyBRuSJIQ_7pSxOdEx4E8wRlqH2tJE0yfzdiua5WnTFGhHzVIqrOkgZ88xqey-oYJKe6rRgfY4rTbmB8ZfUFDS_cg44D4vLWrHvhmo1BSqD-LCrRYCSUTlXg45SBLxrj5qJZWVvqEjXk5qpAEv9_N7W5Ir71chpDnoq958U"/>
<div className="project-overlay absolute inset-0 bg-primary/40 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
<span className="font-label-md text-label-md text-secondary-fixed mb-2">Hospitality</span>
<h3 className="font-headline-md text-headline-md text-white">CYAN COVE RESORT</h3>
<p className="font-body-md text-surface-variant">Santorini, Greece</p>
</div>
</div>
)}

{/*  Landscape Addition  */}
{(filter === "All" || filter === "Landscape") && (
<div className="md:col-span-12 group relative overflow-hidden project-card reveal-up h-[400px] rounded-lg">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Landscape Lighting" src="/landscape-project.jpg"/>
<div className="project-overlay absolute inset-0 bg-primary/40 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12">
<span className="font-label-md text-label-md text-secondary-fixed mb-2">Landscape</span>
<h3 className="font-headline-md text-headline-md text-white">ZENITH GARDENS</h3>
<p className="font-body-md text-surface-variant">Kyoto, Japan</p>
</div>
</div>
)}

{/*  Massive Centerpiece  */}
{(filter === "All" || filter === "Commercial") && (
<div className="md:col-span-12 group relative overflow-hidden project-card reveal-up h-[700px] rounded-lg">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A grand scale architectural interior featuring massive concrete pillars and a sweeping curved glass roof. The lighting is dramatic, with sunbeams cutting through the space onto a pristine stone floor. The style is ultra-modern and structural, using a palette of deep navy shadows and warm ivory highlights to create a sense of awe and monumentality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHu_FaJXrQ44AB-nCB78F73HrLaPE-VoAF9ff07Bv299XU7eCgKlCM3c8UMIbmDsSfMfkWHB-aoxNBHFUpRXAb_OeJ3vwTFwqSAln1pEV4zsx0lzNjxpZRdLmkM_UxVdPh73MvE_-Qb2FOjHHAkWdrDAWZKLjjCeVidGqurOame6LLLZy0rDu7PGTQusff4HR_kzdp9wjAEwfAylXCkCsr7S8BPBurf1tHN3v8n2FkekgzLf_3qvLM5WNIhfN_AGf9rABHh0d3eW4"/>
<div className="project-overlay absolute inset-0 bg-primary/40 opacity-0 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-12">
<span className="font-label-md text-label-md text-secondary-fixed mb-4 tracking-widest uppercase">Project of the Year</span>
<h3 className="font-display-lg text-headline-xl text-white">THE MONOLITH MUSEUM</h3>
<p className="font-body-lg text-surface-variant mt-4">Abu Dhabi, UAE</p>
<button className="mt-8 border-b-2 border-secondary-fixed text-white font-label-md text-label-md py-2 px-4 hover:bg-secondary-fixed hover:text-primary transition-all">VIEW CASE STUDY</button>
</div>
</div>
)}

</div>
</section>
{/*  CTA Section  */}
<section className="bg-primary py-section-gap px-grid-margin relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10">

</div>
<div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
<div>
<h2 className="font-display-lg text-display-lg-mobile md:text-headline-xl text-surface-container-lowest leading-tight">LET&apos;S BUILD <br/>SOMETHING <br/><span className="italic font-light">EXTRAORDINARY.</span></h2>
</div>
<div className="flex flex-col gap-8">
<p className="font-body-lg text-body-lg text-on-primary-container">Our team of architectural luminary experts is ready to transform your vision into a structural reality that speaks volumes. Let&apos;s discuss your next landmark project.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-full font-subheading-lg text-subheading-lg hover:bg-secondary-fixed transition-colors">Start Project</button>
<button className="border border-outline-variant text-on-primary px-10 py-5 rounded-full font-subheading-lg text-subheading-lg hover:bg-primary-container transition-colors">Get in Touch</button>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}



    </main>
  );
}