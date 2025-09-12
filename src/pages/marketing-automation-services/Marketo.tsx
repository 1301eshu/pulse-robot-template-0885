import { useState } from "react";

import EditableStatSection from "@/components/Statistics";
import Component1 from "@/components/ui/component_1";
import Testimonials from "@/components/ui/component_4";
import FaqSection from "@/components/ui/component_5";
import ContactCta from "@/components/ui/component_6";
import HeroSection from "@/components/ui/component_7";
import LogoScroller from '@/components/ui/component_13';
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import DynamicSEO from "@/components/DynamicSEO";
import EnterpriseCapabilities, { TabItem, FeatureContent } from "@/components/ui/component_2";
import { Zap, BarChart2, Database, ShieldCheck, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import ExploreMoreBlock from "@/components/exploremore";

export default function Marketo() {
  const tabs: TabItem[] = [
    {
      id: "audit",
      label: "Marketo Audit",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Marketo/Marketo%20Audit.webp",
    },
    {
      id: "consulting",
      label: "Marketo Consulting",
      icon: BarChart2,
      image: "https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/marketing%20automation%20l1/Marketo/Marketo%20Consulting.webp",
      ctaText: "Read More",
      ctaLink: "/marketing-automation-services/marketo/consulting"
    },
    {
      id: "implementation",
      label: "Marketo Implementation",
      icon: Heart,
      image: "https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/marketo%20L2/Marketo%20Implementation.webp",
    },
    {
      id: "operations",
      label: "Marketo Operations",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Marketo/Marketo%20Operations.webp",
      ctaText: "Read More",
      ctaLink: "/marketing-automation-services/marketo/operations"
    },
    {
      id: "integration",
      label: "Marketo Custom Integrations",
      icon: Database,
      image: "https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/marketo%20L2/Marketo%20Custom%20Integrations.webp",
      ctaText: "Read More",
      ctaLink: "/marketing-automation-services/marketo/integration"
    },
    {
      id: "training",
      label: "Marketo Training",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Marketo/Marketo%20training.webp",
      ctaText: "Read More",
      ctaLink: "/marketing-automation-services/marketo/training"
    },
    {
      id: "managed",
      label: "Marketo Managed Services",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Marketo/Marketo%20managed%20services.webp",
    },
    {
      id: "assets",
      label: "Marketo Asset Development",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Marketo/Marketo%20asset%20development.webp",
      ctaText: "Read More",
      ctaLink: "/marketing-automation-services/marketo/assest-development"
    },
  ];

  const features: FeatureContent[] = [
    {
      id: "audit",
      description: "If your flows are messy, your leads cold, and your metrics meh, it’s time to audit, automate, and aim better.",
      items: [
        { icon: Zap, title: "Find gaps and fix your campaign flow." },
        { icon: Zap, title: "Spot where AI can give your automations some muscle." },
        { icon: Zap, title: "Make strategies that hit targets, every time." },
      ],
    },
    {
      id: "consulting",
      description: "Whether you're starting fresh or untangling a messy setup, we help you build smarter, AI-led, cleaner campaigns.",
      items: [
        { icon: BarChart2, title: "Spot the leaks, fix the flows, clean up that lead soup" },
        { icon: BarChart2, title: "Turn spaghetti logic into sleek, scalable automation" },
        { icon: BarChart2, title: "Map real journeys (not just random clicks) to conversion gold" },
      ],
    },
    {
      id: "implementation",
      description: "We make Marketo hum with your goals, data, and workflows from day one.",
      items: [
        { icon: Heart, title: "Set up like a pro. No Frankenstein instances here" },
        { icon: Heart, title: "Plug in lead flows, scoring, and triggers that do stuff" },
        { icon: Heart, title: "Go from zero to “whoa” with fast, future-proof builds" },
      ],
    },
    {
      id: "operations",
      description: "We keep your Marketo instance tight, tidy, and always ready to launch the next big thing.",
      items: [
        { icon: ShieldCheck, title: "Run campaigns like clockwork without the manual madness" },
        { icon: ShieldCheck, title: "Keep your data and flows clean and your ops unstoppable" },
        { icon: ShieldCheck, title: "Reporting, QA, cloning, scaling-we’re the backstage crew making it all sing" },
      ],
    },
    {
      id: "integration",
      description: "We build custom integrations that plug into your stack seamlessly, so Marketo fits right into your world and works like it was always meant to.",
      items: [
        { icon: Database, title: "AI-backed integrations that make Marketo feel at home." },
        { icon: Database, title: "Connect your tools to Marketo-effortlessly." },
        { icon: Database, title: "Custom solutions that just work, without drama." },
      ],
    },
    {
      id: "training",
      description: "From “what does this button do?” to full-blown power user, we’ve got you.",
      items: [
        { icon: Heart, title: "Hands-on sessions, no boring slideshows" },
        { icon: Heart, title: "Train your team to build, launch, and optimize with confidence" },
        { icon: Heart, title: "Real use cases, real workflows, real results (no theory zone)" },
      ],
    },
    {
      id: "managed",
      description: "We handle the heavy lifting so you can focus on big-picture marketing moves.",
      items: [
        { icon: ShieldCheck, title: "Campaigns built, QA’d, launched, without you lifting a finger" },
        { icon: ShieldCheck, title: "Audience segments, reports, and assets? Already done" },
        { icon: ShieldCheck, title: "Agile support that scales with your pipeline, not your to-do list" },
      ],
    },
    {
      id: "assets",
      description: "Emails, landing pages, forms, we build them fast, flawless, and on-brand.",
      items: [
        { icon: Zap, title: "Pixel-perfect assets that convert" },
        { icon: Zap, title: "Modular templates your team can clone in seconds" },
        { icon: Zap, title: "Built for speed, tested for every screen, and totally on-brand" },
      ],
    },
  ];

  const stats = [
    { label: "Marketo clients", value: "100+" },
    { label: "Certified Marketo gurus", value: "70+" },
    { label: "Higher campaign efficiency", value: "30%" },
  ];

  const faqs = [
    {
      q: "Do I need a specific plan or subscription to get started with your services?",
      a: "Nope! We work with any Marketo plan-whether you're keeping it basic or going all in with the advanced stuff.",
    },
    {
      q: "Do I need to change my current Marketo setup to work with your team?",
      a: "Nah, no need for a complete overhaul. We’ll work with what you’ve got and just level it up.",
    },
    {
      q: "What’s the first step in the Marketo audit process?",
      a: "We kick things off with a deep dive, spotting quick wins and areas to optimize for some instant impact.",
    },
    {
      q: "Can we still use Marketo after the audit or do we need to make big changes?",
      a: "Yes, you can keep using Marketo as-is! We’ll just make tweaks and fine-tune your setup for peak performance.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="serviceMarketo" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        <HeroSection
          heading="Marketo, Leveled Up with Quiet AI Smarts."
          subtext="Faster setups, sharper targeting & campaigns that know what’s next."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Hero%20Section_L1_Banner/marketo.webp"
       
        />

        <EditableStatSection
          title="Brands that move fast trust us to boost Marketo."
          stats={stats}
        />

        <EnterpriseCapabilities
          title="How We Level Up Marketo"
          subtitle="We dial in your Marketo with AI so that your campaigns crush targets & drive better results."
          tabs={tabs}
          features={features}
        />

        <RecentResourcesSection
          heading=" See How Marketo Does Its Thing "
          body=" Some brands we helped hit big with Marketo. "
          subTabs={[]}
          resourcePostType="case-studies"
        />

        <LogoScroller
          heading="Brands That Count on Our Marketo Mojo"
          subtext="Companies across the board trust us to make Marketo click."
        />

        <Testimonials
          title="Brands That Let Us In"
          description="And walked out with smarter flows, sharper strategy & the right tech edge."
        />

        <FaqSection title="FAQs" faqs={faqs} />

      {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading="More From Our Content Repertoire "
  body=" Max out your Marketo skills with our blog posts, guides, and AI tips. "
  perPage={6}
  firstN={4}
  contentType="blogs"
  resourceType="40"
/>

        <ContactCta
          heading="Let's Boost Your Marketo IQ"
          subtext="Get more bang for your buck with Marketo’s smart tech."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
// ...existing code from /src/pages/services/Marketo.tsx...

// (Content copied from the original file, see previous step for details)
