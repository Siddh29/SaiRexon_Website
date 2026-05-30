import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Consultation from './pages/Consultation';
import JobGuidance from './pages/JobGuidance';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [transitionState, setTransitionState] = useState('active');

  // Trigger page hot-swap with liquid smooth transition
  const handlePageChange = (pageId) => {
    setTransitionState('exiting');
    setTimeout(() => {
      setCurrentPage(pageId);
      setTransitionState('entering');
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      setTimeout(() => {
        setTransitionState('active');
      }, 50);
    }, 250); // Matching CSS fade transition duration
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={handlePageChange} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      case 'careers':
        return <Careers />;
      case 'consultation':
        return <Consultation />;
      case 'job-guidance':
        return <JobGuidance />;
      default:
        return <Home setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div className="app-shell">
      {/* Background Cyber Grids & Glowspots */}
      <div className="cyber-grid" />
      <div className="ambient-glows">
        <div className="glow-spot-1" />
        <div className="glow-spot-2" />
        <div className="glow-spot-3" />
      </div>
      
      {/* Sexy UI/UX Editorial Background Geometric Circles */}
      <div className="background-decorations">
        <div className="bg-circle bg-circle-1" />
        <div className="bg-circle bg-circle-2" />
        <div className="bg-circle bg-circle-3" />
      </div>

      {/* Shared Navigation */}
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />

      {/* Dynamic Page Container with visual transition hook */}
      <main className={`main-content-shell page-transition-${transitionState}`}>
        {renderPage()}
      </main>

      {/* Floating Conversational assistant */}
      <Chatbot setCurrentPage={handlePageChange} />

      {/* Footer quick links and newsletter */}
      <Footer setCurrentPage={handlePageChange} />

      <style>{`
        .app-shell {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .main-content-shell {
          flex-grow: 1;
          margin-top: 80px; /* Matching Navbar space */
          transition: opacity 0.25s ease, transform 0.25s ease;
          width: 100%;
        }

        /* Fluid Slide Up Transitions */
        .page-transition-exiting {
          opacity: 0;
          transform: translateY(-8px);
        }

        .page-transition-entering {
          opacity: 0;
          transform: translateY(8px);
        }

        .page-transition-active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default App;
