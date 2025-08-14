import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, TrendingUp, Target, Scale, Headphones, Rocket, BarChart3, Link, Eye } from 'lucide-react';

const About: React.FC = () => {
  const aboutPoints = [
    {
      id: 1,
      icon: Zap,
      title: 'Erstberatung blitzschnell',
      desc: 'Angebot innerhalb von 48h – es geht sofort los, keine langen Wartezeiten.'
    },
    {
      id: 2,
      icon: Shield,
      title: 'DSGVO-konforme Sicherheit',
      desc: '100% rechtssichere Datenverarbeitung nach deutschem Datenschutzstandard.'
    },
    {
      id: 3,
      icon: TrendingUp,
      title: 'Schneller Return on Investment',
      desc: 'Amortisation meist schon im ersten Monat durch spürbare Zeit- und Kostenersparnis.'
    },
    {
      id: 4,
      icon: Target,
      title: 'Individuell für Ihr Unternehmen',
      desc: 'Maßgeschneiderte Automatisierung – exakt abgestimmt auf Ihre Prozesse und Anforderungen.'
    },
    {
      id: 5,
      icon: Scale,
      title: 'Skalierbare Lösungen',
      desc: 'Wächst flexibel mit Ihrem Unternehmen – egal, ob Sie 10 oder 1000 Mitarbeitende haben.'
    },
    {
      id: 6,
      icon: Headphones,
      title: 'Rundum-Betreuung',
      desc: 'Immer eine Kontaktperson und aktive Betreuung des Servers und der Prozesse.'
    },
    {
      id: 7,
      icon: Rocket,
      title: 'Zukunftssicher automatisiert',
      desc: 'Immer auf dem neuesten Stand der KI-Technologie – Ihre Prozesse bleiben modern und effizient.'
    },
    {
      id: 8,
      icon: BarChart3,
      title: 'Messbare Soforteffekte',
      desc: 'Verbesserungen und Entlastung sind ab dem ersten Tag sichtbar.'
    },
    {
      id: 9,
      icon: Link,
      title: 'Nahtlose Integration',
      desc: 'Einfache Anbindung an bestehende Systeme und Tools – keine Umstellung notwendig.'
    },
    {
      id: 10,
      icon: Eye,
      title: 'Maximale Transparenz',
      desc: 'Klare Kommunikation, nachvollziehbare Abläufe und volle Kontrolle über Ihre Automatisierung.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Warum <span className="text-cyan-400">Martic Solutions</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Wir sind Experten für Automatisierung und haben uns darauf spezialisiert, 
            Unternehmen Zeit zu schenken und Prozesse zu optimieren.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-6 mx-auto">
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4 text-center">{point.title}</h3>
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
