'use client';

import { useRef, useEffect, useState } from "react";

function useCountUp(end: string | number, duration = 1400) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // UPDATED: capture optional prefix (e.g., "$"), the number, and any suffix (e.g., "k", "+", "%")
  const { prefix, numeric, suffix } = (() => {
    const match = String(end).trim().match(/^\s*([^\d\-+]*)(-?\d[\d,]*\.?\d*)(.*)$/);
    return match
      ? {
          prefix: match[1] || "",
          numeric: Math.abs(Number(match[2].replace(/,/g, ""))),
          suffix: match[3] || ""
        }
      : { prefix: "", numeric: 0, suffix: "" };
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
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) start();
      }, { threshold: 0.6 });
      observer.observe(ref.current);
    }

    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (observer && ref.current) observer.unobserve(ref.current);
    };
  }, [numeric]);

  // UPDATED: return prefix as well
  return { ref, value: hasAnimated ? value : 0, prefix, suffix };
}

type Stat = {
  label: string;
  value: string;
  isNegative?: boolean; // <-- add this line
};

type StatSectionProps = {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  setTitle?: (val: string) => void;
  setSubtitle?: (val: string) => void;
  className?: string;
  paddingTop?: string;
  paddingBottom?: string;
};

export default function EditableStatSection({
  title,
  subtitle,
  stats,
  setTitle,
  setSubtitle,
  className = "",
  paddingTop = "pt-20",
  paddingBottom = "pb-0",
}: StatSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className={`bg-white ${paddingTop} ${paddingBottom} ${className}`} ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Text Container */}
        {(title || subtitle) && (
          <div className="max-w-3xl">
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

        {/* Stat Cards with animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
          {stats.map((stat, i) => {
            // UPDATED: also grab prefix
            const { ref, value, prefix, suffix } = useCountUp(stat.value, 1600 + i * 150);
            const showValue = stat.isNegative ? (value === 0 ? '-' : `-${value}`) : value;

            return (
              <div
                key={i}
                className={`bg-[#F7FAFB] rounded-2xl px-10 pt-10 pb-10 min-h-[220px] flex flex-col items-start transform transition-all duration-700 ease-out
                  ${inView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'}
                `}
                style={{
                  transitionDelay: `${i * 150}ms`
                }}
              >
                <span
                  ref={ref}
                  style={{ fontVariantNumeric: "tabular-nums" }}
                  className="text-gray-900 tracking-tight text-5xl font-light mb-6"
                >
                  {/* UPDATED: render prefix before the number */}
                  {prefix}{showValue}{suffix}
                </span>

                <span className="text-xl text-gray-500 font-medium leading-snug">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
