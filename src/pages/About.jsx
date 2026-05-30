import React from 'react';

const About = () => {
  const values = [
    { title: 'Innovation', desc: 'Engineering next-generation AI pipelines and vertical software frameworks that disrupt conventional systems.' },
    { title: 'Scalability', desc: 'Crafting modular cloud systems designed to expand seamlessly from SME metrics to giant enterprise loads.' },
    { title: 'Accessibility', desc: 'Democratizing highly complex enterprise tech, making artificial intelligence viable for Tier-2 and Tier-3 Indian hubs.' },
    { title: 'Intelligence', desc: 'Embedding real-time cognitive logic and deep insights inside daily corporate operational layers.' },
    { title: 'Reliability', desc: 'Forging strict security models, secure data isolations, and highly resilient databases that business can depend on.' }
  ];

  const leaders = [
    { name: 'Dr. Sai Kiran', role: 'Co-Founder & Chief AI Officer', bio: 'Former AI Research Director with 15+ years engineering cognitive neural networks and multi-agent SaaS models.', avatar: 'SK' },
    { name: 'Rexon Fernandes', role: 'Co-Founder & Director of Engineering', bio: 'Enterprise systems architect who previously designed auto-scaling infrastructure pipelines for top-tier Indian tech brands.', avatar: 'RF' },
    { name: 'Anjali Sharma', role: 'Head of Vertical SaaS Solutions', bio: 'Product strategist focused on healthcare and workforce analytics modernization programs in emerging Indian regions.', avatar: 'AS' }
  ];

  const roadmap = [
    { year: 'Year 1', milestone: 'Core AI Engine & Platform Launch', desc: 'Stabilize our baseline resume parsing engine, clinic booking platforms, and commerce predictive charts.' },
    { year: 'Year 2', milestone: 'Tier-2 & Tier-3 SME Penetration', desc: 'Direct regional outreach across emerging industrial cities, deploying affordable local packages for 500+ enterprises.' },
    { year: 'Year 3', milestone: 'Multi-Agent Autonomous Orchestration', desc: 'Unveil plug-and-play AI software agents that coordinate cross-department corporate tasks with zero human friction.' },
    { year: 'Year 4', milestone: 'Pan-India Enterprise Dominance', desc: 'Establish strategic integrations inside public and private enterprise networks, providing unified digital transform services.' }
  ];

  return (
    <div className="about-page animate-fade-in">
      {/* Intro Header */}
      <section className="section-padding about-header flex-center">
        <div className="header-text">
          <span className="badge cyan">Our Identity</span>
          <h1>Modernizing Enterprise with <br /><span className="text-gradient-cyan">Cybernetic AI Architectures</span></h1>
          <p>
            SaiRexon Technologies is an AI-first software engineering firm, dedicated to building custom SaaS ecosystems and intelligent modernizations. We connect Tier-2 and Tier-3 businesses with high-end, scalable enterprise technology.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding vision-mission-section">
        <div className="grid-container grid-2">
          <div className="glass-panel vision-card glowing-cyan">
            <span className="badge cyan">Vision</span>
            <h2>Democratize the Digital Future</h2>
            <p>
              To place state-of-the-art machine intelligence and microservice architectures within arms reach of every Indian business. We envision an economy where regional enterprises operate with the speed, efficiency, and computational superiority of global conglomerates.
            </p>
          </div>
          <div className="glass-panel vision-card glowing-orange">
            <span className="badge orange">Mission</span>
            <h2>A Systematic Modernization Drive</h2>
            <p>
              To engineer affordable, high-fidelity AI models, vertical SaaS platforms, and secure cloud infrastructures. We systematically dissect operational friction points, replacing slow manual procedures with autonomous code agents.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding story-section">
        <div className="story-content">
          <span className="badge blue">Our Story</span>
          <h2>Designed for India's Industrial Modernization</h2>
          <p className="story-p">
            SaiRexon was established after identifying a core disparity in the Indian software landscape. While major technology nodes (such as Bengaluru, Mumbai, and Hyderabad) absorbed advanced machine learning and cloud infrastructures, thousands of thriving enterprises in emerging Tier-2 and Tier-3 hubs were left with vulnerable, manual, legacy workflows.
          </p>
          <p className="story-p">
            We set out to break this barrier. By crafting a hybrid **AI + SaaS + Services** delivery framework, we provide high-fidelity technology consulting alongside turnkey software platforms. This ensures regional businesses do not merely receive a piece of software, but a comprehensive digital transform partner that stays with them through complete business scaling.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding values-section">
        <div className="section-header">
          <span className="badge orange">Core Pillars</span>
          <h2>The Values Driving Our Engineering</h2>
          <p>We refuse to cut corners, maintaining strict architectural guidelines across every line of code.</p>
        </div>
        <div className="values-grid">
          {values.map((val, idx) => (
            <div key={idx} className="value-card glass-panel">
              <div className="val-icon-shell">
                <span>0{idx + 1}</span>
              </div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding team-section">
        <div className="section-header">
          <span className="badge blue">Leadership</span>
          <h2>The Minds Navigating SaiRexon</h2>
          <p>A multi-disciplinary group of researchers, architects, and product modernization leaders.</p>
        </div>
        <div className="grid-container grid-3">
          {leaders.map((leader, idx) => (
            <div key={idx} className="leader-card glass-panel">
              <div className="avatar-circle">
                <span>{leader.avatar}</span>
                <div className="avatar-ring" />
              </div>
              <h3>{leader.name}</h3>
              <span className="leader-role">{leader.role}</span>
              <p className="leader-bio">{leader.bio}</p>
              
              <div className="leader-socials">
                <a href="#linkedin" onClick={(e) => e.preventDefault()} className="social-badge">LinkedIn</a>
                <a href="#twitter" onClick={(e) => e.preventDefault()} className="social-badge">Twitter</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Future Roadmap Timeline */}
      <section className="section-padding roadmap-section">
        <div className="section-header">
          <span className="badge cyan">Roadmap</span>
          <h2>Our 4-Year Strategic Scaling Model</h2>
          <p>A step-by-step projection of our expansion vectors and technology upgrades.</p>
        </div>

        <div className="roadmap-timeline">
          <div className="timeline-line" />
          <div className="timeline-grid">
            {roadmap.map((step, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-node-shell">
                  <div className="timeline-node" />
                  <span className="timeline-year">{step.year}</span>
                </div>
                <div className="timeline-card glass-panel">
                  <h4>{step.milestone}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-header {
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

        /* Vision Cards */
        .vision-card {
          padding: 40px;
          background: #ffffff;
        }

        .vision-card h2 {
          font-size: 1.8rem;
          margin: 16px 0;
          color: var(--text-bright);
        }

        .vision-card p {
          font-size: 0.98rem;
          line-height: 1.62;
          color: var(--text-normal);
          margin-bottom: 0;
        }

        /* Story Section */
        .story-section {
          background: #ffffff;
          border-top: 1px solid var(--border-glass);
          border-bottom: 1px solid var(--border-glass);
        }

        .story-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .story-content h2 {
          font-size: 2.2rem;
          margin: 14px 0 24px 0;
        }

        .story-p {
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        /* Values Grid */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .value-card {
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: #ffffff;
        }

        .val-icon-shell {
          width: 36px;
          height: 36px;
          background: rgba(91, 33, 182, 0.04);
          border: 1px solid rgba(91, 33, 182, 0.12);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-badge);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--primary);
        }

        .value-card h3 {
          font-size: 1.25rem;
          color: var(--text-bright);
        }

        .value-card p {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--text-normal);
          margin-bottom: 0;
        }

        /* Leaders Card */
        .leader-card {
          padding: 40px 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #ffffff;
        }

        .avatar-circle {
          width: 80px;
          height: 80px;
          background: var(--bg-deep);
          border: 1px solid var(--border-glass);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-badge);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          position: relative;
          margin-bottom: 24px;
        }

        .avatar-ring {
          position: absolute;
          top: -4px;
          left: -4px;
          width: 86px;
          height: 86px;
          border: 1.5px dashed var(--secondary);
          border-radius: 50%;
          animation: spin 20s linear infinite;
        }

        .leader-card h3 {
          font-size: 1.35rem;
          margin-bottom: 6px;
        }

        .leader-role {
          font-family: var(--font-badge);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }

        .leader-bio {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-normal);
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .leader-socials {
          display: flex;
          gap: 10px;
        }

        .leader-socials a {
          padding: 6px 12px;
          background: var(--bg-deep);
          border: 1px solid var(--border-glass);
          border-radius: 4px;
          font-family: var(--font-badge);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-normal);
          transition: var(--transition-fast);
        }

        .leader-socials a:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: rgba(91, 33, 182, 0.03);
        }

        /* Roadmap Timeline */
        .roadmap-timeline {
          position: relative;
          width: 100%;
          margin-top: 60px;
          padding: 20px 0;
        }

        .timeline-line {
          position: absolute;
          top: 36px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--border-glass);
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
          z-index: 2;
        }

        .timeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .timeline-node-shell {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .timeline-node {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--secondary);
          border: 3px solid var(--bg-deep);
        }

        .timeline-year {
          font-family: var(--font-badge);
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--primary);
          margin-top: 8px;
        }

        .timeline-card {
          padding: 24px;
          width: 100%;
          text-align: left;
          background: #ffffff;
        }

        .timeline-card h4 {
          font-size: 1.1rem;
          color: var(--text-bright);
          margin-bottom: 10px;
        }

        .timeline-card p {
          font-size: 0.82rem;
          line-height: 1.5;
          color: var(--text-normal);
          margin-bottom: 0;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 992px) {
          .values-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .timeline-line {
            display: none;
          }
          .timeline-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .timeline-item {
            flex-direction: row;
            align-items: flex-start;
            gap: 20px;
          }
          .timeline-node-shell {
            flex-direction: row;
            gap: 10px;
            width: 80px;
            flex-shrink: 0;
            padding-top: 10px;
          }
          .timeline-year {
            margin-top: -3px;
          }
        }

        @media (max-width: 768px) {
          .header-text h1 {
            font-size: 2.3rem;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
