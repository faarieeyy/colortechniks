import React from 'react';
import './AssociatedBrands.css';

const row1 = [
  { name: "K-LiTE", src: "/brand-klite.webp" },
  { name: "ABBY", src: "/brand-abby.webp" },
  { name: "Media Facade", src: "/brand-media-facade.webp" },
  { name: "Unilamp", src: "/brand-unilamp.webp" },
  { name: "LEDFLEX", src: "/brand-ledflex.webp" },
  { name: "CASAMBI", src: "/brand-casambi.webp" }
];

const row2 = [
  { name: "Divinity", src: "/brand-divinity.webp" },
  { name: "S-LUMI", src: "/brand-slumi.webp" },
  { name: "LunnArk", src: "/brand-lunnark.webp" },
  { name: "alurays_", src: "/brand-alurays.webp" },
  { name: "NERI", src: "/brand-neri.webp" },
  { name: "ANCHOR", src: "/brand-anchor.webp" },
  { name: "Arraystorm", src: "/brand-arraystorm.webp" }
];

// We duplicate the arrays to create a seamless infinite scrolling effect
const seamlessRow1 = [...row1, ...row1, ...row1, ...row1];
const seamlessRow2 = [...row2, ...row2, ...row2, ...row2];

export default function AssociatedBrands() {
  const renderBrand = (brand: typeof row1[0]) => {
    if (brand.src) {
      return <img src={brand.src} alt={brand.name} className="h-10 md:h-14 w-auto object-contain mix-blend-multiply drop-shadow-sm" />;
    }
    return brand.name;
  };

  return (
    <section className="py-12 md:py-16 bg-[#F4F1EC] relative overflow-hidden text-center z-10 border-t border-black/5">
      <div className="absolute inset-0 opacity-20 mix-blend-multiply filter invert pointer-events-none" style={{ backgroundImage: "url('/scribbles-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="max-w-[1440px] mx-auto px-grid-margin mb-8 md:mb-12 reveal relative z-10">
        <span className="font-label-lg text-lg md:text-xl text-primary/60 uppercase tracking-widest mb-4 block font-semibold">
          Associated
        </span>
        <h2 className="font-headline-xl text-headline-xl text-primary mb-6">
          BRANDS
        </h2>
      </div>

      <div className="flex flex-col gap-6 w-full relative z-10">
        <div className="marquee-container">
          <div className="marquee-content right">
            {seamlessRow1.map((brand, i) => (
              <div key={`a-${i}`} className="brand-card">
                {renderBrand(brand)}
              </div>
            ))}
          </div>
          <div className="marquee-content right" aria-hidden="true">
            {seamlessRow1.map((brand, i) => (
              <div key={`b-${i}`} className="brand-card">
                {renderBrand(brand)}
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-content left">
            {seamlessRow2.map((brand, i) => (
              <div key={`c-${i}`} className="brand-card">
                {renderBrand(brand)}
              </div>
            ))}
          </div>
          <div className="marquee-content left" aria-hidden="true">
            {seamlessRow2.map((brand, i) => (
              <div key={`d-${i}`} className="brand-card">
                {renderBrand(brand)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
