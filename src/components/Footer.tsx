import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaArrowUp } from "react-icons/fa6";
import Lottie from "lottie-react";
import GrowthNativesLogo from "@/assets/Growth-Natives-Logo.json";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      role="contentinfo"
      className="bg-[#06080C] text-white text-sm overflow-x-hidden"
    >
      {/* Top grid */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-8 lg:gap-x-12">
      {/* Logo + Contact */}
<div className="md:col-span-3 min-w-0">
  <div className="flex flex-col items-start space-y-4">
    <Lottie
      animationData={GrowthNativesLogo}
      className="h-8"
      loop={true}
      autoplay={true}
    />

    <div className="mb-4">
      <p className="font-semibold mb-1 text-base">Address</p>
      <p className="text-gray-300 leading-relaxed">
        8425 NE 22nd Place, Clyde Hill, WA-98004 USA
      </p>
    </div>

    <div className="mb-4">
      <p className="font-semibold mb-1 text-base">Sales</p>
      <a
        href="mailto:sales@growthnatives.com"
        className="hover:text-blue-500 transition-colors break-all"
      >
        sales@growthnatives.com
      </a>
    </div>

    <div className="mb-4">
      <p className="font-semibold mb-1 text-base">Careers</p>
      <a
        href="mailto:hr@growthnatives.com"
        className="hover:text-blue-500 transition-colors break-all"
      >
        hr@growthnatives.com
      </a>
    </div>
  </div>
</div>


        {/* Quick Links */}
        <nav aria-label="Quick Links" className="md:col-span-2 min-w-0">
          <p className="font-semibold mb-3.5 text-base">Quick Links</p>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/marketing-automation-services/" className="hover:text-blue-500 transition-colors">Marketing Automation</a></li>
            <li><a href="/salesforce-services/" className="hover:text-blue-500 transition-colors">Salesforce</a></li>
            <li><a href="/marketing-analytics-services/" className="hover:text-blue-500 transition-colors">Analytics as a Service</a></li>
            <li><a href="/digital-marketing-services/" className="hover:text-blue-500 transition-colors">Digital Marketing</a></li>
            <li><a href="/development-services/" className="hover:text-blue-500 transition-colors">Development Services</a></li>
            <li><a href="/ui-ux-design-agency/" className="hover:text-blue-500 transition-colors">Design Services</a></li>
            <li><a href="/strategic-services/" className="hover:text-blue-500 transition-colors">Strategic Services</a></li>
            <li><a href="/jira-professional-services/" className="hover:text-blue-500 transition-colors">Jira Professional Services</a></li>
            <li><a href="/content-marketing-services/" className="hover:text-blue-500 transition-colors">Content Marketing Services</a></li>
          </ul>
        </nav>

        {/* Learn */}
        <nav aria-label="Learn" className="md:col-span-2 min-w-0">
          <p className="font-semibold mb-3.5 text-base">Learn</p>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/blogs/" className="hover:text-blue-500 transition-colors">Blog</a></li>
            <li><a href="/case-studies/" className="hover:text-blue-500 transition-colors">Case Studies</a></li>
            <li><a href="/infographics/" className="hover:text-blue-500 transition-colors">Infographics</a></li>
            <li><a href="/downloadable-assets/" className="hover:text-blue-500 transition-colors">Downloadable Assets</a></li>
            <li><a href="/ebooks" className="hover:text-blue-500 transition-colors">E-Books</a></li>
            <li><a href="/growth-stream" className="hover:text-blue-500 transition-colors">Growth Stream</a></li>
            <li><a href="/press-release" className="hover:text-blue-500 transition-colors">Press Releases</a></li>
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Company" className="md:col-span-2 min-w-0">
          <p className="font-semibold mb-3.5 text-base">Company</p>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/about/" className="hover:text-blue-500 transition-colors">About Us</a></li>
            <li><a href="/meet-the-team/" className="hover:text-blue-500 transition-colors">Meet The Team</a></li>
            <li><a href="/careers/" className="hover:text-blue-500 transition-colors">Careers</a></li>
            <li><a href="/contact-us/" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
            <li><a href="/faqs/" className="hover:text-blue-500 transition-colors">FAQs</a></li>
          </ul>
        </nav>

        {/* Socials */}
        <div className="md:col-span-3 min-w-0">
          <p className="text-sm lg:text-xl  font-semibold mb-2 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
            #growingtogether
          </p>

          <p className="font-semibold mb-3.5 text-base">Follow Us</p>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/growthnatives/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/20 hover:border-white/40 rounded-full transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/growthnatives/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/20 hover:border-white/40 rounded-full transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              aria-label="YouTube"
              href="https://www.youtube.com/channel/UC1Zg8vMT43lQ9KdeLmy-U_w"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/20 hover:border-white/40 rounded-full transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              aria-label="X (Twitter)"
              href="https://x.com/GrowthNatives"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/20 hover:border-white/40 rounded-full transition-colors"
            >
              <FaXTwitter />
            </a>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <img
              src="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Logo%20Footer/ISO.webp"
              alt="ISO"
              className="h-12 w-auto max-w-full shrink-0"
              loading="lazy"
            />
            <img
              src="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Logo%20Footer/ISO%201.webp"
              alt="ISO"
              className="h-12 w-auto max-w-full shrink-0"
              loading="lazy"
            />
            <img
              src="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Logo%20Footer/GDPR%201.webp"
              alt="GDPR"
              className="h-12 w-auto max-w-full shrink-0"
              loading="lazy"
            />
            <img
              src="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Logo%20Footer/HiPPa.webp"
              alt="HIPAA"
              className="h-12 w-auto max-w-full shrink-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <hr className="border-white/10" />

      {/* Bottom bar */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 text-xs">
        {/* Policies */}
        <ul className="flex gap-x-4 gap-y-2 flex-wrap text-gray-400">
          <li><a href="/terms-conditions/" className="hover:text-blue-500 transition-colors">Terms &amp; Conditions</a></li>
          <li><a href="/privacy-policy/" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
          <li><a href="/cookie-policy/" className="hover:text-blue-500 transition-colors">Cookie Policy</a></li>
          <li><a href="/editorial-policy/" className="hover:text-blue-500 transition-colors">Editorial Policy</a></li>
        </ul>

        {/* DMCA + Copyright + Back to Top */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="https://www.dmca.com/Protection/Status.aspx?id=639f9bc7-120f-4893-ae6b-66cc4a2e041d&refurl=https%3a%2f%2fgrowthnatives.com%2f&rlo=true"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <img
              src="https://czsfjrcdignecnemjvfh.supabase.co/storage/v1/object/public/revamp-growth/Footer/DMCA.png"
              alt="DMCA.com Protected"
              className="h-6 w-auto max-w-full"
              loading="lazy"
            />
          </a>

          <span className="text-gray-400">Copyright © {year} All Rights Reserved</span>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white shadow-md ml-auto"
            aria-label="Back to Top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
