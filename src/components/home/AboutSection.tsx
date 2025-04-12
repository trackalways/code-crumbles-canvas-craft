
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const features = [
    "Experienced team of developers and designers",
    "Custom solutions tailored to your business needs",
    "Modern, responsive, and user-friendly designs",
    "Ongoing support and maintenance services",
    "Focused on delivering measurable results"
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
              Who We Are
            </h2>
            <p className="text-gray-600 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Code Crumble is a team of passionate web developers and designers dedicated to creating exceptional digital experiences. With years of industry experience, we've helped businesses of all sizes establish a strong online presence and achieve their goals.
            </p>
            <p className="text-gray-600 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Our approach combines technical expertise with creative thinking to deliver solutions that are not just visually appealing but also functional and effective.
            </p>
            
            <div className="space-y-3 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 bg-primary/10 rounded-full p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Link to="/about">
                <Button className="btn-primary mt-2">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                  alt="Team collaboration" 
                  className="rounded-lg h-48 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Office environment" 
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4 mt-6">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                  alt="Coding on laptop" 
                  className="rounded-lg h-64 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team meeting" 
                  className="rounded-lg h-48 w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
