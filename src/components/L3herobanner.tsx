import React, { useState, FormEvent, ChangeEvent } from "react";
import HubSpotForm from "@/components/HubSpotForm";

type ContactWithBgProps = {
  heading: string;
  highlight?: string;
  description?: string;
  /** Optional: override background image URL */
  backgroundImage?: string;
  className?: string;
  countries?: string[];
  onSubmit?: (data: ContactFormData) => Promise<void> | void;
};

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  message: string;
};

const DEFAULT_COUNTRIES = ["India", "USA", "UK"];
const DEFAULT_BG =
  "https://jhtpqlptodpdsixlblpx.supabase.co/storage/v1/object/public/media/Mega%20Menu/Homepage/Hero%20Section/8302_gqqgrs.webp";

const ContactWithBg: React.FC<ContactWithBgProps> = ({
  heading,
  highlight,
  description,
  backgroundImage = DEFAULT_BG,
  className = "",
  countries = DEFAULT_COUNTRIES,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const simulateSubmit = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        await simulateSubmit();
      }
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        country: "",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`py-28 text-white ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="section-wrapper grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <div className="space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {heading}{" "}
            {highlight && (
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </h2>
          {description && (
            <p className="text-lg text-gray-200 max-w-md">{description}</p>
          )}
        </div>

        {/* Right - Form */}
        <div className="bg-white text-black p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-md">
         <HubSpotForm
                portalId="7118070"
                formId="462af1d3-4316-4ea5-a5ad-98eabe95b77b"
                region="na1" // Change if needed
              />
        </div>
      </div>
    </section>
  );
};

export default ContactWithBg;
