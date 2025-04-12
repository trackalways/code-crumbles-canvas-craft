
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Palette, ShoppingBag, Smartphone, BarChart, Cloud, Server, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import CtaSection from '@/components/home/CtaSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services - Code Crumble";
  }, []);

  const services = [
    {
      id: 'web-development',
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies and best practices.",
      icon: <Code className="h-10 w-10" />,
      features: [
        "Custom website design and development",
        "Progressive Web Applications (PWAs)",
        "Single-page applications with React, Vue, or Angular",
        "Content management systems (WordPress, Drupal, etc.)",
        "API development and integration",
        "Database design and optimization"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    },
    {
      id: 'ui-ux-design',
      title: "UX/UI Design",
      description: "User-centered design that creates intuitive, engaging interfaces for your digital products.",
      icon: <Palette className="h-10 w-10" />,
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Interactive UI design",
        "User testing and feedback implementation",
        "Responsive design for all devices",
        "Accessibility compliance"
      ],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 'ecommerce',
      title: "E-commerce Solutions",
      description: "Complete online store setups with payment processing, inventory management and more.",
      icon: <ShoppingBag className="h-10 w-10" />,
      features: [
        "Custom e-commerce website development",
        "Shopping cart and checkout optimization",
        "Payment gateway integration",
        "Inventory and order management systems",
        "Product catalog development",
        "Shipping and fulfillment integration"
      ],
      image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 'mobile-apps',
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android that engage your users.",
      icon: <Smartphone className="h-10 w-10" />,
      features: [
        "Native iOS and Android app development",
        "Cross-platform development (React Native, Flutter)",
        "UI/UX design for mobile applications",
        "App Store optimization and submission",
        "Mobile app testing and quality assurance",
        "Ongoing maintenance and updates"
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 'digital-marketing',
      title: "Digital Marketing",
      description: "Result-driven strategies to increase your online presence and drive conversions.",
      icon: <BarChart className="h-10 w-10" />,
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) advertising",
        "Social media marketing",
        "Email marketing campaigns",
        "Content marketing strategy",
        "Analytics and performance tracking"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
    },
    {
      id: 'cloud-services',
      title: "Cloud Services",
      description: "Scalable cloud solutions for hosting, storage, and database management.",
      icon: <Cloud className="h-10 w-10" />,
      features: [
        "Cloud hosting setup and management",
        "AWS, Azure, and Google Cloud services",
        "Cloud migration and optimization",
        "Serverless architecture implementation",
        "Database cloud deployment",
        "Automated scaling and load balancing"
      ],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 'hosting',
      title: "Web Hosting & Maintenance",
      description: "Reliable hosting solutions and ongoing maintenance to keep your site running smoothly.",
      icon: <Server className="h-10 w-10" />,
      features: [
        "Managed hosting services",
        "Regular website maintenance",
        "Performance optimization",
        "Security updates and patches",
        "Backup and recovery solutions",
        "24/7 monitoring and support"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1434&q=80"
    },
    {
      id: 'security',
      title: "Cybersecurity",
      description: "Protect your website and data with comprehensive security solutions and best practices.",
      icon: <Shield className="h-10 w-10" />,
      features: [
        "Security audits and assessments",
        "Secure coding practices",
        "SSL certificate implementation",
        "DDoS protection",
        "Data encryption",
        "Security compliance (GDPR, PCI DSS, etc.)"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 'seo',
      title: "SEO & Content Strategy",
      description: "Improve your search engine rankings and create engaging content that converts.",
      icon: <Globe className="h-10 w-10" />,
      features: [
        "Keyword research and analysis",
        "On-page and off-page SEO",
        "Content strategy development",
        "Blog and article writing",
        "Link building strategies",
        "SEO audits and reporting"
      ],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="Our Services" 
          subtitle="Comprehensive web development and digital solutions for businesses of all sizes." 
        />

        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Our comprehensive range of services covers all aspects of web development and digital solutions to help your business thrive online.
              </p>
            </div>

            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur-md"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="relative rounded-xl w-full h-80 object-cover"
                    />
                  </div>
                  <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="inline-block p-3 bg-primary/10 rounded-md">
                      <div className="text-primary">{service.icon}</div>
                    </div>
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="bg-primary/10 rounded-full p-1">
                            <ArrowRight className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button className="btn-primary mt-4">
                        Get Started With {service.title}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Services;
