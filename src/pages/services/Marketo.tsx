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

import {
  Zap,
  BarChart2,
  Database,
  ShieldCheck,
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
      id: "audit",
      label: "Marketo Audit",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Marketo/Marketo%20Audit.webp",
  //     ctaText: "Get a Demo",
 //   ctaLink: "/l3-template"
    },
    {
      id: "consulting",
      label: "Marketo Consulting",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Marketo/Marketo%20Consulting.webp",
   ctaText: "Read More",
  ctaLink: "L3/marketo-consulting"
    },
    {
      id: "implementation",
      label: "Marketo Implementation",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Marketo/Marketo%20Implementation.webp",
   //    ctaText: "Get a Demo",
 //   ctaLink: "/l3-template"
    },
    {
      id: "operations",
      label: "Marketo Operations",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Marketo/Marketo%20Operations.webp",
       ctaText: "Read More",
    ctaLink: "L3/operations-marketo"
    },
    {
      id: "integration",
      label: "Marketo Custom Integrations",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Marketo/Marketo%20Custom%20Integrations.webp",
   ctaText: "Read More",
 ctaLink: "L3/marketo-integration"
    },
    {
      id: "training",
      label: "Marketo Training",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Marketo/Marketo%20training.webp",
   ctaText: "Read More",
 ctaLink: "L3/training-marketo"
    },
    {
      id: "managed",
      label: "Marketo Managed Services",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Marketo/Marketo%20managed%20services.webp",
   //    ctaText: "Get a Demo",
  //  ctaLink: "/l3-template"
    },
    {
      id: "assets",
      label: "Marketo Asset Development",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Marketo/Marketo%20asset%20development.webp",
     ctaText: "Read More",
 ctaLink: "L3/marketo-assest-development"
    },
  ];

  // Features
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
        { icon: ShieldCheck, title: "Reporting, QA, cloning, scaling—we’re the backstage crew making it all sing" },
      ],
    },
    {
      id: "integration",
      description: "We build custom integrations that plug into your stack seamlessly, so Marketo fits right into your world and works like it was always meant to.",
      items: [
        { icon: Database, title: "AI-backed integrations that make Marketo feel at home." },
        { icon: Database, title: "Connect your tools to Marketo—effortlessly." },
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

  // Trust Markers (Statistics)
  const stats = [
    { label: "Marketo clients", value: "100+" },
    { label: "Certified Marketo gurus", value: "70+" },
    { label: "Higher campaign efficiency", value: "30%" },
  ];

  // Resources (RecentResourcesSection)
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

  // Case Studies (just placeholders for your carousel/slider)
  const caseStudyTabs: TabItem[] = [
    { id: "cs1", label: "Case Study 1", icon: Zap, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/1" },
    { id: "cs2", label: "Case Study 2", icon: BarChart2, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/2" },
    { id: "cs3", label: "Case Study 3", icon: Database, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/3" },
    { id: "cs4", label: "Case Study 4", icon: ShieldCheck, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/4" },
  ];

  // FAQs
  const faqs = [
    {
      q: "Do I need a specific plan or subscription to get started with your services?",
      a: "Nope! We work with any Marketo plan—whether you're keeping it basic or going all in with the advanced stuff.",
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
      <DynamicSEO
        page="serviceMarketo"
      />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="Marketo, Leveled Up with Quiet AI Smarts."
          subtext="Faster setups, sharper targeting & campaigns that know what’s next."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Hero%20Section_L1_Banner/marketo.webp"
          buttonText="Audit Me!"
          buttonLink="/your-lead-gen-form-page"
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="Brands that move fast trust us to boost Marketo."
          stats={stats}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="How We Level Up Marketo"
          subtitle="We dial in your Marketo with AI so that your campaigns crush targets & drive better results."
          tabs={tabs}
          features={features}
        />

        {/* More Resources Section */}
        <RecentResourcesSection
          heading=" See How Marketo Does Its Thing "
          body=" Some brands we helped hit big with Marketo. "
          subTabs={[]}
          resources={recentResources}
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Brands That Count on Our Marketo Mojo"
          subtext="Companies across the board trust us to make Marketo click."
          
        />

        {/* Testimonials */}
        <Testimonials
          title="Brands That Let Us In"
          description="And walked out with smarter flows, sharper strategy & the right tech edge."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* More Resources Section */}
        <RecentResourcesSection
          heading="More From Our Content Repertoire"
          body="Max out your Marketo skills with our blog posts, guides, and AI tips."
          subTabs={[]}
          resources={recentResources}
        />

        {/* Call to Action */}
        <ContactCta
          heading="Let's Boost Your Marketo IQ"
          subtext="Get more bang for your buck with Marketo’s smart tech."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
