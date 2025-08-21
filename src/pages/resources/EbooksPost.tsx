// src/pages/EbookDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubSpotForm from "@/components/HubSpotForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { API_BASE_URL } from "../../../apiconfig";

interface Ebook {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  acf?: {
    categoryTag?: string;
    author?: string;
    pdf_url?: string;
  };
}

const EbookDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [ebook, setEbook] = useState<Ebook | null>(null);
  const [loading, setLoading] = useState(true);
  const [headTags, setHeadTags] = useState<JSX.Element[]>([]);

  // Fetch Ebook
  useEffect(() => {
    if (!slug) return;

    fetch(`https://growthnatives.com/wp-json/wp/v2/ebooks?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setEbook(data[0]); // WP returns array when filtering by slug
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching ebook:", err);
        setLoading(false);
      });
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
                case "link":
                  elements.push(
                    <link
                      key={elements.length}
                      {...Object.fromEntries(
                        [...el.attributes].map((attr) => [attr.name, attr.value])
                      )}
                    />
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

  if (loading) return <p>Loading ebook...</p>;
  if (!ebook) return <p>Ebook not found.</p>;

  return (
    <div className="bg-white">
      <Helmet>{headTags}</Helmet>
      <Header />
      <main className="pt-0 pb-0">
        <section className="bg-blue-50 py-16">
          <div className="max-w-[1140px] mx-auto pt-20 pb-10 px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Link
                to="/ebooks"
                className="text-blue-600 text-sm flex items-center gap-1 mb-6 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Ebooks
              </Link>

              {ebook.acf?.categoryTag && (
                <Badge className="mb-2 text-xs">{ebook.acf.categoryTag}</Badge>
              )}

              <h1
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug"
                dangerouslySetInnerHTML={{ __html: ebook.title.rendered }}
              />

              <p className="text-gray-700 max-w-lg">
                {ebook.excerpt?.rendered.replace(/<[^>]+>/g, "")}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <HubSpotForm
                portalId="7118070"
                formId="936a6094-5911-42b5-af43-59918fd008a0"
                region="na1"
              />
            </div>
          </div>
        </section>

        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 grid gap-16 py-16">
          <article
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: ebook.content.rendered }}
          />

          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 sm:p-10 text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
              Ready to Improve Your UX?
            </h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base max-w-2xl mx-auto">
              Download the full checklist and start optimizing your digital
              experiences today.
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

export default EbookDetail;
