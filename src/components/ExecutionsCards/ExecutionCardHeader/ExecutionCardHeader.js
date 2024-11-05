import React from 'react';
import "./ExecutionCardHeader.css";
const divStyle = { // Taille de police plus grande
  fontWeight: 'bold',
  justifyContent :'center',
  alignItems: 'center'// Poids de police plus épais
};

const ExecutionCardHeader = ({performor, talent, status, countdown, achievementDate ,description ,personna , thanks ,deadline , expected_date ,date_rejected}) => {
  return (
    <div className="header-card">
    <div className="header-card-left">
      <div className="first-row-card">
        <div className="creator-card"><div>Creator :&nbsp;</div><div style={divStyle}> { talent}</div> </div>
        <div className="statut-card" style={{ backgroundColor: status === "In review" ? "#42eae6" : (status === "Achieved" ? "#119b98" : "#51b4bd") }}>Status :&nbsp;<div style={divStyle}>{status}</div></div>
        <div className="count-down-card"style={{ backgroundColor: status === "In review" ? "#42eae6" : (status === "Achieved" ? "#119b98" : "#51b4bd") }} >{status ==="In review"  ? ( 
        <p >Review Countdown <div style={divStyle}>{`${countdown.hours}H:${countdown.minutes}Mn`}</div></p>
        ) : status ==="Achieved"  ?(
        <p >Achievement Date : <div style={divStyle}>{achievementDate.substring(0,10)}</div></p>
        ):status ==="Open" ?(<p >Expected Date : <div style={divStyle}>{expected_date && expected_date.substring(0,10)}</div></p>
        ):status ==="Rejected" ?(<p >Date of Closing : <div style={divStyle}>{date_rejected && date_rejected.substring(0,10)}</div></p>
        ):(<p > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Due Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div style={divStyle}>{deadline && deadline.substring(0,10)}</div></p>)}
        </div>
      </div>
      <div className="second-row-card">
        <div>Execution description :&nbsp;<div style={divStyle}>{description}</div></div>
      </div>
    </div>
    <div className="header-card-right">
      <img className="profile-card" alt='creator' src={personna} />
      <div className="name-card"><div>Doer :&nbsp;</div> <div style={divStyle}> {performor} </div></div>
      <div className="thanks-score-card" style={{ backgroundColor: status === "In review" ? "#42eae6" : (status === "Achieved" ? "#119b98" : "#51b4bd") }}>
        {status ==="In review"  ? ( 
        <p>Thanks :&nbsp;<div style={divStyle}> Not Yet</div></p>
        ) : status ==="Achieved"  ?(
        <p>Thanks :&nbsp;<div style={divStyle}>{thanks}</div> </p>
        ):(<p>Thanks :&nbsp;<div style={divStyle}> Not Yet</div></p>)}
      </div>
    </div>
  </div>
  );
};

export default ExecutionCardHeader;
