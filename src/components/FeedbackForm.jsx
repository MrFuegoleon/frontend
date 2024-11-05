import React, { useState } from 'react';
import './FeedbackForm.css';

function FeedbackForm({ idea, handleSubmitFeedback }) {
  const [positiveFeedback, setPositiveFeedback] = useState('');
  const [rating, setRating] = useState(null); // Yes/No rating

  const submitFeedback = () => {
    if (positiveFeedback && rating) {
      // Pass the rating (yes/no) along with positive feedback
      handleSubmitFeedback(idea, positiveFeedback, rating);
    } else {
      console.log('Please provide feedback and select a rating.');
    }
  };

  const saveForLater = () => {
    console.log('Feedback saved for later');
    // Logic for saving feedback can go here
  };

  return (
    <div className="feedbackForm">
      <h1>{idea.nom}</h1>

      <div className="feedbackSection">
        <p>
          What do you feel about this idea and can you contribute?
        </p>
        <textarea
          placeholder="Give your feedback"
          value={positiveFeedback}
          onChange={(e) => setPositiveFeedback(e.target.value)}
        />
      </div>

      <div className="feedbackSection">
        <p>Did you find this useful?</p>
        <label>
          <input
            type="radio"
            value="yes"
            checked={rating === 'yes'}
            onChange={() => setRating('yes')}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={rating === 'no'}
            onChange={() => setRating('no')}
          />
          No
        </label>
      </div>

      <div className="buttonGroup">
        <button onClick={submitFeedback}>Submit Feedback</button>
        <button onClick={saveForLater} className="secondaryButton">Save for Later</button>
      </div>
    </div>
  );
}

export default FeedbackForm;
