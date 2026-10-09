import React, { useState, useEffect } from 'react';
import { ChevronRight, Brain, Code, Rocket, Cloud, Award, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { achievements } from '../../data/mockData';

const iconMap = {
  Brain,
  Code,
  Rocket,
  Cloud,
};

const AchievementsSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, cardId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMousePosition({ x, y });
    setActiveCard(cardId);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a1628] via-[#0f2444] to-[#0a1628] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(91, 155, 213, 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(91, 155, 213, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>

        {/* Floating 3D shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 opacity-20">
          <div className="w-full h-full border-2 border-blue-400 rounded-lg animate-spin-slow" 
               style={{ animationDuration: '15s' }} />
        </div>
        <div className="absolute bottom-20 right-20 w-16 h-16 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 opacity-10">
          <div className="w-full h-full border border-purple-400 rotate-45 animate-bounce-slow" 
               style={{ animationDuration: '8s' }} />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Award className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-semibold text-white/90">Industry Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trailblazing With{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Recognized globally for our excellence in AI, digital transformation, and enterprise solutions
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon];
            const isActive = activeCard === achievement.id;

            return (
              <div
                key={achievement.id}
                className="relative group perspective-1000"
                onMouseMove={(e) => handleMouseMove(e, achievement.id)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: isActive 
                    ? `rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)` 
                    : 'rotateY(0) rotateX(0)',
                  transition: 'transform 0.1s ease-out',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Card glow effect */}
                <div 
                  className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                />
                
                {/* Main Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full overflow-hidden group-hover:border-white/20 transition-all duration-500">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-3 -right-3 transform group-hover:scale-110 transition-transform duration-500">
                    <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <Star className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with 3D effect */}
                    <div className="mb-6 transform-gpu group-hover:translate-z-10 transition-transform duration-500">
                      <div className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                        {IconComponent && <IconComponent className="h-7 w-7 text-white" />}
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs font-bold rounded-full shadow-md`}>
                        {achievement.highlight}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {achievement.text}
                    </p>

                    {/* Metric */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-end space-x-2">
                        <span className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.metric}
                        </span>
                        <span className="text-gray-500 text-sm pb-1">{achievement.metricLabel}</span>
                      </div>
                    </div>

                    {/* Animated progress bar */}
                    <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${achievement.color} rounded-full transform origin-left transition-transform duration-1000`}
                        style={{ 
                          width: '100%',
                          transform: `scaleX(${isActive ? 1 : 0.7})`,
                          transition: 'transform 0.5s ease-out'
                        }}
                      />
                    </div>
                  </div>

                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Industry Awards', icon: Award },
              { value: '10+', label: 'Years Excellence', icon: TrendingUp },
              { value: '98%', label: 'Client Retention', icon: Star },
              { value: '50+', label: 'Global Partners', icon: Cloud },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link
            to="/about"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Explore Our Journey
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: rotate(45deg) translateY(0); }
          50% { transform: rotate(45deg) translateY(-20px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AchievementsSection;
