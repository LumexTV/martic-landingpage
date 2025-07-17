import React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Automation from './components/Automation';
import Benefits from './components/Benefits';
import Security from './components/Security';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="bg-white min-h-screen">
          <Navbar />
          <Hero />
          <Automation />
          <Benefits />
          <Security />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;