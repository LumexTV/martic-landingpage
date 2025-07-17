import { motion } from 'framer-motion';
import { ArrowRight, Zap, Clock, Shield, Bot, Sparkles, Lightbulb } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAutomation = () => {
    const element = document.getElementById('automatisierung');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="start" className="pt-24 pb-20 bg-gradient-to-br from-white via-blue-50/30 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Professionelle KI-Lösungen für{' '}
              <span className="text-blue-600 break-words">Handwerksbetriebe</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Bringen Sie Ihr Unternehmen auf das nächste Level mit smarten 
              Automationen und digitalen Workflows. Einfach, sicher, effizient.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span className="whitespace-nowrap">Jetzt Erstberatung sichern</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAutomation}
                className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Mehr erfahren
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-500"
            >
              <div className="flex items-center space-x-2">
                <Shield className="text-blue-600" size={16} />
                <span>DSGVO-konform</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-blue-600" size={16} />
                <span>Schnelle Umsetzung</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="text-blue-600" size={16} />
                <span className="whitespace-nowrap">Komplett personalisiert</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-4 left-4 w-20 h-20 bg-blue-600 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-20 right-8 w-12 h-12 bg-blue-800 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-12 w-16 h-16 bg-blue-500 rounded-full"
                />
              </div>

              {/* AI Agent Illustration */}
              <div className="relative flex items-center justify-center h-80">
                <img 
                  src="/images/mainimage.jpg" 
                  alt="Martic Solutions KI-Automatisierung für Handwerksbetriebe - Moderne digitale Lösungen" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  loading="eager"
                  width="400"
                  height="320"
                />
                
                {/* Overlay with AI elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl" />
                
                {/* Floating AI indicators */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                >
                  <Bot className="text-blue-600" size={24} />
                </motion.div>
                
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                >
                  <Lightbulb className="text-blue-600" size={20} />
                </motion.div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
            >
              <Zap className="text-blue-600" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>

    
    </section>
  );
};

export default Hero;