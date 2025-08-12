import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExploreMoreSection, { ExploreItem } from "@/components/ui/component_9";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";

const ResourcesIndex = () => {
  const [exploreMoreItems, setExploreMoreItems] = useState<ExploreItem[]>([]);
  const [recentResources, setRecentResources] = useState<ResourceItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const perPage = 100; // Fetch more posts to filter for infographics

  const fetchInfographicPosts = async (page: number) => {
    try {
      const res = await fetch(`https://growthnatives.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed`);
      const data = await res.json();

      const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
      setHasMore(page < totalPages);

      // Filter posts that have resource_category-infographics in their class_list
      const infographicPosts = data.filter((post: any) => 
        post.class_list?.includes('resource_category-infographics')
      );

      const formattedResources: ResourceItem[] = infographicPosts.map((post: any) => ({
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
        category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Infographics",
      }));

      if (page === 1) {
        setRecentResources(formattedResources);
        
        // Set explore items from first batch
        const formattedExploreItems: ExploreItem[] = infographicPosts.slice(0, 4).map((post: any) => ({
          tag: "Infographics",
          title: post.title.rendered,
          readTime: calculateReadTime(post.content.rendered),
          category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Infographics",
          thumbnail:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://via.placeholder.com/600x400",
          slug: post.slug,
        }));
        setExploreMoreItems(formattedExploreItems);
      } else {
        setRecentResources(prev => [...prev, ...formattedResources]);
      }
    } catch (err) {
      console.error("Failed to fetch infographic posts", err);
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchInfographicPosts(page);
  }, [page]);

  const handleLoadMore = () => setPage(prev => prev + 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-16">
        {/* Explore More Section */}
        <ExploreMoreSection heading="Explore more infographics" items={exploreMoreItems} />

        {/* Recent Infographics - Center heading only for this page */}
        <div className="[&>h2]:text-center">
          <RecentResourcesSection
            heading="Most Recent Infographics"
            subTabs={[]} // no subtabs on this page
            resources={recentResources}
            onLoadMore={hasMore ? handleLoadMore : undefined}
            hasMore={hasMore}
          />
        </div>

        {/* Contact CTA */}
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

// Utilities
function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
}

function calculateReadTime(html: string) {
  const plainText = html.replace(/<[^>]+>/g, "");
  const wordCount = plainText.trim().split(/\s+/).length;
  const time = Math.ceil(wordCount / 200); // ~200 words per min
  return `${time} min read`;
}