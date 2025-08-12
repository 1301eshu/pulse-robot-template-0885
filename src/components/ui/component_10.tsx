// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Calendar, Clock, User } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// export interface ResourceItem {
//   title: string;
//   subtitle: string;
//   author: string;
//   date: string;
//   readTime: string;
//   image: string;
//   slug?: string;
// }

// interface SubTab {
//   id: string;
//   label: string;
// }

// interface RecentResourcesProps {
//   heading?: string;
//   body?: string;
//   subTabs: SubTab[];
//   resources: ResourceItem[];
// }

// const RecentResourcesSection: React.FC<RecentResourcesProps> = ({
//   heading = "Most Recent Resources",
//   body,
//   subTabs,
//   resources,
// }) => {
//   const [activeSubTab, setActiveSubTab] = useState(subTabs[0]?.id || "all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   const filteredResources =
//     activeSubTab === "all"
//       ? resources
//       : resources.filter((r) => r.subtitle === activeSubTab);

//   const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
//   const paginatedResources = filteredResources.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading and Body */}
//         <div className="mb-4">
//           <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
//           {body && <p className="text-gray-600 mt-2 max-w-2xl">{body}</p>}
//         </div>

//         {/* Sub-tabs */}
//         <div className="flex gap-2 mb-8 overflow-x-auto">
//           {subTabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => {
//                 setActiveSubTab(tab.id);
//                 setCurrentPage(1);
//               }}
//               className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
//                 activeSubTab === tab.id
//                   ? "bg-blue-600 text-white"
//                   : "bg-white text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Resource Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {paginatedResources.map((resource, index) => (
//             <Link
//               key={index}
//               to={resource.slug ? `/resources/blog/${resource.slug}` : '#'}
//               className="block"
//             >
//               <Card className="bg-white overflow-hidden transition-all group cursor-pointer hover:shadow-xl border border-gray-100">
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={resource.image}
//                     alt={resource.title}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//                     <span className="text-white font-semibold text-sm flex items-center gap-1">
//                       Read more <span className="text-lg">›</span>
//                     </span>
//                   </div>
//                 </div>

//                 <CardContent className="bg-white p-6">
//                   <div className="flex flex-wrap items-center text-xs text-gray-500 mb-4 gap-x-4 gap-y-2">
//                     <span className="flex items-center gap-1">
//                       <User className="w-4 h-4" /> {resource.author}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Calendar className="w-4 h-4" /> {resource.date}
//                     </span>
//                   </div>

//                   <h3 className="font-bold text-gray-900 mb-8 group-hover:text-blue-600 transition-colors line-clamp-2 text-[1.05rem] leading-tight">
//                     {resource.title}
//                   </h3>

//                   <div className="text-sm text-gray-500 flex items-center gap-1 mt-2">
//                     <Clock className="w-4 h-4" />
//                     {resource.readTime}
//                   </div>
//                 </CardContent>
//               </Card>
//             </Link>
//           ))}
//         </div>

//         {/* Pagination: Only show if more than 6 resources */}
//         {totalPages > 1 && (
//           <div className="flex justify-center mt-10 gap-2">
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => setCurrentPage(page)}
//                 className={`w-8 h-8 rounded-md text-sm font-medium flex items-center justify-center transition-colors ${
//                   currentPage === page
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//                 }`}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default RecentResourcesSection;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface ResourceItem {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug?: string;
  category?: string;
}

interface SubTab {
  id: string;
  label: string;
}

interface RecentResourcesProps {
  heading?: string;
  body?: string;
  subTabs: SubTab[];
  resources: ResourceItem[];
  onLoadMore?: () => void;
  hasMore?: boolean;
}

const RecentResourcesSection: React.FC<RecentResourcesProps> = ({
  heading = "Most Recent Resources",
  body,
  subTabs,
  resources,
  onLoadMore,
  hasMore = false,
}) => {
  const [activeSubTab, setActiveSubTab] = useState(subTabs[0]?.id || "all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const filteredResources =
    activeSubTab === "all"
      ? resources
      : resources.filter((r) => r.subtitle === activeSubTab);

  // When using load more, show all resources, otherwise paginate
  const displayResources = onLoadMore ? filteredResources : filteredResources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
          {body && <p className="text-gray-600 mt-2 max-w-2xl">{body}</p>}
        </div>

        {/* Sub-tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {subTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveSubTab(tab.id);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                activeSubTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayResources.map((resource, index) => (
            <Link
              key={index}
              to={resource.slug ? `/resources/blog/${resource.category?.toLowerCase().replace(/\s+/g, '-') || 'general'}/${resource.slug}` : '#'}
              className="block"
            >
              <Card className="bg-white overflow-hidden transition-all group cursor-pointer hover:shadow-xl border border-gray-100">
                {/* Image + Hover Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="text-white font-semibold text-sm flex items-center gap-1">
                      Read more <span className="text-lg">›</span>
                    </span>
                  </div>
                </div>

                {/* Card Text Content */}
                <CardContent className="bg-white p-6">
                  {/* Author + Date */}
                  <div className="flex flex-wrap items-center text-xs text-gray-500 mb-4 gap-x-4 gap-y-2">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" /> {resource.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {resource.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-gray-900 mb-8 group-hover:text-blue-600 transition-colors line-clamp-2 text-[1.05rem] leading-tight">
                    {resource.title}
                  </h3>

                  {/* Read Time */}
                  <div className="text-sm text-gray-500 flex items-center gap-1 mt-2">
                    <Clock className="w-4 h-4" />
                    {resource.readTime}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More Button - only show if onLoadMore prop is provided */}
        {onLoadMore && hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={onLoadMore}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Load More Posts
            </button>
          </div>
        )}

        {/* Traditional Pagination - only show if no onLoadMore prop */}
        {!onLoadMore && totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-md text-sm font-medium flex items-center justify-center transition-colors ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentResourcesSection;
