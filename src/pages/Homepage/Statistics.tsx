'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';



const stats = [
  {
    number: 200,
    suffix: '+',
    title: 'Brands Scaled with AI-Led Strategies',
    description: 'Creative work that drives real results',
  },
  {
    number: 94,
    suffix: '%',
    title: 'Client Retention Since 2018 ',
    description: 'Brands that keep coming back for more',
  },
  {
    number: 3,
    suffix: 'x',
    title: 'Ops Efficiency in the First 90 Days',
    description: 'Mastering the art of animation, content and design',
  },
  {
    number: 15,
    suffix: '+',
    title: 'AI Models Deployed in Production',
    description: 'Delivering real business impact through intelligent, scalable solutions.',
  },
];

const useCountUp = (end: number, inView: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [end, inView]);
  return count;
};

const StatCard = ({
  number,
  suffix,
  title,
  description,
  inView,
  index,
}: {
  number: number;
  suffix: string;
  title: string;
  description: string;
  inView: boolean;
  index: number;
}) => {
  const count = useCountUp(number, inView);

  return (
    <div
      className={`bg-[#F8FAFB] p-6 rounded-xl transform transition-all ease-out ${
        inView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-60 translate-y-10'
      }`}
      style={{
        transition: 'transform 1.2s ease, opacity 1.2s ease',
        transitionDelay: `${index * 300}ms`
      }}
    >
      <div className="text-[32px] font-light text-[#0F172A] mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-sm font-semibold text-[#1fa4fc] mb-1">{title}</div>
      <div className="text-sm text-[#475569]">{description}</div>
    </div>
  );
};

export default function VisualMasterpieceSection() {
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
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Why Partner With Growth Natives?</span>
          </div>

          <h2 className="text-3xl md:text-4xl leading-snug mb-4 text-gray-900 font-normal">
            We’re not another agency.<br className="block md:hidden" />
            We’re your AI-Native growth engine.
          </h2>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-base mb-10 md:mb-[40px]">
           We don’t just plug into your operations—we power it. From strategy to delivery, our AI-first approach unlocks growth at every layer of your funnel.
          </p>

        </div>

        {/* RIGHT STATS */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} inView={inView} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
