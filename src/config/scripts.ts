export interface ScriptConfig {
  id: string;
  name: string;
  src?: string;
  innerHTML?: string;
  async?: boolean;
  defer?: boolean;
  type?: string;
  active: boolean;
  priority: number; // Lower numbers load first
  attributes?: Record<string, string>;
}

export const SCRIPT_CONFIGS: ScriptConfig[] = [
  // Google Tag Manager
  {
    id: 'gtm',
    name: 'Google Tag Manager',
    innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');`,
    type: 'text/javascript',
    active: true,
    priority: 1,
  },
  
  // Adobe Analytics
  {
    id: 'adobe-analytics',
    name: 'Adobe Analytics',
    src: 'https://assets.adobedtm.com/YOUR_ADOBE_PROPERTY_ID/satelliteLib-XXXXXX.js',
    async: true,
    active: true,
    priority: 2,
  },
  
  // InLinks Script
  {
    id: 'inlinks',
    name: 'InLinks SEO',
    innerHTML: `(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id; js.async = true;
  js.src = "https://inlinks.com/js/inlinks.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'inlinks-js'));`,
    type: 'text/javascript',
    active: true,
    priority: 3,
  },
  
  // Hotjar - Heatmaps and User Behavior
  {
    id: 'hotjar',
    name: 'Hotjar Analytics',
    innerHTML: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
    type: 'text/javascript',
    active: false, // Disabled by default
    priority: 4,
  },
  
  // Schema.org Structured Data
  {
    id: 'structured-data',
    name: 'Structured Data',
    innerHTML: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Growth Natives",
  "url": "https://growthnatives.com",
  "description": "B2B Marketing & CRM Automation Agency"
}`,
    type: 'application/ld+json',
    active: true,
    priority: 5,
  },
  
  // Microsoft Clarity
  {
    id: 'clarity',
    name: 'Microsoft Clarity',
    innerHTML: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "YOUR_CLARITY_ID");`,
    type: 'text/javascript',
    active: false, // Disabled by default
    priority: 6,
  },
];

// Helper functions for script management
export const getActiveScripts = (): ScriptConfig[] => {
  return SCRIPT_CONFIGS.filter(script => script.active)
    .sort((a, b) => a.priority - b.priority);
};

export const getScriptById = (id: string): ScriptConfig | undefined => {
  return SCRIPT_CONFIGS.find(script => script.id === id);
};

export const toggleScript = (id: string, active: boolean): void => {
  const script = SCRIPT_CONFIGS.find(s => s.id === id);
  if (script) {
    script.active = active;
  }
};