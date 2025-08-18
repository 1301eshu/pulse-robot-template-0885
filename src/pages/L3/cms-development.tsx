import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from '@/components/ui/component_12';
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";

const L3Template = () => {
  // FAQs (from CMS Development Services page)
  const faqs = [
    {
      q: "How does a web content management system (CMS) enhance user engagement?",
      a: "A CMS enables personalized content, quick updates, and interactive features like comments and social sharing. With responsive design, SEO controls, scheduling, analytics, and accessibility features, it streamlines navigation and keeps experiences engaging across devices.",
    },
    {
      q: "What is a headless CMS, and how does it improve operational efficiency?",
      a: "A headless CMS separates content from presentation so the same content can be delivered to websites, apps, and other channels. This reduces duplicate effort, simplifies distribution, and speeds up publishing across platforms.",
    },
    {
      q: "How does CMS integration with social media platforms enhance user engagement?",
      a: "Native integrations make it seamless to publish and share content across social channels, expanding reach, attracting traffic back to your site, and boosting engagement with consistent, connected experiences.",
    },
    {
      q: "Why is accessibility important in CMS development?",
      a: "Accessibility in CMS development ensures that content is accessible to all users, including those with disabilities. Features like alt text for images, keyboard navigation, and compatibility with screen readers help create an inclusive experience, improving overall user engagement and satisfaction.",
    },
    {
      q: "How can a CMS support conversion marketing efforts?",
      a: "A CMS can support conversion marketing by enabling targeted content creation, personalized user journeys, and A/B testing. By analyzing user behavior and optimizing content accordingly, businesses can improve conversion rates and achieve better marketing outcomes.",
    },
    {
      q: "What are the advantages of using open-source software for CMS development?",
      a: "Open-source CMS platforms, like WordPress or Joomla, offer flexibility, customization, and cost-effectiveness. They provide access to various plugins and extensions, allowing businesses to tailor their CMS to specific needs and improve user engagement and operational efficiency.",
    },
    {
      q: "How does a document management system (DMS) integrate with a CMS to enhance operational efficiency?",
      a: "Integrating a DMS with a CMS streamlines the management of digital assets, such as documents, images, and videos. This integration ensures all content is easily accessible, organized, and retrievable, reducing administrative overhead and boosting overall operational efficiency.",
    },
    {
      q: "How can a CMS improve the management and distribution of digital assets?",
      a: "A CMS can centralize the management of digital assets, allowing for easy categorization, tagging, and retrieval. Efficient digital asset management within a CMS ensures that content creators can quickly find and use the right assets, streamlining the publication process and improving content consistency across various channels.",
    },
    
  ];

  // Recent Blogs (kept same structure; aligned to CMS topics)
  const recentResources: ResourceItem[] = [
    {
      title: "Choosing the Right CMS: WordPress, Drupal, or Shopify?",
      subtitle: "How to match your business goals with the right platform and ecosystem.",
      author: "Growth Natives Editorial",
      date: "May 8, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=400",
      slug: "choose-right-cms",
    },
    {
      title: "Headless CMS 101: Faster Content at Scale",
      subtitle: "Decouple your stack to deliver content to every channel, from web to mobile.",
      author: "Growth Natives Editorial",
      date: "Apr 18, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400",
      slug: "headless-cms-basics",
    },
    {
      title: "Migrating to a New CMS Without Losing SEO",
      subtitle: "A step-by-step playbook to preserve rankings and performance.",
      author: "Growth Natives Editorial",
      date: "Mar 27, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&h=400",
      slug: "cms-migration-seo",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Contact Section (reusable component) */}
      <ContactWithBg
        heading="CMS Development Services"
        highlight="to Enhance User Engagement & Boost Operational Efficiency"
        description="Our CMS development services leverage leading platforms to create scalable, user-friendly, and SEO-optimized solutions tailored to your business’s unique needs. Whether you require a robust eCommerce platform, a versatile website, or a comprehensive web application, we have the expertise to deliver top-notch solutions that drive engagement and operational efficiency."
        // countries={["India", "USA", "UK", "Canada"]}
      />

      <EditableStatSection
        stats={[
          { label: "Years of Industry Expertise", value: "25+" },
          { label: "Certified Developers", value: "80+" },
          { label: "Successful CMS Implementations", value: "90%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key CMS Development Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
           Our CMS development services are designed to provide custom solutions and seamless integrations, empowering your business with scalable, user-friendly, and SEO-optimized implementations. We cater to a variety of platforms, ensuring that your digital presence is optimized for success.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Magento Development Services",
                desc:
                  "Magento is a powerful eCommerce platform known for its scalability and versatility. We specialize in delivering comprehensive Magento solutions, from custom store development to seamless platform migration and third-party integrations. By harnessing Magento’s full potential, we help businesses build robust eCommerce systems that meet their specific needs.",
                strongs: [],
                bullets: [
                  "Magento implementation & integration",
                  "Theme customization",
                  "Extension development",
                  "Ongoing maintenance & support",
                ],
              },
              {
                title: "Drupal Development Services",
                desc:
                  "Drupal’s modular architecture, extensive ecosystem, and strong security focus make it ideal for scalable, feature-rich digital solutions. We offer comprehensive Drupal services to help businesses leverage its power as a robust and flexible CMS.",
                strongs: [],
                bullets: [
                  "Websites & web applications",
                  "Drupal Commerce & eCommerce",
                  "Theme & module development",
                  "Maintenance & support",
                ],
              },
              {
                title: "WordPress Development Services",
                desc:
                  "WordPress powers millions of websites worldwide, known for its versatility and extensive plugin ecosystem. Our WordPress development services focus on creating tailored digital solutions that drive user engagement, conversions, and business growth.",
                strongs: [],
                bullets: [
                  "Websites & web applications",
                  "Custom themes & plugins",
                  "Multisite & multilingual setups",
                  "Maintenance & support",
                ],
              },
              {
                title: "Shopify Development Services",
                desc:
                  "Shopify is celebrated for its robust and user-friendly eCommerce capabilities. We offer solutions that cover custom store development, theme customization, and seamless third-party integrations, ensuring businesses maximize their Shopify experience.",
                strongs: [],
                bullets: [
                  "Store development",
                  "Theme customization",
                  "App development",
                  "Ongoing maintenance & support",
                ],
              },
      {
                title: "Webflow Development Services",
                desc:
                  "Webflow is a no-code platform that empowers designers and developers to create stunning, responsive websites effortlessly. We utilize Webflow’s intuitive visual editor, robust CMS, and advanced features to deliver tailored web solutions that captivate audiences and drive business growth.",
                strongs: [],
                bullets: [
                  "Webflow Website Development",
                  "Webflow CMS Integration",
                  "Webflow eCommerce Solutions",
                  "Webflow Interaction and Animation",
                  "Webflow Hosting and Deployment",
                ],
              },
       {
                title: " Squarespace Development Services",
                desc:
                  "Squarespace is a popular website builder and CMS known for its ability to create visually appealing, responsive websites with ease. We leverage its intuitive drag-and-drop interface, robust content management, and extensive customization options to deliver tailored web solutions that captivate and drive growth.",
                strongs: [],
                bullets: [
                  "Squarespace Website Design and Development",
                  "Squarespace Ecommerce Solutions",
                  "Squarespace Integration with Third-Party Tools",
                  "Squarespace Optimization and Performance Tuning",
               
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

      {/* Recent Blogs - Center heading only for this page */}
      <div className="[&>h2]:text-center">
        <RecentResourcesSection
          heading="Top Blogs"
          body="Get quick access to best practices and resources from our CMS experts."
          subTabs={[]}
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="Drive Growth With Scalable CMS Solutions Designed Just for You"
        subtext="Fuel your business growth with our scalable CMS solutions. Built for flexibility and expansion, our expert team customizes platforms that empower you to effectively manage and expand your digital footprint."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
