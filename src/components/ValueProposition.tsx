"use client";
import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, Sparkles, TrendingUp, Target, Zap } from "lucide-react";

const valueItems = [
  {
    title: "Data-First Approach",
    desc: "Every strategy backed by deep analytics and market insights",
    icon: TrendingUp
  },
  {
    title: "Full-Stack Expertise",
    desc: "From strategy to execution, we handle every aspect",
    icon: Zap
  },
  {
    title: "Scalable Solutions",
    desc: "Built to grow with your business needs",
    icon: Target
  },
  {
    title: "Proven ROI",
    desc: "Track record of delivering measurable business impact",
    icon: Sparkles
  }
];

const ValueProposition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 🌄 Background Image with black overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* 🧠 Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Our Value Proposition</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Growth Engine, Powered by{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Strategy, Tech & Execution
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At Growth Natives, we blend{" "}
              <span className="text-white font-semibold">marketing acumen</span>,{" "}
              <span className="text-white font-semibold">technical expertise</span>, and{" "}
              <span className="text-white font-semibold">creative execution</span> to craft
              digital ecosystems that scale.
            </p>
          </div>

          {/* 💎 Value Cards */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            ref={containerRef}
          >
            {valueItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-700 hover:scale-105 opacity-0 translate-y-8 ${
                    revealed ? `delay-[${index * 150}ms] opacity-100 translate-y-0` : ""
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h4 className="text-white font-bold text-xl mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {item.desc}
                    </p>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 cursor-pointer">
              <span>Ready to accelerate your growth?</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
