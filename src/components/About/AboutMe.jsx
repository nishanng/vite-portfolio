// AboutMe.jsx
import React from 'react';
import './AboutMe.css';
import { motion } from 'framer-motion';
import Connect from './Connect';
import DownloadButton from './DownloadButton';

const AboutMe = () => {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.section
      id="about-me"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <div className="about-me-container">
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>I'm Nishan Gautam, an individual who loves the tech world and is currently learning the depths of networking and security along with AI.</p>
          <p> Through this website, I wanted to share some of the knowledge I have gained while working on various personal IT projects.</p>
          <p> Feel free to connect with me if you find any value from this website and want to discuss more on any cool ideas that you might have.</p>
          <div className="buttons-wrapper">
            <Connect />
            <DownloadButton />
          </div>
        </div>
        <div className="about-me-photo">
          <div className="photo-frame">
            <img src="/self_portrait.png" alt="Portrait" />
          </div>
          
        </div>       
      </div>
    </motion.section>
  );
};

export default AboutMe;
