import "./SelfReview.css";
import { useState, useContext } from "react";
import axios from "axios";
import { TasksContext } from "../../TasksContext";
import useCountdown from "../../ExecutionBoard/useCountdown";
import righthand from '../../../images/icones/hand-right.png';
import lefthand from '../../../images/icones/hand-left.png';
import { useEffect } from "react";
import Cookies from "js-cookie";


const SelfReview = ({
  executionDescription,
  setShowEvaluation,
  executionId,
  executionComment,
  executionLink
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [difficulty, setDifficulty] = useState(0);

  const [departHours, setDepartHours] = useState(24); // Initialiser à une valeur par défaut
  const { hours, minutes, seconds } = useCountdown(departHours*60);
  const [showCountdown, setShowCountdown] = useState(true);

  const handleDepartHours1 = (value) => {
    const roundedValue = Math.ceil(value);
    setDepartHours(roundedValue);
  };
  const token = Cookies.get("token");

  useEffect(() => {
    if (departHours < 6) {
      setShowCountdown(false);
    } else {
      setShowCountdown(true);
    }
  }, [departHours]);


  const { addProposition } = useContext(TasksContext);


  const handleDifficultyClick = (index) => {
    setDifficulty(index);
    setCurrentQuestion(1);
  };

  const axiosInstance = axios.create({
    timeout: 60000, // Timeout de 60 secondes
  });
  
  const handleSubmit = async (index) => {
    try {
      if (executionId !== 0) {
        const res = await axiosInstance.post(process.env.REACT_APP_BACKEND_URL + "/review/selfReview", {
          userId: localStorage.getItem("userId"),
          executionId: executionId,
          comment: executionComment,
          difficulty: difficulty,
          reactivity: index,
          userName: localStorage.getItem("userName"),
        });
  
        let newDepartHours = res.data.data.responseValue;
        let updatedStatut = "In review";
        if (newDepartHours < 6) {
          updatedStatut = "Achieved";
        }
        const DEADLINES = {
          DEAD1: 10,
          DEAD2: 15,
          DEAD3: 20,
        };
        let remaining_time = null;
        console.log(updatedStatut, remaining_time);
        if (newDepartHours > 6) {
          if (difficulty === 4 && index === 4) {
            newDepartHours = DEADLINES.DEAD1;
          } else if (difficulty === 10 || index === 10) {
            newDepartHours = DEADLINES.DEAD2;
          } else if (difficulty === 20 || index === 20) {
            newDepartHours = DEADLINES.DEAD3;
          }
          remaining_time = 60 * newDepartHours;
        }
        handleDepartHours1(newDepartHours);
        console.log(newDepartHours, updatedStatut, remaining_time);
        setCurrentQuestion(3);
        await axiosInstance.post(
          process.env.REACT_APP_BACKEND_URL + "/execution/updateStatus",
          { executionId: executionId
            ,status: updatedStatut
            ,remaining_time: remaining_time
            ,Link: executionLink },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Ajouter le token aux en-têtes
            },
          }
        );
      } else {
        const workDoneRes = await axiosInstance.post(
          process.env.REACT_APP_BACKEND_URL + "/execution/workDone",
          {
            userId: localStorage.getItem("userId"),
            executionDescription: executionDescription,
            dioId: localStorage.getItem("DOId"),
            status: 'In review',
            link: executionLink,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Ajouter le token aux en-têtes
            },
          }
        );
  
        addProposition(executionDescription);
        const executionID = workDoneRes.data.insertId;
        const dataReview = {
          userId: localStorage.getItem("userId"),
          executionId: executionID,
          comment: executionComment,
          userName: localStorage.getItem("userName"),
          dioId: localStorage.getItem("DOId"),
          difficulty: difficulty,
          reactivity: index,
        };
  
        const reviewRes = await axiosInstance.post(
          process.env.REACT_APP_BACKEND_URL + "/review/selfReview",
          dataReview,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Ajouter le token aux en-têtes
            },
          }
        );
  
        let newDepartHours = reviewRes.data.data.responseValue;
        let updatedStatut = "In review";
        if (newDepartHours < 6) {
          updatedStatut = "Achieved";
        }
        const DEADLINES = {
          DEAD1: 10,
          DEAD2: 15,
          DEAD3: 20,
        };
        let remaining_time = null;
        console.log(updatedStatut, remaining_time);
        if (newDepartHours > 6) {
          if (dataReview.difficulty === 4 && index === 4) {
            newDepartHours = DEADLINES.DEAD1;
          } else if (dataReview.difficulty === 10 || index === 10) {
            newDepartHours = DEADLINES.DEAD2;
          } else if (dataReview.difficulty === 20 || index === 20) {
            newDepartHours = DEADLINES.DEAD3;
          }
          remaining_time = 60 * newDepartHours;
        }
        handleDepartHours1(newDepartHours);
        console.log(newDepartHours, updatedStatut, remaining_time);
        setCurrentQuestion(3);
        await axiosInstance.post(
          process.env.REACT_APP_BACKEND_URL + "/execution/updateStatus",
          { executionId: executionID
            ,status: updatedStatut
            ,remaining_time: remaining_time
            ,Link: executionLink
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Ajouter le token aux en-têtes
            },
          }
        );
      }
    } catch (error) {
      console.error("There was an error with the request:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="evaluation-container">
      { currentQuestion === 0 ? (
        <>
        <h4 ><div style={{marginLeft:"18vw"}}>Complexity of an Execution :</div> <div style={{fontWeight : '400'}}>This axis measures the inherent difficulty or complexity of the task executed, considering factors like technical difficulty, required creativity, problem-solving, and the level of skill or knowledge needed
        </div></h4>
          <h2>How complex was your task?</h2>
          <button
            className="evaluation-button-selfreview"
            onClick={() => handleDifficultyClick(0)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginLeft :'8.5vw' }}>
            <span style={{ fontSize: '1.2em' }}>Simple</span>
            <span style={{ fontSize: '0.7em' }}>Minimal skill needed</span>
          </div>
          </button>
          <button
            className="evaluation-button-selfreview"
            onClick={() => handleDifficultyClick(1)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginLeft :'6.5vw' }}>
            <span style={{ fontSize: '1.2em' }}>Moderate </span>
            <span style={{ fontSize: '0.7em' }}>Some skill and creativity needed</span>
          </div>
          </button>
          <button
            className="evaluation-button-selfreview"
            onClick={() => handleDifficultyClick(2)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginLeft :'6vw' }}>
            <span style={{ fontSize: '1.2em' }}>Complex </span>
            <span style={{ fontSize: '0.7em' }}>Advanced skills, creativity needed</span>
          </div>
          </button>
          <button
            className="evaluation-button-selfreview"
            onClick={() => handleDifficultyClick(3)}
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginLeft :'4.5vw' }}>
            <span style={{ fontSize: '1.2em' }}>Highly Complex </span>
            <span style={{ fontSize: '0.7em' }}>Expert skills, innovative problem-solving needed</span>
          </div>
          </button>
        </>
      ) : currentQuestion === 1 ? (
        <>
        <h4><div style={{marginLeft:"18vw"}}>Repetition of an Execution :</div> <div style={{fontWeight : '400'}}>This axis assesses how frequently the task is performed or its novelty. It can provide insight into the task's uniqueness and the potential for learning or improvement.
        </div></h4>
          <h2> How often have you done this type of task ?</h2>
          <button className="evaluation-button-selfreview" onClick={() => handleSubmit(0)}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginLeft :'7.5vw' }}>
            <span style={{ fontSize: '1.2em' }}>Routine </span>
            <span style={{ fontSize: '0.7em' }}>Regularly, with little change.</span>
          </div>
          </button>
          <button className="evaluation-button-selfreview" onClick={() => handleSubmit(1)}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginLeft :'5vw' }}>
            <span style={{ fontSize: '1.2em' }}>Occasionally Repeated </span>
            <span style={{ fontSize: '0.7em' }}>Sometimes, with variations.</span>
          </div>
          </button>
          <button className="evaluation-button-selfreview" onClick={() => handleSubmit(2)}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginLeft :'6vw' }}>
            <span style={{ fontSize: '1.2em' }}>Rare </span>
            <span style={{ fontSize: '0.7em' }}>Seldom, with learning opportunities.</span>
          </div>
          </button>
          <button className="evaluation-button-selfreview" onClick={() => handleSubmit(3)}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginLeft :'6vw' }}>
            <span style={{ fontSize: '1.2em' }}>Novel  </span>
            <span style={{ fontSize: '0.7em' }}>First time, highest learning potential.</span>
          </div>
          </button>
        </>
      ) : (     
        <>
          <div className="congratulations-text">CONGRATULATION !</div>
          {showCountdown ? (
        <>
          <div className="thanks-text">You will see your thanks in</div>
          <div className="thanks-text" >{`${hours}H:${minutes}Mn:${seconds}s`}</div>
        </>
      ) : (
        <>
          <div className="thanks-text" > You win thanks for your work</div>
          <div className="thanks-text" >{`${departHours} Thanks`}</div>
        </>
      )}
          <div className="congratulations">
          <img className="lefthand_self" alt="lefthand" src={lefthand} />
          <button
            className="backtofeed-button-self"
            onClick={() => window.location.reload()}
          >
            Back to Feed
          </button>
          <img className="righthand_self" alt="righthand" src={righthand} />
          </div>
        </>
      )}
    </div>
  );
};

export default SelfReview;
