import React, { useState } from 'react';
import {
  Plus,
  Minus,
  DollarSign,
  TrendingUp,
  Shield,
  FileText,
  PiggyBank,
  ScrollText,
  AlertTriangle,
  Wallet
} from 'lucide-react';
import './FAQPage.css';

const FAQPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const faqData = [
    {
      id: 1,
      icon: <DollarSign size={24} />,
      title: "Income and Expense Planning",
      content: `Income and expense planning is fundamental to financial success. This involves:
      
      • Creating detailed monthly budgets
      • Tracking all sources of income
      • Categorizing and monitoring expenses
      • Identifying areas for cost reduction
      • Setting financial goals and milestones
      • Emergency fund planning
      • Debt management strategies
      • Cash flow optimization
      
      Regular review and adjustment of your income and expense plan helps maintain financial health and achieve long-term goals.`
    },
    {
      id: 2,
      icon: <TrendingUp size={24} />,
      title: "Investment Planning",
      content: `Investment planning is crucial for wealth creation and financial security. Key aspects include:
      
      • Asset allocation strategies
      • Risk assessment and management
      • Portfolio diversification
      • Investment vehicle selection (stocks, bonds, mutual funds)
      • Regular portfolio rebalancing
      • Tax-efficient investing
      • Retirement account planning
      • Investment timeline planning
      
      A well-structured investment plan considers your risk tolerance, time horizon, and financial objectives.`
    },
    {
      id: 3,
      icon: <Shield size={24} />,
      title: "Insurance Planning",
      content: `Comprehensive insurance planning protects you and your family from financial risks:
      
      • Life insurance coverage assessment
      • Health insurance planning
      • Disability insurance evaluation
      • Property and casualty insurance
      • Long-term care insurance
      • Business insurance needs
      • Insurance policy review and updates
      • Beneficiary designations
      
      Regular review of insurance coverage ensures adequate protection as your life circumstances change.`
    },
    {
      id: 4,
      icon: <FileText size={24} />,
      title: "Income Tax Planning",
      content: `Strategic income tax planning helps minimize tax liability and maximize savings:
      
      • Tax bracket optimization
      • Deduction and credit maximization
      • Tax-advantaged investment strategies
      • Retirement account tax planning
      • Estate tax considerations
      • Business tax planning
      • Tax record keeping
      • Quarterly tax payment planning
      
      Effective tax planning requires regular review and adjustment to changing tax laws and personal circumstances.`
    },
    {
      id: 5,
      icon: <PiggyBank size={24} />,
      title: "Loan Planning",
      content: `Proper loan planning ensures responsible borrowing and debt management:
      
      • Loan type evaluation
      • Interest rate comparison
      • Repayment strategy development
      • Debt consolidation options
      • Credit score improvement
      • Loan refinancing opportunities
      • Emergency loan planning
      • Loan insurance considerations
      
      Careful loan planning helps maintain financial stability and achieve long-term goals.`
    },
    {
      id: 6,
      icon: <ScrollText size={24} />,
      title: "Will and Estate Planning",
      content: `Estate planning ensures your assets are distributed according to your wishes:
      
      • Will creation and updates
      • Trust establishment
      • Power of attorney designation
      • Healthcare directive preparation
      • Beneficiary designation
      • Asset inventory maintenance
      • Tax-efficient estate transfer
      • Legacy planning
      
      Regular review and updates to estate plans are essential as circumstances change.`
    },
    {
      id: 7,
      icon: <AlertTriangle size={24} />,
      title: "Risk Management",
      content: `Effective risk management protects your financial well-being:
      
      • Financial risk assessment
      • Investment risk evaluation
      • Insurance coverage review
      • Emergency fund maintenance
      • Liability protection
      • Business risk management
      • Credit risk monitoring
      • Market risk analysis
      
      Regular risk assessment and mitigation strategies help protect your financial future.`
    },
    {
      id: 8,
      icon: <Wallet size={24} />,
      title: "Saving Planning",
      content: `Strategic saving planning builds financial security and achieves goals:
      
      • Emergency fund establishment
      • Short-term savings goals
      • Long-term savings strategy
      • High-yield account selection
      • Automatic savings programs
      • Savings rate optimization
      • Goal-based savings plans
      • Savings account diversification
      
      Regular review and adjustment of saving strategies ensures optimal growth and security.`
    }
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1>Financial Planning FAQ</h1>
        <p>Find answers to common questions about financial planning and management</p>
      </div>

      <div className="faq-container">
        <div className="faq-grid">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openSection === faq.id ? 'active' : ''}`}
            >
              <div 
                className="faq-title"
                onClick={() => toggleSection(faq.id)}
              >
                <div className="title-left">
                  <span className="icon">{faq.icon}</span>
                  <h3>{faq.title}</h3>
                </div>
                <button className="toggle-button">
                  {openSection === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                </button>
              </div>
              <div className={`faq-content ${openSection === faq.id ? 'show' : ''}`}>
                <div className="content-inner">
                  {faq.content.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <h3>Still have questions?</h3>
          <p>Contact our financial advisors for personalized assistance</p>
          {/* <button className="contact-button">Contact Us</button> */}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;