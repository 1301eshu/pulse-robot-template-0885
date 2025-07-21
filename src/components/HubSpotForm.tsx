import { useEffect, useRef } from 'react';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  className?: string;
}

const HubSpotForm = ({ portalId, formId, className = "" }: HubSpotFormProps) => {
  const formRef = useRef<HTMLDivElement>(null);

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
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: portalId,
          formId: formId,
          target: formRef.current,
          css: `
            .hs-form {
              font-family: inherit;
            }
            .hs-form-field {
              margin-bottom: 1.25rem;
            }
            .hs-form-field > label {
              font-weight: 500;
              margin-bottom: 0.5rem;
              color: #374151;
              display: block;
            }
            .hs-input {
              width: 100%;
              padding: 0.75rem;
              border: 1px solid #d1d5db;
              border-radius: 0.5rem;
              font-size: 1rem;
              transition: all 0.2s;
            }
            .hs-input:focus {
              outline: none;
              border-color: #3b82f6;
              box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
            }
            .hs-button {
              width: 100%;
              background-color: #3b82f6;
              color: white;
              padding: 0.75rem 1.5rem;
              border: none;
              border-radius: 0.5rem;
              font-weight: 600;
              font-size: 1rem;
              cursor: pointer;
              transition: background-color 0.2s;
            }
            .hs-button:hover {
              background-color: #2563eb;
            }
            .hs-error-msgs {
              color: #ef4444;
              font-size: 0.875rem;
              margin-top: 0.25rem;
            }
            select.hs-input {
              background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
              background-position: right 0.5rem center;
              background-repeat: no-repeat;
              background-size: 1.5em 1.5em;
              padding-right: 2.5rem;
              appearance: none;
            }
          `
        });
      }
    }
  }, [portalId, formId]);

  return <div ref={formRef} className={className} />;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    hbspt: any;
  }
}

export default HubSpotForm;