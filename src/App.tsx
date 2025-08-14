import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/chat-widget.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Plan from './components/Plan';
import About from './components/About';
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
              {/* Ansprechende Website-Struktur */}
              <Hero />           {/* 1. Hero (Oneliner, CTA, Bild) */}
              <Problem />        {/* 2. Das Problem */}
              <Solution />       {/* 3. Die Lösung */}
              <Plan />           {/* 4. Der 3-Schritte-Plan */}
              <About />          {/* 5. Über uns/Warum wir */}
              <Contact />        {/* 6. Footer/Kontakt */}
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