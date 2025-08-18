declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: any) => void;
      };
    };
  }
}


import { useEffect } from "react";

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  targetId?: string;
}

const HubSpotForm = ({
  portalId,
  formId,
  region = "na1",
  targetId = "hubspotFormContainer",
}: HubSpotFormProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.charset = "utf-8";

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: `#${targetId}`,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Optional cleanup: remove form if component unmounts
      const formContainer = document.getElementById(targetId);
      if (formContainer) formContainer.innerHTML = "";
    };
  }, [portalId, formId, region, targetId]);

  return <div id={targetId}></div>;
};

export default HubSpotForm;
