import React from "react";
// SSR: Use <a> instead of Link from react-router-dom
import { Clock, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export interface ExploreItem {
  tag: string;
  title: string;
  readTime: string;
  author?: string;
  category: string;
  thumbnail?: string;
  slug?: string;
  type: "blogs" | "case-studies";
}

interface ExploreMoreSectionProps {
  heading?: string;
  body?: string;
  items: ExploreItem[];
  useH1?: boolean; // New prop to use H1 instead of H2 for main page headings

}

const ExploreMoreSection: React.FC<ExploreMoreSectionProps> = ({
  heading = "Explore more",
  body,
  items,
  useH1 = false,
}) => {
  if (!items || items.length < 2) return null;

  const [firstItem, ...restItems] = items;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          {useH1 ? (
            <h1 className="text-2xl font-bold text-gray-900">{heading}</h1>
          ) : (
            <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
          )}          {body && (
            <p className="text-gray-600 text-base mt-2 max-w-2xl">{body}</p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Card */}
          <a
            href={
              firstItem.slug
                ? firstItem.type === "case-studies"
                  ? `/case-studies/${firstItem.slug}`
                  : `/blogs/${firstItem.category
                    ?.replace(/\s*\([^)]*\)/g, "")
                    .toLowerCase()
                    .replace(/\s+/g, "-") || "general"
                  }/${firstItem.slug}`
                : "#"
            }
            style={{ textDecoration: "none" }}
          >
            <Card className="bg-white p-0 overflow-hidden flex flex-col h-full shadow-sm border border-gray-100 hover:shadow-lg transition group cursor-pointer">
              {firstItem.thumbnail && (
                <div className="px-4 pt-4">
                  <figure
                    className="
    relative overflow-hidden rounded-xl bg-gray-50 ring-1 ring-black/5
    w-full aspect-[5/2]    /* was aspect-[300/157] */
  "
                  >
                    <img
                      src={firstItem.thumbnail}
                      alt={firstItem.title}
                      className="
      absolute inset-0 w-full h-full
      object-cover object-center
      scale-[1.02]
      transition-transform duration-300
      group-hover:scale-[1.05]
    "
                    />
                    {/* Desktop-only hover overlay */}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 hidden md:flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <span className="text-white font-semibold text-sm flex items-center gap-1">
                        Read more <span className="text-lg">›</span>
                      </span>
                    </div>
                  </figure>
                </div>
              )}

              <CardContent className="bg-white p-6 flex flex-col justify-between flex-1">
                <div>
                  <Badge className="mb-3 bg-green-100 text-green-700 text-xs font-medium capitalize">
                    {firstItem.tag}
                  </Badge>
                  <h3 className="text-xl font-semibold text-blue-600 group-hover:underline transition-colors leading-snug mb-3">
                    {firstItem.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm text-sm md:text-sm text-[10px] flex items-center mt-auto">
                  <Clock className="w-4 h-4 mr-1 text-sm md:text-sm text-[10px]" />
                  {firstItem.readTime}
                  <span className="flex items-center gap-1 ml-4 text-sm md:text-sm text-[10px]">
                    <User className="w-4 h-4" /> {firstItem.author}
                  </span>
                </p>
              </CardContent>
            </Card>
          </a>

          {/* Right: 3 Cards */}
          <div className="space-y-4 flex flex-col justify-between h-full">
            {restItems.slice(0, 3).map((item, index) => (
              <a
                key={index}
                href={
                  item.slug
                    ? item.type === "case-studies"
                      ? `/case-studies/${item.slug}`
                      : `/blogs/${item.category
                        ?.replace(/\s*\([^)]*\)/g, "")
                        .toLowerCase()
                        .replace(/\s+/g, "-") || "general"
                      }/${item.slug}`
                    : "#"
                }
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer group"
                style={{ textDecoration: "none" }}
              >
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Badge className="text-xs bg-blue-100 text-blue-700 font-medium capitalize">
                      {item.tag}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500 gap-3">
                      <span className="flex items-center text-sm md:text-sm text-[10px]">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-sm md:text-sm text-[10px]">
                        <User className="w-4 h-4" /> {item.author}
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mt-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMoreSection;
