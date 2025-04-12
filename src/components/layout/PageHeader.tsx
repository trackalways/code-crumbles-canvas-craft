
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundClass?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  backgroundClass = "bg-gradient-to-r from-primary to-secondary"
}) => {
  return (
    <div className={`py-20 ${backgroundClass} relative overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      
      {/* Decorative elements */}
      <div className="circle-decoration w-64 h-64 top-10 left-10 animate-spin-slow"></div>
      <div className="circle-decoration w-80 h-80 bottom-0 right-10 animate-spin-slow"></div>
      
      <div className="container mx-auto relative z-10 text-white text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
