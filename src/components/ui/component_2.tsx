import React, { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";

export interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
  image?: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc?: string;
}

export interface FeatureContent {
  id: string;
  heading?: string;
  description?: string;
  items: FeatureItem[];
}

export interface EnterpriseCapabilitiesProps {
  title: string;
  subtitle: string;
  tabs: TabItem[];
  features: FeatureContent[];
  defaultIndex?: number;
}

export default function EnterpriseCapabilities({
  title,
  subtitle,
  tabs,
  features,
  defaultIndex = 0,
}: EnterpriseCapabilitiesProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
  const el = tabRefs.current[activeIndex];
  const container = el?.parentElement?.parentElement;

  if (el && container) {
    const elLeft = el.offsetLeft;
    const elWidth = el.offsetWidth;
    const containerWidth = container.offsetWidth;

    // Scroll horizontally to center the tab
    container.scrollTo({
      left: elLeft - containerWidth / 2 + elWidth / 2,
      behavior: "smooth",
    });
  }

  // Reset autoplay timer on every activeIndex change
  const timeout = setTimeout(() => {
    setActiveIndex((prev) => (prev + 1) % tabs.length);
  }, 7000); // 7s per tab

  return () => clearTimeout(timeout); // Clear on unmount or index change
}, [activeIndex, tabs.length]);

  const activeTab = tabs[activeIndex];
  const currentFeature = features.find((f) => f.id === activeTab?.id);

  return (
    <section className="bg-[#0F1117] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ---- SECTION TITLE ---- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* ---- TABS ---- */}
        <div className="relative mb-16 border-b border-[#2A2E39] overflow-x-auto scrollbar-hide px-4 sm:px-6">
  <div className="flex gap-6 min-w-max lg:min-w-0 lg:justify-center">

    {tabs.map((tab, index) => {
      const isActive = index === activeIndex;
      return (
        <button
          key={tab.id}
          ref={(el) => (tabRefs.current[index] = el)}
          onClick={() => setActiveIndex(index)}
          className={`scroll-mx-4 relative flex flex-col items-center justify-center px-2 pb-4 transition-colors duration-300 whitespace-nowrap ${
            isActive ? "text-blue-500" : "text-gray-400 hover:text-blue-400"
          }`}
        >
          <tab.icon className="w-5 h-5 mb-1" />
          <span className="text-sm font-medium">{tab.label}</span>
          {isActive && (
            <span
              className="absolute bottom-0 left-0 h-[2px] rounded-full bg-blue-500 animate-grow-7s"
              style={{ width: "100%" }}
            />
          )}
        </button>
      );
    })}
  </div>
</div>


        {/* ---- CONTENT AREA ---- */}
        <div
          key={activeIndex}
          className="grid lg:grid-cols-2 gap-10 items-center animate-fade-slide-up"
        >
          {/* LEFT: Title + Description + Bullets */}
{currentFeature && (
  <div className="space-y-6">
    {/* New Heading and Description */}
    {currentFeature.heading && (
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{currentFeature.heading}</h3>
        {currentFeature.description && (
          <p className="text-gray-400 text-base max-w-xl">{currentFeature.description}</p>
        )}
      </div>
    )}

    {/* Bullet List */}
    {currentFeature.items.map((item, idx) => (
      <div key={idx} className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
          <item.icon className="w-6 h-6 text-blue-600" />
        </div>
        <h4 className="font-semibold text-lg">{item.title}</h4>
      </div>
    ))}
  </div>
)}

          {/* RIGHT: Image only */}
          <div className="p-6 lg:p-10 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-400/20 flex items-center justify-center">
            {activeTab.image && (
              <img
                src={activeTab.image}
                alt={activeTab.label}
                className="max-h-72 object-contain rounded-xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
