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
  // FAQs (from Power BI page)
  const faqs = [
    {
      q: "What is Power BI, and how does it benefit businesses?",
      a: "Power BI helps businesses create interactive reports, dashboards, and data visualizations to empower decision‑makers to make informed choices and drive immediate impact.",
    },
    {
      q: "What services do you offer with Power BI?",
      a: "Services include data visualization and reporting, data modeling, performance optimization, integration with other tools, and enterprise reporting.",
    },
    {
      q: "How does data visualization and reporting work in Power BI?",
      a: "We create tailored visualizations, integrate user data from various sources, and design custom dashboards that provide real‑time insights.",
    },
    {
      q: "What is the role of data modeling in Power BI services?",
      a: "Data modeling ensures data is accurate and optimized for use in reports and dashboards, providing a solid foundation for actionable insights.",
    },
    {
      q: "How do you optimize Power BI performance?",
      a: "We fine‑tune data queries, optimize data models, and improve indexing strategies to ensure fast‑loading, responsive dashboards on desktop and mobile.",
    },
    {
      q: "Can Power BI integrate with other tools?",
      a: "Yes. We connect Power BI with databases, cloud platforms, and third‑party apps such as CRM and ERP systems, and set up seamless workflows.",
    },
    {
      q: "How do you enhance reporting performance in Power BI?",
      a: "We optimize reports by implementing data aggregation techniques, improving query performance, and using indexing strategies for efficient data retrieval.",
    },
    {
      q: "What is enterprise reporting with Power BI?",
      a: "Designing tailored dashboards that offer a comprehensive view of enterprise data to uncover trends, patterns, and insights for decision‑making.",
    },
    {
      q: "How does data integration work in Power BI services?",
      a: "We configure data connectors to link Power BI with databases, cloud platforms, and external sources to create a cohesive data ecosystem.",
    },
    {
      q: "What makes your Power BI services unique?",
      a: "With 20+ years of industry experience, 50+ BI experts, and 200+ dashboards delivered, we offer in-depth expertise in data visualization, advanced analytics, and real-time monitoring, helping businesses gain a competitive edge.",
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="marketinganalyticsservicesdatavisualizationpowerbi"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Power BI Services"
        highlight="to Turn Your Data Into Immediate Action"
        description="Easily create interactive reports, dashboards, and data-driven visualizations that empower decision-makers to make informed choices and drive immediate impact."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Experience", value: "20+" },
          { label: "Dashboard Delivered", value: "200+" },
          { label: "BI Experts", value: "50+" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Power BI Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Whether it's data visualization, advanced analytics, or real-time monitoring, our Power BI Services empower businesses to harness the power of data and gain a competitive edge.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Data Visualization and Reporting",
                desc:
                  "We excel in helping businesses transform their raw data into meaningful insights through Power BI. Our expert team of data analysts and visualization specialists collaborates closely with clients to understand their specific needs and objectives.",
                bullets: [
                  "Assess your specific data needs to create tailored visualizations",
                  "Gather and integrate user data from various sources",
                  "Design custom dashboards that provide real-time insights",
                  "Use interactive charts, graphs, and maps to make data exploration easy",
                ],
              },
              {
                title: "Data Modeling",
                desc:
                  "Create an efficient foundation for reporting and analysis. Effective data modeling ensures that the data is accurate, meaningful, and optimized for use in Power BI reports and dashboards. Our experts lay the foundation for accurate, actionable insights, and ensure that your Power BI reports and dashboards are not only visually appealing but also function seamlessly.",
                bullets: [
                  "Assess existing data sources and identify relevant data",
                  "Design a data schema that defines relationships between tables",
                  "Employ Power Query to clean, filter, and transform data",
                  "Optimize data models to enhance query performance",
                ],
              },
              {
                title: "Performance Optimization",
                desc:
                  "Slow-loading reports and laggy dashboards in a desktop environment or mobile devices can be frustrating and counterproductive. That’s why our experts ensure that your reports and dashboards are not only visually appealing but also lightning-fast.",
                bullets: [
                  "Fine‑tune data queries and semantics to retrieve only necessary information",
                  "Optimize data models to minimize memory usage and improve responsiveness",
                  "Review and enhance indexing strategies and relationships between tables",
                  "Implement data aggregation techniques to pre‑calculate summaries",
                ],
              },
              {
                title: "Integration With Other Tools",
                desc:
                  "Seamlessly integrating Power BI with other tools and systems like android and iOS to create a cohesive data ecosystem. We offer comprehensive support to ensure that Power BI seamlessly connects and interacts with various data sources, applications, and platforms.",
                bullets: [
                  "Leverage Power BI APIs to connect with other software",
                  "Configure data connectors for databases, cloud platforms, and external sources",
                  "Facilitate integration with CRM and ERP applications",
                  "Create automated workflows so data flows seamlessly between systems",
                ],
              },
              {
                title: "Enterprise Reporting With Power BI",
                desc:
                  "Harnessing the power of data is critical for informed decision-making and sustainable growth. We specialize in helping enterprises unlock the full potential of Power BI for robust and insightful enterprise reporting.",
                bullets: [
                  "Design tailored dashboards that provide a comprehensive view of enterprise data",
                  "Integrate with on‑premises or cloud data sources",
                  "Uncover consumer trends, patterns, and insights within your data",
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
            resourceType="350"

        />
      </div>

      <ContactCta
        heading="Power Your Business Decisions Using Data-Driven Insights Powered By Power BI"
        subtext="Harness the full potential of your data, from diverse sources, through interactive visualizations and real-time reporting."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

