import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>FinancePro</h3>
          <p>CIN No: ABCD12345PXYZ678</p>
          <p>Registered Office: Guwahati, Panbazar, Wealth Kamrup Metro, Assam 781009</p>
          <p>Corporate Office: Sarojini Nagar, New Delhi, 657231</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>Financial Planning</li>
            <li>Investment Advice</li>
            <li>Tax Planning</li>
            <li>Insurance Guidance</li>
            <li>Retirement Planning</li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>Resources</h3>
          <ul>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Events</li>
            <li>Community</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section download">
          <h3>Download the App</h3>
          <div className="app-badges">
            {/* Corrected App Store Image */}
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play Store" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <FaFacebookF className="social-icon" style={{ color: '#3b5998' }} />
          <FaTwitter className="social-icon" style={{ color: '#00acee' }} />
          <FaInstagram className="social-icon" style={{ color: '#C13584' }} />
          <FaLinkedinIn className="social-icon" style={{ color: '#0072b1' }} />
          <FaYoutube className="social-icon" style={{ color: '#FF0000' }} />
        </div>
        <p>© 2024 FinancePlus. All Rights Reserved | <a href="/">Privacy Policy</a> | <a href="/">Terms of Use</a></p>
      </div>
    </footer>
  );
};

export default Footer;
