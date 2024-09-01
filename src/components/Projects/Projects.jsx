import React, { forwardRef } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

const Projects = forwardRef((_, ref) => {
  return (
    <div className="projects-section" id="projects_section" ref={ref}>
      <h2>Projects and Resources</h2>

      <div className="category">
        <h3>Networking | Security</h3>
        <div className="projects-container">
              <ProjectCard
        imgSrc="https://via.placeholder.com/150" 
        
        title="Firewall HA Configuration"
        githubRepo="https://github.com/your-repo"
        prompt="Firewall HA Configuration"
      />
             <ProjectCard
          imgSrc="https://via.placeholder.com/150"
          title="DevOps Project 1"
          githubRepo="https://github.com/yourusername/devops-project-1"
          prompt="Title"
        />
             <ProjectCard
          imgSrc="https://via.placeholder.com/150"
          title="DevOps Project 1"
          githubRepo="https://github.com/yourusername/devops-project-1"
          prompt="Title"
        />
        </div>
      </div>
      <div className="category">
        <h3>Cloud | DevOps</h3>
        <div className="projects-container">
             <ProjectCard
              imgSrc="https://via.placeholder.com/150"
              title="Cloud Automation Project 1"
              githubRepo="https://github.com/yourusername/cloud-automation-project-1"
              prompt="Title"
            
            />
           <ProjectCard
              imgSrc="https://via.placeholder.com/150"
              title="Cloud Automation Project 1"
              githubRepo="https://github.com/yourusername/cloud-automation-project-1"
              prompt="Title"
            />
           <ProjectCard
              imgSrc="https://via.placeholder.com/150"
              title="Cloud Automation Project 1"
              githubRepo="https://github.com/yourusername/cloud-automation-project-1"
              prompt="Title"
            />
        </div>
      </div>
      <div className="category">
        <h3>Software | AI</h3>
        <div className="projects-container">
              <ProjectCard
            imgSrc="https://via.placeholder.com/150"
            title="Linux and Networking Project 1"
            githubRepo="https://github.com/yourusername/linux-networking-project-1"
            prompt="Title"
            
        />
        <ProjectCard
            imgSrc="https://via.placeholder.com/150"
            title="Linux and Networking Project 1"
            githubRepo="https://github.com/yourusername/linux-networking-project-1"
            prompt="Title"
        />
        <ProjectCard
            imgSrc="https://via.placeholder.com/150"
            title="Linux and Networking Project 1"
            githubRepo="https://github.com/yourusername/linux-networking-project-1"
            prompt="Title"
        />
        </div>
      </div>
    </div>
  );
});

export default Projects;
