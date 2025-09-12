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

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

 // Tab Items
 const tabs: TabItem[] = [
  {
    id: "marketing",
    label: "Klaviyo  ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/eCommerce%20Strategy/Klaviyo.webp", // replace with actual
    //ctaText: "Get a Demo",
    // ctaLink: "/l3-template"
  },
  {
    id: "analytics",
    label: "Mailchimp  ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/eCommerce%20Strategy/Mailchimp.webp",
    ctaText: "Read More",
   ctaLink: "L3/mailchimp"
  },
  {
    id: "integration",
    label: "Amazon Marketing ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/eCommerce%20Strategy/Amazon%20Marketing.webp",
   ctaText: "Read More",
    ctaLink: "L3/amazon"
  },
  {
    id: "security",
    label: "Walmart Marketing  ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/eCommerce%20Strategy/Walmart%20Marketing.webp",
    ctaText: "Read More",
    ctaLink: "L3/walmart"
  },
   {
    id: "development",
    label: "Groupon Marketing  ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/eCommerce%20Strategy/Groupon%20Marketing.webp",
  //   ctaText: "Get a Demo",
  //  ctaLink: "/l3-template"
  },
     
   
];


  // Tab Content
  // --------- FEATURES UNDER EACH TAB ----------
const features: FeatureContent[] = [
  {
    id: "marketing",
   
    description: "Smarter eCommerce emails, powered by real-time data.  ",
    items: [
      { icon: Zap, title: "AI-driven segmentation that adapts to customer behavior  " },
      { icon: Zap, title: "Flows that nurture, recover, and convert, automatically    " },
      { icon: Zap, title: "Built for DTC brands that want to scale smarter " },
    ],
  },
  {
    id: "analytics",
   
    description: "Email marketing that’s easy and effective. Plan, design, and send campaigns that keep your audience engaged.  ",
    items: [
      { icon: BarChart2, title: "Predictive insights to improve open and click rates   " },
      { icon: BarChart2, title: "Automation that saves time and grows lists  " },
      { icon: BarChart2, title: "From newsletters to drip campaigns, done right.  " },
    ],
  },
  {
    id: "integration",
   
    description: "Sell smarter with AI. From algorithm-friendly listings to branded storefronts, get everything built to rank, resonate, and move products fast.  ",
    items: [
      { icon: Database, title: "Build storefronts that vibe with your brand  " },
      { icon: Database, title: "Listings that play nice with the algorithm  " },
      { icon: Database, title: "Boost visibility with scroll-stopping product tales   " },
    ],
  },
  {
    id: "security",
   
    description: "Let’s win the digital shelf, Walmart-style. Polished listings, trusted reviews, and AI-tuned strategy to turn scrolls into sales. ",
    items: [
      { icon: ShieldCheck, title: "Listings that shine in Walmart’s crowded aisle    " },
      { icon: ShieldCheck, title: "Reviews managed, trust earned, sales up  " },
      { icon: ShieldCheck, title: "Clicks, carts, and credibility-nail it all  " },
    ],
  },
   {
    id: "development",
   
    description: "Make every deal do more. Better offers, scroll-stopping creative, and AI-backed targeting that turns clicks into customers.  ",
    items: [
      { icon: ShieldCheck, title: "Deals that stop thumbs and spark interest    " },
      { icon: ShieldCheck, title: "Turn casual deal hunters into loyal fans  " },
      { icon: ShieldCheck, title: "Copy that sells, visuals that pop   " },
    ],
  },
  
  
];

  // Resources for recent articles
  const recentResources: ResourceItem[] = [
    {
      title: "Agentic AI: The Silent Force Reshaping Marketing Ops",
      subtitle: "Wait, so this thing just... does it? Like, by itself? Yes. And no, it's not magic. It's called Agentic AI and it's the next evolution of marketing automation you...",
      author: "Sneha Kumari",
      date: "July 7, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "hubspot-chatgpt-connector"
    },
    {
      title: "The AI Shortlist: Top Use Cases for Marketing Ops That You Must Know",
      subtitle: "Back in the day, Marketing Ops used to mean fighting timelines and making friends with a dozen dashboards...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "google-ads-roi-increase"
    },
    {
      title: "Marketo & AI: Best Practices for Smarter Segmentation and Nurturing",
      subtitle: "You've got Marketo. You've got data. You've got 47 tabs open. Now what?...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "marketo-ai-segmentation"
    },
  ];

  // FAQ List
  const faqs = [
    {
      q: " Will your strategy really improve my conversion rates?  ",
      a: " We don’t do guesswork. Expect smart moves backed by data that turn clicks into customers.",
    },
    {
      q: "How fast can I expect results? ",
      a: "Typically, you’ll see momentum within a month. Growth is a journey, but we’re sprinting the whole way.",
    },
    {
      q: " Are your strategies customizable?   ",
      a: " No cookie-cutter here. Every plan is tailor-made to fit your brand’s vibe and goals.  ",
    },
    {
      q: " How involved do I need to be?  ",
      a: "We keep you in the loop but take the heavy lifting off your plate. Strategy with zero hassle.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <DynamicSEO page="serviceHubspot" />
      <Header />
      <SmartBreadcrumb />
      <main className="">
        {/* HERO Section */}
        <HeroSection
          heading=" eCommerce Strategy Services, Rewired for the AI Era"
         
          subtext=" Turning browser behavior into business breakthroughs-automatically. "
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Hero%20Section_L2_Bannera/ECOMMERCE%20STRATEGY.webp"
        />

        {/* Statistics Section */}
         <EditableStatSection
 
  title="You're in good company. The kind that trusts eCommerce strategy over empty hype.  "
  stats={[
    { label: "Collective years of eCommerce wisdom ", value: "100+" },
    { label: "Improved conversion rate  ", value: "50%" },
    { label: "Revenue lift for clients  ", value: "56%" },
          ]}
        />

        {/* Tab Features Section */}
        <EnterpriseCapabilities
          title=" How We Make eCommerce Strategies Hit Different with AI "
          subtitle=" We craft strategies that turn traffic into transactions, so you can just sit and watch your brand shine."
          tabs={tabs}
          features={features} 
        />

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading=" What Sharp eCommerce Strategies Look Like  "
          body="Brands we’ve helped scale, convert, and slay. "
          subTabs={[]}
          resources={recentResources}
        />

        <LogoScroller
        heading="Brands Backing Our eCommerce Strategy Game "
        subtext="From cult favorites to category giants, we help them scale smart. "
       
      />

        {/* Testimonials */}
        <Testimonials
          title=" Real Brands, Real eCommerce Impact  "
          description="What’s our edge? Smart strategy, sharp execution, and a dash of AI  "
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

         {/* Recent Resources Section */}
        <RecentResourcesSection
          heading=" More From Our Content Repertoire"
          body="Stay ahead with the latest eCommerce strategies, sharp insights, and AI moves.  "
          subTabs={[]}
          resources={recentResources}
        />

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Give Your eCommerce Game an AI Glow Up "
          subtext=" Get seen, get sales, get ahead. "
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
