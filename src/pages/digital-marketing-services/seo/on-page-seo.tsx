import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from '@/components/ui/component_12';
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";
import DynamicSEO from "@/components/DynamicSEO";

const L3Template = () => {
// FAQs (On-Page SEO page)
const faqs = [
  {
    q: "How does On-Page SEO improve information quality on my website?",
    a: "On-Page SEO enhances information quality by optimizing content, improving site structure, and ensuring your site meets Google’s search engine indexing standards.",
  },
  {
    q: "What role does keyword density play in SEO success?",
    a: "Keyword density ensures your content is optimized for both users and search engines, helping your site rank higher in Google Search and improving its relevance to specific queries.",
  },
  {
    q: "How does internal linking impact my website’s architecture?",
    a: "Internal linking improves website architecture by distributing link authority, enhancing usability, and making it easier for web crawlers to navigate your site.",
  },
  {
    q: "How does schema markup benefit search engine indexing?",
    a: "Schema markup provides web crawlers with structured data, improving how search engines interpret your site’s information and boosting your visibility in Google Search results.",
  },
  {
    q: "What is the importance of link building in SEO?",
    a: "Link building increases your site’s authority and visibility by securing high-quality backlinks from relevant websites, helping improve your site’s position in search engine indexing.",
  },
  {
    q: "How can SEO audits improve my website’s performance?",
    a: "SEO audits identify areas for improvement in your site’s architecture, content, and performance, allowing us to fine-tune strategies that boost visibility and engagement.",
  },
  {
    q: "How does page speed optimization impact usability and SEO?",
    a: "Improving page speed enhances both usability and SEO, as faster-loading sites provide a better user experience and are favored by Google’s ranking algorithms.",
  },
  {
    q: "How does content strategy align with Google Search algorithms?",
    a: "An effective content strategy aligns with Google Search algorithms by using well-optimized keywords, structured content, and clear information architecture to rank higher in search results.",
  },
  {
    q: "How does image optimization improve SEO?",
    a: "Optimizing images reduces load times, improves usability, and ensures that images are properly tagged and indexed by search engines, boosting your site’s overall SEO performance.",
  },
  {
    q: "How do you ensure collaboration during SEO projects?",
    a: "We use advanced project management tools to ensure efficient collaboration, keeping stakeholders informed and aligned with SEO goals through regular updates and clear communication.",
  },
];


return (
  <div className="min-h-screen bg-background">
    <DynamicSEO page="digitalmarketingservicesseoonpageseo"/>
    <Header />

    {/* Contact Section (reusable component) */}
    <ContactWithBg
      heading="On-Page SEO Services"
      highlight="to Optimize Visibility and Drive Traffic"
      description="Our team of SEO experts uses strategic optimizations to maximize your search engine indexing visibility and drive traffic to new heights through improved content strategy, keyword density, and backlink opportunities."
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
          Key On-Page SEO Services We Offer
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Our comprehensive On-Page SEO services are designed to turbocharge your website’s visibility, improve usability, and generate tangible results for your business.
        </p>

        {/* Service Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
          {[
            {
              title: "Page Speed Optimization",
              desc:
                "Optimizing your website’s speed is essential for both user experience and SEO. We ensure your website performs at optimal speed, which improves search engine indexing and user satisfaction.",
              bullets: [
                "Improve page load times to captivate visitors and reduce bounce rates",
                "Optimize website architecture and code for better performance",
                "Streamline web content for smooth navigation and interaction",
              ],
            },
            {
              title: "Title Tags and Meta Descriptions Optimization",
              desc:
                "Our services enhance your online presence by optimizing title tags and meta descriptions to stand out in Google search results. This drives more clicks and engagement with your content.",
              bullets: [
                "Craft compelling title tags and descriptions to boost online advertising effectiveness",
                "Align content with user intent to improve click-through rates",
                "Continuously refine tags for maximum visibility in search engine marketing",
              ],
            },
            {
              title: "Keyword Optimization",
              desc:
                "Precise keyword density and optimization help your content rank higher while resonating with your target audience. We fine-tune your keyword strategies to capture high-value search queries and boost engagement.",
              bullets: [
                "Identify high-value search queries through detailed keyword analysis",
                "Craft optimized content that speaks to both Google Search algorithms and user needs",
                "Adapt strategies based on evolving trends and algorithms",
              ],
            },
            {
              title: "Internal Linking",
              desc:
                "Our internal linking strategies improve your site’s architecture and usability while enhancing SEO. Strategic internal links help distribute authority and guide users through your content efficiently.",
              bullets: [
                "Strategically place internal links for seamless navigation",
                "Connect relevant pages to boost engagement and user profile interaction",
                "Strengthen link building efforts by distributing link equity effectively",
              ],
            },
            {
              title: "Schema Markup Implementation",
              desc:
                "Schema markup is crucial for communicating effectively with web crawlers and search engines. We implement schema to enhance how search engines interpret your website’s information.",
              bullets: [
                "Provide comprehensive schema markup to improve search engine indexing",
                "Offer insights into your site’s information architecture",
                "Tailor schema to present structured data, improving content strategy",
              ],
            },
            {
              title: "Content Creation and Optimization",
              desc:
                "High-quality web content is key to improving visibility and engaging users. We research and create content that resonates with your audience while adhering to Google Search requirements.",
              bullets: [
                "Develop content that meets the needs of your target market and industry",
                "Write compelling headlines and descriptions optimized for keyword density",
                "Ensure content is well-structured and SEO-friendly for maximum usability",
              ],
            },
            {
              title: "Image Optimization",
              desc:
                "Optimizing images enhances both page speed and SEO performance. We compress images and ensure they are properly tagged to improve your website’s information quality and accessibility.",
              bullets: [
                "Compress images to enhance load times while preserving quality",
                "Add descriptive alt text to improve SEO and accessibility",
                "Ensure images are tagged for better search engine indexing",
              ],
            },
            {
              title: "Link Building",
              desc:
                "Building high-quality backlinks is critical for improving search engine indexing and boosting your site’s authority. Our link building strategies include:",
              bullets: [
                "Identifying relevant, high-quality websites for backlink opportunities",
                "Engaging in outreach to secure backlinks from authoritative sources",
                "Creating valuable content that naturally attracts link building opportunities",
              ],
            },
            {
              title: "On-Page SEO Audit and Reporting",
              desc:
                "Regular SEO audits are essential for maintaining optimal performance. We provide thorough audits and detailed reports to ensure continuous improvement.",
              bullets: [
                "Conduct comprehensive audits to identify areas for SEO improvement",
                "Provide actionable insights and recommendations for better SEO performance",
                "Monitor and analyze SEO metrics to ensure ongoing optimization",
              ],
            },
            {
              title: "Collaboration and Project Management",
              desc:
                "Our team ensures that all On-Page SEO efforts are aligned with your business goals. Effective collaboration and project management drive the success of your SEO strategies.",
              bullets: [
                "Use advanced tools for collaboration and project management",
                "Foster open communication and provide regular updates",
                "Ensure timely execution of strategies based on real-time analysis",
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
        resourceType="100"
      />
    </div>

    <ContactCta
      heading="Refine, Optimize, and Excel with On-Page SEO Mastery"
      subtext="Enhance brand visibility and capture the attention of your customers through strategic On-Page SEO efforts."
      buttonLabel="Schedule 1:1 Call"
      buttonLink="/get-started"
    />

    <Footer />
  </div>
);
};

export default L3Template;

