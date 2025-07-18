'use client';

import { SITE_CTA } from '@/components/SITE_CTAs';

type ContactCtaProps = {
  heading: string;
  subtext: string;
  buttonLabel?: string; // Optional CTA text
  buttonLink?: string;  // Optional CTA link
};

export default function ContactCta({
  heading,
  subtext,
  buttonLabel = 'Contact us',  // fallback if not passed
  buttonLink = '/contact',     // fallback link
}: ContactCtaProps) {
  return (
    <section className="pt-14 pb-20 bg-white">
      <div className="section-wrapper">
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg"
              alt="CTA Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center text-white px-6 sm:px-12 py-20 sm:py-24">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-white/80 mb-6">
              {subtext}
            </p>

            {buttonLabel && (
              <SITE_CTA 
                variant="secondary" 
                text={buttonLabel} 
                href={buttonLink} 
                size="md" 
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
