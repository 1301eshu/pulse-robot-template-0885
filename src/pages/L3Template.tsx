import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import EditableStatSection from "@/components/Statistics";
import Testimonials from "@/components/ui/component_4";
import AwardsSection from '@/components/ui/component_12';
import FaqSection from "@/components/ui/component_5";
import RecentResourcesSection, { ResourceItem } from "@/components/ui/component_10";
import ContactCta from "@/components/ui/component_6";

const L3Template = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', country: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // FAQ List
  const faqs = [
        {
      q: "How do HubSpot consulting services benefit my business?",
      a: "Our HubSpot consulting services help businesses optimize their HubSpot ecosystem by aligning strategies with business goals, increasing conversion rates, and improving the end-user experience.",
    },
    {
      q: " What does the HubSpot migration process include?",
      a: " We provide a detailed migration plan that covers everything from data cleanup to asset migration, ensuring compliance with privacy laws like GDPR and CCPA.",
    },
    {
      q: "How does hyper-personalization improve conversion rates?",
      a: "Hyper-personalization tailors content to individual users based on their behaviors and preferences, leading to higher engagement and conversion rates.",
    },
    {
      q: "What are the benefits of Account-Based Marketing in HubSpot?",
      a: "ABM strategies help you target high-value accounts with personalized campaigns, increasing the likelihood of conversions and driving higher ROI. ",
    },
     {
      q: "How does HubSpot help with campaign management?",
      a: "Our team helps you create, manage, and optimize HubSpot campaigns, ensuring your efforts are efficient and yield measurable results.",
    },
     {
      q: "What kind of insights can I gain from a HubSpot audit?",
      a: "A HubSpot audit provides insights into the health of your marketing automation, identifying areas for improvement and optimizing campaign performance.",
    },
     {
      q: "How does lead scoring work in HubSpot?",
      a: "Lead scoring helps you prioritize leads by assigning values based on behaviors and demographics, allowing you to focus on high-quality prospects. ",
    },
     {
      q: "What is the role of persona-driven content in HubSpot?",
      a: "Persona-driven content is tailored to specific user profiles, enhancing engagement by providing relevant and personalized experiences. ",
    },
      {
      q: "How does ABM in HubSpot integrate with existing sales processes?",
      a: "We streamline your sales and marketing alignment by integrating ABM strategies with your existing processes, ensuring smooth collaboration and better lead management.",
    },
      {
      q: "Why is data governance important in HubSpot?",
      a: "Data governance ensures that your customer data is clean, compliant, and usable, which is crucial for executing accurate and effective marketing campaigns.",
    },
  ];

   const recentResources: ResourceItem[] = [
    {
      title: "Agentic AI: The Silent Force Reshaping Marketing Ops",
      subtitle: "Wait, so this thing just... does it? Like, by itself? Yes. And no, it's not magic. It's called Agentic AI and it's the next evolution of marketing automation you...",
      author: "Sneha Kumari",
      date: "July 7, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "hubspot-chatgpt-connector"
    },
    {
      title: "The AI Shortlist: Top Use Cases for Marketing Ops That You Must Know",
      subtitle: "Back in the day, Marketing Ops used to mean fighting timelines and making friends with a dozen dashboards...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "google-ads-roi-increase"
    },
    {
      title: "Marketo & AI: Best Practices for Smarter Segmentation and Nurturing",
      subtitle: "You've got Marketo. You've got data. You've got 47 tabs open. Now what?...",
      author: "Mehakpreet Kaur",
      date: "July 4, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400",
      slug: "marketo-ai-segmentation"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Contact Section with BG Image */}
      <section
        className="py-28 text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="section-wrapper grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left - Text */}
          <div className="space-y-5">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Hubspot Consulting Services{" "}
               <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Maximize Your Hubspot Ecosystem
              </span>
              
            </h2>
            <p className="text-lg text-gray-200 max-w-md">
             Our HubSpot consulting services are designed to help you get the most out of your HubSpot platform by offering personalized solutions that align with your company's marketing, sales, and service objectives. We work closely with you to create customized strategies that boost conversion marketing, enhance end-user experiences, and drive measurable results.
            </p>
          </div>

          {/* Right - Form */}
          <div className="bg-white text-black p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-md">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
              <input
                type="text"
                name="name"
                placeholder="First Name*"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Last Name*"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="text"
                name="company"
                placeholder="Phone Number*"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="text"
                name="phone"
                placeholder="Business Email*"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="">Please choose country*</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <textarea
                name="message"
                rows={4}
                placeholder="Message*"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              ></textarea>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" required />
                <label>I'm not a robot</label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                {isSubmitting ? 'Sending...' : 'Contact Us'}
              </button>
            </form>
          </div>
        </div>
      </section>

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
      Key HubSpot Consulting Services We Offer
    </h2>
    <p className="text-lg text-gray-700 mb-12">
      We provide a comprehensive range of HubSpot consulting services aimed at unlocking the full potential of the platform to meet your specific business goals.
    </p>

    {/* Service Cards Container */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/card-container">
      {[
        {
          title: "Marketing Opportunity Assessments",
          desc:
            "Our HubSpot consultants perform thorough audits of your HubSpot implementation to identify ",
          strongs: ["growth opportunities", "marketing automation"],
          bullets: [
            "In-depth audits of your marketing automation setup",
            "Identify gaps to power growth marketing",
            "Optimize processes for reduced costs and better ROI",
            "Improve instance health for better performance",
          ],
        },
        {
          title: "Marketing Strategy Creation",
          desc:
            "Your marketing strategy should be tailored to your ",
          strongs: ["business persona", "target market", "engagement strategies", "marketing funnel"],
          bullets: [
            "Implement best practices for lead routing",
            "Adopt multi-channel lead nurturing",
            "Use lead scoring techniques for effective user engagement",
            "Monitor buyer journey touchpoints across platforms",
          ],
        },
        {
          title: "HubSpot Migration or Implementation",
          desc:
            "Transitioning to HubSpot or from HubSpot can be daunting. ",
          strongs: ["Our certified HubSpot experts"],
          bullets: [
            "Build detailed migration execution plans",
            "Migrate all assets, leads, and contacts with ease",
            "Ensure GDPR/CCPA compliance throughout the process",
            "Clean and organize data for better functionality and accuracy",
          ],
        },
        {
          title: "Marketing Campaign Management",
          desc:
            "Our ",
          strongs: ["HubSpot campaign concierges", "optimization"],
          bullets: [
            "Continuous monitoring and campaign optimization",
            "A/B testing to find the most effective campaign variants",
            "Content creation for higher lead generation",
            "Full-funnel support for comprehensive marketing strategies",
          ],
        },
        {
          title: "Hyper-Personalization in HubSpot",
          desc:
            "We help you leverage ",
          strongs: ["hyper-personalization", "conversion rates", "customer experience"],
          bullets: [
            "Persona-driven content personalization for targeted marketing",
            "Customer journey mapping across all digital channels",
            "Optimize personalization processes continuously for improved results",
            "Omnichannel marketing approach for a holistic customer experience",
          ],
        },
        {
          title: "Account-Based Marketing (ABM) in HubSpot",
          desc:
            "Our ",
          strongs: ["ABM strategies"],
          bullets: [
            "Develop ABM strategies to identify good-fit target accounts",
            "Streamline the sales and ABM process to convert prospects faster",
            "Build meaningful relationships with personalized engagement",
            "Track and optimize ABM strategy through dedicated dashboards",
          ],
        },
      ].map((card, i) => (
        <div
          key={i}
          className="bg-[#F8FAFC] rounded-xl p-8 text-left shadow-sm transition-all duration-300 group-hover/card-container:opacity-40 hover:!opacity-100"
        >
          <h3 className="text-xl font-semibold mb-2 text-[#0F172A]">{card.title}</h3>
          <p className="text-gray-700 mb-4">
            {card.desc}
            {card.strongs.map((s, idx) => (
              <strong key={idx}> {s} </strong>
            ))}
          </p>
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
        title="Our Customers "
        description="At Growth Natives, we have served valuable customers and established strong partnerships with them whose skills and expertise complement and enrich our own. "
      />

      <AwardsSection />

      {/* FAQs */}
      <FaqSection title="FAQ's" faqs={faqs} />

        {/* Recent Blogs - Center heading only for this page */}
        <div className="[&>h2]:text-center">
          <RecentResourcesSection
            heading=" Top Blogs "
            body=" Get quick access to our best practices and resources from experienced. "
            subTabs={[]} // no subtabs on this page
            resources={recentResources}
          />
        </div>

        <ContactCta
              heading="Ready to Harness the Power of HubSpot to Propel Your Business Forward? "
              subtext="Work with dedicated HubSpot consultants to learn how you and your team can implement new tools & functionalities and achieve exceptional results with HubSpot. "
              buttonLabel="Schedule 1:1 Call  "
              buttonLink="/get-started"
        />
      
      <Footer />
    </div>
  );
};

export default L3Template;