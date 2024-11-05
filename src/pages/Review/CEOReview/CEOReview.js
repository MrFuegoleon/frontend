import "../../ExecutionBoard/ExecutionBoard.css";
import { useState } from "react";
import axios from "axios";
import righthand from '../../../images/icones/hand-right.png';
import lefthand from '../../../images/icones/hand-left.png';
import Cookies from "js-cookie";

const CEOReview = ({ executionId, setShowEvaluation ,setShowPopUpCEO  }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [expectations, setExpectations] = useState(0);
  const [reactivity, setReactivity] = useState(0);
  const [comments, setComments] = useState("");

  const handleExpectationsClick = (index) => {
    setExpectations(index);
    setCurrentQuestion(2);
  };
  const handleReactivityClick = (index) => {
    setReactivity(index);
    setCurrentQuestion(3);
  };
  const token = Cookies.get("token");

  const handleSubmit = () => {
    const data = {
      executionId: executionId,
      userId: localStorage.getItem("userId"),
      dioId: localStorage.getItem("DOId"),
      comments: comments,
      expectations: expectations,
      reactivity: reactivity,
    };
    if (comments.trim() !== "") {
    axios.post(process.env.REACT_APP_BACKEND_URL + "/review/ceoReview", data, {
      headers: {
        Authorization: `Bearer ${token}`, // Ajouter le token aux en-têtes
      },
    });
    setCurrentQuestion(4);
  } else {
    alert("Please give a feedback to your teammate.");
  }
  };


  return (
    <div className="evaluation-container">
      {currentQuestion === 0 ? (
        <>
          <button
            className="evaluation-button-ceoreview"
            onClick={() => setCurrentQuestion(1)}
          >
            Next
          </button>
        </>
      ) : currentQuestion === 1 ? (
        <>
        <h4 style={{marginTop :'0vh'}}> <div style={{marginLeft :'17vw', fontSize : '120%'}}>Assessment of Result Quality:</div> <div style={{fontWeight : '400' , fontSize : '100%'}}>evaluates if task outcomes meet or exceed expectations, focusing on effectiveness and precision. It highlights how well the work aligns with goals and benchmarks, emphasizing thoroughness and excellence.
        </div></h4>
          <h3 className="question-peerreview" style={{ fontSize: "1.5vw" , marginTop :'1vh'}}>
          How would you rate the quality of the result achieved by this individual's execution?
          </h3>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#E7827C",fontSize: "1.5vw",marginBottom:"1vh" , marginTop:'-3vh' }}
            onClick={() => handleExpectationsClick(0)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}>Basic</span>
            <span style={{ fontSize: '0.7em' }}>Meets minimum requirements</span>
          </div>
          </button>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#F8BB45",fontSize: "1.5vw" ,marginBottom:"1vh"}}
            onClick={() => handleExpectationsClick(1)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}> Good</span>
            <span style={{ fontSize: '0.7em' }}>Meets all requirements well</span>
          </div>
          </button>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#B0D715",fontSize: "1.5vw",marginBottom:"1vh" }}
            onClick={() => handleExpectationsClick(2)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}>High </span>
            <span style={{ fontSize: '0.7em' }}>Exceeds requirements, high precision</span>
          </div>
          </button>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#248D35",fontSize: "1.5vw",marginBottom:"1vh" }}
            onClick={() => handleExpectationsClick(3)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}>Outstanding </span>
            <span style={{ fontSize: '0.7em' }}>Far exceeds expectations, exceptional detail</span>
          </div>
          </button>
        </>
      ) : currentQuestion === 2 ? (
        <>
        <h4 style={{marginTop :'0vh'}}> <div style={{marginLeft :'15vw', fontSize : '120%'}}>Comprehensive Reactivity Assessment :</div> <div style={{fontWeight : '400' , fontSize : '100%'}}>evaluates the speed of response to execution needs, adherence to deadlines, and adaptability to new information and changes. This reflects an individual's capacity to navigate dynamic environments and deliver timely, flexible solutions.
        </div></h4>
          <h3 className="question-peerreview" style={{ fontSize: "1.5vw" }}>How would you rate the execution performer overall reactivity ? 
</h3>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#E7827C" ,fontSize: "1.5vw",marginBottom:"1vh", marginTop:'-3vh'}}
            onClick={() => handleReactivityClick(0)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}>Responsive  </span>
            <span style={{ fontSize: '0.7em' }}>Basic needs met</span>
          </div>
          </button>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#F8BB45",fontSize: "1.5vw",marginBottom:"1vh" }}
            onClick={() => handleReactivityClick(1)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}> Proactive </span>
            <span style={{ fontSize: '0.7em' }}>Prompt, met deadlines</span>
          </div>
          </button>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#B0D715" ,fontSize: "1.5vw",marginBottom:"1vh"}}
            onClick={() => handleReactivityClick(2)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}>Agile </span>
            <span style={{ fontSize: '0.7em' }}>Quick, seamless adaptation</span>
          </div>
          </button>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#248D35",fontSize: "1.5vw",marginBottom:"1vh" }}
            onClick={() => handleReactivityClick(3)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}>Exceptional</span>
            <span style={{ fontSize: '0.7em' }}>Instant, excelled adaptation</span>
          </div>
          </button>
        </>
      ) : currentQuestion === 3 ?(        <>
        <h3 className="result-peerreview"

        >
          Finally
        </h3>
        <h3 className="question-peerreview" style={{ textAlign: "center", fontSize: "2.5vw" }}>
        What would it take to make the result even better ?
        </h3>
        <input 
        className="input-feed"
        style={{fontSize:'100%'}}
          type="text"
          placeholder="A constructive feedback makes your teammate better and increase your collective odd of success"
          onChange={(e) => setComments(e.target.value)}
          value={comments}
          maxLength="500"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: "120px",
          }}
        >
          <span
            style={{ fontSize: "2.5vw", cursor: "pointer"  }}
            onClick={handleSubmit}
          >
            Next    ➡
          </span>
        </div>
      </>
      ):(
        <>
          <h2>Thank you for your evaluation!</h2>
          <div className="congratulations">
          <img className="lefthand_ceoevaluation" alt="" src={lefthand} />
          <button
            className="backtofeed-button_ceoevaluation"
            onClick={() => window.location.reload()}
            //setShowEvaluation(false)}
          >
            Back to Fedd
          </button>
          <img className="righthand_ceoevaluation" alt="" src={righthand} />
          </div>
        </>
      )}
    </div>
  );
};

export default CEOReview;
