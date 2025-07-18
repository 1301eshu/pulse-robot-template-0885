'use client';

import { useEffect, useRef, useState } from 'react';
import RecentResourcesSection, { ResourceItem } from '@/components/ui/component_10';
import { Sparkles, Pause, Play } from 'lucide-react';

const recentResources: ResourceItem[] = [
    {
      title: "How AI Is Revolutionizing Marketing",
      subtitle: "AI",
      author: "Jane Doe",
      date: "July 10, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "ai-revolution-marketing"
    },
    {
      title: "5 SEO Strategies for 2025",
      subtitle: "Marketing",
      author: "John Smith",
      date: "July 8, 2025",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "seo-strategies-2025"
    },
    {
      title: "The Future of Customer Experience",
      subtitle: "CX",
      author: "Alice Lee",
      date: "July 6, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "future-customer-experience"
    }
  ];
const steps = [
  {
    label: 'Audit',
    title: ' Audit',
    items: [
      'Current tech stack analysis ',
      'Workflow efficiency assessment ',
      'Identify AI gaps fast ',
    ],
  },
  {
    label: 'Opportunity Map ',
    title: ' Opportunity Map ',
    items: [
      'Spot untapped growth levers ',
      'ROI projection modelling ',
      'Build AI action roadmap ',
    ],
  },
  {
    label: 'Execution Plan ',
    title: 'Execution Plan',
    items: [
      'Define rollout phases clearly ',
      'Resource allocation strategy ',
      'Scale with continuous learning ',
    ],
  },
];

 


const STEP_DURATION = 8000;

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

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

  const handleStepClick = (index: number) => {
    setActive(index);
    setProgress(0);
    const tabsEl = tabsRef.current;
    const cardEl = cardRefs.current[index];
    if (tabsEl && cardEl) {
      const tabsHeight = tabsEl.getBoundingClientRect().height;
      const cardTop = cardEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: cardTop - tabsHeight - 16,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>

      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading=" In the News & On the Move "
          body="  Recognition, partnerships, and proof that we’re moving the needle. "
          subTabs={[]} // optional filtering tabs
          resources={recentResources}
        />
      </div>
    
      <section ref={sectionRef} className="relative bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
<div className="text-center mb-12">
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-4">
    <Sparkles className="w-4 h-4 text-blue-400" />
    <span className="text-blue-500 text-sm font-medium">Our Process</span>
  </div>
  <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Start Smart.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Stay Scalable.
              </span>
            </h2>
  <p className="text-[#5E6874] text-base mb-8 max-w-2xl mx-auto">
    Our free AI-readiness audit breaks down your ops, stack, and workflows—and shows you the things you’re not doing (but should be).
  </p>

  <div className="flex items-center justify-center">
    <a
      href="#contact"
      className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition"
    >
      Book My Audit →
    </a>
  </div>
</div>


        {/* ── Tabs + Progress ── */}
        <div
          ref={tabsRef}
          className="sticky top-[80px] z-10 bg-white pt-4 pb-6 mb-8 md:relative md:top-auto md:pt-0 md:pb-0"
        >
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
    </>
  );
}
