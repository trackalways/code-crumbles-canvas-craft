
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, className, delay = 0 }) => {
  return (
    <div 
      className={cn(
        "service-card opacity-0 animate-fade-in flex flex-col h-full",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-8 text-primary p-4 bg-primary/5 rounded-xl inline-block">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium group">
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default ServiceCard;
