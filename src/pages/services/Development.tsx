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
    label: "Web Development",
    icon: Zap,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png", // replace with actual
  },
  {
    id: "analytics",
    label: "Mobile App Development",
    icon: BarChart2,
    image: "https://example.com/image2.jpg",
  },
  {
    id: "integration",
    label: "eCommerce Development",
    icon: Database,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png",
  },
  {
    id: "Development",
    label: "Testing & QA",
    icon: ShieldCheck,
    image: "https://example.com/image4.jpg",
  },
    {
    id: "security",
    label: "DevOps",
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
        title: "Front-ends that load fast and look sharp ",
      },
      {
        icon: Zap,
        title: "SEO-ready, scalable, and beautifully responsive  ",
      },
      {
        icon: Zap,
        title: "Built with clean code + AI-assisted testing  ",
      },
    ],
  },
  {
    id: "analytics",
    items: [
      {
        icon: BarChart2,
        title: "Native and cross-platform builds, user-first always  ",
      },
      {
        icon: BarChart2,
        title: "AI-based behavior mapping + smart UX triggers  ",
      },
      {
        icon: BarChart2,
        title: "Apps that convert, retain, and perform under pressure ",
      },
    ],
  },
  {
    id: "integration",
    items: [
      {
        icon: Database,
        title: "Shopify, Magento, Woo, or custom—we’ve got it ",
      },
      {
        icon: Database,
        title: "Performance-tuned storefronts that scale fast ",
      },
      {
        icon: Database,
        title: "AI-powered personalization and smarter checkout flows ",
      },
    ],
  },
  {
    id: "security",
    items: [
      {
        icon: ShieldCheck,
        title: "Manual + automated testing across every device  ",
      },
      {
        icon: ShieldCheck,
        title: "AI that flags issues before users find them ",
      },
      {
        icon: ShieldCheck,
        title: "Your bug backlog? Handled before launch day  ",
      },
    ],
  },
  {
    id: "Development",
    items: [
      {
        icon: ShieldCheck,
        title: "CI/CD pipelines built for speed and scale   ",
      },
      {
        icon: ShieldCheck,
        title: "Infra that flexes with your traffic  ",
      },
      {
        icon: ShieldCheck,
        title: "Monitoring + AI alerts = uptime insurance   ",
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
  ];

  // FAQ List
  const faqs = [
    {
      q: "What tech stacks do you specialize in?",
      a: " We’re full-stack pros fluent in React, Node, Python, PHP, .NET, and more. ",
    },
    {
      q: " Do you offer post-launch support? ",
      a: " Yep—ongoing maintenance, optimization, and scaling built into every contract.",
    },
    {
      q: "Can I start small and scale later?",
      a: " Absolutely. We’re great at MVPs that grow into monsters. ",
    },
    {
      q: "Do you integrate AI into your builds?", 
      a: "Yes. From smart forms to automated workflows—we make apps think.", 
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="pt-24">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Led Development That Builds Fast, Scales Smart, and Just Works"
          highlight="3x faster"
          subtext="We design, develop, and deploy experiences that feel seamless and perform like beasts. "
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png"
        />

        {/* Statistics Section */}
        <EditableStatSection
  subtitle="WHY PARTNER WITH GROWTH NATIVES?"
  title="You’re in good company—alongside brands that trust us to build smart and scale clean.  "
  stats={[
    { label: "Projects Built Across Platforms  ", value: "200+" },
    { label: "Dev Specialists in Our Code Cave ", value: "60+" },
    { label: "Launches Delivered On Time  ", value: "98%" },
          ]}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title=" Smart Code. Seamless UX. AI-Powered Builds. "
          subtitle=" From MVP to enterprise, we craft dev ecosystems that grow with you."
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
              <button className="text-blue-700 font-medium hover:text-blue-700 transition-colors">
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

        <LogoScroller
        heading=" Code We’ve Built. Brands That Back It. "
        subtext=" From stealth startups to Fortune 500s, they trust our stack."
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
          title=" Real Stories, Real Dev Triumphs "
          description=" Every line of code? Measured, monitored, and made to win. "
        />

        {/* FAQs */}
        <FaqSection title="FAQ's" faqs={faqs} />

        {/* Call to Action */}
        <ContactCta
          heading=" Let’s Build Something Brilliant—Together "
          subtext=" AI-powered. Pixel-perfect. Ready to go live?"
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}