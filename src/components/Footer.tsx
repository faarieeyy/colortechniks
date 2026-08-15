import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#011425] text-on-primary w-full rounded-t-lg">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter px-grid-margin py-section-gap max-w-[1440px] mx-auto">
        <div className="md:col-span-4 mb-12 md:mb-0">
          <Link href="/">
            <img src="/logo-white-text.webp" alt="Colortechnik Logo" className="h-12 md:h-16 w-auto mb-8 cursor-pointer object-contain" />
          </Link>
          <p className="font-body-md opacity-70 mb-8 max-w-xs">
            Designing tomorrow&apos;s landmarks with technical precision and editorial
            elegance. Based in Bengaluru, India.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="https://maps.app.goo.gl/SreazGeMX4oEq2SR8" target="_blank" rel="noopener noreferrer" className="material-symbols-outlined text-surface-container-lowest cursor-pointer hover:text-secondary-fixed transition-colors">
              public
            </a>
            <span className="material-symbols-outlined text-surface-container-lowest cursor-pointer hover:text-secondary-fixed">
              mail
            </span>
            <span className="material-symbols-outlined text-surface-container-lowest cursor-pointer hover:text-secondary-fixed">
              share
            </span>
          </div>
        </div>
        <div className="md:col-span-2 space-y-6">
          <h4 className="font-subheading-lg text-secondary-fixed">
            Expertise
          </h4>
          <ul className="flex flex-col gap-3 font-body-md text-on-primary-container">
            <li>
              <Link href="#" className="hover:text-secondary-container transition-all">
                Residential
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary-container transition-all">
                Commercial
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary-container transition-all">
                Hospitality
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary-container transition-all">
                Industrial
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2 space-y-6">
          <h4 className="font-subheading-lg text-secondary-fixed">
            Company
          </h4>
          <ul className="flex flex-col gap-3 font-body-md text-on-primary-container">
            <li>
              <Link href="/about" className="hover:text-secondary-container transition-all">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-secondary-container transition-all">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary-container transition-all">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary-container transition-all">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4 space-y-8">
          <h4 className="font-subheading-lg text-secondary-fixed">
            Journal
          </h4>
          <p className="font-body-md opacity-70 mb-6">
            Subscribe to our architectural monographs and project updates.
          </p>
          <div className="flex border-b border-on-primary/30 pb-2">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent border-none focus:ring-0 w-full placeholder:text-on-primary/30 text-on-primary"
            />
            <button className="material-symbols-outlined text-secondary-fixed">
              arrow_forward
            </button>
          </div>
        </div>
      </div>
      <div className="px-grid-margin py-8 border-t border-on-primary/10 max-w-[1440px] mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-md opacity-50">
          © 2024 COLORTECHNIK. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
