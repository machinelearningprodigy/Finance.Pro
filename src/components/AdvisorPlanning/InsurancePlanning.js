import React from 'react';
import { 
  FaShieldAlt, 
  FaRegClock, 
  FaBriefcase, 
  FaFileContract, 
  FaShieldVirus, 
  FaSearch 
} from 'react-icons/fa'; // Import new icons

import './InsurancePlanning.css'; // Import corresponding CSS file

const InsurancePlanning = () => {
  return (
    <div className="insurance-planning">
      <h2 className="page-heading">Comprehensive <span className="highlight">Insurance Planning</span></h2>

      <p className="intro-text">Learn the steps to protect yourself and your loved ones with the right insurance coverage. Start your planning today!</p>

      <div className="steps">
        {/* Step 1: Assessing Needs */}
        <div className="step-card">
          <FaShieldAlt className="step-icon" />
          <h3>Assess Your Needs</h3>
          <p>Identify the types of insurance coverage you need by evaluating your financial situation, family needs, and potential risks.</p>
        </div>

        {/* Step 2: Understanding Insurance Options */}
        <div className="step-card">
          <FaRegClock className="step-icon" />
          <h3>Understand Your Options</h3>
          <p>Explore various types of insurance products, such as life, health, auto, and property insurance, and understand their coverage and benefits.</p>
        </div>

        {/* Step 3: Comparing Policies */}
        <div className="step-card">
          <FaBriefcase className="step-icon" />
          <h3>Compare Insurance Policies</h3>
          <p>Compare different policies from various providers to find the best coverage at the most affordable rates that suit your needs.</p>
        </div>

        {/* Step 4: Understanding Terms */}
        <div className="step-card">
          <FaFileContract className="step-icon" />
          <h3>Understand the Terms</h3>
          <p>Read and understand the fine print of your insurance contracts, including terms, exclusions, and any clauses related to claim processes.</p>
        </div>

        {/* Step 5: Health Insurance */}
        <div className="step-card">
          <FaShieldVirus className="step-icon" />
          <h3>Health Insurance Planning</h3>
          <p>Consider your health insurance needs and decide between individual plans or family coverage to ensure long-term medical protection.</p>
        </div>

        {/* Step 6: Plan Review and Updates */}
        <div className="step-card">
          <FaSearch className="step-icon" />
          <h3>Review and Update</h3>
          <p>Regularly review and update your insurance plans based on life changes, such as marriage, children, or career changes, to ensure optimal coverage.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <p className="cta-text">
          Need help planning your insurance? Book a consultation with our expert insurance planners and get personalized advice today.
        </p>
        <button className="cta-button" onClick={() => window.open('https://www.setmore.com/', '_blank')}>
          Book a Consultant
        </button>
      </div>
    </div>
  );
};

export default InsurancePlanning;
