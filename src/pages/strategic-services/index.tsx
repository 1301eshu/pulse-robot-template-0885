// src/pages/services/MarketingAutomation.tsx

import { useState } from "react";

// Component Imports
import EditableStatSection from "@/components/Statistics";
import Component1 from "@/components/ui/component_1";
import FeatureCard from "@/components/ui/component_3";
import Testimonials from "@/components/ui/component_4";
import FaqSection from "@/components/ui/component_5";
import ContactCta from "@/components/ui/component_6";
import HeroSection from "@/components/ui/component_7";
import LogoScroller from '@/components/ui/component_13';
import DynamicSEO from "@/components/DynamicSEO";
import EnterpriseCapabilities, {
  TabItem,
  FeatureContent,
} from "@/components/ui/component_2";

// Icons
import {
  Zap,
  BarChart2,
  Database,
  ShieldCheck,
  Clock,
  Heart,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items
 const tabs: TabItem[] = [
  {
    id: "marketing",
    label: "AI-Optimized Enterprise Resource Planning",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Slider%20L1/AI%20Optimimized%20.webp", // replace with actual
    
  
  },
  {
    id: "analytics",
    label: "LLM-Enhanced Growth Marketing Pod ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Slider%20L1/LLM%20Enhanced%20.webp",
    
  },
  {
    id: "integration",
    label: "Strategic Opportunity Assessment ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Slider%20L1/Strategic%20Opportunity%20.webp",
     
  },
  {
    id: "security",
    label: "Strategic Planning Services",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Slider%20L1/Strategic%20Planning%20.webp",
     
  },
    {
    id: "development",
    label: "Demand Generation Strategy",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Slider%20L1/Demand.webp",
     
  },
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
  
   
    items: [
      { icon: Zap, title: "Connect planning and execution through automation " },
      { icon: Zap, title: "Enable AI insights across your value chain  " },
      { icon: Zap, title: "Improve efficiency with AI-powered workflows  " },
    ],
  },
  {
    id: "analytics",
  
  
    items: [
      { icon: BarChart2, title: "Full-time team + real-time LLM ideation " },
      { icon: BarChart2, title: "SEO, CRO, content, media, design—all AI-assisted  " },
      { icon: BarChart2, title: "Flexible models tuned to your goals  " },
    ],
  },
  {
    id: "integration",
  
   
    items: [
      { icon: Database, title: "Predictive marketing audits with LLM summaries " },
      { icon: Database, title: "MarTech + RevOps diagnostics powered by AI " },
      { icon: Database, title: "Benchmark vs competitors using NLP analysis " },
    ],
  },
  {
    id: "security",
 
    
    items: [
      { icon: ShieldCheck, title: "Forecast performance with AI simulation tools " },
      { icon: ShieldCheck, title: "Define KPIs based on predictive analytics  " },
      { icon: ShieldCheck, title: "Streamline execution with automation logic " },
    ],
  },
  {
    id: "development",
 
   
    items: [
      { icon: ShieldCheck, title: "Hyper-personalize messaging via LLM segmentation  " },
      { icon: ShieldCheck, title: "Optimize buyer journeys with real-time data   " },
      { icon: ShieldCheck, title: "Boost conversion through AI-informed tactics " },
    ],
  },
];

  // Platform Feature Cards
  const platformFeatures = [
    {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/L1%20Logo%20/Al-First%20Approach.webp",
      title: "AI-First Approach ",
      description: "We build strategy around LLMs, not the other way around ",
       ctaUrl: "#",
    },
    {
     icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/L1%20Logo%20/Tailored,%20Data-Driven%20Plans.webp",
      title: "Tailored, Data-Driven Plans ",
      description: "No cookie-cutter frameworks—just custom roadmaps that work ",
       ctaUrl: "#",
    },
    {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/L1%20Logo%20/Platform-Agnostic%20Execution.webp",
      title: "Platform-Agnostic Execution",
      description: "Salesforce, HubSpot, GPT—whatever moves the needle fastest ",
       ctaUrl: "#",
      useBoxedImage: false
    },
    {
     icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/L1%20Logo%20/Global%20+%20Agile%20Expertise.webp",
      title: "Global + Agile Expertise ",
      description: "Strategy and delivery from AI-fluent, cross-timezone teams ",
       ctaUrl: "#",
    },
    
  ];

  // FAQ List
  const faqs = [
    {
      q: "Are your strategic services built on specific AI platforms?",
      a: " We’re platform-agnostic but AI-native—we’ll work with your stack or help implement LLM tools where they make the biggest impact.  ",
    },
    {
      q: "What’s included in the AI-powered opportunity assessment? ",
      a: " You’ll get a complete review of your strategy, tech stack, and funnels—plus one AI-driven opportunity we guarantee you haven’t leveraged yet. ",
    },
    {
      q: "Can you help us build our own LLM tools or GPT workflows?",
      a: " Yes! We specialize in custom GPT integrations for internal tools, chatbots, analytics, and more. ",
    },
    {
      q: "Do startups benefit from AI strategy too? ",
      a: " Absolutely. We help early-stage teams move faster with AI-enabled insights, lean planning models, and scalable frameworks. ",
    },
  ];
  
  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="strategicServices" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading=" Strategic Services Supercharged by AI "
        
          subtext="Transform your business with LLM-powered strategy, planning, and growth.  "
          bgImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Value%20Proposition%20/8302_gqqgrs%20(1).jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/726011.png"
        />

        {/* Statistics Section */}
        <EditableStatSection
 
  title="You’re in good company with brands using AI to drive bold, strategic decisions.  "
  stats={[
    { label: "Years of Combined Experience, Now AI-Augmented  ", value: "800+" },
    { label: "Average ROI Uplift  ", value: "30%" },
    { label: "Businesses Scaled  ", value: "150+" },
  ]}
/>

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="Where Strategy Meets AI Intelligence "
          subtitle="We combine LLMs, analytics, and human insight to unlock smarter business growth."
          tabs={tabs}
          features={features} 
        />

        {/* Platform Feature Cards */}
        <section className="py-20 bg-white">
          <div className="section-wrapper">
            <div className="text-left mb-16 max-w-2xl">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Why Growth Natives for AI-Driven Strategy? 
              </h2>
              <p className="text-gray-600 mb-6">
              Because you need more than advice—you need intelligence, agility, and execution. 
              </p>
             
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {platformFeatures.slice(0, 3).map((card, idx) => (
                <FeatureCard key={idx} {...card} />
              ))}
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-6">
              {platformFeatures.slice(3).map((card, idx) => (
                <div key={idx} className="w-full lg:w-[32%]">
                  <FeatureCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <LogoScroller
        heading="Brands That Choose Our Strategic Services"
        subtext="From scale-ups to enterprises, our AI-powered strategic services deliver results. "
         
      />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real Growth  "
          description=" Hear how AI + human insight made the difference. "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Build Your AI-Driven Growth Strategy "
          subtext="Book a strategy session and get one immediately actionable insight that changes how you operate. "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
