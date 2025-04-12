
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-background pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
      {/* Circle decorations */}
      <div className="circle-decoration w-96 h-96 -top-48 -left-48"></div>
      <div className="circle-decoration w-96 h-96 -bottom-48 -right-48"></div>
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in">
            We Create <span className="heading-gradient">Digital Experiences</span> That Matter
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From websites to web applications, we build solutions that help businesses succeed in the digital world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact">
              <Button className="btn-primary sm:text-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/work">
              <Button variant="outline" className="btn-outline sm:text-lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur-md"></div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Web development team working" 
              className="relative rounded-xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
