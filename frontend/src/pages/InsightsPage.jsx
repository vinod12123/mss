import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { insights } from '../data/mockData';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsightsPage = () => {
  const allInsights = [
    ...insights,
    {
      id: 4,
      type: 'Blog',
      date: 'June 5, 2025',
      title: 'Building Resilient Cloud Architectures',
      excerpt: 'Best practices for designing highly available and fault-tolerant cloud infrastructure.',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?w=400&h=250&fit=crop',
    },
    {
      id: 5,
      type: 'Case Study',
      date: 'May 20, 2025',
      title: 'Digital Transformation in Healthcare',
      excerpt: 'How we helped a major healthcare provider modernize their patient experience.',
      image: 'https://images.unsplash.com/photo-1557425507-57dd2cafc241?w=400&h=250&fit=crop',
    },
    {
      id: 6,
      type: 'Whitepaper',
      date: 'May 10, 2025',
      title: 'The State of AI in Enterprise 2025',
      excerpt: 'A comprehensive analysis of AI adoption trends and challenges in enterprise settings.',
      image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=400&h=250&fit=crop',
    },
  ];

  const [filter, setFilter] = React.useState('All');
  const types = ['All', 'Blog', 'Whitepaper', 'Case Study', 'Success Story'];

  const filteredInsights = filter === 'All'
    ? allInsights
    : allInsights.filter((insight) => insight.type === filter);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#1e5aa8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Insights & Resources</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with our latest thought leadership, case studies, and industry insights.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === type
                      ? 'bg-[#1e5aa8] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((insight) => (
                <div
                  key={insight.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="px-3 py-1 bg-[#1e5aa8]/10 text-[#1e5aa8] text-xs font-semibold rounded-full">
                        {insight.type}
                      </span>
                      <span className="text-gray-500 text-xs">{insight.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1e5aa8] transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{insight.excerpt}</p>
                    {/* <Link
                      to={`/insights/${insight.id}`}
                      className="inline-flex items-center text-[#1e5aa8] font-semibold text-sm hover:underline"
                    >
                      Read More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link> */}
                  </div>  
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

export default InsightsPage;