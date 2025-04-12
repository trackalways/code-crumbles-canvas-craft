
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Work', path: '/work' },
    { title: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2 z-10">
          <span className="text-2xl font-bold font-display tracking-tight heading-gradient">
            <span>Code</span>
            <span>Crumble</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'nav-link text-sm font-medium',
                isActive(link.path) && 'active'
              )}
            >
              {link.title}
            </Link>
          ))}
          <Button className="btn-primary">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden z-10 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'fixed top-0 right-0 h-screen bg-white w-[80%] z-40 transform transition-transform duration-300 ease-in-out shadow-xl md:hidden',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full">
            <div className="px-6 py-6 border-b">
              <span className="text-2xl font-bold font-display heading-gradient">
                Code Crumble
              </span>
            </div>
            <div className="overflow-y-auto flex-grow py-6">
              <div className="px-6 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'block py-2 text-lg font-medium nav-link',
                      isActive(link.path) && 'active'
                    )}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="px-6 py-6 border-t">
              <Button className="w-full btn-primary">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
