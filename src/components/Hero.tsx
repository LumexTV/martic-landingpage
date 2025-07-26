import { motion } from 'framer-motion';
import { ArrowRight, Zap, Clock, Shield, Bot, Sparkles, Lightbulb } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    console.log('Scrolling to contact section...');
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log('Contact element found and scrolled to');
    } else {
      console.error('Contact element not found');
    }
  };

  const scrollToAutomation = () => {
    console.log('Scrolling to automation section...');
    const element = document.getElementById('automatisierung');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log('Automation element found and scrolled to');
    } else {
      console.error('Automation element not found');
    }
  };

  return (
    <section id="start" className="pt-24 pb-20 bg-gradient-to-br from-black via-slate-900 to-black min-h-screen flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professionelle KI-Lösungen für{' '}
              <span className="text-cyan-400 break-words bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">Handwerksbetriebe</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Bringen Sie Ihr Unternehmen auf das nächste Level mit smarten 
              Automationen und digitalen Workflows. Einfach, sicher, effizient.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-bold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <span className="whitespace-nowrap">Jetzt Erstberatung sichern</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAutomation}
                className="border-2 border-cyan-400/50 text-cyan-400 px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-medium hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
              >
                Mehr erfahren
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="text-cyan-400" size={16} />
                <span>DSGVO-konform</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-cyan-400" size={16} />
                <span>Schnelle Umsetzung</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="text-cyan-400" size={16} />
                <span className="whitespace-nowrap">Komplett personalisiert</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-30">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-20 right-8 w-12 h-12 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-12 w-16 h-16 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-sm"
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