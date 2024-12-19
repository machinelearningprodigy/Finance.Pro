import React from 'react';
import { 
  FaCalendarAlt, 
  FaClipboardList, 
  FaDollarSign, 
  FaChartLine, 
  FaCashRegister, 
  FaQuestionCircle 
} from 'react-icons/fa'; // Import new icons

import './IncomeTaxPlanning.css'; // Import corresponding CSS file

const IncomeTaxPlanning = () => {
  return (
    <div className="income-tax-planning">
      <h2 className="page-heading">Effective <span className="highlight">Income Tax Planning</span></h2>

      <p className="intro-text">Learn how to minimize your tax liabilities through strategic tax planning. Follow the steps below to plan your taxes effectively!</p>

      <div className="steps">
        {/* Step 1: Understand Your Income */}
        <div className="step-card">
          <FaCalendarAlt className="step-icon" />
          <h3>Understand Your Income</h3>
          <p>Start by analyzing your income sources, including salary, business profits, interest income, and other earnings. This helps in understanding your total taxable income.</p>
        </div>

        {/* Step 2: List Deductions */}
        <div className="step-card">
          <FaClipboardList className="step-icon" />
          <h3>List Available Deductions</h3>
          <p>Identify deductions available under sections like 80C, 80D, and 80G. This will help reduce your taxable income and maximize your tax savings.</p>
        </div>

        {/* Step 3: Tax Calculation */}
        <div className="step-card">
          <FaDollarSign className="step-icon" />
          <h3>Calculate Your Taxes</h3>
          <p>Use the tax slabs and rates applicable to your income bracket to calculate the amount of tax you owe. Make sure to account for exemptions and deductions while calculating taxes.</p>
        </div>

        {/* Step 4: Plan for Future */}
        <div className="step-card">
          <FaChartLine className="step-icon" />
          <h3>Plan for Future Taxes</h3>
          <p>Consider future tax implications of your investments, savings, and other assets. Plan tax-saving investments such as PPF, ELSS, or NPS to reduce future tax liabilities.</p>
        </div>

        {/* Step 5: Submit Returns */}
        <div className="step-card">
          <FaCashRegister className="step-icon" />
          <h3>File Your Tax Returns</h3>
          <p>Once you’ve calculated your taxes, submit your income tax returns on time to avoid penalties and ensure compliance with tax laws.</p>
        </div>

        {/* Step 6: Consult an Expert */}
        <div className="step-card">
          <FaQuestionCircle className="step-icon" />
          <h3>Consult an Expert</h3>
          <p>If you're unsure about your tax planning or have complex tax issues, it’s always a good idea to consult a tax expert to optimize your tax strategy.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <p className="cta-text">
          Want to make sure you're planning taxes effectively? Book a consultation with our expert tax advisors for personalized guidance.
        </p>
        <button className="cta-button" onClick={() => window.open('https://www.setmore.com/', '_blank')}>
          Book a Consultant
        </button>
      </div>
    </div>
  );
};

export default IncomeTaxPlanning;
