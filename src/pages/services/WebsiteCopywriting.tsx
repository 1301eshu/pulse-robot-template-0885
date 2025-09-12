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

  // Tab Items
  const tabs: TabItem[] = [
    {
      id: "marketing",
      label: "Homepage & Service Pages",
      icon: Zap,
      image: "https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/content%20strategy%20L1/Homepagev&%20Service%20Pages.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-website-copy"
    },
    {
      id: "analytics",
      label: "Product Pages (SaaS, eComm, D2C)",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Website%20Copywriting/Product%20Pages%20(SaaS,%20eComm,%20D2C).webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-website-copy"
    },
    {
      id: "integration",
      label: "About Us & Culture Pages",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Website%20Copywriting/About%20Us%20&%20Culture%20Pages.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-website-copy"
    },
    {
      id: "security",
      label: "Landing Pages + Blog & Resource Hubs",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Website%20Copywriting/Landing%20Pages%20+%20Blog%20&%20Resource%20Hubs.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-website-copy"
    },
    {
      id: "development",
      label: "Copy for AI & LLM Optimization",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Website%20Copywriting/Copy%20for%20Al%20&%20LLM%20Optimization.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-website-copy"
    },
    {
      id: "technology",
      label: "Copy Refresh & Optimization",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Website%20Copywriting/Copy%20Refresh%20&%20optimization.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-website-copy"
    },
  ];

  // Features for each tab
  const features: FeatureContent[] = [
    {
      id: "marketing",
      description: "Your core pages, reimagined to convert and rank.",
      items: [
        { icon: Zap, title: "Messaging aligned with user intent and funnel stage" },
        { icon: Zap, title: "Keyword-rich headlines + clarity-focused structure" },
        { icon: Zap, title: "Benefit-led copy that balances UX, SEO, and AEO" }
      ],
    },
    {
      id: "analytics",
      description: "Persuasive storytelling built for conversions.",
      items: [
        { icon: BarChart2, title: "Feature-to-benefit mapping that sells naturally" },
        { icon: BarChart2, title: "Trust-building elements: reviews, CTAs, microcopy" },
        { icon: BarChart2, title: "Structured for skimmability and semantic clarity" }
      ],
    },
    {
      id: "integration",
      description: "Build connection, trust, and personality at scale.",
      items: [
        { icon: Database, title: "People-first copy that captures your brand’s soul" },
        { icon: Database, title: "Humanized voice, values, and founder stories" },
        { icon: Database, title: "Structured for easy parsing by LLMs and visitors" }
      ],
    },
    {
      id: "security",
      description: "Funnel-powered pages that pull traffic and leads.",
      items: [
        { icon: ShieldCheck, title: "Campaign-driven copy designed to convert" },
        { icon: ShieldCheck, title: "Pillar and cluster structure for SEO and AEO" },
        { icon: ShieldCheck, title: "Optimized intros, headings, and internal linking" }
      ],
    },
    {
      id: "development",
      description: "Make your content readable, rankable, and retrievable.",
      items: [
        { icon: ShieldCheck, title: "Structured content blocks with schema-friendly markup" },
        { icon: ShieldCheck, title: "Entity-rich phrasing for better LLM indexing" },
        { icon: ShieldCheck, title: "FAQs, voice-optimized answers, and featured snippet wins" }
      ],
    },
    {
      id: "technology",
      description: "Turn outdated copy into high-performing, search-optimized content that speaks to today’s audience.",
      items: [
        { icon: ShieldCheck, title: "Rewrite and restructure to match AI search and user trends" },
        { icon: ShieldCheck, title: "Inject clarity, consistency, and conversion value" },
        { icon: ShieldCheck, title: "Spot-on tone and formatting to boost engagement" }
      ],
    },
  ];

  // Case Study carousel (simplified as 4 dummy examples, real data can be plugged in)
  const caseStudies = [
    { headline: "How Brand X Jumped 4X in Organic Traffic in 6 Months", cta: "Read Case Study" },
    { headline: "SaaS Brand Y: +75% Demo Signups Post Copy Refresh", cta: "Read Case Study" },
    { headline: "Ecomm Brand Z: 2X ROAS with AEO-Focused Product Pages", cta: "Read Case Study" },
    { headline: "Healthcare Startup: 1st-Page Rankings with LLM-Tuned Content", cta: "Read Case Study" },
  ];

  // Trust Markers Section
  const stats = [
    { label: "AI-optimized websites launched in the last 12 months", value: "25+" },
    { label: "Core and landing pages rewritten for AEO & LLM visibility", value: "200+" },
    { label: "Copywriting projects delivered on time, on brief", value: "100%" }
  ];

  // Logo Scroller section (reuse existing logos)
  const logos = [
    'https://res.cloudinary.com/dar70fhfi/image/upload/v1753178712/08-1_ayitcw.png',
    'https://res.cloudinary.com/dar70fhfi/image/upload/v1753178694/08_tspxen.png',
    'https://res.cloudinary.com/dar70fhfi/image/upload/v1753178689/07-1_c3ltqm.png',
    // ... more logos as before
  ];

  // Testimonials (dummy content for illustration)
  const testimonials = [
    {
      quote: "The copy literally made our site start ranking in ChatGPT snippets. Wild.",
      logo: "",
    },
    {
      quote: "We went from bounce to buy-purely through fresh, AI-ready copy.",
      logo: "",
    },
    {
      quote: "Finally, a team that speaks LLM and human-our organic is up, and so are demos.",
      logo: "",
    }
  ];

  // Resources for recent articles (example placeholders)
  const recentResources: ResourceItem[] = [
    {
      title: "LLM-Optimized Content: What Actually Works in 2025",
      subtitle: "How to write content for the new AI-indexed search era.",
      author: "Content Team",
      date: "July 20, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "llm-content-2025"
    },
    {
      title: "SEO Is Dead. Long Live AEO.",
      subtitle: "Why Answer Engine Optimization is the next frontier.",
      author: "Content Team",
      date: "July 16, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "aeo-next"
    },
    {
      title: "Copywriting in the Age of AI Search: 5 Tips",
      subtitle: "Get your pages seen and ranked by AI, not just Google.",
      author: "Content Team",
      date: "July 13, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "ai-search-copy"
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "How do you approach writing copy for a website that’s not performing well?",
      a: "We audit your current pages to spot gaps in clarity, structure, messaging, and SEO. Then rebuild copy that’s AI & audience-tuned and conversion-ready.",
    },
    {
      q: "Can you help us if we already have some copy but it’s not working?",
      a: "Yes. We refine or rewrite existing content to improve flow, intent-match, and engagement, without starting from scratch unless needed.",
    },
    {
      q: "Will our copy rank in AI tools like ChatGPT and Perplexity?",
      a: "Yep. We optimize for LLM visibility by using clear headings, intent-matched phrasing, and structured content that AI actually understands and surfaces.",
    },
    {
      q: "How fast can we go from idea to live website copy?",
      a: "Quick. Once we align strategy, we go from wireframe to wow in days. We’re fast, but not sloppy.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="websiteCopywriting" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="Website Copywriting That Trains the Algorithms to Love You"
          subtext="Built to feed LLMs, ace AI search, and speak human fluently."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/L-2%20Banner%20Images/Website%20Copywriting.webp"
          buttonText="Audit Me!"
          buttonLink="/lead-gen-website-copy"
        />

        {/* Trust Markers Section */}
        <EditableStatSection
          title="You're in good crowd-with brands turning clicks into conversions through smart copy."
          stats={stats}
        />

        {/* What We Do Section */}
        <EnterpriseCapabilities
          title="Smart Website Copywriting for the AI-Indexed Web"
          subtitle="We engineer high-converting copy that ranks, resonates, and trains the LLMs while it’s at it."
          tabs={tabs}
          features={features}
        />

       {/* More Resources Section */}
        <RecentResourcesSection
          heading="See How High-Impact Copy Powers Big Wins"
          body=" How our content helped brands rank, engage, and grow in the AI day & age. "
          subTabs={[]}
          resources={recentResources}
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Brands That Let Our Copy Do the Talkin"
          subtext="Whether lean or loaded-we help teams convert faster."
         
        />

        {/* Client Testimonials Section */}
        <Testimonials
          title="Copy That Clicked-And Clients Who Loved It"
          description="Strategy meets structure-sprinkled with just the right amount of AI magic."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* More Resources Section */}
        <RecentResourcesSection
          heading="More From Our Content Repertoire"
          body="Keep your website words sharp with our latest tips, blog posts, and AI-powered insights."
          subTabs={[]}
          resources={recentResources}
        />

        {/* Call to Action */}
        <ContactCta
          heading="Let's Craft Copy That Gets You Found (and Chosen)"
          subtext="Crafted for search engines, fine-tuned for humans, and a few bots."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
