// import { useParams, Navigate } from 'react-router-dom';
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ArrowLeft, Clock, User, Calendar, Eye, Headphones, } from "lucide-react";
// import { Link } from "react-router-dom";

// // Blog data
// const blogPosts = {
//   "hubspot-chatgpt-connector": {
//     id: "hubspot-chatgpt-connector",
//     title: "HubSpot Just Changed the Game: Meet the Deep Research Connector with ChatGPT",
//     subtitle: "Discover how HubSpot's latest AI integration is revolutionizing marketing automation and customer research workflows.",
//     author: "Sneha Kumari",
//     date: "July 7, 2025",
//     readTime: "5 min read",
//     category: "Marketing Automation",
//     tags: ["HubSpot", "AI", "ChatGPT", "Marketing Automation"],
//     heroImage: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg",
//     toc: [
//       "The Game-Changing Integration",
//       "Real-World Applications",
//       "Implementation Strategy",
//     ],
//     content: [
//       {
//         type: "paragraph",
//         content: "The marketing automation landscape just experienced a seismic shift..."
//       },
//       {
//         type: "heading",
//         content: "The Game-Changing Integration"
//       },
//       {
//         type: "paragraph",
//         content: "This isn't just another AI tool integration..."
//       },
//       {
//         type: "list",
//         items: [
//           "Generate personalized content at scale",
//           "Conduct deep research using AI-powered analysis",
//           "Create audience-specific messaging",
//           "Automate journey mapping"
//         ]
//       },
//       {
//         type: "heading",
//         content: "Real-World Applications"
//       },
//       {
//         type: "paragraph",
//         content: "Early adopters are already seeing remarkable results..."
//       },
//       {
//         type: "image",
//         src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400",
//         alt: "HubSpot Dashboard",
//         caption: "AI-powered dashboard interface streamlines workflows"
//       },
//       {
//         type: "heading",
//         content: "Implementation Strategy"
//       },
//       {
//         type: "paragraph",
//         content: "Clean, structured data is essential for maximizing AI effectiveness..."
//       }
//     ]
//   }
// };

// const BlogPost = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const post = slug && blogPosts[slug];

//   if (!post) return <Navigate to="/resources/blog" replace />;

//   const renderContent = (item: any, index: number) => {
//     switch (item.type) {
//       case "paragraph":
//         return <p key={index} className="text-gray-700 leading-7 mb-6">{item.content}</p>;
//       case "heading":
//         return (
//           <h2
//             key={index}
//             id={item.content.replace(/\s+/g, '-').toLowerCase()}
//             className="text-2xl font-semibold text-gray-900 mt-10 mb-4"
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
//   <Header />

//   <main className="pt-12 px-4 sm:px-6">
//     <div className="max-w-[1140px] mx-auto">
//       {/* Hero Section: Left & Right Layout */}
//       <section className="pt-24 pb-24 grid md:grid-cols-2 gap-10 items-start mb-20">
//         <div>
//           {/* Back Link */}
//           <Link
//             to="/resources/blog"
//             className="text-blue-600 text-sm flex items-center gap-1 mb-6 hover:underline"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Blogs
//           </Link>

//           {/* Category Badge */}
//           <Badge className="mb-2 text-xs">{post.category}</Badge>

//           {/* Title */}
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
//             {post.title}
//           </h1>

//           {/* Subtitle */}
//           <p className="text-lg text-gray-600 mb-6">{post.subtitle}</p>

//           {/* Author Info */}
//           <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
//             <span className="flex items-center gap-1">
//               <User className="w-4 h-4" /> {post.author}
//             </span>
//             <span className="flex items-center gap-1">
//               <Calendar className="w-4 h-4" /> {post.date}
//             </span>
//             <span className="flex items-center gap-1">
//               <Clock className="w-4 h-4" /> {post.readTime}
//             </span>
//           </div>
//         </div>

//         {/* Right Side - Hero Image */}
//         <div>
//           <img
//             src={post.heroImage}
//             alt={post.title}
//             className="rounded-lg w-full border border-gray-200"
//           />
//           <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4 text-sm">
//   {/* Left: Views + Listen */}
//   <div className="flex items-center gap-6 text-gray-600">
//     {/* Views */}
//     <div className="flex items-center gap-2">
//       <Eye className="w-4 h-4 text-gray-900" />
//       <span className="font-semibold text-gray-900">5151 Views</span>
//     </div>

//     {/* Divider */}
//     <span className="h-4 w-px bg-gray-300" />

//     {/* Listen */}
//     <div className="flex items-center gap-2">
//       <Headphones className="w-4 h-4 text-blue-600" />
//       <a href="#" className="text-blue-600 font-medium hover:underline">Listen</a>
//     </div>
//   </div>

//   {/* Right: Share */}
//   <div className="flex items-center gap-3">
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
//   </div>
// </div>


//         </div>
//       </section>

// {/* Combined Grid: TOC + Content */}
// <div className="grid lg:grid-cols-[16rem_1fr] gap-[88px]">
//   {/* TOC + Author */}
//   <aside className="hidden lg:block sticky top-24 self-start">
//     <h3 className="text-lg font-semibold mb-4 text-gray-800">Table of Contents</h3>
//     <ul className="space-y-3 border-l pl-4 text-sm text-gray-700 mb-10">
//       {post.toc.map((item, i) => (
//         <li key={i}>
//           <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-blue-600">
//             {item}
//           </a>
//         </li>
//       ))}
//     </ul>

//     {/* Author Info */}
//     <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm text-sm text-gray-700">
//       <h4 className="text-base font-bold text-gray-900 mb-3">Author</h4>
//       <div className="flex items-center gap-3 mb-2">
//         <img src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1697444343/sameer-pawar.jpg" alt="Sameer Pawar" className="w-10 h-10 rounded-full" />
//         <div>
//           <div className="font-semibold text-gray-900 flex items-center gap-1">
//             Sameer Pawar
//             <a href="https://linkedin.com/in/sameerpawar" target="_blank" rel="noopener noreferrer">
//               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-4 h-4" alt="LinkedIn" />
//             </a>
//           </div>
//           <div className="text-xs text-gray-500">Director Growth Marketing</div>
//         </div>
//       </div>
//       <p className="text-xs mb-4">
//         Sameer, with 20+ years in B2B/B2C, focuses on extracting clear, actionable insights from big data, driven by a passion for understanding Google's endless queries.
//       </p>
//       <p className="text-xs">
//         <strong className="text-gray-900">Article Reviewed By:</strong>{" "}
//         Arpit Srivastava{" "}
//         <a href="https://linkedin.com/in/arpitsrivastava" target="_blank" rel="noopener noreferrer">
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-4 h-4 inline ml-1" alt="LinkedIn" />
//         </a>
//       </p>
//     </div>
//   </aside>

//       {/* Main Article */}
//   <div className="max-w-[740px]">
//     <article className="prose prose-gray max-w-none">
//       {post.content.map((block, index) => renderContent(block, index))}
//     </article>

//     <div className="flex flex-wrap gap-2 mt-10">
//       {post.tags.map(tag => (
//         <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
//       ))}
//     </div>

//     <div className="mt-16 p-6 bg-gray-50 rounded-lg border text-center shadow-sm">
//       <h3 className="text-xl font-bold mb-2 text-gray-900">Ready to Transform Your Marketing Strategy?</h3>
//       <p className="text-gray-600 mb-4 text-sm">Let our experts help you implement cutting-edge solutions for your business.</p>
//       <Button className="bg-blue-600 text-white px-6 hover:bg-blue-700">Get Started Today</Button>
//     </div>

//     <div className="mt-12 pt-6 border-t border-gray-200 flex gap-4 items-start">
//       <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
//         <User className="text-blue-600" />
//       </div>
//       <div>
//         <p className="font-medium text-gray-900">{post.author}</p>
//         <p className="text-sm text-gray-600">Marketing automation specialist with 5+ years of experience helping brands grow through data-driven strategy.</p>
//       </div>
//     </div>
//   </div>
// </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default BlogPost;



// import { useParams, Navigate } from 'react-router-dom';
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
// import { Link } from "react-router-dom";

// // Blog data
// const blogPosts = {
//   "hubspot-chatgpt-connector": {
//     id: "hubspot-chatgpt-connector",
//     title: "HubSpot Just Changed the Game: Meet the Deep Research Connector with ChatGPT",
//     subtitle: "Discover how HubSpot's latest AI integration is revolutionizing marketing automation and customer research workflows.",
//     author: "Sneha Kumari",
//     date: "July 7, 2025",
//     readTime: "5 min read",
//     category: "Marketing Automation",
//     tags: ["HubSpot", "AI", "ChatGPT", "Marketing Automation"],
//     heroImage: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg",
//     toc: [
//       "The Game-Changing Integration",
//       "Real-World Applications",
//       "Implementation Strategy",
//     ],
//     content: [
//       {
//         type: "paragraph",
//         content: "The marketing automation landscape just experienced a seismic shift..."
//       },
//       {
//         type: "heading",
//         content: "The Game-Changing Integration"
//       },
//       {
//         type: "paragraph",
//         content: "This isn't just another AI tool integration..."
//       },
//       {
//         type: "list",
//         items: [
//           "Generate personalized content at scale",
//           "Conduct deep research using AI-powered analysis",
//           "Create audience-specific messaging",
//           "Automate journey mapping"
//         ]
//       },
//       {
//         type: "heading",
//         content: "Real-World Applications"
//       },
//       {
//         type: "paragraph",
//         content: "Early adopters are already seeing remarkable results..."
//       },
//       {
//         type: "image",
//         src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400",
//         alt: "HubSpot Dashboard",
//         caption: "AI-powered dashboard interface streamlines workflows"
//       },
//       {
//         type: "heading",
//         content: "Implementation Strategy"
//       },
//       {
//         type: "paragraph",
//         content: "Clean, structured data is essential for maximizing AI effectiveness..."
//       }
//     ]
//   }
// };

// const BlogPost = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const post = slug && blogPosts[slug];

//   if (!post) return <Navigate to="/resources/blog" replace />;

//   const renderContent = (item: any, index: number) => {
//     switch (item.type) {
//       case "paragraph":
//         return <p key={index} className="text-gray-700 leading-7 mb-6">{item.content}</p>;
//       case "heading":
//         return (
//           <h2
//             key={index}
//             id={item.content.replace(/\s+/g, '-').toLowerCase()}
//             className="text-2xl font-semibold text-gray-900 mt-10 mb-4"
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
//   <Header />

//   <main className="pt-12 px-4 sm:px-6">
//     <div className="max-w-[1140px] mx-auto">
//       {/* Hero Section: Left & Right Layout */}
//       <section className="pt-24 pb-24 grid md:grid-cols-2 gap-10 items-start mb-20">
//         <div>
//           {/* Back Link */}
//           <Link
//             to="/resources/blog"
//             className="text-blue-600 text-sm flex items-center gap-1 mb-6 hover:underline"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Blogs
//           </Link>

//           {/* Category Badge */}
//           <Badge className="mb-2 text-xs">{post.category}</Badge>

//           {/* Title */}
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
//             {post.title}
//           </h1>

//           {/* Subtitle */}
//           <p className="text-lg text-gray-600 mb-6">{post.subtitle}</p>

//           {/* Author Info */}
//           <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
//             <span className="flex items-center gap-1">
//               <User className="w-4 h-4" /> {post.author}
//             </span>
//             <span className="flex items-center gap-1">
//               <Calendar className="w-4 h-4" /> {post.date}
//             </span>
//             <span className="flex items-center gap-1">
//               <Clock className="w-4 h-4" /> {post.readTime}
//             </span>
//           </div>
//         </div>

//         {/* Right Side - Hero Image */}
//         <div>
//           <img
//             src={post.heroImage}
//             alt={post.title}
//             className="rounded-lg w-full border border-gray-200"
//           />
//         </div>
//       </section>

// {/* Combined Grid: TOC + Content */}
// <div className="grid lg:grid-cols-[16rem_1fr] gap-[88px]">
//   {/* TOC + Author */}
//   <aside className="hidden lg:block sticky top-24 self-start">
//     <h3 className="text-lg font-semibold mb-4 text-gray-800">Table of Contents</h3>
//     <ul className="space-y-3 border-l pl-4 text-sm text-gray-700 mb-10">
//       {post.toc.map((item, i) => (
//         <li key={i}>
//           <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-blue-600">
//             {item}
//           </a>
//         </li>
//       ))}
//     </ul>

//     {/* Author Info */}
//     <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm text-sm text-gray-700">
//       <h4 className="text-base font-bold text-gray-900 mb-3">Author</h4>
//       <div className="flex items-center gap-3 mb-2">
//         <img src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1697444343/sameer-pawar.jpg" alt="Sameer Pawar" className="w-10 h-10 rounded-full" />
//         <div>
//           <div className="font-semibold text-gray-900 flex items-center gap-1">
//             Sameer Pawar
//             <a href="https://linkedin.com/in/sameerpawar" target="_blank" rel="noopener noreferrer">
//               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-4 h-4" alt="LinkedIn" />
//             </a>
//           </div>
//           <div className="text-xs text-gray-500">Director Growth Marketing</div>
//         </div>
//       </div>
//       <p className="text-xs mb-4">
//         Sameer, with 20+ years in B2B/B2C, focuses on extracting clear, actionable insights from big data, driven by a passion for understanding Google's endless queries.
//       </p>
//       <p className="text-xs">
//         <strong className="text-gray-900">Article Reviewed By:</strong>{" "}
//         Arpit Srivastava{" "}
//         <a href="https://linkedin.com/in/arpitsrivastava" target="_blank" rel="noopener noreferrer">
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-4 h-4 inline ml-1" alt="LinkedIn" />
//         </a>
//       </p>
//     </div>
//   </aside>

//       {/* Main Article */}
//   <div className="max-w-[740px]">
//     <article className="prose prose-gray max-w-none">
//       {post.content.map((block, index) => renderContent(block, index))}
//     </article>

//     <div className="flex flex-wrap gap-2 mt-10">
//       {post.tags.map(tag => (
//         <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
//       ))}
//     </div>

//     <div className="mt-16 p-6 bg-gray-50 rounded-lg border text-center shadow-sm">
//       <h3 className="text-xl font-bold mb-2 text-gray-900">Ready to Transform Your Marketing Strategy?</h3>
//       <p className="text-gray-600 mb-4 text-sm">Let our experts help you implement cutting-edge solutions for your business.</p>
//       <Button className="bg-blue-600 text-white px-6 hover:bg-blue-700">Get Started Today</Button>
//     </div>

//     <div className="mt-12 pt-6 border-t border-gray-200 flex gap-4 items-start">
//       <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
//         <User className="text-blue-600" />
//       </div>
//       <div>
//         <p className="font-medium text-gray-900">{post.author}</p>
//         <p className="text-sm text-gray-600">Marketing automation specialist with 5+ years of experience helping brands grow through data-driven strategy.</p>
//       </div>
//     </div>
//   </div>
// </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default BlogPost;






// import { useParams, Navigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
// import { Link } from "react-router-dom";

// const BlogPost = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const [post, setPost] = useState<any>(null);
//   const [notFound, setNotFound] = useState(false);

//   useEffect(() => {
//     if (slug) {
//       fetch(`https://growthnatives.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.length > 0) {
//             setPost(data[0]);
//           } else {
//             setNotFound(true);
//           }
//         })
//         .catch(() => setNotFound(true));
//     }
//   }, [slug]);

//   if (notFound) return <Navigate to="/resources/blog" replace />;
//   if (!post) return <div className="p-10 text-center">Loading...</div>;

//   const author = post._embedded?.author?.[0]?.name || "Unknown Author";
//   const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/800x400";
//   const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
//     year: "numeric", month: "long", day: "numeric"
//   });
//   const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog";
//   const tags = post._embedded?.["wp:term"]?.[1]?.map((t: any) => t.name) || [];

//   return (
//     <div className="bg-white">
//       <Header />

//       <main className="pt-12 px-4 sm:px-6">
//         <div className="max-w-[1140px] mx-auto">

//           {/* Hero Section: Left & Right Layout */}
//           <section className="pt-24 pb-24 grid md:grid-cols-2 gap-10 items-start mb-20">
//             <div>
//               <Link to="/resources/blog" className="text-blue-600 text-sm flex items-center gap-1 mb-6 hover:underline">
//                 <ArrowLeft className="w-4 h-4" />
//                 Back to Blogs
//               </Link>

//               <Badge className="mb-2 text-xs">{category}</Badge>

//               <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
//                 {post.title.rendered}
//               </h1>

//               <p
//                 className="text-lg text-gray-600 mb-6"
//                 dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
//               />

//               <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
//                 <span className="flex items-center gap-1">
//                   <User className="w-4 h-4" /> {author}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Calendar className="w-4 h-4" /> {dateFormatted}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Clock className="w-4 h-4" /> {calculateReadTime(post.content.rendered)}
//                 </span>
//               </div>
//             </div>

//             <div>
//               <img src={featuredImage} alt={post.title.rendered} className="rounded-lg w-full border border-gray-200" />
//             </div>
//           </section>

//           {/* Grid: TOC + Content */}
//           <div className="grid lg:grid-cols-[16rem_1fr] gap-[88px]">
//             {/* TOC - optional, here left blank as content doesn't provide headings */}
//             <aside className="hidden lg:block sticky top-24 self-start">
//               <h3 className="text-lg font-semibold mb-4 text-gray-800">Table of Contents</h3>
//               <p className="text-sm text-gray-500">Not available from API.</p>

//               {/* Author Info */}
//               <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm text-sm text-gray-700 mt-10">
//                 <h4 className="text-base font-bold text-gray-900 mb-3">Author</h4>
//                 <div className="flex items-center gap-3 mb-2">
//                   <img src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1697444343/sameer-pawar.jpg" alt="Author" className="w-10 h-10 rounded-full" />
//                   <div>
//                     <div className="font-semibold text-gray-900 flex items-center gap-1">
//                       Sameer Pawar
//                       <a href="https://linkedin.com/in/sameerpawar" target="_blank" rel="noopener noreferrer">
//                         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-4 h-4" alt="LinkedIn" />
//                       </a>
//                     </div>
//                     <div className="text-xs text-gray-500">Director Growth Marketing</div>
//                   </div>
//                 </div>
//                 <p className="text-xs mb-4">
//                   Sameer, with 20+ years in B2B/B2C, focuses on extracting clear, actionable insights from big data, driven by a passion for understanding Google's endless queries.
//                 </p>
//                 <p className="text-xs">
//                   <strong className="text-gray-900">Article Reviewed By:</strong>{" "}
//                   Arpit Srivastava{" "}
//                   <a href="https://linkedin.com/in/arpitsrivastava" target="_blank" rel="noopener noreferrer">
//                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-4 h-4 inline ml-1" alt="LinkedIn" />
//                   </a>
//                 </p>
//               </div>
//             </aside>

//             {/* Main Content */}
//             <div className="max-w-[740px]">
//               <article
//                 className="prose prose-gray max-w-none"
//                 dangerouslySetInnerHTML={{ __html: post.content.rendered }}
//               />

//               <div className="flex flex-wrap gap-2 mt-10">
//                 {tags.map((tag: string) => (
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
//                   <p className="font-medium text-gray-900">{author}</p>
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

// export default BlogPost;

// // Utility to estimate read time
// function calculateReadTime(html: string) {
//   const plainText = html.replace(/<[^>]+>/g, "");
//   const words = plainText.trim().split(/\s+/).length;
//   return `${Math.ceil(words / 200)} min read`;
// }




import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

// Utility to estimate read time
function calculateReadTime(html: string) {
  const plainText = html.replace(/<[^>]+>/g, "");
  const words = plainText.trim().split(/\s+/).length;
  return `${Math.ceil(words / 200)} min read`;
}

// Utility to generate slug/id from heading text
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\&nbsp;/g, " ")      // Convert &nbsp; to space
    .replace(/\&amp;/g, "and")     // Convert &amp; to 'and'
    .replace(/[^a-z0-9\s-]/g, "")  // Remove all non-alphanumeric
    .trim()
    .replace(/\s+/g, "-");         // Replace spaces with hyphens
}

// Extract TOC entries and slugs
function extractTOC(html: string): { text: string; id: string }[] {
  const tocItems: { text: string; id: string }[] = [];
  const headingRegex = /<h2[^>]*>(.*?)<\/h2>/gi;
  let match;

  while ((match = headingRegex.exec(html)) !== null) {
    const raw = match[1];
    const text = raw.replace(/<[^>]*>/g, "").trim(); // Strip HTML tags inside <h2>
    const id = slugify(text);
    tocItems.push({ text, id });
  }

  return tocItems;
}

// Inject IDs into all <h2> tags
function addHeadingAnchors(html: string): string {
  return html.replace(/<h2[^>]*>(.*?)<\/h2>/gi, (match, content) => {
    const plainText = content.replace(/<[^>]*>/g, "").trim();
    const id = slugify(plainText);
    return `<h2 id="${id}">${content}</h2>`;
  });
}


const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);
  const [toc, setToc] = useState<{ text: string; id: string }[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>('');

useEffect(() => {
  if (slug) {
    fetch(`https://growthnatives.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          const contentHTML = data[0].content.rendered;
          const tocData = extractTOC(contentHTML);
          setPost(data[0]);
          setToc(tocData);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true));
  }
}, [slug]);

// Scroll spy effect
useEffect(() => {
  if (toc.length === 0) return;

  const handleScroll = () => {
    const headings = toc.map(item => document.getElementById(item.id)).filter(Boolean);
    const scrollPosition = window.scrollY + 150; // 150px offset for header

    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i];
      if (heading && heading.offsetTop <= scrollPosition) {
        setActiveHeading(heading.id);
        break;
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Set initial active heading

  return () => window.removeEventListener('scroll', handleScroll);
}, [toc]);

// Handle smooth scroll with offset
const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -120; // 120px offset from top
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};


  if (notFound) return <Navigate to="/resources/blog" replace />;
  if (!post) return <div className="p-10 text-center">Loading...</div>;

  const author = post._embedded?.author?.[0]?.name || "Unknown Author";
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/800x400";
  const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  });
  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog";
  const tags = post._embedded?.["wp:term"]?.[1]?.map((t: any) => t.name) || [];

  return (
    <div className="bg-white">
      <Header />

      <main className="pt-12 px-4 sm:px-6">
        <div className="max-w-[1140px] mx-auto">

          {/* Hero Section */}
          <section className="pt-24 pb-24 grid md:grid-cols-2 gap-10 items-start mb-20">
            <div>
              <Link to="/resources/blog" className="text-blue-600 text-sm flex items-center gap-1 mb-6 hover:underline">
                <ArrowLeft className="w-4 h-4" />
                Back to Blogs
              </Link>

              <Badge className="mb-2 text-xs">{category}</Badge>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                {post.title.rendered}
              </h1>

              <p
                className="text-lg text-gray-600 mb-6"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" /> {author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {dateFormatted}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {calculateReadTime(post.content.rendered)}
                </span>
              </div>
            </div>

            <div>
              <img src={featuredImage} alt={post.title.rendered} className="rounded-lg w-full border border-gray-200" />
            </div>
          </section>

          {/* Grid: TOC + Content */}
          <div className="grid pb-24 lg:grid-cols-[16rem_1fr] gap-[88px]">
            {/* TOC */}
            <aside className="hidden lg:block sticky top-24 self-start">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Table of Contents</h3>
              {toc.length > 0 ? (
                <ul className="space-y-3 border-l pl-4 text-sm text-gray-700 mb-10">
                  {toc.map((item : any, i) => (
                    <li key={i}>
                      <a 
                        href={`#${item.id}`}
                        onClick={(e) => handleTocClick(e, item.id)}
                        className={`block py-1 transition-colors duration-200 ${
                          activeHeading === item.id 
                            ? 'text-blue-600 font-medium border-l-2 border-blue-600 -ml-[1px] pl-3' 
                            : 'hover:text-blue-600'
                        }`}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No headings found.</p>
              )}
              {/* Author Info */}
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm text-sm text-gray-700 mt-10">
                <h4 className="text-base font-bold text-gray-900 mb-3">Author</h4>
                <div className="flex items-center gap-3 mb-2">
                  <img src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1697444343/sameer-pawar.jpg" alt="Author" className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-semibold text-gray-900 flex items-center gap-1">
                      Sameer Pawar
                      <a href="https://linkedin.com/in/sameerpawar" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-4 h-4" alt="LinkedIn" />
                      </a>
                    </div>
                    <div className="text-xs text-gray-500">Director Growth Marketing</div>
                  </div>
                </div>
                <p className="text-xs mb-4">
                  Sameer, with 20+ years in B2B/B2C, focuses on extracting clear, actionable insights from big data, driven by a passion for understanding Google's endless queries.
                </p>
                <p className="text-xs">
                  <strong className="text-gray-900">Article Reviewed By:</strong>{" "}
                  Arpit Srivastava{" "}
                  <a href="https://linkedin.com/in/arpitsrivastava" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-4 h-4 inline ml-1" alt="LinkedIn" />
                  </a>
                </p>
              </div>
            </aside>

            {/* Main Content */}
            <div className="max-w-[740px]">
              <article
                className="prose prose-gray max-w-none"
                dangerouslySetInnerHTML={{ __html: addHeadingAnchors(post.content.rendered) }}
              />

              <div className="flex flex-wrap gap-2 mt-10">
                {tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </div>

              <div className="mt-16 p-6 bg-gray-50 rounded-lg border text-center shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Ready to Transform Your Marketing Strategy?</h3>
                <p className="text-gray-600 mb-4 text-sm">Let our experts help you implement cutting-edge solutions for your business.</p>
                <Button className="bg-blue-600 text-white px-6 hover:bg-blue-700">Get Started Today</Button>
              </div>

              <div className="mt-12 pt-6 border-t border-gray-200 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{author}</p>
                  <p className="text-sm text-gray-600">Marketing automation specialist with 5+ years of experience helping brands grow through data-driven strategy.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
