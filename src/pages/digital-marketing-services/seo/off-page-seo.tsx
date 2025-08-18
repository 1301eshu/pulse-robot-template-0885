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
// FAQs (Off-Page SEO page)
const faqs = [
  {
    q: "How does Off-Page SEO contribute to marketing strategy?",
    a: "Off-Page SEO amplifies your brand’s online presence by improving search rankings, increasing brand awareness, and driving organic traffic through strategic management of backlinks, content, and social media.",
  },
  {
    q: "What is the role of link building in Off-Page SEO?",
    a: "Link building helps improve your website’s authority and organic search results by acquiring high-quality backlinks, which positively impact your search engine rankings.",
  },
  {
    q: "How does content marketing help in conversion marketing?",
    a: "Content marketing supports conversion marketing by delivering engaging content that captures audience interest, increasing conversions through consistent and well-optimized content strategies.",
  },
  {
    q: "What metrics are used to measure the success of Off-Page SEO?",
    a: "Key metrics include increased organic traffic, improved rankings in search engine marketing (SEM), higher domain authority, and enhanced brand awareness as measured by tools like Google Analytics.",
  },
  {
    q: "How does social media engagement impact brand awareness?",
    a: "Social media engagement drives brand awareness by fostering meaningful interactions with your audience, improving visibility, and building trust through prompt responses and relevant content.",
  },
  {
    q: "Why is local SEO important for my business?",
    a: "Local SEO is crucial for businesses looking to increase visibility within their community. Optimizing for local searches improves your rankings in local results and attracts more customers from your target area.",
  },
  {
    q: "What is content syndication, and how does it benefit my brand?",
    a: "Content syndication involves distributing your content across various platforms to extend its reach and improve brand awareness, driving more traffic to your site and improving organic search results.",
  },
  {
    q: "How can Off-Page SEO improve my return on marketing investment (ROMI)?",
    a: "Off-Page SEO enhances ROMI by increasing organic traffic, improving search rankings, and building authority, leading to higher conversions without the ongoing cost of paid advertising campaigns.",
  },
  {
    q: "What is the role of Google Analytics in Off-Page SEO?",
    a: "Google Analytics tracks key performance metrics, helping you measure the success of your Off-Page SEO efforts. It provides insights into traffic sources, user engagement, and conversion rates, enabling effective evaluation and refinement of your strategy.",
  },
  {
    q: "How does Off-Page SEO help in a competitive market?",
    a: "Off-Page SEO boosts your competitive edge by enhancing your site’s authority, increasing brand awareness, and driving more traffic through organic search results, giving you an advantage in a saturated market.",
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

return ( <div className="min-h-screen bg-background"> <Header />

  {/* Contact Section (reusable component) */}
  <ContactWithBg
    heading="Off-Page SEO Services"
    highlight="to Amplify Reach and Boost Authority in a Competitive Market"
    description="Our Off-Page SEO services are designed to enhance your online visibility, increase brand awareness, and drive conversion marketing through strategic outreach and targeted efforts."
  />

  <EditableStatSection
    stats={[
      { label: "Years of Industry Expertise", value: "100+" },
      { label: "SEO Audits Performed", value: "1000+" },
      { label: "Increase in Organic Traffic", value: "45%" },
    ]}
    paddingTop="pt-20"
    paddingBottom="pb-20"
  />

  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
        Key Off-Page SEO Services We Offer
      </h2>
      <p className="text-lg text-gray-700 mb-12">
        Our custom Off-Page SEO solutions are geared to expand your brand's reach beyond your website. From link building to content syndication, we help you harness the full potential of online visibility and improve organic search results, ultimately enhancing your return on marketing investment.
      </p>

      {/* Service Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
        {[
          {
            title: "Link Building",
            desc:
              "Building your brand’s online presence demands a strategic approach to link building. We focus on securing high-quality backlinks to elevate your site’s authority, improving your search engine rankings and increasing organic traffic.",
            bullets: [
              "Acquire high-quality backlinks to boost search engine rankings and domain authority",
              "Strategically place links on relevant sites to drive targeted traffic",
              "Monitor and maintain a healthy backlink profile to ensure sustained growth",
            ],
          },
          {
            title: "Social Media Engagement",
            desc:
              "Our team helps you conquer the complexities of social media with strategic engagement designed to enhance brand awareness and drive interaction. We curate content that resonates with your audience and optimizes engagement across platforms, boosting your visibility in the digital realm.",
            bullets: [
              "Foster meaningful interactions to improve customer service and brand engagement",
              "Curate content that captivates and converts your audience, driving organic growth",
              "Maintain a positive brand image with timely responses on social channels",
            ],
          },
          {
            title: "Content Marketing",
            desc:
              "Content is a critical component of conversion marketing, and our tailored content marketing strategies help you reach your target audience more effectively. We create high-quality content that enhances your website’s authority while improving search engine visibility.",
            bullets: [
              "Deliver informative, engaging content to capture your audience’s attention",
              "Optimize content for search engines to improve rankings and organic search results",
              "Maintain consistency and relevance to establish credibility and trust in your niche",
            ],
          },
          {
            title: "Content Syndication",
            desc:
              "Our content syndication services extend the reach of your content by distributing it across relevant platforms. This strategy increases exposure and engagement, driving more traffic to your site while boosting your authority.",
            bullets: [
              "Identify the best platforms for syndicating content to reach wider audiences",
              "Optimize content for each platform to maximize impact and engagement",
              "Track Google Analytics and other metrics to evaluate and refine strategies",
            ],
          },
          {
            title: "Local SEO Optimization",
            desc:
              "Maximizing your visibility in local searches is essential for business growth. Our local SEO optimization services ensure that your business ranks higher in local search results, attracting more local customers and driving sales.",
            bullets: [
              "Optimize business listings on platforms like Google My Business to ensure consistency",
              "Use geo-targeted content and keywords to improve local search visibility",
              "Encourage positive reviews to enhance your business's local reputation",
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

  {/* Recent Blogs - keep from old code */}
  <div className="[&>h2]:text-center">
    <RecentResourcesSection
      heading="Top Blogs"
      body="Get quick access to best practices and resources from our CMS experts."
      subTabs={[]}
      resources={recentResources}
    />
  </div>

  <ContactCta
    heading="Position Your Brand in Front of a Ready-to-Engage Audience"
    subtext="Empower your brand to capture the attention of users actively searching for products or services like yours, maximizing your online visibility and engagement."
    buttonLabel="Schedule a 1:1 Call"
    buttonLink="/get-started"
  />

  <Footer />
</div>

);
};

export default L3Template;
