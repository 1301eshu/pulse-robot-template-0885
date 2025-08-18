'use client';

import React from 'react';
export default function CustomerTestimonials() {
  return <section className="w-full flex justify-center py-14 px-4 bg-white">
      <div className="bg-[#11151e] w-full max-w-6xl mx-auto rounded-2xl flex flex-col md:flex-row items-center md:items-stretch shadow-lg px-6 py-12">
        {/* LEFT: Title */}
        <div className="md:w-[35%] flex flex-col justify-center items-center md:items-start py-6 pr-0 md:pr-10 text-center md:text-left">
          <h2 className="leading-tight font-light text-white mb-1 text-2xl">
            Trusted by <span className="font-bold">customers</span>
          </h2>
        </div>
        {/* DIVIDER */}
        <div className="hidden md:block w-px bg-white/15 my-2 mx-6"></div>
        {/* RIGHT: Testimonials Cloud */}
        <div className="md:w-[65%] flex flex-col items-end justify-center text-white relative py-2">
          <div className="w-full flex flex-col items-end">
            <span className="block text-[2.2rem] font-normal leading-none mb-2 text-right">
              “<span>Exceeded all expectations.</span>”
            </span>
            {/* Second Line */}
            <span className="block text-[2.1rem] font-extrabold text-blue-500 leading-none text-right">
              “Exceptional results every time.”
              <span className="text-white font-normal text-xl"> Incredible!</span>
            </span>
            {/* Third Line */}
            <span className="block text-lg font-normal text-white text-right">
              “Phenomenal!”
              <span className="text-[2.0rem] font-extrabold text-blue-500 ml-2 align-middle">Exceptionally Professional!</span>
            </span>
            {/* Fourth Line */}
            <span className="block text-xl font-semibold text-white text-right">
              “Efficient!”
              <span className="font-normal text-lg ml-2 align-middle">Reliable and trustworthy agency.</span>
            </span>
            {/* Fifth Line */}
            <span className="block text-lg font-bold text-white text-right">
              “Unmatched quality and service.”
              <span className="text-[1.4rem] font-extrabold text-blue-500 ml-2 align-middle">Highly recommended, top-notch.</span>
            </span>
          </div>
        </div>
      </div>
    </section>;
}