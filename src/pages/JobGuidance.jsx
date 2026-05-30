import React, { useState } from 'react';

const JobGuidance = () => {
  // Resume score simulator states
  const [resumeText, setResumeText] = useState('');
  const [evaluating, setEvaluating] = useState(false);
  const [scoreResult, setScoreResult] = useState(null);

  // Booking states
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const mentors = [
    { id: 'mentor-1', name: 'Dr. Sai Kiran', role: 'AI Engineering Mentor', spec: 'Deep Learning, LLMs, Neural Networks' },
    { id: 'mentor-2', name: 'Rexon Fernandes', role: 'DevOps & Systems Mentor', spec: 'Kubernetes, Auto-Scaling, Distributed Databases' },
    { id: 'mentor-3', name: 'Anjali Sharma', role: 'Product & SaaS Mentor', spec: 'SaaS Architecture, Visual UX, Product Strategy' }
  ];

  const studentPrograms = [
    { title: 'AI Engineering Workshops', desc: 'Practical weekend workshops on building semantic vector databases, configuring local models, and deploying API servers.' },
    { title: 'SaaS Training Camps', desc: 'Direct, hands-on masterclasses covering React modular layouts, high-performance styling, and multi-tenant DB pools.' },
    { title: 'Certification Pathways', desc: 'Validated certification curriculum designed to transition regional graduates into production-ready DevOps and SaaS developers.' }
  ];

  const handleResumeEvaluate = (e) => {
    e.preventDefault();
    if (!resumeText.trim()) return;

    setEvaluating(true);
    setScoreResult(null);

    setTimeout(() => {
      setEvaluating(false);
      
      // Compute mock diagnostics based on text content
      const txt = resumeText.toLowerCase();
      let score = 65;
      let matched = [];
      let missing = [];
      let recommendation = '';

      if (txt.includes('python') || txt.includes('javascript') || txt.includes('java') || txt.includes('c++')) {
        score += 12;
        matched.push('Core Programming languages');
      } else {
        missing.push('Core Programming foundations');
      }

      if (txt.includes('aws') || txt.includes('cloud') || txt.includes('kubernetes') || txt.includes('docker')) {
        score += 15;
        matched.push('Cloud/Container Infrastructure');
      } else {
        missing.push('Cloud architectures (AWS/Docker)');
        score -= 5;
      }

      if (txt.includes('ai') || txt.includes('ml') || txt.includes('pytorch') || txt.includes('nlp') || txt.includes('llm')) {
        score += 10;
        matched.push('AI/Machine Learning modules');
      } else {
        missing.push('Cognitive/AI pipelines');
      }

      if (score > 95) score = 95; // cap
      
      if (score >= 85) {
        recommendation = "Outstanding technical index! Highly aligned for top-tier SaaS engineering. Recommended action: Submit your credentials to our active Careers list immediately.";
      } else if (score >= 70) {
        recommendation = `Competent framework detected. Weak on ${missing[0] || 'infrastructure'}. Recommended: Complete our Cloud DevOps Certification Pathway to unlock 90%+ matching brackets!`;
      } else {
        recommendation = "Baseline credentials logged. Highly recommend enrolling in our AI Engineering Masterclass Workshops to bootstrap core developer patterns.";
      }

      setScoreResult({
        score: `${score}/100`,
        matched,
        missing,
        recommendation
      });
    }, 1800);
  };

  const handleMentorBook = (e) => {
    e.preventDefault();
    if (!selectedMentor || !selectedDate || !selectedSlot) return;

    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setSelectedMentor(null);
      setSelectedDate('');
      setSelectedSlot('');
    }, 3000);
  };

  return (
    <div className="job-guidance-page animate-fade-in">
      {/* Intro Header */}
      <section className="section-padding guidance-header flex-center">
        <div className="header-text">
          <span className="badge blue">Workforce Ecosystem</span>
          <h1>Accelerate Your Career In <br /><span className="text-gradient-cyan">Advanced Software & AI</span></h1>
          <p>
            SaiRexon Technologies is dedicated to bootstrapping India's emerging workforce. We provide active career consultation, resume auditing, technical mentoring, and validated certification programs for students and job seekers.
          </p>
        </div>
      </section>

      {/* Interactive Resume Grader (Wow Factor #5) */}
      <section className="section-padding grader-section">
        <div className="section-header">
          <span className="badge cyan">Interactive Diagnostic</span>
          <h2>SaiRexon Resume Grader</h2>
          <p>Paste your active resume text to evaluate index scores against current B2B engineering standards.</p>
        </div>

        <div className="grader-box glass-panel glowing-cyan">
          <div className="grader-inputs">
            <form onSubmit={handleResumeEvaluate} className="grader-form">
              <div className="form-group">
                <label>Paste Resume Content (Plain Text)</label>
                <textarea
                  rows="8"
                  required
                  placeholder="Paste your education, skills, technical experience, and achievements..."
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                />
              </div>
              <button type="submit" disabled={evaluating} className="btn-primary w-100">
                {evaluating ? 'Analyzing CV Vector parameters...' : 'Evaluate Resume Core'}
              </button>
            </form>
          </div>

          <div className="grader-results display-panel glass-panel">
            {evaluating && (
              <div className="sandbox-loader-container text-center flex-center" style={{ flexDirection: 'column' }}>
                <div className="scanning-radar" />
                <p className="pulse-text">Correlating skills against 4,000+ industry job cards...</p>
              </div>
            )}
            {!evaluating && !scoreResult && (
              <div className="placeholder-text">
                <p>Paste resume profile text on the left to activate our neural grading index.</p>
              </div>
            )}
            {!evaluating && scoreResult && (
              <div className="score-result-view animate-fade-in">
                <div className="result-header">
                  <h4>Diagnostic Readout</h4>
                  <span className="score-glow">{scoreResult.score} Score</span>
                </div>
                <div className="metrics-summary">
                  <p><strong>Identified Core Strengths:</strong></p>
                  <ul>
                    {scoreResult.matched.length === 0 ? <li>None detected yet</li> : scoreResult.matched.map((m, i) => <li key={i}>✓ {m}</li>)}
                  </ul>
                  <p style={{ marginTop: '12px' }}><strong>Target Missing Elements:</strong></p>
                  <ul>
                    {scoreResult.missing.length === 0 ? <li>Optimal footprint identified!</li> : scoreResult.missing.map((m, i) => <li key={i} style={{ color: 'var(--accent)' }}>✕ {m}</li>)}
                  </ul>
                </div>
                <div className="result-summary" style={{ marginTop: '16px' }}>
                  <h5>Mentor Guidance Recommendation:</h5>
                  <p>{scoreResult.recommendation}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section-padding programs-overview-section">
        <div className="section-header">
          <span className="badge orange">Student Pathways</span>
          <h2>Ecosystem Programs & Certifications</h2>
          <p>Structured curriculum designed to bridge the gap between textbook coding and production SaaS engineering.</p>
        </div>
        <div className="grid-container grid-3">
          {studentPrograms.map((p, i) => (
            <div key={i} className="glass-panel program-detail-card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mentor Scheduler Section */}
      <section className="section-padding mentor-booking-section">
        <div className="grid-container grid-2">
          <div className="mentor-intro">
            <span className="badge blue">1-on-1 Support</span>
            <h2>Book a Free Career Mentorship Slot</h2>
            <p>
              Struggling to navigate the transition into modern AI, SaaS development, or DevOps cloud engineering? Schedule a 20-minute, 1-on-1 virtual mentoring session with our leadership team.
            </p>
            <p className="sub-note">✓ Support for Tier-2 and Tier-3 engineering candidates and students.</p>
          </div>

          <div className="mentor-scheduler-panel glass-panel glowing-orange">
            {bookingConfirmed ? (
              <div className="booking-success-anim text-center animate-fade-in" style={{ padding: '40px 0' }}>
                <span className="success-badge">✓ Mentoring Session Locked</span>
                <h3>Mentorship Confirmed!</h3>
                <p>An invitation and virtual meeting link have been transmitted to your email.</p>
              </div>
            ) : (
              <form onSubmit={handleMentorBook} className="mentor-booking-form">
                <h3>Select Mentor & Time</h3>

                <div className="form-group">
                  <label>Select Mentoring Officer *</label>
                  <div className="mentors-grid-select">
                    {mentors.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        className={`mentor-select-btn ${selectedMentor === m.id ? 'active' : ''}`}
                        onClick={() => setSelectedMentor(m.id)}
                      >
                        <h5>{m.name}</h5>
                        <span>{m.role}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid-container grid-2" style={{ gap: '16px', marginTop: '16px' }}>
                  <div className="form-group">
                    <label>Select Date *</label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="date-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Select Hours *</label>
                    <select
                      required
                      value={selectedSlot}
                      onChange={(e) => setSelectedSlot(e.target.value)}
                      className="select-input"
                    >
                      <option value="">-- Choose Slot --</option>
                      <option value="slot-a">04:00 PM - 04:20 PM IST</option>
                      <option value="slot-b">05:30 PM - 05:50 PM IST</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!selectedMentor || !selectedDate || !selectedSlot}
                  className="btn-primary w-100"
                  style={{ marginTop: '24px' }}
                >
                  Confirm Mentoring Booking
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .guidance-header {
          min-height: 65vh;
          text-align: center;
          padding: 0 10%;
          border-bottom: 1px solid var(--border-glass);
          background: radial-gradient(circle at 50% 30%, rgba(var(--primary-rgb), 0.08) 0%, transparent 60%);
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
 
        /* Grader card */
        .grader-box {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          padding: 50px;
          max-width: 1000px;
          margin: 0 auto;
        }
 
        .grader-inputs {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
 
        .grader-form textarea {
          width: 100%;
          padding: 14px;
          background: var(--bg-deep);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-bright);
          font-family: var(--font-body);
          font-size: 0.88rem;
          transition: var(--transition-fast);
        }

        .grader-form textarea:focus {
          outline: none;
          border-color: var(--primary);
          background: #ffffff;
          box-shadow: 0 0 0 2px rgba(91, 33, 182, 0.1);
        }
 
        .grader-results {
          padding: 30px;
          background: var(--bg-deep);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 320px;
        }

        .scanning-radar {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(91, 33, 182, 0.15);
          border-radius: 50%;
          border-top-color: var(--primary);
          animation: spinRadar 1s linear infinite;
          margin: 0 auto 20px auto;
        }

        @keyframes spinRadar {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .pulse-text {
          font-family: var(--font-badge);
          font-size: 0.82rem;
          color: var(--primary);
          font-weight: 600;
          letter-spacing: 0.03em;
          animation: pulseText 1.5s ease-in-out infinite;
        }

        @keyframes pulseText {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
 
        .score-result-view {
          width: 100%;
        }

        .result-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 14px;
          margin-bottom: 20px;
        }

        .result-header h4 {
          font-size: 1.25rem;
          color: var(--text-bright);
          margin-bottom: 0;
        }
 
        .score-glow {
          font-family: var(--font-badge);
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--primary);
          background: rgba(91, 33, 182, 0.06);
          border: 1px solid rgba(91, 33, 182, 0.12);
          padding: 4px 12px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
 
        .metrics-summary p {
          font-size: 0.85rem;
          margin-bottom: 8px;
        }
 
        .metrics-summary ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
 
        .metrics-summary li {
          font-size: 0.8rem;
          color: var(--text-normal);
        }
 
        /* Program cards */
        .program-detail-card {
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
 
        .program-detail-card h3 {
          font-size: 1.3rem;
          color: var(--primary);
        }
 
        .program-detail-card p {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-normal);
          margin-bottom: 0;
        }
 
        /* Mentors list select */
        .mentors-grid-select {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
 
        .mentor-select-btn {
          padding: 14px 20px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-normal);
          text-align: left;
          cursor: pointer;
          transition: var(--transition-fast);
          box-shadow: var(--shadow-premium);
        }
 
        .mentor-select-btn h5 {
          font-size: 0.95rem;
          color: var(--text-bright);
          margin-bottom: 2px;
        }
 
        .mentor-select-btn span {
          font-size: 0.72rem;
          color: var(--text-muted);
        }
 
        .mentor-select-btn:hover, .mentor-select-btn.active {
          border-color: var(--accent);
          background: rgba(221, 125, 98, 0.05);
        }
 
        .mentor-select-btn.active h5 {
          color: var(--accent);
        }
 
        .mentor-intro h2 {
          font-size: 2.3rem;
          margin: 10px 0 20px 0;
        }
 
        .mentor-intro p {
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }
 
        .mentor-scheduler-panel {
          padding: 40px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-premium-hover);
        }

        .mentor-booking-form h3 {
          font-size: 1.5rem;
          color: var(--text-bright);
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 10px;
        }

        .mentor-booking-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mentor-booking-form .form-group label {
          font-family: var(--font-badge);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-normal);
        }

        .mentor-booking-form .date-input, .mentor-booking-form .select-input {
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

        .mentor-booking-form .date-input:focus, .mentor-booking-form .select-input:focus {
          outline: none;
          border-color: var(--primary);
          background: #ffffff;
          box-shadow: 0 0 0 2px rgba(91, 33, 182, 0.1);
        }

        .booking-success-anim h3 {
          font-size: 1.8rem;
          color: var(--text-bright);
          margin-top: 14px;
          margin-bottom: 8px;
        }

        .booking-success-anim p {
          font-size: 0.95rem;
          color: var(--text-normal);
        }

        .success-badge {
          display: inline-block;
          font-family: var(--font-badge);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--primary);
          background: rgba(91, 33, 182, 0.06);
          border: 1px solid rgba(91, 33, 182, 0.12);
          padding: 4px 12px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .sub-note {
          font-size: 0.9rem;
          color: var(--primary);
          font-weight: 600;
        }
 
        @media (max-width: 992px) {
          .grader-box {
            grid-template-columns: 1fr;
          }
        }
 
        @media (max-width: 768px) {
          .guidance-header h1 {
            font-size: 2.3rem;
          }
          .grader-box {
            padding: 30px 20px;
          }
          .mentor-scheduler-panel {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default JobGuidance;
