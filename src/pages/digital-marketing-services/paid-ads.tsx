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

export default function PaidAds() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items (Paid Ads Services)
  const tabs: TabItem[] = [
    {
      id: "google",
      label: "Google Ads",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Paid%20Ads/Google%20Ads.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "meta",
      label: "Meta Ads (Facebook, Instagram, WhatsApp, Threads)",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Paid%20Ads/Meta%20Ads%20(Facebook,%20Instagram,%20WhatsApp,%20Threads).webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "linkedin",
      label: "LinkedIn Ads",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Paid%20Ads/LinkedIn%20Ads.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "adobe",
      label: "Adobe Ad Cloud & Bing Ads",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Paid%20Ads/Adobe%20Ad%20Cloud%20&%20Bing%20Ads.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "x",
      label: "X Ads",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Paid%20Ads/X%20Ads.webp",
      ctaText: "",
      ctaLink: ""
    },
  ];

  // Features (Paid Ads features content)
  const features: FeatureContent[] = [
    {
      id: "google",
      description: "Google knows everything. We just make sure it knows you. With ads that convert, and never overspend, we turn the world’s biggest search engine into your fan.",
      items: [
        { icon: Zap, title: "Ads so targeted, your wallet will thank you" },
        { icon: Zap, title: "Copy that clicks. No boring ads allowed" },
        { icon: Zap, title: "Budget hacks that make every cent count" },
      ],
    },
    {
      id: "meta",
      description: "We make Meta ads irresistible. Whether it’s a scroll on Threads, a swipe on Instagram, or a tap on WhatsApp, we’re in all the right places with all the right moves.",
      items: [
        { icon: BarChart2, title: "Meta ads that scroll, stop, and sell" },
        { icon: BarChart2, title: "One ad to rule all Meta realms" },
        { icon: BarChart2, title: "Insights that don’t make you squint." },
      ],
    },
    {
      id: "linkedin",
      description: "Boardroom-ready campaigns that speak the language of decision-makers.",
      items: [
        { icon: Database, title: "Ads built for C-suites, buyers, and industry insiders" },
        { icon: Database, title: "Laser-focused targeting by role, company, and interest" },
        { icon: Database, title: "Turn attention into action and leads that matter" },
      ],
    },
    {
      id: "adobe",
      description: "Not your usual ad suspects, but they pull weight. Adobe brings the polish, Bing brings the reach, we bring the results.",
      items: [
        { icon: ShieldCheck, title: "Adobe ads crafted to catch eyes and wallets." },
        { icon: ShieldCheck, title: "Messaging that hooks, reels in & converts fast." },
        { icon: ShieldCheck, title: "Bing ads that reach beyond Google and bring serious clicks." },
      ],
    },
    {
      id: "x",
      description: "Relevant and built for scroll-stopping impact. We help you ride real-time trends & get the engagement that spreads.",
      items: [
        { icon: Heart, title: "Trend-driven ad copy with viral potential" },
        { icon: Heart, title: "Smart targeting across interests, events, and conversations" },
        { icon: Heart, title: "Boost visibility, buzz, and brand recall" },
      ],
    },
  ];

  // Trust Markers (Statistics)
  const stats = [
    { label: "Years of combined industry know-how", value: "100+" },
    { label: "Increase in inbound leads", value: "45%" },
    { label: "ROI from paid traffic", value: "3X" },
  ];

  // Resources (RecentResourcesSection)
  const recentResources: ResourceItem[] = [
    {
      title: "AI for PPC: The Smart Marketer's Guide",
      subtitle: "Harnessing automation for lower CPC and higher ROI.",
      author: "PPC Team",
      date: "July 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "ai-for-ppc"
    },
    {
      title: "Winning Ad Copy—No Clicks Wasted",
      subtitle: "What really makes an ad scroll-stopping? Let’s break it down.",
      author: "Ad Creative Lead",
      date: "July 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "winning-ad-copy"
    },
    {
      title: "Remarketing Redefined: Boomerang Your Visitors",
      subtitle: "Strategies to turn casual visitors into customers with smart retargeting.",
      author: "Growth Strategist",
      date: "July 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "remarketing-strategies"
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "Can you help with ad copy and creatives?",
      a: "Absolutely! We whip up ad copy and visuals that speak your audience’s language—and make them stop scrolling.",
    },
    {
      q: "What metrics do you track to measure success?",
      a: "We keep an eye on CTR, CPC, CPA, conversion rates, and ROI — basically, all the juicy numbers that prove we’re winning.",
    },
    {
      q: "Can you help with remarketing campaigns?",
      a: "You bet! We craft clever remarketing moves that pull back your visitors like a boomerang — turning looks into clicks.",
    },
    {
      q: "How do you manage bidding strategies?",
      a: "We let AI crunch the numbers but add a human touch to fine-tune bids for max bang without the budget bang.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="paidAds" />
      <Header />
      <SmartBreadcrumb />
      <main className="pt-0">
        {/* HERO Section */}
        <HeroSection
          heading=" Performance-Obsessed Paid Ads Services with an AI Assist"
          subtext=" Real-time paid ads magic — more clicks, better leads, bigger returns"
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Hero%20Section_L2_Bannera/Paid%20ads.webp"
          buttonText="Audit Me!"
          buttonLink="/lead-gen-ppc"
        />
        <EditableStatSection
          title="Welcome to the hub—where every click is a step toward brand success."
          stats={stats}
        />
        <EnterpriseCapabilities
          title="Paid Ads That Perform—Across Every Platform"
          subtitle="We build, optimize, and scale paid campaigns for every channel that matters."
          tabs={tabs}
          features={features}
        />
        <RecentResourcesSection
          heading="See How Paid Ads Drive Results"
          body="How we helped brands scale pipeline and revenue with PPC."
          subTabs={[]}
          resources={recentResources}
        />
        <LogoScroller
          heading="Brands That Trust Our Paid Media"
          subtext="From SaaS to D2C, our paid ads power growth."
        />
        <Testimonials
          title="What Clients Say About Our Paid Ads"
          description="We don’t just run ads. We deliver results."
        />
        <FaqSection title="FAQs" faqs={faqs} />
        <RecentResourcesSection
          heading="More From Our Content Repertoire"
          body="Your go-to spot for smart PPC insights, guides, and AI tips."
          subTabs={[]}
          resources={recentResources}
        />
        <ContactCta
          heading="Ready to Scale Your Paid Ads?"
          subtext="Let’s map your paid strategy to the way people search, buy, and learn."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
