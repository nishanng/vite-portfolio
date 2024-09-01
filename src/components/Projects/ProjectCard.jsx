import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';

const TrackerDivs = () => (
  <>
    {[...Array(25)].map((_, i) => (
      <div key={i} className={`tracker tr-${i + 1}`}></div>
    ))}
  </>
);

const ProjectCard = ({ githubRepo, prompt, mainTitle }) => {
  const handleCardClick = () => {
    window.open(githubRepo, '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="container noselect" onClick={handleCardClick}>
      <div className="canvas">
        <TrackerDivs />
        <div className="card">
          <p className="prompt">{prompt}</p>
          <h2 className="title">{mainTitle}</h2>
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  githubRepo: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
  mainTitle: PropTypes.string.isRequired,
};

export default ProjectCard;