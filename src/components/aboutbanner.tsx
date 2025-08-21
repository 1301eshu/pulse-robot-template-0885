// components/HeroStacked.tsx
import React from "react";
import { SITE_CTA } from "@/components/SITE_CTAs";

interface HeroStackedProps {
  heading: string;
  highlight?: string;
  subtext: string;
  imageSrc: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  noCta?: boolean;     // legacy flag (still supported)
  hideCta?: boolean;   // ✅ new, clearer flag
  maxWidthClass?: string;
  rounded?: boolean;
}

export default function HeroStacked({
  heading,
  highlight,
  subtext,
  imageSrc,
  imageAlt = "Section image",
  buttonText = "Audit Me!",
  buttonLink = "/contact/",
  noCta,
  hideCta,
  maxWidthClass = "max-w-7xl",
  rounded = true,
}: HeroStackedProps) {
  const showCta = !(noCta || hideCta);

  return (
    <section className="bg-white">
      <div className={`${maxWidthClass} mx-auto px-4 sm:px-6 pt-6 sm:pt-10`}>
        {/* Top content (same text styles as HeroSection) */}
        <div className="text-center">
          <h1
  className={`font-medium tracking-tight mb-4 leading-[1.2]
              text-4xl sm:text-5xl md:text-6xl text-black`}
>
  {heading}{" "}
  {highlight && (
    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
      {highlight}
    </span>
  )}
</h1>

          <p className="text-gray-700 mb-6 leading-relaxed text-[15px] sm:text-base md:text-lg font-normal max-w-4xl mx-auto">
            {subtext}
          </p>

          {showCta && (
            <div className="flex justify-center">
              <SITE_CTA
                variant="primary"
                text={buttonText}
                href={buttonLink}
                size="md"
                className="w-full sm:w-auto"
                icon
              />
            </div>
          )}
        </div>

        {/* Image below */}
        <div className="mt-8 sm:mt-10">
          <div
            className={`relative overflow-hidden ${
              rounded ? "rounded-xl sm:rounded-2xl" : ""
            } h-[450px]`}  // ✅ fixed container height
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="
                w-full h-full object-cover object-center   /* ✅ centered */
                grayscale hover:grayscale-0                /* ✅ B/W -> color on hover */
                transition duration-300 ease-out           /* smooth */
              "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
