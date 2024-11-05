import {  useEffect, useRef } from "react";
import "./CEOreviewPopUp.css";

const CEOreviewPopUp = ({
  setShowPopUpCEO,
  setCEOReview,
  setCEONotYet,
  setCEORejected,

}) => {
  // TODO: add real information in jsonData
  const handleClickNotYet = () => {
    setShowPopUpCEO(false);
    setCEONotYet(true);
  };

  const handleClickreject = () => {
    setShowPopUpCEO(false);
    setCEORejected(true);
  };

  const handleClickEvaluate = () => {
    setShowPopUpCEO(false);
    setCEOReview(true);
  };

  const popUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowPopUpCEO(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopUpCEO]);



  return (
    <div ref={popUpRef} className="submition-pop-up-work-ceo">
    {/*<h2 style={{wordWrap: 'break-word'} }>{executor}'s work</h2>*/}
    <div className="input-circle">
    <div className="span">
    {/*<div className="files"><span class="circle"></span><div className="span-text">Files 1</div></div> */}
    {/*<div className="files"><span class="circle"></span><div className="span-text">{link === "" ?(<a>No link </a>):(<a href={link} target="_blank">Link </a>)}</div></div>*/}
    <h1 style={{wordWrap: 'break-word' ,fontFamily: 'Kumbh Sans' ,fontSize:'2.2vw'}}> For this execution, would you like to gratify the Talent with Thanks ?</h1>
    </div>
    </div>
    <div className="container-button-ceo">
    <button
      className="button1"
      onClick={handleClickNotYet}
    >     
      Not Yet, let him try again
    </button>
    <button
      className="button2"
      onClick={handleClickreject}
    >     
      No Thanks ! Next
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

export default CEOreviewPopUp;
