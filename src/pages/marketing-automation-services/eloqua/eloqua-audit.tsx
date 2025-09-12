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
  // FAQs (from Oracle Eloqua Audit Services page)
  const faqs = [
    {
      q: "What is an Oracle Eloqua audit, and why do I need one?",
      a: "An Oracle Eloqua audit assesses the current setup, performance, and data quality of your Eloqua instance. It helps identify opportunities for improvement, ensures compliance with relevant regulations, and optimizes your marketing efforts.",
    },
    {
      q: "What does the Oracle Eloqua audit process involve?",
      a: "Our audit process includes a comprehensive assessment of your campaigns, data structures, and system configurations. We also check for data accuracy, regulatory compliance, and system performance against industry benchmarks.",
    },
    {
      q: "How can an audit improve my campaign performance?",
      a: "By identifying data discrepancies, optimizing workflows, and ensuring data accuracy, our audit helps improve lead generation, segmentation, and overall campaign efficiency, leading to higher ROI.",
    },
    {
      q: "How do you ensure compliance with regulations during the audit?",
      a: "We review your data handling processes to ensure compliance with relevant data protection and privacy regulations, such as GDPR and CCPA. Our verification and validation checks ensure data is handled securely.",
    },
    {
      q: "What kind of ongoing support do you provide after the audit?",
      a: "We offer continuous guidance and hands-on assistance to help you implement the improvements identified during the audit. We also provide regular performance reviews to assess the effectiveness of these changes.",
    },
    {
      q: "How do you safeguard my data during the audit process?",
      a: "We prioritize data security by hosting your Oracle Eloqua instance on a secure cloud environment, encrypting sensitive data, conducting regular security audits, and ensuring compliance with information technology security standards.",
    },
    {
      q: "Can you help with cleaning and organizing our data?",
      a: "Yes, we specialize in cleaning, organizing, and validating your data to ensure accuracy. This includes removing duplicates, ensuring data consistency, and mapping variables and attributes for better segmentation.",
    },
    {
      q: "How do you improve the usability of the Oracle Eloqua platform?",
      a: "We conduct usability testing to evaluate and improve the user experience of your Oracle Eloqua instance, ensuring intuitive navigation and ease of use for your team.",
    },
    {
      q: "What is the role of software versioning in the Oracle Eloqua audit?",
      a: "Software versioning ensures your system is up-to-date with the latest Oracle Eloqua features and security updates. We monitor your instance’s version and recommend updates when necessary for optimal performance.",
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="marketingautomationserviceseloquaauditservices"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Oracle Eloqua Audit Services to "
        highlight="Maximize the Potential of Your Instance"
        description="Gain valuable insights into your Oracle Eloqua instance and improve marketing ROI with a comprehensive audit based on information technology best practices. Our audit services help you minimize errors, ensure system compliance with regulations, and optimize overall system performance."
      />

      <EditableStatSection
        stats={[
          { label: "Oracle Eloqua Customers", value: "25+" },
          { label: "Certified Oracle Eloqua Experts", value: "20+" },
          { label: "Increase in Oracle Eloqua Campaign Efficiency", value: "30%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Oracle Eloqua Audit Services We offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            With our software expertise and deep understanding of Oracle Eloqua, we empower you to make data-driven decisions
            that enhance campaign effectiveness and system performance. Here’s how our audit services can improve your marketing efforts.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Identifying Gaps and Performance Analysis",
                desc:
                  "Our experts assess your Eloqua setup by evaluating current performance against industry benchmarks, identifying areas for improvement, and ensuring that your system complies with relevant regulations. Key steps include:",
                bullets: [
                  "Comprehensive assessment of your Oracle Eloqua configuration",
                  "Analysis of campaigns, data structures, and integrations with other systems",
                  "Verification and validation of data accuracy and system performance",
                  "Reviewing data protection practices to ensure compliance with regulatory requirements",
                  "Comparison of performance metrics against industry standards",
                ],
              },
              {
                title: "Performing an Oracle Eloqua Audit",
                desc:
                  "Our Oracle Eloqua audit uncovers opportunities for improvement and helps you streamline processes. We assess and improve:",
                bullets: [
                  "Duplicate and inconsistent data across your system",
                  "Campaign management and lead generation processes",
                  "Variable and attribute analysis for data-driven segmentation",
                  "Usability testing to improve software navigation and ease of use",
                  "Email marketing best practices and automation workflows",
                  "Seamless data exchange with CRM integrations",
                  "Tracking the performance of your marketing analytics and identifying areas for optimization",
                ],
              },
              {
                title: "Ongoing and Post-Audit Support",
                desc:
                  "Our support extends beyond the audit itself. We provide continuous assistance to help you implement improvements and ensure long-term success:",
                bullets: [
                  "Ongoing guidance and hands-on assistance for making changes post-audit",
                  "Expert training to empower your team with the skills and knowledge needed to manage your Oracle Eloqua instance effectively",
                  "Regular performance reviews to assess the impact of audit recommendations and continued optimization",
                ],
              },
              {
                title: "Ensuring Cloud Security and Data Integrity",
                desc:
                  "Data security is our top priority. With a secure cloud environment, we safeguard your Oracle Eloqua instance, ensuring that sensitive data remains confidential and compliant with the latest regulations:",
                bullets: [
                  "Secure hosting of Oracle Eloqua using industry-leading cloud infrastructure",
                  "Data encryption to prevent unauthorized access and ensure regulatory compliance",
                  "Regular security audits and vulnerability checks",
                  "Automated data backups and disaster recovery processes",
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

      {/* Recent Blogs - Center heading only for this page */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to our best practices and resources from experienced."
          subTabs={[]}
          resourceType="24"
        />
      </div>

      <ContactCta
        heading="Make Your Oracle Eloqua Instance Healthiest Ever With a Comprehensive Audit"
        subtext="Identify actionable measures that optimize and enhance the efficiency, usability, and accuracy of the overall Oracle experience."
        buttonLabel="Schedule a 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

