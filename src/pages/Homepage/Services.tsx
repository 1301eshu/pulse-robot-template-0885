'use client';

import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

const services = [
  {
    title: 'Intelligent Marketing Automation  ',
    description: 'AI-triggered workflows. Always-on engagement. Zero manual chaos.',
    image: 'https://res.cloudinary.com/dar70fhfi/image/upload/v1752742515/Group_7523_wxks4p.png'
  },
  {
    title: 'AI-Led RevOps ',
    description: 'Predictive revenue engines, automated handoffs, and frictionless GTM motion.',
    image: 'https://res.cloudinary.com/dhbhumz3q/image/upload/v1752001712/Frame_2121453493_vza2js.png'
  },
  {
    title: 'Wholesome Salesforce Solutions ',
    description: 'From Sales Cloud to Service + Marketing—intelligence built in. ',
    image: 'https://res.cloudinary.com/dar70fhfi/image/upload/v1752742510/Group_7522_hpmz7w.png'
  },
  {
    title: 'Performance Marketing That Scales ',
    description: 'ML-powered targeting. Always-learning campaigns. Built for ROI.',
    image: 'https://res.cloudinary.com/dar70fhfi/image/upload/v1752742512/Group_7524_ms7p2i.png'
  },
  {
    title: 'AI-Powered Web & Mobile App Development ',
    description: 'Smart code. Seamless UX. Built to evolve as you grow. ',
    image: 'https://res.cloudinary.com/dar70fhfi/image/upload/v1752742514/Group_7526_kewopk.png'
  },
  {
    title: 'Analytics for Better Decisions ',
    description: 'Real-time dashboards, predictive insights, and no guesswork. ',
    image: 'https://res.cloudinary.com/dar70fhfi/image/upload/v1752742514/Group_7527_dxacmp.png'
  },
  {
    title: 'Creative Services with Intelligence Inside ',
    description: 'AI-enhanced content, UX, and design that actually converts.',
    image: 'https://res.cloudinary.com/dar70fhfi/image/upload/v1752742518/Group_7525_ungrgy.png'
  }
];

const DURATION = 8000;

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.animation = 'none';
      void progressRef.current.offsetWidth;
      progressRef.current.style.animation = `progressBar ${DURATION}ms linear forwards`;
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">What We Do </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 fade-in">
             Full-Stack Firepower. AI-Native Execution for Full-Funnel Growth 
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg fade-in">
           Our work spans strategy, code, creative, and AI-fueled ops—so your growth isn’t just good-looking, it’s scalable. 
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left column - vertically centered */}
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

                  <div
                    className={`text-sm text-gray-500 overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? 'opacity-100 mt-2 mb-3 max-h-[100px]' : 'opacity-0 h-0 max-h-0'
                    }`}
                  >
                    {service.description}
                  </div>

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

          {/* Right column - animated image */}
          <div className="hidden lg:flex items-center justify-center">
            <img
              key={activeIndex} // important for triggering animation on change
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              className="w-full max-w-xl h-full object-contain rounded-md grayscale fade-slide-in"
              style={{ filter: 'grayscale(0%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
