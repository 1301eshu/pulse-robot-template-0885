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
import ExploreMoreBlock from "@/components/exploremore";

import EnterpriseCapabilities, {
  TabItem,
  FeatureContent,
} from "@/components/ui/component_2";

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

  // Tab Items (What We Do w/ Commerce Cloud)
  const tabs: TabItem[] = [
    {
      id: "visual",
      label: "Salesforce Commerce Cloud Visual Design",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Commerce%20Cloud/Salesforce%20Commerce%20Cloud%20Visual%20Design.webp",
      ctaText: "",
      ctaLink: "",
    },
    {
      id: "omni",
      label: "Omni-Channel Strategy",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Commerce%20Cloud/omni%20channel%20stratedgy.webp",
      ctaText: "",
      ctaLink: "",
    },
    {
      id: "site",
      label: "Site Management & Optimization",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Commerce%20Cloud/site%20management%20&%20Optimization.webp",
      ctaText: "",
      ctaLink: "",
    },
    {
      id: "integration",
      label: "Integration",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Commerce%20Cloud/Integration.webp",
      ctaText: "",
      ctaLink: "",
    },
  ];

  // Features under each tab
  const features: FeatureContent[] = [
    {
      id: "visual",
      description: "We design AI-enhanced storefronts that delight, convert, and respond to real-time shoppers' behavior.",
      items: [
        { icon: Zap, title: "Interfaces personalized with AI" },
        { icon: Zap, title: "Layouts that drive conversions fast" },
        { icon: Zap, title: "Responsive UX for every device" },
      ],
    },
    {
      id: "omni",
      description: "Deliver consistent, data-driven commerce across devices, stores, and touchpoints-powered by real-time AI insights.",
      items: [
        { icon: BarChart2, title: "Unified shopping across web, mobile, and store" },
        { icon: BarChart2, title: "Smart POS integration with AI" },
        { icon: BarChart2, title: "Brand consistency across channels" },
      ],
    },
    {
      id: "site",
      description: "Keep your storefront fast, reliable, and conversion-ready with proactive performance tuning and backend intelligence.",
      items: [
        { icon: Database, title: "AI-monitored performance insights" },
        { icon: Database, title: "Easy-to-navigate product structures" },
        { icon: Database, title: "Proactive bug detection and quick resolution workflows" },
      ],
    },
    {
      id: "integration",
      description: "We connect systems like PIMs and ERPs into one unified engine that keeps your store ahead.",
      items: [
        { icon: ShieldCheck, title: "Fast, scalable storefront setup" },
        { icon: ShieldCheck, title: "Plug-and-play ERP/PIM integrations" },
        { icon: ShieldCheck, title: "Smarter warehousing, faster delivery" },
      ],
    },
  ];

  // Trust Markers/Statistics Section
  const stats = [
    { label: "Salesforce Commerce Cloud clients served across industries", value: "70+" },
    { label: "Years of combined Salesforce & eCommerce expertise", value: "100+" },
    { label: "Salesforce-certified experts on deck", value: "60+" },
  ];

  // Case Study Tabs (for the carousel)
  const caseStudyTabs: TabItem[] = [
    { id: "cs1", label: "Case Study 1", icon: Zap, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/1" },
    { id: "cs2", label: "Case Study 2", icon: BarChart2, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/2" },
    { id: "cs3", label: "Case Study 3", icon: Database, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/3" },
    { id: "cs4", label: "Case Study 4", icon: ShieldCheck, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/4" },
  ];

  // FAQs Section
  const faqs = [
    {
      q: "How quickly can you get our Salesforce Commerce Cloud store up and running?",
      a: "Most implementations go live in 8-12 weeks, with AI features rolled out strategically for immediate ROI.",
    },
    {
      q: "Can your AI solutions integrate with our existing product catalog?",
      a: "Absolutely! We connect seamlessly with any PIM, ERP, or inventory system you already have.",
    },
    {
      q: "What makes your Salesforce Commerce Cloud approach different?",
      a: "We build AI into every touchpoint-not as an afterthought-so your store gets smarter with every visit.",
    },
    {
      q: "How do we measure success with your Salesforce Commerce Cloud solutions?",
      a: "Revenue, conversion rates, AOV, and customer lifetime value-metrics that matter to your bottom line.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="commerceCloud" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Powered Salesforce Commerce Cloud That Sells While You Sleep"
          subtext="Turn browsers into buyers with intelligent shopping experiences that learn, adapt, and convert"
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Hero_Section-L2-Banners/Commerce%20cloud.webp"
         
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="You’re in good company-with brands making every click count with Salesforce Commerce Cloud."
          stats={stats}
        />

        {/* What We Do/Features Section */}
        <EnterpriseCapabilities
          title="What We Do with Salesforce Commerce Cloud"
          subtitle="We build smart shopping experiences that turn browsers into buyers across every digital touchpoint"
          tabs={tabs}
          features={features}
        />

       {/* More Resources Section */}
        <RecentResourcesSection
          heading="See What Smart Salesforce Commerce Cloud Looks Like in Action"
          body="A few real wins we've helped brands achieve with Salesforce Commerce Cloud. "
          subTabs={[]} // no subtabs in this section
          resourcePostType="case-studies"
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Powering Intelligent Commerce for Growing Brands"
          subtext="From ambitious challengers to industry leaders, we power high-converting Salesforce Commerce Cloud experiences."
         
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Growth, Real Revenue Stories"
          description="Hear how our AI-powered Salesforce Commerce Cloud solutions drive results that matter"
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

       {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body="Get expert strategies and AI insights to accelerate digital commerce growth "
  perPage={6}
  firstN={4}
  contentType="blogs"
  resourceType="242"
/>

        {/* CTA Section */}
        <ContactCta
          heading="Let’s Build Your AI-First Commerce Cloud Experience."
          subtext="Let's build your AI-powered selling machine that works day & night"
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
