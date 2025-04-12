
import React from 'react';
import TestimonialCard from '../common/TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Code Crumble transformed our outdated website into a modern platform that perfectly represents our brand. Their team was professional and delivered ahead of schedule.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Elemental Brands",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "Working with Code Crumble was a fantastic experience. They took our complex requirements and created an intuitive application that has significantly improved our operations.",
      author: "Michael Chen",
      role: "CTO",
      company: "NovaTech Solutions",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "The e-commerce platform Code Crumble developed for us has boosted our online sales by 200%. Their ongoing support has been equally impressive.",
      author: "Emma Rodriguez",
      role: "Marketing Director",
      company: "Urban Fashion Co",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
              imageUrl={testimonial.imageUrl}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
