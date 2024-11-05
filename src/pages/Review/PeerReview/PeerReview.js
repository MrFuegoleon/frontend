// Importations inchangées
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PeerReview.css";
import righthand from '../../../images/icones/hand-right.png';
import lefthand from '../../../images/icones/hand-left.png';
import Cookies from "js-cookie";

const PeerReview = ({ executionId, setShowPeerReview }) => {
  // States inchangés


  const [work, setWork] = useState("");
  const token = Cookies.get("token");
  const [expectedResult, setExpectedResult] = useState(0);
  const [reactivity, setReactivity] = useState(0);
  const [comments, setComments] = useState("");
  const [peerReviewQuestion, setPeerReviewQuestion] = useState(0);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/review/" + executionId)
      .then((res) => {
        if (res.data.exec_content) {
          setWork(res.data.exec_content);
          console.log(work);
        } else {
          setWork("There is no content for this execution");
          console.log(work);
        }
      });
  }, [executionId,work]);

  const handleExpectations = (index) => {
    setPeerReviewQuestion(1);
    setExpectedResult(index);
  };

  const handleReactivity = (index) => {
    setPeerReviewQuestion(2);
    setReactivity(index);
  };

  const handleSubmit = () => {
    const data = {
      executionId: executionId,
      userId: localStorage.getItem("userId"),
      dioId: localStorage.getItem("DOId"),
      comments: comments,
      expectations: expectedResult,
      reactivity: reactivity,
    };
    if (comments.trim() !== "") {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/review/peerReview", data,{
        headers: {
          Authorization: `Bearer ${token}`, // Ajouter le token aux en-têtes
        },
      })
      .then((res) => {
        setPeerReviewQuestion(3);
      });
    } else {
      alert("Please give a feedback to your teammate.");
    }
  };




  return (
    <div className="review-container">
      { peerReviewQuestion === 0 ? (
        <>
        <h4 style={{marginTop :'-2vh'}}> <div style={{marginLeft :'15vw'}}>Assessment of Result Quality:</div> <div style={{fontWeight : '400' , fontSize : '70%'}}>evaluates if task outcomes meet or exceed expectations, focusing on effectiveness and precision. It highlights how well the work aligns with goals and benchmarks, emphasizing thoroughness and excellence.
        </div></h4>
          <h3 className="question-peerreview" style={{ fontSize: "1.5vw" , marginTop:'0vh' ,marginBottom:'3vh'}}>
          How would you rate the quality of the result achieved by this individual's execution?
          </h3>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#E7827C",fontSize: "1.5vw",marginBottom:"1vh" , marginTop:'0vh' }}
            onClick={() => handleExpectations(0)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}>Basic</span>
            <span style={{ fontSize: '0.7em' }}>Meets minimum requirements</span>
          </div>
          </button>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#F8BB45",fontSize: "1.5vw" ,marginBottom:"1vh"}}
            onClick={() => handleExpectations(1)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}> Good</span>
            <span style={{ fontSize: '0.7em' }}>Meets all requirements well</span>
          </div>
          </button>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#B0D715",fontSize: "1.5vw",marginBottom:"1vh" }}
            onClick={() => handleExpectations(2)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}>High </span>
            <span style={{ fontSize: '0.7em' }}>Exceeds requirements, high precision</span>
          </div>
          </button>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#248D35",fontSize: "1.5vw",marginBottom:"1vh" }}
            onClick={() => handleExpectations(3)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}>Outstanding </span>
            <span style={{ fontSize: '0.7em' }}>Far exceeds expectations, exceptional detail</span>
          </div>
          </button>
        </>
      ) : peerReviewQuestion === 1 ? (
        <>
        <h4 style={{marginTop :'-2vh'}}> <div style={{marginLeft :'12vw'}}>Comprehensive Reactivity Assessment :</div> <div style={{fontWeight : '400' , fontSize : '70%'}}>evaluates the speed of response to execution needs, adherence to deadlines, and adaptability to new information and changes. This reflects an individual's capacity to navigate dynamic environments and deliver timely, flexible solutions.
        </div></h4>
          <h3 className="question-peerreview" style={{ fontSize: "1.5vw" , marginTop:'0vh' ,marginBottom:'5vh'}}>How would you rate the execution performer overall reactivity ? 
</h3>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#E7827C" ,fontSize: "1.5vw",marginBottom:"1vh", marginTop:'2vh'}}
            onClick={() => handleReactivity(0)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}>Responsive  </span>
            <span style={{ fontSize: '0.7em' }}>Basic needs met</span>
          </div>
          </button>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#F8BB45",fontSize: "1.5vw",marginBottom:"1vh" }}
            onClick={() => handleReactivity(1)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}> Proactive </span>
            <span style={{ fontSize: '0.7em' }}>Prompt, met deadlines</span>
          </div>
          </button>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#B0D715" ,fontSize: "1.5vw",marginBottom:"1vh"}}
            onClick={() => handleReactivity(2)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}>Agile </span>
            <span style={{ fontSize: '0.7em' }}>Quick, seamless adaptation</span>
          </div>
          </button>
          <button
            className="evaluation-button"
            style={{ backgroundColor: "#248D35",fontSize: "1.5vw",marginBottom:"1vh" }}
            onClick={() => handleReactivity(3)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <span style={{ fontSize: '1.2em' }}>Exceptional</span>
            <span style={{ fontSize: '0.7em' }}>Instant, excelled adaptation</span>
          </div>
          </button>
        </>
      ) : peerReviewQuestion === 2 ? (
        <>
          <h3 className="result-peerreview"

          >
            Finally
          </h3>
          <h3 className="question-peerreview" style={{ textAlign: "center", fontSize: "1.5vw" }}>
             What would it take to make the result even better ?
          </h3>
          <input 
          className="input-feed"
            type="text"
            placeholder="describe it here..."
            onChange={(e) => setComments(e.target.value.replace(/,/g, ''))}
            value={comments}
            maxLength="500"
            style={{fontSize:'70%'}}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              bottom: "12vh",
            }}
          >
            <span
              style={{ fontSize: "2vw", cursor: "pointer" }}
              onClick={handleSubmit}
            >
              Send your feedback    ➡
            </span>
          </div>
        </>
      ) : (

        <>
          <h1>CONGRATULATION !</h1>

        <>
          <p>You will receive your Thanks at the end of the peer review</p>
          {/*<p>{` Thanks`}</p>*/}
        </>
          <div className="congratulations-peer">
          <img className="lefthand_peerreview" alt="" src={lefthand} />
          <button
            className="backtofeed-button-peer"
            onClick={() => window.location.reload()}
            // setShowEvaluation(false)}
          >
            Back to Feed
          </button>
          <img className="righthand_peerreview" alt="" src={righthand} />
          </div>
        </>

      )}
    </div>
  );
};

export default PeerReview;
