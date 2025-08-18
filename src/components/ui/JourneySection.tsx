import React, { useEffect, useRef, useState } from "react";
import { Calendar, Sparkles, Target, TrendingUp, Globe } from "lucide-react";

const OurJourney = () => {
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const milestones = [
    {
      year: "2016",
      title: "The Beginning",
      description: "Founded with a vision to transform digital experiences through innovative solutions and cutting-edge technology.",
      image: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Company/About%20us/The%20Beginning.webp",
      icon: Sparkles
    },
    {
      year: "2018",
      title: "AI Integration",
      description: "Pioneered AI-driven marketing solutions, revolutionizing how businesses connect with their customers.",
      image: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Company/About%20us/AI%20Integration.webp",
      icon: Target
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Expanded operations worldwide, bringing our expertise to clients across multiple continents.",
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/about%20us%20/Growth%20Journey%20/Global.webp",
      icon: Globe
    },
    {
      year: "2022",
      title: "Innovation Labs",
      description: "Launched dedicated innovation labs to research and develop next-generation digital solutions.",
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/about%20us%20/Growth%20Journey%20/innovation.webp",
      icon: Sparkles
    },
    {
      year: "2024",
      title: "AI-First Future",
      description: "Leading the industry with AI-first strategies and transformative technologies for the digital future.",
      image: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Company/About%20us/AI%20first%20future.webp",
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
                  className="milestone grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 relative"
                >
                  {/* Mobile icon */}
                  <div className="block md:hidden text-center mb-4">
                    <div className={`w-14 h-14 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center transition-all duration-1000 ${
                      isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                    }`}>
                      <milestone.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className={animationClass}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30 mb-4">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-400 text-sm font-medium">{milestone.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{milestone.description}</p>
                  </div>

                  {/* Image */}
                  <div className={animationClass}>
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
