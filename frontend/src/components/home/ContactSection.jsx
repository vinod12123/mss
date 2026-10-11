import React, { useState } from 'react';
import { Linkedin, Twitter, Facebook, Send } from 'lucide-react';
import { companyInfo } from '../../data/mockData';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    inquiryType: '',
    phone: '',
    message: '',
    subscribe: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        jobTitle: '',
        inquiryType: '',
        phone: '',
        message: '',
        subscribe: false,
      });
    }, 3000);
  };

  const inquiryTypes = [
    'Solutions/Industries',
    'Partnerships',
    'HR Support',
    'Media Relationship',
    'General Enquiries',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f0f7ff] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#1e5aa8] font-semibold mb-2">Ready to Innovate with Us?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let's Talk!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Social Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Connect with us on social media
            </h3>
            <div className="flex space-x-3 mb-8">
              <a
                href="https://linkedin.com/company/MutexSoftSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1e5aa8] text-white rounded-full hover:bg-[#164785] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/MutexSoftSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1e5aa8] text-white rounded-full hover:bg-[#164785] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/MutexSoftSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1e5aa8] text-white rounded-full hover:bg-[#164785] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Write to us at</h3>
            <a
              href={`mailto:${companyInfo.email}`}
              className="text-[#1e5aa8] font-medium hover:underline"
            >
              {companyInfo.email}
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-600">Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e5aa8] focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e5aa8] focus:border-transparent transition-all"
                      placeholder="work@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e5aa8] focus:border-transparent transition-all"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e5aa8] focus:border-transparent transition-all"
                      placeholder="Your role"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e5aa8] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e5aa8] focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e5aa8] focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="mt-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="subscribe"
                      checked={formData.subscribe}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#1e5aa8] border-gray-300 rounded focus:ring-[#1e5aa8]"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      By checking this box, I agree to receive updates from {companyInfo.name}
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 w-full md:w-auto px-8 py-3 bg-[#1e5aa8] text-white font-semibold rounded-lg hover:bg-[#164785] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;