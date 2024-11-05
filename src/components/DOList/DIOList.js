import React from "react";
import { Link } from "react-router-dom";
import "./DIOList.css";
import { useContext } from "react";
import { TasksContext } from "../../pages/TasksContext";
import personna from '../../images/icones/personna.png';


const DIOList = ({ dioData }) => {
  const { selectDioId } = useContext(TasksContext);
  const membre_id = parseInt(localStorage.getItem('userId'), 10);
  const handleDIOClick = (dioId,doName,ceoId) => {
    selectDioId(dioId);
    localStorage.setItem("DOId", dioId);
    localStorage.setItem("DOName",doName);
    if (ceoId === membre_id){
      localStorage.setItem("isCEO", "1");
    } else {
      localStorage.setItem("isCEO", "0");
    }
  };
  
  return (
  <div className="dio-list">
    {dioData.map((dio, index) => (
      <div key={dio.id} className="dio-item">
        <div className="dio-text">
        <div className="type_do">{dio.type}</div>
          <div className="do_name"><h4>D.O. Name : {dio.name}</h4></div>
          <div className="do_description"><p>{dio.description}</p></div>
        </div>
        <div>

        <img className="photo_creator_do" alt="creatorDO" src={personna} />
          <div className="creator_do">Creator &nbsp;: {dio.do_creator.name}</div>
            <Link to={`/DIO`}>
              <button className="participate-button" onClick={() => handleDIOClick(dio.id,dio.name,dio.id_ceo)}>Come in</button>
            </Link>
        </div>
      </div>
    ))}
  </div>
  );
};

export default DIOList;
