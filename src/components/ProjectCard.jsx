import React from 'react';

const ProjectCard = ({ project, onCardClick }) => {
  return (
    <div className="project-card" onClick={() => onCardClick(project)}>
      <h3>{project.title}</h3>
      <p>Leader: {project.leader}</p>
      <p>Status: {project.status}</p>
    </div>
  );
};

export default ProjectCard;