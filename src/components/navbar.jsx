import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="intro">
        <span>
          <img src={require("../../src/SiteLogo.png")} alt="logo" />
        </span>
        <p>Carbon Footprint Tracker</p>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about.jsx">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact.jsx">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
