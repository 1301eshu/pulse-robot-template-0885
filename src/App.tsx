
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScriptManager from "./components/ScriptManager";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Main section pages
import Services from "./pages/Services";
import GrowthLabs from "./pages/GrowthLabs";
import Resources from "./pages/Resources";
import Company from "./pages/Company";

// Service pages
import MarketingAutomation from "./pages/services/MarketingAutomation";
import AiRevops from "./pages/services/AiRevops";
import Salesforce from "./pages/services/Salesforce";
import PerformanceMarketing from "./pages/services/PerformanceMarketing";
import Development from "./pages/services/Development";
import Analytics from "./pages/services/Analytics";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import DesignServices from "./pages/services/DesignServices";

// Sub-service pages
import WebAnalytics from "./pages/services/WebAnalytics";
import DataVisualization from "./pages/services/DataVisualization";
import GA4Migration from "./pages/services/GA4Migration";
import CRO from "./pages/services/CRO";
import AdobeExperiencePlatform from "./pages/services/AdobeExperiencePlatform";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import WebDevelopment from "./pages/services/WebDevelopment";
import TestingQA from "./pages/services/TestingQA";
import DevOps from "./pages/services/DevOps";
import UIUXDesign from "./pages/services/UIUXDesign";
import MarketingAssets from "./pages/services/MarketingAssets";
import MotionGraphics from "./pages/services/MotionGraphics";
import SocialMedia from "./pages/services/SocialMedia";
import HubSpot from "./pages/services/HubSpot";
import Marketo from "./pages/services/Marketo";
import SalesforcePardot from "./pages/services/SalesforcePardot";
import SalesforceMarketingCloud from "./pages/services/SalesforceMarketingCloud";
import Eloqua from "./pages/services/Eloqua";
import PaidAds from "./pages/services/PaidAds";
import SEO from "./pages/services/SEO";

// New Salesforce service pages
import SalesforceAI from "./pages/services/SalesforceAI";
import SalesCloud from "./pages/services/SalesCloud";
import CommerceCloud from "./pages/services/CommerceCloud";
import SalesforceEinstein from "./pages/services/SalesforceEinstein";
import ServiceCloud from "./pages/services/ServiceCloud";
import ExperienceCloud from "./pages/services/ExperienceCloud";
import SalesforceCPQ from "./pages/services/SalesforceCPQ";

// New Digital Marketing service pages
import ORM from "./pages/services/ORM";
import ABM from "./pages/services/ABM";
import SMM from "./pages/services/SMM";
import Ecommerce from "./pages/services/Ecommerce";

// Growth Labs pages
import AiExperiments from "./pages/growth-labs/AiExperiments";
import BetaPrograms from "./pages/growth-labs/BetaPrograms";
import MarketResearch from "./pages/growth-labs/MarketResearch";
import CaseStudies from "./pages/growth-labs/CaseStudies";
import DeveloperCommunity from "./pages/growth-labs/DeveloperCommunity";
import OpenSource from "./pages/growth-labs/OpenSource";
import DiGGrowth from "./pages/growth-labs/DiGGrowth";
import NetworkON from "./pages/growth-labs/NetworkON";
import PixelDino from "./pages/growth-labs/PixelDino";

// Resources pages
import Blog from "./pages/resources/Blog";
import BlogPost from "./pages/resources/BlogPost";
import Whitepapers from "./pages/resources/Whitepapers";
import RoiCalculator from "./pages/resources/RoiCalculator";
import Templates from "./pages/resources/Templates";
import Documentation from "./pages/resources/Documentation";
import Support from "./pages/resources/Support";
import ResourcesCaseStudies from "./pages/resources/CaseStudies";
import Infographics from "./pages/resources/Infographics";

// Company pages
import About from "./pages/company/About";
import Contact from "./pages/company/Contact";
import Team from "./pages/company/Team";
import Careers from "./pages/company/Careers";
import Locations from "./pages/company/Locations";
import Press from "./pages/company/Press";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScriptManager />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main section routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/growth-labs" element={<GrowthLabs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
          
          {/* Service routes */}
          <Route path="/services/marketing-automation" element={<MarketingAutomation />} />
          <Route path="/services/ai-revops" element={<AiRevops />} />
          <Route path="/services/salesforce" element={<Salesforce />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/services/development" element={<Development />} />
          <Route path="/services/analytics" element={<Analytics />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/design-services" element={<DesignServices />} />
          
          {/* Marketing Analytics sub-services */}
          <Route path="/services/web-analytics" element={<WebAnalytics />} />
          <Route path="/services/data-visualization" element={<DataVisualization />} />
          <Route path="/services/ga4-migration" element={<GA4Migration />} />
          <Route path="/services/cro" element={<CRO />} />
          <Route path="/services/adobe-experience-platform" element={<AdobeExperiencePlatform />} />
          
          {/* Development Services sub-services */}
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/testing-&-qa" element={<TestingQA />} />
          <Route path="/services/devops" element={<DevOps />} />
          
          {/* Design Services sub-services */}
          <Route path="/services/ui/ux" element={<UIUXDesign />} />
          <Route path="/services/marketing-assets" element={<MarketingAssets />} />
          <Route path="/services/motion-graphics" element={<MotionGraphics />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          
          {/* Marketing Automation sub-services */}
          <Route path="/services/hubspot" element={<HubSpot />} />
          <Route path="/services/marketo" element={<Marketo />} />
          <Route path="/services/salesforce-pardot" element={<SalesforcePardot />} />
          <Route path="/services/salesforce-marketing-cloud" element={<SalesforceMarketingCloud />} />
          <Route path="/services/eloqua" element={<Eloqua />} />
          
          {/* Digital Marketing sub-services */}
          <Route path="/services/paid-ads" element={<PaidAds />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/orm" element={<ORM />} />
          <Route path="/services/abm" element={<ABM />} />
          <Route path="/services/smm" element={<SMM />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          
          {/* Salesforce sub-services */}
          <Route path="/services/salesforce-ai" element={<SalesforceAI />} />
          <Route path="/services/sales-cloud" element={<SalesCloud />} />
          <Route path="/services/commerce-cloud" element={<CommerceCloud />} />
          <Route path="/services/salesforce-einstein" element={<SalesforceEinstein />} />
          <Route path="/services/service-cloud" element={<ServiceCloud />} />
          <Route path="/services/experience-cloud" element={<ExperienceCloud />} />
          <Route path="/services/salesforce-cpq" element={<SalesforceCPQ />} />
          
          {/* Growth Labs routes */}
          <Route path="/growth-labs/ai-experiments" element={<AiExperiments />} />
          <Route path="/growth-labs/beta-programs" element={<BetaPrograms />} />
          <Route path="/growth-labs/market-research" element={<MarketResearch />} />
          <Route path="/growth-labs/case-studies" element={<CaseStudies />} />
          <Route path="/growth-labs/developer-community" element={<DeveloperCommunity />} />
          <Route path="/growth-labs/open-source" element={<OpenSource />} />
          <Route path="/growth-labs/diggrowth" element={<DiGGrowth />} />
          <Route path="/growth-labs/networkon" element={<NetworkON />} />
          <Route path="/growth-labs/pixel-dino" element={<PixelDino />} />
          
          {/* Resources routes */}
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/blog/:category/:slug" element={<BlogPost />} />
          <Route path="/resources/blog/:slug" element={<BlogPost />} /> {/* Legacy support */}
          <Route path="/resources/whitepapers" element={<Whitepapers />} />
          <Route path="/resources/roi-calculator" element={<RoiCalculator />} />
          <Route path="/resources/templates" element={<Templates />} />
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/support" element={<Support />} />
          <Route path="/resources/tools" element={<Templates />} />
          <Route path="/resources/case-studies" element={<ResourcesCaseStudies />} />
          <Route path="/resources/infographics" element={<Infographics />} />
          
          {/* Company routes */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/contact" element={<Contact />} />
          <Route path="/company/team" element={<Team />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/locations" element={<Locations />} />
          <Route path="/company/press" element={<Press />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
