// src/pages/services/ExperienceCloud.tsx

import { useState } from "react";

// Component Imports
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import FaqSection from "@/components/ui/component_5";
import ContactCta from "@/components/ui/component_6";
import HeroSection from "@/components/ui/component_7";
import LogoScroller from '@/components/ui/component_13';
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import EnterpriseCapabilities, { TabItem, FeatureContent } from "@/components/ui/component_2";
import DynamicSEO from "@/components/DynamicSEO";
import ExploreMoreBlock from "@/components/exploremore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import {
  Zap,
  BarChart2,
  Database,
  ShieldCheck,
  Clock,
  Heart,
} from "lucide-react";

export default function ExperienceCloud() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items
  const tabs: TabItem[] = [
    {
      id: "consulting",
      label: "Salesforce Experience Cloud Consulting",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Experience%20Cloud/Salesforce%20Experience%20Cloud%20Consulting.webp",
    },
    {
      id: "design",
      label: "Community Design",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Experience%20Cloud/Community%20Design.webp",
    },
    {
      id: "setup",
      label: "Full-Stack Setup for Salesforce Communities ",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Experience%20Cloud/Full%20stack%20setup%20for%20Salesforce%20Communities.webp",
    },
    {
      id: "support",
      label: "Development & Support for Salesforce Communities ",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Experience%20Cloud/Development%20&%20support%20for%20salesforce%20Communities.webp",
    },
  ];

  // Features under each tab
  const features: FeatureContent[] = [
    {
      id: "consulting",
      description:
        "Plan, prioritize, and structure your community for long-term engagement and scale. ",
      items: [
        { icon: Zap, title: "Define engagement KPIs and map them to site architecture, search, and AI personalization " },
        { icon: Zap, title: "Align Experience Cloud with GTM motions-support, partner enablement, or employee onboarding" },
        { icon: Zap, title: "Use Salesforce Data Cloud to serve dynamic content based on real-time behavior " },
      ],
    },
    {
      id: "design",
      description:
        "We design Salesforce communities from the ground up or give legacy ones a modern, AI-powered refresh-fast, intuitive, and built to scale. ",
      items: [
        { icon: Heart, title: "Design community UX from zero-aligned to internal processes and goals " },
        { icon: Heart, title: "Redesign outdated portals for better flow, speed, and usability " },
        { icon: Heart, title: "Build multi-community structures on one platform with unified branding " },
      ],
    },
    {
      id: "setup",
      description:
        "Launch Salesforce Experience Cloud fast with custom templates that match your brand perfectly. ",
      items: [
        { icon: Database, title: "Configure community features with extensive role-mapping that makes sense " },
        { icon: Database, title: "Implement integrations with ERP, social media, and critical business tools " },
        { icon: Database, title: "Connect vendors, agencies, and suppliers on one unified collaboration platform  " },
      ],
    },
    {
      id: "support",
      description:
        "Keep communities fresh with smart updates and expert support. ",
      items: [
        { icon: ShieldCheck, title: "Conduct detailed data analysis and cleansing for optimal performance" },
        { icon: ShieldCheck, title: "Review code quality for security compliance and legal requirements" },
        { icon: ShieldCheck, title: "Continuously fine-tune experience across browsers, devices, and network types "  },
      ],
    },
  ];

  // Statistics
  const stats = [
    { label: "Happy Salesforce customers", value: "100+" },
    { label: "Certified Salesforce experts on deck", value: "60+" },
    { label: "Salesforce Experience Cloud builds and counting", value: "55+" },
  ];

  // More Resources
  const moreResources: ResourceItem[] = [
    {
      title: "Keep your Experience Cloud IQ sharp with our latest guides, case studies, and smart community hot takes.",
      subtitle: "",
      author: "",
      date: "",
      readTime: "",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "experience-cloud-content-1",
    },
    {
      title: "Resource Tile 2",
      subtitle: "",
      author: "",
      date: "",
      readTime: "",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "experience-cloud-content-2",
    },
    {
      title: "Resource Tile 3",
      subtitle: "",
      author: "",
      date: "",
      readTime: "",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "experience-cloud-content-3",
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "Is this just for customers? Or can my team use it too?",
      a: "Both! You can create internal spaces for HR, IT, or onboarding-plus partner portals and customer hubs. One platform, many vibes.",
    },
    {
      q: "Can I personalize content based on who’s logging in?",
      a: "Yup. With AI and CRM data, every user sees what they need-auto-personalized pages, recs, and resources.",
    },
    {
      q: "Will it work with my current tools and data sources?",
      a: "Totally. We integrate Experience Cloud with your CRM, ERP, CMS, and legacy tools to create one smooth ecosystem.",
    },
    {
      q: "How long before we’re live?",
      a: "Fast-track builds can go live in 3–5 weeks. Bigger, custom ones might need a few more. But you’ll never be waiting in the dark.",
    },
    {
      q: "What’s the AI angle in all this?",
      a: "We use Einstein AI for auto-content, search, analytics, and personalization. So your community gets smarter the more it runs.",
    },
    {
      q: "What happens after launch?",
      a: "We don’t ghost you. We help optimize engagement, fix what’s broken, and roll out upgrades-on repeat.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="experienceCloud" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="Salesforce Experience Cloud That Connects, Clicks, and Converts-Powered by AI"
          subtext="Build branded communities that think smart, look sharp, and keep your people coming back."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Salesfoce%20Service%20L2%20Banner%20/Experience%20Cloud.webp"
         
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="You’re in good company-with brands building smarter communities with Salesforce Experience Cloud."
          stats={stats}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title="What We Do with Salesforce Experience Cloud"
          subtitle="We design, deploy, and optimize your Salesforce communities with AI smarts that keep users coming back."
          tabs={tabs}
          features={features}
        />

        {/* More Resources Section */}
        <RecentResourcesSection
          heading=" See What Communities Built on Salesforce Experience Cloud Look Like in Action"
          body=" A few real wins we've helped brands achieve with Salesforce Experience Cloud. "
          subTabs={[]}
          resourcePostType="case-studies"
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Trusted by Brands Who Wanted More Than Just “Another Portal”"
          subtext="From B2B to B2E, we build communities that work. Hard."
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real Impact"
          description="Growth, loyalty, and wow-worthy UX? Yeah, we do that."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

       {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Keep your Experience Cloud IQ sharp with our latest guides, case studies, and smart community hot takes. "
  perPage={6}
  firstN={4}
  contentType="blogs"
  resourceType="242"
/>

        {/* Call to Action */}
        <ContactCta
          heading="Let's Build Your AI-Powered Community Empire"
          subtext="Engaged users. Content that converts. Communities that actually work."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
