import { useEffect, useRef } from "react";
import "./PeerReviewPopUp.css";

const PeerReviewPopUp = ({
  setShowPopUpPeerReview,
  setPeerReview,
  setPeerReviewNotYet,
}) => {
  // TODO: add real information in jsonData
  const handleClickNotYet = () => {
    setShowPopUpPeerReview(false);
    setPeerReviewNotYet(true);
  };


  const handleClickEvaluate = () => {
    setShowPopUpPeerReview(false);
    setPeerReview(true);
  };

  const popUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowPopUpPeerReview(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopUpPeerReview]);



  return (
    <div ref={popUpRef} className="submition-pop-up-work-peerreview">
    {/*<h2 style={{wordWrap: 'break-word'} }>{executor}'s work</h2>*/}
    <div className="input-circle">
    <div className="span">
    {/*<div className="files"><span class="circle"></span><div className="span-text">Files 1</div></div> */}
    <h1 style={{wordWrap: 'break-word' ,fontFamily: 'Kumbh Sans',fontSize:'2.2vw'}}>For this execution, would you like to gratify the Talent with Thanks ?</h1>
    </div>

    </div>
    <div className="container-button-ceo">
    <button
      className="button1"
      onClick={handleClickNotYet}
    >     
      Not Yet, should try again
    </button>
    <button
      className="button3"
      onClick={handleClickEvaluate}
    >     
      He deserves Thanks !
    </button>
    </div>
    </div>
  );
};

export default PeerReviewPopUp;
