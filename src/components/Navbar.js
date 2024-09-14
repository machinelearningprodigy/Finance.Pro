// avaantivirus2021@gmail.com


import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaTachometerAlt, FaUserAlt, FaRegCalendarAlt, FaChartBar } from 'react-icons/fa';
import './Navbar.css';  // Import the CSS for Navbar

function Navbar() {
  return (
    <nav className="navbar">
      {/* Wrap the logo with a Link that points to the homepage ("/") */}
      <div className="logo">
        <Link to="/" className="logo-link">FinancePro</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link></li>
        <li><Link to="/profile"><FaUserAlt /> Profile</Link></li>
        <li><Link to="/plan"><FaRegCalendarAlt /> Plans</Link></li>
        <li><Link to="/report"><FaChartBar /> Report</Link></li>
        <li className="call-button"><FaPhone /> Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
