import { useState } from "react";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import FaqSection from "@/components/ui/component_5";
import ContactCta from "@/components/ui/component_6";
import HeroSection from "@/components/ui/component_7";
import LogoScroller from '@/components/ui/component_13';
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import EnterpriseCapabilities, {
  TabItem,
  FeatureContent,
} from "@/components/ui/component_2";
import { Zap, BarChart2, Database, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

export default function SalesforceNonprofitCloud() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tabs: TabItem[] = [
    {
      id: "implementation",
      label: "Nonprofit Cloud Implementation",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Salesforce%20Nonprofit%20Cloud%20/nonprofit%20Cloud%20Implementation.webp",
    },
    {
      id: "fundraising",
      label: "Fundraising & Donor Management",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Salesforce%20Nonprofit%20Cloud%20/Fundraising%20&%20Donor%20management.webp",
    },
    {
      id: "programs",
      label: "Program Management",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Salesforce%20Nonprofit%20Cloud%20/Program%20management.webp",
    },
    {
      id: "engagement",
      label: "Constituent Engagement",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Salesforce%20Nonprofit%20Cloud%20/Constitueint%20Engagement.webp",
    },
  ];

  const features: FeatureContent[] = [
    {
      id: "implementation",
      items: [
        {
          icon: Zap,
          title: "Complete Nonprofit Cloud setup and configuration",
        },
        {
          icon: Zap,
          title: "Custom nonprofit workflow automation",
        },
        {
          icon: Zap,
          title: "Grant management system integration",
        },
      ],
    },
    {
      id: "fundraising",
      items: [
        {
          icon: BarChart2,
          title: "Comprehensive donor relationship management",
        },
        {
          icon: BarChart2,
          title: "Campaign tracking and analytics",
        },
        {
          icon: BarChart2,
          title: "Major gift pipeline management",
        },
      ],
    },
    {
      id: "programs",
      items: [
        {
          icon: Database,
          title: "Program delivery tracking and outcomes",
        },
        {
          icon: Database,
          title: "Case management for beneficiaries",
        },
        {
          icon: Database,
          title: "Impact measurement and reporting",
        },
      ],
    },
    {
      id: "engagement",
      items: [
        {
          icon: ShieldCheck,
          title: "Volunteer management and coordination",
        },
        {
          icon: ShieldCheck,
          title: "Member engagement strategies",
        },
        {
          icon: ShieldCheck,
          title: "Multi-channel communication tools",
        },
      ],
    },
  ];

  const recentResources: ResourceItem[] = [
    {
      title: "Maximizing Donor Engagement with Nonprofit Cloud",
      subtitle: "How nonprofit organizations are increasing donor retention and lifetime value...",
      author: "Sneha Kumari",
      date: "July 7, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "nonprofit-donor-engagement"
    },
    {
      title: "Program Impact Measurement Best Practices",
      subtitle: "Tracking and reporting program outcomes effectively with Salesforce Nonprofit Cloud...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "program-impact-measurement"
    },
    {
      title: "Grant Management Automation Strategies",
      subtitle: "Streamlining grant applications, tracking, and reporting processes...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "grant-management-automation"
    },
  ];

  const faqs = [
    {
      q: "What is Salesforce Nonprofit Cloud and how does it differ from standard Salesforce?",
      a: "Nonprofit Cloud is specifically designed for nonprofit organizations with features like donor management, grant tracking, program management, and volunteer coordination built on the Salesforce platform.",
    },
    {
      q: "Can Nonprofit Cloud handle complex fundraising campaigns?",
      a: "Yes, Nonprofit Cloud provides comprehensive campaign management tools including multi-channel tracking, donor segmentation, and automated communication workflows.",
    },
    {
      q: "How does Nonprofit Cloud help with grant management?",
      a: "The platform offers grant lifecycle management including application tracking, requirements management, reporting automation, and compliance monitoring.",
    },
    {
      q: "Does Nonprofit Cloud integrate with existing nonprofit tools?",
      a: "Yes, we can integrate Nonprofit Cloud with existing fundraising tools, accounting systems, and other nonprofit-specific applications.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <SmartBreadcrumb />
      <main className="">
        <HeroSection
          heading="Empower Your Mission with Salesforce Nonprofit Cloud"
          subtext="Transform how you manage donors, programs, and impact with purpose-built nonprofit solutions."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://res.cloudinary.com/dar70fhfi/image/upload/v1753254850/06_do0uli.png"
        />

        <EditableStatSection
          title="Driving Impact for Nonprofit Organizations"
          stats={[
            { label: "Donor Retention Improvement", value: "40%" },
            { label: "Fundraising Efficiency Increase", value: "35%" },
            { label: "Program Outcome Tracking", value: "100%" },
          ]}
        />

        <EnterpriseCapabilities
          title="Comprehensive Nonprofit Solutions"
          subtitle="From donor management to program delivery, we help nonprofits maximize their impact."
          tabs={tabs}
          features={features}
        />

        <RecentResourcesSection
          heading="Nonprofit Innovation Insights"
          subTabs={[]}
          resources={recentResources}
        />

        <LogoScroller
          heading="Trusted by Mission-Driven Organizations"
          subtext="Nonprofits worldwide amplify their impact with our Salesforce expertise"
          logos={[
            'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
            'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
            'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
            'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
            'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
            'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          ]}
        />

        <Testimonials
          title="Nonprofit Success Stories"
          description="See how our clients amplified their mission impact"
        />

        <FaqSection title="Frequently Asked Questions" faqs={faqs} />

        <ContactCta
          heading="Ready to Amplify Your Nonprofit's Impact?"
          subtext="Let's discuss how Nonprofit Cloud can transform your organization."
          buttonLabel="Get Started"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}