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

import EnterpriseCapabilities, {
  TabItem,
  FeatureContent,
} from "@/components/ui/component_2";

// Icons
import {
  Zap,
  FileText,
  Package,
  Sparkles,
  Database,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tabs from "How We Orchestrate Demand" section
  const tabs: TabItem[] = [
    {
      id: "audience-intelligence",
      label: "LLM-Driven Audience Intelligence",
      icon: FileText,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Demand%20Generation%20Strategy/LLM-Driven%20Audience%20Intelligence.webp",
    },
    {
      id: "conversion-playbooks",
      label: "Content-Led Conversion Playbooks",
      icon: Package,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Demand%20Generation%20Strategy/Content-Led%20Conversion%20Playbooks.webp",
    },
    {
      id: "campaign-orchestration",
      label: "Intent-Led Campaign Orchestration",
      icon: Sparkles,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Demand%20Generation%20Strategy/Intent-Led%20Campaign%20Orchestration.webp",
    },
    {
      id: "lead-scoring",
      label: "Predictive Lead Scoring & Routing",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Demand%20Generation%20Strategy/Predictive%20Lead%20Scoring%20&%20Routing.webp",
    },
    {
      id: "growth-loop",
      label: "Growth Loop Optimization",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Demand%20Generation%20Strategy/Growth%20Loop%20Optimization.webp",
    },
    {
      id: "pod-deployment",
      label: "Cross-Functional Pod Deployment",
      icon: FileText,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Demand%20Generation%20Strategy/Cross-Functional%20Pod%20Deployment.webp",
    },
  ];

  // Features under each tab
  const features: FeatureContent[] = [
    {
      id: "audience-intelligence",
      description: "We don’t guess your ICP—we engineer it with precision.",
      items: [
        { icon: FileText, title: "Unified signals from CRM, content, and channel engagement" },
        { icon: FileText, title: "LLMs that spot emerging personas and buying patterns" },
        { icon: FileText, title: "AI-tuned segmentation that evolves with your market" },
      ],
    },
    {
      id: "conversion-playbooks",
      description: "More than just top-funnel filler—this is storytelling that sells.",
      items: [
        { icon: Package, title: "AI-personalized messaging by funnel stage and channel" },
        { icon: Package, title: "Asset planning aligned to actual decision triggers" },
        { icon: Package, title: "Cross-platform creative that adapts to buyer behavior in real time" },
      ],
    },
    {
      id: "campaign-orchestration",
      description: "Demand gen isn’t a one-off. It’s a sustained signal game.",
      items: [
        { icon: Sparkles, title: "Always-on campaign engine with programmatic intent targeting" },
        { icon: Sparkles, title: "Multichannel sequencing tuned to engagement velocity" },
        { icon: Sparkles, title: "AI surfaces hidden hand-raisers and active buyers" },
      ],
    },
    {
      id: "lead-scoring",
      description: "No more gut-based prioritization. We let the signals decide.",
      items: [
        { icon: Database, title: "LLM-enhanced scoring that evolves with behavior" },
        { icon: Database, title: "Automated lead enrichment + real-time CRM sync" },
        { icon: Database, title: "Smart routing that feeds sales with deal-ready opportunities" },
      ],
    },
    {
      id: "growth-loop",
      description: "Because the best strategies are never static.",
      items: [
        { icon: Zap, title: "Continuous test-and-learn on hooks, offers, and content" },
        { icon: Zap, title: "Attribution models that close the insight-to-action gap" },
        { icon: Zap, title: "LLM-curated insights that inform your next quarter, not just your last one" },
      ],
    },
    {
      id: "pod-deployment",
      description: "Demand gen doesn’t live in silos—neither do we.",
      items: [
        { icon: FileText, title: "Strategy, content, operations, and analytics—moving as one" },
        { icon: FileText, title: "Modular pods built for scale, speed, and GTM alignment" },
        { icon: FileText, title: "Built to plug into your current ecosystem, no heavy lift required" },
      ],
    },
  ];

  // Resources
  const recentResources: ResourceItem[] = [
    {
      title: "Agentic AI: The Silent Force Reshaping Marketing Ops",
      subtitle: "Wait, so this thing just... does it? Like, by itself? Yes. And no, it's not magic.",
      author: "Sneha Kumari",
      date: "July 7, 2025",
      readTime: "6 min read",
      image: "https://via.placeholder.com/600x400?text=Resource+1",
      slug: "agentic-ai-marketing-ops",
    },
    {
      title: "The AI Shortlist: Top Demand Gen Use Cases",
      subtitle: "From predictive scoring to AI-personalized campaigns, here’s what’s working now.",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "7 min read",
      image: "https://via.placeholder.com/600x400?text=Resource+2",
      slug: "ai-shortlist-demand-gen",
    },
    {
      title: "Intent Data + LLMs = Demand Generation Superpowers",
      subtitle: "Map intent signals to campaigns that convert faster.",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "6 min read",
      image: "https://via.placeholder.com/600x400?text=Resource+3",
      slug: "intent-data-llm-demand-gen",
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "What makes this different from traditional lead gen?",
      a: "We focus on qualified demand, not just MQL volume. It's built for intent, velocity, and long-term pipeline health.",
    },
    {
      q: "Do we need a specific tech stack for this?",
      a: "Nope. We integrate seamlessly with your existing CRM, MAP, or CDP. Plus, our ops pod handles the heavy lifting.",
    },
    {
      q: "How do LLMs help with demand generation?",
      a: "LLMs enhance audience modeling, predict buying intent, personalize content, and surface key insights in real time.",
    },
    {
      q: "Can we start with one part of the strategy?",
      a: "Absolutely. Start with content, targeting, or scoring—then expand as momentum builds.",
    },
    {
      q: "Is this strategy suitable for long sales cycles and complex buyer journeys?",
      a: "Absolutely. Our approach is tailored for B2B and high-consideration funnels, mapping nuanced journeys, layering in intent data, and nurturing demand until it's sales-ready.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <SmartBreadcrumb />
      <main>
        {/* HERO Section */}
        <HeroSection
          heading="Demand Generation Strategy, Powered by AI, Engineered for Today’s Buyer Journey"
          subtext="A full-funnel demand motion that blends intent, and orchestration, built to keep your pipeline warm & your brand top-of-mind."
          bgImage="https://via.placeholder.com/1600x600?text=Hero+Image"
          rightImage="https://via.placeholder.com/600x400?text=Hero+Right"
          buttonText="Audit Me"
        />

        {/* Trust Markers */}
        <EditableStatSection
          title="You’re in smart company—with brands using our demand gen strategies compounding momentum."
          stats={[
            { label: "Avg. uplift in qualified pipeline within 2 quarters", value: "200%+" },
            { label: "Drop in cost-per-MQL across channels", value: "65%" },
            { label: "Lift in lead-to-opportunity conversion", value: "4x" },
          ]}
        />

        {/* What We Do */}
        <EnterpriseCapabilities
          title="How We Orchestrate Demand with AI-Powered Precision and Scale"
          subtitle="Intelligent demand, creative fuel, and data that never sleeps. We don’t just build interest, we sustain it."
          tabs={tabs}
          features={features}
        />

        {/* Case Studies */}
        <RecentResourcesSection
          heading="See How Smart Demand Gen Became Profitable"
          body="Brands we’ve helped turn lead generation into pipeline momentum and kept it going."
          subTabs={[]}
          resources={recentResources}
        />

        {/* Logo Carousel */}
        <LogoScroller
          heading="Brands That Choose Us to Build Demand on Their Terms"
          subtext="From growth-stage startups to enterprise brands, our demand strategy powers real-time GTM."
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Demand. Real Results."
          description="A thoughtful mix of strategy, precision, and AI, backed by serious know-how."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* More Resources */}
        <RecentResourcesSection
          heading="More From Our Content Repertoire"
          body="Our content studio breaks down what works in demand creation among other resources, AI tips and latest industry news."
          subTabs={[]}
          resources={recentResources}
        />

        {/* CTA */}
        <ContactCta
          heading="Let’s Build a Demand Engine That Doesn’t Quit"
          subtext="Demand done smarter, powered by AI and purpose-built for you."
          buttonLabel="Talk to Us"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}

