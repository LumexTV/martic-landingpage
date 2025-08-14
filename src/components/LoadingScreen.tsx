import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      exit={{ 
        scale: 20,
        opacity: 0
      }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut"
      }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <motion.div
       
        className="relative"
      >
        {/* Main Logo */}
        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl">
          <Bot className="text-white" size={32} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;