import "./PopupFeed.css";
import { useEffect, useRef } from "react";

const DoerPopUp = ({
  executionDescription,
  dioId,
  setShowPopUp,
  setShowPopUpWorkDone,
  setShowPopUpWorkForOthers,
}) => {
  // TODO: add real information in jsonData

  const handleClickMyself = () => {
    setShowPopUp(false);
    setShowPopUpWorkDone(true);
  };

  const handleClickSomeoneElse = () => {
    setShowPopUp(false);
    setShowPopUpWorkForOthers(true);
  };

  const popUpRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowPopUp(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopUp]);

  return (
    <div ref={popUpRef} className="submition-pop-up">
      <div className="who">Who is this for ?</div>
      <button className="submitButton" onClick={handleClickMyself}>
      It's for me
      </button>
      <button className="submitButton" onClick={handleClickSomeoneElse}> 
      It's for another Talent
      </button>
    </div>
  );
};

export default DoerPopUp;
