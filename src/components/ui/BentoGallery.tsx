import { Button } from "@/components/ui/button";
import { SITE_CTA } from "@/components/SITE_CTAs";

const BentoGallery = () => {
  const images = [
    "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/about%20us%20/Life%20at%20GN/besakhi%20(1).webp", // 0 - big
    "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/about%20us%20/Life%20at%20GN/cricket.webp", // 1
    "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/about%20us%20/Life%20at%20GN/environment.webp", // 2
    "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/about%20us%20/Life%20at%20GN/Women%20in%20tech%20(1).webp", // 3 - wide/tall
    "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/about%20us%20/Life%20at%20GN/holi.webp", // 4
    "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/about%20us%20/Life%20at%20GN/trip%201.webp"  // 5
    // removed 6th (7th index)
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Life at Growth Natives
          </h2>
          <SITE_CTA 
              variant="secondary" 
              text="Careers"
              href="/careers/"
              size="md" 
            />
          
        </div>

        {/* Final Grid */}
        <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[600px]">
          {/* Large Left Image */}
          <div className="col-span-2 row-span-2 bg-muted rounded-lg overflow-hidden">
            <img src={images[0]} alt="Team collaboration" className="w-full h-full object-cover" />
          </div>

          {/* Top-right Images */}
          <div className="col-span-1 row-span-1 bg-muted rounded-lg overflow-hidden">
            <img src={images[1]} alt="Office space" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1 bg-muted rounded-lg overflow-hidden">
            <img src={images[2]} alt="Team meeting" className="w-full h-full object-cover" />
          </div>

          {/* Middle-right Tall Wide Image */}
          <div className="col-span-2 row-span-2 bg-muted rounded-lg overflow-hidden">
            <img src={images[3]} alt="Work environment" className="w-full h-full object-cover" />
          </div>

          {/* Bottom Left */}
          <div className="col-span-1 row-span-1 bg-muted rounded-lg overflow-hidden">
            <img src={images[4]} alt="Team celebration" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1 bg-muted rounded-lg overflow-hidden">
            <img src={images[5]} alt="Office culture" className="w-full h-full object-cover" />
          </div>

          {/* ❌ Removed wide bottom image */}
        </div>
      </div>
    </section>
  );
};

export default BentoGallery;
