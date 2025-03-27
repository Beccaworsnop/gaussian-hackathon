import React from "react";
import logo from "../assets/svg.svg";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo } alt="Logo" className="logo" />
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">Learn</a>
        <a href="/">Take Action</a>
        <a href="/">Resources</a>
        <a href="/">About</a>
      </div>
      <div className="auth-buttons">
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
