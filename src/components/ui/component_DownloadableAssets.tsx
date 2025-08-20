import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface ResourceItem {
    title: string;
    subtitle: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    slug?: string;
    list: string;
    category?: string; // Optional category for filtering
}

interface SubTab {
    id: string;
    label: string;
}

const RecentResourcesSection: React.FC = () => {
    const heading = "DIY Resources";
    // const body = "Discover our latest blogs, guides, and updates.";

    // Static sub-tabs
    const subTabs: SubTab[] = [
        { id: "all", label: "All" },
        { id: "design", label: "Design" },
        { id: "marketing-automation", label: "Marketing Automation" },
        { id: "salesforce", label: "Salesforce" },
        { id: "web-development", label: "Web Development" },
    ];

    // Static resources JSON
    const resources: ResourceItem[] = [
        {
            title: "Optimize Your User Experience with a Complete Audit Checklist",
            subtitle:
                "Creating exceptional user experiences requires more than just good design—it demands careful evaluation, actionable insights, and adherence to best practices. A UX audit bridges the gap between user expectations and your product's performance, uncovering areas for improvement and opportunities to shine. This checklist provides actionable dos and don'ts, covering everything from navigation and accessibility to...",
            author: "Sneha Kumari",
            date: "February 24, 2025",
            readTime: "6 min read",
            image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/downloadable-assets/Design-Template.webp",
            list: "Checklist",
            slug: "optimize-your-user-experience-with-a-complete-audit-checklist/",
            category: "Design",
        },
        {
            title: "Salesforce-HubSpot Integration Checklist: A Step-by-Step Guide",
            subtitle:
                "Maintaining data consistency across CRM platforms is crucial for business success. When migrating from HubSpot to Salesforce, proper integration and synchronization ensure no valuable information is lost during the transition. Our comprehensive checklist guides you through the essential steps for seamless CRM integration, from initial setup to ongoing maintenance, helping you avoid common pitfalls and...",
            author: "Mehakpreet Kaur",
            date: "February 17, 2025",
            readTime: "7 min read",
            image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/downloadable-assets/Salesforce-Guide.webp",
            list: "Guide",
            slug: "salesforce-hubspot-integration-checklist-a-step-by-step-guide/",
            category: "Salesforce",
        },
        {
            title: "Your Go-To Checklist for Seamless Zendesk to Salesforce Migration",
            subtitle:
                "Switching from Zendesk to Salesforce is a big decision, and a smooth migration is key to ensuring your team's productivity and customer satisfaction remain intact. Migrating data requires careful planning, data field mapping, and leveraging tools or custom scripts to ensure integrity and consistency. Our Zendesk to Salesforce Migration Checklist offers a clear, step-by-step approach...",
            author: "Mehakpreet Kaur",
            date: "February 13, 2025",
            readTime: "6 min read",
            image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/downloadable-assets/Generic-Guide.webp",
            list: "Guide",
            slug: "your-go-to-checklist-for-seamless-zendesk-to-salesforce-migration/",
                category: "Salesforce",
        },
        {
            title: "Combat Slow Loading Time Woes With Our Website Speed Optimization Checklist",
            subtitle:
                "Your website's speed directly affects how easily and quickly visitors can navigate, interact, and engage with your site. A slow load time can drive users away and impact your rankings on Google, costing you valuable traffic and conversions. Whether you want to improve your user experience or boost your SEO, this Website Speed Optimization checklist...",
            author: "Vishal Mehta",
            date: "February 13, 2025",
            readTime: "4 min read",
            image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/downloadable-assets/Generic-Checklist.webp",
            list: "Checklist",
            slug: "combat-slow-loading-time-woes-with-our-website-speed-optimization-checklist/",
            category: "web-development",
        },
        {
            title: "Your Go-To WordPress Security Checklist to Combat Cyber Threats",
            subtitle:
                "Your WordPress site is a valuable asset, and ensuring its security is critical to protecting your content, user data, and business. However, securing your site doesn't have to be complicated. Whether you're a beginner or an experienced site owner, this WordPress Security checklist will guide you step-by-step on how to keep your site safe, secure...",
            author: "Akanksha Dass",
            date: "June 13, 2025",
            readTime: "9 min read",
            image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/downloadable-assets/Generic-Checklist-2.webp",
            list: "Checklist",
            slug: "your-go-to-wordpress-security-checklist-to-combat-cyber-threats/",
            category: "web-development",
        },
        {
            title: "GA4 Implementation Checklist: A Step-by-Step Guide",
            subtitle:
                "Powerful analytics drives informed decision-making. With Google Analytics 4 (GA4) becoming the new standard for web analytics, getting your implementation right is crucial for accurate tracking and meaningful insights. Whether migrating from Universal Analytics or setting up GA4 for the first time, proper implementation requires careful planning and attention to detail. Our GA4 Implementation Checklist...",
            author: "Shivam Joshi",
            date: "February 13, 2025",
            readTime: "9 min read",
            image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/downloadable-assets/Generic-Checklist-3.webp",
            list: "Checklist",
            slug: "ga4-implementation-checklist-a-step-by-step-guide/",
            category: "web-development",
        },
        {
            title: "Fortify Your Website: The Only Security Checklist You'll Ever Need",
            subtitle:
                "Do you know that nearly 30,000 websites are hacked every day? Cyberattacks and security breaches are rapidly increasing, with a 30% rise in hacks since November 2021. No website is immune, even the most secure can fall victim to a breach. While building and maintaining a website involves many steps—like design, content, and marketing—ensuring its...",
            author: "Shivam Joshi",
            date: "February 13, 2025",
            readTime: "9 min read",
            image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/downloadable-assets/Generic-Checklist.webp",
            list: "Checklist",
            slug: "fortify-your-website-the-only-security-checklist-youll-ever-need/",
            category: "web-development",
        },
        {
            title: "Your Go-To Pardot to HubSpot Migration Checklist",
            subtitle:
                "Switching platforms is more than just a simple migration. It's an opportunity to level up your marketing and sales strategy because the tools and technology that we use to execute our marketing initiatives play a critical role in shaping our success.  If you're planning to make the leap from Pardot to HubSpot, preparation is key...",
            author: "Shivam Joshi",
            date: "February 13, 2025",
            readTime: "9 min read",
            image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/downloadable-assets/Generic-Checklist.webp",
            list: "Checklist",
            slug: "your-go-to-pardot-to-hubspot-migration-checklist/",
            category: "marketing-automation",
        },
        {
            title: "The Ultimate Marketo to HubSpot Migration Checklist",
            subtitle:
                "As businesses grow and evolve, so do their marketing platform needs. While Marketo has long been a trusted solution for robust marketing automation, many businesses consider migrating to HubSpot because of their scaling business needs, intuitive interface, comprehensive toolset, and seamless integrations. That's where our Marketo to HubSpot Migration Checklist comes in. It simplifies your...",
            author: "Shivam Joshi",
            date: "February 12, 2025",
            readTime: "9 min read",
            image: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/downloadable-assets/Generic-Checklist-2.webp",
            list: "Checklist",
            slug: "the-ultimate-marketo-to-hubspot-migration-checklist/",
            category: "marketing-automation",
        },
    ];

    const [activeSubTab, setActiveSubTab] = useState(subTabs[0]?.id || "all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

   const filteredResources =
  activeSubTab === "all"
    ? resources
    : resources.filter(
        (r) => r.category?.toLowerCase() === activeSubTab.toLowerCase()
      ); // Limit to first match


    const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
    const paginatedResources = filteredResources.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading and Body */}
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
                    {/* {body && <p className="text-gray-600 mt-2 max-w-2xl">{body}</p>} */}
                </div>

                {/* Sub-tabs */}
                <div className="flex gap-2 mb-8 overflow-x-auto">
                    {subTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveSubTab(tab.id);
                                setCurrentPage(1);
                            }}
                            className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${activeSubTab === tab.id
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Resource Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paginatedResources.map((resource, index) => (
                            <Link
                            key={index}
                            to={
                                resource.slug && resource.category
                                ? `/downloadable-assets/${resource.category.toLowerCase()}/${resource.slug}`
                                : '/downloadable-assets'
                            }
                            className="block"
                            >

                            <Card className="bg-white overflow-hidden transition-all group cursor-pointer hover:shadow-xl border border-gray-100">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
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

                                        <span className="rounded-[16px] bg-[#dfebf8] px-2 py-1 text-blue-400 font-[var(--gn-weight-reg)] leading-[16.8px]">
                                            {resource.list}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" /> {resource.date}
                                        </span>
                                    </div>

                                    <h3 className="font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 text-[1.05rem] leading-tight">
                                        {resource.title}
                                    </h3>
                                    {/* <p className="font-regular text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 text-[1.05rem] leading-tight">
                                        {resource.subtitle}
                                    </p> */}

                                    {/* <div className="text-sm text-gray-500 flex items-center gap-1 mt-2">
                                        <Clock className="w-4 h-4" />
                                        {resource.readTime}
                                    </div> */}
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Pagination: Only show if more than 6 resources */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-10 gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-8 h-8 rounded-md text-sm font-medium flex items-center justify-center transition-colors ${currentPage === page
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

export default RecentResourcesSection;
