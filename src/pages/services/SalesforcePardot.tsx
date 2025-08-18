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
  Heart,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items (What We Do With Pardot)
  const tabs: TabItem[] = [
    {
      id: "audit",
      label: "Pardot Audit",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Salesforce%20pardot/pardot%20Audit.webp",
 //      ctaText: "Get a Demo",
//    ctaLink: "/l3-template"
    },
    {
      id: "consulting",
      label: "Pardot Consulting",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Salesforce%20pardot/Pardot%20Consulting.webp",
     ctaText: "Read More",
 ctaLink: "L3/pardot-consulting"
    },
    {
      id: "implementation",
      label: "Pardot Implementation",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Salesforce%20pardot/Pardot%20Impementation.webp",
  //     ctaText: "Get a Demo",
  //  ctaLink: "/l3-template"
    },
    {
      id: "operations",
      label: "Pardot Operations",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Salesforce%20pardot/Pardot%20operation.webp",
     ctaText: "Read More",
    ctaLink: "L3/pardot-operations"
    },
    {
      id: "managed",
      label: "Pardot Managed Services",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Salesforce%20pardot/pardot%20managed%20services.webp",
  ctaText: "Read More",
   ctaLink: "L3/pardot-managed-services"
    },
    {
      id: "migration",
      label: "Pardot Migration",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Salesforce%20pardot/Pardot%20migration.webp",
 //      ctaText: "Get a Demo",
 //   ctaLink: "/l3-template"
    },
    {
      id: "training",
      label: "Pardot Training Services",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Salesforce%20pardot/Pardot%20training%20services.webp",
      ctaText: "Read More",
    ctaLink: "L3/training-pardot"
    }
  ];

  // Features
  const features: FeatureContent[] = [
    {
      id: "audit",
      description: "Messy data? Dropped leads? We fix that. From audits to automation, we tune up your Pardot so everything runs smoother, faster, and smarter.",
      items: [
        { icon: Zap, title: "Audits that kick your campaign into high gear" },
        { icon: Zap, title: "Uncover hidden issues in syncing, tracking, segmentation" },
        { icon: Zap, title: "Tune your automation for leads that score & convert" },
      ],
    },
    {
      id: "consulting",
      description: "Pardot, set up right, brings sales and marketing into sync. Integrations run smooth, AI speeds things up, and leads get nurtured.",
      items: [
        { icon: BarChart2, title: "Strategy + setup that gets sales and marketing vibing" },
        { icon: BarChart2, title: "Smart consulting to sharpen targeting and scale faster" },
        { icon: BarChart2, title: "Plug in AI to build nurture tracks that fuel real pipeline" },
      ],
    },
    {
      id: "implementation",
      description: "We don't just turn it on, we build it to perform.",
      items: [
        { icon: Heart, title: "Funnels, scoring, and automation that's tailored & tested" },
        { icon: Heart, title: "CRM, campaigns, and forms, synced clean" },
        { icon: Heart, title: "Reporting, tracking, and segmentation wired for growth" },
      ],
    },
    {
      id: "operations",
      description: "We keep your Pardot engine running smooth so your team can focus on results.",
      items: [
        { icon: ShieldCheck, title: "Campaigns executed with precision, speed, and zero last-minute chaos" },
        { icon: ShieldCheck, title: "Clean and conversion-ready lead flows, scoring, segments" },
        { icon: ShieldCheck, title: "Reporting, QA, and backend cleanup handled quietly" },
      ],
    },
    {
      id: "managed",
      description: "No bandwidth? No problem. Certified pros handle the heavy lifting, so campaigns run smooth, even when your team shifts gears.",
      items: [
        { icon: ShieldCheck, title: "24/7 access to Pardot-certified experts, always on deck" },
        { icon: ShieldCheck, title: "High-volume campaigns? We handle them like pros" },
        { icon: ShieldCheck, title: "Seamless work continuity, even during transitions" },
      ],
    },
    {
      id: "migration",
      description: "Migrations don't need to be messy. Pardot connects to your stack, fits right in, and runs without a hitch.",
      items: [
        { icon: Database, title: "Migrations so smooth, you'll blink and miss it" },
        { icon: Database, title: "CRM, campaigns, and connectors, synced tight from the start" },
        { icon: Database, title: "Lead scoring and automations rebuilt, not just replicated" },
      ],
    },
    {
      id: "training",
      description: "Give your team the skills to run Pardot like pros, from day-one users to full-blown power players.",
      items: [
        { icon: Heart, title: "Hands-on training customized to your workflows" },
        { icon: Heart, title: "Learn to build, launch, and optimize campaigns like a pro" },
        { icon: Heart, title: "Unlock advanced, AI-backed features like automation rules, scoring, and dynamic content" },
      ],
    },
  ];

  // Trust Markers (Statistics)
  const stats = [
    { label: "Happy Pardot clients", value: "25+" },
    { label: "Certified Pardot-certified consultants", value: "20+" },
    { label: "Jump in campaign performance", value: "30%" },
  ];

  // Resources (RecentResourcesSection)
  const recentResources: ResourceItem[] = [
    {
      title: "5 Ways AI Supercharges Pardot Campaigns",
      subtitle: "From smarter segmentation to real automation, AI is rewriting Pardot best practices.",
      author: "Pardot Strategy Team",
      date: "July 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "pardot-ai-campaigns"
    },
    {
      title: "Avoiding Messy Migrations: A Pardot Playbook",
      subtitle: "Tips and tools for making your move to Pardot flawless, fast, and future-proof.",
      author: "Migration Lead",
      date: "July 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "pardot-migration-playbook"
    },
    {
      title: "Unlocking Reporting in Pardot: Data-Driven Growth",
      subtitle: "How the best marketers use Pardot analytics for everyday decisions.",
      author: "Analytics Team",
      date: "July 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "pardot-reporting"
    },
  ];

  // Case Studies (as carousel tabs)
  const caseStudyTabs: TabItem[] = [
    { id: "cs1", label: "Case Study 1", icon: Zap, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/1" },
    { id: "cs2", label: "Case Study 2", icon: BarChart2, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/2" },
    { id: "cs3", label: "Case Study 3", icon: Database, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/3" },
    { id: "cs4", label: "Case Study 4", icon: ShieldCheck, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/4" },
  ];

  // FAQs
  const faqs = [
    {
      q: "We're already using Pardot. Will you audit what's working before pitching changes?",
      a: "Sure, we check your existing setup first—what's firing, what's flopping—then layer in what adds real lift.",
    },
    {
      q: "If we don't know what's broken, can you still help?",
      a: "Absolutely. Our audits surface what's missing. Most clients call it their biggest eye-opener.",
    },
    {
      q: "Can you help us align Pardot with our CRM and sales team?",
      a: "100%. Marketing automation that doesn't sync with sales is just noise. We close that loop.",
    },
    {
      q: "Do we need to upgrade our Pardot plan to work with your team?",
      a: "No. We work with any Pardot plan, cranking up the impact without you needing to spend more.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="salesforcePardot" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="Your Pardot, Amped Up with AI"
          subtext="Target like a pro, save hours, win campaigns on cruise control."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Hero%20Section_L1_Banner/pardot.webp"
         
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="You're in smart company—alongside brands scaling better with Pardot."
          stats={stats}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="How We Give Pardot a Nudge (in the Right Direction)"
          subtitle="We work behind the scenes to give your lead gen and campaigns a quiet boost."
          tabs={tabs}
          features={features}
        />

         {/* More Resources Section */}
        <RecentResourcesSection
          heading="See What Happens When Pardot Gets a Boost"
          body="These brands knew who to call for Pardot know-how "
          subTabs={[]}
          resources={recentResources}
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Brands That Trust Us With Pardot"
          subtext="Unicorns, enterprises, and everything in between—Pardot runs with us"
         
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real Pardot Growth"
          description="Less grunt work, more growth—AI-led, expert-fed."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* More Resources Section */}
        <RecentResourcesSection
          heading="More From Our Content Repertoire"
          body="Level up your Pardot skills with our blog posts, guides, and AI tips."
          subTabs={[]}
          resources={recentResources}
        />

        {/* Call to Action */}
        <ContactCta
          heading="Let's Enhance Your Pardot with AI"
          subtext="Give Pardot the TLC it deserves & see the magic unfold"
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
