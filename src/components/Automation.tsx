import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, FileText, Calendar, Workflow } from 'lucide-react';

const automationFeatures = [
  {
    icon: BarChart3,
    title: 'Ersetzt eine ganze Stelle',
    description: 'Läuft 24/7 für Sie im Hintergrund - Sie brauchen sich keine Gedanken mehr, um langweilige Prozesse zu machen.',
    color: 'from-sky-400 to-sky-500'
  },
  {
    icon: FileText,
    title: 'KI-Agenten für Dokumente',
    description: 'Automatische Erstellung von Angeboten, Rechnungen und Berichten – maßgeschneidert für Ihr Handwerk.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Calendar,
    title: 'Smarte Terminplanung',
    description: 'Intelligente Terminkoordination mit Kunden, Lieferanten und Ihrem Team.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Workflow,
    title: 'Automatisierte Workflows',
    description: 'Weniger Bürokratie, mehr Zeit für echte Arbeit – Routineaufgaben laufen von selbst.',
    color: 'from-sky-400 to-sky-500'
  }
];

const Automation = () => {
  return (
    <section id="automatisierung" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">
            Unsere Lösungen –{' '}
            <span className="text-blue-600 break-words">Ihre Zeitersparnis</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Entdecken Sie, wie KI-Automatisierung Ihren Handwerksbetrieb 
            effizienter und profitabler macht.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {automationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 break-words">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Mehr Zeit für echte Arbeit
            </h3>
            <p className="text-blue-100 text-base sm:text-lg mb-6">
              Während die KI Ihre Büroarbeit erledigt, konzentrieren Sie sich 
              auf das, was Sie am besten können – Ihr Handwerk.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('kontakt');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Kontaktieren Sie uns
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Automation;