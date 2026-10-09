import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { industries } from '../data/mockData';
import { ChevronRight, Building2, Heart, Factory, ShoppingCart, Zap, Cpu, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Building2,
  Heart,
  Factory,
  ShoppingCart,
  Zap,
  Cpu,
};

const IndustriesPage = () => {
  const industryImages = [
    'https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1653564142033-ab3532091515?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1644088379091-d574269d422f?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&h=400&fit=crop',
    'https://images.pexels.com/photos/16094062/pexels-photo-16094062.jpeg?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1557425507-57dd2cafc241?w=600&h=400&fit=crop',
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#1e5aa8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver transformative solutions tailored to the unique challenges of each industry,
              helping businesses innovate and grow.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = iconMap[industry.icon];

                return (
                  <div
                    key={industry.id}
                    className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={industryImages[index]}
                        alt={industry.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          {IconComponent && <IconComponent className="h-5 w-5 text-[#1e5aa8]" />}
                        </div>
                        <h3 className="text-lg font-bold text-white">{industry.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{industry.description}</p>
                      {/* <Link
                        to={`/industries/${industry.id}`}
                        className="inline-flex items-center text-[#1e5aa8] font-semibold hover:underline"
                      >
                        Learn More
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1e5aa8] mb-4">Industry Expertise You Can Trust</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our deep industry knowledge combined with cutting-edge technology expertise
                enables us to deliver solutions that drive real business outcomes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Domain Expertise',
                  description: 'Deep understanding of industry-specific challenges, regulations, and best practices.',
                },
                {
                  title: 'Proven Results',
                  description: 'Track record of successful implementations across diverse industries.',
                },
                {
                  title: 'Innovation Focus',
                  description: 'Continuously evolving solutions to stay ahead of industry trends.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                  <CheckCircle className="h-10 w-10 text-[#1e5aa8] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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

export default IndustriesPage;