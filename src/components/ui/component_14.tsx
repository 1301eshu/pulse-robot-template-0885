'use client';

import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

const services = [
  {
    title: 'Frameworks & Platforms ',
    // description: 'Dummy',
    // cta: 'https://example.com/frameworks',
    image: 'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/1%20(25).png'
  },
  {
    title: 'Cloud & Infra ',
    // description: 'Dummy',
    // cta: 'https://example.com/cloud',
    image: 'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/2%20(24).png'
  },
  {
    title: 'eCommerce ',
    // description: 'Dummy',
    // cta: 'https://example.com/ecommerce',
    image: 'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/3%20(22).png'
  },
  {
    title: 'Dev Tools ',
    // description: 'Dummy',
    // cta: 'https://example.com/devtools',
    image: 'https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Development%20/4%20(20).png'
  }
];

const DURATION = 8000;

export default function SmartStackSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.animation = 'none';
      requestAnimationFrame(() => {
        if (progressRef.current) {
          progressRef.current.style.animation = `progressBar ${DURATION}ms linear forwards`;
        }
      });
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, DURATION);

    return () => clearTimeout(timeoutRef.current!);
  }, [activeIndex]);

  return (
    <section className="bg-white py-20">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }

        .fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }

        .fade-slide-in {
          animation: fadeSlideIn 0.6s ease-in-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
         {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">What We Do</span>
          </div> */}

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 fade-in">
            Our AI-Enhanced Platform Power Plays 
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg fade-in">
           We work across stacks, systems, and clouds-infused with the smartest tools in the game. 
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left column - Services List */}
          <div className="flex flex-col gap-3 justify-center h-full">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative group transition-all duration-300 rounded-xl cursor-pointer px-6 py-5 ${
                    isActive ? 'bg-[#F8FAFB]' : ''
                  }`}
                >
                  {isActive && (
                    <div
                      ref={progressRef}
                      className="absolute top-0 left-0 h-[3px] bg-[#1fa4fc] rounded-full"
                      style={{ width: '0%' }}
                    />
                  )}

                  <h3
                    className={`text-base md:text-lg font-semibold transition-colors ${
                      isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-700'
                    }`}
                  >
                    {service.title}
                  </h3>


                  {isActive && (
                    <div className="mt-3 block lg:hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto object-contain rounded-md transition-all duration-500 grayscale-0"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right column - Active Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-xl max-h-[400px] overflow-hidden rounded-md">
              <img
                key={activeIndex}
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                className="w-full h-full object-contain grayscale fade-slide-in"
                style={{ filter: 'grayscale(0%)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
