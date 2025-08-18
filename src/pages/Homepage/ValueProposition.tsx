
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  TrendingUp,
  Target,
  Zap,
  Bot,
  Activity,
  Brain,
  BarChart,
  Settings,
  MessageCircle,
  Filter,
} from "lucide-react";

const valueItems = [
  {
    title: "Smart Workflow Automation",
    desc: "Triggers, tasks, and touchpoints—handled without lifting a finger.",
    icon: Settings,
  },
  {
    title: "NLP-Powered Chatbots",
    desc: "Bots that talk like people. Convert like pros.",
    icon: Bot,
  },
  {
    title: "ML-Driven Buying",
    desc: "Real-time budget shifts. Smarter ad decisions on autopilot.",
    icon: BarChart,
  },
  {
    title: "AI-Augmented UX Testing",
    desc: "UX decisions backed by user behavior, not opinion.",
    icon: Activity,
  },
  {
    title: "AI-Driven Churn Prediction",
    desc: "See the warning signs before they leave. Take action before it's too late.",
    icon: TrendingUp,
  },
  {
    title: "Auto-Tagging & Enrichment of CRM Data",
    desc: "Your CRM, finally clean. Auto-tagged, deduped, and enriched—like magic.",
    icon: Filter,
  },
  {
    title: "Adaptive Campaign Budgets",
    desc: "Let AI shift your dollars in real time—toward what's working now.",
    icon: Brain,
  },
  {
    title: "Dynamic Content Personalization",
    desc: "Messages that rewrite themselves—based on who's reading.",
    icon: MessageCircle,
  },
  {
    title: "Predictive Campaign Performance",
    desc: "See what's likely to win. Scale before it's obvious.",
    icon: Sparkles,
  },
];


const ValueProposition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 🌄 Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Hero%20Section/8302_gqqgrs.webp"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 📦 Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* 🧠 Header */}
          <div className="text-center mb-16">
            <div className="flex flex-col items-center justify-center mb-10">
              <h2 className="text-sm font-semibold text-[#1fa4fc]">
                Our AI Difference
              </h2>
              <div className="w-10 h-[3px] bg-[#1fa4fc] mx-auto mt-2 rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              What AI-Native Looks Like
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We use AI not for show, but for scale. With AI infused across
              content, data, delivery, and decision-making—every touchpoint gets
              smarter by design.
            </p>
          </div>

          {/* 💎 Cards */}
          <div
            ref={containerRef}
            className="flex flex-wrap justify-center gap-x-6 gap-y-8"
          >
            {valueItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm group relative p-6 rounded-2xl 
                    bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 
                    hover:border-blue-500/30 transition-all duration-700 hover:scale-105 transform-gpu
                    ${
                      revealed
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 min-w-[48px] bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors duration-300">
                        {item.title}
                      </h4>
                    </div>

                    {/* Description - left-aligned under icon */}
                    <p className="mt-4 text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
