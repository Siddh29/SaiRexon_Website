import React, { useState } from 'react';
import ParticlesBg from '../components/ParticlesBg';

const Home = ({ setCurrentPage }) => {
  const [activeIndustry, setActiveIndustry] = useState('healthcare');

  const overviewItems = [
    { title: 'AI Infrastructure', desc: 'Pre-trained models and deep API layers engineered for instant deployment into enterprise logic.' },
    { title: 'SaaS Ecosystem', desc: 'Custom vertical platforms tailored specifically to automate core clinic, workspace, and retail store tasks.' },
    { title: 'Automation Engines', desc: 'Eradicate manual operational friction. Deploy software agents that execute processes flawlessly.' },
    { title: 'Legacy Modernization', desc: 'Migrate archaic database structures and monolothic architectures onto highly scalable cloud nets.' }
  ];

  const problemSolutions = [
    { problem: 'Exhaustive manual data collation & workflow bottlenecks', solution: 'Autonomous AI agents that execute processes instantly' },
    { problem: 'Astronomical operational friction and scaling roadblocks', solution: 'Cloud-native microservice architecture & DevOps auto-scaling' },
    { problem: 'Archaic, vulnerable legacy codebases and databases', solution: 'Fluid, secure modernizations with zero operational downtime' },
    { problem: 'Prohibitive AI research costs blocking smaller enterprises', solution: 'Modular, ultra-affordable APIs custom tailored for Indian SMEs' }
  ];

  const solutions = [
    { title: 'Enterprise AI Integration', desc: 'Tailored LLM deployment, vector database integration, and intelligent agent systems for internal business structures.', image: '/assets/images/media__1780124170147.png' },
    { title: 'Workflow Automation', desc: 'End-to-end process audits and software bot deployment to trigger workflows and remove manual tasks.', image: '/assets/images/media__1780122544888.png' },
    { title: 'Legacy Code Modernization', desc: 'Complete architecture migrations. Porting legacy VB6, ASP, or COBOL systems to React + Node + Cloud.', image: '/assets/images/media__1780122544913.png' },
    { title: 'Vertical SaaS Platforms', desc: 'Turnkey application models focused on specific niche industries like local medicine, recruiting, and commerce.', image: '/assets/images/media__1780124583134.jpg' },
    { title: 'Cloud DevOps Setup', desc: 'Kubernetes orchestration, serverless structures, and CI/CD pipelines configured for optimal scale.', image: '/assets/images/media__1780124585958.jpg' },
    { title: 'Enterprise AI APIs', desc: 'Lightning-fast API access points for immediate custom data extraction, semantic search, and summary tasks.', image: '/assets/images/media__1780124647473.png' }
  ];

  const industries = {
    healthcare: {
      title: 'Healthcare Clinic Modernization',
      badge: 'Healthcare',
      desc: 'Seamless clinic operations and patient engagement solutions. Empower local practitioners and large medical systems alike.',
      features: ['Automated virtual consultation rooms', 'Behavioral health indexing & EHR pipelines', 'Clinic scheduling bots', 'Patient engagement interfaces']
    },
    workforce: {
      title: 'AI-Driven Workforce Placement',
      badge: 'Workforce',
      desc: 'Advanced hiring technology and resume vector ranking. Connect Indian talent with high-impact enterprises smoothly.',
      features: ['Automated semantic resume screening', 'Dynamic hiring pipelines', 'Skills gap assessments', 'Technical mentoring portals']
    },
    commerce: {
      title: 'Intelligent Commerce Hubs',
      badge: 'Commerce',
      desc: 'Multi-store retail intelligence and predictive analytics. Streamline inventory management and boost sales vectors.',
      features: ['Predictive demand inventory systems', 'Multi-channel store consolidators', 'Real-time sales analytics engines', 'AI local promotional targeting']
    },
    ai: {
      title: 'Autonomous Enterprise AI',
      badge: 'AI Automation',
      desc: 'Agent-driven process automation and custom API structures built for scaling enterprise modernization.',
      features: ['Custom business analysis agents', 'Secure isolated data processing', 'Legacy API bridges', 'Intelligent semantic search networks']
    }
  };

  const handleCTA = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section flex-center">
        <ParticlesBg />
        <div className="hero-content">
          <span className="badge cyan">India's Next Digital Era</span>
          <h1>
            AI-Powered Enterprise Modernization for <br />
            <span className="text-gradient-cyan">India's Emerging Markets</span>
          </h1>
          <p className="hero-subtext">
            SaiRexon Technologies builds custom AI infrastructure, Vertical SaaS platforms, and enterprise modernization networks. We empower SMEs and enterprise giants to scale with supreme intelligence.
          </p>
          <div className="hero-ctas">
            <button onClick={() => handleCTA('consultation')} className="btn-primary">
              Book Free Consultation
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <button onClick={() => handleCTA('products')} className="btn-secondary">
              Explore SaaS Products
            </button>
          </div>
          
          {/* Sexy UI/UX Credentials Stats Ribbon */}
          <div className="hero-stats-ribbon glass-panel animate-fade-in">
            <div className="stat-item">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">20+</span>
              <span className="stat-label">Enterprise Consultancies</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">50+</span>
              <span className="stat-label">Connected Modernizations</span>
            </div>
          </div>
        </div>
        <div className="hero-fade-bottom" />
      </section>

      {/* Company Overview */}
      <section className="section-padding overview-section">
        <div className="section-header">
          <span className="badge orange">Who We Are</span>
          <h2>A Comprehensive AI & SaaS Technology Partner</h2>
          <p>SaiRexon engineers complete, end-to-end technology solutions that drive continuous corporate growth.</p>
        </div>
        <div className="grid-container grid-4">
          {overviewItems.map((item, idx) => (
            <div key={idx} className="glass-panel overview-card">
              <div className="card-number">0{idx + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding problems-section">
        <div className="section-header">
          <span className="badge blue">Problems We Solve</span>
          <h2>Closing the Operational Gap</h2>
          <p>We target structural corporate hurdles and engineer flawless solutions that reduce friction.</p>
        </div>
        <div className="problems-grid">
          {problemSolutions.map((item, idx) => (
            <div key={idx} className="problem-card glass-panel">
              <div className="problem-side">
                <span className="indicator red">✕</span>
                <p>{item.problem}</p>
              </div>
              <div className="divider-line" />
              <div className="solution-side">
                <span className="indicator green">✓</span>
                <p className="sol-text">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SaiRexon Solutions Grid */}
      <section className="section-padding solutions-section">
        <div className="section-header">
          <span className="badge cyan">SaiRexon Solutions</span>
          <h2>Engineered for Seamless Scale</h2>
          <p>Our solutions matrix covers all core requirements to optimize company productivity.</p>
        </div>
        <div className="grid-container grid-3">
          {solutions.map((sol, idx) => (
            <div key={idx} className="glass-panel solution-card">
              <div className="solution-card-img-shell">
                <img src={sol.image} alt={sol.title} className="solution-card-img" />
                <div className="solution-card-img-overlay" />
              </div>
              <div className="solution-card-content">
                <h3>{sol.title}</h3>
                <p>{sol.desc}</p>
                <button onClick={() => handleCTA('services')} className="learn-more-link">
                  Learn Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Focus Switcher */}
      <section className="section-padding industry-section">
        <div className="section-header">
          <span className="badge orange">Industry Verticals</span>
          <h2>Focused on Strategic Ecosystems</h2>
          <p>Tailored technologies addressing domain challenges in India's leading industrial sectors.</p>
        </div>

        <div className="industry-switcher-container">
          <div className="switcher-sidebar">
            {Object.keys(industries).map((key) => (
              <button
                key={key}
                className={`switcher-btn ${activeIndustry === key ? 'active' : ''}`}
                onClick={() => setActiveIndustry(key)}
              >
                {industries[key].badge}
              </button>
            ))}
          </div>

          <div className="switcher-content glass-panel glowing-cyan">
            <h3>{industries[activeIndustry].title}</h3>
            <p className="industry-desc">{industries[activeIndustry].desc}</p>
            <div className="industry-features">
              <h4>Key Technologies Deployed:</h4>
              <ul>
                {industries[activeIndustry].features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="dot-cyan" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={() => handleCTA('products')} className="btn-primary">
              Explore Specialized Products
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Vision */}
      <section className="section-padding why-choose-section">
        <div className="grid-container grid-2">
          <div className="why-us-text">
            <span className="badge blue">Why Choose SaiRexon</span>
            <h2>Democratizing Advanced Technology Systems</h2>
            <p className="vision-p">
              SaiRexon Technologies is built around an <strong>AI + SaaS + Services model</strong>. We bridge the gap between abstract artificial intelligence prototypes and practical, affordable daily deployment.
            </p>
            <p className="vision-p">
              Our unique strategy targets <strong>Tier-2 and Tier-3 Indian markets</strong>. We believe the next phase of India's digital transformation will emerge from growing regional hubs that require robust tech frameworks without prohibitive global enterprise price tags.
            </p>
            <div className="core-pillars">
              <div className="pillar"><span className="pillar-dot"></span> Affordable AI Architectures</div>
              <div className="pillar"><span className="pillar-dot"></span> Turnkey SaaS Deployment</div>
              <div className="pillar"><span className="pillar-dot"></span> End-to-End Managed Engineering</div>
            </div>
          </div>
          <div className="vision-globe glass-panel flex-center glowing-orange animate-float">
            <div className="globe-graphic">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="var(--secondary)" strokeWidth="1" fill="none" opacity="0.3" />
                <circle cx="50" cy="50" r="30" stroke="var(--primary)" strokeWidth="1" fill="none" opacity="0.4" />
                <ellipse cx="50" cy="50" rx="40" ry="12" stroke="var(--primary)" strokeWidth="1.5" fill="none" />
                <ellipse cx="50" cy="50" rx="12" ry="40" stroke="var(--secondary)" strokeWidth="1.5" fill="none" />
                <circle cx="50" cy="50" r="8" fill="var(--primary)" />
              </svg>
              <h4>Futuristic Indian Infrastructure</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot / Testimonials Showcase */}
      <section className="section-padding pilot-section">
        <div className="section-header">
          <span className="badge cyan">Ecosystem Traction</span>
          <h2>Active Prototype & Pilot Showcase</h2>
          <p>Our technologies are currently validating operations in real-world environments.</p>
        </div>
        <div className="ticker-container">
          <div className="ticker-wrapper">
            {/* Original Set */}
            <div className="ticker-card glass-panel">
              <h4>Mumbai Clinic Pilot</h4>
              <p>Behavioral health intake pipeline active. 98% booking automation efficiency.</p>
            </div>
            <div className="ticker-card glass-panel">
              <h4>Pune Logistics Node</h4>
              <p>E-commerce stock automation systems active. Footfall prediction accurate inside 91% bounds.</p>
            </div>
            <div className="ticker-card glass-panel">
              <h4>Hyderabad Staffing Drive</h4>
              <p>AI resume grading parser launched. Filtered 3,400+ entries for key IT conglomerates.</p>
            </div>
            <div className="ticker-card glass-panel">
              <h4>Delhi B2B Core Upgrade</h4>
              <p>Migrated legacy inventory data grids. 4x increase in system database responses.</p>
            </div>
            
            {/* Duplicate Set for Seamless Infinite Looping */}
            <div className="ticker-card glass-panel">
              <h4>Mumbai Clinic Pilot</h4>
              <p>Behavioral health intake pipeline active. 98% booking automation efficiency.</p>
            </div>
            <div className="ticker-card glass-panel">
              <h4>Pune Logistics Node</h4>
              <p>E-commerce stock automation systems active. Footfall prediction accurate inside 91% bounds.</p>
            </div>
            <div className="ticker-card glass-panel">
              <h4>Hyderabad Staffing Drive</h4>
              <p>AI resume grading parser launched. Filtered 3,400+ entries for key IT conglomerates.</p>
            </div>
            <div className="ticker-card glass-panel">
              <h4>Delhi B2B Core Upgrade</h4>
              <p>Migrated legacy inventory data grids. 4x increase in system database responses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="section-padding cta-section">
        <div className="cta-box glass-panel glowing-cyan">
          <h2>Start Your AI Transformation Journey</h2>
          <p>Establish high-impact operational efficiency and deploy scalable modern software systems built for tomorrow.</p>
          <div className="cta-btns">
            <button onClick={() => handleCTA('consultation')} className="btn-primary">Book Consultation</button>
            <button onClick={() => handleCTA('contact')} className="btn-secondary">Contact Us Directly</button>
          </div>
        </div>
      </section>

      <style>{`
        .home-page {
          position: relative;
        }

        /* Hero */
        .hero-section {
          height: 90vh;
          text-align: center;
          padding: 0 10%;
          position: relative;
          overflow: hidden;
          flex-direction: column;
          background: radial-gradient(circle at 50% 30%, rgba(var(--secondary-rgb), 0.1) 0%, transparent 60%);
        }

        .hero-content {
          max-width: 900px;
          z-index: 10;
          margin-top: 60px;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          line-height: 1.15;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .hero-subtext {
          font-size: 1.15rem;
          color: var(--text-normal);
          line-height: 1.62;
          max-width: 760px;
          margin: 0 auto 40px auto;
        }

        .hero-ctas {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .hero-fade-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: linear-gradient(to top, var(--bg-deep), transparent);
          z-index: 2;
        }

        /* Stats Ribbon */
        .hero-stats-ribbon {
          display: flex;
          align-items: center;
          justify-content: space-around;
          max-width: 800px;
          margin: 40px auto 0 auto;
          padding: 20px 40px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-premium);
          gap: 20px;
          z-index: 10;
          position: relative;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .stat-num {
          font-family: var(--font-badge);
          font-weight: 800;
          font-size: 2.2rem;
          color: var(--primary);
          line-height: 1.1;
        }

        .stat-label {
          font-family: var(--font-badge);
          font-weight: 600;
          font-size: 0.72rem;
          color: var(--text-normal);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 4px;
          text-align: center;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border-glass);
        }

        /* Overview Section */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.3rem;
          margin: 10px 0 20px 0;
          color: var(--text-bright);
        }

        .section-header p {
          color: var(--text-normal);
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.05rem;
        }

        .overview-card {
          padding: 40px 30px;
          position: relative;
          overflow: hidden;
          background: #ffffff;
          box-shadow: var(--shadow-premium);
        }

        .card-number {
          font-family: var(--font-badge);
          font-weight: 800;
          font-size: 2.2rem;
          color: rgba(91, 33, 182, 0.08);
          position: absolute;
          top: 15px;
          right: 20px;
        }

        .overview-card h3 {
          font-size: 1.25rem;
          margin-bottom: 16px;
          color: var(--primary);
        }

        .overview-card p {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--text-normal);
          margin-bottom: 0;
        }

        /* Problems Section */
        .problems-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }

        .problem-card {
          display: flex;
          align-items: center;
          padding: 24px 30px;
          gap: 30px;
          background: #ffffff;
          box-shadow: var(--shadow-premium);
        }

        .problem-side, .solution-side {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
        }

        .indicator {
          font-family: var(--font-badge);
          font-weight: 800;
          font-size: 1.2rem;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .indicator.red {
          background: rgba(221, 125, 98, 0.1);
          color: var(--accent);
          border: 1px solid rgba(221, 125, 98, 0.2);
        }

        .indicator.green {
          background: rgba(91, 33, 182, 0.08);
          color: var(--primary);
          border: 1px solid rgba(91, 33, 182, 0.2);
        }

        .divider-line {
          width: 1px;
          height: 40px;
          background: var(--border-glass);
        }

        .problem-card p {
          font-size: 0.95rem;
          margin: 0;
          color: var(--text-normal);
        }

        .problem-card p.sol-text {
          font-weight: 500;
          color: var(--text-bright);
        }

        /* Solutions Section */
        .solution-card {
          padding: 0;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          box-shadow: var(--shadow-premium);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .solution-card:hover {
          transform: translateY(-4px);
        }

        .solution-card-img-shell {
          width: 100%;
          height: 200px;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid var(--border-glass);
        }

        .solution-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .solution-card:hover .solution-card-img {
          transform: scale(1.04);
        }

        .solution-card-img-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 50%, rgba(15, 23, 42, 0.08));
          pointer-events: none;
        }

        .solution-card-content {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-grow: 1;
        }

        .sol-icon-shell {
          width: 32px;
          height: 32px;
          background: rgba(91, 33, 182, 0.04);
          border: 1px solid rgba(91, 33, 182, 0.12);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .solution-card h3 {
          font-size: 1.35rem;
          color: var(--text-bright);
        }

        .solution-card p {
          font-size: 0.92rem;
          color: var(--text-normal);
          line-height: 1.6;
          margin-bottom: 6px;
          flex-grow: 1;
        }

        .learn-more-link {
          background: none;
          border: none;
          color: var(--primary);
          font-family: var(--font-badge);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          align-self: flex-start;
          transition: var(--transition-fast);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .learn-more-link:hover {
          color: var(--accent);
          transform: translateX(4px);
        }

        /* Industry Switcher */
        .industry-switcher-container {
          display: grid;
          grid-template-columns: 1fr 2.2fr;
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .switcher-sidebar {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .switcher-btn {
          padding: 18px 24px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          color: var(--text-normal);
          font-family: var(--font-badge);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: var(--radius-sm);
          text-align: left;
          cursor: pointer;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-premium);
        }

        .switcher-btn:hover, .switcher-btn.active {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(91, 33, 182, 0.03);
        }

        .switcher-content {
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          background: #ffffff;
        }

        .switcher-content h3 {
          font-size: 1.8rem;
          margin-bottom: 16px;
          color: var(--text-bright);
        }

        .industry-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .industry-features {
          width: 100%;
          margin-bottom: 30px;
        }

        .industry-features h4 {
          font-family: var(--font-badge);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 14px;
          color: var(--secondary);
        }

        .industry-features ul {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .industry-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-normal);
        }

        .dot-cyan {
          width: 6px;
          height: 6px;
          background: var(--primary);
          border-radius: 50%;
          display: inline-block;
        }

        /* Why Choose Us & Globe */
        .vision-p {
          font-size: 1.05rem;
          line-height: 1.65;
          margin-bottom: 20px;
        }

        .core-pillars {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 24px;
        }

        .pillar {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-badge);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-bright);
          letter-spacing: 0.02em;
        }

        .pillar-dot {
          width: 8px;
          height: 8px;
          background: var(--secondary);
          border-radius: 50%;
        }

        .vision-globe {
          min-height: 380px;
          text-align: center;
          flex-direction: column;
          background: #ffffff;
        }

        .globe-graphic {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .globe-graphic h4 {
          font-family: var(--font-badge);
          font-size: 1rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-bright);
        }

        /* Pilot section */
        .ticker-container {
          overflow: hidden;
          width: 100%;
          padding: 20px 0;
          position: relative;
        }

        .ticker-wrapper {
          display: flex;
          gap: 30px;
          width: max-content;
          animation: slideTicker 35s linear infinite;
        }

        .ticker-card {
          width: 280px;
          padding: 24px;
          flex-shrink: 0;
          background: #ffffff;
          box-shadow: var(--shadow-premium);
        }

        .ticker-card h4 {
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: var(--primary);
        }

        .ticker-card p {
          font-size: 0.85rem;
          line-height: 1.5;
          margin-bottom: 0;
          color: var(--text-normal);
        }

        @keyframes slideTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* CTA Section */
        .cta-box {
          padding: 80px 40px;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          background: #ffffff;
        }

        .cta-box h2 {
          font-size: 2.5rem;
          margin-bottom: 16px;
        }

        .cta-box p {
          color: var(--text-normal);
          max-width: 600px;
          margin: 0 auto 36px auto;
          font-size: 1.05rem;
        }

        .cta-btns {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        @media (max-width: 992px) {
          .hero-content h1 {
            font-size: 3rem;
          }
          .industry-switcher-container {
            grid-template-columns: 1fr;
          }
          .switcher-sidebar {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 8px;
          }
          .switcher-btn {
            padding: 12px 20px;
            white-space: nowrap;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.2rem;
          }
          .hero-subtext {
            font-size: 1rem;
          }
          .hero-ctas {
            flex-direction: column;
            gap: 12px;
          }
          .problem-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .divider-line {
            width: 100%;
            height: 1px;
          }
          .industry-features ul {
            grid-template-columns: 1fr;
          }
          .cta-btns {
            flex-direction: column;
            gap: 12px;
          }
          .hero-stats-ribbon {
            flex-direction: column;
            padding: 30px 20px;
            gap: 20px;
          }
          .stat-divider {
            width: 80%;
            height: 1px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
