// Full copy of /services/brand-campaign

import { useState } from "react";
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
import EnterpriseCapabilities, { TabItem, FeatureContent } from "@/components/ui/component_2";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import { FileText, Package, Sparkles, Zap } from "lucide-react";
import ExploreMoreBlock from "@/components/exploremore";

export default function BrandCampaign() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  // Tabs (from the doc's "What We Do" section)
  const tabs: TabItem[] = [
    {
      id: "brand-identity",
      label: "Brand Identity Systems",
      icon: FileText,
      image:
        "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Hubspot/Hubspot%20Audit.webp",
    },
    {
      id: "full-funnel",
      label: "Full-Funnel Campaign Design",
      icon: Package,
      image:
        "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Hubspot/Hubspot%20Consulting.webp",
    },
    {
      id: "narrative",
      label: "Narrative & Messaging Design",
      icon: Sparkles,
      image:
        "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Hubspot/Hubspot%20Operations.webp",
    },
    {
      id: "rapid-pods",
      label: "Rapid Creative Pods",
      icon: Zap,
      image:
        "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Hubspot/Hubspot%20Migration.webp",
    },
  ];

  // Features under each tab (copy aligned to the doc)
  const features: FeatureContent[] = [
    {
      id: "brand-identity",
      description:
        "Make your brand instantly recognizable and built to scale.",
      items: [
        { icon: FileText, title: "Logos, type, and visual guides rooted in digital-first thinking" },
        { icon: FileText, title: "Color systems optimized for accessibility and modern UI modes" },
        { icon: FileText, title: "Messaging frameworks that speak directly to your audience" },
      ],
    },
    {
      id: "full-funnel",
      description:
        "Launch campaigns that move fast, stay consistent, and convert better.",
      items: [
        { icon: Package, title: "Cross-channel creative kits: landing pages, social, ads, emails & more" },
        { icon: Package, title: "Visual systems that scale with your spend and objectives" },
        { icon: Package, title: "Creative QA to ensure campaign consistency at speed" },
      ],
    },
    {
      id: "narrative",
      description: "Own the story across every touchpoint.",
      items: [
        { icon: Sparkles, title: "Campaign themes that resonate with real buyer intent" },
        { icon: Sparkles, title: "Funnel-aware messaging frameworks powered by intent signals" },
        { icon: Sparkles, title: "AI-assisted copy testing for high-performing CTAs and headlines" },
      ],
    },
    {
      id: "rapid-pods",
      description: "Speed up without creative compromise.",
      items: [
        { icon: Zap, title: "On-demand pods for launches, rebrands, and campaign sprints" },
        { icon: Zap, title: "Collaborative workflows across design, content, and strategy" },
        { icon: Zap, title: "Timelines built for urgency without sacrificing brand integrity" },
      ],
    },
  ];

  // Resources (structure preserved; sample content)
  const recentResources: ResourceItem[] = [
    {
      title: "Agentic AI: The Silent Force Reshaping Marketing Ops",
      subtitle:
        "Wait, so this thing just... does it? Like, by itself? Yes. And no, it's not magic. It's called Agentic AI and it's the next evolution of marketing automation you...",
      author: "Sneha Kumari",
      date: "July 7, 2025",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "hubspot-chatgpt-connector",
    },
    {
      title: "The AI Shortlist: Top Use Cases for Marketing Ops That You Must Know",
      subtitle:
        "Back in the day, Marketing Ops used to mean fighting timelines and making friends with a dozen dashboards...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "google-ads-roi-increase",
    },
    {
      title: "Marketo & AI: Best Practices for Smarter Segmentation and Nurturing",
      subtitle:
        "You've got Marketo. You've got data. You've got 47 tabs open. Now what?...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "marketo-ai-segmentation",
    },
  ];

  // FAQs (from the doc)
  const faqs = [
    {
      q: "Do you work with existing brand assets or start from scratch?",
      a: "Both. We can evolve your current identity or help build something fresh that aligns with your next stage of growth.",
    },
    {
      q: "What deliverables are included in a campaign design?",
      a: "Everything from landing pages and banners to reels, carousels, and emails, delivered in a format thats ready to launch.",
    },
    {
      q: "How do you ensure brand consistency across teams and touchpoints?",
      a: "Through centralized design systems, asset libraries, and structured QA processes built into every sprint.",
    },
    {
      q: "How quickly can a brand or campaign design project go live?",
      a: "Most campaigns are execution-ready in 1015 working days. For urgent projects, we activate Rapid Pods for faster turnaround.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Backed Brand & Campaign Design That Drives Recognition, Recall, and Results"
          subtext="Build a brand that feels distinct and run campaigns that move people, from first glance to final click."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://res.cloudinary.com/dar70fhfi/image/upload/v1753086148/image_1_qverlt.png"
        />

        {/* Trust Markers / Statistics Section */}
        <EditableStatSection
          title="Youre in creative companywith brands that trust us to turn design into growth."
          stats={[
            { label: "Average lift in engagement after design-led refresh", value: "4.8x" },
            { label: "Retention rate on ongoing brand & creative mandates", value: "92%" },
            { label: "Brands rebranded, repositioned, or scaled with our systems", value: "60+" },
          ]}
        />

        {/* What We Do */}
        <EnterpriseCapabilities
          title="How We Enhance Your Brand & Campaign Design with AI"
          subtitle="We translate your brands purpose into design systems and campaigns that consistently deliver measurable outcomes."
          tabs={tabs}
          features={features}
        />

        {/* Case Studies (using RecentResourcesSection component) */}
        <RecentResourcesSection
          heading="How Brand & Campaign Design Became a Growth Catalyst"
          body="Brands weve helped bridge identity gaps, scale campaigns, and turn consistency into conversion."
          subTabs={[]}
          resources={recentResources}
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Trusted by Brands That Value Identity & Execution"
          subtext="From fast-growth startups to enterprise leaders, we bring brand and campaign design together to scale."
        />

        {/* Testimonials */}
        <Testimonials
          title="Campaigns That Look Good and Work Harder"
          description="Where brand clarity meets campaign precisioncreativity, strategy, and AI in sync."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

         {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Stay updated with the tips, tactics, resources and insights to outsmart the algorithm and your competitors. "
  perPage={6}
  firstN={4}
  contentType="blogs"
/>

        {/* CTA */}
        <ContactCta
          heading="Make Every Campaign Count and Every Brand Impression Stick"
          subtext="Lets align your message and creative with momentum that performs and endures."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
