import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Component Imports
import Testimonials from "@/components/ui/component_4";
import LogoScroller from '@/components/ui/component_13';
import AwardsSection from '@/components/ui/component_12';

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
      <Header />

      {/* Contact Section with BG Image */}
      <section
        className="py-28 text-white"
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
              Choose Growth Natives as Your{" "}
               <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Trusted Partner for Success
              </span>
              
            </h2>
            <p className="text-lg text-gray-200 max-w-md">
              With strategic teams and cutting-edge tools, we drive measurable results and elevate your business to new heights.
            </p>
          </div>

          {/* Right - Form */}
          <div className="bg-white text-black p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-md">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
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
                <label>I’m not a robot</label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                {isSubmitting ? 'Sending...' : 'Contact Us'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <LogoScroller
        heading="AI-Led Results Trusted by Brands You Know"
        subtext="Just a few of the brands who trust us to run the show."
        logos={[
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
          'https://res.cloudinary.com/dhbhumz3q/image/upload/v1751361549/Image_7_tqfiig.png',
        ]}
      />

      <AwardsSection />

      <Testimonials
        title="Real Stories, Real AI Impact"
        description="It’s not hype if it’s backed by data and delivery."
      />

      <Footer />
    </div>
  );
};

export default Contact;
