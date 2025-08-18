// src/pages/content-marketing-services/email-lifecycle-copywriting.tsx

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

export default function EmailLifecycleCopywriting() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

 // Tab Items
 const tabs: TabItem[] = [
  {
    id: "onboarding",
    label: "Welcome & Onboarding Flows",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Email%20%20Lifecycle%20Copywriting/Welcome%20&%20Onboarding%20Flows.webp",
  },
  {
    id: "nurture",
    label: "Nurture Campaigns",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Email%20%20Lifecycle%20Copywriting/Nurture%20Campaigns.webp",
  },
  {
    id: "abandonment",
    label: "Abandonment & Retargeting",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Email%20%20Lifecycle%20Copywriting/Abandonment%20&%20Retargeting.webp",
  },
  {
    id: "renewal",
    label: "Renewal & Retention Flows",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Email%20%20Lifecycle%20Copywriting/Renewal%20&%20Retention%20Flows.webp",
  },
  {
    id: "winback",
    label: "Win-Back Campaigns",
    icon: Heart,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/Email%20%20Lifecycle%20Copywriting/Win-Back%20Campaigns.webp",
  }
];

const features: FeatureContent[] = [
  {
    id: "onboarding",
    description: "Make first impressions (and second emails) count.",
    items: [
      { icon: Zap, title: "Welcome emails that make a strong first impression" },
      { icon: Zap, title: "Clear & compelling CTAs that invite action" },
      { icon: Zap, title: "Written to land in inboxes and get read" },
    ],
  },
  {
    id: "nurture",
    description: "Keep interest warm with words that matter.",
    items: [
      { icon: BarChart2, title: "Behavior-triggered sequences, not batch-and-blast" },
      { icon: BarChart2, title: "Clear value delivery in every line" },
      { icon: BarChart2, title: "Segmentation-aware and conversion-minded" },
    ],
  },
  {
    id: "abandonment",
    description: "Ghosted carts? We bring them back.",
    items: [
      { icon: Database, title: "Subject lines that stop the scroll" },
      { icon: Database, title: "Personalization that feels (really) personal" },
      { icon: Database, title: "Spam-proof, written to land right into inboxes" },
    ],
  },
  {
    id: "renewal",
    description: "Make loyalty feel like the obvious next step.",
    items: [
      { icon: ShieldCheck, title: "Reminders with value, not pressure" },
      { icon: ShieldCheck, title: "Messaging matched to customer stage" },
      { icon: ShieldCheck, title: "Snappy, focused copy that drives action" },
    ],
  },
  {
    id: "winback",
    description: "Because lost users aren’t gone forever.",
    items: [
      { icon: Heart, title: "Copy that reconnects without the cringe" },
      { icon: Heart, title: "Reactivation CTAs that make it easy" },
      { icon: Heart, title: "Messages that are timely and relevant" },
    ],
  },
];

const recentResources: ResourceItem[] = [
  {
    title: "Lifecycle Wins: Email Flows That Actually Work",
    subtitle: "Real tactics from real brands. Step-by-step wins and lessons.",
    author: "GN Team",
    date: "July 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400",
    slug: "lifecycle-wins"
  },
  {
    title: "The Anatomy of a Perfect Win-Back Sequence",
    subtitle: "When (and how) to pull lost users back into your orbit.",
    author: "GN Team",
    date: "July 10, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=400",
    slug: "winback-anatomy"
  },
  {
    title: "Segmentation Secrets: Delivering the Right Email at the Right Time",
    subtitle: "Cut through the clutter and connect with every segment.",
    author: "GN Team",
    date: "July 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400",
    slug: "segmentation-secrets"
  },
];

const faqs = [
  {
    q: "How do you ensure the email tone fits our brand?",
    a: "We start by reviewing your current messaging, brand guidelines, and audience—then write in a voice that feels naturally yours.",
  },
  {
    q: "Can you write for both B2B and B2C audiences?",
    a: "Yes. Whether you're speaking to decision-makers or daily shoppers, we adapt the tone, structure, and messaging to match your audience.",
  },
  {
    q: "How many emails are typically included in a flow?",
    a: "It depends on the goal, but most flows include 3–7 strategically timed emails, tailored to each stage of the customer journey.",
  },
  {
    q: "Can you write emails for different customer segments?",
    a: "Absolutely. We customize content based on audience behaviors, interests, and lifecycle stages to keep messages relevant and engaging.",
  },
];

return (
  <div className="bg-white text-gray-900">
    <DynamicSEO page="emailLifecycleCopywriting" />
    <Header />
    <SmartBreadcrumb />
    <main className="">
      {/* HERO Section */}
      <HeroSection
        heading="Email & Lifecycle Copywriting That Hits Inboxes and Intent Alike"
        subtext="From onboarding flows to win-back emails, we craft messages that engage and convert."
        bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
        rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/content-marketing-services/L-2%20Banner%20Images/email%20&%20Lifecycle%20Copywriting.webp"
        buttonText="Audit Me!"
        buttonLink="/lifecycle-audit"
      />
      <EditableStatSection
        title="You're in good company—with brands that know smart emails build smarter customer journeys."
        stats={[
          { label: "Full-funnel campaigns written", value: "60+" },
          { label: "Lifecycle email flows delivered", value: "75+" },
          { label: "Avg. lift in open + click rate", value: "42%" },
        ]}
      />
      <EnterpriseCapabilities
        title="How We Craft Email & Lifecycle Copy That Performs"
        subtitle="We write emails that your audience opens, reads, and clicks."
        tabs={tabs}
        features={features}
      />
      <RecentResourcesSection
        heading="See How Lifecycle Copywriting Scales ROI "
        body="Brands we’ve helped automate, personalize, and persuade, one sequence at a time."
        subTabs={[]}
        resources={recentResources}
      />
      <LogoScroller
        heading="Brands That Let Our Copy Run the Lifecycle"
        subtext="From SaaS to retail, our flows flex across industries, and results speak."
      />
      <Testimonials
        title="Real Stories, Real Campaign Impact"
        description="Campaigns built on systems, strategy, and a little AI spark."
      />
      <FaqSection title="FAQs" faqs={faqs} />
      <RecentResourcesSection
        heading="More From Our Content Repertoire"
        body="Explore email best practices, blog posts, guides and AI-backed lifecycle wins."
        subTabs={[]}
        resources={recentResources}
      />
      <ContactCta
        heading="Let’s Map the Right Message to the Right Moment"
        subtext="Because great lifecycle copy knows exactly when (and what) to say."
        buttonLabel="Talk to an Expert"
        buttonLink="/contact"
      />
    </main>
    <Footer />
  </div>
);
}
