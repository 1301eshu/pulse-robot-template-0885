// src/pages/services/SalesforceEinstein.tsx

import { useState } from "react";

// Component Imports
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import FaqSection from "@/components/ui/component_5";
import ContactCta from "@/components/ui/component_6";
import HeroSection from "@/components/ui/component_7";
import LogoScroller from '@/components/ui/component_13';
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import EnterpriseCapabilities, { TabItem, FeatureContent } from "@/components/ui/component_2";
import DynamicSEO from "@/components/DynamicSEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import {
  Zap,
  BarChart2,
  Database,
  ShieldCheck,
  Clock,
  Heart,
} from "lucide-react";

export default function EinsteinAnalytics() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tabs: TabItem[] = [
    {
      id: "consulting",
      label: "Salesforce Einstein Analytics Consulting ",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Einstein/Salesforce%20Einstein%20Analytics%20Consulting.webp",
    },
    {
      id: "implementation",
      label: "Salesforce Einstein Implementation Services",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Einstein/Salesforce%20Einstein%20Implementation%20Consulting.webp",
    },
    {
      id: "enablement",
      label: "Einstein Feature Enablement",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Einstein/Einstein%20feature%20enablement.webp",
    },
    {
      id: "optimization",
      label: "Einstein Analytics Role Management ",
      icon: Clock,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Einstein/Einstein%20analytics%20role%20management.webp",
    },
    {
      id: "Development",
      label: "Einstein Analytics Optimization",
      icon: Clock,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Einstein/Einstein%20analytics%20Optimization.webp",
    },
  ];

  const features: FeatureContent[] = [
    {
      id: "consulting",
      description: "We decode your data goals and build an AI game plan that moves metrics.",
      items: [
        { icon: BarChart2, title: "Align AI to real revenue outcomes" },
        { icon: BarChart2, title: "Build KPIs that predict, not just measure" },
        { icon: BarChart2, title: "Spot trends, gaps, and growth signals early" },
      ],
    },
    {
      id: "implementation",
      description: "We make sure Einstein fits your stack, learns from your data, and launches without mess.",
      items: [
        { icon: Database, title: "Connect cleanly to your existing tech" },
        { icon: Database, title: "Train on your actual business data" },
        { icon: Database, title: "Launch fast, no disruption, no drama" },
      ],
    },
    {
      id: "enablement",
      description: "We unlock the good stuff—forecasting, scoring, bots—and train your team to use it like pros.",
      items: [
        { icon: Zap, title: "Prioritize leads that are ready to buy" },
        { icon: Zap, title: "Forecast pipeline with crystal ball clarity" },
        { icon: Zap, title: "Launch bots that solve before humans need to" },
      ],
    },
    {
      id: "optimization",
      description: "We customize AI insights by role—so your teams get what they need, when they need it.",
      items: [
        { icon: Clock, title: "Personalized views for sales, service, ops" },
        { icon: Clock, title: "Auto-delivered insights in plain English" },
        { icon: Clock, title: "Tools that simplify—not overwhelm—teams" },
      ],
    },
     {
      id: "Development",
       description: "We fine-tune your Einstein setup as you grow—because static models don’t win markets.",
      items: [
        { icon: Clock, title: "Recalibrate AI models with fresh data" },
        { icon: Clock, title: "Benchmark performance vs. your industry" },
        { icon: Clock, title: "Scale smart with proactive refinements" },
      ],
    },
  ];

  const recentResources: ResourceItem[] = [
    {
      title: "Agentic AI: The Silent Force Reshaping Business Intelligence",
      subtitle: "Forget dashboards. Let the data talk back. Discover the rise of Einstein AI + Agentic tools.",
      author: "Sneha Kumari",
      date: "July 25, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "einstein-agentic-ai"
    },
    {
      title: "5 Einstein Features You’re Not Using (But Should)",
      subtitle: "If you're only using forecasting, you're leaving ROI on the table. Here's what to unlock next.",
      author: "Mehakpreet Kaur",
      date: "July 22, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "einstein-feature-checklist"
    },
    {
      title: "Smarter Teams with Role-Based Einstein Insights",
      subtitle: "Sales wants pipeline. Ops needs accuracy. Everyone wins when Einstein adapts by role.",
      author: "Mehakpreet Kaur",
      date: "July 18, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "einstein-role-insights"
    },
  ];

  const faqs = [
    {
      q: "How quickly will we see ROI from Einstein Analytics?",
      a: "Most teams start spotting “Whoa, we didn’t know that” insights in 30 days—and drive measurable ROI in under 90.",
    },
    {
      q: "Do we need data scientists to use Einstein effectively?",
      a: "Not at all. We build intuitive interfaces that anyone can use while the AI does heavy lifting.",
    },
    {
      q: "Can Einstein integrate with our existing tech stack?",
      a: "Absolutely. We connect Einstein to your entire digital ecosystem for truly unified intelligence.",
    },
    {
      q: "What's included in your Einstein Analytics audit?",
      a: "A full breakdown of your data maturity, 3 missed AI wins, and a plan to get more ROI out of what you already have.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="salesforceEinstein" />
      <Header />
      <SmartBreadcrumb />
      <main className="pt-0">
        <HeroSection
          heading="Einstein AI That Predicts, Personalizes, and Powers Growth"
          subtext="Predict smarter. Act faster. Make every decision data-backed with Salesforce Einstein AI."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Hero_Section-L2-Banners/Salesforce%20Einstein.webp"
        />

        <EditableStatSection
          title="You're in good company—with brands predicting smarter with Einstein AI"
          stats={[
            { label: "Salesforce Einstein projects launched across industries", value: "70+" },
            { label: "Salesforce Implementations since 2020", value: "100+" },
            { label: "Certified pros in AI-powered analytics and automation ", value: "60+" },
          ]}
        />

        <EnterpriseCapabilities
          title="Einstein AI That Thinks Like Your Best Analyst"
          subtitle="We unlock Einstein AI’s full potential, so your data works harder than your team."
          tabs={tabs}
          features={features}
        />

        <RecentResourcesSection
          heading="See How Einstein AI Transforms Business Outcomes"
          body="A few real wins we've helped brands achieve with Einstein AI."
           subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

        <LogoScroller
          heading="Brands That Trust Our Einstein AI Expertise"
          subtext="From lean teams to enterprise squads—we help them all predict smarter."
        />

        <Testimonials
          title="Real Stories, Real AI Growth"
          description=" From clunky reports to revenue-driving insights—see what happens when we bring Einstein AI in"
        />

        <FaqSection title="FAQs" faqs={faqs} />

         <RecentResourcesSection
          heading="Let's Make Your Data Predict the Future"
          body="Einstein AI, customized to answer your most valuable business questions "
           subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

        <ContactCta
          heading="Let's Make Your Data Predict the Future"
          subtext="Einstein AI, customized to answer your most valuable business questions"
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
