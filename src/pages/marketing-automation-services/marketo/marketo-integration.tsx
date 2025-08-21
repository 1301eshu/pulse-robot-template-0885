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
  // FAQs (from Marketo Integration page)
  const faqs = [
    {
      q: "How does custom Marketo integration improve workflows?",
      a: "Custom integrations streamline your workflows by automating manual tasks, improving efficiency, and enabling more personalized conversion marketing campaigns.",
    },
    {
      q: "Why is a 360-degree customer view important?",
      a: "A 360-degree customer view provides comprehensive insights into customer interactions across multiple channels, allowing for more targeted campaigns and improved alignment between sales and marketing.",
    },
    {
      q: "How do custom API integrations benefit my business?",
      a: "Marketo API integrations provide secure, real-time access to data, allowing your business to make agile, informed decisions while improving collaboration between platforms like CRM systems and ecommerce tools.",
    },
    {
      q: "What advantages does syncing custom data, objects, and fields offer?",
      a: "Syncing custom data, objects, and fields gives your business a more detailed view of customer behavior, enabling you to create more effective, personalized marketing campaigns.",
    },
    {
      q: "How can targeted campaigns enhance my marketing strategy?",
      a: "By using market segmentation and real-time data, you can deliver highly targeted campaigns that speak directly to customer needs, increasing engagement and improving conversion rates.",
    },
    {
      q: "Why is timely modification of integrations important?",
      a: "Regular updates and modifications ensure that your Marketo instance adapts to evolving business needs, maintaining the platform’s functionality and improving data accuracy.",
    },
    {
      q: "How do integration updates impact data accuracy?",
      a: "Timely updates ensure that all data models, systems, and platforms remain in sync, improving the overall data quality and providing more reliable insights for your campaigns.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Power Your Instance with Marketo Custom Integration Services"
        highlight=""
        description="Seamlessly connect your Marketo instance with other key marketing and sales tools to streamline workflows, enhance efficiency, and increase your marketing success. Our Marketo custom integration services are designed to meet your specific business needs, including integrations with CRM systems, web analytics, ecommerce platforms, and more."
      />

      <EditableStatSection
        stats={[
          { label: "Marketo Customers", value: "80+" },
          { label: "Certified Marketo Experts", value: "60+" },
          { label: "Increase in Marketo Campaign Efficiency", value: "30%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Marketo Custom Integration Services
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our services are tailored to provide you with robust integrations that support your marketing automation goals. By seamlessly integrating Marketo with your existing tools, you can improve data accuracy, streamline processes, and drive more effective conversion marketing results.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Marketo Custom Integration Services and Workflows",
                desc:
                  "Our custom integrations enhance workflows by reducing manual effort and improving campaign effectiveness. With these personalized solutions, Marketo is seamlessly integrated into your unique business processes.",
                bullets: [
                  "Optimize workflows for enhanced efficiency and productivity",
                  "Improve agility to adapt to changing business needs quickly",
                  "Gain deep insights through data analytics to inform decision-making",
                  "Ensure a seamless user experience, leading to higher satisfaction",
                ],
              },
              {
                title: "More Targeted Campaigns",
                desc:
                  "Deliver personalized messages based on recipient behavior, increasing engagement and improving lead quality. With access to comprehensive market segmentation data, we help you run more effective campaigns.",
                bullets: [
                  "Use comprehensive data models to deliver personalized campaigns",
                  "Improve understanding of customer behavior for relevant messaging",
                  "Optimize marketing spend by targeting the right audience at the right time",
                  "Boost campaign performance with real-time analytics and insights",
                ],
              },
              {
                title: "360-Degree Customer View",
                desc:
                  "Our services provide a 360-degree customer view, offering insights across multiple touchpoints, including websites, email, social media, and events. This enables you to align marketing strategy with customer behavior for more effective outreach.",
                bullets: [
                  "Centralized view of customer interactions and web content",
                  "Improved collaboration between sales and marketing teams",
                  "Use data-driven insights to optimize campaign strategies",
                  "Gain a complete understanding of customer preferences and behavior",
                ],
              },
              {
                title: "Timely Modifications and Integration Updates",
                desc:
                  "Ensure your Marketo platform continues to evolve with your business needs. We provide regular updates and modifications to your integrations, ensuring your platform runs smoothly and supports your conversion marketing efforts.",
                bullets: [
                  "Quick modifications to align with changing business opportunities",
                  "Seamless integration updates with minimal downtime",
                  "Improve data accuracy through regular updates and enhancements",
                  "Access expert support for ongoing platform functionality improvements",
                ],
              },
              {
                title: "Sync with Custom Data, Objects, and Fields",
                desc:
                  "Our integration services allow you to sync custom data, objects, and fields to gain deeper insights into customer behavior, enabling better segmentation and more personalized campaigns.",
                bullets: [
                  "Align data with unique business processes for maximum flexibility",
                  "Gain insights into customer behavior through the use of custom data",
                  "Seamlessly integrate custom data for improved efficiency and performance",
                  "Ensure data accuracy with custom integration solutions",
                ],
              },
              {
                title: "Build Marketo API Integrations",
                desc:
                  "Our Marketo API integration services provide a secure and flexible way to connect with other tools, such as CRM systems (Salesforce, HubSpot) and ecommerce platforms, ensuring real-time data access and improved decision-making.",
                bullets: [
                  "Access and share data flexibly using API integrations",
                  "Ensure data protection with industry-standard security protocols",
                  "Real-time access to data for informed, agile decision-making",
                  "Respond quickly to changes in customer behavior and market conditions",
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

      {/* Recent Blogs - keep from old code */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to best practices and resources from our CMS experts."
          subTabs={[]}
        />
      </div>

      <ContactCta
        heading="Sign Up For a Complimentary Consultation"
        subtext="Seamlessly connect your Marketo instance with other key marketing and sales tools to streamline workflows, enhance efficiency, and increase your marketing success."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

