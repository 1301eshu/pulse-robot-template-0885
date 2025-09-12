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
import SmartStackSection from "@/components/ui/component_14";
import DynamicSEO from "@/components/DynamicSEO";
import EnterpriseCapabilities, { TabItem, FeatureContent } from "@/components/ui/component_2";

// Icons
import { Zap, BarChart2, Database, ShieldCheck, Clock, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items
  const tabs: TabItem[] = [{
    id: "marketing",
    label: "Web Development",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Slider%20L1/Web%20Development.webp" // replace with actual
  }, {
    id: "analytics",
    label: "Mobile App Development",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Slider%20L1/Mobile%20App%20Development.webp"
  }, {
    id: "integration",
    label: "eCommerce Development",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Slider%20L1/ecommerce%20development.webp"
  }, {
    id: "Development",
    label: "Testing & QA",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Slider%20L1/testing%20QA.webp"
  }, {
    id: "security",
    label: "DevOps",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Slider%20L1/Devops.webp"
  }];

  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
  const features: FeatureContent[] = [{
    id: "marketing",
    items: [{
      icon: Zap,
      title: "Front-ends that load fast and look sharp "
    }, {
      icon: Zap,
      title: "SEO-ready, scalable, and beautifully responsive  "
    }, {
      icon: Zap,
      title: "Built with clean code + AI-assisted testing  "
    }]
  }, {
    id: "analytics",
    items: [{
      icon: BarChart2,
      title: "Native and cross-platform builds, user-first always  "
    }, {
      icon: BarChart2,
      title: "AI-based behavior mapping + smart UX triggers  "
    }, {
      icon: BarChart2,
      title: "Apps that convert, retain, and perform under pressure "
    }]
  }, {
    id: "integration",
    items: [{
      icon: Database,
      title: "Shopify, Magento, Woo, or custom-we’ve got it "
    }, {
      icon: Database,
      title: "Performance-tuned storefronts that scale fast "
    }, {
      icon: Database,
      title: "AI-powered personalization and smarter checkout flows "
    }]
  }, {
    id: "security",
    items: [{
      icon: ShieldCheck,
      title: "CI/CD pipelines built for speed and scale   "
    }, {
      icon: ShieldCheck,
      title: "Infra that flexes with your traffic "
    }, {
      icon: ShieldCheck,
      title: "Monitoring + AI alerts = uptime insurance   "
    }]
  }, {
    id: "Development",
    items: [{
      icon: ShieldCheck,
      title: "Manual + automated testing across every device "
    }, {
      icon: ShieldCheck,
      title: " AI that flags issues before users find them"
    }, {
      icon: ShieldCheck,
      title: "Your bug backlog? Handled before launch day"
    }]
  }];

  // FAQ List
  const faqs = [{
    q: "What tech stacks do you specialize in?",
    a: " We’re full-stack pros fluent in React, Node, Python, PHP, .NET, and more. "
  }, {
    q: " Do you offer post-launch support? ",
    a: " Yep-ongoing maintenance, optimization, and scaling built into every contract."
  }, {
    q: "Can I start small and scale later?",
    a: " Absolutely. We’re great at MVPs that grow into monsters. "
  }, {
    q: "Do you integrate AI into your builds?",
    a: "Yes. From smart forms to automated workflows-we make apps think."
  }];
  return <div className="bg-white text-gray-900">
      <DynamicSEO page="development" />
      <SmartBreadcrumb />
      <Header />
      <main className="pt-0 py-0">
        {/* HERO Section */}
        <HeroSection heading="AI-Led Development That Builds Fast, Scales Smart, and Just Works" subtext="We design, develop, and deploy experiences that feel seamless and perform like beasts. " bgImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Value%20Proposition%20/8302_gqqgrs_1.webp" rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/Development.webp" />

        {/* Statistics Section */}
        <EditableStatSection title="You’re in good company-alongside brands that trust us to build smart and scale clean.  " stats={[{
        label: "Successful Project Launches for Startups & Enterprises  ",
        value: "200+"
      }, {
        label: "Certified Developers in React, Python, iOS & Salesforce",
        value: "60+"
      }, {
        label: "Launches Delivered On Time  ",
        value: "98%"
      }]} />

        {/* Tab Features Section */}
        <EnterpriseCapabilities title=" Smart Code. Seamless UX. AI-Powered Builds. " subtitle=" From MVP to enterprise, we craft dev ecosystems that grow with you." tabs={tabs} features={features} />

       

        <SmartStackSection />

        <LogoScroller heading=" Code We’ve Built. Brands That Back It. " subtext=" From stealth startups to Fortune 500s, they trust our stack."  
          />

        {/* Testimonials */}
        <Testimonials title=" Real Stories, Real Dev Triumphs " description=" Every line of code? Measured, monitored, and made to win. " />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

        {/* Call to Action */}
        <ContactCta heading=" Let’s Build Something Brilliant-Together " subtext=" AI-powered. Pixel-perfect. Ready to go live?" buttonLabel="Talk to an Expert" buttonLink="/contact-us" />
      </main>
      <Footer />
    </div>;
}
