import React, { useState } from 'react';

const Consultation = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    businessType: 'sme',
    companySize: '50-250',
    hurdles: [],
    services: [],
    date: '',
    slot: '',
    name: '',
    company: '',
    email: '',
    phone: ''
  });
  
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const businessTypes = [
    { id: 'sme', label: 'SME' },
    { id: 'enterprise', label: 'Large Enterprise' },
    { id: 'startup', label: 'Fast Growth Startup' },
    { id: 'healthcare', label: 'Healthcare Practitioner' },
    { id: 'workforce', label: 'Workforce / Staffing Agency' },
    { id: 'retail', label: 'Retailer / Commerce Brand' }
  ];

  const hurdlesList = [
    { id: 'manual', label: 'Exhaustive manual paperwork & workflows' },
    { id: 'efficiency', label: 'Low operational output & scheduling gaps' },
    { id: 'legacy', label: 'Archaic systems & hard-to-maintain codebase' },
    { id: 'ai', label: 'Lack of practical AI integration / research costs' },
    { id: 'scaling', label: 'Server scaling roadblocks & pipeline failures' }
  ];

  const servicesList = [
    { id: 'consulting', label: 'AI Strategy Consulting' },
    { id: 'saas', label: 'Custom SaaS Development' },
    { id: 'automation', label: 'Workflow Automations' },
    { id: 'devops', label: 'Cloud & DevOps Scaling' },
    { id: 'digital', label: 'Complete Digital Transformation' }
  ];

  const availableSlots = [
    { id: 'slot-1', time: '10:00 AM - 10:45 AM IST' },
    { id: 'slot-2', time: '11:30 AM - 12:15 PM IST' },
    { id: 'slot-3', time: '02:00 PM - 02:45 PM IST' },
    { id: 'slot-4', time: '03:30 PM - 04:15 PM IST' }
  ];

  const handleCheckboxChange = (field, itemId) => {
    setFormValues(prev => {
      const currentItems = [...prev[field]];
      const index = currentItems.indexOf(itemId);
      if (index > -1) {
        currentItems.splice(index, 1);
      } else {
        currentItems.push(itemId);
      }
      return { ...prev, [field]: currentItems };
    });
  };

  const handleNextStep = () => {
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setStep(1);
      setFormValues({
        businessType: 'sme',
        companySize: '50-250',
        hurdles: [],
        services: [],
        date: '',
        slot: '',
        name: '',
        company: '',
        email: '',
        phone: ''
      });
    }, 4000);
  };

  return (
    <div className="consultation-page animate-fade-in">
      {/* Page Header */}
      <section className="section-padding consultation-header flex-center">
        <div className="header-text">
          <span className="badge orange">Consultation Booking</span>
          <h1>Formulate Your AI & SaaS <br /><span className="text-gradient-orange">Strategic Roadmap</span></h1>
          <p>
            Engage with our digital modernization board. Complete our B2B diagnostic questionnaire to schedule your free audit session and outline active development variables.
          </p>
        </div>
      </section>

      {/* Booking Wizard Section */}
      <section className="section-padding wizard-section">
        <div className="wizard-container glass-panel glowing-orange">
          {bookingConfirmed ? (
            <div className="booking-complete-screen text-center animate-fade-in">
              <div className="complete-icon flex-center">✓</div>
              <h2>Enterprise Consultation Confirmed!</h2>
              <p className="success-txt">
                We've locked your slot on <strong>{formValues.date}</strong> at <strong>{availableSlots.find(s => s.id === formValues.slot)?.time}</strong>.
              </p>
              <p className="materials-txt">
                Our technology team is auditing your hurdles. An invitation containing prep guidelines and diagnostic worksheets has been transmitted to <strong>{formValues.email}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="wizard-form">
              {/* Stepper Progress Bar */}
              <div className="wizard-progress-bar">
                <div className={`bar-step ${step >= 1 ? 'active' : ''}`}><span className="dot" /><span>1. Diagnostic</span></div>
                <div className={`bar-step ${step >= 2 ? 'active' : ''}`}><span className="dot" /><span>2. Core Needs</span></div>
                <div className={`bar-step ${step >= 3 ? 'active' : ''}`}><span className="dot" /><span>3. Scheduler</span></div>
                <div className={`bar-step ${step >= 4 ? 'active' : ''}`}><span className="dot" /><span>4. Account Info</span></div>
              </div>

              <div className="step-content-box animate-fade-in" key={step}>
                {/* Step 1: Corporate Classification */}
                {step === 1 && (
                  <div className="wizard-step-panel">
                    <h3>Corporate Classification</h3>
                    <p className="step-sub">Select your industry focus and employee count.</p>
                    
                    <div className="form-group">
                      <label>Business Category *</label>
                      <div className="select-grid">
                        {businessTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            className={`select-card-btn ${formValues.businessType === type.id ? 'active' : ''}`}
                            onClick={() => setFormValues({ ...formValues, businessType: type.id })}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="form-group" style={{ marginTop: '24px' }}>
                      <label>Employee Pool Size *</label>
                      <div className="radio-selection-group">
                        {['< 50 Employees', '50-250 Employees', '250-1000 Employees', '1000+ Employees'].map((size) => (
                          <button
                            key={size}
                            type="button"
                            className={`radio-option-btn ${formValues.companySize === size ? 'active' : ''}`}
                            onClick={() => setFormValues({ ...formValues, companySize: size })}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: System Obstacles & Target Needs */}
                {step === 2 && (
                  <div className="wizard-step-panel">
                    <h3>System Bottlenecks & Required Services</h3>
                    <p className="step-sub">Help us understand which components are impeding your operations.</p>
                    
                    <div className="form-group">
                      <label>Core Hurdle Elements (Select All That Apply) *</label>
                      <div className="checkbox-selection-grid">
                        {hurdlesList.map((h) => (
                          <button
                            key={h.id}
                            type="button"
                            className={`checkbox-option-btn ${formValues.hurdles.includes(h.id) ? 'active' : ''}`}
                            onClick={() => handleCheckboxChange('hurdles', h.id)}
                          >
                            <span className="check-box-indicator"></span>
                            {h.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="form-group" style={{ marginTop: '24px' }}>
                      <label>Required Transform Services *</label>
                      <div className="checkbox-selection-grid">
                        {servicesList.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            className={`checkbox-option-btn ${formValues.services.includes(s.id) ? 'active' : ''}`}
                            onClick={() => handleCheckboxChange('services', s.id)}
                          >
                            <span className="check-box-indicator"></span>
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Date & Slot Selector */}
                {step === 3 && (
                  <div className="wizard-step-panel">
                    <h3>Select Appointment Slot</h3>
                    <p className="step-sub">Choose a convenient date and time to review your system parameters.</p>
                    
                    <div className="form-group">
                      <label>Select Audit Date *</label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formValues.date}
                        onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
                        className="date-selector-wizard"
                      />
                    </div>

                    <div className="form-group" style={{ marginTop: '24px' }}>
                      <label>Available Hours (IST) *</label>
                      <div className="slots-selection-list">
                        {availableSlots.map((slot) => (
                          <button
                            key={slot.id}
                            type="button"
                            className={`slot-wizard-btn ${formValues.slot === slot.id ? 'active' : ''}`}
                            onClick={() => setFormValues({ ...formValues, slot: slot.id })}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Account Coordinates */}
                {step === 4 && (
                  <div className="wizard-step-panel">
                    <h3>Intake Coordinates</h3>
                    <p className="step-sub">Provide target contact channels to deliver your preparation materials.</p>
                    
                    <div className="grid-container grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
                      <div className="form-group">
                        <label>Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formValues.name}
                          onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label>Company / Organization *</label>
                        <input
                          type="text"
                          required
                          value={formValues.company}
                          onChange={(e) => setFormValues({ ...formValues, company: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid-container grid-2" style={{ gap: '16px' }}>
                      <div className="form-group">
                        <label>Work Email *</label>
                        <input
                          type="email"
                          required
                          value={formValues.email}
                          onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label>Direct Phone Number</label>
                        <input
                          type="tel"
                          value={formValues.phone}
                          onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation controls */}
              <div className="wizard-footer-btns">
                {step > 1 && (
                  <button type="button" onClick={handlePrevStep} className="btn-secondary">
                    ← Previous Phase
                  </button>
                )}
                {step < 4 ? (
                  <button
                    type="button"
                    disabled={
                      (step === 1 && (!formValues.businessType || !formValues.companySize)) ||
                      (step === 2 && (formValues.hurdles.length === 0 || formValues.services.length === 0)) ||
                      (step === 3 && (!formValues.date || !formValues.slot))
                    }
                    onClick={handleNextStep}
                    className="btn-primary"
                    style={{ marginLeft: 'auto' }}
                  >
                    Proceed Next →
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!formValues.name || !formValues.company || !formValues.email}
                    className="btn-accent"
                    style={{ marginLeft: 'auto' }}
                  >
                    Lock Modernization Audit
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </section>

      <style>{`
        .consultation-header {
          min-height: 65vh;
          text-align: center;
          padding: 0 10%;
          border-bottom: 1px solid var(--border-glass);
          background: radial-gradient(circle at 50% 30%, rgba(var(--accent-rgb), 0.08) 0%, transparent 60%);
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
 
        /* Wizard */
        .wizard-container {
          max-width: 850px;
          margin: 0 auto;
          padding: 50px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-premium-hover);
        }
 
        .wizard-progress-bar {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 20px;
          margin-bottom: 40px;
        }
 
        .bar-step {
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 0.4;
          transition: var(--transition-smooth);
        }
 
        .bar-step.active {
          opacity: 1;
        }
 
        .bar-step .dot {
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 4px rgba(var(--accent-rgb), 0.4);
        }
 
        .bar-step span {
          font-family: var(--font-badge);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--text-bright);
        }
 
        .wizard-step-panel h3 {
          font-size: 1.6rem;
          color: var(--text-bright);
          margin-bottom: 6px;
        }
 
        .step-sub {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 30px;
        }
 
        /* Diagnostic Selector grids */
        .select-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
 
        .select-card-btn {
          padding: 18px 12px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          color: var(--text-normal);
          font-family: var(--font-badge);
          font-weight: 500;
          font-size: 0.9rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-fast);
          box-shadow: var(--shadow-premium);
        }
 
        .select-card-btn:hover, .select-card-btn.active {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(221, 125, 98, 0.05);
        }
 
        .radio-selection-group {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
 
        .radio-option-btn {
          padding: 12px 10px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-normal);
          font-family: var(--font-badge);
          font-weight: 500;
          font-size: 0.82rem;
          cursor: pointer;
          transition: var(--transition-fast);
          box-shadow: var(--shadow-premium);
        }
 
        .radio-option-btn:hover, .radio-option-btn.active {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(221, 125, 98, 0.05);
        }
 
        /* Checkbox Option btn */
        .checkbox-selection-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
 
        .checkbox-option-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 20px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          color: var(--text-normal);
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.95rem;
          text-align: left;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: var(--transition-fast);
          box-shadow: var(--shadow-premium);
        }
 
        .checkbox-option-btn:hover, .checkbox-option-btn.active {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(221, 125, 98, 0.04);
        }
 
        .check-box-indicator {
          width: 14px;
          height: 14px;
          border: 1px solid var(--text-muted);
          border-radius: 3px;
          display: inline-block;
          position: relative;
          transition: var(--transition-fast);
          background: #ffffff;
        }
 
        .checkbox-option-btn.active .check-box-indicator {
          border-color: var(--accent);
          background: var(--accent);
        }
 
        .checkbox-option-btn.active .check-box-indicator::after {
          content: '✓';
          position: absolute;
          top: -2px;
          left: 2px;
          font-size: 0.68rem;
          color: #ffffff;
          font-weight: bold;
        }
 
        /* Date Selector */
        .date-selector-wizard {
          padding: 14px;
          background: var(--bg-deep);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-bright);
          font-family: var(--font-body);
          width: 100%;
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .date-selector-wizard:focus {
          outline: none;
          border-color: var(--accent);
          background: #ffffff;
          box-shadow: 0 0 0 2px rgba(221, 125, 98, 0.1);
        }
 
        .slots-selection-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
 
        .slot-wizard-btn {
          padding: 14px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-normal);
          font-family: var(--font-badge);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
          text-align: center;
          box-shadow: var(--shadow-premium);
        }
 
        .slot-wizard-btn:hover, .slot-wizard-btn.active {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(221, 125, 98, 0.05);
        }
 
        .wizard-footer-btns {
          display: flex;
          margin-top: 40px;
          border-top: 1px solid var(--border-glass);
          padding-top: 24px;
        }
 
        /* Booking complete */
        .booking-complete-screen {
          padding: 40px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
 
        .complete-icon {
          width: 64px;
          height: 64px;
          background: rgba(221, 125, 98, 0.15);
          border: 2.5px solid var(--accent);
          color: var(--accent);
          font-size: 2rem;
          font-weight: bold;
          border-radius: 50%;
          margin-bottom: 24px;
        }
 
        .booking-complete-screen h2 {
          font-size: 2rem;
          color: var(--text-bright);
          margin-bottom: 16px;
        }
 
        .success-txt {
          font-size: 1.15rem;
          color: var(--accent);
          margin-bottom: 12px;
        }
 
        .materials-txt {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-normal);
          max-width: 480px;
        }

        /* Form elements for Step 4 */
        .wizard-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .wizard-form .form-group label {
          font-family: var(--font-badge);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-normal);
        }

        .wizard-form .form-group input {
          padding: 12px 14px;
          background: var(--bg-deep);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-bright);
          font-family: var(--font-body);
          font-size: 0.9rem;
          transition: var(--transition-fast);
          width: 100%;
        }

        .wizard-form .form-group input:focus {
          outline: none;
          border-color: var(--accent);
          background: #ffffff;
          box-shadow: 0 0 0 2px rgba(221, 125, 98, 0.1);
        }
 
        @media (max-width: 768px) {
          .consultation-header h1 {
            font-size: 2.3rem;
          }
          .wizard-container {
            padding: 30px 20px;
          }
          .wizard-progress-bar {
            flex-direction: column;
            gap: 14px;
          }
          .select-grid {
            grid-template-columns: 1fr;
          }
          .radio-selection-group {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Consultation;
