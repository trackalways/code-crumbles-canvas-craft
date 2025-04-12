
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import ContactForm from '@/components/common/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - Code Crumble";
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "info@codecrumble.com",
      link: "mailto:info@codecrumble.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: "123 Web Street, Digital City, 12345",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: "Mon - Fri: 9AM - 5PM",
      link: null
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="Contact Us" 
          subtitle="Get in touch with our team to discuss your project." 
        />

        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2">
                <div className="sticky top-24 space-y-6">
                  <h2 className="text-3xl font-bold mb-6 opacity-0 animate-fade-in">Get In Touch</h2>
                  <p className="text-gray-600 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Have a project in mind? Want to learn more about our services? Fill out the form and we'll get back to you as soon as possible.
                  </p>
                  
                  <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    {contactInfo.map((item, index) => (
                      <div key={index} className="contact-info-card">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <div className="text-primary">{item.icon}</div>
                        </div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          {item.link ? (
                            <a href={item.link} className="text-primary hover:text-primary/80 transition-colors">
                              {item.details}
                            </a>
                          ) : (
                            <p className="text-gray-600">{item.details}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 opacity-0 animate-fade-in">Send us a message</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto">
            <div className="opacity-0 animate-fade-in">
              <div className="relative w-full h-96 rounded-xl overflow-hidden">
                <iframe
                  title="Code Crumble Location"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1671745124267!5m2!1sen!2s"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
