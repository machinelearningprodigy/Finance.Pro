import React from 'react';
import { 
  FaArrowUp, 
  FaRupeeSign, 
  FaUmbrella, 
  FaCompass, 
  FaFileInvoice, 
  FaFileSignature, 
  FaBalanceScale, 
  FaPiggyBank 
} from 'react-icons/fa'; // Added new icons
import './Advisor.css';

const Advisor = () => {
  return (
    <div className="advisor-section">
      <h2 className="advisor-heading">How Can Our <span className='highlight'>Financial Advisor</span>  Help You?</h2>

      <div className="advisor-services">
        {/* Service Cards */}
        <div className="advisor-card">
          <FaArrowUp className="advisor-icon" />
          <h3>Income and Expense Planning</h3>
          <p>Effectively manage your income and expenses to achieve lasting financial stability.</p>
        </div>

        <div className="advisor-card">
          <FaRupeeSign className="advisor-icon" />
          <h3>Investment Planning</h3>
          <p>Analyse and optimise your investments for better returns and long-term growth.</p>
        </div>

        <div className="advisor-card">
          <FaUmbrella className="advisor-icon" />
          <h3>Insurance Planning</h3>
          <p>Evaluate your insurance policies and identify the mortality protection gap in your insurance portfolio with qualified advisory.</p>
        </div>

        <div className="advisor-card">
          <FaCompass className="advisor-icon" />
          <h3>Income Tax Planning</h3>
          <p>Reduce your tax liabilities by strategically planning your taxes.</p>
        </div>

        <div className="advisor-card">
          <FaFileInvoice className="advisor-icon" />
          <h3>Loan Planning</h3>
          <p>Effectively manage and reduce your loans and debts for improved financial health.</p>
        </div>

        <div className="advisor-card">
          <FaFileSignature className="advisor-icon" />
          <h3>Will & Estate Planning</h3>
          <p>Secure your legacy and ensure your assets are distributed as per your wishes.</p>
        </div>

        {/* Additional Service Cards */}
        <div className="advisor-card">
          <FaBalanceScale className="advisor-icon" />
          <h3>Risk Management</h3>
          <p>Identify and mitigate risks associated with your personal or business finances.</p>
        </div>

        <div className="advisor-card">
          <FaPiggyBank className="advisor-icon" />
          <h3>Savings Planning</h3>
          <p>Plan and save effectively to build a financially secure future for you and your family.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="advisor-cta">
        <div className="cta-text">
          <h3>Get your 1st financial plan for FREE</h3>
          <p>Also, save on commissions for your existing investments and insurance.</p>
        </div>
        <button className="cta-button">
          Book an appointment
        </button>
      </div>
    </div>
  );
};

export default Advisor;
