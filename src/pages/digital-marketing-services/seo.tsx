
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

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items (Zigzag section - services)
  const tabs: TabItem[] = [
    {
      id: "onpage-offpage",
      label: "On-Page LLM SEO Optimization",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/SEO/Off-Page,%20LLM%20SEO%20Optimization.webp",
      ctaText: "Read More",
      ctaLink: "/digital-marketing-services/seo/on-page-seo/"
    },
    {
      id: "offpage-offpage",
      label: "Off-Page LLM SEO Optimization",
      icon: Zap,
      image: "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Digital%20Marketing/SEO/Off-Page%20LLM%20SEO%20Optimization.webp",
      ctaText: "Read More",
      ctaLink: "/digital-marketing-services/seo/off-page-seo/"
    },
    {
      id: "content",
      label: "SEO Content Creation",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/SEO/SEO%20Content%20Creation.webp",
      ctaText: "Read More",
      ctaLink: "/digital-marketing-services/seo/content-marketing/"
    },
    {
      id: "technical",
      label: "Technical SEO & Site Auditing",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/SEO/Technical%20SEO%20&%20Site%20Auditing.webp",
      ctaText: "Read More",
      ctaLink: "/digital-marketing-services/seo/technical-seo/"
    },
    {
      id: "outreach",
      label: "Guest Posting & Strategic Outreach",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/SEO/Guest%20Posting%20&%20Strategic%20Outreach.webp",
      ctaText: "Read More",
      ctaLink: "/digital-marketing-services/seo/guest-posting/"
    },
    {
      id: "ai-readiness",
      label: "AI SEO Readiness",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/SEO/AI%20SEO%20Readiness.webp",
   //   ctaText: "Read More",
   //   ctaLink: "/digital-marketing-services/seo/ai-seo-readiness-calculator/"
    },
  ];

  // Features (Zigzag section content)
  const features: FeatureContent[] = [
    {
      id: "onpage-offpage",
      description: "From intent-driven keywords to AI-friendly page structure, we optimize every on-page element to work better with search engines, voice assistants, and generative AI.",
      items: [
        { icon: Zap, title: "LLM-picked keywords that get what users mean " },
        { icon: Zap, title: "Meta tags + Q&A that talk fluent AI (AEO-style) " },
        { icon: Zap, title: "Structured data + entity-rich content for AI citations" },
      ],
    },
    {
      id: "offpage-offpage",
      description: "From AI-trusted backlinks to authority signals that travel across the web, we amplify your content’s reach so search engines & generative AI rank and cite you more often. ",
      items: [
        { icon: Zap, title: "Backlinks from high-authority, AI-visible sources " },
        { icon: Zap, title: "Consistent brand and entity references across platforms " },
        { icon: Zap, title: "Inclusion in knowledge graphs and reputable data sources " },
      ],
    },
    {
      id: "content",
      description: "From trusted backlinks to authority signals that travel across the web, we amplify your content’s reach so search engines & generative AI rank and cite you more often. ",
      items: [
        { icon: BarChart2, title: "LLM-tuned stories that hit B2B intent" },
        { icon: BarChart2, title: "Blogs, videos, and visuals tailored by AI insights" },
        { icon: BarChart2, title: "Content built to rank, click, and keep talking" },
      ],
    },
    {
      id: "technical",
      description: "We train your site to speak fluent SEO, with the help of AI that knows exactly what search engines want.",
      items: [
        { icon: Database, title: "Audits that speak search engine & LLM fluently" },
        { icon: Database, title: "We clean up links, speed, and structure" },
        { icon: Database, title: "Sites prepped to be crawled, indexed, and loved by AI" },
      ],
    },
    {
      id: "outreach",
      description: "No spammy link farms, no fluff. Just high-authority placements, LLM-informed pitches, and backlinks that mean business.",
      items: [
        { icon: ShieldCheck, title: "Authority spots, not random blog dumps" },
        { icon: ShieldCheck, title: "Smart backlinks with traffic-driving power" },
        { icon: ShieldCheck, title: "Outreach that opens the right doors" },
      ],
    },
    {
      id: "ai-readiness",
      description: "Optimize your site for AI-powered engines and LLM-generated answers, so you show up where search is headed.",
      items: [
        { icon: Heart, title: "Structure content to get cited in LLM tools like ChatGPT" },
        { icon: Heart, title: "Use schema and formatting built for machine-readability" },
        { icon: Heart, title: "Stay ahead of AI-first SEO trends and algorithm shifts" },
      ],
    },
  ];

  // Trust Markers (Statistics)
  const stats = [
    { label: "Collective years of industry know-how", value: "100+" },
    { label: "Uptick in visibility", value: "30%" },
    { label: "SEO specialists on deck", value: "50+" },
  ];

  // Resources (RecentResourcesSection)
  const recentResources: ResourceItem[] = [
    {
      title: "AI-First SEO: What Marketers Need Now",
      subtitle: "Key shifts as search engines get smarter (and what to do about it).",
      author: "SEO Strategy Team",
      date: "July 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "ai-first-seo"
    },
    {
      title: "The New Rules of Technical SEO",
      subtitle: "Why site health and AI readiness are now inseparable.",
      author: "Technical SEO Lead",
      date: "July 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "technical-seo"
    },
    {
      title: "Getting Cited in LLMs and Chatbots",
      subtitle: "From schema to outreach: what helps your brand get referenced.",
      author: "Outreach Lead",
      date: "July 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "llm-seo-citations"
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "How does LLM-powered SEO level up keyword strategies?",
      a: "LLMs get what people really mean. That means smarter content, better matches, and rankings that stick.",
    },
    {
      q: "How do you get content into AI search results (GEO)?",
      a: "We serve up well-cited, high-authority content that AI loves to quote — perfect for SGE, chatbots, and all things generative.",
    },
    {
      q: "Do you optimize for voice, mobile, and AI assistants?",
      a: "You bet. We follow AEO rules and let LLMs guide the structure so your content talks fluently across screens, speakers, and search bars.",
    },
    {
      q: "How do you make global SEO work in the age of AI?",
      a: "We mix GEO know-how with multilingual SEO. Think smart tags, local flavor, and content that travels well across borders and bots.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="seo" />
      <Header />
      <SmartBreadcrumb />
      <main className="pt-0">

        {/* HERO Section */}
        <HeroSection
          heading="SEO Services with an LLM-First Mindset"
          subtext="Designed for how people search now, not how they used to. From algorithms to audience needs, LLM SEO bridges the gap."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Hero%20Section_L2_Bannera/SEO.webp"
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="When scaling smarter is the goal, we’re the company brands keep"
          stats={stats}
        />

        {/* Tab Features Section (We Blend LLM Smarts into Your SEO Strategy) */}
        <EnterpriseCapabilities
          title="We Blend LLM Smarts into Your SEO Strategy"
          subtitle="LLM-powered insights that optimize every crawl, click, and keyword with precision and intent matching."
          tabs={tabs}
          features={features}
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="Watch How AI-Infused SEO Owns the Game"
          body="Brands we’ve helped climb the SERPs with LLM-led content & AEO-friendly strategies"
          subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

        <LogoScroller
          heading="Brands that Recognize Our SEO Brilliance"
          subtext="Local gems or global brands, we scale their search story."
          
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Wins, Real Growth Stories"
          description="No lag, all lift. Powered by AI, built on brains"
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="More from Our Content Repertoire"
          body="Stay ahead with the freshest SEO tips, tools, and AI tricks to keep your rankings sharp."
          subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

        {/* Call to Action */}
        <ContactCta
          heading="Let's shift from SEO-first to AI-first marketing & show up where it matters."
          subtext="Structured content and boosted visibility at every high-intent moment."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />

      </main>
      <Footer />
    </div>
  );
}
