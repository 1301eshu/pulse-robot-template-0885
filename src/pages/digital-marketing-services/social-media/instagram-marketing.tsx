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
  // FAQs (from Instagram Marketing page)
  const faqs = [
    {
      q: "How do Instagram marketing services help build personal branding?",
      a: "They create tailored content and advertising campaigns that reflect your brand’s identity and connect with your target market.",
    },
    {
      q: "What tools do you use to measure Instagram advertising performance?",
      a: "Instagram’s analytics tools to monitor key metrics like CTRs, impressions, and conversions.",
    },
    {
      q: "How do you help grow an online community on Instagram?",
      a: "By targeting the right audience, creating engaging content, and fostering meaningful interaction to build a loyal community.",
    },
    {
      q: "How can influencer marketing improve customer experience?",
      a: "By collaborating with aligned influencers to add credibility and enhance customer experience through authentic promotion.",
    },
    {
      q: "How do you ensure Instagram campaigns align with business goals?",
      a: "Through detailed strategic planning and customer research tailored to your specific objectives.",
    },
    {
      q: "How do you stay ahead of the competition in Instagram marketing?",
      a: "By using data‑driven insights from Instagram analytics and continually refining content strategies.",
    },
    {
      q: "What role does content strategy play in Instagram success?",
      a: "A well‑crafted content strategy is crucial for capturing attention and fostering engagement aligned with your brand’s messaging.",
    },
    {
      q: "How do Instagram advertising campaigns drive conversions?",
      a: "Precise audience targeting and compelling ad creatives increase conversions and drive customer experience.",
    },
    {
      q: "How do you integrate marketing research into Instagram strategies?",
      a: "By analyzing customer behavior, competitor activity, and audience demographics to inform strategy and optimize performance.",
    },
    {
      q: "How can Instagram marketing services improve customer service?",
      a: "By prioritizing clear communication and timely responses in campaigns to foster loyalty.",
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
        heading="Instagram Marketing Services"
        highlight="to Improve Your Brand Presence and Engagement"
        description="We create strategic advertising campaigns, compelling content, and meaningful connections to deliver measurable results. Whether you’re looking to boost customer experience, collaborate with influencers, or grow your online community, we provide a comprehensive approach that drives success."
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
            Key Instagram Marketing Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            From strategic planning to precise execution, our Instagram marketing services are tailored to amplify your brand’s reach, boost audience engagement, and deliver tangible results.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Content Strategy and Creation",
                desc:
                  "Content is the backbone of success on Instagram. Our content creation services ensure your brand’s story is effectively told, blending creativity with strategy to resonate with your audience.",
                bullets: [
                  "Craft content that aligns seamlessly with your brand identity for consistent messaging",
                  "Develop a visual narrative that captures your target market’s attention",
                  "Schedule and plan content around peak engagement times to enhance customer experience and interaction",
                ],
              },
              {
                title: "Audience Targeting and Growth",
                desc:
                  "Growing a relevant audience is crucial. We connect your brand with the right followers and turn them into loyal advocates through meaningful engagement.",
                bullets: [
                  "Use detailed demographic data to tailor content to specific segments (age, location, interests, behaviors)",
                  "Conduct competitor analysis to engage users interested in similar brands",
                  "Implement strategies that foster a loyal online community through consistent interaction",
                ],
              },
              {
                title: "Instagram Advertising Campaigns",
                desc:
                  "Our campaigns are designed to meet your business goals—from brand awareness to traffic and conversions.",
                bullets: [
                  "Develop tailored advertising campaigns aligned with your objectives, market trends, and audience",
                  "Leverage advanced targeting to focus on specific demographics, interests, and behaviors",
                  "Create compelling ad visuals and messaging to capture attention and drive interaction",
                ],
              },
              {
                title: "Influencer Marketing Collaboration",
                desc:
                  "We manage influencer collaborations that align with your brand values for authentic, impactful partnerships.",
                bullets: [
                  "Identify influencers that match your brand’s identity and target market",
                  "Handle negotiations, contracts, and ensure mutually beneficial partnerships",
                  "Monitor and analyze influencer campaigns to inform future collaborations",
                ],
              },
              {
                title: "Analytics and Performance Tracking",
                desc:
                  "Data-driven insights are at the core of our approach. We monitor performance and refine strategies to stay competitive.",
                bullets: [
                  "Provide detailed reports on impressions, CTRs, and conversions",
                  "Identify high-performing content to replicate success",
                  "Adjust underperforming elements using performance insights",
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
        heading="Ready to Effectively Navigate the Dynamic World of Instagram Marketing"
        subtext="Whether it's optimizing posting times, or capitalizing on the latest features, we ensure your brand is always at the forefront of the Instagram experience."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

