import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Lock, CheckCircle } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'DSGVO-konform & Hosting in Deutschland',
    description: 'Alle Daten werden ausschließlich in deutschen Rechenzentren gespeichert und verarbeitet.',
    highlight: 'Made in Germany'
  },
  {
    icon: Lock,
    title: 'Ihre Daten bleiben in Ihrer Hand',
    description: 'Sie behalten die volle Kontrolle über Ihre Unternehmensdaten. Keine Weitergabe an Dritte.',
    highlight: '100% Datenschutz'
  },
  {
    icon: Server,
    title: 'Keine versteckten Cloud-Abhängigkeiten',
    description: 'Transparente Infrastruktur ohne versteckte Verbindungen zu ausländischen Cloud-Anbietern.',
    highlight: 'Vollständig transparent'
  }
];

const certifications = [
  'DSGVO-konform',
  'ISO 27001',
  'BSI-Grundschutz',
  'TÜV-zertifiziert'
];

const Security = () => {
  return (
    <section id="sicherheit" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">
            Sicherheit &{' '}
            <span className="text-blue-600">Datenschutz</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Vertrauen ist die Basis jeder Geschäftsbeziehung. Deshalb setzen 
            wir auf höchste Sicherheitsstandards und transparente Prozesse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-blue-600" size={32} />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 break-words">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <Shield className="text-blue-200 mx-auto mb-4" size={48} />
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Ihr Vertrauen ist unser Auftrag
            </h3>
            <p className="text-blue-100 text-base sm:text-lg">
              Wir entwickeln sichere Software-Lösungen für deutsche Unternehmen. 
              Ihre Daten sind bei uns in den besten Händen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;