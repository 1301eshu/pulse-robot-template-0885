import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export interface CaseStudyItem {
  title: string;
  client: string;
  industry: string;
  results: string;
  thumbnail?: string;
  slug: string;
  category: string;
}

interface CaseStudyFeaturedSectionProps {
  heading?: string;
  body?: string;
  items: CaseStudyItem[];
}

export default function CaseStudyFeaturedSection({ 
  heading = "Featured Case Studies", 
  body = "Discover how we've helped businesses achieve remarkable growth.",
  items 
}: CaseStudyFeaturedSectionProps) {
  
  if (!items || items.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{heading}</h2>
          {body && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {body}
            </p>
          )}
        </div>

        {/* Featured Case Study Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Main Featured Case Study */}
          {items[0] && (
            <Link 
              to={`/case-studies/${items[0].category.toLowerCase().replace(/\s+/g, '-')}/${items[0].slug}`}
              className="group block"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={items[0].thumbnail}
                    alt={items[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {items[0].industry}
                    </Badge>
                    <Badge variant="outline" className="border-green-500 text-green-600">
                      {items[0].results}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {items[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Client: <span className="font-semibold text-foreground">{items[0].client}</span>
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Read Case Study 
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Side Case Studies */}
          <div className="space-y-6">
            {items.slice(1, 3).map((item, index) => (
              <Link 
                key={index}
                to={`/case-studies/${item.category.toLowerCase().replace(/\s+/g, '-')}/${item.slug}`}
                className="group block"
              >
                <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                          {item.industry}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-green-500 text-green-600">
                          {item.results}
                        </Badge>
                      </div>
                      <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Client: <span className="font-medium text-foreground">{item.client}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}