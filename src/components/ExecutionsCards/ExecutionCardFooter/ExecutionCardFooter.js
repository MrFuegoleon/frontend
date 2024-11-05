import React from 'react';
import "./ExecutionCardFooter.css";


const ExecutionCardFooter = ({ showDetails, 
  toggleDetails, 
  ceo_comments, 
  status, 
  id_talent,
  id_performer,
  userId,
  showceopop,
  parsedPeerReviewIds,
  clickreview,
  showsubmitworkpop,
  showworkpopup,
  id }) => {
  const divStyle = { // Taille de police plus grande
    fontWeight: 'bold',
    justifyContent :'center',
    alignItems: 'center'// Poids de police plus épais
  };
  let userIdInt = parseInt(userId, 10);


  return (
    <div className="card-footer">
      <button className="plus-card"  onClick={toggleDetails} style={{ fontSize: "2vw" }}>
        {showDetails   ? '-' : '+'}
      </button>
      {localStorage.getItem("isCEO") === "1" ? (
  <>
    {ceo_comments === null && status === "In review" && id_performer !== parseInt(userId) && (
      <button className="review-card" onClick={() => showceopop(id)}>
        <div style={divStyle}> Evaluate it </div>
      </button>
    )}
    {status === "Not Yet" && id_talent === parseInt(userId) && (
      <button className="review-card">
        <div style={divStyle}> Submit my work </div>
      </button>
    )}
    {status === "On going"  && id_performer === parseInt(userId) && (
      <button className="review-card" onClick={() => showsubmitworkpop(id)} >
        <div style={divStyle}> Submit my work </div>
      </button>
    )}
      {status === "Open"   && (
      <button className="review-card" onClick={() => showworkpopup(id)} >
        <div style={divStyle}> It’s for me </div>
      </button>
    )}
  </>
) : (
  <>
    {  !parsedPeerReviewIds.includes(userIdInt)  && status === "In review" && id_performer !== parseInt(userId) && (
      <button className="review-card" onClick={() => clickreview(id)}>
        <div style={divStyle}> Make a Review</div>
      </button>
    )}
        {  parsedPeerReviewIds.includes(userIdInt)  && status === "In review" && id_performer !== parseInt(userId) && (

        <div style={divStyle}></div>

    )}
      {status === "Open"  && (
      <button className="review-card" onClick={() => showworkpopup(id)} >
        <div style={divStyle}> It’s for me </div>
      </button>
    )}
    {status === "Not Yet" && id_talent === parseInt(userId) && (
      <button className="review-card">
        <div style={divStyle}> Submit my work</div>
      </button>
    )}
    {status === "On going" && id_performer === parseInt(userId)  && (
      <button className="review-card" onClick={() => showsubmitworkpop(id)}>
        <div style={divStyle}> Submit my work</div>
      </button>
    )}
  </>
)}
    </div>
  );
};

export default ExecutionCardFooter;

