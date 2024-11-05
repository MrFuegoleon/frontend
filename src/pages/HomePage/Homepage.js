import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Sidebar from "../../components/Sidebare/Sidebarhomepage";
import DIOList from "../../components/DOList/DIOList";
import Wallet from "../../components/Wallet/Wallet";

import ThanksPopUp from "../../components/Wallet/ThanksPopUp";
import BCTPopUp from "../../components/Wallet/B.C.TPopUp";
import CashPopUp from "../../components/Wallet/CashPopUp";
import axios from "axios";


const Homepage = () => {
const [dioData, setDioData] = useState([]);

const [showBCTPopUp, setShowBCTPopUp] = useState(false);
const [showThanksPopUp, setShowThanksPopUp] = useState(false);
const [showCashPopUp, setShowCashPopUp] = useState(false);


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
      setDioData(formattedData);
    })
    .catch(error => {
      console.error("Error fetching DIO data:", error);
    });
}, []); // Empty dependency array, runs once on component mount

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
      <h4 className="titre">My Digital Organizations (DO)</h4>
      <div className="diolist-container">
      <DIOList className="diolist" dioData={dioData} />
      </div>
    </div>
  </div>
  );
};


export default Homepage;
