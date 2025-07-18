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

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items
 const tabs: TabItem[] = [
  {
    id: "marketing",
    label: "Data Warehousing & ETL ",
    icon: Zap,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png", // replace with actual
  },
  {
    id: "analytics",
    label: "Advanced Data Visualization ",
    icon: BarChart2,
    image: "https://example.com/image2.jpg",
  },
  {
    id: "integration",
    label: "Self-Service BI & Data Democratization ",
    icon: Database,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png",
  },
  {
    id: "security",
    label: "Real-Time & AI-Powered Analytics ",
    icon: ShieldCheck,
    image: "https://example.com/image4.jpg",
  },
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
    items: [
      {
        icon: Zap,
        title: "Centralized, cleaned, structured—ready to analyze ",
      },
      {
        icon: Zap,
        title: "Scalable architecture, powered by cloud & logic  ",
      },
      {
        icon: Zap,
        title: "Built to support modern BI and AI workflows  ",
      },
    ],
  },
  {
    id: "analytics",
    items: [
      {
        icon: BarChart2,
        title: "Dashboards your team will actually use  ",
      },
      {
        icon: BarChart2,
        title: "Drag, drop, drill—insights in a glance  ",
      },
      {
        icon: BarChart2,
        title: "Intuitive, interactive, always up to date  ",
      },
    ],
  },
  {
    id: "integration",
    items: [
      {
        icon: Database,
        title: "Explore your own data—no IT required ",
      },
      {
        icon: Database,
        title: "Drag-and-drop reports with enterprise-grade accuracy ",
      },
      {
        icon: Database,
        title: "Train your teams, not just your tools ",
      },
    ],
  },
  {
    id: "security",
    items: [
      {
        icon: ShieldCheck,
        title: "Track user behavior, ops, or ROI live ",
      },
      {
        icon: ShieldCheck,
        title: "Predict what’s next, not just what happened  ",
      },
      {
        icon: ShieldCheck,
        title: "Uncover patterns with machine learning and domain logic ",
      },
    ],
  },
];

  // Platform Feature Cards
  const platformFeatures = [
    {
      icon: <span className="text-xl">🌀</span>,
      title: "Google BigQuery ",
      description: "Fast, scalable warehousing for modern BI ",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gray-700 group-hover:text-white" />,
      title: "Looker Studio ",
      description: "Executive dashboards, business-ready insights  ",
    },
    {
      icon: <Clock className="w-6 h-6 text-gray-700 group-hover:text-white" />,
      title: "Power BI & Tableau ",
      description: "Self-serve dashboards with enterprise depth ",
    },
    {
      icon: <Heart className="w-6 h-6 text-gray-700 group-hover:text-white" />,
      title: "Snowflake + DBT ",
      description: "ELT, warehouse, and data logic done right ",
    },
  ];

  // FAQ List
  const faqs = [
    {
      q: "Do I need a specific analytics platform to get started?",
      a: "Nope! We’re completely tool-agnostic and work with whatever stack you’ve got—Google Analytics, Snowflake, Adobe AEP, Mixpanel, you name it.",
    },
    {
      q: "What’s included in the free data analytics audit?",
      a: "A full walkthrough of your current dashboards, tracking setup, and KPIs—plus one AI-powered insight we guarantee you haven’t implemented yet.",
    },
    {
      q: " Can you help with AEP Web SDK migration or GA4 setup? ",
      a: "Absolutely. We specialize in modern tracking architecture—including GA4 migration, parallel tracking, and seamless AEP Web SDK rollouts. ",
    },
    {
      q: "Is your analytics solution only for enterprise teams?",
      a: "Not at all! Our solutions scale beautifully—from lean startups using affordable BI tools to global teams managing complex product analytics. ",
    },
  ];
  
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="pt-24">
        {/* HERO Section */}
        <HeroSection
          heading="Analytics That Actually Drive Action, Not Just Observation"
          highlight="3x faster"
          subtext="Turn raw data into real-time, AI-powered business decisions. "
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png"
        />

        {/* Statistics Section */}
        <EditableStatSection
  subtitle="WHY PARTNER WITH GROWTH NATIVES?"
  title="You’re in good company with teams that trust their data into real growth."
  stats={[
    { label: "Events Tracked Monthly ", value: "1.6B+" },
    { label: "Increase in CRO, Post-Audit ", value: "92% " },
    { label: "Faster Insights via AI Dashboards ", value: "12x" },
  ]}
/>

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="Where Data Meets Performance "
          subtitle="Analytics solutions built around 'YOUR’ business—not someone else's."
          tabs={tabs}
          features={features} 
        />

        {/* Platform Feature Cards */}
        <section className="py-20 bg-white">
          <div className="section-wrapper">
            <div className="text-left mb-16 max-w-2xl">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                 Our Platform Power Plays 
              </h2>
              <p className="text-gray-600 mb-6">
                We plug into your stack. Then we make it smarter.
              </p>
              <button className="text-blue-700 font-medium hover:text-blue-700 transition-colors">
                Get Started &gt;
              </button>
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
        heading=" Brands That See the Bigger Picture "
        subtext="From startups to enterprise, data-driven growth starts here. "
        logos={[
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
        ]}
      />

        {/* Testimonials */}
        <Testimonials
          title=" Real Stories, Real Growth  "
          description=" Hear how data moved the dial.  "
        />

        {/* FAQs */}
        <FaqSection title="FAQ's" faqs={faqs} />

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Turn Your Data Into an AI-Powered Direction"
          subtext="Book your free audit and unlock one strategic, AI-powered insight you can use immediately. "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}