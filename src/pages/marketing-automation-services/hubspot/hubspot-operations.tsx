import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from "@/components/ui/component_12";
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";

const L3Template = () => {
  // FAQs (from HubSpot Operations Services page)
  const faqs = [
    {
      q: "What are HubSpot Operations Services?",
      a: "HubSpot operations services encompass a range of activities aimed at optimizing and streamlining your HubSpot platform usage. These services include data management, automation, reporting, and customization to enhance your marketing, sales, and customer service efforts within the HubSpot ecosystem.",
    },
    {
      q: "How Can HubSpot Operations Services Benefit My Business?",
      a: "They help you maintain clean and organized data, automate manual processes, gain deeper insights through reporting and analytics, and ensure your HubSpot platform is optimized to support your specific business objectives—leading to increased efficiency, improved customer engagement, and better ROI.",
    },
    {
      q: "What Types of Businesses Can Benefit from HubSpot Operations Services?",
      a: "Businesses of all sizes and industries that use the HubSpot platform for marketing, sales, and customer service can benefit. Services can be tailored to meet unique requirements—from startups to large enterprises.",
    },
    {
      q: "Can HubSpot Operations Services be Customized to Suit My Business's Needs?",
      a: "Yes. These services are highly customizable and adaptable to your specific goals, challenges, and workflows. Experienced HubSpot operations professionals collaborate closely with your team to craft a tailored strategy.",
    },
    {
      q: "How Can I Get Started With HubSpot Operations Services?",
      a: "Reach out to a HubSpot Solutions Partner or certified operations expert. They will assess your needs, provide recommendations, and help you create a tailored plan to optimize your HubSpot usage for better marketing, sales, and customer service outcomes.",
    },
    {
      q: "What Results Can I Expect from HubSpot Operations Services?",
      a: "Common outcomes include improved data accuracy, time savings through automation, enhanced reporting capabilities, increased lead generation, and better overall performance of your marketing, sales, and customer service initiatives.",
    },
    {
      q: "What’s Next If I Choose Growth Natives to Assist Me With HubSpot Operations Services?",
      a: "Email info@growthnatives.com to schedule an initial consultation. The team will assess your needs, define objectives, and create a tailored plan to optimize your use of HubSpot.",
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
        heading="HubSpot Operations Services"
        highlight="for Better Efficiency and Growth"
        description="With customer delight and experience being the core focus of any business, a 360-degree view of all your customer data and interaction is critical, and our HubSpot-certified experts enable you to ensure optimum data quality and scalability for high-end business analysis."
      />

      <EditableStatSection
        stats={[
          { label: "HubSpot Customers", value: "80+" },
          { label: "Certified HubSpot Experts", value: "40+" },
          { label: "Increase in HubSpot Campaign Efficiency", value: "30%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key HubSpot Operations Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We offer a range of solutions to empower your business and streamline your business processes so that you can adapt to your customer's ever-changing needs with clean and accurate customer data to deliver an unparalleled customer experience.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "HubSpot Implementation",
                desc:
                  "Our certified HubSpot experts and service providers will set up the HubSpot instance tailored to your business needs and strategies.",
                bullets: [
                  "Set up HubSpot instance",
                  "Migrate leads/contacts from your existing system to HubSpot",
                  "Integrate your HubSpot instance with your MarTech stack",
                  "Organize all created assets in lists and folders",
                  "Enhance user experience with engaging landing pages and emails",
                  "Ensure compliance with privacy laws like GDPR/CCPA",
                ],
              },
              {
                title: "HubSpot Email Marketing Automation and Asset Creation",
                desc:
                  "Create effective email campaign strategies to nurture your leads. Convert visitors or cold leads into prospects/customers with interactive emails.",
                bullets: [
                  "Plan, set up, and schedule email triggers",
                  "Increase click‑through rate by segmenting your target audience",
                  "Set up drip campaigns to nurture leads",
                  "Perform A/B testing to optimize conversions",
                  "Design visually stunning and engaging email campaign assets",
                ],
              },
              {
                title: "HubSpot Personalization",
                desc:
                  "Leverage our HubSpot expertise to curate and create buyers’ personas and craft targeted messages to power growth marketing.",
                bullets: [
                  "Get in‑depth market research and customer analysis",
                  "Create buyers’ personas for targeted HubSpot campaigns",
                  "Identify opportunities to increase website traffic",
                  "Design a content strategy based on your lead behavior",
                  "Track, measure, and optimize the performance of your strategy",
                ],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-xl p-8 text-left shadow-sm transition-all duration-300 group-hover/card-container:opacity-40 hover:!opacity-100"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#0F172A]">
                  {card.title}
                </h3>
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
        heading="Looking to Narrow Your Operational Gap With Our HubSpot Expertise?"
        subtext="Make your team operate in an unhindered and strategic manner and deliver exceptional CX."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

