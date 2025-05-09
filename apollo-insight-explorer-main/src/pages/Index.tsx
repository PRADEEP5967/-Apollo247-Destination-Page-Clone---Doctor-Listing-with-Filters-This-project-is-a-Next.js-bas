
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HomeFeatureCircles from '../components/HomeFeatureCircles';
import ServicesSection from '../components/ServicesSection';
import DoctorsSection from '../components/DoctorsSection';
import AppointmentForm from '../components/AppointmentForm';
import HealthInfoSection from '../components/HealthInfoSection';
import TestimonialsSection from '../components/TestimonialsSection';
import HealthAnalytics from '../components/HealthAnalytics';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HomeFeatureCircles />
        <ServicesSection />
        <HealthAnalytics />
        <DoctorsSection />
        <TestimonialsSection />
        <AppointmentForm />
        <HealthInfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
