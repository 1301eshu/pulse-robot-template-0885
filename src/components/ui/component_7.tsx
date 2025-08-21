import React from "react";
import { SITE_CTA } from "@/components/SITE_CTAs";

const DEFAULT_HERO_BG =
  "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/L1_Hero_Banner/L1_Hero_Banner.webp";

interface HeroSectionProps {
  heading: string;
  highlight?: string;
  subtext: string;
  buttonText?: string;
  buttonLink?: string;
  rightImage: string;
  noCta?: boolean;
  bgImage?: string; // existing usage (don't touch this)
  customBgImage?: string; // ✅ new prop for page-level overrides
  overlayTitle?: string;
  overlayDesc?: string;
  overlayButtonText?: string;
  centerText?: boolean;
}

export default function HeroSection({
  heading,
  highlight,
  subtext,
  buttonText = "Audit Me!",
  buttonLink = "/contact/",
  rightImage,
  noCta,
  centerText = false,
  bgImage,
  customBgImage, // ✅ added
}: HeroSectionProps) {
  // Priority: customBgImage > bgImage > DEFAULT
  const effectiveBg = customBgImage || bgImage || DEFAULT_HERO_BG;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        <section className="relative rounded-xl sm:rounded-2xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={effectiveBg}
              alt="Hero Background"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-8 sm:py-12 px-4 sm:px-8">
            <div
              className={`grid items-center gap-8 sm:gap-10 md:gap-12 ${
                centerText ? "grid-cols-1 text-center" : "md:grid-cols-12"
              }`}
            >
              {/* Left */}
              <div className={centerText ? "max-w-3xl mx-auto" : "md:col-span-7"}>
                <h1
                  className={`text-white font-medium tracking-tight mb-4 leading-[1.2]
                  text-4xl sm:text-5xl md:text-6xl
                  ${centerText ? "text-center" : "text-left"}`}
                >
                  {heading}
                  {highlight && (
                    <span className="ml-2 align-middle bg-green-500 text-black px-2 py-0.5 rounded-md inline-block text-sm sm:text-base font-medium">
                      {highlight}
                    </span>
                  )}
                </h1>

                <p
                  className={`text-gray-200 mb-6 leading-relaxed
                  text-[15px] sm:text-base md:text-lg font-normal
                  ${centerText ? "text-center" : "text-left"}`}
                >
                  {subtext}
                </p>

                {!noCta && (
                  <div className={centerText ? "flex justify-center" : ""}>
                    <SITE_CTA
                      variant="secondary"
                      text={buttonText}
                      href={buttonLink}
                      size="md"
                      className="text-white w-full sm:w-auto"
                      icon
                    />
                  </div>
                )}
              </div>

              {/* Right image */}
              {!centerText && (
                <div className="md:col-span-5">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={rightImage}
                      alt="Hero Right"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
