'use client';

import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { SITE_CTA } from "@/components/SITE_CTAs";

// Lazy load Lottie and animation
const Lottie = React.lazy(() => import("lottie-react"));

const AnimationComponent = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    import("@/assets/shopping-bag-animation.json")
      .then((data) => {
        setAnimationData(data.default || data);
      })
      .catch((error) => {
        console.warn("Failed to load animation:", error);
        setAnimationData(null);
      });
  }, []);

  if (!animationData) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-pulse bg-white/20 rounded-lg w-full h-full min-h-[200px]" />
      </div>
    );
  }

  return (
    <React.Suspense fallback={
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-pulse bg-white/20 rounded-lg w-full h-full min-h-[200px]" />
      </div>
    }>
      <Lottie 
        animationData={animationData} 
        className="w-full h-full" 
        loop 
        autoplay 
      />
    </React.Suspense>
  );
};

export default function HeroBanner() {
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Hero%20Section/8302_gqqgrs.webp"
          alt="Background"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
          width="1920"
          height="1080"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10 max-w-7xl mx-auto px-6
          pt-32
          pb-24 md:pb-16            /* ⬅️ extra bottom padding on mobile */
          flex flex-col md:flex-row items-center justify-between
          min-h-[780px] max-h-[1000px]
        "
      >
        <div className="flex-1 min-w-[300px] max-w-xl">
          <h4 className="font-bold text-white leading-tight mb-2 text-base md:text-base">
            AI-Native Digital Transformation for Growth
          </h4>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-md mt-4">
            We dream, design, develop, and deliver intelligent systems that drive scale—not chaos.
          </h1>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mt-8 mb-8">
            <SITE_CTA
              variant="secondary"
              text="Talk to an Expert"
              href="/contact"
              size="md"
            />
          <a
  href="https://aioverview.growthnatives.com/ai-overview-visibility-checker/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center text-white/80 hover:text-white transition font-medium"
>
  Quick AI-Readiness Audit?
  <ChevronRight className="ml-1 w-5 h-5" />
</a>

          </div>
        </div>

        {/* Animation */}
        <div className="flex-1 flex justify-center md:justify-end max-w-[400px] mt-10 md:mt-0 mb-12 md:mb-0">
          {/*            └── ⬅️ extra space after video on mobile only */}
          <AnimationComponent />
        </div>
      </div>
    </div>
  );
}
