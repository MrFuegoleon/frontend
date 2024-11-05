import React, { useState, useEffect } from 'react';
import './ViewDrafts.css';  // Import the CSS file

const ViewDrafts = ({ drafts }) => {
  const [draftData, setDraftData] = useState(drafts || []);

  // Fetch drafts from backend API
  useEffect(() => {
    const fetchDrafts = async () => {
      try {
        const response = await fetch('/api/drafts'); // Update with your backend API URL
        const data = await response.json();
        setDraftData(data);
      } catch (error) {
        console.error('Error fetching drafts:', error);
      }
    };

    if (!drafts || drafts.length === 0) {
      fetchDrafts();
    }
  }, [drafts]);

  return (
    <div className="drafts-container">
      <h2>Drafts List</h2>
      {draftData.length > 0 ? (
        <ul className="drafts-list">
          {draftData.map((draft) => (
            <li key={draft.draft_id}>
              <h3>{draft.nom}</h3>
              <p>{draft.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-drafts-message">No drafts available.</p>
      )}
    </div>
  );
};

export default ViewDrafts;
