import React, { useState } from "react";
import ExecutionCardHeader from './ExecutionCardHeader/ExecutionCardHeader';
import ExecutionCardBody from './ExecutionCardBody/ExecutionCardBody';
import ExecutionCardFooter from './ExecutionCardFooter/ExecutionCardFooter';
import useCountdown from "../../pages/ExecutionBoard/useCountdown";
import personna from '../../images/icones/personna.png';
import "./ExecutionCard.css";

const ExecutionInReview = ({
  id,
  description,
  talent,
  performor,
  id_talent,
  id_performer,
  thanks,
  status,
  remainingTime,
  deadline,
  comments,
  commentsInput,
  selfDifficulty,
  selfReactivity,
  clickreview,
  showceopop,
  peerReview_comments,
  peerReview_comments_notYet,
  peerReview_expectations,
  peerReview_reactivity,
  peerReviewers_ids,
  peerReviewers_notYet_ids,
  ceo_comments,
  ceo_expectations,
  ceo_reactivity,
  ceoFeedback_notYet,
  ceoFeedback_rejected,
  date_rejected,
  link,
  linkInput,
  achievement_date,
  isCEO,
  showsubmitworkpop,
  showworkpopup,
  expected_date,
  Instructions,
  linkInstructions,
}) => {
  const { hours, minutes, seconds } = useCountdown(remainingTime);
  const [showDetails, setShowDetails] = useState(false);
  const userName = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  let parsedPeerReviewIds = [];
  if (peerReviewers_ids && typeof peerReviewers_ids === 'string' && peerReviewers_ids.trim() !== '') {
  parsedPeerReviewIds = peerReviewers_ids.split(',').map(id => parseInt(id.trim(), 10));
  }

  if (peerReviewers_notYet_ids && typeof peerReviewers_notYet_ids === 'string' && peerReviewers_notYet_ids.trim() !== '') {
  const parsedPeerReviewNotYetIds = peerReviewers_notYet_ids.split(',').map(id => parseInt(id.trim(), 10));
  parsedPeerReviewIds = [...parsedPeerReviewIds, ...parsedPeerReviewNotYetIds];
  }


  return (
    <div className="message-bubble">
      <ExecutionCardHeader performor={performor} talent={talent} status={status} countdown={{ hours, minutes, seconds }} achievementDate={achievement_date} description={description} personna={personna} thanks={thanks} deadline={deadline} expected_date={expected_date} date_rejected={date_rejected}/>
      <div className="second">
      <ExecutionCardBody
        showDetails={showDetails}
        status={status}
        talent={talent}
        performor={performor}
        userName={userName}
        comments={comments}
        commentsInput={commentsInput}
        link={link}
        linkInput={linkInput}
        selfDifficulty={selfDifficulty}
        selfReactivity={selfReactivity}
        peerReview_comments={peerReview_comments}
        peerReview_comments_notYet={peerReview_comments_notYet}
        peerReview_expectations={peerReview_expectations}
        peerReview_reactivity={peerReview_reactivity}
        peerReviewers_ids={peerReviewers_ids}
        peerReviewers_notYet_ids={peerReviewers_notYet_ids}
        ceo_comments={ceo_comments}
        ceo_expectations={ceo_expectations}
        ceo_reactivity={ceo_reactivity}
        ceoFeedback_notYet={ceoFeedback_notYet}
        ceoFeedback_rejected={ceoFeedback_rejected}
        linkInstructions={linkInstructions}
        Instructions={Instructions}
        deadline={deadline}
        expected_date={expected_date}
      />
      <ExecutionCardFooter 
      showDetails={showDetails} 
      toggleDetails={toggleDetails} 
      ceo_comments={ceo_comments}
      id_talent={id_talent}
      userId={userId}
      isCEO={isCEO} 
      showceopop={showceopop}
      parsedPeerReviewIds={parsedPeerReviewIds}
      clickreview={clickreview}
      status={status} 
      id={id} 
      showsubmitworkpop={showsubmitworkpop}
      showworkpopup={showworkpopup}
      id_performer={id_performer}/>
    </div>
    </div>
  );
};

export default ExecutionInReview;
