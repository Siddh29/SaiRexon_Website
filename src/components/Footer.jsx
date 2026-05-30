import React, { useState } from 'react';

const Footer = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 1200);
  };

  const handleLinkClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-top">
        {/* Company Pitch Column */}
        <div className="footer-col brand-col">
          <div className="footer-logo" onClick={() => handleLinkClick('home')}>
            <svg viewBox="0 0 100 100" width="32" height="32">
              <polygon points="50,15 90,80 10,80" stroke="var(--primary)" strokeWidth="8" fill="none" />
              <circle cx="50" cy="50" r="10" fill="var(--secondary)" />
            </svg>
            <span className="logo-text">
              Sai<span className="highlight">Rexon</span>
            </span>
          </div>
          <p className="brand-description">
            AI-driven enterprise modernization and scalable vertical SaaS solutions engineered to elevate business efficiency in India's emerging markets.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
              <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col links-col">
          <h3>Quick Links</h3>
          <div className="links-grid">
            <button onClick={() => handleLinkClick('home')}>Home</button>
            <button onClick={() => handleLinkClick('about')}>About Us</button>
            <button onClick={() => handleLinkClick('products')}>Products</button>
            <button onClick={() => handleLinkClick('services')}>Services</button>
            <button onClick={() => handleLinkClick('careers')}>Careers</button>
            <button onClick={() => handleLinkClick('consultation')}>Consultation</button>
            <button onClick={() => handleLinkClick('job-guidance')}>Job Guidance</button>
            <button onClick={() => handleLinkClick('contact')}>Contact Us</button>
          </div>
        </div>

        {/* Contact Info Column */}
        <div className="footer-col info-col">
          <h3>Contact Info</h3>
          <div className="contact-details">
            <div className="contact-item">
              <svg fill="var(--primary)" viewBox="0 0 24 24" width="16" height="16"><path d="M12 0c-4.198 0-8 3.103-8 7.302 0 3.829 4.385 10.25 7.422 14.28 1.107 1.465 1.956 1.465 3.064 0 3.093-4.09 7.514-10.451 7.514-14.28 0-4.199-3.801-7.302-8-7.302zm0 10c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
              <span>Level 7, Cyber Heights, HITEC City, Hyderabad, TS 500081</span>
            </div>
            <div className="contact-item">
              <svg fill="var(--primary)" viewBox="0 0 24 24" width="16" height="16"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
              <span>connect@sairexon.com</span>
            </div>
            <div className="contact-item">
              <svg fill="var(--primary)" viewBox="0 0 24 24" width="16" height="16"><path d="M20 22.622l-8-5.756-8 5.756v-21.622h16v21.622zm-12-7.516l4-2.88 4 2.88v-12.106h-8v12.106z"/></svg>
              <span>+91 40 4820 9012</span>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Column */}
        <div className="footer-col newsletter-col">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for insights on AI implementation and SaaS modernization.</p>
          
          {subscribed ? (
            <div className="subscribed-success animate-fade-in">
              <span className="success-badge">✓ Subscribed</span>
              <p>Welcome to our tech ecosystem newsletter!</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                required
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
              />
              <button type="submit" disabled={loading} className="newsletter-btn">
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SaiRexon Technologies Private Limited. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
          <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: var(--bg-card);
          border-top: 1px solid var(--border-glass);
          padding: 80px 10% 40px 10%;
          color: var(--text-normal);
          position: relative;
          z-index: 10;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-col h3 {
          font-family: var(--font-badge);
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 8px;
          color: var(--text-bright);
        }

        .footer-col h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 24px;
          height: 2px;
          background: var(--primary);
        }

        .brand-col .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .brand-col .logo-text {
          font-family: var(--font-badge);
          font-weight: 700;
          font-size: 1.4rem;
          color: var(--text-bright);
        }

        .brand-col .logo-text .highlight {
          color: var(--primary);
        }

        .brand-description {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 24px;
          color: var(--text-muted);
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          background: rgba(15, 23, 42, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: 50%;
          color: var(--text-normal);
          transition: var(--transition-smooth);
        }

        .social-icon:hover {
          color: #ffffff;
          background: var(--primary);
          border-color: var(--primary);
          box-shadow: 0 4px 12px rgba(91, 33, 182, 0.2);
          transform: translateY(-2px);
        }

        /* Links Column */
        .links-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .links-grid button {
          background: none;
          border: none;
          color: var(--text-normal);
          font-size: 0.88rem;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-fast);
          padding: 2px 0;
        }

        .links-grid button:hover {
          color: var(--primary);
          transform: translateX(4px);
        }

        /* Contact Details */
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.88rem;
          line-height: 1.5;
        }

        .contact-item svg {
          margin-top: 4px;
          flex-shrink: 0;
        }

        /* Newsletter Column */
        .newsletter-col p {
          font-size: 0.88rem;
          margin-bottom: 20px;
          color: var(--text-muted);
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .newsletter-input {
          padding: 12px;
          border-radius: var(--radius-sm);
          background: rgba(15, 23, 42, 0.02);
          border: 1px solid var(--border-glass);
          color: var(--text-bright);
          font-family: var(--font-body);
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .newsletter-input:focus {
          outline: none;
          border-color: var(--primary);
          background: #ffffff;
        }

        .newsletter-btn {
          padding: 12px;
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

        .newsletter-btn:hover {
          background: hsl(263, 69%, 36%);
          box-shadow: 0 6px 16px rgba(91, 33, 182, 0.25);
        }

        .subscribed-success {
          background: rgba(91, 33, 182, 0.04);
          border: 1px solid var(--primary);
          padding: 16px;
          border-radius: var(--radius-sm);
        }

        .success-badge {
          display: inline-block;
          font-family: var(--font-badge);
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 8px;
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid var(--border-glass);
          padding-top: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-legal {
          display: flex;
          gap: 24px;
        }

        .footer-legal a:hover {
          color: var(--primary);
        }

        @media (max-width: 992px) {
          .footer-top {
            grid-template-columns: 1.5fr 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 576px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
