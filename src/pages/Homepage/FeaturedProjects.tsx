import React, { useEffect, useMemo, useRef, useState } from "react";
import { SITE_CTA } from "@/components/SITE_CTAs";

/** Types */
type Stat = { value: number; suffix: string; desc: string };
type Client = {
  logo: string;
  name: string;
  headline: string;
  person: string;
  stats: Stat[];
  image: string;
  /** Optional CTA – omit/comment out to hide */
  cta?: { label: string; link?: string };
  /** YouTube video URL; supports share/watch/embed formats */
  videoUrl?: string;
};

/** Data */
const clients: Client[] = [
  {
    logo: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Featured%20Projects/image_233_dqgnfw.webp",
    name: "Spirent",
    headline: `"Real clients. Real results. Real systems that keep delivering long afterlaunch."`,
    person: "— Marketing Director, Spirent",
    stats: [
      { value: 20, suffix: "%", desc: "Hike in session duration & pages/session" },
      { value: 25, suffix: "%", desc: "Increase in keyword rankings & organic traffic" },
    ],
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Featured%20Projects/Spirent_kx85rz.webp",
    // cta: { label: "Get a Complimentary Consultation!", link: "/company/contact" },
    videoUrl: "https://www.youtube.com/watch?v=aYrhl6pSTpA&ab_channel=GrowthNatives",
  },
  {
    logo: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Featured%20Projects/Image_6_avhf1r.webp",
    name: "LAMAV",
    headline: `"Organic results powered by AI-first strategies."`,
    person: "— CEO, LAMAV",
    stats: [
      { value: 48, suffix: "%", desc: "Surge in user engagement" },
      { value: 271, suffix: "%", desc: "Rise in organic traffic with D2C" },
    ],
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Featured%20Projects/Lamav_duxryv.webp",
    // cta: { label: "Get a Complimentary Consultation!", link: "/company/contact" },
    videoUrl: "https://www.youtube.com/watch?v=_sLeCktGX9k&ab_channel=GrowthNatives",
  },
  {
    logo: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Featured%20Projects/Image_7_tqfiig.webp",
    name: "Escalon",
    headline: `"Powerful automation that boosts financial clarity and business scalability."`,
    person: "— CFO, Escalon",
    stats: [
      { value: 3, suffix: "x", desc: "Operational efficiency improvement" },
      { value: 25, suffix: "%", desc: "Reduction in manual effort" },
    ],
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Featured%20Projects/Cover_wbbgla.webp",
    // cta: { label: "Get a Complimentary Consultation!", link: "/company/contact" },
    videoUrl: "https://www.youtube.com/watch?v=dU1HuqQ76rQ&ab_channel=GrowthNatives",
  },
];

/** Utils */
function toEmbedUrl(url?: string, autoplay = true): string | undefined {
  if (!url) return undefined;
  try {
    const u = new URL(url);
    let id = "";
    // https://youtu.be/VIDEO
    if (u.hostname.includes("youtu.be")) {
      id = u.pathname.replace("/", "");
    }
    // https://www.youtube.com/watch?v=VIDEO
    else if (u.searchParams.get("v")) {
      id = u.searchParams.get("v") || "";
    }
    // already /embed/VIDEO
    else if (u.pathname.includes("/embed/")) {
      id = u.pathname.split("/embed/")[1];
    }
    if (!id) return url; // fallback to given URL
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
      ...(autoplay ? { autoplay: "1" } : {}),
    }).toString();
    return `https://www.youtube.com/embed/${id}?${params}`;
  } catch {
    return url;
  }
}

function useCountUp(target: number, active: number) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame = 0;
    let start: number | undefined;
    const duration = 800;
    const step = (ts: number) => {
      if (start === undefined) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, active]);
  return count;
}

/** Component */
export default function ClientShowcaseCard() {
  const [active, setActive] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const current = clients[active];
  const embedUrl = useMemo(() => toEmbedUrl(current.videoUrl, true), [current.videoUrl]);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Auto-scroll every 7s
  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % clients.length), 7000);
    return () => clearInterval(id);
  }, []);

  // ESC to close modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoOpen(false);
    };
    if (isVideoOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isVideoOpen]);

  return (
    <section className="py-16 px-4 flex flex-col items-center">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#131829] mb-4">
          How Smart Growth Really Looks
        </h2>
        <p className="text-[#5E6874] text-base">
          Real clients. Real results. Real systems that keep delivering long after launch.
        </p>
      </div>

      {/* Card */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 bg-[#F8FAFB] rounded-xl p-6 md:p-10 transition-all duration-700 ease-in-out">
        {/* Left */}
        <div key={active + "-left"} className="flex-1 flex flex-col justify-between animate-fadeSlideUp">
          <div>
            <img src={current.logo} alt={current.name} className="h-6 mb-4" />
            <blockquote className="text-2xl md:text-3xl font-light text-[#131829] leading-snug mb-6">
              {current.headline}
            </blockquote>
            <p className="text-[#5E6874] text-base mb-8">{current.person}</p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {current.stats.map((stat, idx) => {
                const value = useCountUp(stat.value, active);
                return (
                  <div key={idx}>
                    <div className="text-[1.5rem] font-semibold text-black">
                      {value}{stat.suffix}
                    </div>
                    <div className="text-sm text-[#5E6874]">{stat.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Divider + CTA only if present */}
          {current.cta && (
            <>
              <div className="h-px bg-[#E0E0E0] mb-4 w-full" />
              <SITE_CTA
                variant="secondary"
                text={current.cta.label}
                href={current.cta.link || "/case-studies"}
                size="md"
              />
            </>
          )}
        </div>

        {/* Right (image + play CTA) */}
        <div key={active + "-right"} className="flex-1 animate-fadeSlideUp">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm relative group">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover animate-subtleZoom"
            />

          {/* Minimal bottom-right transparent play button */}
{/* Minimal bottom-right transparent play button with pulsating rings */}
{current.videoUrl && (
  <button
    onClick={() => setIsVideoOpen(true)}
    className="absolute bottom-4 right-4 rounded-full p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/40 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/60"
    aria-label={`Play video for ${current.name}`}
  >
    <div className="relative w-10 h-10 flex items-center justify-center rounded-full">
      {/* Pulsating rings */}
      <span className="absolute inset-0 rounded-full border border-white/30 scale-[1.15] animate-ping" />
      <span className="absolute inset-0 rounded-full border border-white/50 scale-[1.3] animate-ping animation-delay-300" />
      {/* Play icon */}
      <svg viewBox="0 0 20 20" className="w-12 h-12 text-white relative z-10" fill="currentColor">
        <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
      </svg>
    </div>
  </button>
)}

<style>{`
  @keyframes pulseRing {
    0% { transform: scale(1.15); opacity: 0.8; }
    50% { transform: scale(1.45); opacity: 0.4; }
    100% { transform: scale(1.15); opacity: 0.8; }
  }
  .animate-pulseRing {
    animation: pulseRing 2.5s ease-in-out infinite;
  }
  .delay-500 {
    animation-delay: 1.25s;
  }
`}</style>

          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center">
        <div className="flex gap-2">
          {clients.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`transition-all duration-300 ${idx === active ? 'w-6 h-2.5 rounded-full bg-[#131829]' : 'w-2.5 h-2.5 rounded-full bg-[#D0D5DD]'}`}
              aria-label={`Go to client ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && embedUrl && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-[1px] flex items-center justify-center z-50"
          onClick={() => setIsVideoOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-black rounded-lg overflow-hidden relative w-[92%] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-2 right-2 text-white text-xl px-3 py-1 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Close video"
            >
              ✕
            </button>
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={embedUrl}
                title={`${current.name} video`}
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes subtleZoom { 0%{transform:scale(1)}50%{transform:scale(1.03)}100%{transform:scale(1)} }
        .animate-subtleZoom { animation: subtleZoom 20s ease-in-out infinite; }
        @keyframes fadeSlideUp { 0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)} }
        .animate-fadeSlideUp { animation: fadeSlideUp 0.8s ease-in-out; }
      `}</style>
    </section>
  );
}
