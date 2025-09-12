'use client';

import AwardsSection from '@/components/ui/component_12';
import LogoScroller from '@/components/ui/component_13';

export default function Page_2() {
  return (
    <>
      <LogoScroller
        heading={
          <h2 className="text-3xl md:text-4xl leading-snug mb-4 text-gray-900 font-normal">
            Trusted by Brands That Scale Smart 
          </h2>
        }
        subtext="From fast-scaling startups to global giants-our clients know growth isn't just output. It's infrastructure."
      />

      <AwardsSection />
    </>
  );
}