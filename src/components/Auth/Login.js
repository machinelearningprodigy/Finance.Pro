import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGithub, FaGoogle, 
         FaFacebook, FaTwitter, FaUserShield, 
         FaKey, FaFingerprint } from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';
import { MdSecurity, MdOutlinePrivacyTip } from 'react-icons/md';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
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
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Invalid credentials');
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
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-card">
          <div className="brand-icons">
            <FaUserShield className="icon shield" />
            <FaKey className="icon key" />
            <FaFingerprint className="icon fingerprint" />
          </div>

          <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Login to your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="error-message">{error}</div>}
            
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

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>

            <button 
              type="submit" 
              className={`login-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                'Processing...'
              ) : (
                <>
                  Login <BiLogIn className="button-icon" />
                </>
              )}
            </button>

            <div className="social-login">
              <p>Or login with</p>
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

            <div className="signup-link">
              Don't have an account?{' '}
              <Link to="/signup">Sign up here</Link>
            </div>
          </form>

          <div className="security-features">
            <div className="feature">
              <MdSecurity className="feature-icon" />
              <span>Secure Login</span>
            </div>
            <div className="feature">
              <MdOutlinePrivacyTip className="feature-icon" />
              <span>Private</span>
            </div>
            <div className="feature">
              <FaFingerprint className="feature-icon" />
              <span>Protected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;