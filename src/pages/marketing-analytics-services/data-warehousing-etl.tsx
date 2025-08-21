// Migrated from /services/DataWarehousingETL.tsx

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

export default function DataWarehousingETL() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

 // Tab Items
 const tabs: TabItem[] = [
  {
    id: "marketing",
    label: "Modern ETL/ELT Architecture  ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Data%20Warehousing%20%20ETL%20/ELT%20Architecture.webp", // replace with actual
  },
  {
    id: "analytics",
    label: "Cloud Data Warehouse Setup & Optimization  ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Data%20Warehousing%20%20ETL%20/Cloud%20Data%20Warehouse%20Setup%20&%20Optimization.webp",
  },
  {
    id: "integration",
    label: "Schema Design & Data Modeling  ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Data%20Warehousing%20%20ETL%20/Schema%20Design%20&%20Data%20Modeling.webp",
  },
  {
    id: "security",
    label: "Data Quality, Validation & Error Handling   ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Data%20Warehousing%20%20ETL%20/Data%20Quality,%20Validation%20&%20Error%20Handling.webp",
  },
    {
    id: "development",
    label: "ETL Maintenance & Performance Monitoring   ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Data%20Warehousing%20%20ETL%20/ETL%20Maintenance%20&%20Performance%20Monitoring%20%20%20.webp",
  },
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
  
    description: "Your data, transformed and loaded the right way—fast, accurate, and audit-friendly.  ",
    items: [
      { icon: Zap, title: "Cloud-native pipelines designed for agility and scale  " },
      { icon: Zap, title: "ETL or ELT? We choose what fits your flow, not ours  " },
      { icon: Zap, title: "Data freshness you can trust, not refresh manually  " },
    ],
  },
  {
    id: "analytics",
   
    description: "We design the infrastructure your insights deserve. ",
    items: [
      { icon: BarChart2, title: "Snowflake, BigQuery, Redshift, Azure—you name it, we deploy it   " },
      { icon: BarChart2, title: "Automated partitioning, scaling, and storage optimization   " },
      { icon: BarChart2, title: "AI monitors performance spikes, usage patterns, and latency bottlenecks   " },
    ],
  },
  {
    id: "integration",
   
    description: "Structured to scale, organized to answer questions before they’re even asked. ",
    items: [
      { icon: Database, title: "Star, snowflake, or hybrid schema—custom-modeled for your business use case  " },
      { icon: Database, title: "Dimensional modeling built around your KPIs   " },
      { icon: Database, title: "AI-assisted anomaly detection and field usage mapping   " },
    ],
  },
  {
    id: "security",
   
    description: "We don’t just move data—we guarantee its trustworthiness.  ",
    items: [
      { icon: ShieldCheck, title: "End-to-end QA across each pipeline  " },
      { icon: ShieldCheck, title: "Rule-based and AI-assisted anomaly detection   " },
      { icon: ShieldCheck, title: "Data contract enforcement across teams   " },
    ],
  },
   {
    id: "development",
   
    description: "We keep your pipelines healthy, so your dashboards don’t choke.  ",
    items: [
      { icon: ShieldCheck, title: "Real-time monitoring with alerting on failures and drifts    " },
      { icon: ShieldCheck, title: "AI identifies slow queries, redundant jobs, and schema decay    " },
      { icon: ShieldCheck, title: "Monthly audits to keep systems fast, lean, and aligned with business needs   " },
    ],
  },
];

  // Resources for recent articles
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

  // FAQ List
  const faqs = [
    {
      q: "Do I need a cloud data warehouse to work with you? ",
      a: "Not necessarily—but if you don’t have one, we’ll recommend and implement the best fit based on your scale and goals.",
    },
    {
      q: "Can you help with legacy migration (on-prem to cloud)?",
      a: " Absolutely. We handle schema conversion, data validation, and post-migration support end-to-end.",
    },
    {
      q: "What platforms do you support?  ",
      a: "Snowflake, BigQuery, Redshift, Azure, Postgres, MySQL, and any modern ETL tool (DBT, Fivetran, Airbyte, etc.) ",
    },
    {
      q: "What’s included in the free audit?",
      a: "A full walkthrough of your current pipelines, data models, and at least one AI-powered recommendation to increase speed, trust, or scalability. ",
    },
  ];
  
  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="dataWarehousingEtl" />
      <Header />
       <SmartBreadcrumb />
      <main className="pt-0">
        {/* HERO Section */}
        <HeroSection
          heading="Data Warehousing & ETL That Sets the Stage for Smarter Insights "
          subtext=" Seamless data flow from source to insight—clean, governed, and built to scale with your business.  "
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Analytics%20as%20a%20Service/L-2%20Banner%20Images%20/Data%20Warehousing%20Etl.webp"
        />

        {/* Statistics Section */}
        <EditableStatSection
 
  title="AI-enabled results. Human-approved performance. "
  stats={[
    { label: "Structured, cleaned, and pipelined for reporting   ", value: "100TB+ " },
    { label: " Pipeline uptime across all cloud-managed warehouses ", value: "99.99% " },
    { label: " Faster data availability across business units  ", value: "5x " },
 //   { label: "  Records Data rows processed daily in real-time workflows ", value: "400M+" },
  ]}
/>

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="What We Do with Data Warehousing & ETL"
          subtitle=" We turn chaos into clarity—building pipelines that never crack under pressure and warehouses that scale with your growth.  "
          tabs={tabs}
          features={features} 
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading=" Where Data Foundation Became Growth Foundation   "
          body=" Real teams. Real pipelines. Real business momentum.  "
           subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

         <LogoScroller
        heading="Solid Data Stacks Start Here  "
        subtext="  From bootstrapped startups to global brands—we help them build, clean, and scale.. "
       
      />

        {/* Testimonials */}
        <Testimonials
          title=" Don’t Just Store Data. Activate It.    "
          description="  Our clients didn’t just get dashboards—they got decisions they could trust.  "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

          {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body="  Insights, frameworks, and technical cheat codes from our data team. "
  perPage={6}
  firstN={4}
  contentType="blogs"
/>

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Build a Warehouse That Works as Hard as You Do"
          subtext="Your data foundation—optimized, automated, and AI-enhanced.   "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
