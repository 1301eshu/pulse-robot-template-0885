// Full copy of /services/marketing-sales-collateral-design

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
import ExploreMoreBlock from "@/components/exploremore";
import { FileText, Package, Sparkles, Zap, BarChart2, Database, ShieldCheck, Heart, Wrench, Repeat } from "lucide-react";

export default function MarketingSalesCollateralDesign() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  // Tabs → mapped to collateral offerings from the doc
  const tabs: TabItem[] = [
    {
      id: "sales-deck",
      label: "Sales Deck Design",
      icon: FileText,
      image: "https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Design%20Services/Marketing%20Sales%20Collateral/Sales%20Deck%20Design.webp",
    },
    {
      id: "one-pagers",
      label: "One-Pagers & Battle Cards",
      icon: Database,
      image: "https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/design%20l2/One-Pagers%20&%20Battle%20Cards.webp",
    },
    {
      id: "ai-copy",
      label: "AI-Powered Copy & Creative",
      icon: Sparkles,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Marketing%20%20Sales%20Collateral%20Design/Al-Powered%20Copy%20&%20Creative.webp",
    },
    {
      id: "campaign-kits",
      label: "Campaign Collateral Kits",
      icon: Package,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Marketing%20%20Sales%20Collateral%20Design/Campaign%20Collateral%20Kits.webp",
    },
    {
      id: "enablement",
      label: "Sales Enablement Assets",
      icon: Wrench,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Marketing%20%20Sales%20Collateral%20Design/Sales%20Enablement%20Assets.webp",
    },
    {
      id: "ongoing-support",
      label: "Ongoing Collateral Support",
      icon: Repeat,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Marketing%20%20Sales%20Collateral%20Design/Ongoing%20Collateral%20Support.webp",
    },
  ];

  // Features under each tab (copy from the doc)
  const features: FeatureContent[] = [
    {
      id: "sales-deck",
      description:
        "Story-driven slides with persuasive visuals and AI-backed insights to guide every buyer conversation.",
      items: [
        { icon: FileText, title: "Story structure that maps to buyer psychology" },
        { icon: FileText, title: "Visuals designed to simplify and persuade" },
        { icon: FileText, title: "AI-assisted performance insights baked into layouts" },
      ],
    },
    {
      id: "one-pagers",
      description:
        "Clear, confident collateral with persona-specific messaging and competitive differentiation, ready to deploy.",
      items: [
        { icon: Database, title: "Crisp, compelling collateral for prospects and partners" },
        { icon: Database, title: "Competitor analysis & messaging frameworks" },
        { icon: Database, title: "Dynamic content tailored to personas and pain points" },
      ],
    },
    {
      id: "ai-copy",
      description:
        "Messaging optimized by AI for tone, variation, and conversion refined by real-time campaign data.",
      items: [
        { icon: Sparkles, title: "Headlines, CTAs, copy optimized with AI tone testing" },
        { icon: Sparkles, title: "Multiple variations auto-generated for rapid A/B testing" },
        { icon: Sparkles, title: "Creative fine-tuned by real-time campaign data" },
      ],
    },
    {
      id: "campaign-kits",
      description:
        "Launch-ready asset kits with multi-channel variants that balance brand consistency and creative performance.",
      items: [
        { icon: Package, title: "Integrated kits for launches & GTM pushes" },
        { icon: Package, title: "Social, email, landing page, and ad variants" },
        { icon: Package, title: "Visual consistency + performance diversity = win" },
      ],
    },
    {
      id: "enablement",
      description:
        "Modular tools like calculators, templates, and leave-behinds designed to support reps through every stage.",
      items: [
        { icon: Wrench, title: "Case study templates, ROI calculators, leave-behinds" },
        { icon: Wrench, title: "Modular design that flexes across deal stages" },
        { icon: Wrench, title: "Interactive and PDF-ready formats" },
      ],
    },
    {
      id: "ongoing-support",
      description:
        "Fast, flexible design sprints delivering fresh, on-brand assets across ads, content, and sales materials.",
      items: [
        { icon: Repeat, title: "Monthly creative sprints or ad-hoc production" },
        { icon: Repeat, title: "Fast-turnaround from ads to ebooks" },
        { icon: Repeat, title: "Trend-aware updates to keep assets fresh" },
      ],
    },
  ];

  // Resources (kept structure; content titles can remain or be swapped later)
  const recentResources: ResourceItem[] = [
    {
      title: "Agentic AI: The Silent Force Reshaping Marketing Ops",
      subtitle:
        "Wait, so this thing just... does it? Like, by itself? Yes. And no, it's not magic. It's called Agentic AI and it's the next evolution of marketing automation you...",
      author: "Sneha Kumari",
      date: "July 7, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "hubspot-chatgpt-connector",
    },
    {
      title: "The AI Shortlist: Top Use Cases for Marketing Ops That You Must Know",
      subtitle:
        "Back in the day, Marketing Ops used to mean fighting timelines and making friends with a dozen dashboards...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "google-ads-roi-increase",
    },
    {
      title: "Marketo & AI: Best Practices for Smarter Segmentation and Nurturing",
      subtitle:
        "You've got Marketo. You've got data. You've got 47 tabs open. Now what?...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "marketo-ai-segmentation",
    },
  ];

  // FAQs from the doc
  const faqs = [
    {
      q: "What kinds of collateral do you design?",
      a: "Sales decks, one-pagers, campaign kits, pitch materials, case studies, social ads, landing pagesif its part of your funnel, we design it.",
    },
    {
      q: "Do you write the copy too?",
      a: "Yes. We combine strategic messaging with AI-enhanced copywriting and designso every word works.",
    },
    {
      q: "Can you refresh our existing materials?",
      a: "Absolutely. We audit your current collateral and upgrade it for clarity, consistency, and performance.",
    },
    {
      q: "Can we get ongoing design support?",
      a: "Yes. We offer flexible retainers for collateral production, from monthly drops to full GTM support packs.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="marketingSalesCollateralDesign" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading="AI-Powered Marketing & Sales Collateral That Closes the Gap Between Interest and Action"
          subtext="From pitch decks to product sheets, get conversion-focused assets crafted with strategic design and AI insights."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Design%20Services/Marketing%20Assets.webp"
        />

        {/* Statistics / Trust Markers */}
        <EditableStatSection
          title="You’re in good company-with brands elevating every touchpoint through strategic collateral design. "
          stats={[
            { label: "Assets designed across funnels, teams & touchpoints", value: "500+" },
            { label: "Sales and marketing teams enabled with better visuals", value: "40+" },
            { label: "Avg. increase in asset engagement and response rates", value: "22%" },
          ]}
        />

        {/* What We Do */}
        <EnterpriseCapabilities
          title="What We Do with Marketing & Sales Collateral Design"
          subtitle="From pitch decks to social ads, we craft on-brand, on-target collateral amplified by AI and strategy."
          tabs={tabs}
          features={features}
        />

        {/* Case Study / Recent Resources (reusing component) */}
        <RecentResourcesSection
          heading="See What High-Impact Collateral Looks Like"
          body="A few wins we've helped unlock with strategic, performance-driven asset design."
          subTabs={[]}
          resources={recentResources}
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading="Brands That Trust Our Collateral to Convert"
          subtext="From early-stage ventures to established leaders we power the assets behind high-performing teams."
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real Design Wins"
          description="When collateral starts converting, the stories write themselves."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading="  More from Our Content Repertoire   "
  body="Fresh takes on sales design, campaign assets, and AI-powered creative.  "
  perPage={6}
  firstN={4}
  contentType="blogs"
    resourceType="285"

/>

        {/* CTA */}
        <ContactCta
          heading="Let's Build Collateral That Closes Deals, Not Just Fills Folders"
          subtext="Get high-impact, AI-optimized assets designed to persuade, scale across channels, and drive real revenue."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
