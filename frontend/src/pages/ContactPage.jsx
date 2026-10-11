import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { companyInfo } from '../data/mockData';
import { MapPin, Mail, Phone, Send, Linkedin, Twitter, Facebook } from 'lucide-react';

const ContactPage = () => {
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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const inquiryTypes = [
    'Solutions/Industries',
    'Partnerships',
    'HR Support',
    'Media Relationship',
    'General Enquiries',
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-[#0a1628] to-[#1e5aa8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">We'd love to hear from you. Let's start a conversation.</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#1e5aa8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#1e5aa8]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">{companyInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#1e5aa8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#1e5aa8]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a href={`mailto:${companyInfo.email}`} className="text-[#1e5aa8] hover:underline">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#1e5aa8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#1e5aa8]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a href={`tel:${companyInfo.phone}`} className="text-[#1e5aa8] hover:underline">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-3">
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
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-600">Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e5aa8] focus:border-transparent"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e5aa8] focus:border-transparent"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e5aa8] focus:border-transparent"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e5aa8] focus:border-transparent"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e5aa8] focus:border-transparent bg-white"
                        >
                          <option value="">Select inquiry type</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e5aa8] focus:border-transparent"
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
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e5aa8] focus:border-transparent resize-none"
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
                          I agree to receive updates from {companyInfo.name}
                        </span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-6 px-8 py-3 bg-[#1e5aa8] text-white font-semibold rounded-lg hover:bg-[#164785] transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;