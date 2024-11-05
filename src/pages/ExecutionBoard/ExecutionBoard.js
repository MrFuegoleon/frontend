import React, { useState, useEffect, useContext , useRef} from "react";
import "./ExecutionBoard.css";
// import Sidebar from "../../../components/Sidebar";
import Sidebar from "../../components/Sidebare/SidebarDIO.js";
import PeerReview from "../Review/PeerReview/PeerReview.js";
import SelfReview from "../Review/SelfReview/SelfReview.js";
import CEOReview from "../Review/CEOReview/CEOReview.js";
import Wallet from "../../components/Wallet/Wallet";
import ThanksPopUp from "../../components/Wallet/ThanksPopUp";
import BCTPopUp from "../../components/Wallet/B.C.TPopUp";
import CashPopUp from "../../components/Wallet/CashPopUp";

import DeadlineAlreadyDonePopUp from "../../components/PopUp/ExecutionCreationPopUp/DeadlineAlreadyDone.js";
import DeadlineNotYet from "../../components/PopUp/ExecutionCreationPopUp/DeadlineNotYet.js";
import WorkTobeDone from "../../components/PopUp/ExecutionCreationPopUp/WorkTobeDone.js";
import AddLinkNotYet from "../../components/PopUp/ExecutionCreationPopUp/AddLinkNotYet.js";

import DeadlineForOthers from "../../components/PopUp/ExecutionCreationPopUp/DeadlineForOthers.js";
import WorkForOthers from "../../components/PopUp/ExecutionCreationPopUp/WorkForOthers.js";
import AddLinkForOthers from "../../components/PopUp/ExecutionCreationPopUp/AddLinkForOthers.js"

import ExecutionMessaging from "./ExecutionMessaging.js";
import DoerPopUp from "../../components/PopUp/ExecutionCreationPopUp/DoerPopUp.js";


import TobeAlreadyDonePopUp from "../../components/PopUp/ExecutionCreationPopUp/TobeAlreadyDonePopUp.js";
import WorkAlreadyDone from "../../components/PopUp/ExecutionCreationPopUp/WorkAlreadyDone.js";
import AddLink from "../../components/PopUp/ExecutionCreationPopUp/AddLink.js";
import ExecutionInReview from "../../components/ExecutionsCards/ExecutionCard.js";


import CEOreviewPopUp from "../../components/PopUp/ReviewPopUp/CEOreviewPopUp.js";

import CEONotYet from "../Review/CEOReview/CEONotYet.js";
import CEORejected from "../Review/CEOReview/CEORejected.js";
import PeerReviewNotYet from "../Review/PeerReview/PeerReviewNotYet.js";
import PeerReviewPopUp from "../../components/PopUp/ReviewPopUp/PeerReviewPopUp.js";

import { TasksContext } from "../TasksContext";




const ExecutionBoard = ({page = "workboard"}) => {


  const { dioTasks, selectedDioId } = useContext(TasksContext);

  const [showBCTPopUp, setShowBCTPopUp] = useState(false);
  const [showThanksPopUp, setShowThanksPopUp] = useState(false);
  const [showCashPopUp, setShowCashPopUp] = useState(false);

  const [showPopUp, setShowPopUp] = useState(false);
  const [showPopUpWorkDone, setShowPopUpWorkDone] = useState(false);
  const [showPopUpWork, setShowPopUpWork] = useState(false);
  const [showPopUpLink, setShowPopUpLink] = useState(false);
  const [createExecutionText, setCreateExecutionText] = useState("");
  const [WorkText, setWorkText] = useState("");
  const [CommentCEO, setCommentCEO] = useState("");
  const [CommentPeerReview, setCommentPeerReview] = useState("");
  let [currentExecution, setCurrentExecution] = useState(null);

  const [alreadyCreated, setAlreadyCreated] = useState(false);
  const [showPopUpDeadlineAlreadyDone, setShowPopUpDeadlineAlreadyDone] = useState(false);
  
  const [forOthers,setForOthers] = useState(false);

  const [showPopUpWorkNotYet, setShowPopUpWorkNotYet] = useState(false);
  const [showPopUpDeadlineNotYet, setShowPopUpDeadlineNotYet] = useState(false);
  const [showPopUpLinkNotYet, setShowPopUpLinkNotYet] = useState(false);
  
  const [showPopUpWorkForOthers, setShowPopUpWorkForOthers] = useState(false);
  const [showPopUpDeadlineForOthers, setShowPopUpDeadlineForOthers] = useState(false);
  const [showPopUpLinkForOthers, setShowPopUpLinkForOthers] = useState(false);

  const [Instructions, setInstructions] = useState("");
  const [LinkInstructions , setLinkInstructions] = useState("")
  const [ExpectedDate, setExpectedDate] = useState("")
  
  const [deadline, setDeadline] = useState("");

  let [linkto, setLinkto] = useState(null);

  const [feedbackCEO, setFeedbackCEO] = useState("");
  const [link, setLink] = useState(""); // State to store link value

  const [showPopUpPeerReview, setShowPopUpPeerReview] = useState(false);

  const [ceoNotYet, setCeoNotYet] = useState(false);
  const [ceoRejected, setRejected] = useState(false);
  const [peerReviewNotYet, setpeerReviewNotYet] = useState(false);
  let [name, setName] = useState(null);

  const [showPopUpCEO, setShowPopUpCEO] = useState(false);
  const [ceoReview, setCeoReview] = useState(false);
  const [executionId, setExecutionId] = useState(0);
  const [
    creationExecutionWorkAlreadyDone,
    setCreationExecutionWorkAlreadyDone,
  ] = useState(false);



  const [showPeerReview, setShowPeerReview] = useState(false);

  let handlePeerReviewClick = (executionId, name ,link) => {
    setShowPopUpPeerReview(true);
    setCurrentExecution(executionId);
    setName(name);
    setLinkto(link)
  };
  let handleCEOReview = (executionId , name ,link) => {
    setCurrentExecution(executionId); // Set the ID of the execution card clicked
    setShowPopUpCEO(true);
    setName(name);
    setLinkto(link) // Toggle the CEO review popup
  };

  let handleMakeWorkDoneClick = (executionId) => {
    setShowPopUpWork(true);
    setCurrentExecution(executionId);
    setExecutionId(executionId);
  };

  let handleMakeWorkClick = (executionId) => {
    setShowPopUpWorkDone(true);
    setAlreadyCreated(true);
    setForOthers(true);
    setCurrentExecution(executionId);
    setExecutionId(executionId);
  };

  const [selectedStatus, setSelectedStatus] = useState("My Ongoing"); // Initialize with "All" or any default value

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  localStorage.setItem("DOId", selectedDioId);
  // Filter executions based on the selected status
  let filteredExecutions = dioTasks.filter((execution) => {
    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');

    if (selectedStatus === "All") {
      return true; // Show all executions if "All" is selected
    } else if(selectedStatus === "My Ongoing"){
      return execution.talent_name === userName && execution.status_ === "On going";
    } else if(selectedStatus === "CEO Evaluation" ){
      return execution.status_ ==="In review" && execution.talent_name !== userName 
      && execution.ceo_comments ===null 
    } else if (selectedStatus === "Peer Review") {
      return (
        execution.status_ === "In review" &&
        execution.talent_name !== userName &&
        (execution.peer_review_ids?.indexOf(userId) === -1 || execution.peer_review_ids === null)
      );
    } else if (selectedStatus === "All mine") {
      return execution.talent_name === userName ; // Show all executions if "All" is selected
    } else if(selectedStatus === "My Ongoing"){
      return execution.talent_name === userName && execution.status_ === "On going";
    } else if(selectedStatus === "My Achieved" ){
      return execution.status_ ==="Achieved" && execution.talent_name === userName 
    } else if(selectedStatus === "My Rejected"){
      return execution.status_ ==="Rejected" && execution.talent_name === userName 
    }
    else {
      return true;
    }
  });


  if (page === "Feed") {
    filteredExecutions = dioTasks
  }
  filteredExecutions.sort((a, b) => a.id - b.id);
  
const feed = filteredExecutions.map((execution) => {
    const commonProps = {
        id: execution.id,
        description: execution.exec_description,
        talent: execution.talent_name,
        performor: execution.performor_name,
    };

    const reviewProps = {
        ...commonProps,
        id_talent: execution.id_talent_creator,
        id_performer:execution.id_talent_performor,
        status: execution.status_,
        comments: execution.review_comments,
        selfDifficulty: execution.review_difficulty,
        selfReactivity: execution.review_reactivity,
        clickreview: () => handlePeerReviewClick(execution.id, execution.talent_name, execution.documentation_link),
        showceopop: () => handleCEOReview(execution.id, execution.talent_name, execution.documentation_link),
        currentExecution: () => setCurrentExecution(execution.id),
        ceo_comments: execution.ceo_comments,
        ceo_expectations: execution.ceo_expectations,
        ceo_reactivity: execution.ceo_reactivity,
        remainingTime: execution.remaining_time,
        link: execution.documentation_link,
        achievement_date: execution.creation_date,
        thanks: execution.score_thanks,
        peerReview_comments: execution.peer_review_comments,
        peerReview_comments_notYet: execution.peer_review_comments_notYet,
        peerReviewers_ids: execution.peer_review_ids,
        peerReviewers_notYet_ids: execution.peer_review_notYet_ids,
        peerReview_expectations: execution.peer_review_expectations,
        peerReview_reactivity: execution.peer_review_reactivity,
        ceoFeedback_notYet: execution.ceo_feedback_notYet,
        ceoFeedback_rejected: execution.ceo_feedback_rejected,
        peerReview_notYet_comments: execution.peerReview_feedback_notYet,
        commentsInput: execution.talent_comment,
        linkInput: execution.input_link,
        Instructions: execution.Instructions,
        linkInstructions: execution.Instructions_doc,
        expected_date: execution.Expected_date,
        deadline: execution.deadline,
    };

    switch (execution.status_) {
        case "Open":
        case "Rejected":
        case "On going":
        case "In review":
        case "Achieved":
            return (
                <ExecutionInReview
                    {...reviewProps}
                    showsubmitworkpop={execution.status_ === "On going"  ? () => handleMakeWorkDoneClick(execution.id) : undefined}
                    showworkpopup={ execution.status_ === "Open" ? () => handleMakeWorkClick(execution.id) : undefined}
                    date_rejected={execution.status_ === "Rejected" ? execution.date_rejected: undefined}
                />
            );
        default:
            return <></>;
    }
});

const myDivRef = useRef();
const DOName = localStorage.getItem("DOName")


useEffect(() => {
  if (myDivRef.current) {
    myDivRef.current.scrollTop = myDivRef.current.scrollHeight - myDivRef.current.clientHeight;
  }
  // eslint-disable-next-line
}, [myDivRef.current]);

  return (
    <div className="container1">
      <Sidebar/>
      {creationExecutionWorkAlreadyDone ? (
        <SelfReview
          executionDescription={createExecutionText}
          setShowEvaluation={setCreationExecutionWorkAlreadyDone}
          executionId={executionId}
          executionComment={WorkText}
          executionLink={link}
        />):
        showPeerReview ? (
          <PeerReview
            executionId={currentExecution}
            setShowPeerReview={setShowPeerReview}
          />
      ) : ceoReview ? (
        <CEOReview
          executionId={currentExecution}
          setShowEvaluation={setCeoReview}
          comments={CommentCEO}
        /> 
      ): ceoNotYet ? (  
        <CEONotYet
          executionId={currentExecution}
          feedback={feedbackCEO}
          setFeedback={setFeedbackCEO}
        /> ):ceoRejected ? (
          <CEORejected
          executionId={currentExecution}
          feedback={feedbackCEO}
          setFeedback={setFeedbackCEO}
          />
        ):peerReviewNotYet ?(
        <PeerReviewNotYet
          executionId={currentExecution}
          feedback={feedbackCEO}
          setFeedback={setFeedbackCEO}
        /> 
      ) : (
        <div className="main-content">
                                <Wallet   
            setShowBCTPopUp ={setShowBCTPopUp}
            setShowThanksPopUp ={setShowThanksPopUp}
            setShowCashPopUp = {setShowCashPopUp}
            insideDO={true}
            />
            {showBCTPopUp && (
            <BCTPopUp
            setShowBCTPopUp = {setShowBCTPopUp}
            />
            )}
            {showThanksPopUp && (
            <ThanksPopUp
            setShowThanksPopUp = {setShowThanksPopUp}
            />
            )}
            {showCashPopUp && (
            <CashPopUp
            setShowCashPopUp = {setShowCashPopUp}
            />
            )}

        {/* Select button to choose status */}
        { page === "Feed" ? (<>  
          <div className="execution-board">
            <h1>{DOName}</h1>
            <div  className="barre-reche">
            <input  placeholder="Search"></input>
            </div>
          </div>
       </>
    ) : page ==="workboard" ?( <> 
              <div className="execution-board">
          <h1>{DOName}</h1>
          <div> {localStorage.getItem("isCEO") === "1" ? (   
      <select value={selectedStatus} onChange={handleStatusChange}>
      <option value="My Ongoing">My Ongoing</option>
      <option value="CEO Evaluation">CEO Evaluation</option>
      <option value="In progress">Execution Authorization</option>
      </select>

      ) : (
        <select value={selectedStatus} onChange={handleStatusChange}>
        <option value="My Ongoing">My Ongoing</option>
        <option value="Peer Review">Peer Reviews</option>
        </select>
    )}       </div>
    </div></>): page ==="archives" ?( <>  <div className="execution-board">
          <h1>{DOName}</h1>
          <div> {localStorage.getItem("isCEO") === "1" ? (   
      <select value={selectedStatus} onChange={handleStatusChange}>
      <option value="All mine">All mine</option>
      <option value="My Ongoing">My Ongoing</option>
      <option value="My Achieved">My Achieved</option>
      <option value="My Rejected">My Rejected</option>
      <option value="My Validated">My Validated</option>
      <option value="My Refused">My Refused</option>
      </select>
      ) : (
        <select value={selectedStatus} onChange={handleStatusChange}>
      <option value="All mine">All mine</option>
      <option value="My Ongoing">My Ongoing</option>
      <option value="My Achieved">My Achieved</option>
      <option value="My Rejected">My Rejected</option>
      <option value="My Validated">My Validated</option>
      <option value="My Refused">My Refused</option>
        </select>
    )} </div></div> 
    </>):(<> </>)}
          <div className="execution-container">
            { page === "workboard" ? ( <div className="messages"  style={{
              height: '62vh', // Adjust height as needed
              overflowY: 'scroll',
              marginBottom:'1vh',
              marginLeft: '2.2vw',
              paddingRight: '2.8vw',
              scrollbarWidth: '20px', // Largeur de la barre de défilement
              scrollbarColor: '#ccc #f4f4f4'
               // Optional, might not work in all browsers
        }}>{feed}</div>) :(<div className="messages"  ref={myDivRef}   style={{
          height: '62vh', // Adjust height as needed
          overflowY: 'scroll',
          marginBottom:'1vh',
          marginLeft: '2.2vw',
          paddingRight: '2.8vw',
          scrollbarWidth: '20px', // Largeur de la barre de défilement
          scrollbarColor: '#ccc #f4f4f4'
           // Optional, might not work in all browsers
    }}>{feed}</div>)}

        </div>
        <ExecutionMessaging
              createExecutionText={createExecutionText}
              setCreateExecutionText={setCreateExecutionText}
              setShowPopUp={setShowPopUp}
            />
          {/* Fin Messaging */}
          {showPopUp && (
            <DoerPopUp
              executionDescription={createExecutionText}
              setShowPopUp={setShowPopUp}
              setShowPopUpWorkDone={setShowPopUpWorkDone}
              setShowPopUpWorkForOthers={setShowPopUpWorkForOthers}
            />
          )}
          {showPopUpWorkDone && (
            <TobeAlreadyDonePopUp
            setShowPopUpWorkDone={setShowPopUpWorkDone}
            setShowPopUpWork={setShowPopUpWork}
            setShowPopUpWorkNotYet={setShowPopUpWorkNotYet}
            setExecutionId={setExecutionId}
            alreadyCreated={alreadyCreated}
            />
          )}
          {showPopUpWork && (
            <WorkAlreadyDone
            setShowPopUpDeadlineAlreadyDone = {setShowPopUpDeadlineAlreadyDone}
            setShowPopUpWork={setShowPopUpWork}
            setSelfReview={setCreationExecutionWorkAlreadyDone}
            initialWorkText={WorkText}
            setWorkText={setWorkText}
            />
          )}
          {showPopUpDeadlineAlreadyDone && (
            <DeadlineAlreadyDonePopUp
            setShowPopUpLink = {setShowPopUpLink}
            setShowPopUpDeadlineAlreadyDone = {setShowPopUpDeadlineAlreadyDone}
            deadline = {deadline}
            setDeadline = {setDeadline}
            />
          )}
          {showPopUpWorkNotYet && (
            <WorkTobeDone
              setShowPopUpDeadlineNotYet={setShowPopUpDeadlineNotYet}
              setShowPopUpWorkNotYet={setShowPopUpWorkNotYet}
              initialWorkText={WorkText}
              setWorkText={setWorkText}
            />
          )}
          {showPopUpDeadlineNotYet && (
            <DeadlineNotYet
              setShowPopUpLinkNotYet={setShowPopUpLinkNotYet}
              setShowPopUpDeadlineNotYet={setShowPopUpDeadlineNotYet}
              setDeadline={setDeadline}
              initialWorkText={WorkText}
              setWorkText={setWorkText}
            />
          )}
          {showPopUpWorkForOthers && (
            <WorkForOthers
              setShowPopUpDeadlineForOthers={setShowPopUpDeadlineForOthers}
              setShowPopUpWorkForOthers={setShowPopUpWorkForOthers}
              initialWorkText={Instructions}
              setWorkText={setInstructions}
            />
          )}
          {showPopUpDeadlineForOthers && (
            <DeadlineForOthers
              setShowPopUpLinkForOthers={setShowPopUpLinkForOthers}
              setShowPopUpDeadlineForOthers={setShowPopUpDeadlineForOthers}
              setDeadline={setExpectedDate}
              initialWorkText={Instructions}
              setWorkText={setInstructions}
            />
          )}
          {showPopUpLink && (
            <AddLink
            setShowPopUpLink={setShowPopUpLink}
            setSelfReview={setCreationExecutionWorkAlreadyDone}
            initialWorkText={WorkText}
            setWorkText={setWorkText}
            executionComment={WorkText}
            link={link}
            setLink={setLink}
            alreadyCreated={alreadyCreated}
            executionId={executionId}
            />
          )}
          {showPopUpLinkNotYet && (
            <AddLinkNotYet
              setShowPopUpLinkNotYet={setShowPopUpLinkNotYet}
              setExecutionId={setExecutionId}
              executionId={executionId}
              initialWorkText={WorkText}
              executionComment={WorkText}
              executionDescription={createExecutionText}
              setWorkText={setWorkText}
              deadline={deadline}
              link={link}
              setLink={setLink}
              alreadyCreated={alreadyCreated}
              forOthers={forOthers}
            />)}
          {showPopUpLinkForOthers && (
            <AddLinkForOthers
              setShowPopUpLinkForOthers={setShowPopUpLinkForOthers}
              setExecutionId={setExecutionId}
              executionDescription={createExecutionText}
              initialWorkText={Instructions}
              executionComment={Instructions}
              setWorkText={setInstructions}
              deadline={ExpectedDate}
              link={LinkInstructions}
              setLink={setLinkInstructions}
            />
          )}
          {showPopUpCEO && ( 
           <CEOreviewPopUp
           setShowPopUpCEO={setShowPopUpCEO}
           setCEOReview={setCeoReview}
           comments={CommentCEO}
           setComments={setCommentCEO}
           executor={name}
           link={linkto}
           setCEONotYet={setCeoNotYet}
           setCEORejected={setRejected}
           />
      )}
        {showPopUpPeerReview && ( 
           <PeerReviewPopUp
           setShowPopUpPeerReview={setShowPopUpPeerReview}
           setPeerReview={setShowPeerReview}
           comments={CommentPeerReview}
           setComments={setCommentPeerReview}
           executor={name}
           link={linkto}
           setPeerReviewNotYet={setpeerReviewNotYet}
           />
      )}
        </div>
      )}
    </div>
  );
};
export default ExecutionBoard;