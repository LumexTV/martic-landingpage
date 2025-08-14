import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProblem = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* White Glowing Clock Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-96 transform -translate-y-1/2 pointer-events-none hidden lg:block"
      >
        <Clock size={450} className="text-white drop-shadow-[0_0_80px_rgba(255,255,255,1)] [&>path]:stroke-[1.5]" />
      </motion.div>

      {/* Enhanced Background Effects with More Depth */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/2 to-blue-500/2 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Wir sparen Ihrem Unternehmen{' '}
              <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zeit
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold mt-8">
              Mit intelligenten Automatisierungen
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-2xl shadow-cyan-500/30 relative overflow-hidden group"
            >
              {/* Button Glow Effect */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <span className="relative z-10">Erstgespräch kostenlos vereinbaren</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProblem}
              className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-white hover:text-white transition-all duration-300 inline-flex items-center justify-center space-x-3 group"
            >
              <span>Erfahren Sie mehr</span>
              <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <p className="text-sm text-gray-400">
            Effizient • Einfach • Entlastend
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;