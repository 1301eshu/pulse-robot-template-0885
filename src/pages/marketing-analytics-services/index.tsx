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
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
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

  // Tab Items (How We Make Marketing Analytics Work for Results)
  const tabs: TabItem[] = [
    {
      id: "online-presence",
      label: "Data Warehousing & ETL ",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Slider%20L1/data%20Warehousing%20&%20ETL.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "data-driven",
      label: "Advanced Data Visualization ",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Slider%20L1/advanced%20Data%20visualization.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "tracking-setup",
      label: "Self-Service BI & Data Democratization ",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Slider%20L1/self%20service%20BI%20-%20Data%20Democratization.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "dashboard",
      label: "Real-Time & AI-Powered Analytics ",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Slider%20L1/real%20time%20&%20AI%20Powered%20Analytics%20.webp",
      ctaText: "",
      ctaLink: ""
    },
  ];


  // Platform Features
  const platformFeatures = [
    {
       icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Icons/google_bigquery.webp",
      title: "Google BigQuery   ",
      description: "Fast, scalable warehousing for modern BI  ",
       nocta: true,
      useBoxedImage: false,
      
      ctaUrl: "/salesforce-services/sales-cloud/" // 👈 CTA link here
    },
    {
       icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Icons/Looker.webp",
      title: "Looker Studio  ", 
      description: "Executive dashboards, business-ready insights ",
       nocta: true,
      useBoxedImage: false,
      ctaUrl: "/salesforce-services/service-cloud/",
    },
    {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Icons/New_Power_BI.webp",
      title: "Power BI & Tableau ",
      description: "Self-serve dashboards with enterprise depth ",
       nocta: true,
      useBoxedImage: false,
      ctaUrl: "/marketing-automation-services/marketing-cloud/",
    },
    {
       icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Icons/snowflake%20DBT.webp",
      title: "Snowflake + DBT ",
      description: "ELT, warehouse, and data logic done right  ",
       nocta: true,
      useBoxedImage: false,
      ctaUrl: "/salesforce-services/cpq/",
    },
   
    
  ];

  
  // Features (Zigzag section content)
  const features: FeatureContent[] = [
    {
      id: "online-presence",
    //  description: "We audit, analyze, and optimize your website, ads, and content performance, then show you how it all connects.",
      items: [
        { icon: Zap, title: "Centralized, cleaned, structured—ready to analyze " },
        { icon: Zap, title: "Scalable architecture, powered by cloud & logic " },
        { icon: Zap, title: "Built to support modern BI and AI workflows " },
      ],
    },
    {
      id: "data-driven",
   //   description: "Let AI do the heavy lifting. Predict, personalize, and pivot with precision.",
      items: [
        { icon: BarChart2, title: "Dashboards your team will actually use " },
        { icon: BarChart2, title: "Drag, drop, drill—insights in a glance " },
        { icon: BarChart2, title: "Intuitive, interactive, always up to date " },
      ],
    },
    {
      id: "tracking-setup",
   //   description: "Get the foundation right or everything else crumbles. Set up events and parameters to track what drives performance.",
      items: [
        { icon: Database, title: "Explore your own data—no IT required " },
        { icon: Database, title: "Drag-and-drop reports with enterprise-grade accuracy " },
        { icon: Database, title: "Train your teams, not just your tools " },
      ],
    },
    {
      id: "dashboard",
  //    description: "We help you build sleek, decision-ready views that combine AI, UX, and marketing logic.",
      items: [
        { icon: ShieldCheck, title: "Track user behavior, ops, or ROI live " },
        { icon: ShieldCheck, title: "Predict what’s next, not just what happened " },
        { icon: ShieldCheck, title: "Uncover patterns with machine learning and domain logic " },
      ],
    },
  ];

  // Trust Markers (Statistics)
  const stats = [
    { label: "Events Tracked Monthly ", value: "1.6B+  " },
    { label: "Increase in CRO, Post-Audit ", value: "92%" },
    { label: "Faster Insights via AI Dashboards ", value: "12x" },
   
  ];

  // Resources (RecentResourcesSection)
  const recentResources: ResourceItem[] = [
    {
      title: "Marketing Analytics Playbook: From Clicks to Revenue",
      subtitle: "Real-world strategies to build marketing analytics that move the needle.",
      author: "Analytics Team",
      date: "July 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "marketing-analytics-playbook"
    },
    {
      title: "Custom Attribution Models: The Secret to Scaling",
      subtitle: "How to align attribution with your true buyer journey.",
      author: "Growth Strategist",
      date: "July 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "custom-attribution"
    },
    {
      title: "Self-Serve Dashboards: Empower Your Teams",
      subtitle: "Why every marketing team needs dashboards built for action.",
      author: "Product Lead",
      date: "July 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "self-serve-dashboards"
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "Do I need a specific analytics platform to get started?",
      a: "Nope! We’re completely tool-agnostic and work with whatever stack you’ve got—Google Analytics, Snowflake, Adobe AEP, Mixpanel, you name it. ",
    },
    {
      q: "What’s included in the free data analytics audit?",
      a: "A full walkthrough of your current dashboards, tracking setup, and KPIs—plus one AI-powered insight we guarantee you haven’t implemented yet.",
    },
    {
      q: "Can you help with AEP Web SDK migration or GA4 setup? ",
      a: "Absolutely. We specialize in modern tracking architecture—including GA4 migration, parallel tracking, and seamless AEP Web SDK rollouts.",
    },
    {
      q: "Is your analytics solution only for enterprise teams?",
      a: "Not at all! Our solutions scale beautifully—from lean startups using affordable BI tools to global teams managing complex product analytics.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="marketingAnalytics" />
      <Header />
       <SmartBreadcrumb />
      <main className="pt-0">

        {/* HERO Section */}
        <HeroSection
          heading="Analytics That Actually Drive Action, Not Just Observation"
          subtext="Turn raw data into real-time, AI-powered business decisions. "
          bgImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Value%20Proposition%20/8302_gqqgrs_1.webp"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Hero%20Section%20Analytics-as-a-service.webp"
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="You’re in good company with teams that trust their data into real growth."
          stats={stats}
        />

        {/* Tab Features Section (How We Make Marketing Analytics Work for Results) */}
        <EnterpriseCapabilities
          title="Where Data Meets Performance "
          subtitle=" Analytics solutions built around 'YOUR’ business—not someone else's. "
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
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {platformFeatures.map((card, idx) => (
        <FeatureCard key={idx} {...card} />
      ))}
    </div>
  </div>
</section>

        <LogoScroller
          heading="Brands That See the Bigger Picture "
          subtext=" From startups to enterprise, data-driven growth starts here. "
         
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories. Real Growth"
          description="Hear how data moved the dial. "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

      

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Turn Your Data Into an AI-Powered Direction  "
          subtext="Book your free audit and unlock one strategic, AI-powered insight you can use immediately. "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />

      </main>
      <Footer />
    </div>
  );
}
