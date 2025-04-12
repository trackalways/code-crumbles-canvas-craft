
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, User, Tag } from 'lucide-react';
import CtaSection from '@/components/home/CtaSection';

const WorkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [id]);

  // This would normally come from an API or database
  const projectData = {
    id: "1",
    title: "Eco-Shop E-commerce Platform",
    client: "Green Living Co.",
    date: "January 2023",
    category: "E-commerce",
    tags: ["Web Development", "E-commerce", "UX Design"],
    overview: "An eco-friendly e-commerce platform that showcases sustainable products with a seamless shopping experience.",
    challenge: "Green Living Co. needed an online platform that not only offered a great shopping experience but also educated customers about sustainable products. The challenge was to create a site that balanced information with conversion-focused design.",
    solution: "We developed a custom e-commerce platform with environmental impact indicators for each product, allowing customers to make informed decisions. The site features a clean, intuitive interface that highlights product sustainability credentials while maintaining a smooth path to purchase.",
    results: "Within three months of launch, the platform achieved a 35% conversion rate increase compared to their previous website. Customer engagement metrics showed a 40% increase in time on site and a 25% decrease in cart abandonment.",
    services: ["UX/UI Design", "Custom E-commerce Development", "Mobile Optimization", "Payment Gateway Integration", "Content Management System"],
    mainImage: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586880244406-8c795b88d1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    nextProject: "2",
    prevProject: "9"
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-opacity-50"></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="container mx-auto">
            <Link to="/work" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">{projectData.title}</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
              <div className="lg:col-span-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-xl overflow-hidden">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur-sm"></div>
                  <img 
                    src={projectData.mainImage} 
                    alt={projectData.title} 
                    className="relative rounded-xl w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">Project Details</h3>
                  <div className="flex items-start space-x-3 text-gray-600">
                    <User className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <span className="text-gray-900 font-medium">Client:</span> {projectData.client}
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-600">
                    <Calendar className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <span className="text-gray-900 font-medium">Date:</span> {projectData.date}
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-600">
                    <Tag className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <span className="text-gray-900 font-medium">Category:</span> {projectData.category}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Services Provided</h3>
                  <ul className="space-y-1">
                    {projectData.services.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <div className="bg-primary/10 rounded-full p-1 mr-2">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 px-3 py-1 text-sm rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/contact">
                  <Button className="btn-primary w-full">
                    Start a Similar Project
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <h2 className="text-2xl font-bold">Overview</h2>
                  <p className="text-gray-600">{projectData.overview}</p>
                </div>

                <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <h2 className="text-2xl font-bold">The Challenge</h2>
                  <p className="text-gray-600">{projectData.challenge}</p>
                </div>

                <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <h2 className="text-2xl font-bold">Our Solution</h2>
                  <p className="text-gray-600">{projectData.solution}</p>
                </div>

                <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <h2 className="text-2xl font-bold">Results</h2>
                  <p className="text-gray-600">{projectData.results}</p>
                </div>
              </div>
            </div>

            <div className="mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projectData.gallery.map((image, index) => (
                  <div key={index} className="rounded-xl overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${projectData.title} - Gallery ${index + 1}`} 
                      className="w-full h-64 object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              {projectData.prevProject && (
                <Link 
                  to={`/work/${projectData.prevProject}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4 sm:mb-0"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous Project
                </Link>
              )}

              {projectData.nextProject && (
                <Link 
                  to={`/work/${projectData.nextProject}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Next Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default WorkDetail;
