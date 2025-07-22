import { useEffect, useRef } from 'react';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  className?: string;
}

const HubSpotForm = ({ portalId, formId, className = "" }: HubSpotFormProps) => {
  const formIdRef = useRef(`hubspot-form-${formId}`);

  useEffect(() => {
    // Load HubSpot script if not already loaded
    if (!window.hbspt) {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/v2.js';
      script.async = true;
      script.onload = () => {
        createForm();
      };
      document.body.appendChild(script);
    } else {
      createForm();
    }

   function createForm() {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId,
          formId,
          target: `#${formIdRef.current}`,
        });
      }
    }
  }, [portalId, formId]);

  return <div id={formIdRef.current} className={className} />;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    hbspt: any;
  }
}

export default HubSpotForm;