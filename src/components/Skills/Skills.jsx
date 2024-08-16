import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'AWS', color: '#FF9900' },
  { name: 'Azure', color: '#0078D4' },
  { name: 'Linux', color: '#008000' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Version Control', color: '#F05032' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Argo CD', color: '#38A1DB' },
  { name: 'Terraform', color: '#5C4EE5' },
  { name: 'Ansible', color: '#b32400' },
  { name: 'Cisco', color: ' #595959' },
  { name: 'JavaScript', color: '#e6b800' },
];

const Skills = () => {
  return (
    <div className="skills-container">
    <div className="heading-loader-wrapper">
      <h2 className="skills-heading">Skills</h2>
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    </div>
    <div className="skills-grid">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className={`skill skill-${index}`}
          style={{ backgroundColor: skill.color }}
          title={`${skill.name}`}
        >
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Skills;
