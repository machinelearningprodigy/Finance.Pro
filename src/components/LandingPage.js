import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { FaStar, FaUserAlt, FaRocket, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';
import { MdWarning } from 'react-icons/md';

const videos = [
  '/videos/video1.mp4',
  '/videos/video1.mp4',
  '/videos/video1.mp4',
  '/videos/video1.mp4',
];

function VideoBackground() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video-container">
      <video className="background-video" src={videos[currentVideo]} autoPlay muted loop></video>
    </div>
  );
}

function TypingEffect() {
  const fullText = "Welcome to Your Personal Finance Dashboard";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === fullText.length) {
          setIsDeleting(true);
          setSpeed(30);
        }
      } else {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setIsDeleting(false);
          setSpeed(200);
        }
      }
    };

    const typingTimer = setTimeout(() => {
      handleTyping();
    }, speed);

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, index, speed]);

  return (
    <h1 className="typing-effect">
      {displayedText.split(" ").map((word, i) => (
        <span key={i}>
          {word}
          {i !== displayedText.split(" ").length - 1 ? " " : ""} {/* Space between words */}
          {i === 3 ? <br /> : null} {/* Line break after the third word */}
        </span>
      ))}
    </h1>
  );
}

function LandingPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showSignoutDialog, setShowSignoutDialog] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const handleLearnMore = () => {
    navigate('/login');
  };

  const handleSignOutClick = () => {
    setShowSignoutDialog(true);
  };

  const handleCancelSignout = () => {
    setShowSignoutDialog(false);
  };

  return (
    <div className="app">
      <VideoBackground />
      <div className="main-content">
        <div className="icon-section">
          <div className="icons">
            <div className="icon user-icon"><FaUserAlt /></div>
            <div className="icon rocket-icon"><FaRocket /></div>
            <div className="icon chart-icon"><FaChartLine /></div>
            <div className="icon money-icon"><FaMoneyBillWave /></div>
          </div>
          <div className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
          <div className="text">200+ brands scaled</div>
        </div>

        <TypingEffect />
        <div className="cta-buttons">
          {!user ? (
            <>
              <button className="cta-button-red" onClick={handleGetStarted}>Sign Up</button>
              <button className="cta-button-white" onClick={handleLearnMore}>Login</button>
            </>
          ) : (
            <div>
              <p>
                You are logged in as <strong>{user.name}</strong>
              </p>
              <button className="cta-button-white" onClick={handleSignOutClick}>Sign Out</button>
            </div>
          )}
        </div>
      </div>

      {showSignoutDialog && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-icon">
              <MdWarning />
            </div>
            <h2>Confirm Sign Out</h2>
            <p>Are you sure you want to sign out?</p>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={handleCancelSignout}>Cancel</button>
              <button className="confirm-button" onClick={() => {
                // Clear the user session and remove user data
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                setUser(null);
                setShowSignoutDialog(false);
                navigate('/login');
              }}>Yes, Sign Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
