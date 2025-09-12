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
  // FAQs (from Pardot Consulting page)
  const faqs = [
    {
      q: "How does Pardot help with engagement marketing?",
      a: "Pardot enhances engagement marketing by automating personalized campaigns, nurturing leads, and improving customer satisfaction through targeted communications.",
    },
    {
      q: "What role does scalability play in Pardot consulting services?",
      a: "Scalability ensures your Pardot system can grow with your business, allowing for expanded marketing operations and better lead management without sacrificing efficiency.",
    },
    {
      q: "How does Pardot consulting improve customer experience?",
      a: "Our Pardot consulting services optimize every touchpoint, aligning marketing efforts with customer preferences to provide a seamless and personalized customer experience.",
    },
    {
      q: "How do analytics and reporting drive better results in Pardot?",
      a: "Pardot’s powerful analytics tools enable precise tracking of campaign performance, helping you make data-driven decisions to improve brand awareness and maximize ROI.",
    },
    {
      q: "What are the benefits of market segmentation in Pardot?",
      a: "Market segmentation helps tailor your marketing efforts to specific audiences, improving engagement rates and increasing the effectiveness of your campaigns.",
    },
    {
      q: "How does compliance with GDPR/CASL/CCPA affect Pardot operations?",
      a: "Compliance ensures that your marketing communications adhere to privacy laws, protecting customer data and maintaining trust in your online community.",
    },
    {
      q: "Why is strategic planning essential for Pardot implementation?",
      a: "Strategic planning helps align your marketing strategy with business goals, ensuring that your Pardot instance is set up for long-term success and optimized performance.",
    },
    {
      q: "How does A/B testing improve campaign performance in Pardot?",
      a: "A/B testing allows you to experiment with different assets and strategies, optimizing campaigns for better engagement and customer satisfaction.",
    },
    {
      q: "How does Pardot align sales and marketing teams?",
      a: "Pardot’s automation capabilities bridge the gap between sales and marketing by providing insights and optimizing workflows, ensuring better collaboration and improved results.",
    },
    {
      q: "What does a comprehensive Pardot audit include?",
      a: "A Pardot audit involves reviewing lead generation, market segmentation, and campaign performance, ensuring the system is optimized for better lead management and enhanced marketing accountability.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="marketingautomationservicespardotconsulting"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Strategic Marketing Cloud Account Management (Formerly Pardot) Consulting Services"
        highlight="for Business-to-Business Success"
        description="Maximize your Pardot implementation with expert consulting tailored to your project requirements. Our certified specialists enhance learning, optimize email marketing, and refine web content strategies to improve engagement and sales alignment."
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
            Key Pardot Consulting & Managed Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our Pardot consulting services are crafted to elevate your business marketing strategies, ensuring better scalability and enhanced customer satisfaction. With a focus on aligning market segmentation and customer experience, we help you optimize your marketing automation and boost your return on investment.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Strategic Implementation & Business-to-Business Optimization",
                desc: "Our consulting services ensure your marketing automation aligns with your business-to-business goals, improving efficiency and return on investment.",
                strongs: [],
                bullets: [
                  "Assess business processes and project requirements",
                  "Provide strategic insights and tool integration",
                  "Develop a structured learning roadmap for automation success",
                  "Optimize lead generation for better cost efficiency",
                ],
              },
              {
                title: "Pardot Optimization & Knowledge-Driven Improvements",
                desc: "Improve managed services with expert auditing and workflow refinement, ensuring your email marketing and lead nurturing strategies deliver results.",
                strongs: [],
                bullets: [
                  "Conduct comprehensive audits for cost-effective operations",
                  "Implement lead qualification and segmentation for better targeting",
                  "Align sales and marketing to accelerate conversions",
                  "Enhance knowledge management for campaign efficiency",
                ],
              },
              {
                title: "Lead Nurturing & Email Marketing for Scalable Growth",
                desc: "Boost your sales pipeline with training-driven strategies that prioritize high-quality prospects and business-to-business engagement.",
                strongs: [],
                bullets: [
                  "Identify and nurture leads with AI-driven scoring",
                  "Implement persona-based targeting for optimized conversion",
                  "Improve lead routing to accelerate response times",
                  "Automate email marketing workflows for maximum engagement",
                ],
              },
              {
                title: "Best Practice-Based Pardot Campaigns & Assets",
                desc: "Enhance your email marketing and web content with proven business-to-business strategies. Our experts design, test, and refine campaign assets to boost engagement and maximize performance.",
                strongs: [],
                bullets: [
                  "Create personalized email marketing campaigns and landing pages",
                  "Implement nurture campaigns to drive engagement and conversions",
                  "Conduct A/B testing on forms and assets for cost-effective improvements",
                  "Optimize marketing dashboards with insightful information and reports",
                ],
              },
              {
                title: "GDPR, CASL & CCPA Compliance in Pardot",
                desc: "Stay ahead of evolving regulations with our managed services, ensuring your marketing campaigns meet the latest compliance requirements.",
                strongs: [],
                bullets: [
                  "Ensure compliance with GDPR, CASL, and CCPA privacy laws",
                  "Maintain transparency in customer engagement and knowledge management",
                  "Monitor and maintain Pardot platform health for consistent functionality",
                  "Implement automated consent tracking to streamline compliance efforts",
                ],
              },
              {
                title: "Pardot Campaign Consulting & Strategic Training",
                desc: "Our consulting services help you refine business-to-business marketing campaigns, improve learning and training initiatives, and maximize your return on investment.",
                strongs: [],
                bullets: [
                  "Execute personalized campaigns for targeted marketing communications",
                  "Manage Salesforce accounts, Pardot platforms, and automation workflows",
                  "Provide advanced reporting and in-depth project documentation",
                  "Optimize lead nurturing strategies to improve conversion rates",
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
          resourceType="73"
        />
      </div>

      <ContactCta
        heading="Need a Trusted Pardot Consulting Partner?"
        subtext="Focus your energy on business growth while we expand your Account Engagement operations."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/contact-us/"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
