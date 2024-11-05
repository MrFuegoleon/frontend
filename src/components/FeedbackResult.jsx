import React from 'react';
import './FeedbackResult.css';
import BarPourcentage from './BarPourcentage';
import arrowback from '../assets/arrowback.png';
import Lightbulb from '../assets/lightbulb.png';

const FeedbackResult = ({ idea, onFlecheClick, votesData, userType }) => {
    const { num_yes = 0, num_no = 0 } = votesData[idea.idea_id] || {};
    const totalVotes = Number(num_yes) + Number(num_no);
    const ratingYes = totalVotes > 0 ? ((num_yes / totalVotes) * 100).toFixed(2) : 0;
    const ratingNo = totalVotes > 0 ? ((num_no / totalVotes) * 100).toFixed(2) : 0;

    return (
        <div className="feedback-result">
            <div className="cadre">
                <button onClick={onFlecheClick} className="back-button">
                    <img src={arrowback} alt="Back" className="back-icon" />
                </button>
                <div className="black-card">
                    <img src={Lightbulb} className="lamp-icon" alt="Lightbulb icon" />
                </div>

                <div className="feedback-header">
                    <h1>{idea.nom}</h1>
                    <p>{idea.member_name}</p>
                </div>

                <div className="section pitch">
                    <h2>Description</h2>
                    <p className="text-gray-600 text-sm line-clamp-3">
                        {idea.description || 'No description provided'}
                    </p>
                </div>

                <div className="section-feedbacks">
                    <h2>Feedbacks</h2>
                    <div style={{ overflowX: 'auto', maxHeight: '500px', padding: '5%', width: '600px' }}>
                        {idea.feedbacks && idea.feedbacks.length > 0 ? (
                            idea.feedbacks.map(feedback => (
                                <div key={feedback.id}>
                                    <div className={`feedback-item ${feedback.position}`}>
                                        <p className="feedback-text">{feedback.comment}</p>
                                        <div className="triangle" />
                                    </div>
                                    <div className="avatar-contain">
                                        <div className="avat">
                                            <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`} alt="User Avatar" />
                                            <span className="user-id">(ID: {feedback.userId})</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="no-feedback">No feedback available.</p>
                        )}
                    </div>
                </div>

                <BarPourcentage ratingYes={ratingYes} ratingNo={ratingNo} />

                {userType === 'CEO' && (
                    <div className="ceo-approval">
                        <div className="actions">
                            <button className="action-button positive">MAKE IT HAPPEN</button>
                            <button className="action-button negative">NO YET</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeedbackResult;
