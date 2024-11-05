import React, { useState, useEffect } from "react";
import { Link , useLocation} from "react-router-dom";
import "./Sidebarhomepage.css";

import logo from "../../images/thankward-logo.png";
const sponsored = localStorage.getItem("sponsored");
const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
   const path = location.pathname;
   setActiveSection(path);
 }, [location]);
  return (
  <div className="sidebarhome">

{/* Conditionally render links based on sponsored value */}
       {sponsored !== "1" && (
        <>
        <Link to="/Homepage" className={`sidebar-section-logo `} >
        <img className="logo" style={{ height: '32vh' , marginBottom :'-4vh' ,marginTop : '0'}} src={logo} alt="" />
         </Link>
          <Link
            to="/Homepage"
            className={`sidebar-section-link ${
              activeSection === "/Homepage" ? "active" : ""
            }`}
          >
            <span>My Digital Organizations (DO)</span>
          </Link>
          </>
          )}
        {sponsored === "1" && (
        <>
        <Link  className={`sidebar-section-logo `} >
        <img className="logo" style={{ height: '32vh' , marginBottom :'-4vh' ,marginTop : '0'}} src={logo} alt="" />
         </Link>
          <Link
            className={`sidebar-section-link ${
              activeSection === "/Homepage" ? "active" : ""
            }`}
          >
            <span>My Digital Organizations (DO)</span>
          </Link>
          </>
          )}
          <Link
            to="/CreateDO"
            className={`sidebar-section-link ${
              activeSection === "/CreateDO" ? "active" : ""
            }`}
          >
            <span>Create a new DO</span>
          </Link>

      {sponsored !== "1" && (
        <Link
          to="/Sponsorize"
          className={`sidebar-section-link ${
            activeSection === "/Sponsorize" ? "active" : ""
          }`}
        >
          <span>Sponsorize a DO Creator</span>
        </Link>
      )}
      {sponsored === "1" && (
        <Link
          className={`sidebar-section-link ${
            activeSection === "/Sponsorize" ? "active" : ""
          }`}
        >
          <span>Sponsorize a DO Creator</span>
        </Link>
      )}
    <button className="sidebar-section-link"><span>Discover DOs</span><span style={{marginLeft:'3.5vw',fontSize:'1vw'}} className="soon">Soon</span></button>
    <button className="sidebar-section-link"><span>Discover Talents</span><span style={{marginLeft:'1.7vw',fontSize:'1vw'}} className="soon">Soon</span></button>
    <Link to="/Myprofile" className={`sidebar-section-link ${activeSection === "/Myprofile" ? 'active' : ''}`} >
     <span>Need help</span> 
    </Link>
  </div>
  )
};

export default Sidebar;
