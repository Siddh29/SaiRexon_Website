import React, { useState } from 'react';

const Services = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedCaseFilter, setSelectedCaseFilter] = useState('all');

  // Scheduler states
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const services = [
    { num: '01', title: 'AI consulting & Strategy', desc: 'Dissect operational workflow frameworks. We lay out concrete, low-risk machine learning adoption roadmaps customized to drive immediate growth.' },
    { num: '02', title: 'Workflow Process Automation', desc: 'Identify operational bottlenecks and deploy autonomous software agents to eliminate manual tasks and ensure absolute reliability.' },
    { num: '03', title: 'Legacy Software Migration', desc: 'Convert archaic databases and legacy monolithic codebases into modular, cloud-native architectures without interrupting active daily operations.' },
    { num: '04', title: 'Custom SaaS Development', desc: 'Engineer turnkey multi-tenant applications and specialized vertical SaaS platforms complete with dynamic billing hooks and diagnostic dashboards.' },
    { num: '05', title: 'Cloud Infrastructure & DevOps', desc: 'Configure secure Kubernetes clustering, serverless pipelines, auto-scalers, and robust CI/CD frameworks operating at 99.99% uptimes.' },
    { num: '06', title: 'Enterprise System Integration', desc: 'Forge secure connection points and gRPC bridges that embed AI cognitive units directly inside existing enterprise databases.' }
  ];

  const migrationSteps = [
    { step: 1, title: 'Map & Audit Architecture', desc: 'Our engineers ingest your active codebase models and trace database bottlenecks, creating a complete structural schematic.' },
    { step: 2, title: 'AI Target Design', desc: 'We design modern microservices and vector pipelines that will replace inefficient legacy nodes.' },
    { step: 3, title: 'Isolated Sandbox Phase', desc: 'The replacement structures are deployed inside secure, isolated sandboxes, running live test trials with production data copies.' },
    { step: 4, title: 'Secure Hot-Swap Launch', desc: 'With zero operational downtime, the production systems are swapped to the scalable cloud net.' }
  ];

  const caseStudies = [
    { title: '98% Patient Booking Accuracy', category: 'healthcare', desc: 'A clinic cluster in Maharashtra deployed RexonHealth, completely automating intake schedules and EHR synchronizations.', client: 'Sanjivani Health' },
    { title: 'Recruiting Speed Cut by 14 Days', category: 'workforce', desc: 'A staffing conglomerate in Bengaluru deployed our vector skills matching engines, filtering 24,000 resumes automatically.', client: 'CareerVantage India' },
    { title: '34% Lower Excess Stock Waste', category: 'commerce', desc: 'A multi-city retail grocery chain integrated our predictive load planners, automatically optimizing store shelf supplies.', client: 'HyperMart India' }
  ];

  const availableSlots = [
    { id: 'morning', time: '10:30 AM - 11:30 AM IST' },
    { id: 'noon', time: '02:00 PM - 03:00 PM IST' },
    { id: 'evening', time: '04:30 PM - 05:30 PM IST' }
  ];

  const handleBookSlot = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) return;
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setSelectedDate(null);
      setSelectedSlot(null);
    }, 3000);
  };

  const filteredCases = selectedCaseFilter === 'all'
    ? caseStudies
    : caseStudies.filter(c => c.category === selectedCaseFilter);

  return (
    <div className="services-page animate-fade-in">
      {/* Intro */}
      <section className="section-padding services-header flex-center">
        <div className="header-text">
          <span className="badge cyan">Capabilities</span>
          <h1>Engineered Enterprise Services <br /><span className="text-gradient-cyan">Built For High Performance</span></h1>
          <p>
            SaiRexon Technologies offers comprehensive digital modernization services. We partner with your technical teams to restructure backend architectures, introduce artificial intelligence, and scale services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding core-services-section">
        <div className="section-header">
          <span className="badge orange">Services Portfolio</span>
          <h2>A Comprehensive Technical Grid</h2>
          <p>We deploy senior engineers to optimize structures, automate operations, and transition legacy code.</p>
        </div>
        <div className="grid-container grid-3">
          {services.map((service, i) => (
            <div key={i} className="glass-panel service-detail-card">
              <span className="srv-num">{service.num}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Migration Stepper (Wow Factor #2) */}
      <section className="section-padding migration-stepper-section">
        <div className="section-header">
          <span className="badge blue">Modernization Pathway</span>
          <h2>Interactive Migration Stepper</h2>
          <p>Experience how SaiRexon transitions fragile legacy systems onto secure cloud networks.</p>
        </div>

        <div className="stepper-box glass-panel glowing-cyan">
          {/* Progress Indicators */}
          <div className="stepper-header">
            {migrationSteps.map((m) => (
              <button
                key={m.step}
                className={`step-btn ${activeStep === m.step ? 'active' : ''} ${activeStep > m.step ? 'completed' : ''}`}
                onClick={() => setActiveStep(m.step)}
              >
                <div className="step-circle">{m.step}</div>
                <span className="step-title">Phase {m.step}</span>
              </button>
            ))}
          </div>

          {/* Stepper Content */}
          <div className="stepper-body animate-fade-in" key={activeStep}>
            <div className="stepper-left">
              <h3>{migrationSteps[activeStep - 1].title}</h3>
              <p>{migrationSteps[activeStep - 1].desc}</p>
              
              <div className="stepper-navigation-btns">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep(prev => prev - 1)}
                  className="btn-secondary"
                >
                  ← Back
                </button>
                <button
                  disabled={activeStep === 4}
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="btn-primary"
                >
                  Next Phase →
                </button>
              </div>
            </div>

            <div className="stepper-right flex-center">
              <div className="visual-indicator-box">
                <svg viewBox="0 0 100 100" width="120" height="120">
                  <circle cx="50" cy="50" r="40" stroke="var(--primary)" strokeWidth="1" fill="none" opacity="0.3" />
                  <path
                    d="M 50,50 L 50,10 A 40,40 0 0,1 90,50 Z"
                    fill="var(--primary)"
                    opacity="0.15"
                    style={{ transformOrigin: '50px 50px', transform: `rotate(${(activeStep - 1) * 90}deg)`, transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)' }}
                  />
                  <text x="50" y="55" textAnchor="middle" fill="var(--text-bright)" fontWeight="700" fontSize="14">
                    {activeStep * 25}%
                  </text>
                </svg>
                <h4>Operational Readiness</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding service-cases-section">
        <div className="section-header">
          <span className="badge cyan">Impact</span>
          <h2>Proven Corporate Case Studies</h2>
          <p>Examine active operational transformations and metrics engineered by our teams.</p>
        </div>

        {/* Filters */}
        <div className="case-filters">
          <button className={`filter-btn ${selectedCaseFilter === 'all' ? 'active' : ''}`} onClick={() => setSelectedCaseFilter('all')}>All Case Studies</button>
          <button className={`filter-btn ${selectedCaseFilter === 'healthcare' ? 'active' : ''}`} onClick={() => setSelectedCaseFilter('healthcare')}>Healthcare</button>
          <button className={`filter-btn ${selectedCaseFilter === 'workforce' ? 'active' : ''}`} onClick={() => setSelectedCaseFilter('workforce')}>Workforce</button>
          <button className={`filter-btn ${selectedCaseFilter === 'commerce' ? 'active' : ''}`} onClick={() => setSelectedCaseFilter('commerce')}>Commerce</button>
        </div>

        {/* Case Cards Grid */}
        <div className="grid-container grid-3 animate-fade-in" key={selectedCaseFilter}>
          {filteredCases.map((cs, idx) => (
            <div key={idx} className="glass-panel case-study-card">
              <span className="case-client">{cs.client}</span>
              <h3>{cs.title}</h3>
              <p>{cs.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Scheduler */}
      <section className="section-padding scheduler-section">
        <div className="grid-container grid-2">
          <div className="scheduler-intro">
            <span className="badge orange">Live Booking</span>
            <h2>Schedule a Direct Modernization Audit</h2>
            <p>
              Book an initial 45-minute roadmap consultation with a senior systems architect. We will evaluate database limitations, legacy integrations, and draft actionable implementation schedules.
            </p>
            <p className="sub-note">✓ Completely Free Consultation. Zero Commitment Required.</p>
          </div>

          <div className="scheduler-panel glass-panel glowing-orange">
            {bookingConfirmed ? (
              <div className="booking-success-anim text-center animate-fade-in">
                <span className="success-badge">✓ Slot Booked Successfully</span>
                <h3>Consultation Confirmed!</h3>
                <p>We've dispatched calendar links and preparatory materials to your email.</p>
              </div>
            ) : (
              <form onSubmit={handleBookSlot} className="scheduler-form">
                <h3>Select Consultation Slot</h3>
                
                <div className="form-group">
                  <label>Select Audit Date</label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="date-input"
                  />
                </div>

                <div className="form-group">
                  <label>Select Time Slot</label>
                  <div className="slots-grid">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        className={`slot-option-btn ${selectedSlot === slot.id ? 'active' : ''}`}
                        onClick={() => setSelectedSlot(slot.id)}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!selectedDate || !selectedSlot}
                  className="btn-primary w-100"
                  style={{ marginTop: '16px' }}
                >
                  Book Modernization Audit Slot
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .services-header {
          min-height: 65vh;
          text-align: center;
          padding: 0 10%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          background: radial-gradient(circle at 50% 30%, rgba(var(--accent-rgb), 0.05) 0%, transparent 60%);
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

        /* Services Grid */
        .service-detail-card {
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .srv-num {
          font-family: var(--font-header);
          font-weight: 800;
          font-size: 1.6rem;
          color: var(--primary);
          text-shadow: 0 0 6px var(--primary);
        }

        .service-detail-card h3 {
          font-size: 1.3rem;
          color: var(--text-bright);
        }

        .service-detail-card p {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--text-normal);
          margin-bottom: 0;
        }

        /* Stepper section styling */
        .stepper-box {
          max-width: 900px;
          margin: 40px auto 0 auto;
          padding: 50px;
        }

        .stepper-header {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 20px;
          margin-bottom: 30px;
        }

        .step-btn {
          background: none;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          opacity: 0.4;
          transition: var(--transition-smooth);
        }

        .step-btn.active {
          opacity: 1;
        }

        .step-btn.completed {
          opacity: 0.7;
        }

        .step-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          color: var(--text-normal);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .step-btn.active .step-circle {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--bg-deep);
          box-shadow: var(--shadow-neon-cyan);
        }

        .step-btn.completed .step-circle {
          background: rgba(0, 240, 255, 0.1);
          border-color: var(--primary);
          color: var(--primary);
        }

        .step-title {
          font-family: var(--font-header);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--text-bright);
        }

        .stepper-body {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
        }

        .stepper-left h3 {
          font-size: 1.6rem;
          color: var(--primary);
          margin-bottom: 16px;
        }

        .stepper-left p {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-normal);
          margin-bottom: 30px;
        }

        .stepper-navigation-btns {
          display: flex;
          gap: 12px;
        }

        .visual-indicator-box {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .visual-indicator-box h4 {
          font-size: 0.95rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Case Studies */
        .case-filters {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
        }

        .filter-btn {
          padding: 8px 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          color: var(--text-normal);
          font-family: var(--font-header);
          font-weight: 500;
          border-radius: 50px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .filter-btn:hover, .filter-btn.active {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(0, 240, 255, 0.05);
        }

        .case-study-card {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .case-client {
          font-family: var(--font-header);
          font-weight: 600;
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--accent);
          letter-spacing: 0.5px;
        }

        .case-study-card h3 {
          font-size: 1.25rem;
          color: var(--text-bright);
        }

        .case-study-card p {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--text-normal);
          margin-bottom: 0;
        }

        /* Scheduler form */
        .scheduler-intro h2 {
          font-size: 2.3rem;
          margin: 10px 0 20px 0;
        }

        .scheduler-intro p {
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .sub-note {
          font-weight: 600;
          color: var(--primary);
        }

        .scheduler-panel {
          padding: 40px;
          background: rgba(3, 7, 18, 0.5);
        }

        .scheduler-form h3 {
          font-size: 1.4rem;
          margin-bottom: 24px;
          text-align: center;
        }

        .date-input {
          padding: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-bright);
          width: 100%;
        }

        .slots-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .slot-option-btn {
          padding: 12px;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-normal);
          font-family: var(--font-header);
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
          text-align: center;
        }

        .slot-option-btn:hover, .slot-option-btn.active {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(255, 107, 0, 0.05);
        }

        .booking-success-anim {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 250px;
        }

        .booking-success-anim h3 {
          font-size: 1.6rem;
          margin: 16px 0 10px 0;
        }

        @media (max-width: 992px) {
          .stepper-body {
            grid-template-columns: 1fr;
          }
          .stepper-right {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .services-header h1 {
            font-size: 2.3rem;
          }
          .stepper-header {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .case-filters {
            flex-direction: column;
            gap: 10px;
          }
          .filter-btn {
            width: 100%;
          }
          .scheduler-panel {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
