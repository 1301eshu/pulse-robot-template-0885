// src/pages/services/MarketingAutomation.tsx

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
import ExploreMoreBlock from "@/components/exploremore";

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items (Zigzag section - services)
  const tabs: TabItem[] = [
    {
      id: "explainer",
      label: "Explainer Videos",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Motion%20Graphics/Explainer%20Videos.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "story",
      label: "Brand Storytelling",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Motion%20Graphics/Brand%20Storytelling.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "social",
      label: "Social Media Motion Graphics",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Motion%20Graphics/Social%20Media%20Motion%20Graphics.webp",
      ctaText: "",
      ctaLink: ""
    },
    {
      id: "logo",
      label: "Motion Logo Design",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Motion%20Graphics/Motion%20Logo%20Design.webp",
      ctaText: "",
      ctaLink: ""
    },
  ];

  // Features (Zigzag section content)
  const features: FeatureContent[] = [
    {
      id: "explainer",
      description: "Complex idea? We'll simplify it with animated brilliance, AI cues, and visuals that stick like your favorite jingle.",
      items: [
        { icon: Zap, title: "Break down your value prop with storyboards that spark." },
        { icon: Zap, title: "Use data-driven design to grab attention in seconds." },
        { icon: Zap, title: "Add pro voiceovers, overlays, and transitions that convert." },
      ],
    },
    {
      id: "story",
      description: "Stories that vibe. AI meets aesthetics to help your brand tell better tales-on-screen, on-brand, on-point.",
      items: [
        { icon: Heart, title: "Craft emotional narratives with animated precision." },
        { icon: Heart, title: "Build consistent visual identity of your brand." },
        { icon: Heart, title: "Guide viewers through immersive, memorable brand journeys." },
      ],
    },
    {
      id: "social",
      description: "Stand out in scroll-land. AI-personalized visuals that are impossible to ignore (and even harder not to engage).",
      items: [
        { icon: BarChart2, title: "Animate content for platform-native performance." },
        { icon: BarChart2, title: "Use behavior insights to craft scroll-stopping formats." },
        { icon: BarChart2, title: "Design for engagement (likes, saves, shares, action)." },
      ],
    },
    {
      id: "logo",
      description: "Your logo but living its best animated life. High-impact intros, outros, and identity moments-made to be remembered.",
      items: [
        { icon: Database, title: "Reflect brand ethos in every animated frame." },
        { icon: Database, title: "Design for cross-platform versatility, from reels to presentations." },
        { icon: Database, title: "Elevate your logo into a story-driven signature." },
      ],
    },
  ];

  // Trust Markers (Statistics)
  const stats = [
//    { label: "Years of motion mastery and counting", value: "30+" },
    { label: "Boost in conversion rates post-launch", value: "45%" },
    { label: "Motion design experts on deck", value: "8+" },
    { label: "Brands leveled-up with scroll-stopping motion assets", value: "70+" },
  ];
 

  // FAQs
  const faqs = [
    {
      q: "How do you make sure our motion graphics are on-brand?",
      a: "We use AI-assisted brand consistency checks, work from your guidelines, and match every frame to your identity goals.",
    },
    {
      q: "What tools do you use to design motion graphics?",
      a: "We use After Effects, Illustrator, Figma, and XD-powered by AI features for faster, smarter design iterations.",
    },
    {
      q: "How long does a typical motion graphics project take?",
      a: "Depends on complexity, but most projects are wrapped in 2–4 weeks. We don’t do delays-we do deliverables.",
    },
    {
      q: "Can I get social versions of my animated videos?",
      a: "Yes! We customize for every platform-Insta Reels, YouTube Shorts, LinkedIn videos-optimized by audience behavior data.",
    },
    {
      q: "Do you work with in-house designers or external teams?",
      a: "Both. We integrate seamlessly with your design ecosystem-Slack, Figma, Trello, or even whiteboard screenshots.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="motionGraphics" />
      <Header />
      <SmartBreadcrumb />
      <main className="pt-0">

        {/* HERO Section */}
        <HeroSection
          heading="Motion Graphics That Animate, Persuade, and Convert-with AI Inside"
          subtext="Storytelling that scrolls, swipes, and sticks. Welcome to the next gen of motion design."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Design%20Services/Hero-Section-Banner_L2/Motion%20Graphics.webp"
        />

        {/* Statistics Section */}
        <EditableStatSection
          title="You’re in good company-with brands that trust motion to do the talking."
          stats={stats}
        />

        {/* Tab Features Section (What We Do) */}
        <EnterpriseCapabilities
          title="What We Do with Motion Graphics"
          subtitle="We craft, animate, and amplify your visual stories with AI-powered motion smarts for real impact."
          tabs={tabs}
          features={features}
        />

         {/* Recent Resources Section */}
        <RecentResourcesSection
          heading=" See What Smart Motion Design Looks Like in Action "
          body="Peek how motion + strategy + AI = engagement that actually means business. "
          subTabs={[]} // no subtabs on this page
          resourcePostType="case-studies"
        />

        

        <LogoScroller
          heading="Brands That Trust Our Motion Mojo"
          subtext="From bold startups to global icons- we help them all move smarter."
         
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Stories, Real Motion Success"
          description="It's not luck. It's storytelling, strategy, and a little animation swagger."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

         {/* Recent Resources Section */}
  <ExploreMoreBlock
           heading=" More From Our Design Arsenal "
           body="Our latest takes on mobile design, AI-led UX, and what keeps users coming back. "
           perPage={6}
           firstN={4}
           contentType="blogs"
           resourceType="285"
         />
        

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Animate Your Brand with AI-Backed Brilliance"
          subtext="Storytelling, but with sparks. Strategy, but with style. Let’s make things move-literally."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />

       

      </main>
      <Footer />
    </div>
  );
}
