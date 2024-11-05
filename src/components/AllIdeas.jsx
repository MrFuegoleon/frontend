import React, { useEffect, useCallback } from 'react';
import './AllIdeas.css';
import heart from '../assets/gem.png';
import pic from '../assets/user profile.jpg';

const AllIdeas = ({
  ideas = [],
  drafts = [],
  votesData = {},
  handleGiveFeedback,
  selectedIdea,
  setSelectedIdea,
  totalUsers,
  loggedInUser,
  handleEditDraft,
  showIdeaForm
}) => {
  const calculateTimeLeft = (ideaDate) => {
    const now = new Date();
    const dueDate = new Date(ideaDate);
    dueDate.setDate(dueDate.getDate() + 7);
    const diffInHours = Math.max(0, Math.floor((dueDate - now) / (1000 * 60 * 60)));

    if (diffInHours <= 0) return { timeLeft: '0h', hasExpired: true };
    return { timeLeft: `${diffInHours}h`, hasExpired: false };
  };

  const handleCardClick = useCallback((idea) => {
    if (idea.is_draft) {
      handleEditDraft(idea);
    } else {
      setSelectedIdea(idea);
      handleGiveFeedback(idea.idea_id);
    }
  }, [handleEditDraft, setSelectedIdea, handleGiveFeedback]);

  const handleButtonClick = useCallback((e, idea) => {
    e.stopPropagation();
    if (idea.is_draft) {
      handleEditDraft(idea);
    } else {
      handleGiveFeedback(idea.idea_id);
    }
  }, [handleEditDraft, handleGiveFeedback]);

  // Reset selection when form is closed
  useEffect(() => {
    if (!showIdeaForm) {
      setSelectedIdea(null);
    }
  }, [showIdeaForm, setSelectedIdea]);

  return (
    <div className="cardsWrapper">
      {[...ideas, ...drafts].map((idea) => {
        const isDraft = idea.is_draft;
        const { num_yes = 0, num_no = 0 } = votesData[idea.idea_id] || {};
        const totalVotes = Number(num_yes) + Number(num_no);
        const rating = totalVotes > 0 ? ((num_yes / totalVotes) * 100).toFixed(2) : 0;
        const participation = totalUsers > 1 ? ((totalVotes / (totalUsers - 1)) * 100).toFixed(2) : 0;
        const { timeLeft, hasExpired } = isDraft ? {} : calculateTimeLeft(idea.date);

        const isSelected = selectedIdea?.idea_id === idea.idea_id;

        return (
          <div
            className={`cardContainer ${isSelected ? 'selectedCard' : ''}`}
            key={idea.idea_id}
            onClick={() => handleCardClick(idea)}
            style={{
              backgroundColor: isDraft ? '#fddbb7' : hasExpired ? '#b7f2fd' : '#b7fdf0',
            }}
          >
            <div className="topSection">
              {!isDraft && (
                <div className="dateBox">
                  <div className="time-left">{timeLeft}</div>
                </div>
              )}
              <div className="heart">
                <img src={heart} className="heartImage" alt="Gem Icon" />
              </div>
            </div>
            <div className="body">
              <h3 className="titleText">{idea.nom}</h3>
              <div className="avatar-container">
                <img src={pic} alt="User Avatar" className="avatar" />
                <p className="Text">{idea.member_name}</p>
              </div>
              {!isDraft && (
                <>
                  <p className="Text2">
                    Yes: <strong>{rating}%</strong>
                  </p>
                  <p className="Text2">
                    Participation: <strong>{participation}%</strong>
                  </p>
                </>
              )}
            </div>
            <div className="buttonSection">
              <button
                className="button"
                onClick={(e) => handleButtonClick(e, idea)}
                data-ideaid={idea.idea_id}
                data-isdraft={isDraft}
              >
                {isDraft ? 'Edit Draft' : 'View Description'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllIdeas;