import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from "@/components/ui/component_12";
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";

const L3Template = () => {
  // FAQs (from Walmart Services page)
  const faqs = [
    {
      q: "How can Walmart services enhance my website's performance?",
      a: "Our services focus on optimizing your website's product listings, improving navigation, and creating an engaging shopping experience that boosts sales and brand awareness.",
    },
    {
      q: "How do you ensure effective inventory management for Walmart vendors?",
      a: "We offer solutions that monitor stock levels, automate reordering, and use advanced analytics to forecast demand, ensuring efficient operations and improved customer service.",
    },
    {
      q: "What role does data analytics play in my business's success?",
      a: "Our data analytics services provide insights into consumer behavior, helping you optimize your commerce strategies and stay competitive in the marketplace.",
    },
    {
      q: "How do you ensure compliance with Walmart's standards?",
      a: "We conduct regular audits, maintain strict quality control, and ensure all necessary documentation is up to date, keeping your products in compliance with Walmart's regulations.",
    },
    {
      q: "What pricing strategies can you implement to boost my sales?",
      a: "We analyze competition, market trends, and customer preferences to create competitive pricing strategies that maximize ROI and attract customers.",
    },
    {
      q: "How can Walmart mobile app integration improve my customer experience?",
      a: "We integrate your products with Walmart's mobile app, offering a seamless shopping experience with enhanced navigation, advanced search, and engagement features like push notifications.",
    },
    {
      q: "How do you optimize logistics for faster and more efficient deliveries?",
      a: "We streamline order processing, optimize freight transport, and implement real-time tracking systems, ensuring timely deliveries and improved customer service.",
    },
    {
      q: "What role does promotion play in building brand awareness on Walmart?",
      a: "We implement data-driven promotional strategies to increase brand awareness, using targeted campaigns and real-time pricing adjustments to boost sales.",
    },
    {
      q: "How do you monitor the performance of my online store?",
      a: "Our data analytics and reporting services provide detailed insights into sales, consumer behavior, and marketing effectiveness, helping you make informed decisions.",
    },
    {
      q: "How do Walmart services help improve my competitive advantage?",
      a: "By offering strategic marketing research, pricing adjustments, and optimizing logistics, our Walmart services ensure that your business stays competitive and delivers exceptional results.",
    },
  ];

  // Recent Blogs (kept from old code)
  const recentResources: ResourceItem[] = [
    {
      title: "Choosing the Right CMS: WordPress, Drupal, or Shopify?",
      subtitle: "How to match your business goals with the right platform and ecosystem.",
      author: "Growth Natives Editorial",
      date: "May 8, 2024",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=400",
      slug: "choose-right-cms",
    },
    {
      title: "Headless CMS 101: Faster Content at Scale",
      subtitle:
        "Decouple your stack to deliver content to every channel, from web to mobile.",
      author: "Growth Natives Editorial",
      date: "Apr 18, 2024",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400",
      slug: "headless-cms-basics",
    },
    {
      title: "Migrating to a New CMS Without Losing SEO",
      subtitle: "A step-by-step playbook to preserve rankings and performance.",
      author: "Growth Natives Editorial",
      date: "Mar 27, 2024",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&h=400",
      slug: "cms-migration-seo",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Walmart Services for Enhanced"
        highlight="Operations and Better Logistics"
        description="Walmart's cutting-edge logistics and operational solutions empower businesses to thrive in the dynamic retail landscape. By focusing on innovation, streamlined processes, and effective shopping experiences, our services enable your brand to stay ahead of the competition while delivering superior results."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Experience", value: "100+" },
          { label: "Improved Conversion Rate", value: "50%" },
          { label: "Average Increase in Clients' Revenue", value: "56%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Walmart Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our Walmart services are crafted to improve your business's website performance, boost brand awareness, and optimize operations through precise measurement and strategic innovation.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Online Store Optimization",
                desc:
                  "Maximize the performance of your website on Walmart's platform by enhancing product listings and creating a seamless navigation experience.",
                bullets: [
                  "Craft compelling product listings to increase visibility",
                  "Elevate product pages with engaging content that improves conversion rates",
                  "Ensure a cohesive, attractive storefront aligned to your brand identity",
                  "Optimize the shopping experience across devices to increase engagement and sales",
                ],
              },
              {
                title: "Inventory Management Solution",
                desc:
                  "Efficient inventory management is critical for maintaining a smooth retail operation. Our solutions simplify and enhance your inventory processes.",
                bullets: [
                  "Monitor stock levels for agile decision-making and a streamlined supply chain",
                  "Automate reordering to prevent overstock or stockouts",
                  "Use advanced analytics for demand forecasting",
                  "Integrate with Walmart's systems for cohesive inventory and logistics management",
                ],
              },
              {
                title: "Data Analytics and Reporting",
                desc:
                  "Understand performance and capitalize on opportunities with actionable insights.",
                bullets: [
                  "Monitor and assess website performance with comprehensive metrics",
                  "Gain insights into consumer behavior and shopping trends",
                  "Identify emerging sales trends to adapt brand strategy",
                  "Leverage predictive analytics for strategic planning",
                ],
              },
              {
                title: "Compliance Assurance",
                desc:
                  "Meet Walmart's standards for quality and compliance to build trust and ensure regulations are met.",
                bullets: [
                  "Conduct regular audits and quality checks",
                  "Identify areas for improvement in compliance and product quality",
                  "Prepare and maintain required documentation for continued compliance",
                ],
              },
              {
                title: "Order Fulfillment and Logistics",
                desc:
                  "Optimize fulfillment for greater efficiency and customer satisfaction.",
                bullets: [
                  "Streamline order processing for faster, accurate fulfillment",
                  "Optimize freight transport to reduce costs and delivery times",
                  "Implement real-time tracking for better service and transparency",
                  "Ensure seamless communication across the supply chain",
                ],
              },
              {
                title: "Pricing and Promotion Strategies",
                desc:
                  "Develop competitive pricing and promotion strategies to attract customers and improve brand awareness.",
                bullets: [
                  "Analyze competition and market trends for optimal pricing",
                  "Implement promotional campaigns that drive sales and visibility",
                  "Adjust pricing in real time with data-driven insights",
                  "Monitor pricing performance to maximize ROI and retention",
                ],
              },
              {
                title: "Mobile App Integration",
                desc:
                  "Enhance the shopping experience by integrating your business with Walmart's mobile app.",
                bullets: [
                  "Develop user‑friendly interfaces to improve navigation and shopping",
                  "Implement advanced search for easy discoverability",
                  "Use push notifications and mobile features to engage customers",
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
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="Turbocharge Your Online Store and Streamline Your Supply Chain With Walmart"
        subtext="Leverage the extensive reach of Walmart's e-commerce platform to turbocharge your sales, reaching millions of potential customers."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
