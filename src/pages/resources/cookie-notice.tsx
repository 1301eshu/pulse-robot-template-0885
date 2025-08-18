import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <section className="w-full min-h-screen bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-10">
            Privacy Policy
          </h1>
          {/* Privacy Content */}
          <p className="mb-10 text-lg text-black">
            At Growth Natives, safeguarding the privacy of our clients and visitors is our unwavering commitment. This statement is designed to offer a comprehensive insight into how Growth Natives handles and safeguards your personal data. When you visit or log in to our website, cookies and similar technologies may be used by our online data partners or vendors to associate these activities with other personal information they or others have about you, including by association with your email or home address. We (or service providers on our behalf) may then send communications and marketing to these email or home addresses. Please be aware that by accessing and utilizing growthnatives.com, you acknowledge and agree to our policy, terms & conditions, and the practices outlined in this Privacy Policy page.
            <br /><br />
            Our Privacy Policy elucidates how we utilize the personal information gathered from you during your visit to our website. We periodically update this policy page, and we encourage you to revisit it regularly for any revisions. Your continued use of growthnatives.com constitutes acceptance of the terms outlined in this evolving Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-10">Information We Collect</h2>
          <p className="mb-6 text-black">
            We gather both personally identifiable information (PII) and non-personally identifiable information. PII may include your name, email address, contact information, and any other information you willingly provide. Non-PII may include data about your usage patterns, preferences, and interactions with our website. The data we collect is solely utilized to deliver our services to you. Furthermore, we may employ the information for the following purposes:
          </p>
          <ul className="list-disc pl-8 mb-6 text-black">
            <li>Providing you with prompt information related to our products or services, catering to your specific requests.</li>
            <li>Assisting you in accessing information about other products that align with your interests. However, additional information will only be sent if you have expressly consented to receive it.</li>
            <li>Notifying you of any changes to our website, services, or products.</li>
            <li>Sending information and details about our products or services, especially if you have previously availed of them.</li>
            <li>With your explicit consent, allowing selected third parties to use your information to provide details about products and services that may interest you.</li>
            <li>You retain the option to withdraw your consent at any time.</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4 mt-10">Your Acknowledgment of the Terms and Conditions of this Policy</h2>
          <p className="mb-8 text-black">
            By using our website, you express your acceptance of the terms outlined in this privacy policy. If you do not agree with the policy, we kindly request that you refrain from using Growth Natives’ site. Your ongoing use of Growth Natives’ site, after the communication of any alterations to this privacy policy, will be construed as your acknowledgment and acceptance of those modifications.
          </p>

          {/* --- COOKIE POLICY SECTION --- */}
          <h2 className="text-3xl font-bold text-black mb-6 mt-14">
            Cookie Policy
          </h2>
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
          <h2 className="text-2xl font-bold text-black mb-4 mt-10">Data Disclosure</h2>
          <p className="mb-12 text-black">
            Our commitment to your privacy is paramount. We do not engage in the sale, trade, or rental of personal or identity information belonging to our end-users to third parties. However, we may share generic aggregated information, devoid of any personal identification details about visitors and users, with our trusted affiliates, business partners, and advertisers for marketing purposes.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

