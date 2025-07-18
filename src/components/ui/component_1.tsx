// src/components/ui/Component_1.tsx

import React from "react";
import { CheckCircleIcon } from "lucide-react";

const cards = [
  { key: "first" },    // our special first card
  { title: "Design", description: "…performance and delight." },
  { title: "AI & Automation", description: "…powered by AI." },
];

export default function Component_1() {
  return (
    <section className="bg-white">
      {/* … your sticky heading stays unchanged … */}

      <ul
        id="cards"
        className="w-full max-w-7xl mx-auto px-6 space-y-[-60px]"
      >
        {cards.map((card, i) => {
          const isFirst = card.key === "first";
          return (
            <li
              key={i}
              className="card"
              style={{ "--index": i + 1 } as React.CSSProperties}
            >
              <div
                className={[
                  "card-content rounded-2xl overflow-hidden h-full bg-gradient-to-r from-blue-50 to-blue-100",
                  // flex-column for others, flex-row for first
                  isFirst ? "flex flex-col md:flex-row items-center" : "flex flex-col justify-end p-8",
                ].join(" ")}
              >
                {isFirst ? (
                  <>
                    {/* Left half: text */}
                    <div className="w-full md:w-1/2 p-6 space-y-4">
                      <h3 className="text-2xl md:text-3xl font-semibold">
                        Analyze Customer Behavior and Customer Experience
                      </h3>
                      <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                        Our marketing automation solutions enable businesses to
                        track customer experiences, apply precise measurement
                        techniques, and gain valuable insights into consumer
                        behavior. With a data-driven approach, businesses are
                        empowered to make strategic decisions that drive
                        engagement and growth.
                      </p>
                      <p className="text-base md:text-lg text-gray-800">
                        We leverage advanced technology and AI to enhance:
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Search Engine Marketing strategies with accurate customer insights",
                          "Brand management by optimizing audience segmentation",
                          "Product management through targeted automation and personalization",
                        ].map((text, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircleIcon className="w-5 h-5 flex-shrink-0 text-blue-500 mt-1" />
                            <span className="text-base md:text-lg text-blue-600 leading-snug">
                              {text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right half: image */}
                    <div className="w-full md:w-1/2 h-48 md:h-auto">
                      <img
                        src="/images/strategy-illustration.png"
                        alt="Strategy illustration"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </>
                ) : (
                  // fallback for cards 2 & 3
                  <>
                    <h3 className="text-3xl font-semibold mb-2">
                      {card.title}
                    </h3>
                    <p className="text-lg opacity-90">{card.description}</p>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
