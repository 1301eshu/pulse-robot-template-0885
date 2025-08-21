import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ExploreMoreSection, { ExploreItem } from "@/components/ui/component_9";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/componentcase";
import ContactCta from "@/components/ui/component_6";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

const ResourcesIndex = () => {
  const [activeTab, setActiveTab] = useState('articles');

  const exploreMoreItems: ExploreItem[] = [
    {
      tag: "Case Studies",
      title: "Improving Forecasting Accuracy by 69% with Salesforce Billing Implementation for a Leading Hardware Company",
      readTime: "1 min read",
      category: "Growth Natives Case Study",
      thumbnail: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/image-1.webp",
      slug: "69-improvement-in-forecasting-accuracy-with-salesforce-billing-implementation",
      type: 'case-studies'
    },
    {
      tag: "Case Studies",
      title: "Reducing Administrative Burden by 75% in Real Estate Operations Through Territory Management",
      readTime: "1 min read",
      category: "Growth Natives Case Study",
      slug: "75-reduction-in-admin-activity-time-with-salesforce-territory-management",
      type: 'case-studies'
    },
    {
      tag: "Case Studies",
      title: "Boosting Operational Efficiency by 75% with Salesforce CPQ Integration for a Leading Brain Technology Firm",
      readTime: "1 min read",
      category: "Growth Natives Case Study",
      slug: "75-reduction-in-cycle-time-with-salesforce-cpq-implementation",
      type: 'case-studies'
    },
    {
      tag: "Case Studies",
      title: "Unlocking Organic Growth: How Escalon Boosted Visibility with Integrated SEO Strategies" ,
      readTime: "1 min read",
      category: "Growth Natives Case Study",
      slug: "unlocking-organic-growth-how-escalon-boosted-visibility-with-integrated-seo-strategies",
      type: 'case-studies'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
       <SmartBreadcrumb />

      <main className="pt-0">
        {/* Explore More Section */}
        <ExploreMoreSection heading="Case Studies" items={exploreMoreItems} />

        {/* Recent Blogs - Center heading only for this page */}
        <div className="[&>h2]:text-center">
          <RecentResourcesSection/>
        </div>

        {/* Contact CTA */}
        <ContactCta
          heading="Join Our Newsletter"
          subtext="Talk to an expert"
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesIndex;
