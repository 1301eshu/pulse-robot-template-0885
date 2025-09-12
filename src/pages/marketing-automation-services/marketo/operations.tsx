import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from "@/components/ui/component_12";
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";
import DynamicSEO from "@/components/DynamicSEO";

const L3Template = () => {
  // FAQs (from Marketo Operations page)
  const faqs = [
    {
      q: "Why is Marketo operations strategy important for business growth?",
      a: "A well-defined Marketo operations strategy ensures that your marketing efforts are aligned with your business goals, helping you achieve scalability and better customer experience.",
    },
    {
      q: "How does sales and marketing alignment benefit my business?",
      a: "Sales and marketing alignment ensures that both teams are working towards the same objectives, reducing inefficiencies and improving lead generation, nurturing, and conversion rates.",
    },
    {
      q: "What are the benefits of process optimization in Marketo?",
      a: "Process optimization streamlines workflows, enhances data accuracy, and improves collaboration between teams, enabling more efficient and effective marketing operations.",
    },
    {
      q: "Why is data hygiene crucial for Marketo?",
      a: "Clean and accurate data is essential for personalized marketing and effective audience segmentation. Maintaining data hygiene ensures better campaign performance and compliance with privacy regulations.",
    },
    {
      q: "How does Marketo support GDPR, CASL, and CCPA compliance?",
      a: "Marketo provides tools for managing consent and privacy preferences, ensuring that your marketing campaigns adhere to data privacy regulations like GDPR, CASL, and CCPA.",
    },
    {
      q: "What is the importance of data strategy in marketing automation?",
      a: "A strong data strategy ensures that you are targeting the right audience with personalized messaging, improving engagement and maximizing your return on investment (ROI).",
    },
    {
      q: "How does Marketo Managed Services help with business continuity?",
      a: "Marketo Managed Services ensure continuous support and management of your instance, preventing downtime and maintaining productivity even during staff turnover or extended leave.",
    },
    {
      q: "What kind of reporting does Marketo offer for campaign performance?",
      a: "Marketo provides detailed reporting on campaign performance, ROI by channel, and overall marketing effectiveness, allowing you to make data-driven decisions for future campaigns.",
    },
    {
      q: "How does Marketo process optimization improve lead management?",
      a: "Process optimization ensures leads are captured, nurtured, and followed up on efficiently, reducing lead attack time and improving the overall sales funnel.",
    },
    {
      q: "What are the long-term benefits of implementing Marketo operations services?",
      a: "Marketo operations services help businesses build scalable and efficient marketing systems, improving customer experience, lead management, and overall business growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="marketingautomationservicesmarketooperations"/>
      <Header />

      {/* Contact Section */}
      <ContactWithBg
        heading="Marketo Operations Services to Accelerate Your Marketing Efforts"
        highlight=""
        description="Our Marketo-certified consultants and experts are here to manage, deploy, and monitor your campaigns, allowing you to focus on strategy and long-term growth. Whether it’s email marketing, campaign execution, or data governance, we ensure that your business achieves scalable success."
      />

      <EditableStatSection
        stats={[
          { label: "Marketo Customers", value: "100+" },
          { label: "Certified Marketo Experts", value: "70+" },
          { label: "Increase in Marketo Campaign Efficiency", value: "30%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Marketo Operations Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We offer a wide array of Marketo solutions, from custom implementations to ongoing management, to align your marketing efforts with business objectives and improve overall customer experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Marketo Implementation Roadmap Planning",
                desc: "Our team develops a clear and actionable Marketo operations strategy tailored to your business needs. With years of experience, we ensure that your Marketo instance is set up for long-term scalability and success.",
                bullets: [
                  "Define goals and create a clear roadmap for growth",
                  "Detailed timeline for achieving your business objectives",
                  "Customized plan for successful Marketo implementation",
                ],
              },
              {
                title: "Implementation",
                desc: "From account setup to integration with other platforms, we ensure that your Marketo instance is fully optimized for growth. We also manage the migration of old campaigns, ensuring seamless transitions and scalability.",
                bullets: [
                  "Complete Marketo account setup including server configurations",
                  "Data management with custom data fields for future analytics",
                  "Integration of lead capture forms for effective data collection",
                ],
              },
              {
                title: "Campaign Planning & Execution",
                desc: "Our experts assist with the entire campaign lifecycle, from planning to execution. We ensure that your resources are efficiently allocated and workflows are designed to maximize efficiency and results.",
                bullets: [
                  "Design complex workflows and campaign structures",
                  "Integrate processes into your website seamlessly",
                  "Provide extensive training for your marketing team",
                ],
              },
              {
                title: "Sales & Marketing Alignment",
                desc: "We help bridge the gap between your sales and marketing teams, enabling more effective communication and workflow automation using Marketo. By integrating Marketo with your CRM, we ensure both teams work towards common goals.",
                bullets: [
                  "Define and align your sales and marketing funnels",
                  "Integrate inbound marketing strategies using Marketo",
                  "Develop creative sales support assets",
                ],
              },
              {
                title: "GDPR / CASL / CCPA Compliance",
                desc: "Our team ensures that your Marketo instance adheres to privacy laws like GDPR, CASL, and CCPA. We build trust with your audience by ensuring transparent and compliant data practices.",
                bullets: [
                  "Implement GDPR compliance in Marketo",
                  "Ensure transparent engagement with customers",
                  "Build robust processes that adhere to data protection regulations",
                ],
              },
              {
                title: "Process Optimization",
                desc: "We help optimize your Marketo workflows for greater efficiency and improved collaboration between teams. By streamlining processes, we boost data accuracy and help you achieve superior marketing performance.",
                bullets: [
                  "Optimize Marketo processes for efficiency and accuracy",
                  "Implement best practices to suit your business goals",
                  "Create engaging online ad campaigns for improved performance",
                ],
              },
              {
                title: "Data Hygiene and Governance",
                desc: "Maintaining clean and compliant data is crucial for effective marketing campaigns. We ensure your Marketo database is free of errors and irrelevant data, enabling better segmentation and improved results.",
                bullets: [
                  "Improve data integrity with data cleansing and validation",
                  "Organize and streamline data collection and management processes",
                  "Ensure compliance with privacy laws through proper data governance",
                ],
              },
              {
                title: "Data Strategy and Quality",
                desc: "A robust data strategy is essential for delivering personalized marketing at scale. We help businesses create effective data models, ensuring better audience segmentation and more impactful campaigns.",
                bullets: [
                  "Assess and improve your database quality",
                  "Use dynamic content to personalize marketing assets",
                  "Implement custom API integrations and form development for seamless data flow",
                ],
              },
              {
                title: "Marketing Analysis & Reporting",
                desc: "We provide comprehensive marketing analysis and reporting services that enable businesses to track their campaign performance and uncover actionable insights. With custom dashboards, we make it easier for your marketing leaders to monitor KPIs and ROI.",
                bullets: [
                  "Detailed campaign performance reports in Marketo",
                  "ROI analysis by marketing channel",
                  "Custom dashboards for CMO to track success in real-time",
                ],
              },
              {
                title: "Marketo Managed Services",
                desc: "Our Marketo Managed Services offer continuous support for your Marketo instance, ensuring zero downtime and enhancing your team’s productivity. Whether it’s managing day-to-day operations or filling gaps during team absences, we provide unmatched reliability.",
                bullets: [
                  "End-to-end management of your Marketo instance",
                  "Ensure business continuity during employee turnover or extended leave",
                  "Optimize productivity and marketing output through agile processes",
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

      {/* Recent Blogs - Center heading only for this page (unchanged) */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to our best practices and resources from experienced."
          subTabs={[]}
          resourceType="40"

        />
      </div>

      <ContactCta
        heading="Fast-Track Your Marketing Endeavors With Top-Notch Marketo Services"
        subtext="Achieve marketing excellence with our outcome-driven Marketo solutions that provide you with everything you need to elevate your efforts."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/contact-us/"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
