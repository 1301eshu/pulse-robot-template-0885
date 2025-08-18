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
    label: "Strategy + Planning ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Slider%20L1/Strategy%20Planning%20.webp", // replace with actual
  //  ctaText: "Get a Demo",
  //  ctaLink: "/l3-template"
  
  },
  {
    id: "analytics",
    label: "Creation (Web, Blog, SEO) ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Slider%20L1/Creation.webp",
  //   ctaText: "Get a Demo",
  //  ctaLink: "/l3-template"
  },
  {
    id: "integration",
    label: "Email + Lifecycle Content ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Slider%20L1/Email.webp",
 //    ctaText: "Get a Demo",
  //  ctaLink: "/l3-template"
  },
  {
    id: "security",
    label: "Thought Leadership + Ghostwriting",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Slider%20L1/Ghostwriting%20.webp",
 //    ctaText: "Get a Demo",
 //   ctaLink: "/l3-template"
  },
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
  
    
    items: [
      { icon: Zap, title: "AI-powered topic and keyword mapping " },
      { icon: Zap, title: "Content audits with actual next steps  " },
      { icon: Zap, title: "Editorial calendars that go-live on time " },
    ],
  },
  {
    id: "analytics",
  
   
    items: [
      { icon: BarChart2, title: "SEO content that humans love and Google notices  " },
      { icon: BarChart2, title: "LLM-assisted drafts, zero-fluff edits " },
      { icon: BarChart2, title: "Cluster-first, conversion-always  " },
    ],
  },
  {
    id: "integration",
  
    
    items: [
      { icon: Database, title: "Smart drips that sound human, not robotic " },
      { icon: Database, title: "Personalization that doesn’t creep " },
      { icon: Database, title: "CTAs that convert without begging " },
    ],
  },
  {
    id: "security",
 
    
    items: [
      { icon: ShieldCheck, title: "Ghostwritten brilliance, still 100% “you”  " },
      { icon: ShieldCheck, title: "Executive POVs with strategic teeth " },
      { icon: ShieldCheck, title: "Scripts, articles, posts—they’ll read it, we swear  " },
    ],
  },
];

  // Platform Feature Cards
  const platformFeatures = [
    {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Icons%20L1/Blog%20Posts.webp",
      title: " Blog Posts ",
      description: "SEO-smart and snackable—written for humans, optimized for AEO. ",
       ctaUrl: "#",
    },
    {
     icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Icons%20L1/articles.webp",
      title: "Articles",
      description: "Authority pieces with edge, POV, and high-share potential. ",
       ctaUrl: "#",
    },
    {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Icons%20L1/Ebooks%20white%20paper.webp",
      title: "eBooks + Whitepapers ",
      description: "Deep dives that don’t drown readers in jargon. ",
       ctaUrl: "#",
      useBoxedImage: false
    },
    {
     icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Icons%20L1/Landing%20Pages.webp",
      title: "Landing Pages ",
      description: "Copy that scrolls fast, sells hard, and hits your CTA.",
       ctaUrl: "#",
    },
    {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Icons%20L1/social%20ad%20copywriting.webp",
      title: " Social + Ad Copywriting ",
      description: "From LinkedIn hooks to paid ad zingers—short, sharp, and scroll-stopping. ",
       ctaUrl: "#",
      useBoxedImage: false
    },
     {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Icons%20L1/email%20sequences.webp",
      title: " Email Sequences ",
      description: "Personalized, sharp, and timed to convert.  ",
        ctaUrl: "#",
      useBoxedImage: false
    },
     {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Icons%20L1/Video%20Podcast.webp",
      title: "  Video & Podcast Scripts ",
      description: "Written for the ear, not the page—clear, clever, and cuttable.  ",
        ctaUrl: "#",
      useBoxedImage: false
    },
     {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Icons%20L1/Thought%20Leadership.webp",
      title: " Thought Leadership  ",
      description: "Ghostwritten brilliance that sounds 100% “you”—only sharper.  ",
        ctaUrl: "#",
      useBoxedImage: false
    },
     {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Icons%20L1/Webinar%20Decks%20+%20Talk%20Track.webp",
      title: " Webinar Decks + Talk Track ",
      description: "Slides with style and speaker notes that sell the story.  ",
        ctaUrl: "#",
      useBoxedImage: false
    },
     {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Icons%20L1/Event%20Collateral.webp",
      title: "Event Collateral  ",
      description: "Booth copy, flyers, and leave-behinds people actually read ",
        ctaUrl: "#",
      useBoxedImage: false
    },
    {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Icons%20L1/Product%20GTechnical%20docs.webp",
      title: "Product + Technical Docs   ",
      description: "Complex ideas, cleanly explained—your PMs will thank you.  ",
       ctaUrl: "#",
      useBoxedImage: false
    },
    {
      icon: null,
      imageSrc: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Icons%20L1/sales%20Enablement%20Docs.webp",
      title: "Sales Enablement Docs  ",
      description: "Leave-behinds that don’t get left behind. ",
       ctaUrl: "#",
      useBoxedImage: false
    },
    
    
    
  ];

  // FAQ List
  const faqs = [
    {
      q: "Do I need to be using AI tools to work with you?",
      a: "Nope. We’ve got the ChatGPTs, Geminis, and workflows. You just bring the context and ambition. ",
    },
    {
      q: " What do I get in the content audit? ",
      a: "A quick teardown of what’s working, what’s missing, and one AI-generated content idea you’ll actually want to test. ",
    },
    {
      q: "Do you do full-funnel content or just top-of-funnel?",
      a: " All of it. From blogs and carousels to landing pages and nurture copy—we write for the whole journey.  ",
    },
    {
      q: " If you’re using AI, how do you keep it “me”? ",
      a: " Great question. Our prompts are brand-trained. Our humans are sharp. And our final drafts sound like you, just better. ",
    },
  ];
  
  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="contentMarketingServices" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="Content That Converts (Because Fluff Doesn’t Pay The Bills)"
        
          subtext="We use AI and LLMs to create high-performing content that drives pipeline, not just pageviews.  "
          bgImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Value%20Proposition%20/8302_gqqgrs%20(1).jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/726014.png"
        />

        {/* Statistics Section */}
        <EditableStatSection
 
  title="You’re in good company with brands that publish smart, rank fast, and never phone it "
  stats={[
    { label: "Boost in Organic Leads  ", value: "6.5x" },
    { label: "Faster Content Production ", value: "78%  " },
    { label: "Increase in Page Conversions  ", value: "3.2x  " },
  ]}
/>

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="Strategy-First, AI-Savvy, Built To Scale  "
          subtitle=" We turn scattered content into a system—with structure, voice, and results baked in.  "
          tabs={tabs}
          features={features} 
        />

        {/* Platform Feature Cards */}
        <section className="py-20 bg-white">
          <div className="section-wrapper">
            <div className="text-left mb-16 max-w-2xl">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
               We Make All The Things, Sing... 
              </h2>
              <p className="text-gray-600 mb-6">
               From blog posts to webinar scripts—if it needs writing, we’ve got it. 
              </p>
             
            </div>

            {/* Unified grid — no slices, no flex — clean 3-column layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {platformFeatures.map((card, idx) => (
        <FeatureCard key={idx} {...card} />
      ))}
    </div>
          </div>
        </section>

        <LogoScroller
        heading="Content That Pops —Backed by Brands Who Get It "
        subtext="They needed strategy, velocity, and voice. we gave them all three. "
        
      />

        {/* Testimonials */}
        <Testimonials
          title=" Real Stories, Real Design Wins  "
          description=" Our content doesn’t just look good—it performs even better.  "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* Call to Action */}
        <ContactCta
          heading=" Ready For Content That’s Sharp, Strategic, And Scales?"
          subtext="Let’s blend some copy magic with AI muscle and turn your ideas into high-converting content. "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}