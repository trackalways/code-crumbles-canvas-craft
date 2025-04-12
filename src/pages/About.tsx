
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import TeamMember from '@/components/common/TeamMember';
import { Check, Award, Users, Clock, Briefcase } from 'lucide-react';
import CtaSection from '@/components/home/CtaSection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - Code Crumble";
  }, []);

  const team = [
    {
      name: "David Mitchell",
      role: "Founder & CEO",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        facebook: "#"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Lead Designer",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      socialLinks: {
        linkedin: "#",
        facebook: "#"
      }
    },
    {
      name: "Alex Turner",
      role: "Backend Developer",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      socialLinks: {
        linkedin: "#"
      }
    },
    {
      name: "Jessica Williams",
      role: "Marketing Specialist",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  const stats = [
    { value: "10+", label: "Years Experience", icon: <Clock className="h-6 w-6" /> },
    { value: "200+", label: "Projects Completed", icon: <Briefcase className="h-6 w-6" /> },
    { value: "50+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { value: "15", label: "Awards Won", icon: <Award className="h-6 w-6" /> }
  ];

  const values = [
    {
      title: "Client-Focused",
      description: "We listen to our clients' needs and tailor solutions to meet their specific goals and challenges."
    },
    {
      title: "Quality Craftsmanship",
      description: "We take pride in our work and are committed to delivering high-quality, polished products."
    },
    {
      title: "Innovation",
      description: "We stay at the forefront of technology and constantly seek new ways to improve and innovate."
    },
    {
      title: "Transparency",
      description: "We maintain open communication throughout the project and provide regular updates."
    },
    {
      title: "Reliability",
      description: "We deliver on our promises, meet deadlines, and stand behind our work."
    },
    {
      title: "Continuous Learning",
      description: "We are always learning and improving our skills to provide the best solutions for our clients."
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="About Us" 
          subtitle="Get to know the team behind Code Crumble and learn about our mission and values." 
        />

        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Our team working" 
                    className="relative rounded-xl h-full w-full object-cover opacity-0 animate-fade-in"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold opacity-0 animate-fade-in">Our Story</h2>
                <p className="text-gray-600 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Founded in 2013, Code Crumble began with a simple mission: to help businesses succeed in the digital world by providing exceptional web development services. What started as a small team of passionate developers has grown into a full-service digital agency with expertise across web development, design, and digital marketing.
                </p>
                <p className="text-gray-600 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  Over the years, we've had the privilege of working with clients across various industries, from startups to established enterprises. Each project has added to our knowledge and experience, allowing us to refine our approach and deliver even better results.
                </p>
                <p className="text-gray-600 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  Today, we continue to grow and evolve, staying at the forefront of technology trends while remaining true to our core values of quality, innovation, and client satisfaction. Our team of talented professionals is committed to helping your business achieve its digital goals.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center opacity-0 animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 opacity-0 animate-fade-in">Our Values</h2>
                <p className="text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  These core principles guide everything we do and help us deliver the best possible service to our clients.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                    <div className="flex items-start">
                      <div className="mt-1 bg-primary/10 rounded-full p-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 opacity-0 animate-fade-in">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Our talented professionals bring their diverse skills and experience to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                  socialLinks={member.socialLinks}
                  delay={0.1 * (index + 1)}
                />
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default About;
