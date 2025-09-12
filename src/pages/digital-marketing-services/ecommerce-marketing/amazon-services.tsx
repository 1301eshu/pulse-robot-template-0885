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
  // FAQs (from Amazon Marketing Services page)
  const faqs = [
    {
      q: "How do you optimize budget and cost-efficiency in Amazon campaigns?",
      a: "We optimize budget and cost-efficiency by using data-driven insights to refine bidding strategies, ensuring you achieve a high ROI from your online advertising efforts.",
    },
    {
      q: "How can product listing optimization improve my brand’s visibility?",
      a: "By crafting compelling headlines, keyword-rich descriptions, and optimizing pricing, product listing optimization enhances your brand’s visibility on Amazon and helps capture user intent.",
    },
    {
      q: "What makes your Amazon advertising campaigns successful?",
      a: "Our creativity in ad design, combined with precise targeting and competitive bidding, ensures that your advertising campaign reaches the right audience and maximizes brand awareness.",
    },
    {
      q: "How do you ensure successful product launches on Amazon?",
      a: "We implement targeted campaigns, promotional pricing, and customer engagement strategies to build buzz around your product, driving early sales and establishing brand loyalty.",
    },
    {
      q: "What is included in your detailed reporting?",
      a: "Our reports provide a breakdown of sales, ad performance, click-through rates, and consumer behaviour insights, offering a clear view of how well your products are performing.",
    },
    {
      q: "How do you handle vendor account management on Amazon?",
      a: "We manage all aspects of your vendor account, from product listing optimization to inventory management and order fulfillment, ensuring seamless operations and a competitive edge.",
    },
    {
      q: "Can you help with creative ad formats like video?",
      a: "Yes, we can leverage Amazon’s video ad formats to reach broader audiences and enhance your product’s visibility, making your advertising campaign even more engaging.",
    },
    {
      q: "How do you help improve conversion rates on Amazon?",
      a: "We focus on consumer behaviour, strategic pricing, and advertising campaign optimization to ensure your online presence is primed for maximum conversion.",
    },
    {
      q: "What’s your approach to building brand awareness on Amazon?",
      a: "We use a mix of advertising, content strategy, and promotional campaigns to drive brand awareness, ensuring your products remain top-of-mind for potential customers.",
    },
    {
      q: "How do you integrate creativity into your Amazon marketing strategies?",
      a: "Our creativity shines through in ad design, product presentation, and campaign strategies, helping your brand stand out from the competition and resonate with your target audience.",
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="digitalmarketingservicesecommercemarketingamazonmarketingservices"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Amazon Marketing Services"
        highlight="to Boost Visibility and Drive Sales"
        description="With high conversion rates and a cost-effective approach, Amazon provides a goldmine of strategic planning opportunities for businesses. Our experts harness the full power of Amazon to help your brand thrive, ensuring that your online advertising and shopping campaigns maximize ROI while driving brand awareness and sales."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Expertise", value: "100+" },
          { label: "Improved Conversion Rate", value: "50%" },
          { label: "Average Increase in Clients’ Revenue", value: "56%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Amazon Marketing Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our tailored Amazon services are designed to elevate your business and capture user intent, helping your brand stand out amidst fierce competition. By focusing on creativity, precision targeting, and optimized pricing strategies, we ensure your business reaches new heights.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Amazon Account Management",
                desc:
                  "Successfully navigating Amazon requires meticulous account management. Our team ensures that your vendor account operates seamlessly, improving visibility and competitiveness.",
                bullets: [
                  "Optimize product listings to enhance visibility and pricing competitiveness",
                  "Manage inventory levels to meet consumer behavior demands and ensure timely delivery",
                  "Streamline order fulfillment to maximize efficiency and customer satisfaction",
                ],
              },
              {
                title: "Product Listing Optimization",
                desc:
                  "Enhance your product visibility on Amazon with compelling, SEO-optimized listings. Our product listing optimization services help you shine in the crowded marketplace, maximizing user intent and discoverability.",
                bullets: [
                  "Craft engaging product descriptions that highlight features and benefits",
                  "Develop keyword-rich titles that align with Amazon's search algorithms",
                  "Strategically integrate relevant keywords throughout the listing to improve visibility in Google and Amazon search results",
                ],
              },
              {
                title: "Amazon Advertising Campaigns",
                desc:
                  "Maximize your budget and ROI with precise advertising campaigns. We create targeted campaigns that focus on delivering results through cost-efficient bidding strategies and creativity.",
                bullets: [
                  "Develop targeted campaigns to reach your specific target market",
                  "Design compelling ad creatives to highlight your unique selling points",
                  "Focus on achieving a low CPC while driving high conversion rates",
                ],
              },
              {
                title: "New Product Launch",
                desc:
                  "Launching a new product on Amazon can take your business to the next level. We help you build excitement and brand awareness with tailored launch strategies.",
                bullets: [
                  "Create and manage advertising campaigns that reach your ideal audience",
                  "Engage early customers to generate positive reviews, enhancing your product's online identity",
                  "Implement discounts and limited-time offers to drive urgency and shopping interest",
                ],
              },
              {
                title: "Detailed Reporting",
                desc:
                  "Transparency is key to strategic planning. Our detailed reporting provides you with the insights needed to make informed decisions and continuously optimize performance.",
                bullets: [
                  "Provide in-depth insights into sales, budget, and revenue data",
                  "Analyze the performance of your advertising campaigns in detail",
                  "Tailor reports to your specific needs, offering insights into consumer behaviour and product success",
                ],
              },
              {
                title: "Additional Services",
                desc:
                  "To further enhance your Amazon marketing efforts, we offer supplementary services that integrate creativity with advanced tools.",
                bullets: [
                  "Utilize Amazon’s video ad formats to reach a wider audience and increase visibility",
                  "Implement promotional campaigns that align with your brand awareness strategy",
                  "Coordinate with Amazon's fulfillment services to ensure efficient delivery and boost customer satisfaction",
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
           resourceType="201"
        />
      </div>

      <ContactCta
        heading="Get in Front of Amazon’s Premium Audience That is All Ready to Purchase"
        subtext="Empower your brand to capture the attention of customers actively seeking products like yours."
        buttonLabel="Sign up for a Complimentary Consultation"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
