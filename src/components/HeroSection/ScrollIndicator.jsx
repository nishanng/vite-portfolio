import React from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const scrollToAboutMeSection = () => {
    const aboutMeSection = document.getElementById('about-me');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-indicator" onClick={scrollToAboutMeSection}>
      <div className="arrow-container">
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
