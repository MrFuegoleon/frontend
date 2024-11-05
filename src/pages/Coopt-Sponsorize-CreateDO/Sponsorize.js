import React, { useState, useEffect } from "react";
import "../HomePage/Homepage.css";
import Sidebar from "../../components/Sidebare/Sidebarhomepage";
import Wallet from "../../components/Wallet/Wallet";
import ThanksPopUp from "../../components/Wallet/ThanksPopUp";
import BCTPopUp from "../../components/Wallet/B.C.TPopUp";
import CashPopUp from "../../components/Wallet/CashPopUp";

import axios from "axios";

import { Link } from "react-router-dom";

const Sponsorize = () => {


const [showBCTPopUp, setShowBCTPopUp] = useState(false);
const [showThanksPopUp, setShowThanksPopUp] = useState(false);
const [showCashPopUp, setShowCashPopUp] = useState(false);

const [currentQuestion, setCurrentQuestion] = useState(0);
const [Email, setEmail] = useState("");
const [FirstName, setFirstName] = useState("");
const [LastName, setLastName] = useState("");
const UserName = localStorage.getItem("userName");
const UserNameId = localStorage.getItem("userId")

const [subjectMail ,setsubjectMail] =useState(`${UserName} invites you to Thankward`);
const [textMail , settextMail] =useState(`Hi ${FirstName},
Join me on Thankward to explore an amazing experience of collaboration.
You'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.
You'll receive your password in a separate message.
Follow the link below to sign up with your email address: ${Email}
www.Thankward.com
See you soon!`);


useEffect(() => {
  // Update subjectMail whenever FirstName or LastName changes
  setsubjectMail(`${UserName} invites you to Thankward`);

  // Update textMail whenever FirstName or LastName changes
  settextMail(`Hi ${FirstName} ${LastName},
  Join me on Thankward to explore an amazing experience of collaboration.
  You'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.
  You'll receive your password in a separate message.
  Follow the link below to sign up with your email address: ${Email}
  www.Thankward.com
  See you soon!`);
}, [FirstName, LastName , Email , UserName]);

const verifyEmail = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      alert('Please enter a valid email address.');
      return;
    
    }
    const doId = '0';
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

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/DIO/dioData/${userId}`)
      .then((res) => {
        const formattedData = res.data.map(item => ({
          id: item.id,
          name: item.nom_do,
          description: item.do_description,
          type: item.type,
          id_ceo: item.id_ceo,
          do_creator: {
            name: item.do_creator_name,
            first_name: item.do_creator_first_name
          },
          member: {
            name: item.member_name,
            email: item.member_email,
            first_name: item.member_first_name,
            phone: item.member_phone,
            address: item.member_adresse
          }
        }));
        console.log(formattedData);

      })
      .catch(error => {
        console.error("Error fetching DIO data:", error);
      });
  }, []);

const handleSponsorize = () => {
  const password = '123456'
  const first_connection = '1'
  const sponsored = '1'
  const userData = { FirstName,LastName, Email, password,first_connection, sponsored,UserNameId,subjectMail,textMail};

  fetch(process.env.REACT_APP_BACKEND_URL + "/CreateSponsorizeDO/sponsorize", {
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


return (
  <div className="App">
    <Sidebar />
    <div className="main-content">
    <Wallet   
            setShowBCTPopUp ={setShowBCTPopUp}
            setShowThanksPopUp ={setShowThanksPopUp}
            setShowCashPopUp = {setShowCashPopUp}
            insideDO={false}
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
      <div className='actions_createdo'>
        { currentQuestion === 0 ? (
          <>
        <p className="create-do">Empower friend build a Digital Organization to achieve important<br></br>goals is admirable.<br></br>Plus, there are rewards for your effort!</p>
        <div className="explain-do">
            <div style={{fontFamily:'Kumbh Sans' ,fontSize :'3vh' ,fontWeight :'700',marginLeft:'2vw',marginTop:'1vh'}}>In the D.O. your friend is building:</div>
            <div style={{fontFamily:'Kumbh Sans' ,marginLeft:'2vw'}}>For every 100 Thanks your friend earns, you receive 5 Thanks.<br></br>Each time your friend’s team accumulates 10k verified Thanks, you earn 10 Thanks.<br></br><br></br><br></br></div>
            <div style={{fontFamily:'Kumbh Sans' ,fontSize :'3vh',fontWeight :'700',marginLeft:'2vw'}}>From MKIF, the company behind Thankward:</div>
            <div style={{fontFamily:'Kumbh Sans' ,marginLeft:'2vw'}} >When your friend’s D.O. is active, you earn 1 Thanks.<br></br>
            Each time your friend’s team accumulates 10k verified Thanks, you earn 1 Thanks.<br></br>
            You receive a special bonus of 10 Thanks whenever your friend’s team reaches 100k verified Thanks.<br></br></div>
        </div>
        <div style={{display:'flow' , marginTop:'0vh'}} className='email-create-do'>
        <input   
            style={{marginLeft:'3vw', width:'20vw',fontFamily:"Kumbh Sans", height:'6vh' ,marginRight:'2vw'} }
            placeholder="D.O. Creator’s email please"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}>
            </input>
        <button  className='start-create-do' onClick={verifyEmail} >Start</button>
        </div>
        </>
          ): currentQuestion === 1 ? ( 
            <>
            <div style={{display:"flex",marginTop:'20vh'}}>
            <div style={{display:'flex'}} className='email-create-do'><div style={{marginRight:'1vh',marginTop:'3vh' , fontSize:'3vh'}}>Given Name</div>
            <input   
            style={{marginLeft:'3vw', width:'20vw',fontFamily:"Kumbh Sans"}}
            placeholder="Talent’s First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={FirstName}>
            </input>
            </div>
            <button style={{marginLeft:'10vw', marginTop:'5vh'  ,fontSize:'3vh'}} className='start-create-do' onClick={NextFirstname}>Next</button>
            </div>
          </>
          ): currentQuestion === 2 ? ( 
            <>
          <div style={{display:"flex",marginTop:'20vh'}}>
            <div style={{display:'flex'}} className='email-create-do'><div style={{marginRight:'1vh',marginTop:'3vh' , fontSize:'3vh'}}>Family Name</div>
            <input   
            style={{marginLeft:'3vw', width:'20vw',fontFamily:"Kumbh Sans"}}
            placeholder="Talent’s Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={LastName}>
            </input>
            </div>
            <button style={{marginLeft:'10vw', marginTop:'5vh'  ,fontSize:'3vh'}} className='start-create-do' onClick={NextLastname}>Next</button>
            </div>
            </>
          ): currentQuestion === 3 ? ( 
            <>
            <div className='notif-coopt' style={{display:'grid'}}>
            <div className='email-create-do' style={{marginRight:'35vw'}}>Object : </div>
            <textarea style={{width:'40vw' ,height:"7vh" ,marginBottom:'0vh'}}   
                      onChange={(e) => setsubjectMail(e.target.value)}
                      value={subjectMail}>
            </textarea>
            <div className='email-create-do' style={{marginRight:'35vw'}}>Message : </div>
            <textarea style={{width:"40vw" , height:'30vh'}} 
          onChange={(e) => settextMail(e.target.value)}
          value={textMail}
            ></textarea >
            <button style={{marginLeft:'14vw', marginTop:'5vh'  ,fontSize:'3vh'}} className='start-create-do' onClick={() => setCurrentQuestion(4)}>Send</button>
            </div>
            </>
          ) : currentQuestion === 4 ? ( 
            <>
            <div>
            <p  style={{ marginTop:'10vh'}} className="create-do">To conclude, communicate to {FirstName} his temporary password using the<br></br>method you usually do and remind him to check his emails:</p>
          <p className="create-do">Temporary password :<br></br> 123456</p>
          <Link to="/Homepage">
            <button style={{marginLeft:'25vw' , marginTop:'10vh'}} className='start-create-do' onClick={handleSponsorize} >Done</button>
            </Link>
             </div>
            </>
          ) :(
            <>
            <p className="create-do">Oups, you can’t earn Thanks !</p>
            <div className="explain-do">
                <div style={{fontFamily:'Kumbh Sans' ,fontSize :'3vh' ,fontWeight :'700',marginLeft:'2vw',marginTop:'1vh'}}>The email you provided already exists, so this person can start his own Digital</div>
                <div style={{fontFamily:'Kumbh Sans' ,fontSize :'3vh',fontWeight :'700',marginLeft:'2vw'}}>Organization when it's best for him,Thank you for thinking of him</div>
            </div>
            <div style={{display:'flow' , marginTop:'0vh'}} className='email-create-do'>
            <button  className='start-create-do' onClick= { () => window.location.reload()} >Close</button>
            </div>
            </>
          ) }
          </div>
    </div>

  </div>
  );
};


export default Sponsorize;
