import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import AchievementsSection from '../components/home/AchievementsSection';
import SuccessStoriesSection from '../components/home/SuccessStoriesSection';
import IndustriesSection from '../components/home/IndustriesSection';
import SolutionsSection from '../components/home/SolutionsSection';
import AIConsultingSection from '../components/home/AIConsultingSection';
import PartnersSection from '../components/home/PartnersSection';
import InsightsSection from '../components/home/InsightsSection';
import StatsSection from '../components/home/StatsSection';
import ContactSection from '../components/home/ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AchievementsSection />
        <SuccessStoriesSection />
        <IndustriesSection />
        <SolutionsSection />
        <AIConsultingSection />
        <PartnersSection />
        <InsightsSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;