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
  // FAQs (from HubSpot CRM Implementation page)
  const faqs = [
    {
      q: "Why is HubSpot Implementation Important?",
      a: "Effective HubSpot implementation ensures that your organization can fully leverage HubSpot’s features to streamline marketing, sales, and customer service efforts, resulting in improved efficiency and results.",
    },
    {
      q: "How Long Does it Take to Implement HubSpot?",
      a: "The timeline for HubSpot implementation can vary widely depending on the complexity of your requirements. Small businesses with straightforward needs might complete implementation in a matter of weeks, while larger enterprises might take several months.",
    },
    {
      q: "Can I Migrate Data from My Existing CRM or Marketing Platform to HubSpot?",
      a: "Yes, HubSpot provides data migration tools and services to help you transfer your data from other platforms. Data migration can vary in complexity, depending on your current system.",
    },
    {
      q: "Is HubSpot Implementation a One-Time Process?",
      a: "HubSpot implementation is typically a one-time setup, but ongoing optimization and updates may be necessary as your business evolves or as new HubSpot features are released.",
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="HubSpot CRM Implementation Services"
        highlight="for Maximum Performance & Impact"
        description="Revolutionize your customer relationship management, extend positive customer experience, and surpass your biggest growth goals with HubSpot CRM. Our HubSpot experts tailor services according to your unique needs, ensuring a smooth transition, strategic management, and rapid adoption of this game-changing platform for ensured customer satisfaction."
      />

      <EditableStatSection
        stats={[
          { label: "HubSpot Customers", value: "80+" },
          { label: "Certified HubSpot Experts", value: "40+" },
          { label: "Increase in HubSpot Campaign Efficiency", value: "30%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key HubSpot CRM Implementation Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our services are designed to seamlessly integrate this powerful tool into your business, enhancing your ability to connect, engage, and build lasting relationships with your customers with the help of predictive analytics and reliable customer data.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Setting Up HubSpot Portal",
                desc:
                  "Our team of experts will work with you to streamline the setup process of this business software, ensuring that you have everything you need to start managing your sales, marketing, and customer service operations effectively.",
                bullets: [
                  "Quick set up your Hubspot portal, ensuring that you can start taking advantage of its powerful marketing automation, enterprise resource planning, and sales process engineering features",
                  "Configure workflows to streamline your sales and marketing processes, saving time and effort",
                  "Create custom templates for your Hubspot pages and emails for consistent brand messaging",
                  "Track your success and make data-driven decisions",
                ],
              },
              {
                title: "Finding the Right Tech Stack",
                desc:
                  "Work closely with our team of experts to assess your business goals, improve data quality, enhance existing technology infrastructure and identify the best technology stack that suits your business needs to leverage HubSpot’s capabilities efficiently.",
                bullets: [
                  "Plan for growth with a scalable tech stack that aligns with HubSpot's dynamic offerings.",
                  "Craft a dynamic tech set up for lasting success, effectively harnessing HubSpot's capabilities.",
                  "Get assistance for overcoming any challenges that might surface throughout the integration process while building a right tech stack",
                  "Choose tools that offer optimal ROI and sync perfectly with HubSpot, ensuring budget-friendly success",
                ],
              },
              {
                title: "Customizing CRM and Data",
                desc:
                  "Tailor your HubSpot CRM to your specific needs and goals, ensuring that the data and insights collected are highly relevant and actionable. Thus, maximize your sales and marketing effectiveness.",
                bullets: [
                  "Tailored HubSpot CRM implementation and customization to align with your unique business operations",
                  "Data mapping and data migration services to ensure smooth data transfer",
                  "Cleaned and organized data to ensure accuracy and completeness",
                  "Data security measures implementation to protect your sensitive information",
                ],
              },
              {
                title: "Aligning HubSpot With Your Sales Processes",
                desc:
                  "Align your HubSpot setup with your sales process to identify and address any gaps in your current sales process and provide your sales team with the tools they need to close more deals.",
                bullets: [
                  "Conduct lead and contact management to better track and manage your prospects and customers",
                  "Outline the buyer’s journey for your target persona",
                  "Deploy reporting and analytics to provide valuable insights into your sales performance",
                  "Customization of workflows and pipelines to simplify your sales process",
                ],
              },
              {
                title: "Aligning Your OKRs With HubSpot Goals",
                desc:
                  "Identify key metrics and align your objectives and key results with your HubSpot CRM implementation goals. Thus, ensure that you have a clear and actionable plan for achieving your business goals.",
                bullets: [
                  "Set up OKRs to analyze areas to improve upon",
                  "Align your OKRs with your business goals and requirements",
                  "Quantify set-up OKRs for your HubSpot instance",
                  "Document goal progress at the end of each week",
                ],
              },
              {
                title: "Integrating HubSpot for Streamlined Business Processes",
                desc:
                  "Automate workflows and gain valuable insights by bringing all your data into one centralized platform. Explore harmonious tool integration possibilities to unlock HubSpot’s full capabilities.",
                bullets: [
                  "Connect your existing tools and systems with HubSpot",
                  "Ensure your integrations are set up and functioning correctly",
                  "Gain a 360-degree view of your customers",
                  "Keep all your data in one place and easily accessible",
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

      {/* Recent Blogs - kept from old code */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to best practices and resources from our CMS experts."
          subTabs={[]}
        />
      </div>

      <ContactCta
        heading="Sign up for a Complimentary Consultation"
        subtext="Revolutionize your customer relationship management, extend positive customer experience, and surpass your biggest growth goals with HubSpot CRM."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

