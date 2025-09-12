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
    label: "Search Engine Optimization (SEO)",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Slider%20L1/SEO.webp", // replace with actual
    
  },
  {
    id: "analytics",
    label: "Pay-Per-Click (PPC) Advertising",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Slider%20L1/PPC.webp",
    
  },
  {
    id: "integration",
    label: "Social Media Marketing",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Slider%20L1/social%20Media%20marketing.webp",
    
  },
  {
    id: "security",
    label: "Conversion Rate Optimization (CRO) ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Slider%20L1/CRO.webp",
    
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
        title: "AI-powered keyword research ",
      },
      {
        icon: Zap,
        title: "Content optimization using LLMs  ",
      },
      {
        icon: Zap,
        title: "Technical audits for improved site health  ",
      },
    ],
  },
  {
    id: "analytics",
    items: [
      {
        icon: BarChart2,
        title: "Real-time bid adjustments  ",
      },
      {
        icon: BarChart2,
        title: "Predictive analytics for ad performance  ",
      },
      {
        icon: BarChart2,
        title: "LLM-generated ad copy  ",
      },
    ],
  },
  {
    id: "integration",
    items: [
      {
        icon: Database,
        title: "LLM-driven content creation ",
      },
      {
        icon: Database,
        title: "Optimal posting times via AI analysis ",
      },
      {
        icon: Database,
        title: "Sentiment analysis for brand monitoring ",
      },
    ],
  },
  {
    id: "security",
    items: [
      {
        icon: ShieldCheck,
        title: "Heatmap analysis ",
      },
      {
        icon: ShieldCheck,
        title: "User journey mapping  ",
      },
      {
        icon: ShieldCheck,
        title: "A/B testing with AI predictions ",
      },
    ],
  },
];

  // Platform Feature Cards
  const platformFeatures = [
    {
     icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Digital%20Marketing%20Modular%20Logo%20/Google%20Ads%20+%20Performance%20Max.png",
      title: "Google Ads + Performance Max ",
      description: "Smarter targeting and bidding powered by machine learning ",
      nocta: true,
       ctaUrl: "#",
    },
    {
     icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Digital%20Marketing%20Modular%20Logo%20/Meta%20+%20LinkedIn%20Ads.png",
      title: "Meta + LinkedIn Ads ",
      description: "AI-enhanced creative + audience strategy for B2C and B2B growth that work ",
      nocta: true,
       ctaUrl: "#",
    },
    {
     icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Digital%20Marketing%20Modular%20Logo%20/GA4%20+%20Looker%20Studio.png",
      title: "GA4 + Looker Studio ",
      description: "Real-time dashboards, attribution insights, and CRO tracking ",
      nocta: true,
       ctaUrl: "#",
    },
    {
     icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Digital%20Marketing%20Modular%20Logo%20/SEMrush%20+%20Surfer%20SEO.png",
      title: "SEMrush + Surfer SEO ",
      description: "AI-driven content strategy and search optimization ",
      nocta: true,
       ctaUrl: "#",
    },
  ];

  // FAQ List
  const faqs = [
    {
      q: " Do I need to use specific platforms for your AI-driven digital marketing services? ",
      a: "Not at all! We’re fully platform-agnostic-we’ll work with whatever you’ve got, from Google Ads and Meta to HubSpot, Marketo, or your custom stack. ",
    },
    {
      q: " What’s included in the free digital marketing audit? ",
      a: " A full review of your paid, organic, and owned channels-plus one AI-powered growth tactic we guarantee you’re not using yet. ",
    },
    {
      q: " Can AI actually improve my existing marketing performance? ",
      a: " Yes-and fast. Our LLM tools optimize copy, audience targeting, bid strategy, and CRO testing, often leading to 2–4x improvements in results. ",
    },
    {
      q: "Is your digital marketing approach suitable for both B2B and B2C brands? ",
      a: "Absolutely. We tailor every strategy using AI segmentation and real-time analytics-whether you’re nurturing leads or driving direct sales. ",
    },
  ];
  
  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="digitalMarketing" />
      <Header />
      <SmartBreadcrumb />
      <main className="pt-0">
        {/* HERO Section */}
        <HeroSection
          heading="Digital Marketing Fueled by AI Precision"
         
          subtext="From SEO to paid media, we build strategies that deliver real traffic, real leads, and real results. "
          bgImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Value%20Proposition%20/8302_gqqgrs_1.webp"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Digital%20Analytics.webp"
        />

        {/* Statistics Section */}
        <EditableStatSection
 
  title="You’re in good company with brands that trust AI-enhanced digital marketing. "
  stats={[
    { label: "Increase in ROI From Paid Campaigns  ", value: "6x" },
    { label: "Faster Campaign Launch Time  ", value: "3x" },
    { label: "Client Retention Rate ", value: "97%" },
  ]}
/>

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="AI-Driven Digital Marketing Solutions "
          subtitle="Customized strategies leveraging AI to drive engagement and conversions. "
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
                Top digital marketing tools we use-powered by AI, optimized for impact.
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
        heading="Brands That Trust Our AI-Driven Strategies "
        subtext="  From startups to enterprises, our digital marketing solutions deliver results."
         
      />

        {/* Testimonials */}
        <Testimonials
          title=" Real Stories, Real Growth "
          description=" Hear how our AI-powered digital marketing strategies have transformed businesses. "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* Call to Action */}
        <ContactCta
          heading=" Let’s Build Your AI-Driven Growth Strategy  "
          subtext="Book a strategy session and get one immediately actionable insight that changes how you operate. "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
