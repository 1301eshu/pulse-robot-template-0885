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

  // Tab Items
 const tabs: TabItem[] = [
  {
    id: "marketing",
    label: "Jira Strategy & Implementation ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Slider%20L1/Jira%20Strategy%20.webp", // replace with actual
    
    
  },
  {
    id: "analytics",
    label: "Jira Migration & Configuration ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Slider%20L1/Jira%20Migration%20.webp",
    
  },
  {
    id: "integration",
    label: "Automation & Workflow Optimization ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Slider%20L1/Automation.webp",
   
  },
  {
    id: "security",
    label: "Support & Maintenance ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Slider%20L1/Support%20.webp",
    
  },
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
  
    
    items: [
      { icon: Zap, title: "Flows that feel like second nature—because they are. " },
      { icon: Zap, title: "Strategy built on user logic, powered by AI precision. Less digging, more doing. Jira that actually works the way you do. " },
      { icon: Zap, title: "Less digging, more doing. Jira that actually works the way you do.  " },
    ],
  },
  {
    id: "analytics",
  
   
    items: [
      { icon: BarChart2, title: "No data loss. No downtime. Just a clean handoff to the future. " },
      { icon: BarChart2, title: "AI anticipates breaks before they happen—so you don’t have to.  " },
      { icon: BarChart2, title: "Migrate once. Never look back. " },
    ],
  },
  {
    id: "integration",
  
   
    items: [
      { icon: Database, title: "AI that catches blockers before your team even hits them. " },
      { icon: Database, title: "No more manual ticket triage—just intelligent flow. " },
      { icon: Database, title: "From overwhelmed to overachieving." },
    ],
  },
  {
    id: "security",
 
    
    items: [
      { icon: ShieldCheck, title: "Your Jira, always running. We watch it so you don’t have to. " },
      { icon: ShieldCheck, title: "Fixes before failures. Tweaks before tickets.  " },
      { icon: ShieldCheck, title: "Human support with an AI sidekick—24/7 peace of mind. " },
    ],
  },
];

  // Platform Feature Cards
  const platformFeatures = [
    {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Logo%20Jira/Jira%20Software%20That%20Scales.webp",
      title: "Jira Software That Scales ",
      description: "Agile flows with predictive AI sprint optimization ",
       nocta: true,
       ctaUrl: "#",
    },
    {
     icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Logo%20Jira/Jira%20Service%20Management%20That%20Delivers.webp",
      title: "Jira Service Management That Delivers ",
      description: "AI-powered ticket routing and instant SLAs ",
       nocta: true,
       ctaUrl: "#",
    },
    {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Logo%20Jira/Cloud%20&%20Data%20Center%20That%20Grows%20With%20You.webp",
      title: "Cloud & Data Center That Grows With You ",
      description: "AI tools that forecast load & flag issues before they hit ",
       nocta: true,
      useBoxedImage: false,
       ctaUrl: "#",
    },
    {
     icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Logo%20Jira/Custom%20Plugins%20&%20Apps.webp",
      title: "Custom Plugins & Apps  ",
      description: "Integrations infused with automation, not maintenance ",
       nocta: true,
       ctaUrl: "#",
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
      q: "What’s included in the Jira audit?",
      a: "  Full diagnostic of your instance, workflow inefficiencies, AI-automation gaps + quick-win suggestions. ",
    },
    {
      q: "Which Jira environments do you support? ",
      a: "Cloud, Data Center, Server—your choice. Full-stack support across the Atlassian suite. ",
    },
    {
      q: "Can you fix / optimize what we already have? ",
      a: "Absolutely. We clean, configure, optimize—and toss in AI-powered automations when needed. ",
    },
    {
      q: "How long does onboarding take?",
      a: " We dive in fast: audit and scope within two weeks; implementation roadmap ready next. ",
    },
  ];
  
  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="jiraProfessionalServices" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Led Jira Services That Think Faster Than You Can Type"
        
          subtext="Custom workflows, smarter tools, zero chaos—so your team can actually get stuff done."
          bgImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Value%20Proposition%20/8302_gqqgrs%20(1).jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/726013.png"
        />

        {/* Statistics Section */}
        <EditableStatSection
 
  title="You’re in expert hands—built on deep Atlassian experience and results that scale.  "
  stats={[
    { label: "Clients Served  ", value: "50+" },
    { label: "Certified Jira Experts ", value: "20+" },
    { label: "Avg. Efficiency Boost  ", value: "30%" },
 //   { label: "Years of Combined Atlassian Know-How  ", value: "200+" },
  ]}
/>

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="Where Jira Strategy Meets AI-First Execution  "
          subtitle="From cloud migrations to plugin magic—no fluff, just results.  "
          tabs={tabs}
          features={features} 
        />

        {/* Platform Feature Cards */}
        <section className="py-20 bg-white">
          <div className="section-wrapper">
            <div className="text-left mb-16 max-w-2xl">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                The Atlassian Stack, Supercharged with AI  
              </h2>
              <p className="text-gray-600 mb-6">
               We fuse Jira with the tools you already love—and AI-boost your ecosystem.
              </p>
             
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {platformFeatures.slice(0, 3).map((card, idx) => (
                <FeatureCard key={idx} {...card} />
              ))}
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-6">
              {platformFeatures.slice(3).map((card, idx) => (
                <div key={idx} className="w-full lg:w-[32%]">
                  <FeatureCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </section>

         

        <LogoScroller
        heading="Brands That Trust Our Jira Game  "
        subtext=" Smart solutions built for some of the world’s smartest teams. "
        
      />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real AI Impact  "
          description="When we say AI-optimized Jira services, our clients say “finally”. "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="More From Our Content Repertoire  "
          body="Keep your Jira IQ high with our freshest blog posts, guides, and AI hot takes. "
           subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

        {/* Call to Action */}
        <ContactCta
          heading="AI-First Jira. Results-First Execution. "
          subtext=" Plug in Atlassian expertise, intelligent automation, and workflows that scale with your business. "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
