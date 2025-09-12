// src/pages/services/MarketingAutomation.tsx

import { useState } from "react";

// Component Imports
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
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

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items (AI-Powered Testing & QA Services)
  const tabs: TabItem[] = [
    {
      id: "manual-testing",
      label: "Manual Testing",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Testing%20%20QA/Manual%20Testing.webp",
  //    ctaText: "Get a Demo",
 //   ctaLink: "/l3-template"
    },
    {
      id: "api-testing",
      label: "API Testing",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Testing%20%20QA/API%20Testing.webp",
   //   ctaText: "Get a Demo",
  //  ctaLink: "/l3-template"
    },
    {
      id: "automated-testing",
      label: "Automated Testing",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Testing%20%20QA/Automated%20Testing.webp",
  //     ctaText: "Get a Demo",
 //   ctaLink: "/l3-template"
    },
    {
      id: "performance-testing",
      label: "Performance Testing",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Testing%20%20QA/Performance%20Testing.webp",
 //      ctaText: "Get a Demo",
 //   ctaLink: "/l3-template"
    },
  ];

  // Features (Zigzag section content)
  const features: FeatureContent[] = [
    {
      id: "manual-testing",
      description: "End-to-end testing that digs deeper. AI-driven QA built to catch what users-and basic tools-miss.",
      items: [
        { icon: Zap, title: "We test what matters, not just what’s visible" },
        { icon: Zap, title: "From login to launch, we test it all, AI-powered" },
        { icon: Zap, title: "Your app, pressure-tested for the real world" },
      ],
    },
    {
      id: "api-testing",
      description: "AI-enhanced API testing simulates real-world conditions, detects hidden failures, and validates performance across every environment.",
      items: [
        { icon: BarChart2, title: "Verify API functionality across all platforms" },
        { icon: BarChart2, title: "Ensure consistent performance under heavy load" },
        { icon: BarChart2, title: "Test error handling in real-world scenarios" },
      ],
    },
    {
      id: "automated-testing",
      description: "Let AI handle the heavy lifting-automated tests that keep up with every push, pull, and deploy.",
      items: [
        { icon: Database, title: "Faster test cycles, minus the manual hassle" },
        { icon: Database, title: "Continuous testing that fits your CI/CD flow" },
        { icon: Database, title: "Efficient testing across devices and platforms using AI" },
      ],
    },
    {
      id: "performance-testing",
      description: "Push your app to the limit. AI helps uncover lags, load issues, and user-impacting slowdowns before they happen.",
      items: [
        { icon: ShieldCheck, title: "Monitor how your app performs under load" },
        { icon: ShieldCheck, title: "Keep performance steady during high traffic using AI" },
        { icon: ShieldCheck, title: "Detect slowdowns before they impact users" },
      ],
    },
  ];

  // Trust Markers (Statistics)
  const stats = [
    { label: "Combined years of full-stack development experience", value: "200+" },
    { label: "Frontend, backend, and cloud technologies mastered", value: "60+" },
    { label: "Custom websites built for startups, enterprises, and everything in between", value: "150+" },
  ];

  // Resources (RecentResourcesSection)
  const recentResources: ResourceItem[] = [
    {
      title: "Next-Gen QA: AI-Driven Testing in 2025",
      subtitle: "How smart automation is reshaping quality for digital products.",
      author: "QA Team",
      date: "July 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "ai-qa-2025"
    },
    {
      title: "Manual vs. Automated Testing: When & Why",
      subtitle: "A guide for dev teams, product leads, and modern CTOs.",
      author: "Lead Tester",
      date: "July 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "manual-vs-automated"
    },
    {
      title: "Performance Testing Playbook",
      subtitle: "Prevent lags and crashes before they ruin your user’s day.",
      author: "QA Strategy",
      date: "July 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "performance-playbook"
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "How do you ensure cross-platform quality?",
      a: "We test on real devices, across platforms, with a little AI backup to catch the sneaky stuff.",
    },
    {
      q: "What’s your approach to security testing?",
      a: "Our team hunts down vulnerabilities, plugs leaks, and ensures your app stays safe from hackers, keeping user data secure.",
    },
    {
      q: "What tools do you use for automated testing?",
      a: "We roll with the best-Selenium, Appium, Postman, JMeter and let AI jump in to spot what humans (and deadlines) might miss.",
    },
    {
      q: "What if my app changes during testing?",
      a: "No worries! We’ll adapt and re-test any updates to ensure everything stays smooth and bug-free.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="testingQA" />
      <Header />
    <SmartBreadcrumb />
      <main className="pt-0">

        {/* HERO Section */}
        <HeroSection
          heading="AI-Ready Testing And QA That Doesn’t Flinch Under Pressure"
          subtext="Reliable testing to keep your apps, sites, and platforms running glitch-free"
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Hero-Section-Banner_L2/testing%20Q&A.webp"
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="You’re in good company-where bug-free apps and flawless user journeys come standard."
          stats={stats}
        />

        {/* Tab Features Section (What We Deliver Through AI-Powered Testing & QA) */}
        <EnterpriseCapabilities
          title="What We Deliver Through AI-Powered Testing & QA"
          subtitle="We make sure your product runs smoothly, securely, and without a hitch."
          tabs={tabs}
          features={features}
        />

        {/* Case Study Section */}
        <EnterpriseCapabilities
          title="See Flawless, AI-Enhanced Testing in Action"
          subtitle="Brands we've helped launch bug-free, high-performing experiences across platforms"
          tabs={[
            { id: "cs1", label: "Case Study 1", icon: Zap, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/1" },
            { id: "cs2", label: "Case Study 2", icon: BarChart2, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/2" },
            { id: "cs3", label: "Case Study 3", icon: Database, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/3" },
            { id: "cs4", label: "Case Study 4", icon: ShieldCheck, image: "", ctaText: "View Case Study", ctaLink: "/case-studies/4" },
          ]}
          features={[]}
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="More From Our Content Repertoire"
          body="Stay updated with the latest Testing & QA guides, blog posts and AI tips."
          subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

        <LogoScroller
          heading="Folks that Rely on Our Testing & QA Expertise"
          subtext="From startups to industry leaders, we ensure flawless quality and performance."
         
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Impact with Smarter Testing & QA"
          description="How we helped our clients get AI-powered apps that run smooth & perform flawless"
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Upgrade Your Brand with AI-Powered Fail-Proof Testing"
          subtext="Minimize risks, accelerate delivery, and launch flawless, bug-free products."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />

      </main>
      <Footer />
    </div>
  );
}
