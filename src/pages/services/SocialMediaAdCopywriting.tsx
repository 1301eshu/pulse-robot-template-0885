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
import EnterpriseCapabilities, { TabItem, FeatureContent } from "@/components/ui/component_2";

// Icons
import { Zap, BarChart2, Database, ShieldCheck } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items
  const tabs: TabItem[] = [
    {
      id: "paidad",
      label: "Paid Ad Copy (Meta, Google, LinkedIn & more)",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Social%20Media%20Ad%20Copywriting/Paid%20Ad%20Copy%20(Meta,%20Google,%20Linkedin%20&%20more).webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-social-copywriting"
    },
    {
      id: "strategy",
      label: "Social Strategy & Calendars",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Social%20Media%20Ad%20Copywriting/Social%20Strategy%20&%20Calendars.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-social-copywriting"
    },
    {
      id: "campaign",
      label: "Campaign Concepting & Theme Copy",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Social%20Media%20Ad%20Copywriting/Campaign%20Concepting%20&%20Theme%20Copy.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-social-copywriting"
    },
    {
      id: "organic",
      label: "Organic Social Content (Posts, Threads, Carousels)",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Social%20Media%20Ad%20Copywriting/Organic%20Social%20Content%20(Posts,%20Threads,%20Carousels).webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-social-copywriting"
    },
    {
      id: "influencer",
      label: "Influencer & UGC Copy Briefs",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Social%20Media%20Ad%20Copywriting/Influencer%20&%20UGC%20Copy%20Briefs.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-social-copywriting"
    },
    {
      id: "refresh",
      label: "Copy Refresh & Optimization",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Social%20Media%20Ad%20Copywriting/Copy%20Refresh%20&%20Optimization.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen-social-copywriting"
    },
  ];

  // Feature Tab Content
  const features: FeatureContent[] = [
    {
      id: "paidad",
      description: "Sell without the sleaze. We write ad copy that hits performance metrics and brand tone.",
      items: [
        { icon: Zap, title: "Hook-rich headlines tailored to platform style" },
        { icon: Zap, title: "Value-driven copy that boosts CTR and ROAS" },
        { icon: Zap, title: "Tested structures to reduce ad fatigue" },
      ],
    },
    {
      id: "strategy",
      description: "We don’t just write posts, we map the whole journey.",
      items: [
        { icon: BarChart2, title: "Plan content by theme, objective, and format" },
        { icon: BarChart2, title: "Platform-specific calendars (X, LinkedIn, Instagram)" },
        { icon: BarChart2, title: "Align with product drops, campaigns, and moments that matter" },
      ],
    },
    {
      id: "campaign",
      description: "Got a big idea? We give it legs, voice, and vibe.",
      items: [
        { icon: Database, title: "Campaign names, taglines, and hero copy" },
        { icon: Database, title: "Messaging frameworks across channels" },
        { icon: Database, title: "Adaptable voice maps for consistent rollout" },
      ],
    },
    {
      id: "organic",
      description: "From culture drops to brand voice builders, we make organic worth scrolling.",
      items: [
        { icon: ShieldCheck, title: "Conversational, on-brand messaging that earns engagement " },
        { icon: ShieldCheck, title: "Formatted for scannability across platforms " },
        { icon: ShieldCheck, title: "Posts that build community, not just impressions " },
      ],
    },
    {
      id: "influencer",
      description: "Keep creators aligned without boxing them in.",
      items: [
        { icon: ShieldCheck, title: "Messaging guides that fit both voices" },
        { icon: ShieldCheck, title: "Light structure, heavy clarity" },
        { icon: ShieldCheck, title: "CTAs that sound human and work well" },
      ],
    },
    {
      id: "refresh",
      description: "Already posting but not getting results? Let’s sharpen it.",
      items: [
        { icon: ShieldCheck, title: "Tighter intros and more clickable hooks " },
        { icon: ShieldCheck, title: "Edits based on performance data + tone shifts" },
        { icon: ShieldCheck, title: "CTA upgrades that drive outcome-oriented action " },
      ],
    },
  ];

  // Stats Section
  const stats = [
    { label: "Campaigns delivered for paid and organic growth", value: "70+" },
    { label: "Avg. lift in CTR with optimized ad copy", value: "54%" },
    { label: "Brands supported across Meta, Google, X, and LinkedIn", value: "40+" },
 //   { label: "Industries served with platform-specific messaging", value: "10+" },
  ];

  // Resource Section
  const recentResources: ResourceItem[] = [
    {
      title: "How to Write Copy That Breaks the Scroll",
      subtitle: "Secrets to hook, engage, and drive action across paid and organic.",
      author: "Team GN",
      date: "July 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "write-copy-that-breaks-scroll"
    },
    {
      title: "Platform-Smart Messaging: What’s Working Now",
      subtitle: "See how structure and AI shape better outcomes on X, Insta, and more.",
      author: "Team GN",
      date: "June 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "platform-smart-messaging"
    },
    {
      title: "UGC That Converts: A Brief for Influencers",
      subtitle: "Steal our best templates to brief creators and boost UGC results.",
      author: "Team GN",
      date: "June 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "ugc-that-converts"
    },
  ];

  // FAQ Section
  const faqs = [
    {
      q: "What platforms do you write for?",
      a: "We cover Meta (Facebook/Instagram), LinkedIn, Google Ads, YouTube, X, TikTok, and more.",
    },
    {
      q: "Do you write both ad and organic social content?",
      a: "Yes. We handle full-funnel copy-from awareness-building posts to conversion-focused ads.",
    },
    {
      q: "Can you match our brand voice?",
      a: "Always. We study your current tone and audience, then align copy that feels naturally you.",
    },
    {
      q: "How do you measure copy performance?",
      a: "We tie performance to CTR, engagement, and conversions-using historical data, testing, and client feedback to improve.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="socialMediaAdCopywriting" />
      <Header />
      <SmartBreadcrumb />

      <main>
        <HeroSection
          heading="AI-Powered Social Media & Ad Copywriting That Builds Demand"
          subtext="From scroll-stops to click-throughs, we craft copy that’s platform-smart & algorithm-savvy."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/L-2%20Banner%20Images/Social%20Media%20&%20Ad%20Copywriting%20.webp"
          buttonText="Audit Me!"
          buttonLink="/lead-gen-social-copywriting"
        />

        <EditableStatSection
          title="You’re in good company-with brands growing reach, clicks, and conversions through smart copy."
          stats={stats}
        />

        <EnterpriseCapabilities
          title="Social Media & Ad Copies Crafted for the Way People Scroll, Click, and Buy"
          subtitle="We pair thumb-stopping creativity with conversion strategy, built for how people scroll & how platforms rank."
          tabs={tabs}
          features={features}
        />

        <RecentResourcesSection
          heading="See How Good Copy Turned Campaigns Around"
          body="How we helped brands turn scrolls into pipeline"
          subTabs={[]}
          resources={recentResources}
        />

        <LogoScroller
          heading="Folks That Trust Our Words on Scroll"
          subtext="From B2B tech to D2C lifestyle-we speak the feed’s language."
         
        />

        <Testimonials
          title="Copy That Worked-and Clients Who Got Results"
          description="Our formula? Insight, structure, and a streak of bold."
        />

        <FaqSection title="FAQs" faqs={faqs} />

        <RecentResourcesSection
          heading="More From Our Content Repertoire"
          body="Stay sharp with content tips, freshest news, blog posts & AI insights "
          subTabs={[]}
          resources={recentResources}
        />

        <ContactCta
          heading="Let’s Write Copy That Wins the Feed"
          subtext="From strategy to posts to paid-our words spark action and build pipeline."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>

      <Footer />
    </div>
  );
}
