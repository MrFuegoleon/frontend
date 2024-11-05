import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import './Co-opt.css';
import Sidebar from '../../components/Sidebare/SidebarDIO';
import Wallet from "../../components/Wallet/Wallet";
import ThanksPopUp from "../../components/Wallet/ThanksPopUp";
import BCTPopUp from "../../components/Wallet/B.C.TPopUp";
import CashPopUp from "../../components/Wallet/CashPopUp";




const Coopt = () => {

  const [showBCTPopUp, setShowBCTPopUp] = useState(false);
  const [showThanksPopUp, setShowThanksPopUp] = useState(false);
  const [showCashPopUp, setShowCashPopUp] = useState(false);
  const DOName = localStorage.getItem("DOName")
  const navigate = useNavigate();
  const UserName = localStorage.getItem("userName");
  const UserNameId = localStorage.getItem("userId");
  const doId = localStorage.getItem("DOId")
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [Email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [subjectMail ,setsubjectMail] =useState(`${UserName} invites you to Thankward`);
  const [textMail , settextMail] =useState(`Hi ${FirstName},
  Join me on Thankward to explore an amazing experience of collaboration.
  You'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.
  You'll receive your password in a separate message.
  Follow the link below to sign up with your email address: ${Email}
  www.Thankward.com
  See you soon!`);
  const [subjectMailexist ,setsubjectMailexist] =useState(`${UserName} invites you to ${DOName}`);
  const [textMailexist , settextMailexist] =useState(`Hi ${FirstName},
  Join me at "${DOName}," an exceptional Digital Organization where you can thrive in a great
  team and contribute to an exciting project.
  See you soon!"
  ${UserName}
  www.Thankward.com`);

  
  useEffect(() => {
    // Update subjectMail whenever FirstName or LastName changes
    setsubjectMail(`${UserName} invites you to Thankward`);
    setsubjectMailexist(`${UserName} invites you to ${DOName}`);

    // Update textMail whenever FirstName or LastName changes
    settextMail(`Hi ${FirstName} ${LastName},
    Join me on Thankward to explore an amazing experience of collaboration.
    You'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.
    You'll receive your password in a separate message.
    Follow the link below to sign up with your email address: ${Email}
    www.Thankward.com
    See you soon!`);
    settextMailexist(`Hi ${FirstName},
    Join me at "${DOName}," an exceptional Digital Organization where you can thrive in a great
    team and contribute to an exciting project.
    See you soon!"
    ${UserName}
    www.Thankward.com`)
  }, [FirstName, LastName]);




  const handleCoopt = () => {
    const password = '123456'
    const id_do = localStorage.getItem("DOId")
    const first_connection = '1'
    const userData = { FirstName,LastName, Email, password, id_do,first_connection,UserNameId,subjectMail,textMail};

    fetch(process.env.REACT_APP_BACKEND_URL + "/cooptTalent/api/coopt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        console.log("here");
        console.log(response);
      })
      .catch((error) => {
        console.error("Erreur lors de l'inscription :", error);
      });
      window.location.reload()
  };

  const verifyEmail = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      alert('Please enter a valid email address.');
      return;
    }
    // Make a request to the server to check if the email and talent exist
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/cooptTalent/verifyMail?email=${Email}&doId=${doId}`)
      .then(response => {
        // Access data directly from the response object
        const data = response.data;
        console.log(data);
        
        if (data.emailExists) {
          // If email exists
          if (data.talentExists) {
            // If talent also exists in the DO
            alert('This talent is already in the DO.');
          } else {
            // If talent does not exist in the DO, proceed with the current flow
            setFirstName(data.firstName);
            setCurrentQuestion(5);
            window.history.pushState({ question: currentQuestion + 5 }, '');
            // Optionally, you can set different state variables or perform other actions here
          }
        } else {
          // If email doesn't exist, proceed with the current flow
          setCurrentQuestion(currentQuestion + 1);
          window.history.pushState({ question: currentQuestion + 1 }, '');
        }
      })
      .catch(error => {
        console.error('Error verifying email:', error);
        // Handle error here, e.g., display an error message to the user
      });
  };
  
  if (currentQuestion === 0 ){
    window.history.pushState({ question: 0 }, '');
  }
  

  const NextFirstname = () => {
    // Check if givenName is empty
    if (FirstName.trim() === '') {
      alert('Please enter the Talent’s First Name.');
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
    window.history.pushState({ question: currentQuestion + 1 }, '');
  };
  const NextLastname = () => {
    // Check if givenName is empty
    if (LastName.trim() === '') {
      alert('Please enter the Talent’s Last Name.');
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
    window.history.pushState({ question: currentQuestion + 1 }, '');
  };

  const NextNotification = () => {
    setCurrentQuestion(currentQuestion + 1);
    window.history.pushState({ question: currentQuestion + 1 }, '');
  }

  const CooptExsistedMember = () => {
    const id_do = localStorage.getItem("DOId")
    const userData = { Email, id_do,UserNameId,subjectMailexist,textMailexist};

    fetch(process.env.REACT_APP_BACKEND_URL + "/cooptTalent/api/cooptExsistedMember", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        console.log("here");
        console.log(response);
      })
      .catch((error) => {
        console.error("Erreur lors de l'inscription :", error);
      });


    setCurrentQuestion(0)
  }




  const newStateq = window.history.state.question;
  console.log("new state : " + newStateq);



  useEffect(() => {
    const handlePopstate = () => {
      const newState = window.history.state;
      console.log(newState.question)
      if (newState && newState.question !== undefined) {
        if (newState.question === 5) {
          setCurrentQuestion(0);
          console.log('yes') // Reset to question 0 if returning from question 5
        } else {
          setCurrentQuestion(currentQuestion - 1);
        }
      }
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [currentQuestion]);


    return (
    <div className="container">
        <Sidebar />
        <div className="main-content">
        <Wallet   
            setShowBCTPopUp ={setShowBCTPopUp}
            setShowThanksPopUp ={setShowThanksPopUp}
            setShowCashPopUp = {setShowCashPopUp}
            insideDO={true}
            />
            {showBCTPopUp && (
            <BCTPopUp
            setShowBCTPopUp = {setShowBCTPopUp}
            />
            )}
            {showThanksPopUp && (
            <ThanksPopUp
            setShowThanksPopUp = {setShowThanksPopUp}
            />
            )}
            {showCashPopUp && (
            <CashPopUp
            setShowCashPopUp = {setShowCashPopUp}
            />
            )}
        <div className="execution-board">
          <h1>{DOName}</h1>
          </div>

        <div className='actions_coopt'>
        { currentQuestion === 0 ? (
          <>
        <p style={{marginBottom:'0vh'}} className="coopt-text">Co-opting Talents is an excellent idea; it boosts your Team and accelerate your success.<br></br> <br></br><br></br></p>
        <div className="explain-coopt">
                <div style={{fontFamily:'Kumbh Sans' ,fontSize :'3vh' ,fontWeight :'700',marginLeft:'2vw',marginTop:'0vh'}}>for the DO (Digital Organization) that you are recruiting for :</div>
                <div style={{fontFamily:'Kumbh Sans' ,marginLeft:'2vw'}}>Every time the friend you co-opt earns 100 Thanks, you receive 5 Thanks.<br></br><br></br></div>
                <div style={{fontFamily:'Kumbh Sans' ,fontSize :'3vh',fontWeight :'700',marginLeft:'2vw'}}>From MKIF, the company behind Thankward:</div>
                <div style={{fontFamily:'Kumbh Sans' ,marginLeft:'2vw'}} >When your friend’s D.O. is active, you earn 1 Thanks.<br></br>
                Each time your friend’s team accumulates 10k verified Thanks, you earn 1 Thanks.<br></br>
                You receive a special bonus of 10 Thanks whenever your friend’s team reaches 100k verified Thanks.
                </div>
            </div>
        <div style={{display:"flex"}}>
        <div className='email-coopt'>Email
        <input  
        placeholder="Talent’s email please"
        onChange={(e) => setEmail(e.target.value)}
        value={Email}>
         </input>
         </div>
        <button style={{marginTop:'9vh',marginLeft:"3vw"}} className='next-button-coopt' onClick={verifyEmail}>Start</button>
        </div>
        </>
        ): currentQuestion === 1 ? ( 
          <>
          <div style={{display:"flex",marginTop:'20vh'}}>
          <div style={{display:'flex'}} className='email-coopt'><div style={{marginRight:'0vh',marginTop:'1vh'}}>Given Name</div>
          <input  
           placeholder="Talent’s First Name"
           onChange={(e) => setFirstName(e.target.value)}
           value={FirstName}
           style={{marginLeft:'3vw'}}
          ></input>
          </div>
          <button style={{ marginTop:'5vh',marginLeft:"3vw"}} className='next-button-coopt 'onClick={NextFirstname}>Next</button>
          </div>
          </>
        ): currentQuestion === 2 ? ( 
          <>
          <div style={{display:"flex",marginTop:'20vh'}}>
          <div style={{display:'flex'}} className='email-coopt'><div style={{marginRight:'0vh',marginTop:'1vh'}}>Family Name</div>
          <input   
          placeholder="Talent’s Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={LastName}
          style={{marginLeft:'3vw'}}>
          </input>
          </div>
          <button style={{ marginTop:'5vh',marginLeft:"3vw"}} className='next-button-coopt' onClick={NextLastname}>Next</button>
          </div>
          </>
        ): currentQuestion === 3 ? ( 
          <>
          <div className='notif-coopt' style={{display:'grid' , marginTop:'0vh'}}>
          <div className='obj-email-coopt' style={{marginRight:'35vw'}}>Object : </div>
          <textarea style={{width:'40vw' ,height:"7vh" ,marginBottom:'1vh', fontFamily:'Kumbh Sans'}} 
          onChange={(e) => setsubjectMail(e.target.value)}
          value={subjectMail}
          ></textarea>
          <div className='obj-email-coopt' style={{marginRight:'35vw' }}>Message : </div>``
          <textarea style={{width:"40vw" , height:'35vh', fontFamily:'Kumbh Sans'}}
          onChange={(e) => settextMail(e.target.value)}
          value={textMail}
          ></textarea >
          <button className='next-button-coopt' onClick={NextNotification}>Send</button>
          </div>
          </>
        ) : currentQuestion === 4 ? (
          <>
          <div>
          <p  style={{ marginTop:'10vh'}} className="coopt-text">To conclude, communicate to {FirstName} his temporary password using the<br></br>method you usually do and remind him to check his emails:</p>
        <p className="coopt-text">Temporary password :<br></br> 123456</p>
          <button style={{marginLeft:'5vw' , marginTop:'10vh'}} className='next-button-coopt' onClick={handleCoopt}>Done</button>
          </div>
          </>
        ):(
          <>
        <p style={{marginBottom:'0vh'}} className="coopt-text">Oups, you can’t earn Thanks from MKIF, but...<br></br> <br></br><br></br></p>
        <div className="explain-coopt">
                <div style={{fontFamily:'Kumbh Sans' ,fontSize :'3vh' ,fontWeight :'700',marginLeft:'2vw',marginTop:'0vh'}}>The email you entered is already in use, meaning {FirstName} is already part of the<br></br>Thankward family<br></br><br></br></div>
                <div style={{fontFamily:'Kumbh Sans' ,marginLeft:'2vw'}}>However, you can still earn Thanks from your D.O. if he agrees to join. Don't forget to send<br></br>him a personal message.<br></br></div>
            </div>
        <div style={{display:"flex"}}>
        <button style={{marginTop:'12vh' , marginRight:'15vw'}} className='next-button-coopt' onClick={CooptExsistedMember}>Close</button>
        </div>
        </>
        ) }
        </div>
        </div>
    </div>
    );
}

export default Coopt;