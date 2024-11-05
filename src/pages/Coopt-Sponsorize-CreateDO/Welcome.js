import React, { useState , useEffect} from 'react';
import axios from "axios";


import { Link } from "react-router-dom";
import { useContext } from "react";
import { TasksContext } from "../TasksContext";
import './Welcome.css';


const Welcome = () => {


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const Name = localStorage.getItem("userName");
  const firstName =localStorage.getItem("firstName");
  const email =localStorage.getItem("email");
  const userId = localStorage.getItem("userId")
  const do_id = localStorage.getItem("do_ids")

  const [Email, setEmail] = useState(`${email}`);
  const [FirstName, setFirstName] = useState(`${firstName}`);
  const [LastName, setLastName] = useState(`${Name}`);
  const [Password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [date, setdate] = useState("");
  const [country, setcountry] = useState("");
  const [idDO, setIdDO] = useState("");
  const [Docreator, setDocreator] = useState("");
  const [sponsored, setSponsored] = useState("");


const UserName = localStorage.getItem("userName");
const CeoDoId = localStorage.getItem("userId")



const [descriptionDO, setDescriptionDO] = useState("");
const [nameDO, setNameDO] = useState("");
const [typeActivityDO, setTypeActivityDO] = useState("");
const [linkDO,setLinkDO] = useState("");
const [keywordsDO,setKeywordsDO] = useState("");
const [makeitbetterDO,setMakeitbetterDO] = useState("");

const [idDOcreated, setIdDOcreated] = useState("");

const [subjectMail ,setsubjectMail] =useState(`${UserName} invites you to Thankward`);
const [textMail , settextMail] =useState(`Hi ${FirstName},
Join me on Thankward to explore an amazing experience of collaboration.
You'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.
You'll receive your password in a separate message.
Follow the link below to sign up with your email address: ${Email}
www.thanksandshare.com
See you soon!`);

const [subjectMailexist ,setsubjectMailexist] =useState(`${UserName} invites you to ${nameDO}`);
const [textMailexist , settextMailexist] =useState(`Hi ${FirstName},
Join me at "${nameDO}," an exceptional Digital Organization where you can thrive in a great
team and contribute to an exciting project.
See you soon!"
Achraf
www.thanksandshare.com`);


useEffect(() => {
  // Update subjectMail whenever FirstName or LastName changes
  setsubjectMail(`${UserName} invites you to Thankward`);
  setsubjectMailexist(`${UserName} invites you to ${nameDO}`);

  // Update textMail whenever FirstName or LastName changes
  settextMail(`Hi ${FirstName} ${LastName},
  Join me on Thankward to explore an amazing experience of collaboration.
  You'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.
  You'll receive your password in a separate message.
  Follow the link below to sign up with your email address: ${Email}
  www.thanksandshare.com
  See you soon!`);
  settextMailexist(`Hi ${FirstName},
  Join me at "${nameDO}," an exceptional Digital Organization where you can thrive in a great
  team and contribute to an exciting project.
  See you soon!"
  www.thanksandshare.com`)
}, [FirstName, LastName, Email, nameDO , UserName]);

  const { selectDioId } = useContext(TasksContext);
  const handleDIOClick = (dioId) => {
    selectDioId(dioId);
  };


  const Next = () => {
    // Check if givenName is empty
    if (FirstName.trim() === '' || LastName.trim() === '') {
      alert('Please enter a valid First Name and Last Name .');
      return;
    }
    setCurrentQuestion(1);
  };

  const VerifyOldPassword = () => {
    // Check if givenName is empty
    if (Password.trim() !== '123456') {
      alert('Invalid password.');
      return;
    }
    setCurrentQuestion(2);
  };

  const VerifyPassword = () => {
    // Check if givenName is empty
    if (newPassword.trim() !== confirmPassword.trim()) {
      alert('Invalid password.');
      return;
    }
    setCurrentQuestion(4);
  };
  const Nextbirthday = () => {
    // Check if givenName is empty
    if (date.trim() === '') {
      alert('Please kindly enter your birthday.');
      return;
    }
    setCurrentQuestion(5);
  };
  const NextCountry = () => {
    // Check if givenName is empty
    if (country.trim() === '') {
      alert('Please kindly enter your adresse.');
      return;
    }
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/cooptTalent/infoCoopt?userId=${userId}`)
    .then(response => {
      const data = response.data;
      setIdDO(data.idDO);
      setDocreator(data[0].Docreator);
      setSponsored(data[0].sponsored);
      console.log(data);
      console.log(data[0].sponsored)
      console.log(data.idDO)

    })
    .catch(error => console.error('Error fetching data:', error));
    setCurrentQuestion(6);
  };


console.log(sponsored)

  const handleconfirmeCoopt = () => {

    const first_connection = '0'
    const userData = {userId, FirstName,LastName, Email, newPassword,first_connection,date,country};

    fetch(process.env.REACT_APP_BACKEND_URL + "/cooptTalent/api/updatecoopt", {
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
      localStorage.setItem("DOId", idDO);
      handleDIOClick(do_id)
  };
const startCreationDO = () => {

  const first_connection = '0'
  const userData = {userId, FirstName,LastName, Email, newPassword,first_connection,date,country};

  fetch(process.env.REACT_APP_BACKEND_URL + "/cooptTalent/api/updatecoopt", {
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
}

  const DescribeDO = () => {
    // Check if givenName is empty
    if (descriptionDO.trim() === '') {
      alert('Please describe your D.O.’s activity.');
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
    window.history.pushState({ question: currentQuestion + 1 }, '');
  };
  
  const NameDO = () => {
    // Check if givenName is empty
    if (nameDO.trim() === '') {
      alert('Please give a name for your D.O.');
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
    window.history.pushState({ question: currentQuestion + 1 }, '');
  }
  
  const NonProfit = () =>{
    setTypeActivityDO('NonProfit');
    setCurrentQuestion(currentQuestion + 1);
    window.history.pushState({ question: currentQuestion + 1 }, '');
  }
  const Profit = () =>{
    setTypeActivityDO('Profit');
    setCurrentQuestion(currentQuestion + 1);
    window.history.pushState({ question: currentQuestion + 1 }, '');
  }
  const Academic = () =>{
    setTypeActivityDO('Academic');
    setCurrentQuestion(currentQuestion + 1);
    window.history.pushState({ question: currentQuestion + 1 }, '');
  }
  
  const LinkDO = () =>{
    setCurrentQuestion(currentQuestion + 1);
    window.history.pushState({ question: currentQuestion + 1 }, '');
  }
  
  const KeywordsDO = () =>{
    setCurrentQuestion(currentQuestion + 1);
    window.history.pushState({ question: currentQuestion + 1 }, '');
  }
  
  const Makeitbetter = () =>{
    setCurrentQuestion(currentQuestion + 1);
    window.history.pushState({ question: currentQuestion + 1 }, '');
  }
  
  useEffect(() => {
    // Update subjectMail whenever FirstName or LastName changes
    setsubjectMail(`${UserName} invites you to Thankward`);
  
    // Update textMail whenever FirstName or LastName changes
    settextMail(`Hi ${FirstName} ${LastName},
    Join me on Thankward to explore an amazing experience of collaboration.
    You'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.
    You'll receive your password in a separate message.
    Follow the link below to sign up with your email address: ${Email}
    www.thanksandshare.com
    See you soon!`);
  }, [FirstName, LastName , Email , UserName]);
  
  

  const verifyEmail = () => {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(Email)) {
        alert('Please enter a valid email address.');
        return;
      }
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/CreateSponsorizeDO/infoDOcreated?userId=${CeoDoId}&nameDo=${nameDO}`)
      .then(response => {
        const data = response.data;
        console.log(data);
        // Update idDO and Docreator based on the fetched data
        if (data && data.length > 0) {
          // Update idDO and Docreator based on the fetched data
          setIdDOcreated(data[0].id);
          console.log(2);
        } else {
          console.error('No data received from the server');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  
      const doId = idDOcreated;
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
            setCurrentQuestion(20);
            window.history.pushState({ question: 20 }, '');
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
  
  
  
      // If email is valid, proceed to the next question
      setCurrentQuestion(currentQuestion + 1);
      window.history.pushState({ question: currentQuestion + 1 }, '');
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
    const NextNotification = () => {
      setCurrentQuestion(currentQuestion + 1);
      window.history.pushState({ question: currentQuestion + 1 }, '');
    }
  
  
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
  
  console.log(idDOcreated)
  
  const handleCreateDO = () => {
    const userData = {nameDO,descriptionDO, CeoDoId , typeActivityDO, linkDO,keywordsDO,makeitbetterDO};
    fetch(process.env.REACT_APP_BACKEND_URL + "/CreateSponsorizeDO/createDO", {
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
        console.error("Erreur lors de la creation de DO :", error);
      });
  
  
      setCurrentQuestion(currentQuestion + 1);
      window.history.pushState({ question: currentQuestion + 1 }, '');
  };
  
  const handleCoopt = () => {
    const UserNameId = localStorage.getItem("userId")
    const password = '123456'
    const id_do = idDOcreated
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
      setCurrentQuestion(21);
      window.history.pushState({ question: 21}, '');
  };

  const CooptExsistedMember = () => {
    const id_do = idDOcreated;
    const UserNameId = localStorage.getItem("userId");
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
  
      setCurrentQuestion(currentQuestion + 1);
      window.history.pushState({ question: currentQuestion + 1 }, '');
  }
  const Cooptagain = () => { 
    const id_membre =  CeoDoId;
    const id_do = idDOcreated;
    const userData_ = {id_membre,id_do};
    fetch(process.env.REACT_APP_BACKEND_URL + "/CreateSponsorizeDO/addDOtoCreator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData_),
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
        localStorage.setItem("do_ids",data.do_ids);
  
      })
    }
    })
      .catch((error) => {
        console.error("Erreur lors de la creation de DO :", error);
      });
    setCurrentQuestion(15);
    window.history.pushState({ question: 15 }, '');
  
  }





    return (
    <div className="container">
        <div className="main-content">
        <div className='actions_coopt'>
        { currentQuestion === 0 ? (
          <>
          <div style={{marginTop:'8vh'}}>
        <p className="welcome-text">Welcome to Thankward.<br></br>To join {Docreator} complete your profile<br></br> and you’ll receive your first Thanks</p>
        </div>
        <div style={{display:"grid"}}>
        <div style={{display:"flex"}} className='email-coopt'>Given Name
        <input  
        style={{marginLeft:'15.2vw'}}
        onChange={(e) => setFirstName(e.target.value)}
        value={FirstName}>
         </input>
         </div>
         <div style={{display:"flex"}} className='email-coopt'>Family Name
        <input  
        onChange={(e) => setLastName(e.target.value)}
        value={LastName}>
         </input>
         </div>
         <div style={{display:"flex"}} className='email-coopt'>Email
        <input  
        style={{marginLeft:'19vw' ,backgroundColor:'gray'}}
        readOnly
        value={Email}>
         </input>
         </div>
         <div style={{display : 'flex'}}>
        <button className='delete-my-profile' style={{fontSize:'3.5vh',height:'10vh',width:'12vw',marginTop:'10vh'}} >Delete and exit</button>
        <button className='create-my-profile' onClick={Next} style={{fontSize:'3.5vh',height:'10vh',width:'12vw',marginTop:'10vh'}}>Create My profile</button>
        </div>
        </div>
        </>
        ): currentQuestion === 1 ? ( 
          <>        
        <p style={{marginTop :'10vh'}} className="welcome-text">Great !<br></br>Choose your password</p>
          <div style={{display:"flex",marginTop:'25vh'}}>
          <div style={{display:"flex"}} className='email-coopt'>Password you received
          <input  
          style={{color:'black', backgroundColor: 'white'}}
          type="password"
           onChange={(e) => setPassword(e.target.value)}
           value={Password}
          ></input>
          </div>
          <button className='next-button-coopt 'onClick={VerifyOldPassword}>Next</button>
          </div>
          </>
        ): currentQuestion === 2 ? ( 
          <>        
        <p style={{marginTop :'10vh'}} className="welcome-text">Great !<br></br>Choose your password</p>
          <div style={{display:"flex",marginTop:'25vh'}}>
          <div style={{display:"flex"}} className='email-coopt'>My new Password
          <input  
          style={{color:'black', backgroundColor: 'white'}}
           onChange={(e) => setnewPassword(e.target.value)}
           type="password"
           value={newPassword}
          ></input>
          </div>
          <button className='next-button-coopt 'onClick={() => setCurrentQuestion(3)}>Next</button>
          </div>
          </>
          ): currentQuestion === 3 ? ( 
            <>        
            <p style={{marginTop :'10vh'}} className="welcome-text">Great !<br></br>Choose your password</p>
              <div style={{display:"flex",marginTop:'25vh'}}>
              <div style={{display:"flex"}} className='email-coopt'>I confirm my new Password
              <input  
              style={{color:'black', backgroundColor: 'white'}}
               defaultValue="123456"
               onChange={(e) => setconfirmPassword(e.target.value)}
               value={confirmPassword}
               type="password"
              ></input>
              </div>
              <button className='next-button-coopt 'onClick={VerifyPassword}>Next</button>
              </div>
              </>
        ): currentQuestion === 4 ? ( 
          <>
        <p style={{marginTop :'10vh'}} className="welcome-text">Excellent !<br></br>Almost finished</p>
          <div style={{display:"flex",marginTop:'20vh'}}>
          <div className='email-coopt'>
          <div className="date-input-container">
          <label htmlFor="birthdate">Your birthday :</label>
          <input
          type="date"
          id="birthdate"
          name="birthdate"
          className="date-input"
          onChange={(e) => setdate(e.target.value)}
          value={date}
          max={new Date().toISOString().split("T")[0]}
         />
        </div>
          </div>
          <button style={{marginTop :'7vh'}} className='next-button-coopt' onClick={Nextbirthday}>Next</button>
          </div>
          </>
        ): currentQuestion === 5 ? (
          <>
            <p style={{ marginTop: '10vh' }} className="welcome-text">
              Thank you for your perseverance!<br></br>Finally
            </p>
            <div style={{ display: "flex", marginTop: '20vh' }}>
              <div className='email-coopt'>
                <div style={{ display: 'flex', marginTop: '5vh' }} className='email-coopt'> Your living country
                  <input
                    placeholder="Country"
                    onChange={(e) => setcountry(e.target.value)}
                    value={country}
                  ></input>
                </div>
              </div>
              <button className='create-my-profile' style={{ fontSize: '3.5vh', height: '10vh', width: '12vw', marginTop: '7vh' }} onClick={NextCountry}>I want my thanks</button>
            </div>
          </>
        ) : currentQuestion === 6  && sponsored === 0 ? (
          <>
            <div>
              <p style={{ marginTop: '20vh', fontSize: '5vh' }} className="coopt-text">Congratulations, You get your First Thanks!<br></br><br></br>Now, you can join Achraf and gain plenty of Thanks!</p>
              <Link to={`/Homepage`}>
                <button className='create-my-profile' style={{ marginRight: '15vw', fontSize: '3.5vh', height: '10vh', width: '12vw' }} onClick={handleconfirmeCoopt}>Come in</button>
              </Link>
            </div>
          </>
        ) : currentQuestion === 6 ?(
          <>
            <div>
              <p style={{ marginTop: '8vh', fontSize: '4vh' }} className="coopt-text">Congratulations, You get your First Thanks!<br></br><br></br>Now you can create your Digital Organization to achieve with your community !<br></br> what matters to you, together.<br></br>And yes, there are Rewards for your initiative !</p>
              <div className="explain-sponsorization">
            <div style={{fontFamily:'Kumbh Sans' ,fontSize :'3vh' ,fontWeight :'700',marginLeft:'2vw',marginTop:'1vh'}}>In the D.O. your friend is building:</div>
            <div style={{fontFamily:'Kumbh Sans' ,marginLeft:'2vw'}}>For every 100 Thanks your friend earns, you receive 5 Thanks.<br></br>Each time your friend’s team accumulates 10k verified Thanks, you earn 10 Thanks.<br></br><br></br><br></br></div>
            <div style={{fontFamily:'Kumbh Sans' ,fontSize :'3vh',fontWeight :'700',marginLeft:'2vw'}}>From MKIF, the company behind Thankward:</div>
            <div style={{fontFamily:'Kumbh Sans' ,marginLeft:'2vw'}} >When your friend’s D.O. is active, you earn 1 Thanks.<br></br>
            Each time your friend’s team accumulates 10k verified Thanks, you earn 1 Thanks.<br></br>
            You receive a special bonus of 100 Thanks whenever your friend’s team reaches 100k verified Thanks.<br></br></div>
            </div>
            <Link to={`/CreateDO`}>
                <button className='create-my-profile' style={{ marginRight: '11vw', fontSize: '3.5vh', height: '10vh', width: '12vw' }} onClick={startCreationDO}>Come in</button>
            </Link>
            </div>
          </>
        ) : currentQuestion === 7 ? ( 
          <>
          <p className="create-do" style={{marginTop:'20vh'}}>First, describe your D.O.’s activity and purpose</p>
          <textarea className="what-will-you-do"  placeholder="What will you do and why ?"
                  onChange={(e) => setDescriptionDO(e.target.value)}
                  value={descriptionDO}>
          </textarea>
          <button  className='create-my-profile'style={{marginBottom:'-15vh' ,marginRight:'15vw'}} onClick={DescribeDO} >Next</button>
          </>
      ): currentQuestion === 8 ? ( 
          <>
          <p className="create-do" style={{marginTop:'20vh'}}>What Is the name of your Digital Organization?</p>
          <input style={{height:'10vh' ,width:'50vw' , marginRight:'10vw'}} className="what-will-you-do" 
          onChange={(e) => setNameDO(e.target.value)}
          value={nameDO}
          placeholder="Choose your D.O.’sTitle">
          </input>
          <button  className='create-my-profile'style={{marginBottom:'-15vh' ,marginRight:'10vw'}} onClick={NameDO} >Next</button>
          </>
      ): currentQuestion === 9 ? ( 
          <>
          <p className="create-do" style={{marginTop:'20vh'}}>Who will Lead your D.O.?</p>
          <button style={{backgroundColor:'#71d0d9',marginRight:'10vw' , height:'30vh' ,width:'20vw'}}  className='create-my-profile'  onClick={() => setCurrentQuestion(10)} >I will do</button>
          <button style={{backgroundColor:'gray',marginRight:'10vw', height:'30vh' ,width:'20vw'}}  className='create-my-profile'  >Someone else<span style={{color:'red' , fontSize:'1.5vh' ,marginLeft:'1vw'}}>Soon</span></button>
          <p className="create-do"style={{marginTop:'10vh'}} >"You can soon make adjustments and refine your governance."</p>
          </>
      ): currentQuestion === 10 ? ( 
          <>
          <p className="create-do" style={{marginTop:'20vh'}}>For what type of activity are you creating this DO ?</p>
          <button style={{backgroundColor:'#71d0d9',marginRight:'10vw' , height:'30vh' ,width:'20vw'}}  className='create-my-profile' onClick={NonProfit} >Non-Profit</button>
          <button style={{backgroundColor:'#71d0d9',marginRight:'10vw' , height:'30vh' ,width:'20vw'}}  className='create-my-profile'  onClick={Profit} >Profit</button>
          <button style={{backgroundColor:'#71d0d9',marginRight:'10vw' , height:'30vh' ,width:'20vw'}}  className='create-my-profile' onClick={Academic} >Academic</button>
          </>
      ) : currentQuestion === 11 ?(
          <>
          <p className="create-do"style={{marginTop:'20vh'}}>Add a link to learn more about your D.O.</p>
          <input style={{height:'25vh',width:'50vw' , marginRight:'10vw'}} className="what-will-you-do"
          onChange={(e) => setLinkDO(e.target.value)}
          value={linkDO} 
          placeholder="Website,Pitch Deck on your cloud...">
          </input>
          <button style={{backgroundColor:'#71d0d9',marginRight:'10vw' , height:'20vh' ,width:'20vw'}} className='create-my-profile' onClick={LinkDO} >Next</button>
          </>
      ) :currentQuestion === 12 ?(
          <>
          <p className="create-do"style={{marginTop:'20vh'}}>Keywords about your activity and needs</p>
          <input style={{height:'25vh',width:'50vw' , marginRight:'10vw'}} className="what-will-you-do" 
          onChange={(e) => setKeywordsDO(e.target.value)}
          value={keywordsDO}
          placeholder="Values, sector, activities...">
          </input>
          <button style={{backgroundColor:'#71d0d9',marginRight:'10vw'}} className='create-my-profile' onClick={KeywordsDO} >Next</button>
          </>
      ) :currentQuestion === 13 ?(
          <>
          <p className="create-do" style={{marginTop:'20vh'}}>What would it take to make it successful ?</p>
          <input style={{height:'30vh',width:'50vw' , marginRight:'10vw'}} className="what-will-you-do" 
          onChange={(e) => setMakeitbetterDO(e.target.value)}
          value={makeitbetterDO}
          placeholder="Talents, money, luck ☺...">
          </input>
          <button style={{backgroundColor:'#71d0d9',marginRight:'10vw'}} className='create-my-profile' onClick={Makeitbetter} >Next</button>
          </>
      ) :currentQuestion === 14 ?(
          <>
          <p className="create-do"style={{marginTop:'20vh'}}>Congratulations on creating your D.O.! {idDOcreated} Well done!<br></br>To make it active, recruit Talent to help achieve your goals.<br></br>And yes, there are Rewards for Co-opting Talent!</p>
          <div className="explain-do">
              <div style={{fontFamily:'Kumbh Sans' ,fontSize :'3vh' ,fontWeight :'700',marginLeft:'2vw',marginTop:'1vh'}}>In the D.O. for which you are co-opting:</div>
              <div style={{fontFamily:'Kumbh Sans' ,marginLeft:'2vw'}}>For every 100 Thanks your Co-opted Talent earns, you receive 5 Thanks.<br></br><br></br></div>
              <div style={{fontFamily:'Kumbh Sans' ,fontSize :'3vh',fontWeight :'700',marginLeft:'2vw'}}>From MKIF, the company behind Thankward:</div>
              <div style={{fontFamily:'Kumbh Sans' ,marginLeft:'2vw'}} >When your Co-opted Talent joins the first time, you earn 1 Thanks.<br></br>
              Each time your Co-opted Talent accumulates 1k verified Thanks; you earn 1 Thanks.<br></br>
              You receive a special bonus of 20 Thanks whenever your Co-opted Talent reaches 10k<br></br>
              verified Thanks.</div>
          </div>
          <button style={{backgroundColor:'#71d0d9',marginRight:'10vw'}} className='create-my-profile' onClick={handleCreateDO}>Start</button>
          </>
      ):currentQuestion === 15 ? (
        <>
        <p style={{marginBottom:'0vh',fontFamily:"Kumbh Sans",marginTop:'20vh'}} className="coopt-text">Co-opting Talents is an excellent idea; it boosts your Team and accelerate your success.<br></br> <br></br><br></br></p>
        <div style={{display:"flex",marginTop:'15vh'}}>
        <div style={{display:'flex'}} className='email-create-do'><div style={{marginRight:'1vh',marginTop:'1vh' , fontSize:'3vh'}}>Email</div>
        <input  
         placeholder="Talent’s email please"
         onChange={(e) => setEmail(e.target.value)}
         value={Email}
         style={{marginLeft:'10vw', width:'20vw',fontFamily:"Kumbh Sans"}}
        ></input>
        </div>
        <button style={{marginLeft:'7vw', marginTop:'5vh'  ,fontSize:'3vh' ,fontFamily:"Kumbh Sans"}} className='create-my-profile'onClick={verifyEmail}>Next</button>
        </div>
        </>
        ): currentQuestion === 16 ? ( 
          <>
        <div style={{display:"flex",marginTop:'40vh'}}>
          <div style={{display:'flex'}} className='email-create-do'><div style={{marginRight:'1vh',marginTop:'3vh' , fontSize:'3vh'}}>Given Name</div>
           <input  
           style={{marginLeft:'3vw', width:'20vw',fontFamily:"Kumbh Sans"}}
           placeholder="Talent’s First name please"
           onChange={(e) => setFirstName(e.target.value)}
           value={FirstName}
          ></input>
          </div>
          <button style={{marginLeft:'10vw', marginTop:'5vh'  ,fontSize:'3vh'}} className='start-create-do'onClick={NextFirstname}>Next</button>
          </div>
          </>
        ): currentQuestion === 17 ? ( 
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
        ): currentQuestion === 18 ? ( 
          <>
          <div className='notif-coopt' style={{display:'grid'}}>
          <div className='email-create-do' style={{marginRight:'35vw'}}>Object : </div>
          <textarea style={{width:'40vw' ,height:"7vh" ,marginBottom:'0vh'}}  
          onChange={(e) => setsubjectMail(e.target.value)}
          value={subjectMail}
           ></textarea>
          <div className='email-create-do' style={{marginRight:'35vw'}}>Message : </div>
          <textarea style={{width:"40vw" , height:'30vh'}} 
                   onChange={(e) => settextMail(e.target.value)}
                   value={textMail}
          ></textarea >
          <button style={{marginLeft:'14vw', marginTop:'5vh'  ,fontSize:'3vh'}} className='start-create-do' onClick={NextNotification}>Send</button>
          </div>
          </>
        ) : currentQuestion === 19 ? ( 
          <>
          <div>
          <p  style={{ marginTop:'10vh', fontFamily:"Kumbh Sans"}} className="coopt-text">To conclude, communicate to {FirstName} his temporary password using the<br></br>method you usually do and remind him to check his emails:</p>
        <p  style={{fontFamily:"Kumbh Sans"}} className="coopt-text">Temporary password :<br></br> 123456</p>
          <button style={{marginLeft:'19vw' , marginTop:'10vh'}} className='start-create-do' onClick={handleCoopt} >Done</button>
          </div>
          </>
        ) : currentQuestion ===20 ?(
          (
            <>
          <p style={{marginBottom:'0vh'}} className="create-do">Oups, you can’t earn Thanks from MKIF, but...<br></br> <br></br><br></br></p>
          <div className="explain-coopt">
                  <div style={{fontFamily:'Kumbh Sans' ,fontSize :'3vh' ,fontWeight :'700',marginLeft:'2vw',marginTop:'0vh'}}>The email you entered is already in use, meaning {FirstName} is already part of the<br></br>Thankward family<br></br><br></br></div>
                  <div style={{fontFamily:'Kumbh Sans' ,marginLeft:'2vw'}}>However, you can still earn Thanks from your D.O. if he agrees to join. Don't forget to send<br></br>him a personal message.<br></br></div>
              </div>
          <div style={{display:"flex"}}>
          <button style={{marginTop:'4vh' , marginRight:'5vw'}} className='start-create-do' onClick={CooptExsistedMember}>Close</button>
          </div>
          </>
          )
        ):(
          <>
          <p className="create-do">Do you want to co-opt other people you want collaborate with or<br></br>start Execution?</p>
          <button  className='start-create-do' onClick={Cooptagain} >Co-opt</button>
          <Link to="/DIO">
          <button  className='start-create-do' onClick={() => handleDIOClick(idDOcreated,nameDO)}  >Execution</button>
          </Link>
          </>
        )
      
        }
        
        </div>
        </div>
    </div>
    );
}

export default Welcome;