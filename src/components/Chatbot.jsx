import React, { useState, useEffect, useRef } from 'react';

const Chatbot = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am Rexon AI, your intelligent modernization assistant. How can I guide your transformation journey today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef(null);

  const quickChips = [
    { text: 'Book B2B Consultation', action: 'consultation' },
    { text: 'Explore SaaS Platforms', action: 'products' },
    { text: 'View Careers & Openings', action: 'careers' },
    { text: 'What is Job Guidance?', action: 'job-guidance-info' },
    { text: 'Core Enterprise Services', action: 'services-info' },
  ];

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isThinking]);

  const addMessage = (sender, text) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [...prev, { sender, text, time }]);
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('consult') || input.includes('book') || input.includes('schedule')) {
      return {
        text: "I can absolutely assist with booking. We provide comprehensive consultations to audit legacy frameworks and lay out an AI roadmap. I've activated our Consultation Booking form! You can submit details directly on the Consultation page.",
        redirect: 'consultation',
      };
    } else if (input.includes('product') || input.includes('saas') || input.includes('software')) {
      return {
        text: "SaiRexon builds specialized Vertical SaaS platforms! We provide systems for: Healthcare (Patient Care), Workforce (AI Hiring), and Commerce (Retail Analytics). Visit our Products page to try out our Live SaaS Sandbox!",
        redirect: 'products',
      };
    } else if (input.includes('career') || input.includes('job') || input.includes('hiring') || input.includes('apply')) {
      return {
        text: "We are actively recruiting! We seek AI engineers, SaaS specialists, and DevOps architects. Head over to our Careers page to view openings and submit your application.",
        redirect: 'careers',
      };
    } else if (input.includes('guidance') || input.includes('student') || input.includes('mentor')) {
      return {
        text: "Yes, our Workforce Ecosystem provides Job Guidance for students and job seekers! We provide resume grading, career roadmaps, technical mentoring, and placement drives. Explore the details on our Job Guidance page.",
        redirect: 'job-guidance',
      };
    } else if (input.includes('service') || input.includes('consulting') || input.includes('automation')) {
      return {
        text: "SaiRexon offers 6 Core Services: 1) AI Strategy Consulting, 2) Workflow Automation, 3) Legacy Modernization, 4) Custom SaaS Dev, 5) Cloud & DevOps Scaling, and 6) Enterprise Integration. Check out our Services page for details!",
        redirect: 'services',
      };
    } else {
      return {
        text: "SaiRexon Technologies is an AI-driven enterprise modernization company and Vertical SaaS provider. We empower SMEs and enterprises in Healthcare, Workforce, and Commerce to scale with intelligence. How can I help you navigate these solutions?",
      };
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    addMessage('user', userText);
    setInputMessage('');
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      const reply = getBotResponse(userText);
      addMessage('bot', reply.text);
      if (reply.redirect) {
        setTimeout(() => {
          setCurrentPage(reply.redirect);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
      }
    }, 1200);
  };

  const handleChipClick = (chip) => {
    addMessage('user', chip.text);
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      let responseText = '';
      let pageRedirect = null;

      switch (chip.action) {
        case 'consultation':
          responseText = "Redirecting you to our Consultation Booking page! There you can select slots on our calendar and outline your modernization hurdles.";
          pageRedirect = 'consultation';
          break;
        case 'products':
          responseText = "Opening the Products platform! Try our Live SaaS Sandbox at the top, or browse details for Clinic Management, Resume Screening, or Retail Intelligence.";
          pageRedirect = 'products';
          break;
        case 'careers':
          responseText = "Taking you to our Careers Hub. You can view departmental openings in Engineering, SaaS, or DevOps, and apply via our upload simulation!";
          pageRedirect = 'careers';
          break;
        case 'job-guidance-info':
          responseText = "Loading our Career & Mentorship board. We support job seekers and students with AI mentoring, assessment tools, and mock interviews!";
          pageRedirect = 'job-guidance';
          break;
        case 'services-info':
          responseText = "SaiRexon helps companies adapt with 6 key pillars: AI Integration, DevOps setups, Custom SaaS development, legacy codebase modernization, workflow automations, and strategy consulting.";
          pageRedirect = 'services';
          break;
        default:
          responseText = "I've routed your query! Let me know if there's anything else.";
      }

      addMessage('bot', responseText);
      if (pageRedirect) {
        setTimeout(() => {
          setCurrentPage(pageRedirect);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
      }
    }, 1000);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Launcher Bubble */}
      <button className={`chatbot-launcher ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Open AI Assistant">
        {isOpen ? (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <div className="launcher-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span className="pulse-dot"></span>
          </div>
        )}
      </button>

      {/* Main Chat Interface */}
      <div className={`chatbot-window glass-panel ${isOpen ? 'open' : ''}`}>
        {/* Chat Header */}
        <div className="chat-header">
          <div className="header-info">
            <div className="bot-avatar">
              <svg viewBox="0 0 100 100" width="24" height="24">
                <polygon points="50,15 90,80 10,80" stroke="var(--primary)" strokeWidth="8" fill="none" />
                <circle cx="50" cy="50" r="10" fill="var(--secondary)" />
              </svg>
            </div>
            <div>
              <h3>Rexon AI</h3>
              <div className="status-container">
                <span className="status-dot"></span>
                <span>Systems Concierge</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages-container">
          {messages.map((msg, index) => (
            <div key={index} className={`message-row ${msg.sender === 'user' ? 'user-row' : 'bot-row'}`}>
              {msg.sender === 'bot' && (
                <div className="msg-avatar">
                  <svg viewBox="0 0 100 100" width="16" height="16">
                    <polygon points="50,15 90,80 10,80" stroke="var(--primary)" strokeWidth="8" fill="none" />
                  </svg>
                </div>
              )}
              <div className="message-bubble">
                <p>{msg.text}</p>
                <span className="message-time">{msg.time}</span>
              </div>
            </div>
          ))}
          {isThinking && (
            <div className="message-row bot-row">
              <div className="msg-avatar">
                <svg viewBox="0 0 100 100" width="16" height="16">
                  <polygon points="50,15 90,80 10,80" stroke="var(--primary)" strokeWidth="8" fill="none" />
                </svg>
              </div>
              <div className="message-bubble thinking-bubble">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Action Chips */}
        <div className="chat-chips-container">
          {quickChips.map((chip, i) => (
            <button key={i} onClick={() => handleChipClick(chip)} className="chip-btn">
              {chip.text}
            </button>
          ))}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSendMessage} className="chat-input-form">
          <input
            type="text"
            placeholder="Ask Rexon AI anything..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="chat-input"
          />
          <button type="submit" className="chat-send-btn" aria-label="Send message">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>
      </div>

      <style>{`
        .chatbot-wrapper {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 99;
          font-family: var(--font-body);
        }

        /* Launcher Bubble */
        .chatbot-launcher {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--primary);
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(91, 33, 182, 0.25);
          transition: var(--transition-fast);
        }

        .chatbot-launcher:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 30px rgba(91, 33, 182, 0.35);
        }

        .chatbot-launcher.active {
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          color: var(--text-bright);
          box-shadow: var(--shadow-premium);
        }

        .launcher-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-dot {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 6px;
          height: 6px;
          background: var(--secondary);
          border-radius: 50%;
        }

        /* Chat Window */
        .chatbot-window {
          position: absolute;
          bottom: 66px;
          right: 0;
          width: 360px;
          height: 500px;
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-md);
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          pointer-events: none;
          transition: var(--transition-smooth);
          z-index: 100;
          border-color: var(--border-glass);
          background: #ffffff;
        }

        .chatbot-window.open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        /* Chat Header */
        .chat-header {
          background: var(--bg-deep);
          border-bottom: 1px solid var(--border-glass);
          padding: 14px 20px;
        }

        .header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bot-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          border-radius: 50%;
        }

        .header-info h3 {
          font-family: var(--font-badge);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-bright);
        }

        .status-container {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .status-dot {
          width: 5px;
          height: 5px;
          background-color: var(--secondary);
          border-radius: 50%;
          display: inline-block;
        }

        /* Chat messages */
        .chat-messages-container {
          flex-grow: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
          background: #ffffff;
        }

        .message-row {
          display: flex;
          gap: 10px;
          max-width: 85%;
        }

        .user-row {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .bot-row {
          align-self: flex-start;
        }

        .msg-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          background: var(--bg-deep);
          border: 1px solid var(--border-glass);
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .message-bubble {
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          line-height: 1.45;
          position: relative;
        }

        .user-row .message-bubble {
          background: var(--primary);
          color: #ffffff;
          border-top-right-radius: 0;
          box-shadow: 0 4px 12px rgba(91, 33, 182, 0.15);
        }

        .bot-row .message-bubble {
          background: var(--bg-deep);
          color: var(--text-normal);
          border-top-left-radius: 0;
          border: 1px solid var(--border-glass);
        }

        .message-time {
          font-size: 0.62rem;
          color: var(--text-muted);
          display: block;
          margin-top: 4px;
          text-align: right;
        }

        /* Thinking animation */
        .thinking-bubble {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 12px 16px;
        }

        .thinking-bubble .dot {
          width: 4px;
          height: 4px;
          background: var(--text-muted);
          border-radius: 50%;
          animation: floatElement 1.2s infinite ease-in-out;
        }

        .thinking-bubble .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .thinking-bubble .dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        /* Chips Container */
        .chat-chips-container {
          padding: 8px 16px;
          display: flex;
          gap: 8px;
          overflow-x: auto;
          white-space: nowrap;
          border-top: 1px solid var(--border-glass);
          background: var(--bg-deep);
        }

        .chat-chips-container::-webkit-scrollbar {
          height: 2px;
        }

        .chip-btn {
          padding: 5px 12px;
          background: #ffffff;
          border: 1px solid var(--border-glass);
          color: var(--text-normal);
          font-family: var(--font-badge);
          font-size: 0.72rem;
          border-radius: 50px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .chip-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(91, 33, 182, 0.02);
        }

        /* Input Form */
        .chat-input-form {
          display: flex;
          padding: 12px 16px;
          background: #ffffff;
          border-top: 1px solid var(--border-glass);
          gap: 8px;
        }

        .chat-input {
          flex-grow: 1;
          background: var(--bg-deep);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          color: var(--text-bright);
          font-size: 0.85rem;
          font-family: var(--font-body);
        }

        .chat-input:focus {
          outline: none;
          border-color: var(--primary);
          background: #ffffff;
        }

        .chat-send-btn {
          width: 34px;
          height: 34px;
          background: var(--primary);
          border: none;
          color: #ffffff;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
          box-shadow: 0 4px 10px rgba(91, 33, 182, 0.15);
        }

        .chat-send-btn:hover {
          background: hsl(263, 69%, 36%);
        }

        @media (max-width: 576px) {
          .chatbot-window {
            width: calc(100vw - 60px);
            right: 0;
            left: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
