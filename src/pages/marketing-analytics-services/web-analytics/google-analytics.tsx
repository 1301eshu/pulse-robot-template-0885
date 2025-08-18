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
  // FAQs (from Google Analytics page)
  const faqs = [
    {
      q: "What is the significance of setting up a Google Analytics account for my business?",
      a: "Setting up a Google Analytics account allows you to track key metrics related to your website’s performance, user behavior, and conversion actions, providing essential insights for making data-driven decisions.",
    },
    {
      q: "How do custom dimensions and metrics improve data analysis in Google Analytics?",
      a: "Custom dimensions and metrics enable businesses to capture unique data points specific to their operations, providing a more granular view of user behavior and helping refine data models for better decision-making.",
    },
    {
      q: "Why is market segmentation important in Google Analytics?",
      a: "Market segmentation helps divide your audience into distinct groups based on behavior, demographics, and interests. This allows for more targeted campaigns and personalized user experiences, driving better conversion rates.",
    },
    {
      q: "How can predictive analytics help in marketing through Google Analytics?",
      a: "Predictive analytics allows businesses to forecast trends based on past user behavior, enabling proactive decision-making in marketing strategies and improving ROI by targeting the right audience at the right time.",
    },
    {
      q: "What are the advantages of integrating Google Analytics with other tools like Google Ads?",
      a: "Integrating Google Analytics with tools like Google Ads enables seamless data flow, allowing you to monitor campaign performance and optimize your advertising strategy based on comprehensive data insights.",
    },
    {
      q: "How does funnel reporting help in understanding customer behavior?",
      a: "Funnel reporting offers detailed insights into user journeys, identifying where potential customers drop off in the process. This helps businesses optimize their websites for smoother customer experiences and higher conversions.",
    },
    {
      q: "How does A/B testing in Google Analytics improve website performance?",
      a: "A/B testing allows businesses to compare different versions of their web elements, such as landing pages or CTAs. This testing improves performance management by identifying what works best for your target audience.",
    },
    {
      q: "What is the importance of real-time data in Google Analytics?",
      a: "Real-time data allows you to monitor user activity as it happens, providing immediate insights into campaign performance and user behavior, enabling quick adjustments to your marketing strategy.",
    },
    {
      q: "How do custom reports help in understanding Google Analytics data?",
      a: "Custom reports allow businesses to focus on the metrics that matter most to them, offering personalized insights that align with their business objectives and ensuring efficient data analysis.",
    },
    {
      q: "How does Google Analytics 360 benefit enterprise-level businesses?",
      a: " Google Analytics 360 provides enterprise-level businesses with access to unsampled data, deeper insights, and robust funnel reporting, enabling them to handle large datasets and make accurate, data-driven decisions.",
    },
  ];

  // Recent Blogs (keep from old code)
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
        heading="Google Analytics Services"
        highlight="for Comprehensive Insights into Your Website’s Performance"
        description="Understanding your website’s performance, market segmentation, and user behavior is crucial to driving success. We specialize in Google Analytics to provide your business with actionable insights, ensuring data-driven decisions that lead to growth."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Experience", value: "16+" },
          { label: "migrations done", value: "200+" },
          { label: "Digital Analytics experts", value: "30+" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Google Analytics Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our tailored Google Analytics services allow you to harness the full potential of data, providing a competitive edge through in-depth data models and advanced predictive analytics.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Setting Up Google Analytics Account",
                desc:
                  "The foundation of data-driven decision-making begins with setting up a robust Google Analytics account. Whether you’re managing an eCommerce platform or a small business site, we ensure that your analytics setup delivers clear, actionable information.",
                bullets: [
                  "Configure your GA account and dashboard.",
                  "Customize settings to align with your business goals.",
                  "Track key conversion actions across your digital assets, including websites and mobile apps.",
                  "Extend omnichannel tracking to integrate multiple platforms.",
                ],
              },
              {
                title: "Understanding the Google Analytics Reports",
                desc:
                  "We help you decipher the complex Google Analytics reports, providing deep data insights into user behavior, campaign performance, and content effectiveness. Our team breaks down intricate metrics to ensure you have the information you need for strategic growth.",
                bullets: [
                  "Simplify complex reports to focus on metrics that matter.",
                  "Offer personalized data analysis aligned with your business objectives.",
                  "Provide actionable insights that inform your marketing strategies.",
                  "Help you track performance trends in real-time.",
                ],
              },
              {
                title: "Leveraging Advanced Features of Google Analytics",
                desc:
                  "To maximize the effectiveness of your data model, it’s essential to leverage Google Analytics’ advanced features. We enable your business to tap into deeper insights, offering comprehensive data structure and custom dimensions that enhance your understanding of user interactions.",
                bullets: [
                  "Capture custom dimensions and metrics for detailed analysis.",
                  "Create advanced segments for specific customer experience tracking.",
                  "Integrate with other Google accounts and external platforms to import data.",
                  "Track user journeys across multiple domains or subdomains.",
                ],
              },
              {
                title: "Driving Rich Marketing Insights",
                desc:
                  "Our team unlocks marketing insights that drive smarter decisions and maximize your ROI. By analyzing user behavior, we refine your marketing efforts for optimal results.",
                bullets: [
                  "Improve user journeys and boost conversion rates.",
                  "Assess the impact of your marketing campaigns through data-backed insights.",
                  "Optimize content performance and personalization based on real-time user engagement.",
                  "Compare your performance with industry competitors using predictive analytics.",
                ],
              },
              {
                title: "Utilizing Google Analytics for Data Analysis",
                desc:
                  "We go beyond just collecting data—we empower your business with deep data analysis to improve customer experience and enhance your website’s performance. Through tailored reporting and A/B testing, we help refine every aspect of your marketing strategy.",
                bullets: [
                  "Decode complex analytics reports to reveal critical insights.",
                  "Tailor reports based on your unique business goals.",
                  "Set up and track goals for measuring conversions and user interactions.",
                  "Conduct A/B testing to optimize website elements and enhance customer journeys.",
                ],
              },
              {
                title: "Optimizing Google Analytics for Enterprise-Level Businesses",
                desc:
                  "For enterprise-level businesses, Google Analytics offers robust features like unsampled data access and funnel reporting. We help large organizations build a scalable data architecture to meet complex needs and support data-driven decision-making.",
                bullets: [
                  "Create a tailored data structure that aligns with your organization’s hierarchy.",
                  "Provide unsampled data with Google Analytics 360 for larger datasets.",
                  "Offer detailed funnel reporting for enhanced insights into user behavior.",
                  "Reduce data sampling to deliver accurate, comprehensive results.",
                ],
              },
              {
                title: "Integrating Google Analytics With Other Tools",
                desc:
                  "Maximize the value of your data by integrating Google Analytics with other platforms. We streamline data flow across tools like Google Ads and Google Data Studio, empowering you to make more informed decisions.",
                bullets: [
                  "Seamlessly integrate with Google Ads, Data Studio, and other tools.",
                  "Ensure real-time data accuracy across platforms.",
                  "Set up automated reporting pipelines for consistent insights.",
                  "Break down data silos for a unified view of customer behavior and performance.",
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
      <FaqSection title="Frequently Asked Questions - Google Analytics Essentials" faqs={faqs} />

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
        heading="Elevate Your Digital Presence with Data-Driven Excellence Using Google Analytics"
        subtext="Transform raw data into actionable insights and make informed decisions that drive growth and success in the digital realm."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

