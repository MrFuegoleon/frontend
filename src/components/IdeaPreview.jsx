import React, { useState, useEffect } from 'react';
import pic from '../assets/user profile.jpg';
import arrowback from '../assets/arrowback.png';
import Lightbulb from '../assets/lightbulb.png';
import { fetchUserId, fetchIdeaDetails, submitFeedback } from '../API/fetchIdeaPreview';
import './IdeaPreview.css';
import './IdeaForm.css';
import './FeedbackResult.css';
import FeedbackResult from './FeedbackResult';

const IdeaPreview = ({ ideaId, onFlecheClick, votesData }) => {
  const [idea, setIdea] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState('');
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [comment, setComment] = useState('');
  const [contribution, setContribution] = useState('');
  const [error, setError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userType, setUserType] = useState(null); 
  const [feedbackData, setFeedbackData] = useState(null);
  const [voteStatus, setVoteStatus] = useState(null); 
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [hasUserCommented, setHasUserCommented] = useState(false); 

  // Function to calculate time left based on the idea's creation date
  const calculateTimeLeft = (ideaDate) => {
    const now = new Date();
    const dueDate = new Date(ideaDate);
    dueDate.setDate(dueDate.getDate() + 7); 
    const diffInHours = Math.max(0, Math.floor((dueDate - now) / (1000 * 60 * 60)));
    return {
      timeLeft: `${diffInHours}h`,
      hasExpired: diffInHours <= 0,
    };
  };

  useEffect(() => {
    const loadUserId = async () => {
      try {
        const { id, type } = await fetchUserId();
        setUserId(id);
        setUserType(type);

        console.log("Logged in user ID:", id); 
        console.log("Logged in user type:", type); 
      } catch (error) {
        setError('Failed to load user ID. Please try again later.');
      }
    };

    const loadIdeaDetails = async () => {
      try {
        setLoading(true);
        const ideaData = await fetchIdeaDetails(ideaId);
        setIdea(ideaData);

        console.log("Loaded idea details:", ideaData);

        if (ideaData.date) {
          const { timeLeft, hasExpired } = calculateTimeLeft(ideaData.date);
          setTimeLeft(timeLeft);
          setIsExpired(hasExpired);
          setShowFeedbackForm(false);
          setFeedbackData(null);
          setComment('');
          setContribution('');
          setVoteStatus(null);

          // Check if user has already commented
          if (ideaData.feedbacks && Array.isArray(ideaData.feedbacks)) {
            const userHasCommented = ideaData.feedbacks.some(feedback => {
              console.log("Feedback entry:", feedback); 
              console.log("Feedback member_id:", feedback.member_id, "Logged in user ID:", userId); 
              return feedback.member_id === userId;
            });
            setHasUserCommented(userHasCommented);
            console.log("Result of userHasCommented:", userHasCommented);
          } else {
            console.log("No feedbacks data found or feedbacks is not an array.");
          }
        }
      } catch (error) {
        setError('Failed to load idea details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (ideaId) {
      loadIdeaDetails();
    }
    loadUserId();
  }, [ideaId]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const dueDate = new Date(now);
      dueDate.setDate(now.getDate() + 7);
      const diffInHours = Math.max(0, Math.floor((dueDate - now) / (1000 * 60 * 60)));
      return `${diffInHours - 1}h`;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      if (idea && idea.date) {
        const { timeLeft, hasExpired } = calculateTimeLeft(idea.date);
        setTimeLeft(timeLeft);
        setIsExpired(hasExpired);
      }
    }, 3600000);

    return () => clearInterval(timer);
  }, [idea]);

  const getVoteButtonStyle = (buttonType) => {
    if (buttonType === 'yes') {
      return {
        backgroundColor: voteStatus === 'yes' ? '#4CAF50' : '#000000',
        color: voteStatus === 'yes' ? '#ffffff' : '#ffffff',
      };
    } else {
      return {
        backgroundColor: voteStatus === 'no' ? '#f44336' : '#ffffff',
        color: voteStatus === 'no' ? '#ffffff' : '#000000',
      };
    }
  };

  const handleVote = (voteValue) => {
    setVoteStatus(voteValue ? 'yes' : 'no');
    const feedbackPayload = {
      idea_id: ideaId,
      member_id: userId,
      comment: comment.trim(),
      contribution: contribution.trim(),
      vote: voteValue ? '1' : '0',
    };
    setFeedbackData(feedbackPayload);
  };

  const handleSaveForLater = async () => {
    try {
      setSubmitLoading(true);
      setError('');

      if (!feedbackData) {
        throw new Error('Please provide feedback first');
      }

      await submitFeedback(feedbackData, true);
      alert('Feedback saved as draft successfully!');
      setFeedbackData(null);
      setComment('');
      setContribution('');
      setVoteStatus(null);
      setShowFeedbackForm(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleSendFeedback = async () => {
    try {
      setSubmitLoading(true);
      setError('');

      if (!feedbackData) {
        throw new Error('Please provide feedback first');
      }

      await submitFeedback(feedbackData, false);
      alert('Feedback submitted successfully!');
      setFeedbackData(null);
      setComment('');
      setContribution('');
      setVoteStatus(null);
      setShowFeedbackForm(false);
      setFeedbackSubmitted(true);

    } catch (error) {
      setError(error.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  useEffect(() => {
    setFeedbackSubmitted(false);
  }, [idea]);

  if (feedbackSubmitted) {
    return <FeedbackResult idea={idea} onFlecheClick={onFlecheClick} votesData={votesData} userType={userType} />;
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading idea details...</p>
      </div>
    );
  }

  if (error && !idea) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button className="retry-button" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  if (!idea) {
    return (
      <div className="not-found-container">
        <p>Idea not found</p>
        <button className="back-button" onClick={onFlecheClick}>
          Go Back
        </button>
      </div>
    );
  }

  console.log("Current user ID:", userId); 
  console.log("Idea owner ID:", idea.member_id); 
  console.log("Has user commented:", hasUserCommented); 

  return (
    <div className="idea-form-page">
        {onFlecheClick && (
          <button onClick={onFlecheClick} className="back-button">
            <img src={arrowback} alt="Back" className="back-icon" />
          </button>
        )}
      <div className="idea-details">
        <div className="cards-wrapper">
          <div className="card-container">
            <div className="black-card">
              <img src={Lightbulb} className="lamp-icon" alt="Lightbulb icon" />
            </div>
            <div className="black-card">
              <span>{timeLeft}</span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <p className="textarea">{idea.organization || 'ORGANIZATION'}</p>
          <h2 className="idea-title">{idea.nom}</h2>
        </div>

        <div className="avatar-container">
          <img src={pic} alt="User Avatar" className="avatar" />
          <span className="text-sm">{idea.member_name || `Member ID: ${idea.member_id}`}</span>
        </div>

        <div className="flex1">
          <p className="textarea2">PITCH</p>
        </div>

        <div className="space-y-4 mb-6">
          <p className="text-gray-600 text-sm line-clamp-3">
            <span className="font-medium">Description of the idea: </span>
            {idea.description || 'No description provided'}
          </p>
          {idea.importance && (
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Why it matters: </span>
                {idea.importance}
              </p>
            </div>
          )}
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {!showFeedbackForm && !feedbackData && !isExpired && idea.member_id !== userId && !hasUserCommented && (
          <div className="button-container">
            <button 
              type="button" 
              className="myfeed" 
              onClick={() => setShowFeedbackForm(true)}
              disabled={submitLoading}
            >
              MY FEEDBACK <span className="heart-icon">❤️40</span>
            </button>
          </div>
        )}

        {showFeedbackForm && !isExpired && (
          <div className="feedback-section">
            <label className="form-label">My feeling about this idea</label>
            <textarea
              placeholder="Write your thoughts here..."
              className="form-textarea"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              disabled={submitLoading}
            />
            
            <label className="form-label">How can I contribute and when?</label>
            <textarea
              placeholder="Describe how you can help..."
              className="form-textarea"
              value={contribution}
              onChange={(e) => setContribution(e.target.value)}
              disabled={submitLoading}
            />
            
            <div className="all-buttons-container">
              <button 
                type="button" 
                className="share-button3"
                style={getVoteButtonStyle('yes')}
                onClick={() => handleVote(true)}
                disabled={submitLoading}
              >
                YES DO IT
              </button>
              
              <button 
                type="button" 
                className="share-button2"
                style={getVoteButtonStyle('no')}
                onClick={() => handleVote(false)}
                disabled={submitLoading}
              >
                NO THANKS! 
              </button>
              
              <button 
                type="button" 
                className="button_underlined2"
                onClick={handleSendFeedback}
  
                disabled={submitLoading || !feedbackData}
              >
                SEND MY FEEDBACK
              </button>
              <button 
                type="button" 
                className="button_underlined"
                onClick={handleSaveForLater}
                disabled={submitLoading || !feedbackData}
              >
                SAVE FOR LATER
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaPreview;
