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
  services: 'Services',
  'growth-labs': 'AI Labs',
  resources: 'Resources',
  company: 'Company',
  hubspot: 'HubSpot',
  salesforce: 'Salesforce',
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
  marketo: 'Marketo',
  eloqua: 'Eloqua',
  'marketing-automation': 'Marketing Automation',
  'ai-revops': 'AI RevOps',
  abm: 'Account-Based Marketing',
  cro: 'Conversion Rate Optimization',
  analytics: 'Analytics',
  'ga4-migration': 'GA4 Migration',

  'growth-marketing-pod-services': 'Growth Marketing Pod Services',
  'data-visualization': 'Data Visualization',
  seo: 'Search Engine Optimization',
  SEO: 'Search Engine Optimization',
  'paid-ads': 'Paid Advertising',
  'performance-marketing': 'Performance Marketing',
  'digital-marketing': 'Digital Marketing',
  smm: 'Social Media Marketing',
  'social-media': 'Social Media',
  orm: 'Online Reputation Management',
  'web-development': 'Web Development',
  'mobile-app-development': 'Mobile App Development',
  ecommerce: 'E-commerce',
  'testing-qa': 'Testing & QA',
  devops: 'DevOps',
  'ui-ux-design': 'UI/UX Design',
  'design-services': 'Design Services',
  'marketing-assets': 'Marketing Assets',
  'motion-graphics': 'Motion Graphics',
  development: 'Development Services',
  'development-services': 'Development Services',
  about: 'About',
  careers: 'Careers',
  contact: 'Contact',
  locations: 'Locations',
  press: 'Press',
  team: 'Team',
  'ai-experiments': 'AI Experiments',
  'beta-programs': 'Beta Programs',
  'case-studies': 'Case Studies',
  'developer-community': 'Developer Community',
  'dig-growth': 'DiG Growth',
  'market-research': 'Market Research',
  'network-on': 'NetworkON',
  'open-source': 'Open Source',
  'pixel-dino': 'PixelDino',
  blog: 'Blog',
  blogs: 'Blogs',
  documentation: 'Documentation',
  infographics: 'Infographics',
  ebooks: 'Ebooks', 
 'growth-stream': 'Growth Stream',
 'press-release': 'Press Release',
  'roi-calculator': 'ROI Calculator',
  support: 'Support',
  templates: 'Templates',
  'testing-&-qa': 'Testing & QA',
  'downloadable-assets': 'Downloadable Assets',
  whitepapers: 'Whitepapers',
  'strategic-services': 'Strategic Services',
  'jira-professional-services': 'Jira Professional Services',
  'content-marketing-services': 'Content Marketing Services',
  'analytics-as-a-service': 'Analytics as a Service',
};

// Any top-level route that is conceptually under “Resources”
const RESOURCES_CHILDREN = new Set<string>([
  'blogs',
  'blog',
  'case-studies',
  'templates',
  'whitepapers',
  'downloadable-assets',
  'documentation',
  'infographics',
  'roi-calculator',
  'ebooks',    /////
 'growth-stream',
 'press-release',
  'support',
]);

export function SmartBreadcrumb() {
  const location = useLocation();
  const originalSegments = location.pathname.split('/').filter(Boolean);

  // no breadcrumb on homepage
  if (originalSegments.length === 0) return null;

  // Build a list of crumbs: { label, href?, last }
  type Crumb = { label: string; href?: string };
  const crumbs: Crumb[] = [];

  const first = originalSegments[0];

  // ---- Services L1/L2 special handling ----
  const isServiceL1 = first.endsWith('-services');

  if (isServiceL1) {
    // L1
    crumbs.push({
      label: routeNames[first] ?? titleize(first),
      href: `/${first}/`,
    });

    // L2 (optional)
    if (originalSegments[1]) {
      const s2 = originalSegments[1];
      crumbs.push({
        label: routeNames[s2] ?? titleize(s2),
        href: `/${first}/${s2}/`,
      });
    }
  }
  // ---- Resources handling (requested) ----
  else if (first === 'resources') {
    // /resources or /resources/<child>/...
    crumbs.push({ label: routeNames['resources'], href: '/resources/' });
    if (originalSegments[1]) {
      const child = originalSegments[1];
      crumbs.push({
        label: routeNames[child] ?? titleize(child),
        href: `/${['resources', child].join('/')}/`,
      });
      // If there are deeper segments (e.g., /resources/blogs/post-slug), show them too
      for (let i = 2; i < originalSegments.length; i++) {
        const seg = originalSegments[i];
        crumbs.push({
          label: titleize(seg),
          href: `/${['resources', ...originalSegments.slice(1, i + 1)].join('/')}/`,
        });
      }
    }
  }
  // ---- Top-level route that *belongs* to Resources even if URL isn't nested ----
  else if (RESOURCES_CHILDREN.has(first)) {
    // Insert Resources crumb pointing to /resources
    crumbs.push({ label: routeNames['resources'], href: '/resources/' });

    // Keep the user’s actual route for the next crumbs
    let pathAcc = '';
    for (let i = 0; i < originalSegments.length; i++) {
      pathAcc += `/${originalSegments[i]}`;
      const seg = originalSegments[i];
      crumbs.push({
        label: routeNames[seg] ?? titleize(seg),
        href: `${pathAcc}/`,
      });
    }
  }
  // ---- Company: show only subpage (your original behavior) ----
  else if (first === 'company') {
    if (originalSegments.length === 1) {
      crumbs.push({ label: routeNames['company'], href: '/company/' });
    } else {
      const sub = originalSegments[1];
      crumbs.push({ label: routeNames[sub] ?? titleize(sub), href: `/company/${sub}/` });
    }
  }
  // ---- Growth Labs ----
  else if (first === 'growth-labs') {
    crumbs.push({ label: routeNames['growth-labs'], href: '/growth-labs/' });
    if (originalSegments[1]) {
      const sub = originalSegments[1];
      crumbs.push({
        label: routeNames[sub] ?? titleize(sub),
        href: `/growth-labs/${sub}/`,
      });
    }
  }
  // ---- Default (plain cumulative) ----
  else {
    let acc = '';
    for (const seg of originalSegments) {
      acc += `/${seg}`;
      crumbs.push({ label: routeNames[seg] ?? titleize(seg), href: `${acc}/` });
    }
  }

  // Mark last crumb (render as page, not link)
  const lastIndex = crumbs.length - 1;

  return (
    <div className="bg-gray-50 border-b border-gray-200 relative z-20 mt-16 lg:mt-20">
      <div className="container mx-auto px-6 py-3 max-w-7xl">
        <Breadcrumb>
          <BreadcrumbList className="items-center justify-start">
            {/* Home */}
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

            {/* Dynamic crumbs */}
            {crumbs.map((c, i) => (
              <div key={`${c.href}-${i}`} className="flex items-center">
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                  {i === lastIndex ? (
                    <BreadcrumbPage className="text-sm text-gray-800 font-medium">
                      {c.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        to={c.href ?? '#'}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
                      >
                        {c.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}

/* utils */
function titleize(slug: string) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
