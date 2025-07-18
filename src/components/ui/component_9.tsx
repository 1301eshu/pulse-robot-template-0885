import React from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export interface ExploreItem {
  tag: string;
  title: string;
  readTime: string;
  category: string;
  thumbnail?: string;
  slug?: string;
}

interface ExploreMoreSectionProps {
  heading?: string;
  body?: string;
  items: ExploreItem[];
}

const ExploreMoreSection: React.FC<ExploreMoreSectionProps> = ({
  heading = "Explore more",
  body,
  items,
}) => {
  if (!items || items.length < 2) return null;

  const [firstItem, ...restItems] = items;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
          {body && (
            <p className="text-gray-600 text-base mt-2 max-w-2xl">{body}</p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Card */}
          <Link to={firstItem.slug ? `/resources/blog/${firstItem.slug}` : '#'}>
            <Card className="bg-white p-0 overflow-hidden flex flex-col h-full shadow-sm border border-gray-100 hover:shadow-lg transition group cursor-pointer">
              {firstItem.thumbnail && (
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={firstItem.thumbnail}
                    alt={firstItem.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="text-white font-semibold text-sm flex items-center gap-1">
                      Read more <span className="text-lg">›</span>
                    </span>
                  </div>
                </div>
              )}

              <CardContent className="bg-white p-6 flex flex-col justify-between flex-1">
                <div>
                  <Badge className="mb-3 bg-green-100 text-green-700 text-xs font-medium">
                    {firstItem.tag}
                  </Badge>
                  <h3 className="text-xl font-semibold text-blue-600 group-hover:underline transition-colors leading-snug mb-3">
                    {firstItem.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm flex items-center mt-auto">
                  <Clock className="w-4 h-4 mr-1" />
                  {firstItem.readTime}
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Right: 3 Cards */}
          <div className="space-y-4 flex flex-col justify-between h-full">
            {restItems.slice(0, 3).map((item, index) => (
              <Link 
                key={index} 
                to={item.slug ? `/resources/blog/${item.slug}` : '#'}
                className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer group"
              >
                <div className="flex-1">
                  <Badge className="mb-2 text-xs bg-blue-100 text-blue-700 font-medium">
                    {item.tag}
                  </Badge>
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
                <div className="flex items-center text-sm text-gray-500 ml-4">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.readTime}
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMoreSection;
