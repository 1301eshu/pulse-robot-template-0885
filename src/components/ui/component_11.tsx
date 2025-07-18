"use client";

import React, { useEffect, useRef, useState } from "react";

export type ValueType = {
  icon: React.ElementType;
  title: string;
  description: string;
};

interface CoreValuesProps {
  values: ValueType[];
  heading?: string;
  subheading?: string;
}

const CoreValues: React.FC<CoreValuesProps> = ({
  values,
  heading = "The Core Values That Drive Us",
  subheading = "Since the day we started, our set of 6 core values have driven our corporate culture, instilling a sense of trust and togetherness among us.",
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
      <section ref={sectionRef} className="py-24 bg-white text-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subheading}
            </p>
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
 {/* MEET OUR NATIVES SECTION */}
      <section className="bg-white w-full py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Say Hello to Our Natives
            </h2>
            <p className="text-xl text-gray-700 mb-6 max-w-lg">
              Our Natives help companies nurture leads and move them through the buyer's journey.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition-all">
              Meet the Team
            </button>
          </div>

          {/* Right Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-lg text-white">
              <img
                src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1752587362/taran_nandha_iuixag.webp" // Replace with actual public image path
                alt="Taranbir Singh Nandha"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 w-full px-6 py-4 bg-gradient-to-t from-black via-black/70 to-transparent">
                <h3 className="text-xl font-bold">Taranbir Singh Nandha</h3>
                <p className="text-sm">Founder & Chief Executive Officer</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-lg text-white">
              <img
                src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1752587362/taran_nandha_iuixag.webp" // Replace with actual public image path
                alt="Balwinder Kaur"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 w-full px-6 py-4 bg-gradient-to-t from-black via-black/70 to-transparent">
                <h3 className="text-xl font-bold">Balwinder Kaur</h3>
                <p className="text-sm">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CoreValues;
