import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { successStories } from '../../data/mockData';

const SuccessStoriesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e5aa8] text-center mb-12">
          Engineering Success for Our Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#1e5aa8] text-white text-xs font-semibold rounded-full">
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1e5aa8] transition-colors">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {story.description}
                </p>
                {/* <Link
                  to={`/success-stories/${story.id}`}
                  className="inline-flex items-center text-[#1e5aa8] font-semibold text-sm hover:underline group/link"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link> */}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/success-stories"
            className="inline-flex items-center text-[#1e5aa8] font-semibold hover:underline group"
          >
            All Success Stories
            <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;