import React from 'react';
import { FaMoneyBillAlt, FaCalculator, FaChartLine, FaDollarSign, FaRegCalendarAlt } from 'react-icons/fa'; // Icons for the steps
import './IncomeExpensePlanning.css';

const IncomeExpensePlanning = () => {
  return (
    <div className="income-expense-planning">
      <h2 className="page-heading">Income and Expense Planning</h2>
      <p className="intro-text">
        Effective income and expense planning helps you achieve lasting financial stability. Follow these steps to organize your finances, reduce unnecessary expenses, and save for the future.
      </p>

      <div className="steps">
        {/* Step 1: List Your Sources of Income */}
        <div className="step-card">
          <FaMoneyBillAlt className="step-icon" />
          <h3>Step 1: List Your Sources of Income</h3>
          <p>
            Begin by listing all your income sources, such as salary, investments, side income, etc. Make sure to include both fixed and variable sources of income.
          </p>
        </div>

        {/* Step 2: Track Your Expenses */}
        <div className="step-card">
          <FaCalculator className="step-icon" />
          <h3>Step 2: Track Your Expenses</h3>
          <p>
            Record all your expenses, both fixed (e.g., rent, utilities) and variable (e.g., groceries, entertainment). Use apps or spreadsheets to make this process easier.
          </p>
        </div>

        {/* Step 3: Categorize Your Spending */}
        <div className="step-card">
          <FaChartLine className="step-icon" />
          <h3>Step 3: Categorize Your Spending</h3>
          <p>
            Categorize your expenses into essential and non-essential spending. This helps in identifying areas where you can cut down or optimize.
          </p>
        </div>

        {/* Step 4: Set a Budget */}
        <div className="step-card">
          <FaDollarSign className="step-icon" />
          <h3>Step 4: Set a Budget</h3>
          <p>
            Set a monthly or weekly budget for each category. Stick to it and make adjustments as needed based on your income and goals.
          </p>
        </div>

        {/* Step 5: Review and Adjust */}
        <div className="step-card">
          <FaRegCalendarAlt className="step-icon" />
          <h3>Step 5: Review and Adjust</h3>
          <p>
            Review your income and expenses regularly. Adjust your budget as your income or expenses change, and keep track of your progress.
          </p>
        </div>
      </div>

      <div className="cta">
        <p className="cta-text">Get personalized advice from our experts to refine your income and expense planning. Start planning today!</p>
        <button className="cta-button" onClick={() => window.open('https://www.setmore.com/', '_blank')}>Book a Consultation</button>
      </div>
    </div>
  );
};

export default IncomeExpensePlanning;
