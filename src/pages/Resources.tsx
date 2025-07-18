// src/pages/ResourcesIndex.tsx
import { useState } from 'react';
import { ArrowRight, BookOpen, FileText, Image, Download, Search, Clock, User, Calendar } from "lucide-react";
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  const [activeTab, setActiveTab] = useState('articles');
  const [activeSubTab, setActiveSubTab] = useState('all');

  const tabs = [
    { id: 'articles', label: 'Articles' },
    { id: 'podcasts', label: 'Podcasts' },
    { id: 'guides', label: 'Guides' },
    { id: 'webinars', label: 'Webinars' }
  ];

  const tabContents = {
  articles: {
    featuredTag: "FEATURED",
    title: "How to Migrate from AppMeasurement.js to Web SDK",
    description: "A step-by-step guide to consolidating analytics tracking and improving data accuracy across your digital properties.",
    buttonText: "Read More",
    buttonLink: "#",
    imageUrl: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751356419/Grouped_Elements_tiadn3.png"
  },
  podcasts: {
    featuredTag: "NEW EPISODE",
    title: "The Future of RevOps: Real Talk with Real Leaders",
    description: "Join us as we uncover how top companies are scaling revenue ops across tools and teams.",
    buttonText: "Listen Now",
    buttonLink: "#",
    imageUrl: "/lovable-uploads/podcast-hero.png"
  },
  guides: {
    featuredTag: "INSIGHT",
    title: "10 RevOps Tactics That Actually Work",
    description: "This downloadable guide walks you through proven strategies from top revenue teams.",
    buttonText: "Download Guide",
    buttonLink: "#",
    imageUrl: "/lovable-uploads/guide-hero.png"
  },
  webinars: {
    featuredTag: "UPCOMING",
    title: "From Data Chaos to Clarity: Live with Segment & Mixpanel",
    description: "Save your seat for this exclusive session on building analytics that drive action.",
    buttonText: "Register",
    buttonLink: "#",
    imageUrl: "/lovable-uploads/webinar-hero.png"
  }
};

  const subTabs: SubTab[] = [
  { id: "all", label: "All" },
  { id: "infographics", label: "Infographics" },
  { id: "case-studies", label: "Case Studies" },
  { id: "downloadable", label: "Downloadable Assets" }
];


const exploreMoreItems: ExploreItem[] = [
  {
    tag: "Guides",
    title: "HubSpot Just Changed the Game: Meet the Deep Research Connector with ChatGPT",
    readTime: "5 min read",
    category: "Marketing Automation",
    thumbnail: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
  },
  {
    tag: "Case Studies",
    title: "Google Ads Services Agency Drives 300% ROI Increase",
    readTime: "9 min",
    category: "Performance Marketing",
  },
  {
    tag: "Blogs",
    title: "The Complete Guide to Salesforce Marketing Cloud Implementation",
    readTime: "7 min",
    category: "Salesforce",
  },
  {
    tag: "Infographic",
    title: "Revenue Lifecycle Visualized: New Benchmarks",
    readTime: "4 min",
    category: "RevOps"
  },
];

const recentResources: ResourceItem[] = [
  {
    title: "Agentic AI: The Silent Force Reshaping Marketing Ops",
    subtitle:
      "“Wait, so this thing just... does it? Like, by itself?” Yes. And no, it’s not magic. It’s called Agentic AI and it’s the next evolution of marketing automation you...",
    author: "Sneha Kumari",
    date: "July 7, 2025",
    readTime: "6 min read",
    image: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg",
  },
  {
    title: "The AI Shortlist: Top Use Cases for Marketing Ops That You Must Know",
    subtitle:
      "Back in the day, Marketing Ops used to mean fighting timelines and making friends with a dozen dashboards among other things (most of which...",
    author: "Mehakpreet Kaur",
    date: "July 4, 2025",
    readTime: "7 min read",
    
    image: "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6795?w=600&h=400",
  },
  {
    title: "Marketo & AI: Best Practices for Smarter Segmentation and Nurturing",
    subtitle:
      "You’ve got Marketo. You’ve got data. You’ve got 47 tabs open. Now what? If you’re still building audiences with spreadsheet acrobatics and sending...",
    author: "Mehakpreet Kaur",
    date: "July 4, 2025",
    readTime: "6 min read",
    
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
  },
  {
    title: "The Developer’s Evolution in the Age of AI: What’s Next?",
    subtitle:
      "As AI cements its role in software development, the question is no longer if developers should adapt but how far they’re willing to evolve. April 2025 marked a...",
    author: "Vishal Mehta",
    date: "June 16, 2025",
    readTime: "4 min read",
    
    image: "https://images.unsplash.com/photo-1629904853893-dbb7c4183031?w=600&h=400",
  },
  {
    title: "The Ultimate AI Readiness Checklist for Your Marketing Ops Stack",
    subtitle:
      "AI isn’t the future—it’s already here, quietly revolutionizing marketing operations stacks everywhere. But here’s the real question: Is your...",
    author: "Akanksha Dass",
    date: "June 13, 2025",
    readTime: "3 min read",
    
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600&h=400",
  },
  {
    title: "Understanding Adobe Experience Platform Web SDK: A Comprehensive Introduction",
    subtitle:
      "The Adobe Experience Platform (AEP) Web SDK is transforming how businesses collect, manage, and leverage data across the Adobe Experience Cloud,...",
    author: "Shivam Joshi",
    date: "June 10, 2025",
    readTime: "9 min read",
    
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5aa1c63?w=600&h=400",
  },
];


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* 🚀 New Hero Section */}
  <RevOpsHero
  sectionHeading="Resources"
  sectionSubheading="Explore insights across formats"
  activeTab={activeTab}
  onTabChange={setActiveTab}
  tabs={tabs}
  tabContents={tabContents}
/>

      <ExploreMoreSection heading="Explore more" items={exploreMoreItems} />

      <RecentResourcesSection heading="Most Recent Resources" subTabs={subTabs} resources={recentResources} />
   
      {/* Call to Action */}
        <ContactCta
          heading=" Let’s Make Your Salesforce Smarter (And Less Annoying) "
          subtext="Let’s plug in the tech, the talent, and the timing."
          buttonLabel="Talk to an Expert"
          buttonLink="/contact"
        />

      
      <Footer />
    </div>
  );
};

export default ResourcesIndex;