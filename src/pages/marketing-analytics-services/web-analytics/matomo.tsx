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
  // FAQs (from Matomo Analytics page)
  const faqs = [
    {
      q: "How Does Matomo Protect User Privacy?",
      a: "Matomo prioritizes user privacy by giving website owners full control over their data. It enables anonymization of IP addresses, respects “Do Not Track” preferences, and offers features like data retention controls. Additionally, users can host Matomo on their servers, ensuring data remains within their control.",
    },
    {
      q: "Is Matomo GDPR-Compliant?",
      a: "Yes, Matomo is GDPR-compliant. It provides tools and features that help organizations meet GDPR requirements, such as data anonymization, consent tracking, and data retention settings. These measures ensure compliance with data protection regulations.",
    },
    {
      q: "What Types of Data Can I Track With Matomo?",
      a: "Matomo can track various types of data, including website traffic, page views, user interactions, goals and conversions, eCommerce transactions, and custom events. It offers robust tracking capabilities to suit diverse tracking needs.",
    },
    {
      q: "Can I Host Matomo On My Own Server?",
      a: "Yes, you can host Matomo on your own server. Matomo offers a self-hosted option, allowing you to maintain complete control over your analytics data and infrastructure.",
    },
    {
      q: "Is Matomo Suitable for eCommerce Websites?",
      a: "Absolutely! Matomo is well-suited for eCommerce websites. It offers eCommerce tracking features, including tracking product views, cart additions, and completed purchases. These insights help e-commerce businesses optimize their sales strategies.",
    },
    {
      q: "Does Matomo Offer Real-Time Analytics?",
      a: "Yes, Matomo provides real-time analytics, allowing you to monitor website activity as it happens. You can see live visitor data, track events in real time, and make immediate decisions based on the latest insights.",
    },
    {
      q: "Can I Integrate Matomo With Other Tools and Platforms?",
      a: "Yes, Matomo offers integration options with various third-party tools and platforms. You can connect Matomo with CRM systems, email marketing software, advertising platforms, and more, streamlining your data flow and analysis.",
    },
    {
      q: "What’s Next If I Choose Growth Natives to Assist Me With Matomo Analytics Services?",
      a: "You can send us an email to info@growthnatives.com and our team will get back to you promptly. We’ll schedule an initial consultation and help you unlock the full potential of Matomo, providing tailored solutions, advanced insights, and seamless integration with your tech stack to supercharge your data-driven decision-making.",
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
        heading="Matomo Analytics Services"
        highlight="to Manage Your Data Your Way"
        description="Whether you’re looking to enhance user experience, optimize your marketing strategies, or improve your website’s performance, Matomo empowers you to make data-driven decisions that drive growth and success."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Experience", value: "16+" },
          { label: "Implementation done", value: "150+" },
          { label: "Digital Analytics experts", value: "30+" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Matomo Analytics Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We offer a comprehensive suite of services designed to empower businesses with actionable insights into their online presence.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Matomo Implementation and Set-up",
                desc:
                  "Implementing Matomo Analytics on your website is the foundation for data-driven decision-making and digital optimization. We specialize in seamless Matomo implementation and setup to ensure you get the most out of this powerful analytics platform.",
                bullets: [
                  "Assess your specific business objectives and configure Matomo to capture data that matters most to you",
                  "Configure tracking codes, goals, and eCommerce tracking to ensure accurate data collection",
                  "Design customized reports to provide insights into KPIs aligned with your business goals",
                ],
              },
              {
                title: "Data Analysis and Reporting",
                desc:
                  "Our team of experienced analysts specializes in harnessing the power of Matomo Analytics data to provide you with valuable insights that drive strategic decisions. We go beyond raw data to uncover trends, patterns, and opportunities that might otherwise go unnoticed.",
                bullets: [
                  "Translate raw data into actionable insights to understand user behavior and market trends",
                  "Identify areas for improvement in conversion rates",
                  "Create clear, concise, and visually appealing reports and dashboards tailored to each client's needs",
                  "Provide ongoing analysis to refine strategies to help you stay ahead in a competitive landscape",
                ],
              },
              {
                title: "Conversion Rate Optimization",
                desc:
                  "Fine-tune your website, landing pages, and overall digital presence to increase the percentage of visitors who take a desired action. It’s all about making the most of your existing traffic and turning visitors into viable prospects, and ideally, paying customers.",
                bullets: [
                  "Identify areas of improvement and bottlenecks in the user journey",
                  "Track user behavior and gather insights for optimization",
                  "Create user-friendly and visually appealing interfaces that guide visitors toward conversion actions",
                  "Run A/B tests to compare different versions of web pages, landing pages, or email campaigns",
                ],
              },
              {
                title: "Custom Plugin Development",
                desc:
                  "Our custom plugin development service for Matomo empowers businesses to tailor their analytics solutions to their specific needs. With Matomo’s open-source architecture, we create bespoke plugins that extend its functionality and provide unique insights.",
                bullets: [
                  "Design and build custom Matomo plugins from the ground up",
                  "Add features such as custom tracking methods and data visualizations",
                  "Optimize plugins for the performance, speed, and efficiency of your analytics platform",
                  "Provide continuous support to keep custom plugins aligned with Matomo's evolving ecosystem",
                ],
              },
              {
                title: "Integration With Other Tools",
                desc:
                  "Our goal is to empower you with a holistic view of your digital ecosystem by integrating Matomo with the tools and platforms you rely on. This integration not only enhances efficiency but also provides deeper insights to fuel data-driven decisions and optimize your online presence.",
                bullets: [
                  "Utilize Matomo's robust API capabilities to connect it with various third-party applications",
                  "Ensure that data flows smoothly between Matomo and your other tools",
                  "Design custom dashboards that consolidate data from Matomo and other tools",
                  "Track and attribute conversions accurately by integrating Matomo with ad platforms",
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
      <FaqSection title="Frequently Asked Questions - Matomo Analytics Essentials" faqs={faqs} />

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
        heading="Fast-Track Your Business Growth With Data-Driven Insights Using Mamoto Analytics"
        subtext="Whether it's optimizing website content, refining marketing strategies, or enhancing UX, data-driven decisions lead to more effective and efficient growth initiatives."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

