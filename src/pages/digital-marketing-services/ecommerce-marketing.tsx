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
import EnterpriseCapabilities, { TabItem, FeatureContent } from "@/components/ui/component_2";
import { Zap, BarChart2, Database, ShieldCheck, Clock, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExploreMoreBlock from "@/components/exploremore";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

export default function MarketingAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tab Items — switched from Pardot to Channel/Platform-led eCommerce Strategy pillars
  const tabs: TabItem[] = [
    {
      id: "klaviyo",
      label: "Klaviyo Email & Flows",
      icon: Zap,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/eCommerce%20Strategy/Klaviyo.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen/ecommerce-strategy-audit"
    },
    {
      id: "mailchimp",
      label: "Mailchimp Campaigns",
      icon: Clock,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/eCommerce%20Strategy/Mailchimp.webp",
      ctaText: "Read More",
     ctaLink: "/digital-marketing-services/ecommerce-marketing/mailchimp-services/"
    },
    {
      id: "amazon",
      label: "Amazon Marketing",
      icon: Database,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/eCommerce%20Strategy/Amazon%20Marketing.webp",
     ctaText: "Read More",
      ctaLink: "/digital-marketing-services/ecommerce-marketing/amazon-marketing-services/"
    },
    {
      id: "walmart",
      label: "Walmart Marketing",
      icon: ShieldCheck,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/eCommerce%20Strategy/Walmart%20Marketing.webp",
      ctaText: "Read More",
       ctaLink: "/digital-marketing-services/ecommerce-marketing/walmart-services/"
    },
    {
      id: "groupon",
      label: "Groupon Marketing",
      icon: Heart,
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/eCommerce%20Strategy/Groupon%20Marketing.webp",
      // ctaText: "Audit Me!",
      // ctaLink: "/lead-gen/ecommerce-strategy-audit"
    },
  ];

  // Feature bullets per tab — rewritten from the eCommerce Strategy L2 brief
  const features: FeatureContent[] = [
    {
      id: "klaviyo",
      description: "Smarter eCommerce emails, powered by real-time data.",
      items: [
        { icon: Zap, title: "AI-driven segmentation that adapts to behavior" },
        { icon: Zap, title: "Flows that nurture, recover, and convert—automatically" },
        { icon: Zap, title: "Built for DTC brands that want to scale smarter" },
      ],
    },
    {
      id: "mailchimp",
      description: "Email marketing that’s easy and effective. Plan, design, and send campaigns that keep your audience engaged. ",
      items: [
        { icon: Clock, title: "Predictive insights to lift open and click rates" },
        { icon: Clock, title: "Automation that saves time and grows lists" },
        { icon: Clock, title: "From newsletters to drip campaigns, done right." },
      ],
    },
    {
      id: "amazon",
      description: "Sell smarter with AI. From algorithm-friendly listings to branded storefronts, get everything built to rank, resonate, and move products fast. ",
      items: [
        { icon: Database, title: "Build storefronts that vibe with your brand" },
        { icon: Database, title: "Listings that play nice with the algorithm" },
        { icon: Database, title: "Boost visibility with scroll‑stopping product tales" },
      ],
    },
    {
      id: "walmart",
      description: "Let’s win the digital shelf, Walmart-style. Polished listings, trusted reviews, and AI-tuned strategy to turn scrolls into sales. ",
      items: [
        { icon: ShieldCheck, title: "Listings that shine in Walmart’s crowded aisle" },
        { icon: ShieldCheck, title: "Reviews managed, trust earned, sales up" },
        { icon: ShieldCheck, title: "Clicks, carts, and credibility—nail it all" },
      ],
    },
    {
      id: "groupon",
      description: "Make every deal do more. Better offers, scroll-stopping creative, and AI-backed targeting that turns clicks into customers. ",
      items: [
        { icon: Heart, title: "Deals that stop thumbs and spark interest" },
        { icon: Heart, title: "Turn casual deal‑hunters into loyal fans" },
        { icon: Heart, title: "Copy that sells, visuals that pop" },
      ],
    },
  ];

  // Resources for recent articles (placeholders retained — feel free to swap)
  const recentResources: ResourceItem[] = [
    {
      title: "Agentic AI: The Silent Force Reshaping eCommerce Ops",
      subtitle: "Wait, so this thing just... does it? Like, by itself? Yes—and no. Why agentic systems are the next evolution for your store.",
      author: "Sneha Kumari",
      date: "July 7, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "agentic-ai-ecommerce-ops"
    },
    {
      title: "The AI Shortlist: Must‑Know Use Cases for eCom Growth",
      subtitle: "From smarter segmentation to dynamic pricing—what actually moves the needle this quarter.",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "ai-use-cases-ecommerce-growth"
    },
    {
      title: "Marketo & AI: Segmentation and Nurtures That Convert",
      subtitle: "You’ve got data and 47 tabs open—here’s the sane way to run smarter plays.",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "marketo-ai-segmentation"
    },
  ];

  // FAQs — aligned to eCommerce Strategy page
  const faqs = [
    {
      q: "Will your strategy really improve my conversion rates?",
      a: "We don’t do guesswork. Expect smart moves backed by data that turn clicks into customers.",
    },
    {
      q: "How fast can I expect results?",
      a: "Typically, you’ll see momentum within a month. Growth is a journey, but we’re sprinting the whole way.",
    },
    {
      q: "Are your strategies customizable?",
      a: "No cookie‑cutter here. Every plan is tailor‑made to fit your brand’s vibe and goals.",
    },
    {
      q: "How involved do I need to be?",
      a: "We keep you in the loop but take the heavy lifting off your plate. Strategy with zero hassle.",
    },
  ];
  
  return (
    <div className="bg-white text-gray-900">
      <Header />
       <SmartBreadcrumb />
      <main className="pt-0">
        {/* HERO Section */}
        <HeroSection
          heading="eCommerce Strategy Services, Rewired for the AI Era"
          subtext="Turning browser behavior into business breakthroughs—automatically."
          bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
          rightImage="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/DigitalMarketing/Hero%20Section_L2_Bannera/ECOMMERCE%20STRATEGY.webp"
        />

        {/* Statistics / Trust Markers */}
        <EditableStatSection
          title="You're in good company. The kind that trusts eCommerce strategy over empty hype."
          stats={[
            { label: "Collective years of eCommerce wisdom", value: "100+" },
            { label: "Improved conversion rate", value: "50%" },
            { label: "Revenue lift for clients", value: "56%" },
          ]}
        />

        {/* What We Do — EnterpriseCapabilities as a tabbed explainer */}
        <EnterpriseCapabilities
          title="How We Make eCommerce Strategies Hit Different with AI"
          subtitle="We craft strategies that turn traffic into transactions, so you can just sit and watch your brand shine."
          tabs={tabs}
          features={features}
        />

        {/* Case Studies teaser (if you have a component, swap it in) */}
        {/* <CaseStudyCarousel title="What Sharp eCommerce Strategies Look Like" subtitle="Brands we’ve helped scale, convert, and slay." /> */}

        {/* Recent Resources Section */}
        <RecentResourcesSection
          heading="More From Our Content Repertoire"
          subTabs={[]}
          resources={recentResources}
        />

        <LogoScroller
          heading="Brands Backing Our eCommerce Strategy Game"
          subtext="From cult favorites to category giants, we help them scale smart."
        />

        {/* Testimonials */}
        <Testimonials
          title="Real Brands, Real eCommerce Impact"
          description="What’s our edge? Smart strategy, sharp execution, and a dash of AI."
        />

        {/* FAQs */}
        <FaqSection title="FAQs" faqs={faqs} />

         {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Stay ahead with the latest eCommerce strategies, sharp insights, and AI moves.  "
  perPage={6}
  firstN={4}
  contentType="blogs"
/>

        {/* Call to Action */}
        <ContactCta
          heading="Let’s Give Your eCommerce Game an AI Glow Up"
          subtext="Get seen, get sales, get ahead."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
