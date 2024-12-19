import React, { useState } from 'react';
import './Contact.css';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaYoutube, 
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaDiscord,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPaperPlane,
  FaUserAlt,
  FaCommentDots
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="contact-header">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you. Drop us a line!</p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <FaPhoneAlt />
                </div>
                <div className="info-details">
                  <h3>Phone</h3>
                  <p>+91 9085471314</p>
                  <p>Mon-Fri, 9am-6pm IST</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-details">
                  <h3>Email</h3>
                  <p>avaantivirus2021@gmail.com</p>
                  <p>We reply within 24 hours</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-details">
                  <h3>Location</h3>
                  <p>Guwahati, Panbazar</p>
                  <p>Assam 781023, India</p>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <div className="form-container">
                <h2><FaCommentDots className="form-title-icon" /> Send Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <FaUserAlt className="input-icon" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <FaEnvelope className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <FaCommentDots className="input-icon textarea-icon" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit">
                    Send Message <FaPaperPlane className="submit-icon" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h2>Connect With Us</h2>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaYoutube />
              </a>
              <a href="#" className="social-icon">
                <FaGithub />
              </a>
              <a href="#" className="social-icon">
                <FaDiscord />
              </a>
              <a href="#" className="social-icon">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
