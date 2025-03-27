import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/svg 1.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>Home</li>
        <li>Learn</li>
        <li>Take Action</li>
        <li className="active">About</li>
      </ul>
      <div className="buttons">
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
