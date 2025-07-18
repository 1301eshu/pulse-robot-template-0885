import { useParams, Navigate } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar, Eye, Headphones, } from "lucide-react";
import { Link } from "react-router-dom";

// Blog data
const blogPosts = {
  "hubspot-chatgpt-connector": {
    id: "hubspot-chatgpt-connector",
    title: "HubSpot Just Changed the Game: Meet the Deep Research Connector with ChatGPT",
    subtitle: "Discover how HubSpot's latest AI integration is revolutionizing marketing automation and customer research workflows.",
    author: "Sneha Kumari",
    date: "July 7, 2025",
    readTime: "5 min read",
    category: "Marketing Automation",
    tags: ["HubSpot", "AI", "ChatGPT", "Marketing Automation"],
    heroImage: "https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg",
    toc: [
      "The Game-Changing Integration",
      "Real-World Applications",
      "Implementation Strategy",
    ],
    content: [
      {
        type: "paragraph",
        content: "The marketing automation landscape just experienced a seismic shift..."
      },
      {
        type: "heading",
        content: "The Game-Changing Integration"
      },
      {
        type: "paragraph",
        content: "This isn't just another AI tool integration..."
      },
      {
        type: "list",
        items: [
          "Generate personalized content at scale",
          "Conduct deep research using AI-powered analysis",
          "Create audience-specific messaging",
          "Automate journey mapping"
        ]
      },
      {
        type: "heading",
        content: "Real-World Applications"
      },
      {
        type: "paragraph",
        content: "Early adopters are already seeing remarkable results..."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400",
        alt: "HubSpot Dashboard",
        caption: "AI-powered dashboard interface streamlines workflows"
      },
      {
        type: "heading",
        content: "Implementation Strategy"
      },
      {
        type: "paragraph",
        content: "Clean, structured data is essential for maximizing AI effectiveness..."
      }
    ]
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug && blogPosts[slug];

  if (!post) return <Navigate to="/resources/blog" replace />;

  const renderContent = (item: any, index: number) => {
    switch (item.type) {
      case "paragraph":
        return <p key={index} className="text-gray-700 leading-7 mb-6">{item.content}</p>;
      case "heading":
        return (
          <h2
            key={index}
            id={item.content.replace(/\s+/g, '-').toLowerCase()}
            className="text-2xl font-semibold text-gray-900 mt-10 mb-4"
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
  <Header />

  <main className="pt-12 px-4 sm:px-6">
    <div className="max-w-[1140px] mx-auto">
      {/* Hero Section: Left & Right Layout */}
      <section className="pt-24 pb-24 grid md:grid-cols-2 gap-10 items-start mb-20">
        <div>
          {/* Back Link */}
          <Link
            to="/resources/blog"
            className="text-blue-600 text-sm flex items-center gap-1 mb-6 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
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
          <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4 text-sm">
  {/* Left: Views + Listen */}
  <div className="flex items-center gap-6 text-gray-600">
    {/* Views */}
    <div className="flex items-center gap-2">
      <Eye className="w-4 h-4 text-gray-900" />
      <span className="font-semibold text-gray-900">5151 Views</span>
    </div>

    {/* Divider */}
    <span className="h-4 w-px bg-gray-300" />

    {/* Listen */}
    <div className="flex items-center gap-2">
      <Headphones className="w-4 h-4 text-blue-600" />
      <a href="#" className="text-blue-600 font-medium hover:underline">Listen</a>
    </div>
  </div>

  {/* Right: Share */}
  <div className="flex items-center gap-3">
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
  </div>
</div>


        </div>
      </section>

{/* Combined Grid: TOC + Content */}
<div className="grid lg:grid-cols-[16rem_1fr] gap-[88px]">
  {/* TOC + Author */}
  <aside className="hidden lg:block sticky top-24 self-start">
    <h3 className="text-lg font-semibold mb-4 text-gray-800">Table of Contents</h3>
    <ul className="space-y-3 border-l pl-4 text-sm text-gray-700 mb-10">
      {post.toc.map((item, i) => (
        <li key={i}>
          <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-blue-600">
            {item}
          </a>
        </li>
      ))}
    </ul>

    {/* Author Info */}
    <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm text-sm text-gray-700">
      <h4 className="text-base font-bold text-gray-900 mb-3">Author</h4>
      <div className="flex items-center gap-3 mb-2">
        <img src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1697444343/sameer-pawar.jpg" alt="Sameer Pawar" className="w-10 h-10 rounded-full" />
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
      <Button className="bg-blue-600 text-white px-6 hover:bg-blue-700">Get Started Today</Button>
    </div>

    <div className="mt-12 pt-6 border-t border-gray-200 flex gap-4 items-start">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
        <User className="text-blue-600" />
      </div>
      <div>
        <p className="font-medium text-gray-900">{post.author}</p>
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
