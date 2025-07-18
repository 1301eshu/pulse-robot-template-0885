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

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items
 const tabs: TabItem[] = [
  {
    id: "marketing",
    label: "Marketo Audit & Strategy",
    icon: Zap,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png", // replace with actual
  },
  {
    id: "analytics",
    label: "Marketo Consulting & Implementation",
    icon: BarChart2,
    image: "https://example.com/image2.jpg",
  },
  {
    id: "integration",
    label: "Marketo Custom Integrations",
    icon: Database,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png",
  },
  {
    id: "security",
    label: "Marketo Training & Managed Services ",
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
        title: "Find gaps and fix your campaign flow. ",
      },
      {
        icon: Zap,
        title: "Spot where AI can give your automations some muscle.  ",
      },
      {
        icon: Zap,
        title: "Make strategies that hit targets, every time. ",
      },
    ],
  },
  {
    id: "analytics",
    items: [
      {
        icon: BarChart2,
        title: "Expert advice to make Marketo your BFF.  ",
      },
      {
        icon: BarChart2,
        title: "Create setups so tailored, like your favorite hoodie. ",
      },
      {
        icon: BarChart2,
        title: "Flawless implementation, no stress, just results.  ",
      },
    ],
  },
  {
    id: "integration",
    items: [
      {
        icon: Database,
        title: "Integrations that make Marketo feel at home. ",
      },
      {
        icon: Database,
        title: "Connect your tools to Marketo—effortlessly. ",
      },
      {
        icon: Database,
        title: "Custom solutions that just work, without drama. ",
      },
    ],
  },
  {
    id: "security",
    items: [
      {
        icon: ShieldCheck,
        title: "We train your team, minus the tech snooze.  ",
      },
      {
        icon: ShieldCheck,
        title: "Managed services that actually manage stuff.  ",
      },
      {
        icon: ShieldCheck,
        title: "Expert Marketo support, always ready to roll.  ",
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
      q: " Do I need a specific plan or subscription to get started with your services? ",
      a: " Nope! We work with any Marketo plan—whether you're keeping it basic or going all in with the advanced stuff.",
    },
    {
      q: "Do I need to change my current Marketo setup to work with your team? ",
      a: "Nah, no need for a complete overhaul. We’ll work with what you’ve got and just level it up. ",
    },
    {
      q: "What’s the first step in the Marketo audit process? ",
      a: "We kick things off with a deep dive, spotting quick wins and areas to optimize for some instant impact. ",
    },
    {
      q: "Can we still use Marketo after the audit or do we need to make big changes? ",
      a: "Yes, you can keep using Marketo as-is! We’ll just make tweaks and fine-tune your setup for peak performance.",
    },
  ];
  
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="pt-24">
        {/* HERO Section */}
        <HeroSection
          heading="Marketo, Leveled Up with Quiet AI Smarts. "
          subtext="Faster setups, sharper targeting & campaigns that know what’s next. "
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png"
        />

        {/* Statistics Section */}
        <EditableStatSection
  subtitle="WHY PARTNER WITH GROWTH NATIVES?"
  title="We’re not another agency. We’re your AI-Native growth engine"
  stats={[
    { label: "Marketo Clients  ", value: "100+" },
    { label: "Certified Marketo Gurus", value: "70+" },
    { label: "Higher Campaign Efficiency ", value: "30%" },
  ]}
/>

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="The Magic We Sprinkle to Marketo/How We Level Up Marketo"
          subtitle=" We dial in your Marketo with AI so that your campaigns crush targets & drive better "
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
        heading="Brands That Count on Our Marketo Mojo "
        subtext="Companies across the board trust us to make Marketo click. "
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
          title="Real Stories, Real AI Impact "
          description="It’s not hype if it’s backed by data and delivery. "
        />

        {/* FAQs */}
        <FaqSection title="FAQ's" faqs={faqs} />

        {/* Call to Action */}
        <ContactCta
          heading="Let's Boost Your Marketo IQ "
          subtext="Get more bang for your buck with Marketo’s smart tech.  "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}