'use client';

import React, { useEffect } from 'react';

// Extend Window interface for Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default function InstagramSection() {
  useEffect(() => {
    // Load Instagram embed script
    if (typeof window !== 'undefined' && !(window as any).instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      };
    } else if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

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

        {/* Instagram Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Instagram Left */}
          <div className="flex flex-col items-start space-y-4 p-6">
            <p className="text-2xl font-bold">
              Follow Us on <span className="italic">Instagram</span>
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://res.cloudinary.com/dar70fhfi/image/upload/v1753429158/Instagram_logo_2022.svg_xoutog.webp"
                alt="Instagram Logo"
                className="w-8 h-8"
              />
              <span className="font-medium">@growthnatives</span>
              <a 
                href="https://www.instagram.com/growthnatives/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-[#007aff] hover:bg-[#005be0] text-white px-4 py-1 rounded-full text-sm transition-colors"
              >
                Follow
              </a>
            </div>
          </div>

          {/* Instagram Posts Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
            {/* Post 1 */}
            <div className="relative aspect-square rounded-xl overflow-hidden group shadow-lg bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 p-[2px]">
              <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                <blockquote 
                  className="instagram-media w-full h-full" 
                  data-instgrm-permalink="https://www.instagram.com/p/latest1/?utm_source=ig_embed&amp;utm_campaign=loading" 
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '3px',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: '0',
                    width: '100%'
                  }}
                >
                  <div style={{ padding: '16px' }}>
                    <a 
                      href="https://www.instagram.com/growthnatives/" 
                      style={{
                        background: '#FFFFFF',
                        lineHeight: '0',
                        padding: '0 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%'
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '50%',
                          flexGrow: '0',
                          height: '40px',
                          marginRight: '14px',
                          width: '40px'
                        }}></div>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          flexGrow: '1',
                          justifyContent: 'center'
                        }}>
                          <div style={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '4px',
                            flexGrow: '0',
                            height: '14px',
                            marginBottom: '6px',
                            width: '100px'
                          }}></div>
                          <div style={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '4px',
                            flexGrow: '0',
                            height: '14px',
                            width: '60px'
                          }}></div>
                        </div>
                      </div>
                      <div style={{ padding: '19% 0' }}></div>
                      <div style={{
                        display: 'block',
                        height: '50px',
                        margin: '0 auto 12px',
                        width: '50px'
                      }}>
                        <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1">
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                              <g>
                                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <p style={{
                        margin: '8px 0 0 0',
                        padding: '0 4px',
                        color: '#000',
                        fontFamily: 'Arial,sans-serif',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        lineHeight: '17px'
                      }}>
                        Latest from @growthnatives
                      </p>
                    </a>
                  </div>
                </blockquote>
              </div>
            </div>

            {/* Post 2 */}
            <div className="relative aspect-square rounded-xl overflow-hidden group shadow-lg">
              <iframe 
                src="https://www.instagram.com/growthnatives/embed/"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Post 3 */}
            <div className="relative aspect-square rounded-xl overflow-hidden group shadow-lg">
              <iframe 
                src="https://www.instagram.com/growthnatives/embed/"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Post 4 */}
            <div className="relative aspect-square rounded-xl overflow-hidden group shadow-lg">
              <iframe 
                src="https://www.instagram.com/growthnatives/embed/"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <a 
            href="https://www.instagram.com/growthnatives/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            View All Posts on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
