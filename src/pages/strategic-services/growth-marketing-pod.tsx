// Copied from /services/GrowthMarketingPod.tsx

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

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

 // Tab Items
 const tabs: TabItem[] = [
  {
    id: "marketing",
    label: "Pod Onboarding & Opportunity Mapping ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Growth%20Marketing%20Pod%20/Pod%20Onboarding%20&%20Opportunity%20Mapping.webp", // replace with actual
   // ctaText: "Get a Demo",
   // ctaLink: "/l3-template"
    
  },
  {
    id: "analytics",
    label: "Pod Structure: A-Team on Tap ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Growth%20Marketing%20Pod%20/Pod%20Structure_%20A-Team%20on%20Tap.webp",
   // ctaText: "Get a Demo",
   // ctaLink: "/l3-template"
  },
  {
    id: "integration",
    label: "Channel Execution & Campaigns ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Growth%20Marketing%20Pod%20/Channel%20Execution%20&%20Campaigns.webp",
  //  ctaText: "Get a Demo",
  //  ctaLink: "/l3-template"
  },
  {
    id: "security",
    label: "Conversion Optimization & Funnel Scaling  ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Growth%20Marketing%20Pod%20/Conversion%20Optimization%20&%20Funnel%20Scaling.webp",
  },
   {
    id: "development",
    label: "Reporting, Optimization & Alignment  ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Growth%20Marketing%20Pod%20/Reporting,%20Optimization%20&%20Alignment.webp",
  //   ctaText: "Get a Demo",
   // ctaLink: "/l3-template"
  },
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
   
    description: "We kick off by identifying your biggest growth levers-and turning them into an AI-prioritized, sprint-ready roadmap. ",
    items: [
      { icon: Zap, title: "Funnel + channel audit to surface high-impact opportunities  " },
      { icon: Zap, title: "Clear goals, shared KPIs, and aligned success metrics    " },
      { icon: Zap, title: "Roadmap driven by AI insights and expert prioritization  " },
      { icon: Zap, title: "Seamless setup to get your Pod running fast " },
    ],
  },
  {
    id: "analytics",
   
    description: "You get a dedicated team of growth experts-embedded in your workflows and laser-focused on outcomes.   ",
    items: [
      { icon: BarChart2, title: "Strategist, SEO/PPC Lead, Copywriter, Designer, and an Automation Expert    " },
      { icon: BarChart2, title: "Structured agile sprints synced via Slack (or your preferred communicator)    " },
      { icon: BarChart2, title: "Transparent workflows and shared tools  " },
     { icon: BarChart2, title: "No silos-one team, one mission, full accountability  " },
    ],
  },
  {
    id: "integration",
   
    description: "We don’t just plan-we launch, iterate, and scale campaigns across key growth channels.    ",
    items: [
      { icon: Database, title: "Paid Media, SEO, Email, Web, Social  " },
      { icon: Database, title: "AI-powered testing and optimization across creatives and audiences    " },
      { icon: Database, title: "Weekly sprint outputs with trackable impact    " },
      { icon: Database, title: "Momentum over meetings-real execution every week    " },
    ],
  },
  {
    id: "security",
   
    description: "Every touchpoint is designed to convert-and improve with every iteration. ",
    items: [
      { icon: ShieldCheck, title: "CRO, landing pages, nurture flows, UX optimization   " },
      { icon: ShieldCheck, title: "Insights layered with AI to refine journeys " },
      { icon: ShieldCheck, title: "Rapid experimentation to find and scale what works " },
    ],
  },
   {
    id: "development",
   
    description: "Real-time visibility, continuous improvement, and full-stack alignment-built into the Pod.  ",
    items: [
      { icon: ShieldCheck, title: "Shared dashboards + weekly retrospectives   " },
      { icon: ShieldCheck, title: "AI-augmented performance summaries  " },
      { icon: ShieldCheck, title: "Tight feedback loops across strategy and execution   " },
      { icon: ShieldCheck, title: "Shared KPIs, shared Slack, shared wins    " },
    ],
  },
];


  // FAQ List
  const faqs = [
    {
      q: " What’s included in a Growth Marketing Pod?",
      a: " Your core team typically includes Strategist, SEO/PPC lead, Automation pro, Copywriter, Designer-plugged into your stack. ",
    },
    {
      q: "How is this different from a typical agency model? ",
      a: "Traditional agencies focus on deliverables; Pods focus on outcomes. You get an agile team, integrated into your tools and channels, executing weekly sprints-not static monthly plans.",
    },
    {
      q: "Can Pods support multiple channels at once?",
      a: " Yes. Your Pod is built to execute across paid, SEO, email, web, and social-with prioritization driven by growth opportunities and your goals. ",
    },
    {
      q: "Do I need to change my current tools?",
      a: "Nope. We plug into your CRM, MAP, and analytics stack-no workflow disruption. ",
    },
    {
      q: "How fast can we launch?",
      a: "Timelines vary based on your readiness and goals. Most brands kick off execution within 2–3 weeks after onboarding and roadmap alignment. ",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="growthMarketingPod" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="Fast-Track Growth with AI-Optimized Marketing Pods. Built for Speed, Powered by Experts."
         
          subtext="Plug into a full-stack team where AI sharpens the strategy-and humans make it happen fast."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/strategic%20services%20hero%20banner%20/Growth%20marketing%20pod.webp"
        />

        {/* Statistics Section */}
         <EditableStatSection
 
  title="You’re in good company-with brands that launch faster & grow smarter. "
  stats={[
    { label: "Full-funnel campaigns launched and scaled  ", value: "150+" },
    { label: "Avg CAC drop within 90 days of pod activation  ", value: "40+" },
    { label: "Clients re-engage within 6 months   ", value: "90%" },
          ]}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title=" What We Do with Growth Marketing Pods  "
          subtitle="We embed a full-stack team into your growth engine-AI-led, sprint-ready, always in sync. "
          tabs={tabs}
          features={features} 
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="See What Happens When Our Growth Pod Plugs In "
          body="A few real wins we’ve helped brands achieve with our Growth Marketing Pod. "
          subTabs={[]}
          resourcePostType="case-studies"
        />

        <LogoScroller
        heading="Brands That Scaled with Our Growth Marketing Pod "
        subtext="From startups to enterprises-we helped them grow faster, smarter, and leaner. "
        
      />

        {/* Testimonials */}
        <Testimonials
          title=" Brands That Let Our Growth Pod In   "
          description=" And walked out with smarter execution, better ROI & fewer marketing headaches.   "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

         {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Blog posts, guides, and AI insights straight from our Growth Marketing brain trust. "
  perPage={6}
  firstN={4}
  contentType="blogs"
  resourceType="38"
/>

        {/* Call to Action */}
        <ContactCta
          heading="Ready to Activate Your Growth Pod? "
          subtext="Connect with a team built for fast starts and smarter scale-without the usual wait time."
          buttonLabel="Talk to a Pod Strategist "
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
