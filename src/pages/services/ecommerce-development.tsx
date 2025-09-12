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
      id: "shopify",
      label: "Shopify",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/eCommerce%20Development%20/Shopify.webp",
   //   ctaText: "Audit Me!",
   //   ctaLink: "/lead-gen-form"
    },
    {
      id: "magento",
      label: "Magento",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/eCommerce%20Development%20/Magento.webp",
   //   ctaText: "Audit Me!",
   //   ctaLink: "/lead-gen-form"
    },
    {
      id: "woocommerce",
      label: "WooCommerce",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/eCommerce%20Development%20/wooCommerce.webp",
  //    ctaText: "Audit Me!",
   //   ctaLink: "/lead-gen-form"
    },
    {
      id: "opencart",
      label: "OpenCart",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/eCommerce%20Development%20/OpenCart.webp",
 //     ctaText: "Audit Me!",
 //     ctaLink: "/lead-gen-form"
    }
  ];

  // Tab Content
  const features: FeatureContent[] = [
    {
      id: "shopify",
      description: "Your store shouldn’t feel like everyone else’s. We design it in a way that it flexes with every integration your stack throws at it.",
      items: [
        { icon: Zap, title: "Custom Shopify stores, just like your brand" },
        { icon: Zap, title: "Smooth payments, seamless integrations-no hiccups" },
        { icon: Zap, title: "Sprinkle LLM magic to make your store the star" },
      ],
    },
    {
      id: "magento",
      description: "We make Magento move like clockwork. High performance, zero compromise.",
      items: [
        { icon: BarChart2, title: "Complex needs? We’ve got the Magento magic" },
        { icon: BarChart2, title: "Migrate to Magento stores, we’ll do it and maintain it" },
        { icon: BarChart2, title: "Custom Magento stores, built to maximize conversions" },
      ],
    },
    {
      id: "woocommerce",
      description: "More sales, fewer tech headaches. We build WooCommerce stores that are fast, flexible, and conversion-ready, on every screen.",
      items: [
        { icon: Database, title: "Integrate with ease, run your store like a boss" },
        { icon: Database, title: "Mobile or desktop? Perfect experiences across devices" },
        { icon: Database, title: "Full control and endless tweaks-your store, your way" },
      ],
    },
    {
      id: "opencart",
      description: "We turn OpenCart into your command center. Flexible, scalable, and built to move products faster.",
      items: [
        { icon: ShieldCheck, title: "Manage multiple stores from one powerful dashboard" },
        { icon: ShieldCheck, title: "Create your ideal eCommerce setup, smoothly" },
        { icon: ShieldCheck, title: "Customize freely with open-source flexibility at your fingertips" },
      ],
    },
  ];

  // Case Studies (Example placeholders)
  const caseStudies = [
    {
      headline: "How BrandX Scaled Up with AI-Driven Commerce",
      cta: "See the Case Study",
      slug: "/case-study/brandx"
    },
    {
      headline: "Magento Magic: Enterprise Growth for Retail Giant",
      cta: "See the Case Study",
      slug: "/case-study/retail-giant"
    },
    {
      headline: "WooCommerce Wonders: High Conversion for DTC Startup",
      cta: "See the Case Study",
      slug: "/case-study/dtc-startup"
    },
    {
      headline: "Multi-Store Success with OpenCart",
      cta: "See the Case Study",
      slug: "/case-study/opencart-multistore"
    },
  ];

  // Recent Resources
  const recentResources: ResourceItem[] = [
    {
      title: "AI for eCommerce: Real Use Cases for Smarter Stores",
      subtitle: "Get hands-on with AI integrations that drive real sales growth-see our favorite use cases, from automation to analytics.",
      author: "GrowthNatives",
      date: "July 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "ai-ecommerce-use-cases"
    },
    {
      title: "Top 5 eCommerce Dev Trends for 2025",
      subtitle: "The future is here-AI, headless commerce, automation, and the tech that makes it all seamless.",
      author: "GrowthNatives",
      date: "July 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "ecommerce-dev-trends"
    },
    {
      title: "Personalization Engines: What Actually Works?",
      subtitle: "Tested tactics for making every shopper feel like your store was built for them.",
      author: "GrowthNatives",
      date: "July 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "personalization-engines"
    },
  ];

  // FAQ List
  const faqs = [
    {
      q: "Can you migrate our store without losing data or SEO?",
      a: "Yes, securely and seamlessly. Everything stays intact-URLs, content, rankings, and customer data.",
    },
    {
      q: "Can you integrate with our tools and systems?",
      a: "Absolutely. CRMs, ERPs, custom APIs, you name it. We make it all work together.",
    },
    {
      q: "Do you handle third-party integrations?",
      a: "Yes. From payment to logistics tools, we plug them in and ensure they run smoothly.",
    },
    {
      q: "Do you create mobile-friendly experiences?",
      a: "Always. Fast, responsive designs that look and convert great on every screen.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="ecommerceDevelopment" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="AI-First eCommerce Development for Growth-Focused Brands"
          subtext="From search to checkout, everything optimized & built to convert."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Hero-Section-Banner_L2/E%20commerce%20Stratedgy.webp"
          buttonText="Audit Me!"
          buttonLink="/lead-gen-form"
        />

        {/* Trust Markers Section */}
        <EditableStatSection
          title="You’re in good company-where smooth operations meet scalable growth"
          stats={[
            { label: "Combined years of full-stack development experience", value: "200+" },
            { label: "Frontend, backend, and cloud technologies mastered", value: "60+" },
            { label: "Custom websites built for startups, enterprises, and everything in between", value: "150+" },
          ]}
        />

        {/* Capabilities Section */}
        <EnterpriseCapabilities
          title="How We Scale Your eCommerce Store with AI"
          subtitle="We optimize every touchpoint to drive more conversions and smoother transactions."
          tabs={tabs}
          features={features}
        />

       {/* More Resources Section */}
        <RecentResourcesSection
          heading=" See How Smarter AI-Backed eCommerce Takes Off "
          body=" Brands we’ve helped launch faster and scale smoother "
          subTabs={[]}
          resources={recentResources}
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Brands Backing Our eCommerce Builds"
          subtext="From bold startups to big players-we power their eCommerce growth."
          
        />

        {/* Client Testimonials Section */}
        <Testimonials
          title="Real Stories, Real eCommerce Development Impact"
          description="Built with strategy & a sharp eye for growth, assisted by AI"
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* More Resources Section */}
        <RecentResourcesSection
          heading="More From Our Content Repertoire"
          body="Catch up on the hottest eCommerce development trends, blog posts & AI hacks."
          subTabs={[]}
          resources={recentResources}
        />

        {/* CTA Section */}
        <ContactCta
          heading="Let’s Build Your AI-Driven eCommerce Empire"
          subtext="No more slow loads, just fast sales and happy customers."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}

