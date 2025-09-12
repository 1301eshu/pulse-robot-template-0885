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
  // FAQs (from Mailchimp Services page)
  const faqs = [
    {
      q: "How does Mailchimp improve email campaign performance?",
      a: "Mailchimp provides powerful tools such as audience segmentation, automation, and A/B testing, which allow for more personalized, targeted, and efficient email campaigns that resonate with subscribers.",
    },
    {
      q: "What benefits do I get from Mailchimp automation services?",
      a: "Our automation services streamline your marketing efforts, save time, and improve engagement by sending personalized messages to the right audience at the right time.",
    },
    {
      q: "How does audience segmentation work in Mailchimp?",
      a: "We use Mailchimp’s advanced tools to divide your audience into segments based on demographics, behaviors, and preferences, enabling you to send more relevant and targeted email campaigns.",
    },
    {
      q: "What is the importance of A/B testing in email marketing?",
      a: "A/B testing helps identify which email elements perform better, such as subject lines, designs, or content, allowing you to optimize future campaigns for improved performance.",
    },
    {
      q: "How do Mailchimp analytics help improve email marketing?",
      a: "Mailchimp’s analytics provide insights into key metrics like open rates, click-through rates, and conversion rates. We use this data to refine your campaigns and improve overall effectiveness.",
    },
    {
      q: "How can Mailchimp help with personalized marketing?",
      a: "Mailchimp allows for personalized messaging based on audience behavior, preferences, and segmentation, improving customer engagement and conversion rates.",
    },
    {
      q: "What makes Mailchimp a good tool for customer engagement?",
      a: "Mailchimp’s comprehensive features like automation, segmentation, and A/B testing enable you to send tailored content that resonates with your audience, increasing engagement.",
    },
    {
      q: "Can Mailchimp handle large-scale campaigns?",
      a: "Yes, Mailchimp is highly scalable and can handle large email campaigns while ensuring deliverability and performance through its robust infrastructure.",
    },
    {
      q: "How do we prevent email spamming with Mailchimp?",
      a: "Mailchimp’s tools ensure compliance with anti-spam regulations, and we set up campaigns that are targeted and relevant, reducing the likelihood of being marked as spam.",
    },
    {
      q: "How does Mailchimp contribute to brand awareness?",
      a: "By delivering consistent and personalized emails to your audience, Mailchimp helps boost brand visibility, awareness, and customer loyalty.",
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="digitalmarketingservicesecommercemarketingmailchimpservices"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Mailchimp Services"
        highlight="to Drive Engagement and Accelerate Growth"
        description="Our Mailchimp experts utilize the platform’s powerful tools to elevate your email marketing campaigns, enhance customer engagement, and drive brand awareness. Whether it’s crafting personalized email experiences or implementing automation, we ensure that your marketing efforts achieve optimal results."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Experience", value: "100+" },
          { label: "Mailchimp Experts", value: "50+" },
          { label: "Improved Engagement", value: "56%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Mailchimp Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our tailored Mailchimp services help businesses harness the full potential of email marketing and automation to achieve measurable success.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Email Marketing Campaigns",
                desc:
                  "Unlock the power of targeted email marketing campaigns with Mailchimp. We create personalized, engaging campaigns designed to resonate with your audience and deliver results.",
                bullets: [
                  "Craft compelling and engaging email campaigns that align with your brand",
                  "Optimize email templates for better deliverability and readability",
                  "Implement segmentation and personalization to enhance campaign effectiveness",
                ],
              },
              {
                title: "Marketing Automation",
                desc:
                  "Our Mailchimp automation services enable you to streamline your marketing efforts, ensuring that you reach the right audience at the right time.",
                bullets: [
                  "Design and implement automated customer journeys to nurture leads and increase conversions",
                  "Utilize advanced automation features to save time and enhance efficiency",
                  "Ensure consistency in your email outreach with pre-scheduled campaigns",
                ],
              },
              {
                title: "Audience Segmentation",
                desc:
                  "Improve the relevance of your marketing with precise audience segmentation. We leverage Mailchimp’s powerful tools to ensure your message resonates with the right group of people.",
                bullets: [
                  "Segment your audience based on demographics, engagement, or behavior",
                  "Deliver targeted email content that matches the interests and needs of each segment",
                  "Analyze segment performance to optimize targeting strategies",
                ],
              },
              {
                title: "A/B Testing, Analytics, and Reporting",
                desc:
                  "Gain valuable insights and optimize your email marketing with A/B testing and data-driven analysis. We track performance and use data to continually improve your campaigns.",
                bullets: [
                  "Conduct A/B tests on subject lines, content, and design to identify the most effective versions",
                  "Monitor key metrics such as open rates, click-through rates, and conversion rates",
                  "Generate detailed reports with actionable insights to refine your email strategy",
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
        heading="Mailchimp Services to Drive Engagement and Accelerate Growth"
        subtext="Our Mailchimp experts utilize the platform’s powerful tools to elevate your email marketing campaigns, enhance customer engagement, and drive brand awareness. Whether it’s crafting personalized email experiences or implementing automation, we ensure that your marketing efforts achieve optimal results."
        buttonLabel="Sign up for a Complimentary Consultation"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
