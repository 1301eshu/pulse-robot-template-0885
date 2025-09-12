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
  // FAQs (from VWO page)
  const faqs = [
    {
      q: "What is VWO and how does it help in conversion rate optimization?",
      a: "VWO is a platform that provides tools for conversion rate optimization, allowing businesses to improve their website’s performance through A/B testing, personalization, and data analysis.",
    },
    {
      q: "How does push technology improve user experience?",
      a: "Push technology helps keep users engaged by delivering timely notifications and updates, leading to better user retention and higher conversion rates.",
    },
    {
      q: "What is the role of a tracking system in digital marketing?",
      a: "A tracking system monitors user interactions and behavior on your website, providing valuable data to optimize the user experience and advertising campaigns.",
    },
    {
      q: "How do heat maps assist in conversion rate optimization?",
      a: "Heat maps visually represent user engagement with your site, helping you identify which elements are most effective in driving conversions.",
    },
    {
      q: "What is the return on investment (ROI) from using VWO services?",
      a: "VWO services improve your return on investment by optimizing your website’s performance, driving more conversions, and reducing drop-off rates.",
    },
    {
      q: "How does personalization impact conversion rates?",
      a: "Personalization, using personal data and customer data, enhances user experience by delivering content tailored to individual preferences, increasing conversion rates.",
    },
    {
      q: "Can VWO services be applied to mobile apps?",
      a: "Yes, VWO’s tools and services are effective for both websites and mobile apps, helping to optimize user engagement across all platforms.",
    },
    {
      q: "How can A/B testing improve an advertising campaign?",
      a: "A/B testing allows you to experiment with different versions of your advertising campaigns, ensuring the most effective version is implemented for better performance.",
    },
    {
      q: "What is scalability in the context of VWO services?",
      a: "Scalability refers to the ability to expand and adjust your digital strategies using VWO without compromising performance, ensuring sustainable growth.",
    },
    {
      q: "How does continuous performance measurement benefit a business?",
      a: "Continuous performance measurement provides real-time insights, allowing businesses to quickly address any issues and maintain high conversion rates over time.",
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="marketinganalyticsservicesconversionrateoptimizationcrovwo"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="VWO Services"
        highlight="Create Superior Digital Experience (DX) for Your Customers and Maximize Conversions"
        description="Our experts help you increase return on investment by optimizing your website’s user interface and tracking systems to maximize conversions and customer data insights. From advertising campaigns to creating scalable solutions, we guide you through every step to enhance success and achieve measurable outcomes."
      />{/* :contentReference[oaicite:1]{index=1} */}

      <EditableStatSection
        stats={[
          { label: "Certified Web Analytics Experts", value: "30+" },
          { label: "Experiments Launched", value: "500+" },
          { label: "Websites Conversion Rates Optimized", value: "100+" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />{/* :contentReference[oaicite:2]{index=2} */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key VWO Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Leveraging push technology and heat maps, we help track user activity, refine your mobile app experience, and optimize your digital strategy to drive success. We create a data‑driven, scalable digital experience that maximizes conversions and return on investment.
          </p>
          {/* :contentReference[oaicite:3]{index=3} */}

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "VWO Implementation and Optimization",
                desc:
                  "Strategic VWO implementation integrates push technology, ensuring that your advertising campaigns and digital platform align with business goals. We analyze user behavior through tracking systems and refine the user interface for better engagement.",
                bullets: [
                  "Start with a comprehensive analysis to identify areas for improvement",
                  "Optimize your website's elements like push technology to ensure a seamless journey from landing to conversion",
                  "Enhance conversion rate optimization by removing obstacles and streamlining the user journey",
                ],
              },
              {
                title: "Conversion Rate Optimization",
                desc:
                  "Our holistic approach to CRO helps you leverage VWO for precise improvements. Using real‑time data from our tracking systems, we conduct in‑depth analyses and optimize distribution channels for higher return on investment.",
                bullets: [
                  "Conduct deep analyses using heat maps and other tools to enhance your conversion funnel",
                  "Use A/B testing to ensure every change is informed by data and insights",
                  "Refine your mobile app and web interface to boost user engagement and conversion rates",
                ],
              },
              {
                title: "Personalization Strategies",
                desc:
                  "We employ personal data to create highly tailored experiences. By analyzing user behavior and preferences, we craft personalized strategies that increase engagement and brand loyalty.",
                bullets: [
                  "Segment users based on behavior, demographics, and preferences",
                  "Create dynamic content tailored to individual customer data",
                  "Maximize engagement through a personalized, data‑driven approach",
                ],
              },
              {
                title: "A/B Testing",
                desc:
                  "A/B testing lets you make data‑backed decisions for continuous improvement. Our expertise ensures every test delivers valuable insights to refine your advertising campaigns and boost return on investment.",
                bullets: [
                  "Develop tests aligned with your business objectives",
                  "Analyze results to make informed decisions",
                  "Implement successful variations that enhance your user interface and website performance",
                ],
              },
              {
                title: "Continuous Performance Analytics",
                desc:
                  "Real‑time analytics are key to staying ahead of the competition. We offer continuous performance measurement to monitor and adjust strategies based on user behavior.",
                bullets: [
                  "Use real‑time insights from tracking systems to inform decisions",
                  "Identify conversion bottlenecks and optimize the user journey",
                  "Leverage scalability to continuously enhance your website’s performance and maximize success",
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
      />{/* :contentReference[oaicite:4]{index=4} */}

      <AwardsSection />{/* :contentReference[oaicite:5]{index=5} */}

      {/* FAQs */}
      <FaqSection title="Frequently Asked Questions - VWO Essentials" faqs={faqs} />{/* :contentReference[oaicite:6]{index=6} */}

      {/* Recent Blogs - keep from old code */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to best practices and resources from our CMS experts."
          subTabs={[]}
                    resourceType="17"

        />
      </div>

      <ContactCta
        heading="Sign up for a Complimentary Consultation"
        subtext="Our experts help you increase return on investment by optimizing your website’s user interface and tracking systems to maximize conversions and customer data insights."
        buttonLabel="Schedule a 1:1 Call"
        buttonLink="/get-started"
      />{/* :contentReference[oaicite:7]{index=7} */}

      <Footer />
    </div>
  );
};

export default L3Template;

