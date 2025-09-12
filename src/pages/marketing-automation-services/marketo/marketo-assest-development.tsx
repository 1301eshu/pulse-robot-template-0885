import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from "@/components/ui/component_12";
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";

const L3Template = () => {
  // FAQs (from Marketo Asset Development page)
  const faqs = [
    {
      q: "How does Marketo asset development align with brand identity?",
      a: "Our Marketo asset development services ensure that all templates and marketing assets reflect your brand’s identity and messaging, creating a consistent and cohesive experience for your target market.",
    },
    {
      q: "Why are personalized email templates essential for market segmentation?",
      a: "Personalized email templates tailored to each recipient’s behavior improve engagement, allowing you to better target segments of your audience and increase the effectiveness of your personalized marketing.",
    },
    {
      q: "How can landing page templates improve conversion rates?",
      a: "Our custom landing pages are optimized for both design and functionality, with clear calls-to-action and forms that simplify the user journey, ultimately improving conversion rate optimization.",
    },
    {
      q: "What role does analytics play in Marketo asset development?",
      a: "We integrate built-in analytics tools to track the success of your marketing collateral, offering insights on performance and helping you make data-driven decisions to optimize your strategy.",
    },
    {
      q: "How does custom content like ebooks and webinars enhance marketing efforts?",
      a: "Ebooks, webinars, and similar assets allow you to engage with your niche market more effectively by offering valuable, informative content that aligns with your marketing strategy and drives lead generation.",
    },
    {
      q: "Why is it important to optimize assets for the Marketo platform?",
      a: "Optimizing content assets for Marketo ensures seamless integration with the platform’s tools, making it easier to track performance, engage with your audience, and generate actionable insights.",
    },
    {
      q: "How do lead generation forms impact data collection?",
      a: "Custom lead-generation forms allow you to collect valuable data from your target market, ensuring that the information aligns with your marketing goals and helps drive conversions.",
    },
    {
      q: "What benefits do A/B testing email campaigns provide?",
      a: "A/B testing allows you to experiment with different email formats, subject lines, and content, helping you determine which versions resonate best with your audience and result in higher engagement.",
    },
    {
      q: "How can website optimization drive better ROI?",
      a: "By analyzing website performance and making data-driven optimizations, we help improve customer experience, reduce bounce rates, and increase engagement, ultimately driving a higher return on marketing investment.",
    },
    {
      q: "What is the significance of continual performance tracking?",
      a: "Continual performance tracking ensures that your marketing strategy remains effective over time. By regularly assessing the impact of your assets, we can make adjustments to improve results and drive sustained growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Expert Marketo Asset Development Services for Maximum Impact"
        highlight=""
        description="Our Marketo asset development services are designed to streamline your marketing automation efforts by delivering customized, impactful marketing assets like tailored email templates, landing pages, forms, and lead nurturing campaigns."
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
            Key Marketo Asset Development Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our team of consultants, designers, and developers collaborates with your business to create custom assets that align with your brand and goals, ensuring your marketing materials are professional, engaging, and effective.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Custom Landing Page Templates",
                desc:
                  "We design high-converting landing pages that reflect your brand’s identity and enhance the user experience.",
                bullets: [
                  "Align landing pages with your brand and messaging",
                  "Ensure seamless user experience with easy‑to‑use forms and clear CTAs",
                  "Optimize templates for all devices with responsive design",
                  "Integrate dynamic content to personalize experience and increase conversions",
                ],
              },
              {
                title: "Personalized Email Templates",
                desc:
                  "Custom Marketo email templates tailored to each recipient’s interests and behaviors to drive higher engagement.",
                bullets: [
                  "Build custom email templates to enhance lead generation",
                  "Run A/B tests to optimize performance",
                  "Seamlessly integrate with Marketo for easy tracking",
                  "Personalize email content for effective segmentation",
                ],
              },
              {
                title: "Custom Marketo Asset Development for Demo",
                desc:
                  "Create tailored content assets that align with your marketing strategy-ebooks, whitepapers, webinars, and more.",
                bullets: [
                  "Develop content assets such as ebooks, webinars, and whitepapers",
                  "Create custom lead‑generation forms to capture valuable information",
                  "Design landing pages optimized for conversions",
                  "Ensure assets are optimized for seamless use within Marketo",
                ],
              },
              {
                title: "Performance Tracking with Analytics and Optimization",
                desc:
                  "Track and optimize your marketing collateral to maximize impact and ROI.",
                bullets: [
                  "Gather data on traffic, behavior, and conversion rates",
                  "Offer recommendations to optimize for better results",
                  "Gain a full view of the customer journey",
                  "Perform site maintenance and updates to drive growth",
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
          resourceType="40"
        />
      </div>

      <ContactCta
        heading="Fast‑Track Your Marketing Endeavors With Top‑Notch Marketo Services"
        subtext="Start creating captivating content today with our Marketo asset development services."
        buttonLabel="Get Audit Now"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

