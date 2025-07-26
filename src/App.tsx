import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/chat-widget.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Automation from './components/Automation';
import Benefits from './components/Benefits';
import Security from './components/Security';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Impressum from './pages/Impressum';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scroll');
    
    if (scrollTo) {
      // Wait for page to render, then scroll
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <ScrollHandler />
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
    </Router>
  );
}

export default App;