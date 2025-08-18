
// src/pages/ResourcesIndex.tsx
import { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, FileText, Image, Download, Search, Clock, User, Calendar } from "lucide-react";
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import RevOpsHero from "@/components/ui/component_8";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExploreMoreSection, { ExploreItem } from "@/components/ui/component_9";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";

interface SubTab {
  id: string;
  label: string;
}

const ResourcesIndex = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const [activeSubTab, setActiveSubTab] = useState('all');
  const [tabContents, setTabContents] = useState<any>({});
  const [exploreMoreItems, setExploreMoreItems] = useState<ExploreItem[]>([]);
  const [recentResources, setRecentResources] = useState<ResourceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingResources, setIsLoadingResources] = useState(false);

  const tabs = [
    { id: 'blogs', label: 'Blogs' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'infographics', label: 'Infographics' },
    { id: 'downloadable-assets', label: 'Downloadable Assets' }
  ];

  // Utility functions
  const stripHTML = (html: string) => {
    return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
  };

  const calculateReadTime = (html: string) => {
    const plainText = html.replace(/<[^>]+>/g, "");
    const wordCount = plainText.trim().split(/\s+/).length;
    const time = Math.ceil(wordCount / 200);
    return `${time} min read`;
  };

  // Fetch resources based on category
  const fetchResourcesByCategory = async (category: string) => {
    setIsLoadingResources(true);
    try {
      let apiUrl = '';

      switch (category) {
        case 'blogs':
          apiUrl = 'https://growthnatives.com/wp-json/wp/v2/posts?per_page=12&_embed';
          break;
        case 'case-studies':
          // Try case-studies custom post type first, fallback to posts with category
          apiUrl = 'https://growthnatives.com/wp-json/wp/v2/case-studies?per_page=12&_embed';
          break;
        case 'infographics':
          // Try infographics custom post type first, fallback to posts with category
          apiUrl = 'https://growthnatives.com/wp-json/wp/v2/posts?per_page=12&categories=infographics&_embed';
          break;
        case 'downloadable-assets':
          // Try downloadable assets custom post type first, fallback to posts with category
          apiUrl = 'https://growthnatives.com/wp-json/wp/v2/ebooks?per_page=12&_embed';
          break;
        default:
          apiUrl = 'https://growthnatives.com/wp-json/wp/v2/posts?per_page=12&_embed';
      }

      const response = await fetch(apiUrl);
      
      // If custom post type fails, fallback to regular posts
      if (!response.ok && category !== 'blogs') {
        const fallbackUrl = 'https://growthnatives.com/wp-json/wp/v2/posts?per_page=12&_embed';
        const fallbackResponse = await fetch(fallbackUrl);
        const fallbackData = await fallbackResponse.json();
        
        // Show first few posts as fallback with category label
        const formattedResources: ResourceItem[] = fallbackData.slice(0, 6).map((post: any) => ({
          title: `[${category.replace('-', ' ').toUpperCase()}] ${post.title.rendered}`,
          subtitle: stripHTML(post.excerpt.rendered),
          author: post._embedded?.author?.[0]?.name || "Unknown Author",
          date: new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          readTime: calculateReadTime(post.content.rendered),
          image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/600x400",
          slug: post.slug,
          category: category.replace('-', ' '),
        }));
        setRecentResources(formattedResources);
      } else {
        const data = await response.json();
        const formattedResources: ResourceItem[] = data.map((post: any) => ({
          title: post.title.rendered,
          subtitle: stripHTML(post.excerpt.rendered),
          author: post._embedded?.author?.[0]?.name || "Unknown Author",
          date: new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          readTime: calculateReadTime(post.content?.rendered || post.excerpt?.rendered || ''),
          image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/600x400",
          slug: post.slug,
          category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
        }));
        setRecentResources(formattedResources);
      }
    } catch (error) {
      console.error('Error fetching resources:', error);
      // Fallback to placeholder content
      setRecentResources([
        {
          title: "Content Loading Error",
          subtitle: "We're experiencing technical difficulties. Please try again later.",
          author: "Growth Natives",
          date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          readTime: "1 min read",
          image: "https://via.placeholder.com/600x400",
          slug: "#",
          category: "Error"
        }
      ]);
    } finally {
      setIsLoadingResources(false);
    }
  };

  // Fetch latest content for each tab and explore more items
  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      try {
        const tabContentData: any = {};

        // Fetch latest blog posts for explore more section (4 posts)
        const exploreRes = await fetch('https://growthnatives.com/wp-json/wp/v2/posts?per_page=4&_embed');
        const exploreData = await exploreRes.json();
        
        if (exploreData.length > 0) {
          // Set explore more items from API data
          const formattedExploreItems: ExploreItem[] = exploreData.map((post: any) => ({
            tag: "Blogs",
            title: post.title.rendered,
            readTime: calculateReadTime(post.content.rendered),
            category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
            thumbnail: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/600x400",
            slug: post.slug,
            type: "blog"
          }));
          setExploreMoreItems(formattedExploreItems);

          // Use first post for tab content
          const post = exploreData[0];
          tabContentData.blogs = {
            featuredTag: "LATEST BLOG",
            title: post.title.rendered,
            description: stripHTML(post.excerpt.rendered).substring(0, 150) + "...",
            buttonText: "Read More",
            buttonLink: `/resources/blog/${post.slug}`,
            imageUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/600x400"
          };
        }

        // For case studies, infographics, and downloadable assets, 
        // we'll use placeholder content with real page links
        tabContentData['case-studies'] = {
          featuredTag: "CASE STUDY",
          title: "Google Ads Services Agency Drives 300% ROI Increase",
          description: "Discover how our strategic approach to Google Ads management helped a B2B SaaS company achieve remarkable growth and ROI.",
          buttonText: "View Case Study",
          buttonLink: "/resources/case-studies",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400"
        };

        tabContentData.infographics = {
          featuredTag: "INFOGRAPHIC",
          title: "Revenue Lifecycle Visualized: New Benchmarks",
          description: "A comprehensive visual guide to understanding revenue operations benchmarks and best practices for modern businesses.",
          buttonText: "View Infographic",
          buttonLink: "/resources/infographics",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400"
        };

        tabContentData['downloadable-assets'] = {
          featuredTag: "DOWNLOAD",
          title: "Complete Marketing Automation Playbook",
          description: "A comprehensive guide with templates, checklists, and frameworks to optimize your marketing automation strategy.",
          buttonText: "Download Now",
          buttonLink: "/resources/downloadable-assets",
          imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400"
        };

        setTabContents(tabContentData);
        
      } catch (error) {
        console.error('Error fetching content:', error);
        // Fallback content
        setTabContents({
          blogs: {
            featuredTag: "FEATURED",
            title: "Latest Marketing Insights",
            description: "Stay updated with the latest trends and strategies in digital marketing.",
            buttonText: "Read More",
            buttonLink: "/resources/blog",
            imageUrl: "https://via.placeholder.com/600x400"
          }
        });
        // Fallback explore items
        setExploreMoreItems([
          {
            tag: "Blogs",
            title: "Latest Marketing Insights",
            readTime: "5 min read",
            category: "Marketing",
            thumbnail: "https://via.placeholder.com/600x400",
            slug: "latest-insights",
            type: "blogs"
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  // Fetch resources when active tab changes
  useEffect(() => {
    fetchResourcesByCategory(activeTab);
  }, [activeTab]);

  const subTabs: SubTab[] = [
    { id: "blogs", label: "Blogs" },
    { id: "case-studies", label: "Case Studies" },
    { id: "infographics", label: "Infographics" },
    { id: "downloadable-assets", label: "Downloadable Assets" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SmartBreadcrumb />

      {/* 🚀 New Hero Section */}
      {!isLoading && Object.keys(tabContents).length > 0 ? (
        <RevOpsHero
          sectionHeading="Resources"
          sectionSubheading="Explore insights across formats"
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabs={tabs}
          tabContents={tabContents}
        />
      ) : (
        <div className="bg-[#f7f9fc] pb-20 py-0">
          <div className="section-wrapper py-[48px]">
            <div className="text-left mb-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#101828] mb-2">
                Resources
              </h2>
              <p className="text-lg text-[#475467]">Explore insights across formats</p>
            </div>
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1570EF]"></div>
            </div>
          </div>
        </div>
      )}

      <ExploreMoreSection heading="Explore more" items={exploreMoreItems} />

      {/* Custom Recent Resources Section with Tab Functionality */}
      <section className="py-16 bg-white">
        <div className="section-wrapper">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#101828] mb-8">
            Most Recent Resources
          </h2>
          
          {/* Custom Sub-Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {subTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          {isLoadingResources ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1570EF]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentResources.map((resource, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#101828] mb-2 line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-[#475467] text-sm mb-4 line-clamp-3">
                      {resource.subtitle}
                    </p>
                    <div className="flex items-center justify-between text-xs text-[#667085]">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        <span>{resource.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{resource.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{resource.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    
      {/* Call to Action */}
      <ContactCta
        heading=" Let's Make Your Salesforce Smarter (And Less Annoying) "
        subtext="Let's plug in the tech, the talent, and the timing."
        buttonLabel="Talk to an Expert"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default ResourcesIndex;
