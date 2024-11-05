import React from 'react';
// Import styles and utilities correctly

import { complexity, repetition, result_quality, reactivity } from '../utils'; // This should be the correct import
import "./ExecutionCardBody.css";

const divStyle = { // Taille de police plus grande
  fontWeight: 'bold',
  justifyContent :'center',
  alignItems: 'center'// Poids de police plus épais
};


const ExecutionCardBody = ({
  showDetails,
  status,
  talent,
  performor,
  userName,
  comments,
  commentsInput,
  link,
  linkInput,
  Instructions,
  linkInstructions,
  selfDifficulty,
  selfReactivity,
  peerReview_comments,
  peerReview_expectations,
  peerReview_reactivity,
  peerReview_comments_notYet,
  peerReviewers_ids,
  peerReviewers_notYet_ids,
  ceo_comments,
  ceo_expectations,
  ceo_reactivity,
  ceoFeedback_notYet,
  ceoFeedback_rejected,
  deadline,
  expected_date
}) => {
  return (
    <div>
    {showDetails && (
      <div className="additional-info">
        <div className="additional-first">
                <div className="comment-link">
                <div style={{display:"flex"}}>
                {comments ?(<div className="comments-card">
                  <div>How it's done and the results: </div><div style={divStyle}> {comments} </div></div>):(
                   <></>
                )}
                  {link !== null && link.trim().length !== 0 ? (
                  <div className="doc-card" style={{marginLeft:'2vw'}}>
                  <p>Output Doc : <a href={link} target="_blank" rel="noreferrer">Clic here</a>.</p>
                  </div>) : (
                  <></>
                  )}
                  {status ==="Achieved"  || status === "Rejected" || (performor === userName && status === "In review" ) ? ( 
                  <div className="auto-eval-card">
                    <div>Auto Evaluation:</div>
                    <div className="com-rep">Complexity : <div style={divStyle}>{complexity[selfDifficulty]}</div></div>
                    <div className="com-rep">Repetition : <div style={divStyle}>{repetition[selfReactivity]}</div> </div>
                  </div>
                  ):status === "On going" ?(<></>)
                  :(<></>)}
                  </div>
                  <div style={{display:"flex"}}>
                  {commentsInput  ?( <div className="comments-card">
                  <div>The projected how : </div><div style={divStyle}> {commentsInput} </div> 
                  </div>):(<></>)}
                  {linkInput !== null && linkInput.trim().length !== 0 ? (
                    <div className="doc-card"style={{marginLeft:'2vw'}}>
                  <p>Documentation input : <a href={linkInput} target="_blank" rel="noreferrer">Clic here</a>.</p>
                  </div>
                ) : (<></>)}
                  {status !=="On going" && deadline ?(<div className="doc-card" style={{marginLeft:'2vw'}}>Due Date : <div style={divStyle}>{deadline && deadline.substring(0,10)}</div></div>)
                  :(<></>)} 
                </div>
                <div style={{display:"flex"}}>
                {Instructions ?( <div className="comments-card">
                  <div>Instructions : </div><div style={divStyle}> {Instructions} </div> 
                  </div>):(<></>)}
                  {linkInstructions ? (<div className="doc-card"style={{marginLeft:'2vw'}}>
                  <p>Instructions doc : <a href={linkInstructions} target="_blank" rel="noreferrer">Clic here</a>.</p>
                  </div>):(<></>) } 
                  {status !=="Open"  &&  expected_date ?(<div className="doc-card" style={{marginLeft:'2vw'}}>Expected Date : <div style={divStyle}>{expected_date && expected_date.substring(0,10)}</div></div>)
                  :(<></>)} 
                  </div>
                </div>
        </div>
        {status ==="Achieved"  || status === "Rejected"? ( 
        <div className="additional-second">
      
          {ceo_comments === '' && ceo_comments !== null ?(<div className="ceo_comments-card"><p>No CEO FeedBack for this execution</p></div>):ceo_comments !== '' && ceo_comments !== null ?( <div className="ceo_comments-card">
          <div>CEO Evaluation Comment :<div style={divStyle}> {ceo_comments} </div> </div>  </div>):(<></>)}

          {ceo_expectations !==null && ceo_reactivity!==null  && (      
                <div className="ceo-eval-card"><div>CEO Evaluation:</div>
                <div className="com-rep"> Result Quality :<div style={divStyle}> {result_quality[ceo_expectations]} </div></div>  
                <div className="com-rep">Reactivity :<div style={divStyle}> {reactivity[ceo_reactivity]} </div></div>
                </div>)}
          {status === "Not Yet"  &&(<div className="ceo-eval-card">CEO Evaluation (NotYet) :<div style={divStyle}> {ceoFeedback_notYet}</div> </div>)}
          {(status === "Rejected" )  &&(<div className="ceo-eval-card">CEO Evaluation (Rejected) :<div style={divStyle}> {ceoFeedback_rejected}</div> </div>)}
        </div>
        ):(<></>)}
    
        {status ==="Achieved"  || status === "Rejected"? ( 
        <div className="additional-second">
        {/* Vérifier si peerReview_comments existe et n'est pas null avant de traiter */}
        { typeof peerReview_comments === 'string'  && (
        <div className="peer_review_comment-card">
          {peerReviewers_ids.split(',').map((comment, index) => (
              peerReview_comments.split(',')[index].trim().length === 0 || peerReview_comments === "" ?(<div className="comments-peer-card"><p>No Feedback for Anonyme PeerReview {index + 1}</p></div>):(               
                <div className="comments-peer-card">
                 Anonyme PeerReview FeedBack {index + 1}:
                 <div key={`peerComment_${index}`} style={divStyle}>
                 {peerReview_comments.split(',')[index].trim()}
                 </div>
                </div>)
          ))}
        </div>
        )}
        {/* Vérifier si peerReview_expectations et peerReview_reactivity sont des chaînes valides avant de traiter */}
        {peerReview_expectations && typeof peerReview_expectations === 'string' && peerReview_reactivity && typeof peerReview_reactivity === 'string' && peerReview_expectations.length > 0 && peerReview_reactivity.length > 0 && (

<div className="peer_review_eva-card">
      {peerReview_expectations.split(',').map((expectation, index) => (
        peerReview_reactivity.split(',')[index] && (
          <div className="eval-peer-card">
            PeerReview Evaluation {index + 1}: 
          <div className="peerExpectation-card" key={`peerExpectation_${index}`} >
          <div className="com-rep">Result Quality :<div style={divStyle}>  {result_quality[expectation.trim()]} </div> </div>
          <div className="com-rep"> Reactivity:<div style={divStyle}> {reactivity[peerReview_reactivity.split(',')[index].trim()]}</div></div>
          </div>
          </div>
        )
      ))}
  </div>
)}
</div>
    ):(<></>)}

{typeof peerReview_comments_notYet === 'string' && (status ==="Achieved"  || status === "Rejected") && (
<div className="peer_review_comment-card">
  { typeof peerReview_comments_notYet === 'string'  && (
        <div className="peer_review_comment-card">
          {peerReviewers_notYet_ids.split(',').map((comment, index) => (
              peerReview_comments_notYet.split(',')[index].trim().length === 0 || peerReview_comments_notYet === "" ?(<div className="comments-peer-card"><p>No Feedback for Anonyme PeerReview {index + 1}</p></div>):(               
                <div className="comments-peer-card">
                 Anonyme PeerReview FeedBack Not Yet{index + 1}:
                 <div key={`peerComment_${index}`} style={divStyle}>
                 {peerReview_comments_notYet.split(',')[index].trim()}
                 </div>
                </div>)
          ))}
        </div>
  )}
</div>
)}
    </div>
    )}
    </div>
  );
};


export default ExecutionCardBody;
