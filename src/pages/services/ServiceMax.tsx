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

export default function ServiceMax() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tabs: TabItem[] = [
    {
      id: "implementation",
      label: "ServiceMax Implementation",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/ServiceMax/ServiceMax%20Implementation.webp",
    },
    {
      id: "optimization",
      label: "Field Service Optimization",
      icon: BarChart2,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/ServiceMax/Field%20Service%20Optimization.webp",
    },
    {
      id: "mobile",
      label: "Mobile Workforce Solutions",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/ServiceMax/Mobile%20Workforce%20Solutions.webp",
    },
    {
      id: "analytics",
      label: "Service Analytics & Insights",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Salesforce/ServiceMax/Service%20Analytics%20&%20Insights.webp",
    },
  ];

  const features: FeatureContent[] = [
    {
      id: "implementation",
      items: [
        {
          icon: Zap,
          title: "Complete ServiceMax platform setup and configuration",
        },
        {
          icon: Zap,
          title: "Custom workflow design for your service processes",
        },
        {
          icon: Zap,
          title: "Integration with existing Salesforce ecosystem",
        },
      ],
    },
    {
      id: "optimization",
      items: [
        {
          icon: BarChart2,
          title: "Intelligent scheduling and dispatch optimization",
        },
        {
          icon: BarChart2,
          title: "Predictive maintenance capabilities",
        },
        {
          icon: BarChart2,
          title: "Resource utilization maximization",
        },
      ],
    },
    {
      id: "mobile",
      items: [
        {
          icon: Database,
          title: "Field technician mobile app optimization",
        },
        {
          icon: Database,
          title: "Offline capability for remote work",
        },
        {
          icon: Database,
          title: "Real-time data synchronization",
        },
      ],
    },
    {
      id: "analytics",
      items: [
        {
          icon: ShieldCheck,
          title: "Service performance dashboards",
        },
        {
          icon: ShieldCheck,
          title: "Customer satisfaction tracking",
        },
        {
          icon: ShieldCheck,
          title: "Operational efficiency reporting",
        },
      ],
    },
  ];

  const recentResources: ResourceItem[] = [
    {
      title: "Field Service Excellence with ServiceMax",
      subtitle: "How leading companies are transforming field service operations with intelligent automation...",
      author: "Sneha Kumari",
      date: "July 7, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "servicemax-field-service"
    },
    {
      title: "Predictive Maintenance Strategies",
      subtitle: "Leveraging ServiceMax for proactive equipment maintenance and reduced downtime...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "predictive-maintenance"
    },
    {
      title: "Mobile Workforce Optimization",
      subtitle: "Empowering field technicians with mobile-first ServiceMax solutions...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "mobile-workforce"
    },
  ];

  const faqs = [
    {
      q: "What is ServiceMax and how does it enhance field service operations?",
      a: "ServiceMax is Salesforce's field service management platform that optimizes scheduling, dispatch, mobile workforce management, and service analytics for improved operational efficiency.",
    },
    {
      q: "How does ServiceMax integrate with existing Salesforce systems?",
      a: "ServiceMax seamlessly integrates with Salesforce CRM, providing unified customer data and service history across sales and service operations.",
    },
    {
      q: "Can ServiceMax support complex scheduling requirements?",
      a: "Yes, ServiceMax offers advanced scheduling optimization including skill-based routing, territory management, and automated dispatch based on real-time constraints.",
    },
    {
      q: "What mobile capabilities does ServiceMax provide?",
      a: "ServiceMax includes native mobile apps for field technicians with offline functionality, digital forms, signature capture, and real-time data synchronization.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <SmartBreadcrumb />
      <main className="">
        <HeroSection
          heading="Optimize Field Service Operations with ServiceMax"
          subtext="Transform your field service with intelligent scheduling, mobile workforce management, and predictive insights."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://res.cloudinary.com/dar70fhfi/image/upload/v1753254850/06_do0uli.png"
        />

        <EditableStatSection
          title="Proven Results in Field Service Excellence"
          stats={[
            { label: "First-Time Fix Rate Improvement", value: "25%" },
            { label: "Technician Productivity Increase", value: "30%" },
            { label: "Customer Satisfaction Score", value: "95%" },
          ]}
        />

        <EnterpriseCapabilities
          title="Complete ServiceMax Solutions"
          subtitle="From implementation to optimization, we deliver comprehensive field service management solutions."
          tabs={tabs}
          features={features}
        />

        <RecentResourcesSection
          heading="Field Service Management Insights"
          subTabs={[]}
          resources={recentResources}
        />

        <LogoScroller
          heading="Trusted by Service Leaders"
          subtext="Organizations worldwide optimize field operations with our ServiceMax expertise"
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
          title="Field Service Success Stories"
          description="See how our clients transformed their service operations"
        />

        <FaqSection title="Frequently Asked Questions" faqs={faqs} />

        <ContactCta
          heading="Ready to Transform Your Field Service?"
          subtext="Let's discuss how ServiceMax can optimize your operations."
          buttonLabel="Get Started"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}