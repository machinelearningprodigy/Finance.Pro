import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import { FaStar, FaUserAlt, FaRocket, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';

const videos = [
  '/videos/video1.mp4',
  '/videos/video1.mp4',
  '/videos/video1.mp4',
  '/videos/video1.mp4'
];

function VideoBackground() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    }, 10000); // Change video every 10 seconds
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
  const [speed, setSpeed] = useState(200); // Initial typing speed

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === fullText.length) {
          setIsDeleting(true); // Start deleting when fully typed
          setSpeed(30); // Faster deleting speed
        }
      } else {
        // Deleting phase
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setIsDeleting(false); // Start typing again
          setSpeed(200); // Reset to typing speed
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
          {i !== displayedText.split(" ").length - 1 ? " " : ""}
          {i === 3 ? <br /> : null} {/* Add line break after the third word */}
        </span>
      ))}
    </h1>
  );
}

function LandingPage() {
  return (
    <div className="app">
      <VideoBackground />
      <div className="main-content">
        {/* Icon Section */}
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

        {/* Typing Effect */}
        <TypingEffect />
        <div className="cta-buttons">
          <button className="cta-button-red">Get Started</button>
          <button className="cta-button-white">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
