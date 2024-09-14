import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Mode.css';  // Import the CSS for Mode

function Mode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Apply theme to the body element
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode);
    document.body.classList.toggle('light-theme', !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="mode-toggle" onClick={toggleTheme}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </div>
  );
}

export default Mode;
