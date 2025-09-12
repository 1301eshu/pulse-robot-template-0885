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
    label: "Adobe Analytics ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Web%20Analytics/Adobe%20Analytics.webp", // replace with actual
  ctaText: "Read More",
  ctaLink: "L3/adobe-analytics"
    
  },
  {
    id: "analytics",
    label: "Google Analytics ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Web%20Analytics/Google%20Analytics.webp",
   ctaText: "Read More",
    ctaLink: "L3/google-analytics"
  },
  {
    id: "integration",
    label: "Matamo Analytics ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Web%20Analytics/Matamo%20Analytics.webp",
 ctaText: "Read More",
ctaLink: "L3/matomo"
  },
  {
    id: "security",
    label: "Piwik Pro  ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Web%20Analytics/Piwik%20Pro.webp",
  ctaText: "Read More",
   ctaLink: "L3/piwik"
  },
    {
    id: "development",
    label: "Parallel Tracking   ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Web%20Analytics/Parallel%20Tracking.webp",
    ctaText: "Read More",
 ctaLink: "L3/GA4"
  },
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
  
    description: "Turn raw data into sharp insights with clean tracking, smart dashboards, and targeted segmentation.  ",
    items: [
      { icon: Zap, title: "Capture critical data aligned with your goals.  " },
      { icon: Zap, title: "Design dashboards that make data easy to digest.  " },
      { icon: Zap, title: "Segment your audience for laser-focused targeting. " },
    ],
  },
  {
    id: "analytics",
   
    description: "Let us fine-tune GA to your goals and surface the insights that actually move the needle. ",
    items: [
      { icon: BarChart2, title: "Google Analytics set up, no room for error.   " },
      { icon: BarChart2, title: "Dashboards that make your data shine.   " },
      { icon: BarChart2, title: "Track conversions like a performance review.   " },
    ],
  },
  {
    id: "integration",
   
    description: "No noise or clutter-just a clean, customized setup built around what you really want to track.  ",
    items: [
      { icon: Database, title: "Seamless Matomo integration, no tech headaches.  " },
      { icon: Database, title: "Customize Matomo to track what truly counts.  " },
      { icon: Database, title: "Train your team to master Matomo’s magic.  " },
    ],
  },
  {
    id: "security",
   
    description: "Data privacy, audience behavior, heatmaps-we bring it all together under one powerful, secure hood. ",
    items: [
      { icon: ShieldCheck, title: "Piwik PRO, built exactly for your business.  " },
      { icon: ShieldCheck, title: "Data protection? We’ve got it locked down.  " },
      { icon: ShieldCheck, title: "Heatmaps and reports that uncover hidden gems.  " },
    ],
  },
   {
    id: "development",
   
    description: "We make sure no event gets left behind, giving you the full, unsampled story your business deserves. ",
    items: [
      { icon: ShieldCheck, title: "Bypass GA4 limits with seamless event tracking   " },
      { icon: ShieldCheck, title: "Get 100% real-time, unsampled user data   " },
      { icon: ShieldCheck, title: "Merge cross-platform data into one view   " },
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
      q: " How are your web analytics services different from a basic setup? ",
      a: "We go beyond code drops-think smart tracking, tailored segments, and dashboards that actually make sense.",
    },
    {
      q: "Can you help us make sense of messy data?",
      a: " Totally. We clean the chaos and turn your data dump into crystal-clear, click-worthy insights.",
    },
    {
      q: "What if we use multiple tools like GA, Matomo, Adobe? ",
      a: "No sweat. We sync it all up and give you one slick view that tells the full story.  ",
    },
    {
      q: "Do we need to be data nerds to use your dashboards?",
      a: "Nope. They're built for humans-clean, visual, and zero jargon guaranteed. ",
    },
  ];
  
  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="webAnalytics" />
      <Header />
      <SmartBreadcrumb />
      <main className="pt-00">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Powered Web Analytics That Turn User Behavior into Business Wins"
          subtext="Tap into user behavior and light up the path from browse to buy.  "
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Hero%20Section_L2_Bannera/web%20analytics.webp"
        />

        {/* Statistics Section */}
        <EditableStatSection
 
  title="You’re in sharp company-brands decoding data and growing bolder. "
  stats={[
    { label: "Certified Web Analytics geniuses  ", value: "30+" },
    { label: " Custom reports generated ", value: "500+" },
    { label: "Sites optimized  ", value: "100+" },
    { label: " Data pipelines set up, end to end  ", value: "150+" },
  ]}
/>

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title=" How We Make Web Analytics Work Like Charm "
          subtitle=" We turn scattered signals into sharp, sales-worthy insights, powered by AI. "
          tabs={tabs}
          features={features} 
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="See What Smart Web Analytics Looks Like in Action  "
          body=" A glimpse at how we’ve helped brands turn raw traffic into real traction. "
           subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

         <LogoScroller
        heading="Brands That Bank on Our Web Analytics Mojo  "
        subtext=" From hustle mode to hyper-scale-we help them read between the clicks. "
        
      />

        {/* Testimonials */}
        <Testimonials
          title="  Real Stories. Real Web Analytics Wins.   "
          description=" Powered by AI, a lot of strategy, skill & insights that don’t sleep.  "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

          {/* Recent Resources Section */}
        <RecentResourcesSection
          heading=" More From Our Content Repertoire  "
          body=" Keep your analytics edge sharp with our newest guides, blog posts, and AI-powered insights. "
           subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Build Your AI-Powered Analytics Engine"
          subtext="Smarter data, sharper decisions, faster growth-let’s make it happen.  "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
