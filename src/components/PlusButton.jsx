import React, { useState } from 'react';
import esc from "../images/plusIcon.png";

const PlusButton = ({ handleNewIdea }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <div
        className="plus-button"
        onClick={handleClick}
      >
        {clicked ? <img src={esc} alt="Close" /> : <p className="plus-symbol">+</p>}
      </div>
      {clicked && (
        <div className="popup-container">
          <ul className="popup-list">
            <button className="popup-item" onClick={handleNewIdea}>Add a new idea</button>
            <li className="popup-item">Add a new project</li>
            <li className="popup-item">Add a new workpackage</li>
            <li className="popup-item">Create a new organization</li>
          </ul>
        </div>
      )}
      <style jsx>{`
        .plus-button {
          font-family: 'Silka Mono', monospace;
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          right:1%;
          transform: translateX(-8px) translateY(156px);
          top: calc(50% + 8rem);
          height: 4rem;
          width: 4rem;
          background-color: black;
          border-radius: 50%;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          margin-right: 1rem;
          cursor: pointer;
        }

        .plus-symbol {
          color: white;
          font-size: 2rem;
          font-weight: 200;
        }

        .popup-container {
          width: 352px;
          height: 430px;
          background-color: black;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
          border-radius: 1.5rem;
          padding: 2.5rem;
          position: fixed;
          right: 0;
          transform: translateX(-145px) translateY(-210px);
          top: calc(40% + 10rem);
        }

        .popup-list {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }

        .popup-item {
          background-color: black;
          margin: 0.25rem;
          padding-left: 1.5rem;
          flex: 1;
          display: flex;
          justify-content: start;
          align-items: center;
          border-radius: 0.5rem;
          max-height: 6rem;
          border: 2px solid white;
          font-family: 'Silka Mono', monospace;
          font-size: 0.75rem;
          color: white;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default PlusButton;
