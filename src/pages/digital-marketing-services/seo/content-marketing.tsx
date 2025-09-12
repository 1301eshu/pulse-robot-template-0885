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
// FAQs (Content Marketing page)
const faqs = [
  {
    q: "How does strategic content planning improve ROI?",
    a: "By aligning your content with business objectives and customer needs, our strategic planning ensures that every piece of content adds value and drives higher engagement, improving your overall return on investment.",
  },
  {
    q: "How does content repurposing enhance online advertising efforts?",
    a: "Repurposing content allows you to reach a broader audience by adapting your assets for different platforms, extending the lifespan and impact of your content across various channels.",
  },
  {
    q: "What role does copywriting play in content marketing?",
    a: "Copywriting is essential for crafting compelling messages that resonate with your audience. Whether for newsletters, ebooks, or social media posts, engaging copy is key to driving user experience and conversions.",
  },
  {
    q: "How can social media marketing improve brand engagement?",
    a: "Social media marketing increases your brand’s visibility by maintaining consistent, engaging posts that attract your audience’s attention and nurture relationships, improving both engagement and loyalty.",
  },
  {
    q: "What metrics are used to evaluate content performance?",
    a: "We use various metrics such as click-through rates, time spent on pages, and conversion tracking to analyze the performance of your content and identify areas for improvement.",
  },
  {
    q: "How does content ideation drive creativity in content marketing?",
    a: "Content ideation involves brainstorming and generating innovative ideas for content that aligns with your brand’s goals. This fosters creativity and helps create unique, engaging content that resonates with your audience.",
  },
  {
    q: "What is the importance of content analytics?",
    a: "Content analytics provide insights into how users interact with your content. This helps you refine your strategies, ensuring that future content is more aligned with audience preferences and drives better results.",
  },
  {
    q: "How can case studies enhance content marketing efforts?",
    a: "Case studies offer real-world examples of your brand’s success, building trust and credibility with your audience, while showcasing your expertise and results.",
  },
];


return ( <div className="min-h-screen bg-background"> 
<DynamicSEO page="digitalmarketingservicesseocontentmarketing"/>
<Header />

  {/* Contact Section (reusable component) */}
  <ContactWithBg
    heading="Content Marketing Services"
    highlight="for Increased Customer Engagement & Higher ROI"
    description="Our content marketing services are designed to engage your audience and maximize your return on investment (ROI) through creative blog posts, impactful ebooks, or strategic online advertising."
  />

  <EditableStatSection
    stats={[
      { label: "Years of Industry Experience", value: "100+" },
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
        Key Content Marketing Services We Offer
      </h2>
      <p className="text-lg text-gray-700 mb-12">
        We offer a full range of content marketing services designed to elevate your brand and engage your audience with creativity and strategy.
      </p>

      {/* Service Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
        {[
          {
            title: "Strategic Content Planning",
            desc:
              "Our team develops comprehensive content strategies that align with your business objectives. We help you identify your target audience and create a roadmap for content creation and distribution.",
            bullets: [
              "Conduct in-depth analysis of your audience's preferences and behaviors",
              "Evaluate your competitive landscape to uncover content gaps and opportunities",
              "Develop detailed content calendars and themes for consistent content output",
              "Identify high-value keywords to boost your SEO efforts",
            ],
          },
          {
            title: "Content Ideation and Creation",
            desc:
              "Our team excels in content creation that resonates with your audience. We focus on creating compelling, SEO-optimized content that enhances engagement and strengthens your brand.",
            bullets: [
              "Tailor content to your audience, ensuring relevance and value",
              "Conduct trend analysis to create timely and engaging topics",
              "Integrate strategically chosen keywords to improve search visibility",
              "Brainstorm innovative ideas for case studies, newsletters, and other high-value content",
            ],
          },
          {
            title: "Content Repurposing and Syndication",
            desc:
              "We repurpose your existing assets like ebooks, blogs, and videos into diverse formats, ensuring broader distribution across various platforms. Our goal is to amplify your content’s reach and maintain brand consistency.",
            bullets: [
              "Repurpose blog posts into videos, infographics, and social media content",
              "Syndicate content across third-party platforms to maximize reach",
              "Adapt content to each platform while maintaining a consistent brand voice",
              "Optimize headlines, visuals, and messaging for different channels",
            ],
          },
          {
            title: "Social Media and Email Marketing",
            desc:
              "Our social media marketing and email marketing services are designed to amplify brand visibility, nurture leads, and drive conversions.",
            bullets: [
              "Develop tailored social media content and email strategies to engage your audience",
              "Maintain a consistent posting schedule to keep followers engaged",
              "Craft compelling email copy that informs and encourages action",
              "Use A/B testing to fine-tune email campaigns for maximum effectiveness",
            ],
          },
          {
            title: "Content Analytics and Reporting",
            desc:
              "Our content analytics services provide insights into how your content is performing. We track key performance indicators (KPIs) to gauge success and offer insights for future content strategies.",
            bullets: [
              "Track KPIs like click-through rates (CTRs) and engagement across channels",
              "Conduct content audits to ensure your content remains fresh and competitive",
              "Visualize user engagement with heatmaps to identify high and low interaction areas",
              "Attribute conversions to specific content pieces to understand what drives leads",
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
  <FaqSection title="Frequently Asked Questions - Content Marketing Essentials" faqs={faqs} />

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
    heading="Power Up Your Brand Presence With a Solid Content Marketing Strategy"
    subtext="Amplify your brand story, captivate your audience, and position your business at the forefront of your industry."
    buttonLabel="Schedule a 1:1 Call"
    buttonLink="/get-started"
  />

  <Footer />
</div>

);
};

export default L3Template;
