'use client';

import AwardsSection from '@/components/ui/component_12';
import LogoScroller from '@/components/ui/component_13';


export default function Page_2() {
 

  return (
    <>
      <LogoScroller
        heading="Trusted by Brands That Scale Smart  "
        subtext=" From fast-scaling startups to global giants—our clients know growth isn’t just output. It’s infrastructure. "
        logos={[
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
        ]}
      />

      <AwardsSection />

    </>
  );
}
