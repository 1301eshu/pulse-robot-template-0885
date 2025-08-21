'use client';

import React from 'react';

export default function InstagramSection() {
  const images = [
    "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Company/Instagram/1-Instgram-Image.webp",
    "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Company/Instagram/2-Instgram-Image.webp",
    "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Company/Instagram/3-Instgram-Image.webp.webp",
    "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Company/Instagram/4-Instgram-Image.webp.webp",
  ];

  const fallback =
    "https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/Company/Instagram/1-Instgram-Image.webp";

  return (
    <section className="bg-white text-gray-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            The Fun Side of <span className="text-[#1DA1F2]">#GrowingTogether</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-700">
            Sure, we optimize funnels and launch big ideas—but we also film fake drama,
            roast each other lovingly, and make Fridays feel like festivals.
          </p>
        </div>

        {/* Content */}
        {/* CHANGED: items-start -> items-center */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          {/* CHANGED: added justify-center h-full */}
          <div className="flex flex-col items-start justify-center h-full gap-4">
            <p className="text-xl sm:text-2xl font-bold">
              Follow Us on <span className="italic">Instagram</span>
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://res.cloudinary.com/dar70fhfi/image/upload/v1753429158/Instagram_logo_2022.svg_xoutog.webp"
                alt="Instagram Logo"
                className="w-8 h-8"
                loading="lazy"
              />
              <span className="font-medium">@growthnatives</span>
              <a
                href="https://www.instagram.com/growthnatives/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 bg-[#007aff] hover:bg-[#005be0] text-white px-4 py-1 rounded-full text-sm transition-colors"
              >
                Follow
              </a>
            </div>
          </div>

          {/* Right: clickable image grid */}
          <div className="grid grid-cols-2 gap-4 max-w-xl lg:ml-auto w-full">
            {images.map((src, i) => (
              <a
                key={i}
                href="https://www.instagram.com/growthnatives/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-gray-100 group"
              >
                <img
                  src={src}
                  alt={`Instagram preview ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (img.src !== fallback) img.src = fallback;
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
