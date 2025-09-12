import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Component Imports
import Testimonials from "@/components/ui/component_4";
import LogoScroller from '@/components/ui/component_13';
import AwardsSection from '@/components/ui/component_12';
import EditableStatSection from '@/components/Statistics';
import ContactCta from "@/components/ui/component_6";
import HubSpotForm from "@/components/HubSpotForm";
import DynamicSEO from '@/components/DynamicSEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', country: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO page='contact'/>
      <Header />

      {/* Contact Section with BG Image */}
     <section
  className="pt-40 pb-28 text-white"   // ⬅️ increased top padding only
  style={{
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://res.cloudinary.com/dhbhumz3q/image/upload/v1751917421/8302_gqqgrs.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>

        <div className="section-wrapper grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left - Text */}
          <div className="space-y-5">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Let's Make AI-Powered Growth{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                the Default Setting
              </span>

            </h2>
           <div className="text-lg text-gray-200 max-w-md">
  <ul className="list-disc list-outside pl-6 space-y-2">
    <li className="leading-relaxed">Fix the funnel leaks killing your conversions</li>
    <li className="leading-relaxed">Stress-test your GTM or retention plan before it backfires</li>
    <li className="leading-relaxed">Untangle your bloated Martech stack and make it work for you</li>
    <li className="leading-relaxed">Launch faster with a crew that lives for execution</li>
  </ul>
</div>
          </div>

          {/* Right - Form */}
          <div className="bg-white text-black p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-md">
            {/* <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name*"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="">Please choose country*</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <textarea
                name="message"
                rows={4}
                placeholder="Message*"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              ></textarea>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" required />
                <label>I'm not a robot</label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                {isSubmitting ? 'Sending...' : 'Contact Us'}
              </button>
            </form> */}
            <div>
              {/* <h1>Contact Us</h1> */}
              <HubSpotForm
                portalId="7118070"
                formId="17bbc6f8-91bd-44fb-a9a8-f4633d52d7e4"
                region="na1" // Change if needed
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <EditableStatSection
        title="We combine sharp strategy with AI-ready tools to drive results, move fast, and scale the right way.  "
        subtitle=" Choose Growth Natives to Power What’s Next "
        stats={[
          { label: "Certified experts on the deck", value: "350+" },
          { label: "Happy customers worldwide", value: "200+" },
          { label: "Technologies mastered", value: "40+" },
        ]}
      />



      <AwardsSection />

      <LogoScroller
        heading="The Awesome Customers We’ve Worked With"
        subtext="At Growth Natives, we’ve teamed up with bold brands and brilliant partners whose expertise amplifies ours and together, we build what lasts."
      />

      <Testimonials
        title="Real Stories. Real Growth."
        description="What it's like to work with a team that actually builds with you."
      />

      <ContactCta
        heading="You’re One Conversation Away from Better Execution "
        subtext="We don’t do vague promises. We do focused strategy, fast delivery, and results that show up. "
        buttonLabel="Let's Talk "
        buttonLink="/contact-us"
      />

      <Footer />
    </div>
  );
};

export default Contact;