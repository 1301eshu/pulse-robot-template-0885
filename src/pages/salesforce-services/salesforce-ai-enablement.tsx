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

  // Tab Items (Zigzag/Services)
  const tabs: TabItem[] = [
    {
      id: "crm",
      label: "Salesforce CRM",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Salesforce%20AI/Salesforce%20CRM.webp",
    //  ctaText: "Get a Demo",
   //   ctaLink: "/l3-template"
    },
    {
      id: "servicecloud",
      label: "Salesforce Service Cloud",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Salesforce%20AI/Salesforce%20Service%20Cloud.webp",
    //  ctaText: "Get a Demo",
    //  ctaLink: "/l3-template"
    },
    {
      id: "salescloud",
      label: "Salesforce Sales Cloud",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Salesforce%20AI/Salesforce%20Sales%20Cloud.webp",
    //  ctaText: "Get a Demo",
    //  ctaLink: "/l3-template"
    },
    {
      id: "marketingcloud",
      label: "Salesforce Marketing Cloud",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Salesforce%20AI/Salesforce%20Marketing%20Cloud.webp",
    //  ctaText: "Get a Demo",
    //  ctaLink: "/l3-template"
    },
    {
      id: "commercecloud",
      label: "Salesforce Commerce Cloud",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Salesforce%20AI/Salesforce%20Commerce%20cloud.webp",
    //  ctaText: "Get a Demo",
    //  ctaLink: "/l3-template"
    },
    {
      id: "experiencecloud",
      label: "Salesforce Experience Cloud",
      icon: Clock,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Salesforce%20AI/Salesforce%20experience%20Cloud.webp",
   //   ctaText: "Get a Demo",
    //  ctaLink: "/l3-template"
    },
    {
      id: "analyticscloud",
      label: "Salesforce Analytics Cloud",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Salesforce%20AI/Revenue%20Cloud.webp",
    //  ctaText: "Get a Demo",
     // ctaLink: "/l3-template"
    },
    {
      id: "mulesoft",
      label: "MuleSoft & Tableau",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Salesforce%20AI/Site%20Optimization.webp",
    //  ctaText: "Get a Demo",
     // ctaLink: "/l3-template"
    },
    {
      id: "cpq",
      label: "Salesforce CPQ ",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Salesforce%20AI/Revenue%20Cloud.webp",
    //  ctaText: "Get a Demo",
    //  ctaLink: "/l3-template"
    },
  ];

  // Features (Zigzag/Services)
  const features: FeatureContent[] = [
    {
      id: "crm",
      description: "Your central command for every customer touchpoint-now powered by smarter signals, automation, and insight.",
      items: [
        { icon: Zap, title: "Predict who’s ready to buy, churn, or engage" },
        { icon: Zap, title: "Automate lead scores, follow-ups, and clean-ups" },
        { icon: Zap, title: "Get a 360° view that updates before you refresh" },
      ],
    },
    {
      id: "servicecloud",
      description: "Give your customer service team the AI advantage with faster, smarter resolutions with Agentforce at the helm.",
      items: [
        { icon: BarChart2, title: "Chatbots that get it right, 24/7" },
        { icon: BarChart2, title: "Auto-prioritize tickets by urgency and intent" },
        { icon: BarChart2, title: "Spot churn signals and act before it escalates" },
      ],
    },
    {
      id: "salescloud",
      description: "Close faster with sales tools that think ahead-AI helps reps focus on deals, not data.",
      items: [
        { icon: Database, title: "Auto-score leads based on conversion potential" },
        { icon: Database, title: "Surface next-best actions for every opportunity" },
        { icon: Database, title: "Forecast pipeline with real-time data signals" },
      ],
    },
    {
      id: "marketingcloud",
      description: "AI-powered campaigns that send the right message to the right person at the right time.",
      items: [
        { icon: Heart, title: "Personalize journeys based on real-time behavior" },
        { icon: Heart, title: "Auto-optimize send times and subject lines" },
        { icon: Heart, title: "Measure and double down on top-performing content" },
      ],
    },
    {
      id: "commercecloud",
      description: "Smarter stores, happier shoppers-AI curates, recommends, and accelerates conversions across your storefronts.",
      items: [
        { icon: ShieldCheck, title: "Deliver product recommendations that match intent" },
        { icon: ShieldCheck, title: "Automate promotions based on buying behavior" },
        { icon: ShieldCheck, title: "Reduce cart abandonment with predictive nudges" },
      ],
    },
    {
      id: "experiencecloud",
      description: "Create digital experiences that learn and evolve-AI helps you serve the right content at the right time.",
      items: [
        { icon: Clock, title: "Personalize portals using user history and signals" },
        { icon: Clock, title: "Recommend content and support docs automatically" },
        { icon: Clock, title: "Power self-service with smart search and suggestions" },
      ],
    },
    {
      id: "analyticscloud",
      description: "Turn scattered data into sharp, AI-powered decisions-faster.",
      items: [
        { icon: Zap, title: "Build dashboards that forecast, not just report" },
        { icon: Zap, title: "Use machine learning to find hidden patterns" },
        { icon: Zap, title: "Guide strategy with unified, real-time insights" },
      ],
    },
    {
      id: "mulesoft",
      description: "Connect, sync, and visualize like a pro-MuleSoft moves your data and Tableau shows what matters.",
      items: [
        { icon: Database, title: "MuleSoft connects all your systems to deliver AI-ready, unified data" },
        { icon: Database, title: "Tableau visualizes that data with live, decision-ready dashboards" },
        { icon: Database, title: "Together, they automate workflows across your entire tech stack" },
      ],
    },
    {
      id: "cpq",
      description: "Now bundled under Revenue Cloud, CPQ makes quoting, pricing, and revenue ops feel like cruise control.",
      items: [
        { icon: ShieldCheck, title: "Auto-generate quotes tailored to every deal" },
        { icon: ShieldCheck, title: "Suggest ideal bundles, pricing, and discounts" },
        { icon: ShieldCheck, title: "Speed up approvals, renewals, and upsells with AI" },
      ],
    },
  ];

  // Trust Markers (Statistics)
  const stats = [
    { label: "Happy Salesforce customers", value: "100+" },
    { label: "Years of combined Salesforce experience", value: "200+" },
    { label: "Certified Salesforce AI pros ready to deploy", value: "60+" },
  ];

  // Resources (RecentResourcesSection)


  // Case Study Tabs (Dummy for carousel)
  const caseStudyTabs: TabItem[] = [
    { id: "cs1", label: "Case Study 1", icon: Zap, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/1" },
    { id: "cs2", label: "Case Study 2", icon: BarChart2, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/2" },
    { id: "cs3", label: "Case Study 3", icon: Database, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/3" },
    { id: "cs4", label: "Case Study 4", icon: ShieldCheck, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/4" },
  ];

  // FAQs
  const faqs = [
    {
      q: "What’s included in the Salesforce AI Audit?",
      a: "We assess workflows, automation, CRM health, and identify untapped AI opportunities specific to your business needs.",
    },
    {
      q: "Can you integrate AI across clouds like Sales, Service, and Marketing?",
      a: "Absolutely. From Agentforce to Einstein, we connect the dots and drive real outcomes.",
    },
    {
      q: "How long does Salesforce AI implementation take?",
      a: "Most rollouts go live in 4–6 weeks. Fast, focused, and done right.",
    },
    {
      q: "Will you train our teams on Agentforce and AI tools?",
      a: "Yes. We upskill your team to confidently run AI-powered systems-day one and beyond.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="salesforceAI" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="Salesforce AI That Predicts, Learns, and Closes Without Breaking a Sweat"
          subtext="AI-powered Salesforce that works as hard as your team & never needs coffee."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Salesfoce%20Service%20L2%20Banner%20/Salesforce%20AI.webp"
         
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="You’re in good company with brands scaling on an AI-powered Salesforce ecosystem"
          stats={stats}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="What We Do with Salesforce AI"
          subtitle="We train your Salesforce to think, act, and close smarter, with Agentforce leading the charge."
          tabs={tabs}
          features={features}
        />

       {/* More Resources Section */}
        <RecentResourcesSection
          heading="See What Smart Salesforce AI Looks Like in Action"
          body=" Real growth stories we’ve made possible with Salesforce AI. "
          subTabs={[]} // No tabs for this blog section
          resourcePostType="case-studies"
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Trusted by Brands That Move Fast with Salesforce AI"
          subtext="From startups to global players-we help them scale smarter."
         
        />

        {/* Testimonials */}
        <Testimonials
          title="Salesforce + AI + Us = Results"
          description="Hear what our clients say about working with AI-backed Salesforce systems."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

       {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Keep your Salesforce IQ high with tips, takes, and trends worth reading. "
  perPage={6}
  firstN={4}
  contentType="blogs"
  resourceType="242"
/>

        {/* Call to Action */}
        <ContactCta
          heading="Let's Build Your AI-Powered Salesforce Engine"
          subtext="From lead to close, AI makes every step faster, sharper, and more human"
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
