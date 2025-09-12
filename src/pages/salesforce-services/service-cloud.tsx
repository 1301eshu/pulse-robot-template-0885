// src/pages/services/ServiceCloud.tsx

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
  Heart,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

export default function ServiceCloud() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items (Zigzag/Services)
  const tabs: TabItem[] = [
    {
      id: "consulting",
      label: "Consulting & Implementation",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Service%20Cloud/Consulting%20&%20Implementation.webp",
    //  ctaText: "Get a Demo",
     // ctaLink: "/l3-template"
    },
    {
      id: "customization",
      label: "Customization",
      icon: Heart,
      image: "https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/service%20cloud/Customization.webp",
    //  ctaText: "Get a Demo",
    //  ctaLink: "/l3-template"
    },
    {
      id: "integration",
      label: "Integration",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Service%20Cloud/Integration.webp",
   //   ctaText: "Get a Demo",
   //   ctaLink: "/l3-template"
    },
    {
      id: "analytics",
      label: "Analytics & Reporting",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Service%20Cloud/Analytics%20&%20Reporting.webp",
   //   ctaText: "Get a Demo",
   //   ctaLink: "/l3-template"
    },
    {
      id: "audit",
      label: "Audit & Optimization",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Service%20Cloud/Audit%20Optimization.webp",
   //   ctaText: "Get a Demo",
    //  ctaLink: "/l3-template"
    },
  ];

  // Features (Zigzag content)
  const features: FeatureContent[] = [
    {
      id: "consulting",
      description: "Expert-led setup with AI-powered workflows that resolve faster and scale smarter.",
      items: [
        { icon: Zap, title: "AI-powered strategies to resolve tickets faster" },
        { icon: Zap, title: "Smart workflows built for scale" },
        { icon: Zap, title: "Cloud-first setup for service agility" },
      ],
    },
    {
      id: "customization",
      description: "We tailor customer journeys and data models for secure, scalable service operations.",
      items: [
        { icon: Heart, title: "Personalized support journeys using AI" },
        { icon: Heart, title: "Secure, scalable cloud data structure" },
        { icon: Heart, title: "Continuous platform optimization to match changing customer expectations" },
      ],
    },
    {
      id: "integration",
      description: "Built for speed and scale-real-time sync and routing across your Salesforce stack.",
      items: [
        { icon: Database, title: "Real-time sync across platforms and tools" },
        { icon: Database, title: "Automated routing to boost response times" },
        { icon: Database, title: "Seamless connections with your entire Salesforce ecosystem" },
      ],
    },
    {
      id: "analytics",
      description: "Dashboards built to drive real-time KPIs, cross-channel insights, and AI-powered forecasting.",
      items: [
        { icon: BarChart2, title: "Track service KPIs in real-time" },
        { icon: BarChart2, title: "Understand trends across every touchpoint" },
        { icon: BarChart2, title: "Predict needs with AI-powered insights" },
      ],
    },
    {
      id: "audit",
      description: "We benchmark your setup with audits and deliver clear steps to improve.",
      items: [
        { icon: ShieldCheck, title: "Identify inefficiencies with AI-led audits" },
        { icon: ShieldCheck, title: "Benchmark setup against best practices" },
        { icon: ShieldCheck, title: "Actionable steps for service excellence" },
      ],
    },
  ];

  // Trust Markers (Statistics)
  const stats = [
    { label: "Salesforce Service Cloud setups driving faster support", value: "100+" },
    { label: "Years of combined Salesforce experience (yep, we counted)", value: "200+" },
    { label: "Certified experts in AI-powered case management", value: "60+" },
  ];

  // Recent Resources Section

  // FAQ List
  const faqs = [
    {
      q: "Can Service Cloud improve both agent performance and customer experience?",
      a: "Yes. AI-assisted tools boost productivity while helping agents personalize every interaction-no more copy-paste replies.",
    },
    {
      q: "What’s included in your Salesforce Service Cloud audit?",
      a: "We review workflows, routing, agent tools, and highlight AI ideas that can reduce response times and boost CX instantly.",
    },
    {
      q: "Can you connect Salesforce Service Cloud to my CRM or ERP?",
      a: "Absolutely. We break silos and build one smart service ecosystem.",
    },
    {
      q: "How long does implementation take?",
      a: "Most teams go live in 4–6 weeks.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="servicesCloud" />
      
      <Header />
      <SmartBreadcrumb />
      <main className="pt-0">

        {/* HERO Section */}
        <HeroSection
          heading="AI-Powered Salesforce Service Cloud That Solves Customer Issues Faster and Smarter"
          subtext="Build support systems that think like your best agent-and improve with every interaction."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Salesfoce%20Service%20L2%20Banner%20/Service%20Cloud.webp"
       
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="AI-driven support, scaled to build loyalty, not just close tickets."
          stats={stats}
        />

        {/* What We Do Section */}
        <EnterpriseCapabilities
          title="AI Support That Thinks Like Your Best Agent-Only Faster"
          subtitle="We tune, train, and tailor your Salesforce Service Cloud with AI smarts for real results."
          tabs={tabs}
          features={features}
        />

        {/* More Resources Section */}
        <RecentResourcesSection
          heading=" See What Smart Salesforce Service Cloud Looks Like in Action"
          body="A few real wins we've helped brands achieve with Salesforce Service Cloud.  "
          subTabs={[]}
          resourcePostType="case-studies"
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Leading Brands That Trust Our Salesforce Service Cloud Solutions"
          subtext="Companies leveraging our Salesforce Service Cloud expertise to deliver exceptional customer support"
          
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real Impact"
          description="Hear how we’ve helped teams deliver 5-star support with Salesforce Service Cloud"
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading="More From Our Content Repertoire Section "
  body=" Read our latest tips, strategies, and AI insights for better customer support  "
  perPage={6}
  firstN={4}
  contentType="blogs"
  resourceType="242"
/>

        {/* Call to Action */}
        <ContactCta
          heading="Transform Your Customer Support With AI-Powered Salesforce Service Cloud"
          subtext="Let’s map your Service Cloud transformation-with automation, insights, and AI built in."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
