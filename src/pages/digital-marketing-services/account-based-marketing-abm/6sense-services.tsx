
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from '@/components/ui/component_12';
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";

const L3Template = () => {
  // FAQs (from 6Sense Services page)
  const faqs = [
    {
      q: "How does 6Sense optimize Account-Based Marketing strategies?",
      a: "6Sense uses advanced data analysis and intent signals to identify high-value accounts and deliver personalized messaging, ensuring that your ABM strategies are targeted and effective.",
    },
    {
      q: "What is the role of predictive analytics in 6Sense campaigns?",
      a: "Predictive analytics allow businesses to anticipate customer behavior, enabling marketers to engage with prospects at the right time, improving conversion rates and campaign success.",
    },
    {
      q: "How does 6Sense enable dynamic content personalization?",
      a: "6Sense dynamically adjusts content in real-time based on user behavior, allowing you to deliver personalized experiences that resonate with prospects and increase engagement.",
    },
    {
      q: "What benefits do campaign analytics and reporting offer?",
      a: "Campaign analytics provide insights into campaign performance, lead attribution, and conversion paths, helping businesses refine their marketing strategies and improve outcomes.",
    },
    {
      q: "How does 6Sense integrate with existing marketing tools?",
      a: "Our 6Sense integration services ensure a seamless connection with your current tech stack, allowing for efficient data synchronization and enhanced marketing performance.",
    },
    {
      q: "What is intent monitoring, and why is it important?",
      a: "Intent monitoring tracks the behavior of your target audience, helping you understand their interests and engagement levels, which allows for more timely and relevant outreach.",
    },
    {
      q: "How does 6Sense enhance cross-selling and upselling opportunities?",
      a: "By analyzing customer behavior and intent data, 6Sense helps identify cross-sell and upsell opportunities, allowing you to deliver personalized offers that drive additional value.",
    },
    {
      q: "What is the impact of dynamic content on conversion rates?",
      a: "Dynamic content personalization ensures that each interaction is tailored to the prospect’s preferences, resulting in higher engagement and improved conversion rates.",
    },
    {
      q: "How does 6Sense improve decision-making in marketing strategies?",
      a: "6Sense provides actionable insights and detailed analytics, allowing businesses to make informed, data-driven decisions that enhance the effectiveness of their marketing strategies.",
    },
    {
      q: "How does 6Sense help businesses stay competitive in the market?",
      a: "By using predictive analytics, intent monitoring, and dynamic personalization, 6Sense helps businesses stay ahead of the competition by delivering targeted, relevant marketing efforts that drive engagement and conversion.",
    },
  ];

  // Recent Blogs (from the page’s Top Blogs) — unchanged from your old code
  const recentResources: ResourceItem[] = [
    {
      title: "4 CRO Best Practices to Drive Business Growth",
      subtitle: "Turn ad clicks into revenue by tightening UX, testing, and funnel clarity.",
      author: "Rukman Singh",
      date: "Dec 1, 2022",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400",
      slug: "cro-best-practices-drive-growth",
    },
    {
      title: "Mobile-Friendly Website Design: Enhance UX & Boost SEO",
      subtitle: "Mobile-first experiences improve engagement, rankings, and conversions.",
      author: "Rukman Singh",
      date: "Mar 7, 2022",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400",
      slug: "mobile-friendly-website-design",
    },
    {
      title: "Messy SEO – Improving Site Structure As Google’s Title Tag Change Affects CTRs",
      subtitle: "Why hierarchy and internal linking matter more than ever.",
      author: "Sakshi Arora",
      date: "Jan 10, 2022",
      readTime: "25 min read",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&h=400",
      slug: "improving-site-structure-title-tag-change",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="6Sense Services"
        highlight="to Deliver High-Quality Pipeline and Predictable Revenue"
        description="Our 6Sense services are designed to optimize your Account-Based Marketing (ABM) strategies, ensuring precision and impactful engagement with high-value accounts. By leveraging predictive analytics, intent data, and personalized marketing strategies, we help you drive better conversions and create predictable revenue streams for your B2B marketing efforts."
        // Optional: override countries or handle submit
        // countries={["India", "USA", "UK", "Canada"]}
        // onSubmit={async (data) => { /* send to API */ }}
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
            Key 6Sense Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our 6Sense services cover every aspect of ABM optimization, from data-driven insights to dynamic content personalization and predictive analytics, ensuring your marketing strategies resonate with key decision-makers.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Account-Based Marketing Optimization",
                desc: "We help you elevate your ABM initiatives by using 6Sense to identify and prioritize the most valuable accounts. Our experts design highly personalized campaigns that target key decision-makers, ensuring your outreach efforts are precise and impactful.",
                strongs: [],
                bullets: [
                  "Use 6Sense insights to pinpoint high-value accounts that align with your business objectives",
                  "Craft hyper-personalized campaigns that address the specific needs and preferences of key stakeholders",
                  "Leverage intent signals to engage with prospects at the right moment, ensuring maximum relevance and impact",
                ],
              },
              {
                title: "Predictive Analytics and Intent Monitoring",
                desc: "Stay ahead of your competitors by predicting your audience’s needs and monitoring their intent. 6Sense’s predictive analytics provide insights into your target audience’s behavior, allowing you to tailor your marketing strategies based on real-time data.",
                strongs: [],
                bullets: [
                  "Utilize predictive analytics to forecast your audience’s evolving needs and behaviors",
                  "Monitor the digital body language of your target audience using advanced intent monitoring tools",
                  "Design marketing efforts that engage prospects when their interest is at its highest, driving conversion rate optimization",
                ],
              },
              {
                title: "Dynamic Content personalization",
                desc: "Create personalized, memorable experiences for your prospects by leveraging 6Sense’s dynamic content personalization capabilities. Our strategies ensure that every interaction is tailored to your audience’s needs, fostering stronger connections and increasing engagement.",
                strongs: [],
                bullets: [
                  "Use behavioral retargeting and real-time analytics to tailor content based on prospect interactions",
                  "Leverage audience segmentation to categorize your audience according to their preferences and behaviors",
                  "Dynamically adjust content in real-time to ensure that it resonates with each prospect at every touchpoint",
                ],
              },
              {
                title: "Campaign Analytics and Reporting",
                desc: "Our 6Sense services include comprehensive campaign analytics to help you measure performance and make data-driven decisions. We provide detailed insights into lead attribution, conversion rates, and the customer journey, allowing you to refine your strategies for better outcomes.",
                strongs: [],
                bullets: [
                  "Gain access to campaign performance insights to make timely adjustments and optimize results",
                  "Understand the customer journey with detailed analysis of conversion paths and key milestones",
                  "Use custom reporting dashboards to get a holistic view of campaign success and areas for improvement",
                ],
              },
              {
                title: "6Sense Integration",
                desc: "Our integration services ensure that 6Sense fits seamlessly into your existing technology infrastructure, improving your multichannel marketing performance. We tailor the integration process to align 6Sense with your current tech stack, ensuring a smooth transition.",
                strongs: [],
                bullets: [
                  "Develop tailored integration plans that align with your business's unique tech stack",
                  "Utilize APIs to create seamless connections between 6Sense and your existing platforms",
                  "Ensure data integrity by carefully mapping and migrating data during the integration process",
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
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="ABM's Golden Hour - Let 6Sense Illuminate Your Success!"
        subtext="Unleash precision targeting, personalized experiences, and impactful engagement, turning every campaign into a golden opportunity for triumph."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/company/contact-services/"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
