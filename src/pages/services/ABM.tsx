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

  // Tab Items (ABM tools/services)
  const tabs: TabItem[] = [
    {
      id: "recotap",
      label: "Recotap Integration",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/ABM%20/Recotap%20Integration.webp",
      ctaText: "Read More",
      ctaLink: "L3/recotap"
    },
    {
      id: "demandbase",
      label: "Demandbase Integration",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/ABM%20/Demandbase%20Integration.webp",
      ctaText: "Read More",
      ctaLink: "L3/demandbase"
    },
    {
      id: "rollworks",
      label: "RollWorks Integration",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/ABM%20/RollWorks%20Integration.webp",
      ctaText: "Read More",
      ctaLink: "L3/rollworks"
    },
    {
      id: "6sense",
      label: "6Sense Integration",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/ABM%20/6Sense%20Integration.webp",
      ctaText: "Read More",
      ctaLink: "L3/6sense"
    },
    {
      id: "selection",
      label: "Strategic Account Selection",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/ABM%20/Strategic%20Account%20Selection.webp",
      ctaText: "Get a Demo",
      ctaLink: "/l3-template"
    },
    {
      id: "persona",
      label: "Persona & Content Strategy",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/ABM%20/Persona%20&%20Content%20Strategy.webp",
      ctaText: "Get a Demo",
      ctaLink: "/l3-template"
    },
    {
      id: "analytics",
      label: "Data-Driven Analytics",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/ABM%20/Data-Driven%20Analytics.webp",
      ctaText: "Get a Demo",
      ctaLink: "/l3-template"
    },
  ];

  // Tab Features Section Content
  const features: FeatureContent[] = [
    {
      id: "recotap",
      description: "Plug into real-time personalization that actually moves the needle. Less guessing & more converting with dynamic content that just gets it.",
      items: [
        { icon: Zap, title: "Dynamic content personalization across ads, email, and web" },
        { icon: Zap, title: "Built-in journey flows for lean, fast-moving teams" },
        { icon: Zap, title: "Integrates easily with your CRM and MAP" }
      ],
    },
    {
      id: "demandbase",
      description: "Account intelligence that powers smarter targeting at scale. Find, engage, and convert high-value accounts with zero wasted effort.",
      items: [
        { icon: BarChart2, title: "Deep intent signals and firmographics to refine your ICP" },
        { icon: BarChart2, title: "Buying committee mapping and campaign orchestration" },
        { icon: BarChart2, title: "Personalize every touchpoint (ads, web, outreach, all in sync)" }
      ],
    },
    {
      id: "rollworks",
      description: "ABM that’s easy to launch, easy to scale. No-nonsense targeting with native integrations that work.",
      items: [
        { icon: Database, title: "Quick-deploy campaigns with automated account scoring" },
        { icon: Database, title: "Fit + intent + engagement, rolled into one platform" },
        { icon: Database, title: "Seamless sync with Salesforce, HubSpot, Marketo & more" }
      ],
    },
    {
      id: "6sense",
      description: "Predict demand before your pipeline even sees it. Surface ready-to-buy accounts early and engage with precision.",
      items: [
        { icon: ShieldCheck, title: "AI that tracks intent across the entire buying journey" },
        { icon: ShieldCheck, title: "Unifies data across web, ads, email, and sales tools" },
        { icon: ShieldCheck, title: "Automates personalized outreach based on behavior" }
      ],
    },
    {
      id: "selection",
      description: "We use data and a dash of AI to spot your kind of accounts. Because chasing the wrong crowd? Total energy drain.",
      items: [
        { icon: Heart, title: "Let AI and analytics sniff out your dream accounts" },
        { icon: Heart, title: "Size up account potential with smart data" },
        { icon: Heart, title: "Craft a winning account list that’s pure ROI gold" }
      ],
    },
    {
      id: "persona",
      description: "We get to the 'why' behind the buying. Then craft content that feels less salesy, more “that’s exactly what I needed.”",
      items: [
        { icon: ShieldCheck, title: "Decode decision-makers like a pro mind-reader" },
        { icon: ShieldCheck, title: "Chat with stakeholders to get the real scoop" },
        { icon: ShieldCheck, title: "Shape content that flexes across all channels" }
      ],
    },
    {
      id: "analytics",
      description: "We spot patterns faster than your morning coffee kicks in. That means smarter targeting without the guesswork.",
      items: [
        { icon: ShieldCheck, title: "Track engagement, conversions & returns like a boss" },
        { icon: ShieldCheck, title: "Let AI spot patterns to boost your campaign’s mojo" },
        { icon: ShieldCheck, title: "Use data to craft marketing that speaks directly" }
      ],
    },
  ];

  // Statistics / Trust Markers
  const stats = [
    { label: "Pipeline influenced directly by targeted ABM plays", value: "80%" },
    { label: "Increase in win rate", value: "25%" },
    { label: "Increase in engagement from high-value accounts", value: "3X" },
  ];

  // Case Studies (Carousel Blurbs)
  const recentResources: ResourceItem[] = [
    {
      title: "Case Study 1",
      subtitle: "Headline",
      author: "",
      date: "",
      readTime: "",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "/case-studies/1"
    },
    {
      title: "Case Study 2",
      subtitle: "Headline",
      author: "",
      date: "",
      readTime: "",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "/case-studies/2"
    },
    {
      title: "Case Study 3",
      subtitle: "Headline",
      author: "",
      date: "",
      readTime: "",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "/case-studies/3"
    },
   
  ];

  // FAQs
  const faqs = [
    {
      q: "Do you help with ABM platform integration?",
      a: "Yep, we do! Terminus, HubSpot, Salesforce, you name it, we plug it in and make it work with your tech stack.",
    },
    {
      q: "Can your ABM services support both marketing and sales teams?",
      a: "100%. We get marketing and sales to actually talk (and win) by syncing accounts, messaging, and goals.",
    },
    {
      q: "How do you measure ABM campaign success?",
      a: "Engagement, conversions, pipeline, and ROI-plus a little AI magic to fine-tune as we go.",
    },
    {
      q: "Can you help us build an ABM strategy from scratch?",
      a: "Absolutely. Blank slate? We’ll turn it into a laser-focused, AI-fueled game plan by analyzing data and building custom ABM flows.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="abm" />
      <Header />
      <SmartBreadcrumb />
      <main>
        {/* HERO Section */}
        <HeroSection
          heading="AI-Enhanced ABM That Reach the Right Accounts at the Right Time"
          subtext="Smarter signals, sharper plays-goodbye cold calls, hello hot accounts."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Hero%20Section_L2_Bannera/ABM.webp"
        />

        {/* Statistics / Trust Markers */}
        <EditableStatSection
          title="You’re in good company-with the brands that prioritize the right accounts, not just leads."
          stats={stats}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="How We Make ABM Hit Different-with AI"
          subtitle="We find the right accounts and craft 1:1 moments. Data drives it, you own it."
          tabs={tabs}
          features={features}
        />

        {/* More Resources Section */}
        <RecentResourcesSection
          heading=" See How AI-Powered ABM Delivers Real Impact "
          body="Brands we’ve helped reach, resonate, and rise. "
          subTabs={[]}
          resources={recentResources}
           />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Brands Banking on Us for ABM Wins"
          subtext="From fresh faces to Fortune 500s, we elevate their game."
          
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real ABM Breakthroughs"
          description="Our recipe for success? A lot of strategy & skill with a hint of AI"
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* More Resources Section */}
        <RecentResourcesSection
          heading="More from Our Content Repertoire"
          body="Stay ahead with bold ABM plays, sharp insights, and AI moves that put your brand in the right rooms."
          subTabs={[]}
          resources={recentResources}
           />

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Give Your ABM a Brain & Some Heart-AI Style"
          subtext="Get noticed, stay relevant, win key accounts."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
