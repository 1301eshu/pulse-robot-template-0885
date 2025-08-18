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
  // FAQs (from HubSpot Managed Services page)
  const faqs = [
    {
      q: "What are HubSpot Managed Services?",
      a: "HubSpot managed services refer to outsourced support and management of your HubSpot marketing, sales, or service platform by a dedicated team of experts. These services can include strategy development, campaign execution, technical support, and more to maximize your HubSpot investment.",
    },
    {
      q: "Why Should I Consider HubSpot Managed Services?",
      a: "HubSpot managed services can save you time, provide access to expertise, and ensure that you’re using HubSpot to its full potential. It allows your team to focus on core tasks while experts handle your HubSpot needs.",
    },
    {
      q: "What Services are Typically Included in HubSpot Managed Services?",
      a: "Services can vary, but they often include strategy development, content creation, email marketing, lead nurturing, CRM management, reporting and analytics, technical support, and system integration.",
    },
    {
      q: "Will I Have Control Over My HubSpot Account?",
      a: "Yes, you retain full ownership and control of your HubSpot account. Managed service providers work within your account and collaborate with your team to achieve your goals.",
    },
    {
      q: "What Results Can I Expect from HubSpot Managed Services?",
      a: "Results can vary depending on your goals, but you can expect improved lead generation, better lead nurturing, increased conversion rates, enhanced customer engagement, and ultimately, improved ROI on your HubSpot investment.",
    },
    {
      q: "How Long Does it Take to See Results with HubSpot Managed Services?",
      a: "The timeline for results can vary based on your starting point and goals. Some improvements, like email campaigns, can yield quick results, while larger-scale changes may take several months to show a significant impact.",
    },
    {
      q: "What’s Next If I Choose Growth Natives to Assist Me With HubSpot Audit Services?",
      a: "You can send us an email to info@growthnatives.com and our team will get back to you promptly. We’ll schedule an initial consultation to understand your requirements, and from there, we’ll develop a tailored plan to ensure that our services align with your objectives and expectations.",
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
        heading="HubSpot Managed Services "
        highlight="for Sustained Revenue Growth"
        description="HubSpot is the Swiss Army Knife for savvy marketers. Leverage its full potential by outsourcing day-to-day technology responsibilities as a strategic method for improving business processes and accelerating a return on your HubSpot investment."
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
            Key HubSpot Managed Services That We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We understand the intricate demands of managing a thriving business related to marketing automation, content marketing, data analysis, loyalty marketing, and more. Our HubSpot Managed Services provide you with a dedicated team of HubSpot experts who take care of the technology roadmap, so you can channel your energy into strategic initiatives and driving results in a progressive deployment environment.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Extend Your Marketing Team with Certified HubSpot Experts",
                desc:
                  "Build a productive team to optimize your marketing efforts and get round-the-clock support to scale your operations efficiently. Partner with us to:",
                bullets: [
                  "Get a dedicated HubSpot-certified project manager to help manage day-to-day activities",
                  "Augment your staff in case of long-term employee absence due to maternity, planned vacations, etc.",
                  "Manage through peak demand cost-effectively",
                  "Keep your operations running smoothly while you focus on your business strategy and growth",
                ],
              },
              {
                title: "Build Valuable Customized Marketing Assets",
                desc:
                  "Engage with our team to design marketing assets such as websites, landing pages, and email templates tailored to your business needs. Our team at Growth Natives will help you:",
                bullets: [
                  "Audit your current marketing assets to understand what’s working and what’s not",
                  "Develop SEO-friendly, conversion-focused websites, and landing pages to attract leads",
                  "Create effective email templates to increase engagement with potential customers",
                  "Perform A/B testing to optimize landing pages and emails based on real-time reports",
                ],
              },
              {
                title: "Nurture Your Lead Database",
                desc:
                  "Nurture your leads with effective campaign strategies to ensure a leak-proof marketing and sales funnel.",
                bullets: [
                  "Implement best lead routing practices that align with your business needs",
                  "Set up lead scoring techniques to nurture and engage prospects and customers",
                  "Manage multi-channel marketing touchpoints",
                  "Ensure compliance with GDPR/CCPA",
                ],
              },
              {
                title: "Optimize Marketing Strategies With Full-Funnel Analytics and Reporting",
                desc:
                  "Make smarter decisions with HubSpot’s in-depth analytics and reporting. Optimize marketing strategies and boost conversions with actionable insights. Our HubSpot marketing consultants will help you:",
                bullets: [
                  "Track every interaction of your leads with your brand throughout the sales funnel.",
                  "Create comprehensive engagement reports for all your marketing channels such as email, paid ads, website, and social media.",
                  "Customize your marketing dashboards to track KPIs such as conversions and sessions.",
                  "Analyze important metrics to continually optimize your email and ad campaigns",
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
      <FaqSection title="Frequently Asked Questions - HubSpot Managed Services Essentials" faqs={faqs} />

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
        heading="Enhance Your Business & Maximize the ROI You Get From Your HubSpot Instance"
        subtext="Let our HubSpot professionals guide your achievements and optimize your HubSpot investment, empowering your teams to flourish and exceed your business objectives."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
