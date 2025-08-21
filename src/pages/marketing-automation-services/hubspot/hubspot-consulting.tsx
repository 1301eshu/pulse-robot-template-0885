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
  // FAQs (from HubSpot Consulting page)
  const faqs = [
    {
      q: "How do HubSpot consulting services benefit my business?",
      a: "Our HubSpot consulting services help businesses optimize their HubSpot ecosystem by aligning strategies with business goals, increasing conversion rates, and improving the end-user experience.",
    },
    {
      q: "What does the HubSpot migration process include?",
      a: "We provide a detailed migration plan that covers everything from data cleanup to asset migration, ensuring compliance with privacy laws like GDPR and CCPA.",
    },
    {
      q: "How does hyper-personalization improve conversion rates?",
      a: "Hyper-personalization tailors content to individual users based on their behaviors and preferences, leading to higher engagement and conversion rates.",
    },
    {
      q: "What are the benefits of Account-Based Marketing in HubSpot?",
      a: "ABM strategies help you target high-value accounts with personalized campaigns, increasing the likelihood of conversions and driving higher ROI.",
    },
    {
      q: "How does HubSpot help with campaign management?",
      a: "Our team helps you create, manage, and optimize HubSpot campaigns, ensuring your efforts are efficient and yield measurable results.",
    },
    {
      q: "What kind of insights can I gain from a HubSpot audit?",
      a: "A HubSpot audit provides insights into the health of your marketing automation, identifying areas for improvement and optimizing campaign performance.",
    },
    {
      q: "How does lead scoring work in HubSpot?",
      a: "Lead scoring helps you prioritize leads by assigning values based on behaviors and demographics, allowing you to focus on high-quality prospects.",
    },
    {
      q: "What is the role of persona-driven content in HubSpot?",
      a: "Persona-driven content is tailored to specific user profiles, enhancing engagement by providing relevant and personalized experiences.",
    },
    {
      q: "How does ABM in HubSpot integrate with existing sales processes?",
      a: "We streamline your sales and marketing alignment by integrating ABM strategies with your existing processes, ensuring smooth collaboration and better lead management.",
    },
    {
      q: "Why is data governance important in HubSpot?",
      a: "Data governance ensures that your customer data is clean, compliant, and usable, which is crucial for executing accurate and effective marketing campaigns.",
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
        heading="HubSpot Consulting Services"
        highlight="– Maximize Your HubSpot Ecosystem"
        description="Our HubSpot consulting services are designed to help you get the most out of your HubSpot platform by offering personalized solutions that align with your company’s marketing, sales, and service objectives. We work closely with you to create customized strategies that boost conversion marketing, enhance end-user experiences, and drive measurable results."
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
            Key HubSpot Consulting Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We provide a comprehensive range of HubSpot consulting services aimed at unlocking the full potential of the platform to meet your specific business goals.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Marketing Opportunity Assessments",
                desc:
                  "Our HubSpot consultants perform thorough audits of your HubSpot implementation to identify growth opportunities and optimize your marketing automation.",
                bullets: [
                  "In-depth audits of your marketing automation setup",
                  "Identify gaps to power growth marketing",
                  "Optimize processes for reduced costs and better ROI",
                  "Improve instance health for better performance",
                ],
              },
              {
                title: "Marketing Strategy Creation",
                desc:
                  "Your marketing strategy should be tailored to your business persona and target market. Our consultants help you build effective lead nurturing and engagement strategies to optimize your marketing funnel.",
                bullets: [
                  "Implement best practices for lead routing",
                  "Adopt multi-channel lead nurturing",
                  "Use lead scoring techniques for effective user engagement",
                  "Monitor buyer journey touchpoints across platforms",
                ],
              },
              {
                title: "HubSpot Migration or Implementation",
                desc:
                  "Transitioning to HubSpot or from HubSpot can be daunting. Our certified HubSpot experts ensure a seamless migration process, allowing you to focus on growing your business.",
                bullets: [
                  "Build detailed migration execution plans",
                  "Migrate all assets, leads, and contacts with ease",
                  "Ensure GDPR/CCPA compliance throughout the process",
                  "Clean and organize data for better functionality and accuracy",
                ],
              },
              {
                title: "Marketing Campaign Management",
                desc:
                  "Our HubSpot campaign concierges will manage your campaigns from strategy to execution, ensuring constant monitoring and optimization to generate more leads.",
                bullets: [
                  "Continuous monitoring and campaign optimization",
                  "A/B testing to find the most effective campaign variants",
                  "Content creation for higher lead generation",
                  "Full-funnel support for comprehensive marketing strategies",
                ],
              },
              {
                title: "Hyper-Personalization in HubSpot",
                desc:
                  "We help you leverage hyper-personalization to provide a unique and engaging experience for each user, driving better conversion rates and improving customer experience.",
                bullets: [
                  "Persona-driven content personalization for targeted marketing",
                  "Customer journey mapping across all digital channels",
                  "Optimize personalization processes continuously for improved results",
                  "Omnichannel marketing approach for a holistic customer experience",
                ],
              },
              {
                title: "Account-Based Marketing (ABM) in HubSpot",
                desc:
                  "Our ABM strategies target high-value accounts, helping you create meaningful relationships and close deals faster.",
                bullets: [
                  "Develop ABM strategies to identify good-fit target accounts",
                  "Streamline the sales and ABM process to convert prospects faster",
                  "Build meaningful relationships with personalized engagement",
                  "Track and optimize ABM strategy through dedicated dashboards",
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
        />
      </div>

      <ContactCta
        heading="Ready to Harness the Power of HubSpot to Propel Your Business Forward?"
        subtext="Work with dedicated HubSpot consultants to learn how you and your team can implement new tools & functionalities and achieve exceptional results with HubSpot."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

