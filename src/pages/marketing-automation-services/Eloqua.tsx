import { useState } from "react";

import EditableStatSection from "@/components/Statistics";
import Component1 from "@/components/ui/component_1";
import Testimonials from "@/components/ui/component_4";
import FaqSection from "@/components/ui/component_5";
import ContactCta from "@/components/ui/component_6";
import HeroSection from "@/components/ui/component_7";
import LogoScroller from '@/components/ui/component_13';
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import DynamicSEO from "@/components/DynamicSEO";
import EnterpriseCapabilities, { TabItem, FeatureContent } from "@/components/ui/component_2";
import { Zap, BarChart2, Database, ShieldCheck, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

export default function Eloqua() {
  // Tab Items (Eloqua Zigzag/Services)
  const tabs: TabItem[] = [
    {
      id: "audit",
      label: "Eloqua Audit",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Eloqua/Eloqua%20Audit.webp",
      ctaText: "Read More",
      ctaLink: "/marketing-automation-services/eloqua/audit-services/"
    },
    {
      id: "consulting",
      label: "Eloqua Consulting",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Eloqua/Eloqua%20Consulting.webp",
      ctaText: "Read More",
      ctaLink: "/marketing-automation-services/eloqua/consulting/"
    },
    {
      id: "migration",
      label: "Eloqua Migration",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Eloqua/Eloqua%20Migration.webp",
      ctaText: "Read More",
      ctaLink: "/marketing-automation-services/eloqua/migration-services/"
    },
    {
      id: "implementation",
      label: "Eloqua Implementation",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Eloqua/Eloqua%20Implementation.webp",
      ctaText: "Read More",
      ctaLink: "/marketing-automation-services/eloqua/implementation/"
    },
    {
      id: "reporting",
      label: "Eloqua Reporting & Analytics",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Eloqua/Eloqua%20Reporting%20and%20Analytics.webp",
      ctaText: "Read More",
      ctaLink: "/marketing-automation-services/eloqua/reporting-analytics-services/"
    },
  ];

  // Features (Eloqua Zigzag content)
  const features: FeatureContent[] = [
    {
      id: "audit",
      description: "Time to clean up what’s dragging you down. Audits find the leaks, AI insights guide the fix, and strategy gives your campaigns the edge they’ve been missing.",
      items: [
        { icon: Zap, title: "Deep-dive audits to spot hidden leaks." },
        { icon: Zap, title: "Custom strategies, no copy-paste vibes." },
        { icon: Zap, title: "Less guesswork. More campaign glow-ups." },
      ],
    },
    {
      id: "consulting",
      description: "Turn that enterprise beast into a smooth, marketing machine. No more stressing about broken syncs.",
      items: [
        { icon: BarChart2, title: "Streamline lead flows, fix logic loops, and banish bad data." },
        { icon: BarChart2, title: "Build journeys that not only map leads, but move them." },
        { icon: BarChart2, title: "Connect CRM, content, and campaigns like a growth engine." },
      ],
    },
    {
      id: "migration",
      description: "Moving to Eloqua? Let's make it seamless. Migrations stay smooth, tools sync tight, and integrations flex to fit your exact setup.",
      items: [
        { icon: Database, title: "Migrate smoothly from old to Eloqua." },
        { icon: Database, title: "Preserve your logic, scoring, and segmentation." },
        { icon: Database, title: "Faster go-live, zero data loss, and no broken campaigns." },
      ],
    },
    {
      id: "implementation",
      description: "Built right from day one. No mess or patchwork, pure performance.",
      items: [
        { icon: Heart, title: "Smart setup that fits your funnel just perfectly." },
        { icon: Heart, title: "Lead scoring, nurture flows, and segments that work." },
        { icon: Heart, title: "CRM, content, and data stitched together like magic." },
      ],
    },
    {
      id: "reporting",
      description: "No more digging through dashboards. Get clear metrics, AI-backed insights, and reports that help you plan what’s next, not just explain what happened.",
      items: [
        { icon: ShieldCheck, title: "Get the numbers that actually tell a story." },
        { icon: ShieldCheck, title: "Turn analytics into your marketing playbook." },
        { icon: ShieldCheck, title: "Campaign metrics so clear, you’ll see the future." },
      ],
    },
  ];

  // Trust Markers (Statistics)
  const stats = [
    { label: "Eloqua customers since 2019", value: "30+" },
    { label: "Certified Eloqua pros at work", value: "20+" },
    { label: "Avg. boost in campaign speed", value: "30%" },
  ];

  // Resources (RecentResourcesSection)
  const recentResources: ResourceItem[] = [
    {
      title: "5 Ways AI Supercharges Eloqua Workflows",
      subtitle: "Why automation and insight beat intuition—every single time.",
      author: "Eloqua Strategy Team",
      date: "July 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "eloqua-ai-workflows"
    },
    {
      title: "Moving to Eloqua: Migration Playbook for Enterprise",
      subtitle: "How to migrate without the headaches, keep your data, and boost results fast.",
      author: "Migration Specialist",
      date: "July 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "eloqua-migration-playbook"
    },
    {
      title: "Campaign Reporting in Eloqua: What’s Worth Tracking?",
      subtitle: "Tips on turning Eloqua analytics into winning marketing moves.",
      author: "Lead Analyst",
      date: "July 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "eloqua-reporting"
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "Our data’s a mess. Can you still work with it?",
      a: "Sure! We clean, map, and sync your data for better scoring and real ROI.",
    },
    {
      q: "How long does Eloqua implementation take?",
      a: "Most brands go live in under 4 weeks—strategy, setup, testing, and a dash of AI included.",
    },
    {
      q: "What if our Eloqua setup’s already live?",
      a: "Even better. We fine-tune what’s working. Expect cleaner workflows, sharper targeting, and smarter segmentation.",
    },
    {
      q: "Is this a one-time setup or a long-term deal?",
      a: "Your call. Quick setup sprint or full-stack support, we flex to fit your growth plan.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="eloqua" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        <HeroSection
          heading="AI-First Eloqua That Understands the Assignment"
          subtext="Campaigns that know when to launch, learn, and land the sale."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Hero%20Section_L1_Banner/eloqua.webp"
         
        />

        <EditableStatSection
          title="You’re in good crowd—where top brands scale with Eloqua"
          stats={stats}
        />

        <EnterpriseCapabilities
          title="How We Transform Eloqua with AI Spark"
          subtitle="We take your platform from basic to bougie with AI tricks that deliver actual money moves."
          tabs={tabs}
          features={features}
        />

        <RecentResourcesSection
          heading="Watch AI-Backed Eloqua Work Wonders "
          body="Brands we’ve helped crush it with an outcome-oriented Eloqua. "
          subTabs={[]}
          resources={recentResources}
        />

        <LogoScroller
          heading="Brands Winning Big with Our Eloqua Edge"
          subtext="Helping brands of all sizes scale with smarter Eloqua solutions"
        />

        <Testimonials
          title="Real Stories, Real Impact"
          description="No shortcuts. Just strategy, fine automation, and a bit of AI finesse."
        />

        <FaqSection title="FAQs" faqs={faqs} />

        <RecentResourcesSection
          heading="More From Our Content Repertoire"
          body="Stay sharp on all things Eloqua—tips, tricks, and AI takes served fresh."
          subTabs={[]}
          resources={recentResources}
        />

        <ContactCta
          heading="Launch AI-Baked Eloqua Like It’s Built for Today"
          subtext="Seamless strategies, sharp insights, and AI magic under the hood."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
