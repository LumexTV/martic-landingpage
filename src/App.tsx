import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Automation from './components/Automation';
import Benefits from './components/Benefits';
import Security from './components/Security';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Impressum from './pages/Impressum';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="bg-white min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Automation />
                <Benefits />
                <Security />
                <Contact />
              </>
            } />
            <Route path="/datenschutz" element={<PrivacyPolicy />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;