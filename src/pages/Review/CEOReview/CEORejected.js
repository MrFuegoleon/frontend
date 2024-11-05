import "./CEORejected.css";
import axios from "axios";
import Cookies from "js-cookie";

const CEORejected = ({ executionId, setShowEvaluation ,setShowPopUpCEO ,comments , feedback, setFeedback}) => {

  const token = Cookies.get("token");

  const axiosInstance = axios.create({
    timeout: 60000, // Timeout de 60 secondes
  });

  const handleSubmit = async (index) => {
    try {
    const status = document.getElementById('case').checked ? 'Open' : 'Rejected';
    const data = {
      executionId: executionId,
      feedback: feedback,
      status: status,
    };
    if (feedback.trim() !== "") {
    await axiosInstance.post(process.env.REACT_APP_BACKEND_URL + "/execution/Rejected", data, {
      headers: {
        Authorization: `Bearer ${token}`, // Ajouter le token aux en-têtes
      },
    });
    window.location.reload()
  } else {
    alert("Please give a feedback to your teammate.");
  }
  } catch (error) {
    console.error("There was an error with the request:", error);
    alert("An error occurred. Please try again.");
  }
  };

  return (
    <div className="evaluation-container">
          <h3 >Finally</h3>
          <h3 className="better">What would it take to reach your expectations ?</h3>

            <input className="input-feed"  placeholder="A constructive feedback makes your teammate better and increase your collective odd of success"   value={feedback}
            onChange={(e) => setFeedback(e.target.value)}   maxLength="500"></input>
            <div className="propose">
            <input className="case" type="checkbox" id="case"/>
            <label  for="case">Propose it again to talents</label> 
            </div>
          <button
            className="feedback_rejected"
            onClick={handleSubmit }
            //setShowEvaluation(false)}
          >
            Send Your feed back  ➡
          </button>


    </div>          //onClick={() => window.location.reload()}
  );
};

export default CEORejected;
