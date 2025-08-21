// Copied from /services/AI-optimized-enterprise.tsx

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
import EnterpriseCapabilities, { TabItem, FeatureContent } from "@/components/ui/component_2";
import { FileText, Wrench, Sparkles, Database, Package, Repeat, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import ExploreMoreBlock from "@/components/exploremore";

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tabs → mapped from "What We Do with Enterprise Resource Planning"
  const tabs: TabItem[] = [
    {
      id: "erp-audit",
      label: "ERP System Audit & Optimization",
      icon: FileText,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/AI%20Optimized%20Enterprise%20Resource%20Planning/ERP%20System%20Audit%20&%20Optimization.webp",
    },
    {
      id: "process-automation",
      label: "Process Automation & Workflow Design",
      icon: Wrench,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/AI%20Optimized%20Enterprise%20Resource%20Planning/Process%20Automation%20&%20Workflow%20Design.webp",
    },
    {
      id: "forecasting",
      label: "AI-Powered Forecasting & Decision Support",
      icon: Sparkles,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/AI%20Optimized%20Enterprise%20Resource%20Planning/Al-Powered%20Forecasting%20&%20Decision%20Support.webp",
    },
    {
      id: "integration-data",
      label: "System Integration & Data Strategy",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/AI%20Optimized%20Enterprise%20Resource%20Planning/System%20Integration%20&%20Data%20Strategy.webp",
    },
    {
      id: "implementation",
      label: "Custom ERP Implementation & Migration",
      icon: Package,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/AI%20Optimized%20Enterprise%20Resource%20Planning/Custom%20ERP%20Implementation%20&%20Migration.webp",
    },
    {
      id: "ongoing",
      label: "Ongoing ERP Management & AI Enhancements",
      icon: Repeat,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/AI%20Optimized%20Enterprise%20Resource%20Planning/Ongoing%20ERP%20Management%20&%20Al%20Enhancements.webp",
    },
  ];

  // Features under each tab (from the doc)
  const features: FeatureContent[] = [
    {
      id: "erp-audit",
      description:
        "Uncover what’s slowing you down—and where AI can speed you up.",
      items: [
        { icon: FileText, title: "Deep-dive review of current ERP performance & process friction" },
        { icon: FileText, title: "Identify automation gaps, data lags, and underutilized modules" },
        { icon: FileText, title: "AI-generated roadmap for quick wins and long-term optimization" },
      ],
    },
    {
      id: "process-automation",
      description:
        "Operational excellence starts with smart design—and smarter triggers.",
      items: [
        { icon: Wrench, title: "Re-architect core processes (finance, inventory, procurement, HR)" },
        { icon: Wrench, title: "Embed AI to automate tasks, reduce error, and increase speed" },
        { icon: Wrench, title: "Integrate systems and design workflows that scale" },
      ],
    },
    {
      id: "forecasting",
      description:
        "Move from reactive to predictive with data-backed decisions.",
      items: [
        { icon: Sparkles, title: "AI-led demand forecasting, cash flow modeling, and resource planning" },
        { icon: Sparkles, title: "Predictive alerts for cost overruns, inventory risks, and delays" },
        { icon: Sparkles, title: "Turn ERP into a strategic advantage, not just a reporting tool" },
      ],
    },
    {
      id: "integration-data",
      description:
        "Because even the smartest ERP is useless without clean, connected data.",
      items: [
        { icon: Database, title: "Sync ERP with CRM, WMS, HCM, and other core systems" },
        { icon: Database, title: "Clean, enrich, and structure data for real-time use" },
        { icon: Database, title: "Unified dashboards to align operations and leadership" },
      ],
    },
    {
      id: "implementation",
      description:
        "Modern ERP without the migration migraine.",
      items: [
        { icon: Package, title: "Move from legacy systems to scalable, cloud-based ERP (NetSuite, SAP, Dynamics)" },
        { icon: Package, title: "Industry-specific configurations built for your workflows" },
        { icon: Package, title: "End-to-end QA, data migration, and post-go-live support" },
      ],
    },
    {
      id: "ongoing",
      description:
        "Stay future-ready with continuous optimization.",
      items: [
        { icon: Repeat, title: "Always-on support, system upgrades, and AI feature rollouts" },
        { icon: Repeat, title: "Monthly performance reviews and experimentation sprints" },
        { icon: Repeat, title: "AI tuning based on usage, patterns, and evolving business needs" },
      ],
    },
  ];

  // Resources → case-study style (structure kept)
  const recentResources: ResourceItem[] = [
    {
      title: "ERP Case Study: Faster Close, Clearer Forecasts",
      subtitle: "How AI forecasting in ERP improved cash flow visibility and reduced surprises.",
      author: "Team Design+marketing",
      date: "July 7, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "erp-forecasting-case",
    },
    {
      title: "Ops at Scale: Automations that Actually Stick",
      subtitle: "Re-architected workflows cut cycle time and error rates across finance and inventory.",
      author: "Team Design+marketing",
      date: "July 4, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "erp-automation-scale",
    },
    {
      title: "Migration Without the Migraine",
      subtitle: "From legacy to cloud ERP—with data integrity and zero downtime for ops.",
      author: "Team Design+marketing",
      date: "July 4, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "erp-migration-story",
    },
  ];

  // FAQs (from the doc)
  const faqs = [
    {
      q: "What platforms do you support?",
      a: "We work across ERP platforms like NetSuite, SAP, Microsoft Dynamics, Oracle, and custom-built stacks.",
    },
    {
      q: "How long does an ERP optimization project take?",
      a: "Timelines vary—most quick-win optimizations take 4–6 weeks. Larger transformations run 8–16 weeks.",
    },
    {
      q: "What kind of companies do you work with?",
      a: "We work with mid-sized to enterprise firms across manufacturing, SaaS, healthcare, and logistics.",
    },
    {
      q: "What role does AI actually play in ERP?",
      a: "It helps identify inefficiencies, automate decisions, and improve forecasting accuracy. We blend AI with deep operational know-how.",
    },
    {
      q: "Do I need to change my ERP platform?",
      a: "Not necessarily. Many of our clients stick with their existing system—we help them use it better and smarter.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="Enterprise Resource Planning That Learns, Adapts, and Scales—Powered by AI"
          subtext="Align your systems, teams, and decisions with ERP that doesn’t just record history—but helps you shape it."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/strategic%20services%20hero%20banner%20/ABM.webp"
        />

        {/* Statistics / Trust Markers */}
        <EditableStatSection
          title="You’re in good company— with enterprises optimizing ERP to power smarter moves."
          stats={[
            { value: "100+", label: "ERP transformations led across industries" },
            { value: "30%", label: "Average increase in system utilization" },
            { value: "20+", label: "AI-infused workflows launched across departments" },
          ]}
        />

        {/* What We Do */}
        <EnterpriseCapabilities
          title="What We Do with Enterprise Resource Planning"
          subtitle="We modernize how enterprise teams run by embedding AI into the heart of your ERP stack."
          tabs={tabs}
          features={features}
        />

        {/* Case Studies / Recent Resources */}
        <RecentResourcesSection
          heading="See How Enterprise Resource Planning Drives Real Efficiency"
          body="How our clients unlocked scale and savings with smarter ERP."
          subTabs={[]}
          resources={recentResources}
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="ERP Wins Built with Ambitious Teams Like Yours"
          subtext="From smoother systems to smarter decisions — here’s who we’ve helped plan, align, and execute better with ERP."
        />

        {/* Testimonials */}
        <Testimonials
          title="What Brands Say After We Touched Their ERP"
          description="Better visibility, faster execution, smarter moves—straight from the source."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

       {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body="  Guides, use cases, and AI deep-dives for modern operations leaders. "
  perPage={6}
  firstN={4}
  contentType="blogs"
/>

        {/* CTA */}
        <ContactCta
          heading="Let’s Build an ERP That Thinks Ahead"
          subtext="From forecasting to fulfillment, unlock AI-driven clarity across your enterprise."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
