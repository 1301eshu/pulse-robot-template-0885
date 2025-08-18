import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <section className="w-full min-h-screen bg-white pt-28 md:pt-36 pb-16">
  <div className="max-w-5xl mx-auto px-4">
    {/* Main Heading */}
    <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-10">
      Cookie Policy
    </h1>
          
          <h3 className="text-xl font-bold text-black mb-3 mt-6">Use of Cookies</h3>
          <p className="mb-6 text-black">
            We use cookies and similar tracking technologies to improve your experience on our website. You can modify your browser settings to manage cookies, but note that disabling cookies may affect your ability to access certain features of our site.
          </p>
          <p className="mb-8 text-black">
            Below are various cookies utilized for distinct purposes on our website:
          </p>
          
          {/* Cookies Table/List */}
          <div className="mb-10">
            <h4 className="text-lg font-bold text-black mb-2">Technical Cookies</h4>
            <p className="mb-4 text-black">
              These cookies manage essential functions such as logging in, form completion and privacy setting adjustments, ensuring optimal website functionality. Blocking these cookies in your browser settings may affect the display and performance of certain site features.
            </p>
            
            <h4 className="text-lg font-bold text-black mb-2">Customization Cookies</h4>
            <p className="mb-4 text-black">
              These cookies, whether from us or third-party providers, enhance website personalization and functionality. Disabling these cookies may impact the proper functioning of certain services on our pages, affecting your tailored experience.
            </p>
            
            <h4 className="text-lg font-bold text-black mb-2">Advertising Cookies</h4>
            <p className="mb-4 text-black">
              Employed to create a user profile for targeted advertising on external websites by our advertising partners. Opting out of these cookies may result in seeing less personalized advertisements during your internet browsing.
            </p>
            
            <h4 className="text-lg font-bold text-black mb-2">Behavioral Advertising Cookies</h4>
            <p className="mb-4 text-black">
              Employed to create a user profile for targeted advertising on external websites by our advertising partners. Opting out of these cookies may result in seeing less personalized advertisements during your internet browsing.
            </p>
            
            <h4 className="text-lg font-bold text-black mb-2">Performance Cookies</h4>
            <p className="mb-4 text-black">
              Enabling us to measure and enhance site performance by tracking visit numbers and traffic sources. Disabling these cookies prevents us from tracking your site visits, potentially hindering overall website performance improvements.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-black mb-4 mt-10">Managing Cookies</h2>
          <p className="mb-12 text-black">
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}