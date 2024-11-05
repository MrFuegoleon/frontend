import { useState,  useEffect, useRef } from "react";
import "./Work.css";

const WorkAlreadyDone = ({
  setShowPopUpDeadlineAlreadyDone,
  setShowPopUpWork,
  initialWorkText, // Renamed the prop to initialWorkText
  setWorkText,
}) => {
  // TODO: add real information in jsonData

  const handleClick = () => {
    if (workText.trim() !== "") {
    setShowPopUpWork(false);
    setShowPopUpDeadlineAlreadyDone(true);
  } else {
    alert("Please explain how did you do.");
  }
  };
  const [workText, setLocalWorkText] = useState(initialWorkText);



  const popUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowPopUpWork(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopUpWork]);




  return (
    <div ref={popUpRef} className="submition-pop-up-work">
    <h2>How did you do and what result you obtained ?</h2>


<textarea
  className="evaluation-textarea"
  placeholder="If you don’t showcase your work, you lose 30% of your Thanks"
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

export default WorkAlreadyDone;
