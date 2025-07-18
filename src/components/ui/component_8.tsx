import React from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabContent {
  featuredTag: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

interface RevOpsHeroProps {
  sectionHeading: string;
  sectionSubheading?: string;
  activeTab: string;
  tabs: Tab[];
  onTabChange: (tabId: string) => void;
  tabContents: { [key: string]: TabContent };
  searchPlaceholder?: string;
}

const RevOpsHero: React.FC<RevOpsHeroProps> = ({
  sectionHeading,
  sectionSubheading,
  activeTab,
  tabs,
  onTabChange,
  tabContents,
  searchPlaceholder = "Search...",
}) => {
  const content = tabContents[activeTab];

  return (
    <section className="bg-[#f7f9fc] pt-32 pb-20">
      <div className="section-wrapper">
        {/* Heading + Subheading */}
        <div className="text-left mb-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#101828] mb-2">
            {sectionHeading}
          </h2>
          {sectionSubheading && (
            <p className="text-lg text-[#475467]">{sectionSubheading}</p>
          )}
        </div>

        {/* Tabs + Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-5 py-1.5 rounded-full font-semibold text-sm transition border ${
                  tab.id === activeTab
                    ? "bg-white text-[#1570EF] border-[#1570EF] shadow-sm"
                    : "bg-transparent text-[#101828] border-gray-300 hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="w-full rounded-lg border border-gray-200 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1570EF]"
            />
          </div>
        </div>

        {/* Content + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-[#6941C6] uppercase tracking-wide">
              {content.featuredTag}
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#101828] leading-tight">
              {content.title}
            </h3>
            <p className="text-[#475467] max-w-md">{content.description}</p>
            <a
              href={content.buttonLink}
              className="inline-block mt-2 bg-[#1570EF] hover:bg-[#175CD3] text-white font-semibold px-6 py-2.5 rounded-md transition shadow-sm"
            >
              {content.buttonText}
            </a>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={content.imageUrl}
              alt="Visual"
              className="rounded-xl shadow-md w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevOpsHero;
