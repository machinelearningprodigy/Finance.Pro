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
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Signout from './components/Auth/Signout';
import Contact from './components/Resources/Contact';
import IncomeExpensePlanning from './components/AdvisorPlanning/IncomeExpensePlanning';
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
import Community from './components/Resources/Community';
import PrivateRoute from './components/Auth/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <>
            <LandingPage />
            <CompanyName />
            <Advisor />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/community" element={<Community />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute>
            <WebProfile />
          </PrivateRoute>
        } />
        <Route path="/plan" element={
          <PrivateRoute>
            <Plan />
          </PrivateRoute>
        } />
        <Route path="/report" element={
          <PrivateRoute>
            <Report />
          </PrivateRoute>
        } />

        {/* Protected Planning Routes */}
        <Route path="/advisor-planning/income-expense-planning" element={
          <PrivateRoute>
            <IncomeExpensePlanning />
          </PrivateRoute>
        } />
        <Route path="/advisor-planning/investment-planning" element={
          <PrivateRoute>
            <InvestmentPlanning />
          </PrivateRoute>
        } />
        <Route path="/advisor-planning/insurance-planning" element={
          <PrivateRoute>
            <InsurancePlanning />
          </PrivateRoute>
        } />
        <Route path="/advisor-planning/income-tax-planning" element={
          <PrivateRoute>
            <IncomeTaxPlanning />
          </PrivateRoute>
        } />
        <Route path="/advisor-planning/loan-planning" element={
          <PrivateRoute>
            <LoanPlanning />
          </PrivateRoute>
        } />
        <Route path="/advisor-planning/will-estate-planning" element={
          <PrivateRoute>
            <WillEstatePlanning />
          </PrivateRoute>
        } />
        <Route path="/advisor-planning/risk-management" element={
          <PrivateRoute>
            <RiskManagement />
          </PrivateRoute>
        } />
        <Route path="/advisor-planning/savings-planning" element={
          <PrivateRoute>
            <SavingsPlanning />
          </PrivateRoute>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
