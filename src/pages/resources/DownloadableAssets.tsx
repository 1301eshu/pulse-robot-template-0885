import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactCta from "@/components/ui/component_6";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_DownloadableAssets";
import { SITE_CTA } from "@/components/SITE_CTAs";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import { Calendar, Clock, User } from "lucide-react";

interface SubTab {
  id: string;
  label: string;
}

const ResourcesIndex = () => {
  const [activeTab, setActiveTab] = useState('articles');

  // --- DIY hero featured card content (left copy + right card) ---
const featured = {
    title: "The Ultimate Marketo to HubSpot Migration Checklist",
    subtitle:
      "As businesses grow and evolve, so do their marketing platform needs. While Marketo has long been a trusted solution for robust marketing automation, many businesses consider migrating to HubSpot because of their scaling business needs, intuitive interface, com...",
    author: "Sneha Kumari",
    date: "July 7, 2025",
    readTime: "6 min read",
    image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/downloadable-assets/Generic-Checklist-2.webp",
    slug: "/resources",
    list: "Checklist",
  };

  // --- SAME section data as your Most Recent Resources grid ---
  const subTabs: SubTab[] = [
    { id: "all", label: "All" },
    { id: "design", label: "Design" },
    { id: "marketing-automation", label: "Marketing Automation" },
    { id: "salesforce", label: "Salesforce" },
    { id: "web-development", label: "Web Development" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SmartBreadcrumb />

      <main className="pt-0">
        {/* DIY Hub Intro Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Growth Natives DIY Hub:
            </h3>
            <h2 className="text-4xl font-bold text-blue-600 mb-6 leading-tight">
              We've Got the Blueprints,<br />
              You’ve Got the Skills
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Who says you need a tech wizard (or a hefty invoice) to tackle your big projects?
              With our DIY cheat sheets, you can roll up your sleeves and get it done—no expensive
              experts required. Whether you’re migrating to HubSpot, setting up Salesforce, or building
              a website from scratch, these guides break it all down into simple, actionable steps.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We believe in empowering you to take charge without the extra baggage—financial or technical.
              So grab a cheat sheet, dive in, and show your tech stack who’s boss!
            </p>
            <SITE_CTA
              variant="secondary"
              text="Talk to an Expert"
              href="/company/contact"
              size="md"
            />
          </div>

          {/* Right card — exact styling pattern from RecentResourcesSection */}
          <Link to={featured.slug ?? "#"} className="block">
            <Card className="bg-white overflow-hidden transition-all group cursor-pointer hover:shadow-xl border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-white font-semibold text-sm flex items-center gap-1">
                    Read more <span className="text-lg">›</span>
                  </span>
                </div>
              </div>

              <CardContent className="bg-white p-6">
                <div className="flex flex-wrap items-center text-xs text-gray-500 mb-4 gap-x-4 gap-y-2">
                  {/* <span className="flex items-center gap-1">
                    <User className="w-4 h-4" /> {featured.author}
                  </span> */}


                  <span className="rounded-[16px] bg-[#dfebf8] px-2 py-1 text-blue-400 font-[var(--gn-weight-reg)] leading-[16.8px]">
                    {featured.list}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {featured.date}
                  </span>

                </div>

                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 text-[1.05rem] leading-tight">
                  {featured.title}
                </h3>

                {/* <p className="text-sm text-gray-600 line-clamp-2">
                  {featured.subtitle}
                </p> */}

                {/* <div className="text-sm text-gray-500 flex items-center gap-1 mt-4">
                  <Clock className="w-4 h-4" />
                  {featured.readTime}
                </div> */}
              </CardContent>
            </Card>
          </Link>
        </section>

        {/* ⬇️ SAME section reused */}
        <RecentResourcesSection
        // heading="DIY Resources"
        // subTabs={subTabs}
        // resources={recentResources}
        />

        {/* CTA */}
        <ContactCta
          heading="Let’s Make Your Salesforce Smarter (And Less Annoying)"
          subtext="Let’s plug in the tech, the talent, and the timing."
          buttonLabel="Talk to an Expert"
          buttonLink="/company/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesIndex;
