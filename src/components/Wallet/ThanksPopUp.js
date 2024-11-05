import {  useEffect, useRef } from "react";
import "./Wallet.css";

const ThanksPopUp = ({
  setShowThanksPopUp,
}) => {



  const popUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowThanksPopUp(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowThanksPopUp]);




  return (
    <div ref={popUpRef} style={{padding:'3vh' ,height:'77vh'}} className="thanks-pop-up">
    <div style={{fontFamily:'Kumbh Sans' ,fontSize :'2.7vh' ,fontWeight :'700',marginLeft:'2vw',marginTop:'0vh'}}>The "Thanks" concept in simple terms</div>
    <div style={{fontFamily:'Kumbh Sans' ,fontSize :'2.2vh',marginLeft:'2vw'}}>1. Recognizes and values your contributions<br></br>2. It's built on principles of universality, fairness, and freedom<br></br>3. Offers a pathway to reward your engagement with prosperity<br></br><br></br></div>
    <div style={{fontFamily:'Kumbh Sans' ,fontSize :'2.2vh',fontWeight :'700',marginLeft:'2vw'}}>Moreover</div>
    <div style={{fontFamily:'Kumbh Sans' ,fontSize :'2.2vh',marginLeft:'2vw'}} >Thanks are a universal way to recognize and appreciate an individual's cognitive and behavioral contributions within a Digital Organization.<br></br><br></br>
    In concrete terms, you can earn Thanks in many ways by contributing to an organization's needs. More specifically, Thanks reward creativity,<br></br>
    execution, recruitment, leadership, and feedback — the 20% of human input that generates 80% of an organization's value.<br></br><br></br>
    It's also a key factor in determining Cash and BCT rewards within a "Digital Organization with Twin at Stake - DOTS.“<br></br><br></br>

    For now, MKIF has established its "Digital Organization with Twin at Stake - DOTS" and offers you the chance to earn Cash and BCT based on<br></br>
    your Thanks.<br></br><br></br>
    Invite your friends and quickly earn Thanks from MKIF.<br></br><br></br>
    You can also earn more MKIF Thanks by joining as a Talent, with a stake of 10% in MKIF's capital and unlimited Cash based on merit!<br></br><br></br>

    Send your resume along with 2 or 3 sentences about your potential contributions to: <a href="mailto:talent@thankward.com">talent@thankward.com</a><br></br><br></br>
    Soon, the Thankward model will be available to all organizations to reward their Talents in BCT and Cash based on their individual Thanks.
    </div>
    </div>
  );
};

export default ThanksPopUp;