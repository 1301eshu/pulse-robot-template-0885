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
  // FAQs (from Pardot Training page)
  const faqs = [
    {
      q: "What does Pardot training cover in terms of market segmentation?",
      a: "Our Pardot training helps you understand and implement effective market segmentation, allowing you to target specific customer groups and improve the effectiveness of your advertising campaigns.",
    },
    {
      q: "How does the Pardot Admin Bootcamp benefit individuals seeking professional certification?",
      a: "The Admin Bootcamp provides expert-led instruction and hands-on experience, ideal for individuals looking to gain professional certification in marketing automation.",
    },
    {
      q: "What is the benefit of pre-recorded training sessions for businesses?",
      a: "Pre-recorded sessions allow teams to learn at their own pace, covering essential features of Pardot while offering flexibility to revisit tutorials as needed.",
    },
    {
      q: "How can Pardot training improve my use of analytics?",
      a: "Our training emphasizes data-driven decision-making, teaching you how to use Pardot’s analytics tools to track campaign performance, optimize targeted advertising, and improve overall marketing efficiency.",
    },
    {
      q: "How does Pardot training enhance customer engagement?",
      a: "By focusing on engagement marketing strategies, our training teaches you how to create personalized campaigns that resonate with your audience, leading to improved customer experience and satisfaction.",
    },
    {
      q: "What role does resource documentation play in Pardot management?",
      a: "Instance-specific resource documentation provides your team with a detailed guide for managing and updating your Pardot instance, ensuring smooth operations and optimal performance.",
    },
    {
      q: "What is the importance of market research in Pardot training?",
      a: "Market research is crucial for understanding your target audience and fine-tuning your promotion (marketing) strategies. Our training helps you integrate market insights into your Pardot campaigns.",
    },
    {
      q: "How can I use Pardot to optimize targeted advertising?",
      a: "Through targeted advertising tutorials and hands-on learning, we teach you how to create campaigns that reach the right audience, improving engagement and conversion rates.",
    },
    {
      q: "Why is practical, business-oriented Pardot training important?",
      a: "Practical training equips you with skills you can immediately apply to your business, ensuring that you’re not just learning concepts but also implementing strategies that drive measurable results.",
    },
    {
      q: "How can Pardot training improve my customer satisfaction metrics?",
      a: "By focusing on personalized, data-driven campaigns, our training helps you create a better customer experience, leading to higher customer satisfaction and loyalty.",
    },
  ];

  // Recent Blogs — kept exactly as in your old code
  const recentResources: ResourceItem[] = [
    {
      title: "4 CRO Best Practices to Drive Business Growth",
      subtitle: "Turn ad clicks into revenue by tightening UX, testing, and funnel clarity.",
      author: "Rukman Singh",
      date: "Dec 1, 2022",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400",
      slug: "cro-best-practices-drive-growth",
    },
    {
      title: "Mobile-Friendly Website Design: Enhance UX & Boost SEO",
      subtitle: "Mobile-first experiences improve engagement, rankings, and conversions.",
      author: "Rukman Singh",
      date: "Mar 7, 2022",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400",
      slug: "mobile-friendly-website-design",
    },
    {
      title: "Messy SEO – Improving Site Structure As Google’s Title Tag Change Affects CTRs",
      subtitle: "Why hierarchy and internal linking matter more than ever.",
      author: "Sakshi Arora",
      date: "Jan 10, 2022",
      readTime: "25 min read",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&h=400",
      slug: "improving-site-structure-title-tag-change",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="Marketing Cloud Account Engagement (Formerly Pardot) Training Services to Level Up Your Marketing Skills"
        highlight="to Level Up Your Marketing Skills"
        description="Designed for marketing professionals, our training includes tutorials, resources, and insights from Pardot-certified consultants to enhance your skills in engagement marketing, market segmentation, and more."
        // Optional: override countries or handle submit
        // countries={["India", "USA", "UK", "Canada"]}
        // onSubmit={async (data) => { /* send to API */ }}
      />

      <EditableStatSection
        stats={[
          { label: "Pardot Customers", value: "30+" },
          { label: "Years of Combined Pardot Experience", value: "80+" },
          { label: "Pardot-Certified Experts", value: "40+" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Pardot Training Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our training services are tailored to help you optimize your targeted advertising strategies while improving your understanding of customer experience, analytics, and market research.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "On-Site Customized Pardot Training Workshops",
                desc: "These workshops offer interactive media-rich learning experiences, designed to meet your specific business needs. Our hands-on sessions empower your team to use Pardot effectively.",
                strongs: [],
                bullets: [
                  "Specialized workshops delivered both online and in-person",
                  "Tailored content focused on your business goals and marketing strategy",
                  "Simplified Pardot basics to help you track ROI and grow your marketing impact",
                ],
              },
              {
                title: "Pre-Recorded Sessions",
                desc: "Our pre-recorded tutorials guide your team through the Pardot platform at their own pace. These sessions are designed to enhance your team’s technology skills and deepen their understanding of the concepts driving marketing automation.",
                strongs: [],
                bullets: [
                  "Comprehensive step-by-step guidance",
                  "Real-world scenarios for hands-on learning",
                  "Learn best practices in Pardot Marketing Automation",
                ],
              },
              {
                title: "Pardot Expertise on Your Team",
                desc: "Extend the capabilities of your in-house team with expert consultants who will help you maximize Pardot’s potential. We ensure your team is equipped with the right knowledge to improve customer engagement and execute effective campaigns.",
                strongs: [],
                bullets: [
                  "An extension of your in-house team for business marketing",
                  "Continuous support for new automation solutions and advertising campaigns",
                  "Creative solutions to help manage and structure your Pardot instance",
                ],
              },
              {
                title: "Instance-Specific Resource Documentation",
                desc: "Ensure your Pardot instance is optimized for your specific business needs with our detailed documentation. We provide customized guides on every Pardot feature, allowing for easier maintenance and updates.",
                strongs: [],
                bullets: [
                  "Comprehensive documentation on custom fields and templates",
                  "In-depth guidance from Pardot consultants and professionals",
                  "Creative structuring and management solutions for your Pardot instance",
                ],
              },
              {
                title: "Pragmatic and Technical Pardot Training",
                desc: "Our pragmatic training plan provides real-world, business-focused instructions on how to use Pardot’s technical features to drive growth. Learn to make data-driven decisions that enhance customer satisfaction and increase ROI.",
                strongs: [],
                bullets: [
                  "Focus on features that are crucial for your business operations",
                  "Hands-on knowledge to solve real-world marketing challenges",
                  "Skills to drive lead generation and customer engagement",
                ],
              },
              {
                title: "Pardot Training for Admin Bootcamp",
                desc: "Designed for individuals looking to solidify their careers in marketing automation, this bootcamp offers expert-led instructions, networking opportunities, and immersive learning experiences to build a solid foundation in Pardot.",
                strongs: [],
                bullets: [
                  "Intensive learning led by experienced Pardot administrators",
                  "Available in-person or virtually for flexible learning preferences",
                  "Networking with other professionals and Pardot Admin champions",
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
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="Looking for Proven Pardot Training and Certification?"
        subtext="Focus your energy on growth while we train your team in Pardot automation."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/company/contact-services/"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
