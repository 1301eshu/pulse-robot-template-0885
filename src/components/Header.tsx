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
} from 'lucide-react';

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
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0A101F]">
      <nav 
        className="relative"
        onMouseLeave={closeMenu}
      >
        <div className="section-wrapper flex items-center justify-between py-4 relative">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://res.cloudinary.com/dhbhumz3q/image/upload/v1751363539/Logo_-_Gradient_f2jmus.png"
              alt="GrowthNatives Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {['services', 'labs', 'resources', 'company'].map((menu) => (
              <div
                key={menu}
                className="relative"
                onMouseEnter={() => openMenu(menu)}
              >
                <button className="flex items-center text-white hover:text-[#0A6CFF] transition-colors py-4 font-semibold capitalize">
                  {menu === 'services'
                    ? 'Our Services'
                    : menu === 'labs'
                    ? 'Growth Labs'
                    : menu.charAt(0).toUpperCase() + menu.slice(1)}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Right side - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="text-white hover:text-[#0A6CFF] transition-colors p-2 rounded-lg"
            >
              <Search className="w-5 h-5" />
            </button>
            <SITE_CTA 
  variant="primary" 
  text="Contact Us" 
  href="/company/contact"
  size="md"
/>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="text-white hover:text-[#0A6CFF] transition-colors p-2 rounded-lg"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-[#0A6CFF] transition-colors p-2 rounded-lg"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
            <div className="max-w-[1200px] mx-auto px-6 py-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for services, resources, or information..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <button
                  onClick={toggleSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0A101F] border-t border-gray-700 z-40">
            <div className="px-6 py-4 space-y-4">
              <MobileMenuItem title="Our Services" items={['Marketing Automation', 'Salesforce', 'Marketing Analytics', 'Digital Marketing', 'Development Services', 'Design Services']} />
              <MobileMenuItem title="Growth Labs" items={['DiGGrowth', 'NetworkON', 'Pixel Dino', 'AI Chatbot']} />
              <MobileMenuItem title="Resources" items={['Blog', 'Case Studies', 'Templates', 'Documentation']} />
              <MobileMenuItem title="Company" items={['About', 'Team', 'Careers', 'Contact']} />
              <div onClick={() => setIsMobileMenuOpen(false)}>
  <SITE_CTA 
    variant="primary" 
    text="Contact Us" 
    href="/company/contact"
    size="md"
    className="w-full justify-center"
  />
</div>
            </div>
          </div>
        )}

        {/* Mega Menu positioned outside the container but anchored to it */}
        {activeMenu && !isMobileMenuOpen && (
          <MegaMenu open={true}>{renderMenuContent(activeMenu, activeCategory, setActiveCategory)}</MegaMenu>
        )}
      </nav>
    </header>
  );
}

// -------- MegaMenu Wrapper -------- //
function MegaMenu({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`
        absolute left-1/2 -translate-x-1/2 top-full w-screen z-40 bg-white shadow-xl border-t border-gray-100
        transition-all duration-300 ease-out
        ${open
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'}
      `}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-8">{children}</div>
    </div>
  );
}

// -------- Menu Content Based on Key -------- //
function renderMenuContent(menu: string | null, activeCategory: string, setActiveCategory: React.Dispatch<React.SetStateAction<string>>) {
  if (menu === 'services') {
    return (
      <>
        <div className="grid grid-cols-[300px_1fr] gap-8">
          {/* Left Sidebar - Categories */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Explore Categories</h3>
            
            <div className="space-y-1">
              <CategoryMenuItem
                icon={<Zap className="w-4 h-4" />}
                iconBg="bg-yellow-100"
                iconColor="text-yellow-600"
                title="Marketing Automation"
                subtitle="CRM & workflow automation"
                categoryKey="marketing-automation"
                isActive={activeCategory === 'marketing-automation'}
                setActiveCategory={setActiveCategory}
              />
              <CategoryMenuItem
                icon={<Cloud className="w-4 h-4" />}
                iconBg="bg-blue-100"
                iconColor="text-blue-600"
                title="Salesforce"
                subtitle="Custom solutions"
                categoryKey="salesforce"
                isActive={activeCategory === 'salesforce'}
                setActiveCategory={setActiveCategory}
              />
              <CategoryMenuItem
                icon={<BarChart3 className="w-4 h-4" />}
                iconBg="bg-green-100"
                iconColor="text-green-600"
                title="Marketing Analytics"
                subtitle="Data-driven insights"
                categoryKey="marketing-analytics"
                isActive={activeCategory === 'marketing-analytics'}
                setActiveCategory={setActiveCategory}
              />
              <CategoryMenuItem
                icon={<Megaphone className="w-4 h-4" />}
                iconBg="bg-red-100"
                iconColor="text-red-600"
                title="Digital Marketing"
                subtitle="Omnichannel growth"
                categoryKey="digital-marketing"
                isActive={activeCategory === 'digital-marketing'}
                setActiveCategory={setActiveCategory}
              />
              <CategoryMenuItem
                icon={<Code className="w-4 h-4" />}
                iconBg="bg-gray-100"
                iconColor="text-gray-600"
                title="Development Services"
                subtitle="Robust development"
                categoryKey="development-services"
                isActive={activeCategory === 'development-services'}
                setActiveCategory={setActiveCategory}
              />
              <CategoryMenuItem
                icon={<Palette className="w-4 h-4" />}
                iconBg="bg-purple-100"
                iconColor="text-purple-600"
                title="Design Services"
                subtitle="World-class designs"
                categoryKey="design-services"
                isActive={activeCategory === 'design-services'}
                setActiveCategory={setActiveCategory}
              />
            </div>
          </div>

          {/* Right Content - Service Details */}
          <div className="pl-8 border-l border-gray-200">
            <ServiceContent activeCategory={activeCategory} />
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link
            to="/services"
            className="flex items-center justify-between w-full bg-gradient-to-br from-[#051946] to-[#0A3E5E] text-white px-6 py-4 rounded-lg hover:from-[#041739] hover:to-[#083550] transition-all font-medium group"
          >
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Explore All Services</span>
              <span className="text-sm opacity-90">Discover our comprehensive service offerings</span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </>
    );
  }

  if (menu === 'labs') {
    return (
      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-6">
          <LabCard
            icon={<Lightbulb className="w-5 h-5 text-purple-600" />}
            bg="bg-purple-100"
            title="DiGGrowth"
            desc="A no-code marketing analytics platform"
            to="/growth-labs/diggrowth"
          />
          <LabCard
            icon={<Zap className="w-5 h-5 text-green-600" />}
            bg="bg-green-100"
            title="NetworkON"
            desc="AI-driven logistics optimization"
            to="/growth-labs/networkon"
          />
          <LabCard
            icon={<Palette className="w-5 h-5 text-orange-600" />}
            bg="bg-orange-100"
            title="Pixel Dino"
            desc="Video production & design studio"
            to="/growth-labs/pixel-dino"
          />
          <LabCard
            icon={<Users className="w-5 h-5 text-blue-600" />}
            bg="bg-blue-100"
            title="AI Chatbot"
            desc="AI Conversations That Convert"
            to="/growth-labs/ai-chatbot"
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <div className="w-full max-w-sm h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center border border-gray-200">
            <span className="text-gray-400">Innovation Showcase</span>
          </div>
          <Link
            to="/growth-labs"
            className="inline-flex items-center bg-[#0A6CFF] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Innovation Hub
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 col-span-2">
          <Link
            to="/growth-labs"
            className="flex items-center justify-between w-full bg-gradient-to-br from-[#051946] to-[#0A3E5E] text-white px-6 py-4 rounded-lg hover:from-[#041739] hover:to-[#083550] transition-all font-medium group"
          >
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Explore Growth Labs</span>
              <span className="text-sm opacity-90">Innovation Hub for cutting-edge solutions</span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  if (menu === 'resources') {
    return (
      <>
        <div className="grid grid-cols-2 gap-12">
          <ResCard
            icon={<BookOpenCheck className="w-5 h-5 text-blue-600" />}
            bg="bg-blue-100"
            title="Blogs"
            desc="Stay informed with our insights"
            to="/resources/blog"
          />
          <ResCard
            icon={<BarChart3 className="w-5 h-5 text-green-600" />}
            bg="bg-green-100"
            title="Case Studies"
            desc="Success stories showcasing our work"
            to="/resources/case-studies"
          />
          <ResCard
            icon={<Palette className="w-5 h-5 text-purple-600" />}
            bg="bg-purple-100"
            title="Infographics"
            desc="Engaging visual content"
            to="/resources/infographics"
          />
          <ResCard
            icon={<Settings className="w-5 h-5 text-orange-600" />}
            bg="bg-orange-100"
            title="Templates"
            desc="Useful checklists & downloads"
            to="/resources/templates"
          />
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link
            to="/resources"
            className="flex items-center justify-between w-full bg-gradient-to-br from-[#051946] to-[#0A3E5E] text-white px-6 py-4 rounded-lg hover:from-[#041739] hover:to-[#083550] transition-all font-medium group"
          >
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Explore All Resources</span>
              <span className="text-sm opacity-90">Access insights, guides, and tools</span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </>
    );
  }

  if (menu === 'company') {
    return (
      <>
        <div className="grid grid-cols-2 gap-12">
          <CoCard
            icon={<Building className="w-5 h-5 text-blue-600" />}
            bg="bg-blue-100"
            title="About Us"
            desc="Learn our story and mission"
            to="/company/about"
          />
          <CoCard
            icon={<Users className="w-5 h-5 text-purple-600" />}
            bg="bg-purple-100"
            title="Leadership Team"
            desc="Meet the people behind the scenes"
            to="/company/team"
          />
          <CoCard
            icon={<TrendingUp className="w-5 h-5 text-green-600" />}
            bg="bg-green-100"
            title="Careers"
            desc="Work with us"
            to="/company/careers"
          />
          <CoCard
            icon={<ArrowRight className="w-5 h-5 text-orange-600" />}
            bg="bg-orange-100"
            title="Contact"
            desc="Get in touch"
            to="/company/contact"
          />
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link
            to="/company"
            className="flex items-center justify-between w-full bg-gradient-to-br from-[#051946] to-[#0A3E5E] text-white px-6 py-4 rounded-lg hover:from-[#041739] hover:to-[#083550] transition-all font-medium group"
          >
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Learn More About Us</span>
              <span className="text-sm opacity-90">Discover our story and values</span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </>
    );
  }

  return null;
}

// Reusable components
function Category({ icon, bg, title, links }: { icon: React.ReactNode; bg: string; title: string; links: string[] }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center`}>{icon}</div>
        <h3 className="font-semibold text-blue-600">{title}</h3>
      </div>
      <div className="space-y-2">
        {links.map((item) => (
          <Link
            key={item}
            to={`/${title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1.5 rounded transition-colors duration-200"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

function LabCard({ icon, bg, title, desc, to }: any) {
  return (
    <Link to={to} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-l-4 hover:border-blue-600 transition-all duration-300 group">
      <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center transition-colors`}>{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1 transition-colors">{title}</h3>
        <p className="text-sm text-gray-600 transition-colors">{desc}</p>
      </div>
    </Link>
  );
}

function ResCard({ icon, bg, title, desc, to }: any) {
  return (
    <Link to={to} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-l-4 hover:border-blue-600 transition-all duration-300 group">
      <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center transition-colors`}>{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1 transition-colors">{title}</h3>
        <p className="text-sm text-gray-600 transition-colors">{desc}</p>
      </div>
    </Link>
  );
}

function CoCard({ icon, bg, title, desc, to }: any) {
  return (
    <Link to={to} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-l-4 hover:border-blue-600 transition-all duration-300 group">
      <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center transition-colors`}>{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1 transition-colors">{title}</h3>
        <p className="text-sm text-gray-600 transition-colors">{desc}</p>
      </div>
    </Link>
  );
}

// New components for services mega menu
function CategoryMenuItem({ icon, iconBg, iconColor, title, subtitle, categoryKey, isActive, setActiveCategory }: {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  categoryKey: string;
  isActive: boolean;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}) {
  const getLink = () => {
    const categoryRoutes: { [key: string]: string } = {
      'marketing-automation': '/services/marketing-automation',
      'salesforce': '/services/salesforce',
      'marketing-analytics': '/services/analytics',
      'digital-marketing': '/services/digital-marketing',
      'development-services': '/services/development',
      'design-services': '/services/design-services'
    };
    return categoryRoutes[categoryKey] || '/services';
  };

  return (
    <Link
      to={getLink()}
      className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
        isActive 
          ? 'bg-blue-50 border-l-4 border-blue-600' 
          : 'hover:bg-blue-50 hover:border-l-4 hover:border-blue-600'
      }`}
      onMouseEnter={() => setActiveCategory(categoryKey)}
    >
      <div className={`w-8 h-8 ${iconBg} rounded-lg flex items-center justify-center`}>
        <div className={iconColor}>{icon}</div>
      </div>
      <div>
        <h4 className={`font-medium ${isActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'} transition-colors`}>{title}</h4>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </Link>
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
    'marketing-analytics': {
      title: 'Marketing Analytics',
      services: ['Web Analytics', 'Data Visualization', 'GA4 Migration', 'CRO', 'Adobe Experience Platform']
    },
    'digital-marketing': {
      title: 'Digital Marketing',
      services: ['Paid Ads', 'SEO', 'ORM', 'ABM', 'SMM', 'eCommerce']
    },
    'development-services': {
      title: 'Development Services',
      services: ['Mobile App Development', 'Web Development', 'Testing & QA', 'DevOps']
    },
    'design-services': {
      title: 'Design Services',
      services: ['UI/UX', 'Marketing Assets', 'Motion Graphics', 'Social Media']
    }
  };

  const currentData = serviceData[activeCategory as keyof typeof serviceData];

  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">{currentData.title}</h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
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
    'Salesforce AI': '/services/salesforce-ai',
    'Service Cloud': '/services/service-cloud',
    'Sales Cloud': '/services/sales-cloud',
    'Marketing Cloud': '/services/salesforce-marketing-cloud',
    'Commerce Cloud': '/services/commerce-cloud',
    'Experience Cloud': '/services/experience-cloud',
    'Salesforce Einstein': '/services/salesforce-einstein',
    'Salesforce CPQ': '/services/salesforce-cpq',
    'ORM': '/services/orm',
    'ABM': '/services/abm',
    'SMM': '/services/smm',
    'eCommerce': '/services/ecommerce',
    'UI/UX': '/services/ui/ux',
    'Testing & QA': '/services/testing-&-qa'
  };

  const url = urlMappings[title] || `/services/${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <Link
      to={url}
      className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition-colors duration-200"
    >
      {title}
    </Link>
  );
}

function MobileMenuItem({ title, items }: { title: string; items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-white font-semibold py-2"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-2 pl-4 space-y-2">
          {items.map((item) => (
            <Link
              key={item}
              to={`/${title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block text-gray-300 hover:text-white py-1 text-sm"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
