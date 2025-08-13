import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyFeaturedSection, { CaseStudyItem } from "@/components/ui/component_21";
import CaseStudyGridSection, { CaseStudyGridItem } from "@/components/ui/component_22";
import ContactCta from "@/components/ui/component_6";

const CaseStudiesIndex = () => {
  const [featuredCaseStudies, setFeaturedCaseStudies] = useState<CaseStudyItem[]>([]);
  const [allCaseStudies, setAllCaseStudies] = useState<CaseStudyGridItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const perPage = 9;

  const fetchCaseStudies = async (page: number) => {
    try {
      // Fetch posts with 'case-studies' category or resource_category-case-studies
      const res = await fetch(`https://growthnatives.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed`);
      const data = await res.json();

      const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
      setHasMore(page < totalPages);

      // Filter posts that have case studies in their class list or categories
      const caseStudyPosts = data.filter((post: any) => 
        post.class_list?.some((cls: string) => cls.includes('case-studies') || cls.includes('resource_category-case-studies')) ||
        post._embedded?.["wp:term"]?.[0]?.some((term: any) => term.slug.includes('case-studies'))
      );

      const formattedCaseStudies: CaseStudyGridItem[] = caseStudyPosts.map((post: any) => ({
        title: post.title.rendered,
        excerpt: stripHTML(post.excerpt.rendered),
        client: extractClientName(post.title.rendered),
        industry: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Technology",
        results: extractResults(post.content.rendered),
        image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/600x400",
        slug: post.slug,
        category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
      }));

      setAllCaseStudies(prev => [...prev, ...formattedCaseStudies]);

      // Set featured case studies only once (from first batch)
      if (page === 1) {
        const formattedFeatured: CaseStudyItem[] = caseStudyPosts.slice(0, 3).map((post: any) => ({
          title: post.title.rendered,
          client: extractClientName(post.title.rendered),
          industry: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Technology",
          results: extractResults(post.content.rendered),
          thumbnail: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/600x400",
          slug: post.slug,
          category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
        }));
        setFeaturedCaseStudies(formattedFeatured);
      }
    } catch (err) {
      console.error("Failed to fetch case studies", err);
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies(page);
  }, [page]);

  const handleLoadMore = () => setPage(prev => prev + 1);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Featured Case Studies Section */}
        <CaseStudyFeaturedSection 
          heading="Success Stories" 
          body="Real results from real clients. See how we've helped businesses transform their digital presence and achieve measurable growth."
          items={featuredCaseStudies} 
        />

        {/* All Case Studies Grid */}
        <div className="[&>h2]:text-center">
          <CaseStudyGridSection
            heading="All Case Studies"
            subTabs={[]} // no subtabs on this page
            caseStudies={allCaseStudies}
            onLoadMore={hasMore ? handleLoadMore : undefined}
            hasMore={hasMore}
          />
        </div>

        {/* Contact CTA */}
        <ContactCta
          heading="Ready to Write Your Success Story?"
          subtext="Let's create a case study that showcases your business transformation."
          buttonLabel="Start Your Journey"
          buttonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesIndex;

// Utilities
function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
}

function extractClientName(title: string) {
  // Try to extract client name from title (first few words)
  const words = title.split(' ');
  return words.length > 2 ? words.slice(0, 2).join(' ') : 'Client';
}

function extractResults(content: string) {
  // Extract key metrics/results from content
  const plainText = content.replace(/<[^>]+>/g, "");
  const percentageMatch = plainText.match(/(\d+)%/);
  const increaseMatch = plainText.match(/(\d+)x|(\d+) times/);
  
  if (percentageMatch) return `${percentageMatch[1]}% improvement`;
  if (increaseMatch) return `${increaseMatch[1] || increaseMatch[2]}x growth`;
  return "Significant ROI increase";
}