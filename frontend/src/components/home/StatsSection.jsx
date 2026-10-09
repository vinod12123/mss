import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { stats } from '../../data/mockData';

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e5aa8] mb-6">
              Innovation in Motion
            </h2>
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-20 text-4xl md:text-5xl font-bold text-[#1e5aa8]">
                    {stat.value}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 text-lg">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center mt-8 px-6 py-3 bg-[#1e5aa8] text-white font-semibold rounded-lg hover:bg-[#164785] transition-colors shadow-md hover:shadow-lg"
            >
              Learn More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1557425507-57dd2cafc241?w=600&h=500&fit=crop"
              alt="Innovation in Motion"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#1e5aa8]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;