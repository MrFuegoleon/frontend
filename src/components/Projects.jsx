import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../API/projects';
import { fetchUserOrganizations } from '../API/fetchIdeaForm';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import AddProject from './AddProject';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAddProject, setShowAddProject] = useState(false);

  useEffect(() => {
    fetchProjectsData();
    fetchUserOrganizationsData();
  }, []);

  const fetchProjectsData = async () => {
    try {
      const data = await fetchProjects();
      setProjects(data.projects);
      setFilteredProjects(data.projects); // Set initial filtered projects to all projects
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const fetchUserOrganizationsData = async () => {
    try {
        const orgData = await fetchUserOrganizations();
        console.log('Organizations Data:', orgData); // Log the response directly
        
        // Directly set the organizations array, assuming orgData is the array
        if (Array.isArray(orgData) && orgData.length > 0) {
            setOrganizations(orgData); // orgData is already the organizations array
        } else {
            console.warn('No organizations found in the response.');
            setOrganizations([]); // Ensure organizations is empty if none found
        }
    } catch (error) {
        console.error('Error fetching organizations:', error);
    }
};



const handleOrganizationChange = (e) => {
  const orgId = e.target.value;
  setSelectedOrganization(orgId);

  console.log('Selected Organization ID:', orgId);
  console.log('All Projects:', projects);

  if (orgId) {
      // Compare string to string
      const filtered = projects.filter(project => project.organization === orgId);
      setFilteredProjects(filtered);
      console.log('Filtered Projects:', filtered);
  } else {
      setFilteredProjects(projects);
  }
};



  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const toggleAddProject = () => {
    setShowAddProject(!showAddProject);
  };

  
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <button onClick={toggleAddProject} className="new-project-button">
        {showAddProject ? "Back to Projects" : "New Project"}
      </button>

      {showAddProject ? (
        <div className="add-project-container">
          <AddProject onProjectAdded={fetchProjectsData} />
        </div>
      ) : (
        <>
          <div className="filter-container">
            <label htmlFor="organization-select">Filter by Organization:</label>
            <select id="organization-select" onChange={handleOrganizationChange}>
              <option value="">All Organizations</option>
              {organizations.map((org) => (
                <option key={org.id} value={org.id}>
                  {org.nom_do}
                </option>
              ))}
            </select>
          </div>
          
          <div className="scroll-container">
            <div className="projects-list">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onCardClick={handleCardClick} />
              ))}
            </div>
          </div>
          {selectedProject && <ProjectDetails project={selectedProject} />}
        </>
      )}
    </div>
  );
};

export default Projects;
