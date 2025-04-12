
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import WorkSection from '@/components/home/WorkSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    document.title = "Code Crumble - Web Development Experts";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WorkSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
