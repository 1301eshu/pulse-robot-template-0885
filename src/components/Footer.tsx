import { FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#06080C] text-white text-sm">
      {/* changed grid to 12 columns and widened horizontal gaps on md+ */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-12">
        {/* Logo and Contact (left) */}
        <div className="md:col-span-3">
          <img src="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Footer/Growthnatives.webp" alt="Growth Natives Logo" className="h-10 mb-4" />
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
            <img src="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Footer/iso-certified-logo.webp" alt="ISO" className="h-6" />
            <img src="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Footer/privacy-iso-certified-logo.webp" alt="ISO" className="h-6" />
            <img src="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Footer/Logo-gdpr.webp" alt="GDPR" className="h-6" />
            <img src="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Footer/hipaa-compliant.webp" alt="HIPAA" className="h-6" />
          </div>
        </div>

        {/* Quick Links (center group: part 1/3) */}
        <div className="md:col-span-2">
          <p className="font-semibold mb-2">Quick Links</p>
          <ul className="space-y-1">
            <li><a href="/marketing-automation-services/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Marketing Automation</a></li>
            <li><a href="/salesforce-services/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Salesforce</a></li>
            <li><a href="/marketing-analytics-services/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Marketing Analytics</a></li>
            <li><a href="/digital-marketing-services/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Digital Marketing</a></li>
            <li><a href="/development-services/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Development</a></li>
            <li><a href="/ui-ux-design-agency/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">UI/UX Design</a></li>
            <li><a href="/strategic-services/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Strategic Services</a></li>
            <li><a href="/jira-professional-services/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Jira Professional Services</a></li>
            <li><a href="/content-marketing-services/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Content Marketing Services</a></li>
          </ul>
        </div>

        {/* Learn (center group: part 2/3) */}
        <div className="md:col-span-2">
          <p className="font-semibold mb-2">Learn</p>
          <ul className="space-y-1">
            <li><a href="/blogs/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Blog</a></li>
            <li><a href="/case-studies/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Case Studies</a></li>
            <li><a href="/infographics/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Infographics</a></li>
            <li><a href="/downloadable-assets/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Downloadable Assets</a></li>
          </ul>
        </div>

        {/* Company (center group: part 3/3) */}
        <div className="md:col-span-2">
          <p className="font-semibold mb-2">Company</p>
          <ul className="space-y-1">
            <li><a href="/company/about/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">About Us</a></li>
            <li><a href="/company/team/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Meet The Team</a></li>
            <li><a href="/company/careers/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Careers</a></li>
            <li><a href="/company/contact/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Contact Us</a></li>
            <li><a href="/faqs/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Socials (right) */}
        <div className="md:col-span-3">
          <p className="text-xl font-semibold mb-2 text-gradient bg-gradient-to-r from-blue-500 to-green-500 inline-block text-transparent bg-clip-text">#growingtogether</p>
          <p className="font-semibold mb-2">Follow Us</p>
          <div className="flex gap-3 mt-2">
            <a href="https://www.instagram.com/growthnatives/" className="p-2 border rounded-full"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/growthnatives/" className="p-2 border rounded-full"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/channel/UC1Zg8vMT43lQ9KdeLmy-U_w" className="p-2 border rounded-full"><FaYoutube /></a>
            <a href="https://x.com/GrowthNatives" className="p-2 border rounded-full"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />

      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs">
        <div className="flex gap-4 flex-wrap text-gray-400">
          <li><a href="/resources/terms-conditions/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Terms & Conditions</a></li>
          <li><a href="/resources/privacy-policy/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Privacy Policy</a></li>
          <li><a href="/resources/cookie-policy/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Cookie Policy</a></li>
          <li><a href="/resources/editorial-policy/" className="text-white no-underline hover:text-blue-600 hover:underline hover:decoration-blue-600 transition">Editorial Policy</a></li>
        </div>

        <div className="flex items-center gap-2 mt-2 md:mt-0">
       {/*   <img src="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Footer/protected.webp" alt="DMCA" className="h-5" /> */}
          <span className="text-gray-400">Copyright © 2025 All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
