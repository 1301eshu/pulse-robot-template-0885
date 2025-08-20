import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from "@/components/ui/component_12";
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";

const L3Template = () => {
  // FAQs (from Marketo Training page)
  const faqs = [
    {
      q: "What is the Duration of Your Marketo Training Program?",
      a: "The duration of our Marketo training program typically varies based on the specific course you choose. We offer both short-term intensive courses and longer, more comprehensive programs. You can find detailed information on the duration of each course on our website or course catalog.",
    },
    {
      q: "Is Your Marketo Training Suitable for Beginners With No Prior Marketing Automation Experience?",
      a: "Yes, we cater to individuals at all levels of experience. We have introductory courses designed for beginners who are new to marketing automation, as well as advanced courses for those with prior experience. Our training is structured to accommodate a wide range of skill levels.",
    },
    {
      q: "What are the Prerequisites for Enrolling in Your Marketo Training Program?",
      a: "The prerequisites vary depending on the specific course. Some of our introductory courses have no prerequisites and are suitable for beginners. However, our advanced courses may require prior marketing knowledge or experience. Please check the course description for detailed prerequisites.",
    },
    {
      q: "Can I Access the Training Materials and Resources After Completing the Course?",
      a: "Yes, once you have completed the course, you will have access to the training materials and resources for a specified period. This allows you to review the content and refer back to it as needed to reinforce your learning.",
    },
    {
      q: "What Support is Available if I Have Questions or Encounter Challenges During the Training?",
      a: "We provide various forms of support, including access to instructors or trainers during live sessions for questions and clarification. Additionally, you can interact with and get 1:1 assistance from our experts.",
    },
    {
      q: "What’s Next If I Choose Growth Natives to Assist Me With Marketo Training Services?",
      a: "If you decide to go with Growth Natives for your Marketo training needs, simply send us an email at info@growthnatives.com. Our team will respond promptly and schedule an initial consultation. During this consultation, we’ll dive into your specific training objectives and determine the best approach for your needs. From there, we’ll craft a customized training plan and kickstart the learning process.",
    },
  ];

  // Recent Blogs — kept exactly as in your base (say the word if you want me to swap in the page’s Top Blogs)
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

      {/* Contact Section */}
      <ContactWithBg
        heading="Marketo Training Services to For You to Understand Marketo Inside-Out"
        highlight=""
        description="Gain advanced Marketo knowledge from our Marketo-certified experts with professional certification and maximize the value of your instance. The goal is to equip you with the skills and knowledge needed to excel in Marketo."
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
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Marketo Training Services to Elevate Your Marketing Skills
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Take the first step in improving your marketing skills and invest in our Marketo certification training programs today! By learning the nitty-gritty of Marketo, you’ll gain a better understanding of how to leverage its powerful features, create more impactful marketing campaigns, utilize interactive media, and improve your overall efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Training Modules Based on Up-to-Date Versions",
                desc: "We offer top-notch Marketo training services and up-to-date training modules that help you stay ahead of the curve and make the most of your Marketo marketing automation platform.",
                bullets: [
                  "Stay apprised of the latest innovations from the house of Marketo",
                  "Equip your team with the skills to adapt to changing marketing dynamics",
                  "Design and execute campaigns that align perfectly with contemporary marketing practices",
                  "Fosters a collaborative environment where you can exchange ideas",
                ],
              },
              {
                title: "Campaign Management & System Integration Learning",
                desc: "Our Marketo training services equip you with the knowledge and skills to effectively manage your campaigns and integrate various systems, which leads to increased efficiency, better campaign results, and improved customer service.",
                bullets: [
                  "Understand the Campaign Management interface",
                  "Implement best practices for segmentation and targeting",
                  "Integrate Marketo with platforms like Salesforce and analytics tools",
                  "Customize Marketo to fit your business needs",
                ],
              },
              {
                title: "Pragmatic Approach to Marketo Training",
                desc: "Get hands-on, practical training to master the Marketo marketing automation platform quickly and effectively. Our experienced trainers focus on real-world scenarios to ensure that you can apply new skills to your business with confidence.",
                bullets: [
                  "Set yourself up to achieve quick success with Marketo implementation",
                  "Build and optimize automated workflows, including drip campaigns",
                  "Get a pragmatic approach to troubleshooting and optimizing your automation process",
                  "Utilize analytics and reporting to measure your automation effectiveness",
                ],
              },
              {
                title: "Onsite & Offsite Marketo Training",
                desc: "Whether you’re new to Marketo or looking to upskill your team, we offer customized training that can be delivered onsite or online to suit your needs. Our experienced trainers will help create a tailored program that covers everything—from basic functionality to advanced features.",
                bullets: [
                  "Get Marketo-certified experts for hands-on training",
                  "Get online training courses or get trained at our training facility",
                  "Get tailored services that meet your specific business needs",
                  "Leverage real-world examples and case studies for practical experience",
                ],
              },
              {
                title: "Marketo Instance–Specific Resource Documentation",
                desc: "Optimize your use of technology by creating tailored resources and documentation for your Marketo marketing automation instance. With instance-specific resources, we can help your team increase productivity, improve efficiency, and reduce errors.",
                bullets: [
                  "Get access to customized documentation and resources",
                  "Learn from step-by-step guides and tutorials for various Marketo features",
                  "Document all the best practices and recommendations",
                  "Access all troubleshooting guides for common issues and problems",
                ],
              },
              {
                title: "Through-and-Through Marketo Support",
                desc: "Our comprehensive Marketo training services cover all aspects of Marketo, including automation, lead management, and email marketing. We develop a custom plan that helps see a significant improvement in your Marketo performance and results.",
                bullets: [
                  "Get 24/7 access to our team of Marketo experts for efficient support",
                  "Get 100% assistance with troubleshooting and resolving technical issues",
                  "Set up and configure Marketo to fit your specific business needs",
                  "Integrate Marketo with other platforms like web analytics tools",
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

      <Testimonials
        title="Our Customers"
        description="We’ve trained hundreds of Marketo users worldwide, helping teams streamline operations and achieve marketing excellence."
      />

      <AwardsSection />

      <FaqSection title="FAQs" faqs={faqs} />

      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Learn from our collection of resources, best practices, and expert tips on marketing automation."
          subTabs={[]}
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="Ready to Become a Marketo Ninja?"
        subtext="Focus your energy on growth while we train your team in Marketo automation."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/contact/"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
