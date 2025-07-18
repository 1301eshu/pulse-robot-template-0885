'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

const clientLogos = [
  'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751360246/Image_6_avhf1r.png',
  'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751360246/Image_6_avhf1r.png',
  'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751360246/Image_6_avhf1r.png',
  'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751360246/Image_6_avhf1r.png',
  'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751360246/Image_6_avhf1r.png',
  'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751360246/Image_6_avhf1r.png',
];

const AwardCard = ({
  logo,
  inView,
  index,
}: {
  logo: string;
  inView: boolean;
  index: number;
}) => (
  <div
    className={`bg-[#F8FAFB] p-6 rounded-xl flex items-center justify-center h-28 transform transition-all ease-out ${
      inView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-60 translate-y-10'
    }`}
    style={{
      transition: 'transform 1.2s ease, opacity 1.2s ease',
      transitionDelay: `${index * 100}ms`,
    }}
  >
    <img
      src={logo}
      alt={`Client Logo ${index + 1}`}
      className="max-h-12 object-contain"
    />
  </div>
);

export default function AwardsSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* LEFT TEXT */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Awards Section</span>
          </div>

          <h2 className="text-3xl md:text-4xl leading-snug mb-4 text-gray-900 font-normal">
            Awards and Recognitions
          </h2>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-base mb-10 md:mb-[40px]">
            We are honored and humbled to have received multiple awards and accolades in our growing years.
          </p>

          {/* <div className="w-full md:w-auto">
            <button className="group inline-flex items-center gap-2 text-[#1fa4fc] font-semibold text-base transition hover:gap-3">
              Know More About us
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div> */ }
          
        </div>

        {/* RIGHT LOGO GRID (3x2) */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          <div className="grid grid-cols-3 gap-6 w-full">
            {clientLogos.map((logo, i) => (
              <AwardCard key={i} logo={logo} inView={inView} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
