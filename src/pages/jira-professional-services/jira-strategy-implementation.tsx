// src/pages/jira-professional-services/jira-strategy-implementation.tsx

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

export default function JiraStrategyImplementation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

 // Tab Items
 const tabs: TabItem[] = [
  {
    id: "marketing",
    label: "Strategic Planning & Atlassian Deployment ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Strategy%20%20Implementaion%20/Strategic%20planning%20&%20Atlassian%20Deployment.webp",
  },
  {
    id: "analytics",
    label: "Configuration & Customization ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Strategy%20%20Implementaion%20/Configuration%20&%20customization.webp",
  },
  {
    id: "integration",
    label: "Agile Methodology & Jira Optimization ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Strategy%20%20Implementaion%20/Agile%20methodology%20&%20Jira%20Optimization.webp",
  },
  {
    id: "security",
    label: "Workflow & Process Automation  ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Strategy%20%20Implementaion%20/workflow%20&%20Process%20automation.webp",
  },
   {
    id: "development",
    label: "Advanced Dashboards & Reporting  ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Strategy%20%20Implementaion%20/Advanced%20dshboard%20&%20reporting.webp",
  },
];

const features: FeatureContent[] = [
  {
    id: "marketing",
    description: "Future-proof your Jira—cloud, data center, or server—with strategies that actually grow with you. ",
    items: [
      { icon: Zap, title: "Architected for scale, threaded with AI guardrails.  " },
      { icon: Zap, title: "Build it right. Build it once.   " },
      { icon: Zap, title: "Deployment that evolves as your org does.   " },
    ],
  },
  {
    id: "analytics",
    description: "Full-stack revamp: workflows, fields, roles, reports—set up the way you actually work. ",
    items: [
      { icon: BarChart2, title: "Custom fields with AI insight baked in.    " },
      { icon: BarChart2, title: "Permissions that make sense, not mess.  " },
      { icon: BarChart2, title: "Data-driven metrics, no guesswork.  " },
    ],
  },
  {
    id: "integration",
    description: "From Kanban to Scrum or somewhere in between—ensure your teams sprint smarter, not just faster.  ",
    items: [
      { icon: Database, title: "Boards built for your rhythm, with AI tuning velocity. " },
      { icon: Database, title: "Agile that’s adaptive, actionable, automated.  " },
      { icon: Database, title: "Sprint success mapped with clarity.   " },
    ],
  },
  {
    id: "security",
    description: "Turn manual chaos into automatic flow—with intelligent routing, alerts, and escalations. ",
    items: [
      { icon: ShieldCheck, title: "AI flags the bottlenecks before they block you.    " },
      { icon: ShieldCheck, title: "Spend less time updating tickets, more time delivering.   " },
      { icon: ShieldCheck, title: "Automate everything that shouldn’t require a human.   " },
    ],
  },
   {
    id: "development",
    description: "Dashboards that do more than display—they predict and guide.  ",
    items: [
      { icon: ShieldCheck, title: "Dashboards that advise not just inform.  " },
      { icon: ShieldCheck, title: "Role-based reporting that gets every stakeholder on the same page.  " },
      { icon: ShieldCheck, title: "Real-time, AI-powered insights that don’t wait for the end of the sprint.  " },
    ],
  },
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

const faqs = [
  {
    q: " What’s included in a Jira strategy audit",
    a: " Strategic plan + configuration deep dive + AI-sourced efficiency boosters. ",
  },
  {
    q: "Can you optimize an already messy instance? ",
    a: "Absolutely—we revamp fields, workflows, roles, dashboards while keeping your data intact.",
  },
  {
    q: "Which deployment types can you handle?",
    a: " Cloud, Data Center, Server—you name it, we architect it. ",
  },
  {
    q: "How long before I see change?",
    a: " Most clients go live in 2–4 weeks, complex environments might take 6–8. ",
  },
];

return (
  <div className="bg-white text-gray-900">
    <DynamicSEO page="jiraStrategyImplementation" />
    <Header />
    <SmartBreadcrumb />
    <main className="">
      {/* HERO Section */}
      <HeroSection
        heading="Jira Strategy That Thinks Ahead—With AI at the Core "
        subtext="From backlog bloat to process bliss—we architect Jira systems that just make sense."
        bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
        rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/L-2%20Banner%20Images/Jira%20stratedgy%20and%20implementaion.webp"
      />
      <EditableStatSection
        title="You’re in good company—with power users who run Jira without friction  "
        stats={[
          { label: "Clients Served  ", value: "50+" },
          { label: "Certified Jira Experts  ", value: "20+" },
          { label: "Avg. Efficiency Boost  ", value: "30%" },
     //     { label: "Years of Combined Atlassian Know-How  ", value: "200+" },
        ]}
      />
      <EnterpriseCapabilities
        title="  What We Do with Jira Strategy & Implementation  "
        subtitle="We embed Jira into your org instead of forcing your org into Jira—plus we infuse AI smarts so your workflows don’t waste a beat. "
        tabs={tabs}
        features={features} 
      />
      <RecentResourcesSection
        heading=" See What Smart Jira Strategy Looks Like in Action  "
        body="A few real wins we’ve helped brands achieve with HubSpot. "
        subTabs={[]}
        resources={recentResources}
      />
      <LogoScroller
        heading=" Brands That Trust Our Jira Expertise "
        subtext=" From lean startups to enterprise squads—we build Jira systems that scale."
      />
      <Testimonials
        title="Real Stories, Real Jira Transformation  "
        description=" It’s not luck. It’s workflows, insights, automation, and a little AI swagger. "
      />
      <FaqSection title="FAQs" faqs={faqs} />
      {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Deep dives, AI tips, and tactical Jira wisdom.  "
  perPage={6}
  firstN={4}
  contentType="blogs"
/>
      <ContactCta
        heading="Let’s Build a Jira That Grows With You "
        subtext="AI-smart workflows, strategic structure, and systems that scale—starting now. "
        buttonLabel="Talk to an Expert"
        buttonLink="/contact"
      />
    </main>
    <Footer />
  </div>
);
}
