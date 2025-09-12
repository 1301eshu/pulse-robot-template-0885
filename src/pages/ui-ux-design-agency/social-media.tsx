// Full copy of /services/social-media

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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import { Zap, BarChart2, Database, ShieldCheck, Heart } from "lucide-react";
import ExploreMoreBlock from "@/components/exploremore";

export default function SocialMedia() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  // Tab Items
  const tabs: TabItem[] = [
    {
      id: "custom-content",
      label: "Customized Visual Content Creation",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Social%20Media%20Design/Customized%20Visual%20Content%20Creation.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "templates",
      label: "Brand-Consistent Template Design",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Social%20Media%20Design/Brand%20Consistent%20Template%20Design.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "strategy",
      label: "Creative Design Strategy",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Social%20Media%20Design/creative%20Design%20Stratedgy.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "profile",
      label: "Social Media Profile Optimization",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Social%20Media%20Design/social%20Media%20profile%20optimization.webp",
      ctaText: "",
      ctaLink: ""
    },
  ];

  // Features
  const features: FeatureContent[] = [
    {
      id: "custom-content",
      description: "Content that actually makes people stop scrolling (and maybe even click follow).",
      items: [
        { icon: Zap, title: "Designs that match your vibe across posts, stories, reels, and videos." },
        { icon: Zap, title: "AI-enhanced video thumbnails, product mockups, animations & promos." },
        { icon: Zap, title: "Platform-specific tweaks that make your content perform better (everywhere)." },
      ],
    },
    {
      id: "templates",
      description: "Your brand, but with templates that get real consistent and seriously clickable.",
      items: [
        { icon: Heart, title: "Templates you can reuse, remix, and rule every content format." },
        { icon: Heart, title: "Perfect alignment of colors, fonts, logo placements zero off-brand moments." },
        { icon: Heart, title: "Built to flex across Instagram, LinkedIn, YouTube, Pinterest you name it." },
      ],
    },
    {
      id: "strategy",
      description: "We blend brand aesthetics, platform psychology, and AI-assisted insights to craft social visuals that aren\u2019t just pretty\u2014they perform.",
      items: [
        { icon: BarChart2, title: "Visual systems tailored to your brand and platform behavior." },
        { icon: BarChart2, title: "AI-powered testing for layouts, formats, and thumb-stopping imagery." },
        { icon: BarChart2, title: "Modular designs built to repurpose across posts, stories, reels & more." },
      ],
    },
    {
      id: "profile",
      description: "Think of it like a makeover, but for your digital first impression.",
      items: [
        { icon: Database, title: "Bios that convert, handles that make sense, visuals that slap." },
        { icon: Database, title: "AI-powered keyword optimization for better visibility." },
        { icon: Database, title: "Covers, profile pics, and pinned content that speak volumes fast." },
      ],
    },
  ];

  // Trust Markers (Statistics)
  const stats = [
    { label: "Social media design experts with platform-first thinking", value: "20+" },
    { label: "Years of Combined Experience", value: "150+" },
    { label: "Brands served across B2B, D2C, and mobile-first markets", value: "50+" },
//    { label: "Assets built to break the scroll and boost engagement", value: "100+" },
  ];

  // FAQs
  const faqs = [
    {
      q: "How can custom social media design improve my brands presence?",
      a: "Custom design makes your feed cohesive, recognizable, and scroll-stopping aka, the stuff that builds loyal fans.",
    },
    {
      q: "What platforms do you design for?",
      a: "Instagram, LinkedIn, YouTube, Twitter, Facebook, Pinterest even Threads.",
    },
    {
      q: "How do you ensure brand consistency?",
      a: "We build a custom brand kit colors, fonts, vibe checks and use AI tools to keep every post on point.",
    },
    {
      q: "How do you develop a content strategy for my brand?",
      a: "We analyze trends, your audience, your voice, and plug in AI recommendations. It's creative plus data, not random guesses.",
    },
    {
      q: "Is profile optimization really necessary?",
      a: "It's your first impression online. Our optimizations make sure you look professional, findable, and memorable.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="socialMedia" />
      <Header />
      <SmartBreadcrumb />
      <main className="pt-0">
        {/* HERO Section */}
        <HeroSection
          heading="Social Media Design That Pops, Performs-Powered by AI "
          subtext="Scroll-stopping designs + smart content systems that make your brand impossible to ignore."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Hero-Section-Banner_L2/Social%20Media.webp"
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="You’re in good company-with brands that don’t just post, they perform "
          stats={stats}
        />

        {/* Tab Features Section (What We Do) */}
        <EnterpriseCapabilities
          title="What We Do with Social Media Design"
          subtitle="AI-Ready Designs That Get the Scroll, Save You Time, and Slay Engagement Goals."
          tabs={tabs}
          features={features}
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="See What Scroll-Stopping Social Looks Like in Action"
          body="A few real wins we've helped brands achieve with next-level content."
          subTabs={[]} // no subtabs on this page
          resourcePostType="case-studies"
        />

        <LogoScroller
          heading="Creators, Founders, Marketers-They All Trust Our Scroll Game "
          subtext="From startups to unicorns, we’ve helped brands punch above their weight."
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Talk from Brands We’ve Helped Stand Out Online "
          description="Less luck, more creative clarity (and some AI magic)."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

           {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading="  Want to Be That Brand Everyone Shares? Start Here.  "
  body="Hot takes, playbooks, and platform guides for scroll domination. "
  perPage={6}
  firstN={4}
  contentType="blogs"
    resourceType="285"

/>

        {/* Call to Action */}
        <ContactCta
          heading="Let's Build Your AI-Powered Social Media Empire"
          subtext="More eyes, more clicks, more “who did your design?” DMs."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
