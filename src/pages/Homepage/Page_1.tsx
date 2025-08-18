'use client';

import { useEffect, useState } from "react";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ExploreMoreSection, { ExploreItem } from "@/components/ui/component_9";

export default function Page_1() {
  const [exploreMoreItems, setExploreMoreItems] = useState<ExploreItem[]>([]);
  const [recentResources, setRecentResources] = useState<ResourceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // one request; enough items to feed both sections
        const res = await fetch(
          `https://growthnatives.com/wp-json/wp/v2/posts?per_page=6&_embed`
        );
        const data = await res.json();

        // ---- Explore more (first 4) ----
        const explore: ExploreItem[] = data.slice(0, 4).map((post: any) => ({
          tag: "Blogs",
          title: post.title.rendered,
          readTime: calculateReadTime(post.content.rendered),
          category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
          thumbnail:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://via.placeholder.com/600x400",
          slug: post.slug,
          type: "blogs",
        }));
        setExploreMoreItems(explore);

        // ---- Recent resources (first 3) ----
        const recent: ResourceItem[] = data.slice(0, 3).map((post: any) => ({
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
        setRecentResources(recent);
      } catch (e) {
        console.error("Failed to fetch posts", e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (isLoading) {
    return <div className="py-12 text-center text-sm text-gray-500">Loading…</div>;
  }

  return (
    <>
      {/* Explore more */}
      <ExploreMoreSection heading="Built to Learn, Written to Share " 
        body="No fluff. Just frameworks, findings, and future-forward thinking."
        items={exploreMoreItems} />

      {/* Recent Blogs - Center heading only for this page */}
      {/* <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Built to Learn, Written to Share"
          body="No fluff. Just frameworks, findings, and future-forward thinking."
          subTabs={[]}            // no subtabs on this page
          resources={recentResources}
        />
      </div> */}
    </>
  );
}

/* helpers */
function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
}
function calculateReadTime(html: string) {
  const plain = html.replace(/<[^>]+>/g, "");
  const words = plain.trim().split(/\s+/).length;
  return `${Math.ceil(words / 200)} min read`;
}
