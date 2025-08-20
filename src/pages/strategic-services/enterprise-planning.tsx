// Copied from /services/EnterprisePlanning.tsx

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
    label: "Enterprise Strategy Mapping  ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Enterprise%20Planning%20/Enterprise%20Strategy%20Mapping.webp", // replace with actual
    //ctaText: "Get a Demo",
    // ctaLink: "/l3-template"
  },
  {
    id: "analytics",
    label: "Cross-Functional GTM Planning  ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Enterprise%20Planning%20/Cross-Functional%20GTM%20Planning.webp",
   // ctaText: "Get a Demo",
   // ctaLink: "/l3-template"
  },
  {
    id: "integration",
    label: "AI-Enhanced Decision Support ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Enterprise%20Planning%20/Al-Enhanced%20Decision%20Support.webp",
  //  ctaText: "Get a Demo",
   // ctaLink: "/l3-template"
  },
  {
    id: "security",
    label: "Performance Frameworks & Reporting  ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Enterprise%20Planning%20/Performance%20Frameworks%20&%20Reporting.webp",
   // ctaText: "Get a Demo",
   // ctaLink: "/l3-template"
  },
   {
    id: "development",
    label: "Change Enablement & Internal Rollout ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Strategic%20Services/Enterprise%20Planning%20/Change%20Enablement%20&%20Internal%20Rollout.webp",
  //   ctaText: "Get a Demo",
  //  ctaLink: "/l3-template"
  },
     
   
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
   
    description: "Your business goals translated into executable blueprints.  ",
    items: [
      { icon: Zap, title: "Align vision, OKRs, and functional strategies  " },
      { icon: Zap, title: "Identify high-impact growth initiatives using AI analysis  " },
      { icon: Zap, title: "Build a phased, data-backed execution roadmap  " },
    ],
  },
  {
    id: "analytics",
   
    description: "Where marketing, sales, and ops finally speak the same language. ",
    items: [
      { icon: BarChart2, title: "Unified GTM motion across departments    " },
      { icon: BarChart2, title: "Role-based workstreams mapped to GTM priorities   " },
      { icon: BarChart2, title: "Weekly sync rhythms built for momentum, not meetings " },
    ],
  },
  {
    id: "integration",
   
    description: "Cut through complexity with data-backed clarity.  ",
    items: [
      { icon: Database, title: "Predictive scenario modeling for confident decisions   " },
      { icon: Database, title: "AI-generated insights from historical performance & market signals  " },
      { icon: Database, title: "Prioritization engines that align teams around what matters most   " },
    ],
  },
  {
    id: "security",
   
    description: "Plans mean nothing without measurement. We build systems that track what matters. ",
    items: [
      { icon: ShieldCheck, title: "Real-time KPI dashboards tied to strategic objectives " },
      { icon: ShieldCheck, title: "Shared visibility across leadership and teams  " },
      { icon: ShieldCheck, title: "Feedback loops that adapt plans as market realities shift" },
    ],
  },
   {
    id: "development",
   
    description: "Your team doesn’t just need a plan. They need to believe in it.   ",
    items: [
      { icon: ShieldCheck, title: "Change communication plans & org rollout playbooks   " },
      { icon: ShieldCheck, title: "Enablement assets for managers & team leads  " },
      { icon: ShieldCheck, title: "Ongoing workshops, syncs & feedback systems   " },
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
      q: " Who is Strategic Organizational Planning for? ",
      a: " For companies with aggressive growth, GTM complexity, or siloed execution. If you’re stuck in PowerPoints and misalignment, this is for you.",
    },
    {
      q: "What makes your planning process different? ",
      a: " We combine expert facilitation, purpose-built AI, and real-time collaboration tools to help you go from chaos to coordinated execution in weeks—not quarters.",
    },
    {
      q: "What happens after planning?  ",
      a: " Your Pod doesn’t disappear. We stay on to ensure execution follows strategy—translating plans into sprints, dashboards, and real impact. ",
    },
    {
      q: " Do you only work with tech companies? ",
      a: " Not at all. We’ve helped manufacturers, services firms, healthcare providers, and global retailers.",
    },
    {
      q: " How does AI actually help? ",
      a: " It streamlines analysis, identifies gaps, and helps prioritize better—faster. We blend AI + human insight.",
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
          heading=" Your Strategic Business Plan, Broken Down by AI Into What to Do Next"
         
          subtext=" From GTM to org-wide transformation, we help you design and deploy plans that don’t gather dust.  "
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://res.cloudinary.com/dar70fhfi/image/upload/v1753086148/image_1_qverlt.png"
        />

        {/* Statistics Section */}
         <EditableStatSection
 
  title="You’re in good company—with brands planning smarter, executing faster. "
  stats={[
    { label: "Strategic planning initiatives launched across verticals  ", value: "90+" },
    { label: "Average acceleration in GTM execution velocity  ", value: "35%" },
    { label: "Functional heads aligned through AI-powered planning frameworks   ", value: "50+" },
          ]}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title=" What We Do with Strategic Organizational Planning "
          subtitle="We help growth-stage and enterprise teams' action smarter plans—by turning goals into AI-prioritized sprints, executed by a cross-functional pod. "
          tabs={tabs}
          features={features} 
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="See What AI-Powered Strategic Organizational Planning Looks Like in Action  "
          body="A few transformations we’ve helped architect across industries. "
          subTabs={[]}
          resources={recentResources}
        />

        <LogoScroller
        heading="Brands That Count on Our Strategic Planning "
        subtext="From high-growth startups to global enterprises, our plans help teams move with clarity. "
        
      />

        {/* Testimonials */}
        <Testimonials
          title=" What Enterprises Say After Rebuilding Their Planning with Us  "
          description=" AI-backed planning turned the chaos of growth into structured, scalable wins.  "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

         {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Fresh guides, strategic tools, and AI-powered insights to upgrade how you plan. "
  perPage={6}
  firstN={4}
  contentType="blogs"
/>

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Build a Strategic Plan That Knows What’s Next "
          subtext=" Get the AI insights, strategy frameworks, and execution systems to align teams—and actually hit your targets. "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
