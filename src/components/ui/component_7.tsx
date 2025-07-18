import React from "react";

interface HeroSectionProps {
  heading: string;
  highlight?: string; // Made optional
  subtext: string;
  buttonText?: string;
  buttonLink?: string;
  bgImage: string;
  rightImage: string;
  overlayTitle?: string;
  overlayDesc?: string;
  overlayButtonText?: string;
}

export default function HeroSection({
  heading,
  highlight,
  subtext,
  buttonText = "Book a demo →",
  buttonLink = "#",
  bgImage,
  rightImage,
  overlayTitle = "🧩 Onboarding",
  overlayDesc = "Explore our internal processes",
  overlayButtonText = "Resume training",
}: HeroSectionProps) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-8 ">
        <section className="relative rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={bgImage}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-14 px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div>
                <h1 className="text-white text-5xl font-bold leading-tight mb-4">
                  {heading}
                  {highlight && (
                    <span className="ml-2 bg-green-500 text-black px-3 py-1 rounded-md inline-block animate-glow">
                      {highlight}
                    </span>
                  )}
                </h1>
                <p className="text-gray-200 text-lg mb-6">{subtext}</p>

                <a href={buttonLink}>
                  <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                    {buttonText}
                  </button>
                </a>
              </div>

              {/* Right: Image Block */}
              <div className="w-full md:max-w-lg mx-auto md:mx-0">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={rightImage}
                    alt="Hero Right"
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {/* Glass Overlay */}
                  <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg border border-white/10 shadow-md">
                    <div className="text-sm font-medium mb-1">{overlayTitle}</div>
                    <div className="text-xs text-gray-200 mb-2">{overlayDesc}</div>
                    <button className="bg-white text-black text-xs px-3 py-1 rounded-full hover:bg-gray-100">
                      {overlayButtonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
