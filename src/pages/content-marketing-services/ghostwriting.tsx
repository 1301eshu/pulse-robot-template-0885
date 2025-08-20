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
import LogoScroller from "@/components/ui/component_13";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import DynamicSEO from "@/components/DynamicSEO";
import ExploreMoreBlock from "@/components/exploremore";

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
      id: "topical",
      label: "Executive & Founder Ghostwriting ",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Ghost%20Writing/Executive%20&%20founder%20Ghostwriting.webp",
    },
    {
      id: "thought",
      label: "Opinion Pieces ",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Ghost%20Writing/Opinion%20Pieces.webp",
    },
    {
      id: "product",
      label: "Whitepapers, eBooks & Reports ",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Ghost%20Writing/white%20Paper%20Ebooks%20reports.webp",
    },
    {
      id: "ebooks",
      label: "Thought Leadership Strategy & Content Calendar ",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Ghost%20Writing/Thought%20leadership%20stratedgy%20&%20Content%20Calendar.webp",
    },
    {
      id: "repurposing",
      label: "LLM-Aware Writing Systems ",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Ghost%20Writing/LLM%20Aware%20Writing%20System.webp",
    },
  ];

  // Features under each tab
  const features: FeatureContent[] = [
    {
      id: "topical",
      description: "Voice-true ghostwriting that elevates your personal brand, without you needing to write a word. ",
      items: [
        { icon: Zap, title: "Interviews to content in days, crafted in your tone " },
        { icon: Zap, title: "Sharp takes, trend analysis, and POV-led posts for LinkedIn, Medium, and newsletters " },
        { icon: Zap, title: "AI-optimized structure for LLM visibility and rich snippets" },
      ],
    },
    {
      id: "thought",
      description: "Shape industry conversations through well-argued, search-smart opinion pieces.",
      items: [
        { icon: BarChart2, title: "Insight-led longforms for earned publications " },
        { icon: BarChart2, title: "SEO and AEO formatting for discoverability " },
        { icon: BarChart2, title: "Messaging tailored to elevate thought leadership in niche verticals " },
      ],
    },
    {
      id: "product",
      description: "Signature assets that support sales, PR, and top-of-funnel credibility. ",
      items: [
        { icon: Database, title: "Research-backed writing with executive tone " },
        { icon: Database, title: "Schema-rich formatting to maximize AI surfacing" },
        { icon: Database, title: "Strategic internal linking and modular sectioning for clarity and reach " },
      ],
    },
    {
      id: "ebooks",
      description: "Not just content but an ongoing leadership engine.",
      items: [
        { icon: ShieldCheck, title: "Strategic monthly calendars with themes and formats " },
        { icon: ShieldCheck, title: "Clear alignment to funnel stage and business goals " },
        { icon: ShieldCheck, title: "Optimization across channels (owned, earned, social)" },
      ],
    },
    {
      id: "repurposing",
      description: "Every asset is built for both readers and retrieval models. ",
      items: [
        { icon: Heart, title: "Entity-rich phrasing for AI comprehension " },
        { icon: Heart, title: "Author bios, structured headings, and metadata clarity " },
        { icon: Heart, title: "Supports surfacing in ChatGPT, Perplexity, and more " },
      ],
    },
  ];

  // Trust Markers (Statistics)
  const stats = [
    { label: "Executive ghostwritten pieces published under leading voices ", value: "350+" },
    { label: "Articles placed in top-tier media and niche authority platforms ", value: "50+" },
    { label: "Avg. increase in expert content visibility ", value: "30%" }
  ];

  // Recent Resources Section
  const recentResources: ResourceItem[] = [
    {
      title: "How AI is Changing B2B Blog Strategy",
      subtitle: "New rules for ranking, writing, and staying relevant in the LLM era.",
      author: "Editorial Team",
      date: "July 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "ai-changing-b2b-blog"
    },
    {
      title: "AEO & Entity-Based SEO: The Next Wave",
      subtitle: "Why blogs that feed AI models are outpacing those that don't.",
      author: "Editorial Team",
      date: "July 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "aeo-entity-seo"
    },
    {
      title: "The Anatomy of a LLM-Optimized Pillar Page",
      subtitle: "Structuring long-form content for search, humans, and AI all at once.",
      author: "Editorial Team",
      date: "July 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "llm-pillar-page"
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "Will it actually sound like me? ",
      a: "Yes. Every project starts with a voice mapping process and 1:1 sessions. You’ll feel like you wrote it, just on your best day. "
    },
    {
      q: "Can you help with both strategy and execution?",
      a: "Absolutely. We help plan topics, align content to your business goals, and ghostwrite it end-to-end, ready to publish. "
    },
    {
      q: " Is this content AI-optimized too? ",
      a: " Yep. From structure and markup to entity density and phrasing, we write so humans, search engines, and LLMs all get it. "
    },
    {
      q: " What types of content can you ghostwrite?",
      a: " LinkedIn posts, blogs, newsletters, bylines, speeches, whitepapers, landing pages, podcast scripts, you name it. "
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="blogLongformContent" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="Thought Leadership That Builds Authority. Ghostwriting That Sounds Like You. "
          subtext="Turn your ideas into insight-packed content that ranks and drives reputation."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Content%20Writing/Blog%20&%20Long-Form%20Content%20(2).webp"
        
        />
        <EditableStatSection
          title="You’re in good company—brands and leaders who trust us to write their story."
          stats={stats}
        />
        <EnterpriseCapabilities
          title="Ghostwriting That Wins in Search, Social, and AI"
          subtitle="We build thought leadership engines that get found, get read, and get results—by both humans and algorithms."
          tabs={tabs}
          features={features}
        />
        <RecentResourcesSection
          heading="See How Ghostwriting Drives Results"
          body="How we helped leaders build authority and scale their voice."
          subTabs={[]}
          resources={recentResources}
        />
        <LogoScroller
          heading="Leaders Who Trust Our Words"
          subtext="From SaaS founders to Fortune 500 execs, our ghostwriting powers reputations."
        />
        <Testimonials
          title="What Clients Say About Our Ghostwriting"
          description="We don’t just write. We deliver results."
        />
        <FaqSection title="FAQs" faqs={faqs} />

         {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body="  See what’s new in thought leadership, AI strategy, and content that works."
  perPage={6}
  firstN={4}
  contentType="blogs"
/>
        <ContactCta
          heading="Ready to Build Your Thought Leadership?"
          subtext="Let’s map your content to the way people search, buy, and learn."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
