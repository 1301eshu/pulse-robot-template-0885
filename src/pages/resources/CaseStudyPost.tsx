import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContactCta from "@/components/ui/component_6";

const CaseStudyPost = () => {
  const { category, slug } = useParams();

  // Demo case study data - in real app, this would come from API or database
  const caseStudyData = {
    "techflow-roi-increase": {
      title: "300% ROI Increase for SaaS Company Through Marketing Automation",
      client: "TechFlow Solutions",
      industry: "SaaS",
      results: "300% ROI increase",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600",
      challenge: "TechFlow Solutions was struggling with manual lead nurturing processes that were time-consuming and ineffective. Their sales team was overwhelmed with unqualified leads, and conversion rates were declining.",
      solution: "We implemented a comprehensive marketing automation strategy using HubSpot, including lead scoring, automated email sequences, and personalized content delivery based on user behavior.",
      results_detailed: [
        "300% increase in ROI within 6 months",
        "85% reduction in manual lead processing time",
        "45% improvement in lead-to-customer conversion rate",
        "60% increase in marketing qualified leads"
      ],
      testimonial: {
        quote: "The transformation has been incredible. Our marketing team can now focus on strategy while automation handles the repetitive tasks. The ROI speaks for itself.",
        author: "Sarah Johnson",
        position: "VP of Marketing, TechFlow Solutions"
      }
    },
    "growthcorp-lead-reduction": {
      title: "50% Lead Cost Reduction with HubSpot Implementation",
      client: "GrowthCorp",
      industry: "E-commerce",
      results: "50% cost reduction",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600",
      challenge: "GrowthCorp was spending heavily on paid advertising with diminishing returns. Their lead acquisition costs were rising while conversion rates remained stagnant.",
      solution: "We redesigned their entire lead generation funnel using HubSpot's comprehensive platform, implementing inbound marketing strategies, content optimization, and advanced analytics.",
      results_detailed: [
        "50% reduction in cost per lead",
        "120% increase in organic traffic",
        "35% improvement in email open rates",
        "200% growth in marketing qualified leads"
      ],
      testimonial: {
        quote: "Not only did we cut our lead costs in half, but the quality of leads improved dramatically. Our sales team is much more efficient now.",
        author: "Michael Chen",
        position: "CEO, GrowthCorp"
      }
    },
    // Add more case studies as needed
  };

  const currentCaseStudy = caseStudyData[slug as keyof typeof caseStudyData];

  if (!currentCaseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
            <Button asChild>
              <a href="/resources/case-studies">Back to Case Studies</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {currentCaseStudy.industry}
                </Badge>
                <Badge variant="outline" className="border-green-500 text-green-600">
                  {currentCaseStudy.results}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {currentCaseStudy.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                Client: <span className="font-semibold text-foreground">{currentCaseStudy.client}</span>
              </p>
            </div>
            
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-12">
              <img
                src={currentCaseStudy.image}
                alt={currentCaseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {currentCaseStudy.challenge}
                </p>
              </div>
              
              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {currentCaseStudy.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">The Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {currentCaseStudy.results_detailed.map((result, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-sm border">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-foreground font-semibold">{result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 px-6 bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <blockquote className="text-2xl font-medium text-foreground mb-8 italic">
              "{currentCaseStudy.testimonial.quote}"
            </blockquote>
            <div className="text-muted-foreground">
              <p className="font-semibold text-foreground">{currentCaseStudy.testimonial.author}</p>
              <p>{currentCaseStudy.testimonial.position}</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <ContactCta
          heading="Ready for Similar Results?"
          subtext="Let's discuss how we can help transform your business with proven strategies."
          buttonLabel="Get Started"
          buttonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyPost;