
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import PortfolioCard from '@/components/common/PortfolioCard';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import CtaSection from '@/components/home/CtaSection';

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Work - Code Crumble";
  }, []);

  // Sample project data
  const projects = [
    {
      id: "1",
      title: "Eco-Shop E-commerce Platform",
      category: "E-commerce",
      tags: ["e-commerce", "web development"],
      imageUrl: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "2",
      title: "FinTrack Dashboard",
      category: "Web Application",
      tags: ["dashboard", "ui/ux", "web development"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "3",
      title: "FitLife Mobile App",
      category: "Mobile App",
      tags: ["mobile", "ui/ux"],
      imageUrl: "https://images.unsplash.com/photo-1540396618790-95cb80e558b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
    },
    {
      id: "4",
      title: "LuxHome Real Estate Website",
      category: "Web Development",
      tags: ["web development", "real estate"],
      imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1296&q=80"
    },
    {
      id: "5",
      title: "TravelBuddy App",
      category: "Mobile App",
      tags: ["mobile", "travel"],
      imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80"
    },
    {
      id: "6",
      title: "GourmetEats Food Delivery",
      category: "E-commerce",
      tags: ["e-commerce", "food", "web development"],
      imageUrl: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=722&q=80"
    },
    {
      id: "7",
      title: "Creative Agency Website",
      category: "Web Development",
      tags: ["web development", "creative"],
      imageUrl: "https://images.unsplash.com/photo-1454692173233-f4f34c12adad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: "8",
      title: "HealthTrack Patient Portal",
      category: "Web Application",
      tags: ["healthcare", "web development", "dashboard"],
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "9",
      title: "EventMaster Planning App",
      category: "Web Application",
      tags: ["events", "web development", "ui/ux"],
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  // Extract unique categories
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Filter projects when category changes
  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="Our Work" 
          subtitle="Explore our portfolio of web development and design projects." 
        />

        <section className="section-padding">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={`opacity-0 animate-fade-in ${
                    filter === category 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <PortfolioCard
                      id={project.id}
                      title={project.title}
                      category={project.category}
                      imageUrl={project.imageUrl}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Work;
