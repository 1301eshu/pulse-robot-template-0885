'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/pages/Homepage/Hero";
import Statistics from "@/pages/Homepage/Statistics";
import Services from "@/pages/Homepage/Services";
import ValueProposition from "@/pages/Homepage/ValueProposition";
import Process from "@/pages/Homepage/Process";
import FeaturedProjects from "@/pages/Homepage/FeaturedProjects";
import Testimonials from "@/pages/Homepage/Testimonials";
import Page_1 from "@/pages/Homepage/Page_1";
import Page_2 from "@/pages/Homepage/Page_2";
import EditableStatSection from "@/components/Statistics";
import LogoScroller from '@/components/ui/component_13';
import ContactCta from "@/components/ui/component_6";
import PartnershipSection from '@/components/ui/component_15'; // adjust if not using `@`
import AutoPopup from "@/components/ui/AutoPopup";
import { Sparkles } from 'lucide-react';
import DynamicSEO from "@/components/DynamicSEO";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <DynamicSEO page="homePage" />
      <Header />
      <main id="content">
        <Hero />

        <PartnershipSection />

        <Statistics />
        <Services />
        <ValueProposition />
        <Page_2 />
        <FeaturedProjects />

        <Testimonials
          title="Real Stories. Real Growth."
          description="What it's like to work with a team that actually builds with you."
        />

        <Process />

        <ContactCta
          heading="Let’s Build Your Next Growth Chapter"
          subtext="With AI at the core and clarity at every step, we’re here to make growth feel less chaotic—and a whole lot more scalable."
          buttonLabel="Book Your Strategy Call"
          buttonLink="/contact"
        />

        <EditableStatSection
          stats={[
            { label: "Customers Worldwide Put Faith In Us", value: "200+" },
            { label: "Digital Transformation Experts", value: "400+" },
            { label: "Years Of Collective Experience", value: "1500+" },
          ]}
          paddingTop="pt-0"
          paddingBottom="pb-00"
        />

        <Page_1 />
        {/* <CTA /> */}
        {/* <Page_3 /> */}
        {/* <Page_4 /> */}
      </main>
      <Footer />

      {/* Auto Popup */}
      <AutoPopup delay={1000} duration={3000} />
    </div>
  );
}
