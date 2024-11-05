import React, { useState, useEffect } from "react";
import { Link , useLocation} from "react-router-dom";
import "./Sidebar.css";


import logo from "../../images/thankward-logo.png";


function Sidebar  () {

   const [activeSection, setActiveSection] = useState(null);
   const location = useLocation();

   useEffect(() => {
    const path = location.pathname;
    setActiveSection(path);
  }, [location]);

   useEffect(() => {
       fetch('/api/content')
           .then(response => response.json())
           .catch(error => console.error('Error fetching data:', error));
   }, []);
   return (
  <div className="sidebar">

    <Link to="/Homepage" className={`sidebar-section-logo `} >
        <img className="logo" style={{ height: '32vh' , marginBottom :'2vh' ,marginTop : '0'}} src={logo} alt="" />
    </Link>
   <Link to="/DIO"   className={`sidebar-section-link ${activeSection === "/DIO" ? 'active' : ''}`}>
       {/*<img className="icon" src={message} />*/}<span>My Feed</span>
   </Link>
   <Link to="/ExecutionBoard"  className={`sidebar-section-link ${activeSection === "/ExecutionBoard" ? 'active' : ''}`}>
       {/*<img className="icon" src={story}  />*/}<span>Must & Might Actions</span>
   </Link>
   <Link to="/Coopt"  className={`sidebar-section-link ${activeSection === "/Co-opt" ? 'active' : ''}`}>
        {/*<img className="icon" src={poignee}  />*/}<span>Co-opt Talent</span>
    </Link>
    <Link   className={`sidebar-section-link `}>
        {/*<img className="icon" src={poignee}  />*/}<span>Share your Idea</span><div style={{marginLeft:'4vw'}} className="soon">Soon</div>
    </Link>
    <Link   className={`sidebar-section-link `}>
        {/*<img className="icon" src={poignee}  />*/}<span>Pilot your D.O.</span><div style={{marginLeft:'4.5vw'}} className="soon">Soon</div>
    </Link>
       <Link to="/Archives"  className={`sidebar-section-link ${activeSection === "/Archives" ? 'active' : ''}`}>
        {/*<img className="icon" src={archiver}  />*/}<span>My Achievements</span>
        </Link>

    <div className="sidebar-section espace"></div>
    <Link  to="/Myprofile" className={`sidebar-section-link `}>
        {/*<img className="icon" src={poignee}  />*/}<span>Need help</span>
    </Link>

  </div>
   )
};

export default Sidebar;
