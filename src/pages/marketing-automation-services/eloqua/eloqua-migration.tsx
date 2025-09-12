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
  // FAQs (from Oracle Eloqua Migration Services page)
  const faqs = [
    {
      q: "What is Oracle Eloqua, and why should I migrate to it?",
      a: "Oracle Eloqua is a leading marketing automation platform (MAP) that allows businesses to streamline and optimize marketing efforts. Migrating to Oracle Eloqua provides enhanced campaign management, real-time reporting, and the ability to scale efficiently in the cloud.",
    },
    {
      q: "What is the process of migrating to Oracle Eloqua?",
      a: "The process includes an initial assessment, data mapping, verification and validation of data, system configuration, and final deployment. Our team ensures that every step is seamless and risk-free.",
    },
    {
      q: "How do you ensure data security during migration?",
      a: "We implement advanced security measures and ongoing monitoring during the migration process to ensure that your data is protected. Verification and validation checks ensure data integrity throughout the migration.",
    },
    {
      q: "How long does the Oracle Eloqua migration process take?",
      a: "The timeline varies based on the complexity of your current marketing automation platform and the volume of data to be migrated. After the assessment and migration roadmap planning, we provide an estimated project duration.",
    },
    {
      q: "What are the key benefits of cloud-based deployment for Oracle Eloqua?",
      a: "Cloud deployment offers greater flexibility, scalability, reduced infrastructure costs, and easier adaptation to changing marketing needs. It also ensures that your system is future-proof and can accommodate growth without requiring significant hardware investment.",
    },
    {
      q: "Can you help optimize my campaigns after the migration?",
      a: "Yes, we offer performance optimization services, including lead scoring, nurturing, and sales funnel refinement. We tailor your reporting, analytics, and campaign structures to drive maximum ROI.",
    },
    {
      q: "What if my current database is not compatible with Oracle Eloqua?",
      a: "Our team will conduct a thorough assessment of your existing database and develop a tailored migration strategy to ensure compatibility with Oracle Eloqua. We will handle any data format changes and cleansing that may be required.",
    },
    {
      q: "What support is available post-migration?",
      a: "We offer ongoing managed services, including system maintenance, performance monitoring, and upgrades. Our experts will also assist with training and support to ensure a smooth post-migration experience.",
    },
    {
      q: "How does Oracle Eloqua help with regulatory compliance?",
      a: "Oracle Eloqua is designed to meet stringent data security and regulatory compliance standards. We ensure your data is handled in compliance with local and international regulations during the migration process.",
    },
  ]; // FAQs source section “Frequently Asked Questions - Oracle Eloqua Migration Essentials”. :contentReference[oaicite:1]{index=1}

  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="marketingautomationserviceseloquamigrationservices"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Migrate to Oracle Eloqua for Superior Marketing ROI"
        highlight="Superior Marketing ROI"
        description="Transition all your marketing data to the world-class Oracle Database with our expert-led services. Our project-focused approach ensures that your migration to Oracle Eloqua is seamless, helping you leverage the power of computing infrastructure to optimize your marketing efforts."
      />{/* Hero copy from page top. :contentReference[oaicite:2]{index=2} */}

      <EditableStatSection
        stats={[
          { label: "Oracle Eloqua Customers", value: "25+" },
          { label: "Certified Oracle Eloqua Experts", value: "20+" },
          { label: "Increase in Oracle Eloqua Campaign Efficiency", value: "30%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />{/* Stats figures from the page. :contentReference[oaicite:3]{index=3} */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Oracle Eloqua Migration Services We offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            With our expertise in server computing and database administration, our Oracle Eloqua migration services ensure your data is securely transferred, accurately mapped, and optimized for peak performance. Our experts help you navigate the complexities of Oracle Eloqua to unlock its full potential.
          </p>
          {/* Services intro from the page section. :contentReference[oaicite:4]{index=4} */}

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Cloud-Based Deployment",
                desc:
                  "Our cloud technology revolutionizes how you transition to Oracle Eloqua, offering managed services that streamline data migration and reduce maintenance costs. We help you:",
                bullets: [
                  "Connect your data center with Oracle Cloud Infrastructure (OCI)",
                  "Optimize Oracle Eloqua for cloud scalability",
                  "Adapt to changing market needs with the flexibility of cloud computing",
                  "Lower infrastructure costs through cloud deployment",
                ],
              },
              {
                title: "Managed Data Migration",
                desc:
                  "Our team ensures that your valuable data is securely migrated to Oracle Eloqua, minimizing risk and maintaining data quality. Key steps in our service provider model include:",
                bullets: [
                  "Assessing the structure, quality, and volume of your data",
                  "Mapping your data to Oracle Eloqua’s fields and performing verification and validation",
                  "Monitoring data integrity during the migration",
                  "Deploying advanced security measures to protect your data",
                ],
              },
              {
                title: "Reporting, Analytics, and Sales Funnel Optimization",
                desc:
                  "Maximize the value of your Oracle Eloqua migration by taking advantage of our advanced reporting and analytics solutions. We help you optimize every stage of the sales funnel for maximum ROI. Our services include:",
                bullets: [
                  "Configuring Oracle Eloqua’s reporting tools for real-time insights",
                  "Customizing analytics dashboards for data-driven decisions",
                  "Refining lead scoring, nurturing, and conversions for enhanced performance",
                  "Implementing agile strategies driven by data analysis",
                ],
              },
              {
                title: "Assessment and Migration Roadmap Planning",
                desc:
                  "Our migration process starts with an in-depth assessment of your current systems and future goals. This critical planning phase helps ensure a smooth transition. We:",
                bullets: [
                  "Uncover your business objectives through thorough consultation",
                  "Develop a tailored migration roadmap aligned with your target market and goals",
                  "Identify and mitigate potential challenges related to regulatory compliance",
                  "Ensure that the entire migration process is streamlined and risk-free",
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
          {/* Service cards filled from page section. :contentReference[oaicite:5]{index=5} */}
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
        heading="Sign up for a Complimentary Consultation"
        subtext="Transition all your marketing data to the world-class Oracle Database with our expert-led services."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />{/* CTA text from the page (“Sign up for a Complimentary Consultation” and hero subline). :contentReference[oaicite:6]{index=6} */}

      <Footer />
    </div>
  );
};

export default L3Template;

