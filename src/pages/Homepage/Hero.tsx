'use client';

import React, { useEffect, useState } from "react";
import { ChevronRight, Linkedin } from "lucide-react";
import Lottie from "lottie-react";
import shoppingBagAnimation from "@/assets/shopping-bag-animation.json";

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
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 flex flex-col md:flex-row items-center justify-between min-h-[780px] max-h-[1000px]">
        {/* Left */}
        <div className="flex-1 min-w-[300px] max-w-xl">
          <h1 className="font-bold text-white leading-tight mb-2 text-base md:text-base">
            AI-Native Digital Transformation For
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight min-h-[52px] text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 drop-shadow-md">
            {phrases[index].substring(0, subIndex)}
            <span className="blinking-cursor">|</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 mt-6 mb-8">
            We dream, design, develop, and deliver intelligent systems that drive scale—not chaos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <a
              href="/contact"
              className="px-6 py-3 bg-[#1fa4fc] text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
            >
              Let’s Talk
            </a>
            <a
              href="/audit"
              className="inline-flex items-center text-white/80 hover:text-white transition font-medium"
            >
              Quick AI-Readiness Audit?
              <ChevronRight className="ml-1 w-5 h-5" />
            </a>
          </div>

          {/* Micro-Bio Anchor - with smaller width and white filled LinkedIn icon */}
<div className="mt-20">
  <div className="flex items-start gap-4 text-white/80 text-sm leading-relaxed max-w-sm">
    {/* Avatar */}
    <img
      src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1752756948/image_1_gzbwge.png"
      alt="Taran Nandha"
      className="w-10 h-10 rounded-full object-cover shadow-md"
    />

    {/* Bio Text */}
    <div className="flex flex-col">
      <p>
        <span className="text-white font-medium">AI-first vision</span> led by{" "}
        <span className="text-white font-medium">Taran Nandha</span>, CEO & Co-founder, 20+ years scaling global GTM teams.
      </p>
      <a
        href="https://www.linkedin.com/in/tarancmo/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-4 h-4 hover:opacity-80 transition"
        >
          <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.34 18.34H5.67V9.77h2.67v8.57zM7 8.54c-.86 0-1.55-.7-1.55-1.55 0-.85.7-1.55 1.55-1.55s1.55.7 1.55 1.55c0 .85-.7 1.55-1.55 1.55zM18.34 18.34h-2.67v-4.2c0-1-.02-2.29-1.4-2.29-1.4 0-1.61 1.09-1.61 2.22v4.28h-2.67V9.77h2.57v1.17h.04c.36-.68 1.23-1.4 2.53-1.4 2.71 0 3.21 1.79 3.21 4.11v4.69z"/>
        </svg>
      </a>
    </div>
  </div>
</div>

        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center md:justify-end max-w-[400px] mt-10 md:mt-0">
          {/* <img
            src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751314134/Screenshot_2025-07-01_at_1.33.30_AM_1_dudoci.png"
            alt="Hero Metrics"
            className="max-w-xs md:max-w-sm w-full h-auto rounded-xl shadow-md"
          /> */}
                    <Lottie
            animationData={shoppingBagAnimation}
            className="w-full h-full"
            loop={true}
            autoplay={true}
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
