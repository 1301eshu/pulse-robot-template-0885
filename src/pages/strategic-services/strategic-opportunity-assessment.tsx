// Copied from /services/strategic-opportunity.tsx

import { useState } from "react";
import EditableStatSection from "@/components/Statistics";
import Component1 from "@/components/ui/component_1";
import FeatureCard from "@/components/ui/component_3";
import Testimonials from "@/components/ui/component_4";
import FaqSection from "@/components/ui/component_5";
import ContactCta from "@/components/ui/component_6";
import HeroSection from "@/components/ui/component_7";
import LogoScroller from "@/components/ui/component_13";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import EnterpriseCapabilities, { TabItem, FeatureContent } from "@/components/ui/component_2";
import { FileText, Package, Sparkles, Database, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import ExploreMoreBlock from "@/components/exploremore";
import DynamicSEO from "@/components/DynamicSEO";

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tabs → mapped from "How Our Strategic Scan..." sections
  const tabs: TabItem[] = [
    {
      id: "market-sizing",
      label: "Market Sizing & Whitespace",
      icon: FileText,
      image:
        "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Strategic%20Opportunity%20Assessment%20/Market%20Sizing%20&%20Whitespace.webp",
    },
    {
      id: "icp-clustering",
      label: "ICP Precision & Clustering",
      icon: Package,
      image:
        "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Strategic%20Opportunity%20Assessment%20/ICP%20Precision%20&%20Clustering.webp",
    },
    {
      id: "gtm-readiness",
      label: "GTM Readiness Audit",
      icon: Database,
      image:
        "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Strategic%20Opportunity%20Assessment%20/GTM%20Readiness%20Audit.webp",
    },
    {
      id: "competitive-intel",
      label: "Competitive Intelligence Scan",
      icon: Sparkles,
      image:
        "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Strategic%20Opportunity%20Assessment%20/Competitive%20Intelligence%20Scan.webp",
    },
    {
      id: "opportunity-scorecard",
      label: "Opportunity Scorecard & Plan",
      icon: Zap,
      image:
        "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Strategic%20Opportunity%20Assessment%20/Opportunity%20Scorecard%20&%20Plan.webp",
    },
  ];

  // Features under each tab (verbatim themes from the doc)
  const features: FeatureContent[] = [
    {
      id: "market-sizing",
      description:
        "LLMs reverse-engineer the playing field to show where your competitors zig, and where you can zag.",
      items: [
        { icon: FileText, title: "Demand signals pulled from live web and social data" },
        { icon: FileText, title: "Opportunity zones mapped to product strengths" },
        { icon: FileText, title: "Unstructured market chatter turned into action plans" },
      ],
    },
    {
      id: "icp-clustering",
      description:
        "You don’t need more leads. You need the right ones. We fine-tune your ICP with AI-assisted deep segmentation.",
      items: [
        { icon: Package, title: "Real buyer behaviors modeled, not assumed" },
        { icon: Package, title: "Clustered by intent, pain point, and product fit" },
        { icon: Package, title: "Strategic personas built with LLM insights" },
      ],
    },
    {
      id: "gtm-readiness",
      description:
        "Before launching your next big play, know if the engine’s ready. We audit your GTM plan across stages and surfaces.",
      items: [
        { icon: Database, title: "Funnel diagnostics: drop-offs, dead zones, dark data" },
        { icon: Database, title: "Asset audit: content gaps, CTA mismatches, broken paths" },
        { icon: Database, title: "Channel audit: paid, organic, partner-what’s working, what’s noise" },
      ],
    },
    {
      id: "competitive-intel",
      description:
        "We train LLMs on your competitors’ strategies, so you get their playbook-minus the guesswork.",
      items: [
        { icon: Sparkles, title: "Ad creative and messaging scraped and analyzed" },
        { icon: Sparkles, title: "Frequency, funnel stage, and format breakdowns" },
        { icon: Sparkles, title: "Content themes mapped to funnel intent" },
      ],
    },
    {
      id: "opportunity-scorecard",
      description:
        "Insights don’t mean much if they don’t move. We build a tactical action map prioritized by ROI and readiness.",
      items: [
        { icon: Zap, title: "Custom scorecard: impact × effort matrix" },
        { icon: Zap, title: "Strategic plays for short, mid, and long-term gains" },
        { icon: Zap, title: "Delivered as a strategic war room deck" },
      ],
    },
  ];


  // FAQs from the doc
  const faqs = [
    {
      q: "How long does a Strategic Opportunity Assessment take?",
      a: "Typically 2–4 weeks depending on scope. We deliver a full action plan, not just a slide deck of observations.",
    },
    {
      q: "Is this only for new GTM plans?",
      a: "Nope. It’s for any brand that wants to tighten its funnel, sharpen its ICP, or find new lanes to grow.",
    },
    {
      q: "Do we need AI knowledge to benefit?",
      a: "Not at all. Our AI and LLM layer do the heavy lifting, so you focus on decisions, and leave dashboards to us.",
    },
    {
      q: "What format do we get the output in?",
      a: "A live working doc, a strategic scorecard, and a C-level ready war room deck. Ready to act.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="strategicservicesstrategicopportunityassessment"/>
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Powered Strategic Opportunity Assessment Engineered for Market Fit and Momentum"
          subtext="Discover the market moves, channel gaps, and growth levers you’re not seeing (yet)."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/strategic%20services%20hero%20banner%20/SMM.webp"
          buttonText="Start My Assessment"
        />

        {/* Trust Markers / Statistics Section */}
        <EditableStatSection
          title="You’re in sharp company-leaders use our assessments to fuel precision-driven growth strategies."
          stats={[
            { label: "Strategic assessments delivered across industries", value: "200+" },
            { label: "Clients identified at least one critical funnel blindspot", value: "70%+" },
            { label: "Faster strategic pivots post-assessment", value: "4X" },
          ]}
        />

        {/* What We Do */}
        <EnterpriseCapabilities
          title="How Our Strategic Scan Finds Missed Wins and Market Moves"
          subtitle="We analyze your market position to uncover overlooked revenue and competitive opportunities."
          tabs={tabs}
          features={features}
        />

        {/* Case Studies (using RecentResourcesSection) */}
        <RecentResourcesSection
          heading="See How Strategic Opportunity Assessment Unlocked Growth"
          body="From GTM pivots to ICP overhauls, our assessment brought fresh growth for these brands."
          subTabs={[]}
          resourcePostType="case-studies"
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Folks That Trust Our Strategic Lens"
          subtext="From SaaS to Services, they count on us to set the right direction before hitting the gas."
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories. Real Strategic Wins."
          description="Thanks to strategy, skill, a dash of AI, and momentum that doesn’t slow down."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body="  Stay updated with fresh resources, strategic marketing tips, and AI takes straight from industry experts. "
  perPage={6}
  firstN={4}
  contentType="blogs"
  resourceType="38"
/>

        {/* CTA */}
        <ContactCta
          heading="Let’s Chart Your Next Strategic Move"
          subtext="Get a map of where to go and how to grow when you get there."
          buttonLabel="Talk to Us"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
