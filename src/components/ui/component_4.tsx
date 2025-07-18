'use client';

import { useEffect, useRef, useState } from 'react';

type Testimonial = {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
};

type TestimonialsProps = {
  title: string;
  description: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Growth Natives revamped our marketing ops from the ground up. We saw a 48% lift in qualified leads in Q2 alone.",
    author: "Sarah Johnson",
    position: "VP Marketing",
    company: "SaaS Company",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
  },
  {
    quote:
      "Their HubSpot expertise is top-tier. Our sales enablement flows are now fully automated and converting at 3x the previous rate.",
    author: "Michael Chen",
    position: "Revenue Operations Lead",
    company: "FinTech Startup",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    quote:
      "Smart team. Agile execution. Real ROI. They delivered a complete marketing transformation in under 90 days.",
    author: "Lisa Rodriguez",
    position: "CMO",
    company: "Global Retail Brand",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

// Repeat enough to make infinite scroll work
const looped = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials({ title, description }: TestimonialsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let frame: number;
    const scroll = () => {
      if (!isPaused && el) {
        el.scrollLeft += 1;
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(scroll);
    };
    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  return (
    <section
      className="relative py-20 w-full overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title.split(' ').map((word, i) =>
            i === 2 ? (
              <span key={i} className="text-[hsl(var(--primary))]">{' ' + word}</span>
            ) : (
              ' ' + word
            )
          )}
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">{description}</p>
      </div>

      <div
        className="overflow-x-auto flex w-full scrollbar-hide"
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="flex gap-6 px-6 py-4 w-max">
          {looped.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[340px] h-[260px] rounded-xl glass-effect p-6 text-white flex flex-col justify-between hover-lift transition-all"
            >
              <div className="text-3xl text-[hsl(var(--primary))] mb-2">“</div>
              <p className="text-sm leading-relaxed mb-4">{t.quote}</p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-gray-300 text-xs">
                    {t.position}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
