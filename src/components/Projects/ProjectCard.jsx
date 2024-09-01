import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ githubRepo, prompt, mainTitle }) => {
  const handleCardClick = () => {
    window.open(githubRepo, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="container noselect" onClick={handleCardClick}>
      <div className="canvas">
        {[...Array(25)].map((_, i) => (
          <div key={i} className={`tracker tr-${i + 1}`}></div>
        ))}
        <div id="card">
          <p id="prompt">{prompt}</p>
          <div className="title">{mainTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;