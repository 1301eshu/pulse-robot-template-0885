import React, { useState, useEffect } from "react";
import { SITE_CTA } from "@/components/SITE_CTAs";

const clients = [
  {
    logo: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751358941/image_233_dqgnfw.png",
    name: "Spirent",
    headline: `"Real clients. Real results. Real systems that keep delivering long afterlaunch."`,
    person: "— Marketing Director, Spirent",
    stats: [
      { value: 20, suffix: "%", desc: "Hike in session duration & pages/session" },
      { value: 25, suffix: "%", desc: "Increase in keyword rankings & organic traffic" },
    ],
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751359291/Spirent_kx85rz.png",
    cta: { label: "Get a Complimentary Consultation!" },
  },
  {
    logo: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751360246/Image_6_avhf1r.png",
    name: "LAMAV",
    headline: `"Organic results powered by AI-first strategies."`,
    person: "— CEO, LAMAV",
    stats: [
      { value: 48, suffix: "%", desc: "Surge in user engagement" },
      { value: 271, suffix: "%", desc: "Rise in organic traffic with D2C" },
    ],
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751360248/Lamav_duxryv.png",
    cta: { label: "Get a Complimentary Consultation!" },
  },
  {
    logo: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png",
    name: "Escalon",
    headline: `"Powerful automation that boosts financial clarity and business scalability."`,
    person: "— CFO, Escalon",
    stats: [
      { value: 3, suffix: "x", desc: "Operational efficiency improvement" },
      { value: 25, suffix: "%", desc: "Reduction in manual effort" },
    ],
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361552/Cover_wbbgla.png",
    cta: { label: "Get a Complimentary Consultation!" },
  }
];

function useCountUp(target, active) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame;
    let start;
    const duration = 800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    cancelAnimationFrame(frame);
    requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, active]);
  return count;
}

export default function ClientShowcaseCard() {
  const [active, setActive] = useState(0);
  const current = clients[active];

  // Auto-scroll every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % clients.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 flex flex-col items-center">
      {/* Section Heading + Subtext */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#131829] mb-4">
         How Smart Growth Really Looks 
        </h2>
        <p className="text-[#5E6874] text-base">
         Real clients. Real results. Real systems that keep delivering long after launch.
        </p>
      </div>

      {/* Card Container */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 bg-[#F8FAFB] rounded-xl p-6 md:p-10 transition-all duration-700 ease-in-out">
        {/* Left Section with animation */}
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
                      {value}
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-[#5E6874]">{stat.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#E0E0E0] mb-4 w-full" />

          {/* CTA */}
          <SITE_CTA 
            variant="primary" 
            text={current.cta.label} 
            href="/company/contact"
            size="md"
          />
        </div>

        {/* Right Section */}
        <div key={active + "-right"} className="flex-1 animate-fadeSlideUp">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm relative">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover animate-subtleZoom"
            />
          </div>
        </div>
      </div>

      {/* Dots Navigation - pill for active, circles for inactive */}
      <div className="mt-8 flex justify-center">
  <div className="flex gap-2">
    {clients.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setActive(idx)}
        className={`transition-all duration-300 ${
          idx === active
            ? 'w-6 h-2.5 rounded-full bg-[#131829]'
            : 'w-2.5 h-2.5 rounded-full bg-[#D0D5DD]'
        }`}
        aria-label={`Go to client ${idx + 1}`}
      />
    ))}
  </div>
</div>



      {/* Animations */}
      <style>{`
        @keyframes subtleZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }
        .animate-subtleZoom {
          animation: subtleZoom 20s ease-in-out infinite;
        }
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.8s ease-in-out;
        }
      `}</style>
    </section>
  );
}

