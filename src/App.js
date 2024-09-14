import React, { Profiler } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';  // Import Navbar component
import CompanyName from './components/CompanyName';
import Advisor from './components/Advisor';
import Footer from './components/Footer';
import WebProfile from './components/WebProfile';
import Plan from './components/Plan'
import Report from './components/Report'

function App() {
  return (
    <Router> 
      <Navbar />  {/* Navbar will always be visible */}
      <Routes>
        {/* Home route: displays full landing page with all components */}
        <Route 
          path="/" 
          element={
            <>
              <LandingPage /> 
              <CompanyName />
              <Advisor />
              <Footer />
            </>
          } 
        />
        
        {/* Other routes from Navbar: display specific components */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<WebProfile/>} />
        <Route path="/plan" element={<Plan/>} />
        <Route path="/report" element={<Report/>} />
        {/* Add other routes here for Profile, Alerts, Report, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
