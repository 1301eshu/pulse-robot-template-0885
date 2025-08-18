"use client";

import React, { useEffect, useRef, useState } from "react";
import { ValueType } from "@/components/ui/component_11";

interface CoreValuesProps {
  values: ValueType[];
  heading?: string;
  subheading?: string;
}



const CoreValues: React.FC<CoreValuesProps> = ({
  values,
  heading = "Our Core Values – The Growth Code",
  subheading
}) => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            setVisibleCards((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = sectionRef.current?.querySelectorAll(".core-value-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);








return (
    <>




   {/* CORE VALUES SECTION */}
      <section
        ref={sectionRef}
        className="py-24 bg-white text-gray-800 w-full"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
            {subheading && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {subheading}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                data-index={index}
                className={`core-value-card bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-700 transform px-6 py-6 ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       </>
  );
};

export default CoreValues;