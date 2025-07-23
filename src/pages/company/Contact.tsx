import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Component Imports
import HubSpotForm from "@/components/HubSpotForm";
import Testimonials from "@/components/ui/component_4";
import LogoScroller from '@/components/ui/component_13';
import AwardsSection from '@/components/ui/component_12';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Contact Section with BG Image */}
      <section
        className="py-28 text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="section-wrapper grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left - Text */}
          <div className="space-y-5">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Choose Growth Natives as Your{" "}
               <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Trusted Partner for Success
              </span>
              
            </h2>
            <p className="text-lg text-gray-200 max-w-md">
              With strategic teams and cutting-edge tools, we drive measurable results and elevate your business to new heights.
            </p>
          </div>
          {/* Right - HubSpot Form */}
              <div className="w-full bg-white rounded-lg p-6 shadow-lg">
                <HubSpotForm 
                  portalId="7118070" 
                  formId="4f454e59-44e2-4616-b894-4775419d06bd"
                  className="hubspot-form custom"
                />
              </div>
        </div>
      </section>

      {/* Additional Sections */}
      <LogoScroller
        heading="AI-Led Results Trusted by Brands You Know"
        subtext="Just a few of the brands who trust us to run the show."
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

      <Testimonials
        title="Real Stories, Real AI Impact"
        description="It's not hype if it's backed by data and delivery."
      />

      <Footer />
    </div>
  );
};

export default Contact;