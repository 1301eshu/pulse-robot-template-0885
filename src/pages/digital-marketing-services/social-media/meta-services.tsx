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
  // FAQs (from Meta/Facebook Services page)
  const faqs = [
    {
      q: "How does strategic campaign planning on Facebook benefit my brand?",
      a: "Strategic campaign planning allows you to tailor your Facebook marketing efforts to your target audience, ensuring higher engagement and better alignment with your business goals.",
    },
    {
      q: "What role does content creation play in Facebook marketing?",
      a: "Compelling content is essential for standing out on Facebook. Our content creation services ensure your visuals and messaging resonate with your audience, increasing brand awareness and engagement.",
    },
    {
      q: "How do you optimize Facebook campaigns for conversions?",
      a: "We optimize every element of your campaigns, from ad copy and CTAs to landing pages, using conversion rate optimization techniques to maximize customer actions and drive meaningful results.",
    },
    {
      q: "What kind of reports do you provide for Facebook marketing?",
      a: "Our analytics and reporting services provide detailed metrics on campaign performance, including ROI, engagement, and key insights, enabling you to adjust strategies based on real-time data.",
    },
    {
      q: "How do you ensure precision targeting in Facebook campaigns?",
      a: "We analyze user profiles and consumer behavior to ensure your ads are shown to the most relevant audience, improving targeting accuracy and maximizing ad spend efficiency.",
    },
    {
      q: "How can Facebook marketing improve brand awareness?",
      a: "With strategic content and targeted outreach, we can increase your brand’s visibility across the platform, fostering brand loyalty and attracting new customers.",
    },
    {
      q: "What’s the importance of conversion optimization in Facebook marketing?",
      a: "Conversion optimization ensures that your Facebook ads not only reach the right audience but also drive meaningful actions, such as purchases, sign-ups, or inquiries, improving the ROI of your campaigns.",
    },
    {
      q: "How does behavioral retargeting work on Facebook?",
      a: "Behavioral retargeting on Facebook allows you to show ads to users who have previously engaged with your brand, increasing the chances of conversion by targeting users based on their past behavior.",
    },
    {
      q: "How can Facebook marketing improve customer experience?",
      a: "Through personalized content and engaging campaigns, Facebook marketing enhances the customer experience, ensuring that users feel connected to your brand and its message.",
    },
    {
      q: "What is the role of analytics in reputation management?",
      a: "By monitoring customer interactions and campaign performance, analytics provide insights that help you manage your brand’s reputation, making adjustments as needed to maintain a positive public image.",
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
        heading="Facebook Marketing Services"
        highlight="to Amplify Brand Reach and Improve Audience Engagement"
        description="We offer tailored Facebook marketing services designed to boost brand awareness, enhance customer experience, and drive impactful results. Our expertise in strategic management ensures your campaigns resonate with your target audience and deliver measurable success."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Expertise", value: "100+" },
          { label: "Increase in Conversion Rates", value: "30%" },
          { label: "ROI from Social Campaigns", value: "3X" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Facebook Marketing Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We provide comprehensive Facebook marketing solutions that range from strategic campaign planning to analytics and reporting, empowering businesses to thrive in the ever-evolving digital landscape.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Strategic Campaign Planning",
                desc:
                  "The key to successful Facebook marketing lies in well-executed strategic planning. Our team ensures each campaign aligns with your business objectives, audience demographics, and industry dynamics, maximizing reach and engagement.",
                bullets: [
                  "Analyze consumer behavior and user profiles to precisely target your ideal audience",
                  "Develop tailored strategies that align with your brand vision and specific campaign goals",
                  "Craft engaging visuals and copy that resonate with your audience and stand out in the feed",
                ],
              },
              {
                title: "Compelling Content Creation",
                desc:
                  "Content is at the heart of social media marketing. We create visually stunning and engaging content that captures the essence of your brand, drives social media marketing success, and fosters brand loyalty.",
                bullets: [
                  "Create content that speaks directly to your audience’s interests and needs",
                  "Design eye-catching visuals, graphics, and videos that elevate your brand",
                  "Write compelling copy that sparks conversation, likes, shares, and builds a strong community",
                ],
              },
              {
                title: "Conversion Optimization",
                desc:
                  "Our Facebook marketing efforts focus on driving conversion rates that matter. We optimize every aspect of your campaigns to transform clicks into valuable customer actions, ensuring an efficient and profitable marketing strategy.",
                bullets: [
                  "Craft calls-to-action (CTAs) strategically placed to drive conversions",
                  "Perform A/B testing to identify the best-performing ad elements",
                  "Ensure landing pages are optimized for seamless navigation and maximum conversions",
                ],
              },
              {
                title: "Analytics and Reporting",
                desc:
                  "Data-driven decision-making is central to our approach. We harness Facebook’s analytics features to assess the effectiveness of your campaigns, providing insights that allow for real-time adjustments and strategic improvements.",
                bullets: [
                  "Dive into detailed metrics to track campaign performance and engagement",
                  "Measure ROI and allocate marketing budgets to the most effective strategies",
                  "Provide clear and actionable reports that highlight key insights and areas for improvement",
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
        heading="Fuel Growth in this Digital Era With Facebook Marketing"
        subtext="Create Facebook marketing campaigns that resonate with your audience, foster engagement, and drive tangible results."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

