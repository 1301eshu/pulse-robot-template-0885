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
import { ChevronDown, Calendar, Clock, User } from "lucide-react";
import DynamicSEO from "@/components/DynamicSEO";

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

  // Control dropdown open state (so we can close it on scroll)
  const [catMenuOpen, setCatMenuOpen] = useState(false);

  // show 9 per page
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
      if (categoryId) url += `&categories=${categoryId}`;

      const res = await fetch(url);
      const data = await res.json();

      const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
      setHasMore(page < totalPages);

      const formattedResources: ResourceItem[] = data.map((post: any) => ({
        title: decodeHTML(post.title.rendered),
        subtitle: stripHTML(post.excerpt.rendered),
        author: post.author_name || "Unknown Author",
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

      if (reset) setRecentResources(formattedResources);
      else setRecentResources(prev => [...prev, ...formattedResources]);

      // Explore items (first batch, unfiltered)
      if (page === 1 && !categoryId) {
        const formattedExploreItems: ExploreItem[] = data.slice(0, 4).map((post: any) => ({
          tag: "Blogs",
          title: decodeHTML(post.title.rendered),
          readTime: calculateReadTime(post.content.rendered),
          author: post.author_name || "Unknown Author",
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
      setIsLoadingExplore(false);
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

  // Close dropdown on scroll
  useEffect(() => {
    const onScroll = () => setCatMenuOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getCurrentCategoryName = () => {
    if (activeCategory === "all") return "All";
    return categories.find(cat => cat.slug === activeCategory)?.name || "All";
  };

  const handleCategoryChange = async (categorySlug: string) => {
    setActiveCategory(categorySlug);
    setPage(1);
    setRecentResources([]);
    setHasMore(true);
    setIsLoadingExplore(true);
    setCatMenuOpen(false);

    const categoryId = categorySlug === "all" ? undefined : categories.find(cat => cat.slug === categorySlug)?.id;
    await fetchPosts(1, categoryId, true);
  };

  const handleLoadMore = () => {
    const categoryId = activeCategory === "all" ? undefined : categories.find(cat => cat.slug === activeCategory)?.id;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage, categoryId);
  };

  const categoryTabs = useMemo(() => {
    return [{ id: "all", label: "All" }, ...categories.map(cat => ({ id: cat.slug, label: cat.name }))];
  }, [categories]);

  return (
    <div className="min-h-screen bg-gray-50">
      <DynamicSEO page='blogs'/>
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
            <ExploreMoreSection heading="Featured Posts" items={exploreMoreItems} useH1={true} />

            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-6">
                {/* Heading + Category control */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Explore more</h2>
                      <p className="text-gray-600 mt-2">
                        No fluff. Just frameworks, findings, and future-forward thinking.
                      </p>
                    </div>

                    {/* Mobile: full width + below text; Desktop: inline at right */}
                    <div className="w-full md:w-auto">
                      <DropdownMenu open={catMenuOpen} onOpenChange={setCatMenuOpen} modal={false}>
                        <DropdownMenuTrigger className="w-full md:w-auto flex items-center gap-2 justify-between md:justify-start px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <span className="text-sm font-medium text-gray-700">
                            {isLoadingCategories ? "Loading..." : getCurrentCategoryName()}
                          </span>
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className="w-[calc(100vw-3rem)] md:w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-30 max-h-80 overflow-y-auto"
                          align="start"
                          sideOffset={6}
                          avoidCollisions
                          collisionPadding={16}
                        >
                          <DropdownMenuItem
                            onClick={() => handleCategoryChange("all")}
                            className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${activeCategory === "all" ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"}`}
                          >
                            All
                          </DropdownMenuItem>
                          {categories.map((category) => (
                            <DropdownMenuItem
                              key={category.id}
                              onClick={() => handleCategoryChange(category.slug)}
                              className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${activeCategory === category.slug ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"}`}
                            >
                              {category.name}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
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
                                  .replace(/\s+/g, "-")}/${resource.slug}`
                              : "#"
                          }
                          className="block h-full"
                        >
                          <Card className="h-full bg-white overflow-hidden transition-all group cursor-pointer hover:shadow-xl border border-gray-100">
                            {/* Image (bulletproof no-trim) */}
                            <div className="px-4 pt-4">
                                               <figure
                    className="
                      relative overflow-hidden rounded-xl bg-gray-50 ring-1 ring-black/5
                      mx-auto max-w-full
                      w-[343px] aspect-[300/157]           /* phone */
                      sm:w-[486px] sm:aspect-[300/157]     /* tablet */
                      lg:w-[710px] lg:aspect-[300/157]     /* desktop */
                    "
                  >
                                <img
                                  src={resource.image}
                                  alt={resource.title}
                                  className="
                                    absolute inset-0 w-full h-full
                                    object-cover object-center
                                    scale-[1.02]                  /* bleed past edges */
                                    transition-transform duration-300
                                    group-hover:scale-[1.05]
                                  "
                                />
                                {/* Desktop overlay */}
                                <div className="absolute inset-0 hidden md:flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                  <span className="text-white font-semibold text-sm flex items-center gap-1">
                                    Read more <span className="text-lg">›</span>
                                  </span>
                                </div>
                              </figure>
                            </div>

                            {/* Card Text Content */}
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
          heading="Let's Build Your Next Growth Chapter"
          subtext="With AI at the core and clarity at every step, we're here to make growth feel less chaotic-and a whole lot more scalable."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact-us"
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
