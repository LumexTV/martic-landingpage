import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Rechtliches': [
      { name: 'Impressum', href: '/impressum' },
      { name: 'Datenschutz', href: '/datenschutz' },
    ],
    'Unternehmen': [
      { name: 'Über uns', href: '/?scroll=automatisierung' },
      { name: 'Kontakt', href: '/?scroll=kontakt' },
      { name: 'Blog', href: '#' }
    ],
    'Services': [
      { name: 'KI-Automatisierung', href: '/?scroll=automatisierung' },
      { name: 'Dashboard-Lösungen', href: 'https://app.marticsolutions.de' },
      { name: 'Dokumenten-KI', href: '/?scroll=vorteile' },
      { name: 'Beratung', href: '/?scroll=kontakt' },
    ]
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-black via-slate-900 to-black text-white border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Bot className="text-black" size={24} />
              </div>
              <span className="text-lg sm:text-xl font-bold whitespace-nowrap">Martic Solutions</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
              KI-Lösungen für Handwerksbetriebe. Wir digitalisieren Ihre Prozesse 
              und sparen Ihnen wertvolle Zeit.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2 break-all">
                <Mail size={16} />
                <span>kontakt@marticsolutions.de</span>
              </div>
              <div className="flex items-center space-x-2 break-all">
                <Phone size={16} />
                <span>+49 (0) 17647663929</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Hamburg, Deutschland</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 break-words">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer break-words text-left"
                      >
                        {link.name}
                      </button>
                    ) : link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer break-words text-left"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => window.open(link.href, '_blank')}
                        className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer break-words text-left"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left break-words">
              © 2025 Martic Solutions. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-gray-400 text-sm">
              <Link 
                to="/?scroll=kontakt"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Kontakt
              </Link>
              <a 
                href="/sitemap.html"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Sitemap
              </a>
              <Link to="/impressum" className="hover:text-white transition-colors whitespace-nowrap">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-white transition-colors whitespace-nowrap">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;