import React, { useState, useEffect } from "react";
import { SITE_CTA } from "./SITE_CTAs";

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
    //cta: { label: "Get a Complimentary Consultation!" },
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
    //cta: { label: "Get a Complimentary Consultation!" },
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
    //cta: { label: "Get a Complimentary Consultation!" },
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
    <section className="w-full py-20 px-4 bg-white flex flex-col items-center">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#131829] mb-12 text-center">
        What Our Clients Are Saying
      </h2>

      {/* Card Container */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 bg-[#F8FAFB] rounded-xl p-6 md:p-10 transition-all duration-700 ease-in-out">
        {/* Left Section */}
        <div key={active + "-left"} className="flex-1 animate-fadeSlideUp">
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

{/* CTA is hidden for all, so divider is also removed */}
{/* <div className="h-px bg-[#E0E0E0] mb-4 w-full" />
<SITE_CTA 
  variant="primary" 
  text={current.cta.label} 
  href="/company/contact"
  size="md"
/> */}

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

      {/* Dots Navigation */}
      <div className="mt-8 flex space-x-4 justify-center">
        {clients.map((client, idx) => (
          <button
            key={client.name}
            onClick={() => setActive(idx)}
            className={`h-10 w-10 rounded-full border ${
              idx === active
                ? "border-[#131829] bg-[#131829]"
                : "border-[#D0D5DD]"
            } flex items-center justify-center transition`}
            aria-label={`Go to ${client.name}`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                idx === active ? "bg-white" : "bg-[#D0D5DD]"
              }`}
            ></div>
          </button>
        ))}
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

