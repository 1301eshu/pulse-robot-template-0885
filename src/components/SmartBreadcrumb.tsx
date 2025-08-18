import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

// Display-friendly route names
const routeNames: Record<string, string> = {
  'services': 'Services',
  'growth-labs': 'AI Labs',
  'resources': 'Resources',
  'company': 'Company',
  'hubspot': 'HubSpot',
  'salesforce': 'Salesforce',
  'salesforce-ai': 'Salesforce AI',
  'salesforce-cpq': 'Salesforce CPQ',
  'salesforce-einstein': 'Salesforce Einstein',
  'salesforce-marketing-cloud': 'Salesforce Marketing Cloud',
  'marketing-cloud': 'Marketing Cloud',
  'salesforce-pardot': 'Salesforce Pardot',
  'sales-cloud': 'Sales Cloud',
  'service-cloud': 'Service Cloud',
  'commerce-cloud': 'Commerce Cloud',
  'experience-cloud': 'Experience Cloud',
  'adobe-experience-platform': 'Adobe Experience Platform',
  'marketo': 'Marketo',
  'eloqua': 'Eloqua',
  'marketing-automation': 'Marketing Automation',
  'ai-revops': 'AI RevOps',
  'abm': 'Account-Based Marketing',
  'cro': 'Conversion Rate Optimization',
  'analytics': 'Analytics',
  'ga4-migration': 'GA4 Migration',
  
  'growth-marketing-pod-services': 'Growth Marketing Pod Services',
  'data-visualization': 'Data Visualization',
  'seo': 'Search Engine Optimization',
  'SEO': 'Search Engine Optimization',
  'paid-ads': 'Paid Advertising',
  'performance-marketing': 'Performance Marketing',
  'digital-marketing': 'Digital Marketing',
  'smm': 'Social Media Marketing',
  'social-media': 'Social Media',
  'orm': 'Online Reputation Management',
  'web-development': 'Web Development',
  'mobile-app-development': 'Mobile App Development',
  'ecommerce': 'E-commerce',
  'testing-qa': 'Testing & QA',
  'devops': 'DevOps',
  'ui-ux-design': 'UI/UX Design',
  'design-services': 'Design Services',
  'marketing-assets': 'Marketing Assets',
  'motion-graphics': 'Motion Graphics',
  'development': 'Development Services',
  'development-services': 'Development Services',
  'about': 'About',
  'careers': 'Careers',
  'contact': 'Contact',
  'locations': 'Locations',
  'press': 'Press',
  'team': 'Team',
  'ai-experiments': 'AI Experiments',
  'beta-programs': 'Beta Programs',
  'case-studies': 'Case Studies',
  'developer-community': 'Developer Community',
  'dig-growth': 'DiG Growth',
  'market-research': 'Market Research',
  'network-on': 'NetworkON',
  'open-source': 'Open Source',
  'pixel-dino': 'PixelDino',
  'blog': 'Blog',
  'documentation': 'Documentation',
  'infographics': 'Infographics',
  'roi-calculator': 'ROI Calculator',
  'support': 'Support',
  'templates': 'Templates',
  'testing-&-qa': 'Testing & QA',
  'downloadable-assets': 'Downloadable Assets',
  'whitepapers': 'Whitepapers',
  'strategic-services': 'Strategic Services',
  'jira-professional-services': 'Jira Professional Services',
  'content-marketing-services': 'Content Marketing Services',
  'analytics-as-a-service': 'Analytics as a Service'
};

// Map L2 services to their L1 categories
const serviceToCategory: Record<string, string> = {
  // Marketing Automation Services
  'hubspot': 'marketing-automation-services',
  'marketo': 'marketing-automation-services',
  'eloqua': 'marketing-automation-services',
  'pardot': 'marketing-automation-services',
  
  // Salesforce Services
  'sales-cloud': 'salesforce-services',
  'service-cloud': 'salesforce-services',
  'commerce-cloud': 'salesforce-services',
  'experience-cloud': 'salesforce-services',
  'marketing-cloud': 'salesforce-services',
  'cpq': 'salesforce-services',
  'einstein-analytics': 'salesforce-services',
  'salesforce-ai-enablement': 'salesforce-services',
  
  // Marketing Analytics Services
  'web-analytics': 'marketing-analytics-services',
  'marketing-analytics': 'marketing-analytics-services',
  'data-warehousing-etl': 'marketing-analytics-services',
  'self-service-bi-data-democratization': 'marketing-analytics-services',
  'real-time-ai-powered-analytics': 'marketing-analytics-services',
  'advanced-data-visualization': 'marketing-analytics-services',
  
  // Digital Marketing Services
  'seo': 'digital-marketing-services',
  'ppc': 'digital-marketing-services',
  'social-media': 'digital-marketing-services',
  'orm-services': 'digital-marketing-services',
  'account-based-marketing-abm': 'digital-marketing-services',
  'cro': 'digital-marketing-services',
  'ecommerce-marketing': 'digital-marketing-services',
  'paid-ads': 'digital-marketing-services',
  
  // Development Services
  'web-development': 'development-services',
  'mobile-app-development': 'development-services',
  'ecommerce-development': 'development-services',
  'testing-qa': 'development-services',
  'devops': 'development-services',
  'site-optimization-services': 'development-services',
  
  // UI/UX Design Agency
  'ui-ux-design-agency': 'ui-ux-design-agency',
  'motion-graphics': 'ui-ux-design-agency',
  'mobile-apps': 'ui-ux-design-agency',
  'brand-campaign': 'ui-ux-design-agency',
  'marketing-sales-collateral-design': 'ui-ux-design-agency',
  
  // Strategic Services
  'growth-marketing-pod': 'strategic-services',
  'enterprise-planning': 'strategic-services',
  'demand-generation-strategy': 'strategic-services',
  'strategic-opportunity-assessment': 'strategic-services',
  'ai-optimized-enterprise-resource-planning': 'strategic-services',
  
  // Content Marketing Services
  'website-copywriting': 'content-marketing-services',
  'email-lifecycle-copywriting': 'content-marketing-services',
  'social-media-ad-copywriting': 'content-marketing-services',
  'content-strategy-planning': 'content-marketing-services',
  'blog-longform-content': 'content-marketing-services',
  'ghostwriting': 'content-marketing-services'
};

export function SmartBreadcrumb() {
  const location = useLocation();
  const originalPathnames = location.pathname.split('/').filter((x) => x);
  
  // Don't show breadcrumbs on homepage
  if (originalPathnames.length === 0) return null;
  
  let pathnames = [...originalPathnames];

  // Handle different URL patterns
  if (pathnames[0].endsWith('-services')) {
    // Handle URLs like /marketing-automation-services/, /digital-marketing-services/, etc.
    const baseName = pathnames[0];
    
    if (pathnames.length === 1) {
      // L1 service page like /marketing-automation-services/
      pathnames = [baseName];
    } else {
      // L2 service page like /marketing-automation-services/hubspot/
      const subServiceName = pathnames[1];
      pathnames = [baseName, subServiceName];
    }
  } else if (pathnames[0] === 'company') {
    // Company pages: Skip "company" and show only the sub-page
    if (pathnames.length === 1) {
      pathnames = ['company'];
    } else {
      // For company sub-pages, skip the "company" segment
      pathnames = [pathnames[1]];
    }
  } else if (pathnames[0] === 'resources') {
    // Resource pages: /resources/blog, /resources/case-studies, etc.
    if (pathnames.length === 1) {
      pathnames = ['resources'];
    } else {
      pathnames = ['resources', pathnames[1]];
    }
  } else if (pathnames[0] === 'growth-labs') {
    // Growth Labs pages: /growth-labs/ai-experiments, etc.
    if (pathnames.length === 1) {
      pathnames = ['growth-labs'];
    } else {
      pathnames = ['growth-labs', pathnames[1]];
    }
  }

  return (
    <div className="bg-gray-50 border-b border-gray-200 relative z-20 mt-20">
      <div className="container mx-auto px-6 py-3 max-w-7xl">
        <Breadcrumb>
          <BreadcrumbList className="items-center justify-start">
            {/* Home link */}
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to="/"
                  className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
                >
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {/* Other segments */}
            {pathnames.map((pathname, index) => {
              const isDirectServicePage = originalPathnames[0].endsWith('-services');
              
              let routeTo;
              if (isDirectServicePage) {
                // For direct service URLs like /marketing-automation-services/hubspot/
                if (index === 0) {
                  // First segment is the L1 service category
                  routeTo = `/${pathname}/`;
                } else {
                  // This is the L2 service
                  routeTo = `/${pathnames[0]}/${pathname}/`;
                }
              } else {
                // Standard URL construction for company, resources, growth-labs, etc.
                routeTo = `/${pathnames.slice(0, index + 1).join('/')}/`;
              }
              
              const isLast = index === pathnames.length - 1;

              const displayName =
                routeNames[pathname] ||
                pathname
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');

              return (
                <div key={routeTo} className="flex items-center">
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="text-sm text-gray-800 font-medium">
                        {displayName}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link
                          to={routeTo}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
                        >
                          {displayName}
                        </Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
