'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/pages/Homepage/Hero";
import Statistics from "@/pages/Homepage/Statistics";
import PartnershipSection from '@/components/ui/component_15';
import DynamicSEO from "@/components/DynamicSEO";
import { lazy, Suspense } from 'react';

// Lazy load components below the fold to reduce initial script evaluation
const Services = lazy(() => import("@/pages/Homepage/Services"));
const ValueProposition = lazy(() => import("@/pages/Homepage/ValueProposition"));
const Process = lazy(() => import("@/pages/Homepage/Process"));
const FeaturedProjects = lazy(() => import("@/pages/Homepage/FeaturedProjects"));
const Testimonials = lazy(() => import("@/pages/Homepage/Testimonials"));
const Page_1 = lazy(() => import("@/pages/Homepage/Page_1"));
const Page_2 = lazy(() => import("@/pages/Homepage/Page_2"));
const EditableStatSection = lazy(() => import("@/components/Statistics"));
const ContactCta = lazy(() => import("@/components/ui/component_6"));
const AutoPopup = lazy(() => import("@/components/ui/AutoPopup"));

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <DynamicSEO page="homePage" />
      <Header />
      <main id="content">
        <Hero />
        <PartnershipSection />
        <Statistics />
        
        <Suspense fallback={<div className="h-20 flex items-center justify-center"><div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>}>
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
            heading="Let's Build Your Next Growth Chapter"
            subtext="With AI at the core and clarity at every step, we're here to make growth feel less chaotic—and a whole lot more scalable."
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
        </Suspense>
      </main>
      <Footer />

      {/* Auto Popup - Lazy loaded */}
      <Suspense fallback={null}>
        <AutoPopup delay={1000} duration={3000} />
      </Suspense>
    </div>
  );
}