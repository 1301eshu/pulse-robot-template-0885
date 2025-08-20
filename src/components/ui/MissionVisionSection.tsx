import React from "react";
const MissionVisionSection = () => {
  return <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left side — Vision */}
       <div className="flex flex-col gap-6">
          <img src="https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Company/About%20us/Our%20Vision.webp" alt="Team Office" className="rounded-lg shadow-lg" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">Our Vision</h2>
            <p className="text-gray-700 text-base leading-relaxed">
            Fueling purposeful growth with AI, creativity, and heart—always {" "}
             <span className="text-blue-600 font-medium">#GrowingTogether</span>
            </p>
          </div>

        {/* Left side — Mission */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
          We’re here to spark smarter, more meaningful growth—for our clients, our people, and our world. Powered by technology, driven by creativity, and grounded in empathy, we believe in building lasting momentum by always{" "}
             <span className="text-blue-600 font-medium">#GrowingTogether</span>
          </p>
          <img src="https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Company/About%20us/Our%20Mission.webp" alt="Mission Team" className="rounded-lg shadow-lg" />
        </div>
        </div>
      </div>
    </section>;
};
export default MissionVisionSection;
