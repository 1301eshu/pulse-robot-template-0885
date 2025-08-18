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
  // FAQs (from Recotap Services page)
  const faqs = [
    {
      q: "How does Recotap improve account-based marketing strategies?",
      a: "Recotap enables businesses to precisely identify high-value accounts, ensuring personalized campaigns that align with business goals and enhance brand loyalty.",
    },
    {
      q: "What are dynamic retargeting strategies, and why are they important?",
      a: "Dynamic retargeting adapts to users’ specific actions and preferences, ensuring that ad content remains relevant and drives engagement, improving the likelihood of conversion.",
    },
    {
      q: "How does Recotap help with personalized marketing?",
      a: "Recotap uses behavioral targeting and segmentation to deliver personalized messaging and dynamic content that resonates with individual users, increasing engagement and conversion rates.",
    },
    {
      q: "What is the significance of integrating Recotap with my tech stack?",
      a: "Integrating Recotap with your tag management system, CRM, or other tools streamlines your multichannel marketing efforts, improving workflow efficiency and maximizing the return on your marketing automation investments.",
    },
    {
      q: "How do behavioral insights drive Recotap strategies?",
      a: "Behavioral insights enable marketers to understand how users interact with content, allowing for more targeted campaigns that align with user intent and increase engagement.",
    },
    {
      q: "What is the benefit of real-time optimization in retargeting?",
      a: "Real-time optimization allows businesses to adjust retargeting strategies based on current user behaviors and market changes, ensuring ongoing relevance and effectiveness.",
    },
    {
      q: "How does Recotap improve return on marketing investment (ROMI)?",
      a: "By delivering personalized marketing and focusing on high-value accounts, Recotap ensures that your marketing efforts are more targeted, increasing engagement and improving ROMI.",
    },
    {
      q: "What role does multichannel marketing play in Recotap campaigns?",
      a: "Multichannel marketing ensures that your personalized content reaches users across various platforms, maximizing visibility and engagement while maintaining brand consistency.",
    },
    {
      q: "How does Recotap help businesses stay competitive in their market?",
      a: "By using data analysis and behavioral targeting, Recotap helps businesses stay ahead of competition by delivering relevant, personalized content that improves conversion rates.",
    },
    {
      q: "What are the long-term benefits of integrating Recotap?",
      a: "A seamless Recotap integration with your tech stack ensures long-term improvements in efficiency, better user insights, and more effective conversion marketing efforts.",
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
        heading="Recotap Services"
        highlight="to Find Your Next High-Value Account and Close Them Quickly"
        description="Recotap empowers businesses with precision in account-based marketing (ABM), helping you reach target accounts with personalized strategies that drive conversions. Our experts leverage Recotap’s advanced features to ensure your campaigns are aligned with user intent, delivering impactful results across multiple channels."
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
            Key Recotap Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We offer comprehensive Recotap services designed to help businesses implement multichannel marketing strategies that seamlessly resonate with your target market.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Account-Based Marketing Strategy",
                desc:
                  "Our ABM strategy focuses on personalized outreach to high-value accounts, ensuring strategic content distribution and relevance. We use Recotap’s features to enhance brand loyalty by directly addressing the unique needs and preferences of your target accounts.",
                bullets: [
                  "Identify high-value accounts that align with your business goals",
                  "Create personalized campaigns based on advanced market segmentation",
                  "Leverage behavioral insights to track how target accounts interact with your brand",
                ],
              },
              {
                title: "Dynamic Retargeting Strategies",
                desc:
                  "Recotap’s advanced retargeting capabilities allow us to develop dynamic retargeting strategies that evolve with user behavior. This ensures you maintain strong engagement and relevance with your audience.",
                bullets: [
                  "Craft retargeting strategies based on specific user actions and preferences",
                  "Personalize ad creatives to resonate with individual users",
                  "Continuously optimize retargeting efforts based on real-time data and competition analysis",
                ],
              },
              {
                title: "Personalization and Engagement",
                desc:
                  "Our personalization strategies help you deliver tailored messaging to your audience, driving meaningful engagement and conversions. By using behavioral targeting, we ensure that each user interaction is unique and valuable.",
                bullets: [
                  "Behavioral targeting to personalize messaging based on user preferences",
                  "Dynamic ad content creation to keep engagements relevant and impactful",
                  "Strategic segmentation for precise targeting across different audience groups",
                ],
              },
              {
                title: "Recotap Integration",
                desc:
                  "Integrating Recotap with your existing marketing automation and tech stack amplifies the effectiveness of your conversion marketing efforts. We ensure a seamless integration that enhances workflow efficiency and maximizes the capabilities of Recotap within your current infrastructure.",
                bullets: [
                  "Tailored integration solutions that fit your existing tech stack",
                  "Use API integration techniques to connect Recotap with your tools",
                  "Monitor and optimize the integration for long-term effectiveness",
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
          body="Get quick access to best practices and resources from our CMS experts."
          subTabs={[]}
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="Achieve Predictable Revenue Growth Using Recotap"
        subtext="Experience a paradigm shift in your revenue generation, where personalized campaigns converge to create a powerful formula for predictable and scalable growth."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

