'use client';

import React from 'react';

export default function InstagramSection() {
  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      {/* added pr-6 on mobile only; reset at sm+ */}
      <div className="max-w-7xl mx-auto space-y-12 pr-6 sm:pr-0">
        {/* Text Content */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            The Fun Side of <span className="text-[#1DA1F2]">#GrowingTogether</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Sure, we optimize funnels and launch big ideas—but we also film fake drama, roast each other lovingly, and make Fridays feel like festivals.
          </p>
        </div>

        {/* Instagram Feed Mock */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Instagram Left */}
          <div className="flex flex-col items-start space-y-4 p-6 ">
            <p className="text-2xl font-bold">
              Follow Us on <span className="italic">Instagram</span>
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://res.cloudinary.com/dar70fhfi/image/upload/v1753429158/Instagram_logo_2022.svg_xoutog.webp"
                alt="Instagram Logo"
                className="w-8 h-8"
              />
              <span className="font-medium">Growthnatives</span>
              <button className="ml-4 bg-[#007aff] hover:bg-[#005be0] text-white px-4 py-1 rounded-full text-sm">
                Follow
              </button>
            </div>
          </div>

          {/* Instagram Video Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              'https://res.cloudinary.com/dar70fhfi/image/upload/v1753426593/img_3463_720_1_kgbeyx.png',
              'https://res.cloudinary.com/dar70fhfi/image/upload/v1753426593/img_3463_720_1_kgbeyx.png',
              'https://res.cloudinary.com/dar70fhfi/image/upload/v1753426593/img_3463_720_1_kgbeyx.png',
              'https://res.cloudinary.com/dar70fhfi/image/upload/v1753426593/img_3463_720_1_kgbeyx.png',
            ].map((src, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden group shadow-lg"
              >
                <img
                  src={src}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-4.586-2.663A1 1 0 009 9.33v5.34a1 1 0 001.166.995l4.586-2.663a1 1 0 000-1.734z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
