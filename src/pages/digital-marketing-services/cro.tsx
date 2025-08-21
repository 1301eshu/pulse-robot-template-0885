
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
import ExploreMoreBlock from "@/components/exploremore";

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Hero Section Content
  const heroHeading = "CRO Services That Turn Traffic into Traction";
  const heroSubtext = "Test smarter, convert faster, and maximize every click.";
  const heroCta = "Audit Me!";

  // Trust Markers
  const statTitle = "When better conversion is the mission, we’re the team brands rely on.";
  const stats = [
    { label: "Increase in conversion rates (within 60 days)", value: "30%" },
    { label: "Faster test velocity", value: "4x" },
    { label: "Lift in form submissions on key landing pages", value: "70%" },
  ];

  // What We Do Section Content
  const capabilitiesTitle = "How Smart Strategy & Testing Power Your CRO";
  const capabilitiesSubtitle = "We blend behavior data, smart tools, and machine learning to turn maybes into yesses.";

  const tabs: TabItem[] = [
    {
      id: "vwo",
      label: "VWO",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/CRO%20/VWo.webp", // You can update with a VWO image
      ctaText: "Read More",
      ctaLink: "/marketing-analytics-services/conversion-rate-optimization-cro/vwo/"
    },
    {
      id: "optimizely",
      label: "Optimizely",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/CRO%20/Optimizely.webp",
      ctaText: "Read More",
     ctaLink: "/marketing-analytics-services/conversion-rate-optimization-cro/optimizely/"
    },
    {
      id: "adobe-target",
      label: "Adobe Target",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/CRO%20/Adobe%20Target.webp",
     ctaText: "Read More",
   ctaLink: "/marketing-analytics-services/conversion-rate-optimization-cro/adobe-target/"
    },
    {
      id: "convertcart",
      label: "ConvertCart",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/CRO%20/ConvertCart.webp",
  //    ctaText: "See ConvertCart in Action",
   //   ctaLink: "/cro-convertcart"
    },
  ];

  const features: FeatureContent[] = [
    {
      id: "vwo",
      description: "Behavior-led experimentation meets user-friendly control. From heatmaps to A/B tests, VWO helps uncover hidden friction and fix it fast.",
      items: [
        { icon: Zap, title: "See where users struggle, and solve it" },
        { icon: Zap, title: "Launch tests with speed and precision" },
        { icon: Zap, title: "Optimize funnels, forms, and CTAs" },
      ],
    },
    {
      id: "optimizely",
      description: "Enterprise-grade testing and personalization that scales with you. We use Optimizely to create experiences that convert and keep converting.",
      items: [
        { icon: BarChart2, title: "Fast, flexible experiments at every touchpoint" },
        { icon: BarChart2, title: "Personalization powered by AI and real user behavior" },
        { icon: BarChart2, title: "Roll out winning variants with confidence" },
      ],
    },
    {
      id: "adobe-target",
      description: "Personalize every click with smart targeting. Adobe Target helps serve tailored experiences in real time, backed by AI-powered deep analytics.",
      items: [
        { icon: Database, title: "Real-time personalization that works" },
        { icon: Database, title: "Test, learn, and adapt on the fly" },
        { icon: Database, title: "Segment smarter, convert faster" },
      ],
    },
    {
      id: "convertcart",
      description: "All-in-one CRO built for growth-focused teams. We use ConvertCart to optimize everything, from product pages to checkout flows.",
      items: [
        { icon: ShieldCheck, title: "Plug-and-play optimization for eCommerce and B2B" },
        { icon: ShieldCheck, title: "Smart nudges, scroll tracking, exit intent & more" },
        { icon: ShieldCheck, title: "Fewer drop-offs, more conversions" },
      ],
    },
  ];

  // Case Studies
  const recentResources: ResourceItem[] = [
    {
      title: "Case Study 1",
      subtitle: "Headline",
      author: "",
      date: "",
      readTime: "",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "/case-study-1"
    },
    {
      title: "Case Study 2",
      subtitle: "Headline",
      author: "",
      date: "",
      readTime: "",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "/case-study-2"
    },
    {
      title: "Case Study 3",
      subtitle: "Headline",
      author: "",
      date: "",
      readTime: "",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "/case-study-3"
    },
    {
      title: "Case Study 4",
      subtitle: "Headline",
      author: "",
      date: "",
      readTime: "",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "/case-study-4"
    },
  ];

  // Client Logo Section
  const logoHeading = "Brands That Trust Us to Optimize What Matters";
  const logoSubtext = "From D2C startups to B2B giants, we help them convert better, every day.";
  
  const logos = [
    
  ];
 

  // Testimonials Section
  const testimonialsTitle = "Real Brands. Real Uplift. Real Results.";
  const testimonialsDesc = "Powered by strategy, experimentation, and AI-smart tactics.";

  // FAQs
  const faqs = [
    {
      q: "How do you figure out what’s hurting conversions?",
      a: "We dig into heatmaps, user flows, session replays, and form analytics to spot drop-offs, confusion points, and dead zones.",
    },
    {
      q: "How do you decide what to test first?",
      a: "We run a full CRO audit and stack your opportunities by impact, confidence, and effort, so the biggest wins come first.",
    },
    {
      q: "Will CRO mess with my SEO or page speed?",
      a: "Not on our watch. We implement scripts the right way - light, async, and performance-friendly. Google’s happy. So is your bounce rate.",
    },
    {
      q: "What makes your CRO different?",
      a: "It’s smart from start to finish. We combine behavior insights with the right tools, so you get more impact, faster.",
    },
  ];

  // More Resources Section
  const moreResources = [
    {
      title: "More from Our Content Repertoire",
      subtitle: "Stay ahead with the sharpest CRO hacks, insights, blog posts and AI updates to stay ahead.",
      author: "",
      date: "",
      readTime: "",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "/more-cro-content"
    },
    {
      title: "More from Our Content Repertoire",
      subtitle: "Stay ahead with the sharpest CRO hacks, insights, blog posts and AI updates to stay ahead.",
      author: "",
      date: "",
      readTime: "",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "/more-cro-content"
    },
    {
      title: "More from Our Content Repertoire",
      subtitle: "Stay ahead with the sharpest CRO hacks, insights, blog posts and AI updates to stay ahead.",
      author: "",
      date: "",
      readTime: "",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "/more-cro-content"
    }
  ];

  // CTA Section
  const ctaHeading = "Let’s Maximize Conversions with Smart CRO";
  const ctaSubtext = "Better UX, sharper insights, and conversions that don’t quit.";
  const ctaButton = "Talk to an Expert";

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="cro" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading={heroHeading}
          subtext={heroSubtext}
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/digital%20marketing%20hero%20banners/CRO.webp"
          buttonText={heroCta}
        />

        {/* Statistics Section */}
        <EditableStatSection
          title={statTitle}
          stats={stats}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title={capabilitiesTitle}
          subtitle={capabilitiesSubtitle}
          tabs={tabs}
          features={features}
        />

         {/* More Resources Section */}
        <RecentResourcesSection
          heading=" See How Smart CRO Helped Brands Convert Better"
          body=" Folks we’ve helped turn traffic into real business impact "
          subTabs={[]}
          resources={moreResources}
        />

        {/* Customer Logo Section */}
        <LogoScroller
          heading={logoHeading}
          subtext={logoSubtext}
        
        />

        {/* Testimonials */}
        <Testimonials
          title={testimonialsTitle}
          description={testimonialsDesc}
        />

        {/* FAQs */}
        <FaqSection title="FAQ's" faqs={faqs} />

        {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Stay ahead with the sharpest CRO hacks, insights, blog posts and AI updates to stay ahead.  "
  perPage={6}
  firstN={4}
  contentType="blogs"
/>

        {/* Call to Action */}
        <ContactCta
          heading={ctaHeading}
          subtext={ctaSubtext}
          buttonLabel={ctaButton}
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
