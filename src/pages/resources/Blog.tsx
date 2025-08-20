'use client';

import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExploreItem } from "@/components/ui/component_9";
import ExploreMoreSection from "@/components/ui/component_9";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import { ExploreSectionSkeleton, RecentBlogsSkeleton, LoadMoreSkeleton } from "@/components/ui/BlogSkeletons";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import { API_BASE_URL } from '../../../apiconfig';

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

  // show 9 per page as requested
  const perPage = 9;

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/wp-json/wp/v2/categories`);
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Failed to fetch categories", err);
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

      // Set explore items only once (from first batch)
      if (page === 1) {
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
        if (reset) setIsLoading(false);
      }
    } catch (err) {
      console.error("Failed to fetch posts", err);
      setHasMore(false);
      if (reset) setIsLoading(false);
    } finally {
      setIsLoadingMore(false);
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

  // Handle category change
  const handleCategoryChange = async (categorySlug: string) => {
    setActiveCategory(categorySlug);
    setPage(1);
    setRecentResources([]);
    setHasMore(true);
    
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

            <div className="[&>h2]:text-center">
              <RecentResourcesSection
                heading="Explore more"
                body="No fluff. Just frameworks, findings, and future-forward thinking."
                // use your fetched data (so disable internal autoData)
                autoData={false}
                // SHOW TAGS on this page
                hideTabs={false}
                // let the component use our tabs (built from categories)
                subTabs={categoryTabs}
                // feed all resources we've fetched so far
                resources={recentResources}
                // load more flow
                onLoadMore={handleLoadMore}
                hasMore={hasMore}
                isLoadingMore={isLoadingMore}
                LoadMoreSkeleton={LoadMoreSkeleton}
                // Handle category tab changes
                onTabChange={handleCategoryChange}
                activeTab={activeCategory}
                // IMPORTANT: don't pass `count` so it won't trim to 3
              />
            </div>
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