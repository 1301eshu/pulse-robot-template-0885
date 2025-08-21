import { useState } from "react";

import FaqSection from "@/components/ui/component_5";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function faqs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // FAQ List
  const faqs = [
    {
      q: "What Services Does Growth Natives Offer?",
      a: `Growth Natives offers a diverse range of services to meet your business needs:

• Strategic Services: Crafting strategic solutions tailored to your business goals.
• Development Services: Building robust and scalable digital solutions.
• Growth Marketing: Executing data-driven marketing strategies for business expansion.
• Marketing Analytics: Harnessing the power of data for insightful marketing decisions.
• Salesforce: Providing expertise in Salesforce solutions for streamlined operations.
• Jira Services: Optimizing project management through Jira solutions.
• Design Services: Creating visually appealing and user-centric designs.
• Marketing Automation: Implementing automated marketing processes for efficiency and effectiveness.`,
    },
    {
      q: "Can Growth Natives Tailor its Services to Specific Industry Requirements?",
      a: "Absolutely! Growth Natives has extensive experience serving diverse industries, allowing us to tailor our services to meet the specific needs and challenges of our clients, be it in Technology, Finance, Healthcare, or other sectors.",
    },
    {
      q: "How Do Growth Natives Contribute to Customer Engagement? ",
      a: " By leveraging cutting-edge technologies like Generative AI, Growth Natives enhances customer engagement by creating personalized and innovative solutions that drive meaningful interactions and experiences. ",
    },
    {
      q: "What Sets Growth Natives Apart in the Digital Innovation Landscape?",
      a: "Growth Natives stands out with its global expertise, diverse client portfolio, and ability to seamlessly integrate groundbreaking technologies into tailored solutions. Our commitment to driving results and fostering digital innovation sets us apart in the industry.",
    },
    {
      q: "How Can Growth Natives Help B2B Brands Enhance their Digital Presence?",
      a: "Growth Natives empowers B2B brands by crafting tailored digital solutions that optimize their online presence, drive lead generation, and strengthen business-customer interactions.",
    },
    {
      q: "What Strategies Does Growth Natives Employ to Drive Demand for B2B Clients?",
      a: "Growth Natives employs demand-generation strategies, utilizing a mix of targeted content, data-driven insights, and innovative technologies to create effective B2B marketing campaigns.",
    },
    {
      q: "Can Growth Natives Assist Brands in Adopting Generative AI for Personalized Customer Engagement?",
      a: "Absolutely. Growth Natives specializes in implementing Generative AI for B2B clients, creating personalized customer engagement strategies that drive conversions and foster long-term relationships.",
    },
    {
      q: "How Does Growth Natives Navigate the Unique Challenges of the B2B Sector in Digital Transformation?",
      a: "Growth Natives has a dedicated approach to addressing B2B challenges in digital transformation. Our strategies include comprehensive analysis, industry-specific solutions, and agility in adapting to evolving market trends.",
    },
    {
      q: "What Kind of Support Does Growth Natives Offer to B2B Clients in the Technology Sector?",
      a: "Growth Natives provides specialized support to B2B clients in the technology sector, offering services such as technology adoption consultancy, digital transformation, and tailored solutions for tech-driven challenges.",
    },
    {
      q: "Can Growth Natives Assist B2B Clients in the Financial Sector With Cost-Effective Digital Solutions?",
      a: "Yes, Growth Natives specializes in delivering cost-effective digital solutions for B2B clients in the financial sector, optimizing processes, and enhancing customer experiences.",
    },
    {
      q: "How Does Growth Natives Ensure Data Security for B2B Clients in Highly Regulated Industries?",
      a: "Growth Natives prioritizes data security for B2B clients in regulated industries through robust cybersecurity measures, compliance adherence, and implementing industry best practices.",
    },
    {
      q: "Can Growth Natives Provide Examples of Successful B2B Digital Transformation Projects?",
      a: "Certainly. Growth Natives has successfully executed B2B digital transformation projects, enhancing operational efficiency, boosting customer engagement, and achieving measurable business growth.",
    },
    {
      q: "In What Ways Does Growth Natives Tailor Digital Solutions for B2B Clients in Healthcare?",
      a: "Growth Natives tailors digital solutions for B2B clients in healthcare by incorporating technologies like Generative AI to improve patient experiences, streamline processes, and ensure compliance with industry regulations.",
    },
    {
      q: "How Does Growth Natives Measure the Success of its Digital Solutions for B2B Clients?",
      a: "Growth Natives employs key performance indicators (KPIs), data analytics, and client feedback to measure the success of digital solutions for B2B clients, ensuring tangible and impactful results.",
    },
    {
      q: "Can Growth Natives Assist B2B Brands in the Travel Sector With Innovative Customer Engagement Strategies?",
      a: "Absolutely. Growth Natives specializes in crafting innovative customer engagement strategies for B2B brands in the travel sector, leveraging technologies like Generative AI to enhance user experiences and drive bookings.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Header />

      {/* Added spacer between header and FAQs (adjust values as needed) */}
      <div aria-hidden className="h-8 sm:h-12 md:h-16 lg:h-20" />

      {/* FAQs */}
      <FaqSection title="FAQ's" faqs={faqs} />

      <Footer />
    </div>
  );
}
