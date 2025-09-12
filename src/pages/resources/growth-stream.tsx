import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import ContactCta from "@/components/ui/component_6";
import RecentResourcesSection from "@/components/ui/component_growth_stream";
import { SITE_CTA } from "@/components/SITE_CTAs";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import { Calendar } from "lucide-react";
import { API_BASE_URL } from '../../../apiconfig';
interface ResourceItem {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime?: string;
  image: string;
  slug: string;
  list?: string;
  category?: string;
}
const decodeHTML = (html: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};
const ResourcesIndex = () => {
  const [featured, setFeatured] = useState<ResourceItem | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch ONE featured ebook from WP API
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);
        
        const res = await fetch(
          `${API_BASE_URL}/wp-json/wp/v2/growth-stream?per_page=1&_embed`,
          { signal: controller.signal }
        );
        clearTimeout(timeoutId);
        
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (data.length > 0) {
          const item = data[0];
          const image =
            item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
          const category =
            item._embedded?.["wp:term"]?.[0]?.[0]?.name || "General";

          const mapped: ResourceItem = {
            id: item.id,
            title: decodeHTML(item.title.rendered),
            subtitle: decodeHTML(item.excerpt.rendered),
            author: "", // can be filled from WP user if needed
            date: new Date(item.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            image,
            slug: item.slug,
            category,
          };

          setFeatured(mapped);
        }
      } catch (err) {
        console.error("Error fetching featured resource", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SmartBreadcrumb />

     <main className="pt-0">
  {/* DIY Hero Featured Section */}
  <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    {/* Left copy - dynamic from API */}
    <div>
      {!loading && featured && (
        <>
          <h1 className="text-4xl font-bold text-blue-600 mb-6 leading-tight">
            {featured.title}
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <span dangerouslySetInnerHTML={{ __html: featured.subtitle }} />
          </p>
        </>
      )}

      <SITE_CTA
        variant="secondary"
        text="Talk to an Expert"
        href="/contact-us"
        size="md"
      />
    </div>

    {/* Right card - dynamic featured ebook */}
    {!loading && featured && (
      <Link to={`/growth-stream/${featured.slug}`} className="block">
        <Card className="bg-white overflow-hidden transition-all group cursor-pointer hover:shadow-xl border border-gray-100">
          <div className="relative h-56 overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <span className="text-white font-semibold text-sm flex items-center gap-1">
                Read more <span className="text-lg">›</span>
              </span>
            </div>
          </div>

          <CardContent className="bg-white p-6">
            <div className="flex flex-wrap items-center text-xs text-gray-500 mb-4 gap-x-4 gap-y-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {featured.date}
              </span>
            </div>

            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 text-[1.05rem] leading-tight">
              {featured.title}
            </h3>
          </CardContent>
        </Card>
      </Link>
    )}
  </section>

  {/* Recent resources */}
  <RecentResourcesSection />

  {/* CTA */}
  <ContactCta
    heading="Let's Build Your Next Growth Chapter"
          subtext="With AI at the core and clarity at every step, we're here to make growth feel less chaotic-and a whole lot more scalable."
    buttonLabel="Talk to an Expert"
    buttonLink="/contact-us"
  />
</main>


      <Footer />
    </div>
  );
};

export default ResourcesIndex;

