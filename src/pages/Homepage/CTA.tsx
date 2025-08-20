import { Sparkles } from "lucide-react";
import { SITE_CTA } from "@/components/SITE_CTAs";

export default function CTA() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="bg-[#F6FAFB] rounded-3xl px-8 py-12 md:py-16 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
        
        {/* Left side: Text */}
        <div className="flex-1 w-full relative">
          {/* Floating Badge inside box */}
          <div className="absolute -top-6 left-0 bg-blue-100/50 text-blue-600 border border-blue-200 rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 backdrop-blur z-10">
            <Sparkles className="w-4 h-4 text-blue-500" />
            Our Value Proposition
          </div>

          {/* Text content */}
          <div className="mt-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
              Let's Scale Your Brand{" "}
              <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Together!
              </span>
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Learn how you can take your marketing up a notch with our GrowthPod methodology—all in one AI-powered platform.
            </p>
            <SITE_CTA 
              variant="primary" 
              text="Get a Complimentary Consultation!" 
              href="/contact"
              size="lg"
            />
          </div>
        </div>

        {/* Right side: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751970376/0_rolr76.gif"
            alt="Workflow illustration"
            className="max-w-md w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}