import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Building2, Heart, Factory, ShoppingCart, Zap, Cpu } from 'lucide-react';
import { industries } from '../../data/mockData';

const iconMap = {
  Building2,
  Heart,
  Factory,
  ShoppingCart,
  Zap,
  Cpu,
};

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e5aa8] text-center mb-4">
          Embrace Innovation Boldly Across Industries
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We deliver transformative solutions tailored to the unique challenges of each industry
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon];
            const isActive = activeIndustry === index;

            return (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(index)}
                className={`relative p-6 rounded-xl text-center transition-all duration-300 group ${
                  isActive
                    ? 'bg-[#1e5aa8] text-white shadow-lg scale-105'
                    : 'bg-gray-50 text-gray-700 hover:bg-[#1e5aa8]/5 hover:shadow-md'
                }`}
              >
                <div
                  className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center transition-colors ${
                    isActive ? 'bg-white/20' : 'bg-[#1e5aa8]/10 group-hover:bg-[#1e5aa8]/20'
                  }`}
                >
                  {IconComponent && (
                    <IconComponent
                      className={`h-6 w-6 ${
                        isActive ? 'text-white' : 'text-[#1e5aa8]'
                      }`}
                    />
                  )}
                </div>
                <h3 className="font-semibold text-sm leading-tight">{industry.name}</h3>
              </button>
            );
          })}   
        </div>

        {/* Active Industry Details */}
        <div className="mt-8 p-8 bg-gradient-to-br from-[#f0f7ff] to-white rounded-2xl border border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#1e5aa8] mb-2">
                {industries[activeIndustry].name}
              </h3>
              <p className="text-gray-600">{industries[activeIndustry].description}</p>
            </div>
            <Link
              to={`/industries/${industries[activeIndustry].id}`}
              className="inline-flex items-center px-6 py-3 bg-[#1e5aa8] text-white font-semibold rounded-lg hover:bg-[#164785] transition-colors shadow-md hover:shadow-lg"
            >
              Learn More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;