import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { solutions } from '../data/mockData';
import { ChevronRight, Brain, BarChart3, Cloud, Shield, Code2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Brain,
  BarChart3,
  Cloud,
  Shield,
  Code2,
};

const SolutionsPage = () => {
  const solutionDetails = [
    {
      ...solutions[0],
      features: [
        'Intelligent Process Automation',
        'Machine Learning Operations',
        'AI-Powered Analytics',
        'Natural Language Processing',
      ],
    },
    {
      ...solutions[1],
      features: [
        'Business Intelligence',
        'Real-time Analytics',
        'Data Visualization',
        'Predictive Modeling',
      ],
    },
    {
      ...solutions[2],
      features: [
        'Cloud Migration',
        'Multi-Cloud Strategy',
        'Cloud Native Development',
        'DevOps & Automation',
      ],
    },
    {
      ...solutions[3],
      features: [
        'Security Assessment',
        'Threat Detection',
        'Compliance Management',
        'Identity & Access Management',
      ],
    },
    {
      ...solutions[4],
      features: [
        'Product Strategy',
        'Agile Development',
        'Quality Engineering',
        'DevOps Integration',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#1e5aa8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions to accelerate your digital transformation
              and drive business growth.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {solutionDetails.map((solution, index) => {
                const IconComponent = iconMap[solution.icon];
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={solution.id}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      !isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={!isEven ? 'lg:order-2' : ''}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-[#1e5aa8]/10 rounded-lg flex items-center justify-center">
                          {IconComponent && <IconComponent className="h-6 w-6 text-[#1e5aa8]" />}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">{solution.name}</h2>
                      </div>
                      <p className="text-gray-600 mb-6 text-lg">{solution.description}</p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-[#1e5aa8]" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      {/* <Link
                        to={`/solutions/${solution.id}`}
                        className="inline-flex items-center px-6 py-3 bg-[#1e5aa8] text-white font-semibold rounded-lg hover:bg-[#164785] transition-colors"
                      >
                        Learn More
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link> */}
                    </div>
                    <div className={!isEven ? 'lg:order-1' : ''}>
                      <img
                        src={solution.image}
                        alt={solution.name}
                        className="rounded-2xl shadow-xl w-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to learn how our solutions can help you achieve your business goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#1e5aa8] text-white font-semibold rounded-lg hover:bg-[#164785] transition-colors"
            >
              Contact Us
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;