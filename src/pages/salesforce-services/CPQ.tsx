// src/pages/services/SalesforceCPQ.tsx

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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import { Zap, BarChart2, Database, ShieldCheck } from "lucide-react";
import ExploreMoreBlock from "@/components/exploremore";

export default function CPQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items: Representing each major CPQ offering
  const tabs: TabItem[] = [
    {
      id: "consulting",
      label: "Salesforce CPQ Consulting & Implementation",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/CPQ/Salesforce%20CPQ%20Consulting%20&%20Implementaion.webp",
    },
    {
      id: "optimization",
      label: "Salesforce CPQ Optimization",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/CPQ/Salesforce%20CPQ%20Optimization.webp",
    },
    {
      id: "integration",
      label: "Salesforce CPQ Integration",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/CPQ/Salesforce%20CPQ%20%20Integrations.webp",
    },
    {
      id: "management",
      label: "Salesforce CPQ Management",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/CPQ/Salesforce%20CPQ%20Management.webp",
    },
  ];

  // Features for each tab, per the "What We Do" section
  const features: FeatureContent[] = [
    {
      id: "consulting",
      description: "We build CPQ setups that help you close deals fast. From planning to execution, it’s all tailored, AI-optimized, and ready to scale.",
      items: [
        { icon: Zap, title: "AI-first workflows that cut quote time" },
        { icon: Zap, title: "Smart rules that prevent costly mistakes" },
        { icon: Zap, title: "Catalogs reps can access anywhere" },
      ],
    },
    {
      id: "optimization",
      description: "Already live? We level up your setup with AI automation that shortens sales cycles and boosts accuracy.",
      items: [
        { icon: BarChart2, title: "Approvals auto routed, no manual nudging" },
        { icon: BarChart2, title: "Real-time quote health insights" },
        { icon: BarChart2, title: "Suggest upsells your reps would miss" },
      ],
    },
    {
      id: "integration",
      description: "We plug CPQ into your stack, so sales ops, finance, and inventory never miss a beat.",
      items: [
        { icon: Database, title: "Auto-sync with CRM, ERP, and billing" },
        { icon: Database, title: "Live inventory pulls into quote builder" },
        { icon: Database, title: "Push closed deals to order instantly" },
      ],
    },
    {
      id: "management",
      description: "With analytics and ML built-in, we make CPQ your team’s smartest seller-always learning, never stalling.",
      items: [
        { icon: ShieldCheck, title: "Spot quote delays before they cost you" },
        { icon: ShieldCheck, title: "Forecast quote-to-close with confidence" },
        { icon: ShieldCheck, title: "Track what pricing strategies work" },
      ],
    },
  ];

  // Case Studies (RecentResourcesSection)

  // FAQ Section
  const faqs = [
    {
      q: "How fast can you implement Salesforce CPQ?",
      a: "Most clients are up and running in 4-8 weeks, depending on the complexity. We've got AI-accelerated templates for heavy lifting.",
    },
    {
      q: "Is Salesforce CPQ suitable for complex pricing structures?",
      a: "Absolutely! Salesforce CPQ is designed to handle intricate pricing models, ensuring accuracy and flexibility.",
    },
    {
      q: "Can CPQ handle our complex pricing models?",
      a: "The more complex your pricing, the more you'll love what AI-powered CPQ can do. We've tamed pricing monsters in 27 industries.",
    },
    {
      q: "Will our sales team actually use it?",
      a: "They'll fight over who gets to use it first. Our adoption rates are 94% because we build systems salespeople love, not tolerate.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="salesforceCPQ" />
      <Header />
      <SmartBreadcrumb />
      <main className="pt-00">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Powered Salesforce CPQ: Quotes That Think, Deals That Close"
          subtext="Configure, Price, Quote in minutes with intelligent automation that sales teams love"
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Salesfoce%20Service%20L2%20Banner%20/Salesforce%20Cpq.webp"
        
        />

        <EditableStatSection
          title="You're in good company-with brands closing faster with AI-powered Salesforce CPQ."
          stats={[
            { label: "Salesforce CPQ projects delivered since 2020 ", value: "60+" },
            { label: "Faster quote-to-cash cycle on an average ", value: "30%" },
            { label: "Certified Salesforce experts on deck ", value: "60+" },
          ]}
        />

        <EnterpriseCapabilities
          title="Smarter Quotes, Faster Deals, Happier Teams"
          subtitle="We integrate AI into every facet of your sales process, transforming Salesforce CPQ into a strategic powerhouse"
          tabs={tabs}
          features={features}
        />

        <RecentResourcesSection
          heading="See How AI-Powered Salesforce CPQ Makes Sales Teams Unstoppable"
          body="A few real wins we've helped brands achieve with AI-powered Salesforce CPQ."
          subTabs={[]}
          resourcePostType="case-studies"
        />

        <LogoScroller
          heading="Brands That Trust Our Salesforce CPQ Know-How"
          subtext="From scale-ups to global giants-we help them quote faster"
        />

        <Testimonials
          title="Real Stories, Real Impact"
          description="See how we made CPQ faster, smarter, and scalable with AI inside"
        />

        <FaqSection title="FAQs" faqs={faqs} />

        {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Keep your CPQ IQ high with our freshest blog posts, guides, and AI hot takes.  "
  perPage={6}
  firstN={4}
  contentType="blogs"
  resourceType="262"
/>

        <ContactCta
          heading="Ready to Revolutionize Your Sales Process?"
          subtext="Real-time pricing. Quotes that adapt. CPQ that works for you"
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
