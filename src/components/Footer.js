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
            <li>
              <a href="http://localhost:3000/advisor-planning/income-expense-planning">
                Financial Planning
              </a>
            </li>
            <li>
              <a href="http://localhost:3000/advisor-planning/investment-planning">
                Investment Advice
              </a>
            </li>
            <li>
              <a href="http://localhost:3000/advisor-planning/income-tax-planning">
                Tax Planning
              </a>
            </li>
            <li>
              <a href="http://localhost:3000/advisor-planning/insurance-planning">
                Insurance Guidance
              </a>
            </li>
            <li>
              <a href="http://localhost:3000/advisor-planning/savings-planning">
                Retirement Planning
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>Resources</h3>
          <ul>
            <li><a href="http://localhost:3000/faq">FAQs</a></li> {/* Added FAQ link */}
            <li><a href="http://localhost:3000/blog">Blogs</a></li>
            <li><a href="http://localhost:3000/event">Events</a></li>
            <li><a href="http://localhost:3000/community">Community</a></li>
            <li><a href="http://localhost:3000/contact">Contact Us</a></li>
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
          <a href="https://www.facebook.com/vanki.shylla" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-icon" style={{ color: '#3b5998' }} />
          </a>
          <a href="https://x.com/NitishM66803568" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" style={{ color: '#00acee' }} />
          </a>
          <a href="https://www.instagram.com/?deoia=1" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" style={{ color: '#C13584' }} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="social-icon" style={{ color: '#0072b1' }} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-icon" style={{ color: '#FF0000' }} />
          </a>
        </div>
        <p>© 2024 FinancePro. All Rights Reserved | <a href="/">Privacy Policy</a> | <a href="/">Terms of Use</a></p>
      </div>
    </footer>
  );
};

export default Footer;
