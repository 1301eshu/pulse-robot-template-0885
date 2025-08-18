// ui-ux-design-agency.tsx
// This file aggregates all the requested service pages into a single UI/UX Design Agency page.

import { useState } from "react";
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
import EnterpriseCapabilities, { TabItem, FeatureContent } from "@/components/ui/component_2";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import { Zap, BarChart2, Database, ShieldCheck, Heart, FileText, Sparkles, Package, Wrench, Repeat } from "lucide-react";

export default function UIUXDesignAgency() {
  // You can combine or merge the tab/feature/resource/faq data from all the imported service files here.
  // For brevity, this example just renders a placeholder and a note to merge content as needed.

  // Tab Items
  const tabs: TabItem[] = [
    {
      id: "web",
      label: "Custom Web Design",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/UIUX/custom%20Web%20design.webp",
   //   ctaText: "Audit Me!",
   //   ctaLink: "/lead-gen-form",
    },
    {
      id: "ux",
      label: "UX & Responsive Design",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/UIUX/UX%20&%20Responsive%20Design.webp",
  //    ctaText: "Audit Me!",
  //    ctaLink: "/lead-gen-form",
    },
    {
      id: "ecom",
      label: "eCommerce Design",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/UIUX/eCommerce%20Design.webp",
    //  ctaText: "Audit Me!",
    //  ctaLink: "/lead-gen-form",
    },
    {
      id: "cms",
      label: "CMS Integration",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/UIUX/CMS%20Integration.webp",
   //   ctaText: "Audit Me!",
   //   ctaLink: "/lead-gen-form",
    },
    {
      id: "support",
      label: "Website Maintenance & Support",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/UIUX/Website%20Maintainance%20&%20Support.webp",
   //   ctaText: "Audit Me!",
   //   ctaLink: "/lead-gen-form",
    },
  ];

  // Features for each tab
  const features: FeatureContent[] = [
    {
      id: "web",
      description: "Designs built for clicks, not crickets.",
      items: [
        { icon: Zap, title: "Understand your goals, audience, and the vibe you’re going for" },
        { icon: Zap, title: "Craft pixel-perfect designs tailored to your brand" },
        { icon: Zap, title: "Design interfaces that engage, not just exist" },
      ],
    },
    {
      id: "ux",
      description: "From desktop to mobile—everything just works.",
      items: [
        { icon: BarChart2, title: "Mobile-first designs that actually feel mobile" },
        { icon: BarChart2, title: "Build flows that users don’t need to “figure out”" },
        { icon: BarChart2, title: "Usability testing baked in, not bolted on" },
      ],
    },
    {
      id: "ecom",
      description: "Carts, checkouts, and conversions—done right.",
      items: [
        { icon: Database, title: "Design that guides users straight to “Buy Now”" },
        { icon: Database, title: "Product layouts that make scrolling addictive" },
        { icon: Database, title: "Seamless UX from homepage to happy purchase" },
      ],
    },
    {
      id: "cms",
      description: "Update content like a boss—no dev required.",
      items: [
        { icon: ShieldCheck, title: "Plug into WordPress, Shopify, or your CMS of choice" },
        { icon: ShieldCheck, title: "Train your team to use the CMS with ease" },
        { icon: ShieldCheck, title: "Set up smart SEO structure while we’re at it" },
      ],
    },
    {
      id: "support",
      description: "Designs done? We’re still on it.",
      items: [
        { icon: Heart, title: "Fixes, updates, and proactive optimizations" },
        { icon: Heart, title: "Keep performance high and downtime low" },
        { icon: Heart, title: "Backups, patches, and peace of mind" },
      ],
    },
  ];

  // Stats Section
  const stats = [
    { value: "25+", label: "UX experts on deck" },
    { value: "60+", label: "UI/UX projects delivered and counting" },
    { value: "100+", label: "Happy customers worldwide" },
    { value: "40%", label: "Avg. lift in engagement on redesigned websites within 3 months" },
  ];

  // Case Study Tiles (as resources)
  const recentResources: ResourceItem[] = [
    {
      title: "Smart UI/UX in Action: Case Study 1",
      subtitle: "A real win we've helped brands achieve with killer website design.",
      author: "Case Study Author",
      date: "2025",
      readTime: "3 min read",
      image: "",
      slug: "case-study-1"
    },
    {
      title: "Smart UI/UX in Action: Case Study 2",
      subtitle: "Another example of how we create engaging, high-converting sites.",
      author: "Case Study Author",
      date: "2025",
      readTime: "3 min read",
      image: "",
      slug: "case-study-2"
    },
    {
      title: "Smart UI/UX in Action: Case Study 3",
      subtitle: "Yet another brand success story—by design.",
      author: "Case Study Author",
      date: "2025",
      readTime: "3 min read",
      image: "",
      slug: "case-study-3"
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "What makes custom website design better than using templates?",
      a: "Custom design lets us create a unique user interface tailored specifically to your business goals, audience needs, and branding—giving you that competitive edge that templates just can't deliver.",
    },
    {
      q: "How do you ensure a seamless mobile experience for websites?",
      a: "We use a mobile-first design approach, ensuring your website looks and functions perfectly on mobile devices and apps, and improving user engagement across all platforms.",
    },
    {
      q: "How do you integrate AI-driven personalization into designs?",
      a: "We leverage AI to create adaptive interfaces that learn user behavior, providing personalized content recommendations and dynamic design elements that evolve with user preferences.",
    },
    {
      q: "What's your design process from start to finish?",
      a: "We start with extensive research to determine user needs, then move to wireframing and prototyping. After getting feedback, we refine designs and create high-fidelity mockups for development.",
    },
    {
      q: "How long does the design process typically take?",
      a: "Most projects are completed in 3–4 weeks, but the timeline depends on complexity and scope—we keep you in the loop every step of the way.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="servicesUiUx" />
      <Header />
      <SmartBreadcrumb />
      <main className="pt-00">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Powered UI/UX Design That Thinks Before You Blink"
          subtext="Interfaces that click, scroll, and convert like they know what users want."
          bgImage=""
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Hero-Section-Banner_L2/UX.webp"
          buttonText="Audit Me!"
          buttonLink="/lead-gen-form"
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="You’re in good company—with brands that design faster, convert better, and scale smoother."
          stats={stats.map(s => ({ label: s.label, value: s.value }))}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="What We Do with UI/UX"
          subtitle="We design, test, and perfect your digital experience with AI smarts for real user love."
          tabs={tabs}
          features={features}
        />

        {/* Recent Resources / Case Studies Section */}
        <RecentResourcesSection
          heading="See What Smart UI/UX Looks Like in Action"
          body="A few real wins we've helped brands achieve with killer website design."
          subTabs={[]}
          resources={recentResources}
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Designed With & For These Brands"
          subtext="From startups to scaled up, we build UX they swear by."
        />

        {/* Testimonials */}
        <Testimonials
          title="Clients That Felt Our UI/UX Glow-Up"
          description="These stories are real—just like their skyrocketing engagement stats."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* More Resources */}
        <RecentResourcesSection
          heading="More from Our Content Repertoire"
          body="Design tips, AI-powered UI glow-ups, and hot takes on what users actually want."
          subTabs={[]}
          resources={recentResources}
        />

        {/* CTA Section */}
        <ContactCta
          heading="Let’s Build Your AI-Powered Website Experience"
          subtext="Smooth flows, sticky UX, and a vibe your users remember."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
