import React from "react";
import "../Styles/NavBar.css";
import SarthakLogo from "../ASSETS/Sarthak.png";

function NavBar() {
  return (
    <div className="NavBar">
      <img src={SarthakLogo} alt="SarthakLogo" className="Logo" />
      <ul className="CenterNav">
        <li>Home</li>
        <li>About</li>
        <li>Facilities</li>
        <li>Contact</li>
        <li>Location</li>
      </ul>
    </div>
  );
}

export default NavBar;
