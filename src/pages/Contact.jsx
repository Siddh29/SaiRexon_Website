import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: 'modernization',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormState({
        name: '',
        company: '',
        email: '',
        phone: '',
        requirement: 'modernization',
        message: ''
      });
      setTimeout(() => setSuccess(false), 4000);
    }, 1500);
  };

  return (
    <div className="contact-page animate-fade-in">
      {/* Page Header */}
      <section className="section-padding contact-header flex-center">
        <div className="header-text">
          <span className="badge cyan">Contact Hub</span>
          <h1>Initiate Digital Modernization <br /><span className="text-gradient-cyan">For Your Company</span></h1>
          <p>
            Connect with our systems integration division. Outline your database structures, operational bottlenecks, or SaaS requirements, and an enterprise tech architect will review your project parameters.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <section className="section-padding contact-main-section">
        <div className="grid-container grid-2">
          {/* Contact Details & Interactive Vector Map */}
          <div className="contact-info-panel">
            <div className="contact-coordinates">
              <h3>Direct Coordinates</h3>
              <div className="coordinate-item">
                <div className="coord-icon flex-center"><svg fill="var(--primary)" viewBox="0 0 24 24" width="18" height="18"><path d="M12 0c-4.198 0-8 3.103-8 7.302 0 3.829 4.385 10.25 7.422 14.28 1.107 1.465 1.956 1.465 3.064 0 3.093-4.09 7.514-10.451 7.514-14.28 0-4.199-3.801-7.302-8-7.302zm0 10c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg></div>
                <div>
                  <h5>Executive Headquarters</h5>
                  <p>Level 7, Cyber Heights, HITEC City, Hyderabad, Telangana 500081, India</p>
                </div>
              </div>
              <div className="coordinate-item">
                <div className="coord-icon flex-center"><svg fill="var(--primary)" viewBox="0 0 24 24" width="18" height="18"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></div>
                <div>
                  <h5>Communications</h5>
                  <p>connect@sairexon.com</p>
                </div>
              </div>
              <div className="coordinate-item">
                <div className="coord-icon flex-center"><svg fill="var(--primary)" viewBox="0 0 24 24" width="18" height="18"><path d="M20 22.622l-8-5.756-8 5.756v-21.622h16v21.622zm-12-7.516l4-2.88 4 2.88v-12.106h-8v12.106z"/></svg></div>
                <div>
                  <h5>Enterprise Hotline</h5>
                  <p>+91 40 4820 9012</p>
                </div>
              </div>
            </div>

            {/* Custom Interactive Vector Map Simulation (High-Contrast Clean Sand/Slate Style!) */}
            <div className="map-simulator glass-panel glowing-cyan">
              <h4>Active Operational Hubs</h4>
              <div className="india-map-vector">
                <svg viewBox="0 0 100 100" className="vector-svg">
                  {/* Mock India Boundaries representation */}
                  <path d="M35,15 Q40,5 50,15 T70,30 T60,60 T45,90 T30,70 T35,35 Z" fill="var(--bg-deep)" stroke="var(--border-glass)" strokeWidth="1" />
                  
                  {/* Radar Beacon 1: Mumbai */}
                  <g className="beacon mumbaibeacon">
                    <circle cx="36" cy="62" r="6" fill="none" stroke="var(--accent)" strokeWidth="1" className="radar-ring" />
                    <circle cx="36" cy="62" r="3" fill="var(--accent)" />
                    <text x="36" y="55" fill="var(--text-bright)" fontSize="4.5" fontWeight="600" textAnchor="middle">Mumbai Hub</text>
                  </g>

                  {/* Radar Beacon 2: Bengaluru */}
                  <g className="beacon blrbeacon">
                    <circle cx="48" cy="78" r="6" fill="none" stroke="var(--primary)" strokeWidth="1" className="radar-ring" />
                    <circle cx="48" cy="78" r="3" fill="var(--primary)" />
                    <text x="48" y="72" fill="var(--text-bright)" fontSize="4.5" fontWeight="600" textAnchor="middle">Bengaluru</text>
                  </g>

                  {/* Radar Beacon 3: Hyderabad */}
                  <g className="beacon hydbeacon">
                    <circle cx="50" cy="68" r="8" fill="none" stroke="var(--primary)" strokeWidth="1.5" className="radar-ring-main" />
                    <circle cx="50" cy="68" r="4" fill="var(--primary)" />
                    <text x="50" y="61" fill="var(--primary)" fontSize="5" fontWeight="700" textAnchor="middle">Hyderabad HQ</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Contact Input Form */}
          <div className="contact-form-panel glass-panel glowing-orange">
            {success ? (
              <div className="form-success-wrapper text-center animate-fade-in">
                <div className="success-icon flex-center">✓</div>
                <h3>Transmission Received!</h3>
                <p>We've registered your project parameters in our queue. A senior architect will contact you directly within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Submit Project Parameters</h3>
                <p className="form-note">Complete our intake audit form to specify system variables.</p>
                
                <div className="grid-container grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
                  <div className="form-group">
                    <label htmlFor="name-input">Full Name *</label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company-input">Company / Organization *</label>
                    <input
                      id="company-input"
                      type="text"
                      name="company"
                      required
                      value={formState.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid-container grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
                  <div className="form-group">
                    <label htmlFor="email-input">Work Email *</label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone-input">Phone Number</label>
                    <input
                      id="phone-input"
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label htmlFor="requirement-select">Select Modernization Variable *</label>
                  <select
                    id="requirement-select"
                    name="requirement"
                    value={formState.requirement}
                    onChange={handleInputChange}
                    className="select-input"
                  >
                    <option value="modernization">Legacy Codebase Modernization</option>
                    <option value="saas">Custom Vertical SaaS Platform Dev</option>
                    <option value="automation">AI Process Automation Engines</option>
                    <option value="devops">Kubernetes & DevOps Scaling</option>
                    <option value="consulting">AI Advisory & Strategy Audit</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label htmlFor="message-input">Define Project Scope / System Pain Points *</label>
                  <textarea
                    id="message-input"
                    name="message"
                    required
                    rows="5"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe system versions, legacy technologies, database sizes, or operational hurdles..."
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-primary w-100">
                  {loading ? 'Transmitting system logs...' : 'Transmit Project Scope'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .contact-header {
          min-height: 60vh;
          text-align: center;
          padding: 0 10%;
          border-bottom: 1px solid var(--border-glass);
          background: radial-gradient(circle at 50% 30%, rgba(var(--secondary-rgb), 0.08) 0%, transparent 60%);
        }

        .header-text {
          max-width: 800px;
          margin-top: 60px;
        }

        .header-text h1 {
          font-size: 3.5rem;
          margin-bottom: 24px;
          line-height: 1.15;
        }

        .header-text p {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-normal);
        }

        /* Coordinates */
        .contact-coordinates {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-bottom: 40px;
        }

        .contact-coordinates h3 {
          font-size: 1.5rem;
          color: var(--text-bright);
          margin-bottom: 10px;
        }

        .coordinate-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .coord-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(91, 33, 182, 0.04);
          border: 1px solid rgba(91, 33, 182, 0.12);
          flex-shrink: 0;
        }

        .coordinate-item h5 {
          font-family: var(--font-badge);
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--primary);
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .coordinate-item p {
          font-size: 0.95rem;
          line-height: 1.5;
          color: var(--text-normal);
          margin: 0;
        }

        /* Map Simulator */
        .map-simulator {
          padding: 30px;
          background: #ffffff;
        }

        .map-simulator h4 {
          font-family: var(--font-badge);
          font-size: 0.85rem;
          color: var(--text-bright);
          margin-bottom: 20px;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .india-map-vector {
          width: 100%;
          max-width: 320px;
          margin: 0 auto;
        }

        .vector-svg {
          width: 100%;
          height: 100%;
        }

        /* Radar animations on map */
        @keyframes radarPulse {
          0% { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        .radar-ring {
          transform-origin: center;
          animation: radarPulse 2s infinite ease-out;
        }

        .radar-ring-main {
          transform-origin: center;
          animation: radarPulse 1.8s infinite ease-out;
        }

        .blrbeacon .radar-ring { animation-delay: 0.4s; }
        .mumbaibeacon .radar-ring { animation-delay: 0.8s; }

        /* Form styling */
        .contact-form-panel {
          padding: 50px 40px;
          background: #ffffff;
        }

        .contact-form h3 {
          font-size: 1.8rem;
          color: var(--text-bright);
          margin-bottom: 6px;
          text-align: center;
        }

        .form-note {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-align: center;
          margin-bottom: 30px;
        }

        .select-input {
          padding: 12px;
          background: var(--bg-deep);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-bright);
          width: 100%;
          font-family: var(--font-body);
        }

        .select-input option {
          background: #ffffff;
          color: var(--text-bright);
        }

        .form-success-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
        }

        .success-icon {
          width: 64px;
          height: 64px;
          background: rgba(91, 33, 182, 0.08);
          border: 2px solid var(--primary);
          color: var(--primary);
          font-size: 2rem;
          font-weight: bold;
          border-radius: 50%;
          margin-bottom: 24px;
        }

        .form-success-wrapper h3 {
          font-size: 1.8rem;
          color: var(--text-bright);
          margin-bottom: 12px;
        }

        .form-success-wrapper p {
          font-size: 1.05rem;
          color: var(--text-normal);
          max-width: 380px;
        }

        @media (max-width: 768px) {
          .contact-header h1 {
            font-size: 2.3rem;
          }
          .contact-form-panel {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
