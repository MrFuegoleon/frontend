import {  useEffect, useRef } from "react";
import "./Wallet.css";

const BCTPopUp = ({
  setShowBCTPopUp,
}) => {



  const popUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowBCTPopUp(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowBCTPopUp]);




  return (
    <div ref={popUpRef} className="thanks-pop-up">
    <div style={{fontFamily:'Kumbh Sans' ,fontSize :'2.6vh' ,fontWeight :'700',marginLeft:'2vw',marginTop:'0vh'}}>The “BCT" concept in simple terms</div>
    <div style={{fontFamily:'Kumbh Sans' ,fontSize :'2.15vh',marginLeft:'2vw'}}>1. Easily become a partner in your company's success<br></br>2. Guaranteed, liquid, and achieved through talent<br></br>3. Bold, smart, and set to make history.<br></br><br></br></div>
    <div style={{fontFamily:'Kumbh Sans' ,fontSize :'2.15vh',fontWeight :'700',marginLeft:'2vw'}}>Moreover</div>
    <div style={{fontFamily:'Kumbh Sans' ,fontSize :'2.15vh',marginLeft:'2vw'}} >Backed Cognition Token (BCT) represents a stake in a company that operates under the "Digital Organization with Twin at Stake - DOTS" model. It's a way of<br></br>
    owning a piece of the company's future, with the BCT linked to the company's capital and financial performance. By holding BCT, you benefit from the<br></br>
    company's growth through a unique system. This financial stake comes on top of the Cash you receive as a reward for your contributions.<br></br>
    Essentially, the company is funded through this innovative model, combining direct financial rewards with equity-like tokens.<br></br><br></br>

    Here’s a straightforward example:<br></br>
    •You've just earned your first Thanks from MKIF, the creator of Thankward.<br></br>
    •You can earn more MKIF Thanks by referring friends who create or join Digital Organizations - DOs.<br></br>
    •Once you have enough Thanks, you'll receive your first MKIF BCT.<br></br>
    •To issue BCT, MKIF has secured 5% of its capital with a Foundation.<br></br>
    •Each of your BCTs starts with a value of €10.<br></br>
    •MKIF is committed to buying them back:<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• After a 5-year vesting period, if you request it, for €10 per BCT.<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• If a major company buys MKIF in 3 years and the value of the secured capital increases 300-fold, each BCT could be worth €3000.<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• In the near future, a BCT Exchange will allow you to sell them anytime to investors at a mutually agreeable price.<br></br><br></br>
    Currently, only MKIF has established its "Digital Organization with Twin at Stake - DOTS" and offers BCT based on your Thanks.<br></br><br></br>
    Invite your friends to take advantage of this, as the number of BCT available is limited!<br></br><br></br>
    You can earn additional MKIF BCT by joining as Talent, with a further 10% stake in MKIF's capital. Here again, the number of BCT is limited.<br></br>
    Send your resume along with 2 or 3 sentences about your potential contributions to: <a href="mailto:talent@thankward.com">talent@thankward.com</a><br></br><br></br>
    Soon, the Thankward model will be offered to all organizations to provide their own BCT to their Talents.
    </div>
    </div>
  );
};

export default BCTPopUp;