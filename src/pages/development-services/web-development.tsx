
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

export default function WebDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items (Web Dev Services)
  const tabs: TabItem[] = [
    {
      id: "optimization",
      label: "Site Optimization",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Web%20Development/Site%20Optimization.webp",
      ctaText: "Read More",
      ctaLink: "/development-services/web-development/site-optimization-services/"
    },
    {
      id: "frontend-backend",
      label: "Backend & Front-End Technology",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Web%20Development/Back%20&%20Front%20End%20Technology.webp",
    //  ctaText: "Read More",
     // ctaLink: "#"
    },
    {
      id: "cms",
      label: "CMS Development",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Web%20Development/CMS%20Development.webp",
      ctaText: "Read More",
      ctaLink: "/development-services/web-development/content-management-system/"
    },
    {
      id: "custom-dev",
      label: "Custom Web Development for Enterprises",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Web%20Development/CMS%20Development.webp",
    },
  ];

  // Features (Web Dev Zigzag content)
  const features: FeatureContent[] = [
    {
      id: "optimization",
      description: "We tune your site like a racecar. Lean code, tamed databases, and zero bloat. Because slow pages are so 2012, and your users didn’t sign up for a buffering marathon.",
      items: [
        { icon: Zap, title: "Give your site a speed boost, no pit stops" },
        { icon: Zap, title: "Clean code for smooth sailing performance" },
        { icon: Zap, title: "Tame your database for lightning-fast loads" },
      ],
    },
    {
      id: "frontend-backend",
      description: "Brains in the back, beauty in the front. We engineer clean code, smart logic, and interfaces that wow. Built to scale & stun.",
      items: [
        { icon: BarChart2, title: "Build scalable logic that grows with your product" },
        { icon: BarChart2, title: "Run fast with clean, framework-powered architecture" },
        { icon: BarChart2, title: "Build interactive UIs that users can’t ignore" },
      ],
    },
    {
      id: "cms",
      description: "From pixel-perfect pages to plug-and-play shops, we turn CMS into your secret weapon. AEO loves it, your team runs it, and your users? They keep coming back for more.",
      items: [
        { icon: Database, title: "Launch LLM SEO & geo-optimized sites" },
        { icon: Database, title: "Build online stores as smooth as they sell" },
        { icon: Database, title: "Craft custom websites with CMS power & style" },
      ],
    },
    {
      id: "custom-dev",
      description: "Big goals need bold builds. We craft tailored web solutions that flex with your scale, fix what’s broken and never ghost you post-launch.",
      items: [
        { icon: ShieldCheck, title: "Build custom web solutions that grow with you" },
        { icon: ShieldCheck, title: "Tackle challenges head-on with expert tech advice" },
        { icon: ShieldCheck, title: "Migrate easy and enjoy continous support" },
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
      title: "Future-Proof Your Website: AI and Web Dev Trends",
      subtitle: "A guide to the tech, tools, and strategies shaping web experiences in 2025.",
      author: "Web Dev Team",
      date: "July 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "future-proof-website"
    },
    {
      title: "How to Optimize Web Performance Without Losing Your Mind",
      subtitle: "Speed, scalability, and best practices for devs and marketers.",
      author: "Performance Lead",
      date: "July 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "web-performance-optimization"
    },
    {
      title: "Migration Made Easy: Tech Stacks, Data, and UX",
      subtitle: "How to move platforms (and data) without the drama.",
      author: "Solutions Architect",
      date: "July 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "website-migration"
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "Can you help us migrate our website to another platform?",
      a: "Yep, we handle migrations smoothly. Whether you're moving from WordPress to Webflow, Shopify to Headless, we handle full-stack migrations with zero data loss and minimal downtime.",
    },
    {
      q: "Will my site work well on mobile and all devices?",
      a: "Absolutely! We go mobile-first, so your site looks and works perfectly on any device, delivering a smooth, fast experience everywhere.",
    },
    {
      q: "Do you build websites that are SEO and AEO ready from day one?",
      a: "Yes. Every site we deliver is structured for search engine indexing and AI-powered discovery tools.",
    },
    {
      q: "How do you keep our site secure?",
      a: "We use top-tier encryption, regular audits, and industry best practices to keep your site locked down and your data safe.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="webDevelopment" />
      <Header />
      <SmartBreadcrumb />
      <main className="pt-0">

        {/* HERO Section */}
        <HeroSection
          heading="Web Development That’s Fast, Adaptable, AI-Savvy"
          subtext="Sites that load quickly, flex hard, and get what your users are here for."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Hero-Section-Banner_L2/Web%20Development.webp"
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="You’re in good company—where creativity meets clean code for perfect websites."
          stats={stats}
        />

        {/* Tab Features Section (Web Dev Services) */}
        <EnterpriseCapabilities
          title="We ssBlend AI with Web Development for Effortless User Experiences"
          subtitle="We optimize every layer of your website to ensure smooth performance and intelligent functionality"
          tabs={tabs}
          features={features}
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="See AI-Infused Web Development In Action"
          body="Brands we’ve helped create seamless, user-focused experiences."
          subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

        <LogoScroller
          heading="Trusted by Teams Who Demand Clean, Scalable Code"
          subtext="From SMBs to big leagues, we help their websites perform & convert."
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Results, Real Web Development Impact"
          description="Powered by AI and clean code. User-friendly, business ready."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="More from Our Content Repertoire"
          body="Stay in the know with the latest Web Development blog posts, guides, and AI hacks."
          subTabs={[]} // no subtabs on this page
          resources={recentResources}
        />

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Perfect Your Web Experience with a Hint of AI"
          subtext="Intuitive design, blazing speed, and rock-solid performance."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />

      </main>
      <Footer />
    </div>
  );
}
