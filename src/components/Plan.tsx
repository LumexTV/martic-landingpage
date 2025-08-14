import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, Rocket, ArrowRight } from 'lucide-react';

const Plan: React.FC = () => {
  return (
    <section id="plan" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dein <span className="text-cyan-400">3-Schritte-Plan</span> zum Erfolg
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            In nur 3 einfachen Schritten verwandeln wir deine manuellen Prozesse 
            in effiziente Automatisierungen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Schritt 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-cyan-400/40 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-6 mx-auto">
                <Search className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">01</div>
                <h3 className="text-2xl font-bold text-white mb-4">Analyse</h3>
                <p className="text-gray-300 leading-relaxed">
                  Wir analysieren deine aktuellen Prozesse und identifizieren 
                  die größten Automatisierungspotenziale für maximale Effizienz.
                </p>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <ArrowRight className="w-8 h-8 text-cyan-400" />
            </div>
          </motion.div>

          {/* Schritt 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mb-6 mx-auto">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">02</div>
                <h3 className="text-2xl font-bold text-white mb-4">Zukunftsplan</h3>
                <p className="text-gray-300 leading-relaxed">
                  Wir entwickeln einen maßgeschneiderten Zukunftsplan mit 
                  modernster Technologie, perfekt auf deine Bedürfnisse abgestimmt.
                </p>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <ArrowRight className="w-8 h-8 text-blue-400" />
            </div>
          </motion.div>

          {/* Schritt 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 h-full hover:border-green-400/40 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6 mx-auto">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">03</div>
                <h3 className="text-2xl font-bold text-white mb-4">Umsetzung</h3>
                <p className="text-gray-300 leading-relaxed">
                  Wir setzen alles für dich um und begleiten dich durch die gesamte 
                  Transformation - du konzentrierst dich auf das Wesentliche.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline für Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:hidden mb-12"
        >
          <div className="flex justify-center space-x-4">
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Frage noch heute deinen Weg in die Zukunft an
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Fülle einfach das Formular aus und wir melden uns innerhalb von 24h zur Terminvereinbarung.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Keine Verpflichtungen</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Sofortiger Start möglich</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
            >
              Jetzt kostenlos beraten lassen
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Plan;
