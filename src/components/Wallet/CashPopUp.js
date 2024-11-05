import {  useEffect, useRef } from "react";
import "./Wallet.css";

const CashPopUp = ({
  setShowCashPopUp,
}) => {



  const popUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowCashPopUp(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowCashPopUp]);




  return (
    <div ref={popUpRef} className="thanks-pop-up">
    <div style={{fontFamily:'Kumbh Sans' ,fontSize :'2.6vh' ,fontWeight :'700',marginLeft:'2vw',marginTop:'0vh'}}>The “Cash" concept in simple terms</div>
    <div style={{fontFamily:'Kumbh Sans' ,fontSize :'2.15vh',marginLeft:'2vw'}}>1. Merit-based revenue sharing system<br></br>2. Allows a company to pay what it can, when it can<br></br>3. But turns you into a lifelong income earner<br></br><br></br></div>
    <div style={{fontFamily:'Kumbh Sans' ,fontSize :'2.15vh',fontWeight :'700',marginLeft:'2vw'}}>Moreover</div>
    <div style={{fontFamily:'Kumbh Sans' ,fontSize :'2.15vh',marginLeft:'2vw'}} >When you earn Thanks in a Digital Organization with Twin at Stake - DOTS, you receive a monetary reward that accumulates over time. This reward is<br></br>
    ongoing for the life of the DOTS, calculated each month based on available funds and your merit, and it adds to the BCT you also earn through your<br></br>
    Thanks.<br></br><br></br>
    Here’s a simple explanation:<br></br><br></br>

    • You've earned your first Thanks from the MKIF organization, which created Thankward.<br></br>
    • You can earn more Thanks from MKIF by referring friends who create or join Digital Organizations - DOs.<br></br>
    • At the start of each month, MKIF commits a certain amount of Cash to be distributed among those holding Thanks and BCT of its DOTS - Thankward. If<br></br>
    &nbsp;&nbsp;&nbsp;there's no money available, the amount is zero; otherwise, the potential reward is substantial.<br></br>
    • The CEO of MKIF's compensation formula is the same as yours. If the CEO receives Cash, all holders of Thanks and BCT from DOTS - Thankward benefit<br></br>
    &nbsp;&nbsp;&nbsp;proportionally to their contributions.<br></br><br></br>
    Currently, MKIF is the only organization that has established its "Digital Organization with Twin at Stake - DOTS" and offers Cash based on your Thanks.<br></br><br></br>
    Invite your friends and simply earn unlimited Cash!<br></br><br></br>
    Another way to earn recurring and perpetual Cash from MKIF is to become a Talent of its DOTS Thankward!<br></br><br></br>
    Send your resume along with 2 or 3 sentences about your potential contributions to: <a href="mailto:talent@thankward.com">talent@thankward.com</a><br></br><br></br>
    Soon, the Thankward model will be available to all organizations to reward their Talents based on merit by sharing all available cash with them.
    </div>
    </div>
  );
};

export default CashPopUp;