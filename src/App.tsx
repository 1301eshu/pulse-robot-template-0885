import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all page components for better performance
const MarketingAutomation = lazy(() => import("./pages/marketing-automation-services/index"));
const HubSpotManagedServices = lazy(() => import("./pages/marketing-automation-services/hubspot/hubspot-managed-services"));
const HubSpot = lazy(() => import("./pages/marketing-automation-services/HubSpot"));
const HubSpotConsulting = lazy(() => import("./pages/marketing-automation-services/hubspot/hubspot-consulting"));
const HubSpotAudit = lazy(() => import("./pages/marketing-automation-services/hubspot/hubspot-audit"));
const HubSpotOperations = lazy(() => import("./pages/marketing-automation-services/hubspot/hubspot-operations"));
const HubspotTraining = lazy(() => import("./pages/marketing-automation-services/hubspot/training.tsx"));
const HubSpotCRM = lazy(() => import("./pages/marketing-automation-services/hubspot/hubspot-crm"));


const PaidAds = lazy(() => import("./pages/digital-marketing-services/paid-ads"));
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const L3Template = lazy(() => import("./pages/L3Template"));
const SiteOptimization = lazy(() => import("./pages/development-services/site-optimization-services.tsx"));
const CMSDevelopment = lazy(() => import("./pages/L3/cms-development"));
const SixSenseServices = lazy(() => import("./pages/digital-marketing-services/account-based-marketing-abm/6sense-services"));
const DemandbaseServices = lazy(() => import("./pages/digital-marketing-services/account-based-marketing-abm/demandbase-services"));
const RecotapServices = lazy(() => import("./pages/digital-marketing-services/account-based-marketing-abm/recotap-services"));
const RollworksServices = lazy(() => import("./pages/digital-marketing-services/account-based-marketing-abm/rollworks-services"));
const Mailchimp = lazy(() => import("./pages/digital-marketing-services/ecommerce-marketing/mailchimp-services"));
const Amazon = lazy(() => import("./pages/digital-marketing-services/ecommerce-marketing/amazon-services"));
const Walmart = lazy(() => import("./pages/digital-marketing-services/ecommerce-marketing/walmart-services"));
const GMB = lazy(() => import("./pages/digital-marketing-services/orm-services/gmb.tsx"));
const PardotOperations = lazy(() => import("./pages/marketing-automation-services/pardot/operations"));
const PardotManagedServices = lazy(() => import("./pages/marketing-automation-services/pardot/managed-services"));
const PardotConsulting = lazy(() => import("./pages/marketing-automation-services/pardot/consulting"));
const PardotTraining = lazy(() => import("./pages/marketing-automation-services/pardot/training"));
const MarketoIntegration = lazy(() => import("./pages/marketing-automation-services/marketo/marketo-integration"));
const MarketoConsulting = lazy(() => import("./pages/marketing-automation-services/marketo/marketo-consulting"));
const MarketoAssetDevelopment = lazy(() => import("./pages/marketing-automation-services/marketo/marketo-assest-development"));
const Marketotraining = lazy(() => import("./pages/marketing-automation-services/marketo/training"));
const MarketoAssetOperations = lazy(() => import("./pages/marketing-automation-services/marketo/operations"));
const EloquaReporting = lazy(() => import("./pages/marketing-automation-services/eloqua/eloqua-reporting"));
const EloquaMigration = lazy(() => import("./pages/marketing-automation-services/eloqua/eloqua-migration"));
const EloquaImplementation = lazy(() => import("./pages/marketing-automation-services/eloqua/eloqua-implementation"));
const EloquaConsulting = lazy(() => import("./pages/marketing-automation-services/eloqua/eloqua-consulting"));
const EloquaAudit = lazy(() => import("./pages/marketing-automation-services/eloqua/eloqua-audit"));
const Google = lazy(() => import("./pages/digital-marketing-services/ppc/google-ads.tsx"));
const Linkedin = lazy(() => import("./pages/digital-marketing-services/ppc/linkedin-ads.tsx"));
const Meta = lazy(() => import("./pages/digital-marketing-services/ppc/meta-ads.tsx"));
const MarketingCloudMarket = lazy(() => import("./pages/services/SalesforceMarketingCloud.tsx"));








// Convert all remaining imports to lazy loading
const Onpage = lazy(() => import("./pages/digital-marketing-services/seo/on-page-seo.tsx"));
const Offpage = lazy(() => import("./pages/digital-marketing-services/seo/off-page-seo.tsx"));
const SEOTechnical = lazy(() => import("./pages/digital-marketing-services/seo/technical-seo.tsx"));
const SMMMeta = lazy(() => import("./pages/digital-marketing-services/social-media/meta-services.tsx"));
const SMMInstagram = lazy(() => import("./pages/digital-marketing-services/social-media/instagram-marketing.tsx"));
const SMMlinkedin = lazy(() => import("./pages/digital-marketing-services/social-media/linkedin-marketing.tsx"));
const SMMX = lazy(() => import("./pages/digital-marketing-services/social-media/twitter-marketing.tsx"));
const LookerStudio = lazy(() => import("./pages/marketing-analytics-services/data-visualization/looker-studio.tsx"));
const Power = lazy(() => import("./pages/marketing-analytics-services/data-visualization/power-bi.tsx"));
const Tableau = lazy(() => import("./pages/marketing-analytics-services/data-visualization/tableau.tsx"));
const AdobeAnalytics = lazy(() => import("./pages/marketing-analytics-services/web-analytics/adobe-analytics"));
const SEOguest = lazy(() => import("./pages/digital-marketing-services/seo/guest-posting.tsx"));
const GA4 = lazy(() => import("./pages/marketing-analytics-services/web-analytics/ga4-parallel-tracking.tsx"));

// Main section pages
const Services = lazy(() => import("./pages/Services"));
const GrowthLabs = lazy(() => import("./pages/GrowthLabs"));
const Resources = lazy(() => import("./pages/Resources"));
const Company = lazy(() => import("./pages/Company"));

// Service pages
const AiRevops = lazy(() => import("./pages/services/AiRevops"));
const Salesforce = lazy(() => import("./pages/salesforce-services"));
const PerformanceMarketing = lazy(() => import("./pages/services/PerformanceMarketing"));
const Development = lazy(() => import("./pages/services/Development"));
const AnalyticsAsAService = lazy(() => import("./pages/services/AnalyticsAsAService"));
const DigitalMarketing = lazy(() => import("./pages/services/DigitalMarketing"));
const DesignServices = lazy(() => import("./pages/services/DesignServices"));

// Content Marketing Services
const ContentMarketingServices = lazy(() => import("./pages/content-marketing-services"));
const WebsiteCopywriting = lazy(() => import("./pages/content-marketing-services/website-copywriting"));
const EmailLifecycleCopywriting = lazy(() => import("./pages/content-marketing-services/email-lifecycle-copywriting"));
const SocialMediaAdCopywriting = lazy(() => import("./pages/content-marketing-services/social-media-ad-copywriting"));
const ContentStrategyPlanning = lazy(() => import("./pages/content-marketing-services/content-strategy-planning"));
const BlogLongformContent = lazy(() => import("./pages/content-marketing-services/blog-longform-content"));
const ThoughtLeadershipGhostwriting = lazy(() => import("./pages/content-marketing-services/ghostwriting"));

// Sub-service pages
const WebAnalytics = lazy(() => import("./pages/marketing-analytics-services/web-analytics"));
const AdvancedDataVisualization = lazy(() => import("./pages/marketing-analytics-services/advanced-data-visualization"));
const GA4Migration = lazy(() => import("./pages/services/GA4Migration"));
const AdobeExperiencePlatformWebSDKMigration = lazy(() => import("./pages/services/AdobeExperiencePlatformWebSDKMigration"));
const MobileAppDevelopment = lazy(() => import("./pages/development-services/mobile-app-development"));
const WebDevelopment = lazy(() => import("./pages/development-services/web-development"));
const TestingQA = lazy(() => import("./pages/development-services/testing-qa"));
const DevOps = lazy(() => import("./pages/development-services/devops"));
const UIUXDesignAgencyServices = lazy(() => import("./pages/ui-ux-design-agency/index"));
const UIUXDesignAgency = lazy(() => import("./pages/ui-ux-design-agency/ui-ux-design-agency"));
const MarketingAssets = lazy(() => import("./pages/services/MarketingAssets"));
const MotionGraphics = lazy(() => import("./pages/services/MotionGraphics"));
const Marketo = lazy(() => import("./pages/marketing-automation-services/Marketo"));
const Pardot = lazy(() => import("./pages/marketing-automation-services/Pardot"));
const MarketingCloud = lazy(() => import("./pages/salesforce-services/marketing-cloud"));
const Eloqua = lazy(() => import("./pages/marketing-automation-services/Eloqua"));
const EcommerceDevelopment = lazy(() => import("./pages/development-services/ecommerce-development"));
const BrandCampaignDesign = lazy(() => import("./pages/services/brand-campaign"));

// New Salesforce service pages
const SalesforceAI = lazy(() => import("./pages/services/SalesforceAI"));
const SalesCloud = lazy(() => import("./pages/salesforce-services/sales-cloud"));
const SalesforceMarketingCloud = lazy(() => import("./pages/salesforce-services/marketing-cloud"));
const CommerceCloud = lazy(() => import("./pages/services/CommerceCloud"));
const SalesforceEinstein = lazy(() => import("./pages/services/SalesforceEinstein"));
const ServiceCloud = lazy(() => import("./pages/salesforce-services/service-cloud"));
const ExperienceCloud = lazy(() => import("./pages/salesforce-services/experience-cloud"));
const SalesforceCPQ = lazy(() => import("./pages/services/SalesforceCPQ"));
const SalesforceAnalyticsCloud = lazy(() => import("./pages/services/SalesforceAnalyticsCloud"));
const Conga = lazy(() => import("./pages/services/Conga"));
const ServiceMax = lazy(() => import("./pages/services/ServiceMax"));
const SalesforceNonprofitCloud = lazy(() => import("./pages/services/SalesforceNonprofitCloud"));

// New Analytics services
const DataWarehousingETL = lazy(() => import("./pages/marketing-analytics-services/data-warehousing-etl"));
const SelfServiceBIDataDemocratization = lazy(() => import("./pages/marketing-analytics-services/self-service-bi-data-democratization"));
const RealTimeAIPoweredAnalytics = lazy(() => import("./pages/marketing-analytics-services/real-time-ai-powered-analytics"));

// New Digital Marketing services
const PPC = lazy(() => import("./pages/digital-marketing-services/ppc"));
const SocialMedia = lazy(() => import("./pages/digital-marketing-services/social-media"));
const ORMServices = lazy(() => import("./pages/digital-marketing-services/orm-services"));
const ABM = lazy(() => import("./pages/digital-marketing-services/account-based-marketing-abm"));
const CRO = lazy(() => import("./pages/digital-marketing-services/cro"));
const EcommerceMarketing = lazy(() => import("./pages/digital-marketing-services/ecommerce-marketing"));
const SEO = lazy(() => import("./pages/digital-marketing-services/seo"));

// Strategic Services pages
const StrategicServices = lazy(() => import("./pages/strategic-services/index"));
const GrowthMarketingPod = lazy(() => import("./pages/strategic-services/growth-marketing-pod"));
const EnterprisePlanning = lazy(() => import("./pages/strategic-services/enterprise-planning"));
const DemandGeneration = lazy(() => import("./pages/strategic-services/demand-generation-strategy"));
const StrategicOpportunityAssessment = lazy(() => import("./pages/strategic-services/strategic-opportunity-assessment"));
const AIOptimizedEnterprise = lazy(() => import("./pages/strategic-services/ai-optimized-enterprise-resource-planning"));

// Additional service pages  
const MarketingAnalyticsServices = lazy(() => import("./pages/marketing-analytics-services/index.tsx"));
const MarketingAnalytics = lazy(() => import("./pages/marketing-analytics-services/marketing-analytics"));
const MobileApps = lazy(() => import("./pages/services/MobileApps"));
const MarketingSalesCollateralDesign = lazy(() => import("./pages/ui-ux-design-agency/marketing-sales-collateral-design"));

// Jira Professional Services pages
const JiraProfessionalServices = lazy(() => import("./pages/jira-professional-services/index.tsx"));
const JiraStrategyImplementation = lazy(() => import("./pages/jira-professional-services/jira-strategy-implementation"));
const JiraMigrationConfiguration = lazy(() => import("./pages/jira-professional-services/jira-migration-configuration"));
const JiraAutomationWorkflow = lazy(() => import("./pages/jira-professional-services/jira-automation-workflow"));
const JiraSupportMaintenance = lazy(() => import("./pages/jira-professional-services/jira-support-maintenance"));

// Growth Labs pages
const AiExperiments = lazy(() => import("./pages/growth-labs/AiExperiments"));
const AiChatbot = lazy(() => import("./pages/growth-labs/AiChatbot"));
const BetaPrograms = lazy(() => import("./pages/growth-labs/BetaPrograms"));
const MarketResearch = lazy(() => import("./pages/growth-labs/MarketResearch"));
const CaseStudies = lazy(() => import("./pages/growth-labs/CaseStudies"));
const DeveloperCommunity = lazy(() => import("./pages/growth-labs/DeveloperCommunity"));
const OpenSource = lazy(() => import("./pages/growth-labs/OpenSource"));
const DiGGrowth = lazy(() => import("./pages/growth-labs/DiGGrowth"));
const NetworkON = lazy(() => import("./pages/growth-labs/NetworkON"));
const PixelDino = lazy(() => import("./pages/growth-labs/PixelDino"));
const AiSeoReadinessCalculator = lazy(() => import("./pages/digital-marketing-services/seo/ai-seo-readiness-calculator"));

// Resources pages
const Blog = lazy(() => import("./pages/resources/Blog"));
const BlogPost = lazy(() => import("./pages/resources/BlogPost"));
const Whitepapers = lazy(() => import("./pages/resources/Whitepapers"));
const RoiCalculator = lazy(() => import("./pages/resources/RoiCalculator"));
const DownloadableAssets = lazy(() => import("./pages/resources/DownloadableAssets"));
const Documentation = lazy(() => import("./pages/resources/Documentation"));
const Support = lazy(() => import("./pages/resources/Support"));
const ResourcesCaseStudies = lazy(() => import("./pages/resources/CaseStudies"));
const ResourcesCaseStudiesPost = lazy(() => import("./pages/resources/CaseStudiesPost"));
const Infographics = lazy(() => import("./pages/resources/Infographics"));
const TermsConditions = lazy(() => import("./pages/resources/terms-conditions"));
const PrivacyPolicy = lazy(() => import("./pages/resources/privacy-policy"));
const CookiePolicy = lazy(() => import("./pages/resources/cookie-policy"));
const EditorialPolicy = lazy(() => import("./pages/resources/editorial-policy"));
const EBooks = lazy(() => import("./pages/resources/ebooks"));
const EBooksPost = lazy(() => import("./pages/resources/EbooksPost"));
const GrowthStream = lazy(() => import("./pages/resources/growth-stream"));
const PressRelease = lazy(() => import("./pages/resources/press-release"));
const DownloablePost = lazy(() => import("./pages/resources/DownloadablePost"));

// Company pages
const About = lazy(() => import("./pages/company/About"));
const Contact = lazy(() => import("./pages/company/Contact"));
const Team = lazy(() => import("./pages/company/Team"));
const Careers = lazy(() => import("./pages/company/Careers"));
const Locations = lazy(() => import("./pages/company/Locations"));
const Press = lazy(() => import("./pages/company/Press"));
const FAQs = lazy(() => import("./pages/faqs"));

// New imports
const SalesforceAIEnablement = lazy(() => import("./pages/salesforce-services/salesforce-ai-enablement"));
const EinsteinAnalytics = lazy(() => import("./pages/salesforce-services/einstein-analytics"));
const CPQ = lazy(() => import("./pages/salesforce-services/CPQ"));
const GoogleAnalytics = lazy(() => import("./pages/marketing-analytics-services/web-analytics/google-analytics.tsx"));
const Matomo = lazy(() => import("./pages/marketing-analytics-services/web-analytics/matomo.tsx"));
const Piwik = lazy(() => import("./pages/marketing-analytics-services/web-analytics/piwik-pro"));
const AdobeTarget = lazy(() => import("./pages/marketing-analytics-services/conversion-rate-optimization-cro/adobe-target.tsx"));
const Datorama = lazy(() => import("./pages/marketing-analytics-services/data-visualization/datorama.tsx"));
const Optimizely = lazy(() => import("./pages/marketing-analytics-services/conversion-rate-optimization-cro/optimizely.tsx"));
const VWO = lazy(() => import("./pages/marketing-analytics-services/conversion-rate-optimization-cro/vwo.tsx"));
const GrowthStreamPost = lazy(() => import("./pages/resources/GrowthStreamPost.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>}>
          <Routes>
           {/* <Route path="/marketing-automation-services/" element={<MarketingAutomation />} /> */}
           <Route path="/digital-marketing-services/account-based-marketing-abm/6sense-services" element={<SixSenseServices />} />
           <Route path="/digital-marketing-services/account-based-marketing-abm/demandbase-services" element={<DemandbaseServices />} />
           <Route path="/digital-marketing-services/account-based-marketing-abm/recotap-services" element={<RecotapServices />} />
           <Route path="/digital-marketing-services/account-based-marketing-abm/rollworks-services" element={<RollworksServices />} />
           
           <Route path="/" element={<Index />} />
           
           {/* Main section routes */}
           {/* <Route path="/services" element={<Services />} /> */}
           <Route path="/growth-labs" element={<GrowthLabs />} />
           <Route path="/resources" element={<Resources />} />
           <Route path="/company" element={<Company />} />
           
           {/* Service routes */}
           <Route path="/marketing-automation-services/" element={<MarketingAutomation />} />
           <Route path="/marketing-automation-services/hubspot/" element={<HubSpot />} />
           <Route path="/marketing-automation-services/hubspot/managed-services" element={<HubSpotManagedServices />} />
           <Route path="/marketing-automation-services/hubspot/consulting" element={<HubSpotConsulting />} />
           <Route path="/marketing-automation-services/hubspot/audit" element={<HubSpotAudit />} />
           <Route path="/marketing-automation-services/hubspot/crm" element={<HubSpotCRM />} />
           <Route path="/marketing-automation-services/hubspot/operations" element={<HubSpotOperations />} />
           <Route path="/marketing-automation-services/marketo/" element={<Marketo />} />
           <Route path="/marketing-automation-services/pardot/" element={<Pardot />} />
           <Route path="/marketing-automation-services/eloqua/migration" element={<EloquaMigration />} />
           <Route path="/marketing-automation-services/eloqua/consulting" element={<EloquaConsulting />} />
           <Route path="/marketing-automation-services/eloqua/reporting" element={<EloquaReporting />} />
           <Route path="/marketing-automation-services/eloqua/audit" element={<EloquaAudit />} />
           <Route path="/marketing-automation-services/eloqua/implementation" element={<EloquaImplementation />} />
          
           {/* <Route path="/marketing-automation-services/marketing-cloud/" element={<MarketingCloud />} /> */}
           <Route path="/marketing-automation-services/salesforce-marketing-cloud/" element={<MarketingCloudMarket />} />
           <Route path="/marketing-automation-services/eloqua/" element={<Eloqua />} />
           <Route path="/salesforce-services/" element={<Salesforce />} />
          
           <Route path="/development-services/" element={<Development />} />
           
           <Route path="/digital-marketing-services/" element={<DigitalMarketing />} />
           <Route path="/ui-ux-design-agency/" element={<UIUXDesignAgencyServices />} />
           <Route path="/ui-ux-design-agency/website-designing-services" element={<UIUXDesignAgency />} />
           <Route path="/ui-ux-design-agency/motion-graphics" element={<MotionGraphics />} />
           <Route path="/ui-ux-design-agency/social-media" element={<SocialMedia />} />
           <Route path="/ui-ux-design-agency/mobile-apps" element={<MobileApps />} />
           <Route path="/ui-ux-design-agency/brand-campaign" element={<BrandCampaignDesign />} />
           <Route path="/ui-ux-design-agency/marketing-sales-collateral-design" element={<MarketingSalesCollateralDesign />} />
          
           {/* Analytics As A Service sub-services */}

           <Route path="/marketing-analytics-services/web-analytics/" element={<WebAnalytics />} />
           
           <Route path="/marketing-analytics-services/advanced-data-visualization/" element={<AdvancedDataVisualization />} />
           
           <Route path="/digital-marketing-services/cro/" element={<CRO />} />
           
           {/* Development Services sub-services */}
           <Route path="/development-services/mobile-app-development/" element={<MobileAppDevelopment />} />
           
           <Route path="/development-services/web-development/" element={<WebDevelopment />} />
           
           <Route path="/development-services/testing-qa/" element={<TestingQA />} />
           <Route path="/development-services/devops/" element={<DevOps />} />
           
           <Route path="/development-services/ecommerce-development/" element={<EcommerceDevelopment />} />
           
           {/* Design Services sub-services */}
           <Route path="/services/ui/ux" element={<Navigate to="/ui-ux-design-agency/" replace />} />
           
           <Route path="/motion-graphics-services/" element={<MotionGraphics />} />
           
           <Route path="/digital-marketing-services/social-media/" element={<SocialMedia />} />
           
           <Route path="/mobile-apps-services/" element={<MobileApps />} />
           
           <Route path="/marketing-sales-collateral-design-services/" element={<MarketingSalesCollateralDesign />} />
           
           
           {/* Marketing Automation sub-services */}

           
           <Route path="/marketing-automation-services/pardot/" element={<Pardot />} />
           <Route path="/services/salesforce-pardot" element={<Navigate to="/marketing-automation-services/pardot/" replace />} />

           <Route path="/marketing-automation-services/marketing-cloud/" element={<MarketingCloud />} />
           <Route path="/services/salesforce-marketing-cloud" element={<Navigate to="/marketing-automation-services/marketing-cloud/" replace />} />

           <Route path="/marketing-automation-services/eloqua/" element={<Eloqua />} />
           <Route path="/services/eloqua" element={<Navigate to="/marketing-automation-services/eloqua/" replace />} />

           <Route path="/services/marketing-cloud" element={<Navigate to="/salesforce-services/marketing-cloud/" replace />} />
           
           {/* Digital Marketing sub-services */}
           <Route path="/digital-marketing-services/ppc/" element={<PPC />} />
           <Route path="/digital-marketing-services/paid-ads" element={<PaidAds />} />
           <Route path="/digital-marketing-services/seo/" element={<SEO />} />
           <Route path="/digital-marketing-services/orm-services/" element={<ORMServices />} />
           <Route path="/digital-marketing-services/account-based-marketing-abm/" element={<ABM />} />
           <Route path="/digital-marketing-services/cro/" element={<CRO />} />
           <Route path="/digital-marketing-services/ecommerce-marketing/" element={<EcommerceMarketing />} />
           <Route path="/digital-marketing-services/social-media/" element={<SocialMedia />} />
           

           {/* Strategic Services - new kebab-case URLs */}
           <Route path="/strategic-services" element={<StrategicServices />} />
           <Route path="/strategic-services/growth-marketing-pod" element={<GrowthMarketingPod />} />
           <Route path="/strategic-services/enterprise-planning" element={<EnterprisePlanning />} />
           <Route path="/strategic-services/strategic-opportunity-assessment" element={<StrategicOpportunityAssessment />} />
           <Route path="/strategic-services/demand-generation-strategy" element={<DemandGeneration />} />
           <Route path="/strategic-services/ai-optimized-enterprise-resource-planning" element={<AIOptimizedEnterprise />} />
           
           {/* Additional Analytics Services */}

           <Route path="/marketing-analytics-services/marketing-analytics" element={<MarketingAnalytics />} />
           <Route path="/marketing-analytics-services/" element={<MarketingAnalyticsServices />} />
           
           {/* Salesforce sub-services */}
           <Route path="/salesforce-services/salesforce-ai-enablement/" element={<SalesforceAIEnablement />} />
           <Route path="/salesforce-services/einstein-analytics/" element={<EinsteinAnalytics />} />
           <Route path="/salesforce-services/sales-cloud/" element={<SalesCloud />} />
           <Route path="/salesforce-services/commerce-cloud/" element={<CommerceCloud />} />
           <Route path="/salesforce-services/service-cloud/" element={<ServiceCloud />} />
           <Route path="/salesforce-services/experience-cloud/" element={<ExperienceCloud />} />
           <Route path="/salesforce-services/cpq/" element={<CPQ />} />
           <Route path="/salesforce-services/marketing-cloud/" element={<SalesforceMarketingCloud />} />
           <Route path="/services/salesforce-nonprofit-cloud" element={<SalesforceNonprofitCloud />} />
           
           {/* New Analytics services */}

           <Route path="/marketing-analytics-services/data-warehousing-etl/" element={<DataWarehousingETL />} />
           
           <Route path="/marketing-analytics-services/self-service-bi-data-democratization/" element={<SelfServiceBIDataDemocratization />} />
          
           <Route path="/marketing-analytics-services/real-time-ai-powered-analytics/" element={<RealTimeAIPoweredAnalytics />} />
           
           {/* New Digital Marketing services */}

           {/* Jira Professional Services - new kebab-case URLs */}
           <Route path="/jira-professional-services" element={<JiraProfessionalServices />} />
           <Route path="/jira-professional-services/jira-strategy-implementation" element={<JiraStrategyImplementation />} />
           
           <Route path="/jira-professional-services/jira-migration-configuration" element={<JiraMigrationConfiguration />} />
           
           <Route path="/jira-professional-services/jira-automation-workflow" element={<JiraAutomationWorkflow />} />
           
           <Route path="/jira-professional-services/jira-support-maintenance" element={<JiraSupportMaintenance />} />
           
           {/* Content Marketing Services */}
           <Route path="/content-marketing-services/" element={<ContentMarketingServices />} />
           
           <Route path="/content-marketing-services/website-copywriting" element={<WebsiteCopywriting />} />
           
           <Route path="/content-marketing-services/email-lifecycle-copywriting" element={<EmailLifecycleCopywriting />} />
           
           <Route path="/content-marketing-services/social-media-ad-copywriting" element={<SocialMediaAdCopywriting />} />
           
           <Route path="/content-marketing-services/content-strategy-planning" element={<ContentStrategyPlanning />} />
           
           <Route path="/content-marketing-services/blog-longform-content" element={<BlogLongformContent />} />
          
           <Route path="/content-marketing-services/ghostwriting" element={<ThoughtLeadershipGhostwriting />} />
          
           {/* Growth Labs routes */}
           <Route path="/growth-labs/ai-experiments" element={<AiExperiments />} />
           <Route path="/growth-labs/ai-chatbot" element={<AiChatbot />} />
           <Route path="/growth-labs/beta-programs" element={<BetaPrograms />} />
           <Route path="/growth-labs/market-research" element={<MarketResearch />} />
           <Route path="/growth-labs/case-studies" element={<CaseStudies />} />
           <Route path="/growth-labs/developer-community" element={<DeveloperCommunity />} />
           <Route path="/growth-labs/open-source" element={<OpenSource />} />
           <Route path="/growth-labs/diggrowth" element={<DiGGrowth />} />
           <Route path="/growth-labs/networkon" element={<NetworkON />} />
           <Route path="/growth-labs/pixel-dino" element={<PixelDino />} />
           
           {/* Resources routes */}
           <Route path="/blogs" element={<Blog />} />
           <Route path="/blogs/:slug" element={<BlogPost />} />
           <Route path="/blogs/:category/:slug" element={<BlogPost />} />
           <Route path="/resources/whitepapers" element={<Whitepapers />} />
           <Route path="/resources/roi-calculator" element={<RoiCalculator />} />
           <Route path="/downloadable-assets" element={<DownloadableAssets />} />
           <Route path="/downloadable-assets/:category/:slug" element={<DownloablePost />} />
           <Route path="/resources/documentation" element={<Documentation />} />
           <Route path="/resources/support" element={<Support />} />
           <Route path="/resources/tools" element={<DownloadableAssets />} />
           <Route path="/case-studies" element={<ResourcesCaseStudies />} />
           <Route path="/case-studies/:slug" element={<ResourcesCaseStudiesPost />} />
           <Route path="/infographics" element={<Infographics />} />
           <Route path="/resources/terms-conditions" element={<TermsConditions />} />
           <Route path="/resources/privacy-policy" element={<PrivacyPolicy />} />
           <Route path="/resources/cookie-policy" element={<CookiePolicy />} />
           <Route path="/resources/editorial-policy" element={<EditorialPolicy />} />
           <Route path="/ebooks" element={<EBooks />} />
           <Route path="/ebooks/:slug" element={<EBooksPost />} />
           <Route path="/growth-stream" element={<GrowthStream />} />
           <Route path="/growth-stream/:slug" element={<GrowthStreamPost />} />
           <Route path="/press-release" element={<PressRelease />} />
           <Route path="/resources/downloadableassets" element={<DownloadableAssets />} />
           
           {/* Company routes */}
           <Route path="/about/" element={<About />} />

           <Route path="/contact" element={<Contact />} />
           <Route 
             path="/contact" 
             element={<Navigate to="/contact/" replace />} 
           />          
           <Route path="/contact" element={<Navigate to="/company/contact" replace />} />
           <Route path="/meet-the-team/" element={<Team />} />

           <Route path="/careers" element={<Careers />} />

           <Route path="/faqs/" element={<FAQs />} />
           <Route path="/faqs" element={<Navigate to="/faqs/" replace />} />

           <Route path="/company/locations" element={<Locations />} />
           <Route path="/company/press" element={<Press />} />
           
           {/* L3 Template */}
           <Route path="/l3-template" element={<L3Template />} />

           {/* Web Development L3 -> New SEO paths */}
           <Route path="/development-services/web-development/site-optimization-services/" element={<SiteOptimization />} />
           
           <Route path="/development-services/web-development/content-management-system/" element={<CMSDevelopment />} />
           
           {/* ABM L3 -> New SEO paths */}
           <Route path="/digital-marketing-services/account-based-marketing-abm/6sense-services/" element={<SixSenseServices />} />
           
           <Route path="/digital-marketing-services/account-based-marketing-abm/demandbase-services/" element={<DemandbaseServices />} />
           
           <Route path="/digital-marketing-services/account-based-marketing-abm/recotap-services/" element={<RecotapServices />} />
           
           <Route path="/digital-marketing-services/account-based-marketing-abm/rollworks-services/" element={<RollworksServices />} />
          
          
           {/* E-commerce marketing new paths + redirects from short L3 */}
           <Route path="/digital-marketing-services/ecommerce-marketing/amazon-marketing-services/" element={<Amazon />} />
           
           <Route path="/digital-marketing-services/ecommerce-marketing/mailchimp-services/" element={<Mailchimp />} />
           
           <Route path="/digital-marketing-services/ecommerce-marketing/walmart-services/" element={<Walmart />} />
           
           {/* Existing L3 mailchimp under ecommerce-strategy kept for compatibility */}
           <Route path="/digital-marketing-services/ecommerce-strategy/L3/mailchimp" element={<Mailchimp />} />

           {/* ORM GMB */}
           <Route path="/digital-marketing-services/orm-services/gmb/" element={<GMB />} />
           
           {/* PPC new paths */}
           <Route path="/digital-marketing-services/ppc/google-ads/" element={<Google />} />
           <Route path="/digital-marketing-services/ppc/linkedin-ads/" element={<Linkedin />} />
           <Route path="/digital-marketing-services/ppc/meta-ads/" element={<Meta />} />

           {/* SEO L3 -> New SEO paths */}
           <Route path="/digital-marketing-services/seo/ai-seo-readiness-calculator/" element={<AiSeoReadinessCalculator />} />

           <Route path="/digital-marketing-services/seo/content-marketing/" element={<ContentMarketingServices />} />

           <Route path="/digital-marketing-services/seo/guest-posting/" element={<SEOguest />} />

           <Route path="/digital-marketing-services/seo/technical-seo/" element={<SEOTechnical />} />
         

            <Route path="/digital-marketing-services/seo/on-page-seo/" element={<Onpage />} />

            <Route path="/digital-marketing-services/seo/off-page-seo/" element={<Offpage />} />
           
           {/* Data Visualization L3 -> New SEO paths */}
           <Route path="/marketing-analytics-services/data-visualization/datorama/" element={<Datorama />} />
           <Route path="/marketing-analytics-services/data-visualization/datoroma/" element={<Navigate to="/marketing-analytics-services/data-visualization/datorama/" replace />} />
           
           <Route path="/marketing-analytics-services/data-visualization/looker-studio/" element={<LookerStudio />} />
           
           <Route path="/marketing-analytics-services/data-visualization/power-bi/" element={<Power />} />
           
           <Route path="/marketing-analytics-services/data-visualization/tableau/" element={<Tableau />} />
           
           {/* Web Analytics L3 -> New SEO paths */}
           <Route path="/marketing-analytics-services/web-analytics/adobe-analytics/" element={<AdobeAnalytics />} />
           
           <Route path="/marketing-analytics-services/web-analytics/google-analytics/" element={<GoogleAnalytics />} />
           
           <Route path="/marketing-analytics-services/web-analytics/matomo/" element={<Matomo />} />
           
           <Route path="/marketing-analytics-services/web-analytics/ga4-parallel-tracking/" element={<GA4 />} />
           
           <Route path="/marketing-analytics-services/web-analytics/piwik-pro/" element={<Piwik />} />
           
           {/* CRO L3 -> New SEO paths */}
           <Route path="/marketing-analytics-services/conversion-rate-optimization-cro/adobe-target/" element={<AdobeTarget />} />
           
           <Route path="/marketing-analytics-services/conversion-rate-optimization-cro/optimizely/" element={<Optimizely />} />
          
           <Route path="/marketing-analytics-services/conversion-rate-optimization-cro/vwo/" element={<VWO />} />
           
           {/* Other existing L3 routes retained for compatibility */}
           
           {/* Social Media L3 -> New SEO paths */}
           <Route path="/digital-marketing-services/social-media/meta-services/" element={<SMMMeta />} />
           <Route path="/digital-marketing-services/social-media/instagram-marketing/" element={<SMMInstagram />} />
           <Route path="/digital-marketing-services/social-media/linkedin-marketing/" element={<SMMlinkedin />} />
           <Route path="/digital-marketing-services/social-media/twitter-marketing/" element={<SMMX />} />
           
           {/* Eloqua L3 -> New SEO paths */}
           <Route path="/marketing-automation-services/eloqua/audit-services/" element={<EloquaAudit />} />
           
           <Route path="/marketing-automation-services/eloqua/consulting/" element={<EloquaConsulting />} />
           
           <Route path="/marketing-automation-services/eloqua/implementation/" element={<EloquaImplementation />} />
          
           <Route path="/marketing-automation-services/eloqua/migration-services/" element={<EloquaMigration />} />
           
           <Route path="/marketing-automation-services/eloqua/reporting-analytics-services/" element={<EloquaReporting />} />
           
           {/* HubSpot L3 -> New SEO paths */}
           <Route path="/marketing-automation-services/hubspot/audit/" element={<HubSpotAudit />} />
          
           <Route path="/marketing-automation-services/hubspot/consulting/" element={<HubSpotConsulting />} />
           
           <Route path="/marketing-automation-services/hubspot/crm/" element={<HubSpotCRM />} />
           
           <Route path="/marketing-automation-services/hubspot/managed-services/" element={<HubSpotManagedServices />} />
           
           <Route path="/marketing-automation-services/hubspot/operations/" element={<HubSpotOperations />} />
           
           <Route path="/marketing-automation-services/hubspot/training/" element={<HubspotTraining />} />
           
           {/* Marketo L3 -> New SEO paths */}
           <Route path="/marketing-automation-services/marketo/consulting" element={<MarketoConsulting />} />
           <Route path="/marketing-automation-services/marketo/integration" element={<MarketoIntegration />} />
           <Route path="/marketing-automation-services/marketo/assest-development" element={<MarketoAssetDevelopment />} />
           <Route path="/marketing-automation-services/marketo/training" element={<Marketotraining />} />
           <Route path="/marketing-automation-services/marketo/operations" element={<MarketoAssetOperations />} />
           {/* Pardot L3 -> New SEO paths */}
           <Route path="/marketing-automation-services/pardot/consulting/" element={<PardotConsulting />} />
           
           <Route path="/marketing-automation-services/pardot/managed-services/" element={<PardotManagedServices />} />
           
           <Route path="/marketing-automation-services/pardot/operations/" element={<PardotOperations />} />
           
           <Route path="/marketing-automation-services/pardot/training/" element={<PardotTraining />} />
           
           
           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
           <Route path="*" element={<NotFound />} />
         </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
