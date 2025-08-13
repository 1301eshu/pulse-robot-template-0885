import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyFeaturedSection, { CaseStudyItem } from "@/components/ui/component_21";
import CaseStudyGridSection, { CaseStudyGridItem } from "@/components/ui/component_22";
import ContactCta from "@/components/ui/component_6";

const CaseStudiesIndex = () => {
  const featuredCaseStudies: CaseStudyItem[] = [
    {
      title: "300% ROI Increase for SaaS Company Through Marketing Automation",
      client: "TechFlow Solutions",
      industry: "SaaS",
      results: "300% ROI increase",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400",
      slug: "techflow-roi-increase",
      category: "marketing-automation",
    },
    {
      title: "50% Lead Cost Reduction with HubSpot Implementation",
      client: "GrowthCorp",
      industry: "E-commerce",
      results: "50% cost reduction",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400",
      slug: "growthcorp-lead-reduction",
      category: "hubspot",
    },
    {
      title: "2x Conversion Rate with Salesforce Optimization",
      client: "DataDrive Inc",
      industry: "Technology",
      results: "2x conversion rate",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400",
      slug: "datadrive-conversion",
      category: "salesforce",
    },
  ];

  const allCaseStudies: CaseStudyGridItem[] = [
    {
      title: "300% ROI Increase for SaaS Company Through Marketing Automation",
      excerpt: "How we helped TechFlow Solutions transform their marketing operations and achieve unprecedented growth through strategic automation implementation.",
      client: "TechFlow Solutions",
      industry: "SaaS",
      results: "300% ROI increase",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400",
      slug: "techflow-roi-increase",
      category: "marketing-automation",
    },
    {
      title: "50% Lead Cost Reduction with HubSpot Implementation",
      excerpt: "A complete HubSpot implementation that streamlined lead generation processes and significantly reduced customer acquisition costs.",
      client: "GrowthCorp",
      industry: "E-commerce",
      results: "50% cost reduction",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400",
      slug: "growthcorp-lead-reduction",
      category: "hubspot",
    },
    {
      title: "2x Conversion Rate with Salesforce Optimization",
      excerpt: "Comprehensive Salesforce optimization that doubled conversion rates and improved sales team efficiency by 80%.",
      client: "DataDrive Inc",
      industry: "Technology",
      results: "2x conversion rate",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400",
      slug: "datadrive-conversion",
      category: "salesforce",
    },
    {
      title: "85% Email Open Rate Improvement with Marketo",
      excerpt: "Strategic email marketing campaign optimization that dramatically improved engagement and lead nurturing effectiveness.",
      client: "EmailMaster Pro",
      industry: "Marketing",
      results: "85% open rate boost",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400",
      slug: "emailmaster-engagement",
      category: "marketo",
    },
    {
      title: "40% Revenue Growth Through Digital Transformation",
      excerpt: "Complete digital transformation strategy that modernized operations and drove significant revenue growth for a traditional manufacturer.",
      client: "IndustryCorp",
      industry: "Manufacturing",
      results: "40% revenue growth",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400",
      slug: "industrycorp-transformation",
      category: "digital-transformation",
    },
    {
      title: "60% Faster Time-to-Market with DevOps Implementation",
      excerpt: "DevOps transformation that accelerated product development cycles and improved deployment reliability by 95%.",
      client: "SpeedTech",
      industry: "Software",
      results: "60% faster delivery",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400",
      slug: "speedtech-devops",
      category: "devops",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Featured Case Studies Section */}
        <CaseStudyFeaturedSection 
          heading="Success Stories" 
          body="Real results from real clients. See how we've helped businesses transform their digital presence and achieve measurable growth."
          items={featuredCaseStudies} 
        />

        {/* All Case Studies Grid */}
        <div className="[&>h2]:text-center">
          <CaseStudyGridSection
            heading="All Case Studies"
            subTabs={[]} // no subtabs on this page
            caseStudies={allCaseStudies}
          />
        </div>

        {/* Contact CTA */}
        <ContactCta
          heading="Ready to Write Your Success Story?"
          subtext="Let's create a case study that showcases your business transformation."
          buttonLabel="Start Your Journey"
          buttonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesIndex;

// Utilities
function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
}

function extractClientName(title: string) {
  // Try to extract client name from title (first few words)
  const words = title.split(' ');
  return words.length > 2 ? words.slice(0, 2).join(' ') : 'Client';
}

function extractResults(content: string) {
  // Extract key metrics/results from content
  const plainText = content.replace(/<[^>]+>/g, "");
  const percentageMatch = plainText.match(/(\d+)%/);
  const increaseMatch = plainText.match(/(\d+)x|(\d+) times/);
  
  if (percentageMatch) return `${percentageMatch[1]}% improvement`;
  if (increaseMatch) return `${increaseMatch[1] || increaseMatch[2]}x growth`;
  return "Significant ROI increase";
}