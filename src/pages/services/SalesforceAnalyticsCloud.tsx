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
    label: "HubSpot Audit & Strategy",
    icon: Zap,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png", // replace with actual
    ctaText: "Get a Demo",
    ctaLink: "/l3-template"
    
  },
  {
    id: "analytics",
    label: "HubSpot Consulting & Implementation",
    icon: BarChart2,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png",
    ctaText: "Get a Demo",
    ctaLink: "/l3-template"
  },
  {
    id: "integration",
    label: "HubSpot Migrations & Integrations",
    icon: Database,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png",
    ctaText: "Get a Demo",
    ctaLink: "/l3-template"
  },
  {
    id: "security",
    label: "HubSpot Breeze Implementation & Training ",
    icon: ShieldCheck,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png",
    ctaText: "Get a Demo",
    ctaLink: "/l3-template"
  },
   {
    id: "development",
    label: "HubSpot Managed Services ",
    icon: ShieldCheck,
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png",
     ctaText: "Get a Demo",
    ctaLink: "/l3-template"
  },
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
   
    description: "Your automation, uncovered-what works, what’s waste, and what’s next.",
    items: [
      { icon: Zap, title: "Uncover what’s working-and what’s just noise  " },
      { icon: Zap, title: "Find gaps, quick wins, and untapped potential   " },
      { icon: Zap, title: "Build a smarter, tighter automation game plan  " },
    ],
  },
  {
    id: "analytics",
   
    description: "From strategy to setup, we make HubSpot bend to your business-not the other way around.  ",
    items: [
      { icon: BarChart2, title: "Tailored builds, not cookie-cutter setups   " },
      { icon: BarChart2, title: "We map goals → flows → flawless execution   " },
      { icon: BarChart2, title: "From kickoff to go-live, we’ve got this  " },
    ],
  },
  {
    id: "integration",
   
    description: "Shift your stack and sync your systems-without the chaos.  ",
    items: [
      { icon: Database, title: "Move to HubSpot without losing your mind (or data) " },
      { icon: Database, title: "Plug in tools, build bridges, and stay secure  " },
      { icon: Database, title: "From Marketo mayhem to HubSpot harmony-we got you  " },
    ],
  },
  {
    id: "security",
   
    description: "Train your AI wingman to hit every GTM note perfectly.",
    items: [
      { icon: ShieldCheck, title: "Train Breeze to support your GTM motion end-to-end   " },
      { icon: ShieldCheck, title: "Deploy AI-powered campaigns, content, and sales outreach  " },
      { icon: ShieldCheck, title: "Your team + AI, working like they’ve known each other forever  " },
    ],
  },
   {
    id: "development",
   
    description: "Consider us your always-on HubSpot pit crew-with an AI edge. ",
    items: [
      { icon: ShieldCheck, title: "Campaigns launched, workflows optimized-on repeat  " },
      { icon: ShieldCheck, title: "Weekly performance checks, monthly growth experiments  " },
      { icon: ShieldCheck, title: "AI tweaks and trend-based updates, so you’re never stale  " },
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
      q: "What's included in the free HubSpot audit?",
      a: " We deep-dive your workflows, CRM setup, email flows, lead scoring, and show you 3 AI-powered moves you're not using yet.",
    },
    {
      q: "Can you migrate us from another CRM?",
      a: "Yep. We've migrated clients from Salesforce, Zoho, Marketo-you name it.",
    },
    {
      q: "What HubSpot license do I need to work with you? ",
      a: " We work across Starter, Pro, and Enterprise. We'll help you scale smart based on your goals (and budget). ",
    },
    {
      q: "How long does onboarding take?",
      a: "Fast. Most clients are fully live in 3–4 weeks (and loving it).",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="HubSpot That Learns Fast, Sells Faster-with AI Inside"
         
          subtext="Smarter HubSpot campaigns that think, move, and convert on cue."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Hero_Section-L2-Banners/Salesforce%20Analytics%20Cloud.webp"
        />

        {/* Statistics Section */}
         <EditableStatSection
 
  title="You're in good company-with brands scaling smarter on HubSpot. "
  stats={[
    { label: "HubSpot automation builds and counting ", value: "80+" },
    { label: "Certified HubSpot pros on deck ", value: "40+" },
    { label: "Avg. jump in HubSpot efficiency post-implementation  ", value: "30%" },
          ]}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title=" What We Do with HubSpot "
          subtitle="We tune, train, and tailor your HubSpot instance with AI smarts for real results."
          tabs={tabs}
          features={features} 
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="See What Smart HubSpot Looks Like in Action "
          body="A few real wins we've helped brands achieve with HubSpot. "
          subTabs={[]}
          resources={recentResources}
        />

        <LogoScroller
        heading="Brands That Trust Our HubSpot Game"
        subtext="From lean teams to enterprise squads-we help them all move smarter."
        logos={[
         'https://res.cloudinary.com/dar70fhfi/image/upload/v1753178712/08-1_ayitcw.png',
          'https://res.cloudinary.com/dar70fhfi/image/upload/v1753178694/08_tspxen.png',
          'https://res.cloudinary.com/dar70fhfi/image/upload/v1753178689/07-1_c3ltqm.png',
          'https://res.cloudinary.com/dar70fhfi/image/upload/v1753178679/07_ztxk8q.png',
          'https://res.cloudinary.com/dar70fhfi/image/upload/v1753178672/06-1_drmi8h.png',
          'https://res.cloudinary.com/dar70fhfi/image/upload/v1753178659/06_dxrmxh.png',
          "https://res.cloudinary.com/dar70fhfi/image/upload/v1753178654/05-1_ps9kv8.png",
          "https://res.cloudinary.com/dar70fhfi/image/upload/v1753178649/05_sfqrlx.png",
          "https://res.cloudinary.com/dar70fhfi/image/upload/v1753178645/04-1_uyl39f.png",
          "https://res.cloudinary.com/dar70fhfi/image/upload/v1753178634/04_g8ydvu.png",
          "https://res.cloudinary.com/dar70fhfi/image/upload/v1753178628/03-1_gqbyyd.png",
          "https://res.cloudinary.com/dar70fhfi/image/upload/v1753178621/03_rksjpq.png",
          "https://res.cloudinary.com/dar70fhfi/image/upload/v1753178611/02-1_ervdew.png",
          "https://res.cloudinary.com/dar70fhfi/image/upload/v1753178604/02_fmevok.png",
          "https://res.cloudinary.com/dar70fhfi/image/upload/v1753178598/01-1_qkemfn.png",
          "https://res.cloudinary.com/dar70fhfi/image/upload/v1753178554/01_juvzlx.png",
        ]}
      />

        {/* Testimonials */}
        <Testimonials
          title=" Real Stories, Real HubSpot Growth  "
          description="It's not luck. It's systems, strategy, and a little AI swagger.  "
        />

        {/* FAQs */}
        <FaqSection title="FAQ's" faqs={faqs} />

         {/* Recent Resources Section */}
        <RecentResourcesSection
          heading=" More From Our Content Repertoire"
          body=" Keep your HubSpot IQ high with our freshest blog posts, guides, and AI hot takes. "
          subTabs={[]}
          resources={recentResources}
        />

        {/* Call to Action */}
        <ContactCta
          heading=" Let's Build Your AI-Powered HubSpot Engine"
          subtext="Real-time insights. Campaigns that adapt. Tech that works for you."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
