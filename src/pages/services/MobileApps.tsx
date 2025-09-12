// src/pages/services/MarketingAutomation.tsx

import { useState } from "react";

// Component Imports
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import FaqSection from "@/components/ui/component_5";
import ContactCta from "@/components/ui/component_6";
import HeroSection from "@/components/ui/component_7";
import LogoScroller from "@/components/ui/component_13";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import EnterpriseCapabilities, { TabItem, FeatureContent } from "@/components/ui/component_2";
import DynamicSEO from "@/components/DynamicSEO";
// Icons
import { Zap, BarChart2, Database, ShieldCheck, Heart } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import ExploreMoreBlock from "@/components/exploremore";

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items
  const tabs: TabItem[] = [
    {
      id: "ui",
      label: "UI Design",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Mobile%20Apps/UI%20Design.webp",
    //  ctaText: "Audit Me!",
    //  ctaLink: "/lead-gen-form"
    },
    {
      id: "ux",
      label: "UX Design",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Mobile%20Apps/UX%20Design.webp",
   //   ctaText: "Audit Me!",
   //   ctaLink: "/lead-gen-form"
    },
    {
      id: "prototype",
      label: "Interactive Prototyping",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Mobile%20Apps/Interactive%20Prototyping.webp",
   //   ctaText: "Audit Me!",
   //   ctaLink: "/lead-gen-form"
    },
    {
      id: "crossplatform",
      label: "Cross-Platform Design",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Mobile%20Apps/Cross%20Platform%20design.webp",
   //   ctaText: "Audit Me!",
   //   ctaLink: "/lead-gen-form"
    },
  ];

  // Tab Content (Features Under Each Tab)
  const features: FeatureContent[] = [
    {
      id: "ui",
      description: "User-first layouts that pop, guide, and never confuse-even on the tiniest screen.",
      items: [
        { icon: Zap, title: "Design flows that feel native to iOS, Android, and every thumb" },
        { icon: Zap, title: "Build visual consistency for brand loyalty and screen-to-screen trust" },
        { icon: Zap, title: "Add micro-interactions that keep users engaged without overloading" },
      ],
    },
    {
      id: "ux",
     
      description: "We don’t guess. We design from intent-crafting flows your users actually want to follow, from onboarding to checkout. ",
      items: [
        { icon: BarChart2, title: "Built around real user personas, not assumptions " },
        { icon: BarChart2, title: "Validated through behavior, not hunches " },
        { icon: BarChart2, title: "Frictionless by design, delightful by default" },
      ],
    },
    {
      id: "prototype",
      description: "No more “hope this works”-we test, tweak, and validate before the dev handoff.",
      items: [
        { icon: Database, title: "Live prototypes that feel like the real thing" },
        { icon: Database, title: "Spot UI/UX gaps before users do" },
        { icon: Database, title: "Collect feedback early to speed up final builds" },
      ],
    },
    {
      id: "crossplatform",
      description: "One design system. Every device. No compromises.",
      items: [
        { icon: ShieldCheck, title: "Create universal flows that flex across Android, iOS, tablets, and more" },
        { icon: ShieldCheck, title: "Maximize reusability with platform-aware layouts" },
        { icon: ShieldCheck, title: "Keep UX tight without losing native functionality" },
      ],
    },
  ];

  // Stats Section (Trust Markers)
  const stats = [
//    { value: "26+", label: "Combined years of design prowess and counting" },
    { value: "10+", label: "Game-changing apps launched" },
    { value: "8+", label: "Mobile design wizards on deck" },
    { value: "3x", label: "Boost in retention for clients using our AI-backed UX enhancements" },
  ];

  // FAQs
  const faqs = [
    {
      q: "How do you ensure my app stands out from competitors?",
      a: "We start with deep market + audience research. Every design decision is shaped by user behavior, not gut instinct.",
    },
    {
      q: "How do you use user personas in app design?",
      a: "We create detailed personas based on real data, then design every screen to match how those users actually think and act.",
    },
    {
      q: "What’s the role of prototyping in your process?",
      a: "It’s everything. We use clickable prototypes to test flow, catch gaps, and validate ideas-before a single line of code.",
    },
    {
      q: "How do you ensure a consistent experience across platforms?",
      a: "We design cross-platform systems that look and feel native on every OS-without duplicating effort or UX.",
    },
    {
      q: "How do you incorporate AI into mobile app design?",
      a: "AI helps us predict user needs and create personalized experiences. We use AI for everything from layout optimization to user behavior analysis, making your app smarter from day one.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="mobileApps" />
      <Header />
      <SmartBreadcrumb />
      <main className="pt-0">
        {/* HERO Section */}
        <HeroSection
          heading="Mobile App Design That Thinks Fast, Taps Smooth-All with AI in the Loop"
          subtext="Pixel-perfect designs that adapt, engage, and convert while users swipe."
          bgImage=""
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Hero-Section-Banner_L2/Mobile%20Apps.webp"
          buttonText="Audit Me!"
          buttonLink="/contact-us/"
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="You’re in good company-with brands whose apps now look sharp, feel intuitive, and convert faster."
          stats={stats.map(s => ({ label: s.label, value: s.value }))}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="What We Do with Mobile App Design"
          subtitle="We prototype, personalize, and power your app with AI-first thinking for every screen."
          tabs={tabs}
          features={features}
        />

        {/* Case Study Section */}
        <RecentResourcesSection
          heading="See What AI-Backed Mobile UX Really Looks Like"
          body="A few real wins we've helped brands achieve with killer app design."
          subTabs={[]}
          resourcePostType="case-studies"
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Brands That Trust Our Mobile App Design Game"
          subtext="From first launch to millions of downloads-we design apps that grow with your goals."
        />

        {/* Client Testimonials Section */}
        <Testimonials
          title="Real Users. Real UX Wins."
          description="We helped these brands design apps that spark love at first swipe."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        <ExploreMoreBlock
          heading=" More From Our Design Arsenal "
          body="Our latest takes on mobile design, AI-led UX, and what keeps users coming back. "
          perPage={6}
          firstN={4}
          contentType="blogs"
          resourceType="285"
        />
        {/* CTA Section */}
        <ContactCta
          heading="Let’s Build an App That Feels as Smart as It Looks"
          subtext="AI-backed design. Pixel-perfect UI. User journeys that just flow."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
