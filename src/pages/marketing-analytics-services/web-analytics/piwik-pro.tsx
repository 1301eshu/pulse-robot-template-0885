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
  // FAQs (from Piwik PRO page)
  const faqs = [
    {
      q: "What is Piwik PRO?",
      a: "Piwik PRO is a privacy-centric analytics platform that empowers organizations to gather valuable insights from their websites, apps, and other digital properties. It offers advanced analytics features, robust data privacy measures, and customizable solutions to help businesses make data-driven decisions while adhering to strict privacy and compliance standards.",
    },
    {
      q: "How Does Piwik PRO Ensure Data Privacy?",
      a: "Piwik PRO prioritizes data privacy through features like on-premises hosting options, data anonymization, consent management, and user-level data retention controls. It enables organizations to collect and analyze data while respecting user privacy, making it GDPR and CCPA-compliant.",
    },
    {
      q: "Can I Use Piwik PRO for GDPR Compliance?",
      a: "Yes, Piwik PRO is designed to assist organizations in achieving GDPR compliance. It provides tools for obtaining user consent, data anonymization, and user-level data retention controls, allowing businesses to align their analytics practices with GDPR requirements.",
    },
    {
      q: "What Types of Data Can I Track With Piwik PRO?",
      a: "Piwik PRO allows you to track a wide range of data, including website visits, page views, user interactions, eCommerce transactions, conversion goals, custom events, and more. You can customize tracking to suit your specific analytics needs.",
    },
    {
      q: "Is Piwik PRO Suitable for Large Enterprises?",
      a: "Absolutely. Piwik PRO is scalable and well-suited for enterprises of all sizes. It can handle high volumes of data and offers advanced features for in-depth analytics, making it an ideal choice for large organizations.",
    },
    {
      q: "Can I Host Piwik PRO On My Own Infrastructure?",
      a: "Yes, Piwik PRO offers on-premises hosting options, allowing you to host the analytics platform on your infrastructure for full control over data and security.",
    },
    {
      q: "Does Piwik PRO Offer Multi-Channel Analytics?",
      a: "Yes, Piwik PRO provides multi-channel analytics, enabling you to track user interactions across various digital channels, including websites, mobile apps, and more. This helps you understand user behavior across touchpoints.",
    },
    {
      q: "Is there a Cloud-Hosted Version of Piwik PRO?",
      a: "Yes, Piwik PRO offers a cloud-hosted version, providing a hassle-free and fully managed analytics solution for organizations that prefer not to host it on their own infrastructure.",
    },
    {
      q: "Can I Integrate Piwik PRO With Other Marketing Tools and Platforms?",
      a: "Yes, Piwik PRO supports integration with a wide range of marketing tools, CRMs, data warehouses, and platforms, enabling you to centralize and utilize your data for more comprehensive insights and marketing efforts.",
    },
    {
      q: "What is the Difference Between Piwik PRO and GA4?",
      a: "Piwik PRO and Google Analytics 4 (GA4) are both analytics platforms, but they differ in key ways. Piwik PRO prioritizes data privacy, offers on-premises hosting, and focuses on compliance with privacy regulations. GA4, on the other hand, is a product of Google and is cloud-based. GA4 places more emphasis on event-based tracking and predictive analytics. The choice between them depends on your specific requirements and data privacy considerations.",
    },
    {
      q: "What’s Next If I Choose Growth Natives to Assist Me With Piwik PRO Services?",
      a: "You can send us an email to info@growthnatives.com and our team will get back to you promptly. We’ll schedule an initial consultation and help you unlock the full potential of Piwik Pro, providing tailored solutions, advanced insights, and seamless integration with your tech stack to supercharge your data-driven decision-making.",
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
        heading="Piwik PRO Analytics Services - Collect,"
        highlight="Analyze, and Activate Your Web Data With Ease"
        description="Gather valuable insights from your online activities and make data-driven decisions with ease. Whether you’re looking to enhance your marketing strategies or improve website performance Piwik PRO Analytics can help you turn web data into actionable intelligence."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Experience", value: "16+" },
          { label: "Implementation done", value: "150+" },
          { label: "Digital Analytics experts", value: "30+" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Piwik PRO Analytics Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our experts transform raw data into actionable insights, empower you to make informed decisions, and optimize your online presence.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Piwik PRO Implementation and Onboarding",
                desc:
                  "Harness the power of Piwik PRO without the complexities and focus on gaining valuable insights and making informed decisions. Our expert team is here to guide you through the process, ensuring a smooth start.",
                bullets: [
                  "Seamlessly integrate Piwik PRO into your website or application",
                  "Configure it to ensure it tracks the data that you need",
                  "Assist with data migration to ensure continuity in your insights",
                ],
              },
              {
                title: "Reporting and Analysis",
                desc:
                  "Unlock actionable insights from your Piwik PRO Analytics data. Provide regular reports and in-depth analysis of the data collected and offer actionable recommendations.",
                bullets: [
                  "Create custom reports tailored to your specific KPIs and objectives",
                  "Conducts in-depth analysis to uncover trends, patterns, and opportunities",
                  "Provide actionable recommendations based on data-driven insights",
                  "Provide timely reports to keep you informed about the performance of your digital assets",
                ],
              },
              {
                title: "Performance Optimization",
                desc:
                  "The speed and efficiency of your analytics platform can make all the difference. We ensure that your Piwik PRO installation not only handles large volumes of data efficiently but also delivers lightning-fast response times, enabling you to access your insights without delays.",
                bullets: [
                  "Ensure your Piwik PRO infrastructure scales to accommodate your growing data needs",
                  "Fine-tune database configurations to maximize query performance and minimize data retrieval times",
                  "Implement caching strategies to store frequently accessed data",
                ],
              },
              {
                title: "A/B Testing and Experimentation",
                desc:
                  "Elevate your decision-making and boost your digital performance with A/B testing and experimentation powered by Piwik PRO. Optimize your websites and applications by systematically testing variations and identifying what resonates best with your audience.",
                bullets: [
                  "Create a robust A/B testing strategy aligned with your business goals",
                  "Craft variations of your website elements or app features for testing",
                  "Perform rigorous statistical analysis of test results to determine which variations perform best",
                ],
              },
              {
                title: "Integration With Third-Party Tools",
                desc:
                  "Integrate Piwik PRO with other software and data sources within your technology stack. Our experts can help you integrate it with your preferred third-party tools, maximizing the value of your data and enhancing decision-making capabilities.",
                bullets: [
                  "Facilitate smooth data exchange between PiwikPRO and various third-party systems",
                  "Build custom connectors and plugins, ensuring that PiwikPRO effortlessly communicates with specific tools",
                  "Handle data mapping and transformation to ensure PiwikPRO data aligns seamlessly with third-party applications",
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
      <FaqSection title="Frequently Asked Questions - Piwik PRO Essentials" faqs={faqs} />

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
        heading="Accelerate Your Marketing Operations and Make Data-Driven Decisions Using Piwik Pro Analytics"
        subtext="Fast-track your marketing operations through powerful analytics tools, custom tracking, and multi-channel insights, ensuring your strategies are on target."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

