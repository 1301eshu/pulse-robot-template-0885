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

export default function Conga() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tabs: TabItem[] = [
    {
      id: "automation",
      label: "Document Automation",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Conga/Document%20Automation.webp",
    },
    {
      id: "contracts",
      label: "Contract Lifecycle Management",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Conga/Contrtact%20Lifecycle%20Management.webp",
    },
    {
      id: "pricing",
      label: "Revenue Operations",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Conga/Revenue%20Operations.webp",
    },
    {
      id: "integration",
      label: "Platform Integration",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/Conga/Platform%20%20Integrations.webp",
    },
  ];

  const features: FeatureContent[] = [
    {
      id: "automation",
      items: [
        {
          icon: Zap,
          title: "Automated document generation and templates",
        },
        {
          icon: Zap,
          title: "Dynamic content population from Salesforce",
        },
        {
          icon: Zap,
          title: "Multi-format output (PDF, Word, Excel)",
        },
      ],
    },
    {
      id: "contracts",
      items: [
        {
          icon: BarChart2,
          title: "End-to-end contract management",
        },
        {
          icon: BarChart2,
          title: "Digital signature workflows",
        },
        {
          icon: BarChart2,
          title: "Contract analytics and reporting",
        },
      ],
    },
    {
      id: "pricing",
      items: [
        {
          icon: Database,
          title: "Advanced pricing configurations",
        },
        {
          icon: Database,
          title: "Revenue optimization insights",
        },
        {
          icon: Database,
          title: "Billing and invoicing automation",
        },
      ],
    },
    {
      id: "integration",
      items: [
        {
          icon: ShieldCheck,
          title: "Seamless Salesforce integration",
        },
        {
          icon: ShieldCheck,
          title: "Third-party system connections",
        },
        {
          icon: ShieldCheck,
          title: "Custom API development",
        },
      ],
    },
  ];

  const recentResources: ResourceItem[] = [
    {
      title: "Maximizing ROI with Conga Document Automation",
      subtitle: "How enterprise teams are reducing manual work by 80% with intelligent document generation...",
      author: "Sneha Kumari",
      date: "July 7, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "conga-document-automation"
    },
    {
      title: "Contract Lifecycle Management Best Practices",
      subtitle: "From creation to renewal: streamlining your contract processes with Conga CLM...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "contract-lifecycle-management"
    },
    {
      title: "Revenue Operations with Conga Revenue Cloud",
      subtitle: "Optimizing pricing strategies and revenue recognition with advanced analytics...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "conga-revenue-operations"
    },
  ];

  const faqs = [
    {
      q: "What is Conga and how does it integrate with Salesforce?",
      a: "Conga is a comprehensive revenue lifecycle management platform that seamlessly integrates with Salesforce to automate document generation, contract management, and revenue operations.",
    },
    {
      q: "How can Conga help reduce manual document creation?",
      a: "Conga automates document generation by pulling data directly from Salesforce, creating professional documents, contracts, and reports with just a few clicks.",
    },
    {
      q: "What types of documents can Conga generate?",
      a: "Conga can generate quotes, proposals, contracts, invoices, reports, and any custom document format your business requires.",
    },
    {
      q: "Do you provide training on Conga solutions?",
      a: "Yes, we provide comprehensive training and ongoing support to ensure your team maximizes the value of Conga solutions.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <SmartBreadcrumb />
      <main className="">
        <HeroSection
          heading="Transform Your Revenue Lifecycle with Conga"
          subtext="Automate documents, streamline contracts, and accelerate revenue with intelligent solutions."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://res.cloudinary.com/dar70fhfi/image/upload/v1753254850/06_do0uli.png"
        />

        <EditableStatSection
          title="Trusted by Leading Organizations for Revenue Operations"
          stats={[
            { label: "Document Generation Efficiency", value: "80%" },
            { label: "Contract Cycle Time Reduction", value: "60%" },
            { label: "Revenue Process Automation", value: "90%" },
          ]}
        />

        <EnterpriseCapabilities
          title="Comprehensive Conga Solutions"
          subtitle="From document automation to revenue optimization, we deliver end-to-end Conga implementations."
          tabs={tabs}
          features={features}
        />

        <RecentResourcesSection
          heading="Latest Insights on Revenue Operations"
          subTabs={[]}
          resources={recentResources}
        />

        <LogoScroller
          heading="Trusted by Industry Leaders"
          subtext="Organizations worldwide rely on our Conga expertise"
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
          title="Real Results with Conga"
          description="See how our clients transformed their revenue operations"
        />

        <FaqSection title="Frequently Asked Questions" faqs={faqs} />

        <ContactCta
          heading="Ready to Revolutionize Your Revenue Operations?"
          subtext="Let's discuss how Conga can streamline your business processes."
          buttonLabel="Get Started"
          buttonLink="/company/contact"
        />
      </main>
      <Footer />
    </div>
  );
}