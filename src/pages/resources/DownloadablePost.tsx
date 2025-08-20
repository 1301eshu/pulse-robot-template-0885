// import { useParams, Navigate } from 'react-router-dom';
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ArrowLeft, Clock, User, Calendar, Eye, Headphones, } from "lucide-react";
// import { Link } from "react-router-dom";
// import React, { useEffect, useState, useRef } from "react";


// const casePosts = {
//     "optimize-your-user-experience-with-a-complete-audit-checklist": {
//     "id": "unlocking-organic-growth-how-escalon-boosted-visibility-with-integrated-seo-strategies",
//     "title": "Unlocking Organic Growth: How Escalon Boosted Visibility with Integrated SEO Strategies",
//     "subtitle": "How a leading financial services firm leveraged data-driven automation to streamline operations, reducing costs and improving decision-making.",
//     "author": "Vishal Mehta",
//     "date": "Apr 11, 2025",
//     "category": "Enterprise SEO",
//     "readTime": "1 min read",
//     "tags": [],
//     "heroImage": "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/Unlocking-Organic-Growth-Escalon-Boosted.webp",
//     "toc": [
//       "The Customer",
//       "The Challenge",
//       "The Solution",
//       "The Impact",
//       "Conclusion"
//     ],
//     "content": [
//       {
//         "type": "heading",
//         "content": "The Customer"
//       },
//       {
//         "type": "paragraph",
//         "content": "Escalon is a leading financial services firm dedicated to providing essential business solutions. They aim to give businesses back time and peace of mind by handling their back-office needs, allowing them to focus on growth. Despite having a strong content team, Escalon faced challenges in growing their organic traffic. Their marketing efforts were fragmented across multiple agencies and freelancers, leading to subpar results."
//       },
//       {
//         "type": "heading",
//         "content": "The Challenge"
//       },
//       {
//         "type": "list",
//         "items": [
//           "Limited Organic Visibility: Escalon struggled with low search engine rankings for key financial terms, resulting in minimal organic traffic.",
//           "Inefficient Content Strategy: Their existing content was not optimized for search engines, leading to missed opportunities for engagement.",
//           "Technical SEO Issues: The website had technical issues affecting user experience and search engine crawling."
//         ]
//       },
//       {
//         "type": "heading",
//         "content": "The Solution"
//       },
//       {
//         "type": "list",
//         "items": [
//           "Developed a tailored strategy focusing on keyword research, on-page optimization, and high-quality content creation—optimizing headlines, website hygiene processes, content updates, internal linking, meta tags, and adding SEO-friendly elements.",
//           "Implemented site speed improvements and ensured mobile-friendliness to enhance user experience and search engine crawling.",
//           "Executed link building, guest blogging, content promotion, and other off-page SEO tactics to increase domain authority."
//         ]
//       },
//       {
//         "type": "heading",
//         "content": "The Impact"
//       },
//       {
//         "type": "list",
//         "items": [
//           "Improved Keyword Performance: Significant improvements in keyword rankings, enhancing brand visibility and organic traffic.",
//           "Enhanced Content Engagement: High-quality, SEO-optimized content attracted and engaged the target audience more effectively.",
//           "Overall Marketing Success: The overall marketing strategy led to a 10X ROI from marketing efforts, indicating a positive impact on organic channels."
//         ]
//       },
//       {
//         "type": "heading",
//         "content": "Conclusion"
//       },
//       {
//         "type": "paragraph",
//         "content": "This case study highlights the effectiveness of a well-planned Enterprise SEO strategy in boosting organic visibility and driving growth for Escalon. By addressing technical issues, optimizing content, and leveraging strategic SEO tactics, businesses can significantly enhance their online presence and attract more qualified leads."
//       }
//     ]
//   },
// };

// const DownloadablePost = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const post = slug && casePosts[slug];
//   const [activeId, setActiveId] = useState("");

//   useEffect(() => {
//     const headingElements = Array.from(document.querySelectorAll("h2[id]"));

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visibleHeadings = entries
//           .filter((entry) => entry.isIntersecting)
//           .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);

//         if (visibleHeadings.length > 0) {
//           setActiveId(visibleHeadings[0].target.id);
//         }
//       },
//       {
//         root: null,
//         rootMargin: "-100px 0px -70% 0px",
//         threshold: 0.1
//       }
//     );

//     headingElements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   // if (!post) return <Navigate to="/resources/case-studies" replace />;

//   const renderContent = (item: any, index: number) => {
//     switch (item.type) {
//       case "paragraph":
//         return <p key={index} className="text-gray-700 leading-7 mb-6">{item.content}</p>;
//       case "heading":
//         return (
//           <h2
//             key={index}
//             id={item.content.replace(/\s+/g, '-').toLowerCase()}
//             className="text-2xl font-semibold text-gray-900  mb-4"
//           >
//             {item.content}
//           </h2>
//         );
//       case "list":
//         return (
//           <ul key={index} className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
//             {item.items.map((point: string, i: number) => <li key={i}>{point}</li>)}
//           </ul>
//         );
//       case "image":
//         return (
//           <figure key={index} className="my-8">
//             <img src={item.src} alt={item.alt} className="rounded-lg border border-gray-200" />
//             <figcaption className="text-sm text-gray-500 text-center italic mt-2">{item.caption}</figcaption>
//           </figure>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-white">
//       <Header />

//       <main className="pt-12 px-4 sm:px-6 pb-12">
//         <div className="max-w-[1140px] mx-auto">
//           {/* Hero Section: Left & Right Layout */}
//           <section className="pt-24 pb-24 grid md:grid-cols-2 gap-10 items-start mb-5 items-center">
//             <div>
//               {/* Back Link */}
//               <Link
//                 to="/resources/case-studies"
//                 className="text-blue-600 text-sm flex items-center gap-1 mb-6 hover:underline"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 Back to Case Studies
//               </Link>

//               {/* Category Badge */}
//               <Badge className="mb-2 text-xs">{post.category}</Badge>

//               {/* Title */}
//               <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
//                 {post.title}
//               </h1>

//               {/* Subtitle */}
//               <p className="text-lg text-gray-600 mb-6">{post.subtitle}</p>

//               {/* Author Info */}
//               <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
//                 <span className="flex items-center gap-1">
//                   <User className="w-4 h-4" /> {post.author}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Calendar className="w-4 h-4" /> {post.date}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Clock className="w-4 h-4" /> {post.readTime}
//                 </span>
//               </div>
//             </div>

//             {/* Right Side - Hero Image */}
//             <div>
//               <img
//                 src={post.heroImage}
//                 alt={post.title}
//                 className="rounded-lg w-full border border-gray-200"
//               />
//               {/* <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4 text-sm"> */}
//               {/* Left: Views + Listen */}
//               {/* <div className="flex items-center gap-6 text-gray-600">
//     <div className="flex items-center gap-2">
//       <Eye className="w-4 h-4 text-gray-900" />
//       <span className="font-semibold text-gray-900">5151 Views</span>
//     </div>

//     <span className="h-4 w-px bg-gray-300" />

//     <div className="flex items-center gap-2">
//       <Headphones className="w-4 h-4 text-blue-600" />
//       <a href="#" className="text-blue-600 font-medium hover:underline">Listen</a>
//     </div>
//   </div> */}

//               {/* Right: Share */}
//               {/* <div className="flex items-center gap-3">
//     <span className="font-semibold underline text-gray-500">Share this article :</span>
//     <a href="#" target="_blank" rel="noopener noreferrer">
//       <div className="w-8 h-8 rounded-full bg-[#0077B5] flex items-center justify-center">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
//           alt="LinkedIn"
//           className="w-6 h-6"
//         />
//       </div>
//     </a>
//     <a href="#" target="_blank" rel="noopener noreferrer">
//       <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
//           alt="Facebook"
//           className="w-6 h-6"
//         />
//       </div>
//     </a>
//   </div> */}
//               {/* </div> */}


//             </div>
//           </section>

//           {/* Combined Grid: TOC + Content */}
//           <div className="grid lg:grid-cols-[16rem_1fr] gap-[88px]">
//             {/* TOC + Author */}
//             <aside className="hidden lg:block sticky top-24 self-start">
//               <h3 className="text-lg font-semibold mb-4 text-gray-800">Table of Contents</h3>
//               <ul className="space-y-3 border-l pl-4 text-sm text-gray-700 mb-10">
//                 {post.toc.map((item, i) => {
//                   const sectionId = item.replace(/\s+/g, '-').toLowerCase();
//                   return (
//                     <li key={i}>
//                       <a
//                         href={`#${sectionId}`}
//                         className={`block transition-colors duration-200 ${activeId === sectionId ? "text-blue-600 font-medium" : "hover:text-blue-600"
//                           }`}
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </aside>

//             {/* Main Article */}
//             <div className="max-w-[740px]">
//               <article className="prose prose-gray max-w-none">
//                 {post.content.map((block, index) => renderContent(block, index))}
//               </article>

//               <div className="flex flex-wrap gap-2 mt-10">
//                 {post.tags.map(tag => (
//                   <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
//                 ))}
//               </div>

//               <div className="mt-16 p-6 bg-gray-50 rounded-lg border text-center shadow-sm">
//                 <h3 className="text-xl font-bold mb-2 text-gray-900">Ready to Transform Your Marketing Strategy?</h3>
//                 <p className="text-gray-600 mb-4 text-sm">Let our experts help you implement cutting-edge solutions for your business.</p>
//                 <Button className="bg-blue-600 text-white px-6 hover:bg-blue-700">Get Started Today</Button>
//               </div>

//               <div className="mt-12 pt-6 border-t border-gray-200 flex gap-4 items-start">
//                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
//                   <User className="text-blue-600" />
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-900">{post.author}</p>
//                   <p className="text-sm text-gray-600">Marketing automation specialist with 5+ years of experience helping brands grow through data-driven strategy.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default DownloadablePost;


import { useParams, Navigate } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HubSpotForm from '@/components/HubSpotForm';

const casePosts = {
  "optimize-your-user-experience-with-a-complete-audit-checklist": {
    id: "optimize-your-user-experience-with-a-complete-audit-checklist",
    title: "Optimize Your User Experience with a Complete Audit Checklist",
    category: "Design",
    categoryTag: "Checklist",
    tags: ["UX", "Design", "Checklist", "Audit"],
    heroImage: "https://growthnatives.com/wp-content/uploads/2025/03/ux-audit-checklist-cover.webp",
    toc: [
      "Introduction",
      "Why Conduct a UX Audit?",
      "Key Areas to Evaluate",
      "Step-by-Step Audit Checklist",
      "Common Pitfalls to Avoid",
      "Conclusion"
    ],
    content: [
      {
        type: "paragraph",
        content:
          "Creating exceptional user experiences requires more than just good design—it demands careful evaluation, actionable insights, and adherence to best practices. A UX audit bridges the gap between user expectations and your product’s performance, uncovering areas for improvement and opportunities to shine. This checklist provides actionable dos and don’ts, covering everything from navigation and accessibility to visual design and content clarity.Whether you’re aiming to reduce bounce rates, improve conversions, or simply ensure a user-friendly experience, this checklist is the perfect companion to keep your audit on track and your users delighted."
      },
      {
        type: "paragraph",
        content:
          "Whether you’re aiming to reduce bounce rates, improve conversions, or simply ensure a user-friendly experience, this checklist is the perfect companion to keep your audit on track and your users delighted."
      },
      {
        type: "heading",
        content:
          "What You’ll Get in This UX Audit Checklist:"
      },
      {
        type: "list",
        items: [
          "Step-by-step guidance for conducting a complete UX audit",
          "Proven strategies to reduce bounce rates and increase conversions",
          "Dos and don’ts for navigation, accessibility, and visual design",
          "Actionable tips to improve content clarity and user engagement",
          "Practical methods to identify pain points and refine user journeys"
        ]
      },
    ]
  },
  "salesforce-hubspot-integration-checklist-a-step-by-step-guide": {
    "id": "salesforce-hubspot-integration-checklist-a-step-by-step-guide",
    "title": "Salesforce-HubSpot Integration Checklist: A Step-by-Step Guide",
    "category": "Salesforce",
    "categoryTag": "Guide",
    "tags": ["Salesforce", "HubSpot", "CRM", "Integration", "Checklist"],
    "content": [
      {
        "type": "paragraph",
        "content": "Maintaining data consistency across CRM platforms is crucial for business success. When migrating from HubSpot to Salesforce, proper integration and synchronization ensure no valuable information is lost during the transition. This comprehensive checklist guides you through essential steps for seamless CRM integration, from setup to ongoing maintenance, helping you avoid common pitfalls."
      },
      {
        "type": "heading",
        "content": "What You’ll Get in This Integration Checklist:"
      },
      {
        "type": "list",
        "items": [
          "Guidance on initial setup between HubSpot and Salesforce",
          "Data mapping best practices and field synchronization rules",
          "Strategies for testing and validating sync accuracy",
          "Tips for ongoing maintenance and data hygiene",
          "Common pitfalls to avoid during and after integration"
        ]
      }
    ]
  },
  "your-go-to-checklist-for-seamless-zendesk-to-salesforce-migration": {
    "id": "your-go-to-checklist-for-seamless-zendesk-to-salesforce-migration",
    "title": "Your Go-To Checklist for Seamless Zendesk to Salesforce Migration",
    "category": "Salesforce",
    "categoryTag": "Guide",
    "tags": ["Zendesk", "Salesforce", "Migration", "Checklist", "CRM"],
    "content": [
      {
        "type": "paragraph",
        "content": "Migrating from Zendesk to Salesforce is a significant move that demands careful planning and execution. This migration checklist offers expert insights and a step-by-step roadmap to maintain productivity, preserve data integrity, and keep your customer experience seamless during the transition."
      },
      {
        "type": "heading",
        "content": "What's Inside This Migration Checklist:"
      },
      {
        "type": "list",
        "items": [
          "Expert-tested roadmap to save weeks of planning",
          "Steps to prevent costly data loss and ensure continuity",
          "Strategies to maintain team productivity during transition",
          "Tips to avoid common pitfalls impacting customer service",
          "Checklist items to minimize disruption during migration"
        ]
      }
    ]
  },
  "combat-slow-loading-time-woes-with-our-website-speed-optimization-checklist": {
    "id": "combat-slow-loading-time-woes-with-our-website-speed-optimization-checklist",
    "title": "Combat Slow Loading Time Woes with Our Website Speed Optimization Checklist",
    "category": "Web Development",
    "categoryTag": "Checklist",
    "tags": ["Website Speed", "Optimization", "Performance", "Checklist", "Web Development"],
    "content": [
      {
        "type": "paragraph",
        "content": "Your website’s speed directly affects how easily and quickly visitors can navigate, interact, and engage with your site. A slow load time can drive users away, impact your Google rankings, and cost you valuable traffic and conversions."
      },
      {
        "type": "heading",
        "content": "What You'll Gain with This Checklist:"
      },
      {
        "type": "list",
        "items": [
          "Boost conversion rates with lightning-fast page loads",
          "Reduce bounce rates—keep visitors engaged by up to 40%",
          "Improve Google rankings through enhanced speed performance",
          "Enhance landing page effectiveness to get more from your ads",
          "Accelerate checkout flow for better sales outcomes",
          "Deliver a premium user experience across all devices",
          "Transform site speed into a competitive edge"
        ]
      }
    ]
  },
  "your-go-to-wordpress-security-checklist-to-combat-cyber-threats": {
    "id": "your-go-to-wordpress-security-checklist-to-combat-cyber-threats",
    "title": "Your Go-To WordPress Security Checklist to Combat Cyber Threats",
    "category": "Web Development",
    "categoryTag": "Checklist",
    "tags": ["WordPress", "Security", "Checklist", "Web Development", "Cybersecurity"],
    "content": [
      {
        "type": "paragraph",
        "content": "Your WordPress site is a valuable asset, and ensuring its security is critical to protecting your content, user data, and business. However, securing your site doesn’t have to be complicated. Whether you’re a beginner or an experienced site owner, this WordPress Security checklist will guide you step-by-step on how to keep your site safe and secure."
      },
      {
        "type": "heading",
        "content": "What You'll Gain with This Checklist:"
      },
      {
        "type": "list",
        "items": [
          "Clear, actionable steps for protecting your WordPress site",
          "Guidance on authentication, access control, and login security",
          "Recommendations for managing plugins, themes, and updates",
          "Backup, monitoring, and incident response best practices",
          "Tips for advanced security measures and threat prevention",
          "Avoiding common cybersecurity pitfalls that site owners often overlook"
        ]
      }
    ]
  },
  "ga4-implementation-checklist-a-step-by-step-guide": {
    "id": "ga4-implementation-checklist-a-step-by-step-guide",
    "title": "GA4 Implementation Checklist: A Step-by-Step Guide",
    "category": "Web Development",
    "categoryTag": "Checklist",
    "tags": ["GA4", "Google Analytics 4", "Analytics", "Checklist", "Web Development"],
    "content": [
      {
        "type": "paragraph",
        "content": "With Google Analytics 4 (GA4) becoming the new standard for web analytics, getting your implementation right is essential for accurate tracking and actionable insights. Whether you're migrating from Universal Analytics or starting fresh, this detailed checklist ensures your GA4 setup aligns with best practices and powers meaningful data-driven decisions."
      },
      {
        "type": "heading",
        "content": "What You'll Gain with This Checklist:"
      },
      {
        "type": "list",
        "items": [
          "Comprehensive guidance on GA4 setup—whether migrating or starting new",
          "Checklist steps covering property configuration, streaming, and tracking",
          "Best practices for integrating GA4 with other platforms",
          "Validation methods to ensure tracking accuracy",
          "Advanced settings for refined analytics and measurement"
        ]
      }
    ]
  },
  "fortify-your-website-the-only-security-checklist-youll-ever-need": {
    "id": "fortify-your-website-the-only-security-checklist-youll-ever-need",
    "title": "Fortify Your Website: The Only Security Checklist You’ll Ever Need",
    "category": "Web Development",
    "categoryTag": "Checklist",
    "tags": ["Website Security", "Cybersecurity", "Checklist", "Web Development"],
    "content": [
      {
        "type": "paragraph",
        "content": "Nearly 30,000 websites are hacked every day, and cyberattacks have risen by 30% since November 2021. Regardless of its perceived security, every site faces exposure. This comprehensive checklist helps you fortify your website—from foundational safeguards to advanced strategies—to protect against evolving threats."      
      },
      {
        "type": "heading",
        "content": "Why This Checklist Matters:"
      },
      {
        "type": "list",
        "items": [
          "Raise awareness about the alarming rise in website hacks",
          "Provides a structured, actionable guide to securing your site",
          "Covers everything from infrastructure to advanced protective measures",
          "Helps prevent breaches—even for websites you thought were secure",
          "Equips you to stay proactive and resilient in an evolving threat environment"
        ]
      }
    ]
  },
  "your-go-to-pardot-to-hubspot-migration-checklist": {
    "id": "your-go-to-pardot-to-hubspot-migration-checklist",
    "title": "Your Go-To Pardot to HubSpot Migration Checklist",
    "category": "Marketing Automation",
    "categoryTag": "Checklist",
    "tags": ["Pardot", "HubSpot", "Migration", "Checklist", "Marketing Automation"],
    "content": [
      {
        "type": "paragraph",
        "content": "Migrating from Pardot to HubSpot is more than just a platform switch—it’s your opportunity to streamline operations, enhance alignment between sales and marketing, and leverage a modern, user-friendly automation ecosystem."
      },
      {
        "type": "heading",
        "content": "What You’ll Gain with This Checklist:"
      },
      {
        "type": "list",
        "items": [
          "Step-by-step guidance from asset audit to post-migration optimization",
          "Best practices for mapping data, workflows, and scoring logic",
          "Strategies to minimize downtime and disruptions",
          "Tips for user adoption and internal training",
          "Post-migration checks to ensure smooth performance and ROI"
        ]
      }
    ]
  },
  "the-ultimate-marketo-to-hubspot-migration-checklist": {
    "id": "the-ultimate-marketo-to-hubspot-migration-checklist",
    "title": "The Ultimate Marketo to HubSpot Migration Checklist",
    "category": "Marketing Automation",
    "categoryTag": "Checklist",
    "tags": ["Marketo", "HubSpot", "Migration", "Checklist", "Marketing Automation"],
    "content": [
      {
        "type": "paragraph",
        "content": "As businesses grow and evolve, so do their marketing platform needs. While Marketo has long been a trusted solution for robust marketing automation, many organizations consider migrating to HubSpot because of its intuitive interface, comprehensive toolset, and seamless integrations. This checklist simplifies your migration process—guiding you through every step to ensure a smooth, controlled transition."
      },
      {
        "type": "heading",
        "content": "What You’ll Gain with This Migration Checklist:"
      },
      {
        "type": "list",
        "items": [
          "Clear roadmap from pre-migration planning to post-go-live optimization",
          "Best practices for asset cleanup, data mapping, and workflow reconstruction",
          "Strategies for integrating with third-party tools and configuring HubSpot properly",
          "Testing methods to ensure data accuracy and minimize disruptions",
          "Guidance for training teams and ensuring adoption",
          "Tips to continually optimize your setup post-migration"
        ]
      }
    ]
  }
};

const DownloadablePost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug && casePosts[slug];
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
        if (visibleHeadings.length > 0) {
          setActiveId(visibleHeadings[0].target.id);
        }
      },
      { root: null, rootMargin: "-100px 0px -70% 0px", threshold: 0.1 }
    );
    headingElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!post) return <Navigate to="/downloadable-assets" replace />;

  const renderContent = (item: any, index: number) => {
    switch (item.type) {
      case "paragraph":
        return <p key={index} className="text-gray-700 leading-7 mb-6">{item.content}</p>;
      case "heading":
        return (
          <h2
            key={index}
            id={item.content.replace(/\s+/g, '-').toLowerCase()}
            className="text-2xl font-semibold text-gray-900 mb-4"
          >
            {item.content}
          </h2>
        );
      case "list":
        return (
          <ul key={index} className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
            {item.items.map((point: string, i: number) => <li key={i}>{point}</li>)}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      <Header />
      <main className="pt-0 pb-0">
        {/* Banner / Hero Section */}
        <section className="bg-blue-50 py-16">
          <div className="max-w-[1140px] mx-auto pt-20 pb-10 px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Link
                to="/downloadable-assets"
                className="text-blue-600 text-sm flex items-center gap-1 mb-6 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Downloadable Assets
              </Link>
              <Badge className="mb-2 text-xs">{post.categoryTag}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                {post.title}
              </h1>
              <p className="text-gray-700 max-w-lg">
                {post.excerpt}
              </p>
            </div>

            {/* Form Column */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <HubSpotForm
                portalId="7118070"
                formId="936a6094-5911-42b5-af43-59918fd008a0"
                region="na1"
              />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 grid gap-16 py-16">
          <article className="prose prose-gray max-w-none">
            {post.content.map((block, index) => renderContent(block, index))}
          </article>

          {/* CTA inside container */}
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 sm:p-10 text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
              Ready to Improve Your UX?
            </h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base max-w-2xl mx-auto">
              Download the full checklist and start optimizing your digital experiences today.
            </p>
            <Button className="bg-blue-600 text-white px-6 hover:bg-blue-700">
              Download Now
            </Button>
          </div>
        </div>
      </main>



      <Footer />
    </div>
  );
};

export default DownloadablePost;
