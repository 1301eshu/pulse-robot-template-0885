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
import { Zap, BarChart2, Database, ShieldCheck, Clock, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

export default function MarketingCloud() {
  const tabs: TabItem[] = [
    {
      id: "audit",
      label: "Salesforce Marketing Cloud Audit ",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Marketing%20Cloud/Audit%20.webp",
    },
    {
      id: "consulting",
      label: "Salesforce Marketing Cloud Consulting",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Marketing%20Cloud/Consulting.webp",
    },
    {
      id: "implementation",
      label: "Salesforce Marketing Cloud Implementation",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Marketing%20Cloud/Implementation.webp",
    },
    {
      id: "migrations",
      label: "Salesforce Marketing Cloud Migrations ",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Marketing%20Cloud/Migration.webp",
    },
    {
      id: "agentforce",
      label: "Salesforce Marketing Cloud Agentforce Implementation",
      icon: Clock,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Marketing%20Cloud/Agent%20Force.webp",
    },
    {
      id: "operations",
      label: "Salesforce Marketing Cloud Operations Services  ",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Marketing%20Cloud/Operations.webp",
    },
    {
      id: "managed",
      label: "Salesforce Marketing Cloud Managed Services ",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Marketing%20Cloud/Managed%20Services.webp",
    },
    {
      id: "training",
      label: "Salesforce Marketing Cloud Training ",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Marketing%20Cloud/Training.webp",
    }
  ];

  const features: FeatureContent[] = [
    {
      id: "audit",
      description: "If your SFMC feels messy, slow, or stuck, we dig deep, clean it up, and get it firing on all cylinders.",
      items: [
        { icon: Zap, title: "Spot bloated logic, dead-end journeys & sluggish automation" },
        { icon: Zap, title: "Clean your data, tighten segments, cut what’s wasted" },
        { icon: Zap, title: "Get a clear, action-ready plan to boost performance fast" }
      ]
    },
    {
      id: "consulting",
      description: "We use AI to map journeys, spot trends, and plan campaigns that hit.",
      items: [
        { icon: BarChart2, title: "Turn data into your blueprint for success" },
        { icon: BarChart2, title: "Make Einstein AI do the brainwork" },
        { icon: BarChart2, title: "We plan, prep, and press 'go live'" }
      ]
    },
    {
      id: "implementation",
      description: "Expect seamless automation, personalization, and AI-powered marketing.",
      items: [
        { icon: Database, title: "Build tailored journeys, segments, and automations" },
        { icon: Database, title: "Configure CRM and data for unified customer views" },
        { icon: Database, title: "Enable Einstein AI for predictive engagement" }
      ]
    },
    {
      id: "migrations",
      description: "Making a switch? Keep it clean and seamless. With AI tools, platforms sync fast, data transfers smooth, and everything lands where it should.",
      items: [
        { icon: ShieldCheck, title: "Switching to Salesforce Marketing Cloud? We’ll make it painless" },
        { icon: ShieldCheck, title: "Rebuild automations, segments, and templates for peak performance" },
        { icon: ShieldCheck, title: "Data on the move, quick & smooth" }
      ]
    },
    {
      id: "agentforce",
      description: "Agentforce + Salesforce Marketing Cloud = serious firepower. AI gets baked into your workflows, strategy levels up, and campaigns hit harder.",
      items: [
        { icon: Clock, title: "Set up Agentforce in a snap with Salesforce Marketing Cloud" },
        { icon: Clock, title: "Infuse your marketing strategy with Agentforce AI mojo" },
        { icon: Clock, title: "Ignite your campaigns & sales outreach with Agentforce sparks" }
      ]
    },
    {
      id: "operations",
      description: "We handle the behind-the-scenes so your marketing shows up sharp and synced.",
      items: [
        { icon: Heart, title: "Campaigns out the door fast, no fumbles." },
        { icon: Heart, title: "Journeys, lists, and automations kept clean and conversion-ready " },
        { icon: Heart, title: "Performance tuned with smart ops and Einstein AI where it counts " }
      ]
    },
    {
      id: "managed",
      description: "We keep your SFMC running smooth and smart, managing day-to-day execution while leveling up with built-in AI. ",
      items: [
        { icon: ShieldCheck, title: "Campaigns executed, tested, and tracked, without daily grind" },
        { icon: ShieldCheck, title: "Journeys, segments, and automations managed for max efficiency" },
        { icon: ShieldCheck, title: "Deploy Einstein AI to fine-tune send times & content performance" }
      ]
    },
    {
      id: "training",
      description: "We turn your team into SFMC pros, confident, capable, and AI-ready.",
      items: [
        { icon: BarChart2, title: "Hands-on training according to your tools, use cases, and team roles" },
        { icon: BarChart2, title: "Learn to build journeys, manage data, and launch campaigns easily" },
        { icon: BarChart2, title: "Master Einstein AI features to drive better campaign performance" }
      ]
    }
  ];

  const stats = [
    { label: "Happy Salesforce customers", value: "100+" },
    { label: "Combined years of know-how", value: "200+" },
    { label: "Salesforce-certified experts on deck", value: "60+" },
  ];

  const faqs = [
    {
      q: "What’s the first step to get started with you?",
      a: "We’d kick off with a discovery session to define your goals and craft a custom strategy."
    },
    {
      q: "Do we need to overhaul our systems?",
      a: "No. We’ll integrate Salesfroce Marketing Cloud with your existing systems, building on what’s already working."
    },
    {
      q: "How much can Salesforce Marketing Cloud be customized?",
      a: "Plenty! We’ll tailor workflows, campaigns, and AI insights to fit your needs."
    },
    {
      q: "Do we need a full-time team to manage Salesforce Marketing Cloud?",
      a: "Not at all. We’ll take care of the heavy lifting so your team can focus on standout campaigns."
    }
  ];

  const recentResources: ResourceItem[] = [
    {
      title: "Agentic AI: The Silent Force Reshaping Marketing Ops",
      subtitle: "Wait, so this thing just... does it? Like, by itself? Yes. And no, it's not magic. It's called Agentic AI and it's the next evolution of marketing automation you...",
      author: "Sneha Kumari",
      date: "July 7, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "hubspot-chatgpt-connector"
    },
    {
      title: "The AI Shortlist: Top Use Cases for Marketing Ops That You Must Know",
      subtitle: "Back in the day, Marketing Ops used to mean fighting timelines and making friends with a dozen dashboards...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "google-ads-roi-increase"
    },
    {
      title: "Marketo & AI: Best Practices for Smarter Segmentation and Nurturing",
      subtitle: "You've got Marketo. You've got data. You've got 47 tabs open. Now what?...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "marketo-ai-segmentation"
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="salesforceMarketingCloud" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        <HeroSection
          heading="Salesforce Marketing Cloud: Smarter Journeys with a Little AI Magic"
          subtext="Campaigns that catch the vibe, read the room, and just know what works."
          bgImage=""
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Marketing%20Automation/Hero%20Section_L1_Banner/Salesforce%20Marketing%20Cloud.webp"
       
        />

        <EditableStatSection
          title="You’re in good company—with brands scaling smarter on Salesforce Marketing Cloud"
          stats={stats}
        />

        <EnterpriseCapabilities
          title="Mix AI Brains into Your Salesforce Marketing Cloud Flow"
          subtitle="We fine-tune your Salesforce Marketing Cloud setup to drive better results, minus the hiccups."
          tabs={tabs}
          features={features}
        />

        <RecentResourcesSection
          heading="Get a Front-Row View of AI-Sprinkled Salesforce Marketing Cloud  "
          body="Brands we’ve helped win big with Salesforce Marketing Cloud  "
          subTabs={[]}
          resources={recentResources}
        />

        <LogoScroller
          heading="Brands Backing Our Salesforce Marketing Cloud Brilliance"
          subtext="Small crews or big leagues, we plug in a strategy that scales."
        />

        <Testimonials
          title="Real Stories, Real Salesforce Marketing Cloud Growth"
          description="Less drag, more drive. AI-smart, strategy-tight."
        />

        <FaqSection title="FAQs" faqs={faqs} />

        <RecentResourcesSection
          heading="More From Our Content Repertoire  "
          body=" Stay in the know with the latest Salesforce Marketing Cloud blog posts, guides, and AI hacks to keep you sharp.   "
          subTabs={[]}
          resources={recentResources}
        />

        <ContactCta
          heading="Let’s Fire Up Your AI-Powered Salesforce Marketing Cloud Engine"
          subtext="Smarter insights, faster workflows, and campaigns that think on their feet."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
