import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from '@/components/ui/component_12';
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";
import ContactWithBg from "@/components/L3herobanner";
import EditableStatSection from "@/components/Statistics";

const L3Template = () => {
  // FAQs (from Technical SEO page)
  const faqs = [
    {
      q: "Why is Technical SEO important for organic search results?",
      a: "Technical SEO ensures that search engines like Google can easily crawl and index your website, improving its chances of ranking higher on SERPs and increasing organic traffic.",
    },
    {
      q: "How does a website audit improve performance?",
      a: "A website audit identifies technical issues, such as broken links and slow page speeds, that may hinder your site’s performance. Addressing these issues improves both user experience and search engine rankings.",
    },
    {
      q: "What role does schema markup play in SEO?",
      a: "Schema markup helps search engines understand your content better, enhancing your site’s visibility in Google Search through rich snippets and improved content understanding in the Semantic Web.",
    },
    {
      q: "How does site speed impact conversion rate optimization?",
      a: "Faster site speed improves user experience, reducing bounce rates and increasing the likelihood of conversions, ultimately leading to a higher return on marketing investment.",
    },
    {
      q: "Why is URL structure important for SEO?",
      a: "An optimized URL structure improves search engine indexing by making it easier for search engines to understand and rank your pages. It also enhances the user experience by providing clear and descriptive URLs.",
    },
    {
      q: "How does Google Search Console help with Technical SEO?",
      a: "Google Search Console provides insights into how Google indexes your site, helping identify issues like crawl errors, index coverage, and search performance, which are essential for effective Technical SEO.",
    },
    {
      q: "What is the importance of internal linking in SEO?",
      a: "Internal linking helps distribute link equity across your website, making it easier for search engines to crawl and understand the relationships between your pages, improving overall search engine optimization.",
    },
    {
      q: "How does site structure impact web indexing?",
      a: "A well-organized site structure ensures that search engines can efficiently crawl and index all pages on your website, improving visibility and relevance in search engine results.",
    },
    {
      q: "Why is image optimization crucial for SEO?",
      a: "Image optimization reduces file sizes, improving page load times and enhancing the user experience. This directly impacts your site’s SEO performance by improving rankings and engagement.",
    },
    {
      q: "How does technical implementation contribute to SEO success?",
      a: "Implementing best practices such as schema markup, XML sitemaps, and canonical tags ensures that search engines can effectively crawl, index, and rank your content, leading to better performance on Google Search.",
    },
  ];

  // Recent Blogs (kept from old code)
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
        heading="Technical SEO Services"
        highlight="to Create a Strong Digital Foundation"
        description="Our team of technical SEO experts specializes in identifying and addressing technical issues that impact your website’s visibility, ensuring your site is optimized for better search engine results page (SERP) rankings."
      />

    <EditableStatSection
      stats={[
        { label: "Years of Industry Expertise", value: "100+" },
        { label: "SEO Audits Performed", value: "1000+" },
        { label: "Increase in Organic Traffic", value: "45%" },
      ]}
      paddingTop="pt-20"
      paddingBottom="pb-20"
    />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Technical SEO Services We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our range of services addresses every technical aspect needed to improve your online presence and enhance your site's performance on Google and other search engines.
          </p>

          {/* Service Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
            {[
              {
                title: "Website Audit and Optimization",
                desc:
                  "A detailed website audit is the foundation of any successful Technical SEO strategy. We conduct a thorough analysis of your website’s infrastructure to ensure it is fully optimized for web indexing and search engine optimization.",
                bullets: [
                  "Analyze your website’s technical infrastructure for optimal performance",
                  "Address technical issues like broken links, duplicate content, and crawl errors",
                  "Implement measures such as image optimization and CSS/JavaScript minification to improve site performance",
                ],
              },
              {
                title: "Technical Implementation",
                desc:
                  "Our experts utilize industry best practices to enhance your website’s crawlability and indexability, ensuring that search engines like Google can easily understand and rank your content.",
                bullets: [
                  "Implement schema markup for enhanced content understanding in the Semantic Web",
                  "Optimize XML sitemaps to ensure comprehensive search engine indexing",
                  "Use canonical tags to resolve duplicate content issues and consolidate link equity",
                ],
              },
              {
                title: "Site Speed Optimization",
                desc:
                  "Website speed plays a critical role in both user experience and conversion rate optimization. We focus on improving loading times to provide a seamless experience that boosts both engagement and rankings.",
                bullets: [
                  "Optimize images for faster loading times without compromising quality",
                  "Minimize CSS and JavaScript files to reduce load times",
                  "Configure browser caching to store files locally and improve server response times",
                ],
              },
              {
                title: "Website Structure Optimization",
                desc:
                  "A well-structured website is essential for both user navigation and search engine crawling. We optimize your website’s structure to ensure it’s easy to navigate and accessible to both users and search engines.",
                bullets: [
                  "Improve website hierarchy for logical organization and navigation",
                  "Optimize URL structures to be user- and search engine-friendly",
                  "Develop an internal linking strategy to improve content relevance and authority",
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
          body="Get quick access to our best practices and resources from experienced."
          subTabs={[]}
          resources={recentResources}
        />
      </div>

      <ContactCta
        heading="Drive Organic Growth with Proven Technical SEO Strategies"
        subtext="With meticulous attention to detail and a focus on industry best practices, we ensure that every aspect of your website is finely tuned for search engine success."
        buttonLabel="Schedule 1:1 Call"
        buttonLink="/get-started"
      />

      <Footer />
    </div>
  );
};

export default L3Template;

