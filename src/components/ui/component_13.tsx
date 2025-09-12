'use client';

import React from 'react';
import clsx from 'clsx';

const defaultLogos = [
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/Adobe%20Logo.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/Altum.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/Booking.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/Dispatch.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/Esclon.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/FunnelEnvy.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/Gander%20Group.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/Goodrege.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/HighSpot.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/you%20by%20sia.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/Imageware.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/Lamav.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/Lightspeed.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/nue.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/takefive.webp',
  'https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Homepage/Trusted%20Brands/xactly.webp',
];

interface LogoScrollerProps {
  heading?: string | React.ReactNode;
  subtext?: string;
  logos?: string[];
  className?: string;
  paddingTop?: string;
  paddingBottom?: string;
  /** Fixed width for each logo cell; default 300px as requested */
  itemWidthPx?: number;
  /** Max logo height inside the cell (keeps rows visually balanced) */
  imageMaxHeightPx?: number;
}

export default function LogoScroller({
  heading,
  subtext,
  logos,
  className = "",
  paddingTop = "pt-20",
  paddingBottom = "pb-20",
  itemWidthPx = 150,           // ← 300px container
  imageMaxHeightPx = 56,       // ~3.5rem; adjust if needed
}: LogoScrollerProps) {
  const finalLogos = logos ?? defaultLogos;

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
    <section className={clsx("bg-white overflow-hidden", paddingTop, paddingBottom, className)}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        {heading && (
          React.isValidElement(heading) ? (
            <div className="mb-4 flex items-center justify-center">
              {heading}
            </div>
          ) : (
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] mb-4 inline-flex items-center justify-center gap-2">
              {heading}
            </h2>
          )
        )}
        {subtext && (
          <p className="text-gray-600 max-w-2xl mx-auto text-base mb-4">
            {subtext}
          </p>
        )}
      </div>

      {/* Logo Marquee - Optimized DOM structure */}
      <div className="relative overflow-hidden group">
        <div 
          className="flex gap-x-4 sm:gap-x-6 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]"
          style={{ width: `${(itemWidthPx + 24) * finalLogos.length * 2}px` }}
        >
          {[...finalLogos, ...finalLogos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={getAlt(logo, index)}
              loading="lazy"
              decoding="async"
              width="56"
              height="56"
              className="shrink-0 object-contain opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 hover:-translate-y-[2px]"
              style={{ 
                width: `${itemWidthPx}px`,
                height: `${imageMaxHeightPx}px`,
                padding: '12px',
              }}
              aria-label={getAlt(logo, index)}
            />
          ))}
        </div>
      </div>

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
