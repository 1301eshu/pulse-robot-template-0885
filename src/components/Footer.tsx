import { FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#06080C] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Contact */}
        <div>
          <img src="/growth-natives-logo.png" alt="Growth Natives Logo" className="h-10 mb-4" />
          <div className="mb-4">
            <p className="font-semibold">Address</p>
            <p>8425 NE 22nd Place, Clyde Hill, WA-98004 USA</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Sales</p>
            <p>sales@growthnatives.com</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Careers</p>
            <p>hr@growthnatives.com</p>
          </div>
          <div className="flex gap-2 mt-4">
            <img src="/cert-iso1.png" alt="ISO" className="h-6" />
            <img src="/cert-iso2.png" alt="ISO" className="h-6" />
            <img src="/cert-gdpr.png" alt="GDPR" className="h-6" />
            <img src="/cert-hipaa.png" alt="HIPAA" className="h-6" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-semibold mb-2">Quick Links</p>
          <ul className="space-y-1">
            <li>Marketing Automation</li>
            <li>Salesforce</li>
            <li>Digital Marketing</li>
            <li>Analytics</li>
            <li>Development</li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <p className="font-semibold mb-2">Learn</p>
          <ul className="space-y-1">
            <li>Blogs</li>
            <li>Infographics</li>
            <li>eBooks</li>
            <li>Case Studies</li>
            <li>Growth Stream</li>
            <li>Press Release</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="font-semibold mb-2">Company</p>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Meet the Team</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <p className="text-xl font-semibold mb-2 text-gradient bg-gradient-to-r from-blue-500 to-green-500 inline-block text-transparent bg-clip-text">#growingtogether</p>
          <p className="font-semibold mb-2">Follow Us</p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="p-2 border rounded-full"><FaInstagram /></a>
            <a href="#" className="p-2 border rounded-full"><FaLinkedinIn /></a>
            <a href="#" className="p-2 border rounded-full"><FaYoutube /></a>
            <a href="#" className="p-2 border rounded-full"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />

      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs">
        <div className="flex gap-4 flex-wrap text-gray-400">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Editorial Policy</a>
        </div>

        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <img src="/cert-dmca.png" alt="DMCA" className="h-5" />
          <span className="text-gray-400">Copyright © 2025 All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}