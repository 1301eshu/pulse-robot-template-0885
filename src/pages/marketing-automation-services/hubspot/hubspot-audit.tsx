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
  // FAQs (from HubSpot Audit page)
  const faqs = [
    {
      q: "What is a HubSpot Audit, and Why is it Important?",
      a: "A HubSpot audit is a comprehensive review of your HubSpot account, strategies, and processes to assess their effectiveness and identify areas for improvement. It’s important because it ensures that you’re using HubSpot to its full potential, optimizing your marketing, sales, and customer service efforts, and ultimately driving better results.",
    },
    {
      q: "When should I Consider Conducting a HubSpot Audit?",
      a: "You should consider conducting a HubSpot audit when you’re experiencing a decline in performance, if you’ve recently onboarded HubSpot, or if you’re planning to scale your marketing and sales efforts. Regular audits, at least annually, are also a good practice to ensure you’re keeping up with HubSpot’s evolving features and best practices.",
    },
    {
      q: "What are the Key Components of a HubSpot Audit?",
      a: "A comprehensive HubSpot audit typically includes an evaluation of your:\n\nAccount setup and configuration\nContent strategy and quality\nAutomation workflows and sequences\nLead generation and nurturing processes\nReporting and analytics\nIntegration with other tools\nCompliance with best practices and HubSpot guidelines",
    },
    {
      q: "How Long Does a HubSpot Audit Usually Take?",
      a: "The duration of a HubSpot audit can vary depending on the complexity of your account and the depth of the audit. It can take anywhere from a few days to several weeks, with the auditing process itself typically lasting a few days to a week.",
    },
    {
      q: "Do I Need a HubSpot Expert to Conduct an Audit, or Can I Do it Myself?",
      a: "While some basic audits can be performed by HubSpot users with a good understanding of the platform, a more comprehensive audit often benefits from the expertise of a HubSpot-certified professional or agency. They can provide insights, best practices, and recommendations that you might overlook.",
    },
    {
      q: "What’s Next If I Choose Growth Natives to Assist Me With HubSpot Audit Services?",
      a: "You can send us an email to info@growthnatives.com and our team will get back to you promptly. We’ll schedule an initial consultation to understand your requirements, and from there, we’ll develop a tailored plan to audit your HubSpot instance effectively.",
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
        heading="HubSpot Opportunity Assessments"
        highlight="to Make Your HubSpot Instance Wholesome"
        description="Identify the gaps in your current HubSpot Implementation, get recommendations to improve performance and ROI, and find out what’s working for you and what’s not with a detailed usage report of your HubSpot instance."
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
            What’s Included in Our HubSpot Audit
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            While you tackle the other high-priority tasks on your plate, our HubSpot mavens will help you get the healthiest instance ever by giving you a roadmap to your future growth and success, with optimum web tracking, sales process engineering, conversion marketing, and web analytics.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Review Workflows, Sequences, Forms, and Landing Pages",
                desc:
                  "Our experienced HubSpot audit team can provide guidance and support in optimizing these elements to identify and leverage business opportunities, achieve business goals, and fulfill objectives, thereby resulting in improved engagement with leads and increased conversions.",
                bullets: [
                  "In-depth analysis of email sequences to maximize open and click-through rates",
                  "Optimize workflows, sequences, forms, and landing pages for better results",
                  "Access to suggestions for integrating new tools and features",
                  "Customized HubSpot audit report outlining our findings and actionable steps for improvement",
                ],
              },
              {
                title: "Identify Gaps in Campaigns, Forms, Emails, and Buyer Personas",
                desc:
                  "Identify areas for improvement and make data-driven decisions to optimize your marketing strategy. Our HubSpot audit solutions provide detailed insights into customer behavior and recommendations to help you bridge the gaps and achieve your marketing goals.",
                bullets: [
                  "Identify any gaps or inefficiencies in your marketing strategy or tracking system",
                  "Access to forms to determine if they are aligned with your goals",
                  "A detailed review of emails to ensure they are effectively engaging your audience",
                  "24x7 ongoing support to ensure the successful implementation of our recommendations",
                ],
              },
              {
                title: "Campaign Personalization and Segmentation",
                desc:
                  "Leveraging personalization and segmentation techniques to tailor your messaging to better resonate with your target audience and ensure fruitful customer experience. Refine your marketing campaigns to increase engagement and conversions.",
                bullets: [
                  "A thorough review of the performance indicators of your current campaign personalization and segmentation strategies",
                  "Recommendations for refining your approach to campaign personalization",
                  "Suggestions for leveraging tools to enhance personalization and segmentation",
                  "Comprehensive HubSpot audit to assess your database and its potential impact on segmentation",
                ],
              },
              {
                title: "Implement Automation and Shorten the Lead Cycle",
                desc:
                  "Improve process efficiency, reduce costs, and increase revenue by automating repetitive tasks and shortening the lead cycle. A HubSpot audit of your website can help your business reduce the time it takes to convert leads into customers.",
                bullets: [
                  "HubSpot portal audit of your instance for a deeper understanding of workflows",
                  "Ideas for automating various stages of your lead cycle",
                  "Evaluation of your lead nurturing and scoring strategies to ensure they are effective",
                  "Focused efforts on your highest-performing channels through the HubSpot website audit",
                ],
              },
              {
                title: "Optimize Lead Scoring and Improve CTRs",
                desc:
                  "Our HubSpot audit experts optimize lead scoring techniques and improve click-through rates (CTRs), thus allowing you to better understand your target audience and deliver more relevant and personalized content.",
                bullets: [
                  "Separate your direct MQL qualifiers into lists for a process centered on clean data",
                  "Assign score range to different iterations of the action to allow contacts to reach milestones",
                  "Identify and build an attribution report and assign positive and negative attributes",
                  "Optimize your email sequences to improve open and click-through rates",
                ],
              },
              {
                title: "Identify Leaks in the HubSpot CMS Hub",
                desc:
                  "Our manual and automated HubSpot content testing is followed by reports that include suggestions to improve the website for better search engine rankings and visibility.",
                bullets: [
                  "Thorough evaluation of your website pages, design manager, themes, and templates",
                  "Get data-driven insights into the performance of your content",
                  "Leverage pieces of content that perform best in your marketing practices",
                  "Identify areas for repurposing content and keeping it up-to-date",
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
          heading="Top Blogs"
          body="Get quick access to best practices and resources from our CMS experts."
          subTabs={[]}
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="Ready to Unlock the Full Potential of Your HubSpot Instance?"
        subtext="Get a clear understanding of the gap areas or issues, guidance for improvement, immediate success, and long-term wins."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
