// src/components/exploremore.tsx
'use client';

import { useEffect, useMemo, useState } from "react";
import ExploreMoreSection, { ExploreItem as ExploreItemType } from "@/components/ui/component_9";
import { API_BASE_URL } from "./../../apiconfig";

type Props = {
  heading: string;
  body: string;
  /** How many posts to fetch from WP */
  perPage?: number;
  /** How many to render (component_9 needs at least 2) */
  firstN?: number;
  /** Fallback label if no WP tag is present */
  tagLabel?: string;
  className?: string;
  /** Must be 'blogs' or 'case-studies' to satisfy the union */
  contentType?: ExploreItemType["type"];
};

/** Build the WP endpoint inside the component */
const buildEndpoint = (perPage: number) =>
  `${API_BASE_URL}/wp-json/wp/v2/posts?per_page=${perPage}&_embed`;

export default function ExploreMoreBlock({
  heading,
  body,
  perPage = 6,
  firstN = 4,
  tagLabel = "Blogs",
  className,
  contentType = "blogs",
}: Props) {
  const [items, setItems] = useState<ExploreItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const endpoint = useMemo(() => buildEndpoint(perPage), [perPage]);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(endpoint, { cache: "no-store" });
        if (!res.ok) throw new Error(`WP fetch failed: ${res.status}`);
        const data = await res.json();

        const mapped: ExploreItemType[] = (Array.isArray(data) ? data : [])
          .slice(0, firstN)
          .map((post: any) => mapWpPostToExploreItem(post, tagLabel, contentType));

        if (!cancelled) setItems(mapped);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Unknown error");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    run();
    return () => { cancelled = true; };
  }, [endpoint, firstN, tagLabel, contentType]);

  return (
    <div className={className}>
      <ExploreMoreSection
        heading={heading}
        body={isLoading && items.length === 0 ? "Loading…" : body}
        items={error ? [] : items}
      />
    </div>
  );
}

/* ---------------- helpers ---------------- */

function mapWpPostToExploreItem(
  post: any,
  tagFallback: string,
  contentType: ExploreItemType["type"] // "blogs" | "case-studies"
): ExploreItemType {
  const title: string = post?.title?.rendered ?? "Untitled";

  // Prefer full content for estimating read time; fall back to excerpt
  const htmlForReadTime: string =
    post?.content?.rendered ?? post?.excerpt?.rendered ?? "";

  const readTime: string = estimateReadTime(htmlForReadTime);

  // Featured image (thumbnail)
  const thumbnail: string | undefined =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
    post?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium_large?.source_url ??
    undefined;

  // WP terms: [0] categories, [1] tags
  const terms = post?._embedded?.["wp:term"] ?? [];
  const categories = Array.isArray(terms?.[0]) ? terms[0] : [];
  const tags = Array.isArray(terms?.[1]) ? terms[1] : [];

  const category: string = categories?.[0]?.name ?? "General";
  const tag: string = tags?.[0]?.name ?? tagFallback;

  // Use WP slug (component_9 constructs the path)
  const slug: string | undefined = post?.slug ?? undefined;

  // Return EXACTLY the fields defined in ExploreItem
  const item: ExploreItemType = {
    tag,
    title,
    readTime,
    category,
    thumbnail,
    slug,
    type: contentType,
  };

  return item;
}

function estimateReadTime(html: string): string {
  const text = stripHtml(html);
  if (!text) return "3 min read"; // safe default
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200)); // ~200 wpm
  return `${minutes} min read`;
}

function stripHtml(input: string): string {
  if (!input) return "";
  return input.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}
