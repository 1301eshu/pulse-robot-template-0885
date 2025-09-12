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
  // FAQs (from Oracle Eloqua Reporting & Analytics page)
  const faqs = [
    {
      q: "What is Oracle Eloqua’s reporting and analytics functionality?",
      a: "Oracle Eloqua’s reporting and analytics tools allow you to transform raw data into actionable insights. You can create customized reports, track KPIs, and visualize data to make data-driven marketing decisions.",
    },
    {
      q: "How can Oracle Eloqua help improve my campaign ROI?",
      a: "Oracle Eloqua’s advanced reporting capabilities provide insights into which campaigns and channels are driving the highest ROI. By defining specific ROI metrics and using predictive analytics, you can optimize your marketing efforts.",
    },
    {
      q: "What business intelligence tools can be integrated with Oracle Eloqua?",
      a: "Oracle Eloqua integrates with various BI tools, allowing you to create detailed dashboards and reports that align with your business goals. Our experts can help with seamless integration into your existing BI infrastructure.",
    },
    {
      q: "How does predictive modeling in Oracle Eloqua work?",
      a: "Predictive modeling uses historical data to forecast future outcomes, helping you anticipate trends and prioritize leads. Our experts tailor predictive models to your specific goals, improving lead scoring and content targeting.",
    },
    {
      q: "What kind of data can be tracked with Oracle Eloqua’s analytics tools?",
      a: "Oracle Eloqua can track a variety of data, including lead activity, campaign performance, customer behavior, and more. Our experts ensure that all key variables and attributes are properly configured for optimal data tracking.",
    },
    {
      q: "How do you ensure the quality of data within Oracle Eloqua?",
      a: "We assess your data set for accuracy, completeness, and relevance, identifying and resolving any inconsistencies or gaps. We also provide verification and validation processes to ensure high-quality data is used for reporting.",
    },
    {
      q: "How does Oracle Eloqua integrate with other systems?",
      a: "Oracle Eloqua can be integrated with CRMs, BI tools, and other marketing systems. We ensure that your Oracle Eloqua platform is part of a seamless multitier architecture, optimizing data flow and reporting across platforms.",
    },
    {
      q: "What are the benefits of automating reporting in Oracle Eloqua?",
      a: "Automating reports saves time and ensures consistent data delivery. Oracle Eloqua allows for automated generation and distribution of reports, making it easier to monitor KPIs and track performance without manual effort.",
    },
    {
      q: "Can Oracle Eloqua support data visualization for better decision-making?",
      a: "Yes, Oracle Eloqua offers robust data visualization tools to create visually engaging charts, graphs, and dashboards that make complex data easier to understand and act upon.",
    },
    {
      q: "How can I optimize my marketing campaigns using Oracle Eloqua analytics?",
      a: "By leveraging Oracle Eloqua’s analytics, you can optimize campaign strategies, adjust targeting based on research and predictive analytics, and ensure that your marketing activities align with your business goals for better results.",
    },
  ]; // FAQs block, source page “Frequently Asked Questions - Oracle Eloqua Analytics & Reporting Essentials”. :contentReference[oaicite:1]{index=1}


  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="marketingautomationserviceseloquareportinganalyticsservices"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Oracle Eloqua Reporting & Analytics Services for Top-Tier Data-Driven Marketing"
        highlight="Services for Top-Tier Data-Driven Marketing"
        description="Leverage the power of Oracle Database and cutting-edge analytics tools to transform raw data into actionable insights with Oracle Eloqua’s reporting capabilities. Our information technology experts will help you visualize data, track ROI, and optimize your marketing strategies."
      />{/* Hero copy from page top. :contentReference[oaicite:2]{index=2} */}

      <EditableStatSection
        stats={[
          { label: "Oracle Eloqua Customers", value: "25+" },
          { label: "Certified Oracle Eloqua Experts", value: "20+" },
          { label: "Increase in Oracle Eloqua Campaign Efficiency", value: "30%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />{/* Stats block directly from the page figures. :contentReference[oaicite:3]{index=3} */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Oracle Eloqua Analytics & Reporting Services We offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Data is the backbone of successful marketing campaigns. Our Oracle Eloqua analytics services provide you with the insights you need to make informed, data-driven decisions.
          </p>
          {/* Services intro from the page section. :contentReference[oaicite:4]{index=4} */}

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Assessing Your Data & Analytics in Oracle Eloqua",
                desc:
                  "Your marketing efforts are only as good as the quality of your data. We assess your data set to ensure accuracy and completeness:",
                bullets: [
                  "Identifying inconsistencies, gaps, and opportunities for data enhancement",
                  "Evaluating your data's relevance and the effectiveness of your current tracking mechanisms",
                  "Providing tailored recommendations to improve your data and reporting tools",
                  "Reviewing variables and attributes within your Oracle Eloqua setup to ensure high-quality, actionable data",
                ],
              },
              {
                title: "Leveraging Business Intelligence (BI)",
                desc:
                  "Our BI experts will help you extract meaningful insights from your Oracle Eloqua data, using advanced artificial intelligence and data visualization techniques:",
                bullets: [
                  "Seamlessly integrating Oracle Eloqua data with your preferred BI tools",
                  "Defining key performance indicators (KPIs) that align with your business objectives",
                  "Building customized analytics dashboards to visualize complex data in charts, graphs, and reports",
                  "Collaborating on multitier architecture setups for better data management and reporting",
                ],
              },
              {
                title: "Improving ROI Tracking With Oracle Eloqua Reporting",
                desc:
                  "Tracking and optimizing your ROI is critical to campaign success. Our services provide advanced ROI tracking and reporting:",
                bullets: [
                  "Defining ROI metrics specific to your campaign goals",
                  "Implementing attribution models to accurately allocate revenue and campaign credit",
                  "Uncovering insights into which channels and campaigns deliver the best ROI",
                  "Using predictive analytics to forecast future ROI and optimize resource allocation",
                ],
              },
              {
                title: "Predictive Modeling & Forecasting With Oracle Eloqua Analytics",
                desc:
                  "Our predictive modeling services allow you to stay ahead of trends and make data-driven decisions:",
                bullets: [
                  "Analyzing historical data and customer behaviors to forecast trends",
                  "Creating predictive models tailored to your marketing objectives",
                  "Using data to prioritize leads based on conversion likelihood",
                  "Understanding which content resonates best with specific audience segments",
                ],
              },
              {
                title: "Integrating Data and Automating Processes with Oracle Eloqua",
                desc:
                  "Integration and automation are vital to efficient marketing. We ensure that your Oracle Eloqua platform is fully integrated with other information systems to streamline processes:",
                bullets: [
                  "Seamlessly integrating Oracle Eloqua with your CRM, web framework, and other tools",
                  "Automating lead nurturing, campaign management, and report generation",
                  "Ensuring clean and enriched data for accurate analysis and decision-making",
                  "Automating distribution marketing tasks and report publishing across platforms",
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
          {/* Services cards filled from the page’s “Key Oracle Eloqua Analytics & Reporting Services We offer” section. :contentReference[oaicite:5]{index=5} */}
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

      {/* Recent Blogs - Center heading only for this page */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to best practices and resources from our CMS experts."
          subTabs={[]}
          resourceType="24"
        />
      </div>

      <ContactCta
        heading="Fuel Business Decisions With Data-Driven Insights Powered By Oracle Eloqua"
        subtext="Our tailored Oracle Eloqua analytics & reporting services enable you to gain a deeper understanding of your marketing ROI and take data-driven actions to improve it."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />{/* CTA pulled verbatim from the page footer section. :contentReference[oaicite:6]{index=6} */}

      <Footer />
    </div>
  );
};

export default L3Template;

