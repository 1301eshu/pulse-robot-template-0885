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
  // FAQs (from Guest Posting page)
  const faqs = [
    {
      q: "How does guest posting improve search engine rankings?",
      a: "Guest posts on high-authority websites provide valuable backlinks that enhance your website’s authority and improve your position on the search engine results page (SERP).",
    },
    {
      q: "What is the importance of vetting websites for guest posting?",
      a: "Vetting ensures that guest posts appear on reputable, high-authority websites relevant to your industry, maximizing their impact on brand awareness and credibility.",
    },
    {
      q: "How does content creation align with influencer marketing in guest posting?",
      a: "Our content creators craft articles that align with influencer marketing strategies, ensuring that the content resonates with the influencers’ audiences and builds trust in your brand.",
    },
    {
      q: "What metrics are tracked to gauge the success of guest posts?",
      a: "We track key metrics such as website traffic, backlinks generated, social media shares, and engagement to assess the effectiveness of each guest post.",
    },
    {
      q: "How can guest posts boost brand awareness?",
      a: "By publishing relevant, high-quality content on authoritative websites, you reach a wider audience, increasing your brand’s visibility and strengthening its online presence.",
    },
    {
      q: "Why is personalized outreach important in guest posting?",
      a: "Personalized outreach ensures that your guest post pitches resonate with website owners and authors, increasing the likelihood of securing a valuable publishing opportunity.",
    },
    {
      q: "How do guest posts contribute to content marketing strategies?",
      a: "Guest posts provide an opportunity to share articles that position your brand as an expert in your field, supporting your overall content marketing and brand awareness efforts.",
    },
    {
      q: "What role does tracking play in improving guest posting strategies?",
      a: "Tracking the performance of each guest post allows us to measure its effectiveness and adjust future strategies based on data-driven insights, ensuring continual improvement.",
    },
    {
      q: "How can guest posting improve competitive positioning?",
      a: "By publishing on high-authority websites, you establish your brand as a thought leader in your industry, improving your credibility and positioning against competition.",
    },
    {
      q: "How can guest posts contribute to building long-term partnerships?",
      a: "Guest posting fosters collaboration with high-authority websites and influencers, leading to long-term partnerships that can continually boost your brand’s visibility and credibility.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="digitalmarketingservicesseoguestposting"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Guest Posting Services"
        highlight="to Amplify Your Brand's Presence"
        description="Guest posting is an effective strategy for enhancing your brand awareness, building authority, and expanding your online presence. We help you leverage guest posting opportunities on high-authority websites, boosting your brand’s credibility and search engine rankings."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Expertise", value: "100+" },
          { label: "Sites Brand Visibility Increased", value: "200+" },
          { label: "Improvement in DA", value: "35%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Guest Posting Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We offer a tailored suite of guest posting services to amplify your brand’s online presence with strategic content marketing, collaboration, and publicity that deliver real results.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Tailored Guest Posting Strategies",
                desc:
                  "Our experts craft personalized guest posting campaigns that align with your business goals, audience demographics, and industry. Whether you’re looking to boost brand awareness or target specific niche markets, we create strategies to position your brand effectively.",
                bullets: [
                  "Create campaigns that resonate with your target market",
                  "Maximize brand visibility with targeted tactics on relevant online platforms",
                  "Develop strategic approaches to ensure collaboration with the most impactful websites",
                ],
              },
              {
                title: "Guest Post Outreach",
                desc:
                  "We specialize in identifying and securing guest post opportunities on high-authority websites relevant to your industry. Our team ensures each hyperlink and URL placement adds value, enhancing your search engine results page (SERP) performance.",
                bullets: [
                  "Research and vet niche websites aligned with your business",
                  "Craft personalized outreach messages to engage with influencers and website authors",
                  "Build partnerships that increase your brand’s publicity and authority",
                ],
              },
              {
                title: "Content Creation",
                desc:
                  "Our team of skilled content creators develops high-quality, relevant content that resonates with both the target website’s audience and your brand identity. We focus on creating engaging articles that enhance ranking and drive traffic to your website.",
                bullets: [
                  "Write custom content tailored to the user profiles of each target website",
                  "Integrate keywords strategically for improved search engine visibility",
                  "Deliver content that engages, informs, and reinforces your brand’s message",
                ],
              },
              {
                title: "Tracking and Reporting",
                desc:
                  "We don’t stop at content creation. We meticulously track the performance of each guest post, providing comprehensive reports to ensure your investment is driving measurable results, including improved ranking and brand exposure.",
                bullets: [
                  "Monitor traffic, backlinks, and social shares generated by guest posts",
                  "Provide detailed reports outlining the impact on your brand’s online presence",
                  "Use data to continually refine and improve guest posting strategies",
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
           resourceType="100"
        />
      </div>

      <ContactCta
        heading="Make Your Online Presence Stronger With Strategic Guest Postings"
        subtext="Optimize your brand's visibility and effectively engage your audience with strategic guest posting solutions tailored to your needs."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
