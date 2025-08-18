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
  // FAQs (from Meta Ads Services page)
  const faqs = [
    {
      q: "How do Meta Ads help businesses improve their online presence?",
      a: "Meta Ads boost your online presence by targeting the right audience using performance-based advertising and data from Meta’s ecosystem, increasing visibility and engagement on Facebook and Instagram.",
    },
    {
      q: "What is the role of keyword research in Meta Ads?",
      a: "Keyword research ensures that your ads reach the right audience by targeting users based on their interests and behaviors. This increases the chances of driving relevant traffic and conversion marketing.",
    },
    {
      q: "How do A/B testing and optimization improve campaign performance?",
      a: "A/B testing helps you determine which ad creatives, formats, and copy work best. By refining these elements based on user data, you can optimize campaigns to boost engagement and conversion rates.",
    },
    {
      q: "How do you tailor Meta advertising strategies to specific business goals?",
      a: "We align your Meta Ads strategy with your business goals by conducting a detailed market analysis, identifying the best opportunities, and creating campaigns that target specific objectives like increasing traffic, conversions, or brand awareness.",
    },
    {
      q: "What role does creative development play in Meta Ads campaigns?",
      a: "Creative development is crucial for capturing attention and driving engagement. By creating visually compelling ads with strong messaging, you improve the chances of connecting with your audience and achieving higher conversion rates.",
    },
    {
      q: "How can Meta Ads improve brand loyalty?",
      a: "Meta Ads use advanced targeting to deliver personalized content, fostering stronger connections with your audience and improving brand loyalty over time.",
    },
    {
      q: "What tools are used to track Meta Ads performance?",
      a: "We use tools like Facebook Ads Manager and Google Analytics to track the performance of Meta Ads. These platforms provide real-time insights into conversion rates, audience engagement, and ROI.",
    },
    {
      q: "How do Meta Ads fit into a larger digital marketing strategy?",
      a: "Meta Ads complement other digital marketing strategies like email marketing and content marketing, creating a multichannel approach to increase brand visibility and improve overall marketing effectiveness.",
    },
    {
      q: "How do Meta Ads integrate with performance-based advertising?",
      a: "Meta Ads allow businesses to allocate budgets efficiently by focusing on high-performing ads that are delivering the best return on investment (ROI) through performance-based advertising.",
    },
    {
      q: "What makes Meta Ads ideal for targeting specific audience segments?",
      a: "Meta Ads excel at targeting thanks to the platform’s extensive user data. With precise market segmentation based on user interests, behaviors, and demographics, businesses can reach the most relevant audience for their products or services.",
    },
  ];

  // Recent Blogs (kept same structure)
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
        heading="Meta Ads Services to Target and "
        highlight="Reach Customers Across the Meta Ecosystem"
        description="Maximize your brand visibility and conversion rates with our customized Meta Ads strategies. Whether you want to boost brand loyalty, increase website traffic, or drive performance-based advertising, we tailor our approach to meet your specific business objectives within the Facebook and Instagram ecosystem."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Expertise", value: "100+" },
          { label: "Increase in Inbound Leads", value: "45%" },
          { label: "ROI from Paid Traffic", value: "3X" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Meta Ads Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We provide a comprehensive suite of services, from ad campaign planning to creative optimization and A/B testing, ensuring your business leverages Meta's vast ecosystem effectively.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Meta Advertising Strategy",
                desc:
                  "Our Meta Advertising services focus on building a solid strategy that uses Meta’s data-driven tools to deliver success. We help businesses harness the power of Meta’s audience data to gain insights and build strategic advertising plans.",
                bullets: [
                  "Leverage Meta's user data for thorough audience analysis",
                  "Conduct competitor research to benchmark industry standards and trends",
                  "Customize your strategy for each platform (Facebook, Instagram) to maximize the campaign’s impact",
                ],
              },
              {
                title: "Ad Campaign Planning and Management",
                desc:
                  "From defining objectives to budget allocation and ad placement, our team handles every aspect of Meta Ads campaign management. We ensure your campaigns are optimized to achieve maximum ROI.",
                bullets: [
                  "Tailor ad campaigns to align with specific business objectives and customer needs",
                  "Allocate ad spend efficiently to ensure the best possible results across different platforms",
                  "Pinpoint the target audience using advanced interest-based targeting on Facebook and Instagram",
                ],
              },
              {
                title: "Keyword Research",
                desc:
                  "Keyword research is crucial for targeting the right audience. Our strategic approach ensures your Meta Ads are highly visible and drive meaningful engagement.",
                bullets: [
                  "Identify relevant keywords that resonate with your target market",
                  "Tailor keywords for each platform to align with user behavior on both Facebook and Instagram",
                  "Implement negative keyword strategies to avoid irrelevant impressions and optimize campaign performance",
                ],
              },
              {
                title: "Creative Development and Optimization",
                desc:
                  "High-quality creative assets are the key to engaging users and driving conversions. Our team of designers and copywriters work together to create compelling visuals and messaging for your campaigns.",
                bullets: [
                  "Create concise, impactful ad copy aligned with your brand’s voice",
                  "Use dynamic ad formats for interactive and personalized experiences across the Meta ecosystem",
                  "Ensure ad creatives are optimized for all devices and screen sizes, enhancing usability and user engagement",
                ],
              },
              {
                title: "Campaign Optimization and A/B Testing",
                desc:
                  "We continuously refine your campaigns to ensure top performance. Using A/B testing and data analysis, we optimize your ads to drive higher engagement and conversion rates.",
                bullets: [
                  "Conduct systematic A/B testing on different ad creatives, copy, and formats",
                  "Refine ad content based on testing outcomes to improve customer experience",
                  "Analyze audience behavior and demographics for better targeted advertising and increased relevance",
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
      <FaqSection title="Frequently Asked Questions - Meta Ads Essentials" faqs={faqs} />

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
        heading="Meta Ads Services to Target and Reach Customers Across the Meta Ecosystem"
        subtext="Maximize your brand visibility and conversion rates with our customized Meta Ads strategies within the Facebook and Instagram ecosystem."
        buttonLabel="Schedule a 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

