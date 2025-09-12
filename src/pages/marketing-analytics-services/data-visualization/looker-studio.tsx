import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from '@/components/ui/component_12';
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";
import FaqSection from "@/components/ui/component_5";
import DynamicSEO from "@/components/DynamicSEO";

const L3Template = () => {

    // FAQs (from Meta/Facebook Services page)
  const faqs = [
    {
      q: "What is Looker Studio and how does it help with real-time user data?",
      a: "Looker Studio allows you to build dynamic and interactive dashboards that provide real-time marketing insights and customizable reports, helping businesses make smarter decisions.",
    },
    {
      q: "What services do you offer through Looker Studio?",
      a: "We provide a range of services, including custom reports and dashboards creation, data modeling and optimization, conversion rate optimization, and integration with other tools.",
    },
    {
      q: "How does Looker Studio support custom reports and dashboards?",
      a: "We design tailored reports and interactive dashboards that transform raw data into valuable insights, while also ensuring your team has access to the right information at the right time.",
    },
    {
      q: "What role does data modeling and optimization play in Looker Studio services?",
      a: "Data modeling and optimization ensure your data is structured for efficiency, accuracy, and real-time analytics, helping to eliminate redundancies and improve query performance.",
    },
    {
      q: "How can Looker Studio improve our conversion rates?",
      a: "Using Looker’s analytics capabilities, we provide insights into user patterns and trends, set up A/B tests, and analyze your conversion funnel to make actionable recommendations for improvement.",
    },
    {
      q: "Can Looker Studio integrate with other tools we use?",
      a: "Yes, we specialize in integrating Looker with a variety of tools, ensuring real-time data synchronization and automating workflows for data consistency and efficiency.",
    },
    {
      q: "What does the customization process for Looker Studio dashboards involve?",
      a: "We work with your team to understand your data goals, KPIs, and branding requirements, and then customize reports to align with your brand’s visual identity.",
    },
    {
      q: "How do you optimize data queries within Looker Studio?",
      a: "We conduct a thorough assessment of your existing data, normalize the data to reduce inconsistencies, and optimize queries to enhance performance and reduce bottlenecks.",
    },
    {
      q: "What makes your Looker Studio services unique?",
      a: "With over 20+ years of industry experience, a team of 50+ BI experts, and more than 200+ dashboards delivered, we bring deep expertise in data-driven decision-making and creating compelling data stories.",
    },
    {
      q: "How can Looker Studio support conversion rate optimization beyond just the website?",
      a: "We extend our CRO efforts beyond your website, considering multiple channels to provide a comprehensive approach for improving conversion rates across your entire business strategy.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="marketinganalyticsservicesdatavisualizationlookerstudio"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Looker Studio Services"
        highlight="For Real-Time User Data & Smarter Business Decisions"
        description="Easily build dynamic and interactive dashboards to gain valuable marketing insights and generate customizable reports with a range of designs, widgets, charts, and graphs using Looker Studio."
      />
      {/* Source: hero/intro copy from the Looker Studio page. :contentReference[oaicite:0]{index=0} */}

      <EditableStatSection
        stats={[
          { label: "Years of Industry Experience", value: "20+" },
          { label: "Dashboard Delivered", value: "200+" },
          { label: "BI Experts", value: "50+" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />
      {/* Source: stats band on the Looker Studio page. :contentReference[oaicite:1]{index=1} */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Looker Studio Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Engage and align stakeholders across your organization through compelling data storytelling and foster a culture of data‑driven decision‑making at every level.
          </p>
          {/* Source: section heading/intro from the Looker Studio page. :contentReference[oaicite:2]{index=2} */}

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Custom Reports and Dashboards Creation",
                desc:
                  "We design tailored reports and interactive dashboards in Looker Studio that transform raw data into valuable insights, ensuring your team has access to the right information at the right time.",
                bullets: [
                  "Understand your data goals, KPIs, and reporting requirements",
                  "Integrate Looker Studio with various data sources",
                  "Create visually appealing and intuitive reports and dashboards",
                  "Customize reports to match your brand’s visual identity",
                ],
              },
              {
                title: "Data Modelling and Optimization",
                desc:
                  "Efficient data modeling is at the heart of effective analytics. Our team fine‑tunes your data and information visualization to meet high standards of efficiency, accuracy, and real‑time analytics.",
                bullets: [
                  "Leverage Looker’s robust API capabilities to connect with applications",
                  "Map data sources to maintain data consistency and accuracy",
                  "Support real‑time data synchronization for up‑to‑date information",
                  "Design workflows that automate data transfer and updates",
                ],
              },
      {
                title: "Conversion Rate Optimization",
                desc:
                  "Unlock the full potential of your website and marketing efforts. By leveraging Looker’s powerful analytics capabilities, we can provide you with valuable insights and actionable recommendations to boost your conversion rates.",
                bullets: [
                  "Dig deep into your data to uncover patterns and trends",
                  "Segment your audience effectively for personalized user experiences",
                  "Set up A/B tests and experiments to evaluate changes in real time",
                  "Analyze your conversion funnel step by step to pinpoint drop-off points",
                   "Extend our CRO efforts beyond your website to consider multiple channels",
                ],
              },
       {
                title: "Integration With Other Tools",
                desc:
                  "To ensure seamless operations and a unified view of your data, we specialize in integrating Looker with a wide range of other tools and platforms. This integration not only enhances the versatility of Looker but also streamlines your data workflows for maximum efficiency and insights.",
                bullets: [
                  "Leverage Looker's robust API capabilities to connect with various applications",
                  "Map data sources to maintain data consistency and accuracy",
                  "Support real-time data synchronization to ensure access to the latest information",
                  "Design workflows that automate data transfer and updates",
                   
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
          {/* Source: services & bullets from the Looker Studio page. :contentReference[oaicite:3]{index=3} */}
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
        heading="Talk to Us!"
        subtext="Sign Up For a Complimentary Consultation"
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />
      {/* Source: CTA text used across the page template (“Sign up for a Complimentary Consultation”). :contentReference[oaicite:4]{index=4} */}

      <Footer />
    </div>
  );
};

export default L3Template;

