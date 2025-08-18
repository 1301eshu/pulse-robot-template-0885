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
  // FAQs (from Datorama page)
  const faqs = [
    {
      q: "How does Datorama help improve marketing and advertising campaigns?",
      a: "Datorama integrates data from various marketing platforms to provide real-time insights, helping you optimize advertising campaigns and allocate resources effectively.",
    },
    {
      q: "Can Datorama support my sales and product performance tracking?",
      a: "Yes, Datorama offers custom dashboards to monitor sales and product performance, enabling better decision-making through data-driven insights.",
    },
    {
      q: "What kind of dashboards can I create with Datorama?",
      a: "You can create personalized dashboards tailored to your business goals, including sales, marketing performance, customer experience, and product data dashboards.",
    },
    {
      q: "How does Datorama enhance customer experience?",
      a: "Datorama provides real-time data insights, helping you track customer engagement across various platforms and improving the overall customer experience.",
    },
    {
      q: "What kind of data can I analyze with Datorama?",
      a: "Datorama allows you to analyze data from marketing campaigns, sales performance, product data, and more, providing comprehensive insights across your business.",
    },
    {
      q: "How do AI and Machine Learning features in Datorama benefit my business?",
      a: "Datorama’s AI and ML capabilities automate data analysis, detect patterns and anomalies, and offer predictive insights, improving your marketing and sales strategies.",
    },
    {
      q: "Can Datorama support market research?",
      a: "Yes, Datorama can aggregate data from various sources to provide deep insights into market trends, consumer behavior, and advertising performance, aiding in market research.",
    },
    {
      q: "How can Datorama improve collaboration within my team?",
      a: "With Datorama’s centralized dashboards and reporting features, your marketing, sales, and product teams can collaborate more effectively by accessing unified data in real-time.",
    },
    {
      q: "Can Datorama be integrated with my existing software and tools?",
      a: "Yes, Datorama can seamlessly integrate with various software and tools you already use, including CRM, analytics platforms, and advertising campaign managers.",
    },
    {
      q: "How do I get started with Datorama implementation?",
      a: "We provide tailored implementation services to ensure a smooth integration process, aligning Datorama with your business goals and data model for optimal results.",
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
        heading="Datorama Services"
        highlight="for Intelligent Marketing, Sales, and Product Decisions"
        description="Make your marketing, sales, and product management as seamless as possible with Datorama. Our team of Datorama experts handles your data, allowing you to focus on what truly matters—driving business results through effective advertising campaigns and enhancing the overall customer experience."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Experience", value: "20+" },
          { label: "Dashboard Delivered", value: "200+" },
          { label: "BI Experts", value: "50+" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Datorama Services for Sales, Marketing, and Product Decisions
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our tailored Datorama services provide comprehensive data solutions to support strategic marketing, sales, and product decisions. Leverage Datorama to improve advertising campaigns, enhance customer experience, and drive business success.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Implementation and Integration for Better Customer Experience and Sales",
                desc:
                  "Maximize the potential of Datorama with our expert implementation and integration services. We align your data model with business objectives, helping you extract valuable insights across marketing campaigns, sales processes, and product lifecycle management.",
                bullets: [
                  "Seamless Datorama implementation tailored to your business goals",
                  "Custom dashboards and reports for marketing, sales, and product insights",
                  "Holistic integration of data from various platforms for complete market research",
                ],
              },
              {
                title: "Data Collection and Pattern Recognition to Improve Marketing Campaigns",
                desc:
                  "Data is the heartbeat of successful marketing campaigns. Our experts excel in collecting and analyzing data across multiple channels, ensuring real-time, actionable insights that boost your advertising efforts and product performance.",
                bullets: [
                  "Consolidate data from diverse marketing and sales sources",
                  "Capture real-time data to keep your marketing strategies updated",
                  "Leverage pattern recognition in your data to identify market trends",
                ],
              },
              {
                title: "Monitor Sales and Marketing Performance with Advanced Dashboards",
                desc:
                  "Track your sales, marketing, and product performance in real-time with customized Datorama dashboards. Our experts help you make data-driven decisions, improving resource allocation for better ROI across advertising campaigns and sales initiatives.",
                bullets: [
                  "Access real-time data and key performance metrics",
                  "Create custom dashboards for marketing, sales, and product teams",
                  "Compare marketing campaign results across multiple channels to optimize resources",
                ],
              },
              {
                title: "Custom Reports and Dashboards for Market Research and Advertising Success",
                desc:
                  "Datorama helps transform your data into meaningful insights. We create custom reports and dashboards across various tools, allowing you to monitor market research, advertising campaigns, and product performance.",
                bullets: [
                  "Aggregate data from marketing, sales, and advertising campaigns",
                  "Configure custom reports and dashboards with real-time updates",
                  "Design intuitive dashboards for seamless product, marketing, and sales decision-making",
                ],
              },
              {
                title: "AI and Machine Learning for Advanced Marketing Insights and Product Decisions",
                desc:
                  "Stay at the forefront with Datorama’s AI and Machine Learning (ML) features for trend analysis, pattern recognition, and market research to elevate your business.",
                bullets: [
                  "Automate data analysis for faster, more accurate marketing insights",
                  "Detect anomalies in real-time to avoid potential business risks",
                  "Identify emerging trends in advertising, sales, and product markets for strategic planning",
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
      <FaqSection title="FAQs" faqs={faqs} />

      {/* Recent Blogs - keep from old code */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to our best practices and resources from experienced."
          subTabs={[]}
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="Create Compelling, Data-Driven Stories for Faster Analysis Using Datoroma Analytics"
        subtext="Transform your data into compelling, data-driven stories that lead to faster analysis and more informed, strategic decision-making."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

