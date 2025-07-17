import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Bot } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Bot className="text-white" size={24} />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900 whitespace-nowrap">Martic Solutions</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('start')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Start
            </button>
            <button
              onClick={() => scrollToSection('automatisierung')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Lösung
            </button>
            <button
              onClick={() => scrollToSection('vorteile')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Vorteile
            </button>
            <button
              onClick={() => scrollToSection('sicherheit')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sicherheit
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Kontakt
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://app.marticsolutions.de', '_blank')}
              className="border-2 border-blue-600 text-blue-600 px-4 lg:px-6 py-2 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('kontakt')}
              className="bg-blue-600 text-white px-4 lg:px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              <span className="hidden lg:inline">Erstberatung sichern</span>
              <span className="lg:hidden">Beratung</span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200 py-4"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('start')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Start
              </button>
              <button
                onClick={() => scrollToSection('automatisierung')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Lösung
              </button>
              <button
                onClick={() => scrollToSection('vorteile')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Vorteile
              </button>
              <button
                onClick={() => scrollToSection('sicherheit')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Sicherheit
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Kontakt
              </button>
              <button
                onClick={() => window.open('https://app.marticsolutions.de', '_blank')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Login
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors text-center whitespace-nowrap"
              >
                Erstberatung sichern
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;