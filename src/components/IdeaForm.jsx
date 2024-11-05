import React, { useState, useEffect } from 'react';
import pic from '../assets/user profile.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import arrowback from '../assets/arrowback.png';
import './IdeaForm.css';
import IdeaPreview from './IdeaPreview';
import { checkAuthStatus, saveIdeaDraft, submitIdea, deleteIdeaDraft, fetchIdeaDrafts, fetchUserOrganizations } from '../API/fetchIdeaForm';

const IdeaForm = ({ onFlecheClick, selectedIdea, location }) => {
  const [ideaTitle, setIdeaTitle] = useState(selectedIdea?.nom || '');
  const [ideaDescription, setIdeaDescription] = useState(selectedIdea?.description || '');
  const [ideaImportance, setIdeaImportance] = useState(selectedIdea?.importance || '');
  const [dueDate, setDueDate] = useState(selectedIdea?.due_date ? new Date(selectedIdea.due_date) : null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [submittedIdeaId, setSubmittedIdeaId] = useState(null);
  const [titleError, setTitleError] = useState('');
  const [drafts, setDrafts] = useState([]);
  const [organizations, setOrganizations] = useState([]); // State for organizations
  const [selectedOrganization, setSelectedOrganization] = useState(''); // State for selected organization

  useEffect(() => {
    const authenticateUser = async () => {
      setLoading(true);
      try {
        const user = await checkAuthStatus();
        setLoggedInUser(user);
        fetchDrafts(user?.id);
        fetchOrganizations(); // Fetch organizations on user authentication
      } catch (error) {
        window.location.href = '/';
      } finally {
        setLoading(false);
      }
    };
    
    authenticateUser();
  }, []);
  useEffect(() => {
    if (selectedIdea) {
      setIdeaTitle(selectedIdea.nom || '');
      setIdeaDescription(selectedIdea.description || '');
      setIdeaImportance(selectedIdea.importance || '');
      setDueDate(selectedIdea.due_date ? new Date(selectedIdea.due_date) : null);
      setSelectedOrganization(selectedIdea.organization || '');
    }
  }, [selectedIdea]);
  
  useEffect(() => {
    if (location?.state?.draft) {
      const draft = location.state.draft;
      setIdeaTitle(draft.nom);
      setIdeaDescription(draft.description);
      setIdeaImportance(draft.importance);
      setDueDate(draft.due_date ? new Date(draft.due_date) : null);
    }
  }, [location]);

  const fetchDrafts = async (userId) => {
    try {
      const drafts = await fetchIdeaDrafts(userId);
      setDrafts(drafts);
    } catch (error) {
      console.error('Error fetching drafts:', error);
    }
  };

  const fetchOrganizations = async () => {
    try {
      const orgs = await fetchUserOrganizations(); // Fetch user organizations from API
      setOrganizations(orgs);
    } catch (error) {
      console.error('Error fetching organizations:', error);
    }
  };

  const handleSaveDraft = async () => {
    if (selectedIdea?.idea_id) {
      await deleteIdeaDraft(selectedIdea.idea_id).catch((error) => {
        console.error('Error deleting previous draft:', error);
        return;
      });
    }

    const ideaData = {
      nom: ideaTitle,
      description: ideaDescription,
      importance: ideaImportance,
      organization: selectedOrganization, // Use selected organization
      member_id: loggedInUser?.id,
      due_date: dueDate ? dueDate.toISOString().split('T')[0] : null,
      is_draft: 1,
    };

    try {
      await saveIdeaDraft(ideaData);
      resetForm();
      fetchDrafts(loggedInUser?.id);
    } catch (error) {
      console.error('Error saving draft:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ideaTitle.trim()) {
      setTitleError('Title is required');
      return;
    } else {
      setTitleError('');
    }

    if (selectedIdea?.idea_id) {
      await deleteIdeaDraft(selectedIdea.idea_id).catch((error) => {
        console.error('Error deleting previous draft:', error);
        return;
      });
    }

    const ideaData = {
      nom: ideaTitle,
      description: ideaDescription,
      importance: ideaImportance,
      member_id: loggedInUser?.id,
      organization: selectedOrganization, // Use selected organization
      due_date: dueDate ? dueDate.toISOString().split('T')[0] : null,
      is_draft: 0,
    };

    try {
      const result = await submitIdea(ideaData);
      setSubmittedIdeaId(result.idea_id);
      setShowPreview(true);
      resetForm();

      // Refresh the page after successful submission
      window.location.reload();
    } catch (error) {
      console.error('Error sharing idea:', error);
    }
  };

  const resetForm = () => {
    setIdeaTitle('');
    setIdeaDescription('');
    setIdeaImportance('');
    setDueDate(null);
    setSelectedOrganization(''); // Reset selected organization
  };

  if (showPreview && submittedIdeaId) {
    return (
      <div className="idea-form-page">
        <div className="form-container">
          <button className="back-button" onClick={() => {
            setShowPreview(false);
            setSubmittedIdeaId(null);
          }}>
            <img src={arrowback} className="arrowback" alt="Back" />
          </button>
          <IdeaPreview ideaId={submittedIdeaId} />
        </div>
      </div>
    );
  }

  return (
    <div className="idea-form-page">
      <div className="form-container">
        <button className="back-button" onClick={onFlecheClick}>
          <img src={arrowback} className="back-icon" alt="Back" />
        </button>

        <select
          className="form-select"
          value={selectedOrganization}
          onChange={(e) => setSelectedOrganization(e.target.value)}
          required
        >
          <option value="" disabled>CHOOSE AN ORGANIZATION</option>
          {organizations.length > 0 ? (
            organizations.map(org => (
              <option key={org.id} value={org.id}>{org.nom_do}</option>
            ))
          ) : (
            <option value="" disabled>Loading organizations...</option>
          )}
        </select>

        <div className="idea-title" onClick={() => setIsEditingTitle(true)}>
          {isEditingTitle ? (
            <input
              type="text"
              value={ideaTitle}
              onChange={(e) => setIdeaTitle(e.target.value)}
              onBlur={() => setIsEditingTitle(false)}
              autoFocus
              className="title-input"
            />
          ) : (
            ideaTitle || 'Title of your idea'
          )}
        </div>
        {titleError && <div className="error-message">{titleError}</div>}

        <div className="avatar-container">
          <img src={pic} alt="User Avatar" className="avatar" />
          {loading ? 'Loading...' : (loggedInUser ? `${loggedInUser.nom} (ID: ${loggedInUser.id})` : 'User not found')}
        </div>

        <form onSubmit={handleSubmit}>
          <label className="form-label">Describe your idea</label>
          <textarea
            value={ideaDescription}
            onChange={(e) => setIdeaDescription(e.target.value)}
            className="form-textarea"
            placeholder="Provide a brief description"
            required
          />

          <label className="form-label">Why is your idea important?</label>
          <textarea
            value={ideaImportance}
            onChange={(e) => setIdeaImportance(e.target.value)}
            className="form-textarea"
            placeholder="Explain why this idea matters"
            required
          />

          <div className="button-container">
            <button type="submit" className="share-button">
              SHARE YOUR IDEA <span className="heart-icon">❤️100</span>
            </button>
            <button type="button" className="save-button" onClick={handleSaveDraft}>
              SAVE FOR LATER
            </button>
          </div>
        </form>

        <button className="calendar-button" onClick={() => setDueDate(new Date())}>
          🗓 When would you like to see the idea come to life?
        </button>

        {dueDate && (
          <div className="calendar-container">
            <DatePicker
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              inline
              dateFormat="yyyy/MM/dd"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaForm;
