import React from 'react';
import { 
  FaShieldAlt, 
  FaChartLine, 
  FaHandsHelping, 
  FaSearchDollar, 
  FaRegClock, 
  FaRegArrowAltCircleRight 
} from 'react-icons/fa'; // Import icons

import './RiskManagement.css'; // Import the CSS for styling

const RiskManagement = () => {
  // Handling the button click to redirect to Setmore for consultation
  const handleRedirect = () => {
    window.open('https://www.setmore.com/', '_blank');
  };

  return (
    <div className="risk-management">
      <h2 className="page-heading">Effective <span className="highlight">Risk Management and Mitigation Strategies</span></h2>

      <p className="intro-text">
        Risk management is essential for long-term financial stability. This guide outlines how you can identify, assess, and mitigate financial risks in your personal or business finances.
      </p>

      <div className="steps">
        {/* Step 1: Identify Risks */}
        <div className="step-card">
          <FaShieldAlt className="step-icon" />
          <h3>Identify Risks</h3>
          <p>The first step in risk management is identifying potential risks. These can include financial, operational, and market risks. Understanding these risks will help you plan your mitigation strategies.</p>
        </div>

        {/* Step 2: Assess Impact and Likelihood */}
        <div className="step-card">
          <FaChartLine className="step-icon" />
          <h3>Assess Impact and Likelihood</h3>
          <p>Evaluate the potential impact of each risk and its likelihood. This will help you prioritize which risks need immediate attention and which ones can be monitored over time.</p>
        </div>

        {/* Step 3: Mitigation Strategies */}
        <div className="step-card">
          <FaHandsHelping className="step-icon" />
          <h3>Mitigation Strategies</h3>
          <p>Implement strategies to mitigate risks. This can include diversifying investments, purchasing insurance, creating emergency funds, or setting up contingency plans for unforeseen events.</p>
        </div>

        {/* Step 4: Monitor and Review */}
        <div className="step-card">
          <FaSearchDollar className="step-icon" />
          <h3>Monitor and Review</h3>
          <p>Once mitigation strategies are in place, it's crucial to continuously monitor the risks and review your strategies. Markets and situations change, and your approach may need adjustments.</p>
        </div>

        {/* Step 5: Risk Transfer */}
        <div className="step-card">
          <FaRegClock className="step-icon" />
          <h3>Risk Transfer</h3>
          <p>In some cases, transferring risk through insurance, contracts, or outsourcing may be the most effective solution. Consider options like liability insurance or hedging to transfer financial risks to other parties.</p>
        </div>

        {/* Step 6: Continuously Improve Strategies */}
        <div className="step-card">
          <FaRegArrowAltCircleRight className="step-icon" />
          <h3>Continuously Improve Strategies</h3>
          <p>Risk management should be a dynamic and ongoing process. Regularly revisit and refine your strategies to ensure you are always prepared for new challenges and changes in your financial environment.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <p className="cta-text">
          Ready to protect your financial future? Book a consultation with our risk management experts for tailored advice.
        </p>
        <button className="cta-button" onClick={handleRedirect}>
          Book a Consultant
        </button>
      </div>
    </div>
  );
};

export default RiskManagement;
