// src/pages/services/MarketingAutomation.tsx

import { useState } from "react";

// Component Imports
import StatSection from "@/components/Statistics";
import Component1 from "@/components/ui/component_1";
import FeatureCard from "@/components/ui/component_3";
import Testimonials from "@/components/ui/component_4";
import FaqSection from "@/components/ui/component_5";
import ContactCta from "@/components/ui/component_6";
import HeroSection from "@/components/ui/component_7";
import LogoScroller from '@/components/ui/component_13';
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
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
    label: "Salesforce Implementation & Setup ",
    icon: Zap,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png", // replace with actual
  },
  {
    id: "analytics",
    label: "Salesforce Integration",
    icon: BarChart2,
    image: "https://example.com/image2.jpg",
  },
  {
    id: "integration",
    label: "Salesforce Strategy & Consultation",
    icon: Database,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png",
  },
  {
    id: "security",
    label: "Salesforce Custom App Development",
    icon: ShieldCheck,
    image: "https://example.com/image4.jpg",
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
        title: "AI-ready config to get you scaling faster  ",
      },
      {
        icon: Zap,
        title: "Stress-free data migration (we triple-check everything)  ",
      },
      {
        icon: Zap,
        title: "Smarter workflows, fewer clicks, happier teams  ",
      },
    ],
  },
  {
    id: "analytics",
    items: [
      {
        icon: BarChart2,
        title: "Connect Salesforce to your favorite tools—seamlessly  ",
      },
      {
        icon: BarChart2,
        title: "Real-time sync so nothing gets left behind  ",
      },
      {
        icon: BarChart2,
        title: "Custom APIs that play nice and scale fast  ",
      },
    ],
  },
  {
    id: "integration",
    items: [
      {
        icon: Database,
        title: "Predictive insights that don’t require a crystal ball ",
      },
      {
        icon: Database,
        title: "Tailored Salesforce gameplans—powered by real data + AI ",
      },
      {
        icon: Database,
        title: "Flexible, future-proof thinking (no cookie-cutter nonsense) ",
      },
    ],
  },
  {
    id: "security",
    items: [
      {
        icon: ShieldCheck,
        title: "Custom apps that feel like they came with Salesforce ",
      },
      {
        icon: ShieldCheck,
        title: "AI-powered features your teams will actually use ",
      },
      {
        icon: ShieldCheck,
        title: "Slick UIs, no developer tantrums needed ",
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
      q: "Do I need a certain Salesforce edition to get started?",
      a: "Nope! We speak fluent Salesforce—from Starter to Enterprise (and all the acronyms in between).",
    },
    {
      q: "What’s in the free audit?",
      a: "A smart look under your CRM’s hood + pro tips + one AI-driven idea we guarantee you haven’t tried.",
    },
    {
      q: "How does AI make Salesforce better?",
      a: "Think predictions, auto-tasks, and insights before your coffee kicks in. ",
    },
    {
      q: "Can you hook Salesforce into our current stack?",
      a: "You bet. We’re integration nerds—and proud of it.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Powered Salesforce Solutions That Actually Know What’s Up "
          highlight="3x faster"
          subtext="Smarter workflows. Predictive insights. Zero chaos. All systems: go. "
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png"
        />

        {/* Statistics Section */}
        <StatSection
  subtitle="WHY PARTNER WITH GROWTH NATIVES?"
  title="You’re in good company—alongside brands that ditched the manual grind and leveled up with AI-fueled Salesforce. "
  stats={[
    { label: "Marketing Automation Customers", value: "100+" },
    { label: "Hours of Salesforce Consulting Delivered", value: "2500+" },
    { label: "Certified Salesforce Experts", value: "60+" },
  ]}
/>

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="We Don’t Just Do Salesforce. We AI the Heck Out of It. "
          subtitle="Strategy, setup, automation—fully loaded with intelligence (and personality)."
          tabs={tabs}
          features={features} 
        />

       {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="Stay Ahead with HubSpot + AI Insights"
          subTabs={[
            { id: "all", label: "All Resources" },
            { id: "guides", label: "Guides" },
            { id: "case-studies", label: "Case Studies" }
          ]}
          resources={recentResources}
        />

         <LogoScroller
        heading="AI-Led Results Trusted by Brands You Know"
        subtext="  From fast-growing startups to global giants—Salesforce + AI works for them. Let’s make "
        logos={[
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
        ]}
      />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real Salesforce Impact "
          description=" Don’t take our word for it. Take theirs. "
        />

        {/* FAQs */}
        <FaqSection title="FAQ's" faqs={faqs} />

        {/* Call to Action */}
        <ContactCta
          heading=" Let’s Make Your Salesforce Smarter (And Less Annoying) "
          subtext="Let’s plug in the tech, the talent, and the timing."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}