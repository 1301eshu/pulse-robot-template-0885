import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from "@/components/ui/component_12";
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";

const L3Template = () => {
  // FAQs (from HubSpot Training page)
  const faqs = [
    {
      q: "What is HubSpot Training, and Why is it Important for Businesses?",
      a: "HubSpot training is a specialized program designed to educate individuals and businesses on how to effectively use HubSpot’s suite of marketing, sales, and customer service tools. It empowers teams to maximize HubSpot, streamline processes, and achieve marketing and sales goals more efficiently.",
    },
    {
      q: "Who Can Benefit from HubSpot Training?",
      a: "Marketing professionals, sales teams, customer service representatives, business owners, and anyone looking to harness the full potential of HubSpot’s tools to enhance inbound marketing and sales strategies.",
    },
    {
      q: "Is HubSpot Training Suitable for Beginners With No Prior Experience?",
      a: "Yes. There are introductory courses that provide a solid foundation for newcomers, as well as advanced training for those looking to deepen their expertise.",
    },
    {
      q: "Can You Customize HubSpot Training to Meet Our Specific Business Needs?",
      a: "Absolutely. Training can be tailored to your specific industry, goals, and requirements.",
    },
    {
      q: "Are the Trainers Certified by HubSpot?",
      a: "Yes. Trainers are HubSpot‑certified experts with extensive experience in using HubSpot’s tools and implementing inbound strategies.",
    },
    {
      q: "What is the Duration of HubSpot Training Programs?",
      a: "Duration varies by course and need—from a few hours for individual sessions to several weeks for comprehensive certification programs.",
    },
    {
      q: "Is Ongoing Support Available After Completing HubSpot Training?",
      a: "Yes. Ongoing support and assistance are available to help teams continue making the most of HubSpot and stay updated on features and best practices.",
    },
    {
      q: "What’s Next If I Choose Growth Natives to Assist Me With HubSpot Training Services?",
      a: "Reach out at info@growthnatives.com to schedule an initial consultation, align on objectives, and receive a customized training plan.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="HubSpot Training Services"
        highlight="to Master the Art of Inbound and Content Marketing"
        description="Get your entire team up to speed on HubSpot in a hands‑on environment—learn inbound and content marketing, take practical courses, pursue certifications, and make the most of your HubSpot instance."
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
            What Our HubSpot Training Entails
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Learn from certified HubSpot experts through courses designed to help you leverage HubSpot tools—optimize online presence, run effective campaigns, extend positive customer experiences, streamline processes, and achieve business goals.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "A Controlled & Safe Learning Environment",
                desc:
                  "Dedicated learning paths and progress tracking help teams practice HubSpot skills at their own pace with interactive elements.",
                bullets: [
                  "Interactive tutorials, quizzes, and feedback",
                  "Modules for specific HubSpot features",
                  "Manager/administrator progress tracking",
                  "Regular content updates and new courses",
                ],
              },
              {
                title: "Lifetime Access to Online Webinars",
                desc:
                  "Unlimited access to a library of pre‑recorded webinars across marketing, sales, and service to learn and revisit anytime.",
                bullets: [
                  "Extensive webinar library",
                  "Insights and best practices to grow",
                  "New perspectives and strategies",
                  "Lifetime access to training webinars",
                ],
              },
              {
                title: "Robust HubSpot CMS Training",
                desc:
                  "Tailored training and support to master HubSpot tools and features—improve performance and ROI with flexible formats.",
                bullets: [
                  "Master key tools and features",
                  "In‑person sessions to clear doubts",
                  "Improve performance and ROI",
                  "Learn on your schedule",
                ],
              },
              {
                title: "HubSpot CMS Training Course Outlines",
                desc:
                  "Courses to manage website content, update pages, add content, and optimize site structure—no complex coding required.",
                bullets: [
                  "Interpret analytics to maximize time and budget",
                  "Target each buying‑stage to expand reach",
                  "Organize content for topic‑based SEO",
                  "Create & optimize lead‑gen and conversion strategies",
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
          resourceType="71"
        />
      </div>

      <ContactCta
        heading="Upgrade Your HubSpot Skillset With a Trusted HubSpot Partner"
        subtext="Build your brand strategy on the inbound methodology to generate and convert more leads and delight your customers."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

