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



import { useParams, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useLayoutEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import BlogInteractionBar from "@/components/BlogInteractionBar";
import authorsRaw from "../../assets/Author.json";
import { API_BASE_URL } from '../../../apiconfig';
import { handleApiDomainReplacement } from '@/lib/replaceApiDomain';


type Author = {
  name: string;
  bio: string;
  title: string;
  linkedin?: string;
  linkedin_url?: string;
  image?: string;
};
const authors: Author[] = authorsRaw.map((a: any) => ({
  title: "",
  ...a,
}));


const decodeHTML = (html: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};
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
function cleanContent(html: string) {
  // Remove inline color styles
  return html.replace(/style="[^"]*color:[^";]+;?[^"]*"/gi, "");
}

// Extract TOC entries and slugs
function extractTOC(html: string): { text: string; id: string }[] {
  const tocItems: { text: string; id: string }[] = [];
  const headingRegex = /<h2[^>]*>(.*?)<\/h2>/gi;
  let match;

  while ((match = headingRegex.exec(html)) !== null) {
    const raw = match[1];
    let text = raw.replace(/<[^>]*>/g, "")  // strip HTML tags
      .replace(/\&nbsp;/g, " ") // replace &nbsp;
      .trim();
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
  const { slug, category } = useParams<{ slug: string; category?: string }>();
  const [post, setPost] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);
  const [toc, setToc] = useState<{ text: string; id: string }[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>('');

  const [headTags, setHeadTags] = useState<JSX.Element[]>([]);
  const [rankMathAuthor, setRankMathAuthor] = useState<string | null>(null);


  // Process RankMath SEO data from static JSON
  useLayoutEffect(() => {
    if (!post?.rankmath_head) return;

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(post.rankmath_head, "text/html");
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
                  url.hostname = "growthnatives.com";
                  url.protocol = "https:";
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
                  dangerouslySetInnerHTML={{ __html: el.textContent || "" }}
                />
              );
              break;
            default:
              break;
          }
        }
      });

      setHeadTags(elements);
    } catch (error) {
      console.error("Error processing RankMath data:", error);
    }
  }, [post]);

  // Load blog data from static JSON files
  useLayoutEffect(() => {
    const loadBlogData = async () => {
      if (!slug) {
        setNotFound(true);
        return;
      }

      try {
        // ✅ Load from root-level JSON files (WordPress API export format)
        const blogData = await import(`../../../${slug}.json`);
        const postData = blogData.default || blogData;

        // Process content (WordPress format: content.rendered)
        const rawContent = postData.content?.rendered || postData.content || "";
        const tocData = extractTOC(rawContent);
        setToc(tocData);

        const contentWithAnchors = addHeadingAnchors(rawContent);
        const cleanedContent = cleanContent(contentWithAnchors);

        // Set post data with all fields including SEO data from seo_meta.raw_head
        setPost({
          ...postData,
          content: { rendered: cleanedContent },
          rankmath_head: postData.seo_meta?.raw_head || '',
        });
        
        setNotFound(false);
      } catch (error) {
        console.error("Error loading blog data:", error);
        setNotFound(true);
      }
    };

    loadBlogData();
  }, [slug]);


  // useEffect(() => {
  //   handleApiDomainReplacement();
  //   if (slug) {
  //     fetch(`${API_BASE_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.length > 0) {
  //           const contentHTML = data[0].content.rendered;
  //           const tocData = extractTOC(contentHTML);
  //           setPost(data[0]);
  //           setToc(tocData);
  //         } else {
  //           setNotFound(true);
  //         }
  //       })
  //       .catch(() => setNotFound(true));
  //   }
  // }, [slug]);

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


  if (notFound) return <Navigate to="/blogs" replace />;
  if (!post) return <div className="p-10 text-center">Loading...</div>;

  // const author = post._embedded?.author?.[0]?.name || "Unknown Author";
  const author = rankMathAuthor || post._embedded?.author?.[0]?.name || "Unknown Author";
  const matchedAuthor = authors.find(a => a.name.toLowerCase() === author.toLowerCase());
  const displayAuthor = matchedAuthor || { name: author, bio: "", title: "", image: "", linkedin: null };
  const reviewerName = post.reviewer_name;
  const reviewerLinkedin = post.reviewer_linkedin;
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/800x400";
  const postCategory = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog";
  const tags = post._embedded?.["wp:term"]?.[1]?.map((t: any) => t.name) || [];
  const location = useLocation();
  const backLink = location.state?.from || "/blogs"; // default to blogs
  const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  });

  const updatedDateFormatted = new Date(post.modified).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  });

  return (
    <div className="bg-white">
      <Helmet>{headTags}</Helmet>

      <Header />
      <main className="pt-12 px-4 sm:px-6">
        <div className="max-w-[1140px] mx-auto">
          {/* Hero Section */}
          <section className="pt-24 grid lg:grid-cols-2 gap-10 items-start   mb-20">
            <div>
              <Link to="/blogs" className="text-blue-600 text-sm flex items-center gap-1 mb-6 hover:underline">
                <ArrowLeft className="w-4 h-4" />
                Back to Blogs
              </Link>

              <Badge className="mb-2 text-xs">{postCategory}</Badge>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                {decodeHTML(post.title.rendered)}
              </h1>

              {/* <p
                className="text-lg text-gray-600 mb-6"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              /> */}

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" /> {author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> Published on: {dateFormatted}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> Updated on: {updatedDateFormatted}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {calculateReadTime(post.content.rendered)}
                </span>
              </div>

            </div>

            <div>
              <img src={featuredImage} alt={post.title.rendered} className="rounded-lg w-full border border-gray-200" />
              <BlogInteractionBar
                content={post.content.rendered}
                title={decodeHTML(post.title.rendered)}
                url={window.location.href}
                views={1247} // This should come from your database
                onViewIncrement={() => {
                  // This will require Supabase connection to store view counts
                  console.log('View incremented');
                }}
              />
            </div>
          </section>

          {/* Grid: TOC + Content */}
          <div className="grid pb-24 gap-[38px] lg:grid-cols-[16rem_1fr] lg:gap-[88px] mb-10">
            {/* TOC */}
            {/* Author for mobile (inline, not sticky) */}
            <div className="block lg:hidden mb-6 border border-gray-200 rounded-lg bg-white shadow-sm text-sm text-gray-700 p-4">
              <h4 className="text-base font-bold text-gray-900 mb-3">Author</h4>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  {displayAuthor.image ? (
                    <img
                      src={displayAuthor.image}
                      className="w-full h-full object-cover rounded-full"
                      alt={displayAuthor.name}
                    />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.67 0 4.8-2.13 4.8-4.8S14.67 2.4 12 2.4 7.2 4.53 7.2 7.2 9.33 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 flex items-center gap-1">
                    {displayAuthor.name}
                    {displayAuthor.linkedin && (
                      <a href={displayAuthor.linkedin} target="_blank" rel="noopener noreferrer">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                          className="w-4 h-4"
                          alt="LinkedIn"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {displayAuthor.bio && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold mb-2 text-gray-800">{displayAuthor.title}</h3>
                  <p className="text-xs mb-4">{displayAuthor.bio}</p>
                </div>
              )}
            </div>

            {/* Sidebar for desktop */}
            <aside className="hidden lg:block sticky top-24 self-start">
              {/* Author Info */}
              <div className="p-4 mb-10 border border-gray-200 rounded-lg bg-white shadow-sm text-sm text-gray-700">
                <h4 className="text-base font-bold text-gray-900 mb-3">Author</h4>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {displayAuthor.image ? (
                      <img
                        src={displayAuthor.image}
                        className="w-full h-full object-cover rounded-full"
                        alt={displayAuthor.name}
                      />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.67 0 4.8-2.13 4.8-4.8S14.67 2.4 12 2.4 7.2 4.53 7.2 7.2 9.33 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    )}
                  </div>

                  <div>
                    <div className="font-semibold text-gray-900 flex items-center gap-1">
                      {displayAuthor.name}
                      {displayAuthor.linkedin && (
                        <a href={displayAuthor.linkedin} target="_blank" rel="noopener noreferrer">
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                            className="w-4 h-4"
                            alt="LinkedIn"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {displayAuthor.bio && (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold mb-2 text-gray-800">{displayAuthor.title}</h3>
                    <p className="text-xs mb-4">{displayAuthor.bio}</p>
                    <p className="text-xs">
                      <strong className="text-gray-900">Article Reviewed By:</strong>{" "}
                      {reviewerName}{" "}
                      <a href={reviewerLinkedin} target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-4 h-4 inline ml-1" alt="LinkedIn" />
                      </a>
                    </p>
                  </div>
                )}
              </div>

              {/* Table of Contents */}
              {toc.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Table of Contents</h3>
                  <ul className="space-y-3 border-l pl-4 text-sm text-gray-700 mb-10">
                    {toc.map((item, i) => (
                      <li key={i}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => handleTocClick(e, item.id)}
                          className={`block py-1 transition-colors duration-200 ${activeHeading === item.id
                            ? 'text-blue-600 font-medium border-l-2 border-blue-600 -ml-[1px] pl-3'
                            : 'hover:text-blue-600'
                            }`}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </aside>

            {/* Main Content */}
            <div className="max-w-[100%] lg:max-w-[740px]">
              <article
                className="prose prose-gray max-w-none text-black"
                dangerouslySetInnerHTML={{ __html: addHeadingAnchors(cleanContent(post.content.rendered)) }}
              />


              {/* <div className="flex flex-wrap gap-2 mt-10">
                {tags.map((tag: string) => (
                  <Badge key={tag} variant="default" className="text-xs">{tag}</Badge>
                ))}
              </div> */}

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

export default BlogPost;

