"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import SITE_CTA from "@/components/SITE_CTAs";
import HeroSection from "@/components/ui/component_7";
import CoreValues, { ValueType } from "@/components/ui/component_11";
import ContactCta from "@/components/ui/component_6";
import {
  Sparkles,
  Target,
  Users,
  TrendingUp,
  Heart,
  Lightbulb,
  Award,
  ChevronDown,
  CheckCircle,
  Globe,
  MapPin,
  Calendar,
  ArrowRight,
  Smile,
  BookOpen,
  ShieldCheck,
  Handshake,
  Crosshair,
  Puzzle,
  BookOpenCheck,
  BarChart3,
  Rocket
} from "lucide-react";

export const aboutPageValues: ValueType[] = [
  {
    icon: Handshake,
    title: "We Over Me",
    description: "Our team-oriented work environment is driven by a sense of community and co-operation."
  },
  {
    icon: Crosshair,
    title: "Focus On Customer Success",
    description: "Encouragement of innovation and creativity breed diligence, initiative, and responsibility."
  },
  {
    icon: Puzzle,
    title: "Pleasant, Honest & Fun",
    description: "The perfect conditions to create, innovate, and solve problems, having a good time."
  },
  {
    icon: BookOpenCheck,
    title: "Never-Stop-Learning Attitude",
    description: "When life gives us lemons, we turn them into lessons and sometimes, ebooks."
  },
  {
    icon: BarChart3,
    title: "Pride In Growth",
    description: "Our only competition is ourselves as we strive to be better tomorrow than we were yesterday."
  },
  {
    icon: Rocket,
    title: "Motivation Driven By Entrepreneurship",
    description: "Encouragement of innovation and creativity breed diligence, initiative, and responsibility."
  }
];

const AboutHeroSection = () => {
  return (
    <section className="relative">
      <HeroSection
        heading="Customer Obsessed. AI-First."
        highlight="Growth Experts."
        subtext="We're not just a service provider—we're your full-stack growth partner, obsessed with your success and powered by cutting-edge AI."
        bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
        rightImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png"
      />
      {/* Add white buffer below the rounded section */}
      <div className="h-16 w-full bg-white" />
    </section>
  );
};
// Who We Are Section
const WhoWeAreSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="who-we-are" ref={sectionRef} className="mt-24 mb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Who We Are</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              We're the <span className="text-blue-400">growth hackers</span> your competition fears
            </h2>

            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                Founded on the belief that growth should be intelligent, measurable, and sustainable, 
                Growth Natives emerged from a simple truth: most agencies talk strategy but deliver tactics.
              </p>
              <p>
                We're different. We build end-to-end growth systems that think, learn, and scale. 
                Our team combines the analytical minds of data scientists, the creativity of growth marketers, 
                and the precision of engineers.
              </p>
              <p>
                From Fortune 500 companies to ambitious startups, we've proven that when AI meets 
                human ingenuity, growth becomes inevitable.
              </p>
            </div>
          </div>

          {/* Right - Animated Visual */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="absolute inset-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                        <Target className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
                      <p className="text-gray-400">Projects Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center animate-bounce">
                <TrendingUp className="w-10 h-10 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Journey Timeline Section
const JourneySection = () => {
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const milestones = [
    {
      year: "2016",
      title: "The Beginning",
      description: "Founded with a vision to transform digital experiences through innovative solutions and cutting-edge technology.",
      image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg",
      icon: Sparkles
    },
    {
      year: "2018",
      title: "AI Integration",
      description: "Pioneered AI-driven marketing solutions, revolutionizing how businesses connect with their customers.",
      image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg",
      icon: Target
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Expanded operations worldwide, bringing our expertise to clients across multiple continents.",
      image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751991200/milestone-2020.png",
      icon: Globe
    },
    {
      year: "2022",
      title: "Innovation Labs",
      description: "Launched dedicated innovation labs to research and develop next-generation digital solutions.",
      image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751991200/milestone-2022.png",
      icon: Sparkles
    },
    {
      year: "2024",
      title: "AI-First Future",
      description: "Leading the industry with AI-first strategies and transformative technologies for the digital future.",
      image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751991200/milestone-2024.png",
      icon: TrendingUp
    }
  ];

 useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-index') || '0');
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisibleMilestones(prev => [...prev, index]);
          }, index * 200);
        }
      });
    }, { threshold: 0.4 });

    const items = sectionRef.current?.querySelectorAll('.milestone');
    items?.forEach(el => observer.observe(el));

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
      
      {/* Vertical timeline for desktop only */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 opacity-30 z-0" />

      <div className="space-y-20 md:space-y-28 relative z-10">
        {milestones.map((milestone, index) => {
          const isLeft = index % 2 === 0;
          const isVisible = visibleMilestones.includes(index);
          const baseAnimation = `transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`;

          return (
            <div
              key={index}
              data-index={index}
              className="milestone grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 relative"
            >
              {/* Icon Centered for Mobile */}
              <div className="block md:hidden text-center mb-4">
                <div className={`w-14 h-14 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center transition-all duration-1000 ${
                  isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                }`}>
                  <milestone.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Text Content */}
              <div className={`${baseAnimation}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30 mb-4">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">{milestone.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{milestone.description}</p>
              </div>

              {/* Image Content */}
              <div className={`${baseAnimation}`}>
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                />
              </div>

              {/* Desktop Center Timeline Icon */}
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

// Office Locations Section
const LocationsSection = () => {
  const locations = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Innovation Street",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      city: "London",
      country: "UK", 
      address: "456 Tech Avenue",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop"
    },
    {
      city: "Mumbai",
      country: "India",
      address: "789 Growth Plaza",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Global <span className="text-blue-500">Presence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Silicon Valley to Mumbai, our teams work around the clock to fuel your growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl group shadow-xl transition-transform hover:scale-[1.03]"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                <img
                  src={location.image}
                  alt={location.city}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-3xl"></div>
              </div>

              {/* Text Content - Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-lg font-semibold">
                    {location.city}, {location.country}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{location.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const About = () => {
  // Set meta title and tags
  useEffect(() => {
    document.title = "demo title";
    
    // Update or create meta description tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'demo tags');
    
    // Update or create meta keywords tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'demo tags');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SmartBreadcrumb />
      <main>
        <AboutHeroSection />
        <WhoWeAreSection />
        <div className="w-full bg-white">
          <CoreValues values={aboutPageValues} />
        </div>
        <JourneySection />
        <LocationsSection />
        <ContactCta 
          heading="Ready to Transform Your Business?"
          subtext="Let's discuss how our expertise can help you achieve your goals and drive sustainable growth."
        />
      </main>
      <Footer />
    </div>
  );
};

export default About;