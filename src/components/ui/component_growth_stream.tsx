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
    const heading = "Most Recent Growth Stream Resources";

    // Static resources JSON
    const resources: ResourceItem[] = [
        {
            title: "Mastering GA4 Migration – Insights & Best Practices",
            author: "Sakshi Arora",
            date: "June 16, 2023",
            readTime: "1 min read",
            image: "https://growthnatives.com/wp-content/uploads/2024/02/mastering-ga4-migration.webp",
            slug: "mastering-ga4-migration"
        },
        {
            title: "An Insightful Fireside Chat on CMOs, Technology, and Innovation",
            author: "Sakshi Arora",
            date: "May 5, 2023",
            readTime: "1 min read",
            image: "https://growthnatives.com/wp-content/uploads/2023/05/an-insightful-fireside-chat-on-cmos-technology-and-innovation.webp",
            slug: "an-insightful-fireside-chat-on-cmos-technology-and-innovation"
        },
        {
            title: "How RevOps Leader, Fullcast, Is Redefining Growth Marketing Through Innovation",
            author: "Sakshi Arora",
            date: "November 15, 2022",
            readTime: "1 min read",
            image: "https://growthnatives.com/wp-content/uploads/2024/02/how-revops-leader-fullcast-is-redefining-growth-marketing-through-innovation.webp",
            slug: "how-revops-leader-fullcast-is-redefining-growth-marketing-through-innovation"
        },
        {
            title: "How LAMAV, an Organic Skincare Brand, Is Changing the Beauty Industry",
            author: "Sakshi Arora",
            date: "November 15, 2022",
            readTime: "1 min read",
            image: "https://growthnatives.com/wp-content/uploads/2024/02/How-LAMAV-an-Organic-Skincare-Brand-Is-Changing-the-Beauty-Industry.webp",
            slug: "how-lamav-an-organic-skincare-brand-is-changing-the-beauty-industry"
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
                                    ? `/growth-stream/${resource.slug.replace(/\/$/, "")}`
                                    : "#"
                            }
                            className="block"
                        >
                            <Card className="bg-white overflow-hidden transition-all group cursor-pointer hover:shadow-xl border border-gray-100">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
                                        className="w-full h-full object-cover bg-white transform scale-110 transition-transform duration-300 group-hover:scale-125"
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

export default RecentResourcesSections;
