// Migrated from /services/WebAnalytics.tsx

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

export default function WebAnalytics() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

 // Tab Items
 const tabs: TabItem[] = [
  {
    id: "marketing",
    label: "Adobe Analytics ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Web%20Analytics/Adobe%20Analytics.webp", // replace with actual
  ctaText: "Read More",
  ctaLink: "/marketing-analytics-services/web-analytics/adobe-analytics/"
    
  },
  {
    id: "analytics",
    label: "Google Analytics ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Web%20Analytics/Google%20Analytics.webp",
   ctaText: "Read More",
    ctaLink: "/marketing-analytics-services/web-analytics/google-analytics/"
  },
  {
    id: "integration",
    label: "Matamo Analytics ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Web%20Analytics/Matamo%20Analytics.webp",
 ctaText: "Read More",
ctaLink: "/marketing-analytics-services/web-analytics/matomo/"
  },
  {
    id: "security",
    label: "Piwik Pro  ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Web%20Analytics/Piwik%20Pro.webp",
  ctaText: "Read More",
   ctaLink: "/marketing-analytics-services/web-analytics/piwik-pro/"
  },
    {
    id: "development",
    label: "Parallel Tracking   ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Web%20Analytics/Parallel%20Tracking.webp",
    ctaText: "Read More",
 ctaLink: "/marketing-analytics-services/web-analytics/ga4-parallel-tracking/"
  },
    {
    id: "adobe",
    label: "Adobe Experience Platform (AEP) Web SDK Migration   ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/analytics-as-a-service/Web%20Analytics/Parallel%20Tracking.webp",
   // ctaText: "Read More",
// ctaLink: "/marketing-analytics-services/web-analytics/ga4-parallel-tracking/"
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
  {
    id: "adobe",
   
    description: "Modernize your data collection with a single, streamlined SDK built for speed & future-ready marketing.  ",
    items: [
      { icon: ShieldCheck, title: "Collect better data, faster with AEP Web SDK    " },
      { icon: ShieldCheck, title: "Drop legacy tags, gain agility  " },
      { icon: ShieldCheck, title: "Faster pages, smarter insights, stronger ROI  " },
    ],
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
    { label: "Certified Web Analytics specialists on deck ", value: "30+" },
    { label: " Custom dashboards & reports built ", value: "500+" },
    { label: "Sites optimized  ", value: "100+" },
 //   { label: " Data pipelines set up, end to end  ", value: "150+" },
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
          resourcePostType="case-studies"
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

          {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Keep your analytics edge sharp with our newest guides, blog posts, and AI-powered insights."
  perPage={6}
  firstN={4}
  contentType="blogs"
  resourceType="195"
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
