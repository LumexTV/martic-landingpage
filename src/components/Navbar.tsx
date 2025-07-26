import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Bot } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <Bot className="text-black" size={24} />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white whitespace-nowrap">Martic Solutions</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('start')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Start
            </button>
            <button
              onClick={() => scrollToSection('automatisierung')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Lösung
            </button>
            <button
              onClick={() => scrollToSection('vorteile')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Vorteile
            </button>
            <button
              onClick={() => scrollToSection('sicherheit')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Sicherheit
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Kontakt
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('kontakt')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-4 lg:px-6 py-2 rounded-full font-bold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-sm lg:text-base whitespace-nowrap shadow-lg shadow-cyan-500/25"
            >
              <span className="hidden lg:inline">Erstberatung sichern</span>
              <span className="lg:hidden">Beratung</span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300"
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
            className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/20 py-4"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('start')}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-left font-medium"
              >
                Start
              </button>
              <button
                onClick={() => scrollToSection('automatisierung')}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-left font-medium"
              >
                Lösung
              </button>
              <button
                onClick={() => scrollToSection('vorteile')}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-left font-medium"
              >
                Vorteile
              </button>
              <button
                onClick={() => scrollToSection('sicherheit')}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-left font-medium"
              >
                Sicherheit
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-left font-medium"
              >
                Kontakt
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-6 py-2 rounded-full font-bold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-center whitespace-nowrap shadow-lg shadow-cyan-500/25"
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