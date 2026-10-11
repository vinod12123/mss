import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { aiConsultingServices } from '../data/mockData';
import { Brain, MessageSquare, Eye, Target, LineChart, Cog, Scale, Layers, ChevronRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Brain,
  MessageSquare,
  Eye,
  Target,
  LineChart,
  Cog,
  Scale,
  Layers,
};

const AIConsultingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#0a1628] to-[#1e5aa8] overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=1920&q=80')`,
              }}
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
                AI Excellence Center
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive AI Consulting Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with our end-to-end AI solutions. From strategy to
                implementation, we help you harness the power of artificial intelligence.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-[#1e5aa8] font-semibold rounded-full hover:bg-gray-100 transition-all"
              >
                Start Your AI Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e5aa8] mb-4">
                Our AI Consulting Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive suite of AI services designed to address your unique
                business challenges and drive meaningful outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiConsultingServices.map((service) => {
                const IconComponent = iconMap[service.icon];

                return (
                  <div
                    key={service.id}
                    className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#1e5aa8] to-[#5b9bd5] rounded-xl flex items-center justify-center flex-shrink-0">
                        {IconComponent && <IconComponent className="h-8 w-8 text-white" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1e5aa8] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{service.fullDesc}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {service.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-[#1e5aa8]" />
                              <span className="text-sm text-gray-600">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1e5aa8] mb-6">
                  Why Choose Mutex Soft Solutions for AI?
                </h2>
                <div className="space-y-4">
                  {[
                    'Deep expertise in cutting-edge AI technologies',
                    'Proven track record with Fortune 500 clients',
                    'End-to-end AI solutions from strategy to deployment',
                    'Industry-specific AI solutions for maximum impact',
                    'Ethical AI practices and governance frameworks',
                    'Continuous support and model optimization',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#1e5aa8]" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center mt-8 px-6 py-3 bg-[#1e5aa8] text-white font-semibold rounded-lg hover:bg-[#164785] transition-colors"
                >
                  Schedule a Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1653564142033-ab3532091515?w=600&h=500&fit=crop"
                  alt="AI Consulting"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#1e5aa8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you identify opportunities, develop strategies, and
              implement solutions that drive real business value.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-[#1e5aa8] font-semibold rounded-full hover:bg-gray-100 transition-all"
            >
              Contact Us Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIConsultingPage;