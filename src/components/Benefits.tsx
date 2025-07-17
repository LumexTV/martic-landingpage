import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Smartphone, Settings, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Zeit sparen & Routinearbeiten automatisieren',
    description: 'Bis zu 80% weniger Zeit mit Büroarbeit verschwenden – mehr Zeit für Ihre Kunden und Projekte.',
    stats: '80% Zeitersparnis'
  },
  {
    icon: Smartphone,
    title: 'Digitalisierung ohne Technikstress',
    description: 'Einfache Bedienung, die jeder versteht. Keine komplizierte Software, sondern intuitive Lösungen.',
    stats: 'Zukunftsorientiert'
  },
  {
    icon: Settings,
    title: 'Individuelle Lösungen für Handwerksbetriebe',
    description: 'Maßgeschneidert für Ihr Gewerk – von Elektrik über Sanitär bis hin zum Bau.',
    stats: 'Maßgeschneidert für Sie'
  },
  {
    icon: TrendingUp,
    title: 'Mehr Umsatz durch Effizienz',
    description: 'Schnellere Angebotserstellung, weniger Fehler, zufriedenere Kunden – das steigert Ihren Erfolg.',
    stats: '+25% Effizienz'
  }
];

const Benefits = () => {
  return (
    <section id="vorteile" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">
            Warum{' '}
            <span className="text-blue-600 break-words">Martic Solutions?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Wir verstehen die Herausforderungen von Handwerksbetrieben und 
            bieten Lösungen, die wirklich funktionieren.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:bg-blue-50 transition-all duration-300 group-hover:shadow-lg">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <benefit.icon className="text-blue-600" size={28} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 space-y-2 sm:space-y-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 break-words pr-2">
                        {benefit.title}
                      </h3>
                      <span className="text-xs sm:text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 sm:px-3 rounded-full flex-shrink-0 self-start">
                        {benefit.stats}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;