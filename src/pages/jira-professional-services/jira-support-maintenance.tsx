// src/pages/jira-professional-services/jira-support-maintenance.tsx

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
import ExploreMoreBlock from "@/components/exploremore";
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

export default function JiraSupportMaintenance() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

 // Tab Items
 const tabs: TabItem[] = [
  {
    id: "marketing",
    label: "Ongoing Jira Administration  ",
    icon: Zap,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Support%20%20Maintenance/Ongoing%20Jira%20Admnistration.webp",
  },
  {
    id: "analytics",
    label: "AI-Powered Health Monitoring ",
    icon: BarChart2,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Support%20%20Maintenance/AI%20powered%20Health%20Monitoring.webp",
  },
  {
    id: "integration",
    label: "Workflow & Automation Updates  ",
    icon: Database,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Support%20%20Maintenance/Workflow%20&%20Automation%20Updates.webp",
  },
  {
    id: "security",
    label: "Break-Fix Support with Fast SLAs  ",
    icon: ShieldCheck,
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/jira-professional-services/Jira%20Support%20%20Maintenance/Break-Fix%20Support%20with%20Fast%20SLA's.webp",
  },
];

const features: FeatureContent[] = [
  {
    id: "marketing",
    description: "User setups, permission tweaks, project creation, cleanup-we’ve got it covered.  ",
    items: [
      { icon: Zap, title: "Get admin requests off your team’s plate    " },
      { icon: Zap, title: "Centralized change management with full traceabilit   " },
      { icon: Zap, title: "No delays, no bottlenecks-just frictionless support   " },
    ],
  },
  {
    id: "analytics",
    description: "We keep an eye on everything, always-thanks to intelligent alerting and predictive diagnostics.   ",
    items: [
      { icon: BarChart2, title: "Proactive issue detection, not reactive fire drills    " },
      { icon: BarChart2, title: "AI flags field bloat, config decay, and workflow drift   " },
      { icon: BarChart2, title: "Real-time alerts that matter (and ignore what doesn’t)    " },
    ],
  },
  {
    id: "integration",
    description: "Your workflows should grow with you. We keep them optimized-weekly, monthly, and as needed.   ",
    items: [
      { icon: Database, title: "Refine rules, triggers, and transitions as usage evolves   " },
      { icon: Database, title: "Add new automations as teams and needs shift   " },
      { icon: Database, title: "AI helps us spot when something’s slowing you down-before you do     " },
    ],
  },
  {
    id: "security",
    description: "Things break. We fix fast-and we don’t guess.  ",
    items: [
      { icon: ShieldCheck, title: "Ticket-based support with clear ownership     " },
      { icon: ShieldCheck, title: "SLA-based resolution timeframes for urgent issues    " },
      { icon: ShieldCheck, title: "Escalation logic + AI triage for prioritizing what matters most  " },
    ],
  },
];


const faqs = [
  {
    q: " What’s included in Jira Support & Maintenance? ",
    a: "Admin support, workflow updates, plugin management, break-fix resolution, plus 24/7 monitoring with AI alerts. ",
  },
  {
    q: "Do you support Jira Cloud, Data Center, or both?  ",
    a: "Both. We support hybrid setups, multi-instance environments, and everything in between.  ",
  },
  {
    q: " Do you provide SLAs for urgent issues? ",
    a: "Yes. Response and resolution timeframes are part of our support agreement. ",
  },
  {
    q: "How often do you review and optimize workflows? ",
    a: "Monthly by default-weekly if you’re scaling fast or evolving rapidly.  ",
  },
];

return (
  <div className="bg-white text-gray-900">
    <DynamicSEO page="jiraSupportMaintenance" />
    <Header />
    <SmartBreadcrumb />
    <main className="">
      {/* HERO Section */}
      <HeroSection
        heading="AI-Enhanced Jira Support That’s Always On (So You Don’t Have to Be) "
        subtext=" From break-fixes to big-picture improvements-we keep your Jira running smooth, smart, and scalable. "
        bgImage="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
        rightImage="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Jira/Support%20and%20maintainance.webp"
      />
      <EditableStatSection
        title="AI-enabled results. Human-approved performance.    "
        stats={[
          { label: " Jira instances actively maintained ", value: "50+" },
          { label: "Certified Jira Experts  ", value: "20+" },
          { label: " Avg. Jira uptime under our watch  ", value: "99.98%" },
 //         { label: " AI-backed support layer monitoring every workflow ", value: "1" },
        ]}
      />
      <EnterpriseCapabilities
        title=" What We Do with Jira Support & Maintenance   "
        subtitle=" We don’t just fix bugs. We futureproof your Jira-one AI-smart move at a time.  "
        tabs={tabs}
        features={features} 
      />
      <RecentResourcesSection
        heading="See What Reliable Jira Support Looks Like in Practice  "
        body="We don’t just keep Jira running-we make it better over time.   "
        subTabs={[]}
        resourcePostType="case-studies"
      />
      <LogoScroller
        heading=" Always-On Jira Support Trusted by Top Teams "
        subtext=" From SaaS startups to enterprise squads-we’ve got their back, front, and roadmap."
      />
      <Testimonials
        title="Real Stories, Real Jira Peace of Mind  "
        description="The difference between “we’re fine” and “we’re flying”.  "
      />
      <FaqSection title="FAQs" faqs={faqs} />
      {/* --- Section B: component_9 via ExploreMoreBlock (left feature + list) --- */}
<ExploreMoreBlock
  heading=" More From Our Content Repertoire "
  body=" Deep dives, AI tips, and tactical Jira wisdom.  "
  perPage={6}
  firstN={4}
  contentType="blogs"
    resourceType="671"

/>
      <ContactCta
        heading="Let’s Keep Your Jira Calm, Clean, and Climbing   "
        subtext="  Full-time support. Zero-stress stability. Smart systems that stay optimized.   "
        buttonLabel="Talk to an Expert"
        buttonLink="/contact-us"
      />
    </main>
    <Footer />
  </div>
);
}
