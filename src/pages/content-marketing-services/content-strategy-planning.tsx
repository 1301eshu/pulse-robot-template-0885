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
import ExploreMoreBlock from "@/components/exploremore";

import EnterpriseCapabilities, {
  TabItem,
  FeatureContent,
} from "@/components/ui/component_2";

// Icons
import {
  PenTool,
  BookOpenCheck,
  LineChart,
  FileText,
  RefreshCw,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tabs: TabItem[] = [
    {
      id: "clusters",
      label: "Topic Clusters & Pillar Pages",
      icon: BookOpenCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Content%20Strategy%20%20Planning/Topical%20Clusters%20&%20Pillar%20Pages.webp",
    },
    {
      id: "research",
      label: "Audience-First Research",
      icon: PenTool,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Content%20Strategy%20%20Planning/Audience%20first%20research.webp",
    },
    {
      id: "channel",
      label: "Channel & Format Strategy",
      icon: LineChart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Content%20Strategy%20%20Planning/Channel%20&%20Formal%20Stratedgy.webp",
    },
    {
      id: "calendar",
      label: "Editorial Calendar Development",
      icon: FileText,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Content%20Strategy%20%20Planning/Editorial%20Calendar%20development.webp",
    },
    {
      id: "ai",
      label: "AI-Ready Structuring & Briefs",
      icon: RefreshCw,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Content%20Strategy%20%20Planning/Ai-%20Ready%20Structuring%20&%20briefs.webp",
    }
  ];

  const features: FeatureContent[] = [
    {
      id: "clusters",
      description: "Know your users, map their intent, speak their language.",
      items: [
        { icon: BookOpenCheck, title: "Persona modeling powered by search & AI behavior" },
        { icon: BookOpenCheck, title: "Funnel-stage segmentation and journey mapping" },
        { icon: BookOpenCheck, title: "Pain-point–led content themes + formats" },
      ],
    },
    {
      id: "research",
      description: "Create connected content that signals expertise and relevance.",
      items: [
        { icon: PenTool, title: "Structured content silos for AEO and LLM indexing" },
        { icon: PenTool, title: "Keyword & entity mapping with internal linking plans" },
        { icon: PenTool, title: "Clear content roles: attract, educate, convert" },
      ],
    },
    {
      id: "channel",
      description: "Choose the right words, platforms, and mediums.",
      items: [
        { icon: LineChart, title: "Long-form + short-form mapped to user attention spans" },
        { icon: LineChart, title: "SEO, social, and email angles built into each asset" },
        { icon: LineChart, title: "Visual + narrative strategy (video, carousels, blogs, etc.)" },
      ],
    },
    {
      id: "calendar",
      description: "Deliver faster, stay consistent, drive compounding returns.",
      items: [
        { icon: FileText, title: "Monthly/quarterly content sprints with optimization slots" },
        { icon: FileText, title: "LLM-friendly phrasing, schema-ready outlines" },
        { icon: FileText, title: "Draft-to-distribution workflows built for scale" },
      ],
    },
    {
      id: "ai",
      description: "Format your content so LLMs can read, learn, and surface it clearly.",
      items: [
        { icon: RefreshCw, title: "Clear intents, headings, and rich semantic markup" },
        { icon: RefreshCw, title: "Reusable briefs for writers, designers, and AI agents" },
        { icon: RefreshCw, title: "FAQ-ready blocks, voice answers & prompt-able formats" },
      ],
    },
  ];

  const faqs = [
    {
      q: "What makes your content planning different from other agencies?",
      a: "We combine SEO, AEO, and LLM indexing principles, so your content gets found by both users and generative AI.",
    },
    {
      q: "Can you help even if we already have blogs or pages published?",
      a: "Yes. We audit what’s live, find gaps and overlaps, then build a smarter roadmap for consistency, visibility, and conversion.",
    },
    {
      q: "Do you also help execute the plan or only design it?",
      a: "We do both. Strategy is just the start. We can write, design, and distribute if you need full-funnel execution.",
    },
    {
      q: "Will this improve our performance in ChatGPT and Gemini?",
      a: "Absolutely. We build for the new AI content paradigm, focusing on clarity, entity linking, and semantic structure LLMs can reference.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="contentStrategyPlanning" />
      <Header />
      <SmartBreadcrumb />
      <main>
        {/* HERO */}
        <HeroSection
          heading="Content Strategy & Planning, Built for AI Discovery & Human Decisions"
          subtext="Structured for SERPs, surfaced by GPTs, crafted to rank, resonate, and convert."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/L-2%20Banner%20Images/Content%20Stratedgy%20&%20planning.webp"
         
        />

        {/* Trust Markers */}
        <EditableStatSection
          title="You’re in sharp company—with brands that lead the conversation and own the algorithm."
          stats={[
            { label: "Enterprise content strategies launched", value: "25+" },
            { label: "Content assets mapped across funnels & journeys", value: "50+" },
            { label: "LLM-informed editorial calendars shipped", value: "20+" },
            { label: "Higher engagement from AEO-structured content clusters", value: "3x" },
          ]}
        />
        <EnterpriseCapabilities
          title="Content Strategy That Wins in Search, Social, and AI"
          subtitle="We build content plans that get found, get read, and get results—by both humans and algorithms."
          tabs={tabs}
          features={features}
        />
        <RecentResourcesSection
          heading="See How Strategy Drives Results"
          body="How we helped brands build content engines that scale."
          subTabs={[]}
          resourceType="38"
        />
        <LogoScroller
          heading="Brands That Trust Our Content Roadmaps"
          subtext="From SaaS to D2C, our strategies power growth."
        />
        <Testimonials
          title="What Clients Say About Our Content Strategy"
          description="We don’t just plan. We deliver results."
        />
        <FaqSection title="FAQs" faqs={faqs} />

         {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Stay sharp with content strategy tips, freshest news, blog posts & AI insights, tailored for you.  "
  perPage={6}
  firstN={4}
  contentType="blogs"
/>
        <ContactCta
          heading="Ready to Build a Smarter Content Plan?"
          subtext="Let’s map your content to the way people search, buy, and learn."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
