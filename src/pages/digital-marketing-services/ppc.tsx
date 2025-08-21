
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
    label: "Google Ads ",
    icon: Zap,
    image: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Digital%20Marketing/Pay%20Per%20Click%20Ppc%20Advertising/Google%20Ads.webp", // replace with actual
   ctaText: "Read More",
     ctaLink: "/digital-marketing-services/ppc/google-ads/"
  },
  {
    id: "analytics",
    label: "Meta (Facebook + Instagram) Ads ",
    icon: BarChart2,
    image: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Digital%20Marketing/Pay%20Per%20Click%20Ppc%20Advertising/Meta%20Ads%20(Facebook,%20Instagram,%20WhatsApp,%20Threads).webp",
   ctaText: "Read more",
    ctaLink: "/digital-marketing-services/ppc/meta-ads/"
  },
  {
    id: "integration",
    label: "LinkedIn Ads",
    icon: Database,
    image: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Digital%20Marketing/Pay%20Per%20Click%20Ppc%20Advertising/Linkedin%20Ads.webp",
   ctaText: "Read More",
   ctaLink: "/digital-marketing-services/ppc/linkedin-ads/"
  },
  {
    id: "security",
    label: "YouTube Ads ",
    icon: ShieldCheck,
    image: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Digital%20Marketing/Pay%20Per%20Click%20Ppc%20Advertising/YouTube%20Ads.webp",
   // ctaText: "Get a Demo",
   // ctaLink: "/l3-template"
  },
   {
    id: "development",
    label: "AI-Optimized Performance Tracking ",
    icon: ShieldCheck,
    image: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Digital%20Marketing/Pay%20Per%20Click%20Ppc%20Advertising/Campaign%20Management.webp",
  //   ctaText: "Get a Demo",
  //  ctaLink: "/l3-template"
  },
    
   
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
   
    description: "Own intent and be the top result when prospects are ready to act. ",
    items: [
      { icon: Zap, title: "AI-powered keyword targeting and budget pacing " },
      { icon: Zap, title: "Search, Performance Max, and YouTube campaigns built for ROI  " },
      { icon: Zap, title: "Conversion tracking setup with GA4 and enhanced attribution  " },
    ],
  },
  {
    id: "analytics",
   
    description: "Get seen. Get clicked. Get customers. Meta ads that scale fast and smart. ",
    items: [
      { icon: BarChart2, title: "AI-generated ad variants for A/B testing at scale   " },
      { icon: BarChart2, title: "Full-funnel campaigns across feed, stories, and reels  " },
      { icon: BarChart2, title: "Retargeting powered by first-party + pixel data  " },
    ],
  },
  {
    id: "integration",
   
    description: "Win in the boardroom with B2B ad strategies that convert decision-makers. ",
    items: [
      { icon: Database, title: "Sponsored content, lead gen forms, and InMail sequences  " },
      { icon: Database, title: "Targeting by job title, industry, intent signals, and more " },
      { icon: Database, title: "AI-personalized creative for every stage of the buyer journey   " },
    ],
  },
  {
    id: "security",
   
    description: "Stop the scroll with skippable and bumper ads built for storytelling. ",
    items: [
      { icon: ShieldCheck, title: "Attention-grabbing intros and hook-first formats   " },
      { icon: ShieldCheck, title: "Audience layering for high-intent views " },
      { icon: ShieldCheck, title: "AI performance insights for rapid creative optimization  " },
    ],
  },
   {
    id: "development",
   
    description: "Move from metrics to meaningful results, automatically. ",
    items: [
      { icon: ShieldCheck, title: "Predictive budget allocation and bidding recommendations  " },
      { icon: ShieldCheck, title: "Automated anomaly detection in ad performance " },
      { icon: ShieldCheck, title: "Unified dashboards combining Google, Meta, LinkedIn, GA4, and CRM  " },
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
      q: "Do you manage both search and display campaigns? ",
      a: "Yes. We specialize in Google Search, Display, Shopping, and Performance Max, as well as Meta, LinkedIn, and YouTube campaigns. ",
    },
    {
      q: "How do you track conversions and ROI? ",
      a: "We integrate GA4, Meta Pixel, LinkedIn Insight Tag, and use AI-based attribution models to surface what’s really driving results. ",
    },
    {
      q: "Do you create the ad creatives too?  ",
      a: " Absolutely. Our creative team builds platform-optimized static, video, carousel, and story ads, backed by insights on what converts. ",
    },
    {
      q: " Can you work with our existing CRM or lead flow?",
      a: "100%. We sync campaigns with CRMs like Salesforce, HubSpot, and Zoho to close the loop between ad spend and real business outcomes. ",
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
          heading=" PPC Advertising That’s Fast, Focused, and Fueled by AI"
         
          subtext="Drive qualified traffic, convert with precision and grow across Google, Meta & more."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/digital%20marketing%20hero%20banners/ppc.webp"
        />

        {/* Statistics Section */}
         <EditableStatSection
 
  title="When every click counts, growth-driven brands trust us with their ad dollars. "
  stats={[
    { label: "Managed ad spend across platforms annually  ", value: "$20M+" },
    { label: "Faster optimization cycles powered by AI automations", value: "65%" },
    { label: "Avg. ROAS across Google and Meta campaigns ", value: "4.7X" },
          ]}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title=" AI-Backed PPC Campaigns That Capture Demand & Scale Fast  "
          subtitle="From search to social, we build performance campaigns that convert faster & smarter "
          tabs={tabs}
          features={features} 
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="See How AI-Powered PPC Became a Revenue Engine "
          body="Brands we’ve helped crush goals and win with smart paid campaigns  "
          subTabs={[]}
          resources={recentResources}
        />

        <LogoScroller
        heading="Trusted By Brands That Bet on PPC Performance "
        subtext=" From scaling startups to enterprise leaders—we build ad engines that deliver."
        
      />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real Growth with PPC   "
          description="Where ad science meets creative magic, strategy & a hint of AI, results follow.   "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

         {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Stay updated with the tips, tactics, resources and insights to outsmart the algorithm and your competitors.  "
  perPage={6}
  firstN={4}
  contentType="blogs"
/>

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Turn Your Ad Spend into Substantial Returns "
          subtext="Build a performance engine that runs smarter, every hour, on every platform. "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
// Copied from /services/pay-per-click-ppc-advertising.tsx
// ...existing code from /services/pay-per-click-ppc-advertising.tsx...
