import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Rocket, Shield } from 'lucide-react';

const Solution: React.FC = () => {
  const solutions = [
    {
      id: 1,
      icon: Shield,
      title: 'Prozess-Analyse & Beratung',
      shortDesc: 'Identifikation von Automatisierungspotenzialen und individuelle Beratung für maximale Effizienz.'
    },
    {
      id: 2,
      icon: Zap,
      title: 'Individuelle KI-Automatisierung',
      shortDesc: 'Entwicklung und Implementierung maßgeschneiderter Lösungen mit APIs für reibungslose Abläufe.'
    },
    {
      id: 3,
      icon: Brain,
      title: 'Betreuung & Optimierung',
      shortDesc: 'Laufende Wartung, Support und kontinuierliche Anpassung an neue Bedürfnisse.'
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Die <span className="text-cyan-400">Lösung</span> ist einfacher als du denkst
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Wir automatisieren deine Prozesse mit modernster Technologie und geben dir 
            die Zeit zurück, die du für Wachstum brauchst.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)"
              }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-6 mx-auto">
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{solution.title}</h3>
              <p className="text-gray-300 text-center">
                {solution.shortDesc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
