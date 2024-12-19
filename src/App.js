import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import CompanyName from './components/CompanyName';
import Advisor from './components/Advisor';
import Footer from './components/Footer';
import WebProfile from './components/WebProfile';
import Plan from './components/Plan';
import Report from './components/Report';
import Signup from './components/Signup';
import Contact from './components/Resources/Contact';
import IncomeExpensePlanning from './components/AdvisorPlanning/IncomeExpensePlanning'; // Import the new page
import InvestmentPlanning from './components/AdvisorPlanning/InvestmentPlanning';
import InsurancePlanning from './components/AdvisorPlanning/InsurancePlanning';
import IncomeTaxPlanning from './components/AdvisorPlanning/IncomeTaxPlanning';
import LoanPlanning from './components/AdvisorPlanning/LoanPlanning';
import WillEstatePlanning from './components/AdvisorPlanning/WillEstatePlanning';
import RiskManagement from './components/AdvisorPlanning/RiskManagement';
import SavingsPlanning from './components/AdvisorPlanning/SavingsPlanning';
import FAQPage from './components/Resources/FAQPage';
import BlogPage from './components/Resources/BlogPage';
import EventPage from './components/Resources/EventPage';
import CommunityPage from './components/Resources/CommunityPage';








function App() {
  return (
    <Router> 
      <Navbar /> 
      <Routes>
        <Route path="/" element={
          <>
            <LandingPage /> 
            <CompanyName />
            <Advisor />
          </>
        } />

        {/* Navbar */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<WebProfile />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/report" element={<Report />} />
        <Route path="/contact" element={<Contact />} />

        {/* Planning Pages */}
        <Route path="/advisor-planning/income-expense-planning" element={<IncomeExpensePlanning />} />
        <Route path="/advisor-planning/investment-planning" element={<InvestmentPlanning />} />
        <Route path="/advisor-planning/insurance-planning" element={<InsurancePlanning />} />
        <Route path="/advisor-planning/income-tax-planning" element={<IncomeTaxPlanning />} />
        <Route path="/advisor-planning/loan-planning" element={<LoanPlanning />} />
        <Route path="/advisor-planning/will-estate-planning" element={<WillEstatePlanning />} />
        <Route path="/advisor-planning/risk-management" element={<RiskManagement />} />
        <Route path="/advisor-planning/savings-planning" element={<SavingsPlanning />} />

        {/* Resources */}
        <Route path="/faq" element={<FAQPage />} /> 
        <Route path="/blog" element={<BlogPage />} /> 
        <Route path="/event" element={<EventPage />} /> 
        <Route path="/community" element={<CommunityPage />} /> 





      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
