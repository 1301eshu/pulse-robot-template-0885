'use client';

import React, { useEffect, useRef, useState } from 'react';

const clientLogos = [
  'https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Homepage/awards/inc.webp',
  'https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Homepage/awards/impact.webp',
  'https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Homepage/awards/Clutch.webp',
  'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Awards%20and%20Recognitions/img_8_vcrazd.webp',
  'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Awards%20and%20Recognitions/Group_86572_1_crg2mq.webp',
  'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Awards%20and%20Recognitions/image_24_unsfok.webp',
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
      width="80" 
      height="48"
      loading="lazy"
      decoding="async"
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
    <section ref={sectionRef} className="bg-white py-20 overflow-hidden">
      <div className="section-wrapper flex flex-col md:flex-row items-start justify-between gap-12">
        {/* LEFT TEXT */}
        <div className="flex-1 text-left">
          <div className="relative mb-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 bg-[#1fa4fc] rounded-sm" />
              <h3 className="text-sm font-semibold text-[#1fa4fc]">Awards</h3>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl leading-snug mb-4 text-gray-900 font-normal">
            Awards and Recognitions
          </h2>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-base mb-10 md:mb-[40px]">
            We are honored and humbled to have received multiple awards and accolades in our growing years.
          </p>
        </div>

        {/* RIGHT LOGO GRID */}
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
