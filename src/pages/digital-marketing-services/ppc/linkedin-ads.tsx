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
  // FAQs (from LinkedIn Ads Services page)
  const faqs = [
    {
      q: "What types of businesses benefit from LinkedIn Ads?",
      a: "LinkedIn Ads are particularly beneficial for B2B companies looking to build brand awareness, generate leads, and connect with professionals. It is an ideal platform for businesses in sectors like SaaS, consulting, and corporations targeting specific industries.",
    },
    {
      q: "How do LinkedIn Ads improve lead generation?",
      a: "LinkedIn Ads leverage market segmentation and precise targeting to reach the right audience. By focusing on relevant keywords, skills, and interests, LinkedIn Ads increase visibility and drive high-quality leads through the purchase funnel.",
    },
    {
      q: "What is the difference between LinkedIn Ads and other forms of online advertising?",
      a: "LinkedIn Ads are tailored specifically for professionals and businesses, focusing on B2B engagement. Unlike other networks, LinkedIn targets users based on their professional profiles, roles, and industry-specific behaviors.",
    },
    {
      q: "How do you measure the success of LinkedIn Ads?",
      a: "Success is measured through real-time reporting and metrics such as impressions, clicks, conversions, and ROI. We track every element of your campaign to assess return on marketing investment and campaign effectiveness.",
    },
    {
      q: "What kind of ad copy works best on LinkedIn?",
      a: "The most effective ad copy on LinkedIn is professional, concise, and directly addresses the needs of your target audience. We align copy with LinkedIn’s professional tone while emphasizing clear value propositions.",
    },
    {
      q: "How do you incorporate market segmentation in LinkedIn Ads?",
      a: "We target audiences based on job roles, industries, geographic locations, and behaviors so your ads reach the most relevant professionals, improving engagement and conversions.",
    },
    {
      q: "Can LinkedIn Ads help with sales and conversion marketing?",
      a: "Yes, LinkedIn Ads are highly effective for conversion marketing. By targeting decision-makers and professionals in specific industries, LinkedIn Ads can drive conversions through highly relevant offers and personalization.",
    },
    {
      q: "What is geotargeting, and how does it improve LinkedIn Ads?",
      a: "Geotargeting tailors your ads to specific locations so they reach users in relevant areas-especially effective for local or regional targeting.",
    },
    {
      q: "How do you ensure that LinkedIn Ads are optimized for performance?",
      a: "We continuously monitor and optimize campaigns through A/B testing, keyword adjustments, and creative refinements to maximize performance and ROI.",
    },
    {
      q: "What kind of reporting can I expect from LinkedIn Ads campaigns?",
      a: "We provide comprehensive reports that include metrics on ad performance, audience engagement, and overall campaign success. These reports are easy to interpret and help inform future strategies and improvements.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="digitalmarketingservicesppclinkedinads"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="LinkedIn Ads Services for Improved "
        highlight="Brand Recognition & Reduced Marketing Cost"
        description="Our LinkedIn Ads Services are designed to enhance your business-to-business (B2B) marketing efforts. Whether your goal is to boost brand awareness, increase engagement, or generate leads, our tailored approach ensures precise targeting and strategic ad placement, maximizing return on marketing investment while reducing costs."
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
            Key LinkedIn Ads Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We provide specialized services that optimize your presence on LinkedIn, delivering strong results through effective conversion marketing strategies and smart budget allocation.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Competitor Analysis",
                desc:
                  "Understanding competitors’ strategies is essential for crafting winning LinkedIn ad campaigns.",
                bullets: [
                  "Analyze competitors' ad performance to identify market segmentation trends",
                  "Compare your ad strategy to refine messaging and identify gaps",
                  "Review competitors’ ad creatives to ensure a unique value proposition",
                ],
              },
              {
                title: "Keyword Research",
                desc:
                  "Identify the most relevant and impactful keywords for your campaigns using search engine marketing techniques.",
                bullets: [
                  "Identify industry‑specific keywords tailored to your goals",
                  "Optimize keyword strategy based on relevant skills and sales process",
                  "Use geotargeting to enhance local relevance of your ads",
                ],
              },
              {
                title: "Ad Copy Creation and Optimization",
                desc:
                  "Craft compelling, professional copy that captures attention and increases engagement.",
                bullets: [
                  "Tailor ad copy to resonate with your target audience",
                  "Implement A/B testing to identify the most effective messaging",
                  "Align copy and design for a cohesive brand narrative",
                ],
              },
              {
                title: "Ad Monitoring and Reporting",
                desc:
                  "Monitor performance and provide real‑time insights to optimize campaigns.",
                bullets: [
                  "Track how different campaign elements contribute to success",
                  "Measure audience engagement with detailed metrics",
                  "Receive easy‑to‑interpret reports to inform stakeholders and adjustments",
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
      <FaqSection title="Frequently Asked Questions - LinkedIn Ads Essentials" faqs={faqs} />

      {/* Recent Blogs */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to our best practices and resources from experienced."
          subTabs={[]}
            resourceType="226"

        />
      </div>

      <ContactCta
        heading="Place Bids for your Desired Audience, Set Your Pricing, and Control Your Budget"
        subtext="Reach new and existing customers as they connect with folks and find communities on LinkedIn."
        buttonLabel="Schedule a 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

