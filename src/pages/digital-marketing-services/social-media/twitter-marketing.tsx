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
  // FAQs (from X/Twitter Marketing page)
  const faqs = [
    {
      q: "How can X marketing services help improve my public relations efforts?",
      a: "Our X services enhance public relations by building strong brand awareness, engaging your target market, and fostering positive interactions that boost your brand’s reputation.",
    },
    {
      q: "How do you ensure the right consumer audience is targeted?",
      a: "We conduct detailed keyword research and analyze consumer behavior to target the right audience, ensuring your content resonates with the desired target market.",
    },
    {
      q: "What role does problem solving play in X campaigns?",
      a: "Our campaigns are designed to address consumer needs and foster problem solving discussions, creating meaningful interactions that enhance your brand’s reputation and engagement.",
    },
    {
      q: "How do you measure the success of an X marketing campaign?",
      a: "We provide comprehensive analytics and performance insights, measuring conversion rates, keyword performance, engagement, and how well your campaign drives traffic to your website.",
    },
    {
      q: "How does engaging content improve follower growth?",
      a: "Creating engaging content, such as polls, interactive tweets, and visuals, attracts followers by aligning with consumer interests and fostering a sense of community around your brand.",
    },
    {
      q: "What strategies are used to enhance my brand’s reputation on X?",
      a: "We focus on marketing communications that highlight your brand’s values and mission while actively engaging with followers to build trust and a strong reputation on X.",
    },
    {
      q: "How can I use X to drive traffic to my website?",
      a: "Through targeted campaigns and relevant keyword research, we create content that sparks conversations and encourages users to visit your website for more information or purchases.",
    },
    {
      q: "How can analytics improve future marketing campaigns on X?",
      a: "By analyzing performance insights, we continuously refine your X campaigns to ensure better results in terms of conversions, engagement, and consumer interactions.",
    },
    {
      q: "Can mobile app businesses benefit from X marketing services?",
      a: "Yes, our services are tailored for mobile app businesses, using precise targeting and engaging content to promote app downloads and user engagement.",
    },
    {
      q: "How does keyword research help in X marketing campaigns?",
      a: "Keyword research helps us identify trending topics and relevant terms, ensuring your brand remains part of relevant conversations and reaches the right audience.",
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="digitalmarketingservicessocialmediatwittermarketing"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="X (Formerly Twitter) Marketing Services"
        highlight="for Sparking Conversations and Driving Conversions"
        description="With a focus on strategic problem solving through campaign development and engaging content creation, we help your brand connect with its target market, enhance reputation, and achieve measurable success."
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
            Key X Marketing Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our X marketing services are designed to elevate your brand’s online presence, enhance public relations, and drive more conversions through well-crafted campaigns, information‑driven strategies, and engaging content.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Strategic Campaign Development",
                desc:
                  "We develop strategic planning campaigns tailored to your brand’s unique objectives, helping you connect with your target market and spark meaningful conversations. Our campaigns are designed to enhance your reputation and create lasting connections with your audience.",
                bullets: [
                  "Align campaigns with your brand’s goals for maximum impact",
                  "Develop strategies focused on your target market for better engagement",
                  "Leverage hashtags effectively to amplify your campaign's reach and visibility",
                ],
              },
              {
                title: "Engaging Content Creation",
                desc:
                  "Content is at the heart of any successful X campaign. Our services focus on creating impactful content that captures attention, fosters consumer interaction, and drives conversations.",
                bullets: [
                  "Craft concise and impactful tweets that resonate with your audience",
                  "Incorporate visuals like images, GIFs, and videos to enhance engagement",
                  "Use polls and questions to encourage participation and spark problem‑solving discussions",
                ],
              },
              {
                title: "Follower Growth and Community Building",
                desc:
                  "Building a loyal community of followers on X is crucial for long‑term success. We focus on attracting the right audience to your brand, creating engaging content that fosters community interaction.",
                bullets: [
                  "Target your ideal consumer audience for follower growth aligned with your brand's target market",
                  "Encourage interaction through responses, retweets, and relevant conversations",
                  "Build a strong, engaged community that actively interacts with your brand",
                ],
              },
              {
                title: "Analytics and Performance Insights",
                desc:
                  "Data‑driven information is essential to refining your X campaigns. We provide detailed analytics to help you understand how your campaigns impact your brand, enabling continuous improvement and optimized marketing communications.",
                bullets: [
                  "Analyze conversion tracking to measure impact on website traffic, leads, and sales",
                  "Identify top‑performing content to optimize future strategies",
                  "Evaluate hashtag success to keep your brand relevant in trending conversations",
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
           resourceType="76"
        />
      </div>

      <ContactCta
        heading="Enhance Brand Visibility, Foster Engagement, and Drive Website Traffic"
        subtext="Craft your messaging and make sure it gets to the folks on the X network who are interested in your products and services."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
