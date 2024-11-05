import React from "react";
import "./Wallet.css";
import logoOut from "../../images/log-out.png";
import { useEffect, useRef,useState } from 'react';
import axios from 'axios';




 const Wallet = ({
  setShowBCTPopUp,
  setShowThanksPopUp,
  setShowCashPopUp,
  insideDO
}) => {

  const popUpRef = useRef(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const userId = localStorage.getItem('userId'); // Récupère le userId depuis le localStorage
  const [totalThanks, setTotalThanks] = useState(0);
  const IdDO = localStorage.getItem('DOId');
  const do_ids =localStorage.getItem('do_ids');

  const handleClick = () => {
    setShowPopUp(true);
  };



  const handleClickNo = () => {
    // Handle action when "Not Yet" button is clicked
    setShowPopUp(false);
  };

  const handleClickYes = () => {
    // Handle action when "He deserves Thanks!" button is clicked
    window.location.href = "/login";
    setShowPopUp(false);
    // You can add additional logic here
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowPopUp(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopUp]);

useEffect(() => {
  const fetchTotalThanks = async () => {
    try {
      let response;
      if (insideDO && userId && IdDO) {
        response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/thanks/${userId}/${IdDO}`);
      } else if (!insideDO && userId) {
        response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/thanks/${userId}`);
      }
      if (response) {
        setTotalThanks(response.data.totalThanks);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des thanks depuis le backend', error);
    }
  };

  fetchTotalThanks(); // Appelle la fonction
}, [userId, IdDO, do_ids, insideDO]);


  const BCTInfo = () => {
    setShowBCTPopUp(true);
};
  const ThanksInfo = () => {
      setShowThanksPopUp(true);
  };
  const CashInfo = () => {
    setShowCashPopUp(true);
};

  return (
  <div className="wallet-list">
  <div >
      <div  className="row-container-above">
          <button className="row-item-above" onClick={() => BCTInfo(true)} >My B.C.Ts  </button>
          <button className="row-item-above" onClick={() => ThanksInfo(true)} style={{backgroundColor:'#119b98'}} > My Thanks </button>
          <button className="row-item-above" onClick={() => CashInfo(true)}>My Cash</button>
      </div>
      <div className="row-container">
              <div className="row-item" style={{color:'red'}}>Not Yet </div>
              <div className="row-item" style={{backgroundColor:'#119b98'}}> {totalThanks} </div>
              <div className="row-item" style={{color:'red'}}>Not Yet</div>
          </div>
  </div>
  <div>
  <button className="arrow-button" onClick={handleClick}><img style={{height:'5.5vh',width:'2.5vw' ,marginTop:'2vh'}} alt="" src={logoOut}/></button>
  {showPopUp && (
        <div className="overlay">
          <div ref={popUpRef} className="submition-pop-up-work-peerreview">
            <div className="input-circle">
              <div className="span">
                <h1 style={{ wordWrap: 'break-word', fontFamily: 'Kumbh Sans', fontSize: '2.2vw' }}>
                  Are you sure want to log out?
                </h1>
              </div>
            </div>
            <div className="container-button-ceo">
              <button className="button1" onClick={handleClickNo}>
                No
              </button>
              <button className="button3" onClick={handleClickYes}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
  </div>
  </div>
   );
 };

export default Wallet;