'use client';

import { useRef, useEffect, useState } from "react";

function useCountUp(end: string | number, duration = 1400) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const { numeric, suffix } = (() => {
    const match = String(end).match(/^([0-9,.]+)(.*)$/);
    return match ? {
      numeric: Number(match[1].replace(/,/g, '')),
      suffix: match[2]
    } : {
      numeric: 0,
      suffix: ""
    };
  })();

  useEffect(() => {
    let frame: number;
    let observer: IntersectionObserver | null = null;
    function start() {
      if (hasAnimated) return;
      setHasAnimated(true);
      const start = performance.now();
      function animate(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.floor(progress * numeric));
        if (progress < 1) frame = requestAnimationFrame(animate);
        else setValue(numeric);
      }
      frame = requestAnimationFrame(animate);
    }
    if (ref.current) {
      observer = new window.IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) start();
      }, { threshold: 0.6 });
      observer.observe(ref.current);
    }
    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (observer && ref.current) observer.unobserve(ref.current);
    };
  }, [numeric]);

  return { ref, value: hasAnimated ? value : 0, suffix };
}

type Stat = {
  label: string;
  value: string;
};

type StatSectionProps = {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  setTitle?: (val: string) => void;
  setSubtitle?: (val: string) => void;
};

export default function EditableStatSection({
  title,
  subtitle,
  stats,
  setTitle,
  setSubtitle
}: StatSectionProps) {
  const shouldRemoveTopPadding = !title && !subtitle;

  return (
    <section className={`${shouldRemoveTopPadding ? "pt-0" : "pt-20"} pb-20 bg-white`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Text Container */}
        {(title || subtitle) && (
          <div className="max-w-3xl">
            {/* Subtitle */}
            {setSubtitle ? (
              <input
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="block text-sm md:text-base font-medium tracking-wide text-[#3284e7] uppercase mb-4 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
            ) : subtitle ? (
              <span className="block text-sm md:text-base font-medium tracking-wide text-[#3284e7] uppercase mb-4">
                {subtitle}
              </span>
            ) : null}

            {/* Title */}
            {setTitle ? (
              <textarea
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                rows={2}
                className="text-4xl text-gray-900 mb-12 leading-tight font-medium md:text-5xl my-0 text-left bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 resize-none w-full"
              />
            ) : title ? (
              <h2 className="text-4xl text-gray-900 mb-12 leading-tight font-medium md:text-5xl my-0 text-left">
                {title}
              </h2>
            ) : null}
          </div>
        )}

        {/* Stat Cards */}
        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => {
            const { ref, value, suffix } = useCountUp(stat.value, 1600 + i * 150);
            return (
              <div
                key={i}
                className="flex flex-col justify-between bg-[#F7FAFB] rounded-2xl px-10 pt-10 pb-10 min-h-[220px]"
              >
                <span className="block text-xl text-gray-500 font-medium mb-12">
                  {stat.label}
                </span>
                <span
                  ref={ref}
                  style={{ fontVariantNumeric: "tabular-nums" }}
                  className="block text-gray-900 tracking-tight text-5xl font-light"
                >
                  {value}
                  {suffix}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

