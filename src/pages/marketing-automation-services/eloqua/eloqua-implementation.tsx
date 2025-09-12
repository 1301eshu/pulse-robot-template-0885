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
  // FAQs (from Oracle Eloqua Implementation page)
  const faqs = [
    {
      q: "What is Oracle Eloqua, and Why is it Essential for B2B Marketing?",
      a: "Oracle Eloqua is a powerful marketing automation platform designed for B2B marketers. It enables businesses to create, manage, and analyze marketing campaigns, nurture leads, and drive engagement. Oracle Eloqua is essential for B2B marketing as it streamlines marketing processes, enhances lead generation, and improves customer engagement, ultimately driving revenue growth.",
    },
    {
      q: "How Can Oracle Eloqua Benefit My B2B Organization?",
      a: "Oracle Eloqua offers several benefits for B2B organizations, including lead nurturing, email marketing automation, personalized content delivery, comprehensive analytics, and seamless integration with CRM systems. These features help improve marketing efficiency, lead quality, and overall ROI.",
    },
    {
      q: "What Sets You Apart as an Oracle B2B Consultant for Eloqua Implementation?",
      a: "We excel as an Oracle B2B consultant for Eloqua implementation due to our in-depth expertise, a team of certified Eloqua specialists, and a track record of successful implementations. We tailor our services to your unique B2B needs, ensuring a seamless integration that drives marketing success.",
    },
    {
      q: "How Long Does it Typically Take to Implement Oracle Eloqua for B2B Marketing?",
      a: "The duration of an Oracle Eloqua implementation can vary depending on the complexity of your marketing processes and requirements. On average, an implementation can take several weeks to a few months. We work closely with you to establish a timeline that aligns with your goals.",
    },
    {
      q: "Can You Help With Data Migration and Integration as Part of the Oracle Eloqua Implementation Process?",
      a: "Yes, our Oracle Eloqua implementation services include data migration and integration. We ensure a smooth transition of your existing data and integrate Eloqua with your CRM, ensuring data consistency and accuracy.",
    },
    {
      q: "What Kind of Post-Implementation Support Do You Provide for Oracle Eloqua?",
      a: "We offer comprehensive post-implementation support to ensure the ongoing success of your Oracle Eloqua platform. This includes troubleshooting, updates, training, and assistance with campaign optimization.",
    },
    {
      q: "What’s Next If I Choose Growth Natives to Assist Me With Oracle Eloqua Implementation Services?",
      a: "You can send us an email to info@growthnatives.com and our team will get back to you promptly. We’ll schedule an initial consultation to discuss your B2B marketing goals and how our Oracle Eloqua implementation services can benefit your organization.",
    },
  ]; // FAQs block from “Frequently Asked Questions - Oracle Eloqua Implementation Essentials”. :contentReference[oaicite:1]{index=1}


  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page="marketingautomationserviceseloquaimplementation"/>
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Oracle Eloqua Implementation Services "
        highlight="Tailored to Your Unique Business Needs"
        description="Our Eloqua aces can help you harness the full potential of this platform and achieve your marketing goals with our robust system integration services. We provide end-to-end implementation and customization to accelerate your business growth."
      />{/* Hero copy from page top. :contentReference[oaicite:2]{index=2} */}

      <EditableStatSection
        stats={[
          { label: "Oracle Eloqua Customers", value: "25+" },
          { label: "Certified Oracle Eloqua Experts", value: "20+" },
          { label: "Increase in Oracle Eloqua Campaign Efficiency", value: "30%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />{/* Stats directly from the page. :contentReference[oaicite:3]{index=3} */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Oracle Eloqua Implementation Services We offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our team of Eloqua experts can help you with everything from initial set-up and configuration, analyzing the target market, curating goal oriented marketing strategies, to ongoing support and customization.
          </p>
          {/* Services intro from the page section. :contentReference[oaicite:4]{index=4} */}

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Planning & Implementation",
                desc:
                  "Supercharge your marketing & sales process with steadfast Eloqua planning and implementation. Our Eloqua experts ensure that your Oracle Eloqua services implementation is seamless and successful, leading to improved lead generation, better customer engagement, and higher revenue by conducting thorough usability testing.",
                bullets: [
                  "Set up the Eloqua account",
                  "Integrate Eloqua with CRM, CMS, and finance systems",
                  "Customize implementation plan based on business goals",
                  "Configuring reporting and analytics dashboards",
                ],
              },
              {
                title: "Optimization and Performance Audit",
                desc:
                  "Our Oracle Eloqua experts run an in-depth analysis and software documentation of Eloqua implementation to identify gaps and areas of improvement. We optimize the implementation to deliver the best results.",
                bullets: [
                  "Get an in-depth review of your Eloqua implementation",
                  "Improve efficiency and productivity of marketing campaign",
                  "Identify gaps in configuration, data quality, and campaign",
                  "Align Oracle Eloqua with business goals and objectives",
                ],
              },
              {
                title: "Developing Emails & Landing Pages",
                desc:
                  "As experts in Oracle Eloqua implementation, we elevate your email marketing campaigns with custom email and landing pages. We help you create visually appealing and personalized email templates that capture your brand’s unique voice and messaging.",
                bullets: [
                  "Create custom email templates using branding elements",
                  "Strategize, design, and code landing pages for unparalleled customer service and experience",
                  "Run A/B tests to identify the best landing page and email design",
                  "Implement Oracle Eloqua email automation solutions",
                  "Migrate to Oracle Eloqua from other email service providers",
                ],
              },
              {
                title: "Providing Team Training & Workshops",
                desc:
                  "Our comprehensive training program empowers your team with the skills and knowledge to fully leverage the power of Oracle Eloqua’s marketing automation platform. From lead scoring and segmentation to landing page development, our expert trainers will guide your team every step of the way.",
                bullets: [
                  "On-site and on-demand Oracle Eloqua training",
                  "Tailored training curriculum to meet specific goals",
                  "Personalized guidance and support for team members",
                  "Recorded sessions for onboarding new members",
                ],
              },
              {
                title: "Integrating Oracle Eloqua With Third-Party Platforms",
                desc:
                  "Enjoy seamless integration of Oracle Eloqua with other platforms. From CRM systems and social media platforms to analytics tools and content management systems, our team helps you centralize your data and streamline workflows.",
                bullets: [
                  "Integrate CRM, CMS, social media platforms, and analytics tools",
                  "Streamline workflows and achieve better results",
                  "Help gain deeper insights into your audience",
                  "Centralize data to save time, reduce errors, and improve efficiency",
                ],
              },
              {
                title: "Tracking Performance & Creating Reports",
                desc:
                  "Eloqua offers a range of tools for tracking and analyzing the performance of marketing campaigns, including email campaigns, landing pages, forms, and more. Our team of Eloqua implementation specialists will deliver business intelligence insights to help you make better decisions.",
                bullets: [
                  "Define your marketing goals and KPIs",
                  "Set up the tracking code on your website",
                  "Set up lead-scoring rules based on the need",
                  "Customize dashboards for need-based tracking",
                ],
              },
              {
                title: "Optimizing Drip & Nurture Programs",
                desc:
                  "As part of our Eloqua implementation services, we create and automate targeted email campaigns designed to engage and nurture prospects through the buying journey.",
                bullets: [
                  "Nurture leads and move them through the sales funnel",
                  "Streamline marketing processes through automation",
                  "Increase engagement by delivering personalized content",
                  "Gain deeper insights into prospect behavior",
                  "Create a comprehensive marketing automation solution",
                ],
              },
              {
                title: "Ensuring GDPR / CASL / CCPA Compliance",
                desc:
                  "Our Oracle Eloqua implementation specialists ensure compliance with Privacy laws like GDPR / CASL / CCPA for marketing. We take consumer privacy seriously during our implementation.",
                bullets: [
                  "Help businesses comply with data protection laws",
                  "Streamline collection, processing, and storage of data",
                  "Monitor and audit data processing activities",
                  "Set up protocols for data security and breach notification",
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
          {/* Services copied from the page’s “Key Oracle Eloqua Implementation Services We offer”. :contentReference[oaicite:5]{index=5} */}
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
          body="Get quick access to our best practices and resources from experienced."
          subTabs={[]}
          resourceType="24"
        />
      </div> {/* “Top Blogs” block text taken from the page. :contentReference[oaicite:6]{index=6} */}

      <ContactCta
        heading="Your Trusted Oracle Eloqua Implementation Partners"
        subtext="Implement Oracle Eloqua to access a marketing mix that delights customers, resulting in more qualified leads and improved campaign performance."
        buttonLabel="Schedule a 1:1 Call"
        buttonLink="/get-started"
      />{/* CTA pulled from the page footer section. :contentReference[oaicite:7]{index=7} */}

      <Footer />
    </div>
  );
};

export default L3Template;

