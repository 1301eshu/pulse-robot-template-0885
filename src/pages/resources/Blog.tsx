// 'use client';

// import { useState, useEffect, useMemo } from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { ExploreItem } from "@/components/ui/component_9";
// import ExploreMoreSection from "@/components/ui/component_9";
// import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
// import ContactCta from "@/components/ui/component_6";
// import { ExploreSectionSkeleton, RecentBlogsSkeleton, LoadMoreSkeleton } from "@/components/ui/BlogSkeletons";
// import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
// import { API_BASE_URL } from '../../../apiconfig';

// const decodeHTML = (html: string) => {
//   const txt = document.createElement("textarea");
//   txt.innerHTML = html;
//   return txt.value;
// };

// const ResourcesIndex = () => {
//   const [exploreMoreItems, setExploreMoreItems] = useState<ExploreItem[]>([]);
//   const [recentResources, setRecentResources] = useState<ResourceItem[]>([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isLoadingMore, setIsLoadingMore] = useState(false);

//   // show 9 per page as requested
//   const perPage = 9;

//   const fetchPosts = async (page: number) => {
//     if (page > 1) setIsLoadingMore(true);

//     try {
//       const res = await fetch(`${API_BASE_URL}/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed`);
//       const data = await res.json();

//       const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
//       setHasMore(page < totalPages);

//       const formattedResources: ResourceItem[] = data.map((post: any) => ({
//         title: decodeHTML(post.title.rendered),
//         subtitle: stripHTML(post.excerpt.rendered),
//         author: post._embedded?.author?.[0]?.name || "Unknown Author",
//         date: new Date(post.date).toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         }),
//         readTime: calculateReadTime(post.content.rendered),
//         image:
//           post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//           "https://via.placeholder.com/600x400",
//         slug: post.slug,
//         category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
//       }));

//       setRecentResources(prev => [...prev, ...formattedResources]);

//       // Set explore items only once (from first batch)
//       if (page === 1) {
//         const formattedExploreItems: ExploreItem[] = data.slice(0, 4).map((post: any) => ({
//           tag: "Blogs",
//           title: decodeHTML(post.title.rendered),
//           readTime: calculateReadTime(post.content.rendered),
//           category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
//           thumbnail:
//             post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//             "https://via.placeholder.com/600x400",
//           slug: post.slug,
//         }));
//         setExploreMoreItems(formattedExploreItems);
//         setIsLoading(false);
//       }
//     } catch (err) {
//       console.error("Failed to fetch posts", err);
//       setHasMore(false);
//       setIsLoading(false);
//     } finally {
//       setIsLoadingMore(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts(page);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [page]);

//   const handleLoadMore = () => setPage(prev => prev + 1);

//   // Build tabs from the categories in the resources (All + unique categories)
//   const categoryTabs = useMemo(() => {
//     const cats = Array.from(
//       new Set(
//         recentResources
//           .map(r => (r.category || "General").trim())
//           .filter(Boolean)
//       )
//     );
//     return [{ id: "all", label: "All" }, ...cats.map(c => ({ id: slugify(c), label: c }))];
//   }, [recentResources]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <SmartBreadcrumb />

//       <main className="pt-0">
//         {isLoading ? (
//           <>
//             <ExploreSectionSkeleton />
//             <RecentBlogsSkeleton />
//           </>
//         ) : (
//           <>
//             <ExploreMoreSection heading="Featured Posts" items={exploreMoreItems} />

//             <div className="[&>h2]:text-center">
//               <RecentResourcesSection
//                 heading="Explore more"
//                 body="No fluff. Just frameworks, findings, and future-forward thinking."
//                 // use your fetched data (so disable internal autoData)
//                 autoData={false}
//                 // SHOW TAGS on this page
//                 hideTabs={false}
//                 // let the component use our tabs (built from categories)
//                 subTabs={categoryTabs}
//                 // feed all resources we’ve fetched so far
//                 resources={recentResources}
//                 // load more flow
//                 onLoadMore={handleLoadMore}
//                 hasMore={hasMore}
//                 isLoadingMore={isLoadingMore}
//                 LoadMoreSkeleton={LoadMoreSkeleton}
//                 // IMPORTANT: don’t pass `count` so it won’t trim to 3
//               />
//             </div>
//           </>
//         )}

//         <ContactCta
//           heading="Let's Make Your Salesforce Smarter (And Less Annoying)"
//           subtext="Let's plug in the tech, the talent, and the timing."
//           buttonLabel="Talk to an Expert"
//           buttonLink="/contact"
//         />
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ResourcesIndex;

// /* utils */
// function stripHTML(html: string) {
//   return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
// }
// function calculateReadTime(html: string) {
//   const plainText = html.replace(/<[^>]+>/g, "");
//   const wordCount = plainText.trim().split(/\s+/).length;
//   const time = Math.ceil(wordCount / 200);
//   return `${time} min read`;
// }
// function slugify(s: string) {
//   return s
//     .toLowerCase()
//     .replace(/\s*\([^)]*\)/g, "")
//     .replace(/[^\w\s-]/g, "")
//     .trim()
//     .replace(/\s+/g, "-");
// }


'use client';

import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ExploreItem } from "@/components/ui/component_9";
import ExploreMoreSection from "@/components/ui/component_9";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import { ExploreSectionSkeleton, RecentBlogsSkeleton, LoadMoreSkeleton } from "@/components/ui/BlogSkeletons";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import { API_BASE_URL } from '../../../apiconfig';
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Calendar, Clock } from "lucide-react";

const decodeHTML = (html: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const ResourcesIndex = () => {
  const [exploreMoreItems, setExploreMoreItems] = useState<ExploreItem[]>([]);
  const [recentResources, setRecentResources] = useState<ResourceItem[]>([]);
  const [categories, setCategories] = useState<{ id: number; name: string; slug: string }[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingExplore, setIsLoadingExplore] = useState(false);

  // show 9 per page as requested
  const perPage = 9;

  const fetchCategories = async () => {
    try {
      setIsLoadingCategories(true);
      const res = await fetch(`${API_BASE_URL}/wp-json/wp/v2/categories?per_page=100`);
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Failed to fetch categories", err);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  const fetchPosts = async (page: number, categoryId?: number, reset = false) => {
    if (page > 1) setIsLoadingMore(true);

    try {
      let url = `${API_BASE_URL}/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed`;
      if (categoryId) {
        url += `&categories=${categoryId}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
      setHasMore(page < totalPages);

      const formattedResources: ResourceItem[] = data.map((post: any) => ({
        title: decodeHTML(post.title.rendered),
        subtitle: stripHTML(post.excerpt.rendered),
        author: post._embedded?.author?.[0]?.name || "Unknown Author",
        date: new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        readTime: calculateReadTime(post.content.rendered),
        image:
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "https://via.placeholder.com/600x400",
        slug: post.slug,
        category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
      }));

      if (reset) {
        setRecentResources(formattedResources);
      } else {
        setRecentResources(prev => [...prev, ...formattedResources]);
      }

      // Set explore items only once (from first batch of latest posts - not filtered by category)
      if (page === 1 && !categoryId) {
        const formattedExploreItems: ExploreItem[] = data.slice(0, 4).map((post: any) => ({
          tag: "Blogs",
          title: decodeHTML(post.title.rendered),
          readTime: calculateReadTime(post.content.rendered),
          category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
          thumbnail:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://via.placeholder.com/600x400",
          slug: post.slug,
        }));
        setExploreMoreItems(formattedExploreItems);
      }

      if (reset) setIsLoading(false);
    } catch (err) {
      console.error("Failed to fetch posts", err);
      setHasMore(false);
      if (reset) setIsLoading(false);
    } finally {
      setIsLoadingMore(false);
      setIsLoadingExplore(false); // <-- stop skeleton when category loaded
    }
  };

  // Initial data fetch
  useEffect(() => {
    const initializeData = async () => {
      await fetchCategories();
      await fetchPosts(1, undefined, true);
    };
    initializeData();
  }, []);

  // Get current category name for display
  const getCurrentCategoryName = () => {
    if (activeCategory === "all") return "All";
    return categories.find(cat => cat.slug === activeCategory)?.name || "All";
  };

  // Handle category change
  const handleCategoryChange = async (categorySlug: string) => {
    setActiveCategory(categorySlug);
    setPage(1);
    setRecentResources([]);
    setHasMore(true);
    setIsLoadingExplore(true); // <-- show skeleton

    const categoryId = categorySlug === "all" ? undefined : categories.find(cat => cat.slug === categorySlug)?.id;
    await fetchPosts(1, categoryId, true);
  };

  // Handle load more
  const handleLoadMore = () => {
    const categoryId = activeCategory === "all" ? undefined : categories.find(cat => cat.slug === activeCategory)?.id;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage, categoryId);
  };

  // Build tabs from the fetched categories
  const categoryTabs = useMemo(() => {
    return [
      { id: "all", label: "All" },
      ...categories.map(cat => ({ id: cat.slug, label: cat.name }))
    ];
  }, [categories]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SmartBreadcrumb />

      <main className="pt-0">
        {isLoading ? (
          <>
            <ExploreSectionSkeleton />
            <RecentBlogsSkeleton />
          </>
        ) : (
          <>
            <ExploreMoreSection heading="Featured Posts" items={exploreMoreItems} />

            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Explore more</h2>
                    <p className="text-gray-600 mt-2">No fluff. Just frameworks, findings, and future-forward thinking.</p>
                  </div>

                  {/* Category Dropdown - moved to right */}
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <span className="text-sm font-medium text-gray-700">
                        {isLoadingCategories ? "Loading..." : getCurrentCategoryName()}
                      </span>
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
                      align="end"
                      sideOffset={4}
                      avoidCollisions={true}
                      collisionPadding={16}
                    >
                      <DropdownMenuItem
                        onClick={() => handleCategoryChange("all")}
                        className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${activeCategory === "all" ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"
                          }`}
                      >
                        All
                      </DropdownMenuItem>
                      {categories.map((category) => (
                        <DropdownMenuItem
                          key={category.id}
                          onClick={() => handleCategoryChange(category.slug)}
                          className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${activeCategory === category.slug ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"
                            }`}
                        >
                          {category.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Loading State */}
                {isLoadingExplore ? (
                  <LoadMoreSkeleton />
                ) : recentResources.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="text-gray-400 text-6xl mb-4">📝</div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No posts found</h3>
                    <p className="text-gray-600">
                      {activeCategory === "all"
                        ? "No blog posts are available at the moment."
                        : `No posts found for "${getCurrentCategoryName()}" category.`}
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Resource Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {recentResources.map((resource, index) => (
                        <Link
                          key={index}
                          to={
                            resource.slug
                              ? `/blogs/${(resource.category || "general")
                                .replace(/\s*\([^)]*\)/g, "")
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                              }/${resource.slug}`
                              : "#"
                          }
                          className="block"
                        >
                          <Card className="bg-white overflow-hidden transition-all group cursor-pointer hover:shadow-xl border border-gray-100">
                            {/* Image + Hover Overlay */}
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

                            {/* Card Text Content */}
                            <CardContent className="bg-white p-6">
                              <div className="flex flex-wrap items-center text-xs text-gray-500 mb-4 gap-x-4 gap-y-2">
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

                    {/* Loading More Skeleton */}
                    {isLoadingMore && <LoadMoreSkeleton />}

                    {/* Load More Button */}
                    {hasMore && !isLoadingMore && recentResources.length > 0 && (
                      <div className="flex justify-center mt-10">
                        <button
                          onClick={handleLoadMore}
                          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium transition-colors"
                        >
                          Load More Posts
                        </button>
                      </div>
                    )}
                  </>
                )}

              </div>
            </section>
          </>
        )}

        <ContactCta
          heading="Let's Make Your Salesforce Smarter (And Less Annoying)"
          subtext="Let's plug in the tech, the talent, and the timing."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesIndex;

/* utils */
function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
}
function calculateReadTime(html: string) {
  const plainText = html.replace(/<[^>]+>/g, "");
  const wordCount = plainText.trim().split(/\s+/).length;
  const time = Math.ceil(wordCount / 200);
  return `${time} min read`;
}
function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}