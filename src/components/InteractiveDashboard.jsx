import React, { useState } from 'react';

const InteractiveDashboard = () => {
  const [activeTab, setActiveTab] = useState('recruitment');
  
  // Recruitment states
  const [scanning, setScanning] = useState(false);
  const [scannedResult, setScannedResult] = useState(null);
  
  // Healthcare states
  const [selectedSymptom, setSelectedSymptom] = useState('general');
  const [diagnosing, setDiagnosing] = useState(false);
  const [diagResult, setDiagResult] = useState(null);

  // Commerce states
  const [selectedStore, setSelectedStore] = useState('store-a');
  const [predicting, setPredicting] = useState(false);
  const [predictionData, setPredictionData] = useState(null);

  // Resume options
  const dummyResumes = {
    arjun: {
      name: "Arjun Sharma",
      skills: ["AWS Cloud", "Node.js", "Kubernetes", "Docker", "Go", "Architecture Design"],
      matchScore: "94%",
      summary: "High-grade alignment for Senior Cloud Architect. Excellent microservices footprint. Automated recommendation: Proceed to immediate technical interview."
    },
    priya: {
      name: "Priya Nair",
      skills: ["Python", "PyTorch", "NLP", "LLM Fine-tuning", "Vector Databases", "MLOps"],
      matchScore: "97%",
      summary: "Flawless technical index for Generative AI Engineer. Active research profiles detected. Automated recommendation: Fast-track to Director Panel."
    }
  };

  const handleScanResume = (profileKey) => {
    setScanning(true);
    setScannedResult(null);
    setTimeout(() => {
      setScanning(false);
      setScannedResult(dummyResumes[profileKey]);
    }, 1800);
  };

  const handleHealthcareDiag = (symptom) => {
    setDiagnosing(true);
    setDiagResult(null);
    setSelectedSymptom(symptom);

    setTimeout(() => {
      setDiagnosing(false);
      const results = {
        cardio: {
          risk: "Moderate",
          metric: "82% Heart Rate Variance Index",
          plan: "Optimize patient contact channels. Automate automated SMS follow-up schedules. Flag clinical team for behavioral check-in on sleep variables."
        },
        neuro: {
          risk: "Low",
          metric: "94% Neural Synchrony Match",
          plan: "Automated digital mental wellness assessment recommended. Queue standard clinical checklist. Scheduling active virtual check-in."
        },
        general: {
          risk: "Healthy",
          metric: "98% General Vitality Score",
          plan: "Preventative care path active. Standard portal message dispatch. Schedule biannual checkup slot automatically."
        }
      };
      setDiagResult(results[symptom]);
    }, 1500);
  };

  const handleCommercePredict = (store) => {
    setPredicting(true);
    setPredictionData(null);
    setSelectedStore(store);

    setTimeout(() => {
      setPredicting(false);
      const results = {
        'store-a': {
          peakHour: "6:00 PM - 8:00 PM",
          footfall: "+45% Projected Demand Spikes",
          action: "Automatically dispatch dynamic inventory alerts. Relocate 2 floor supervisors. Trigger AI pricing optimizations on grocery excess stocks."
        },
        'store-b': {
          peakHour: "12:00 PM - 2:00 PM",
          footfall: "+28% Projected Lunch Spikes",
          action: "Optimize active queue managers. Release targeted mobile app push notifications. Cross-merchandise beverage packages."
        }
      };
      setPredictionData(results[store]);
    }, 1200);
  };

  return (
    <div className="sandbox-card glass-panel glowing-cyan">
      <div className="sandbox-header">
        <span className="badge cyan">Interactive Sandbox</span>
        <h2>Try SaiRexon SaaS Technology Live</h2>
        <p className="sandbox-subtitle">Interact with our active AI systems to experience real-time modernization output.</p>
        
        {/* Navigation Selector */}
        <div className="sandbox-tabs">
          <button className={`sandbox-tab-btn ${activeTab === 'recruitment' ? 'active' : ''}`} onClick={() => setActiveTab('recruitment')}>
            Workforce AI Hiring
          </button>
          <button className={`sandbox-tab-btn ${activeTab === 'healthcare' ? 'active' : ''}`} onClick={() => setActiveTab('healthcare')}>
            Healthcare Consulting
          </button>
          <button className={`sandbox-tab-btn ${activeTab === 'commerce' ? 'active' : ''}`} onClick={() => setActiveTab('commerce')}>
            Commerce Analytics
          </button>
        </div>
      </div>

      <div className="sandbox-body">
        {/* Workforce Tab */}
        {activeTab === 'recruitment' && (
          <div className="sandbox-content animate-fade-in">
            <div className="control-panel">
              <h3>AI Resume Screener</h3>
              <p>Simulate screening applicant resumes using our vector parsing modules.</p>
              
              <div className="btn-group">
                <button disabled={scanning} onClick={() => handleScanResume('arjun')} className="btn-secondary">
                  Scan Arjun's Resume (Cloud Architect)
                </button>
                <button disabled={scanning} onClick={() => handleScanResume('priya')} className="btn-secondary">
                  Scan Priya's Resume (AI Engineer)
                </button>
              </div>
            </div>

            <div className="display-panel glass-panel">
              {scanning && (
                <div className="sandbox-loader-container">
                  <div className="scanning-radar"></div>
                  <p className="pulse-text">Parsing PDF Vector Matrix... Extracting Skills...</p>
                </div>
              )}
              {!scanning && !scannedResult && (
                <div className="placeholder-text">
                  <p>Select an applicant profile from the left to trigger the automated AI parser.</p>
                </div>
              )}
              {!scanning && scannedResult && (
                <div className="result-container animate-fade-in">
                  <div className="result-header">
                    <h4>{scannedResult.name}</h4>
                    <span className="match-score">{scannedResult.matchScore} Fit Score</span>
                  </div>
                  <div className="skills-grid">
                    {scannedResult.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <div className="result-summary">
                    <h5>SaiRexon AI Engine Assessment:</h5>
                    <p>{scannedResult.summary}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Healthcare Tab */}
        {activeTab === 'healthcare' && (
          <div className="sandbox-content animate-fade-in">
            <div className="control-panel">
              <h3>Behavioral Clinic Manager</h3>
              <p>Test clinic intelligence triggers. Generate bio-assessments and clinical patient plans.</p>
              
              <div className="symptom-select-grid">
                <button disabled={diagnosing} onClick={() => handleHealthcareDiag('cardio')} className={`select-btn ${selectedSymptom === 'cardio' ? 'active' : ''}`}>
                  Cardiovascular Rhythm
                </button>
                <button disabled={diagnosing} onClick={() => handleHealthcareDiag('neuro')} className={`select-btn ${selectedSymptom === 'neuro' ? 'active' : ''}`}>
                  Neurological Sync
                </button>
                <button disabled={diagnosing} onClick={() => handleHealthcareDiag('general')} className={`select-btn ${selectedSymptom === 'general' ? 'active' : ''}`}>
                  General Wellness
                </button>
              </div>
            </div>

            <div className="display-panel glass-panel">
              {diagnosing && (
                <div className="sandbox-loader-container">
                  <div className="heartbeat-pulse"></div>
                  <p className="pulse-text">Compiling EHR logs... Correlating Vitals...</p>
                </div>
              )}
              {!diagnosing && !diagResult && (
                <div className="placeholder-text">
                  <p>Click a clinical subsystem on the left to run our clinic-intelligence model.</p>
                </div>
              )}
              {!diagnosing && diagResult && (
                <div className="result-container animate-fade-in">
                  <div className="result-header">
                    <h4>Clinical Assessment Reports</h4>
                    <span className={`risk-tag ${diagResult.risk.toLowerCase()}`}>{diagResult.risk} Risk</span>
                  </div>
                  <p className="vital-metric"><strong>Biometric Readout:</strong> {diagResult.metric}</p>
                  <div className="result-summary">
                    <h5>Automated Clinical Engagement Pathway:</h5>
                    <p>{diagResult.plan}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Commerce Tab */}
        {activeTab === 'commerce' && (
          <div className="sandbox-content animate-fade-in">
            <div className="control-panel">
              <h3>Retail Stock Predictor</h3>
              <p>Predict peak customer loads for local stores and optimize inventory reserves.</p>
              
              <div className="btn-group">
                <button disabled={predicting} onClick={() => handleCommercePredict('store-a')} className={`select-btn ${selectedStore === 'store-a' ? 'active' : ''}`}>
                  Analyze Mumbai Flagship (Store A)
                </button>
                <button disabled={predicting} onClick={() => handleCommercePredict('store-b')} className={`select-btn ${selectedStore === 'store-b' ? 'active' : ''}`}>
                  Analyze Bengaluru Node (Store B)
                </button>
              </div>
            </div>

            <div className="display-panel glass-panel">
              {predicting && (
                <div className="sandbox-loader-container">
                  <div className="chart-bar-loader">
                    <span></span><span></span><span></span>
                  </div>
                  <p className="pulse-text">Correlating localized footfall data... Predicting stock indices...</p>
                </div>
              )}
              {!predicting && !predictionData && (
                <div className="placeholder-text">
                  <p>Select a retail node on the left to trigger real-time AI inventory optimization charts.</p>
                </div>
              )}
              {!predicting && predictionData && (
                <div className="result-container animate-fade-in">
                  <div className="result-header">
                    <h4>Retail Forecasting Insights</h4>
                    <span className="peak-hour">{predictionData.peakHour} Peak</span>
                  </div>
                  <p className="vital-metric"><strong>Footfall Shift:</strong> {predictionData.footfall}</p>
                  
                  {/* Custom CSS Chart Graphic */}
                  <div className="bar-chart-graphic">
                    <div className="bar-column"><div className="bar" style={{height: '40%'}}></div><span>9 AM</span></div>
                    <div className="bar-column"><div className="bar highlight" style={{height: selectedStore === 'store-a' ? '50%' : '90%'}}></div><span>1 PM</span></div>
                    <div className="bar-column"><div className="bar" style={{height: '60%'}}></div><span>4 PM</span></div>
                    <div className="bar-column"><div className="bar highlight" style={{height: selectedStore === 'store-a' ? '95%' : '45%'}}></div><span>7 PM</span></div>
                  </div>

                  <div className="result-summary">
                    <h5>Dynamic Dispatch Action:</h5>
                    <p>{predictionData.action}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .sandbox-card {
          padding: 40px;
          margin-top: 40px;
          width: 100%;
        }

        .sandbox-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .sandbox-header h2 {
          font-size: 2.2rem;
          margin: 10px 0;
        }

        .sandbox-subtitle {
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto 30px auto;
        }

        /* Tabs bar */
        .sandbox-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 2px;
          max-width: 550px;
          margin: 0 auto;
        }

        .sandbox-tab-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          padding: 10px 20px;
          font-family: var(--font-header);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition-fast);
          position: relative;
        }

        .sandbox-tab-btn:hover {
          color: var(--primary);
        }

        .sandbox-tab-btn.active {
          color: var(--primary);
        }

        .sandbox-tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
          box-shadow: 0 0 8px var(--primary);
        }

        /* Sandbox Body Layout */
        .sandbox-body {
          margin-top: 20px;
          min-height: 350px;
        }

        .sandbox-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: stretch;
        }

        .control-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }

        .control-panel h3 {
          font-size: 1.4rem;
          color: var(--primary);
        }

        .control-panel p {
          color: var(--text-normal);
          font-size: 0.95rem;
        }

        .btn-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .symptom-select-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .select-btn {
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          color: var(--text-normal);
          text-align: left;
          font-family: var(--font-header);
          font-weight: 500;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .select-btn:hover, .select-btn.active {
          border-color: var(--primary);
          background: rgba(0, 240, 255, 0.06);
          color: var(--primary);
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.1);
        }

        /* Display Panel Layout */
        .display-panel {
          min-height: 280px;
          padding: 30px;
          background: rgba(3, 7, 18, 0.4);
          border-color: rgba(255, 255, 255, 0.04);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .placeholder-text {
          text-align: center;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .sandbox-loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          text-align: center;
        }

        .pulse-text {
          font-size: 0.9rem;
          color: var(--primary);
          animation: pulseGlow 1.5s infinite;
        }

        /* Custom Loaders */
        .scanning-radar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid var(--primary);
          border-top-color: transparent;
          animation: spin 1s linear infinite;
        }

        .heartbeat-pulse {
          width: 60px;
          height: 40px;
          border-bottom: 2px dashed var(--accent);
          position: relative;
          animation: pulseGlow 1s infinite alternate;
        }

        .chart-bar-loader {
          display: flex;
          gap: 6px;
        }

        .chart-bar-loader span {
          width: 8px;
          height: 30px;
          background: var(--primary);
          animation: barGlow 0.8s infinite alternate;
        }

        .chart-bar-loader span:nth-child(2) { animation-delay: 0.2s; }
        .chart-bar-loader span:nth-child(3) { animation-delay: 0.4s; }

        /* Results Display */
        .result-container {
          width: 100%;
        }

        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 10px;
        }

        .result-header h4 {
          font-size: 1.3rem;
          color: var(--text-bright);
        }

        .match-score, .peak-hour {
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--primary);
          text-shadow: 0 0 6px var(--primary);
        }

        .risk-tag {
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 4px;
        }

        .risk-tag.healthy { background: rgba(0, 240, 255, 0.1); color: var(--primary); }
        .risk-tag.moderate { background: rgba(255, 107, 0, 0.1); color: var(--accent); }
        .risk-tag.low { background: rgba(59, 130, 246, 0.1); color: var(--secondary); }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .skill-tag {
          font-size: 0.8rem;
          padding: 4px 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          color: var(--text-normal);
        }

        .vital-metric {
          font-size: 0.95rem;
          margin-bottom: 14px;
        }

        .result-summary {
          background: rgba(255,255,255,0.02);
          border-left: 3px solid var(--accent);
          padding: 14px;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .result-summary h5 {
          font-size: 0.9rem;
          color: var(--accent);
          margin-bottom: 6px;
        }

        .result-summary p {
          font-size: 0.88rem;
          line-height: 1.5;
          margin-bottom: 0;
        }

        /* Chart Graphic styling */
        .bar-chart-graphic {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          height: 100px;
          margin: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 4px;
        }

        .bar-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 40px;
        }

        .bar {
          width: 20px;
          background: rgba(255,255,255,0.1);
          border-radius: 4px 4px 0 0;
          transition: all 0.6s ease;
        }

        .bar.highlight {
          background: linear-gradient(to top, var(--secondary), var(--primary));
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
        }

        .bar-column span {
          font-size: 0.7rem;
          margin-top: 4px;
          color: var(--text-muted);
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes barGlow {
          from { height: 10px; opacity: 0.5; }
          to { height: 40px; opacity: 1; }
        }

        @media (max-width: 992px) {
          .sandbox-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveDashboard;
