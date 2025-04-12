
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Circle decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/4 translate-y-1/4"></div>
          
          <div className="max-w-3xl relative z-10 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-white/80 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Let's work together to bring your vision to life. Contact us today for a free consultation and discover how we can help your business grow online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 sm:text-lg">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary sm:text-lg">
                  See Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
