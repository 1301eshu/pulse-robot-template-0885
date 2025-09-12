// declare global {
//   interface Window {
//     hbspt?: {
//       forms: {
//         create: (options: any) => void;
//       };
//     };
//   }
// }


// import { useEffect } from "react";

// interface HubSpotFormProps {
//   portalId: string;
//   formId: string;
//   region?: string;
//   targetId?: string;
//   assetFieldName?: string;
//   assetFieldNameLabel?: string;
//   assetLabel?: string;
//   assetURL?: string;
// }

// const HubSpotForm = ({
//   portalId,
//   formId,
//   region = "na1",
//   targetId = "hubspotFormContainer",
//   assetFieldName,
//   assetFieldNameLabel,
//   assetLabel,
//   assetURL,
// }: HubSpotFormProps) => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "//js.hsforms.net/forms/embed/v2.js";
//     script.type = "text/javascript";
//     script.charset = "utf-8";

//     script.onload = () => {
//       if (window.hbspt) {
//         window.hbspt.forms.create({
//           region,
//           portalId,
//           formId,
//           target: `#${targetId}`,
//           onFormReady: ($form: HTMLElement) => {
//             const formEl = $form.querySelector("form");
//             if (formEl) {
//               // Find the asset field by name and set its value
//               if (assetFieldName) {
//                 const assetInput = formEl.querySelector(
//                   `input[name="${assetFieldName}"]`
//                 ) as HTMLInputElement | null;
//                 assetInput.value = assetURL;
//                 assetInput.dispatchEvent(new Event("input", { bubbles: true }));
//               }

//               // Optional: update label element if needed
//               if (assetFieldNameLabel) {
//                 const labelEl = formEl.querySelector(
//                   `input[name="${assetFieldNameLabel}"]`
//                 );
//                 if (labelEl) {
//                   labelEl.textContent = assetFieldNameLabel;
//                 }
//               }
//             }
//           },
//           onFormSubmit: () => {
//             if (assetURL) {
//               window.open(assetURL, "_blank"); // Or use download logic below
//             }
//           }, onFormSubmitted: () => {
//             // shrink container only after thank-you message is displayed
//             const formContainer = document.getElementById(targetId);
//             if (formContainer) {
//               formContainer.style.height = "30px";
//               formContainer.style.overflow = "hidden";
//             }
//           },

//         });
//       }
//     };

//     document.body.appendChild(script);

//     return () => {
//       // Optional cleanup: remove form if component unmounts
//       const formContainer = document.getElementById(targetId);
//       if (formContainer) formContainer.innerHTML = "";
//     };
//   }, [portalId, formId, region, targetId]);

//   return <div id={targetId}></div>;
// };

// export default HubSpotForm;
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: any) => void;
      };
    };
  }
}

import { useEffect, useRef } from "react";

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  targetId?: string;
  assetFieldName?: string;
  assetFieldNameLabel?: string;
  assetLabel?: string;
  assetURL?: string;
}

const HubSpotForm = ({
  portalId,
  formId,
  region = "na1",
  targetId = "hubspotFormContainer",
  assetFieldName,
  assetFieldNameLabel,
  assetLabel,
  assetURL,
}: HubSpotFormProps) => {
  // Keep reference to HubSpot form element
  const formRef = useRef<HTMLFormElement | null>(null);

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

          onFormReady: ($form: HTMLElement) => {
            console.log("[HubSpot] Form is ready. Container content:", $form.innerHTML);

            // Try to find your hidden inputs immediately
            if (assetFieldName && assetURL) {
              const assetInput = $form.querySelector<HTMLInputElement>(
                `input[name="${assetFieldName}"]`
              );
              if (assetInput) {
                assetInput.value = assetURL;
                assetInput.dispatchEvent(new Event("input", { bubbles: true }));
                assetInput.dispatchEvent(new Event("change", { bubbles: true }));
                console.log(`[HubSpot] Set hidden field "${assetFieldName}" to:`, assetInput.value);
              } else {
                console.warn(`[HubSpot] Could not find hidden input with name="${assetFieldName}"`);
              }
            }
             if (assetFieldNameLabel && assetLabel) {
              const assetInput = $form.querySelector<HTMLInputElement>(
                `input[name="${assetFieldNameLabel}"]`
              );
              if (assetInput) {
                assetInput.value = assetLabel;
                assetInput.dispatchEvent(new Event("input", { bubbles: true }));
                assetInput.dispatchEvent(new Event("change", { bubbles: true }));
                console.log(`[HubSpot] Set hidden field "${assetFieldNameLabel}" to:`, assetInput.value);
              } else {
                console.warn(`[HubSpot] Could not find hidden input with name="${assetFieldNameLabel}"`);
              }
            }
          },

          onFormSubmit: () => {
            console.log("[HubSpot] Form submit triggered");

            const formContainer = document.getElementById(targetId);
            if (formContainer && assetFieldName && assetURL) {
              const assetInput = formContainer.querySelector<HTMLInputElement>(
                `input[name="${assetFieldName}"]`
              );
              if (assetInput) {
                assetInput.value = assetURL;
                assetInput.dispatchEvent(new Event("input", { bubbles: true }));
                assetInput.dispatchEvent(new Event("change", { bubbles: true }));
                console.log(
                  `[HubSpot] Re-applied hidden field "${assetFieldName}" before submit:`,
                  assetInput.value
                );
              } else {
                console.warn(`[HubSpot] Could not find hidden input "${assetFieldName}" at submit`);
              }
            }

            if (assetURL) {
              console.log("[HubSpot] Opening asset URL:", assetURL);
              window.open(assetURL, "_blank");
            }
          },

          onFormSubmitted: () => {
            console.log("[HubSpot] Form successfully submitted");

            const formContainer = document.getElementById(targetId);
            if (formContainer) {
              formContainer.style.height = "30px";
              formContainer.style.overflow = "hidden";
              console.log("[HubSpot] Shrunk form container");
            }
          },
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      const formContainer = document.getElementById(targetId);
      if (formContainer) formContainer.innerHTML = "";
    };
  }, [portalId, formId, region, targetId, assetFieldName, assetURL, assetFieldNameLabel]);

  return <div id={targetId}></div>;
};

export default HubSpotForm;
