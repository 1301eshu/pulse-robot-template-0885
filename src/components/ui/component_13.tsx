'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

interface LogoScrollerProps {
  heading?: string | React.ReactNode;
  subtext?: string;
  logos: string[];
  className?: string; // ✅ add this
}

export default function LogoScroller({
  heading,
  subtext,
  logos,
  className = "py-16 bg-white overflow-hidden" // ✅ default
}: LogoScrollerProps) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        {heading && (
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] mb-4 inline-flex items-center justify-center gap-2">
            {heading}
          </h2>
        )}
        {subtext && (
          <p className="text-gray-600 max-w-2xl mx-auto text-base mb-10">
            {subtext}
          </p>
        )}
      </div>

      <div className="relative overflow-hidden group">
        <div className="logo-marquee flex whitespace-nowrap w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6 h-20 min-w-[120px] transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="max-h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
  @keyframes scrollMarquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: scrollMarquee 25s linear infinite;
  }
`}</style>

    </section>
  );
}
