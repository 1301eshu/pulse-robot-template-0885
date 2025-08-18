import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from '@/components/ui/component_12';
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";
import FaqSection from "@/components/ui/component_5";

const L3Template = () => {
   // FAQs (from Meta/Facebook Services page)
  const faqs = [
    {
      q: "How can LinkedIn marketing services enhance my business-to-business (B2B) strategy?",
      a: "LinkedIn is a powerful platform for B2B marketing, enabling you to connect with decision-makers and showcase your brand’s expertise, driving higher engagement and conversions.",
    },
    {
      q: "What tools do you use to improve LinkedIn profile visibility?",
      a: "We optimize profiles using strategic keyword integration and engaging content, ensuring that your profile is highly visible in LinkedIn’s search results.",
    },
    {
      q: "How do you generate quality leads through LinkedIn?",
      a: "We leverage LinkedIn’s vast network and online advertising tools to target specific demographics, implementing personalized outreach strategies to convert connections into leads.",
    },
    {
      q: "What role does content strategy play in LinkedIn marketing?",
      a: "A strong content strategy ensures your brand stays top-of-mind with your audience. Our content helps you engage with your target market and position your brand as a thought leader.",
    },
    {
      q: "How do you incorporate influencer marketing into LinkedIn strategies?",
      a: "We connect your brand with relevant influencers, using influencer marketing to enhance your brand’s credibility and reach in a competitive market environment.",
    },
    {
      q: "How can analytics improve my LinkedIn marketing campaigns?",
      a: "Detailed analytics provide insights into your campaign performance, helping refine strategies to maximize engagement, lead generation, and ROI.",
    },
    {
      q: "How does LinkedIn networking enhance business relationships?",
      a: "We help you build meaningful relationships through targeted networking strategies, fostering connections with industry leaders, influencers, and potential clients.",
    },
    {
      q: "What role does strategic management play in LinkedIn marketing?",
      a: "Strategic management ensures that your LinkedIn campaigns align with your business goals, optimizing outreach and content to drive better results.",
    },
    {
      q: "How do LinkedIn advertising campaigns boost brand awareness?",
      a: "Our LinkedIn advertising campaigns use advanced targeting and compelling visuals to reach your target market, increasing your brand awareness and engagement.",
    },
    {
      q: "How do you tailor LinkedIn marketing services for a workforce-driven approach?",
      a: "We develop strategies that highlight your workforce skills and strengths, showcasing your team’s expertise to enhance credibility and attract key connections in your industry.",
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
        heading="LinkedIn Marketing Services"
        highlight="to Magnify Your Brand Reach & Drive Better ROI"
        description="Our LinkedIn marketing services are designed to help you maximize the platform’s potential by enhancing your brand awareness and translating engagements into measurable success."
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
            Key LinkedIn Marketing Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We offer a range of LinkedIn marketing services to elevate your brand’s visibility and drive meaningful engagements in the market environment.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Profile Optimization",
                desc:
                  "Your LinkedIn profile is a powerful tool for making lasting impressions and attracting the right audience. We specialize in optimizing LinkedIn profiles to enhance visibility and showcase your brand’s strengths.",
                bullets: [
                  "Strategically integrate keywords to improve search visibility on LinkedIn",
                  "Craft compelling headlines and summaries to highlight your value proposition",
                  "Showcase your skills, accomplishments, and endorsements to build credibility",
                ],
              },
              {
                title: "Content Strategy Development",
                desc:
                  "A robust content strategy is essential for engaging with your target market on LinkedIn. We create content that reflects your brand’s unique voice and objectives, positioning you as a thought leader in your industry.",
                bullets: [
                  "Understand your workforce and target audience to develop content that addresses their needs",
                  "Curate content that positions your brand as a leader in your industry",
                  "Develop visually appealing content, including graphics, that enhances engagement and boosts brand awareness",
                ],
              },
              {
                title: "Networking and Relationship Building",
                desc:
                  "Building strong relationships on LinkedIn is crucial for long-term success. Our strategies help you connect with industry leaders, influencers, and potential clients, fostering real-world business success through networking.",
                bullets: [
                  "Identify and connect with industry leaders and influencers",
                  "Develop engagement strategies that foster meaningful interactions",
                  "Share thought leadership content to position yourself as an authority in your field",
                ],
              },
              {
                title: "Lead Generation",
                desc:
                  "Generating high-quality leads on LinkedIn is vital for sustained B2B growth. We leverage LinkedIn’s professional network to help you connect with key decision-makers, turning these relationships into valuable business opportunities.",
                bullets: [
                  "Target specific demographics aligned with your ideal customer profile",
                  "Implement personalized outreach strategies to engage potential clients",
                  "Use LinkedIn’s InMail feature for direct, personalized communication with decision-makers",
                ],
              },
      {
                title: "Analytics and Reporting",
                desc:
                  "Measuring the effectiveness of your LinkedIn marketing efforts is critical for refining strategies. We provide detailed analytics and reporting, giving you actionable insights to continuously improve and maximize ROI.",
                bullets: [
                  "Monitor key performance indicators (KPIs) to evaluate campaign success",
                  "Track the journey from initial engagement to lead conversion",
                  "Tailor reporting to your business’s specific needs, offering clear summaries that guide strategic management decisions",
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
        heading="Connect With Key Decision Makers & Generate High-Quality Leads"
        subtext="Elevate your brand's visibility, establish credibility, and drive tangible results with our LinkedIn marketing expertise."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

