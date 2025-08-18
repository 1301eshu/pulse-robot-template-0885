// src/pages/jira-professional-services/jira-migration-configuration.tsx

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

export default function JiraMigrationConfiguration() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

 // Tab Items
 const tabs: TabItem[] = [
  {
    id: "marketing",
    label: "Jira Cloud Migrations  ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Migration%20%20Configuration/Jira%20cloud%20migration.webp",
  },
  {
    id: "analytics",
    label: "Jira Data Center Migrations  ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Migration%20%20Configuration/Jira%20data%20centre%20migration.webp",
  },
  {
    id: "integration",
    label: "Consolidation & Instance Merging  ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Migration%20%20Configuration/Consolidation%20&%20Instance%20Merging.webp",
  },
  {
    id: "security",
    label: "Custom Configuration & Field Mapping  ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Migration%20%20Configuration/Custom%20Configuration%20&%20Field%20Mapping.webp",
  },
   {
    id: "development",
    label: "App, Plugin & Integration Alignment   ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Migration%20%20Configuration/App%20,%20Plugin%20&%20Integration%20Alignment.webp",
  },
];

const features: FeatureContent[] = [
  {
    id: "marketing",
    description: "We take your Jira to the cloud without breaking anything—or anyone.  ",
    items: [
      { icon: Zap, title: "Full-stack migration planning that accounts for every workflow, custom field, and permission  " },
      { icon: Zap, title: "AI-assisted field mapping and data QA   " },
      { icon: Zap, title: "Zero disruption, zero lost sleep  " },
    ],
  },
  {
    id: "analytics",
    description: "Moving to scale? We’ll make sure your Jira gets the enterprise-grade treatment. ",
    items: [
      { icon: BarChart2, title: "Designed for speed, compliance, and performance     " },
      { icon: BarChart2, title: "High-availability, low-risk, and 100% clean   " },
      { icon: BarChart2, title: "Future-ready setup, tested under pressure   " },
    ],
  },
  {
    id: "integration",
    description: "One Jira to rule them all. Merge multiple setups into one clean, logical system.  ",
    items: [
      { icon: Database, title: "Normalize fields, workflows, and permissions  " },
      { icon: Database, title: "Unify teams without compromising context   " },
      { icon: Database, title: "AI detects overlaps, flags conflicts, and resolves duplication before they slow you down   " },
    ],
  },
  {
    id: "security",
    description: "Structure that supports your people—not the other way around.  ",
    items: [
      { icon: ShieldCheck, title: "Every custom field mapped with intent    " },
      { icon: ShieldCheck, title: "Permission schemes that reflect your org’s reality   " },
      { icon: ShieldCheck, title: "Streamlined schemes, smarter screens, fewer headaches    " },
    ],
  },
   {
    id: "development",
    description: "Keep the apps you love—or upgrade them. We’ll make it seamless.  ",
    items: [
      { icon: ShieldCheck, title: "Validate compatibility before the move  " },
      { icon: ShieldCheck, title: "Replace legacy or unsupported tools with AI-native alternatives   " },
      { icon: ShieldCheck, title: "Rebuild custom integrations with scalable architecture " },
    ],
  },
];

const recentResources: ResourceItem[] = [
  {
    title: "Agentic AI: The Silent Force Reshaping Marketing Ops",
    subtitle: "Wait, so this thing just... does it? Like, by itself? Yes. And no, it's not magic. It's called Agentic AI and it's the next evolution of marketing automation you...",
    author: "Sneha Kumari",
    date: "July 7, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
    slug: "hubspot-chatgpt-connector"
  },
  {
    title: "The AI Shortlist: Top Use Cases for Marketing Ops That You Must Know",
    subtitle: "Back in the day, Marketing Ops used to mean fighting timelines and making friends with a dozen dashboards...",
    author: "Mehakpreet Kaur",
    date: "July 4, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
    slug: "google-ads-roi-increase"
  },
  {
    title: "Marketo & AI: Best Practices for Smarter Segmentation and Nurturing",
    subtitle: "You've got Marketo. You've got data. You've got 47 tabs open. Now what?...",
    author: "Mehakpreet Kaur",
    date: "July 4, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
    slug: "marketo-ai-segmentation"
  },
];

const faqs = [
  {
    q: "What’s included in a Jira migration project? ",
    a: " Planning, field mapping, user/data migration, workflow translation, integration testing—and yes, AI-optimized cleanup.  ",
  },
  {
    q: "Can you handle complex or multi-instance Jira environments? ",
    a: " Absolutely. We specialize in merging, deduplicating, and aligning multiple systems. ",
  },
  {
    q: "What tools do you use to ensure clean migrations?",
    a: " Our own process automation toolkit + Jira-native tools + custom-built scripts backed by AI sanity checks. ",
  },
  {
    q: " Will we have downtime during migration?",
    a: "Nope. We stage the work to go live without disruption.  ",
  },
];

return (
  <div className="bg-white text-gray-900">
    <DynamicSEO page="jiraMigrationConfiguration" />
    <Header />
    <SmartBreadcrumb />
    <main className="">
      {/* HERO Section */}
      <HeroSection
        heading="Jira Migrations That Don’t Miss a Beat—With AI at the Wheel "
        subtext="Cloud or Data Center, we move your Jira fast, clean, and chaos-free."
        bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
        rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/L-2%20Banner%20Images/Migration%20and%20configuration.webp"
      />
      <EditableStatSection
        title="You’re in good company—with power users who run Jira without friction   "
        stats={[
          { label: " Successful Jira Migrations Delivered ", value: "35+" },
          { label: "Certified Jira Experts  ", value: "20+" },
          { label: " Uptime During Go-Live Transition   ", value: "100%" },
          { label: " Data Lost. Ever.  ", value: "0" },
        ]}
      />
      <EnterpriseCapabilities
        title=" What We Do with Jira Migration & Configuration   "
        subtitle="Whether you're migrating from server, consolidating multiple instances, or shifting to cloud—we make the process airtight, intelligent, and fast.  "
        tabs={tabs}
        features={features} 
      />
      <RecentResourcesSection
        heading=" See What Smart Jira Migration Looks Like in Action   "
        body="From mess to mastery—these brands made the move without the mayhem.  "
        subTabs={[]}
        resources={recentResources}
      />
      <LogoScroller
        heading=" Brands That Moved with Growth Natives  "
        subtext=" From startups upgrading to scale to enterprises ditching legacy for lean—we’ve got the blueprint. "
      />
      <Testimonials
        title=" Real Stories, Real Jira Transformation  "
        description=" Because when it’s done right, you feel it immediately.  "
      />
      <FaqSection title="FAQs" faqs={faqs} />
      <RecentResourcesSection
        heading=" More From Our Content Repertoire "
        body=" Deep dives, AI tips, and tactical Jira wisdom.  "
        subTabs={[]}
        resources={recentResources}
      />
      <ContactCta
        heading="Let’s Migrate with Precision  "
        subtext="No chaos. No compromise. Just Jira that’s finally aligned with your future.  "
        buttonLabel="Talk to an Expert"
        buttonLink="/contact"
      />
    </main>
    <Footer />
  </div>
);
}
