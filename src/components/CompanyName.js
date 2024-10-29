import React from 'react';
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebook, FaCar, FaTwitter, FaSpotify, FaUber } from 'react-icons/fa';
import './CompanyName.css';

function CompanyName() {
  return (
    <div className="company-container">
      <h1 className="heading">
        Trusted By The World’s <span className="highlight">Leading Companies</span>
      </h1>
      <p className="subtitle">Empowering Personal Finance Management with Industry Giants</p>

      <div className="company-marquee">
        {/* Left to Right movement */}
        <div className="company-track left-to-right">
          <div className="company-item"><FaApple /> Apple</div>
          <div className="company-item"><FaGoogle /> Google</div>
          <div className="company-item"><FaAmazon /> Amazon</div>
          <div className="company-item"><FaMicrosoft /> Microsoft</div>
          <div className="company-item"><FaFacebook /> Facebook</div>
        </div>

        {/* Right to Left movement */}
        <div className="company-track right-to-left">
          <div className="company-item"><FaCar /> Tesla</div>
          <div className="company-item"><FaTwitter /> Twitter</div>
          <div className="company-item"><FaSpotify /> Spotify</div>
          <div className="company-item"><FaUber /> Uber</div>
        </div>
      </div>
    </div>
  );
}

export default CompanyName;
