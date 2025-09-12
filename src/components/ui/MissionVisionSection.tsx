import React from "react";

const MissionVisionSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column - Mission (text then image) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Our Vision 
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Fueling purposeful growth with AI, creativity, and heart-always{" "}
              <span className="text-blue-600 font-medium">#GrowingTogether</span>
            </p>
            <img
              src="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/about%20us/Our%20Mission.webp"
              alt="Team group photo - Our Mission"
              loading="lazy"
              className="w-full aspect-[16/10] object-cover rounded-2xl shadow-sm ring-1 ring-black/5"
            />
          </div>

          {/* Right column - Vision (image then text) */}
          <div className="flex flex-col gap-4">
            <img
              src="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/about%20us/DSC04250.webp"
              alt="Team at work - Our Vision"
              loading="lazy"
              className="w-full aspect-[16/10] object-cover rounded-2xl shadow-sm ring-1 ring-black/5"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Our Mission  
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We’re here to spark smarter, more meaningful growth-for our clients, our people, and our world. Powered by technology, driven by creativity, and grounded in empathy, we believe in building lasting momentum by always{" "}
              <span className="text-blue-600 font-medium">#GrowingTogether</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
