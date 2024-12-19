import React from 'react';
import { 
  FaPiggyBank, 
  FaChartBar, 
  FaMoneyBillAlt, 
  FaRegCalendarAlt, 
  FaTrophy, 
  FaCoins 
} from 'react-icons/fa'; // Import icons

import './SavingsPlanning.css'; // Import the CSS for styling

const SavingsPlanning = () => {
  // Handling the button click to redirect to Setmore for consultation
  const handleRedirect = () => {
    window.open('https://www.setmore.com/', '_blank');
  };

  return (
    <div className="savings-planning">
      <h2 className="page-heading">Master Your <span className="highlight">Savings Planning</span></h2>

      <p className="intro-text">
        Creating a well-structured savings plan is the foundation for a secure financial future. This guide helps you understand how to prioritize your savings goals and achieve them.
      </p>

      <div className="steps">
        {/* Step 1: Set Clear Savings Goals */}
        <div className="step-card">
          <FaPiggyBank className="step-icon" />
          <h3>Set Clear Savings Goals</h3>
          <p>The first step in savings planning is to define your goals. Whether it's saving for a vacation, buying a house, or building an emergency fund, knowing your goals will help you stay motivated.</p>
        </div>

        {/* Step 2: Create a Budget */}
        <div className="step-card">
          <FaChartBar className="step-icon" />
          <h3>Create a Budget</h3>
          <p>A budget helps you track your income and expenses. It enables you to allocate a portion of your earnings toward savings. Make sure to account for both fixed and variable expenses when creating your budget.</p>
        </div>

        {/* Step 3: Automate Your Savings */}
        <div className="step-card">
          <FaMoneyBillAlt className="step-icon" />
          <h3>Automate Your Savings</h3>
          <p>Automating your savings ensures that a portion of your income is directly transferred to your savings account. Set up automatic transfers to make saving easier and consistent.</p>
        </div>

        {/* Step 4: Start with an Emergency Fund */}
        <div className="step-card">
          <FaRegCalendarAlt className="step-icon" />
          <h3>Start with an Emergency Fund</h3>
          <p>An emergency fund is essential for handling unexpected expenses. Ideally, aim to save 3-6 months' worth of living expenses to provide financial security in case of emergencies.</p>
        </div>

        {/* Step 5: Review and Adjust */}
        <div className="step-card">
          <FaTrophy className="step-icon" />
          <h3>Review and Adjust</h3>
          <p>Review your savings plan regularly. Adjust your budget and goals based on changes in your income, lifestyle, or financial priorities. Ensure you stay on track with your savings goals.</p>
        </div>

        {/* Step 6: Invest Your Savings */}
        <div className="step-card">
          <FaCoins className="step-icon" />
          <h3>Invest Your Savings</h3>
          <p>Once you have built a solid savings foundation, consider investing your savings to grow your wealth. Explore options such as mutual funds, stocks, or bonds depending on your risk tolerance and financial goals.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <p className="cta-text">
          Ready to start saving for your future? Book a consultation with our experts for personalized advice on planning your savings.
        </p>
        <button className="cta-button" onClick={handleRedirect}>
          Book a Consultant
        </button>
      </div>
    </div>
  );
};

export default SavingsPlanning;
