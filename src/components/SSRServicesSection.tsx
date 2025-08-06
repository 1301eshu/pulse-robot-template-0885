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

export default function SSRServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  // SSR-friendly client detection
  useEffect(() => {
    setIsClient(true);
    // Start animation only after component is mounted
    const timer = setTimeout(() => {
      setIsAnimationActive(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation logic - only runs on client
  useEffect(() => {
    if (!isClient || !isAnimationActive) return;

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
  }, [activeIndex, isClient, isAnimationActive]);

  const handleServiceClick = (index: number) => {
    if (!isClient) return;
    setActiveIndex(index);
  };

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

        /* SSR-friendly animations - only apply when client is ready */
        .client-ready .fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }

        .client-ready .fade-slide-in {
          animation: fadeSlideIn 0.6s ease-in-out;
        }
      `}</style>

      <div className={`max-w-7xl mx-auto px-6 ${isClient ? 'client-ready' : ''}`}>
        {/* Heading - Always visible for SSR */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">What We Do </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 fade-in">
             Full-Stack Firepower. AI-Native Execution for Full-Funnel Growth 
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg fade-in">
           Our work spans strategy, code, creative, and AI-fueled ops—so your growth isn't just good-looking, it's scalable. 
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left column - Service list - All content visible for SSR */}
          <div className="flex flex-col gap-3 justify-center h-full">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              const isFirstItem = index === 0;
              
              return (
                <div
                  key={index}
                  onClick={() => handleServiceClick(index)}
                  className={`relative group transition-all duration-300 rounded-xl cursor-pointer px-6 py-5 ${
                    isActive && isClient ? 'bg-[#F8FAFB]' : ''
                  }`}
                >
                  {/* Progress bar - only show when animation is active */}
                  {isActive && isAnimationActive && (
                    <div
                      ref={progressRef}
                      className="absolute top-0 left-0 h-[3px] bg-[#1fa4fc] rounded-full"
                      style={{ width: '0%' }}
                    />
                  )}

                  <h3
                    className={`text-base md:text-lg font-semibold ${
                      isActive && isClient 
                        ? 'text-gray-900' 
                        : isFirstItem 
                          ? 'text-gray-900' // First item always visible for SSR
                          : 'text-gray-400 group-hover:text-gray-700'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description - Always render content, control visibility with CSS */}
                  <div
                    className={`text-sm text-gray-500 mt-2 mb-3 ${
                      !isClient 
                        ? 'block' // Show all content for SSR
                        : isActive 
                          ? 'block opacity-100' 
                          : 'hidden opacity-0'
                    }`}
                  >
                    {service.description}
                  </div>

                  {/* Mobile image - Always render for SSR, show first item */}
                  <div className={`mt-3 block lg:hidden ${
                    !isClient 
                      ? (isFirstItem ? 'block' : 'sr-only') // Only first visible for SSR, others accessible to screen readers
                      : isActive 
                        ? 'block' 
                        : 'hidden'
                  }`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-contain rounded-md transition-all duration-500 grayscale-0"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right column - Images - All images rendered for SSR */}
          <div className="hidden lg:flex items-center justify-center relative">
            {services.map((service, index) => (
              <img
                key={index}
                src={service.image}
                alt={service.title}
                className={`absolute inset-0 w-full max-w-xl h-full object-contain rounded-md transition-all duration-500 ${
                  !isClient 
                    ? (index === 0 ? 'opacity-100 relative' : 'opacity-0 absolute') // First image visible for SSR
                    : index === activeIndex 
                      ? 'opacity-100 relative fade-slide-in' 
                      : 'opacity-0 absolute'
                }`}
                style={{ filter: 'grayscale(0%)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}