"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import SITE_CTA from "@/components/SITE_CTAs";
import HeroSection from "@/components/ui/component_7";
import CoreValues, { ValueType } from "@/components/ui/component_11";
import ContactCta from "@/components/ui/component_6";
import InstagramSection from "@/components/ui/component_16";
import WordMap from "@/components/ui/component_17";
import Testimonials from "@/pages/Homepage/Testimonials";
import TrustedByCustomers from "@/components/ui/component_18";
import DynamicSEO from "@/components/DynamicSEO";
import MissionVisionSection from "@/components/ui/MissionVisionSection";
import JourneySection from "@/components/ui/JourneySection";
import BentoGallery from '@/components/ui/BentoGallery';
{/*import LocationsSection from "@/components/ui/LocationsSection"; */}
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
    title: "We Over Me ",
    description: "We believe the best ideas come from collaboration, not ego. Around here, success is a team sport—and we're all in. "
  },
  {
    icon: Crosshair,
    title: "Focus On Customer Success ",
    description: "Our wins don't count unless our clients are winning too. We go deep, stay curious, and treat your KPIs like they're our own. "
  },
  {
    icon: Puzzle,
    title: "Pleasant, Honest & Fun ",
    description: "We take our work seriously—but not ourselves. We show up with good vibes, real talk, and zero jargon. (Okay, maybe some AI lingo.) "
  },
  {
    icon: BookOpenCheck,
    title: "Never-Stop-Learning Attitude ",
    description: "Tech doesn't stand still—and neither do we. We're always leveling up, geeking out, and pushing the boundaries of what's possible. "
  },
  {
    icon: BarChart3,
    title: "Pride In Growth ",
    description: "Whether it's personal, professional, or platform performance—we care deeply about getting better, together. That's what #GrowingTogether really means. "
  },
  {
    icon: Rocket,
    title: "Motivation Driven By Entrepreneurship ",
    description: "We think like owners because we are owners. Every Native brings hustle, heart, and a whole lot of initiative to the table—no hand-holding required. "
  }
];

const AboutHeroSection = () => {
  return (
    <section className="relative">
      <HeroSection
        heading="We're Growth Natives. Part Technologists, Part Creatives. 100% AI-Powered."
        subtext="We're a next-gen Marketing & Customer Engagement Agency, merging cutting-edge AI technology with creative spark to build digital experiences that actually work. From automation to analytics, we design, develop, and deliver tools that elevate brands and delight customers. "
        bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
        rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/image%20(33).png"
     
       noCta // ✅ just add this 
         />
      <div className="h-16 w-full bg-white" />
    </section>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="about" />
      <Header />
      <SmartBreadcrumb />
      <main>
        <AboutHeroSection />
        <MissionVisionSection />
        <div className="w-full bg-white">
          <CoreValues values={aboutPageValues} />
        </div>
        <JourneySection />
        <InstagramSection />
        <WordMap />
        <Testimonials title="The only thing better than our tech? Our relationships. " />
        <TrustedByCustomers />
        <BentoGallery />
        {/* <LocationsSection /> */}
        <ContactCta 
          heading="You bring the ambition. We'll bring the AI. "
          subtext="Together, we'll build the kind of growth that makes people say: 'How did they do that?'&nbsp;"
          buttonLabel=" Let's Talk"
        />
      </main>
      <Footer />
    </div>
  );
};

export default About;
