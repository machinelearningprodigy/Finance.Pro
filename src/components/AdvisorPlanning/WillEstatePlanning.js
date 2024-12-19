import React from 'react';
import { 
  FaFileSignature, 
  FaHouseUser, 
  FaUsers, 
  FaCogs, 
  FaShieldAlt, 
  FaRegClock 
} from 'react-icons/fa'; // Import icons

import './WillEstatePlanning.css'; // Import the CSS for styling

const WillEstatePlanning = () => {
  // Handling the button click to redirect to Setmore for consultation
  const handleRedirect = () => {
    window.open('https://www.setmore.com/', '_blank');
  };

  return (
    <div className="will-estate-planning">
      <h2 className="page-heading">Comprehensive <span className="highlight">Will and Estate Planning</span></h2>

      <p className="intro-text">
        A well-crafted will and estate plan ensures your assets are distributed according to your wishes. Learn how to start planning and safeguard your legacy.
      </p>

      <div className="steps">
        {/* Step 1: Define Your Will's Structure */}
        <div className="step-card">
          <FaFileSignature className="step-icon" />
          <h3>Define Your Will's Structure</h3>
          <p>Decide the structure of your will. Will it be a simple will, a testamentary trust, or a living trust? Consult with an estate planner to choose the best option for your needs.</p>
        </div>

        {/* Step 2: Inventory Your Assets */}
        <div className="step-card">
          <FaHouseUser className="step-icon" />
          <h3>Inventory Your Assets</h3>
          <p>Make a comprehensive list of your assets, including real estate, personal belongings, bank accounts, investments, and digital assets. This will guide your asset distribution plan.</p>
        </div>

        {/* Step 3: Decide Beneficiaries */}
        <div className="step-card">
          <FaUsers className="step-icon" />
          <h3>Decide Beneficiaries</h3>
          <p>Determine who will inherit your assets. Choose your beneficiaries and decide what each one will receive. This can include family, friends, or charitable organizations.</p>
        </div>

        {/* Step 4: Choose an Executor */}
        <div className="step-card">
          <FaCogs className="step-icon" />
          <h3>Choose an Executor</h3>
          <p>Your executor will be responsible for executing your will, ensuring your assets are distributed according to your wishes. Choose someone trustworthy, typically a family member, close friend, or attorney.</p>
        </div>

        {/* Step 5: Set Up Guardianship for Children */}
        <div className="step-card">
          <FaShieldAlt className="step-icon" />
          <h3>Set Up Guardianship for Children</h3>
          <p>If you have minor children, appoint a guardian who will take care of them in the event of your passing. This is one of the most important decisions in estate planning for parents.</p>
        </div>

        {/* Step 6: Review and Update Regularly */}
        <div className="step-card">
          <FaRegClock className="step-icon" />
          <h3>Review and Update Regularly</h3>
          <p>Your estate plan should be updated regularly to reflect any changes in your life, such as marriage, the birth of children, or changes in financial circumstances.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <p className="cta-text">
          Ready to get started with your estate planning? Book a consultation with our expert estate planners for tailored advice.
        </p>
        <button className="cta-button" onClick={handleRedirect}>
          Book a Consultant
        </button>
      </div>
    </div>
  );
};

export default WillEstatePlanning;
