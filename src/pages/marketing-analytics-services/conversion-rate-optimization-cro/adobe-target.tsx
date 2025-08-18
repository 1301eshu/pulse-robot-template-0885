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
  // FAQs (from Adobe Target page)
  const faqs = [
    {
      q: "How does Adobe Target improve my website’s customer experience?",
      a: "Adobe Target enhances your website by using personalized content and AI-powered automation to provide tailored user experiences that increase engagement and satisfaction.",
    },
    {
      q: "What role does Adobe Target play in optimizing product relevance?",
      a: "By leveraging A/B testing and market segmentation, Adobe Target ensures your product (business) stays relevant to your target market, delivering personalized experiences that resonate with each user.",
    },
    {
      q: "How does Adobe Target help with A/B and multivariate testing?",
      a: "Adobe Target allows businesses to design tests around key variables, providing insights to optimize user experience and improve click-through rates.",
    },
    {
      q: "Can Adobe Target integrate with existing tools on my website?",
      a: "Yes, Adobe Target seamlessly integrates into your existing digital ecosystem, aligning with your product and business requirements to deliver a unified user experience.",
    },
    {
      q: "What is the importance of omnichannel personalization in Adobe Target?",
      a: "Omnichannel personalization ensures that every interaction a user has with your website or app is consistent, personalized, and relevant, regardless of the channel.",
    },
    {
      q: "How does AI-powered automation enhance testing in Adobe Target?",
      a: "AI-powered automation allows you to conduct and analyze tests quickly, providing insights that improve measurement and user engagement across channels.",
    },
    {
      q: "How does Adobe Target help in targeting my specific market segment?",
      a: "Adobe Target uses advanced market segmentation techniques to identify and engage distinct segments, ensuring that your product appeals directly to the right audience.",
    },
    {
      q: "What are the key metrics Adobe Target tracks to measure success?",
      a: "Adobe Target tracks key performance indicators such as click-through rates, user engagement, and conversions to measure the success of your digital strategy.",
    },
    {
      q: "How does Adobe Target ensure relevance in customer interactions?",
      a: "Adobe Target uses real-time data and predictive algorithms to personalize content, ensuring that each interaction is relevant to the user’s preferences and behavior.",
    },
    {
      q: "What is the role of consultants in implementing Adobe Target?",
      a: "Our consultants help integrate Adobe Target with your website, ensuring it meets your specific requirements and optimizes the user interface for enhanced performance.",
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
        heading="Adobe Target Services"
        highlight="to Roll Out the Best-Tailored Experiences to Your Audience"
        description="From AI-powered testing and personalization to automation at scale with Adobe Target, our experts excel at identifying key elements of your product (business) to deliver exactly what your audience desires. By focusing on your target market, we ensure that your website provides personalized, engaging experiences that resonate with each individual."
      />

      <EditableStatSection
        stats={[
          { label: "Certified Web Analytics Experts", value: "30+" },
          { label: "Experiments Launched", value: "500+" },
          { label: "Websites Conversion Rates Optimized", value: "100+" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Adobe Target Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our Adobe Target services are meticulously crafted to ensure relevance to your target market while delivering exceptional customer experiences. We go beyond simple implementation, helping you fine‑tune every element to match your business requirements and exceed expectations.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Strategic Implementation & Integration",
                desc:
                  "Effective implementation of Adobe Target on your website lays the foundation for a superior user interface and user experience. Our consultants ensure Adobe Target seamlessly integrates with your digital ecosystem, helping you engage with your target market effectively.",
                bullets: [
                  "Align Adobe Target implementation with your product (business) goals",
                  "Configure Adobe Target to meet unique requirements, enhancing the user interface",
                  "Integrate Adobe Target for consistent delivery of personalized content, boosting customer experience",
                ],
              },
              {
                title: "A/B and Multivariate Testing",
                desc:
                  "We use Adobe Target to conduct comprehensive A/B and multivariate testing that focuses on refining key elements of your digital strategy. By testing variables, we help improve click‑through rates and increase overall conversions.",
                bullets: [
                  "Design tests to match your business goals, improving result accuracy",
                  "Identify the elements driving higher user engagement through strategic testing",
                  "Refine strategies iteratively for continuous improvement",
                ],
              },
              {
                title: "Omnichannel Personalization",
                desc:
                  "Our Adobe Target services provide market segmentation and personalization across all channels. We ensure every user enjoys a personalized journey, no matter which platform or device they use.",
                bullets: [
                  "Create unified profiles for a consistent customer experience across all touchpoints",
                  "Deliver personalized content that maintains brand consistency across channels",
                  "Use real‑time data to tailor user experiences, improving engagement and conversions",
                ],
              },
              {
                title: "AI‑Powered Automation",
                desc:
                  "Harness the power of AI‑powered automation to deliver the right message to the right audience at the right time. Our automation strategies improve measurement and enhance the user experience by providing data‑driven insights for faster decision‑making.",
                bullets: [
                  "Use predictive algorithms to anticipate user preferences and optimize engagement",
                  "Automate A/B testing for faster insights and improved click‑through rates",
                  "Implement AI‑driven dynamic content to maximize results and drive conversions",
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
      <FaqSection title="Frequently Asked Questions - Adobe Target Essentials" faqs={faqs} />

      {/* Recent Blogs - kept from old code */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to best practices and resources from our CMS experts."
          subTabs={[]}
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="Transform Your Digital Strategy With Confidence Using Adobe Target"
        subtext="Elevate your digital strategy to new heights and deliver personalized, targeted, and optimized experiences that resonate with your users."
        buttonLabel="Schedule a 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

