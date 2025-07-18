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
    label: "Campaign Automation",
    icon: Zap,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png", // replace with actual
  },
  {
    id: "analytics",
    label: "Nurturing & Scoring",
    icon: BarChart2,
    image: "https://example.com/image2.jpg",
  },
  {
    id: "integration",
    label: "Personalization & Segmentation",
    icon: Database,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png",
  },
  {
    id: "security",
    label: "Optimization & Analytics",
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
        title: "Built by bots, powered by brainwaves",
      },
      {
        icon: Zap,
        title: "Real-time triggers that feel like telepathy ",
      },
      {
        icon: Zap,
        title: "Runs while you sleep, scales while you snack ",
      },
    ],
  },
  {
    id: "analytics",
    items: [
      {
        icon: BarChart2,
        title: "AI that knows who’s warm, hot, or just browsing ",
      },
      {
        icon: BarChart2,
        title: "Serve the right message at the right micro-moment ",
      },
      {
        icon: BarChart2,
        title: "From ghosting to closing with one smart nudge ",
      },
    ],
  },
  {
    id: "integration",
    items: [
      {
        icon: Database,
        title: "Every segment, hyper-specific and AI-shaped",
      },
      {
        icon: Database,
        title: "Feels like a DM from your favorite brand",
      },
      {
        icon: Database,
        title: "Micro-audiences? Macro-results.",
      },
    ],
  },
  {
    id: "security",
    items: [
      {
        icon: ShieldCheck,
        title: "Dashboards that don’t just report but recommend ",
      },
      {
        icon: ShieldCheck,
        title: "Predictive insights for when to push, pause, or pivot ",
      },
      {
        icon: ShieldCheck,
        title: "AI sees the drop-off before you feel it ",
      },
    ],
  },
];

  // Platform Feature Cards
  const platformFeatures = [
    {
      icon: <span className="text-xl">🌀</span>,
      title: "HubSpot That Hits Hard",
      description: "Smart journeys, smarter segmentation. Let’s make it pop.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gray-700 group-hover:text-white" />,
      title: "Marketo, Unleashed",
      description: "No more messy ops. Just clean, scalable campaign magic.",
    },
    {
      icon: <Clock className="w-6 h-6 text-gray-700 group-hover:text-white" />,
      title: "Pardot, But Make It Perform",
      description: "We tweak, optimize, and turn Pardot into your power tool.",
    },
    {
      icon: <Heart className="w-6 h-6 text-gray-700 group-hover:text-white" />,
      title: "Salesforce Marketing Cloud That Doesn’t Sleep",
      description: "AI-powered campaigns that speak, sell, and self-optimize.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gray-700 group-hover:text-white" />,
      title: "Eloqua That Actually Delivers",
      description: "The strategy, structure, and flow your team’s been dreaming of.",
    },
  ];

  // FAQ List
  const faqs = [
    {
      q: "How does onboarding work?",
      a: "We guide you through every step and get you live within 1–2 weeks.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes, it’s fully flexible. Cancel or pause your subscription as needed.",
    },
    {
      q: "Is it GDPR compliant?",
      a: "Absolutely — we are fully compliant with GDPR and data regulations.",
    },
  ];
  
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="Automate your funnel to grow"
          highlight="3x faster"
          subtext="From HubSpot to Pardot, our automation experts build journeys that convert."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png"
        />

        {/* Statistics Section */}
        <EditableStatSection
  subtitle="WHY PARTNER WITH GROWTH NATIVES?"
  title="We’re not another agency. We’re your AI-Native growth engine"
  stats={[
    { label: "200+ Brands scaled with AI-led strategies", value: "200+" },
    { label: "3x Ops Efficiency in the First 90 Days", value: "3x" },
    { label: "94% Client Retention", value: "94%" },
  ]}
/>

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="Enterprise-Grade Capabilities"
          subtitle="Comprehensive Salesforce solutions designed for scale, security, and performance"
          tabs={tabs}
          features={features} 
        />

        {/* Platform Feature Cards */}
        <section className="py-20 bg-white">
          <div className="section-wrapper">
            <div className="text-left mb-16 max-w-2xl">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Our AI-Enhanced Platform Power Plays
              </h2>
              <p className="text-gray-600 mb-6">
                We bring the glow-up to whatever stack you’re on.
              </p>
              <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                Get Started &gt;
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {platformFeatures.slice(0, 3).map((card, idx) => (
                <FeatureCard key={idx} {...card} />
              ))}
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-6">
              {platformFeatures.slice(3).map((card, idx) => (
                <div key={idx} className="w-full lg:w-[32%]">
                  <FeatureCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real AI Impact "
          description="It’s not hype if it’s backed by data and delivery. "
        />

        {/* FAQs */}
        <FaqSection title="Got Questions?" faqs={faqs} />

        {/* Call to Action */}
        <ContactCta
          heading="AI Meets Marketing Automation. You Meet Results."
          subtext="Let’s plug in the tech, the talent, and the timing."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}