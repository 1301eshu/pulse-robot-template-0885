import React, { useEffect, useRef, useState } from "react";
import { Calendar, Sparkles, Target, TrendingUp, Globe } from "lucide-react";

const OurJourney = () => {
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description: "We started out to make digital work better for people. A small team rolled up sleeves, built fast, and focused on outcomes.",
      image: "https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/about%20us/The%20Beginning.webp",
      icon: Sparkles
    },
    {
      year: "2020",
      title: "Building the Basics",
      description: "We set up clean processes and already took a pace in marketing, data, and CX. Quality got tighter, speed went up.",
      image: "https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/about%20us/Building%20the%20Basics.webp",
      icon: Target
    },
    {
      year: "2021",
      title: " Serving Global Clients ",
      description: "Started working on full-funnel projects from across the world. We learned time-zone rhythm, kept communication simple, and shipped on schedule.",
      image: "https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/about%20us/Serving%20Global%20Clients.webp",
      icon: Globe
    },
    {
      year: "2022",
      title: "  Scaling Smarter  ",
      description: "Built stronger delivery frameworks, introduced structured playbooks for each service line, and strengthened cross-team collaboration. The foundation was set for hyper-growth & bigger bets. ",
      image: "https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/about%20us/2022.webp",
      icon: Globe
    },
    {
      year: "2023",
      title: " AI Entered the Org",
      description: "The crew got bigger and AI-fluent, and we became smarter together. Requests spiked. We delivered, and the run kept building. ",
      image: "https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/about%20us/AI%20Entered%20the%20Org.jpg",
      icon: Sparkles
    },
    {
      year: "2024",
      title: " Inc. 5000 #606 ",
      description: "We made the Inc. 5000 list at #606 (we’re still not chill about it), and we thank our customers, partners, and the team for it. AI became part of daily work: automation, smart content, and better decisions.",
      image: "https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/about%20us/INC%205000.webp",
      icon: TrendingUp
    },
    {
      year: "2025",
      title: "  Onwards and Upwards ",
      description: "We earned a spot again on the Inc. 5000 list. This time at #1876. More R&D, more AI-powered functioning, stronger partnerships, and a focus on helping every client grow with us. ",
      image: "https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/about%20us/Onwards%20and%20Upwards.webp",
      icon: TrendingUp
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute("data-index") || "0");
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisibleMilestones((prev) => [...prev, index]);
          }, index * 200);
        }
      });
    }, { threshold: 0.4 });

    const items = sectionRef.current?.querySelectorAll(".milestone");
    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="py-24 bg-slate-900/50">
      <div className="section-wrapper">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From a small team with big dreams to an AI-first growth powerhouse
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 opacity-30 z-0" />

          {/* ↑ Increased vertical spacing & column gap on md+ */}
          <div className="space-y-20 md:space-y-28 relative z-10">
            {milestones.map((milestone, index) => {
              const isVisible = visibleMilestones.includes(index);
              const animationClass = `transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`;

              return (
                <div
                  key={index}
                  data-index={index}
                  className="milestone grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 relative"
                >
                  {/* Mobile icon */}
                  <div className="block md:hidden text-center mb-4">
                    <div className={`w-14 h-14 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center transition-all duration-1000 ${
                      isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                    }`}>
                      <milestone.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Text – added padding on the center side */}
                  <div className={`${animationClass} md:pr-20 lg:pr-24`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30 mb-4">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-400 text-sm font-medium">{milestone.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{milestone.description}</p>
                  </div>

                  {/* Image – added padding on the center side */}
                  <div className={`${animationClass} md:pl-20 lg:pl-24`}>
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                    />
                  </div>

                  {/* Desktop icon */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center transition-all duration-1000 ${
                      isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                    }`}>
                      <milestone.icon className="w-7 h-7 text-white" />
                    </div>
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

export default OurJourney;
