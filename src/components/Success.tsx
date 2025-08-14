import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Star, ChevronDown, ChevronUp } from 'lucide-react';

const Success: React.FC = () => {
  const [expandedSuccess, setExpandedSuccess] = useState<number | null>(null);

  const successStats = [
    {
      id: 1,
      icon: TrendingUp,
      value: '80%',
      title: 'Zeitersparnis',
      shortDesc: 'Durchschnittliche Zeitersparnis bei unseren Kunden',
      longDesc: 'Unsere Kunden sparen durchschnittlich 80% der Zeit, die sie vorher mit manuellen Aufgaben verbracht haben. Diese Zeit können sie für strategische Entscheidungen und Wachstum nutzen.'
    },
    {
      id: 2,
      icon: Users,
      value: '500+',
      title: 'Zufriedene Kunden',
      shortDesc: 'Unternehmen vertrauen auf unsere Lösungen',
      longDesc: 'Über 500 Unternehmen aus verschiedenen Branchen vertrauen bereits auf unsere Automatisierungslösungen. Von kleinen Betrieben bis zu großen Konzernen.'
    },
    {
      id: 3,
      icon: Award,
      value: '24h',
      title: 'Schnelle Umsetzung',
      shortDesc: 'Von der Analyse bis zur Implementierung',
      longDesc: 'Wir implementieren Ihre Automatisierung in nur 24 Stunden. Von der ersten Analyse bis zur vollständigen Implementierung - schnell und effizient.'
    },
    {
      id: 4,
      icon: Star,
      value: '4.9/5',
      title: 'Kundenzufriedenheit',
      shortDesc: 'Bewertung unserer Automatisierungslösungen',
      longDesc: 'Unsere Kunden bewerten unsere Automatisierungslösungen mit durchschnittlich 4.9 von 5 Sternen. Qualität und Zufriedenheit stehen an erster Stelle.'
    }
  ];

  return (
    <section id="success" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ihre <span className="text-green-400">Erfolgsaussichten</span> mit uns
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Über 95% unserer Kunden erreichen messbare Verbesserungen in Effizienz und Zeitersparnis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {successStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 hover:border-green-400/40 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6 mx-auto">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-green-400 mb-2">{stat.value}</h3>
                <h4 className="text-xl font-semibold text-white mb-4">{stat.title}</h4>
                <p className="text-gray-300 mb-4">
                  {stat.shortDesc}
                </p>
                
                {/* Dropdown für längere Beschreibung */}
                <div className="text-center">
                  <button
                    onClick={() => setExpandedSuccess(expandedSuccess === stat.id ? null : stat.id)}
                    className="flex items-center justify-center space-x-2 text-green-400 hover:text-green-300 transition-colors mx-auto"
                  >
                    <span className="text-sm">
                      {expandedSuccess === stat.id ? 'Weniger anzeigen' : 'Mehr erfahren'}
                    </span>
                    {expandedSuccess === stat.id ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                  
                  {expandedSuccess === stat.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 p-4 bg-green-500/5 rounded-lg border border-green-500/20"
                    >
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {stat.longDesc}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bereit für Ihren Erfolg?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Werden Sie Teil unserer Erfolgsgeschichte. Über 95% unserer Kunden erreichen 
              bereits in den ersten 30 Tagen messbare Verbesserungen.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-2xl shadow-green-500/30"
            >
              Jetzt Erfolg werden
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Success;
