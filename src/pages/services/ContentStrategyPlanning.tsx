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
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-content-strategy"
    },
    {
      id: "research",
      label: "Audience-First Research",
      icon: PenTool,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Content%20Strategy%20%20Planning/Audience%20first%20research.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-content-strategy"
    },
    {
      id: "channel",
      label: "Channel & Format Strategy",
      icon: LineChart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Content%20Strategy%20%20Planning/Channel%20&%20Formal%20Stratedgy.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-content-strategy"
    },
    {
      id: "calendar",
      label: "Editorial Calendar Development",
      icon: FileText,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Content%20Strategy%20%20Planning/Editorial%20Calendar%20development.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-content-strategy"
    },
    {
      id: "ai",
      label: "AI-Ready Structuring & Briefs",
      icon: RefreshCw,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Content%20Strategy%20%20Planning/Ai-%20Ready%20Structuring%20&%20briefs.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-content-strategy"
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

  const recentResources: ResourceItem[] = [
    {
      title: "Why AI-Ready Content Strategies Win in 2025",
      subtitle: "See how top brands design content that ranks, resonates, and converts—across both search engines and AI assistants.",
      author: "Growth Natives",
      date: "June 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "ai-content-strategy",
    },
    {
      title: "From Blog to Blueprint: Mapping Your Funnel with Content",
      subtitle: "Our approach to building content clusters that educate, engage, and guide users to convert.",
      author: "Growth Natives",
      date: "July 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "content-blueprint-mapping",
    },
    {
      title: "Content for Humans, Structured for Bots: The New SEO/AEO Playbook",
      subtitle: "Tips and frameworks to maximize your content’s discoverability—by both search engines and generative AI.",
      author: "Growth Natives",
      date: "July 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "human-bot-content-structure",
    }
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
          buttonText="Audit Me!"
          buttonLink="/lead-gen-content-strategy"
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

        {/* Feature Tabs */}
        <EnterpriseCapabilities
          title="How We Plan Content That Meets the Algorithm Where It Lives"
          subtitle="From thought leadership to transactional copy, we design it all to perform on Google, and GPTs."
          tabs={tabs}
          features={features}
        />

        {/* Resources */}
        <RecentResourcesSection
          heading="See How Strategy Becomes Visibility (and Leads)"
          body="Content blueprints that helped clients rank, educate, and convert faster."
          subTabs={[]}
          resources={recentResources}
        />

        {/* Logos */}
        <LogoScroller
          heading="Brands That Trust Us to Guide the Content Compass"
          subtext="Whether scaling or pivoting—we help them plan what wins."

        />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real Impact"
          description="How we do it? With skill, structure, a hint of AI and a streak of bold."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

         {/* More Resources Section */}
        <RecentResourcesSection
          heading= "More From Our Content Repertoire"
          body="Stay sharp with content tips, freshest news, blog posts & AI insights, tailored for you."
          subTabs={[]}
          resources={recentResources}
        />

        {/* CTA */}
        <ContactCta
          heading="Let’s Map Out Content That Gets You Found & Followed"
          subtext="Clear. Strategic. Built for the bots, but written for real people."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
