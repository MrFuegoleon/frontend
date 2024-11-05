import React, { useState} from "react";
import "./Myprofile.css";
import Sidebar from "../../components/Sidebare/Sidebarhomepage";
import Wallet from "../../components/Wallet/Wallet";
import QrCode from '../../images/QR_code_community.png';
import ThanksPopUp from "../../components/Wallet/ThanksPopUp";
import BCTPopUp from "../../components/Wallet/B.C.TPopUp";
import CashPopUp from "../../components/Wallet/CashPopUp";


const Myprofile = () => {

const [showBCTPopUp, setShowBCTPopUp] = useState(false);
const [showThanksPopUp, setShowThanksPopUp] = useState(false);
const [showCashPopUp, setShowCashPopUp] = useState(false);

  const close = () => {
    window.location.href = "/Homepage";
    console.log('Le bouton a été cliqué !');
  };

  return (
        <div className="container">
        <Sidebar />
        <div className="main-content">
        <Wallet   
            setShowBCTPopUp ={setShowBCTPopUp}
            setShowThanksPopUp ={setShowThanksPopUp}
            setShowCashPopUp = {setShowCashPopUp}
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
        <div className='actions_coopt'style={{marginTop:'8vh', alignItems:'center', textAlign:'center',height:'70vh'}}>
        <div className="explain-coopt" style={{marginTop:'8vh', alignItems:'center', textAlign:'center' ,height:'70vh'}}>
                <div style={{fontFamily:'Kumbh Sans' ,fontSize :'4vh' ,fontWeight :'600',marginLeft:'2vw',marginTop:'0vh'}}>You can choose based on your preferences<br></br>to get help<br></br><br></br></div>
                <div style={{fontFamily:'Kumbh Sans' ,marginLeft:'2vw',fontWeight :'700'}}>Email the CEO<br></br><a href="mailto:ceo@thankward.com">ceo@thankward.com</a><br></br><br></br><br></br></div>
                <div style={{fontFamily:'Kumbh Sans' ,fontWeight :'700',marginLeft:'2vw'}}>DM or call the CEO<br></br><a href="tel:+33698235173">+336 98 23 51 73</a><br></br><br></br></div>
                <div style={{fontFamily:'Kumbh Sans' ,marginLeft:'2vw',fontWeight :'700'}}>Join us on WhatsApp<br></br>
                <a style={{marginBottom:'10vh'}} href="https://chat.whatsapp.com/G1qYVopjH71AMh9xlGYMHF" target="_blank" rel="noopener noreferrer">Thankward Community</a><img style={{marginLeft:'10vw' ,height:'10vh',width:'5vw'}} alt="" src={QrCode}/><br></br>
                </div>
        </div>
        <button style={{backgroundColor:'#71d0d9' ,marginRight:'12vw'}} className='create-my-profile' onClick={close} >Close</button>
            </div>
        </div>
    </div>
  );
};

export default Myprofile;