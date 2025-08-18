'use client';

import React from 'react';

type Props = {
  /** Fixed width for each logo cell (px). Default: 300 */
  itemWidthPx?: number;
  /** Max logo height inside each cell (px). Default: 56 */
  imageMaxHeightPx?: number;
};

export default function PartnershipSection({
  itemWidthPx = 150,
  imageMaxHeightPx = 56,
}: Props) {
  const logos = [
    'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Partnership%20Section/Logo-Conga_vehyxq_ev11tk.webp',
    'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Partnership%20Section/Logo-AWS-1_zbmkul_n0dzf9.webp',
    'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Partnership%20Section/Logo-Node_jx8dnf_i4rdmf%20-%20Copy.webp',
    'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Partnership%20Section/tableau-logo_re12hv_nomuom%20-%20Copy%20-%20Copy.webp',
    'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Partnership%20Section/Logo-Hubspot-Platinum_l2jsv5_lqlzry.webp',
    'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Partnership%20Section/Logo-Celigo_h7mfna_iislaj%20-%20Copy.webp',
    'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Partnership%20Section/Logo-Google_djyw78_lfm0cn%20-%20Copy.webp',
    'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Partnership%20Section/Logo-Oracle-Netsuite_fb6zhs_rmmsvz.webp',
    'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Partnership%20Section/Logo-Power-BI_btatjd_iqzmp3%20-%20Copy.webp',
    'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Partnership%20Section/Logo-React_ldvlk7_sdgtrh.webp',
    'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Partnership%20Section/Logo-Adobe-Solution-Partner-Bronze_wsssik_f1eit9.webp',
    'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Partnership%20Section/ridge-partner_dpahdt_cc2fvo%20-%20Copy%20-%20Copy.webp',
  ];

  const getAlt = (url: string, idx: number) => {
    try {
      const last = url.split('/').pop() || `Logo ${idx + 1}`;
      const base = last.split('.')[0]?.replace(/(%20)|[-_]/g, ' ') || last;
      return base.charAt(0).toUpperCase() + base.slice(1);
    } catch {
      return `Logo ${idx + 1}`;
    }
  };

  return (
    <section className="pt-16 pb-8 bg-white overflow-hidden">
      {/* Title + underline */}
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="text-sm font-semibold text-[#1fa4fc]">
          Our Partnerships & Growth Stack
        </h2>
        <div className="w-10 h-[3px] bg-[#1fa4fc] mx-auto mt-2 rounded-full" />
      </div>

      {/* Logos */}
      <div className="section-wrapper">
        <div className="relative overflow-hidden group">
          <div className="flex gap-x-4 sm:gap-x-6 whitespace-nowrap w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="shrink-0 flex items-center justify-center h-20 sm:h-24 px-6 rounded-xl transition-transform duration-300 hover:-translate-y-[2px]"
                style={{ width: `${itemWidthPx}px` }}       // ← fixed 300px cell
                aria-label={getAlt(logo, index)}
              >
                <img
                  src={logo}
                  alt={getAlt(logo, index)}
                  loading="lazy"
                  decoding="async"
                  className="w-auto object-contain max-w-[90%] opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition"
                  style={{ maxHeight: `${imageMaxHeightPx}px` }} // ← consistent logo height
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll animation */}
      <style>{`
        @keyframes scrollMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scrollMarquee 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
