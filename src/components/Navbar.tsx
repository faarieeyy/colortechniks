"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const useDarkElements = scrolled;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
    <nav
      id="top-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md py-2 shadow-sm" : "bg-transparent py-6"
      } ${useDarkElements ? "text-on-surface" : "text-white"}`}
    >
      <div className="flex justify-between items-center px-grid-margin max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center z-50">
          {useDarkElements ? (
            <img
              src="/logo-transparent.webp"
              alt="Colortechnik Logo"
              className="w-16 md:w-20 h-auto object-contain transition-all duration-300"
            />
          ) : (
            <img
              src="/logo-white-text.webp"
              alt="Colortechnik Logo"
              className="w-16 md:w-20 h-auto object-contain transition-all duration-300"
            />
          )}
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-label-md text-label-md pb-1 transition-colors duration-300 ${
                pathname === link.href
                  ? (useDarkElements ? "text-primary border-b-2 border-primary" : "text-white border-b-2 border-white")
                  : (useDarkElements ? "text-on-surface-variant hover:text-primary" : "text-white/80 hover:text-white")
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className={`hidden md:block px-8 py-3 rounded-full font-label-md text-label-md transition-all duration-300 transform scale-95 hover:scale-100 active:scale-95 uppercase ${
            useDarkElements ? "bg-primary text-on-primary hover:bg-secondary" : "bg-white text-primary hover:bg-white/90"
          }`}
        >
          Consultation
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 h-screen w-full bg-white/95 backdrop-blur-2xl z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center gap-8 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`font-headline-md text-headline-md transition-colors duration-300 ${
              pathname === link.href ? "text-primary" : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <button 
          onClick={() => { setIsMobileMenuOpen(false); setIsModalOpen(true); }}
          className="bg-primary text-on-primary px-10 py-4 mt-8 rounded-full font-label-md text-label-md uppercase shadow-lg active:scale-95 transition-transform"
        >
          Consultation
        </button>
      </div>
    </nav>
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
            
            <h2 className="font-headline-md text-primary mb-8 uppercase tracking-widest text-center">Consultation Request</h2>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert('Request submitted successfully!'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="font-label-md text-label-md text-primary tracking-widest uppercase">Full Name</label>
                  <input className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3 font-body-md text-primary" placeholder="Johnathan Doe" type="text" required />
                </div>
                <div className="space-y-2 text-left">
                  <label className="font-label-md text-label-md text-primary tracking-widest uppercase">Email Address</label>
                  <input className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3 font-body-md text-primary" placeholder="john@studio.com" type="email" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="font-label-md text-label-md text-primary tracking-widest uppercase">Project Type</label>
                  <select className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3 font-body-md text-primary">
                    <option>Residential Lighting</option>
                    <option>Commercial Lighting</option>
                    <option>Industrial Lighting</option>
                    <option>Landscape Lighting</option>
                    <option>Facade Lighting</option>
                  </select>
                </div>
                <div className="space-y-2 text-left">
                  <label className="font-label-md text-label-md text-primary tracking-widest uppercase">Location</label>
                  <input className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3 font-body-md text-primary" placeholder="City, Country" type="text" />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <label className="font-label-md text-label-md text-primary tracking-widest uppercase">Your Vision</label>
                <textarea className="w-full bg-[#F4F1EC] border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3 font-body-md text-primary" placeholder="Describe the scale and intent of your project..." rows={4} required></textarea>
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
    </>
  );
}
