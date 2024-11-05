import axios from "axios";
import { useEffect, useRef } from "react";
import "./Work.css";

const AddLinkPopUp = ({
  setShowPopUpLink,
  setSelfReview,
  executionId,
  alreadyCreated,
  link,
  setLink
}) => {
  // TODO: add real information in jsonData


  const axiosInstance = axios.create({
    timeout: 60000, // Timeout de 60 secondes
  });
  
  const handleClick = async () => {
    if (link.trim() !== "") {
      try {
        if (alreadyCreated === true) {
          await axiosInstance.post(process.env.REACT_APP_BACKEND_URL + "/execution/alreadyCreatedForOthers", {
            executionId: executionId,
            userId: localStorage.getItem("userId"),
            dioId: localStorage.getItem("DOId"),
            status: 'In review',
            link: link,
          });
          setShowPopUpLink(false);
          setSelfReview(true);
        } else {
          setShowPopUpLink(false);
          setSelfReview(true);
        }
      } catch (error) {
        console.error("There was an error with the request:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Please document your work");
    }
  };


  const popUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowPopUpLink(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopUpLink]);

  return (
    <div ref={popUpRef} className="submition-pop-up-link">
    <h2>Document your work</h2>
<div>
<h3>Add Link</h3>
<input
  className="evaluation-textarea_link"
  type="link"
  placeholder="To your cloud folder, Git, figma, website, whatever you use to share document and knowledge  "
  value={link}
  onChange={(e) => {
    setLink(e.target.value);
  }}
/>
<h3>Good to know, sharing proof of work with your Team bring to you 45% additional Thanks !</h3>

</div>
    <button
      className="evaluation-button1"
      onClick={handleClick}
    >
      I want my Thanks
    </button>
    
    </div>
  );
};

export default AddLinkPopUp;
