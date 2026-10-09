import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Brain, MessageSquare, Eye, Target, LineChart, Cog, Scale, Layers } from 'lucide-react';
import { aiConsultingServices } from '../../data/mockData';

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

const AIConsultingSection = () => {
  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#1e5aa8]/20 text-[#5b9bd5] rounded-full text-sm font-semibold mb-4">
            AI Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive AI Consulting Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your business with our end-to-end AI solutions, from strategy to implementation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiConsultingServices.map((service) => {
            const IconComponent = iconMap[service.icon];

            return (
              <div
                key={service.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#1e5aa8]/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1e5aa8] to-[#5b9bd5] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {IconComponent && <IconComponent className="h-7 w-7 text-white" />}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{service.shortDesc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/ai-consulting/${service.id}`}
                  className="inline-flex items-center text-[#5b9bd5] font-semibold text-sm hover:text-white group/link"
                >
                  Explore
                  <ChevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/ai-consulting"
            className="inline-flex items-center px-8 py-4 bg-white text-[#1e5aa8] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 group shadow-lg hover:shadow-xl"
          >
            View All AI Services
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIConsultingSection;