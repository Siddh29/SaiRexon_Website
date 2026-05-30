import React, { useState } from 'react';

const Careers = () => {
  const [activeDept, setActiveDept] = useState('all');
  const [selectedRole, setSelectedRole] = useState(null);
  
  // File upload simulation states
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [resumeName, setResumeName] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  
  const [careerForm, setCareerForm] = useState({
    name: '',
    email: '',
    linkedin: '',
    portfolio: '',
    cover: ''
  });

  const departments = [
    { id: 'all', label: 'All Openings' },
    { id: 'engineering', label: 'AI Engineering' },
    { id: 'saas', label: 'SaaS Development' },
    { id: 'devops', label: 'Cloud & DevOps' },
    { id: 'design', label: 'UI/UX Design' }
  ];

  const jobs = [
    { id: 'sr-ai', dept: 'engineering', title: 'Senior AI Systems Engineer', location: 'Hyderabad HQ (Hybrid)', desc: 'Research, design, and configure tailored multi-agent LLM systems and custom vector pipelines for enterprise clients.', reqs: ['4+ years in Python, PyTorch, LangChain', 'Familiarity with Pinecone, Qdrant vector databases', 'Prior SaaS integration experience'] },
    { id: 'saas-fe', dept: 'saas', title: 'Lead Frontend SaaS Developer', location: 'Bengaluru (On-site)', desc: 'Architect and scale high-fidelity user dashboards using Vite, React, and advanced modular CSS for vertical SaaS applications.', reqs: ['5+ years React, state managers, clean UI layout creation', 'Exceptional attention to details, micro-interactions, responsive frameworks', 'Familiarity with REST/gRPC interfaces'] },
    { id: 'devops-arch', dept: 'devops', title: 'Cloud Infrastructure & DevOps Lead', location: 'Mumbai / Remote', desc: 'Own auto-scaling clusters, manage Kubernetes orchestrations, deploy CI/CD workflows, and audit multi-tenant database pools.', reqs: ['4+ years AWS, Terraform, Docker, Kubernetes', 'Experience with PostgreSQL optimization & Redis clustering', 'Impeccable zero-downtime hot-swap deployments'] },
    { id: 'uiux-designer', dept: 'design', title: 'UI/UX Interactive Designer', location: 'Hyderabad HQ (On-site)', desc: 'Craft modern layouts, design wireframes, compile visual guidelines, and establish beautiful, animated dark-themed cyber platforms.', reqs: ['3+ years Figma experience, interactive animations design', 'Exceptional vector layout skills, micro-interactions expertise', 'Basic HTML/CSS understanding is a strong plus'] }
  ];

  const cultureBenefits = [
    { title: 'Advanced Technology Stack', desc: 'Skip standard mundane databases. Work directly with advanced machine learning models, vector indexers, and Kubernetes orchestrations.' },
    { title: 'Autonomy & Ownership', desc: 'We operate inside compact, highly coordinated engineering squads. Own features completely from baseline draft to live client deployment.' },
    { title: 'Startup Acceleration', desc: 'Expand your capabilities inside a fast-scaling tech brand, gaining rapid exposure to real enterprise transformations and funding rounds.' },
    { title: 'Competitive Ecosystem', desc: 'Highly attractive compensation packages, comprehensive medical benefits, and equity options for initial team members.' }
  ];

  const filteredJobs = activeDept === 'all'
    ? jobs
    : jobs.filter(j => j.dept === activeDept);

  const handleFileUploadSim = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setResumeName(file.name);
    setUploading(true);
    setUploadProgress(0);

    // Simulate progressive load
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          return 100;
        }
        return prev + 25;
      });
    }, 300);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!resumeName || uploadProgress < 100) return;

    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setFormSuccess(true);
      setCareerForm({ name: '', email: '', linkedin: '', portfolio: '', cover: '' });
      setResumeName('');
      setUploadProgress(0);
      
      setTimeout(() => {
        setFormSuccess(false);
        setSelectedRole(null);
      }, 3000);
    }, 1200);
  };

  return (
    <div className="careers-page animate-fade-in">
      {/* Intro Header */}
      <section className="section-padding careers-header flex-center">
        <div className="header-text">
          <span className="badge cyan">Talent Hub</span>
          <h1>Build the Digital Future <br /><span className="text-gradient-cyan">With SaiRexon Technologies</span></h1>
          <p>
            Join a fast-scaling enterprise technology team. We build cybernetic AI frameworks, vertical SaaS portals, and secure cloud engines. Scale operations and accelerate your professional capabilities.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding culture-section">
        <div className="section-header">
          <span className="badge orange">Culture & Scale</span>
          <h2>A Modern Engineering Environment</h2>
          <p>We combine advanced engineering tasks with an agile startup mindset designed to support learning.</p>
        </div>
        <div className="grid-container grid-4">
          {cultureBenefits.map((item, idx) => (
            <div key={idx} className="glass-panel culture-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Job Listings */}
      <section className="section-padding openings-section">
        <div className="section-header">
          <span className="badge blue">Careers</span>
          <h2>Active Career Openings</h2>
          <p>Select your specialization department to filter available positions.</p>
        </div>

        {/* Filters */}
        <div className="openings-filter-bar">
          {departments.map((dept) => (
            <button
              key={dept.id}
              className={`filter-btn ${activeDept === dept.id ? 'active' : ''}`}
              onClick={() => setActiveDept(dept.id)}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="jobs-list-container animate-fade-in" key={activeDept}>
          {filteredJobs.length === 0 ? (
            <div className="placeholder-text text-center">
              <p>No open positions currently available for this specific department. Check back soon!</p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div key={job.id} className="job-row glass-panel">
                <div className="job-row-main">
                  <div>
                    <span className="job-loc">{job.location}</span>
                    <h3>{job.title}</h3>
                    <p className="job-desc">{job.desc}</p>
                  </div>
                  <button onClick={() => setSelectedRole(job)} className="btn-secondary">
                    Review & Apply
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Application Side-Drawer Panel Overlay */}
      {selectedRole && (
        <div className="modal-backdrop flex-center animate-fade-in">
          <div className="drawer-panel glass-panel glowing-cyan animate-fade-in">
            <button className="modal-close-btn" onClick={() => setSelectedRole(null)}>✕</button>

            {formSuccess ? (
              <div className="success-anim-container text-center flex-center animate-fade-in" style={{ flexDirection: 'column', height: '100%' }}>
                <span className="success-icon flex-center">✓</span>
                <h3>Application Received!</h3>
                <p>We've successfully logged your resume and profile details. Our hiring team will contact you soon.</p>
              </div>
            ) : (
              <div className="drawer-inner-scroll">
                <h3>Apply for Position</h3>
                <span className="role-highlight">{selectedRole.title}</span>
                <p className="role-sub">{selectedRole.location}</p>

                {/* Job Specs */}
                <div className="job-drawer-specs">
                  <h5>Job Summary:</h5>
                  <p>{selectedRole.desc}</p>
                  <h5>Requirements:</h5>
                  <ul>
                    {selectedRole.reqs.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                {/* Form fields */}
                <form onSubmit={handleApplySubmit} className="careers-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={careerForm.name}
                      onChange={(e) => setCareerForm({ ...careerForm, name: e.target.value })}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Work Email *</label>
                    <input
                      type="email"
                      required
                      value={careerForm.email}
                      onChange={(e) => setCareerForm({ ...careerForm, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>LinkedIn Profile Link *</label>
                    <input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/username"
                      value={careerForm.linkedin}
                      onChange={(e) => setCareerForm({ ...careerForm, linkedin: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Portfolio / Git Link</label>
                    <input
                      type="url"
                      placeholder="https://github.com/username"
                      value={careerForm.portfolio}
                      onChange={(e) => setCareerForm({ ...careerForm, portfolio: e.target.value })}
                    />
                  </div>

                  {/* Resume Upload Simulation (Wow Factor #4) */}
                  <div className="form-group">
                    <label>Upload Resume (PDF only) *</label>
                    <div className="upload-btn-shell">
                      <input
                        type="file"
                        accept=".pdf"
                        required
                        onChange={handleFileUploadSim}
                        className="file-input"
                        id="resume-file-btn"
                      />
                      <label htmlFor="resume-file-btn" className="btn-secondary w-100">
                        {resumeName ? `Change File: ${resumeName}` : 'Select Resume PDF File'}
                      </label>
                    </div>

                    {uploading && (
                      <div className="progress-bar-shell">
                        <div className="bar-track"><div className="bar-fill" style={{ width: `${uploadProgress}%` }} /></div>
                        <span className="percent-indicator">{uploadProgress}% Uploading...</span>
                      </div>
                    )}
                    {!uploading && resumeName && (
                      <span className="upload-ready">✓ Resume Uploaded & Parsed: {resumeName}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Brief Cover Note</label>
                    <textarea
                      rows="3"
                      placeholder="Tell us what excites you about building enterprise modernization engines..."
                      value={careerForm.cover}
                      onChange={(e) => setCareerForm({ ...careerForm, cover: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!resumeName || uploading || uploadProgress < 100}
                    className="btn-primary w-100"
                    style={{ marginTop: '14px' }}
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .careers-header {
          min-height: 65vh;
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
 
        /* Culture grid */
        .culture-card {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
 
        .culture-card h3 {
          font-size: 1.2rem;
          color: var(--primary);
        }
 
        .culture-card p {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--text-normal);
          margin-bottom: 0;
        }
 
        /* Listings filter */
        .openings-filter-bar {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 20px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          color: var(--text-normal);
          font-family: var(--font-badge);
          font-weight: 600;
          font-size: 0.82rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-fast);
          box-shadow: var(--shadow-premium);
        }

        .filter-btn:hover, .filter-btn.active {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(91, 33, 182, 0.03);
        }
 
        .jobs-list-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }
 
        .job-row {
          padding: 30px 40px;
        }
 
        .job-row-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }
 
        .job-loc {
          font-family: var(--font-badge);
          font-weight: 600;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--accent);
        }
 
        .job-row h3 {
          font-size: 1.4rem;
          margin: 6px 0 10px 0;
          color: var(--text-bright);
        }
 
        .job-desc {
          font-size: 0.92rem;
          line-height: 1.5;
          color: var(--text-normal);
          margin-bottom: 0;
          max-width: 550px;
        }
 
        /* Side-Drawer Details */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(8px);
          z-index: 150;
        }

        .drawer-panel {
          width: 500px;
          max-width: 90%;
          height: 90vh;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-premium-hover);
          padding: 40px 30px;
          position: relative;
        }
 
        .drawer-inner-scroll {
          height: 100%;
          overflow-y: auto;
          padding-right: 10px;
        }
 
        .drawer-inner-scroll::-webkit-scrollbar {
          width: 5px;
        }
 
        .role-highlight {
          display: inline-block;
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 1.3rem;
          color: var(--primary);
          margin-top: 10px;
        }
 
        .role-sub {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }
 
        .job-drawer-specs {
          background: var(--bg-deep);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          padding: 20px;
          margin-bottom: 24px;
        }
 
        .job-drawer-specs h5 {
          font-size: 0.9rem;
          color: var(--accent);
          margin-bottom: 6px;
        }
 
        .job-drawer-specs h5:nth-of-type(2) {
          margin-top: 16px;
        }
 
        .job-drawer-specs p {
          font-size: 0.82rem;
          line-height: 1.5;
          margin-bottom: 0;
        }
 
        .job-drawer-specs ul {
          list-style: square;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
 
        .job-drawer-specs li {
          font-size: 0.8rem;
          color: var(--text-normal);
        }
 
        /* File Upload */
        .file-input {
          display: none;
        }
 
        .upload-btn-shell {
          width: 100%;
        }
 
        .progress-bar-shell {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
 
        .bar-track {
          height: 6px;
          background: rgba(15, 23, 42, 0.08);
          border-radius: 4px;
          overflow: hidden;
        }
 
        .bar-fill {
          height: 100%;
          background: var(--primary);
          transition: width 0.3s ease;
        }
 
        .percent-indicator {
          font-size: 0.72rem;
          color: var(--primary);
          font-weight: 500;
        }
 
        .upload-ready {
          font-size: 0.78rem;
          color: var(--primary);
          display: block;
          margin-top: 8px;
          font-weight: 600;
        }
 
        .success-anim-container h3 {
          font-size: 1.8rem;
          color: var(--text-bright);
          margin-bottom: 12px;
        }
 
        .success-anim-container p {
          font-size: 1.05rem;
          max-width: 320px;
          color: var(--text-normal);
        }

        .success-icon {
          width: 50px;
          height: 50px;
          background: rgba(91, 33, 182, 0.1);
          border: 2.5px solid var(--primary);
          color: var(--primary);
          border-radius: 50%;
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 18px;
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 1.1rem;
          cursor: pointer;
          transition: var(--transition-fast);
          z-index: 10;
        }
 
        .modal-close-btn:hover {
          color: var(--text-bright);
        }

        .careers-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-family: var(--font-badge);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-normal);
        }

        .form-group input, .form-group textarea {
          padding: 10px 14px;
          background: var(--bg-deep);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-bright);
          font-family: var(--font-body);
          font-size: 0.9rem;
          transition: var(--transition-fast);
          width: 100%;
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          background: #ffffff;
          box-shadow: 0 0 0 2px rgba(91, 33, 182, 0.1);
        }
 
        @media (max-width: 768px) {
          .careers-header h1 {
            font-size: 2.3rem;
          }
          .job-row {
            padding: 24px;
          }
          .job-row-main {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .job-row-main button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Careers;
