import { useState, useEffect, useRef } from "react";
import "./Work.css";

const WorkForOthers = ({
  setShowPopUpDeadlineForOthers,
  setShowPopUpWorkForOthers,
  initialWorkText, // Renamed the prop to initialWorkText
  setWorkText,
}) => {
  // TODO: add real information in jsonData

  const handleClick = () => {
    if (workText.trim() !== "") {
    setShowPopUpWorkForOthers(false);
    setShowPopUpDeadlineForOthers(true);
  } else {
    alert("Please explain how the talent should do it.");
  }
  };
  const [workText, setLocalWorkText] = useState(initialWorkText);



  const popUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowPopUpWorkForOthers(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopUpWorkForOthers]);




  return (
    <div ref={popUpRef} className="submition-pop-up-work">
    <h2>What would it take to get the expected result ?</h2>

<textarea
  className="evaluation-textarea"
  placeholder="Giving simple, clear, and direct instructions can improve the quality of work by 49% and reduce unnecessary back-and-forth"
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

export default WorkForOthers;
