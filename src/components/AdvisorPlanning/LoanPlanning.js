import React from 'react';
import { FaMoneyBillAlt, FaCreditCard, FaCalculator, FaChartBar, FaRegCreditCard } from 'react-icons/fa';
import './LoanPlanning.css';

const LoanPlanning = () => {

  return (
    <div className="loan-planning">
      <h2 className="page-heading">
        <span className="black-text">Loan Planning For </span> 
        <span className="green-text">Managing Your Debt</span>
      </h2>

      {/* Introduction */}
      <div className="intro-text">
        <p>Loan planning is essential to secure the right financing for your needs and ensure that you manage debt effectively. Whether you're taking out a personal loan, mortgage, or car loan, planning can help you avoid excessive debt and make repayments manageable.</p>
      </div>

      {/* Steps for Loan Planning */}
      <div className="steps">
        {/* Step 1: Understand Your Loan Needs */}
        <div className="step-card">
          <FaMoneyBillAlt className="step-icon" />
          <h3>Understand Your Loan Needs</h3>
          <p>Before taking out a loan, assess why you need the loan, how much you need, and whether you can afford the repayments. This will help you choose the right type of loan.</p>
        </div>

        {/* Step 2: Know Your Credit Score */}
        <div className="step-card">
          <FaCreditCard className="step-icon" />
          <h3>Know Your Credit Score</h3>
          <p>Your credit score will affect the interest rate and terms of your loan. Check your credit score and improve it if necessary before applying for a loan.</p>
        </div>

        {/* Step 3: Shop for the Best Loan */}
        <div className="step-card">
          <FaCalculator className="step-icon" />
          <h3>Shop for the Best Loan</h3>
          <p>Compare interest rates, terms, and fees from various lenders. Look for a loan that suits your financial situation and offers the best repayment terms.</p>
        </div>

        {/* Step 4: Calculate Loan Repayments */}
        <div className="step-card">
          <FaChartBar className="step-icon" />
          <h3>Calculate Loan Repayments</h3>
          <p>Use loan calculators to estimate your monthly repayments. Make sure the repayment amount fits within your budget to avoid financial strain.</p>
        </div>

        {/* Step 5: Manage Your Debt */}
        <div className="step-card">
          <FaRegCreditCard className="step-icon" />
          <h3>Manage Your Debt</h3>
          <p>Once you have taken out the loan, ensure you make timely repayments. Create a budget, set reminders, and consider debt consolidation if necessary to keep track of multiple loans.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <div className="cta-text">
          <h3>Ready to Plan Your Loan?</h3>
          <p>Consult with a financial advisor to get expert advice on taking out and managing loans effectively.</p>
        </div>
        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Book an Appointment</button>
        </a>
      </div>
    </div>
  );
};

export default LoanPlanning;
