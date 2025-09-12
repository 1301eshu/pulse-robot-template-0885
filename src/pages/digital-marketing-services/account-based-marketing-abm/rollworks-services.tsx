import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from "@/components/ui/component_12";
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";
import DynamicSEO from "@/components/DynamicSEO";

const L3Template = () => {
  // FAQs (from Rollworks Services page)
  const faqs = [
    {
      q: "How does Rollworks enhance Account-Based Marketing?",
      a: "Rollworks provides advanced targeting tools and data-driven insights, enabling businesses to craft personalized ABM strategies that resonate with high-value accounts and drive better business outcomes.",
    },
    {
      q: "What is precision audience targeting, and why is it important?",
      a: "Precision audience targeting involves segmenting your audience based on key data points like behavior and engagement, ensuring your campaigns are relevant and resonate with the right people for better engagement and conversion.",
    },
    {
      q: "How does dynamic retargeting improve customer engagement?",
      a: "Dynamic retargeting delivers personalized messages based on user actions, keeping your brand top-of-mind and increasing the likelihood of conversions by providing relevant, timely touchpoints.",
    },
    {
      q: "Why are data-driven insights essential in marketing?",
      a: "Data-driven insights help you understand campaign performance and audience behavior, enabling you to make informed decisions and optimize your marketing strategies for better return on investment (ROI).",
    },
    {
      q: "How does Rollworks contribute to multichannel marketing?",
      a: "Rollworks allows businesses to implement multichannel marketing strategies, ensuring a consistent brand message across various channels and touchpoints, which improves customer experience and engagement.",
    },
    {
      q: "What role does audience segmentation play in Rollworks campaigns?",
      a: "Audience segmentation enables businesses to divide their target market into more specific groups, making it easier to deliver tailored content that speaks to the unique needs and interests of each segment.",
    },
    {
      q: "How does Rollworks help in strategic decision-making?",
      a: "By providing actionable data and insights into campaign performance, Rollworks helps businesses refine their marketing strategies and make informed decisions that align with their business objectives.",
    },
    {
      q: "What is the impact of personalized messaging in ABM?",
      a: "Personalized messaging fosters deeper connections with target accounts, ensuring that your outreach addresses their specific needs and concerns, which increases engagement and drives conversions.",
    },
    {
      q: "How does Rollworks measure campaign success?",
      a: "Rollworks provides detailed metrics on engagement, conversion rates, and overall campaign performance, allowing you to track your progress and optimize your strategies for better results.",
    },
    {
      q: "What is the benefit of using Rollworks for storytelling in marketing?",
      a: "Rollworks helps you craft personalized, data-driven stories that resonate with your audience, enhancing the effectiveness of your content strategy and making your brand more relatable and engaging.",
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="digitalmarketingservicesaccountbasedmarketingabmrollworksservices"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Rollworks Services for Precision Targeting, Powerful Results, and ABM Excellence"
        highlight=""
        description="Our Rollworks services are designed to help you achieve precise targeting, impactful results, and Account-Based Marketing (ABM) excellence. By leveraging the Rollworks platform, we assist businesses in crafting strategies that resonate with their audience, ensuring meaningful engagement and business growth."
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
            Key Rolloworks Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            From precision-targeted campaigns to expert-led ABM, our Rollworks services are tailored to help brands optimize their digital display advertising and achieve lasting results in the competitive digital landscape.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Account-Based Marketing",
                desc:
                  "ABM is at the core of creating meaningful connections with high-value accounts. We help you use Rollworks to navigate the intricacies of ABM, ensuring your marketing strategies are precise, relevant, and resonate with the right customer personas.",
                bullets: [
                  "Pinpoint and engage high-value accounts, allocating resources to the most impactful areas",
                  "Craft personalized messages for specific accounts to deepen connections",
                  "Implement a multichannel marketing approach, reaching prospects across various touchpoints for better engagement",
                ],
              },
              {
                title: "Precision Audience Targeting",
                desc:
                  "In today’s digital landscape, reaching the right audience is essential. Our audience segmentation expertise, combined with Rollworks’ data analytics, allows for precise targeting, resulting in impactful engagement and conversions.",
                bullets: [
                  "Leverage data to understand your audience’s behavior, preferences, and interaction patterns",
                  "Segment your audience based on demographics, behavior, and engagement levels",
                  "Create customized content that speaks to the unique needs of your target audience",
                ],
              },
              {
                title: "Dynamic Retargeting Strategies",
                desc:
                  "Dynamic retargeting ensures that your messaging remains relevant and personalized throughout the customer journey. With Rollworks, we craft retargeting strategies that drive meaningful connections and conversions.",
                bullets: [
                  "Deliver tailored messages that resonate with individual users to boost conversion rates",
                  "Use advanced tracking to retarget users based on their specific actions",
                  "Retarget across multiple digital channels, providing a cohesive customer experience",
                ],
              },
              {
                title: "Data-Driven Insights and Analytics",
                desc:
                  "Data is essential for making informed decisions and driving strategic growth. We help businesses harness the power of Rollworks data analytics to optimize campaigns, gain insights, and drive customer success.",
                bullets: [
                  "Gain a holistic view of your campaigns with detailed metrics, covering engagement and conversion rates",
                  "Receive tailored reports aligned with your specific business goals for actionable insights",
                  "Identify opportunities for improvement through ongoing campaign analysis",
                ],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-xl p-8 text-left shadow-sm transition-all duration-300 group-hover/card-container:opacity-40 hover:!opacity-100"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#0F172A]">
                  {card.title}
                </h3>
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
           resourceType="11"
        />
      </div>

      <ContactCta
        heading="Convert High-Value Accounts and Generate Better ROI With Rollworks"
        subtext="Transform your outreach with precision targeting, tailored campaigns, and strategic guidance and elevate your ROI in the competitive digital landscape."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

