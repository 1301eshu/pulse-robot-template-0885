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

  // Tab Items (How We Make Marketing Analytics Work for Results)
  const tabs: TabItem[] = [
    {
      id: "online-presence",
      label: "Online Presence Management",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Marketing%20Analytics%20/Online%20Presence%20Management.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "data-driven",
      label: "Data-Driven Marketing",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Marketing%20Analytics%20/Data-Driven%20Marketing.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "tracking-setup",
      label: "Analytics Tracking Set-up",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Marketing%20Analytics%20/Analytics%20Tracking%20Set-up.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "dashboard",
      label: "Analytics Dashboard Creation",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Marketing%20Analytics%20/Analytics%20Dashboard%20Creation.webp",
      ctaText: "",
      ctaLink: ""
    },
  ];

  // Features (Zigzag section content)
  const features: FeatureContent[] = [
    {
      id: "online-presence",
      description: "We audit, analyze, and optimize your website, ads, and content performance, then show you how it all connects.",
      items: [
        { icon: Zap, title: "Unified view of all marketing touchpoints" },
        { icon: Zap, title: "Engagement and funnel behavior tracking" },
        { icon: Zap, title: "Insights tied to visibility, reach, and conversions" },
      ],
    },
    {
      id: "data-driven",
      description: "Let AI do the heavy lifting. Predict, personalize, and pivot with precision.",
      items: [
        { icon: BarChart2, title: "Cross-platform data enrichment (ads, CRM, web)" },
        { icon: BarChart2, title: "Audience segmentation powered by behavior and intent" },
        { icon: BarChart2, title: "Real-time ROI tracking and campaign recommendations" },
      ],
    },
    {
      id: "tracking-setup",
      description: "Get the foundation right or everything else crumbles. Set up events and parameters to track what drives performance.",
      items: [
        { icon: Database, title: "GA4, Adobe, or custom tracking, flawless configuration" },
        { icon: Database, title: "Tag Manager orchestration for campaigns and conversions" },
        { icon: Database, title: "Attribution-ready setups across all funnel stages" },
      ],
    },
    {
      id: "dashboard",
      description: "We help you build sleek, decision-ready views that combine AI, UX, and marketing logic.",
      items: [
        { icon: ShieldCheck, title: "Looker Studio, Power BI, Tableau, and GA Dashboards" },
        { icon: ShieldCheck, title: "Predictive metrics, performance KPIs, and channel ROI" },
        { icon: ShieldCheck, title: "Custom views for stakeholders: CMO to campaign lead" },
      ],
    },
  ];

  // Trust Markers (Statistics)
  const stats = [
    { label: "Certified Web Analytics geniuses", value: "30+" },
    { label: "Analytics goals and events implemented", value: "200+" },
    { label: "Analytics Technologies Mastered", value: "20+" },
    { label: "Attribution models tailored for multi-channel growth", value: "50+" },
  ];

  // Resources (RecentResourcesSection)
  const recentResources: ResourceItem[] = [
    {
      title: "Marketing Analytics Playbook: From Clicks to Revenue",
      subtitle: "Real-world strategies to build marketing analytics that move the needle.",
      author: "Analytics Team",
      date: "July 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "marketing-analytics-playbook"
    },
    {
      title: "Custom Attribution Models: The Secret to Scaling",
      subtitle: "How to align attribution with your true buyer journey.",
      author: "Growth Strategist",
      date: "July 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "custom-attribution"
    },
    {
      title: "Self-Serve Dashboards: Empower Your Teams",
      subtitle: "Why every marketing team needs dashboards built for action.",
      author: "Product Lead",
      date: "July 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "self-serve-dashboards"
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "Can you build a custom attribution model for us?",
      a: "Yes. We create data-driven attribution models that align with your customer journey across touchpoints, platforms, and channels.",
    },
    {
      q: "How do you connect marketing analytics to business outcomes?",
      a: "We map your data to important KPIs (revenue, retention, ROAS). Every dashboard and insight ties back to growth and decision-making.",
    },
    {
      q: "Can we integrate CRM, ad platforms, and offline data sources?",
      a: "Definitely. We build data pipelines that unify platforms like HubSpot, Salesforce, Meta Ads, Google Ads, and even offline conversions into a single reporting layer.",
    },
    {
      q: "Will we need to rely on your team every time we need a report?",
      a: "No. We build self-serve dashboards and train your team to confidently explore, filter, and extract insights without needing constant support.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="marketingAnalytics" />
      <Header />
       <SmartBreadcrumb />
      <main className="pt-0">

        {/* HERO Section */}
        <HeroSection
          heading="AI-Powered Marketing Analytics That Fuel Growth"
          subtext="Map your marketing to what matters. Real impact, not just impressions."
          bgImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Value%20Proposition%20/8302_gqqgrs_1.webp"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Hero%20Section_L2_Bannera/Marketing%20Analytics.webp"
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="You’re in good company-with brands leveling up with sharper marketing decisions."
          stats={stats}
        />

        {/* Tab Features Section (How We Make Marketing Analytics Work for Results) */}
        <EnterpriseCapabilities
          title="How We Make Marketing Analytics Work for Results"
          subtitle="We turn data into strategic action that drives marketing ROI"
          tabs={tabs}
          features={features}
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="See the Impact of Sharp Marketing Analytics"
          body="A glimpse at how we’ve helped brands track smarter for better growth"
          subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

        <LogoScroller
          heading="Folks That Trust Our Marketing Analytics Moves"
          subtext="From high-growth startups to enterprises-we help them decode every click and conversion."
         
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories. Real ROI."
          description="Strategy in the lead, AI magic in hand, and insights that work day & night."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="More From Our Content Repertoire"
          body="Keep your marketing analytics edge sharp with our newest guides, blog posts, and AI-powered insights."
          subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

        {/* Call to Action */}
        <ContactCta
          heading="Want to See Your Marketing Data in Motion?"
          subtext="Let’s turn clicks into insights and insights into revenue."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />

      </main>
      <Footer />
    </div>
  );
}
