'use client';

import { useEffect, useRef, useState } from 'react';
import RecentResourcesSection, { ResourceItem } from '@/components/ui/component_10';
import { SITE_CTA } from '@/components/SITE_CTAs';
import { API_BASE_URL } from '../../../apiconfig';

const steps = [
  {
    label: 'Audit',
    title: 'Audit',
    items: [
      'Current tech stack analysis',
      'Workflow efficiency assessment',
      'Identify AI gaps fast',
    ],
  },
  {
    label: 'Opportunity Map',
    title: 'Opportunity Map',
    items: [
      'Spot untapped growth levers',
      'ROI projection modelling',
      'Build AI action roadmap',
    ],
  },
  {
    label: 'Execution Plan',
    title: 'Execution Plan',
    items: [
      'Define rollout phases clearly',
      'Resource allocation strategy',
      'Scale with continuous learning',
    ],
  },
];

const STEP_DURATION = 8000;

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const [recentResources, setRecentResources] = useState<ResourceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const [scrollMt, setScrollMt] = useState(160);

  /** Calculate scroll offset once on mount */
  useEffect(() => {
    const calc = () => {
      const tabsEl = tabsRef.current;
      const headerEl =
        document.querySelector('header') ||
        document.querySelector('nav') ||
        document.querySelector('[data-site-header]');

      const headerH = headerEl ? headerEl.getBoundingClientRect().height : 0;
      const stickyTop = tabsEl ? parseFloat(getComputedStyle(tabsEl).top || '0') || 0 : 0;
      const tabsH = tabsEl ? tabsEl.getBoundingClientRect().height : 0;

      setScrollMt(headerH + stickyTop + tabsH + 12);
    };

    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  /** Fetch posts only once */
  useEffect(() => {
    let cancelled = false;

    async function fetchPosts() {
      try {
        const res = await fetch(`${API_BASE_URL}/wp-json/wp/v2/posts?per_page=3&_embed`);
        const data = await res.json();

        if (cancelled) return;

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
        if (!cancelled) setIsLoading(false);
      }
    }

    fetchPosts();
    return () => {
      cancelled = true;
    };
  }, []);

  /** Autoplay step tabs */
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActive((a) => (a + 1) % steps.length);
          return 0;
        }
        return prev + 100 / (STEP_DURATION / 50);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleStepClick = (index: number) => {
    setActive(index);
    setProgress(0);

    const tabsEl = tabsRef.current;
    const cardEl = cardRefs.current[index];
    if (!tabsEl || !cardEl) return;

    const headerEl =
      document.querySelector('header') ||
      document.querySelector('nav') ||
      document.querySelector('[data-site-header]');

    const headerH = headerEl ? headerEl.getBoundingClientRect().height : 0;
    const stickyTop = parseFloat(getComputedStyle(tabsEl).top || '0') || 0;
    const tabsH = tabsEl.getBoundingClientRect().height;
    const margin = 12;

    const offset = headerH + stickyTop + tabsH + margin;
    const cardTop = cardEl.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: cardTop - offset,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Recent Resources Section */ }
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="In the News & On the Move"
          body="Recognition, partnerships, and proof that we're moving the needle."
          resourceType="70"
          subTabs={[]}
          resources={recentResources}
        />
      </div>

      {/* AI Readiness Section */}
      <section ref={sectionRef} className="relative bg-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex flex-col items-center justify-center mb-10">
              <h4 className="text-sm font-semibold text-[#1fa4fc]">AI Readiness Audit</h4>
              <div className="w-10 h-[3px] bg-[#1fa4fc] mx-auto mt-2 rounded-full" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Start Smart.{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Stay Scalable.
              </span>
            </h2>
            <p className="text-[#5E6874] text-base mb-8 max-w-2xl mx-auto">
              Our free AI-readiness audit breaks down your ops, stack, and workflows-and shows you
              the things you're not doing (but should be).
            </p>
            <div className="flex items-center justify-center">
              <SITE_CTA variant="secondary" text="Book My Audit" href="/contact-us" size="md" />
            </div>
          </div>

          {/* Sticky Tabs */}
          <div
            ref={tabsRef}
            className="sticky top-[80px] z-40 bg-white/95 backdrop-blur pt-4 pb-6 mb-8"
          >
            <div className="flex justify-center items-center gap-4 mb-3">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => handleStepClick(i)}
                  className={`px-6 py-2 rounded-full font-semibold text-sm transition ${
                    active === i
                      ? 'bg-[#F8FAFB] text-[#1D4ED8]'
                      : 'opacity-50 hover:opacity-80 text-[#334155]'
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>
            <div className="relative h-2 w-full max-w-xl mx-auto rounded-full bg-gray-200 overflow-hidden">
              <div
                className="absolute h-full rounded-full transition-all duration-300"
                style={{
                  width: `${(active + progress / 100) * (100 / steps.length)}%`,
                  background: 'linear-gradient(to right, #051F4D, #36478E)',
                }}
              />
            </div>
          </div>

          {/* Step Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                ref={(el) => el && (cardRefs.current[idx] = el)}
                onClick={() => handleStepClick(idx)}
                style={{ scrollMarginTop: scrollMt }}
                className={`transition-all duration-500 p-6 rounded-2xl cursor-pointer ${
                  active === idx
                    ? 'bg-[#F8FAFB] shadow-xl border border-blue-100 scale-[1.02] opacity-100'
                    : 'opacity-50 hover:opacity-75 scale-95 border border-gray-100'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full text-white font-bold text-sm flex items-center justify-center mb-4 ${
                    active === idx ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">{step.title}</h3>
                <ul className="space-y-2">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span
                        className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${
                          active === idx ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={`text-sm ${
                          active === idx ? 'text-[#334155]' : 'text-gray-400'
                        }`}
                      >
                        {item}
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

// Utility functions
function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
}

function calculateReadTime(html: string) {
  const plainText = html.replace(/<[^>]+>/g, '');
  const wordCount = plainText.trim().split(/\s+/).length;
  const time = Math.ceil(wordCount / 200);
  return `${time} min read`;
}
