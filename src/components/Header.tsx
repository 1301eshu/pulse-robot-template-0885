'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CTA } from "@/components/SITE_CTAs";
import {
  ChevronDown,
  Zap,
  Cloud,
  BarChart3,
  Megaphone,
  Code,
  TrendingUp,
  Palette,
  Settings,
  Lightbulb,
  BookOpenCheck,
  Building,
  Users,
  ArrowRight,
  Search,
  Menu,
  X,
  FileText,
  Bot,
  Video,
  BookOpen,
} from 'lucide-react';
import Lottie from "lottie-react";
import GrowthNativesLogo from "@/assets/Growth-Natives-Logo.json";
import { Stream } from 'stream';
export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('marketing-automation');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const openMenu = (menu: string) => setActiveMenu(menu);
  const closeMenu = () => setActiveMenu(null);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header role="banner" className="fixed inset-x-0 top-0 z-50">
        <div className="bg-[#0A101F]">
          <nav 
            className="relative section-wrapper"
            onMouseLeave={closeMenu}
          >
            <div className="flex items-center justify-between py-4 relative">
              {/* Logo */}
              <a href="/" className="flex-shrink-0 max-w-[100px]">
                {/* <img
                src="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/header/Logo_-_Gradient_f2jmus.webp"
                alt="GrowthNatives Logo"
                className="h-7 w-auto"
              /> */}
                <Lottie
                  animationData={GrowthNativesLogo}
                  className="w-full h-full"
                  loop={true}
                  autoplay={true}
                />
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6">
                {['services', 'labs', 'resources', 'company'].map((menu) => (
                  <button
                    key={menu}
                    className="flex items-center text-white hover:text-[#0A6CFF] transition-colors py-3 font-medium capitalize text-sm"
                    onMouseEnter={() => openMenu(menu)}
                  >
                    {menu === 'services'
                      ? 'Our Services'
                      : menu === 'labs'
                        ? 'AI Labs'
                        : menu.charAt(0).toUpperCase() + menu.slice(1)}
                    <ChevronDown className="ml-1 w-3 h-3" />
                  </button>
                ))}
              </div>

              {/* Right side - Desktop */}
              <div className="hidden lg:flex items-center space-x-3">
                {/* <button 
                onClick={toggleSearch}
                className="text-white hover:text-[#0A6CFF] transition-colors p-1.5 rounded-lg"
              >
                <Search className="w-4 h-4" />
              </button> */}
                <SITE_CTA
                  variant="secondary"
                  text="Contact Us"
                  href="/contact"
                  size="sm"
                />
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden flex items-center space-x-3">
                {/*    <button 
                onClick={toggleSearch}
                className="text-white hover:text-[#0A6CFF] transition-colors p-1.5 rounded-lg"
              >
                <Search className="w-4 h-4" />
              </button> */}
                <button
                  onClick={toggleMobileMenu}
                  className="text-white hover:text-[#0A6CFF] transition-colors p-1.5 rounded-lg"
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="abso lute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
              <div className="section-wrapper py-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for services, resources, or information..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 pl-10 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    autoFocus
                  />
             {/*     <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <button
                    onClick={toggleSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  > 
                    <X className="w-4 h-4" />
                  </button>  */}
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-[#0A101F] z-50 overflow-hidden">
                {/* Mobile Header */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700 bg-[#0A101F]">
                  <img src="https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/header/Logo_-_Gradient_f2jmus.webp" alt="Growth Natives" className="h-8" />
                  <button
                    onClick={toggleMobileMenu}
                    className="text-white hover:text-[#0A6CFF] transition-colors p-1.5 rounded-lg"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-auto" />
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="px-4 py-6 space-y-3 h-full overflow-y-auto pb-20">
                  <MobileMenuItem
                    title="Our Services"
                    items={[
                    { name: 'Marketing Automation', url: '/marketing-automation-services/', subItems: [
                      { name: 'HubSpot', url: '/marketing-automation-services/hubspot/' },
                      { name: 'Marketo', url: '/marketing-automation-services/marketo/' },
                      { name: 'Salesforce Pardot', url: '/marketing-automation-services/pardot/' },
                      { name: 'Salesforce Marketing Cloud', url: '/marketing-automation-services/salesforce-marketing-cloud/' },
                      { name: 'Eloqua', url: '/marketing-automation-services/eloqua/' }
                    ]},
                    { name: 'Salesforce', url: '/salesforce-services/', subItems: [
                          { name: 'Salesforce AI', url: '/salesforce-services/salesforce-ai-enablement/' },
                          { name: 'Sales Cloud', url: '/salesforce-services/sales-cloud/' },
                          { name: 'Service Cloud', url: '/salesforce-services/service-cloud/' },
                          { name: 'Commerce Cloud', url: '/salesforce-services/commerce-cloud/' },
                          { name: 'Experience Cloud', url: '/salesforce-services/experience-cloud/' },
                          { name: 'Salesforce Einstein', url: '/salesforce-services/einstein-analytics/' },
                          { name: 'Salesforce CPQ', url: '/salesforce-services/cpq/' },
                          { name: 'Marketing Cloud', url: '/salesforce-services/marketing-cloud/' },
                          //  { name: 'Conga', url: '/services/conga' },
                          //  { name: 'ServiceMax', url: '/services/servicemax' },
                          //  { name: 'Salesforce Nonprofit Cloud', url: '/services/salesforce-nonprofit-cloud' }
                    ]},
                    { name: 'Analytics as a Service', url: '/marketing-analytics-services/', subItems: [
                          { name: 'Web Analytics', url: '/marketing-analytics-services/web-analytics/' },
                          { name: 'Advanced Data Visualization', url: '/marketing-analytics-services/advanced-data-visualization' },
                          { name: 'Marketing Analytics', url: '/marketing-analytics-services/marketing-analytics' },
                          { name: 'Self Service Bi Data Democratization', url: '/marketing-analytics-services/self-service-bi-data-democratization' },
                          { name: 'Real Time Ai Powered Analytics', url: '/marketing-analytics-services/real-time-ai-powered-analytics' },
                          //  { name: 'GA4 Migration', url: '/services/ga4-migration' },
                          //   { name: 'CRO', url: '/digital-marketing-services/cro' },
                          { name: 'Data Warehousing & ETL', url: '/marketing-analytics-services/data-warehousing-etl' }
                    ]},
                    { name: 'Digital Marketing', url: '/digital-marketing-services', subItems: [
                          { name: 'Paid Ads', url: '/digital-marketing-services/paid-ads' },
                          { name: 'Social Media Marketing', url: '/digital-marketing-services/social-media' },
                          { name: 'SEO', url: '/digital-marketing-services/seo/' },
                          { name: 'ORM', url: '/digital-marketing-services/orm-services' },
                          { name: 'ABM', url: '/digital-marketing-services/account-based-marketing-abm' },
                          { name: 'eCommerce Strategy', url: '/digital-marketing-services/ecommerce-marketing' },
                          { name: 'CRO', url: '/digital-marketing-services/cro' },
                          { name: 'Pay-Per-Click (PPC) Advertising ', url: '/digital-marketing-services/ppc' }
                    ]},
                    { name: 'Development Services', url: '/development-services/', subItems: [
                          { name: 'Mobile App Development', url: '/development-services/mobile-app-development' },
                          { name: 'Web Development', url: '/development-services/web-development' },
                          { name: 'Testing & QA', url: '/development-services/testing-qa' },
                          //  { name: 'Web Development', url: '/development-services/web-development/' },
                          // { name: 'Mobile App Development', url: '/development-services/mobile-app-development/' },
                          //  { name: 'Testing & QA', url: '/development-services/testing-qa/' },
                          { name: 'DevOps', url: '/development-services/devops/' },
                          { name: 'eCommerce Development', url: '/development-services/ecommerce-development/' }
                    ]},
                    { name: 'Design Services', url: '/ui-ux-design-agency', subItems: [
                          { name: 'UI/UX Design', url: '/ui-ux-design-agency/website-designing-services' },
                          { name: 'Motion Graphics', url: '/ui-ux-design-agency/motion-graphics' },
                          { name: 'Social Media Design', url: '/ui-ux-design-agency/social-media' },
                          { name: 'Mobile Apps', url: '/ui-ux-design-agency/mobile-apps' },
                          { name: 'Marketing & Sales Collateral Design', url: '/ui-ux-design-agency/marketing-sales-collateral-design' },
                          { name: 'Brand & Campaign Design', url: '/ui-ux-design-agency/brand-campaign' }

                    ]},
                    { name: 'Strategic Services', url: '/strategic-services/', subItems: [
                          { name: 'Growth Marketing Pod', url: '/strategic-services/growth-marketing-pod' },
                          { name: 'Enterprise Planning', url: '/strategic-services/enterprise-planning' },
                          { name: 'Strategic Opportunity Assessment', url: '/strategic-services/strategic-opportunity-assessment' },
                          { name: 'Demand Generation Strategy', url: '/strategic-services/demand-generation-strategy' },
                          { name: 'AI-Optimized Enterprise Resource Planning', url: '/strategic-services/ai-optimized-enterprise-resource-planning' }
                    ]},
                    { name: 'Jira Professional Services', url: '/jira-professional-services/', subItems: [
                          { name: 'Jira Strategy & Implementation', url: '/jira-professional-services/jira-strategy-implementation' },
                          { name: 'Jira Migration & Configuration', url: '/jira-professional-services/jira-migration-configuration' },
                          { name: 'Jira Automation & Workflow', url: '/jira-professional-services/jira-automation-workflow' },
                          { name: 'Jira Support & Maintenance', url: '/jira-professional-services/jira-support-maintenance' }
                    ]},
                    { name: 'Content Marketing Services', url: '/content-marketing-services/', subItems: [
                          { name: 'Website Copywriting', url: '/content-marketing-services/website-copywriting' },
                          { name: 'Email Lifecycle Copywriting', url: '/content-marketing-services/email-lifecycle-copywriting' },
                          { name: 'Social Media Ad Copywriting', url: '/content-marketing-services/social-media-ad-copywriting' },
                          { name: 'Content Strategy Planning', url: '/content-marketing-services/content-strategy-planning' },
                          { name: 'Blog & Long-form Content', url: '/content-marketing-services/blog-longform-content' },
                          { name: 'Thought Leadership + Ghostwriting ', url: '/content-marketing-services/ghostwriting' }
                    ]}
                    ]}
                  />
                  <MobileMenuItem
                    title="AI Labs"
                    items={[
                      { name: 'DiGGrowth', url: 'https://diggrowth.com/', external: true },
                      { name: 'NetworkON', url: 'https://networkon.io/', external: true },
                      { name: 'Pixel Dino', url: 'https://www.pixeldino.com/', external: true }
                    ]}
                  />
                  <MobileMenuItem
                    title="Resources"
                    items={[
                      { name: 'Blog Posts', url: '/blogs' },
                      { name: 'Case Studies', url: '/case-studies' },
                   // { name: 'Whitepapers', url: '/resources/whitepapers' },
                      { name: 'Downloadable Assets', url: '/downloadable-assets' },
                   // { name: 'Documentation', url: '/resources/documentation' },
                   // { name: 'Support', url: '/resources/support' },
                      { name: 'Infographics', url: '/infographics' },
                   { name: 'E-Books', url: '/ebooks' },
                   { name: 'Growth Stream', url: '/growth-stream' },
                   { name: 'Press Releases', url: '/press-release' },
                   // { name: 'ROI Calculator', url: '/resources/roi-calculator' }
                      { name: 'AI Visibility Checker', url: 'https://aioverview.growthnatives.com/ai-overview-visibility-checker/' },
                    ]}
                  />
                  <MobileMenuItem
                    title="Company"
                    items={[
                      { name: 'About Us', url: '/about' },
                      { name: 'Leadership Team', url: '/meet-the-team/' },
                      { name: 'Careers', url: '/careers' },
                      { name: 'Contact', url: '/contact' },
                      // { name: 'Locations', url: '/company/locations' },
                      //{ name: 'Press', url: '/company/press' }
                    ]}
                  />
                  <div onClick={() => setIsMobileMenuOpen(false)}>
                    <SITE_CTA
                      variant="secondary"
                      text="Contact Us"
                      href="/contact"
                      size="sm"
                      className="w-full justify-center"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Mega Menu positioned outside the container but anchored to it */}
            {!isMobileMenuOpen && (
              <MegaMenu open={!!activeMenu}>
                {activeMenu && renderMenuContent(activeMenu, activeCategory, setActiveCategory)}
              </MegaMenu>
            )}
          </nav>
        </div>
      </header>

      {/* 
        OVERLAY CONTROL: 
        - Change bg-black/50 to adjust overlay color and opacity
        - Modify backdrop-blur-sm to control blur effect
        - Adjust z-30 to change overlay z-index (must be below navbar but above content)
      */}
      {(activeMenu && !isMobileMenuOpen) && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

    </>
  );
}

// -------- MegaMenu Wrapper -------- //
function MegaMenu({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`
         absolute left-0 top-full w-full z-40 bg-white shadow-xl border-t border-gray-100 rounded-b-lg
        transition-all duration-300 ease-out
        ${open
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'}
      `}
    >
      <div className="section-wrapper py-5">{children}</div>
    </div>
  );
}

// -------- Menu Content Based on Key -------- //
function renderMenuContent(menu: string | null, activeCategory: string, setActiveCategory: React.Dispatch<React.SetStateAction<string>>) {
  if (menu === 'services') {
    return (
      <>
        <div className="grid grid-cols-[280px_1fr] gap-6">
          {/* Left Sidebar - Categories */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Explore Categories</h3>

            {/* SPACING CONTROL: The space-y-2 class controls 8px spacing between categories */}
            <div className="space-y-2">
              <CategoryMenuItem
                icon={<Zap className="w-3 h-3" />}
                iconBg="bg-yellow-100"
                iconColor="text-yellow-600"
                title="Marketing Automation"
                subtitle="CRM & workflow automation"
                categoryKey="marketing-automation"
                isActive={activeCategory === 'marketing-automation'}
                setActiveCategory={setActiveCategory}
                currentActiveCategory={activeCategory}
              />

              <CategoryMenuItem
                icon={<Cloud className="w-3 h-3" />}
                iconBg="bg-blue-100"
                iconColor="text-blue-600"
                title="Salesforce"
                subtitle="Custom solutions"
                categoryKey="salesforce"
                isActive={activeCategory === 'salesforce'}
                setActiveCategory={setActiveCategory}
                currentActiveCategory={activeCategory}
              />

              <CategoryMenuItem
                icon={<BarChart3 className="w-3 h-3" />}
                iconBg="bg-green-100"
                iconColor="text-green-600"
                title="Analytics as a Service"
                subtitle="Data-driven insights"
                categoryKey="analytics-as-a-service"
                isActive={activeCategory === 'analytics-as-a-service'}
                setActiveCategory={setActiveCategory}
                currentActiveCategory={activeCategory}
              />

              <CategoryMenuItem
                icon={<Megaphone className="w-3 h-3" />}
                iconBg="bg-red-100"
                iconColor="text-red-600"
                title="Digital Marketing"
                subtitle="Omnichannel growth"
                categoryKey="digital-marketing"
                isActive={activeCategory === 'digital-marketing'}
                setActiveCategory={setActiveCategory}
                currentActiveCategory={activeCategory}
              />

              <CategoryMenuItem
                icon={<Code className="w-3 h-3" />}
                iconBg="bg-gray-100"
                iconColor="text-gray-600"
                title="Development Services"
                subtitle="Robust development"
                categoryKey="development-services"
                isActive={activeCategory === 'development-services'}
                setActiveCategory={setActiveCategory}
                currentActiveCategory={activeCategory}
              />

              <CategoryMenuItem
                icon={<Palette className="w-3 h-3" />}
                iconBg="bg-purple-100"
                iconColor="text-purple-600"
                title="Design Services"
                subtitle="World-class designs"
                categoryKey="design-services"
                isActive={activeCategory === 'design-services'}
                setActiveCategory={setActiveCategory}
                currentActiveCategory={activeCategory}
              />

              <CategoryMenuItem
                icon={<TrendingUp className="w-3 h-3" />}
                iconBg="bg-orange-100"
                iconColor="text-orange-600"
                title="Strategic Services"
                subtitle="Business transformation"
                categoryKey="strategic-services"
                isActive={activeCategory === 'strategic-services'}
                setActiveCategory={setActiveCategory}
                currentActiveCategory={activeCategory}
              />

              <CategoryMenuItem
                icon={<Settings className="w-3 h-3" />}
                iconBg="bg-indigo-100"
                iconColor="text-indigo-600"
                title="Jira Professional Services"
                subtitle="Complete Jira implementation & support"
                categoryKey="jira-services"
                isActive={activeCategory === 'jira-services'}
                setActiveCategory={setActiveCategory}
                currentActiveCategory={activeCategory}
              />

              <CategoryMenuItem
                icon={<FileText className="w-3 h-3" />}
                iconBg="bg-teal-100"
                iconColor="text-teal-600"
                title="Content Marketing Services"
                subtitle="Strategic content & copywriting"
                categoryKey="content-marketing-services"
                isActive={activeCategory === 'content-marketing-services'}
                setActiveCategory={setActiveCategory}
                currentActiveCategory={activeCategory}
              />
            </div>
          </div>

          {/* Right Content - Service Details */}
          <div className="pl-6 border-l border-gray-200">
            <ServiceContent activeCategory={activeCategory} />
          </div>
        </div>


      </>
    );
  }

  if (menu === 'labs') {
    return (
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <LabCard
            icon={<Lightbulb className="w-4 h-4 text-purple-600" />}
            bg="bg-purple-100"
            title="DiGGrowth"
            desc="A no-code marketing analytics platform"
            href="https://diggrowth.com/"
            external={true}
          />
          <LabCard
            icon={<Zap className="w-4 h-4 text-green-600" />}
            bg="bg-green-100"
            title="NetworkON"
            desc="AI-driven logistics optimization"
            href="https://networkon.io/"
            external={true}
          />
          <LabCard
            icon={<Palette className="w-4 h-4 text-orange-600" />}
            bg="bg-orange-100"
            title="Pixel Dino"
            desc="Video production & design studio"
            href="https://www.pixeldino.com/"
            external={true}
          />
          {/* Hidden AI Chatbot for future use */}
          {/* <LabCard
          icon={<Users className="w-4 h-4 text-blue-600" />}
          bg="bg-blue-100"
          title="AI Chatbot"
          desc="AI Conversations That Convert"
          to="/growth-labs/ai-chatbot"
        /> */}
        </div>

        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <img
            src="https://wwyaefeuznhbcaewxvhp.supabase.co/storage/v1/object/public/revamp-ai/Mega%20Menu/PR%20Post%20-1.webp"
            alt="Innovation Showcase"
            className="w-full max-w-sm h-40 object-cover rounded-xl border border-gray-200"
          />
          <SITE_CTA
            variant="secondary"
            text="Read More"
            href="/blogs/press-release/growth-natives-ranks-inc-5000-2025"
            size="md"
            className="text-white"
            icon
          />
        </div>

        {/* Hidden bottom CTA for future use */}
        {/* <div className="mt-6 pt-4 border-t border-gray-100 col-span-2">
        <Link
          to="/growth-labs"
          className="flex items-center justify-between w-full bg-gradient-to-br from-[#051946] to-[#0A3E5E] text-white px-4 py-3 rounded-lg hover:from-[#041739] hover:to-[#083550] transition-all font-medium group"
        >
          <div className="flex flex-col">
            <span className="text-base font-semibold">Explore AI Labs</span>
            <span className="text-xs opacity-90">Innovation Hub for cutting-edge solutions</span>
          </div>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div> */}
      </div>
    );
  }

  if (menu === 'resources') {
    return (
      <>
        <div className="grid grid-cols-2 gap-8">
          <ResCard
            icon={<BookOpenCheck className="w-4 h-4 text-blue-600" />}
            bg="bg-blue-100"
            title="Blog Posts"
            desc="Stay informed with our insights"
            to="/blogs"
          />
          <ResCard
            icon={<BarChart3 className="w-4 h-4 text-green-600" />}
            bg="bg-green-100"
            title="Case Studies"
            desc="Success stories showcasing our work"
            to="/case-studies"
          />
          <ResCard
            icon={<Palette className="w-4 h-4 text-purple-600" />}
            bg="bg-purple-100"
            title="Infographics"
            desc="Engaging visual content"
            to="/infographics"
          />
          <ResCard
            icon={<Settings className="w-4 h-4 text-orange-600" />}
            bg="bg-orange-100"
            title="Downloadable Assets"
            desc="Useful checklists & downloads"
            to="/downloadable-assets"
          />

          <ResCard
            icon={<BookOpen className="w-4 h-4 text-teal-600" />}
            bg="bg-teal-100"
            title="Ebooks"
            desc="Get detailed information on various industry trends"
            to="/ebooks"
          />

          <ResCard
            icon={<Video className="w-4 h-4 text-indigo-600" />}
            bg="bg-indigo-100"
            title="Growth Stream"
            desc="Join our live growth chat sessions, where industry experts answer your burning questions."
            to="/growth-stream"
          />

          <ResCard
            icon={<FileText className="w-4 h-4 text-pink-600" />}
            bg="bg-pink-100"
            title="Press Release"
            desc="From launches to updates, stay informed about our journey and innovations."
            to="/press-release"
          />
          <ResCard
            icon={<Bot className="w-4 h-4 text-red-600" />}
            bg="bg-red-100"
            title=" AI Visibility Checker"
            desc="Monitor your brand’s presence in AI Overviews "
            to="https://aioverview.growthnatives.com/ai-overview-visibility-checker/"
            target="_blank"
          />
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <a
            href="/resources"
            className="flex items-center justify-between w-full bg-gradient-to-br from-[#051946] to-[#0A3E5E] text-white px-4 py-3 rounded-lg hover:from-[#041739] hover:to-[#083550] transition-all font-medium group"
          >
            <div className="flex flex-col">
              <span className="text-base font-semibold">Explore All Resources</span>
              <span className="text-xs opacity-90">Access insights, guides, and tools</span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </>
    );
  }

  if (menu === 'company') {
    return (
      <>
        <div className="grid grid-cols-2 gap-8">
          <CoCard
            icon={<Building className="w-4 h-4 text-blue-600" />}
            bg="bg-blue-100"
            title="About Us"
            desc="Learn our story and mission"
            to="/about"
          />
          <CoCard
            icon={<Users className="w-4 h-4 text-purple-600" />}
            bg="bg-purple-100"
            title="Leadership Team"
            desc="Meet the people behind the scenes"
            to="/meet-the-team/"
          />
          <CoCard
            icon={<TrendingUp className="w-4 h-4 text-green-600" />}
            bg="bg-green-100"
            title="Careers"
            desc="Get in touch"
            to="/careers/"
          />
          <CoCard
            icon={<ArrowRight className="w-4 h-4 text-orange-600" />}
            bg="bg-orange-100"
            title="Contact"
            desc="Get in touch"
            to="/contact"
          />
        </div>

        {/* <div className="mt-6 pt-4 border-t border-gray-100">
          <a
            href="/company"
            className="flex items-center justify-between w-full bg-gradient-to-br from-[#051946] to-[#0A3E5E] text-white px-4 py-3 rounded-lg hover:from-[#041739] hover:to-[#083550] transition-all font-medium group"
          >
            <div className="flex flex-col">
              <span className="text-base font-semibold">Learn More About Us</span>
              <span className="text-xs opacity-90">Discover our story and values</span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div> */}
      </>
    );
  }

  return null;
}

// Reusable components
function Category({ icon, bg, title, links }: { icon: React.ReactNode; bg: string; title: string; links: string[] }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-6 h-6 ${bg} rounded-lg flex items-center justify-center`}>{icon}</div>
        <h3 className="font-medium text-blue-600 text-sm">{title}</h3>
      </div>
      <div className="space-y-1">
        {links.map((item) => (
          <a
            key={item}
            href={`/${title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="block text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

function LabCard({ icon, bg, title, desc, to, href, external = false }: any) {
  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-l-4 hover:border-blue-600 transition-all duration-300 group"
      >
        <div className={`w-6 h-6 ${bg} rounded-lg flex items-center justify-center transition-colors`}>{icon}</div>
        <div>
          <h3 className="font-medium text-gray-900 group-hover:text-blue-600 mb-1 transition-colors text-sm">{title}</h3>
          <p className="text-xs text-gray-600 transition-colors">{desc}</p>
        </div>
      </a>
    );
  }

  return (
    <a href={to} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-l-4 hover:border-blue-600 transition-all duration-300 group">
      <div className={`w-6 h-6 ${bg} rounded-lg flex items-center justify-center transition-colors`}>{icon}</div>
      <div>
        <h3 className="font-medium text-gray-900 group-hover:text-blue-600 mb-1 transition-colors text-sm">{title}</h3>
        <p className="text-xs text-gray-600 transition-colors">{desc}</p>
      </div>
    </a>
  );
}

function ResCard({ icon, bg, title, desc, to,target }: any) {
  return (
    <a href={to} target={target} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-l-4 hover:border-blue-600 transition-all duration-300 group">
      <div className={`w-6 h-6 ${bg} rounded-lg flex items-center justify-center transition-colors`}>{icon}</div>
      <div>
        <h3 className="font-medium text-gray-900 group-hover:text-blue-600 mb-1 transition-colors text-sm">{title}</h3>
        <p className="text-xs text-gray-600 transition-colors">{desc}</p>
      </div>
    </a>
  );
}

function CoCard({ icon, bg, title, desc, to }: any) {
  return (
    <a href={to} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-l-4 hover:border-blue-600 transition-all duration-300 group">
      <div className={`w-6 h-6 ${bg} rounded-lg flex items-center justify-center transition-colors`}>{icon}</div>
      <div>
        <h3 className="font-medium text-gray-900 group-hover:text-blue-600 mb-1 transition-colors text-sm">{title}</h3>
        <p className="text-xs text-gray-600 transition-colors">{desc}</p>
      </div>
    </a>
  );
}

// New components for services mega menu
function CategoryMenuItem({ icon, iconBg, iconColor, title, subtitle, categoryKey, isActive, setActiveCategory, currentActiveCategory }: {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  categoryKey: string;
  isActive: boolean;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  currentActiveCategory: string;
}) {
  const getLink = () => {
    const categoryRoutes: { [key: string]: string } = {
      'marketing-automation': '/marketing-automation-services',
      'salesforce': '/salesforce-services',
      'analytics-as-a-service': '/marketing-analytics-services',
      'digital-marketing': '/digital-marketing-services',
      'development-services': '/development-services',
      'design-services': '/ui-ux-design-agency',
      'strategic-services': '/strategic-services',
      'jira-services': '/jira-professional-services',
      'content-marketing-services': '/content-marketing-services/'
    };
    return categoryRoutes[categoryKey] || '/services';
  };

  return (
    <a
      href={getLink()}
      className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 cursor-pointer ${
        isActive 
          ? 'bg-blue-50 border-l-4 border-blue-600 opacity-100'
          : 'hover:bg-blue-50 hover:border-l-4 hover:border-blue-600'
      } ${
        currentActiveCategory !== categoryKey ? 'opacity-50' : 'opacity-100'
        }`}
      onMouseEnter={() => setActiveCategory(categoryKey)}
    >
      <div className={`w-6 h-6 ${iconBg} rounded-lg flex items-center justify-center`}>
        <div className={iconColor}>{icon}</div>
      </div>
      <div>
        <h4 className={`font-medium ${isActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'} transition-colors text-sm`}>{title}</h4>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </a>
  );
}

function ServiceContent({ activeCategory }: { activeCategory: string }) {
  const serviceData = {
    'marketing-automation': {
      title: 'Marketing Automation',
      services: ['HubSpot', 'Marketo', 'Salesforce Pardot', 'Salesforce Marketing Cloud', 'Eloqua']
    },
    'salesforce': {
      title: 'Salesforce',
      services: ['Salesforce AI', 'Service Cloud', 'Sales Cloud', 'Marketing Cloud', 'Commerce Cloud', 'Experience Cloud', 'Salesforce Einstein', 'Salesforce CPQ']
    },
    'analytics-as-a-service': {
      title: 'Analytics as a Service',
      services: ['Web Analytics', 'Advanced Data Visualization', 'Marketing Analytics',  'Data Warehousing & ETL', 'Self-Service BI & Data Democratization', 'Real-Time & AI-Powered Analytics' ]
    },
    'digital-marketing': {
      title: 'Digital Marketing',
      services: ['Paid Ads', 'SEO', 'ORM', 'ABM',  'CRO', 'eCommerce Strategy', 'Pay-Per-Click (PPC) Advertising', 'Social Media Marketing' ]
    },
    'development-services': {
      title: 'Development Services',
      services: ['Mobile App Development', 'Web Development', 'Testing & QA', 'DevOps', 'eCommerce Development']
    },
    'design-services': {
      title: 'Design Services',
      services: ['UI/UX',  'Motion Graphics', 'Social Media', 'Mobile Apps', 'Marketing & Sales Collateral Design',  'Brand & Campaign Design']
    },
    'strategic-services': {
      title: 'Strategic Services',
      services: ['Growth Marketing Pod', 'Enterprise Planning',  'Strategic Opportunity Assessment', 'Demand Generation Strategy', 'AI-Optimized Enterprise Resource Planning']
    },
    'jira-services': {
      title: 'Jira Professional Services',
      services: ['Jira Strategy & Implementation', 'Jira Migration & Configuration', 'Jira Automation & Workflow Optimization', 'Jira Support & Maintenance']
    },
    'content-marketing-services': {
      title: 'Content Marketing Services',
      services: [
        'Website Copywriting',
        'Email Lifecycle Copywriting',
        'Social Media Ad Copywriting',
        'Content Strategy Planning',
        'Blog & Long-form Content',
        'Thought Leadership + Ghostwriting'
      ]
    }
  };

  const currentData = serviceData[activeCategory as keyof typeof serviceData];

  return (
    <>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{currentData.title}</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
        {currentData.services.map((service) => (
          <ServiceLink key={service} title={service} />
        ))}
      </div>
    </>
  );
}

function ServiceLink({ title }: { title: string }) {
  // Custom URL mappings for specific services
  const urlMappings: { [key: string]: string } = {
    'Marketing Automation': '/marketing-automation-services/',
    // Development Services
    'Web Development': '/development-services/web-development/',
    'Mobile App Development': '/development-services/mobile-app-development/',
    'Testing & QA': '/development-services/testing-qa/',
    'DevOps': '/development-services/devops/',
    'eCommerce Development': '/development-services/ecommerce-development',
    // Marketing Automation new URLs
    'HubSpot': '/marketing-automation-services/hubspot/',
    'Marketo': '/marketing-automation-services/marketo/',
    'Salesforce Pardot': '/marketing-automation-services/pardot/',
    'Salesforce Marketing Cloud': '/marketing-automation-services/salesforce-marketing-cloud/',
    'Eloqua': '/marketing-automation-services/eloqua/',
    // Salesforce and other mappings (UPDATED)
    'Salesforce': '/salesforce-services/',
    'Salesforce AI': '/salesforce-services/salesforce-ai-enablement/',
    'Service Cloud': '/salesforce-services/service-cloud/',
    'Sales Cloud': '/salesforce-services/sales-cloud/',
    'Marketing Cloud': '/salesforce-services/marketing-cloud/',
    'Commerce Cloud': '/salesforce-services/commerce-cloud/',
    'Experience Cloud': '/salesforce-services/experience-cloud/',
    'Salesforce Einstein': '/salesforce-services/einstein-analytics/',
    'Salesforce CPQ': '/salesforce-services/cpq/',
    'Conga': '/salesforce-services/conga',
    'ServiceMax': '/salesforce-services/servicemax',
    'Salesforce Nonprofit Cloud': '/salesforce-services/nonprofit-cloud',
    'Data Warehousing & ETL': '/marketing-analytics-services/data-warehousing-etl',
    'Self-Service BI & Data Democratization': '/marketing-analytics-services/self-service-bi-data-democratization',
    'Real-Time & AI-Powered Analytics': '/marketing-analytics-services/real-time-ai-powered-analytics',
    // DIGITAL MARKETING & ANALYTICS - NEW URLS
    'Pay-Per-Click (PPC) Advertising': '/digital-marketing-services/ppc',
    'Paid Ads': '/digital-marketing-services/paid-ads',
    'CRO': '/digital-marketing-services/cro',
    'Social Media Marketing': '/digital-marketing-services/social-media',
    'ORM': '/digital-marketing-services/orm-services',
    'ABM': '/digital-marketing-services/account-based-marketing-abm',
    'SMM': '/digital-marketing-services/social-media',
    'SEO': '/digital-marketing-services/seo',
    'eCommerce Strategy': '/digital-marketing-services/ecommerce-marketing',
    'Website Copywriting': '/content-marketing-services/website-copywriting',
    'Email Lifecycle Copywriting': '/content-marketing-services/email-lifecycle-copywriting',
    'Social Media Ad Copywriting': '/content-marketing-services/social-media-ad-copywriting',
    'Content Strategy Planning': '/content-marketing-services/content-strategy-planning',
    'Blog & Long-form Content': '/content-marketing-services/blog-longform-content',
    'Thought Leadership + Ghostwriting': '/content-marketing-services/ghostwriting',
    // removed duplicate 'eCommerce Development' and 'DevOps' to avoid object literal error
    'Advanced Data Visualization': '/marketing-analytics-services/advanced-data-visualization',
    'Marketing Analytics': '/marketing-analytics-services/marketing-analytics',
    'Web Analytics': '/marketing-analytics-services/web-analytics/',

    // Design Services - new mappings
    'UI/UX': '/ui-ux-design-agency/website-designing-services',
    'Motion Graphics': '/ui-ux-design-agency/motion-graphics',
    'Social Media': '/ui-ux-design-agency/social-media',
    'Mobile Apps': '/ui-ux-design-agency/mobile-apps',
    'Marketing & Sales Collateral Design': '/ui-ux-design-agency/marketing-sales-collateral-design',
    'Brand & Campaign Design': '/ui-ux-design-agency/brand-campaign',

    // Strategic Services - new mappings
    'Growth Marketing Pod': '/strategic-services/growth-marketing-pod',
    'Enterprise Planning': '/strategic-services/enterprise-planning',
    'Strategic Opportunity Assessment': '/strategic-services/strategic-opportunity-assessment',
    'Demand Generation Strategy': '/strategic-services/demand-generation-strategy',
    'AI-Optimized Enterprise Resource Planning': '/strategic-services/ai-optimized-enterprise-resource-planning',

    // Jira Professional Services - new mappings
    'Jira Strategy & Implementation': '/jira-professional-services/jira-strategy-implementation',
    'Jira Migration & Configuration': '/jira-professional-services/jira-migration-configuration',
    'Jira Automation & Workflow Optimization': '/jira-professional-services/jira-automation-workflow',
    'Jira Support & Maintenance': '/jira-professional-services/jira-support-maintenance',
  };

  const url = urlMappings[title] || `/${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <a
      href={url}
      className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-2 py-1.5 rounded transition-colors duration-200 text-sm"
    >
      {title}
    </a>
  );
}

function MobileMenuItem({ title, items }: {
  title: string;
  items: Array<{
    name: string;
    url: string;
    external?: boolean;
    subItems?: Array<{ name: string; url: string; }>
  }>
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 pb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-white hover:text-[#0A6CFF] py-2 font-medium text-sm"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-2 space-y-1">
          {items.map((item) => (
            <MobileSubMenuItem key={item.name} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function MobileSubMenuItem({ item }: {
  item: {
    name: string;
    url: string;
    external?: boolean;
    subItems?: Array<{ name: string; url: string; }>
  }
}) {
  const [isSubOpen, setIsSubOpen] = useState(false);

  if (!item.subItems || item.subItems.length === 0) {
    return (
      <div>
        {item.external ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-300 hover:text-white py-1 text-xs"
          >
            {item.name}
          </a>
        ) : (
          <a
            href={item.url}
            className="block text-gray-300 hover:text-white py-1 text-xs"
          >
            {item.name}
          </a>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <a
          href={item.url}
          className="flex-1 text-gray-300 hover:text-white py-1 text-xs"
        >
          {item.name}
        </a>
        <button
          onClick={() => setIsSubOpen(!isSubOpen)}
          className="ml-2 p-1 text-gray-300 hover:text-white"
        >
          <ChevronDown className={`w-3 h-3 transition-transform ${isSubOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {isSubOpen && (
        <div className="ml-3 mt-1 space-y-1">
          {item.subItems.map((subItem) => (
            <a
              key={subItem.name}
              href={subItem.url}
              className="block text-gray-400 hover:text-gray-200 py-1 text-xs pl-2 border-l border-gray-600"
            >
              {subItem.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
