import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from '@/components/ui/component_12';
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";

const L3Template = () => {
  // FAQs (from Pardot Managed Services page)
  const faqs = [
    {
      q: "How do Pardot Managed Services enhance business marketing efforts?",
      a: "Pardot Managed Services optimize your marketing strategy by providing expert support for campaign execution, lead quality improvement, and system integration for seamless operations.",
    },
    {
      q: "What role does market research play in Pardot services?",
      a: "Market research helps tailor targeted advertising and customer journeys, ensuring your campaigns resonate with your audience and improve conversion rates.",
    },
    {
      q: "How can a tracking system improve Pardot campaign performance?",
      a: "A robust tracking system allows you to measure how prospects interact with your website and marketing assets, providing valuable insights to improve campaign performance.",
    },
    {
      q: "How does lead scoring in Pardot improve customer engagement?",
      a: "Lead scoring ranks prospects based on their engagement and readiness to buy, helping you focus on high-quality leads and deliver more personalized, effective campaigns.",
    },
    {
      q: "What happens if my team experiences turnover during a campaign?",
      a: "Our managed services ensure that your marketing operations continue uninterrupted, even during employee absences, providing reliable support to maintain workflow efficiency.",
    },
    {
      q: "How does strategic planning impact Pardot campaign success?",
      a: "Strategic planning ensures that your Pardot instance is set up to align with your business objectives, resulting in more effective campaigns and improved return on investment.",
    },
    {
      q: "How do personalized marketing campaigns improve lead quality?",
      a: "Personalized marketing nurtures leads through tailored content, creating more meaningful interactions that improve lead quality and conversion rates.",
    },
    {
      q: "What is the value of business continuity in Pardot services?",
      a: "Business continuity ensures that your marketing efforts are not disrupted during key periods of employee absence or increased demand, keeping your campaigns on track.",
    },
    {
      q: "How does data-driven decision-making improve Pardot operations?",
      a: "Data-driven insights from tracking systems and campaign performance metrics allow for continuous optimization, improving both lead quality and campaign effectiveness.",
    },
    {
      q: "How does advertising in Pardot differ from traditional methods?",
      a: "Pardot’s marketing automation and tracking system enable more precise market segmentation and personalized advertising, resulting in higher engagement and conversion rates.",
    },
  ];

  // Recent Blogs — unchanged from your base
  const recentResources: ResourceItem[] = [
    {
      title: "4 CRO Best Practices to Drive Business Growth",
      subtitle: "Turn ad clicks into revenue by tightening UX, testing, and funnel clarity.",
      author: "Rukman Singh",
      date: "Dec 1, 2022",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400",
      slug: "cro-best-practices-drive-growth",
    },
    {
      title: "Mobile-Friendly Website Design: Enhance UX & Boost SEO",
      subtitle: "Mobile-first experiences improve engagement, rankings, and conversions.",
      author: "Rukman Singh",
      date: "Mar 7, 2022",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400",
      slug: "mobile-friendly-website-design",
    },
    {
      title: "Messy SEO – Improving Site Structure As Google’s Title Tag Change Affects CTRs",
      subtitle: "Why hierarchy and internal linking matter more than ever.",
      author: "Sakshi Arora",
      date: "Jan 10, 2022",
      readTime: "25 min read",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&h=400",
      slug: "improving-site-structure-title-tag-change",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Marketing Cloud Account Engagement (Formerly Pardot) Managed Services"
        highlight="to Scale Your Marketing Efforts"
        description="Our team helps you streamline your marketing operations, improve customer engagement, and drive higher conversions through business marketing best practices and tracking systems."
        // Optional: override countries or handle submit
        // countries={["India", "USA", "UK", "Canada"]}
        // onSubmit={async (data) => { /* send to API */ }}
      />

      <EditableStatSection
        stats={[
          { label: "Streamlined Lead Management", value: "30X" },
          { label: "Enhanced Sales Marketing Alignment", value: "20%" },
          { label: "Personalized Marketing campaigns", value: "20X" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Pardot Managed Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our Pardot Managed Services are crafted to transform how you engage with your audience, improve lead quality, and optimize advertising campaigns. With a focus on market research and data-driven decisions, we help you achieve measurable business success.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Pardot Best Practices",
                desc: "Leverage our Pardot-certified experts to ensure your marketing automation operates according to best practices. We provide strategic guidance to maximize your return on investment and streamline processes for optimal performance.",
                strongs: [],
                bullets: [
                  "Access an experienced team of designers and developers to build custom Pardot assets",
                  "Improve productivity with certified Pardot experts available 24/7",
                  "Align Pardot's setup with your specific business needs for enhanced performance",
                  "Benefit from a fully managed service that keeps your marketing automation running smoothly",
                ],
              },
              {
                title: "Campaign Set Up and Execution",
                desc: "Our experts handle the setup and execution of your advertising and email campaigns, ensuring seamless integration with your broader tech stack. We help you measure campaign performance and gain insights into how customers move through your sales pipeline.",
                strongs: [],
                bullets: [
                  "Measure campaign performance and customer insights with real-time tracking systems",
                  "Create engaging, personalized communication strategies to convert buyers",
                  "Leverage our expertise across 150+ client engagements to boost ROI",
                  "Monthly tactical execution of campaigns to optimize your marketing efforts",
                ],
              },
              {
                title: "Lead Quality Improvement",
                desc: "We improve the quality of leads through personalized journeys, lead scoring, and grading, ensuring that your marketing efforts generate the best prospects. Our data sets and research-backed methods help you optimize your buyer journey.",
                strongs: [],
                bullets: [
                  "Maximize lead quality using Pardot tools like lead scoring and grading",
                  "Deliver highly personalized campaigns to improve lead quality and conversion rates",
                  "Optimize the lead routing process to ensure the most effective flow from prospect to customer",
                ],
              },
              {
                title: "Work Continuity During Employee Turnover",
                desc: "Our managed services ensure business continuity even during employee turnover or absence. Our extended Pardot team maintains your marketing operations, allowing you to stay on track during peaks in demand or employee absences.",
                strongs: [],
                bullets: [
                  "Ensure work continuity with a high-availability Pardot team",
                  "Keep your marketing operations running smoothly over the long term",
                  "Manage workflows during employee absences, such as maternity leave or military duty",
                  "Handle peaks in demand for Pardot campaign execution with reliable support",
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
                      <span>✔️</span>{point}
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

      {/* Recent Blogs - Center heading only for this page (unchanged) */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to our best practices and resources from experienced."
          subTabs={[]}
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="Looking for Proven Account Engagement Managed Services?"
        subtext="Focus your energy on business growth while we expand your Account Engagement operations."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/company/contact-services/"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
