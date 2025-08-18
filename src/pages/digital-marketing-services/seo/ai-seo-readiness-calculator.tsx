import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from '@/components/ui/component_12';
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";

const L3Template = () => {
  // FAQs (from AI SEO Readiness Calculator page)
  const faqs = [
    {
      q: "Why check your AI SEO visibility score?",
      a: "To rank in AI‑powered search results, get cited in LLM‑generated answers, make your content AI‑friendly, and plan for AI‑driven SEO trends.",
    },
    {
      q: "What does AI‑driven SEO help you achieve?",
      a: "It helps you harness AI SEO tools and data‑driven strategies to improve search performance, streamline content optimization, and stay ahead of algorithm updates.",
    },
    {
      q: "How does content style affect AI visibility?",
      a: "Natural, conversational content that directly answers audience questions improves how AI assistants and search features parse and surface your pages.",
    },
    {
      q: "What site elements aid AI understanding?",
      a: "Clear HTML structure and structured data (e.g., schema.org for FAQs and products) help algorithms accurately parse and present your content.",
    },
    {
      q: "How do freshness and authority impact results?",
      a: "Regularly updated, authoritative content and consistent brand information across the web increase your chances of appearing in AI‑driven answers.",
    },
  ];

  // Recent Blogs (kept same structure)
  const recentResources: ResourceItem[] = [
    {
      title: "Choosing the Right CMS: WordPress, Drupal, or Shopify?",
      subtitle: "How to match your business goals with the right platform and ecosystem.",
      author: "Growth Natives Editorial",
      date: "May 8, 2024",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=400",
      slug: "choose-right-cms",
    },
    {
      title: "Headless CMS 101: Faster Content at Scale",
      subtitle:
        "Decouple your stack to deliver content to every channel, from web to mobile.",
      author: "Growth Natives Editorial",
      date: "Apr 18, 2024",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400",
      slug: "headless-cms-basics",
    },
    {
      title: "Migrating to a New CMS Without Losing SEO",
      subtitle: "A step-by-step playbook to preserve rankings and performance.",
      author: "Growth Natives Editorial",
      date: "Mar 27, 2024",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&h=400",
      slug: "cms-migration-seo",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <ContactWithBg
        heading="Supercharge Your SEO "
        highlight="Strategy With AI Intelligence"
        description="AI-driven SEO is transforming how businesses rank and grow online. Our experts will help you harness AI SEO tools and data-driven strategies to improve search performance, streamline content optimization, and stay ahead of algorithm updates."
      />

      {/* (No explicit stats on the source page; leaving the section present but empty would break UI.
          Commenting out to keep content faithful to the source.)
      <EditableStatSection
        stats={[]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />
      */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Section Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            AI SEO Readiness: Optimization That Works Smarter
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Plug AI content optimization platforms into your SEO engine to turn your website into a search magnet.
          </p>

          {/* Service/Feature Cards from page content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Scalable Content Intelligence",
                desc:
                  "Generate, refine, and optimize content at scale with AI‑powered workflows that accelerate production and quality.",
                bullets: [
                  "Streamline content creation with AI assistance",
                  "Refine drafts based on real‑time insights",
                  "Scale publishing while maintaining consistency",
                ],
              },
              {
                title: "Smarter Keyword Targeting",
                desc:
                  "Leverage machine learning to identify high‑value keywords and align with how people naturally ask questions.",
                bullets: [
                  "Target conversational, intent‑rich queries",
                  "Prioritize opportunities with strongest potential",
                  "Adapt targeting as search behavior shifts",
                ],
              },
              {
                title: "Predictive Insights",
                desc:
                  "Spot trends and algorithm shifts with AI forecasting so you can act before competitors do.",
                bullets: [
                  "Monitor changes with AI‑assisted audits",
                  "Anticipate ranking volatility",
                  "Guide roadmap with forward‑looking data",
                ],
              },
              {
                title: "Why Check Your AI SEO Visibility Score?",
                desc:
                  "Ensure your brand shows up where AI answers are formed and surfaced.",
                bullets: [
                  "Rank in AI‑powered search results",
                  "Get cited in LLM‑generated answers",
                  "Make your content AI‑friendly",
                  "Plan for AI‑driven SEO trends",
                ],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-xl p-8 text-left shadow-sm transition-all duration-300 group-hover/card-container:opacity-40 hover:!opacity-100"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#0F172A]">
                  {card.title}
                </h3>
                <p className="text-gray-700 mb-4">{card.desc}</p>
                <ul className="space-y-2 text-blue-600">
                  {card.bullets.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span>✔️</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        title="Our Customers"
        description="At Growth Natives, we have served valuable customers and established strong partnerships with them whose skills and expertise complement and enrich our own."
      />

      <AwardsSection />

      {/* FAQs */}
      <FaqSection title="FAQs" faqs={faqs} />

      {/* Recent Blogs (left as-is structurally) */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to best practices and resources from our experts."
          subTabs={[]}
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="Don’t Let AI Leave You Behind—Boost Your SEO Visibility Now!"
        subtext="Whether you’re looking to improve rankings, boost engagement, or stay ahead of AI‑driven search changes, we’re here to help."
        buttonLabel="Get In Touch"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

