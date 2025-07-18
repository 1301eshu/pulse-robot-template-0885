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
  'growth-labs': 'Growth Labs',
  'resources': 'Resources',
  'company': 'Company',
  'hubspot': 'HubSpot',
  'salesforce': 'Salesforce',
  'salesforce-ai': 'Salesforce AI',
  'salesforce-cpq': 'Salesforce CPQ',
  'salesforce-einstein': 'Salesforce Einstein',
  'salesforce-marketing-cloud': 'Salesforce Marketing Cloud',
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
  'web-analytics': 'Web Analytics',
  'data-visualization': 'Data Visualization',
  'seo': 'SEO',
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
  'development': 'Development',
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
  'whitepapers': 'Whitepapers'
};

export function SmartBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <div className="bg-gray-50 border-b border-gray-200 mt-24 relative z-40">
      <div className="section-wrapper py-3">
        <Breadcrumb>
          <BreadcrumbList>
            {/* Home link */}
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to="/"
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
                >
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {/* Other segments */}
            {pathnames.map((pathname, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
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
