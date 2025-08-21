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
import { Zap, BarChart2, Database, ShieldCheck, Clock, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import ExploreMoreBlock from "@/components/exploremore";

export default function MarketingCloud() {
  const tabs: TabItem[] = [
    {
      id: "audit",
      label: "Strategy & Planning  ",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Marketing%20Cloud/Audit%20.webp",
    },
    {
      id: "consulting",
      label: "Implementation & Setup ",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Marketing%20Cloud/Consulting.webp",
    },
    {
      id: "implementation",
      label: "Analytics & Reporting ",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Marketing%20Cloud/Implementation.webp",
    },
    {
      id: "migrations",
      label: "Integrations & Optimization  ",
      icon: ShieldCheck,
       image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Marketing%20Cloud/Implementation.webp",
    },
    
  ];

  const features: FeatureContent[] = [
    {
      id: "audit",
      description: "We build journey blueprints that adapt to customer behavior and scale with smart segmentation. ",
      items: [
        { icon: Zap, title: "Data-first journey mapping " },
        { icon: Zap, title: "Segments that grow with you " },
        { icon: Zap, title: "Smart triggers when engagement peaks " }
      ]
    },
    {
      id: "consulting",
      description: "Set up for success—clean builds, fast rollouts, and journeys that perform from day one. ",
      items: [
        { icon: BarChart2, title: "Define scope, goals, and data requirements upfront " },
        { icon: BarChart2, title: "Configure Salesforce Marketing Cloud tools: Email Studio, Journey Builder, Mobile Studio " },
        { icon: BarChart2, title: "Test, QA, and deploy an environment optimized for personalization and scale " }
      ]
    },
    {
      id: "implementation",
      description: "See everything. Predict anything. Optimize fast with real-time insights from Einstein AI. ",
      items: [
        { icon: Database, title: "Real-time dashboards, zero guesswork " },
        { icon: Database, title: "Performance views across every channel " },
        { icon: Database, title: "Predictive insights with Einstein A" }
      ]
    },
    {
      id: "migrations",
      description: "We turn siloed systems into synchronized journeys—powered by real-time data and automation. ",
      items: [
        { icon: ShieldCheck, title: "Connect Sales & Service Cloud to Salesforce Marketing Cloud for unified journeys " },
        { icon: ShieldCheck, title: "Trigger campaigns with real-time behavioral and CRM data " },
        { icon: ShieldCheck, title: "Optimize every touchpoint with performance insights and AI-led recommendations " }
      ]
    },
    
  ];

  const stats = [
    { label: "Salesforce Marketing Cloud implementations across industries", value: "100+" },
    { label: "Years of combined Salesforce experience", value: "200+" },
    { label: "Salesforce certified experts on deck ", value: "60+" },
  ];

  const faqs = [
    {
      q: "How quickly can we start seeing results with Salesforce Marketing Cloud?  ",
      a: "With our implementation approach, most clients see measurable improvements within the first 60 days."
    },
    {
      q: " Do we need to rebuild all our marketing assets?  ",
      a: "Nope! We integrate with your existing creative and enhance it with AI-powered targeting and delivery."
    },
    {
      q: "Can Salesforce Marketing Cloud connect with my CRM or data tools?",
      a: "Absolutely. We ensure full integration with Salesforce and third-party tools to build a unified view of every customer."
    },
    {
      q: "How does Einstein AI improve marketing? ",
      a: "It predicts customer behavior, personalizes content, optimizes send times, and continuously improves."
    }
  ];

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

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="salesforceMarketingCloud" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        <HeroSection
          heading=" AI-Powered Salesforce Marketing Cloud That Knows Your Customers Better Than Their Mothers"
          subtext=" Turn data into personalized journeys that convert, engage, and grow your business"
          bgImage=""
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Hero%20Section_L1_Banner/Salesforce%20Marketing%20Cloud.webp"
       
        />

        <EditableStatSection
          title="You're in good company—with brands scaling faster with Salesforce Marketing Cloud. "
          stats={stats}
        />

        <EnterpriseCapabilities
          title="AI-Powered Salesforce Marketing Cloud That Meets Your Marketing Ambition"
          subtitle="We tune, train, and tailor your Salesforce Marketing Cloud with AI smarts for real results."
          tabs={tabs}
          features={features}
        />

        <RecentResourcesSection
          heading="Salesforce Marketing Cloud in Action: Real Results, Real ROI "
          body=" How we helped brands unlock growth with data-driven marketing and AI. "
          subTabs={[]}
          resources={recentResources}
        />

        <LogoScroller
          heading="Powering AI-Driven Marketing for Companies Who Mean Business "
          subtext="From ambitious startups to enterprise giants, we make Salesforce Marketing Cloud work smarter "
        />

        <Testimonials
          title="Real Marketers, Real AI Transformations"
          description=" Hear how our team helped these marketing leaders deliver campaigns that work"
        />

        <FaqSection title="FAQs" faqs={faqs} />

       {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading="More From Our Content Repertoire Section "
  body=" Explore our latest guides, blog posts, and AI takes to sharpen your Salesforce Marketing Cloud game. "
  perPage={6}
  firstN={4}
  contentType="blogs"
/>

        <ContactCta
          heading="Let's Make Your Salesforce Marketing Cloud Work 10x Harder"
          subtext="From implementation to optimization, we'll power up your customer journeys with AI baked into every step."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}