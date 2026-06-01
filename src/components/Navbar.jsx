import React, { useState, useEffect } from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo" onClick={() => handleNavClick('home')}>
          <div className="logo-icon">
            <svg viewBox="0 0 100 100" width="32" height="32">
              <polygon points="50,15 90,80 10,80" stroke="var(--primary)" strokeWidth="8" fill="none" />
              <circle cx="50" cy="50" r="10" fill="var(--secondary)" />
            </svg>
          </div>
          <span className="logo-text">
            Sai<span className="highlight">Rexon</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`nav-link ${currentPage === link.id ? 'active' : ''}`}
            >
              {link.label}
              <span className="nav-indicator" />
            </button>
          ))}
          <button onClick={() => handleNavClick('consultation')} className="nav-btn-consultation">
            Book Consultation
          </button>
        </div>

        {/* Hamburger Menu Trigger */}
        <button className={`burger-menu ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
      </nav>

      {/* Mobile Drawer Panel */}
      <div className={`mobile-nav-panel ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links-container">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`mobile-nav-link ${currentPage === link.id ? 'active' : ''}`}
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => handleNavClick('consultation')} className="mobile-btn-consultation">
            Book Consultation
          </button>
        </div>
      </div>

      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 24px 10%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 100;
          transition: var(--transition-smooth);
          background: transparent;
        }

        .navbar-container.scrolled {
          padding: 16px 10%;
          background: rgba(3, 5, 20, 0.85);
          backdrop-filter: blur(20px) saturate(120%);
          -webkit-backdrop-filter: blur(20px) saturate(120%);
          border-bottom: 1px solid var(--border-glass);
          box-shadow: 0 10px 30px -15px rgba(3, 5, 20, 0.5);
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .logo-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          font-family: var(--font-badge);
          font-weight: 700;
          font-size: 1.4rem;
          letter-spacing: -0.01em;
          color: var(--text-bright);
        }

        .logo-text .highlight {
          color: var(--primary);
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--text-normal);
          font-family: var(--font-badge);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          padding: 8px 0;
          transition: var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .nav-indicator {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: var(--transition-smooth);
          transform: translateX(-50%);
        }

        .nav-link.active {
          color: var(--primary);
        }

        .nav-link.active .nav-indicator {
          width: 100%;
        }

        .nav-btn-consultation {
          padding: 10px 22px;
          background: var(--primary);
          color: #ffffff;
          font-family: var(--font-badge);
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: none;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-fast);
          box-shadow: 0 4px 12px rgba(91, 33, 182, 0.15);
        }

        .nav-btn-consultation:hover {
          background: hsl(263, 69%, 36%);
          box-shadow: 0 6px 16px rgba(91, 33, 182, 0.25);
          transform: translateY(-1px);
        }

        /* Burger Menu Styling */
        .burger-menu {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 22px;
          height: 15px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 102;
        }

        .burger-bar {
          width: 100%;
          height: 2px;
          background-color: var(--text-bright);
          transition: var(--transition-smooth);
          transform-origin: left center;
        }

        /* Burger Animations */
        .burger-menu.active .burger-bar:nth-child(1) {
          transform: rotate(45deg) translate(2px, -1px);
          background-color: var(--primary);
        }

        .burger-menu.active .burger-bar:nth-child(2) {
          width: 0%;
          opacity: 0;
        }

        .burger-menu.active .burger-bar:nth-child(3) {
          transform: rotate(-45deg) translate(2px, 1px);
          background-color: var(--primary);
        }

        /* Mobile Drawer */
        .mobile-nav-panel {
          position: fixed;
          top: 0;
          right: 0;
          width: 290px;
          height: 100vh;
          background: rgba(8, 12, 36, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-left: 1px solid var(--border-glass);
          box-shadow: -10px 0 30px rgba(3, 5, 20, 0.5);
          z-index: 101;
          display: flex;
          align-items: center;
          padding: 80px 40px;
          transform: translateX(100%);
          transition: var(--transition-smooth);
        }

        .mobile-nav-panel.open {
          transform: translateX(0);
        }

        .mobile-links-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: var(--text-normal);
          font-family: var(--font-badge);
          font-weight: 600;
          font-size: 1.15rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-fast);
          padding: 8px 0;
          border-bottom: 1px solid rgba(15, 23, 42, 0.04);
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--primary);
          padding-left: 6px;
        }

        .mobile-btn-consultation {
          margin-top: 16px;
          padding: 12px;
          background: var(--primary);
          color: #ffffff;
          border: none;
          font-family: var(--font-badge);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: var(--radius-sm);
          cursor: pointer;
          text-align: center;
          box-shadow: 0 4px 12px rgba(91, 33, 182, 0.15);
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 20px 6%;
          }
          .navbar-container.scrolled {
            padding: 16px 6%;
          }
          .navbar-links {
            display: none;
          }
          .burger-menu {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
