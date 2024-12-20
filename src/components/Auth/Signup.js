import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaGithub, FaGoogle, FaFacebook, 
         FaTwitter, FaLinkedin, FaCode, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';
import { MdSecurity, MdOutlinePrivacyTip } from 'react-icons/md';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-card">
          <div className="brand-icons">
            <FaRocket className="icon rocket" />
            <FaCode className="icon code" />
            <FaShieldAlt className="icon shield" />
          </div>

          <div className="signup-header">
            <h1>Create Account</h1>
            <p>Join our community today</p>
          </div>
          
          <form onSubmit={handleSubmit} className="signup-form">
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-group">
              <FaUser className="field-icon" />
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <FaEnvelope className="field-icon" />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <FaLock className="field-icon" />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <button 
              type="submit" 
              className={`signup-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                'Processing...'
              ) : (
                <>
                  Sign Up <BiLogIn className="button-icon" />
                </>
              )}
            </button>

            <div className="social-signup">
              <p>Or sign up with</p>
              <div className="social-icons">
                <button type="button" className="social-icon google">
                  <FaGoogle />
                </button>
                <button type="button" className="social-icon github">
                  <FaGithub />
                </button>
                <button type="button" className="social-icon facebook">
                  <FaFacebook />
                </button>
                <button type="button" className="social-icon twitter">
                  <FaTwitter />
                </button>
              </div>
            </div>

            <div className="login-link">
              Already have an account?{' '}
              <Link to="/login">Login here</Link>
            </div>
          </form>

          <div className="security-features">
            <div className="feature">
              <MdSecurity className="feature-icon" />
              <span>Secure</span>
            </div>
            <div className="feature">
              <MdOutlinePrivacyTip className="feature-icon" />
              <span>Private</span>
            </div>
            <div className="feature">
              <FaShieldAlt className="feature-icon" />
              <span>Protected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;