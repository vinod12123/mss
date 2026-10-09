import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { companyInfo, stats, testimonials } from '../data/mockData';
import { ChevronRight, Target, Users, Award, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering innovative solutions that drive measurable business outcomes for our clients.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our clients\' success is our success. We build lasting partnerships based on trust and transparency.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from technology solutions to customer service.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace change and continuously innovate to stay ahead of technology trends.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#0a1628] to-[#1e5aa8]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Mutex Corp
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your global technology partner for transformative digital solutions.
                Bringing Technology and Talent Solutions Together.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1e5aa8] mb-6">Who We Are</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Headquartered in {companyInfo.address}, Mutex Corp is a result-driven IT
                  consulting company providing digital transformation and reinvention strategies
                  and services for businesses of all sizes.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We function as a managed service provider focused on solving real-world
                  challenges, transforming operations, improving customer satisfaction, and
                  creating new business models through cutting-edge AI and technology solutions.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our team of qualified project managers, AI specialists, data scientists, and
                  engineers offer collective knowledge and years of experience, ensuring that our
                  clients are confident that their business is in the right hands.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#1e5aa8] text-white font-semibold rounded-lg hover:bg-[#164785] transition-colors"
                >
                  Get in Touch
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1557425507-57dd2cafc241?w=600&h=500&fit=crop"
                  alt="About Mutex Corp"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#1e5aa8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <p className="text-blue-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1e5aa8] text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-[#1e5aa8]/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-[#1e5aa8]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1e5aa8] text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#1e5aa8] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;