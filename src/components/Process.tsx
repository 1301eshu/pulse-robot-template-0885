// components/ProcessSection.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { Sparkles, Pause, Play } from 'lucide-react';

const steps = [
  {
    label: 'Discovery',
    title: 'Kickstart Your Growth Journey',
    items: [
      'In-depth audit of your digital presence',
      'Identify quick wins & untapped opportunities',
      'Set measurable business goals',
    ],
  },
  {
    label: 'Strategy',
    title: 'Build a Winning Plan',
    items: [
      'Develop a full-funnel marketing strategy',
      'SEO/SEM and automation blueprint',
      'Align tactics with KPIs and business milestones',
    ],
  },
  {
    label: 'Execution',
    title: 'Accelerate Results',
    items: [
      'Launch omnichannel campaigns',
      'Iterate based on analytics & insights',
      'Scale up what works for sustainable growth',
    ],
  },
];

const STEP_DURATION = 8000; // 8 seconds per slide

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-advance + progress bar
  useEffect(() => {
    if (!isPlaying) return;
    const iv = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setActive((s) => (s + 1) % steps.length);
          return 0;
        }
        return p + 100 / (STEP_DURATION / 50);
      });
    }, 50);
    return () => clearInterval(iv);
  }, [isPlaying, active]);

  // click a tab/card → scroll that card just below the sticky tabs 
  const handleStepClick = (index: number) => {
    setActive(index);
    setProgress(0);

    const tabsEl = tabsRef.current;
    const cardEl = cardRefs.current[index];
    if (tabsEl && cardEl) {
      const tabsHeight = tabsEl.getBoundingClientRect().height;
      const cardTop = cardEl.getBoundingClientRect().top + window.scrollY;
      // scroll so card’s top sits right under the tabs
      window.scrollTo({
        top: cardTop - tabsHeight - 16, // extra 16px gap
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-white py-20 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
       {/* ── Header ── */}
<div className="text-center mb-12">
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-4">
    <Sparkles className="w-4 h-4 text-blue-400" />
    <span className="text-blue-500 text-sm font-medium">Our Process</span>
  </div>
  <h2 className="text-3xl md:text-4xl leading-snug mb-4 text-gray-900 font-normal">
    Start Smart. Stay Scalable.
  </h2>
  <p className="text-[#5E6874] text-base mb-8 max-w-2xl mx-auto">
    Our free AI-readiness audit breaks down your ops, stack, and workflows-and shows you the things you’re not doing (but should be).
  </p>

  <div className="flex items-center justify-center">
    <a
      href="#contact"
      className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition"
    >
      Start Your Journey →
    </a>
  </div>
</div>


        {/* ── Tabs + Progress (Sticky on mobile) ── */}
        <div
          ref={tabsRef}
          className="
            sticky top-[80px] z-10 bg-white 
            pt-4 pb-6 mb-8 
            md:relative md:top-auto md:pt-0 md:pb-0
          "
        >
          {/* Tab buttons */}
          <div className="flex justify-center items-center gap-4 mb-3">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => handleStepClick(i)}
                className={`
                  px-6 py-2 rounded-full font-semibold text-sm transition 
                  ${active === i
                    ? 'bg-[#F8FAFB] text-[#1D4ED8]'
                    : 'opacity-50 hover:opacity-80 text-[#334155]'
                  }
                `}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="relative h-2 w-full max-w-xl mx-auto rounded-full bg-gray-200 overflow-hidden">
            <div
              className="absolute h-full rounded-full transition-all duration-300"
              style={{
                width: `${(active + progress / 100) * (100 / steps.length)}%`,
                background: 'linear-gradient(to right, #051F4D, #36478E)'
              }}
            />
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => el && (cardRefs.current[idx] = el)}
              onClick={() => handleStepClick(idx)}
              className={`
                transition-all duration-500 p-6 rounded-2xl cursor-pointer
                ${active === idx
                  ? 'bg-[#F8FAFB] shadow-xl border border-blue-100 scale-[1.02] opacity-100'
                  : 'opacity-50 hover:opacity-75 scale-95 border border-gray-100'
                }
              `}
            >
              <div
                className={`
                  w-8 h-8 rounded-full text-white font-bold text-sm 
                  flex items-center justify-center mb-4
                  ${active === idx ? 'bg-blue-600' : 'bg-gray-300'}
                `}
              >
                {idx + 1}
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-3">{step.title}</h3>
              <ul className="space-y-2">
                {step.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span
                      className={`
                        w-5 h-5 rounded-full text-xs flex items-center 
                        justify-center font-bold 
                        ${active === idx ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}
                      `}
                    >
                      ✓
                    </span>
                    <span className={`text-sm ${active === idx ? 'text-[#334155]' : 'text-gray-400'}`}>
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
