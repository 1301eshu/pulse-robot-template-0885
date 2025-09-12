'use client';

import React from 'react';

export default function GlobalStats() {
  return (
    <section className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Solid Color Box */}
    <div className="rounded-3xl bg-[#0A1017] p-10 text-white shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* World Map with Pins */}
        <div>
          <img
            src="https://res.cloudinary.com/dar70fhfi/image/upload/v1753429434/map-image_mx1deo.webp"
            alt="World Map"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { value: '300+', label: 'Customers Globally' },
            { value: '97%', label: 'Net Promoter Score' },
            { value: '300+', label: 'Team Members' },
            { value: '500+', label: 'Certifications' },
            { value: '500+', label: 'Projects Delivered' },
            { value: '99%', label: 'On-time Delivery' },
          ].map((stat, index) => (
            <div key={index} className="border-b border-white/20 pb-4">
              <p className="text-2xl font-bold text-green-400 mb-1">{stat.value}</p>
              <p className="text-sm text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
