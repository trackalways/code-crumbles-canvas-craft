
import React from 'react';
import ServiceCard from '../common/ServiceCard';
import { Code, Palette, ShoppingBag, Smartphone, BarChart, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies and best practices.",
      icon: <Code className="h-10 w-10" />
    },
    {
      title: "UX/UI Design",
      description: "User-centered design that creates intuitive, engaging interfaces for your digital products.",
      icon: <Palette className="h-10 w-10" />
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store setups with payment processing, inventory management and more.",
      icon: <ShoppingBag className="h-10 w-10" />
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android that engage your users.",
      icon: <Smartphone className="h-10 w-10" />
    },
    {
      title: "Digital Marketing",
      description: "Result-driven strategies to increase your online presence and drive conversions.",
      icon: <BarChart className="h-10 w-10" />
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions for hosting, storage, and database management.",
      icon: <Cloud className="h-10 w-10" />
    }
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We offer a full range of digital services to help your business grow and succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>

        <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Link to="/services">
            <Button className="btn-primary">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
