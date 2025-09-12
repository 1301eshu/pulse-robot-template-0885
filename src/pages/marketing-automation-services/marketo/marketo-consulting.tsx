import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from '@/components/ui/component_12';
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";
import DynamicSEO from "@/components/DynamicSEO";

const L3Template = () => {
  // FAQs (from Marketo Consulting page)
  const faqs = [
    {
      q: "What is the Primary Focus of Your Marketo Consulting Services?",
      a: "Our primary focus in Marketo consulting services is to help businesses leverage the full potential of Marketo’s marketing automation platform to drive growth, improve lead generation, and enhance marketing efficiency.",
    },
    {
      q: "What Sets Your Marketo Consulting Services Apart from Others in the Market?",
      a: "What sets our Marketo consulting services apart is our team of experienced Marketo experts who bring a deep understanding of the platform’s capabilities and a proven track record of delivering results for our clients. We tailor our solutions to meet each client’s unique needs, ensuring a personalized and effective approach.",
    },
    {
      q: "Can You Provide Examples of Successful Projects You've Undertaken in the Past with Marketo?",
      a: "Certainly! We’ve helped numerous clients achieve remarkable results with Marketo, such as increasing lead conversions, automating email campaigns, reduction in workload, and implementing lead scoring strategies that boosted sales. These success stories showcase our expertise and commitment to driving tangible outcomes. You can find them on our website or if you’re looking for something specific, we’d be happy to share our solution around that specific project with you.",
    },
    {
      q: "How Do You Determine the Right Marketo Strategy for Our Business?",
      a: "We begin by conducting a thorough assessment of your business goals, current marketing processes, and target audience. Based on this analysis, we develop a tailored Marketo strategy that aligns with your objectives and leverages the platform’s features to achieve them effectively.",
    },
  ];



  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="marketingautomationservicesmarketoconsulting"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Steadfast Marketo Consulting Services"
        highlight="To Unlock Success"
        description="Enhance your B2B marketing strategy with expert Marketo consulting services. Build a solid marketing plan that drives engagement, brand awareness, and demand generation while ensuring quality of service."
      />

      <EditableStatSection
        stats={[
          { label: "Marketo Customers", value: "80+" },
          { label: "Certified Marketo Experts", value: "60+" },
          { label: "Increase in Marketo Campaign Efficiency", value: "30%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Marketo Consulting Services for Strategic Growth
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our team of Marketo-certified experts provides customized solutions to transform your marketing communications strategy, improve process efficiency, and drive measurable success. We help businesses enhance email marketing, automation, and overall product (business) impact.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Audit and Optimization Strategy",
                desc:
                  "Maximize your Marketo instance’s potential with expert insights. Our knowledge-driven approach ensures optimized data, workflows, and implementation strategies:",
                bullets: [
                  "In-depth Marketo instance review",
                  "Eliminate redundant or duplicate content",
                  "Data normalization & management",
                  "Streamline workflows for enhanced efficiency",
                ],
              },
              {
                title: "Lead Lifecycle & Lead Scoring Programs",
                desc:
                  "Increase revenue with a strategic planning approach to lead nurturing and demand generation. Our best practices in lead scoring help boost conversions:",
                bullets: [
                  "Develop and refine lead scoring models",
                  "Optimize lead stages in Marketo and CRM",
                  "Reduce lead response time for faster engagement",
                ],
              },
              {
                title: "Activate Personalization in Marketo",
                desc:
                  "Deliver hyper-personalized experiences that improve brand awareness and engagement. Our experts craft seamless user journeys:",
                bullets: [
                  "Dynamic landing pages and personalized email marketing",
                  "Pre-filled forms to enhance usability and conversions",
                  "AI-driven hyper-personalized ad campaigns",
                ],
              },
              {
                title: "Best Practices-Based Marketo Campaigns & Assets",
                desc:
                  "Your marketing assets should reflect your brand identity while maximizing impact. We create engaging campaign assets to align with your marketing plan:",
                bullets: [
                  "Custom content for webinars, demos, and lead nurturing",
                  "Mobile-first, responsive email and landing pages",
                  "Dynamic content-enabled email marketing campaigns",
                ],
              },
              {
                title: "Build Reporting & Analytics Dashboards",
                desc:
                  "Gain actionable insights with powerful analytics. We help businesses improve quality of service through custom Marketo dashboards:",
                bullets: [
                  "Revenue cycle analytics for marketing effectiveness",
                  "Automated reports and campaign performance tracking",
                  "A/B testing and usability testing for optimization",
                ],
              },
              {
                title: "Lead Nurture & Engagement Programs",
                desc:
                  "Ensure an optimized demand generation and lead nurturing strategy:",
                bullets: [
                  "Best-practices-driven engagement programs",
                  "Full-funnel lead nurture strategies to reduce churn",
                  "Optimized lead-routing process for efficiency",
                ],
              },
              {
                title: "Marketing Technology Stack Strategy & Execution",
                desc:
                  "Leverage innovation and cutting-edge MarTech solutions to build a robust marketing technology stack:",
                bullets: [
                  "Custom integrations for seamless workflows",
                  "Analytics-driven insights for MarTech performance tracking",
                  "ABM, AdTech, and customer marketing specialization",
                ],
              },
              {
                title: "Data Strategy & Quality",
                desc:
                  "Maintain a clean and reliable database for optimal email marketing and campaign success:",
                bullets: [
                  "Database audits and quality improvements",
                  "Custom API integrations for better lead tracking",
                  "Dynamic content implementation across assets",
                ],
              },
              {
                title: "Marketing Analysis & Reporting",
                desc:
                  "Optimize your marketing communications strategy with in-depth analysis and reporting:",
                bullets: [
                  "ROI reporting for marketing channels",
                  "Custom Marketo & CRM dashboards for data-driven decisions",
                  "Email performance analysis for improved targeting",
                ],
              },
              {
                title: "Data Cleaning & Email Reputation Management",
                desc:
                  "Protect your email marketing campaigns from inefficiencies and spam traps:",
                bullets: [
                  "Reduce data errors and remove inactive leads",
                  "Enhance marketing attribution accuracy",
                  "Improve deliverability by blocking hard-bounced emails",
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
                    resourceType="40"

        />
      </div>

      <ContactCta
        heading="Sign Up for a Complimentary Consultation"
        subtext="Enhance your B2B marketing strategy with expert Marketo consulting services. Build a solid marketing plan that drives engagement, brand awareness, and demand generation while ensuring quality of service."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

