
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

export default function MobileAppDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items (Mobile App Dev Services)
  const tabs: TabItem[] = [
    {
      id: "strategy",
      label: "Strategy & Consulting",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Mobile%20Development/Stratedgy%20Consulting.webp",
    },
    {
      id: "implementation",
      label: "Implementation & Setup",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Mobile%20Development/Implementaion%20&%20Setup.webp",
    },
    {
      id: "architecture",
      label: "Architecture & Design",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Mobile%20Development/Architecture%20Design.webp",
    },
    {
      id: "support",
      label: "Support & Maintenance",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Mobile%20Development/Support%20&%20maintainance.webp",
    },
  ];

  // Features (Mobile App Dev Zigzag content)
  const features: FeatureContent[] = [
    {
      id: "strategy",
      description: "From roadmap to rollout, we bring your mobile app to life, smoothly.",
      items: [
        { icon: Zap, title: "Product strategy rooted in user behavior and market gaps" },
        { icon: Zap, title: "Stacks that run fast, scale hard, don't box you in" },
        { icon: Zap, title: "Launch handled end to end - QA, app stores, post-drop flow, what have you" },
      ],
    },
    {
      id: "implementation",
      description: "Built for swipes, taps, and scale. Whether it’s iOS, Android, or the web, we make AI-backed apps that move fast.",
      items: [
        { icon: BarChart2, title: "iOS & Android apps that work like a charm" },
        { icon: BarChart2, title: "Native & cross-platform magic to take your app places" },
        { icon: BarChart2, title: "AI-led progressive apps that turn functionality into fun" },
      ],
    },
    {
      id: "architecture",
      description: "It’s not just wireframes and logic, it’s mobile flow, visual rhythm, and rock-solid tech.",
      items: [
        { icon: Database, title: "AI-led architecture for speed, reliability & future growth" },
        { icon: Database, title: "Designs that perfectly align with your brand goals" },
        { icon: Database, title: "Effortless user flows that keep your audience hooked" },
      ],
    },
    {
      id: "support",
      description: "Think of us as your post-launch pit crew—fixing issues fast, preventing the rest, and keeping users happy.",
      items: [
        { icon: ShieldCheck, title: "Non-stop security monitoring to keep the bad guys out" },
        { icon: ShieldCheck, title: "Vulnerability reports that catch problems before they catch you" },
        { icon: ShieldCheck, title: "Routine audits that keep your app running smooth" },
      ],
    },
  ];

  // Trust Markers (Statistics)
  const stats = [
    { label: "Combined years of full-stack development experience", value: "200+" },
    { label: "Frontend, backend, and cloud technologies mastered", value: "60+" },
    { label: "Custom websites built for startups, enterprises, and everything in between", value: "150+" },
  ];

  // FAQs
  const faqs = [
    {
      q: "What tech stack do you use?",
      a: "We’re fluent in Swift, Kotlin, React Native, Flutter—and whatever works best for you.",
    },
    {
      q: "Can you turn my rough idea into a full app?",
      a: "100%. We take your napkin sketch and turn it into something you’ll want to show off.",
    },
    {
      q: "Do you help with app store submissions?",
      a: "Yep. We handle the whole process—from icons to guidelines to going live.",
    },
    {
      q: "How do you ensure my app is secure?",
      a: "We build with security-first frameworks, encrypt data, and run regular vulnerability checks.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="mobileAppDevelopment" />
      <Header />
      <SmartBreadcrumb />
      <main className="pt-24">

        {/* HERO Section */}
        <HeroSection
          heading="AI-Powered Mobile Apps Built for Growth and Engagement"
          subtext="Apps that think fast, move smart, and serve your users instantly."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Hero-Section-Banner_L2/Mobile%20App%20Development%20Servivces.webp"
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="You’re in the right place—where mobile innovation drives real growth."
          stats={stats}
        />

        {/* Tab Features Section (Mobile App Dev Services) */}
        <EnterpriseCapabilities
          title="How We Blend AI into Mobile App Development"
          subtitle="From native to hybrid, we design mobile experiences that adapt, personalize, and perform—powered by AI."
          tabs={tabs}
          features={features}
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="See Smarter, AI-Driven Mobile Apps in Action"
          body="Brands we've helped craft apps for seamless, intuitive user journeys"
          subTabs={[]} // no subtabs on this page
          resourceType="261"
        />

        <LogoScroller
          heading="Brands That Trust Our App Development Expertise"
          subtext="Whether startups or giants, we build mobile apps that stick."
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Results, Real Mobile App Impact"
          description="Smooth apps, sharp design, AI-enhanced. Built to perform"
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

       {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Stay in the know with the latest Mobile App Development blog posts, guides, and AI hacks.  "
  perPage={6}
  firstN={4}
  contentType="blogs"
/>

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Build Smarter Mobile Apps with the Midas Touch of AI"
          subtext="Slick design, smooth performance, and user love—baked in."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />

      </main>
      <Footer />
    </div>
  );
}
