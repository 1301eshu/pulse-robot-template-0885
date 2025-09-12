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
  // FAQs (from Optimizely page)
  const faqs = [
    {
      q: "What is a configurator in Optimizely, and how can it benefit my business?",
      a: "A configurator is a tool that allows you to create tailored user experiences by adjusting various variables and attributes, leading to higher engagement and conversions.",
    },
    {
      q: "How does Optimizely support A/B testing for websites and web applications?",
      a: "Optimizely facilitates A/B testing by enabling businesses to test different content and design variations, providing actionable data for optimization.",
    },
    {
      q: "What are the benefits of using Optimizely for a web application?",
      a: "Optimizely helps enhance the user experience of your web application through personalized content, usability testing, and advanced analytics for continuous improvement.",
    },
    {
      q: "How can I use variable and attribute research to optimize my digital strategy?",
      a: "Variable and attribute research involves testing different elements of your website to understand what drives user engagement and conversions, allowing for informed decisions.",
    },
    {
      q: "What is the role of open innovation in Optimizely’s services?",
      a: "Optimizely encourages open innovation, enabling businesses to collaborate and share insights that improve digital strategies and customer experiences.",
    },
    {
      q: "How does Optimizely handle digital distribution for websites?",
      a: "Optimizely aids in digital distribution by optimizing content for different channels and ensuring a smooth user experience across platforms.",
    },
    {
      q: "Can Optimizely improve my search engine indexing?",
      a: "Yes, Optimizely’s tools help refine content and structure for better search engine indexing, improving visibility and traffic.",
    },
    {
      q: "How do you measure the success of an Optimizely implementation?",
      a: "Success is measured using analytics tools, monitoring conversion rates, user behavior, and overall performance against your business KPIs.",
    },
    {
      q: "What is the importance of usability testing in Optimizely?",
      a: "Usability testing helps identify potential user experience issues, allowing you to refine your website or web application for better engagement.",
    },
    {
      q: "How does dynamic personalization work in Optimizely?",
      a: "Dynamic personalization in Optimizely uses customer data and behavior insights to tailor content and recommendations, creating more relevant and engaging user experiences.",
    },
  ]; // :contentReference[oaicite:1]{index=1}


  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="marketinganalyticsservicesconversionrateoptimizationcrooptimizely"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Optimizely Services"
        highlight="to Create Experiences That Your Customers Will Love"
        description="Whether you’re refining your web application or optimizing your website, we ensure you harness Optimizely’s full potential for maximum success. With a focus on variable and attribute research, we deliver data-driven insights that drive performance."
      />{/* :contentReference[oaicite:2]{index=2} */}

      <EditableStatSection
        stats={[
          { label: "Certified Web Analytics Experts", value: "30+" },
          { label: "Experiments Launched", value: "500+" },
          { label: "Websites Conversion Rates Optimized", value: "100+" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />{/* :contentReference[oaicite:3]{index=3} */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Optimizely Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Whether you're a start-up or an established enterprise, our Optimizely services are designed to empower your website and web application for a successful and impactful digital journey. We leverage open innovation and research-driven approaches to boost your digital performance.
          </p>
          {/* :contentReference[oaicite:4]{index=4} */}

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Strategic Implementation and Integration",
                desc:
                  "We specialize in the seamless integration of Optimizely within your deployment environment, ensuring it becomes a key tool for your digital success. By aligning your product (business) with the best digital distribution strategies, we create personalized customer journeys.",
                bullets: [
                  "Conduct a thorough analysis of your existing digital infrastructure to identify optimal integration points",
                  "Customize the implementation based on the specific goals of your website",
                  "Equip your team to leverage Optimizely’s customer service tools and ensure long-term success",
                ],
              },
              {
                title: "A/B Testing",
                desc:
                  "Our A/B testing refines variable and attribute research to enhance the effectiveness of your digital experiences. We guide you through testing variations, driving decisions that boost user engagement and conversions.",
                bullets: [
                  "Craft diverse content variations, focusing on key product (business) elements like headlines, images, and calls to action",
                  "Conduct comprehensive data analysis for actionable insights into your search engine indexing and digital performance",
                  "Facilitate continuous iteration and usability testing for optimized results",
                ],
              },
              {
                title: "Dynamic Personalization",
                desc:
                  "Using Optimizely’s content management systems, we create personalized experiences that speak directly to your users. We analyze user information to craft experiences based on demographics and behavior, boosting engagement and driving conversions.",
                bullets: [
                  "Analyze audience segments and tailor experiences accordingly",
                  "Implement A/B testing strategies within your deployment environment",
                  "Utilize recommendation engines to provide personalized product suggestions",
                ],
              },
              {
                title: "Analytics and Reporting",
                desc:
                  "Leverage Optimizely’s advanced analytics for detailed measurement and reporting. We help you track user behavior, optimize conversion rates, and fine‑tune your strategy to meet business goals.",
                bullets: [
                  "Measure and optimize conversions through deep analysis of user journeys",
                  "Create reports aligned with your unique selling proposition and business KPIs",
                  "Use multivariate testing to refine multiple variables simultaneously",
                ],
              },
              {
                title: "Ongoing Support and Optimization",
                desc:
                  "Our support extends beyond launch. We provide ongoing optimization to keep your digital experience at peak performance. Stay up‑to‑date with the latest Optimizely features and maintain optimal search engine indexing for maximum visibility.",
                bullets: [
                  "Conduct regular assessments and optimizations for your Optimizely‑powered web application",
                  "Minimize downtime by addressing any issues promptly",
                  "Keep you informed of new features to enhance your digital strategy",
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
          {/* Services copied from the Optimizely page. :contentReference[oaicite:5]{index=5} */}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        title="Our Customers"
        description="At Growth Natives, we have served valuable customers and established strong partnerships with them whose skills and expertise complement and enrich our own."
      />{/* (section text on page) :contentReference[oaicite:6]{index=6} */}

      <AwardsSection />{/* :contentReference[oaicite:7]{index=7} */}

      {/* FAQs */}
      <FaqSection title="Frequently Asked Questions - Optimizely Essentials" faqs={faqs} />{/* :contentReference[oaicite:8]{index=8} */}

      {/* Recent Blogs - keep from old code */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to our best practices and resources from experienced."
          subTabs={[]}
                    resourceType="17"

        />
      </div>{/* :contentReference[oaicite:9]{index=9} */}

      <ContactCta
        heading="Crafting and Delivering Superior Digital Experiences Using Optimizely"
        subtext="Your story begins here, where superior experiences are crafted, refined, and delivered with precision and purpose."
        buttonLabel="Schedule a 1:1 Call"
        buttonLink="/get-started"
      />{/* :contentReference[oaicite:10]{index=10} */}

      <Footer />
    </div>
  );
};

export default L3Template;

