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
  // FAQs (from GMB Services page)
  const faqs = [
    {
      q: "How does GMB profile optimization improve business visibility?",
      a: "By optimizing your GMB profile with accurate business details, relevant keywords, and local citations, you enhance your business’s visibility in local search results and improve your position on web directories like Google Maps.",
    },
    {
      q: "Why is local SEO important for GMB?",
      a: "Local SEO helps your GMB listing rank higher in local search results, ensuring that users in your geolocation can easily find and engage with your business.",
    },
    {
      q: "How does mobile optimization impact GMB performance?",
      a: "Mobile optimization ensures that users accessing your GMB listing on smartphones or tablets have a seamless experience, improving engagement and reducing bounce rates.",
    },
    {
      q: "How do analytics improve the effectiveness of a GMB strategy?",
      a: "Detailed analytics provide insights into how your GMB profile is performing, allowing you to make informed decisions and refine your strategy for better customer conversions and ROI.",
    },
    {
      q: "What role does reputation management play in GMB?",
      a: "Managing customer reviews and responding promptly to feedback builds trust and improves your brand’s reputation, which is essential for attracting new customers and maintaining brand awareness.",
    },
    {
      q: "How does Google Maps optimization enhance customer engagement?",
      a: "By optimizing your GMB profile for Google Maps, you make it easier for customers to find your business, leading to improved engagement and increased foot traffic.",
    },
    {
      q: "What are local citations, and how do they affect GMB performance?",
      a: "Local citations are mentions of your business on other websites and directories. Consistent and accurate citations help improve your local search rankings and boost your visibility.",
    },
    {
      q: "How can GMB services contribute to the buyer decision process?",
      a: "A well-optimized GMB profile provides potential customers with the information they need—such as contact details, reviews, and business hours—right when they’re making a purchasing decision.",
    },
    {
      q: "Why is regular GMB profile management important?",
      a: "Regular management ensures your GMB profile stays accurate and up-to-date, reflecting the most current business information and fostering trust with potential customers.",
    },
    {
      q: "How does content tailored for local audiences improve GMB engagement?",
      a: "Localized content speaks directly to your audience’s needs and preferences, increasing engagement and improving your business’s connection with the community.",
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
        heading="GMB (Google My Business) Services"
        highlight="to Convert Searchers into Customers"
        description="Google My Business (GMB) listing is crucial for making a strong first impression, enhancing brand awareness, and driving conversions. Our expert GMB services are designed to accelerate customer acquisition, improve local visibility, and establish a strong reputation management strategy that converts internet searchers into loyal customers."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Expertise", value: "100+" },
          { label: "Keywords Presence Rank in Google Places", value: "100+" },
          { label: "Digital Experts", value: "300+" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key GMB Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We offer a comprehensive suite of GMB services tailored to your business,
            ensuring that your online presence resonates with your target audience and drives measurable growth.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "GMB Profile Management and Optimization",
                desc:
                  "Your GMB profile serves as the digital storefront of your business, making its optimization essential for success. We focus on streamlining your GMB profile to ensure it attracts, engages, and converts potential customers.",
                bullets: [
                  "Streamline navigation to provide seamless access to key business details",
                  "Ensure accurate and up-to-date contact information, hours, and hyperlink details",
                  "Manage and respond to customer reviews to build a strong reputation and trust",
                ],
              },
              {
                title: "Local SEO Strategy Creation",
                desc:
                  "A successful GMB presence requires a robust local SEO strategy. Our tailored local SEO efforts ensure that your GMB listing ranks prominently in local search results, maximizing visibility for your business.",
                bullets: [
                  "Incorporate relevant keywords that resonate with your local audience",
                  "Build consistent local citations to enhance your local search rankings",
                  "Optimize for Google Maps to improve geolocation and navigation",
                ],
              },
              {
                title: "Local Targeting Strategies",
                desc:
                  "Reaching your local audience effectively requires a deep understanding of the regional market. Our strategies are tailored to your specific location, ensuring that your GMB listing resonates with local customers and showcases your community involvement.",
                bullets: [
                  "Craft localized content with regional language and preferences",
                  "Highlight local events and partnerships to build community connections",
                  "Leverage hyper-local SEO techniques for better visibility in local searches",
                ],
              },
              {
                title: "Mobile Optimization",
                desc:
                  "With the majority of searches occurring on mobile devices, mobile optimization is crucial for ensuring that your GMB listing delivers a seamless user experience. We optimize your GMB profile for mobile users to encourage immediate action.",
                bullets: [
                  "Enhance page loading speed on mobile to reduce bounce rates",
                  "Tailor content for mobile consumption, making key information easily accessible",
                  "Ensure images and videos are optimized for mobile viewing",
                ],
              },
              {
                title: "Analytics and Reporting",
                desc:
                  "Tracking the performance of your GMB profile is essential for understanding its effectiveness and making data-driven improvements. Our detailed analytics and reporting services provide valuable insights into your GMB strategy’s success.",
                bullets: [
                  "Access detailed analytics on GMB profile performance",
                  "Receive customized reports aligned with your business goals",
                  "Track the impact of GMB efforts on lead generation and conversions",
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
        heading="Make Your Business Stand Out on the World’s Most Popular Search Engine"
        subtext="Elevate your online presence, attract more customers, and stand out prominently on Google."
        buttonLabel="Schedule a 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
