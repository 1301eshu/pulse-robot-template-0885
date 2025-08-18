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
    label: "AI-Optimized Workflow Design ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Automation%20%20Workflow%20Optimization%20/AI-Optimized%20Workflow%20Design.webp", // replace with actual
 //  ctaText: "Get a Demo",
 //   ctaLink: "/l3-template"
    
  },
  {
    id: "analytics",
    label: "Intelligent Automation Rules ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Automation%20%20Workflow%20Optimization%20/Intelligent%20automation%20Rules.webp",
   // ctaText: "Get a Demo",
   // ctaLink: "/l3-template"
  },
  {
    id: "integration",
    label: "Predictive Ticket Routing ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Automation%20%20Workflow%20Optimization%20/Predictive%20ticket%20routing.webp",
 //   ctaText: "Get a Demo",
  //  ctaLink: "/l3-template"
  },
  {
    id: "security",
    label: "Lifecycle Automation with AI Oversight ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Automation%20%20Workflow%20Optimization%20/Lifestyle%20Automation%20with%20AI%20Oversight.webp",
  //  ctaText: "Get a Demo",
  //  ctaLink: "/l3-template"
  },
   {
    id: "development",
    label: "Real-Time Workflow Monitoring & AI Diagnostics   ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Automation%20%20Workflow%20Optimization%20/Real%20Time%20workflow%20Monitoring%20&%20AI%20Diagnostics.webp",
  //  ctaText: "Get a Demo",
  //  ctaLink: "/l3-template"
  },
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
   
    description: "We map how your team actually works—and design flows that do the work for them. ",
    items: [
      { icon: Zap, title: "Smart branching based on real usage patterns   " },
      { icon: Zap, title: "Dynamic workflows that evolve with team inputs   " },
      { icon: Zap, title: "No more one-size-fits-all flows—just logic that adapts   " },
    ],
  },
  {
    id: "analytics",
   
    description: "Trigger the right action, for the right team, at exactly the right moment.  ",
    items: [
      { icon: BarChart2, title: "AI-assisted rule generation for cleaner logic and fewer collisions     " },
      { icon: BarChart2, title: "Eliminate ticket ping-pong with intelligent field updates, alerts, escalations   " },
      { icon: BarChart2, title: "One rule to rule them all—and scale across your Jira instance   " },
    ],
  },
  {
    id: "integration",
   
    description: "Forget manual triage. Let AI guide tickets to where they belong.  ",
    items: [
      { icon: Database, title: "Learn from past assignments to inform future decisions  " },
      { icon: Database, title: "AI suggests assignees, priority, and next steps   " },
      { icon: Database, title: "Adaptive routing that refines itself over time    " },
    ],
  },
  {
    id: "security",
   
    description: "We automate your ticket journey—from creation to close—with zero dead ends. ",
    items: [
      { icon: ShieldCheck, title: "Smart triggers for stale tickets, stuck issues, or loopbacks     " },
      { icon: ShieldCheck, title: "Automate reminders, transitions, and handoffs without gaps    " },
      { icon: ShieldCheck, title: "Reduce human dependency and ticket drag " },
    ],
  },
   {
    id: "development",
   
    description: "We don’t just build it—we help you improve it with AI-powered visibility.   ",
    items: [
      { icon: ShieldCheck, title: "Dashboards that highlight friction in real time   " },
      { icon: ShieldCheck, title: "AI flags workflow collisions, redundant rules, or logic decay   " },
      { icon: ShieldCheck, title: "Ongoing optimization that keeps you ahead of bottlenecks  " },
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
      q: "  What’s included in an automation audit? ",
      a: " Rule diagnostics, workflow logic review, performance mapping—and some AI-powered opportunities you’re not using yet.  ",
    },
    {
      q: "Can you help us fix broken or bloated workflows?  ",
      a: "100%. We refactor, streamline, and automate anything clunky or chaotic. ",
    },
    {
      q: "Do you support both Cloud and Data Center? ",
      a: "Yes. We build and scale automations across all Jira environments. ",
    },
    {
      q: "How fast can we implement automation?",
      a: "Most teams go live in 2–3 weeks with visible improvements in week one.  ",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="jiraAutomationWorkflow" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Powered Jira Automation That Works While You Don’t "
         
          subtext=" From smart triggers to full-blown workflows—we make Jira flow like it’s reading your mind. "
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/L-2%20Banner%20Images/Jira%20Automation%20&%20Workflow.webp"
        />

        {/* Statistics Section */}
         <EditableStatSection
 
  title="AI-enabled results. Human-approved performance.   "
  stats={[
    { label: " Workflow automations deployed across Jira Cloud & Data Center  ", value: "100+" },
    { label: "Certified Jira Experts  ", value: "20+" },
    { label: "Avg. boost in ticket resolution speed  ", value: "35%" },
    { label: " Customer teams operating with zero manual routing ", value: "50+" },
          ]}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="  What We Do with Jira Automation & Workflow Optimization  "
          subtitle="We build systems that think before your team needs to act—using AI to automate, streamline, and supercharge every workflow. "
          tabs={tabs}
          features={features} 
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="  See What Smart Jira Automation Looks Like in Action   "
          body="These teams ditched manual mayhem and started scaling smart.  "
          subTabs={[]}
          resources={recentResources}
        />

        <LogoScroller
        heading=" Automation You Can Trust. AI You Can Count On. "
        subtext=" These brands optimized Jira—and haven’t looked back."
        
      />

        {/* Testimonials */}
        <Testimonials
          title=" Real Stories, Real Jira Impact  "
          description=" We don’t just automate—we accelerate. "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

         {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="  More From Our Content Repertoire"
          body=" Deep dives, AI tips, and tactical Jira wisdom. "
          subTabs={[]}
          resources={recentResources}
        />

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Build a Smarter, Self-Driving Jira  "
          subtext=" AI-infused workflows. Effortless operations. It’s time to let Jira do the heavy lifting.  "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
