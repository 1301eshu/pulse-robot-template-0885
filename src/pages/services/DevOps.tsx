// src/pages/services/DevOpsAutomation.tsx

import { useState } from "react";

// Component Imports
import EditableStatSection from "@/components/Statistics";
import Component1 from "@/components/ui/component_1";
import FeatureCard from "@/components/ui/component_3";
import Testimonials from "@/components/ui/component_4";
import FaqSection from "@/components/ui/component_5";
import ContactCta from "@/components/ui/component_6";
import HeroSection from "@/components/ui/component_7";
import LogoScroller from "@/components/ui/component_13";
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
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

export default function DevOpsAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items
  const tabs: TabItem[] = [
    {
      id: "strategy",
      label: "DevOps Strategy & Advisory",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/DevOps/Devops%20Stratedgy%20&%20Advisory.webp",
   //  ctaText: "Audit Me!",
   //   ctaLink: "/audit-form",
    },
    {
      id: "ci-cd",
      label: "CI/CD Pipelines",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/DevOps/CD%20Pipelines.webp",
   //   ctaText: "Audit Me!",
   //   ctaLink: "/audit-form",
    },
    {
      id: "monitoring",
      label: "Monitoring & Observability",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/DevOps/Monitoring%20&%20Observalibity.webp",
  //    ctaText: "Audit Me!",
   //   ctaLink: "/audit-form",
    },
    {
      id: "analytics",
      label: "Metrics & AI Analytics",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/DevOps/Metrics%20&%20Ai%20Analytics.webp",
   //   ctaText: "Audit Me!",
  //    ctaLink: "/audit-form",
    },
  ];

  // Tab Features
  const features: FeatureContent[] = [
    {
      id: "strategy",
      items: [
        { icon: Zap, title: "AI-powered game plan that powers growth without the grind" },
        { icon: Zap, title: "We turn your DevOps plan into a smooth launch" },
        { icon: Zap, title: "Mix Agile with DevOps for speed that never lags" },
      ],
    },
    {
      id: "ci-cd",
      items: [
        { icon: BarChart2, title: "Rapid releases, smoother workflows, no compromises" },
        { icon: BarChart2, title: "Merge, test, deploy—effortless and error-free" },
        { icon: BarChart2, title: "Automate the process with AI assistance, speed up the results" },
      ],
    },
    {
      id: "monitoring",
      items: [
        { icon: Database, title: "Track every release, fix issues in real time" },
        { icon: Database, title: "Optimize performance and tackle risks, instantly" },
        { icon: Database, title: "AI to give real-time insights, rapid fixes, flawless releases" },
      ],
    },
    {
      id: "analytics",
      items: [
        { icon: ShieldCheck, title: "Track uptime, spot threats, deploy with confidence" },
        { icon: ShieldCheck, title: "Smarter releases start with smarter metrics " },
        { icon: ShieldCheck, title: "Deploy more, stress less—automation’s got this" },
      ],
    },
  ];

  // Recent Resources
  const recentResources: ResourceItem[] = [
    {
      title: "Agentic AI in DevOps: What It Changes (Hint: Everything)",
      subtitle: "AI isn't just helping DevOps—it’s rewriting the playbook. From CI/CD to real-time rollback...",
      author: "Sneha Kumari",
      date: "July 20, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1581093588401-7a065b1925d2?w=600&h=400",
      slug: "agentic-ai-devops",
    },
    {
      title: "Top Metrics to Watch in Your AI-Driven DevOps Stack",
      subtitle: "Don't fly blind. These are the KPIs that matter when your releases rely on AI and automation...",
      author: "Mehakpreet Kaur",
      date: "July 18, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400",
      slug: "devops-metrics-ai",
    },
    {
      title: "CI/CD + AI: Speed Meets Intelligence",
      subtitle: "Merge, deploy, repeat—now with machine learning in the mix. Here’s how leading teams do it...",
      author: "Mehakpreet Kaur",
      date: "July 15, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437f6?w=600&h=400",
      slug: "ci-cd-ai-automation",
    },
  ];

  const faqs = [
    {
      q: "How does DevOps speed up deployments?",
      a: "With automation, testing on the go, and seamless integration—speed is the name of the game.",
    },
    {
      q: "Can DevOps help me reduce downtime?",
      a: "Absolutely! With continuous monitoring and automated fixes, we keep things running without a hitch.",
    },
    {
      q: "How do you make sure my releases are bug-free?",
      a: "Continuous testing, real-time fixes, and automated checks keep bugs at bay and quality high.",
    },
    {
      q: "How does DevOps handle scalability?",
      a: "With agile practices and automation, DevOps scales seamlessly—whether you’re a startup or an enterprise.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="devops" />
      <Header />
      <SmartBreadcrumb />
      <main className="pt-0">
        <HeroSection
          heading="AI-Driven DevOps That Accelerate Releases and Eliminate Downtime"
         // highlight="Fast. Smart. Scalable."
          subtext="Drive quick releases with automated, frictionless workflows"
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Development%20Service%20L2%20Banner/Dev%20OPs.webp"
        />

        <EditableStatSection
          
          title="You’re in good company—where speed, seamless releases, and brand success unite"
          stats={[
            { label: "Combined years of full-stack development experience", value: "200+" },
            { label: "Frontend, backend, and cloud technologies mastered", value: "60+" },
            { label: "Custom websites built for startups, enterprises, and everything in between", value: "150+" },
          ]}
        />

        <EnterpriseCapabilities
          title="What We Deliver Through AI-Infused DevOps"
          subtitle="We keep your code flowing smoothly, deploying at great speed."
          tabs={tabs}
          features={features}
        />

        <RecentResourcesSection
          heading="See AI-Ready, Smart DevOps in Action "
          body="Brands we've helped ship faster, safer, and smarter, without chaos  "
          subTabs={[          ]}
          resources={recentResources}
        />

        <LogoScroller
          heading="Brands Backing Our DevOps Game"
          subtext="From scaling startups to global giants, we power their smoother releases"
        />

        <Testimonials
          title="Real Results with Smarter DevOps Solutions"
          description="How? With smart strategy, expert moves, and a touch of AI."
        />

        <FaqSection title="FAQs" faqs={faqs} />

        <RecentResourcesSection
          heading="More From Our Content Repertoire "
          body="Catch up on the hottest DevOps trends, blog posts & AI insights you just can’t miss.   "
          subTabs={[          ]}
          resources={recentResources}
        />

        <ContactCta
          heading="Let’s Get Your DevOps on the Fast Track with AI"
          subtext="Faster code, zero bugs, and flawless uptime."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
