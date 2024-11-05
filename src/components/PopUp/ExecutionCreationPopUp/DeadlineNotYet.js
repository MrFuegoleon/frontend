import { useState,  useEffect, useRef } from "react";
import "./Work.css";

const DeadlineNotYetPopUp = ({
  setShowPopUpLinkNotYet,
  setShowPopUpDeadlineNotYet,
  initialWorkText,
  setWorkText,  
  deadline,
  setDeadline
}) => {
  const [isDateValid, setIsDateValid] = useState(false);

  const handleClick = () => {
    if (isDateValid) {
      setShowPopUpDeadlineNotYet(false);
      setShowPopUpLinkNotYet(true);
    }
    else {
      alert("Please select a valid date that is today or later.");
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to midnight to avoid time issues

    setDeadline(e.target.value);
    setIsDateValid(selectedDate >= today);
  };

  const popUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowPopUpDeadlineNotYet(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopUpDeadlineNotYet]);

  return (
    <div ref={popUpRef} className="submition-pop-up-work">
      <h2>When are you going to do that ?</h2>
      <div>
        <h3 style={{fontFamily: 'Kumbh Sans'}}>Select a date</h3>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          className="date-input"
          onChange={handleDateChange}
          value={deadline}
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      <button
        className="evaluation-button1"
        style={{ marginRight: '20vw' }}
        onClick={handleClick}
        disabled={!isDateValid}
      >
        Next
      </button>
    </div>
  );
};

export default DeadlineNotYetPopUp;
