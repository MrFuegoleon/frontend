import React, { useEffect, useState } from "react";
import PlusButton from "./PlusButton";
import heart from '../images/gem.png';
import coin from '../images/coinIcon.png';
import action from '../images/pieChartIcon.png';

// Main sidebar component
const FixedSidebar = ({ handleNewIdea,userScore }) => {
    // State variables
    const [animatedThanks, setAnimatedThanks] = useState(0);
    console.log('score',userScore);
    return (
        <>
            {/* Sidebar container */}
            <div className="fixed-sidebar">
                {/* Heart icon for thanks */}
                <img className="icon" alt="Thanks" src={heart} />
                {/* Displays animated thanks count */}
                <p className="info-text">
                    {userScore} <br />
                    <span className="sub-text">THANKS</span>
                </p>
                {/* Coin icon for cash display */}
                <img className="icon" alt="Cash" src={coin} />
                {/* Displays cash count */}
                <p className="info-text">
                    1200 <br />
                    <span className="sub-text">CASH</span>
                </p>
                {/* Action icon for BCT count */}
                <img className="icon" alt="BCT" src={action} />
                {/* Displays BCT count */}
                <p className="info-text">
                    12<br />
                    <span className="sub-text">ACTIONS</span>
                </p>
            </div>
            {/* Renders PlusButton component */}
            <PlusButton 
                handleNewIdea={handleNewIdea} // Pass handleNewIdea as a prop
            />

            {/* Inline styles in JSX */}
            <style jsx>{`
                .fixed-sidebar {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: fixed;
                    top: 50%;
                    right: 2.2%;
                    transform: translateY(-16.67%);
                    height: 290px;
                    width: 3rem;
                    background-color: black;
                    border-radius: 2rem;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
                    padding: 1rem;
                }

                .icon {
                    width: 2.5rem;
                    height: 2.5rem;
                    margin: 0;
                    margin-bottom:0px;
                }

                .info-text {
                    font-family: 'Silka Mono', monospace;
                    color: white;
                    font-size: 0.85rem;
                    text-align: center;
                }

                .sub-text {
                    color: #94A3B8;
                    font-weight: 200;
                    font-size: 0.625rem;
                }

                .stars-container {
                    position: absolute;
                    display: flex;
                    flex-wrap: wrap;
                    height: 5rem;
                    width: 5rem;
                    justify-content: center;
                    align-items: center;
                    margin-top: 3rem;
                    pointer-events: none;
                }

            `}</style>
        </>
    );
};

export default FixedSidebar;
