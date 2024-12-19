import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaTachometerAlt, FaUserAlt, FaRegCalendarAlt, FaChartBar } from 'react-icons/fa';
import { MdAccountCircle } from "react-icons/md";
import './Navbar.css';  // Import the CSS for Navbar

function Navbar() {
  return (
    <nav className="navbar">
      {/* Wrap the logo with a Link that points to the homepage ("/") */}
      <div className="logo">
        <Link to="/" className="logo-link">FinancePro</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard <FaTachometerAlt className="right-icon" /></Link></li>
        <li><Link to="/profile">Profile <FaUserAlt className="right-icon" /></Link></li>
        <li><Link to="/plan">Plans <FaRegCalendarAlt className="right-icon" /></Link></li>
        <li><Link to="/report">Report <FaChartBar className="right-icon" /></Link></li>
        <li><Link to="/contact">Contact Us <FaPhone className="right-icon" /></Link></li>
        {/* <li><Link to="/signup">Login <MdAccountCircle className="right-icon" /></Link></li> */}

      </ul>
    </nav>
  );
}

export default Navbar;
