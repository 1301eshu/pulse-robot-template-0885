import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/pages/Homepage/Hero";
import Statistics from "@/pages/Homepage/Statistics";
import SSRServicesSection from "@/components/SSRServicesSection";
import ValueProposition from "@/pages/Homepage/ValueProposition";
import Process from "@/pages/Homepage/Process";
import FeaturedProjects from "@/pages/Homepage/FeaturedProjects";
import Testimonials from "@/pages/Homepage/Testimonials";
import CTA from "@/pages/Homepage/CTA";
import Page_1 from "@/pages/Homepage/Page_1";
import Page_2 from "@/pages/Homepage/Page_2";
import Page_3 from "@/pages/Homepage/Page_3";
import LogoScroller from '@/components/ui/component_13';
import EditableStatSection from "@/components/Statistics";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import Page_4 from "@/pages/Homepage/Page_4";

import ContactCta from "@/components/ui/component_6";
import FullStackFirepower from "@/components/FullStackFirepower";
import { Sparkles } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        {/* New Left-Right Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Transform Your Business with AI-Driven Solutions
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We combine cutting-edge artificial intelligence with proven growth strategies to help businesses scale efficiently. Our data-driven approach ensures every decision is backed by intelligence, not guesswork.
                </p>
              </div>
              
              {/* Right Side - Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
                  alt="Business transformation"
                  className="w-full max-w-md h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

         <section className="pt-16 pb-12 bg-white overflow-hidden">
  <div className="section-wrapper text-center">
    <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] mb-0 inline-flex items-center justify-center gap-2">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Why Partner With Growth Natives?</span>
          </div>
    </h2>
  </div>

  {/* ✅ Wrap the logo marquee in .section-wrapper */}
  <div className="section-wrapper">
    <LogoScroller
      logos={[
        'https://res.cloudinary.com/dar70fhfi/image/upload/v1752754241/6626489011bed77bbc20ee9b_power-bi-vector-logo-2022_1_lraijk.svg',
        'https://res.cloudinary.com/dar70fhfi/image/upload/v1752754241/6626489011bed77bbc20ee9b_power-bi-vector-logo-2022_1_lraijk.svg',
        'https://res.cloudinary.com/dar70fhfi/image/upload/v1752754241/6626489011bed77bbc20ee9b_power-bi-vector-logo-2022_1_lraijk.svg',
        'https://res.cloudinary.com/dar70fhfi/image/upload/v1752754241/6626489011bed77bbc20ee9b_power-bi-vector-logo-2022_1_lraijk.svg',
        'https://res.cloudinary.com/dar70fhfi/image/upload/v1752754241/6626489011bed77bbc20ee9b_power-bi-vector-logo-2022_1_lraijk.svg',
        'https://res.cloudinary.com/dar70fhfi/image/upload/v1752754241/6626489011bed77bbc20ee9b_power-bi-vector-logo-2022_1_lraijk.svg',
            
      ]}
      className="pt-4 pb-0 bg-transparent overflow-visible"
    />
  </div>
</section>



        <Statistics />
        <SSRServicesSection />
        <FullStackFirepower />
        <ValueProposition />
        <Page_2 />
        
        <FeaturedProjects />
       
        <Testimonials 
          title="What Our Clients Say"
          description="Discover how we've helped businesses transform their growth strategies and achieve remarkable results."
        />
        
        <Process />
         <ContactCta
              heading="Let’s Build Your Next Growth Chapter "
              subtext="With AI at the core and clarity at every step, we’re here to make growth feel less chaotic—and a whole lot more scalable. "
              buttonLabel="Book Your Strategy Call  "
              buttonLink="/get-started"
/>
        {/* Statistics Section */}
        <EditableStatSection
  stats={[
    { label: "Customers Worlwide Put Faith In Us", value: "200+" },
    { label: "Digital Transformation Experts", value: "400+" },
    { label: "Years Of Collective Experience", value: "1500+" },
  ]}
/>
        <Page_1 />
       
       
       { /*  <CTA /> */}
        
        
        { /* <Page_3 /> */}
        
        
        
        { /* <Page_4 />*/}
        
      </main>
      <Footer />
    </div>
  );
}