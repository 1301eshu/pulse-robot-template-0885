'use client';

import React, { useEffect, useState } from "react";

const phrases = [
  "Digital Transformation",
  "AI-Led Growth",
  "Full-Funnel Strategy",
  "Scalable Systems"
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex(prev => (prev + 1) % phrases.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 90);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 flex flex-col md:flex-row items-center justify-between min-h-[600px] max-h-[800px]">
        {/* Left */}
        <div className="flex-1 min-w-[300px] max-w-xl">
          <h1 className="font-bold text-white leading-tight mb-2 text-base md:text-base">
            Growth Powered by
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight min-h-[52px] text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 drop-shadow-md">
            {phrases[index].substring(0, subIndex)}
            <span className="blinking-cursor">|</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 mt-6 mb-8">
            We dream, design, develop, and deliver intelligent systems that drive scale-not chaos.
          </p>

          <div className="flex flex-wrap gap-3 items-center mb-12 max-w-lg">
            <input
              type="email"
              placeholder="What's your work email?"
              className="rounded-lg px-4 py-3 w-full sm:w-[230px] bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#1fa4fc] transition"
            />
            <button className="px-5 py-3 rounded-lg bg-[#1fa4fc] text-white font-bold shadow hover:bg-blue-600 transition w-full sm:w-auto">
              Get Free AI Audit
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <img
            src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751314134/Screenshot_2025-07-01_at_1.33.30_AM_1_dudoci.png"
            alt="Hero Metrics"
            className="max-w-xs md:max-w-sm w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Cursor Style */}
      <style>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
          display: inline-block;
          border-right: 2px solid #1fa4fc;
        }

        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: #1fa4fc; }
        }
      `}</style>
    </div>
  );
}
