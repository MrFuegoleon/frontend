import React, { useState, useEffect } from 'react';
import { addNewProject } from '../API/projects';
import './AddProject.css';
import { fetchUserOrganizations } from '../API/fetchIdeaForm';

const AddProject = ({ onProjectAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    contributors: '',
    leader: '',
    status: '',
    dueDate: '',
    description: '',
    objective: '',
    resources: '',
    organization: '',
  });
  
  const [successMessage, setSuccessMessage] = useState(''); 
  const [organizations, setOrganizations] = useState([]); // State for organizations
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    const loadOrganizations = async () => {
      try {
        const orgs = await fetchUserOrganizations();
        setOrganizations(orgs); // Set fetched organizations to state
      } catch (error) {
        console.error('Error fetching organizations:', error);
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    loadOrganizations();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewProject(formData);
      setFormData({
        title: '',
        contributors: '',
        leader: '',
        status: '',
        dueDate: '',
        description: '',
        objective: '',
        resources: '',
        organization: '',
      });
      setSuccessMessage('Project added successfully!');
      onProjectAdded(); 
      
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      
    } catch (error) {
      console.error('Error adding new project:', error);
      setSuccessMessage('Failed to add project. Please try again.');
    }
  };

  return (
    <div className="add-project-container">
      <h2>Add New Project</h2>
      {loading ? ( // Show loading message while organizations are being fetched
        <p>Loading organizations...</p>
      ) : (
        <form className="project-form" onSubmit={handleSubmit}>
          <div className="form-column">
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="contributors"
              placeholder="Contributors"
              value={formData.contributors}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="leader"
              placeholder="Leader"
              value={formData.leader}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="status">Status:</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="not-started">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="on-hold">On Hold</option>
            </select>
          </div>
          
          <div className="form-column">
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            <textarea
              name="objective"
              placeholder="Objective"
              value={formData.objective}
              onChange={handleInputChange}
            ></textarea>
            <input
              type="text"
              name="resources"
              placeholder="Resource Link"
              value={formData.resources}
              onChange={handleInputChange}
            />
            
            {/* Organization selection dropdown */}
            <label htmlFor="organization">Organization:</label>
            <select
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select Organization</option>
              {organizations.map(org => (
                <option key={org.id} value={org.id}>{org.nom_do}</option> 
              ))}
            </select>
          </div>

          <button type="submit">Add Project</button>
        </form>
      )}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default AddProject;