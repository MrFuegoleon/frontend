import { useState,  useEffect, useRef } from "react";
import "./Work.css";

const WorkTobeDone = ({
  setShowPopUpDeadlineNotYet,
  setShowPopUpWorkNotYet,
  initialWorkText, // Renamed the prop to initialWorkText
  setWorkText,
}) => {
  // TODO: add real information in jsonData

  const handleClick = () => {
    if (workText.trim() !== "") {
    setShowPopUpWorkNotYet(false);
    setShowPopUpDeadlineNotYet(true);
  } else {
    alert("Please explain how will you do it.");
  }
  };
  const [workText, setLocalWorkText] = useState(initialWorkText);
 // State to manage link input visibility



  const popUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowPopUpWorkNotYet(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopUpWorkNotYet]);




  return (
    <div ref={popUpRef} className="submition-pop-up-work">
    <h2>How are you going to do that ?</h2>

<textarea
  className="evaluation-textarea"
  placeholder="If you start planning your task now, you're 58% more likely to finish it on time !"
  value={workText}
  maxLength="500"
  onChange={(e) => {
    setLocalWorkText(e.target.value);
    setWorkText(e.target.value); // Update the parent's state
  }}
  onKeyDown={(e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.target;
      const newText =
        workText.substring(0, selectionStart) +
        '\n' +
        workText.substring(selectionEnd);

      setLocalWorkText(newText);
      setWorkText(newText); // Update the parent's state

      e.target.setSelectionRange(selectionStart + 1, selectionStart + 1);
    }
  }}
/>
    <button
      className="evaluation-button1"
      onClick={handleClick}
    >
      Next
    </button>

    </div>
  );
};

export default WorkTobeDone;