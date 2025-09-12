export interface ScriptConfig {
  id: string;
  name: string;
  headScript?: string;
  bodyScript?: string;
  enabled: boolean;
  trackingId?: string;
}

export const scriptsConfig: ScriptConfig[] = [
  {
    id: 'google-tag-manager',
    name: 'Google Tag Manager',
    trackingId: 'GTM-NZGGQ4H',
    headScript: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NZGGQ4H');`,
    bodyScript: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NZGGQ4H"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`,
    enabled: true,
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics 4',
    trackingId: 'G-LPE7TPGYZ8',
    headScript: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-LPE7TPGYZ8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-LPE7TPGYZ8');
</script>`,
    enabled: true,
  },
  {
    id: 'hubspot-tracking',
    name: 'HubSpot Tracking',
    trackingId: '20797637',
    headScript: `<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/20797637.js"></script>`,
    enabled: true
  },
  {
    id: 'hubspot-forms',
    name: 'HubSpot Forms',
    trackingId: '20797637',
    headScript: `<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>`,
    enabled: true
  },
  {
    id: 'diggrowth-tracking',
    name: 'Diggrowth Tracking',
    trackingId: '50200',
    headScript: `<script type="text/javascript" src="https://app.diggrowth.com/track.js?webtrack_id=50200&user_id=989556"></script>`,
    enabled: true
  },
  {
    id: 'inlinks',
    name: 'InLinks',
    trackingId: '49223',
    bodyScript: `<script defer src="https://jscloud.net/x/49223/inlinks.js"></script>`,
    enabled: true
  },
  {
    id: 'microsoft-clarity',
    name: 'Microsoft Clarity',
    trackingId: 'smizqudwsk',
    headScript: `<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "smizqudwsk");
</script>`,
    enabled: true
  }
];