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
} from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation
import './Advisor.css';

const Advisor = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleBooking = () => {
    window.open('https://calendly.com/', '_blank');
  };

  const handleRedirect = (page) => {
    navigate(page); // Navigate to the specific page
  };

  return (
    <div className="advisor-section">
      <h2 className="advisor-heading">How Can Our <span className='highlight'>Financial Advisor</span> Help You?</h2>

      <div className="advisor-services">
        {/* Income and Expense Planning Card - Clickable */}
        <div className="advisor-card" onClick={() => handleRedirect('/advisor-planning/income-expense-planning')}>
          <FaArrowUp className="advisor-icon" />
          <h3>Income and Expense Planning</h3>
          <p>Effectively manage your income and expenses to achieve lasting financial stability.</p>
        </div>

        {/* Investment Planning Card */}
        <div className="advisor-card" onClick={() => handleRedirect('/advisor-planning/investment-planning')}>
          <FaRupeeSign className="advisor-icon" />
          <h3>Investment Planning</h3>
          <p>Analyse and optimise your investments for better returns and long-term growth.</p>
        </div>

        {/* Insurance Planning Card */}
        <div className="advisor-card" onClick={() => handleRedirect('/advisor-planning/insurance-planning')}>
          <FaUmbrella className="advisor-icon" />
          <h3>Insurance Planning</h3>
          <p>Evaluate your insurance policies and identify the mortality protection gap in your insurance portfolio with qualified advisory.</p>
        </div>

        {/* Income Tax Planning Card */}
        <div className="advisor-card" onClick={() => handleRedirect('/advisor-planning/income-tax-planning')}>
          <FaCompass className="advisor-icon" />
          <h3>Income Tax Planning</h3>
          <p>Reduce your tax liabilities by strategically planning your taxes.</p>
        </div>

        {/* Loan Planning Card */}
        <div className="advisor-card" onClick={() => handleRedirect('/advisor-planning/loan-planning')}>
          <FaFileInvoice className="advisor-icon" />
          <h3>Loan Planning</h3>
          <p>Effectively manage and reduce your loans and debts for improved financial health.</p>
        </div>

        {/* Will & Estate Planning Card */}
        <div className="advisor-card" onClick={() => handleRedirect('/advisor-planning/will-estate-planning')}>
          <FaFileSignature className="advisor-icon" />
          <h3>Will & Estate Planning</h3>
          <p>Secure your legacy and ensure your assets are distributed as per your wishes.</p>
        </div>

        {/* Risk Management Card */}
        <div className="advisor-card" onClick={() => handleRedirect('/advisor-planning/risk-management')}>
          <FaBalanceScale className="advisor-icon" />
          <h3>Risk Management</h3>
          <p>Identify and mitigate risks associated with your personal or business finances.</p>
        </div>

        {/* Savings Planning Card */}
        <div className="advisor-card" onClick={() => handleRedirect('/advisor-planning/savings-planning')}>
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
        <button className="cta-button" onClick={handleBooking}>
          Book an appointment
        </button>
      </div>
    </div>
  );
};

export default Advisor;
