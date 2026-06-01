import React, { useState } from 'react';
import InteractiveDashboard from '../components/InteractiveDashboard';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('healthcare');
  const [inquiryProduct, setInquiryProduct] = useState(null);
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({ name: '', company: '', email: '', note: '' });

  const productData = {
    healthcare: {
      title: 'RexonHealth Clinic Portal',
      badge: 'Healthcare SaaS',
      overview: 'A unified clinic management and patient engagement suite designed to streamline medical practices and establish continuous biometric connections.',
      features: [
        { name: 'Patient Engagement Hub', desc: 'Secure patient communication portal, automated clinical alerts, and digital medication trackers.' },
        { name: 'EHR Intake Automations', desc: 'Synthesized diagnostic reports, digital symptom collection, and instant electronic health record updates.' },
        { name: 'Behavioral Health Indexing', desc: 'Aggregated mood tracking metrics, behavioral vital signs, and mental wellness tracking charts.' },
        { name: 'Clinic Orchestrator', desc: 'Smart appointment schedulers, real-time room occupancies, and automated doctor dispatch triggers.' }
      ],
      benefits: ['78% Reduction in Patient Intake Wait Times', 'Flawless Data Compliance & Security', 'Impeccable Care Continuity Indexes'],
      mockupCode: (
        <div className="product-ui-mockup glass-panel">
          <div className="mockup-header">
            <span className="window-dot red" />
            <span className="window-dot yellow" />
            <span className="window-dot green" />
            <span className="mockup-title">RexonHealth Clinic Panel</span>
          </div>
          <div className="mockup-body">
            <div className="clinic-metric-grid">
              <div className="metric-box"><span className="label">Total Patients</span><span className="val">1,402</span></div>
              <div className="metric-box"><span className="label">Active Wards</span><span className="val">08 / 10</span></div>
              <div className="metric-box"><span className="label">EHR Sync Rate</span><span className="val cyan">99.8%</span></div>
            </div>
            <div className="chart-preview-box">
              <span className="chart-label">Patient Rhythm Variance (Normal Range)</span>
              <div className="sine-wave-graphic">
                <svg viewBox="0 0 100 30" className="sine-wave" width="100%" height="100%">
                  <path d="M0,15 Q10,5 20,15 T40,15 T60,15 T80,15 T100,15" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeDasharray="25 8" className="flowing-biometric-path" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )
    },
    workforce: {
      title: 'RexonTalent Vector Pipeline',
      badge: 'Workforce & Staffing',
      overview: 'Next-generation candidate sourcing, vector-based resume matching, and dynamic talent placement pipelines powered by high-fidelity AI algorithms.',
      features: [
        { name: 'Vector Skill Extractor', desc: 'Parses applicant PDFs to map deep skill sets, technical matrices, and experience timelines automatically.' },
        { name: 'AI Sourcing Agents', desc: 'Scours private pools and public indices to source candidate profiles targeting critical roles.' },
        { name: 'Mock Training & Roadmaps', desc: 'Deploys customized skill assessments, mock technical panels, and target training certifications.' },
        { name: 'Placement Coordination', desc: 'Synchronizes client panels, interviews, scores, and automated placement contracts.' }
      ],
      benefits: ['92% Match Score Accuracy Ratings', 'Recruiting Cycle Cut by Up to 15 Days', 'Comprehensive Candidate Diagnostic Logs'],
      mockupCode: (
        <div className="product-ui-mockup glass-panel">
          <div className="mockup-header">
            <span className="window-dot red" />
            <span className="window-dot yellow" />
            <span className="window-dot green" />
            <span className="mockup-title">RexonTalent Parser</span>
          </div>
          <div className="mockup-body">
            <div className="applicant-snippet">
              <span className="app-avatar">AK</span>
              <div className="app-info">
                <h5>Ananya Kulkarni</h5>
                <span className="role-tag">Staff ML Engineer</span>
              </div>
            </div>
            <div className="skill-fit-meter">
              <div className="fit-hdr"><span>Skill Match Index</span><span className="val">96.4%</span></div>
              <div className="progress-track"><div className="progress-bar product-progress-bar" style={{width: '96%'}} /></div>
            </div>
            <div className="extracted-tags">
              <span className="tag tag-float-1">PyTorch</span><span className="tag tag-float-2">NLP</span><span className="tag tag-float-3">Transformers</span>
            </div>
          </div>
        </div>
      )
    },
    commerce: {
      title: 'RexonRetail Consolidated Hub',
      badge: 'Commerce & Retail',
      overview: 'Predictive footfall mapping, automated inventory distribution alerts, and dynamic pricing updates targeting multi-store retail brands.',
      features: [
        { name: 'Multi-Store Inventory Engine', desc: 'Monitors real-time stock parameters across all geographical retail outlets simultaneously.' },
        { name: 'Predictive Load Forecaster', desc: 'Predicts upcoming peak footfall periods to optimize employee shifts and counter staff counts.' },
        { name: 'Dynamic Price Optimization', desc: 'Adjusts online and shelf prices dynamically based on localized demand variables and shelf expirations.' },
        { name: 'Customer Retargeting', desc: 'Triggers local push alerts and tailored discounts targeting nearby active consumers.' }
      ],
      benefits: ['Up to 22% Reduced Product Waste Logs', 'Flawless Stock Balance Control', 'Dynamic 4.2x Customer CTR Increments'],
      mockupCode: (
        <div className="product-ui-mockup glass-panel">
          <div className="mockup-header">
            <span className="window-dot red" />
            <span className="window-dot yellow" />
            <span className="window-dot green" />
            <span className="mockup-title">RexonRetail Analytics</span>
          </div>
          <div className="mockup-body">
            <div className="retail-vitals">
              <div className="vital"><span className="lbl">Store Load</span><span className="val green">OPTIMIZED</span></div>
              <div className="vital"><span className="lbl">Demand Forecast</span><span className="val">+38% peak</span></div>
            </div>
            <div className="animated-bars">
              <div className="col"><div className="bar mockup-col-1" style={{height: '60px'}} /></div>
              <div className="col"><div className="bar highlight mockup-col-2" style={{height: '80px'}} /></div>
              <div className="col"><div className="bar mockup-col-3" style={{height: '50px'}} /></div>
            </div>
            <p className="prediction-note">Suggested Dispatch: Send 40 packets to Sector 4 Hub immediately.</p>
          </div>
        </div>
      )
    },
    apis: {
      title: 'RexonCore AI Infrastructures',
      badge: 'AI APIs & Cloud Core',
      overview: 'Robust REST and gRPC API layers, secure data-silo configurations, and automated backend infrastructure built for custom enterprise pipelines.',
      features: [
        { name: 'High-Throughput Semantic APIs', desc: 'Lightning-fast API endpoints for semantic searches, data extractions, and multi-model synthesizers.' },
        { name: 'Enterprise Cloud Clusters', desc: 'Dedicated Kubernetes nodes configured to handle heavy transaction demands with instant auto-scaling.' },
        { name: 'Process Automation Agents', desc: 'Deploy standalone cognitive software bots that query databases, trigger APIs, and build reports.' },
        { name: 'Comprehensive Logs & Audits', desc: 'Full performance metric overlays, access credential systems, and complete data safety audits.' }
      ],
      benefits: ['Sub-50ms Global Query Response Times', 'Impenetrable Zero-Trust Security Gates', 'DevOps Automations Operating at 99.99% Uptime'],
      mockupCode: (
        <div className="product-ui-mockup glass-panel">
          <div className="mockup-header">
            <span className="window-dot red" />
            <span className="window-dot yellow" />
            <span className="window-dot green" />
            <span className="mockup-title">RexonCore Console</span>
          </div>
          <div className="mockup-body code-mockup">
            <pre><code>
{`POST /api/v1/modernize HTTP/1.1
Host: api.sairexon.com
Auth: Bearer rex_live_948f

{
  "system": "legacy_db_02",
  "engine": "semantic-vector-v2"
}

>> Response 200 OK (38ms)
>> Status: Modernization Active`} <span className="api-cursor-blink-green" />
            </code></pre>
          </div>
        </div>
      )
    }
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setInquiryProduct(null);
      setInquiryForm({ name: '', company: '', email: '', note: '' });
    }, 2500);
  };

  return (
    <div className="products-page animate-fade-in">
      {/* Intro section */}
      <section className="section-padding products-header flex-center">
        <div className="header-text">
          <span className="badge cyan">SaaS Ecosystem</span>
          <h1>Vertical SaaS Tailored For <br /><span className="text-gradient-cyan">Target Operations</span></h1>
          <p>
            Explore our line of professional vertical software platforms. We build hyper-focused products that automate daily core work, eliminating errors and scaling operational capacities.
          </p>
        </div>
      </section>

      {/* Interactive Sandbox Section */}
      <section className="section-padding sandbox-wrapper-section">
        <div className="sandbox-inner">
          <InteractiveDashboard />
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="section-padding product-categories-section">
        <div className="section-header">
          <span className="badge orange">Product Matrix</span>
          <h2>Explore Core Product Features</h2>
          <p>Select a product line to review structural capabilities, custom interfaces, and direct benefits.</p>
        </div>

        {/* Navigation tabs */}
        <div className="categories-nav">
          {Object.keys(productData).map((key) => (
            <button
              key={key}
              className={`cat-tab-btn ${selectedCategory === key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(key)}
            >
              {productData[key].badge}
            </button>
          ))}
        </div>

        {/* Current Active Product Details */}
        <div className="category-details-container glass-panel glowing-cyan animate-fade-in" key={selectedCategory}>
          <div className="cat-details-text">
            <span className="product-badge">{productData[selectedCategory].badge}</span>
            <h3>{productData[selectedCategory].title}</h3>
            <p className="product-overview">{productData[selectedCategory].overview}</p>
            
            <div className="product-benefits">
              <h4>Key Benefits:</h4>
              <ul>
                {productData[selectedCategory].benefits.map((benefit, i) => (
                  <li key={i}>
                    <span className="check-green">✓</span> {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-action-btns">
              <button onClick={() => setInquiryProduct(productData[selectedCategory].title)} className="btn-primary">
                Request Product Demo
              </button>
              <button onClick={() => setInquiryProduct(productData[selectedCategory].title)} className="btn-accent">
                Pricing & License Inquiry
              </button>
            </div>
          </div>

          <div className="cat-details-visual flex-center">
            {productData[selectedCategory].mockupCode}
          </div>
        </div>

        {/* Extended Features Grid */}
        <div className="extended-features-grid">
          <h3>Architectural Integrations Included:</h3>
          <div className="grid-container grid-4">
            {productData[selectedCategory].features.map((feat, idx) => (
              <div key={idx} className="glass-panel feat-card">
                <h5>{feat.name}</h5>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      {inquiryProduct && (
        <div className="modal-backdrop flex-center animate-fade-in">
          <div className="modal-content glass-panel glowing-orange">
            <button className="modal-close-btn" onClick={() => setInquiryProduct(null)}>✕</button>
            
            {inquirySuccess ? (
              <div className="inquiry-success-view text-center animate-fade-in">
                <span className="success-badge">✓ Demo Request Submitted</span>
                <h4>Thank You!</h4>
                <p>An enterprise product engineer will connect with your team inside 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="inquiry-form">
                <h3>Enterprise Inquiry</h3>
                <span className="prod-name-highlight">Product: {inquiryProduct}</span>
                
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    required
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    required
                    value={inquiryForm.company}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, company: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Work Email</label>
                  <input
                    type="email"
                    required
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Requirement Notes (Optional)</label>
                  <textarea
                    rows="3"
                    value={inquiryForm.note}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, note: e.target.value })}
                    placeholder="E.g., Number of licenses, integration timeline..."
                  />
                </div>
                <button type="submit" className="btn-primary w-100" style={{ marginTop: '10px' }}>Submit License Request</button>
              </form>
            )}
          </div>
        </div>
      )}

      <style>{`
        .products-header {
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

        /* Sandbox wrapper */
        .sandbox-wrapper-section {
          padding-top: 0px;
          margin-top: -80px;
        }

        .sandbox-inner {
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Categories Navigation */
        .categories-nav {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 40px;
        }

        .cat-tab-btn {
          padding: 14px 28px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          color: var(--text-normal);
          font-family: var(--font-badge);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-premium);
        }

        .cat-tab-btn:hover, .cat-tab-btn.active {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(91, 33, 182, 0.03);
        }

        /* Categories Detail Box */
        .category-details-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          padding: 50px;
          max-width: 1000px;
          margin: 0 auto 60px auto;
          background: #ffffff;
        }

        .product-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 4px;
          background: rgba(91, 33, 182, 0.05);
          border: 1px solid rgba(91, 33, 182, 0.12);
          color: var(--primary);
          font-family: var(--font-badge);
          font-weight: 600;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }

        .cat-details-text h3 {
          font-size: 2rem;
          margin-bottom: 16px;
          color: var(--text-bright);
        }

        .product-overview {
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 24px;
          color: var(--text-normal);
        }

        .product-benefits {
          margin-bottom: 30px;
        }

        .product-benefits h4 {
          font-family: var(--font-badge);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--secondary);
          margin-bottom: 12px;
        }

        .product-benefits ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .product-benefits li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.92rem;
          color: var(--text-normal);
        }

        .check-green {
          color: var(--primary);
          font-weight: 800;
        }

        .product-action-btns {
          display: flex;
          gap: 16px;
        }

        /* Mockup Styles */
        .product-ui-mockup {
          width: 100%;
          max-width: 380px;
          border-color: var(--border-glass);
          overflow: hidden;
          background: var(--bg-deep);
          box-shadow: none;
        }

        .mockup-header {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: rgba(15, 23, 42, 0.02);
          border-bottom: 1px solid var(--border-glass);
          gap: 6px;
        }

        .window-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        .window-dot.red { background: #ef4444; }
        .window-dot.yellow { background: #f59e0b; }
        .window-dot.green { background: #10b981; }

        .mockup-title {
          font-family: var(--font-badge);
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-left: 10px;
          flex-grow: 1;
        }

        .mockup-body {
          padding: 24px;
        }

        /* Clinic Specific Mockup UI */
        .clinic-metric-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }

        .metric-box {
          background: #ffffff;
          border: 1px solid var(--border-glass);
          padding: 10px;
          border-radius: 6px;
          text-align: center;
        }

        .metric-box .label {
          font-size: 0.65rem;
          color: var(--text-muted);
          display: block;
          margin-bottom: 4px;
        }

        .metric-box .val {
          font-family: var(--font-badge);
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-bright);
        }

        .metric-box .val.cyan { color: var(--primary); }

        .chart-preview-box {
          background: #ffffff;
          border: 1px solid var(--border-glass);
          padding: 14px;
          border-radius: 6px;
        }

        .chart-label {
          font-size: 0.68rem;
          color: var(--text-muted);
          display: block;
          margin-bottom: 10px;
        }

        .sine-wave-graphic {
          display: flex;
          align-items: center;
          height: 30px;
        }

        /* Talent Mockup */
        .applicant-snippet {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .app-avatar {
          width: 32px;
          height: 32px;
          background: rgba(91, 33, 182, 0.05);
          border: 1px solid rgba(91, 33, 182, 0.15);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-badge);
          font-weight: 700;
          font-size: 0.8rem;
        }

        .app-info h5 {
          font-size: 0.9rem;
          color: var(--text-bright);
          margin-bottom: 2px;
        }

        .role-tag {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .skill-fit-meter {
          margin-bottom: 16px;
        }

        .fit-hdr {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: var(--text-normal);
          margin-bottom: 6px;
        }

        .progress-track {
          height: 4px;
          background: rgba(15, 23, 42, 0.08);
          border-radius: 20px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: var(--primary);
        }

        .extracted-tags {
          display: flex;
          gap: 6px;
        }

        .extracted-tags .tag {
          font-size: 0.65rem;
          padding: 2px 8px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          border-radius: 4px;
        }

        /* Retail Mockup */
        .retail-vitals {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .retail-vitals .lbl {
          font-size: 0.68rem;
          color: var(--text-muted);
          display: block;
        }

        .retail-vitals .val {
          font-family: var(--font-badge);
          font-weight: 700;
          font-size: 0.85rem;
        }

        .retail-vitals .val.green { color: var(--primary); }

        .animated-bars {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          height: 60px;
          border-bottom: 1px solid var(--border-glass);
          margin-bottom: 14px;
        }

        .animated-bars .col {
          width: 14px;
        }

        .animated-bars .bar {
          width: 100%;
          background: rgba(15, 23, 42, 0.05);
          border-radius: 2px 2px 0 0;
        }

        .animated-bars .bar.highlight {
          background: var(--primary);
        }

        .prediction-note {
          font-size: 0.68rem;
          color: var(--primary);
          margin-bottom: 0;
          background: rgba(91, 33, 182, 0.03);
          padding: 8px;
          border-left: 2px solid var(--primary);
          border-radius: 0 4px 4px 0;
        }

        /* Code Mockup */
        .code-mockup {
          background: #ffffff;
          border-radius: 4px;
          padding: 16px;
          border: 1px solid var(--border-glass);
        }

        .code-mockup pre {
          margin: 0;
          overflow-x: auto;
        }

        .code-mockup code {
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.7rem;
          color: var(--primary);
          line-height: 1.4;
        }

        /* Extended features */
        .extended-features-grid {
          max-width: 1000px;
          margin: 60px auto 0 auto;
        }

        .extended-features-grid h3 {
          font-size: 1.4rem;
          margin-bottom: 24px;
          color: var(--primary);
          text-align: center;
        }

        .feat-card {
          padding: 24px 20px;
          background: #ffffff;
          box-shadow: var(--shadow-premium);
        }

        .feat-card h5 {
          font-size: 1.05rem;
          color: var(--text-bright);
          margin-bottom: 10px;
        }

        .feat-card p {
          font-size: 0.82rem;
          line-height: 1.5;
          color: var(--text-normal);
          margin-bottom: 0;
        }

        /* Modal styling */
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

        .modal-content {
          width: 440px;
          padding: 40px;
          position: relative;
          background: #ffffff;
          border-color: var(--border-glass);
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
        }

        .modal-close-btn:hover {
          color: var(--text-bright);
        }

        .prod-name-highlight {
          display: inline-block;
          font-family: var(--font-badge);
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 20px;
          font-size: 0.95rem;
        }

        .form-group {
          margin-bottom: 16px;
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
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          background: #ffffff;
        }

        .w-100 {
          width: 100%;
        }

        .text-center {
          text-align: center;
        }

        /* High-Fidelity Mockup Animations */
        @keyframes flowTelemetry {
          to { stroke-dashoffset: -33; }
        }
        .flowing-biometric-path {
          stroke-dasharray: 25 8;
          animation: flowTelemetry 2.2s linear infinite;
        }

        @keyframes progressGlow {
          0%, 100% { opacity: 0.8; box-shadow: 0 0 8px rgba(99, 102, 241, 0.4); }
          50% { opacity: 1; box-shadow: 0 0 16px rgba(99, 102, 241, 0.8); }
        }
        .product-progress-bar {
          animation: progressGlow 2.5s ease-in-out infinite alternate;
        }

        @keyframes driftTag {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .tag-float-1 { animation: driftTag 3s ease-in-out infinite alternate; }
        .tag-float-2 { animation: driftTag 3.4s ease-in-out infinite alternate-reverse; }
        .tag-float-3 { animation: driftTag 3.2s ease-in-out infinite alternate; }

        @keyframes chartPulse1 {
          0%, 100% { height: 60px; }
          50% { height: 95px; }
        }
        @keyframes chartPulse2 {
          0%, 100% { height: 80px; }
          50% { height: 50px; }
        }
        @keyframes chartPulse3 {
          0%, 100% { height: 50px; }
          50% { height: 85px; }
        }
        .mockup-col-1 { animation: chartPulse1 3.5s ease-in-out infinite alternate; }
        .mockup-col-2 { animation: chartPulse2 4s ease-in-out infinite alternate; }
        .mockup-col-3 { animation: chartPulse3 3.8s ease-in-out infinite alternate; }

        @keyframes cursorBlink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .api-cursor-blink-green {
          display: inline-block;
          width: 6px;
          height: 12px;
          background: var(--accent);
          margin-left: 4px;
          vertical-align: middle;
          animation: cursorBlink 1s step-end infinite;
        }

        @media (max-width: 992px) {
          .category-details-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .cat-details-visual {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .products-header h1 {
            font-size: 2.3rem;
          }
          .categories-nav {
            flex-direction: column;
            gap: 10px;
          }
          .cat-tab-btn {
            padding: 12px;
            width: 100%;
          }
          .product-action-btns {
            flex-direction: column;
            gap: 12px;
          }
          .modal-content {
            width: 90%;
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Products;
