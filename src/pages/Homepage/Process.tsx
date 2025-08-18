'use client';

import { useEffect, useRef, useState } from 'react';
import RecentResourcesSection, { ResourceItem } from '@/components/ui/component_10';
import { SITE_CTA } from '@/components/SITE_CTAs';

// same steps array as before
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

  // 🔹 state for fetched blogs
  const [recentResources, setRecentResources] = useState<ResourceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // 🔹 fetch latest posts from WordPress
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          `https://growthnatives.com/wp-json/wp/v2/posts?per_page=3&_embed`
        );
        const data = await res.json();

        const formattedResources: ResourceItem[] = data.map((post: any) => ({
          title: post.title.rendered,
          subtitle: stripHTML(post.excerpt.rendered),
          author: post._embedded?.author?.[0]?.name || 'Unknown Author',
          date: new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          readTime: calculateReadTime(post.content.rendered),
          image:
            post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
            'https://via.placeholder.com/600x400',
          slug: post.slug,
          category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'General',
        }));

        setRecentResources(formattedResources);
      } catch (err) {
        console.error('Failed to fetch posts', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // 🔹 autoplay steps
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
      {/* 🔹 dynamic blogs */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="In the News & On the Move"
          body="Recognition, partnerships, and proof that we're moving the needle."
          subTabs={[]}
          resources={recentResources}
        />
      </div>

      {/* 🔹 AI Readiness Section */}
      <section ref={sectionRef} className="relative bg-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* ── Header ── */}
          <div className="text-center mb-12">
            <div className="flex flex-col items-center justify-center mb-10">
              <h2 className="text-sm font-semibold text-[#1fa4fc]">
                AI Readiness Audit
              </h2>
              <div className="w-10 h-[3px] bg-[#1fa4fc] mx-auto mt-2 rounded-full" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Start Smart.{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Stay Scalable.
              </span>
            </h2>
            <p className="text-[#5E6874] text-base mb-8 max-w-2xl mx-auto">
              Our free AI-readiness audit breaks down your ops, stack, and workflows—and shows you the things you're not doing (but should be).
            </p>
            <div className="flex items-center justify-center">
              <SITE_CTA
                variant="secondary"
                text="Book My Audit "
                href="/company/contact"
                size="md"
              />
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

// 🔹 helpers
function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
}

function calculateReadTime(html: string) {
  const plainText = html.replace(/<[^>]+>/g, '');
  const wordCount = plainText.trim().split(/\s+/).length;
  const time = Math.ceil(wordCount / 200);
  return `${time} min read`;
}
