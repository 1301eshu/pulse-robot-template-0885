import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface ResourceItem {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime?: string;
  image: string;
  slug: string;
  list?: string;
  category?: string;
}

const RecentResourcesSection: React.FC = () => {
  const heading = "Ebooks";

  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Fetch from WP API
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await fetch(
          "https://growthnatives.com/wp-json/wp/v2/ebooks?per_page=50&_embed"
        );
        const data = await res.json();

        const mapped = data.map((item: any) => {
          const image =
            item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
          const category =
            item._embedded?.["wp:term"]?.[0]?.[0]?.name || "General";

          return {
            id: item.id,
            title: item.title.rendered,
            subtitle: item.excerpt.rendered.replace(/<[^>]+>/g, ""),
            author: "",
            date: new Date(item.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            image,
            slug: item.slug,
            category,
          } as ResourceItem;
        });

        setResources(mapped);
      } catch (err) {
        console.error("Error fetching resources", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  const totalPages = Math.ceil(resources.length / itemsPerPage);
  const paginatedResources = resources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
        </div>

        {/* Loader */}
        {loading ? (
          <p className="text-center">Loading resources...</p>
        ) : (
          <>
            {/* Resource Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedResources.map((resource) => (
                <Link
                  key={resource.id}
                  to={`/ebooks/${resource.slug}`}
                  className="block"
                >
                  <Card className="bg-white overflow-hidden transition-all group cursor-pointer hover:shadow-xl border border-gray-100">
                    <div className="relative h-48 overflow-hidden">
                      {resource.image && (
                        <img
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <span className="text-white font-semibold text-sm flex items-center gap-1">
                          Read more <span className="text-lg">›</span>
                        </span>
                      </div>
                    </div>

                    <CardContent className="bg-white p-6">
                      <div className="flex flex-wrap items-center text-xs text-gray-500 mb-4 gap-x-4 gap-y-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" /> {resource.date}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 text-[1.05rem] leading-tight">
                        {resource.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-10 gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
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
                  )
                )}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default RecentResourcesSection;