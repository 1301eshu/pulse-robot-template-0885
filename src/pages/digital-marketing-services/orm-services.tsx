
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

  // Tab Items (ORM Zigzag/Services)
  const tabs: TabItem[] = [
    {
      id: "gmb",
      label: "Google My Business (GMB) Optimization ",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/ORM/Google%20My%20Business%20Optimization.webp",
     ctaText: "Read More",
      ctaLink: "/digital-marketing-services/orm-services/gmb/"
    },
    {
      id: "review",
      label: "Review Management & Reputation Monitoring",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/ORM/Review%20Management%20&%20Reputation%20Monitoring.webp",
  //    ctaText: "Get a Demo",
   //   ctaLink: "/l3-template"
    },
    {
      id: "crisis",
      label: "Crisis Response & Mitigation",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/ORM/Crisis%20Response%20&%20Mitigation.webp",
  //    ctaText: "Get a Demo",
   //   ctaLink: "/l3-template"
    },
    {
      id: "thirdparty",
      label: "Trustpilot, G2, and Clutch Review Management",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/ORM/Trustpilot,%20G2,%20and%20Clutch%20Review%20Management.webp",
  //    ctaText: "Get a Demo",
 //     ctaLink: "/l3-template"
    }
  ];

  // Tab Content (Features)
  const features: FeatureContent[] = [
    {
      id: "gmb",
      description: "Your GMB profile is your digital storefront. We keep it sharp, updated, and ready to convert with smart tools that help you stand out locally and beyond.",
      items: [
        { icon: Zap, title: "Pop up local, shine global, stay real" },
        { icon: Zap, title: "Keep it fresh, keep them coming back" },
        { icon: Zap, title: "Conversations that convert, straight from GMB" }
      ]
    },
    {
      id: "review",
      description: "We keep an eye on every mention and manage reviews smartly to guide your brand’s perception and build trust.",
      items: [
        { icon: BarChart2, title: "Manage feedback. Multiply trust. Maximize growth" },
        { icon: BarChart2, title: "Stay in the loop before the buzz breaks" },
        { icon: BarChart2, title: "Track the talk. Tweak the narrative" }
      ]
    },
    {
      id: "crisis",
      description: "When things go south, we step in fast. Whether social storms or PR slip-ups, we manage the message, control the damage, and help your brand bounce back stronger.",
      items: [
        { icon: Database, title: "Stay calm, act fast, protect your rep" },
        { icon: Database, title: "Turn brand storms into comeback stories" },
        { icon: Database, title: "Crisis control that builds trust, not tension" }
      ]
    },
    {
      id: "thirdparty",
      description: "From monitoring to messaging, we manage reviews where it matters most and turn them into trust signals.",
      items: [
        { icon: ShieldCheck, title: "Own the narrative where buyers do the talking" },
        { icon: ShieldCheck, title: "Stars, sentiment, strategy-synced and sorted" },
        { icon: ShieldCheck, title: "Your reviews, our playbook for trust and traction" }
      ]
    }
  ];

  // Trust Markers (Statistics)
  const stats = [
    { label: "Influencer/Executive profiles secured", value: "150+" },
    { label: "Drop in negative brand mentions", value: "80%" },
    { label: "More positive Google autosuggest terms", value: "4x" },
  ];

  // Case Studies (Carousel)
  const caseStudyTabs: TabItem[] = [
    { id: "cs1", label: "Case Study 1", icon: Zap, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/1" },
    { id: "cs2", label: "Case Study 2", icon: BarChart2, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/2" },
    { id: "cs3", label: "Case Study 3", icon: Database, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/3" },
    { id: "cs4", label: "Case Study 4", icon: ShieldCheck, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/4" },
  ];


  // FAQ List
  const faqs = [
    {
      q: "What platforms do you monitor for my brand’s reputation?",
      a: "We keep tabs on all the hotspots - Google My Business, socials, Trustpilot, among others, plus forums and blogs where your brand’s buzzing."
    },
    {
      q: "How do you handle negative reviews or comments?",
      a: "We tackle negativity head-on-swift, smart, and sincere-turning grumbles into cheers, one reply at a time."
    },
    {
      q: "How do you monitor brand mentions across the internet?",
      a: "Our AI-powered radar never sleeps-scanning socials, reviews, blogs, forums, and news to catch every mention, 24/7."
    },
    {
      q: "How do you handle fake or malicious reviews?",
      a: "We sniff out the fakes, flag them for removal, and spotlight genuine voices that truly boost your cred."
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="orm" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Powered ORM Services That Turn Crises into Comebacks"
          subtext="Clean up search results, respond with clarity, and own your story."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Digital%20Marketing%20L2%20Banner/ORM.webp"
         
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="When excellence is the goal, we’re the company teams turn to."
          stats={stats}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="How We Power Up Your ORM with AI"
          subtitle="We eavesdrop on the web, tackle issues head-on, and craft a reputation that resonates."
          tabs={tabs}
          features={features}
        />

        {/* More Resources Section */}
        <RecentResourcesSection
          heading="See How Smart AI-Backed ORM Rewrites Reputations "
          body="Brands we’ve helped build trust, and bounce back stronger "
          subTabs={[]}
          resourcePostType="case-studies"
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Names That Trust Us With Their Online Reputation"
          subtext="From rising startups to global players-we guard their digital image."
         
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real Growth"
          description="How? With pure strategy, sharp skill, experience, and a handful of AI."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Stay ahead with the sharpest ORM hacks, insights, and AI moves to protect your brand’s shine.  "
  perPage={6}
  firstN={4}
  contentType="blogs"
  resourceType="29"
/>

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Grow Your Online Reputation With AI"
          subtext="Get trusted, stay positive, and shine online."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
