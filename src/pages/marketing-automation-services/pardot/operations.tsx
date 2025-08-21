
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from '@/components/ui/component_12';
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";

const L3Template = () => {
  // FAQs (from Pardot Operations page)
  const faqs = [
    {
      q: "How can strategic planning improve my Pardot operations?",
      a: "Strategic planning ensures your Pardot setup aligns with your overall business goals, streamlining operations, improving campaign performance, and enhancing customer experience.",
    },
    {
      q: "What role does market segmentation play in Pardot campaigns?",
      a: "Market segmentation helps tailor campaigns to specific audiences, improving relevance, engagement, and conversion rates by delivering personalized content.",
    },
    {
      q: "How do Pardot’s analytics and reports enhance decision-making?",
      a: "Pardot’s powerful analytics tools provide detailed insights, allowing you to track campaign performance, optimize strategy, and improve return on marketing investment.",
    },
    {
      q: "Why is system integration important for Pardot operations?",
      a: "System integration ensures a seamless connection between Pardot and your CRM or other technology stacks, enabling efficient data flow and better sales-marketing alignment.",
    },
    {
      q: "How does an audit improve the performance of Pardot campaigns?",
      a: "A comprehensive Pardot audit identifies inefficiencies in workflows and assets, enabling optimization for improved campaign performance and streamlined operations.",
    },
    {
      q: "What is the benefit of A/B testing in Pardot?",
      a: "A/B testing allows you to test variations of campaigns and templates to determine which performs better, optimizing conversion marketing strategies.",
    },
    {
      q: "How can I ensure GDPR/CASL/CCPA compliance in my marketing campaigns?",
      a: "We ensure that your Pardot operations are fully compliant with privacy regulations, protecting customer data and maintaining transparency in your marketing communications.",
    },
    {
      q: "How do custom templates improve email marketing campaigns?",
      a: "Custom Pardot templates are tailored to your business and audience, improving engagement and conversion rates by delivering targeted, relevant content.",
    },
    {
      q: "What is the role of attribution in Pardot reporting?",
      a: "Attribution in Pardot helps you understand the impact of individual marketing efforts, allowing you to optimize campaigns based on their contribution to conversions.",
    },
    {
      q: "How can Pardot training benefit my internal team?",
      a: "Our customized training empowers your team to fully leverage Pardot’s features, improving campaign execution, lead management, and return on marketing investment.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Marketing Cloud Account Engagement (Formerly Pardot) Operations Services to Ensure Peak Performance"
        highlight="to Ensure Peak Performance"
        description="Our dedicated team helps you implement, manage, and scale your Pardot operations through customized strategic planning and system integration that boosts return on marketing investment and enhances your marketing strategy."
        // Optional: override countries or handle submit
        // countries={["India", "USA", "UK", "Canada"]}
        // onSubmit={async (data) => { /* send to API */ }}
      />

      <EditableStatSection
        stats={[
          { label: "Streamlined Lead Management", value: "30X" },
          { label: "Enhanced Sales Marketing Alignment", value: "40%" },
          { label: "Personalized Marketing Campaigns", value: "20X" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Pardot Operations Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We provide a comprehensive suite of services to help you optimize your Pardot instance, ensuring seamless execution of your marketing plan and driving improvements in customer experience and lead management.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Planning & Implementation",
                desc: "Accelerate your marketing success through tailored Pardot implementation and system integration aligned with your business goals and CRM.",
                strongs: [],
                bullets: [
                  "Pardot account setup, including website server integration",
                  "Migration of old campaigns from previously used systems",
                  "Workflow design and market segmentation",
                  "CRM integration for improved sales alignment",
                ],
              },
              {
                title: "Email Templates & Marketing Campaigns",
                desc: "Customized email templates and campaign assets to improve engagement and conversions, including responsive landing pages.",
                strongs: [],
                bullets: [
                  "Design and integration of landing pages for high engagement",
                  "Build email campaign assets for effective targeted advertising",
                  "Best practices-based Pardot templates for webinars and demos",
                  "In-depth analysis of email reports for improved marketing communications",
                ],
              },
              {
                title: "Internal Team Training & Workshops",
                desc: "Customized on-site and on-demand training to equip your team to manage conversion marketing and optimize lead management in Pardot.",
                strongs: [],
                bullets: [
                  "On-site and live training sessions tailored to your team’s needs",
                  "Written modules and quick-start resources for efficient onboarding",
                  "Recorded sessions for easy onboarding of new team members",
                ],
              },
              {
                title: "Pardot Instance Audit and Optimization Plan",
                desc: "Comprehensive audits to identify improvements, optimize workflows, and implement best practices aligned with business goals.",
                strongs: [],
                bullets: [
                  "In-depth audits to revitalize Salesforce Pardot automation",
                  "Removal of irrelevant processes and data",
                  "Data normalization and management for improved efficiency",
                ],
              },
              {
                title: "Performance Tracking & Reports",
                desc: "Analytics and reporting to track campaign performance and deliver business intelligence via custom dashboards and reports.",
                strongs: [],
                bullets: [
                  "Customized campaign reports for accurate evaluation",
                  "Insights for benchmarking and improving campaign results",
                  "CMO dashboards integrating Pardot and CRM data for actionable insights",
                ],
              },
              {
                title: "Better Alignment of Sales and Marketing",
                desc: "Bridge team gaps, define the sales funnel, align outreach, and reduce lead attack times through Pardot’s automation.",
                strongs: [],
                bullets: [
                  "Definition and alignment of the sales funnel",
                  "Optimize inbound lead flow for faster conversions",
                  "Sales support assets for middle and bottom funnel stages",
                ],
              },
              {
                title: "GDPR / CASL / CCPA Compliance",
                desc: "Engage with confidence by adhering to privacy laws and implementing compliant communications in Pardot.",
                strongs: [],
                bullets: [
                  "Ensure compliance with privacy regulations through Pardot",
                  "Engage with confidence while adhering to communication laws",
                  "Implement GDPR-compliant marketing communications",
                ],
              },
              {
                title: "Pardot Operations and Tech Stack Optimization",
                desc: "Optimize processes and integrations to suit your goals, ensuring peak performance and higher ROMI.",
                strongs: [],
                bullets: [
                  "Process optimization to boost campaign effectiveness",
                  "System integration for seamless operations",
                  "Suggesting and implementing best practices tailored to your needs",
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
                      <span>✔️</span>{point}
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

      {/* Recent Blogs - Center heading only for this page (unchanged) */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to our best practices and resources from experienced."
          subTabs={[]}
        />
      </div>

      <ContactCta
        heading="Looking for Proven Pardot Services and Solutions?"
        subtext="Focus your energy on business growth while we expand your Pardot operations & find out if your instance is working to its optimum level."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/contact/"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
