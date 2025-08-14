import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, TrendingDown, Users } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    {
      id: 1,
      icon: Clock,
      title: 'Zeitverschwendung',
      shortDesc: 'Stunden mit manuellen Aufgaben verschwenden'
    },
    {
      id: 2,
      icon: TrendingDown,
      title: 'Wettbewerbsnachteil',
      shortDesc: 'Andere automatisieren, du verlierst den Anschluss'
    },
    {
      id: 3,
      icon: Users,
      title: 'Überlastung',
      shortDesc: 'Team überlastet mit Routineaufgaben'
    },
    {
      id: 4,
      icon: AlertTriangle,
      title: 'Fehleranfälligkeit',
      shortDesc: 'Manuelle Prozesse = mehr Fehler'
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Das <span className="text-red-400">Problem</span> kennen wir alle
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Während du wertvolle Zeit mit wiederkehrenden Aufgaben verbringst, 
            zieht deine Konkurrenz an dir vorbei.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-6 hover:border-red-400/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mb-6 mx-auto">
                <problem.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">{problem.title}</h3>
              <p className="text-gray-300 text-center">
                {problem.shortDesc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
