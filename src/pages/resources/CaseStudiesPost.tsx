import { useParams, Navigate } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar, Eye, Headphones, } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { API_BASE_URL } from '../../../apiconfig';

// Case study data
const casePosts = {
  "unlocking-organic-growth-how-escalon-boosted-visibility-with-integrated-seo-strategies": {
    "id": "unlocking-organic-growth-how-escalon-boosted-visibility-with-integrated-seo-strategies",
    "title": "Unlocking Organic Growth: How Escalon Boosted Visibility with Integrated SEO Strategies",
    "subtitle": "How a leading financial services firm leveraged data-driven automation to streamline operations, reducing costs and improving decision-making.",
    "author": "Vishal Mehta",
    "date": "Apr 11, 2025",
    "category": "Enterprise SEO",
    "readTime": "1 min read",
    "tags": [],
    "heroImage": "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/Unlocking-Organic-Growth-Escalon-Boosted.webp",
    "toc": [
      "The Customer",
      "The Challenge",
      "The Solution",
      "The Impact",
      "Conclusion"
    ],
    "content": [
      {
        "type": "heading",
        "content": "The Customer"
      },
      {
        "type": "paragraph",
        "content": "Escalon is a leading financial services firm dedicated to providing essential business solutions. They aim to give businesses back time and peace of mind by handling their back-office needs, allowing them to focus on growth. Despite having a strong content team, Escalon faced challenges in growing their organic traffic. Their marketing efforts were fragmented across multiple agencies and freelancers, leading to subpar results."
      },
      {
        "type": "heading",
        "content": "The Challenge"
      },
      {
        "type": "list",
        "items": [
          "Limited Organic Visibility: Escalon struggled with low search engine rankings for key financial terms, resulting in minimal organic traffic.",
          "Inefficient Content Strategy: Their existing content was not optimized for search engines, leading to missed opportunities for engagement.",
          "Technical SEO Issues: The website had technical issues affecting user experience and search engine crawling."
        ]
      },
      {
        "type": "heading",
        "content": "The Solution"
      },
      {
        "type": "list",
        "items": [
          "Developed a tailored strategy focusing on keyword research, on-page optimization, and high-quality content creation-optimizing headlines, website hygiene processes, content updates, internal linking, meta tags, and adding SEO-friendly elements.",
          "Implemented site speed improvements and ensured mobile-friendliness to enhance user experience and search engine crawling.",
          "Executed link building, guest blogging, content promotion, and other off-page SEO tactics to increase domain authority."
        ]
      },
      {
        "type": "heading",
        "content": "The Impact"
      },
      {
        "type": "list",
        "items": [
          "Improved Keyword Performance: Significant improvements in keyword rankings, enhancing brand visibility and organic traffic.",
          "Enhanced Content Engagement: High-quality, SEO-optimized content attracted and engaged the target audience more effectively.",
          "Overall Marketing Success: The overall marketing strategy led to a 10X ROI from marketing efforts, indicating a positive impact on organic channels."
        ]
      },
      {
        "type": "heading",
        "content": "Conclusion"
      },
      {
        "type": "paragraph",
        "content": "This case study highlights the effectiveness of a well-planned Enterprise SEO strategy in boosting organic visibility and driving growth for Escalon. By addressing technical issues, optimizing content, and leveraging strategic SEO tactics, businesses can significantly enhance their online presence and attract more qualified leads."
      }
    ]
  },
  "leveraging-ai-engine-optimization-to-counter-shifting-search-trends-and-drive-revenue-growth": {
    "id": "leveraging-ai-engine-optimization-to-counter-shifting-search-trends-and-drive-revenue-growth",
    "title": "Leveraging AI Engine Optimization (AEO) to Counter-Shifting Search Trends and Drive Revenue Growth",
    "subtitle": "How a top digital marketing agency adapted to declining organic traffic by implementing AI Engine Optimization, increasing visibility and engagement through advanced search strategies.",
    "author": "Vishal Mehta",
    "date": "Apr 11, 2025",
    "category": "AEO Strategy",
    "readTime": "1 min read",
    "tags": [],
    "heroImage": "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/leveraging-engine-optimization-counter.webp",  // No explicit image URL; placeholder
    "toc": [
      "Challenge",
      "Solution",
      "Implementation Strategy",
      "Results",
      "Key Analytics Insights",
      "Conclusion",
      "Key Takeaways"
    ],
    "content": [
      {
        "type": "heading",
        "content": "Challenge"
      },
      {
        "type": "paragraph",
        "content": "User behavior has shifted significantly with the rise of Large Language Models (LLMs) like Perplexity, ChatGPT, and others. Instead of relying solely on traditional search engines like Google, people are increasingly seeking answers directly from LLMs. This trend has led to a noticeable decline in organic traffic for businesses that depend heavily on search engine optimization (SEO) for visibility and lead generation. Growth Natives faced this challenge as they observed diminishing organic traffic and engagement rates on Google Search, threatening long-term sustainability."
      },
      {
        "type": "heading",
        "content": "Solution"
      },
      {
        "type": "list",
        "items": [
          "Growth Natives implemented a first-mover strategy by embracing AI Engine Optimization (AEO)-a forward-thinking strategy integrating entity-based SEO, NLP, and holistic SEO techniques.",
          "Citation Optimization in LLMs: Created authoritative, high-quality content aligned with knowledge graphs and training data of LLMs; leveraged data visualization techniques to simplify complex information for AI systems.",
          "Redirecting Commercial Intent Traffic: Optimized pages for high-conversion keywords targeting users with purchase intent; used advanced analytics tools like DiGGrowth to track referral traffic, engagement, and conversion metrics across platforms like Perplexity.ai and Gemini.google.com."
        ]
      },
      {
        "type": "heading",
        "content": "Implementation Strategy"
      },
      {
        "type": "list",
        "items": [
          "Content Development: Created entity-based content establishing topical authority across domains like digital marketing, healthcare analytics, Salesforce solutions, and data visualization.",
          "NLP Integration: Incorporated natural language processing principles into content creation to align with the conversational nature of LLMs.",
          "Analytics Utilization: Leveraged DiGGrowth’s unified analytics platform to monitor referral traffic sources, engagement rates, and session behaviors.",
          "Holistic SEO Approach: Balanced traditional SEO strategies with AEO techniques to ensure visibility across both search engines and AI platforms."
        ]
      },
      {
        "type": "heading",
        "content": "Results"
      },
      {
        "type": "list",
        "items": [
          "Increased Citations in LLMs: Content was cited more frequently in responses generated by platforms like Perplexity.ai, enhancing brand visibility.",
          "Traffic Recovery: Despite declining Google search traffic, website visits remained steady thanks to commercial intent keywords from LLMs like Perplexity and ChatGPT.",
          "Improved Engagement Metrics: Engagement rate reached 40.28%; average engagement time per session was 15 seconds; high-performing pages included blogs targeting commercial keywords such as “Top Shopify Trends” with a 66.67% engagement rate.",
          "Enhanced Topical Authority: Entity-based SEO strategies strengthened Growth Natives’ position as an authoritative source across multiple domains."
        ]
      },
      {
        "type": "heading",
        "content": "Key Analytics Insights"
      },
      {
        "type": "list",
        "items": [
          "Referral traffic from Perplexity.ai contributed significantly to sessions over time.",
          "Top-performing blogs included topics such as storytelling in content marketing, healthcare experiences, Salesforce revenue analysis, and data visualization techniques.",
          "Events per session averaged 4.26, indicating strong user interaction."
        ]
      },
      {
        "type": "heading",
        "content": "Conclusion"
      },
      {
        "type": "paragraph",
        "content": "Growth Natives successfully navigated the disruptive shift in search behavior by pioneering AI Engine Optimization (AEO). By integrating cutting-edge technologies like NLP, entity-based SEO, and holistic SEO practices, they not only mitigated the impact of declining organic traffic but also positioned themselves as leaders in the field of AI-driven optimization."
      },
      {
        "type": "heading",
        "content": "Key Takeaways"
      },
      {
        "type": "list",
        "items": [
          "Embrace AI-driven optimization techniques like AEO to remain competitive amidst shifting user behaviors.",
          "Focus on building topical authority through entity-based SEO strategies that align with LLM algorithms.",
          "Leverage advanced analytics tools like DiGGrowth for actionable insights into referral traffic and engagement metrics.",
          "Prioritize citation relevance within conversational AI platforms to enhance brand visibility."
        ]
      }
    ]
  },
  "automated-sales-workflows-by-integrating-hubspot-google-sheets-docusign-and-erp-system": {
    "id": "automated-sales-workflows-by-integrating-hubspot-google-sheets-docusign-and-erp-system",
    "title": "Automated Sales Workflows by Integrating HubSpot, Google Sheets, DocuSign, and ERP System",
    "subtitle": "How a leading cask trading firm transformed sales operations, achieving a 50% reduction in order processing time through streamlined software integration.",
    "author": "Geeta Dutt",
    "date": "May 9, 2024",
    "category": "Sales Automation",
    "readTime": "1 min read",
    "tags": [],
    "heroImage": "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/Automated-Sales-Workflows-by-Integrating-HubSpot-Google-Sheets-DocuSign-and-ERP-System.webp",
    "toc": [
      "The Customer",
      "The Challenge",
      "The Solution",
      "The Impact"
    ],
    "content": [
      {
        "type": "heading",
        "content": "The Customer"
      },
      {
        "type": "paragraph",
        "content": "The customer is a prominent player in the cask trading sector, serving both B2B and B2C customers. They specialize in sales, leasing, and white-labeling services, meticulously tracking each cask from acquisition to bottling to ensure quality and authenticity."
      },
      {
        "type": "heading",
        "content": "The Challenge"
      },
      {
        "type": "paragraph",
        "content": "The customer was using HubSpot as their CRM platform and faced challenges with their manual sales process. They were relying on disparate tools such as Google Sheets, DocuSign, and an ERP system for managing purchase orders, invoicing, and receipt generation. The lack of integration led to inconsistencies, delays, and inefficiencies in their backend processes. They wanted to automate the sales process-from order creation to invoicing-by integrating HubSpot, Google Sheets, DocuSign, and the ERP system; reduce human intervention, enhance accuracy, and optimize resource utilization to drive operational efficiency and improve customer satisfaction."
      },
      {
        "type": "heading",
        "content": "The Solution"
      },
      {
        "type": "list",
        "items": [
          "Started by thoroughly examining the client’s existing sales processes to identify inefficiencies.",
          "Leveraged Google Sheets as a master stock list for efficient inventory management.",
          "Created a customized sales docket within HubSpot to centralize customer details and order tracking.",
          "Integrated HubSpot with Google Sheets and DocuSign to automate data exchange and ensure consistency.",
          "Automated order signing by integrating DocuSign into the workflow to reduce manual errors and speed up transactions.",
          "Automated the transfer of sales orders from HubSpot to the ERP system to generate invoices automatically, streamlining the end-to-end sales process."
        ]
      },
      {
        "type": "heading",
        "content": "The Impact"
      },
      {
        "type": "list",
        "items": [
          "100% accuracy in order processing.",
          "50% reduction in order processing time.",
          "Improved resource utilization due to streamlined workflows."
        ]
      }
    ]
  },
  "enabling-smooth-deal-tracking-within-hubspot-for-a-commercial-roofing-company": {
    "id": "enabling-smooth-deal-tracking-within-hubspot-for-a-commercial-roofing-company",
    "title": "Enabling Smooth Deal Tracking Within HubSpot for a Commercial Roofing Company",
    "subtitle": "How a commercial roofing company achieved seamless deal management and enhanced efficiency within HubSpot CRM.",
    "author": "Geeta Dutt",
    "date": "Apr 10, 2024",
    "category": "Sales Automation",
    "readTime": "1 min read",
    "tags": [],
    "heroImage": "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/Enabling-Smooth-Deal-Tracking-Within-HubSpot-for-a-Commercial-Roofing-Company.webp",
    "toc": [
      "The Customer",
      "The Challenge",
      "The Solution",
      "The Impact"
    ],
    "content": [
      {
        "type": "heading",
        "content": "The Customer"
      },
      {
        "type": "paragraph",
        "content": "The customer stands as a leading player in the roofing industry, renowned for its top-tier solutions catering to both residential and commercial properties. With an A+ accreditation from the Better Business Bureau, they are recognized for their commitment to trust and reliability."
      },
      {
        "type": "heading",
        "content": "The Challenge"
      },
      {
        "type": "paragraph",
        "content": "The customer faced challenges in effectively tracking and managing closed-won deals within their CRM platform, HubSpot. Without a standardized system for organizing deals, they encountered difficulties in accessing and referencing important information. It hindered their ability to streamline operations and deliver optimal service to clients. They wanted to:\n• Track and manage closed-won deals within their HubSpot instance.\n• Accurately monitor and organize their closed-won deals to increase efficiency across their sales operations.\n• Streamline deal tracking to eliminate the risk of missed opportunities for customer engagement and follow-up."
      },
      {
        "type": "heading",
        "content": "The Solution"
      },
      {
        "type": "list",
        "items": [
          "Seamlessly integrated Google Sheets with their HubSpot account to facilitate data transfer and synchronization between the two platforms.",
          "Utilized custom scripts to automate the retrieval of all deals at the “ClosedWon” stage from HubSpot, ensuring real-time access to pertinent deal information.",
          "Used custom code to assign unique Job IDs to “ClosedWon” deals and moved them to HubSpot Deals, which made the data more accurate and organized.",
          "Managed and stored the generated Job IDs in a separate tab within Google Sheets for historical reference and tracking purposes to ensure data integrity and accessibility.",
          "Automatically assigned a Job ID based on the last generated number when a deal reached the “ClosedWon” stage, ensuring uniqueness and continuity."
        ]
      },
      {
        "type": "heading",
        "content": "The Impact"
      },
      {
        "type": "list",
        "items": [
          "Accuracy and reliability in their deal tracking efforts.",
          "Seamless organization and retrieval of closed-won deals.",
          "Enhanced client communication."
        ]
      }
    ]
  },
  "achieving-7x-roi-in-just-8-months-through-digital-marketing-for-a-top-tier-cloud-platform": {
    "id": "achieving-7x-roi-in-just-8-months-through-digital-marketing-for-a-top-tier-cloud-platform",
    "title": "Achieving 7X ROI in Just 8 Months Through Digital Marketing for a Top-tier Cloud Platform",
    "subtitle": "How a cloud platform helping pharmaceutical companies achieved 7X ROI (with a 16X pipeline boost) in just 8 months through digital marketing.",
    "author": "Geeta Dutt",
    "date": "Apr 8, 2024",
    "category": "Digital Marketing",
    "readTime": "1 min read",
    "tags": [],
    "heroImage": "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/Achieving-7X-ROI-in-Just-8-Months-Through-Digital-Marketing-for-a-Top-tier-Cloud-Platform.webp",     // No explicit image provided
    "toc": [
      "The Customer",
      "The Challenge",
      "The Solution",
      "The Impact"
    ],
    "content": [
      {
        "type": "heading",
        "content": "The Customer"
      },
      {
        "type": "paragraph",
        "content": "The customer stands as a beacon of innovation in Product Lifecycle, Quality, and Safety management. Their fully connected, AI-powered platform, built on Salesforce, offers businesses of all sizes a transformative experience. They provide end-to-end solutions and ensure operational excellence through scalable tools that prioritize quality, safety, and efficiency."
      },
      {
        "type": "heading",
        "content": "The Challenge"
      },
      {
        "type": "paragraph",
        "content": "The customer struggled to fully leverage their marketing efforts and analytics tools. They sought to implement comprehensive ad lead tracking to precisely measure ROI, reallocate ad spend, launch a targeted Facebook campaign for better reach and engagement, refine keyword targeting, improve CTAs, streamline user flow, and redesign the website for faster load times and a seamless user experience."
      },
      {
        "type": "heading",
        "content": "The Solution"
      },
      {
        "type": "list",
        "items": [
          "Started with a detailed audit and implemented targeted solutions to address the customer’s challenges comprehensively.",
          "Initiated Pardot automation to nurture and engage prospects effectively.",
          "Created personalized Google Ads and LinkedIn Ads campaigns to connect with potential customers.",
          "Leveraged Taboola to extend advertising reach across relevant forums and platforms.",
          "Used Smartlook for engagement tracking using heatmaps and A/B testing.",
          "Improved quality score by aligning search terms, keywords, ads, and landing pages, and enhancing lead quality through precise targeting.",
          "Fine-tuned ad schedules, implemented retargeting strategies, and overhauled the advertising engine for better performance."
        ]
      },
      {
        "type": "heading",
        "content": "The Impact"
      },
      {
        "type": "list",
        "items": [
          "Achieved 7X Return on Ad Spend (ROAS).",
          "Generated a $2 million+ sales pipeline.",
          "Increased inbound leads by 40%."
        ]
      }
    ]
  },
  "75-reduction-in-admin-activity-time-with-salesforce-territory-management": {
    "id": "75-reduction-in-admin-activity-time-with-salesforce-territory-management",
    "title": "Reducing Administrative Burden by 75% in Real Estate Operations Through Territory Management",
    "subtitle": "How a real estate firm achieved dramatic efficiency gains by implementing Salesforce Territory Management.",
    "author": "Sakshi Arora",
    "date": "Aug 23, 2023",
    "category": "Salesforce Implementation",
    "readTime": "1 min read",
    "tags": [],
    "heroImage": "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/image-3-1.webp",
    "toc": [
      "The Customer",
      "The Challenge",
      "The Solution",
      "The Impact"
    ],
    "content": [
      {
        "type": "heading",
        "content": "The Customer"
      },
      {
        "type": "paragraph",
        "content": "The customer is a prominent real estate firm headquartered in the US. With over 500 employees, they’re known for leading innovation in property development and management, setting new standards for excellence in the industry."
      },
      {
        "type": "heading",
        "content": "The Challenge"
      },
      {
        "type": "paragraph",
        "content": "The customer relied on an almost manual process to collect data about accounts and opportunities in different territories. The manual process consumed a lot of time and made it extremely challenging to assign data and accounts to team members effectively. They wanted to implement Salesforce Territory Management for structuring their teams and manage territories based on account characteristics such as ZIP codes, industry clients, revenue, and custom metrics."
      },
      {
        "type": "heading",
        "content": "The Solution"
      },
      {
        "type": "list",
        "items": [
          "Conducted a thorough Salesforce audit to identify and resolve issues related to accounts, contacts, opportunities, cases, and leads.",
          "Implemented Salesforce Territory Management to establish a territory-based hierarchy with role-based data access.",
          "Refined regions and subregions within the territory hierarchy and assigned roles to agents in each area.",
          "Established custom account assignment rules ensuring agents access only relevant accounts.",
          "Provided role-based access controls to minimize distractions and optimize efficiency."
        ]
      },
      {
        "type": "heading",
        "content": "The Impact"
      },
      {
        "type": "list",
        "items": [
          "47% increase in lead progression.",
          "75% reduction in manual task time.",
          "22% average revenue boost across territories."
        ]
      }
    ]
  },
  "69-improvement-in-forecasting-accuracy-with-salesforce-billing-implementation": {
    "id": "69-improvement-in-forecasting-accuracy-with-salesforce-billing-implementation",
    "title": "69% Improvement in Forecasting Accuracy With Salesforce Billing Implementation",
    "subtitle": "How a leading hardware company enhanced billing efficiency and forecasting accuracy using Salesforce Billing.",
    "author": "Geeta Dutt",
    "date": "Aug 23, 2023",
    "category": "Salesforce Billing",
    "readTime": "1 min read",
    "tags": [],
    "heroImage": "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/image-1%20(1).webp",
    "toc": [
      "The Customer",
      "The Challenge",
      "The Solution",
      "The Impact"
    ],
    "content": [
      {
        "type": "heading",
        "content": "The Customer"
      },
      {
        "type": "paragraph",
        "content": "Our customer stands as a leading seller of hardware products, commanding a significant presence nationwide in the US. They aimed to refine their billing and taxation processes for goods sold across the country, prioritizing efficiency and accuracy in their operations."
      },
      {
        "type": "heading",
        "content": "The Challenge"
      },
      {
        "type": "paragraph",
        "content": "The customer faced significant hurdles in optimizing their billing and taxation processes for goods sold across the country. Relying on outdated systems and manual processes led to inefficiencies and errors in their operations. They needed to streamline billing and taxation processes, generate invoices based on account hierarchy, implement Salesforce Billing into their CPQ system, automate order processing (including invoicing, payment tracking, revenue management), manage credit and debit notes, and integrate third-party payment gateways."
      },
      {
        "type": "heading",
        "content": "The Solution"
      },
      {
        "type": "list",
        "items": [
          "Conducted a comprehensive Salesforce audit to identify billing and invoicing challenges.",
          "Established records for different legal entities (e.g., France, Switzerland) to mirror organizational structure.",
          "Applied precise tax rate calculations per legal entity to ensure accurate taxation.",
          "Implemented two invoice schedulers to generate daily and monthly invoices for activated orders at specified intervals.",
          "Set up invoice generation within the parent account hierarchy for transparent billing.",
          "Introduced revenue recognition rules to align with the client’s financial reporting requirements."
        ]
      },
      {
        "type": "heading",
        "content": "The Impact"
      },
      {
        "type": "list",
        "items": [
          "69% improvement in forecasting accuracy within just 90 days of implementation.",
          "31% increase in revenue.",
          "56% improvement in customer satisfaction."
        ]
      }
    ]
  },
  "75-reduction-in-cycle-time-with-salesforce-cpq-implementation": {
    "id": "75-reduction-in-cycle-time-with-salesforce-cpq-implementation",
    "title": "Boosting Operational Efficiency by 75% with Salesforce CPQ Integration for a Leading Brain Technology Firm",
    "subtitle": "How a brain-technology leader slashed cycle time and increased proposal volume through a tailored Salesforce CPQ implementation.",
    "author": "Geeta Dutt",
    "date": "Aug 23, 2023",
    "category": "Salesforce CPQ",
    "readTime": "1 min read",
    "tags": [],
    "heroImage": "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/case-study/image-2.webp",
    "toc": [
      "The Customer",
      "The Challenge",
      "The Solution",
      "The Impact"
    ],
    "content": [
      {
        "type": "heading",
        "content": "The Customer"
      },
      {
        "type": "paragraph",
        "content": "The customer is a leading player in brain technology, dedicated to advancing human adaptability, recovery, and learning potential. With a profound commitment to innovation, they pioneer cutting-edge solutions that redefine the boundaries of brain science."
      },
      {
        "type": "heading",
        "content": "The Challenge"
      },
      {
        "type": "paragraph",
        "content": "The customer relied on manual quoting systems using Excel, which caused errors and inconsistencies. The sales team faced inefficiencies and difficulty generating accurate costs reliably, resulting in unstandardized processes and formatting issues across spreadsheets."
      },
      {
        "type": "heading",
        "content": "The Solution"
      },
      {
        "type": "list",
        "items": [
          "Implemented a customized Salesforce CPQ solution with cart-level rules, pricing logic, and product bundling to streamline quoting.",
          "Designed complex pricing models including default pricing, discount schedules, and multi-currency setups tailored to regional needs.",
          "Optimized the approval workflow with streamlined authentication and rule consistency.",
          "Enabled automated document generation in multiple languages using existing templates and localization capabilities.",
          "Automated renewals, work order creation, and license activations to reduce manual intervention.",
          "Implemented permission sets based on hierarchical and geographical territory structures to manage access effectively."
        ]
      },
      {
        "type": "heading",
        "content": "The Impact"
      },
      {
        "type": "list",
        "items": [
          "75% reduction in cycle time.",
          "49% increase in proposal generation volume.",
          "55% improvement in compliance."
        ]
      }
    ]
  }





};

const CaseStudiesPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug && casePosts[slug];
  const [activeId, setActiveId] = useState("");
  const [seoData, setSeoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [headTags, setHeadTags] = useState<JSX.Element[]>([]);
  const [rankMathAuthor, setRankMathAuthor] = useState<string | null>(null);

  useEffect(() => {
    const fetchRankMath = async () => {
      try {
        const publicDomain = API_BASE_URL;
        const path = window.location.pathname;
        const apiUrl = `${publicDomain}/wp-json/rankmath/v1/getHead?url=${publicDomain}${path}`;

        const response = await fetch(apiUrl);
        const result = await response.json();

        if (result?.head) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(result.head, "text/html");
          const elements: JSX.Element[] = [];

          // ✅ Extract Author from twitter:data1
          const twitterData1 = doc.querySelector('meta[name="twitter:data1"]')?.getAttribute("content");
          if (twitterData1) {
            setRankMathAuthor(twitterData1);
          } else {
            // ✅ Fallback: Extract from JSON-LD
            const jsonLdScript = doc.querySelector('script[type="application/ld+json"]');
            if (jsonLdScript) {
              try {
                const jsonLd = JSON.parse(jsonLdScript.textContent || "{}");
                if (jsonLd["@graph"]) {
                  const authorNode = jsonLd["@graph"].find((node: any) => node["@type"] === "Person" && node.name);
                  if (authorNode?.name) {
                    setRankMathAuthor(authorNode.name);
                  }
                }
              } catch (err) {
                console.warn("Error parsing JSON-LD:", err);
              }
            }
          }

          doc.head.childNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const el = node as HTMLElement;
              switch (el.tagName.toLowerCase()) {
                case "title":
                  elements.push(<title key={elements.length}>{el.textContent}</title>);
                  break;
                case "meta":
                  elements.push(
                    <meta
                      key={elements.length}
                      {...Object.fromEntries([...el.attributes].map(attr => [attr.name, attr.value]))}
                    />
                  );
                  break;
                case "link": {
                  const attrs = Object.fromEntries([...el.attributes].map(attr => [attr.name, attr.value]));

                  // ✅ Force canonical domain to growthnatives.com
                  if (attrs.rel === "canonical" && attrs.href) {
                    try {
                      const url = new URL(attrs.href);
                      url.hostname = "growthnatives.com"; // replace api.growthnatives.com
                      url.protocol = "https:"; // enforce https
                      attrs.href = url.toString();
                    } catch (err) {
                      console.warn("Invalid canonical URL:", attrs.href, err);
                    }
                  }

                  elements.push(<link key={elements.length} {...attrs} />);
                  break;
                }
                case "script":
                  elements.push(
                    <script
                      key={elements.length}
                      {...Object.fromEntries([...el.attributes].map(attr => [attr.name, attr.value]))}
                    >
                      {el.textContent}
                    </script>
                  );
                  break;
                default:
                  break;
              }
            }
          });

          setHeadTags(elements);
        }
      } catch (error) {
        console.error("Error fetching Rank Math data:", error);
      }
    };

    fetchRankMath();
  }, []);

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
      {
        root: null,
        rootMargin: "-100px 0px -70% 0px",
        threshold: 0.1
      }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (!post) return <Navigate to="/case-studies" replace />;

  const renderContent = (item: any, index: number) => {
    switch (item.type) {
      case "paragraph":
        return <p key={index} className="text-gray-700 leading-7 mb-6">{item.content}</p>;
      case "heading":
        return (
          <h2
            key={index}
            id={item.content.replace(/\s+/g, '-').toLowerCase()}
            className="text-2xl font-semibold text-gray-900  mb-4"
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
      case "image":
        return (
          <figure key={index} className="my-8">
            <img src={item.src} alt={item.alt} className="rounded-lg border border-gray-200" />
            <figcaption className="text-sm text-gray-500 text-center italic mt-2">{item.caption}</figcaption>
          </figure>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      <Helmet>{headTags}</Helmet>
      <Header />
      <main className="pt-12 px-4 sm:px-6 pb-12">
        <div className="max-w-[1140px] mx-auto">
          {/* Hero Section: Left & Right Layout */}
          <section className="pt-24 pb-8 md:pb-24 grid md:grid-cols-2 gap-10 items-start mb-5 items-center">
            <div>
              {/* Back Link */}
              <Link
                to="/case-studies"
                className="text-blue-600 text-sm flex items-center gap-1 mb-6 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Case Studies
              </Link>

              {/* Category Badge */}
              <Badge className="mb-2 text-xs">{post.category}</Badge>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                {post.title}
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-gray-600 mb-6">{post.subtitle}</p>

              {/* Author Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {post.readTime}
                </span>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div>
              <img
                src={post.heroImage}
                alt={post.title}
                className="rounded-lg w-full border border-gray-200"
              />
              {/* <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4 text-sm"> */}
              {/* Left: Views + Listen */}
              {/* <div className="flex items-center gap-6 text-gray-600">
    <div className="flex items-center gap-2">
      <Eye className="w-4 h-4 text-gray-900" />
      <span className="font-semibold text-gray-900">5151 Views</span>
    </div>

    <span className="h-4 w-px bg-gray-300" />

    <div className="flex items-center gap-2">
      <Headphones className="w-4 h-4 text-blue-600" />
      <a href="#" className="text-blue-600 font-medium hover:underline">Listen</a>
    </div>
  </div> */}

              {/* Right: Share */}
              {/* <div className="flex items-center gap-3">
    <span className="font-semibold underline text-gray-500">Share this article :</span>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <div className="w-8 h-8 rounded-full bg-[#0077B5] flex items-center justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
          alt="LinkedIn"
          className="w-6 h-6"
        />
      </div>
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
          alt="Facebook"
          className="w-6 h-6"
        />
      </div>
    </a>
  </div> */}
              {/* </div> */}


            </div>
          </section>

          {/* Combined Grid: TOC + Content */}
          <div className="grid lg:grid-cols-[16rem_1fr] gap-[88px]">
            {/* TOC + Author */}
            <aside className="hidden lg:block sticky top-24 self-start">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Table of Contents</h3>
              <ul className="space-y-3 border-l pl-4 text-sm text-gray-700 mb-10">
                {post.toc.map((item, i) => {
                  const sectionId = item.replace(/\s+/g, '-').toLowerCase();
                  return (
                    <li key={i}>
                      <a
                        href={`#${sectionId}`}
                        className={`block py-1 transition-colors duration-200 ${activeId === sectionId
                            ? 'text-blue-600 font-medium border-l-2 border-blue-600 -ml-[1px] pl-3'
                            : 'hover:text-blue-600'
                          }`}
                      >
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </aside>

            {/* Main Article */}
            <div className="max-w-[740px]">
              <article className="prose prose-gray max-w-none">
                {post.content.map((block, index) => renderContent(block, index))}
              </article>

              <div className="flex flex-wrap gap-2 mt-10">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </div>

              <div className="mt-16 p-6 bg-gray-50 rounded-lg border text-center shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Ready to Transform Your Marketing Strategy?</h3>
                <p className="text-gray-600 mb-4 text-sm">Let our experts help you implement cutting-edge solutions for your business.</p>
                <a
                  href="/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-600 text-white px-6 hover:bg-blue-700">
                    Get Started Today
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPost;
