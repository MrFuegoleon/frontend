import "./CEONotYet.css";
import axios from "axios";
import Cookies from "js-cookie";

const CEONotYet = ({ executionId, setShowEvaluation ,setShowPopUpCEO ,comments , feedback, setFeedback}) => {

  const token = Cookies.get("token");

  const handleSubmit = (index) => {
    const data = {
      executionId: executionId,
      feedback: feedback,
      status:"On going"
    };
    if (feedback.trim() !== "") {
    axios.post(process.env.REACT_APP_BACKEND_URL + "/execution/NotYet", data, {
      headers: {
        Authorization: `Bearer ${token}`, // Ajouter le token aux en-têtes
      },
    });
    window.location.reload()
  } else {
    alert("Please explain why not yet.");
  }
  };

  return (
    <div className="evaluation-container">
          <h3 >Finally</h3>
          <h3 className="better">What would it take to get the result as you expect ?</h3>

            <input className="input-feed"  placeholder="describe it here..."   value={feedback}
            onChange={(e) => setFeedback(e.target.value)}   maxLength="500"></input>
          <button
            className="feedback"
            onClick={() => handleSubmit() }
            //setShowEvaluation(false)}
          >
            Send Your feed back  ➡
          </button>


    </div>          //onClick={() => window.location.reload()}
  );
};

export default CEONotYet;
