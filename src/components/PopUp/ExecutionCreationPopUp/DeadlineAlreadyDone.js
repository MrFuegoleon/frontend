import { useEffect, useRef } from "react";
import "./Work.css";

const DeadlineAlreadyDonePopUp = ({
  setShowPopUpLink,
  setShowPopUpDeadlineAlreadyDone,
  deadline,
  setDeadline
}) => {
    const today = new Date().toISOString().split("T")[0];

  
    const handleClick = () => {
      setShowPopUpDeadlineAlreadyDone(false);
      setShowPopUpLink(true);
    };
  
    const handleDateChange = (e) => {
      setDeadline(e.target.value);
    };
  
    const popUpRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (popUpRef.current && !popUpRef.current.contains(event.target)) {
            setShowPopUpDeadlineAlreadyDone(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [setShowPopUpDeadlineAlreadyDone]);
  
    useEffect(() => {
      setDeadline(today);
    }, [setDeadline, today]);
  
    return (
      <div ref={popUpRef} className="submition-pop-up-work">
        <h2>When did you complete that?</h2>
        <div>
          <h3 style={{fontFamily: 'Kumbh Sans'}}>Select a date</h3>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            className="date-input"
            onChange={handleDateChange}
            value={deadline}
            max={today}
          />
        </div>
        <button
          className="evaluation-button1"
          style={{ marginRight: '20vw' }}
          onClick={handleClick}
        >
          Next
        </button>
      </div>
    );
  };

export default DeadlineAlreadyDonePopUp;
