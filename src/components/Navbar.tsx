"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      id="top-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md py-2 shadow-sm text-on-surface" : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="flex justify-between items-center px-grid-margin max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center z-50">
          <img 
            src={scrolled ? "/logo.png" : "/preloader-logo.png"} 
            alt="Colortechnik Logo" 
            className="w-24 md:w-32 h-auto object-contain transition-opacity duration-300" 
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-label-md text-label-md pb-1 transition-colors duration-300 ${
                pathname === link.href
                  ? (scrolled ? "text-primary border-b-2 border-primary" : "text-white border-b-2 border-white")
                  : (scrolled ? "text-on-surface-variant hover:text-primary" : "text-white/80 hover:text-white")
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button 
          className={`hidden md:block px-8 py-3 rounded-full font-label-md text-label-md transition-all duration-300 transform scale-95 hover:scale-100 active:scale-95 uppercase ${
            scrolled ? "bg-primary text-on-primary hover:bg-secondary" : "bg-white text-primary hover:bg-white/90"
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
        <button className="bg-primary text-on-primary px-10 py-4 mt-8 rounded-full font-label-md text-label-md uppercase shadow-lg active:scale-95 transition-transform">
          Consultation
        </button>
      </div>
    </nav>
  );
}
