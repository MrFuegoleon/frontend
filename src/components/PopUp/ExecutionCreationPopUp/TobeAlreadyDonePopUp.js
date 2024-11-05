import "./PopupFeed.css";
// import { useContext } from "react";
// import { TasksContext } from "../../TasksContext";
import { useEffect, useRef } from "react";

const TobeAlreadyDonePopUp = ({
  setShowPopUpWorkDone,
  setShowPopUpWork,
  setShowPopUpWorkNotYet,
  setExecutionId,
  alreadyCreated,
}) => {
  // TODO: add real information in jsonData

  // const { setProp, addProp } = useContext(TasksContext);


  const handleClickAlreadyDone = () => {
    setShowPopUpWorkDone(false);
    setShowPopUpWork(true);}

  const handleClickToDo = () => {
    setShowPopUpWorkDone(false);
    setShowPopUpWorkNotYet(true);
  }

  const popUpRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowPopUpWorkDone(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopUpWorkDone]);

  return (
    <div ref={popUpRef} className="submition-pop-up">
            <div className="who">What is the status of the task ?</div>
      <button className="submitButton" onClick={handleClickToDo} >
      Needs to be done 
      </button>
      <button className="submitButton" onClick={handleClickAlreadyDone}>
        Already done
      </button>
    </div>
  );
};

export default TobeAlreadyDonePopUp;
