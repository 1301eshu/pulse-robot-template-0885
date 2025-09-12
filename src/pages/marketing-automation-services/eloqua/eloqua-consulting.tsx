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
  // FAQs (from Oracle Eloqua Consulting page)
  const faqs = [
    {
      q: "What are Oracle Eloqua Consulting Services, and How Can They Benefit My B2B Organization?",
      a: "Oracle Eloqua consulting services provide expert guidance and support for leveraging the full potential of the Oracle Eloqua marketing automation platform. As an Oracle B2B consultant, we specialize in configuring, optimizing, and managing Eloqua to streamline marketing processes, drive lead generation, nurture customer relationships, and enhance ROI. Our services ensure you harness the power of Eloqua to meet your B2B marketing goals effectively.",
    },
    {
      q: "How Can Oracle Eloqua Consulting Services Help My Business With Lead Generation and Nurturing?",
      a: "Oracle Eloqua consulting services excel in lead generation and nurturing by designing and executing lead-scoring models, automated drip campaigns, and personalized customer journeys. We help you identify high-potential leads, tailor content to their needs, and nurture them through the sales funnel, ultimately resulting in increased conversions and revenue.",
    },
    {
      q: "How Do You Ensure Data Security and Compliance?",
      a: "Data security and compliance are paramount in Oracle Eloqua consulting. We implement industry best practices to safeguard your data and ensure compliance with data protection regulations such as GDPR and CCPA. Eloqua’s robust security features and our expertise combine to maintain the integrity of your marketing data.",
    },
    {
      q: "What Sets You Apart as an Oracle B2B consultant for Eloqua Consulting Services?",
      a: "We stand out as an Oracle B2B consultant due to our extensive experience with Eloqua, a team of certified experts, and a track record of delivering successful Eloqua implementations and optimizations. We offer customized solutions, prioritize client objectives, and provide ongoing support to ensure your B2B marketing success.",
    },
  ];



  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="marketingautomationserviceseloquaconsulting"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Oracle Eloqua Consulting Services"
        highlight="to Elevate Your Business Agility and Growth"
        description="Whether you’re just getting started with Oracle Eloqua or want to upgrade your existing Oracle Cloud platform and want to optimize its usage, our Eloqua experts have got you covered."
      />

      <EditableStatSection
        stats={[
          { label: "Oracle Eloqua Customers", value: "25+" },
          { label: "Certified Oracle Eloqua Experts", value: "20+" },
          { label: "Increase in Oracle Eloqua Campaign Efficiency", value: "30%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Oracle Eloqua Consultation Services We offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            With our technical know-how about enterprise resource planning, business process automation, predictive analytics, Oracle’s suit of application software, and proven expertise from implementing countless Oracle Eloqua journeys, we can help you achieve the best version of your future digital state with our consulting services.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Marketing and Sales Alignment",
                desc:
                  "Our Eloqua consultants align your sales and marketing workflows with best practices for establishing communication, brand loyalty, and customer retention . We help you seal the gap between these two critical departments to maximize conversions, accelerate the sales cycle, and improve collaboration between the two teams.",
                bullets: [
                  "Work closely with your sales & marketing teams to establish shared objectives",
                  "Implement lead management processes that facilitate smoother transitions",
                  "Develop effective lead-scoring models that prioritize leads effectively",
                  "Ensure that both teams have access to the customer data they need to comprehend the consumer behavior and nurture leads effectively",
                  "Set up closed-loop reporting systems to track the progress of leads",
                ],
              },
              {
                title: "Building Lead Management Framework",
                desc:
                  "As an Oracle consulting firm, we build a result-oriented lead management framework while focusing on agile software development for capturing, qualifying, and nurturing leads. Our team outlines steps to convert potential customers into paying customers and improve their overall experience on your platform.",
                bullets: [
                  "Define your ideal customer profile and develop buyer personas for extending optimum customer experience, crucial for transitioning leads",
                  "Improve lead quality and increase conversion rates",
                  "Integrate Eloqua with your CRM system",
                  "Create lead nurturing campaigns to deliver personalized content",
                  "Establish protocols for lead routing and handoff",
                ],
              },
              {
                title: "Executing Eloqua Nurture Campaigns",
                desc:
                  "Effective nurture campaigns build trust, engage your audience, and guide them toward conversion. Our Oracle Eloqua consultants help you design campaigns that nurture your leads at different buying cycle stages. We create a scoring model to prioritize your leads based on their level of engagement and fit with your ideal customer profile.",
                bullets: [
                  "Identify the target audience and segment them based on relevant criteria",
                  "Build your campaign flow using Eloqua's campaign builder",
                  "Create campaign assets, including content, emails, and landing pages",
                  "Monitor performance and refine your campaign",
                ],
              },
              {
                title: "Providing Oracle Eloqua Platform Management Solutions",
                desc:
                  "Focus on growing your business as we handle complex and time-consuming tasks. Our Oracle consulting services include end-to-end platform management solutions to help you get the best out of this marketing automation platform.",
                bullets: [
                  "Eloqua Managed Services for day-to-day platform management",
                  "Support services for support, account management, and training",
                  "Optimize instances by reviewing the configuration and data architecture",
                  "Comprehensive analysis of your instance, lead scoring, and reporting",
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
          resourceType="24"
        />
      </div>

      <ContactCta
        heading="Sign up for a Complimentary Consultation"
        subtext="Whether you’re just getting started with Oracle Eloqua or want to upgrade your existing Oracle Cloud platform and want to optimize its usage, our Eloqua experts have got you covered."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

