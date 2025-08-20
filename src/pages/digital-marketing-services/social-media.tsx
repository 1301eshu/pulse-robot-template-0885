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
    label: "LinkedIn Marketing  ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Social%20Media%20Marketing%20/Linkedin%20Marketing.webp",
   ctaText: "Read More",
     ctaLink: "/digital-marketing-services/social-media/linkedin-marketing/"
  },
  {
    id: "analytics",
    label: "X (formerly Twitter) Marketing  ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Social%20Media%20Marketing%20/X%20marketing.webp",
    ctaText: "Read More",
    ctaLink: "/digital-marketing-services/social-media/twitter-marketing/"
  },
  {
    id: "integration",
    label: "Instagram Marketing ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Social%20Media%20Marketing%20/Instagram%20Marketing.webp",
ctaText: "Read More",
 ctaLink: "/digital-marketing-services/social-media/instagram-marketing/"
  },
  {
    id: "security",
    label: "Facebook Marketing  ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Social%20Media%20Marketing%20/facebook%20marketing.webp",
   ctaText: "Read More",
    ctaLink: "/digital-marketing-services/social-media/meta-services/"
  },
   
   
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
   
    description: "Turn thought leadership into lead magnetism through strategic storytelling and content orchestration.   ",
    items: [
      { icon: Zap, title: "Ghostwritten leadership content powered by brand positioning + AI topic clustering  " },
      { icon: Zap, title: "Organic posting calendars tied to funnel stage and industry trends  " },
      { icon: Zap, title: "Audience mapping across employees, decision-makers, and engaged followers    " },
    ],
  },
  {
    id: "analytics",
   
    description: "Stay sharp, timely, and consistent in conversations that matter.  ",
    items: [
      { icon: BarChart2, title: "Strategic content planning based on trending topics and brand voice   " },
      { icon: BarChart2, title: "High-frequency posting strategies optimized for replies, retweets, and reach   " },
      { icon: BarChart2, title: "Brand-safe engagement tactics that balance relevance and tone " },
    ],
  },
  {
    id: "integration",
   
    description: "Move beyond the grid and build a brand narrative that lives in stories, reels, and DMs.   ",
    items: [
      { icon: Database, title: "Insights on content themes, post timing, and reel sequences   " },
      { icon: Database, title: "Strategic content buckets built for discovery, storytelling, and interaction  " },
      { icon: Database, title: "Consistent aesthetic and captioning frameworks optimized for saves and shares    " },
    ],
  },
  {
    id: "security",
   
    description: "Build a consistent presence that keeps communities informed, engaged, and growing.  ",
    items: [
      { icon: ShieldCheck, title: "Content planning rooted in audience behavior and brand goals   " },
      { icon: ShieldCheck, title: "Post formats tailored to Facebook algorithms (carousels, lives, FAQs, polls)   " },
      { icon: ShieldCheck, title: "Engagement loops with comment moderation and community nurturing  " },
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
      q: " Do you provide creative assets as part of the service? ",
      a: " Yes. From static posts and reels to carousels and ad videos, our creative team delivers performance-ready assets built for each platform.",
    },
    {
      q: "How do you track performance?",
      a: "We use a blend of native analytics (Meta, LinkedIn, etc.), GA4, and AI attribution tools to deliver transparent, real-time performance dashboards.",
    },
    {
      q: "Is this organic-only or do you manage ads too? ",
      a: " This service is focused entirely on organic social. If you need paid ads, we offer separate marketing services tailored for that. ",
    },
    {
      q: "Can you help with influencer or executive LinkedIn strategies? ",
      a: " Absolutely. We manage influencer partnerships, and build B2B leadership presence through ghostwritten content, engagement tactics, and audience building. ",
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
          heading="Social Media Marketing That’s AI-Smart and Strategy-First"
         
          subtext="Win attention, build traction, and translate scrolls into conversions, across every social channel. "
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Hero%20Section_L2_Bannera/SMM.webp"
        />

        {/* Statistics Section */}
         <EditableStatSection
 
  title="When results matter, brands choose us to lead their social charge.  "
  stats={[
    { label: "Brands supported with end-to-end social strategy and execution  ", value: "40+" },
    { label: "Executive and brand handles managed across platforms ", value: "50+" },
    { label: "Faster turnarounds via AI-assisted content workflows ", value: "30%" },
          ]}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="  AI-Led Social Media Marketing Backed by a Proven Content Framework "
          subtitle="From trend detection to post timing, we plan it smartly and do it flawlessly, so your content reaches where it should. "
          tabs={tabs}
          features={features} 
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="See How AI-Led Social Strategy Turned Followers into Funnels  "
          body="Stay ahead with AI-powered tips, blog posts SMM tactics, and other resources from the experts. "
          subTabs={[]}
          resources={recentResources}
        />

        <LogoScroller
        heading="Trusted by Social-First, Growth-Obsessed Brands "
        subtext=" From startups to enterprises, our social expertise scales with ambition. "
        
      />

        {/* Testimonials */}
        <Testimonials
          title="Social That’s Planned, Posted, and Performing  "
          description=" When strategic content & creative velocity come together, growth unlocks.  "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

          {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Stay ahead with AI-powered tips, blog posts SMM tactics, and other resources from the experts.  "
  perPage={6}
  firstN={4}
  contentType="blogs"
/>

        {/* Call to Action */}
        <ContactCta
          heading=" Let’s Make Social Your Strongest Channel "
          subtext="Build a social engine that works 24/7 for your brand. "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
