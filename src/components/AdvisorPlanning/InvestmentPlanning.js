import React from 'react';
import { FaArrowUp, FaRupeeSign, FaPiggyBank, FaChartLine, FaHandshake } from 'react-icons/fa'; 
import './InvestmentPlanning.css';

const InvestmentPlanning = () => {

  return (
    <div className="investment-planning">
      <h2 className="page-heading">
        <span className="black-text">Investment Planning For Your</span> 
        <span className="green-text"> Financial Future</span>
      </h2>

      {/* Introduction */}
      <div className="intro-text">
        <p>Effective investment planning is a key to building long-term wealth and securing your financial future. Follow a structured approach to understand, plan, and track your investments.</p>
      </div>

      {/* Steps for Investment Planning */}
      <div className="steps">
        {/* Step 1: Understand Your Financial Goals */}
        <div className="step-card">
          <FaArrowUp className="step-icon" />
          <h3>Understand Your Financial Goals</h3>
          <p>Before making any investments, understand what your financial goals are, whether it's buying a home, saving for retirement, or building wealth.</p>
        </div>

        {/* Step 2: Assess Your Risk Tolerance */}
        <div className="step-card">
          <FaRupeeSign className="step-icon" />
          <h3>Assess Your Risk Tolerance</h3>
          <p>Determine how much risk you are willing to take with your investments based on your goals, age, and financial situation.</p>
        </div>

        {/* Step 3: Diversify Your Investments */}
        <div className="step-card">
          <FaPiggyBank className="step-icon" />
          <h3>Diversify Your Investments</h3>
          <p>Spread your investments across different asset classes like stocks, bonds, real estate, and mutual funds to mitigate risk.</p>
        </div>

        {/* Step 4: Track Your Investment Performance */}
        <div className="step-card">
          <FaChartLine className="step-icon" />
          <h3>Track Your Investment Performance</h3>
          <p>Regularly review your investment portfolio to ensure it is aligned with your financial goals and make adjustments if necessary.</p>
        </div>

        {/* Step 5: Seek Professional Advice */}
        <div className="step-card">
          <FaHandshake className="step-icon" />
          <h3>Seek Professional Advice</h3>
          <p>Consult with a financial advisor to ensure that you are on the right track with your investment strategy and tax planning.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <div className="cta-text">
          <h3>Ready to Start Investing?</h3>
          <p>Book an appointment with one of our expert financial advisors today!</p>
        </div>
        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Book an Appointment</button>
        </a>
      </div>
    </div>
  );
};

export default InvestmentPlanning;
