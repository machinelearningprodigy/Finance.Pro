import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaUser, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';
import { MdWarning } from 'react-icons/md';
import './Signout.css';

const Signout = () => {
  const [email, setEmail] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Get current user email from localStorage
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  const userEmail = currentUser.email || '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.toLowerCase() === userEmail.toLowerCase()) {
      setShowConfirm(true);
      setError('');
    } else {
      setError('Email does not match your account');
    }
  };

  const handleSignout = async () => {
    setIsLoading(true);
    try {
      // Clear localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Optional: Call backend to invalidate token
      await fetch('https://financepro-backend.onrender.com/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      // Redirect to login page
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (error) {
      setError('Error signing out. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signout-container">
      <div className="signout-wrapper">
        <div className="signout-card">
          <div className="brand-icons">
            <FaSignOutAlt className="icon signout" />
            <FaUser className="icon user" />
          </div>

          <div className="signout-header">
            <h1>Sign Out</h1>
            <p>Please confirm your email to sign out</p>
          </div>

          <form onSubmit={handleSubmit} className="signout-form">
            {error && (
              <div className="error-message">
                <FaExclamationTriangle className="error-icon" />
                {error}
              </div>
            )}

            <div className="form-group">
              <FaEnvelope className="field-icon" />
              <input
                type="email"
                placeholder="Enter your email to confirm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit" 
              className="signout-button"
              disabled={isLoading}
            >
              Continue <FaSignOutAlt className="button-icon" />
            </button>
          </form>

          {/* Confirmation Modal */}
          {showConfirm && (
            <div className="modal-overlay">
              <div className="modal">
                <div className="modal-icon">
                  <MdWarning />
                </div>
                <h2>Confirm Sign Out</h2>
                <p>Are you sure you want to sign out?</p>
                <div className="modal-buttons">
                  <button 
                    className="cancel-button"
                    onClick={() => setShowConfirm(false)}
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button 
                    className="confirm-button"
                    onClick={handleSignout}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing out...' : 'Yes, Sign Out'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signout;