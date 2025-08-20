'use client';

import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/* ===== Types ===== */
export interface ResourceItem {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug?: string;
  category?: string;
}

interface SubTab {
  id: string;
  label: string;
}

interface RecentResourcesProps {
  heading?: string;
  body?: string;

  /** legacy props (kept for compatibility; overridden when autoData=true) */
  subTabs?: SubTab[];
  resources?: ResourceItem[];

  /** pagination/load-more (unchanged) */
  onLoadMore?: () => void;
  hasMore?: boolean;
  isLoadingMore?: boolean;
  LoadMoreSkeleton?: React.ComponentType;

  /** NEW controls */
  autoData?: boolean;   // default: true (fetch & override)
  limit?: number;       // used only if count is undefined
  hideTabs?: boolean;   // default: true (hide category pills)
  count?: number;       // default: 3 (also used for fetch size)
}

/* ===== Component ===== */
const RecentResourcesSection: React.FC<RecentResourcesProps> = ({
  heading = "Most Recent Resources",
  body,

  // legacy incoming props (ignored when autoData=true)
  subTabs: subTabsProp = [],
  resources: resourcesProp = [],

  onLoadMore,
  hasMore = false,
  isLoadingMore = false,
  LoadMoreSkeleton,

  // sensible defaults per request
  autoData = true,
  hideTabs = true,
  count = 3,
  limit = 9,
}) => {
  const postLimit = count ?? limit;

  // internal state for auto data
  const [fetched, setFetched] = useState<ResourceItem[]>([]);
  const [autoTabs, setAutoTabs] = useState<SubTab[]>([]);
  const [loading, setLoading] = useState<boolean>(autoData);

  // choose data source
  // IMPORTANT: only trim by `count` when autoData=true (so page-supplied lists aren't cut)
  const effectiveResourcesUncapped = autoData ? fetched : resourcesProp;
  const effectiveResources = autoData
    ? (count ? fetched.slice(0, count) : fetched)
    : effectiveResourcesUncapped;

  const effectiveTabs = useMemo<SubTab[]>(
    () =>
      autoData
        ? autoTabs
        : subTabsProp.length
        ? subTabsProp
        : [{ id: "all", label: "All" }],
    [autoData, autoTabs, subTabsProp]
  );

  const [activeSubTab, setActiveSubTab] = useState(
    effectiveTabs[0]?.id || "all"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  /* ===== Fetch when autoData is on ===== */
  useEffect(() => {
    if (!autoData) return;
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://growthnatives.com/wp-json/wp/v2/posts?per_page=${postLimit}&_embed`,
          { cache: "no-store" }
        );
        const data = await res.json();
        if (cancelled) return;

        const mapped: ResourceItem[] = data.map((post: any) => ({
          title: post.title.rendered,
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

        // Tabs hidden by default; only build if visible
        if (!hideTabs) {
          const categories = Array.from(
            new Set(
              mapped
                .map((m) => m.category)
                .filter(Boolean)
                .map((c) => (c as string).trim())
            )
          ) as string[];

          const tabs: SubTab[] = [
            { id: "all", label: "All" },
            ...categories.map((c) => ({ id: slugify(c), label: c })),
          ];
          setAutoTabs(tabs);
          setActiveSubTab("all");
        } else {
          setAutoTabs([]);
        }

        setFetched(mapped);
        setCurrentPage(1);
      } catch (e) {
        console.error("RecentResourcesSection fetch failed", e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [autoData, postLimit, hideTabs]);

  /* ===== Filtering ===== */
  // If we have tabs (auto OR provided), filter by category slug.
  const filteredResources = useMemo(() => {
    if (activeSubTab === "all") return effectiveResources;

    const usingAutoTabs = autoData && autoTabs.length > 0;
    const usingProvidedTabs = !autoData && (subTabsProp?.length ?? 0) > 0;

    if (usingAutoTabs || usingProvidedTabs) {
      return effectiveResources.filter(
        (r) => slugify(r.category || "general") === activeSubTab
      );
    }

    // fallback: no tabs available
    return effectiveResources;
  }, [activeSubTab, effectiveResources, autoData, autoTabs.length, subTabsProp]);

  /* ===== Pagination / Display ===== */
  const displayResources = onLoadMore
    ? filteredResources
    : filteredResources.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);

  /* ===== Loading state (only for autoData) ===== */
  if (autoData && loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
            {body && <p className="text-gray-600 mt-2 max-w-2xl">{body}</p>}
          </div>
          <div className="py-12 text-center text-sm text-gray-500">Loading…</div>
        </div>
      </section>
    );
  }

  /* ===== Render ===== */
  return (
    <section className="py-16 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
          {body && <p className="text-gray-600 mt-2 max-w-2xl">{body}</p>}
        </div>

        {/* Sub-tabs (hidden by default) */}
        {!hideTabs && (
          <div className="flex gap-2 mb-8 overflow-x-auto">
            {effectiveTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveSubTab(tab.id);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                  activeSubTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayResources.map((resource, index) => (
            <Link
              key={index}
              to={
                resource.slug
                  ? `/blogs/${
                      (resource.category || "general")
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
        {isLoadingMore && LoadMoreSkeleton && <LoadMoreSkeleton />}

        {/* Load More Button - only show if onLoadMore prop is provided */}
        {onLoadMore && hasMore && !isLoadingMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={onLoadMore}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Load More Posts
            </button>
          </div>
        )}

        {/* Traditional Pagination - only show if no onLoadMore prop */}
        {!onLoadMore && totalPages > 1 && (
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

export default RecentResourcesSection;

/* ===== Helpers ===== */
function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
}
function calculateReadTime(html: string) {
  const plain = html.replace(/<[^>]+>/g, "");
  const words = plain.trim().split(/\s+/).length;
  return `${Math.ceil(words / 200)} min read`;
}
function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
