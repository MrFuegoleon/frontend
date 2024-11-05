import "./PeerReviewNotYet.css";
import axios from "axios";

const PeerReviewNotYet = ({ executionId, setShowEvaluation ,setShowPopUpPeerReview ,comments , feedback, setFeedback}) => {


  const axiosInstance = axios.create({
    timeout: 60000, // Timeout de 60 secondes
  });

  const handleSubmit = async (index) => {
    try {
    const data = {
      userId: localStorage.getItem("userId"),
      executionId: executionId,
      feedback: feedback,
    };
    if (feedback.trim() !== "") {
    await axiosInstance.post(process.env.REACT_APP_BACKEND_URL + "/execution/peerReview_NotYet", data);
    window.location.reload()
  } else {
    alert("Please explain why not yet.");
  }
  } catch (error) {
    console.error("There was an error with the request:", error);
    alert("An error occurred. Please try again.");
  }

  };

  return (
    <div className="evaluation-container">
          <h3 >Finally</h3>
          <h3 className="better">What would it take to reach your expectations ? </h3>
            <input className="input-feed"  placeholder="A constructive feedback makes your teammate better and increase your collective odd of success"   value={feedback}
            onChange={(e) => setFeedback(e.target.value)}></input>
          <button
            className="feedback"
            onClick={() => handleSubmit() }
            //setShowEvaluation(false)}
          >
            Share  ➡
          </button>


    </div>          //onClick={() => window.location.reload()}
  );
};

export default PeerReviewNotYet;
