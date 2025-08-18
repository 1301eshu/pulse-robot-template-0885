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
  title?: string;
  description?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Growth Natives exceeded expectations by tailoring a marketing package to our eCommerce needs. Within 30 days, revenue rose 52% and organic traffic surged. Their strategic approach and attention to detail delivered measurable, lasting results.",
    author: "Dr. Tarj Mavi",
    position: "Founder",
    company: "LAMAV",
    avatar: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/testimonials/Tarj-Mavi.webp",
  },
  {
    quote:
      "Growth Natives helped Lightspeed enhance the client experience while safeguarding sensitive data. Their HubSpot expertise and tailored solutions have been invaluable, and we look forward to continuing this successful partnership.",
    author: "Mike Mayhew",
    position: "CTO",
    company: "Lightspeed",
    avatar: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/testimonials/Mike-Mayhew.webp",
  },
  {
    quote:
      "For years, Growth Natives has delivered exceptional web development, SEO, and digital marketing services. They’re responsive, skilled, and committed—often working late to meet our needs—making them an indispensable partner.",
    author: "Jeremy Young",
    position: "Chief Strategy Officer",
    company: "Gander Group",
    avatar: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/testimonials/Jeremy-Young.webp",
  },
  {
    quote:
      "Growth Natives rebuilt our web strategy, deployed HubSpot, and boosted lead generation 3–4x in a cost-effective way. Technically adept and highly responsive, they feel like an extension of my team and a true growth driver.",
    author: "Kevin Fliess",
    position: "CMO",
    company: "ALTUM",
    avatar: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/testimonials/Kevin-Fliess.webp",
  },
  {
    quote:
      "This first-class team is responsive, capable, and committed. Working with Growth Natives feels like having an in-house marketing department that delivers results with professionalism and consistency.",
    author: "Neil Anderson",
    position: "CMO",
    company: "Tourmo",
    avatar: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/testimonials/Neil-Anderson.webp",
  },
  {
    quote:
      "Growth Natives maximized our HubSpot usage with lead scoring, workflows, and campaigns, improving efficiency and effectiveness. Their fast responses and expertise have been vital in streamlining our marketing operations.",
    author: "Larissa Varela",
    position: "Global Head of Growth Marketing",
    company: "Pia",
    avatar: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/testimonials/Larissa-Varela.webp",
  },
  {
    quote:
      "Growth Natives transformed our CRM migration with custom automation and scoring systems, streamlining data management and boosting engagement. They’re professional, proactive, and keep us confident in every project stage.",
    author: "Melissa Caffrey",
    position: "Sr. Program Director",
    company: "CMO Huddles",
    avatar: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/testimonials/Melissa.webp",
  },
  {
    quote:
      "As a startup, we needed immediate marketing expertise, and Growth Natives delivered. Their skills in HubSpot, SEO, and LinkedIn ads jump-started our demand generation and set a strong foundation for growth.",
    author: "Mike Liebson",
    position: "VP Marketing",
    company: "New Horizon",
    avatar: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/testimonials/Mike.webp",
  },
  {
    quote:
      "Growth Natives guided us through automation, large contact imports, and HubSpot best practices. Their clear answers and reliable support have been invaluable in making our processes more efficient.",
    author: "Tess Myers",
    position: "Senior Talent Manager",
    company: "CrowdPharm",
    avatar: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/testimonials/Tess-Myers.webp",
  },
  {
    quote:
      "From concept to launch, Growth Natives delivered a high-quality website with clear communication and flexibility. Their attention to detail and smooth processes made the entire project a success.",
    author: "Alexia Smith",
    position: "VP Marketing",
    company: "Dispatch",
    avatar: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/testimonials/Alexia-Smith.webp",
  },
];

// Loop testimonials for infinite scroll effect
const looped = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials({
  title = " Real Stories. Real Growth.",
  description = " What it's like to work with a team that actually builds with you.",
}: TestimonialsProps) {
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
          'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Hero%20Section/8302_gqqgrs.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
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
              className="flex-shrink-0 w-[600px] md:w-[680px] h-[260px] rounded-xl glass-effect p-6 text-white flex flex-col justify-between hover-lift transition-all"
            >
              <div className="text-3xl text-[hsl(var(--primary))] mb-2">“</div>
              <p className="text-sm leading-relaxed mb-4 line-clamp-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-gray-300 text-xs">
                    {t.position}{t.company && `, ${t.company}`}
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
