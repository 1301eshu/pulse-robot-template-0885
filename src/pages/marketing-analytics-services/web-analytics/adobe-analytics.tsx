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
  // FAQs (from Adobe Analytics page)
  const faqs = [
    {
      q: "What is Adobe Analytics?",
      a: "Adobe Analytics is a powerful web analytics and marketing analytics solution offered by Adobe. It allows businesses to collect, analyze, and interpret data from their websites, mobile apps, and other digital channels. Adobe Analytics provides valuable insights into user behavior, enabling organizations to make informed decisions, optimize digital experiences, and drive business growth.",
    },
    {
      q: "How Does Adobe Analytics Work?",
      a: "Adobe Analytics works by collecting data through various tracking methods, such as JavaScript tags and SDKs, and then centralizing and processing this data in the Adobe Analytics platform. It utilizes visitor tracking, clickstream analysis, and other metrics to provide a comprehensive view of user interactions with your digital assets. Users can create custom reports and dashboards, apply segmentation, and use predictive analytics to extract meaningful insights from the data.",
    },
    {
      q: "What Can I Track With Adobe Analytics?",
      a: "Adobe Analytics enables you to track a wide range of metrics and dimensions related to your digital properties. You can monitor website traffic, user engagement, conversion rates, and revenue. Additionally, you can track specific events, such as clicks, downloads, form submissions, and video views. It also offers advanced tracking capabilities for e-commerce, mobile apps, and marketing campaigns.",
    },
    {
      q: "How Can Adobe Analytics Benefit My Business's Growth?",
      a: "Adobe Analytics can benefit your business in several ways. It provides data-driven insights that help you understand customer behavior, preferences, and pain points. By optimizing your digital experiences based on these insights, you can enhance user satisfaction, increase conversions, and boost revenue. Adobe Analytics also supports marketing campaign optimization, allowing you to allocate resources more effectively and maximize your return on investment (ROI).",
    },
     {
      q: "Can Adobe Analytics be Used for eCommerce Websites?",
      a: "Yes, Adobe Analytics is well-suited for e-commerce websites. It provides specific features for tracking online transactions, cart abandonment, conversion funnels, and product performance. These features help e-commerce businesses optimize their websites for better sales and user experiences.",
    },
     {
      q: "Can I Integrate Adobe Analytics with Other Adobe Products?",
      a: "Yes, Adobe Analytics seamlessly integrates with other Adobe Marketing Cloud solutions such as Adobe Target, Adobe Audience Manager, and Adobe Campaign. This integration allows you to create a comprehensive digital marketing ecosystem that maximizes the impact of your campaigns and data.",
    },
     {
      q: "Is Adobe Analytics Suitable for Mobile App Analytics?",
      a: "Absolutely. Adobe Analytics offers robust mobile app analytics capabilities, allowing you to track user interactions within your mobile applications. It helps you understand user behavior, optimize app experiences, and drive user engagement.",
    },
     {
      q: "What’s Next If I Choose Growth Natives to Assist Me With Adobe Analytics Services?",
      a: "You can send us an email to info@growthnatives.com and our team will get back to you promptly. We’ll schedule an initial consultation to discuss your specific needs and tailor our services to match your business goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="marketinganalyticsserviceswebanalyticsadobeanalytics"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Adobe Analytics Services"
        highlight="for In-Depth Analysis, Versatile Reporting, and Predictive Intelligence"
        description="Get actionable insights to deliver personalized experiences at scale. Adobe Analytics allows you to get data-driven insights to find the deepest, most actionable views into helping your customers in real-time."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Experience", value: "10+" },
          { label: "Implementation done", value: "50+" },
          { label: "Digital Analytics experts", value: "30+" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Adobe Analytics Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Whether you're a seasoned data expert or just beginning your data analysis journey, our comprehensive suite of services empowers you to harness the full potential of your data and turn it into actionable insights.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Setting Up Adobe Analytics",
                desc:
                  "Setting up Adobe Analytics correctly is the crucial first step towards unlocking the full potential of your data. Our experts will ensure that your analytics infrastructure is tailored to your specific needs and objectives, enabling you to make informed decisions from day one.",
                bullets: [
                  "We closely work with your team to tailor Adobe Analytics to your specific business needs",
                  "Configure the platform to collect the right data and metrics through advanced machine learning algorithms",
                  "Handle the intricate details of tracking implementation",
                  "Integrating it seamlessly with your existing systems and tool",
                ],
              },
              {
                title: "Collecting and Analyzing Data",
                desc:
                  "Data is the heart and soul of an organization for informed decision-making. Gather, interpret, and utilize customer data effectively to optimize your marketing strategy and drive better ROI. Start your data-driven journey with confidence, knowing that you have a dedicated predictive modeling partner for your Adobe Analytics endeavors.",
                bullets: [
                  "Implement data collection methods to gather information from multiple sources",
                  "Ensure a holistic view of customer interactions by integrating data from various channels",
                  "Break down data into meaningful groups for precise analysis",
                  "Identify bottlenecks in your conversion process",
                ],
              },
              {
                title: "Enhancing User Engagement",
                desc:
                  "User engagement is at the heart of your digital success. That’s why we help you connect more deeply with your audience and drive meaningful interactions. Be on your way to creating a loyal customer base that actively engages with your brand.",
                bullets: [
                  "Implement advanced personalization techniques to deliver tailored content",
                  "Enable in-depth behavioral analysis to understand how users interact with your digital assets",
                  "Conduct rigorous A/B testing to identify the most effective design elements",
                  "Optimize your content strategy",
                ],
              },
              {
                title: "Analyzing Website Traffic",
                desc:
                  "Analyze and understand your website’s traffic and optimize your marketing strategy accordingly. It’s the first step toward optimizing user experiences, improving conversions, and making data-driven decisions.",
                bullets: [
                  "Get real-time data on website visitors",
                  "Get detailed user profiles to tailor your content and offerings",
                  "Identify drop-off points in your conversion funnel",
                  "Gain insights into your mobile traffic to optimize your website for a seamless mobile experience",
                ],
              },
              {
                title: "Optimizing Marketing Campaigns",
                desc:
                  "Gain deep insights into customer behavior, fine-tune your marketing campaigns for maximum impact, identify growth opportunities, and make data-driven decisions that drive success.",
                bullets: [
                  "Understand what's working and what needs improvement",
                  "Identify and segment your audience with precision",
                  "Identify bottlenecks in the customer journey and implement strategies to increase conversion",
                  "Use A/B testing to refine your marketing strategies",
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
      />

      <AwardsSection />

      {/* FAQs */}
      <FaqSection title="Frequently Asked Questions - Adobe Analytics Essentials" faqs={faqs} />

      {/* Recent Blogs - keep from old code */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to best practices and resources from our CMS experts."
          subTabs={[]}
            resourceType="195"
        />
      </div>

      <ContactCta
        heading="Gain More Accurate Customer Insights, Faster Than Ever With Adobe Analytics"
        subtext="Get the rich insights you need to build better customer experiences with in-depth analysis, versatile reporting, and predictive intelligence."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

