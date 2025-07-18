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
    label: "Predictive Lead Nurturing & Scoring",
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
    heading: "Automated Workflows That Think for You",
    description: "Trigger actions based on real-time behavior, not guesswork. These campaigns evolve as your customer journeys evolve.",
    items: [
      { icon: Zap, title: "Built by bots, powered by brainwaves" },
      { icon: Zap, title: "Real-time triggers that feel like telepathy " },
      { icon: Zap, title: "Runs while you sleep, scales while you snack " },
    ],
  },
  {
    id: "analytics",
    heading: "Lead Intelligence That Reads the Room",
    description: "Score smarter, not harder. Our AI identifies intent and helps you guide leads from maybe to yes, fast.",
    items: [
      { icon: BarChart2, title: "AI that knows who’s warm, hot, or just browsing " },
      { icon: BarChart2, title: "Serve the right message at the right micro-moment " },
      { icon: BarChart2, title: "From ghosting to closing with one smart nudge " },
    ],
  },
  {
    id: "integration",
    heading: "Segmentation That Feels Personal",
    description: "From first click to final conversion, tailor every touchpoint with laser precision using AI-defined segments.",
    items: [
      { icon: Database, title: "Every segment, hyper-specific and AI-shaped" },
      { icon: Database, title: "Feels like a DM from your favorite brand" },
      { icon: Database, title: "Micro-audiences? Macro-results." },
    ],
  },
  {
    id: "security",
    heading: "Optimization That’s Always On",
    description: "From real-time reports to future-looking forecasts—our AI helps you pivot campaigns before they need fixing.",
    items: [
      { icon: ShieldCheck, title: "Dashboards that don’t just report but recommend " },
      { icon: ShieldCheck, title: "Predictive insights for when to push, pause, or pivot " },
      { icon: ShieldCheck, title: "AI sees the drop-off before you feel it " },
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
      q: "What’s included in the free audit?",
      a: "A full breakdown of your workflows + Some AI-powered quick wins we promise you’re not using yet.",
    },
    {
      q: " Do I need a specific platform to work with you? ",
      a: " Nope. We’re platform agnostic. We speak fluent HubSpot, Marketo, Salesforce, and even That One Custom Tool™.",
    },
    {
      q: "Can you fix what I’ve already built?",
      a: "Yes. We’ll tidy up your flows and inject them with strategy (and AI sauce). ",
    },
    {
      q: "How fast can we start?",
      a: "Real fast. Like, “we already scoped your tech stack while you were reading this” fast. ",
    },
  ];
  
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Powered Marketing Automation That Thinks Before You Blink"
          highlight="3x faster"
          subtext="Smart workflows, zero chaos. Because you’ve got better things to do than babysit campaigns. "
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png"
        />

        {/* Statistics Section */}
        <EditableStatSection
  subtitle="WHY PARTNER WITH GROWTH NATIVES?"
  title="You’re in good company—alongside brands that automate smart, scale faster, and never drop a lead. "
  stats={[
    { label: "Marketing Automation Customers ", value: "170+" },
    { label: "Certified Marketing Automation Experts ", value: "90+" },
    { label: "Avg. Boost in Conversions ", value: "40%" },
  ]}
/>

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="How We Build AI-Led Marketing That Doesn’t Miss "
          subtitle=" No spam blasts. No spaghetti flows. Just clever, connected campaigns that actually perform. "
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
        heading="AI-Led Results Trusted by Brands You Know"
        subtext=" Just a few of the brands who trust us to run the show. "
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