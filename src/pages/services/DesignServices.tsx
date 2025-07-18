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
    label: "UI/UX Design",
    icon: Zap,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png", // replace with actual
  },
  {
    id: "analytics",
    label: "Mobile App Design",
    icon: BarChart2,
    image: "https://example.com/image2.jpg",
  },
  {
    id: "integration",
    label: "Motion Graphics",
    icon: Database,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png",
  },
  {
    id: "security",
    label: "Brand & Campaign Design",
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
        title: "Interfaces that evolve with your users ",
      },
      {
        icon: Zap,
        title: "UX flows built on behavior and insight  ",
      },
      {
        icon: Zap,
        title: "Designed with data. Delivered with elegance.  ",
      },
    ],
  },
  {
    id: "analytics",
    items: [
      {
        icon: BarChart2,
        title: "Thumb-friendly designs for swiping satisfaction. ",
      },
      {
        icon: BarChart2,
        title: "AI-driven personalization that makes users feel special.  ",
      },
      {
        icon: BarChart2,
        title: "Journeys so smooth, they'll never want to exit.  ",
      },
    ],
  },
  {
    id: "integration",
    items: [
      {
        icon: Database,
        title: "Animations that tell stories, not just move around.",
      },
      {
        icon: Database,
        title: "AI-assisted effects that add pizzazz without the cheese.",
      },
      {
        icon: Database,
        title: "Visuals that keep eyeballs glued to the screen. ",
      },
    ],
  },
  {
    id: "security",
    items: [
      {
        icon: ShieldCheck,
        title: "Scroll-stopping ads, decks, and downloadable assets  ",
      },
      {
        icon: ShieldCheck,
        title: "Templates that scale across sales and social  ",
      },
      {
        icon: ShieldCheck,
        title: "AI-powered content ideas, visuals, and versioning on demand ",
      },
    ],
  },
];

  // Platform Feature Cards
  const platformFeatures = [
    {
      icon: <span className="text-xl">🌀</span>,
      title: "Figma ",
      description: "Design systems that evolve with your product ",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gray-700 group-hover:text-white" />,
      title: "Adobe Creative Cloud ",
      description: "Visuals that flex across formats and devices ",
    },
    {
      icon: <Clock className="w-6 h-6 text-gray-700 group-hover:text-white" />,
      title: "Webflow ",
      description: "From static design to pixel-perfect builds ",
    },
    {
      icon: <Heart className="w-6 h-6 text-gray-700 group-hover:text-white" />,
      title: "Canva  ",
      description: "Templates that let your team",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gray-700 group-hover:text-white" />,
      title: "HeyGen ",
      description: "Script-to-video avatars that",
    },
  ];

  // FAQ List
  const faqs = [
    {
      q: "Do you only design in Figma or Adobe?",
      a: "We’re tool-agnostic—but love tools that scale smartly.",
    },
    {
      q: "Can you help redesign just parts of our site/app?",
      a: "Absolutely. We’re great at plug-and-play collaborations.",
    },
    {
      q: "What’s included in the design audit",
      a: " Heuristic review, design system check, and some AI-generated improvements.",
    },
    {
      q: "Do you offer development support too?",
      a: " Yep. Dev handoff or full-stack builds—we’ve got you.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="pt-24">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Driven Designs That Click, Swipe, and Wow!"
          highlight="3x faster"
          subtext="Crafting user experiences so intuitive, they'll think you're reading their minds. "
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png"
        />

        {/* Statistics Section */}
       <EditableStatSection
  subtitle="WHY PARTNER WITH GROWTH NATIVES?"
  title="You’re in good company—alongside brands who've ditched the 'meh' for 'marvelous' with our AI-infused designs.  "
  stats={[
    { label: "Projects Transformed   ", value: "250+" },
    { label: "Happy Clients  ", value: "100+" },
    { label: "Design Aficionados On Board  ", value: "25+" },
          ]}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title=" Design Services with a Dash of AI Magic "
          subtitle=" From napkin sketches to pixel-perfect realities, we blend creativity with AI to make designs that dazzle. "
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
                 We design across tools and stacks—and bring the AI magic wherever you are. 
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
        heading=" Design That Pops Off—Backed by Brands Who Get It "
        subtext=" From bold startups to global names—we turn ideas into identity, and identity into  "
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
          title="Real Stories, Real Design Wins  "
          description=" Our design doesn’t sit pretty. It performs. "
        />

        {/* FAQs */}
        <FaqSection title="FAQ's" faqs={faqs} />

        {/* Call to Action */}
        <ContactCta
          heading="Ready for Design That’s Got Brains and Beauty?"
          subtext="Let’s combine some creative energy with AI efficiency and build something scroll-worthy. "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}