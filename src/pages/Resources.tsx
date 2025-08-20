
// // src/pages/ResourcesIndex.tsx
// import { useState, useEffect } from 'react';
// import { ArrowRight, BookOpen, FileText, Image, Download, Search, Clock, User, Calendar } from "lucide-react";
// import { Link } from 'react-router-dom';
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
// import RevOpsHero from "@/components/ui/component_8";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import ExploreMoreSection, { ExploreItem } from "@/components/ui/component_9";
// import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
// import ContactCta from "@/components/ui/component_6";

// interface SubTab {
//   id: string;
//   label: string;
// }

// const ResourcesIndex = () => {
//   const [activeTab, setActiveTab] = useState('blogs');
//   const [activeSubTab, setActiveSubTab] = useState('all');
//   const [tabContents, setTabContents] = useState<any>({});
//   const [exploreMoreItems, setExploreMoreItems] = useState<ExploreItem[]>([]);
//   const [recentResources, setRecentResources] = useState<ResourceItem[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isLoadingResources, setIsLoadingResources] = useState(false);

//   const tabs = [
//     { id: 'blogs', label: 'Blogs' },
//     { id: 'case-studies', label: 'Case Studies' },
//     { id: 'infographics', label: 'Infographics' },
//     { id: 'downloadable-assets', label: 'Downloadable Assets' }
//   ];

//   // Utility functions
//   const stripHTML = (html: string) => {
//     return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
//   };

//   const calculateReadTime = (html: string) => {
//     const plainText = html.replace(/<[^>]+>/g, "");
//     const wordCount = plainText.trim().split(/\s+/).length;
//     const time = Math.ceil(wordCount / 200);
//     return `${time} min read`;
//   };

//   // Fetch resources based on category
//   const fetchResourcesByCategory = async (category: string) => {
//     setIsLoadingResources(true);
//     try {
//       let apiUrl = '';

//       switch (category) {
//         case 'blogs':
//           apiUrl = `${API_BASE_URL}/wp-json/wp/v2/posts?per_page=12&_embed`;
//           break;
//         case 'case-studies':
//           // Try case-studies custom post type first, fallback to posts with category
//           apiUrl = `${API_BASE_URL}/wp-json/wp/v2/case-studies?per_page=12&_embed`;
//           break;
//         case 'infographics':
//           // Try infographics custom post type first, fallback to posts with category
//           apiUrl = `${API_BASE_URL}/wp-json/wp/v2/posts?resource_category=7&per_page=12&page=1&_embed`;
//           break;
//         case 'downloadable-assets':
//           // Try downloadable assets custom post type first, fallback to posts with category
//           apiUrl = `${API_BASE_URL}/wp-json/wp/v2/ebooks?per_page=12&_embed`;
//           break;
//         default:
//           apiUrl = `${API_BASE_URL}/wp-json/wp/v2/posts?per_page=12&_embed`;
//       }

//       const response = await fetch(apiUrl);

//       // If custom post type fails, fallback to regular posts
//       if (!response.ok && category !== 'blogs') {
//         const fallbackUrl = `${API_BASE_URL}/wp-json/wp/v2/posts?per_page=12&_embed`;
//         const fallbackResponse = await fetch(fallbackUrl);
//         const fallbackData = await fallbackResponse.json();

//         // Show first few posts as fallback with category label
//         const formattedResources: ResourceItem[] = fallbackData.slice(0, 6).map((post: any) => ({
//           title: `[${category.replace('-', ' ').toUpperCase()}] ${post.title.rendered}`,
//           subtitle: stripHTML(post.excerpt.rendered),
//           author: post._embedded?.author?.[0]?.name || "Unknown Author",
//           date: new Date(post.date).toLocaleDateString("en-US", {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           }),
//           readTime: calculateReadTime(post.content.rendered),
//           image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/600x400",
//           slug: post.slug,
//           category: category.replace('-', ' '),
//         }));
//         setRecentResources(formattedResources);
//       } else {
//         const data = await response.json();
//         const formattedResources: ResourceItem[] = data.map((post: any) => ({
//           title: post.title.rendered,
//           subtitle: stripHTML(post.excerpt.rendered),
//           author: post._embedded?.author?.[0]?.name || "Unknown Author",
//           date: new Date(post.date).toLocaleDateString("en-US", {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           }),
//           readTime: calculateReadTime(post.content?.rendered || post.excerpt?.rendered || ''),
//           image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/600x400",
//           slug: post.slug,
//           category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
//         }));
//         setRecentResources(formattedResources);
//       }
//     } catch (error) {
//       console.error('Error fetching resources:', error);
//       // Fallback to placeholder content
//       setRecentResources([
//         {
//           title: "Content Loading Error",
//           subtitle: "We're experiencing technical difficulties. Please try again later.",
//           author: "Growth Natives",
//           date: new Date().toLocaleDateString("en-US", {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           }),
//           readTime: "1 min read",
//           image: "https://via.placeholder.com/600x400",
//           slug: "#",
//           category: "Error"
//         }
//       ]);
//     } finally {
//       setIsLoadingResources(false);
//     }
//   };

//   // Fetch latest content for each tab and explore more items
//   useEffect(() => {
//     const fetchContent = async () => {
//       setIsLoading(true);
//       try {
//         const tabContentData: any = {};

//         // Fetch latest blog posts for explore more section (4 posts)
//         const exploreRes = await fetch('${API_BASE_URL}/wp-json/wp/v2/posts?per_page=4&_embed');
//         const exploreData = await exploreRes.json();

//         if (exploreData.length > 0) {
//           // Set explore more items from API data
//           const formattedExploreItems: ExploreItem[] = exploreData.map((post: any) => ({
//             tag: "Blogs",
//             title: post.title.rendered,
//             readTime: calculateReadTime(post.content.rendered),
//             category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
//             thumbnail: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/600x400",
//             slug: post.slug,
//             type: "blog"
//           }));
//           setExploreMoreItems(formattedExploreItems);

//           // Use first post for tab content
//           const post = exploreData[0];
//           tabContentData.blogs = {
//             featuredTag: "LATEST BLOG",
//             title: post.title.rendered,
//             description: stripHTML(post.excerpt.rendered).substring(0, 150) + "...",
//             buttonText: "Read More",
//             buttonLink: `/blogs/${post.slug}`,
//             imageUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/600x400"
//           };
//         }

//         // For case studies, infographics, and downloadable assets, 
//         // we'll use placeholder content with real page links
//         tabContentData['case-studies'] = {
//           featuredTag: "CASE STUDY",
//           title: "69% Improvement in Forecasting Accuracy With Salesforce Billing Implementation",
//           description: "How a leading hardware company enhanced billing efficiency and forecasting accuracy using Salesforce Billing.",
//           buttonText: "View Case Study",
//           buttonLink: "/case-studies/69-improvement-in-forecasting-accuracy-with-salesforce-billing-implementation",
//           imageUrl: "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/image-1%20(1).webp"
//         };

//         // Fetch Infographics (using category ID 7)
//         const infographicRes = await fetch(
//           `${API_BASE_URL}/wp-json/wp/v2/posts?resource_category=7&per_page=1&_embed`
//         );
//         const infographicData = await infographicRes.json();

//         if (infographicData.length > 0) {
//           const info = infographicData[0];
//           tabContentData.infographics = {
//             featuredTag: "INFOGRAPHIC",
//             title: info.title.rendered,
//             description: stripHTML(info.excerpt.rendered).substring(0, 150) + "...",
//             buttonText: "View Infographic",
//             buttonLink: `/blogs/${info.slug}`,
//             imageUrl:
//               info._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//               "https://via.placeholder.com/600x400",
//           };
//         }

//         tabContentData['downloadable-assets'] = {
//           featuredTag: "DOWNLOAD",
//           title: "Complete Marketing Automation Playbook",
//           description: "A comprehensive guide with templates, checklists, and frameworks to optimize your marketing automation strategy.",
//           buttonText: "Download Now",
//           buttonLink: "/downloadable-assets",
//           imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400"
//         };

//         setTabContents(tabContentData);

//       } catch (error) {
//         console.error('Error fetching content:', error);
//         // Fallback content
//         setTabContents({
//           blogs: {
//             featuredTag: "FEATURED",
//             title: "Latest Marketing Insights",
//             description: "Stay updated with the latest trends and strategies in digital marketing.",
//             buttonText: "Read More",
//             buttonLink: "/blogs",
//             imageUrl: "https://via.placeholder.com/600x400"
//           }
//         });
//         // Fallback explore items
//         setExploreMoreItems([
//           {
//             tag: "Blogs",
//             title: "Latest Marketing Insights",
//             readTime: "5 min read",
//             category: "Marketing",
//             thumbnail: "https://via.placeholder.com/600x400",
//             slug: "latest-insights",
//             type: "blogs"
//           }
//         ]);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchContent();
//   }, []);

//   // Fetch resources when active tab changes
//   useEffect(() => {
//     fetchResourcesByCategory(activeTab);
//   }, [activeTab]);

//   const subTabs: SubTab[] = [
//     { id: "blogs", label: "Blogs" },
//     { id: "case-studies", label: "Case Studies" },
//     { id: "infographics", label: "Infographics" },
//     { id: "downloadable-assets", label: "Downloadable Assets" }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <SmartBreadcrumb />

//       {/* 🚀 New Hero Section */}
//       {!isLoading && Object.keys(tabContents).length > 0 ? (
//         <RevOpsHero
//           sectionHeading="Resources"
//           sectionSubheading="Explore insights across formats"
//           activeTab={activeTab}
//           onTabChange={setActiveTab}
//           tabs={tabs}
//           tabContents={tabContents}
//         />
//       ) : (
//         <div className="bg-[#f7f9fc] pb-20 py-0">
//           <div className="section-wrapper py-[48px]">
//             <div className="text-left mb-6">
//               <h2 className="text-4xl md:text-5xl font-semibold text-[#101828] mb-2">
//                 Resources
//               </h2>
//               <p className="text-lg text-[#475467]">Explore insights across formats</p>
//             </div>
//             <div className="flex items-center justify-center py-20">
//               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1570EF]"></div>
//             </div>
//           </div>
//         </div>
//       )}

//       <ExploreMoreSection heading="Explore more" items={exploreMoreItems} />

//       {/* Custom Recent Resources Section with Tab Functionality */}
//       <section className="py-16 bg-white">
//         <div className="section-wrapper">
//           <h2 className="text-3xl md:text-4xl font-semibold text-[#101828] mb-8">
//             Most Recent Resources
//           </h2>

//           {/* Custom Sub-Tabs */}
//           <div className="flex flex-wrap gap-2 mb-8">
//             {subTabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab.id
//                   ? 'bg-primary text-white'
//                   : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                   }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           {/* Resources Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {recentResources.map((resource, index) => (
//               <Link
//                 key={index}
//                 to={
//                   resource.slug
//                     ? activeTab === "blogs" || activeTab === "infographics"
//                       ? `/blogs/${(resource.category || "general")
//                         .replace(/\s*\([^)]*\)/g, "")
//                         .toLowerCase()
//                         .replace(/\s+/g, "-")
//                       }/${resource.slug}`
//                       : activeTab === "case-studies"
//                         ? `/case-studies/${resource.slug}`
//                           : activeTab === "downloadable-assets"
//                             ? `/downloadable-assets/${resource.slug}`
//                             : "#"
//                     : "#"
//                 }
//                 className="block"
//               >

//                 <Card className="bg-white overflow-hidden transition-all group cursor-pointer hover:shadow-xl border border-gray-100">
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={resource.image}
//                       alt={resource.title}
//                       className="w-full h-full object-contain bg-white transform scale-110 transition-transform duration-300 group-hover:scale-125"
//                     />
//                     <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//                       <span className="text-white font-semibold text-sm flex items-center gap-1">
//                         Read more <span className="text-lg">›</span>
//                       </span>
//                     </div>
//                   </div>

//                   <CardContent className="bg-white p-6">
//                     <div className="flex flex-wrap items-center text-xs text-gray-500 mb-4 gap-x-4 gap-y-2">
//                       <span className="flex items-center gap-1">
//                         <User className="w-4 h-4" /> {resource.author}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Calendar className="w-4 h-4" /> {resource.date}
//                       </span>
//                     </div>

//                     <h3 className="font-bold text-gray-900 mb-8 group-hover:text-blue-600 transition-colors line-clamp-2 text-[1.05rem] leading-tight">
//                       {resource.title}
//                     </h3>

//                     <div className="text-sm text-gray-500 flex items-center gap-1 mt-2">
//                       <Clock className="w-4 h-4" /> {resource.readTime}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* Call to Action */}
//       <ContactCta
//         heading=" Let's Make Your Salesforce Smarter (And Less Annoying) "
//         subtext="Let's plug in the tech, the talent, and the timing."
//         buttonLabel="Talk to an Expert"
//         buttonLink="/contact"
//       />

//       <Footer />
//     </div>
//   );
// };

// export default ResourcesIndex;

// src/pages/ResourcesIndex.tsx
import { useState, useEffect } from "react";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Image,
  Download,
//  Search,
  Clock,
  User,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import RevOpsHero from "@/components/ui/component_8";
import { Card, CardContent } from "@/components/ui/card";
import ExploreMoreSection, { ExploreItem } from "@/components/ui/component_9";
import { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import { API_BASE_URL } from '../../apiconfig';
interface SubTab {
  id: string;
  label: string;
}

const decodeHTML = (html: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const stripHTML = (html: string) =>
  html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();

const calculateReadTime = (html: string) => {
  const plainText = html.replace(/<[^>]+>/g, "");
  const wordCount = plainText.trim().split(/\s+/).length;
  return `${Math.ceil(wordCount / 200)} min read`;
};

const formatCategorySlug = (category: string) =>
  category.replace(/\s*\([^)]*\)/g, "").toLowerCase().replace(/\s+/g, "-");

const TABS: SubTab[] = [
  { id: "blogs", label: "Blogs" },
  { id: "case-studies", label: "Case Studies" },
  { id: "infographics", label: "Infographics" },
  { id: "downloadable-assets", label: "Downloadable Assets" },
];

const ResourcesIndex = () => {
  // Separate states for hero and resources tabs
  const [heroActiveTab, setHeroActiveTab] = useState<string>("blogs");
  const [resourcesActiveTab, setResourcesActiveTab] = useState<string>("blogs");

  const [tabContents, setTabContents] = useState<Record<string, any>>({});
  const [exploreMoreItems, setExploreMoreItems] = useState<ExploreItem[]>([]);
  const [recentResources, setRecentResources] = useState<ResourceItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingResources, setIsLoadingResources] = useState<boolean>(false);

  // Reusable fetch function
  const fetchData = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
    return res.json();
  };

  const fetchHeroContent = async () => {
    setIsLoading(true);
    const content: Record<string, any> = {};

    try {
      // Blogs Hero + Explore more
      const blogsData = await fetchData(
        `${API_BASE_URL}/wp-json/wp/v2/posts?per_page=4&_embed`
      );

      if (blogsData.length > 0) {
        const formattedExplore: ExploreItem[] = blogsData.map((post: any) => {
          const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "general";
          return {
            tag: "Blogs",
            title: decodeHTML(post.title.rendered),
            readTime: calculateReadTime(post.content.rendered),
            category,
            thumbnail:
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "https://via.placeholder.com/600x400",
            slug: post.slug,
            type: "blog",
          };
        });
        setExploreMoreItems(formattedExplore);

        const firstPost = blogsData[0];
        const firstCategory =
          firstPost._embedded?.["wp:term"]?.[0]?.[0]?.name || "general";

        content.blogs = {
          featuredTag: "LATEST BLOG",
          title: decodeHTML(firstPost.title.rendered),
          description:
            stripHTML(firstPost.excerpt.rendered).substring(0, 150) + "...",
          buttonText: "Read More",
          buttonLink: `/blogs/${formatCategorySlug(firstCategory)}/${firstPost.slug}`,
          imageUrl:
            firstPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://via.placeholder.com/600x400",
        };
      }

      // Case Studies Hero
      const csData = await fetchData(
        `${API_BASE_URL}/wp-json/wp/v2/case-studies?per_page=1&_embed`
      );
      if (csData.length > 0) {
        const cs = csData[0];
        content["case-studies"] = {
          featuredTag: "CASE STUDY",
          title: decodeHTML(cs.title.rendered),
          description: stripHTML(cs.excerpt.rendered).substring(0, 150) + "...",
          buttonText: "View Case Study",
          buttonLink: `/case-studies/${cs.slug}`,
          imageUrl:
            cs._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://via.placeholder.com/600x400",
        };
      }

      // Infographics Hero
      const infographicsData = await fetchData(
        `${API_BASE_URL}/wp-json/wp/v2/posts?resource_category=7&per_page=1&_embed`
      );
      if (infographicsData.length > 0) {
        const info = infographicsData[0];
        content.infographics = {
          featuredTag: "INFOGRAPHIC",
          title: decodeHTML(info.title.rendered),
          description: stripHTML(info.excerpt.rendered).substring(0, 150) + "...",
          buttonText: "View Infographic",
          buttonLink: `/blogs/${formatCategorySlug(
            info._embedded?.["wp:term"]?.[0]?.[0]?.name || "general"
          )}/${info.slug}`,
          imageUrl:
            info._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://via.placeholder.com/600x400",
        };
      }

      // Downloadable Assets Hero
      const assetsData = await fetchData(
        `${API_BASE_URL}/wp-json/wp/v2/downloadable-assets?per_page=1&_embed`
      );
      if (assetsData.length > 0) {
        const asset = assetsData[0];
        content["downloadable-assets"] = {
          featuredTag: "DOWNLOAD",
          title: decodeHTML(asset.title.rendered),
          description: stripHTML(asset.excerpt.rendered).substring(0, 150) + "...",
          buttonText: "Download Now",
          buttonLink: `/downloadable-assets/${formatCategorySlug(
            asset._embedded?.["wp:term"]?.[0]?.[0]?.name || "general"
          )}/${asset.slug}`,
          imageUrl:
            asset._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://via.placeholder.com/600x400",
        };
      }

      setTabContents(content);
    } catch (err) {
      console.error("Error fetching hero content:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchResourcesByCategory = async (category: string) => {
    setIsLoadingResources(true);
    try {
      const urls: Record<string, string> = {
        blogs: `${API_BASE_URL}/wp-json/wp/v2/posts?per_page=12&_embed`,
        "case-studies":
          `${API_BASE_URL}/wp-json/wp/v2/case-studies?per_page=12&_embed`,
        infographics:
          `${API_BASE_URL}/wp-json/wp/v2/posts?resource_category=7&per_page=12&_embed`,
        "downloadable-assets":
          `${API_BASE_URL}/wp-json/wp/v2/downloadable-assets?per_page=12&_embed`,
      };

      const data = await fetchData(urls[category] || urls.blogs);

      const formattedResources: ResourceItem[] = data.map((post: any) => {
        const cat = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "general";
        return {
          title: decodeHTML(post.title.rendered),
          subtitle: stripHTML(post.excerpt.rendered),
          author: post._embedded?.author?.[0]?.name || "Unknown Author",
          date: new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          readTime: calculateReadTime(post.content?.rendered || post.excerpt?.rendered),
          image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/600x400",
          slug: post.slug,
          category: cat,
        };
      });

      setRecentResources(formattedResources);
    } catch (err) {
      console.error("Error fetching resources:", err);
    } finally {
      setIsLoadingResources(false);
    }
  };

  useEffect(() => {
    fetchHeroContent();
  }, []);

  useEffect(() => {
    fetchResourcesByCategory(resourcesActiveTab);
  }, [resourcesActiveTab]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SmartBreadcrumb />

      {/* Hero Section */}
      {!isLoading && Object.keys(tabContents).length > 0 ? (
        <RevOpsHero
          sectionHeading="Resources"
          sectionSubheading="Explore insights across formats"
          activeTab={heroActiveTab}
          onTabChange={setHeroActiveTab}
          tabs={TABS}
          tabContents={tabContents}
        />
      ) : (
        <div className="bg-[#f7f9fc] pb-20 py-0">
          <div className="section-wrapper py-[48px] text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1570EF] mx-auto"></div>
          </div>
        </div>
      )}

      <ExploreMoreSection heading="Explore more" items={exploreMoreItems} />

      {/* Recent Resources */}
      <section className="py-16 bg-white">
        <div className="section-wrapper">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#101828] mb-8">
            Most Recent Resources
          </h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setResourcesActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  resourcesActiveTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentResources.map((resource, index) => (
              <Link
                key={index}
                to={
                  resourcesActiveTab === "blogs" || resourcesActiveTab === "infographics"
                    ? `/blogs/${formatCategorySlug(resource.category)}/${resource.slug}`
                    : resourcesActiveTab === "case-studies"
                    ? `/case-studies/${resource.slug}`
                    : resourcesActiveTab === "downloadable-assets"
                    ? `/downloadable-assets/${formatCategorySlug(resource.category)}/${resource.slug}`
                    : "#"
                }
                className="block"
              >
                <Card className="bg-white overflow-hidden transition-all group cursor-pointer hover:shadow-xl border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-contain bg-white transform scale-110 transition-transform duration-300 group-hover:scale-125"
                    />
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

                    <h3 className="font-bold text-gray-900 mb-8 group-hover:text-blue-600 transition-colors line-clamp-2 text-[1.05rem] leading-tight">
                      {decodeHTML(resource.title)}
                    </h3>

                    <div className="text-sm text-gray-500 flex items-center gap-1 mt-2">
                      <Clock className="w-4 h-4" /> {resource.readTime}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        heading="Let's Make Your Salesforce Smarter (And Less Annoying)"
        subtext="Let's plug in the tech, the talent, and the timing."
        buttonLabel="Talk to an Expert"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default ResourcesIndex;
