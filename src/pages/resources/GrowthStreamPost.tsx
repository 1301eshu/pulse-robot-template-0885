// import { ArrowLeft, CheckCircle } from "lucide-react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Badge } from "@/components/ui/badge";
// import HubSpotForm from '@/components/HubSpotForm';
// import React from "react";
// import { Navigate, useParams } from "react-router-dom";

// interface DownloadablePostData {
//   title: string;
//   excerpt: string;
//   videoEmbedUrl: string;
//   sectionDescription: string;
//   keyLearnings: string[];
//   growthPoints: string[];
// }

// export const downloadablePosts = {
//   "mastering-ga4-migration": {
//     id: "mastering-ga4-migration",
//     title: "Mastering GA4 Migration – Insights & Best Practices",
//     videoEmbedUrl: "https://www.youtube.com/embed/0CsXXCuaHuY",
//     sectionDescription: "We believe in the power of knowledge sharing and learning from the best in the industry. Our Growth Stream Fireside Chats bring you exclusive sessions with seasoned Subject Matter Experts and visionary CMOs. Join us as we delve into insightful discussions on a wide range of topics, gaining valuable perspectives and strategies for growth.",
//     keyLearningstitle: "In this ‘Fireside Chat’, you will learn:",
//     growthPointstitle: "Solidify Your Business Growth With Us",
//     growthPointsDescription: "Staying ahead requires more than just keeping up with trends—it demands insight, strategy, and a keen understanding of the industry’s pulse. Our Fireside Chats offer you a unique opportunity to stay informed and actively position yourself as an industry leader.",
//     keyLearnings: [
//       "What options does GA4 offer to create properties for different needs?",
//       "Learn how to migrate from legacy systems to GA4 smoothly.",
//       "Ways to ensure data consistency by aligning dimensions and metrics in GA4.",
//       "Explore reporting options and overcome inconsistencies with custom solutions.",
//       "Resolve quota errors by using a custom GA4 connector for seamless integration.",
//       "Safeguard and export historical data securely with the Universal Analytics Connector."
//     ],
//     growthPoints: [
//       "Gain strategic insights from visionaries",
//       "Stay ahead of the Curve with Cutting-edge knowledge",
//       "Forge connections with industry Pioneers",
//       "Enhance your brand authority and credibility"
//     ]
//   },
//   "an-insightful-fireside-chat-on-cmos-technology-and-innovation": {
//     id: "an-insightful-fireside-chat-on-cmos-technology-and-innovation",
//     title: "An Insightful Fireside Chat on CMOs, Technology, and Innovation",
//     videoEmbedUrl: "https://www.youtube.com/embed/jTGJ3o5slto?&autoplay=1&mute=1&loop=1&playlist=jTGJ3o5slto",
//     sectionDescription: "Listen to Eric Eden, an accomplished marketer and CMO, and Taran Nandha, the CEO and founder of Growth Natives, in this insightful fireside chat on how CMOs can optimally use technology for innovation in 2023 and beyond. During this session, Eric and Taran discussed how CMOs can adapt to technological advancements and innovate despite limited resources. Eric also shared valuable insights on how young marketers can utilize technology to enhance their creativity and bring value to their respective organizations.",
//     keyLearningstitle: "In this ‘Fireside Chat’, you will learn:",
//     growthPointstitle: "Solidify Your Business Growth With Us",
//     growthPointsDescription: "Staying ahead requires more than just keeping up with trends—it demands insight, strategy, and a keen understanding of the industry’s pulse. Our Fireside Chats offer you a unique opportunity to stay informed and actively position yourself as an industry leader.",
//     keyLearnings: [
//       "The key challenges that CMOs face in adopting technology and how they can overcome them.",
//       "Integrating innovative approaches into your marketing strategy, even with limited resources.",
//       "Ways to harness the power of technology to enhance your marketing efforts and create a competitive edge.",
//       "Practical tips for young marketers to be more creative with technology and deliver impactful results."
//     ],
//     growthPoints: [
//       "Gain strategic insights from visionaries",
//       "Stay ahead of the Curve with Cutting-edge knowledge",
//       "Forge connections with industry Pioneers",
//       "Enhance your brand authority and credibility"
//     ]
//   },
//   "how-revops-leader-fullcast-is-redefining-growth-marketing-through-innovation": {
//     id: "how-revops-leader-fullcast-is-redefining-growth-marketing-through-innovation",
//     title: "How RevOps Leader Fullcast is Redefining Growth Marketing Through Innovation",
//     videoEmbedUrl: "https://player.vimeo.com/video/782530497?h=be9614a6e2&autoplay=1&loop=1&title=0&byline=0&portrait=0",
//     sectionDescription: "The dynamics of marketing change as businesses grow. Fullcast, a market leader in RevOps, helps clients’ sales with go-to-market strategies and automation. Working toward RevOps enablement by aligning technology, community, and education, the company has been solving the challenges of aligning sales planning to operational execution in high-growth companies.In this insightful fireside chat, Beth and Taran Nandha, CEO and Founder of Growth Natives, discuss how Fullcast is redefining growth marketing through innovation and the importance of aligning sales planning to operational execution.",
//     keyLearningstitle: "In this ‘Growth Chat’, you will learn:",
//     growthPointstitle: "Solidify Your Business Growth With Us",
//     growthPointsDescription: "Staying ahead requires more than just keeping up with trends—it demands insight, strategy, and a keen understanding of the industry’s pulse. Our Fireside Chats offer you a unique opportunity to stay informed and actively position yourself as an industry leader.",
//     keyLearnings: [
//       "The importance of growth marketing for startups and small businesses",
//       "The challenges of growth marketing in an economically uncertain world",
//       "Why frugal innovation is shaping campaigns in an era of resource-crunch",
//       "How frugal innovation can help startups outsmart their bigger competitors"
//     ],
//     growthPoints: [
//       "Gain strategic insights from visionaries",
//       "Stay ahead of the Curve with Cutting-edge knowledge",
//       "Forge connections with industry Pioneers",
//       "Enhance your brand authority and credibility"
//     ]
//   },
//   "how-lamav-an-organic-skincare-brand-is-changing-the-beauty-industry": {
//     id: "how-lamav-an-organic-skincare-brand-is-changing-the-beauty-industry",
//     title: "How Lamav, an Organic Skincare Brand, is Changing the Beauty Industry",
//     videoEmbedUrl: "https://www.youtube.com/embed/dfun28bWhKY?&autoplay=1&mute=1&loop=1&playlist=dfun28bWhKY",
//     sectionDescription: "With changing customers’ needs and demands, the skincare industry is constantly evolving. LAMAV, a certified organic and 100% vegan skincare brand, is following suit. Introducing ayurvedic formulas and Australian bio-actives to its products, the brand is heading toward changing the course of the beauty industry. In our one-on-one conversation with LAMAV’s founder and CEO, Tarj Mavi, we discovered how she started her interesting entrepreneurial journey in the beauty industry and much more. ",
//     keyLearningstitle: "In this ‘Growth Chat’, you will learn:",
//     growthPointstitle: "Solidify Your Business Growth With Us",
//     growthPointsDescription: "Staying ahead requires more than just keeping up with trends—it demands insight, strategy, and a keen understanding of the industry’s pulse. Our Fireside Chats offer you a unique opportunity to stay informed and actively position yourself as an industry leader.",
//     keyLearnings: [
//       "About the skincare industry and how LAMAV was founded",
//       "How the 14 years of their existence have been and how their customers responded",
//       "Why there is a need for ecommerce marketing",
//       "How Growth Natives helped LAMAV scale in two years since 2020"
//     ],
//     growthPoints: [
//       "Gain strategic insights from visionaries",
//       "Stay ahead of the Curve with Cutting-edge knowledge",
//       "Forge connections with industry Pioneers",
//       "Enhance your brand authority and credibility"
//     ]
//   },
  // Add more downloadable posts here...
// };


// const DownloadablePostDynamic: React.FC = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const postData = slug ? downloadablePosts[slug] : null;

//   if (!postData) {
//     // Redirect to a 404 or listing page if slug is invalid
//     return <Navigate to="/growth-stream" />;
//   }
//   const renderList = (items: string[]) => (
//     <ul className="space-y-4">
//       {items.map((item, idx) => (
//         <li key={idx} className="flex items-start gap-3">
//           <CheckCircle className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
//           <span className="text-gray-600">{item}</span>
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     <>
//       <Header />

//       <main>
//         {/* Hero Section */}
//         <section className="bg-blue-50 py-36">
//           <div className="max-w-[1140px] mx-auto px-4 sm:px-6 text-center">
//             <a href="/growth-stream" className="text-blue-600 text-sm flex items-center justify-center gap-1 mb-6 hover:underline">
//               <ArrowLeft className="w-4 h-4 inline-block" />
//               Back to Growth Stream
//             </a>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug">{postData.title}</h1>
//             <p className="text-gray-700 max-w-2xl mx-auto mb-8">{postData.excerpt}</p>
//             <div className="aspect-w-16 aspect-h-9 max-w-3xl h-[500px] mx-auto">
//               <iframe
//                 className="w-full h-full rounded-lg shadow-md"
//                 src={postData.videoEmbedUrl}
//                 title={postData.title}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         </section>

//         {/* Info + Form Section */}
//         <section className="bg-white py-16">
//           <div className="max-w-[1140px] mx-auto pt-20 pb-10 px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
//             <div>
//               <p className="text-gray-700 max-w-lg">{postData.sectionDescription}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <HubSpotForm
//                 portalId="7118070"
//                 formId="936a6094-5911-42b5-af43-59918fd008a0"
//                 region="na1"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Key Learnings & Growth Points */}
//         <section className="bg-gray-50 py-16">
//           <div className="max-w-[1140px] mx-auto px-4">
//             <div className="grid lg:grid-cols-2 gap-12">
//               <div className="space-y-6">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">{postData.keyLearningstitle}</h3>
//                 {renderList(postData.keyLearnings)}
//               </div>

//               <div className="space-y-6">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">{postData.growthPointstitle}</h3>
//                 <p className="text-gray-900 mb-6">{postData.growthPointsDescription}</p>

//                 {renderList(postData.growthPoints)}
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default DownloadablePostDynamic;

import { ArrowLeft, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import HubSpotForm from '@/components/HubSpotForm';
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { API_BASE_URL } from "../../../apiconfig";
interface DownloadablePostData {
  id: string;
  title: string;
  excerpt?: string;
  videoEmbedUrl: string;
  sectionDescription: string;
  keyLearningstitle: string;
  growthPointstitle: string;
  growthPointsDescription: string;
  keyLearnings: string[];
  growthPoints: string[];
}

export const downloadablePosts: Record<string, DownloadablePostData> = {
  "mastering-ga4-migration": {
    id: "mastering-ga4-migration",
    title: "Mastering GA4 Migration – Insights & Best Practices",
    videoEmbedUrl: "https://www.youtube.com/embed/0CsXXCuaHuY",
    sectionDescription: "We believe in the power of knowledge sharing and learning from the best in the industry. Our Growth Stream Fireside Chats bring you exclusive sessions with seasoned Subject Matter Experts and visionary CMOs. Join us as we delve into insightful discussions on a wide range of topics, gaining valuable perspectives and strategies for growth.",
    keyLearningstitle: "In this ‘Fireside Chat’, you will learn:",
    growthPointstitle: "Solidify Your Business Growth With Us",
    growthPointsDescription: "Staying ahead requires more than just keeping up with trends—it demands insight, strategy, and a keen understanding of the industry’s pulse. Our Fireside Chats offer you a unique opportunity to stay informed and actively position yourself as an industry leader.",
    keyLearnings: [
      "What options does GA4 offer to create properties for different needs?",
      "Learn how to migrate from legacy systems to GA4 smoothly.",
      "Ways to ensure data consistency by aligning dimensions and metrics in GA4.",
      "Explore reporting options and overcome inconsistencies with custom solutions.",
      "Resolve quota errors by using a custom GA4 connector for seamless integration.",
      "Safeguard and export historical data securely with the Universal Analytics Connector."
    ],
    growthPoints: [
      "Gain strategic insights from visionaries",
      "Stay ahead of the Curve with Cutting-edge knowledge",
      "Forge connections with industry Pioneers",
      "Enhance your brand authority and credibility"
    ]
  },
  "an-insightful-fireside-chat-on-cmos-technology-and-innovation": {
    id: "an-insightful-fireside-chat-on-cmos-technology-and-innovation",
    title: "An Insightful Fireside Chat on CMOs, Technology, and Innovation",
    videoEmbedUrl: "https://www.youtube.com/embed/jTGJ3o5slto?&autoplay=1&mute=1&loop=1&playlist=jTGJ3o5slto",
    sectionDescription: "Listen to Eric Eden, an accomplished marketer and CMO, and Taran Nandha, the CEO and founder of Growth Natives, in this insightful fireside chat on how CMOs can optimally use technology for innovation in 2023 and beyond. During this session, Eric and Taran discussed how CMOs can adapt to technological advancements and innovate despite limited resources. Eric also shared valuable insights on how young marketers can utilize technology to enhance their creativity and bring value to their respective organizations.",
    keyLearningstitle: "In this ‘Fireside Chat’, you will learn:",
    growthPointstitle: "Solidify Your Business Growth With Us",
    growthPointsDescription: "Staying ahead requires more than just keeping up with trends—it demands insight, strategy, and a keen understanding of the industry’s pulse. Our Fireside Chats offer you a unique opportunity to stay informed and actively position yourself as an industry leader.",
    keyLearnings: [
      "The key challenges that CMOs face in adopting technology and how they can overcome them.",
      "Integrating innovative approaches into your marketing strategy, even with limited resources.",
      "Ways to harness the power of technology to enhance your marketing efforts and create a competitive edge.",
      "Practical tips for young marketers to be more creative with technology and deliver impactful results."
    ],
    growthPoints: [
      "Gain strategic insights from visionaries",
      "Stay ahead of the Curve with Cutting-edge knowledge",
      "Forge connections with industry Pioneers",
      "Enhance your brand authority and credibility"
    ]
  },
  "how-revops-leader-fullcast-is-redefining-growth-marketing-through-innovation": {
    id: "how-revops-leader-fullcast-is-redefining-growth-marketing-through-innovation",
    title: "How RevOps Leader Fullcast is Redefining Growth Marketing Through Innovation",
    videoEmbedUrl: "https://player.vimeo.com/video/782530497?h=be9614a6e2&autoplay=1&loop=1&title=0&byline=0&portrait=0",
    sectionDescription: "The dynamics of marketing change as businesses grow. Fullcast, a market leader in RevOps, helps clients’ sales with go-to-market strategies and automation. Working toward RevOps enablement by aligning technology, community, and education, the company has been solving the challenges of aligning sales planning to operational execution in high-growth companies.In this insightful fireside chat, Beth and Taran Nandha, CEO and Founder of Growth Natives, discuss how Fullcast is redefining growth marketing through innovation and the importance of aligning sales planning to operational execution.",
    keyLearningstitle: "In this ‘Growth Chat’, you will learn:",
    growthPointstitle: "Solidify Your Business Growth With Us",
    growthPointsDescription: "Staying ahead requires more than just keeping up with trends—it demands insight, strategy, and a keen understanding of the industry’s pulse. Our Fireside Chats offer you a unique opportunity to stay informed and actively position yourself as an industry leader.",
    keyLearnings: [
      "The importance of growth marketing for startups and small businesses",
      "The challenges of growth marketing in an economically uncertain world",
      "Why frugal innovation is shaping campaigns in an era of resource-crunch",
      "How frugal innovation can help startups outsmart their bigger competitors"
    ],
    growthPoints: [
      "Gain strategic insights from visionaries",
      "Stay ahead of the Curve with Cutting-edge knowledge",
      "Forge connections with industry Pioneers",
      "Enhance your brand authority and credibility"
    ]
  },
  "how-lamav-an-organic-skincare-brand-is-changing-the-beauty-industry": {
    id: "how-lamav-an-organic-skincare-brand-is-changing-the-beauty-industry",
    title: "How Lamav, an Organic Skincare Brand, is Changing the Beauty Industry",
    videoEmbedUrl: "https://www.youtube.com/embed/dfun28bWhKY?&autoplay=1&mute=1&loop=1&playlist=dfun28bWhKY",
    sectionDescription: "With changing customers’ needs and demands, the skincare industry is constantly evolving. LAMAV, a certified organic and 100% vegan skincare brand, is following suit. Introducing ayurvedic formulas and Australian bio-actives to its products, the brand is heading toward changing the course of the beauty industry. In our one-on-one conversation with LAMAV’s founder and CEO, Tarj Mavi, we discovered how she started her interesting entrepreneurial journey in the beauty industry and much more. ",
    keyLearningstitle: "In this ‘Growth Chat’, you will learn:",
    growthPointstitle: "Solidify Your Business Growth With Us",
    growthPointsDescription: "Staying ahead requires more than just keeping up with trends—it demands insight, strategy, and a keen understanding of the industry’s pulse. Our Fireside Chats offer you a unique opportunity to stay informed and actively position yourself as an industry leader.",
    keyLearnings: [
      "About the skincare industry and how LAMAV was founded",
      "How the 14 years of their existence have been and how their customers responded",
      "Why there is a need for ecommerce marketing",
      "How Growth Natives helped LAMAV scale in two years since 2020"
    ],
    growthPoints: [
      "Gain strategic insights from visionaries",
      "Stay ahead of the Curve with Cutting-edge knowledge",
      "Forge connections with industry Pioneers",
      "Enhance your brand authority and credibility"
    ]
  },
};

const DownloadablePostDynamic: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const postData = slug ? downloadablePosts[slug] : null;

  const [headTags, setHeadTags] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const fetchRankMath = async () => {
      if (!slug) return;

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

          doc.head.childNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const el = node as HTMLElement;
              switch (el.tagName.toLowerCase()) {
                case "title":
                  elements.push(<title key={elements.length}>{el.textContent}</title>);
                  break;
                case "meta":
                  elements.push(
                    <meta key={elements.length} {...Object.fromEntries([...el.attributes].map(attr => [attr.name, attr.value]))} />
                  );
                  break;
                case "link":
                  elements.push(
                    <link key={elements.length} {...Object.fromEntries([...el.attributes].map(attr => [attr.name, attr.value]))} />
                  );
                  break;
                default:
                  break;
              }
            }
          });

          setHeadTags(elements);
        }
      } catch (err) {
        console.error("Error fetching Rank Math meta:", err);
      }
    };

    fetchRankMath();
  }, [slug]);

  if (!postData) return <Navigate to="/growth-stream" />;

  const renderList = (items: string[]) => (
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Helmet>{headTags}</Helmet>
      <Header />

      <main>
        <section className="bg-blue-50 py-36">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 text-center">
            <a href="/growth-stream" className="text-blue-600 text-sm flex items-center justify-center gap-1 mb-6 hover:underline">
              <ArrowLeft className="w-4 h-4 inline-block" />
              Back to Growth Stream
            </a>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug">{postData.title}</h1>
            {postData.excerpt && <p className="text-gray-700 max-w-2xl mx-auto mb-8">{postData.excerpt}</p>}
            <div className="aspect-w-16 aspect-h-9 max-w-3xl h-[500px] mx-auto">
              <iframe
                className="w-full h-full rounded-lg shadow-md"
                src={postData.videoEmbedUrl}
                title={postData.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-[1140px] mx-auto pt-20 pb-10 px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-700 max-w-lg">{postData.sectionDescription}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <HubSpotForm portalId="7118070" formId="936a6094-5911-42b5-af43-59918fd008a0" region="na1" />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{postData.keyLearningstitle}</h3>
                {renderList(postData.keyLearnings)}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{postData.growthPointstitle}</h3>
                <p className="text-gray-900 mb-6">{postData.growthPointsDescription}</p>
                {renderList(postData.growthPoints)}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DownloadablePostDynamic;
