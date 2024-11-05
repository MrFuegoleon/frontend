import React from 'react';
import './ViewFeedback.css';

const ViewFeedback = ({ idea, votesData }) => {
  const feedbacks = votesData[idea.idea_id]?.feedbacks || [];

  return (
    <section className="viewFeedback">
      <h3>Feedback for {idea.nom}</h3>
      {feedbacks.length > 0 ? (
        <ul className="feedback-list">
          {feedbacks.map((feedbackItem, index) => (
            <li key={index} className="feedback-item">
              <p className="feedback-text">"{feedbackItem.feedback}"</p>
              <span className={`feedback-vote ${feedbackItem.isYes === 'yes' ? 'yes' : 'no'}`}>
                {feedbackItem.isYes === 'yes' ? 'Yes' : 'No'}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No feedback available for this idea yet.</p>
      )}
    </section>
  );
};

export default ViewFeedback;
