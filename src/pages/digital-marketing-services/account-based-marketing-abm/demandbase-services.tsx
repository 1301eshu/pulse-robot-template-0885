import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from '@/components/ui/component_12';
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactWithBg from "@/components/L3herobanner";
import ContactCta from "@/components/ui/component_6";
import DynamicSEO from "@/components/DynamicSEO";

const L3Template = () => {
  // FAQs (from Demandbase Services page)
  const faqs = [
    {
      q: "How does Demandbase improve ABM strategies?",
      a: "Demandbase uses predictive analytics and intent data to help businesses identify high-value accounts, craft personalized campaigns, and align marketing strategies with business goals for more impactful engagement.",
    },
    {
      q: "What role does intent data play in account targeting?",
      a: "Intent data from Demandbase helps identify accounts actively interested in your offerings, allowing you to prioritize accounts based on their level of engagement and interest.",
    },
    {
      q: "How does Demandbase integration improve marketing automation?",
      a: "By integrating Demandbase with your existing tech stack, we streamline data synchronization and ensure real-time updates, enhancing the efficiency of your marketing automation processes.",
    },
    {
      q: "How does personalization drive engagement in ABM?",
      a: "Personalized marketing messages tailored to the needs and behaviors of each target account improve engagement, ensuring that your content resonates with decision-makers and leads to better conversion rates.",
    },
    {
      q: "How can Demandbase help with upselling and cross-selling?",
      a: "Demandbase insights provide a 360-degree view of customer behavior, allowing you to identify opportunities for upselling and cross-selling by delivering personalized offers based on the account’s interests and needs.",
    },
    {
      q: "How do predictive analytics enhance lead generation?",
      a: "Predictive analytics use historical data and intent signals to predict which accounts are most likely to convert, helping businesses focus their lead generation efforts on high-value opportunities.",
    },
    {
      q: "What benefits does Demandbase bring to the purchase funnel?",
      a: "Demandbase helps streamline the purchase funnel by delivering personalized content at every stage, ensuring that key decision-makers receive the right information to move them closer to a purchase decision.",
    },
    {
      q: "How does Demandbase improve click-through rates (CTR)?",
      a: "By delivering hyper-personalized content tailored to user preferences and behaviors, Demandbase helps increase engagement and CTR, leading to more conversions and a higher return on marketing investment.",
    },
    {
      q: "How does Demandbase support marketing management?",
      a: "Demandbase provides actionable insights through web analytics and performance measurement, allowing marketers to make informed decisions, optimize campaigns, and achieve better results.",
    },
    {
      q: "How can Demandbase drive business growth in competitive markets?",
      a: "Demandbase leverages market segmentation, consumer behavior analysis, and real-time data to enable businesses to stay ahead of the competition by delivering more targeted and impactful campaigns.",
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="digitalmarketingservicesaccountbasedmarketingabmdemandbaseservices"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Demandbase Services"
        highlight="to Build an Account-Based Foundation for 2X Value and 3X Targeting"
        description="Our Demandbase services are designed to maximize the potential of account-based marketing (ABM) by helping you identify high-value accounts and deliver personalized marketing messages with precision."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Experience", value: "100+" },
          { label: "Improve in Win Rate", value: "25%" },
          { label: "Increase in Deal Size", value: "2X" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Demandbase Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We provide a comprehensive suite of Demandbase services that focus on improving customer data utilization,
            predictive analytics, and targeted marketing strategies. Our services are designed to optimize your
            decision-making process and enhance your ability to engage high-value accounts.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Account-Based Marketing Strategies",
                desc:
                  "Our ABM strategies leverage Demandbase to ensure that your marketing efforts are precisely targeted at high-value accounts. We help you craft personalized campaigns that resonate with key decision-makers and drive business growth.",
                bullets: [
                  "Use Demandbase to identify and target high-value accounts that align with your business objectives",
                  "Create personalized marketing campaigns designed to appeal to key decision-makers",
                  "Utilize data analytics to gain actionable insights into your target audience and improve campaign precision",
                ],
              },
              {
                title: "Target Account Identification",
                desc:
                  "Identifying the right target accounts is crucial for effective ABM. Our approach uses Demandbase’s intent data and advanced market segmentation to ensure your resources are focused on accounts that present the highest potential for conversion.",
                bullets: [
                  "Pinpoint high-potential accounts using predictive analytics for optimal conversion opportunities",
                  "Use Demandbase’s intent data to identify accounts showing active interest in your offerings",
                  "Implement detailed filters based on industry, firmographics, and other key criteria to refine your target list",
                ],
              },
              {
                title: "Personalization and Engagement",
                desc:
                  "Personalization is key to improving customer engagement. We craft highly personalized messages and content for each high-value account, ensuring that your campaigns drive meaningful engagement across multiple channels.",
                bullets: [
                  "Develop personalized content and messaging that resonates with each account’s specific needs",
                  "Use real-time personalization on your website based on visitor attributes and behaviors",
                  "Maintain consistent personalization across all marketing channels to enhance engagement",
                ],
              },
              {
                title: "Demandbase Integration",
                desc:
                  "Seamless integration of Demandbase into your existing tech stack is critical to enhancing lead generation and optimizing your marketing performance. Our experts ensure that the integration process is smooth and efficient, helping you maximize the value of your technology investments.",
                bullets: [
                  "Analyze your current tech stack to identify integration opportunities with Demandbase",
                  "Develop a customized integration roadmap tailored to your business goals",
                  "Implement data synchronization processes to ensure consistency and real-time updates across platforms",
                ],
              },
              {
                title: "Lead Generation Strategies",
                desc:
                  "Our lead generation strategies leverage Demandbase insights to target high-value accounts with precision, ensuring that every lead generated is a strategic advantage for your business.",
                bullets: [
                  "Prioritize high-value accounts identified through Demandbase insights",
                  "Craft hyper-personalized campaigns that address the unique pain points of each target account",
                  "Use intent data to understand prospect behavior, enabling timely and targeted outreach",
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

      {/* Recent Blogs - Center heading only for this page */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to our best practices and resources from experienced."
          subTabs={[]}
           resourceType="11"
        />
      </div>

       <ContactCta
        heading="Ready to Get the ABM Gold Using Demandbase?"
        subtext="Turn your B2B marketing endeavors into a goldmine of success through the power of Account-Based Marketing (ABM) using Demandbase."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />
      
      <Footer />
    </div>
  );
};

export default L3Template;

