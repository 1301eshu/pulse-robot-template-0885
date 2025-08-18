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

  // Tab Items (Zigzag/Services)
  const tabs: TabItem[] = [
    {
      id: "consulting",
      label: "Consulting & Implementation",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Sales%20Cloud%20/Consulting%20&%20Implementation.webp",
  //    ctaText: "Get a Demo",
  //    ctaLink: "/l3-template"
    },
    {
      id: "integrations",
      label: "Integrations",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Sales%20Cloud%20/Integrations.png",
   //   ctaText: "Get a Demo",
   //   ctaLink: "/l3-template"
    },
    {
      id: "migration",
      label: "Migration",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Sales%20Cloud%20/Migration.webp",
   //   ctaText: "Get a Demo",
   //   ctaLink: "/l3-template"
    },
    {
      id: "support",
      label: "Support & Maintenance",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Sales%20Cloud%20/Support%20Maintainance.webp",
   //   ctaText: "Get a Demo",
   //   ctaLink: "/l3-template"
    },
    {
      id: "audit",
      label: "Audit & Optimization",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Sales%20Cloud%20/Audit%20Optimization.webp",
    //  ctaText: "Get a Demo",
   //   ctaLink: "/l3-template"
    }
  ];

  // Features (Zigzag section content)
  const features: FeatureContent[] = [
    {
      id: "consulting",
      description: "We tailor Salesforce Sales Cloud builds that combine automation, AI, and proven flows to drive predictable pipeline growth.",
      items: [
        { icon: Zap, title: "Custom setups for your GTM motion" },
        { icon: Zap, title: "Predict outcomes with Einstein insights" },
        { icon: Zap, title: "Automate away repetitive sales tasks" }
      ]
    },
    {
      id: "integrations",
      description: "Bring all your customer data into one view—Sales Cloud connects seamlessly across CRMs, ERPs, social platforms, and support tools.",
      items: [
        { icon: BarChart2, title: "Sync lead, contact, and opportunity data across platforms" },
        { icon: BarChart2, title: "Enable cross-team visibility with shared account insights" },
        { icon: BarChart2, title: "Connect to tools like Slack, Outlook, and eCommerce platforms" }
      ]
    },
    {
      id: "migration",
      description: "Make the move to Salesforce Sales Cloud without slowing down—fast-track adoption, preserve your data, and future-ready foundations.",
      items: [
        { icon: Database, title: "Migrate leads, opportunities, workflows, and reports—cleanly and completely" },
        { icon: Database, title: "Preserve data integrity with validation, deduplication, and mapping best practices" },
        { icon: Database, title: "Cut migration time in half with proven frameworks and AI-assisted setup" }
      ]
    },
    {
      id: "support",
      description: "Stay sales-ready with dedicated Sales Cloud support—smart fixes, smooth operations, and zero disruption.",
      items: [
        { icon: ShieldCheck, title: "Manage roles, permissions & user onboarding with ease" },
        { icon: ShieldCheck, title: "Ensure clean, secure, and up-to-date deal data" },
        { icon: ShieldCheck, title: "Proactively monitor, troubleshoot, and optimize workflows" }
      ]
    },
    {
      id: "audit",
      description: "We audit your setup, find leaks, and tune your sales engine for efficiency, scale, and AI-powered growth.",
      items: [
        { icon: Heart, title: "Identify gaps in current setup" },
        { icon: Heart, title: "Align tech with revenue goals" },
        { icon: Heart, title: "Scale smart with AI insights" }
      ]
    }
  ];

  // Statistics (Trust Markers)
  const stats = [
    { label: "Happy Salesforce Customers", value: "100+" },
    { label: "Years of combined Salesforce experience", value: "200+" },
    { label: "Salesforce-certified experts on board", value: "60+" }
  ];

  // Recent Resources
  const recentResources: ResourceItem[] = [
    {
      title: "Winning More Deals with AI in Salesforce Sales Cloud",
      subtitle: "How smart automation changed the pipeline game for our clients.",
      author: "Sales Ops Team",
      date: "July 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "ai-salesforce-deals"
    },
    {
      title: "5 Ways to Supercharge Sales Cloud With Integrations",
      subtitle: "Our best integration tips for connecting your revenue stack.",
      author: "CRM Solutions",
      date: "July 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "salesforce-integration-tips"
    },
    {
      title: "Data Hygiene for Smarter Selling",
      subtitle: "Why clean data is the not-so-secret weapon for quota-crushing teams.",
      author: "Sales Enablement",
      date: "July 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "data-hygiene-sales"
    },
  ];

  // Case Study Tabs (Carousel)
  const caseStudyTabs: TabItem[] = [
    { id: "cs1", label: "Case Study 1", icon: Zap, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/1" },
    { id: "cs2", label: "Case Study 2", icon: BarChart2, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/2" },
    { id: "cs3", label: "Case Study 3", icon: Database, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/3" },
    { id: "cs4", label: "Case Study 4", icon: ShieldCheck, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/4" },
  ];

  // FAQs
  const faqs = [
    {
      q: "Do I need a big sales team to use Salesforce Sales Cloud?",
      a: "Nope! Whether you're solo or scaling, we tailor the platform to your current team and future growth.",
    },
    {
      q: "What’s included in the free audit?",
      a: "We review your current CRM setup, sales processes, and tools, plus give you AI-driven ideas to instantly boost efficiency.",
    },
    {
      q: "Can Sales Cloud work with my existing tools?",
      a: "Absolutely. We’ll integrate your current stack so your teams keep using what they love, just smarter.",
    },
    {
      q: "What happens after I migrate to Salesforce Sales Cloud?",
      a: "We stick around! Our team supports you with adoption, training, optimization, and ongoing enhancements.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="salesCloud" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Powered Sales Cloud: Where Smart Selling Happens"
          subtext="Crush your sales targets with intelligent automation and data insights"
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Hero_Section-L2-Banners/Sales%20cloud.webp"
         
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="You’re in good company—with brands scaling smarter with Salesforce Sales Cloud."
          stats={stats}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="Smart Sales Solutions That Actually Move the Needle"
          subtitle="We turn ordinary sales processes into revenue engines that never sleep"
          tabs={tabs}
          features={features}
        />

       {/* More Resources Section */}
        <RecentResourcesSection
          heading="Success Stories That Speak for Themselves "
          body="A few real-world wins we’ve driven with Salesforce Sales Cloud. "
          subTabs={[]}
          resources={recentResources}
        />

        {/* Logo Section */}
        <LogoScroller
          heading="Trusted by Companies Using Salesforce Sales Cloud"
          subtext="From lean teams to global sellers—we help them all win smarter."
         
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real Growth"
          description="Hear how we helped brands hit revenue goals with Salesforce Sales Cloud."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* More Resources Section */}
        <RecentResourcesSection
          heading="More From Our Content Repertoire"
          body="Explore our freshest blog posts, playbooks, and AI-powered sales ideas."
          subTabs={[]}
          resources={recentResources}
        />

        {/* Call to Action */}
        <ContactCta
          heading="Let AI Drive Your Sales Machine to New Heights"
          subtext="Custom Salesforce Sales Cloud solutions that deliver"
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
