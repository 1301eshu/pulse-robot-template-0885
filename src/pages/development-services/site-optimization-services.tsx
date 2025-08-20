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
  // FAQs (from Site Optimization Services page)
  const faqs = [
    {
      q: "How does site optimization contribute to the success of an advertising campaign?",
      a: "An optimized site is fast, responsive, and user-friendly—so more ad clicks turn into engaged visits and conversions.",
    },
    {
      q: "What role does search engine optimization (SEO) play in site optimization?",
      a: "SEO is core to site optimization: technical and content fixes improve visibility, organic traffic, and the likelihood of conversion.",
    },
    {
      q: "How can audience segmentation improve the effectiveness of site optimization efforts?",
      a: "Tailoring UX and content to audience segments based on behavior and preferences boosts engagement and conversion rates.",
    },
    {
      q: "How important is accuracy and precision in data analysis for site optimization?",
      a: "Accurate analytics reveal friction points and opportunities so you can prioritize changes that meaningfully lift UX and conversions.",
    },
    {
      q: "How does agile software development support continuous site optimization?",
      a: "Agile enables rapid iteration based on user feedback and data, so you can continuously refine the experience.",
    },
    {
      q: "How can site optimization enhance brand loyalty?",
      a: "A consistently fast, easy experience encourages repeat visits and long-term loyalty.",
    },
    {
      q: "What risks are associated with site optimization, and how can they be managed?",
      a: "Use phased rollouts, thorough testing, and monitoring to reduce risks like temporary UX disruption or SEO impact.",
    },
    {
      q: "How does integrating SEM and site optimization drive conversions?",
      a: "Optimized landing pages + strong SEM ensure ad traffic has a seamless path to conversion.",
    },
  ];

  // Recent Blogs (from the page’s Top Blogs)
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
        heading="Site Optimization Services"
        highlight="to Enhance User Experience & Drive Conversions"
        description="Our site optimization services are designed to enhance user experience and boost your website’s performance, leading to higher conversion rates and improved business outcomes. By focusing on key performance metrics like Largest Contentful Paint (LCP), database efficiency, and streamlined code, we help you achieve a seamless and fast-loading website that drives growth and engagement."
        // Optional: override countries or handle submit
        // countries={["India", "USA", "UK", "Canada"]}
        // onSubmit={async (data) => { /* send to API */ }}
      />

      <EditableStatSection
        stats={[
          { label: "Increase in Conversion Rates", value: "70%" },
          { label: "Bounce Rate Reduced", value: "89%" },
          { label: "Improvement in Page Load Speed", value: "90%" },
        ]}
        paddingTop="pt-20"
        paddingBottom="pb-20"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Site Optimization Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We provide a comprehensive range of site optimization services aimed at maximizing your website’s potential. By leveraging cutting-edge technology and data-driven strategies, we ensure your site is optimized for both user experience and search engine performance.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Code Optimization",
                desc: "Optimizing code is essential for building efficient and scalable web applications. Our code optimization services ensure that your website runs smoothly, with faster load times and reduced resource usage, contributing to an overall improved functionality.",
                strongs: [],
                bullets: [
                  "Minimize unnecessary operations",
                  "Optimize memory usage",
                  "Reduce I/O operations",
                  "Optimize for parallelism",
                  "Optimize for modern hardware",
                ],
              },
              {
                title: "Plugin Optimization",
                desc: "Plugins can significantly impact your website’s performance. Our plugin optimization services focus on ensuring that plugins are running efficiently, minimizing load times, and enhancing overall site functionality without compromising on features.",
                strongs: [],
                bullets: [
                  "Minimize plugin usage",
                  "Optimize plugin code",
                  "Defer plugin loading",
                  "Reduce plugin dependencies",
                  "Optimize plugin assets",
                ],
              },
              {
                title: "LCP Optimization",
                desc: "Largest Contentful Paint (LCP) is a critical metric for assessing how quickly the main content of a webpage is loaded. A fast LCP not only enhances user experience but also improves your search engine rankings. Our strategies focus on optimizing this metric to ensure your site performs at its best.",
                strongs: [],
                bullets: [
                  "Optimize images",
                  "Optimize fonts",
                  "Eliminate render-blocking resources",
                  "Improve server response time",
                  "Prioritize above-the-fold content",
                ],
              },
              {
                title: "Database Optimization",
                desc: "Efficient database management is key to ensuring fast data retrieval and smooth website operations, especially under high traffic volumes. Our database optimization services focus on enhancing performance, reliability, and scalability, ensuring your site can handle any level of demand.",
                strongs: [],
                bullets: [
                  "Query optimization",
                  "Best-practice database design",
                  "Hardware & infrastructure optimization",
                  "Ongoing monitoring and tuning",
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
          body="Get quick access to our best practices and resources from experienced."
          subTabs={[]}
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="Boost Performance, Engagement, & Conversions With the A-Team By Your Side"
        subtext="We leverage cutting-edge strategies and proven techniques to boost performance, ensuring your website works as hard as you do."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/contact/"
      />

      <Footer />
    </div>
  );
};

export default L3Template;
