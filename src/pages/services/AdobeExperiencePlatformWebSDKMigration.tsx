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
  Import,
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
    label: "Pardot Audit & Operations",
    icon: Zap,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png", // replace with actual
    ctaText: "Get a Demo",
    ctaLink: "/l3-template"
  },
  {
    id: "analytics",
    label: "Pardot Consulting & Implementation",
    icon: BarChart2,
    image: "https://example.com/image2.jpg",
    ctaText: "Get a Demo",
    ctaLink: "/l3-template"
  },
  {
    id: "integration",
    label: "Pardot Managed Services ",
    icon: Database,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png",
    ctaText: "Get a Demo",
    ctaLink: "/l3-template"
  },
  {
    id: "security",
    label: "Pardot Migration & Custom Integrations",
    icon: ShieldCheck,
    image: "https://example.com/image4.jpg",
    ctaText: "Get a Demo",
    ctaLink: "/l3-template"
  },
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
    items: [
      {
        icon: Zap,
        title: "Audits that kick your campaign into high gear ",
      },
      {
        icon: Zap,
        title: "MarTech & CRM, buttered up and synced  ",
      },
      {
        icon: Zap,
        title: "Leads that never ghost, always engage  ",
      },
    ],
  },
  {
    id: "analytics",
    items: [
      {
        icon: BarChart2,
        title: "Consulting that gets your sales & marketing vibing  ",
      },
      {
        icon: BarChart2,
        title: "Tech stack hacks that fast-track your wins, AI-boosted  ",
      },
      {
        icon: BarChart2,
        title: "Lead nurturing that turns your prospects into diehards ",
      },
    ],
  },
  {
    id: "integration",
    items: [
      {
        icon: Database,
        title: "24/7 access to Pardot-certified experts, always on deck ",
      },
      {
        icon: Database,
        title: "High-volume campaigns? We handle them like pros ",
      },
      {
        icon: Database,
        title: "Seamless work continuity, even during transitions ",
      },
    ],
  },
  {
    id: "security",
    items: [
      {
        icon: ShieldCheck,
        title: "Pardot that just gets your stack ",
      },
      {
        icon: ShieldCheck,
        title: "Migrations so smooth, you’ll blink and miss it  ",
      },
      {
        icon: ShieldCheck,
        title: "Integrations that don’t break a sweat ",
      },
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
      q: "We’re already using Pardot. Will you audit what’s working before pitching changes?",
      a: "Sure, we check your existing setup first-what’s firing, what’s flopping-then layer in what adds real lift. ",
    },
    {
      q: " If we don’t know what’s broken, can you still help?",
      a: "Absolutely. Our audits surface what’s missing. Most clients call it their biggest eye-opener. ",
    },
    {
      q: "Can you help us align Pardot with our CRM and sales team? ",
      a: "100%. Marketing automation that doesn’t sync with sales is just noise. We close that loop. ",
    },
    {
      q: " Do we need to upgrade our Pardot plan to work with your team? ",
      a: " No. We work with any Pardot plan, cranking up the impact without you needing to spend more.",
    },
  ];
  
  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="adobeExperiencePlatform" />
      <Header />
      <SmartBreadcrumb />
      <main className="pt-24">
        {/* HERO Section */}
        <HeroSection
          heading="Your Pardot, Amped Up with AI"
         
          subtext="Target like a pro, save hours, win campaigns on cruise control."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Adobe%20Experience%20platform%20web%20sdk%20migration.webp"
        />

        {/* Statistics Section */}
        <EditableStatSection
  
  title="You’re in smart company-alongside brands scaling better with Pardot. "
  stats={[
    { label: "Happy Pardot Clients  ", value: "25+" },
    { label: "Certified Pardot Nerds ", value: "20+" },
    { label: "Jump in Campaign Performance ", value: "30%" },
  ]}
/>

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="How We Give Pardot a Nudge (in the Right Direction)"
          subtitle=" We work behind the scenes to give your lead gen and campaigns a quiet boost."
          tabs={tabs}
          features={features} 
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="Stay Ahead with HubSpot + AI Insights"
          subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

         <LogoScroller
        heading=" Brands That Trust Us With Pardot"
        subtext=" Unicorns, enterprises, and everything in between-Pardot runs with us  "
        
      />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real AI Impact "
          description=" Less grunt work, more growth-AI-led, expert-fed. "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* Call to Action */}
        <ContactCta
          heading="Don’t Let Your Pardot Gather Dust "
          subtext="Give it the TLC it deserves & see the magic unfold!"
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
