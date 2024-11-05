import axios from "axios";
import { useEffect, useRef } from "react";
import "./Work.css";

const AddLinkNotYetPopUp = ({
  executionDescription,
  setShowPopUpLinkNotYet,
  alreadyCreated,
  forOthers,
  executionId,
  setExecutionId,
  initialWorkText, 
  executionComment,
  deadline,
  link,
  setLink
}) => {
  // TODO: add real information in jsonData

  const axiosInstance = axios.create({
    timeout: 60000, // Timeout de 60 secondes
  });
  
  const handleClick = async () => {
    try {
      setShowPopUpLinkNotYet(false);
  
      if (alreadyCreated === false) {
        const workDoneResponse = await axiosInstance.post(process.env.REACT_APP_BACKEND_URL + "/execution/workDone", {
          userId: localStorage.getItem("userId"),
          executionDescription: executionDescription,
          dioId: localStorage.getItem("DOId"),
          texte: executionComment,
          status: 'On going',
          link: null,
          inputLink: link,
          deadline: deadline
        });
  
        const executionID = workDoneResponse.data.insertId;
        console.log("executionId", executionID);
  
        const dataReview = {
          userId: localStorage.getItem("userId"),
          executionId: executionID,
          comment: "",
          userName: localStorage.getItem("userName"),
          dioId: localStorage.getItem("DOId"),
          difficulty: 0,
          reactivity: 0,
        };
  
        //await axiosInstance.post(process.env.REACT_APP_BACKEND_URL + "/review/selfReview", dataReview);
      } else if (forOthers === true) {
        await axiosInstance.post(process.env.REACT_APP_BACKEND_URL + "/execution/alreadyCreated", {
          executionId: executionId,
          userId: localStorage.getItem("userId"),
          dioId: localStorage.getItem("DOId"),
          texte: executionComment,
          status: 'On going',
          inputLink: link,
          deadline: deadline
        });
      } else {
        await axiosInstance.post(process.env.REACT_APP_BACKEND_URL + "/execution/alreadyCreated", {
          executionId: executionId,
          userId: localStorage.getItem("userId"),
          executionDescription: executionDescription,
          dioId: localStorage.getItem("DOId"),
          texte: executionComment,
          status: 'On going',
          link: null,
          inputLink: link,
          deadline: deadline
        });
  
        const dataReview = {
          userId: localStorage.getItem("userId"),
          executionId: executionId,
          comment: "",
          userName: localStorage.getItem("userName"),
          dioId: localStorage.getItem("DOId"),
          difficulty: 0,
          reactivity: 0,
        };
  
        //await axiosInstance.post(process.env.REACT_APP_BACKEND_URL + "/review/selfReview", dataReview);
      }
  
      window.location.reload();
    } catch (error) {
      console.error("There was an error with the request:", error);
      alert("An error occurred. Please try again.");
    }
  };


  const popUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowPopUpLinkNotYet(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopUpLinkNotYet]);

  return (
    <div ref={popUpRef} className="submition-pop-up-link">
    <h2>Share your input</h2>
<div>
<h3 style={{marginLeft:'5vw'}}>Add Link</h3>
<input
  className="evaluation-textarea_link"
  type="link"
  placeholder="To your cloud folder, Git, figma, website, whatever you use to share document and knowledge  "
  value={link}
  onChange={(e) => {
    setLink(e.target.value);
  }}
/>
<h3 style={{marginLeft:'5vw'}}>High-quality input improve the final result by 33% and lead to a more positive evaluation of the end product.</h3>
</div>
    <button
      className="evaluation-button1"
      onClick={handleClick}
    >
      I'm on it!
    </button>
    
    </div>
  );
};

export default AddLinkNotYetPopUp;
