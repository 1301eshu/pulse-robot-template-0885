// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import ExploreMoreSection, { ExploreItem } from "@/components/ui/component_9";
// import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
// import ContactCta from "@/components/ui/component_6";

// const ResourcesIndex = () => {
//   const [activeTab, setActiveTab] = useState('articles');

//   const exploreMoreItems: ExploreItem[] = [
//     {
//       tag: "Blogs",
//       title: "HubSpot Just Changed the Game: Meet the Deep Research Connector with ChatGPT",
//       readTime: "5 min read",
//       category: "Marketing Automation",
//       thumbnail: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg",
//       slug: "hubspot-chatgpt-connector",
//     },
//     {
//       tag: "Blogs",
//       title: "Google Ads Services Agency Drives 300% ROI Increase",
//       readTime: "9 min",
//       category: "Performance Marketing",
//     },
//     {
//       tag: "Blogs",
//       title: "The Complete Guide to Salesforce Marketing Cloud Implementation",
//       readTime: "7 min",
//       category: "Salesforce",
//     },
//     {
//       tag: "Blogs",
//       title: "Revenue Lifecycle Visualized: New Benchmarks",
//       readTime: "4 min",
//       category: "RevOps"
//     },
//   ];

//   const recentResources: ResourceItem[] = [
//     {
//       title: "Agentic AI: The Silent Force Reshaping Marketing Ops",
//       subtitle: "Wait, so this thing just... does it? Like, by itself? Yes. And no, it's not magic. It's called Agentic AI and it's the next evolution of marketing automation you...",
//       author: "Sneha Kumari",
//       date: "July 7, 2025",
//       readTime: "6 min read",
//       image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg",
//       slug: "hubspot-chatgpt-connector"
//     },
//     {
//       title: "The AI Shortlist: Top Use Cases for Marketing Ops That You Must Know",
//       subtitle: "Back in the day, Marketing Ops used to mean fighting timelines and making friends with a dozen dashboards...",
//       author: "Mehakpreet Kaur",
//       date: "July 4, 2025",
//       readTime: "7 min read",
//       image: "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6795?w=600&h=400",
//       slug: "google-ads-roi-increase"
//     },
//     {
//       title: "Marketo & AI: Best Practices for Smarter Segmentation and Nurturing",
//       subtitle: "You've got Marketo. You've got data. You've got 47 tabs open. Now what?...",
//       author: "Mehakpreet Kaur",
//       date: "July 4, 2025",
//       readTime: "6 min read",
//       image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
//       slug: "marketo-ai-segmentation"
//     },
//     {
//       title: "The Developer's Evolution in the Age of AI: What's Next?",
//       subtitle: "As AI cements its role in software development, the question is no longer if developers should adapt but how far they're willing to evolve...",
//       author: "Vishal Mehta",
//       date: "June 16, 2025",
//       readTime: "4 min read",
//       image: "https://images.unsplash.com/photo-1629904853893-dbb7c4183031?w=600&h=400",
//       slug: "developer-evolution-ai"
//     },
//     {
//       title: "The Ultimate AI Readiness Checklist for Your Marketing Ops Stack",
//       subtitle: "AI isn't the future—it's already here, quietly revolutionizing marketing operations stacks everywhere...",
//       author: "Akanksha Dass",
//       date: "June 13, 2025",
//       readTime: "3 min read",
//       image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600&h=400",
//       slug: "ai-readiness-checklist"
//     },
//     {
//       title: "Understanding Adobe Experience Platform Web SDK: A Comprehensive Introduction",
//       subtitle: "The Adobe Experience Platform (AEP) Web SDK is transforming how businesses collect, manage, and leverage data...",
//       author: "Shivam Joshi",
//       date: "June 10, 2025",
//       readTime: "9 min read",
//       image: "https://images.unsplash.com/photo-1618005198919-d3d4b5aa1c63?w=600&h=400",
//       slug: "adobe-experience-platform-sdk"
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <main className="pt-16">
//         {/* Explore More Section */}
//         <ExploreMoreSection heading="Explore more" items={exploreMoreItems} />

//         {/* Recent Blogs - Center heading only for this page */}
//         <div className="[&>h2]:text-center">
//           <RecentResourcesSection
//             heading="Most Recent Blogs"
//             subTabs={[]} // no subtabs on this page
//             resources={recentResources}
//           />
//         </div>

//         {/* Contact CTA */}
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


// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import ExploreMoreSection, { ExploreItem } from "@/components/ui/component_9";
// import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
// import ContactCta from "@/components/ui/component_6";

// const ResourcesIndex = () => {
//   const [activeTab, setActiveTab] = useState('articles');

//   const exploreMoreItems: ExploreItem[] = [
//     {
//       tag: "Blogs",
//       title: "HubSpot Just Changed the Game: Meet the Deep Research Connector with ChatGPT",
//       readTime: "5 min read",
//       category: "Marketing Automation",
//       thumbnail: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg",
//       slug: "hubspot-chatgpt-connector",
//     },
//     {
//       tag: "Blogs",
//       title: "Google Ads Services Agency Drives 300% ROI Increase",
//       readTime: "9 min",
//       category: "Performance Marketing",
//     },
//     {
//       tag: "Blogs",
//       title: "The Complete Guide to Salesforce Marketing Cloud Implementation",
//       readTime: "7 min",
//       category: "Salesforce",
//     },
//     {
//       tag: "Blogs",
//       title: "Revenue Lifecycle Visualized: New Benchmarks",
//       readTime: "4 min",
//       category: "RevOps"
//     },
//   ];

//   const recentResources: ResourceItem[] = [
//     {
//       title: "Agentic AI: The Silent Force Reshaping Marketing Ops",
//       subtitle: "Wait, so this thing just... does it? Like, by itself? Yes. And no, it's not magic. It's called Agentic AI and it's the next evolution of marketing automation you...",
//       author: "Sneha Kumari",
//       date: "July 7, 2025",
//       readTime: "6 min read",
//       image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg",
//       slug: "hubspot-chatgpt-connector"
//     },
//     {
//       title: "The AI Shortlist: Top Use Cases for Marketing Ops That You Must Know",
//       subtitle: "Back in the day, Marketing Ops used to mean fighting timelines and making friends with a dozen dashboards...",
//       author: "Mehakpreet Kaur",
//       date: "July 4, 2025",
//       readTime: "7 min read",
//       image: "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6795?w=600&h=400",
//       slug: "google-ads-roi-increase"
//     },
//     {
//       title: "Marketo & AI: Best Practices for Smarter Segmentation and Nurturing",
//       subtitle: "You've got Marketo. You've got data. You've got 47 tabs open. Now what?...",
//       author: "Mehakpreet Kaur",
//       date: "July 4, 2025",
//       readTime: "6 min read",
//       image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
//       slug: "marketo-ai-segmentation"
//     },
//     {
//       title: "The Developer's Evolution in the Age of AI: What's Next?",
//       subtitle: "As AI cements its role in software development, the question is no longer if developers should adapt but how far they're willing to evolve...",
//       author: "Vishal Mehta",
//       date: "June 16, 2025",
//       readTime: "4 min read",
//       image: "https://images.unsplash.com/photo-1629904853893-dbb7c4183031?w=600&h=400",
//       slug: "developer-evolution-ai"
//     },
//     {
//       title: "The Ultimate AI Readiness Checklist for Your Marketing Ops Stack",
//       subtitle: "AI isn't the future—it's already here, quietly revolutionizing marketing operations stacks everywhere...",
//       author: "Akanksha Dass",
//       date: "June 13, 2025",
//       readTime: "3 min read",
//       image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600&h=400",
//       slug: "ai-readiness-checklist"
//     },
//     {
//       title: "Understanding Adobe Experience Platform Web SDK: A Comprehensive Introduction",
//       subtitle: "The Adobe Experience Platform (AEP) Web SDK is transforming how businesses collect, manage, and leverage data...",
//       author: "Shivam Joshi",
//       date: "June 10, 2025",
//       readTime: "9 min read",
//       image: "https://images.unsplash.com/photo-1618005198919-d3d4b5aa1c63?w=600&h=400",
//       slug: "adobe-experience-platform-sdk"
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <main className="pt-16">
//         {/* Explore More Section */}
//         <ExploreMoreSection heading="Explore more" items={exploreMoreItems} />

//         {/* Recent Blogs - Center heading only for this page */}
//         <div className="[&>h2]:text-center">
//           <RecentResourcesSection
//             heading="Most Recent Blogs"
//             subTabs={[]} // no subtabs on this page
//             resources={recentResources}
//           />
//         </div>

//         {/* Contact CTA */}
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


// import { useState, useEffect } from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { ExploreItem } from "@/components/ui/component_9";
// import ExploreMoreSection from "@/components/ui/component_9";
// import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
// import ContactCta from "@/components/ui/component_6";

// const ResourcesIndex = () => {
//   const [exploreMoreItems, setExploreMoreItems] = useState<ExploreItem[]>([]);
//   const [recentResources, setRecentResources] = useState<ResourceItem[]>([]);

// useEffect(() => {
//   const fetchAllPosts = async () => {
//     let allPosts: any[] = [];
//     let page = 1;
//     let totalPages = 1;

//     try {
//       while (page <= totalPages) {
//         const res = await fetch(`https://growthnatives.com/wp-json/wp/v2/posts?per_page=&page=${page}&_embed`);
//         const data = await res.json();

//         if (res.headers.get("X-WP-TotalPages")) {
//           totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
//         }

//         allPosts = [...allPosts, ...data];
//         page++;
//       }

//       const formattedExploreItems: ExploreItem[] = allPosts.slice(0, 4).map((post: any) => ({
//         tag: "Blogs",
//         title: post.title.rendered,
//         readTime: calculateReadTime(post.content.rendered),
//         category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
//         thumbnail:
//           post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//           "https://via.placeholder.com/600x400",
//         slug: post.slug,
//       }));

//       const formattedRecentResources: ResourceItem[] = allPosts.map((post: any) => ({
//         title: post.title.rendered,
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
//       }));

//       setExploreMoreItems(formattedExploreItems);
//       setRecentResources(formattedRecentResources);
//     } catch (err) {
//       console.error("Failed to fetch posts", err);
//     }
//   };

//   fetchAllPosts();
// }, []);


//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <main className="pt-16">
//         {/* Explore More Section */}
//         <ExploreMoreSection heading="Explore more" items={exploreMoreItems} />

//         {/* Recent Blogs - Center heading only for this page */}
//         <div className="[&>h2]:text-center">
//           <RecentResourcesSection
//             heading="Most Recent Blogs"
//             subTabs={[]} // no subtabs
//             resources={recentResources}
//           />
//         </div>

//         {/* Contact CTA */}
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

// // Utilities
// function stripHTML(html: string) {
//   return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
// }

// function calculateReadTime(html: string) {
//   const plainText = html.replace(/<[^>]+>/g, "");
//   const wordCount = plainText.trim().split(/\s+/).length;
//   const time = Math.ceil(wordCount / 200); // ~200 words per min
//   return `${time} min read`;
// }


import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExploreItem } from "@/components/ui/component_9";
import ExploreMoreSection from "@/components/ui/component_9";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";

const ResourcesIndex = () => {
  const [exploreMoreItems, setExploreMoreItems] = useState<ExploreItem[]>([]);
  const [recentResources, setRecentResources] = useState<ResourceItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const perPage = 12;

  const fetchPosts = async (page: number) => {
    try {
      const res = await fetch(`https://growthnatives.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed`);
      const data = await res.json();

      const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
      setHasMore(page < totalPages);

      const formattedResources: ResourceItem[] = data.map((post: any) => ({
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
      }));

      setRecentResources(prev => [...prev, ...formattedResources]);

      // Set explore items only once (from first batch)
      if (page === 1) {
        const formattedExploreItems: ExploreItem[] = data.slice(0, 4).map((post: any) => ({
          tag: "Blogs",
          title: post.title.rendered,
          readTime: calculateReadTime(post.content.rendered),
          category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
          thumbnail:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://via.placeholder.com/600x400",
          slug: post.slug,
        }));
        setExploreMoreItems(formattedExploreItems);
      }
    } catch (err) {
      console.error("Failed to fetch posts", err);
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const handleLoadMore = () => setPage(prev => prev + 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-16">
        <ExploreMoreSection heading="Explore more" items={exploreMoreItems} />

        <div className="[&>h2]:text-center">
          <RecentResourcesSection
            heading="Most Recent Blogs"
            subTabs={[]} // no subtabs
            resources={recentResources}
            onLoadMore={handleLoadMore}
            hasMore={hasMore}
          />
        </div>

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

// Utility Functions
function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
}

function calculateReadTime(html: string) {
  const plainText = html.replace(/<[^>]+>/g, "");
  const wordCount = plainText.trim().split(/\s+/).length;
  const time = Math.ceil(wordCount / 200);
  return `${time} min read`;
}
