'use client';

import React, { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";
import { SITE_CTA } from "@/components/SITE_CTAs"; // ✅ use shared CTA

export interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
  image?: string;
  ctaText?: string;
  ctaLink?: string;

  /** ✅ Keep these in sync with SITE_CTA */
  ctaVariant?: "primary" | "secondary" | "tertiary";
  ctaSize?: "sm" | "md" | "lg";
  ctaClassName?: string;
  ctaIcon?: boolean;
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
  title?: string;
  subtitle?: string;
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
      const containerPadding = parseInt(
        getComputedStyle(container).paddingLeft || "0",
        10
      );

      const desiredScrollLeft =
        elLeft - containerWidth / 2 + elWidth / 2 - containerPadding;

      container.scrollTo({
        left: Math.max(0, desiredScrollLeft),
        behavior: "smooth",
      });
    }

    const timeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [activeIndex, tabs.length]);

  const activeTab = tabs[activeIndex];
  const currentFeature = features.find((f) => f.id === activeTab?.id);

  return (
    <section className="bg-[#0F1117] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && (
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* ---- Tabs ---- */}
        <div className="relative mb-16 border-b border-[#2A2E39] overflow-x-auto scrollbar-hide px-4 sm:px-6 scroll-pl-8">
          <div className="flex gap-6 min-w-max justify-center">
            {tabs.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab.id}
                  ref={(el) => (tabRefs.current[index] = el)}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex flex-col items-center justify-center px-2 pb-4 transition-colors duration-300 whitespace-nowrap ${
                    isActive
                      ? "text-blue-500"
                      : "text-gray-400 hover:text-blue-400"
                  } ${index === 0 ? "scroll-ml-8" : ""}`}
                >
                  <tab.icon className="w-5 h-5 mb-1" />
                  <span className="text-sm font-medium">{tab.label}</span>
                  {isActive && (
                    <span
                      key={`line-${activeIndex}`}
                      className="absolute bottom-0 left-0 h-[2px] rounded-full bg-blue-500 animate-grow-3s"
                      style={{ width: '0%' }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ---- Content Area ---- */}
        <div
          key={activeIndex}
          className="grid lg:grid-cols-2 gap-10 items-center animate-fade-slide-up"
        >
          {/* ---- Left Column: Text ---- */}
          {currentFeature && (
            <div className="space-y-6">
              {(currentFeature.heading || currentFeature.description) && (
                <div className="mb-6">
                  {currentFeature.heading && (
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {currentFeature.heading}
                    </h3>
                  )}
                  {currentFeature.description && (
                    <p className="text-gray-400 text-base max-w-xl">
                      {currentFeature.description}
                    </p>
                  )}
                </div>
              )}

              {currentFeature.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                </div>
              ))}

              {/* ✅ CTA from shared component */}
              {activeTab?.ctaText && activeTab?.ctaLink && (
                <div className="mt-8">
                  <SITE_CTA
                    variant={activeTab.ctaVariant ?? "secondary"}
                    text={activeTab.ctaText}
                    href={activeTab.ctaLink}
                    size={activeTab.ctaSize ?? "md"}
                    icon={activeTab.ctaIcon ?? true}
                    // Layout-only width (visual style is inside SITE_CTA)
                    className={`w-full sm:w-auto ${activeTab.ctaClassName ?? ""}`}
                  />
                </div>
              )}
            </div>
          )}

          {/* ---- Right Column: Image ---- */}
          <div className="w-full h-full flex items-center justify-center">
            {activeTab?.image && (
              <img
                src={activeTab.image}
                alt={activeTab.label}
                className="w-full h-auto object-contain rounded-xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
