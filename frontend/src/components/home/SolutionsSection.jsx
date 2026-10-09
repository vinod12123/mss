import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Brain, BarChart3, Cloud, Shield, Code2 } from 'lucide-react';
import { solutions } from '../../data/mockData';

const iconMap = {
  Brain,
  BarChart3,
  Cloud,
  Shield,
  Code2,
};

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e5aa8] text-center mb-4">
          Make Your Next Big Move Through Technology
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive technology solutions to drive your digital transformation journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {solutions.map((solution) => {
            const IconComponent = iconMap[solution.icon];

            return (
              <div
                key={solution.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e5aa8]/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 text-white">
                      {IconComponent && <IconComponent className="h-5 w-5" />}
                      <h3 className="font-bold text-sm">{solution.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{solution.description}</p>
                  <Link
                    to={`/solutions/${solution.id}`}
                    className="inline-flex items-center text-[#1e5aa8] font-semibold text-sm hover:underline group/link"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;