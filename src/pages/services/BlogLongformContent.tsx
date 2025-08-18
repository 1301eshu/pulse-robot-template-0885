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
      label: "Topical Blog Series & Evergreen Content",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Blog%20%20Long-Form%20Content/Creation%20(Web,%20Blog,%20SEO).webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-form"
    },
    {
      id: "thought",
      label: "Research-Driven Thought Leadership",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Blog%20%20Long-Form%20Content/Research-Driven%20Thought%20Leadership.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-form"
    },
    {
      id: "product",
      label: "Product-Led & Bottom-Funnel Content",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Blog%20%20Long-Form%20Content/Product-Led%20&%20Bottom-Funnel%20Content.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-form"
    },
    {
      id: "ebooks",
      label: "AI-Optimized eBooks, Whitepapers & Guides",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Blog%20%20Long-Form%20Content/Al-Optimized%20eBooks,%20Whitepapers%20&%20Guides.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-form"
    },
    {
      id: "repurposing",
      label: "Repurposing Strategy",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Blog%20%20Long-Form%20Content/Repurposing%20Strategy.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-form"
    },
  ];

  // Features under each tab
  const features: FeatureContent[] = [
    {
      id: "topical",
      description: "Own your niche with structured, LLM-indexable authority.",
      items: [
        { icon: Zap, title: "Blog clusters linked to key themes and search journeys" },
        { icon: Zap, title: "Pillar + subtopic mapping for SEO, AEO, and ChatGPT surfacing" },
        { icon: Zap, title: "Search intent-aligned topics that balance reach & relevance" },
      ],
    },
    {
      id: "thought",
      description: "Publish deep insights—not just reworded listicles.",
      items: [
        { icon: BarChart2, title: "First-party insights + expert POVs" },
        { icon: BarChart2, title: "LLM-tuned formatting (clear H1/H2s, semantic chunks)" },
        { icon: BarChart2, title: "Competitive differentiation without keyword stuffing" },
      ],
    },
    {
      id: "product",
      description: "Turn readers into buyers with content that bridges the gap.",
      items: [
        { icon: Database, title: "Case-study–style articles and ROI calculators" },
        { icon: Database, title: "Feature-benefit framing with embedded CTAs" },
        { icon: Database, title: "Interlinking with product/service pages for conversion flow" },
      ],
    },
    {
      id: "ebooks",
      description: "Strategic content built for leads, links, and LLM visibility.",
      items: [
        { icon: ShieldCheck, title: "In-depth assets that rank, educate, and get cited by humans and machines." },
        { icon: ShieldCheck, title: "Structured narratives built for AEO, LLM indexing, and UX" },
        { icon: ShieldCheck, title: "Designed for gated content, lead gen, and AI discoverability" },
      ],
    },
    {
      id: "repurposing",
      description: "Get more out of every long-form piece.",
      items: [
        { icon: Heart, title: "Derivative content plans: social, email, short-form" },
        { icon: Heart, title: "AI-enhanced rewriting for tone/purpose/channel" },
        { icon: Heart, title: "Content calendars built around repurposing workflows" },
      ],
    },
  ];

  // Trust Markers (Statistics)
  const stats = [
    { label: "AI-assisted content frameworks deployed", value: "30+" },
    { label: "Greater visibility on AI tools", value: "5x" },
    { label: "Long-form assets delivered across industries", value: "200+" }
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
      q: "How do you ensure originality and authority?",
      a: "Every blog we write is backed by research, brand POV, and structured for trust-building."
    },
    {
      q: "Will our blogs show up in AI tools like ChatGPT and Perplexity?",
      a: "You bet. We optimize for semantic depth, question-answer formatting, and entity tagging, so your blogs get picked up, parsed, and surfaced."
    },
    {
      q: "How do you decide what topics to write about?",
      a: "We run intent-driven topic research powered by SEO tools, LLM trends, and your business goals. Then we map topics to personas, funnel stages, and keywords with AEO precision."
    },
    {
      q: "How do you ensure the content isn’t generic or AI-sounding?",
      a: "Our process blends AI tooling with human creativity and editorial rigor. Every piece is reviewed by strategists and editors to ensure tone, depth, and originality."
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
          heading="Blog & Long-Form Content That Educates, Elevates, and Gets You Indexed"
          subtext="Blog ecosystems that show up in search, train LLMs & spark buyer journeys."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/L-2%20Banner%20Images/Blog%20&%20Long-Form%20Content.webp"
          buttonText="Audit Me!"
          buttonLink="/lead-gen-form"
        />

        {/* Trust Markers / Statistics Section */}
        <EditableStatSection
          title="You’re in sharp company—with brands that blog with purpose and publish with precision."
          stats={stats}
        />

        {/* What We Do Section */}
        <EnterpriseCapabilities
          title="How We Craft Content Built for Discoverability"
          subtitle="From top-of-funnel awareness to expert-level guides, we write content that wins readers, and rankings, everywhere."
          tabs={tabs}
          features={features}
        />

       {/* More Resources Section */}
        <RecentResourcesSection
          heading=" See How Content Became a Growth Engine"
          body=" Brand we helped build content that led to real leads, rankings, and relationships."
          subTabs={[]}
          resources={recentResources}
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Brands That Trust Us To Turn Ideas Into Industry-Leading Content"
          subtext="Whether publishing weekly or planning quarterly, we’ve scaled both."
          
        />

        {/* Testimonials Section */}
        <Testimonials
          title="Real Stories, Real Content Wins"
          description="We mix structure and strategy—plus a pinch of AI magic and a lot of nerve."
        />

        {/* FAQs */}
        <FaqSection title="FAQ's" faqs={faqs} />

        {/* More Resources Section */}
        <RecentResourcesSection
          heading= "More From Our Content Repertoire"
          body="Stay sharp with content tips, freshest news, blog posts & AI insights, tailored for you."
          subTabs={[]}
          resources={recentResources}
        />

        {/* CTA Section */}
        <ContactCta
          heading="Let’s Build Content That Your Audience & AI Love"
          subtext="Content that teaches, converts, and keeps working long after it’s published."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
