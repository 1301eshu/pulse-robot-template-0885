// Source: :contentReference[oaicite:0]{index=0} | Mapping guide: :contentReference[oaicite:1]{index=1}
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
  // FAQs (from GA4 Parallel Tracking page) :contentReference[oaicite:2]{index=2}
  const faqs = [
    {
      q: "What is GA4 Parallel Tracking, and how does it differ from native BigQuery export?",
      a: "Parallel Tracking streams every event to your own warehouse endpoint independently from GA4’s daily BigQuery export process. Native export is capped at one million events per day, and only those events are sent into the daily table. Parallel Tracking duplicates every request, so you retain full data beyond GA4’s limits and without sampling.",
    },
    {
      q: "How does Parallel Tracking solve GA4 quota and sampling issues?",
      a: "Parallel Tracking provides access to raw, hit‑level data streamed in real time with no event volume constraints. You avoid GA4’s daily export cap and any sampling. You also maintain full event fidelity, including custom parameters.",
    },
    {
      q: "Can Parallel Tracking handle more than 500 distinct event names?",
      a: "Yes. The 500‑event‑name limit only applies to GA4 reporting quotas. Parallel Tracking duplicates all events to your warehouse without enforcing those property-level GA4 limits.",
    },
    {
      q: "Will Parallel Tracking address data thresholding or suppression in GA4?",
      a: "Yes. Since you receive raw, unaggregated event data directly in your warehouse, you bypass GA4’s thresholding or suppression rules used in demographic or user‑level reports.",
    },
    {
      q: "Is Parallel Tracking compatible with GTM, server‑side tagging, and gtag.js?",
      a: "Absolutely. You can implement Parallel Tracking via client‑side GTM, server‑side GTM, or direct gtag.js code. It runs alongside your existing GA4 implementation and sends events in parallel.",
    },
    {
      q: "What setup changes are required to enable Parallel Tracking?",
      a: "You need to configure a parallel dispatch endpoint in your tagging setup. This may involve updating your GTM tags or SDK configuration to fire events to both GA4 and your warehouse. Implementation is lightweight and usually requires support from your tag management or data pipeline vendor team.",
    },
    {
      q: "How soon is data available for reporting?",
      a: "With Parallel Tracking, the data arrives in your warehouse in near real time, typically within seconds. That lets you build dashboards and run queries much faster than waiting on GA4’s batch exports.",
    },
    {
      q: "Do I retain ownership and control of my data?",
      a: "Yes. All data is stored in a data warehouse that you fully control, such as BigQuery, Snowflake, AWS, or Azure. You define retention, governance, and geographic location, and you retain access rights and full data ownership.",
    },
    {
      q: "Do marketing metrics like sessions and bounce rate still work with Parallel Tracking?",
      a: "Yes. Some Parallel Tracking pipelines rebuild session‑style metrics on top of GA4 hit data. You can still access bounce rate, session counts, user attribution, and Google Ads linking while maintaining the event‑based model in your warehouse.",
    },
    {
      q: "Can Parallel Tracking run alongside GA4 Explorations and reporting?",
      a: "Yes. Parallel Tracking simply duplicates the GA4 event stream to your warehouse. It does not interfere with GA4’s native UI, Explorations, or reporting tools. You can continue using GA4 for standard dashboards and use your warehouse for advanced analytics.",
    },
  ];

  // Recent Blogs (keep from old code)
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

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Unlock Raw, Unsampled Data  " // :contentReference[oaicite:3]{index=3}
        highlight="with GA4 Parallel Tracking" // :contentReference[oaicite:4]{index=4}
        description="Tired of Loosing Valuable Data with GA4 Hits Limits? With GA4 parallel tracking, you can stream raw, unsampled data directly into BigQuery in real time. 

 

No more sampling and no more data gaps, only complete and reliable analytics reporting for smarter decisions.  " // :contentReference[oaicite:5]{index=5}
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Expertise", value: "100+" },
          { label: "Increase in Inbound Leads", value: "45%" },
          { label: "ROI from Paid Traffic", value: "3X" },
        ]} // :contentReference[oaicite:6]{index=6}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Gain Complete Analytics Without Limits
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Struggling with GA4 data loss and sampling issues? GA4 parallel tracking bypasses Google Analytics 4 daily limits and streams raw data into BigQuery for accurate insights.
          </p>
          {/* All above from source */} {/* :contentReference[oaicite:7]{index=7} */}

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Capture Every Event Without Data Loss",
                desc:
                  "GA4 parallel tracking ensures event tracking without sampling, preventing Google Analytics data loss and supporting accurate, uninterrupted reporting.",
                bullets: [
                  "Avoid gaps in data from GA4 daily limit restrictions.",
                  "Gain reliable event insights without sampling errors.",
                  "Stream GA4 to BigQuery for complete raw data export.",
                ],
              },
              {
                title: "Bypass GA4 Hit Limits for Unlimited Insights",
                desc:
                  "Implement a workaround to bypass the GA4 hit limits and ensure the flow of unsampled data for accurate, scalable analytics performance.",
                bullets: [
                  "Handle high-traffic spikes without losing valuable event data.",
                  "Ensure accurate GA4 real-time tracking across multiple sources.",
                  "Scale your analytics without limitations.",
                ],
              },
              {
                title: "Build Your Own GA4 Data Warehouse",
                desc:
                  "With GA4 BigQuery integration, store raw event data in a GA4 data warehouse for advanced analytics and machine learning applications.",
                bullets: [
                  "Create a centralized data pipeline for analysis.",
                  "Enable BigQuery analytics for ecommerce and SaaS insights.",
                  "Retain long-term historical event tracking.",
                ],
              },
              {
                title: "Advanced Attribution and Modeling",
                desc:
                  "GA4 attribution modeling with GA4 raw data export helps businesses analyze multi-touch journeys and improve marketing ROI measurement accuracy.",
                bullets: [
                  "Compare GA4 vs Universal Analytics results.",
                  "Identify which channels drive the highest value.",
                  "Make smarter ad spend decisions using unsampled data.",
                ],
              },
              {
                title: "Scalable, Future-Proof Data Pipelines",
                desc:
                  "Set up GA4 data pipelines with server-side tagging to stream GA4 to BigQuery and power long-term, scalable analytics infrastructure.",
                bullets: [
                  "Eliminate reliance on client-side tracking alone.",
                  "Secure and optimize GA4 parallel tracking workflows.",
                  "Future-proof analytics against upcoming platform changes.",
                ],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-xl p-8 text-left shadow-sm transition-all duration-300 group-hover/card-container:opacity-40 hover:!opacity-100"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#0F172A]">{card.title}</h3>
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
            {/* Cards content from source */} {/* :contentReference[oaicite:8]{index=8} */}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        title="Our customers"
        description="At Growth Natives, we have built strong partnerships with valued customers whose expertise enhances and complements our own capabilities."
      />{/* :contentReference[oaicite:9]{index=9} */}

      <AwardsSection />{/* :contentReference[oaicite:10]{index=10} */}

      {/* FAQs */}
      <FaqSection title="Frequently Asked Questions - GA4 Parallel Tracking" faqs={faqs} />{/* :contentReference[oaicite:11]{index=11} */}

      {/* Recent Blogs - keep from old code */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Best Practices"
          body="Access helpful best practices and resources from experienced marketing leaders to drive growth."
          subTabs={[]}
          resources={recentResources}
        />
      </div>{/* :contentReference[oaicite:12]{index=12} */}

      <ContactCta
        heading="Future-Proof Your Analytics Today!"
        subtext="Stop data loss and sampling issues with GA4 parallel tracking. Stream real-time event data directly into BigQuery."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />{/* :contentReference[oaicite:13]{index=13} */}

      <Footer />
    </div>
  );
};

export default L3Template;

