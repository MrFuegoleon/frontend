import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details">
      <h2>{project.title}</h2>
      <p>Leader: {project.leader}</p>
      <p>Contributors: {project.contributors}</p>
      <p>Status: {project.status}</p>
      <p>Due Date: {new Date(project.dueDate).toLocaleDateString()}</p>
      <p>Description: {project.description}</p>
      <p>Objective: {project.objective}</p>
      <a href={project.resources} target="_blank" rel="noopener noreferrer">
        Resources
      </a>
    </div>
  );
};

export default ProjectDetails;