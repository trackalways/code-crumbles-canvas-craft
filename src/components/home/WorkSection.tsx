
import React from 'react';
import { Button } from '@/components/ui/button';
import PortfolioCard from '../common/PortfolioCard';
import { Link } from 'react-router-dom';

const WorkSection = () => {
  const projects = [
    {
      id: "1",
      title: "E-commerce Website",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "2",
      title: "Finance Dashboard",
      category: "UI/UX Design",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "3",
      title: "Mobile Fitness App",
      category: "Mobile Development",
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">Our Recent Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Check out some of our recent projects that showcase our expertise and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>

        <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Link to="/work">
            <Button className="btn-primary">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
