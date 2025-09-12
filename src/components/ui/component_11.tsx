"use client";

import React, { useEffect, useRef, useState } from "react";
import { SITE_CTA } from "../SITE_CTAs";

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

const teamMembers = [
  {
    name: "Taranbir Singh Nandha",
    role: "Founder & Chief Executive Officer",
    image:
      "https://res.cloudinary.com/dhbhumz3q/image/upload/v1754471449/11_2_n2oa5t.png"
  },
  {
    name: "Balwinder Kaur",
    role: "Co-Founder",
    image:
      "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Company/About%20us/Balwinder.webp"
  }
];

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
      {/* MEET OUR NATIVES SECTION */}
      <section className="bg-white w-full py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet the Natives
            </h2>
            <p className="text-xl text-gray-700 mb-6 max-w-lg">
              Behind every smart strategy and seamless automation is a team of humans who actually love to drive amazing business outcomes.
            </p>
              {/* CTA with gradient container */}
           <SITE_CTA variant="secondary" text="Meet the Team" href="/meet-the-team/" />
          </div>

         {/* Right Cards - Non-clickable */}
<div className="flex justify-center flex-wrap gap-6">
  {teamMembers.map((member, i) => (
    <div
      key={i}
      className="w-[250px] h-[380px] rounded-2xl overflow-hidden relative group"
      style={{
        backgroundImage: `url(${member.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center top"
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10 text-center z-10 bg-gradient-to-t from-black via-black/70 to-transparent">
        <h3 className="text-base font-semibold text-white">{member.name}</h3>
        <p className="text-xs text-white mt-1">{member.role}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

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
