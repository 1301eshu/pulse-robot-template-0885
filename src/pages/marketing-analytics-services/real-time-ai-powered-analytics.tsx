// Migrated from /services/RealTimeAIPoweredAnalytics.tsx

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

export default function RealTimeAIPoweredAnalytics() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

 // Tab Items
 const tabs: TabItem[] = [
  {
    id: "marketing",
    label: "Behavioral Tracking & Live Funnel Monitoring    ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Real-Time%20%20AI-Powered%20Analytics%20/Behavioral%20Tracking%20&%20Live%20Funnel%20Monitoring%20%20%20%20.webp", // replace with actual
  },
  {
    id: "analytics",
    label: "AI-Driven Predictive Modeling  ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Real-Time%20%20AI-Powered%20Analytics%20/AI%20Driven%20Predictive%20Modeling.webp",
  },
  {
    id: "integration",
    label: "Prescriptive Analytics & Smart Recommendations   ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Real-Time%20%20AI-Powered%20Analytics%20/Prescriptive%20Analytics%20&%20Smart%20Recommendations.webp",
  },
  {
    id: "security",
    label: "Real-Time Attribution & Campaign Tracking    ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Real-Time%20%20AI-Powered%20Analytics%20/Real-Time%20Attribution%20&%20Campaign%20Tracking.webp",
  },
    {
    id: "development",
    label: "Operational Intelligence Dashboards     ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Real-Time%20%20AI-Powered%20Analytics%20/Operational%20intelligence%20Dashboards.webp",
  },
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
  
    description: "See what users are doing right now-not last week.   ",
    items: [
      { icon: Zap, title: "Capture product usage, campaign interactions, and buyer journeys in real time   " },
      { icon: Zap, title: "Auto-surface anomalies: drop-offs, surges, blockers   " },
      { icon: Zap, title: "Watch funnels evolve live-no refresh required    " },
    ],
  },
  {
    id: "analytics",
   
    description: "Know what’s coming-before your team even asks.  ",
    items: [
      { icon: BarChart2, title: "Predict churn, conversion, retention, LTV, and campaign performance   " },
      { icon: BarChart2, title: "Trained on historical and live data to surface forward-looking insights  " },
      { icon: BarChart2, title: "Alerts when metrics drift from expected paths    " },
    ],
  },
  {
    id: "integration",
   
    description: "We don’t just tell you what happened-we tell you what to do next.   ",
    items: [
      { icon: Database, title: "AI generates optimization plays across GTM levers " },
      { icon: Database, title: "CRO, ROAS, and funnel tactics predicted based on behavioral trends    " },
      { icon: Database, title: "Integrated with dashboards, Slack, and workflows  " },
    ],
  },
  {
    id: "security",
   
    description: "From ad click to purchase-know what’s working now.   ",
    items: [
      { icon: ShieldCheck, title: "Multi-touch attribution models, updated as user journeys unfold   " },
      { icon: ShieldCheck, title: "Identify top-performing creatives, channels, and offers on the fly    " },
      { icon: ShieldCheck, title: "AI flags saturation and suggests budget shifts   " },
    ],
  },
   {
    id: "development",
   
    description: "Keep your business pulse at your fingertips, always.   ",
    items: [
      { icon: ShieldCheck, title: "Exec dashboards that reflect live ops, sales, and CX trends  " },
      { icon: ShieldCheck, title: "AI detects red flags (like missed SLAs, rising support time, MRR dips)    " },
      { icon: ShieldCheck, title: "Custom alerts routed to the right owners instantly   " },
    ],
  },
];


  // FAQ List
  const faqs = [
    {
      q: "What platforms do you use for real-time analytics? ",
      a: "Mixpanel, GA4, Amplitude, Looker, Snowflake, AEP, and others. Plus we layer in custom ML models and integrations with your GTM stack.  ",
    },
    {
      q: " How does the AI layer actually work",
      a: "We train models on your historical + live data to generate predictive and prescriptive insights. Think “forecasting + optimization” in one.",
    },
    {
      q: "Can we get alerts inside Slack or Teams? ",
      a: "Yes. We’ll build smart alerting workflows with live thresholds and role-based triggers.",
    },
    {
      q: "How fast can this be deployed? ",
      a: "Initial insights in 1–2 weeks. Full system rollouts within 4–6 weeks depending on data maturity. ",
    },
  ];
  
  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="realTimeAiPoweredAnalytics" />
      <Header />
       <SmartBreadcrumb />
      <main className="pt-0">
        {/* HERO Section */}
        <HeroSection
          heading="Real-Time, AI-Powered Analytics That See the Shift Before You Do "
          subtext="Turn high-volume data into decisions instantly. Embedded AI does the thinking, so you don’t have to."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Anaytics%20as%20a%20service%20L2%20banner/Real%20time%20Ai%20Powered%20Analytics.webp"
        />

        {/* Statistics Section */}
        <EditableStatSection
 
  title="Analytics that don’t just react-they predict and prescribe.  "
  stats={[
    { label: "Lag between behavior & insight  ", value: "0 " },
    { label: " Accuracy rate for predictive trend models ", value: "87%  " },
    { label: " Faster decision-making cycle post-implementation", value: "10x  " },
  //  { label: " Automation of manual reporting tasks ", value: "65%" },
  ]}
/>

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="What We Do with Real-Time & AI-Powered Analytics "
          subtitle="We help you act faster, forecast smarter, and find meaning in motion-not just static reports. "
          tabs={tabs}
          features={features} 
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading=" What Happens When Data Gets Fast (and Smart)    "
          body=" These brands stopped reacting-and started outperforming. "
           subTabs={[]} // no subtabs on this page
          resourcePostType="case-studies"
        />

         <LogoScroller
        heading="Chosen by Teams That Lead With Data & Act With Speed"
        subtext=" From marketing ops to product teams-real-time insight powers everything.  "
       
      />

        {/* Testimonials */}
        <Testimonials
          title=" Real-Time Impact, Real Business Wins.     "
          description=" Our clients don’t guess anymore-they know, instantly.   "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

          {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body="  Sharp reads on smart decisions, automation, and real-time everything.   "
  perPage={6}
  firstN={4}
  contentType="blogs"
  resourceType="12"
/>

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Get You From Data Lag to First-Mover Advantage  "
          subtext="AI-powered insight. Real-time speed. Business clarity-on tap.     "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
