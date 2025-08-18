import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from '@/components/ui/component_12';
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";

const L3Template = () => {
  // FAQs (from Tableau Services page)
  const faqs = [
    {
      q: "What is Tableau, and Why Should I Consider Your Tableau Services?",
      a: "Tableau is a powerful data visualization and analytics tool that allows you to transform complex data into insightful visualizations, helping you make data-driven decisions. Our Tableau services offer expertise in implementation, data integration, visualization, and more, ensuring you get the most value from this tool.",
    },
    {
      q: "How Can Tableau Benefit My Business?",
      a: "Tableau can benefit your business by providing clear insights from your data, enabling you to identify trends, patterns, and opportunities. It empowers better decision-making, enhances data-driven strategies, and ultimately drives business growth.",
    },
    {
      q: "Can You Help Us With Tableau Implementation from Scratch?",
      a: "Absolutely. Our Tableau experts can assist you in setting up Tableau from the ground up, ensuring a smooth deployment aligned with your specific business needs and goals.",
    },
    {
      q: "What if We're Already Using Tableau But Need Help Optimizing Our Current Setup?",
      a: "We specialize in Tableau optimization. Our team can assess your current environment, identify performance bottlenecks, and implement necessary changes to ensure your Tableau operates efficiently.",
    },
    {
      q: "Can You Integrate Tableau With Our Existing Data Sources and Systems?",
      a: "Certainly. We have experience in integrating Tableau with a wide range of data sources, including databases, spreadsheets, cloud-based platforms, and more, ensuring a holistic view of your data.",
    },
    {
      q: "How Do You Ensure Data Security in Tableau?",
      a: "We implement robust data security measures and compliance standards within your Tableau environment to safeguard your data, ensuring it remains confidential and secure.",
    },
    {
      q: "What Types of Businesses Can Benefit From Your Tableau Services?",
      a: "Our Tableau services are versatile and can benefit businesses of all sizes and across various industries. Whether you’re a small startup or a large enterprise, if you have data, Tableau can help you gain insights and make informed decisions.",
    },
    {
      q: "Do You Offer Ongoing Support for Tableau Users?",
      a: "Yes, we provide ongoing support to address any questions or issues that may arise during your Tableau journey. Our dedicated support team is there to assist you when you need it.",
    },
    {
      q: "What’s Next If I Choose Growth Natives to Assist Me With Tableau Analytics Services?",
      a: "You can send us an email to info@growthnatives.com and our team will get back to you promptly. We’ll schedule an initial consultation and help you unlock the full potential of Tableau, providing tailored solutions, advanced insights, and seamless integration with your tech stack to supercharge your data-driven decision-making.",
    },
  ];

  // (Keeping Recent Blogs from old code as-is; not mapped in the provided guide)
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
        heading="Tableau Services:"
        highlight="Integrate Tableau Dashboard into your existing workflows to enhance efficiency and accelerate decision-making."
        description="Whether you’re building a data analytics platform from scratch, seeking guidance for an existing project, or strategizing your analytics journey, our Tableau experts are here to expedite the process and add value to your efforts. As part of our Tableau Services, we help you build dynamic dashboards that provide a comprehensive view of your business metrics."
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Experience", value: "20+" },
          { label: "Dashboard Delivered", value: "200+" },
          { label: "BI Experts", value: "50+" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Tableau Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our comprehensive service and expertise can help you leverage Tableau to make smarter decisions based on data-driven information, drive innovation through streamlined Tableau installation, and achieve your goals.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Implementing Tableau",
                desc:
                  "Implementing and running Tableau effectively is crucial to harnessing its full potential for your organization. We guide you through every step of the implementation and learning process, ensuring a seamless and successful launch of Tableau in your business environment. Our Tableau training programs ensure that your team is proficient in using the software to its fullest potential.",
                bullets: [
                  "Set up the necessary infrastructure to host Tableau.",
                  "Integrate Tableau with your existing data sources.",
                  "Customize the interface, establish user roles, and configure security settings.",
                  "Deploy Tableau across your organization to ensure users can access the tools and resources they need.",
                ],
              },
              {
                title: "Creating Custom Dashboards and Reports",
                desc:
                  "Tableau’s custom dashboards, software solutions, and reports are crucial in transforming data into actionable insights. With our expertise, you can unlock the full potential of custom dashboards and reports in Tableau, enabling your organization to monitor performance and gain a competitive edge. Our experienced Tableau consultants help you customize and deploy Tableau solutions tailored to your specific requirements.",
                bullets: [
                  "Use Tableau's rich set of visualization options to represent your data effectively.",
                  "Ensure that dashboards are intuitive and user-friendly.",
                  "Implement real-time reporting to provide up-to-the-minute insights into your organization's performance.",
                  "Design dashboards that are responsive and accessible on a variety of devices.",
                ],
              },
              {
                title: "Utilizing Tableau for Data Analysis",
                desc:
                  "By embracing Tableau for data analysis, we empower your business to make transformative, data-backed decisions, enhance user experience, and fine-tune your strategies for better outcomes. Tableau enhances your team’s knowledge, making data-driven decision-making a core part of your business strategy. Leverage Tableau’s software as a service (SaaS) model to access powerful analytics capabilities anywhere, anytime.",
                bullets: [
                  "Decipher complex data reports, leveraging cutting-edge data visualization technology, ensuring you grasp the significance of various metrics.",
                  "Create customized reports that precisely align with your unique business objectives.",
                  "Set up and analyze goal tracking within Tableau, enabling you to measure user interactions.",
                  "Conduct A/B tests to optimize various elements on your website.",
                ],
              },
              {
                title: "Optimizing Tableau for Enterprise-Level Businesses",
                desc:
                  "Enterprise-level businesses, with their unique challenges and demands in data analytics and Tableau implementation, can feel confident in our specialized services. These services are designed to efficiently and effectively help enterprises harness the full potential of Tableau. Furthermore, Tableau’s detailed software documentation is at your disposal, guiding you through its features.",
                bullets: [
                  "Fine-tune Tableau configurations and conduct performance optimization.",
                  "Leverage Tableau Ask to ask questions in natural language and receive instant, conversational insights.",
                  "Implement high-availability solutions and disaster recovery plans to minimize downtime.",
                  "Enable Tableau to connect to a wide range of data sources seamlessly.",
                  "Deploy a Tableau Server to manage and share your visualizations across your organization securely.",
                ],
              },
      {
                title: "Optimize Your Data Insights with Cloud-Driven Tableau Analytics",
                desc:
                  "The power of Tableau, combined with the scalability and flexibility of cloud computing, can revolutionize your data analytics capabilities. Our ‘Cloud-Driven Tableau Analytics’ service is designed to help organizations harness Tableau’s full potential while leveraging cloud computing’s advantages. Tableau’s high availability ensures that your data is always accessible for real-time analysis and decision-making.",
                bullets: [
                  "Integrate Tableau with leading cloud platforms.",
                  "Scale your Tableau resources up or down based on demand.",
                  "Set up data lakes and data warehouses in the cloud.",
                  "Implement best compliance practices within your cloud-hosted Tableau environment.",
                
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
      <FaqSection title="Frequently Asked Questions - Tableau Essentials" faqs={faqs} />

      {/* Recent Blogs - kept from old code */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to best practices and resources from our CMS experts."
          subTabs={[]}
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="Supercharge Your Business Growth and Make Smart Decisions Using Tableau Analytics"
        subtext="Whether you're optimizing processes, identifying market trends, or enhancing customer experiences, our service ensures that data works as your strategic ally."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

