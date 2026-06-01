import React, { useState } from 'react';
import ParticlesBg from '../components/ParticlesBg';

const Home = ({ setCurrentPage }) => {
  const [activeIndustry, setActiveIndustry] = useState('healthcare');

  const overviewItems = [
    { 
      title: 'AI Infrastructure', 
      desc: 'Pre-trained models and deep API layers engineered for instant deployment into enterprise logic.',
      icon: (
        <svg className="overview-icon text-indigo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="5" r="3" className="icon-pulse-node" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <line x1="12" y1="8" x2="6.5" y2="16.5" className="flow-dash-line" />
          <line x1="12" y1="8" x2="17.5" y2="16.5" className="flow-dash-line" />
          <line x1="8" y1="19" x2="16" y2="19" className="flow-dash-line" />
        </svg>
      )
    },
    { 
      title: 'SaaS Ecosystem', 
      desc: 'Custom vertical platforms tailored specifically to automate core clinic, workspace, and retail store tasks.',
      icon: (
        <svg className="overview-icon text-fuchsia" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
          <circle cx="15" cy="15" r="2.5" className="spin-gear" />
        </svg>
      )
    },
    { 
      title: 'Automation Engines', 
      desc: 'Eradicate manual operational friction. Deploy software agents that execute processes flawlessly.',
      icon: (
        <svg className="overview-icon text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" className="draw-flow-path" />
        </svg>
      )
    },
    { 
      title: 'Legacy Modernization', 
      desc: 'Migrate archaic database structures and monolothic architectures onto highly scalable cloud nets.',
      icon: (
        <svg className="overview-icon text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22v-6M12 11V6M12 2v2" />
          <path d="M17 14.5a5 5 0 0 1-5 5 5 5 0 0 1-5-5" strokeDasharray="3 3" />
          <path d="M17 9.5a5 5 0 0 0-5-5 5 5 0 0 0-5 5" />
        </svg>
      )
    }
  ];

  const problemSolutions = [
    { problem: 'Exhaustive manual data collation & workflow bottlenecks', solution: 'Autonomous AI agents that execute processes instantly' },
    { problem: 'Astronomical operational friction and scaling roadblocks', solution: 'Cloud-native microservice architecture & DevOps auto-scaling' },
    { problem: 'Archaic, vulnerable legacy codebases and databases', solution: 'Fluid, secure modernizations with zero operational downtime' },
    { problem: 'Prohibitive AI research costs blocking smaller enterprises', solution: 'Modular, ultra-affordable APIs custom tailored for Indian SMEs' }
  ];

  const solutions = [
    { title: 'Enterprise AI Integration', desc: 'Tailored LLM deployment, vector database integration, and intelligent agent systems for internal business structures.', image: '/assets/images/media__1780125265724.png' },
    { title: 'Workflow Automation', desc: 'End-to-end process audits and software bot deployment to trigger workflows and remove manual tasks.', image: '/assets/images/media__1780125280228.png' },
    { title: 'Legacy Code Modernization', desc: 'Complete architecture migrations. Porting legacy VB6, ASP, or COBOL systems to React + Node + Cloud.', image: '/assets/images/media__1780124170147.png' },
    { title: 'Vertical SaaS Platforms', desc: 'Turnkey application models focused on specific niche industries like local medicine, recruiting, and commerce.', image: '/assets/images/media__1780125298979.png' },
    { title: 'Cloud DevOps Setup', desc: 'Kubernetes orchestration, serverless structures, and CI/CD pipelines configured for optimal scale.', image: '/assets/images/media__1780125325649.jpg' },
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
        <div className="hero-grid">
          <div className="hero-left">
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

          <div className="hero-right flex-center">
            <div className="automation-engine-container">
              <svg className="automation-engine-svg" viewBox="0 0 500 500" width="100%" height="100%">
                <defs>
                  {/* Linear & Radial Gradients for Neon Glows */}
                  <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
                    <stop offset="60%" stopColor="#D946EF" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="purple-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                  <linearGradient id="fuchsia-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D946EF" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                  <linearGradient id="emerald-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                  
                  {/* Glow Filters for Neon Effects */}
                  <filter id="neon-glow-indigo" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="neon-glow-fuchsia" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Ambient Glows */}
                <circle cx="250" cy="250" r="180" fill="url(#core-glow)" />

                {/* Flow Connection Lines (Glowing Dashed Paths) */}
                {/* Top-Left Widget Connector */}
                <path d="M 250,250 Q 150,180 90,110" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1.5" />
                <path d="M 250,250 Q 150,180 90,110" fill="none" stroke="#6366F1" strokeWidth="2" strokeDasharray="6 12" className="connector-flow-path" />

                {/* Top-Right Widget Connector */}
                <path d="M 250,250 Q 360,180 410,110" fill="none" stroke="rgba(217, 70, 239, 0.2)" strokeWidth="1.5" />
                <path d="M 250,250 Q 360,180 410,110" fill="none" stroke="#D946EF" strokeWidth="2" strokeDasharray="6 12" className="connector-flow-path-reverse" />

                {/* Bottom-Left Widget Connector */}
                <path d="M 250,250 Q 150,320 90,390" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1.5" />
                <path d="M 250,250 Q 150,320 90,390" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="6 12" className="connector-flow-path" />

                {/* Bottom-Right Widget Connector */}
                <path d="M 250,250 Q 350,320 410,390" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1.5" />
                <path d="M 250,250 Q 350,320 410,390" fill="none" stroke="#6366F1" strokeWidth="2" strokeDasharray="6 12" className="connector-flow-path-reverse" />

                {/* Concentric System Rings */}
                <circle cx="250" cy="250" r="140" fill="none" stroke="rgba(99, 102, 241, 0.12)" strokeWidth="1" />
                <circle cx="250" cy="250" r="140" fill="none" stroke="url(#purple-cyan)" strokeWidth="1.5" strokeDasharray="25 35 10 45" className="concentric-ring-cw" />
                
                <circle cx="250" cy="250" r="110" fill="none" stroke="rgba(217, 70, 239, 0.1)" strokeWidth="1" />
                <circle cx="250" cy="250" r="110" fill="none" stroke="url(#fuchsia-indigo)" strokeWidth="1.5" strokeDasharray="15 20 40 25" className="concentric-ring-ccw" />

                <circle cx="250" cy="250" r="80" fill="none" stroke="rgba(16, 185, 129, 0.08)" strokeWidth="1" />
                <circle cx="250" cy="250" r="80" fill="none" stroke="url(#emerald-glow)" strokeWidth="2" strokeDasharray="30 30" className="concentric-ring-cw-fast" />

                {/* Pulsing Core Chip */}
                <g className="pulsing-core-node">
                  <circle cx="250" cy="250" r="30" fill="#0D0E25" stroke="rgba(99, 102, 241, 0.6)" strokeWidth="2" filter="url(#neon-glow-indigo)" />
                  <rect x="238" y="238" width="24" height="24" rx="4" fill="url(#fuchsia-indigo)" className="core-chip-glow" />
                  {/* Circuit lines protruding from chip */}
                  <line x1="250" y1="220" x2="250" y2="230" stroke="#6366F1" strokeWidth="1.5" />
                  <line x1="250" y1="270" x2="250" y2="280" stroke="#6366F1" strokeWidth="1.5" />
                  <line x1="220" y1="250" x2="230" y2="250" stroke="#6366F1" strokeWidth="1.5" />
                  <line x1="270" y1="250" x2="280" y2="250" stroke="#6366F1" strokeWidth="1.5" />
                </g>

                {/* ==================== WIDGET 1: LIVE ANALYTICS ==================== */}
                <g className="drifting-widget-t1" style={{ transformOrigin: '90px 110px' }}>
                  {/* Widget Card Base (Glassmorphic) */}
                  <rect x="20" y="50" width="140" height="90" rx="10" fill="rgba(8, 12, 36, 0.85)" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1.5" filter="url(#neon-glow-indigo)" />
                  {/* Title Bar */}
                  <rect x="20" y="50" width="140" height="22" rx="10" fill="rgba(99, 102, 241, 0.15)" />
                  <circle cx="32" cy="61" r="3" fill="#ef4444" />
                  <circle cx="40" cy="61" r="3" fill="#f59e0b" />
                  <circle cx="48" cy="61" r="3" fill="#10b981" />
                  <text x="60" y="65" fill="#94A3B8" fontSize="8" fontFamily="var(--font-badge)" fontWeight="600" letterSpacing="0.05em">LIVE STATS</text>
                  
                  {/* Chart Graphic inside widget */}
                  <path d="M 35,115 L 55,100 L 75,110 L 95,85 L 115,95 L 135,75" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 35,115 L 55,100 L 75,110 L 95,85 L 115,95 L 135,75 L 135,120 L 35,120 Z" fill="url(#core-glow)" opacity="0.4" />
                  <circle cx="135" cy="75" r="3.5" fill="#10B981" className="pulsing-data-dot" />
                  <text x="35" y="130" fill="#64748B" fontSize="6" fontFamily="var(--font-badge)">09:00</text>
                  <text x="120" y="130" fill="#64748B" fontSize="6" fontFamily="var(--font-badge)">ACTIVE</text>
                </g>

                {/* ==================== WIDGET 2: WORKFORCE MATCH ==================== */}
                <g className="drifting-widget-t2" style={{ transformOrigin: '410px 110px' }}>
                  <rect x="340" y="50" width="130" height="90" rx="10" fill="rgba(8, 12, 36, 0.85)" stroke="rgba(217, 70, 239, 0.25)" strokeWidth="1.5" filter="url(#neon-glow-fuchsia)" />
                  <rect x="340" y="50" width="130" height="22" rx="10" fill="rgba(217, 70, 239, 0.15)" />
                  <text x="355" y="64" fill="#E2E8F0" fontSize="8" fontFamily="var(--font-badge)" fontWeight="700" letterSpacing="0.05em">AI RANKER</text>
                  
                  {/* Dial gauge */}
                  <circle cx="405" cy="102" r="22" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                  <circle cx="405" cy="102" r="22" fill="none" stroke="url(#fuchsia-indigo)" strokeWidth="4" strokeDasharray="100 138" strokeLinecap="round" className="gauge-meter-flow" />
                  <text x="405" y="106" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-badge)" fontWeight="800" textAnchor="middle">98%</text>
                  <text x="405" y="132" fill="#94A3B8" fontSize="6" fontFamily="var(--font-badge)" textAnchor="middle" letterSpacing="0.02em">TALENT ALIGNMENT</text>
                </g>

                {/* ==================== WIDGET 3: CLINIC ECG RADAR ==================== */}
                <g className="drifting-widget-t3" style={{ transformOrigin: '90px 390px' }}>
                  <rect x="25" y="340" width="135" height="90" rx="10" fill="rgba(8, 12, 36, 0.85)" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1.5" />
                  <rect x="25" y="340" width="135" height="22" rx="10" fill="rgba(16, 185, 129, 0.15)" />
                  <text x="40" y="354" fill="#10B981" fontSize="8" fontFamily="var(--font-badge)" fontWeight="700" letterSpacing="0.05em">EHR SYNC</text>
                  <circle cx="140" cy="351" r="3" fill="#10B981" className="core-chip-glow" />

                  {/* ECG Line vector */}
                  <path d="M 35,395 H 55 L 63,375 L 71,415 L 78,390 L 83,400 L 88,395 H 150" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ecg-radar-path" />
                  <text x="35" y="420" fill="#CBD5E1" fontSize="8" fontFamily="var(--font-body)" fontWeight="500">Normal Rhythm</text>
                </g>

                {/* ==================== WIDGET 4: API CODE SHELL ==================== */}
                <g className="drifting-widget-t4" style={{ transformOrigin: '410px 390px' }}>
                  <rect x="335" y="340" width="140" height="90" rx="10" fill="rgba(8, 12, 36, 0.85)" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1.5" />
                  <rect x="335" y="340" width="140" height="22" rx="10" fill="rgba(15, 23, 42, 0.5)" />
                  <circle cx="347" cy="351" r="3" fill="#94A3B8" />
                  <circle cx="355" cy="351" r="3" fill="#94A3B8" />
                  <text x="367" y="354" fill="#94A3B8" fontSize="7" fontFamily="monospace">sairexon_api.sh</text>

                  {/* Monospace Code Lines */}
                  <text x="345" y="380" fill="#F472B6" fontSize="6.5" fontFamily="monospace">POST <tspan fill="#38BDF8">/v1/modernize</tspan></text>
                  <text x="345" y="394" fill="#A78BFA" fontSize="6.5" fontFamily="monospace">{"{"} <tspan fill="#34D399">"sync"</tspan>: <tspan fill="#F59E0B">true</tspan> {"}"}</text>
                  <text x="345" y="408" fill="#10B981" fontSize="6.5" fontFamily="monospace">&gt;&gt; HTTP 200 OK [32ms]</text>
                  <line x1="432" y1="400" x2="432" y2="408" stroke="#6366F1" strokeWidth="1.5" className="api-cursor-blink" />
                </g>
              </svg>
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
              <div className="overview-icon-wrapper">{item.icon}</div>
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
          <div className="vision-globe glass-panel flex-center glowing-purple animate-float" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--border-glass)' }}>
            <div className="vision-image-wrapper" style={{ width: '100%', height: '100%', position: 'relative' }}>
              <img src="/assets/images/futuristic_indian_infrastructure.png" alt="Futuristic Indian Infrastructure" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} className="vision-img" />
              <div className="vision-overlay" style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.4) 60%, transparent 100%)', padding: '24px', textAlign: 'left' }}>
                <span className="badge cyan" style={{ marginBottom: '8px', fontSize: '0.68rem', display: 'inline-block' }}>Next-Gen Tech Grid</span>
                <h4 style={{ margin: '0', color: '#ffffff', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: '700', letterSpacing: '-0.02em', textTransform: 'none' }}>Futuristic Indian Infrastructure</h4>
                <p style={{ margin: '8px 0 0 0', color: '#CBD5E1', fontSize: '0.82rem', lineHeight: '1.4' }}>Deploying secure AI, SaaS pipelines, and digital node fabrics to Tier-2 and Tier-3 growing hubs.</p>
              </div>
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

        /* Hero Grid Overhaul */
        .hero-section {
          min-height: 95vh;
          padding: 120px 10% 80px 10%;
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at 50% 30%, rgba(var(--secondary-rgb), 0.1) 0%, transparent 60%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 50px;
          width: 100%;
          max-width: 1200px;
          z-index: 10;
          text-align: left;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-left h1 {
          font-size: 3.6rem;
          line-height: 1.12;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .hero-subtext {
          font-size: 1.15rem;
          color: var(--text-normal);
          line-height: 1.62;
          max-width: 700px;
          margin: 0 0 35px 0;
        }

        .hero-ctas {
          display: flex;
          gap: 20px;
          justify-content: flex-start;
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
          margin: 45px 0 0 0;
          padding: 20px 40px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-premium);
          gap: 20px;
          z-index: 10;
          position: relative;
          width: 100%;
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

        /* Hero Right: SVG Automation Engine */
        .hero-right {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 450px;
          z-index: 10;
        }

        .automation-engine-container {
          width: 100%;
          max-width: 480px;
          aspect-ratio: 1;
          position: relative;
        }

        .automation-engine-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        /* Concentric Ring Rotations */
        @keyframes spinCw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinCcw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .concentric-ring-cw {
          transform-origin: 250px 250px;
          animation: spinCw 30s linear infinite;
        }
        .concentric-ring-ccw {
          transform-origin: 250px 250px;
          animation: spinCcw 24s linear infinite;
        }
        .concentric-ring-cw-fast {
          transform-origin: 250px 250px;
          animation: spinCw 18s linear infinite;
        }

        /* Pulsing Core Chip */
        @keyframes pulseGlowCore {
          0%, 100% {
            transform: scale(1);
            opacity: 0.85;
            filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.4));
          }
          50% {
            transform: scale(1.06);
            opacity: 1;
            filter: drop-shadow(0 0 20px rgba(217, 70, 239, 0.7));
          }
        }
        .pulsing-core-node {
          transform-origin: 250px 250px;
          animation: pulseGlowCore 4s ease-in-out infinite;
        }
        .core-chip-glow {
          animation: pulseGlow 2s ease-in-out infinite alternate;
        }

        /* Connector Flow Dash Wires */
        @keyframes flowDash {
          to { stroke-dashoffset: -40; }
        }
        @keyframes flowDashReverse {
          to { stroke-dashoffset: 40; }
        }
        .connector-flow-path {
          animation: flowDash 1.5s linear infinite;
        }
        .connector-flow-path-reverse {
          animation: flowDashReverse 1.5s linear infinite;
        }

        /* Drifting Widget Panels */
        @keyframes driftW1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-8px) translateX(4px); }
        }
        @keyframes driftW2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(6px) translateX(-5px); }
        }
        @keyframes driftW3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-7px) translateX(-3px); }
        }
        @keyframes driftW4 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(8px) translateX(5px); }
        }

        .drifting-widget-t1 { animation: driftW1 6s ease-in-out infinite; transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; }
        .drifting-widget-t2 { animation: driftW2 7s ease-in-out infinite; transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; }
        .drifting-widget-t3 { animation: driftW3 6.5s ease-in-out infinite; transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; }
        .drifting-widget-t4 { animation: driftW4 7.5s ease-in-out infinite; transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; }

        .drifting-widget-t1:hover, .drifting-widget-t2:hover, .drifting-widget-t3:hover, .drifting-widget-t4:hover {
          transform: scale(1.04) !important;
        }

        .pulsing-data-dot {
          animation: pulseGlow 1.5s ease-in-out infinite alternate;
        }

        /* ECG Path simulation */
        @keyframes ecgDraw {
          0% { stroke-dashoffset: 160; }
          70% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }
        .ecg-radar-path {
          stroke-dasharray: 160;
          stroke-dashoffset: 160;
          animation: ecgDraw 3.5s ease-in-out infinite;
        }

        /* API Blink cursor */
        @keyframes cursorBlink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .api-cursor-blink {
          animation: cursorBlink 1s step-end infinite;
        }

        /* Company Overview Micro-Illustrations */
        .overview-icon-wrapper {
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 44px;
        }

        .overview-icon {
          width: 38px;
          height: 38px;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: transform 0.3s ease;
        }

        .overview-card:hover .overview-icon {
          transform: scale(1.1) translateY(-2px);
        }

        .overview-icon.text-indigo { color: var(--primary); }
        .overview-icon.text-fuchsia { color: var(--secondary); }
        .overview-icon.text-emerald { color: var(--accent); }
        .overview-icon.text-cyan { color: #06B6D4; }

        .flow-dash-line {
          stroke-dasharray: 4 4;
          animation: flowDashLine 2s linear infinite;
        }
        @keyframes flowDashLine {
          to { stroke-dashoffset: -8; }
        }

        .spin-gear {
          transform-origin: 15px 15px;
          animation: spinCw 12s linear infinite;
        }

        @keyframes drawPath {
          0% { stroke-dasharray: 60; stroke-dashoffset: 60; }
          60% { stroke-dasharray: 60; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 60; stroke-dashoffset: 0; }
        }
        .draw-flow-path {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: drawPath 3s ease-in-out infinite;
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
          position: relative;
          cursor: pointer;
        }

        .vision-globe:hover .vision-img {
          transform: scale(1.04);
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
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
            margin-top: 20px;
          }
          .hero-left {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-left h1 {
            font-size: 2.8rem;
            text-align: center;
          }
          .hero-subtext {
            margin: 0 auto 30px auto;
            text-align: center;
          }
          .hero-ctas {
            justify-content: center;
            width: 100%;
          }
          .hero-stats-ribbon {
            margin: 40px auto 0 auto;
          }
          .hero-right {
            min-height: 400px;
            display: flex;
            justify-content: center;
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
          .hero-left h1 {
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
          .hero-right {
            min-height: 320px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
