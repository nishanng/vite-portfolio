import React, { useRef } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import AboutMe from './components/About/AboutMe';
import './components/HeroSection/HeroSection.css';
import './components/About/AboutMe.css';
import CustomButton from './components/CustomButton/CustomButton';
import IconBreadcrumbs from './components/Breadcrumbs/IconBreadCrumbs';
import SvgAnimation from './components/SvgAnimation/SvgAnimation';
import './App.css';
import Skills from './components/Skills/Skills';
import GradientButton from './components/Projects/GradientButton'; 

function App() {
  const projectsRef = useRef(null);

  return (
    <div className="App">
      <div className="header">
        <CustomButton buttonText={ "Home" }/>
        <IconBreadcrumbs />
      </div>
      <div className="hero-section-wrapper">
        <HeroSection projectsRef={projectsRef} />
        <SvgAnimation />
      </div>
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
