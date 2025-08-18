import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface ResourceItem {
  title: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug?: string;
}

const RecentResourcesSections: React.FC = () => {
  const heading = "Most Recent Case Studies";

  // Static resources JSON
  const resources: ResourceItem[] = [
    {
      title: "Unlocking Organic Growth: How Escalon Boosted Visibility with Integrated SEO Strategies",
      author: "Vishal Mehta",
      date: "April 11, 2025",
      readTime: "1 min read",
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/Unlocking-Organic-Growth-Escalon-Boosted.webp",
      slug: "unlocking-organic-growth-how-escalon-boosted-visibility-with-integrated-seo-strategies",
    },
    {
      title: "Leveraging AI Engine Optimization (AEO) to Counter-Shifting Search Trends and Drive Revenue Growth",
      author: "Vishal Mehta",
      date: "April 11, 2025",
      readTime: "1 min read",
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/leveraging-engine-optimization-counter.webp",
      slug: "leveraging-ai-engine-optimization-to-counter-shifting-search-trends-and-drive-revenue-growth",
    },
    {
      title: "Automated Sales Workflows by Integrating HubSpot, Google Sheets, DocuSign, and ERP System",
      author: "Geeta Dutt",
      date: "May 9, 2024",
      readTime: "1 min read",
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/Automated-Sales-Workflows-by-Integrating-HubSpot-Google-Sheets-DocuSign-and-ERP-System.webp",
      slug: "automated-sales-workflows-by-integrating-hubspot-google-sheets-docusign-and-erp-system/",
    },
    {
      title: "Enabling Smooth Deal Tracking Within HubSpot for a Commercial Roofing Company",
      author: "Geeta Dutt",
      date: "April 10, 2024",
      readTime: "1 min read",
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/Enabling-Smooth-Deal-Tracking-Within-HubSpot-for-a-Commercial-Roofing-Company.webp",
      slug: "enabling-smooth-deal-tracking-within-hubspot-for-a-commercial-roofing-company/",
    },
    {
      title: "Achieving 7X ROI in Just 8 Months Through Digital Marketing for a Top-tier Cloud Platform",
      author: "Geeta Dutt",
      date: "April 8, 2024",
      readTime: "1 min read",
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/Achieving-7X-ROI-in-Just-8-Months-Through-Digital-Marketing-for-a-Top-tier-Cloud-Platform.webp",
      slug: "achieving-7x-roi-in-just-8-months-through-digital-marketing-for-a-top-tier-cloud-platform/",
    },
    {
      title: "Reducing Administrative Burden by 75% in Real Estate Operations Through Territory Management",
      author: "Sakshi Arora",
      date: "August 23, 2023",
      readTime: "1 min read",
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/image-3-1.webp",
      slug: "75-reduction-in-admin-activity-time-with-salesforce-territory-management/",
    },
    {
      title: "Improving Forecasting Accuracy by 69% with Salesforce Billing Implementation for a Leading Hardware Company",
      author: "Geeta Dutt",
      date: "August 23, 2023",
      readTime: "1 min read",
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/image-1%20(1).webp",
      slug: "69-improvement-in-forecasting-accuracy-with-salesforce-billing-implementation/",
    },
    {
      title: "Boosting Operational Efficiency by 75% with Salesforce CPQ Integration for a Leading Brain Technology Firm",
      author: "Geeta Dutt",
      date: "August 23, 2023",
      readTime: "1 min read",
      image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/image-2.webp",
      slug: "75-reduction-in-cycle-time-with-salesforce-cpq-implementation/",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(resources.length / itemsPerPage);
  const paginatedResources = resources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedResources.map((resource, index) => (
            <Link
                key={index}
                to={
                    resource.slug
                    ? `/resources/case-studies/${resource.slug.replace(/\/$/, "")}`
                    : "#"
                }
                className="block"
                >
              <Card className="bg-white overflow-hidden transition-all group cursor-pointer hover:shadow-xl border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                    <img
    src={resource.image}
    alt={resource.title}
    className="w-full h-full object-contain bg-white transform scale-110 transition-transform duration-300 group-hover:scale-125"
  />
  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
    <span className="text-white font-semibold text-sm flex items-center gap-1">
      Read more <span className="text-lg">›</span>
    </span>
  </div>
</div>

                <CardContent className="bg-white p-6">
                  <div className="flex flex-wrap items-center text-xs text-gray-500 mb-4 gap-x-4 gap-y-2">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" /> {resource.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {resource.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-8 group-hover:text-blue-600 transition-colors line-clamp-2 text-[1.05rem] leading-tight">
                    {resource.title}
                  </h3>

                  <div className="text-sm text-gray-500 flex items-center gap-1 mt-2">
                    <Clock className="w-4 h-4" />
                    {resource.readTime}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-md text-sm font-medium flex items-center justify-center transition-colors ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentResourcesSections;
