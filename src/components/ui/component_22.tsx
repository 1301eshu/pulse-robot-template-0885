import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface CaseStudyGridItem {
  title: string;
  excerpt: string;
  client: string;
  industry: string;
  results: string;
  image: string;
  slug: string;
  category: string;
}

interface CaseStudyGridSectionProps {
  heading?: string;
  subTabs?: string[];
  caseStudies: CaseStudyGridItem[];
  onLoadMore?: () => void;
  hasMore?: boolean;
}

export default function CaseStudyGridSection({ 
  heading = "Case Studies", 
  subTabs = [],
  caseStudies,
  onLoadMore,
  hasMore = false
}: CaseStudyGridSectionProps) {
  const [activeTab, setActiveTab] = useState(subTabs[0] || '');

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">{heading}</h2>
          
          {/* Sub Tabs */}
          {subTabs.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {subTabs.map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "default" : "outline"}
                  onClick={() => setActiveTab(tab)}
                  className="rounded-full px-6"
                >
                  {tab}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <Link 
              key={index}
              to={`/case-studies/${caseStudy.category.toLowerCase().replace(/\s+/g, '-')}/${caseStudy.slug}`}
              className="group block"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] h-full">
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                      {caseStudy.industry}
                    </Badge>
                    <Badge variant="outline" className="border-green-500 text-green-600 text-xs">
                      {caseStudy.results}
                    </Badge>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {caseStudy.title}
                  </h3>
                  
                  {/* Client */}
                  <p className="text-sm text-muted-foreground mb-3">
                    Client: <span className="font-semibold text-foreground">{caseStudy.client}</span>
                  </p>
                  
                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {caseStudy.excerpt}
                  </p>
                  
                  {/* Read More Link */}
                  <div className="flex items-center text-primary font-medium text-sm group-hover:underline">
                    View Case Study
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {onLoadMore && hasMore && (
          <div className="text-center">
            <Button 
              onClick={onLoadMore}
              variant="outline"
              size="lg"
              className="rounded-full px-8"
            >
              Load More Case Studies
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}