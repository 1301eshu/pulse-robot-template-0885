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
    label: "Self-Service Dashboard Enablement   ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Self-Service%20BI%20%20Data%20Democratization%20/Self-Service%20Dashboard%20Enablement.webp", // replace with actual
    
  },
  {
    id: "analytics",
    label: "Role-Based Reporting Architecture  ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Self-Service%20BI%20%20Data%20Democratization%20/Role-Based%20Reporting%20Architecture%20%20.webp",
  },
  {
    id: "integration",
    label: "Natural Language Query & Exploration   ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Self-Service%20BI%20%20Data%20Democratization%20/Natural%20Language%20Query%20&%20Exploration%20%20%20.webp",
  },
  {
    id: "security",
    label: "Governance-First Data Modeling    ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Self-Service%20BI%20%20Data%20Democratization%20/Governance-First%20Data%20Modeling%20%20%20%20.webp",
  },
    {
    id: "development",
    label: "Training & Enablement at Scale    ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Self-Service%20BI%20%20Data%20Democratization%20/Training%20&%20Enablement%20at%20Scale%20%20%20%20.webp",
  },
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
  
    description: "Empower every user—from Ops to Marketing—to build dashboards that actually mean something.  ",
    items: [
      { icon: Zap, title: "Intuitive, drag-and-drop interfaces on tools like Looker Studio, Power BI, Tableau   " },
      { icon: Zap, title: "Pre-modeled datasets with AI-surfaced recommendations   " },
      { icon: Zap, title: "Team onboarding included—because adoption > tools   " },
    ],
  },
  {
    id: "analytics",
   
    description: "Right metrics. Right visibility. Right now.  ",
    items: [
      { icon: BarChart2, title: "Department-specific dashboard templates  " },
      { icon: BarChart2, title: "Permissions, views, and alerts tailored to each team  " },
      { icon: BarChart2, title: "AI curates report variations based on access level + intent    " },
    ],
  },
  {
    id: "integration",
   
    description: "Ask a business question. Get a real-time answer.  ",
    items: [
      { icon: Database, title: "Chat-style interfaces for querying data—no SQL required " },
      { icon: Database, title: "AI parses ambiguity and returns clear, contextual responses   " },
      { icon: Database, title: "From “Why did revenue drop last week?” to “What changed in churn rate?”—answered in seconds   " },
    ],
  },
  {
    id: "security",
   
    description: "Self-service doesn’t mean messy—we build structure with safety.  ",
    items: [
      { icon: ShieldCheck, title: "Universal semantic layer + KPI dictionary   " },
      { icon: ShieldCheck, title: "Guardrails for calculations, field logic, and metadata   " },
      { icon: ShieldCheck, title: "AI watches for logic drift, misused metrics, and rogue dashboards  " },
    ],
  },
   {
    id: "development",
   
    description: "We don’t just build dashboards—we build data muscle.   ",
    items: [
      { icon: ShieldCheck, title: "Tailored workshops for marketing, sales, product, CX, finance  " },
      { icon: ShieldCheck, title: "Power user” enablement for internal champions    " },
      { icon: ShieldCheck, title: "AI-generated how-to prompts + on-dashboard coaching modules  " },
    ],
  },
];

  // Resources for recent articles
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

  // FAQ List
  const faqs = [
    {
      q: "Do I need a BI platform in place already? ",
      a: "Not necessarily. We’ll recommend, configure, or optimize tools based on your needs—whether you’re on Looker Studio, Tableau, Power BI, or something else. ",
    },
    {
      q: "Will my data still be governed and secure?",
      a: "100%. Our frameworks are built with permission controls, semantic layers, and audit trails.",
    },
    {
      q: "Can you help train our teams? ",
      a: "Absolutely. We offer custom training sessions + AI-guided onboarding tools for long-term enablement.",
    },
    {
      q: " Is this scalable for large orgs?",
      a: "Yes. Our approach is modular, role-based, and designed to support dozens—or hundreds—of users. ",
    },
  ];
  
  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="selfServiceBiDataDemocratization" />
      <Header />
       <SmartBreadcrumb />
      <main className="pt-0">
        {/* HERO Section */}
        <HeroSection
          heading="Self-Service BI That Puts AI-Powered Insight in Every Team’s Hands "
          subtext="No gatekeeping. No guesswork. Just clear answers—on demand. "
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Hero%20Section_L2_Bannera/Self-Service%20BI%20&%20Data%20Democratization.webp"
        />

        {/* Statistics Section */}
        <EditableStatSection
 
  title="From siloed data to strategic alignment—across every team, every role.  "
  stats={[
    { label: "Reduction in BI team workload with self-serve rollouts   ", value: "80% " },
    { label: "More cross-functional dashboards created within the first 30 days  ", value: "5x  " },
    { label: "Accuracy rating for AI-assisted reporting ", value: "98%  " },
    { label: "  Frontline teams turned into data-driven decision makers ", value: "150+" },
  ]}
/>

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="What We Do with Self-Service BI & Data Democratization "
          subtitle="We turn your business into a data-literate machine—with scalable tools and AI-empowered teams that don’t wait on analysts.  "
          tabs={tabs}
          features={features} 
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading=" How Teams Got Smarter Without Adding Headcount   "
          body=" Self-service done right = insights at scale. "
           subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

         <LogoScroller
        heading="Smart Orgs Empower Every Role with Data   "
        subtext=" From product managers to revenue ops—everyone becomes a data driver. "
        
      />

        {/* Testimonials */}
        <Testimonials
          title="  The Freedom to Explore. The Power to Act.    "
          description=" It’s not just self-serve—it’s self-sufficient.  "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

          {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="  More From Our Content Repertoire "
          body="  Insights, frameworks, and technical cheat codes from our data team.  "
           subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Build BI That Works for Everyone "
          subtext="Empower every team with answers, not wait times.    "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
