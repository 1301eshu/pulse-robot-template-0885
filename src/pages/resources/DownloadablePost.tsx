// src/pages/DownloadablePost.tsx
import { useParams, Navigate, Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import HubSpotForm from '@/components/HubSpotForm';
import { Helmet } from "react-helmet-async";
import { API_BASE_URL } from '../../../apiconfig';
import { handleApiDomainReplacement } from '@/lib/replaceApiDomain';

type WPPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  acf?: {
    category?: string;
    categoryTag?: string;
    heroImage?: string;
    pdf_url?: string;
  };
  downloadable_assets_file?: {
    url?: string;
    title?: string;
  };
};

const DownloadablePost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WPPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [headTags, setHeadTags] = useState<JSX.Element[]>([]);

  // Fetch post data
  useEffect(() => {
     handleApiDomainReplacement();
    if (!slug) return;
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/wp-json/wp/v2/downloadable-assets?slug=${slug}&_embed`
        );
        const data: WPPost[] = await res.json();
        setPost(data.length ? data[0] : null);
      } catch (err) {
        console.error("Error fetching post:", err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  // Fetch Rank Math meta
  useEffect(() => {
    if (!slug) return;

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

          doc.head.childNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const el = node as HTMLElement;
              switch (el.tagName.toLowerCase()) {
                case "title":
                  elements.push(
                    <title key={elements.length}>{el.textContent}</title>
                  );
                  break;
                case "meta":
                  elements.push(
                    <meta
                      key={elements.length}
                      {...Object.fromEntries(
                        [...el.attributes].map((attr) => [attr.name, attr.value])
                      )}
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

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!post) return <Navigate to="/downloadable-assets" replace />;

  return (
    <div className="bg-white">
      <Helmet>{headTags}</Helmet>
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
              {post.acf?.categoryTag && (
                <Badge className="mb-2 text-xs">{post.acf.categoryTag}</Badge>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

            </div>

            {/* Form Column */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <HubSpotForm
                portalId="7118070"
                formId="cb77c399-402e-4385-a217-68ebf1d83900"
                region="na1"
                assetFieldName="downloadable_assets_url"
                assetFieldNameLabel="downloadable_assets_name"
                assetLabel={post.downloadable_assets_file?.title || ""}
                assetURL={post.downloadable_assets_file?.url || ""}
              />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 grid gap-16 py-16">
          <article
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* CTA inside container */}
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 sm:p-10 text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
              Ready to Improve Your UX?
            </h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base max-w-2xl mx-auto">
              Download the full checklist and start optimizing your digital experiences today.
            </p>
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
      </main>
      <Footer />
    </div>
  );
};

export default DownloadablePost;
