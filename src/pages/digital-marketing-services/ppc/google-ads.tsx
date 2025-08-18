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
  // FAQs (from Google Ads Services page)
  const faqs = [
    {
      q: "What is Google Ads, and how does it work?",
      a: "Google Ads is an online advertising platform that allows businesses to create ads that appear on Google Offers, search engine results pages, and digital display advertising networks. Ads are shown to users based on keywords and targeting options, helping businesses increase visibility and drive conversions.",
    },
    {
      q: "How can Google Ads help my business?",
      a: "Google Ads can increase your visibility, drive targeted traffic to your website, and generate leads or sales. By optimizing campaigns with search engine marketing techniques, we ensure you maximize your ad spend and get the best possible ROI.",
    },
    {
      q: "What types of ads can I create with Google Ads?",
      a: "Google Ads supports various ad formats, including search ads that appear on Google’s search engine results page (SERP), digital display advertising, and hyperlinks that lead to landing pages or specific product listings.",
    },
    {
      q: "What is keyword research, and why is it important?",
      a: "Keyword research helps identify the best search terms to target in your ads. By selecting relevant keywords with high search volume and low competition, you can ensure your ads reach the right audience and improve search engine marketing results.",
    },
    {
      q: "How do you track the performance of Google Ads campaigns?",
      a: "We use various tools, including Google Ads reporting and Google Analytics, to track key performance metrics such as impressions, clicks, conversion rates, and ROI. Tracking codes are integrated into your campaigns to ensure accurate data collection.",
    },
    {
      q: "How do you optimize Google Ads campaigns for better performance?",
      a: "We continuously refine your campaigns through A/B testing, analyzing landing pages, improving ad copy, and adjusting bidding strategies to maximize conversions and minimize wasted spend. Personalization and targeting improvements ensure better user engagement.",
    },
    {
      q: "What certifications do your Google Ads consultants have?",
      a: "Our team holds professional certifications from Google, ensuring that we have the expertise and knowledge to manage your campaigns effectively. This includes certifications in Google Ads, Google Analytics, and other related platforms.",
    },
    {
      q: "How much does it cost to run a Google Ads campaign?",
      a: "The cost of running a Google Ads campaign depends on several factors, including your bidding strategy, competition, and campaign goals. We work with your budget to optimize ad spend, ensuring the best return on investment.",
    },
    {
      q: "How do you ensure that my ads are relevant to the audience?",
      a: "We use advanced targeting techniques to ensure your ads are shown to users who are most likely to convert. This includes demographic targeting, keyword selection, and personalization based on user behavior and interests.",
    },
    {
      q: "What kind of results can I expect from a Google Ads campaign?",
      a: "Results vary depending on your industry, goals, and the competitiveness of your market. However, with our strategic management and optimization, you can expect increased traffic, improved conversion rates, and a significant boost in lead generation or sales.",
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
        heading="Google Ads Services"
        highlight="to Maximize Lead Conversion and Boost Online Sales"
        description="Successful online advertising requires expert management, strategic planning, and continuous refinement. Our team of certified Google Ads professionals specializes in enhancing your advertising campaigns, increasing lead conversions, and maximizing your ROI. With deep expertise in Google Ads, we deliver tailored solutions that drive targeted traffic and boost online sales."
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
            Key Google Ads Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We provide a full range of Google Ads services, from search engine marketing to digital display advertising, helping businesses reach their goals.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Market and Keyword Research",
                desc:
                  "Effective advertising campaigns start with a thorough understanding of your market and keyword landscape. Our consultants use advanced tools to ensure your ads reach the right audience at the right time:",
                bullets: [
                  "Conduct comprehensive market analysis to identify industry trends and opportunities",
                  "Use data-driven insights to select high-performing keywords",
                  "Evaluate search volumes to prioritize keywords that drive maximum impact",
                ],
              },
              {
                title: "Bidding Strategy and Campaign Development",
                desc:
                  "Maximize your budget and ROI with a tailored bidding strategy that aligns with your business goals. We optimize your bids to ensure maximum visibility and conversions:",
                bullets: [
                  "Develop personalized bidding strategies that fit your business objectives",
                  "Navigate keyword auctions and identify opportunities for greater profit",
                  "Allocate your budget to high-performing campaigns for the best ROI",
                ],
              },
              {
                title: "Google Ads Campaign Setup",
                desc:
                  "We handle the project of setting up and configuring your Google Ads account with precision, ensuring every aspect is tailored to your needs:",
                bullets: [
                  "Create a Google Ads account optimized for your specific business goals",
                  "Configure campaign settings to match your objectives",
                  "Integrate tracking codes for accurate measurement and reporting of campaign performance",
                ],
              },
              {
                title: "Ad Copy Creation and Testing",
                desc:
                  "Our creative team crafts compelling ad copy that grabs attention and drives engagement. We continuously test and refine your ads to ensure top performance:",
                bullets: [
                  "Create engaging headlines and ad copy tailored to your audience",
                  "Write persuasive calls-to-action that encourage clicks and conversions",
                  "Perform ongoing A/B testing to determine the most effective ad variations",
                ],
              },
              {
                title: "Conversion Rate Optimization",
                desc:
                  "We continuously refine your campaigns with optimization techniques that ensure maximum conversions:",
                bullets: [
                  "Analyze and improve landing pages to eliminate barriers to conversion",
                  "Conduct A/B testing on different elements to identify the best-performing variations",
                  "Enhance the user experience with seamless navigation and optimized calls-to-action",
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

      {/* Recent Blogs - Center heading only for this page */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Best Practices"
          body="Get quick access to our best practices and resources from experienced marketing leaders."
          subTabs={[]}
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="Connect With People Who Search on Google for the Services You Offer"
        subtext="Ensure that your services are prominently featured when potential customers search for relevant keywords and place your brand at the forefront of their decision-making process."
        buttonLabel="Schedule a 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

