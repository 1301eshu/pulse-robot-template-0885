// Migrated from /services/AdvancedDataVisualization.tsx

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
import { Zap, BarChart2, Database, ShieldCheck, Clock, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import ExploreMoreBlock from "@/components/exploremore";

export default function AdvancedDataVisualization() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

 // Tab Items
 const tabs: TabItem[] = [
  {
    id: "marketing",
    label: "Tableau  ",
    icon: Zap,
    image: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Analytics%20as%20a%20Service/Advance%20Data%20Visualization/Tableau.webp", // replace with actual
    ctaText: "Read More",
     ctaLink: "/marketing-analytics-services/data-visualization/tableau/"
  },
  {
    id: "analytics",
    label: "Power BI  ",
    icon: BarChart2,
    image: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Analytics%20as%20a%20Service/Advance%20Data%20Visualization/Power%20BI.webp",
 ctaText: "Read More",
   ctaLink: "/marketing-analytics-services/data-visualization/power-bi/"
  },
  {
    id: "integration",
    label: "Looker Studio (formerly Google Data Studio) ",
    icon: Database,
    image: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Analytics%20as%20a%20Service/Advance%20Data%20Visualization/Looker%20Studio%20(formerly%20Google%20Data%20Studio).webp",
    ctaText: "Read More",
    ctaLink: "/marketing-analytics-services/data-visualization/looker-studio/"
  },
  {
    id: "security",
    label: "Datorama (Marketing Intelligence by Salesforce)  ",
    icon: ShieldCheck,
    image: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Analytics%20as%20a%20Service/Advance%20Data%20Visualization/Datorama%20(Marketing%20Intelligence%20by%20Salesforce).webp",
 ctaText: "Read More",
    ctaLink: "/marketing-analytics-services/data-visualization/datorama/"
  },
   {
    id: "development",
    label: "Embedded AI Capabilities  ",
    icon: ShieldCheck,
    image: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Analytics%20as%20a%20Service/Advance%20Data%20Visualization/Embedded%20Al%20Capabilities.webp",
  //   ctaText: "Get a Demo",
  //  ctaLink: "/l3-template"
  },
];

  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
   
    description: "From dynamic KPIs to executive dashboards, we make Tableau work hard and look good for your business.  ",
    items: [
      { icon: Zap, title: "Clean, goal-aligned Tableau dashboards that reduce noise and elevate signal   " },
      { icon: Zap, title: "Automated storytelling with interactive filters, drill-downs, and AI-powered alerts    " },
      { icon: Zap, title: "Embedded insights where your teams work-CRM, emails, presentations  " },
    ],
  },
  {
    id: "analytics",
   
    description: "Put your business data in motion with custom Power BI visualizations designed for clarity, speed, and impact.  ",
    items: [
      { icon: BarChart2, title: "Seamless data modeling with real-time refreshes   " },
      { icon: BarChart2, title: "Custom Power BI themes tailored to your brand    " },
      { icon: BarChart2, title: "AI-assisted visuals to highlight trends and outliers instantly   " },
    ],
  },
  {
    id: "integration",
   
    description: "We turn Looker Studio into your fast lane to insight - automated, accessible, and action-ready.  ",
    items: [
      { icon: Database, title: "Build marketing, sales, and ops dashboards that update themselves   " },
      { icon: Database, title: "Connect with GA4, BigQuery, CRMs, and more, no code required  " },
      { icon: Database, title: "Custom themes + access control for teams at scale   " },
    ],
  },
  {
    id: "security",
   
    description: "Unify, analyze, and visualize all your marketing data in one powerhouse platform.  ",
    items: [
      { icon: ShieldCheck, title: "Connect disparate data sources across ad platforms, CRMs, web analytics & more  " },
      { icon: ShieldCheck, title: "Build executive-level marketing dashboards with smart AI tagging   " },
      { icon: ShieldCheck, title: "Real-time performance snapshots tied directly to ROI  " },
    ],
  },
   {
    id: "development",
   
    description: "Why guess when your dashboard can tell you what matters? ",
    items: [
      { icon: ShieldCheck, title: "Predictive visuals that highlight what's likely to happen next  " },
      { icon: ShieldCheck, title: "AI-based anomaly detection. Spot issues before they snowball " },
      { icon: ShieldCheck, title: "Natural language summaries for instant executive readouts   " },
    ],
  },
];


  // FAQ List
  const faqs = [
    {
      q: "What makes your data visualization different?",
      a: "  We don’t just connect charts, we connect the why behind them. Every visualization is built to answer specific business questions and guide action.",
    },
    {
      q: "Can you work with our existing BI tools?",
      a: "Absolutely. Whether it's Tableau, Power BI, Looker Studio, or Datorama, we build on what you already have and optimize it for business value.",
    },
    {
      q: " Is AI part of your visualization solutions?  ",
      a: " Yes. From predictive analytics to automated insights, we infuse dashboards with AI to surface what matters most.",
    },
    {
      q: "Will our non-technical teams understand these dashboards?",
      a: "That’s the goal. Our dashboards are built for everyone-easy to explore, understand, and use.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="serviceHubspot" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Backed Advanced Data Visualization That Drives Smarter, Faster Decisions"
         
          subtext="See what your data is really saying with clear, compelling visuals. "
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Analytics%20as%20a%20Service/L-2%20Banner%20Images%20/Advanced%20Data%20Visualization.webp"
        />

        {/* Statistics Section */}
         <EditableStatSection
 
  title="You’re in sharp company-with brands turning numbers into narratives.  "
  stats={[
    { label: "Interactive dashboards designed to decode data at a glance  ", value: "350+" },
    { label: "Average uplift in data-driven decision velocity  ", value: "30%" },
    { label: "Business users empowered through self-serve reporting interfaces   ", value: "200+" },
          ]}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title=" AI-Driven Data Visualization That Speaks the Language of Leadership  "
          subtitle="We craft clear visuals from complex data, so you don’t just look at charts, you act on them."
          tabs={tabs}
          features={features} 
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="See How AI-Powered Data Visualization Drives Impact "
          body="We’ve helped brands move from scattered numbers to strategic, boardroom-ready visuals. "
          subTabs={[]}
         resourcePostType="case-studies"
        />

        <LogoScroller
        heading="Brands That Rely on Our Data Visualization Expertise "
        subtext=" From scaling startups to global leaders-our dashboards fuel decisions that matter."
        
      />

        {/* Testimonials */}
        <Testimonials
          title=" Dashboards That Speak Louder Than Words   "
          description="With strategy, AI and skill at the core, our visualizations work hard so you don’t have to.   "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

          {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Stay in the know with AI-powered best practices for next-gen dashboards, freshest blog posts and industry news. "
  perPage={6}
  firstN={4}
  contentType="blogs"
  resourceType="350"
/>

        {/* Call to Action */}
        <ContactCta
          heading="Ready to Build Dashboards That Do the Thinking for You? "
          subtext=" Smarter visuals. Deeper insights. Decisions on demand. Let’s get started."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
